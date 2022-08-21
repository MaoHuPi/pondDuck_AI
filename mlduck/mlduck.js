'use strict';

const ML_DIR_PATH = 'mlduck';
const ML_DEBUG_MODE = false;
const ML_EXECUTION_SPEED = 10; // 0 ~ 2

let code_duckRobot = `
/*
 * 2022 © MaoHuPi
 * https://blockly.games/pond-duck
 * 策略：追蹤敵人。但與目標、邊緣保持距離，避免碰撞傷害。
 */
function duckRobot(scanNum = 360, tuggleDistance = 20, autoSwim = false) {
    let n = scanNum, 
        d = tuggleDistance, 
        position2middleDeg = {
        '1,1': 45,
        '0,1': 135,
        '0,0': 225,
        '1,0': 295
    };
    function autoSwimStart(){
        let basicDeg = position2middleDeg[
            (getX() > 50 ? 1 : 0)+','+(getY() > 50 ? 1 : 0)
        ];
        let randomDeg = Math.random();
        for (let i = 0; i < 10; i++) {
            swim(basicDeg - 45/2 + randomDeg * 45 - 180);
        }
    }
    while (true) {
        let scanFlag = false;
        for (let i = 0; i < n; i++) {
            var x = getX(), 
                y = getY(), 
                padding = 5;
            if(x < padding || x > 100 - padding || y < padding || y > 100 - padding){
                stop();
                autoSwimStart();
            }
            let deg = 360 / n * i;
            let scanRequest = scan(deg);
            if (scanRequest < 70) {
                i -= 10;
                scanFlag = true;
                if (scanRequest > d) {
                    swim(deg);
                }
                else {
                    swim(deg - 180);
                }
                cannon(deg, scanRequest);
            }
        }
        if(autoSwim && !scanFlag){
            autoSwimStart();
        }
    }
}
duckRobot(360, 20, true);
`;

let code_mlDuck = `
const mlIdList = [];
`;

const mlIdList = [];
class mlBasic{
    // static idList = [];
    static getArg(args = {}, argName = '', defaultValue = false){
        return(argName in args ? args[argName] : defaultValue);
    }
    static randint(a, b){
        return(Math.floor(mlBasic.randfloat(a, b)));
    }
    static randfloat(a, b){
        var min = Math.min(a, b);
        var max = Math.max(a, b);
        return(min + Math.random()*(max - min));
    }
    static pick(list){
        return(list[mlBasic.randint(0, list.length - 1)]);
    }
    static randid(length = 10, range = [[48, 57], [65, 90], [97, 122]]){ // a~b 包含b
        let charCodeList = [];
        let output = undefined;
        for(let r of range){
            if(typeof r == 'object' && r.length > 0){
                var min = Math.min(...r);
                var max = Math.max(...r);
                for(let charCode = min; charCode <= max; charCode++){
                    charCodeList.push(charCode);
                }
            }
        }
        // while(output == undefined || (typeof output == 'string' && mlBasic.idList.indexOf(output) > -1)){
        while(output == undefined || (typeof output == 'string' && mlIdList.indexOf(output) > -1)){
            output = [];
            for(let i = 0; i < length; i++){
                output[i] = mlBasic.pick(charCodeList);
            }
            output = String.fromCharCode(...output);
        }
        // mlBasic.idList.push(output);
        mlIdList.push(output);
        return(output);
    }
    static sigmoid(x, k = 0.2){
        return 1 / (1 + Math.exp(-x/k));
    }
    static count(array = [], value = ''){
        return(array.filter(v => v == value).length);
    }
    static time(){
        // return(new Date().getTime());
        return(performance.now());
    }
}
class mlPoint{
    constructor(args = {}){
        this.id = mlBasic.randid(5);
        this.activation = mlBasic.getArg(args, 'activation', mlBasic.sigmoid);
        this.outputs = mlBasic.getArg(args, 'output', []);
        this.value = mlBasic.getArg(args, 'value', 0);
    }
    send(toActivation = true){
        if(toActivation){
            this.value = this.activation(this.value);
        }
        for(let line of this.outputs){
            line.transportation(this.value);
        }
    }
    connect(point, gate = 0.5){
        this.outputs.push(new mlLine({gate: gate, output: point}));
    }
    pack(){
        return({id: this.id, outputs: this.outputs.map(line => line.pack())});
    }
}
class mlLine{
    constructor(args = {}){
        this.gate = mlBasic.getArg(args, 'gate', 0.5);
        this.output = mlBasic.getArg(args, 'output', null);
    }
    transportation(value = 0){
        if(this.output){
            this.output.value = value*this.gate;
        }
    }
    pack(){
        return({gate: this.gate, output: this.output.id});
    }
}
class mlModel{
    constructor(args = {}){
        this.architecture = mlBasic.getArg(args, 'architecture', [1, 2, 1]);
        this.layers = [];
        this.init(false);
    }
    init(autoConnect = false){
        this.layers = [];
        for(let layerIndex = 0; layerIndex < this.architecture.length; layerIndex++){
            this.layers[layerIndex] = this.layers[layerIndex] || [];
            for(let pointIndex = 0; pointIndex < this.architecture[layerIndex]; pointIndex++){
                let pointNow = new mlPoint();
                this.layers[layerIndex][pointIndex] = pointNow;
                if(autoConnect && layerIndex - 1 > -1){
                    this.layers[layerIndex - 1].forEach(point => {
                        // 暫時先全部連接並隨機gate
                        point.connect(pointNow, parseFloat(mlBasic.randfloat(-10, 10).toFixed(2)));
                    });
                }
            }
        }
    }
    calculate(...inputs){
        this.layers[0].map((point, i) => {
            point.value = inputs.length > i ? inputs[i] : point.value;
        });
        for(let layer of this.layers){
            for(let point of layer){
                var toActivation = true;
                // if(layer != this.layers.length - 1){
                //     toActivation = false;
                // }
                point.send(toActivation);
            }
        }
        var output = this.layers[this.layers.length - 1].map(point => point.value);
        return(output);
    }
    pack(){
        return({layers: this.layers.map(layer => layer.map(point => point.pack()))});
    }
    static load(data = {}){
        let modle = new mlModel();
        var layers = mlBasic.getArg(data, 'layers', false);
        if(layers){
            var architecture = layers.map(layer => layer.length);
            modle.architecture = architecture;
            modle.init(false);
            for(let layerIndex = 0; layerIndex < modle.layers.length; layerIndex++){
                for(let pointIndex = 0; pointIndex < modle.layers[layerIndex].length; pointIndex++){
                    modle.layers[layerIndex][pointIndex].id = layers[layerIndex][pointIndex].id;
                }
            }
            for(let layerIndex = 0; layerIndex < modle.layers.length; layerIndex++){
                for(let pointIndex = 0; pointIndex < modle.layers[layerIndex].length; pointIndex++){
                    if(layerIndex + 1 < modle.layers.length){
                        let point = modle.layers[layerIndex][pointIndex];
                        let outputsId = layers[layerIndex][pointIndex].outputs.map(line => line.output);
                        for(let point2 of modle.layers[layerIndex + 1]){
                            let outputIndex = outputsId.indexOf(point2.id);
                            if(outputIndex > -1){
                                point.connect(point2, layers[layerIndex][pointIndex].outputs[outputIndex].gate);
                            }
                        }
                    }
                }
            }
        }
        return(modle);
    }
    static random(architecture){
        let modle = new mlModel({architecture: architecture});
        modle.init(true);
        return(modle);
    }
}

[mlBasic, mlPoint, mlLine, mlModel].forEach(mlClass => { // 將ml類別放入code_mlDuck中
    code_mlDuck += `${mlClass.toString()}\n`;
});

function newDuck(){
    var model = mlModel.random([11, 10, 6]);
    var duck = {
        id: undefined, 
        arguments: model.pack(), 
        score: 0, 
        executed: false
    }
    return(duck);
}
function mlduck_main(){
    /* basic */
    const $ = function(c, f = document){return(f.querySelector(c));};
    const $$ = function(c, f = document){return(f.querySelectorAll(c));};
    const vw = function(){return(document.body.offsetWidth/100);};
    const vh = function(){return(document.body.offsetHeight/100);};
    const codeTextarea = $('textarea.ace_text-input');
    const generationList = window.mlGenerationList = [];
    const dataLogElement = document.createElement('tbody');
    const canvasBox = $('#visualization');
    const displayCanvas = $('canvas#display');
    const mlCanvas = document.createElement('canvas');
    let updateTimeDelta = 0;
    let lastUpdateTime = mlBasic.time();
    let dataLogText = '';

    function findUnexecute(generationIndex = 0){
        let unexecuteIndex = undefined;
        generationList[generationIndex].map((duckData, index) => {
            if(duckData.executed == false){
                unexecuteIndex = index;
                return;
            }
        });
        console.log(unexecuteIndex);
        return(unexecuteIndex);
    }

    function getProgress(toLog = false, toReturnProgressBar = false, darkTheme = true){
        var progressList = generationList[0].map(duckData => duckData.executed);
        var doneNum = mlBasic.count(progressList, true);
        var totalNum = progressList.length;
        var progressBar = new Array(doneNum).fill('🟩').join('') + new Array(totalNum - doneNum).fill(darkTheme ? '⬜' : '⬛').join('');
        if(toLog){
            // console.table(progressList);
            console.log(`${doneNum}/${totalNum} | ${progressBar}`);
        }
        if(toReturnProgressBar){
            return(progressBar);
        }
        return(doneNum != totalNum ? doneNum/totalNum : 1);
    }

    function proportionRandom(data = [{proportion: 1, value: false}]){
        var proportionTotal = data
            .map(object => object.proportion)
            .reduce((sum, proportion) => sum + proportion, 0);
        var randomResult = Math.floor(Math.random()*proportionTotal);
        for(let i = 0; i < data.length; i++){
            var proportion = data[i].proportion;
            if(randomResult - proportion > 0){
                randomResult -= proportion;
            }
            else{
                return(data[i].value);
            }
        }
    }

    function functionAdd(oldFunction, addition){
        return(function(...args){
            oldFunction.bind(this)(...args);
            addition.bind(this)(...args);
        });
    }

    let countFPS = window.mlCountFPS = function(){
        var timeNow = mlBasic.time();
        var showFPS = false;
        if(updateTimeDelta != timeNow - lastUpdateTime){
            showFPS = true;
        }
        updateTimeDelta = timeNow - lastUpdateTime;
        lastUpdateTime = timeNow;
        if(showFPS){
            var fps = Math.round(1e3/updateTimeDelta);
            var docsButton = $('#docsButton');
            if(docsButton){
                docsButton.innerText = `FPS: ${fps}`;
            }
            if(fps < 1){
                location.reload();
            }
        }
    };

    function dataLogAdd(text, showName = true){
        dataLogText += (showName ? `[${T.kf.name}]` : '') + ` ${text}\n`;
    }

    function dataLogUpdate(){
        dataLogElement.innerText = dataLogText;
        dataLogText = '';
    }

    function sendXmlhttp(name = '', value = '', responseFunction = t => {console.log(t);}, type = 'get'){
        let xmlhttp = new XMLHttpRequest();
        let rf = function (){
            if (xmlhttp.readyState==4) {
                responseFunction(xmlhttp.responseText);
            }
        }
        type = type.toLowerCase();
        xmlhttp.addEventListener("load", rf);
        if(type == 'get'){
            xmlhttp.open("GET", name+value);
            xmlhttp.send();
        }
        else if(type == 'post'){
            xmlhttp.open("POST", name,true);
            xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlhttp.send(value);
        }
    }

    function offset(e, type) {
        var reE = {
            height:e.offsetHeight, 
            width:e.offsetWidth , 
            top:0, 
            left:0
        };
        while(e !== document.body && e.offsetLeft && e.offsetTop && e.offsetParent){
            reE.left += e.offsetLeft;
            reE.top += e.offsetTop;
            e = e.offsetParent;
        }
        return(reE[type]);
    }

    /* generation */
    function randomGeneration(generationIndex, duckNum){
        generationList[generationIndex] = generationList[generationIndex] || [];
        var generation = generationList[generationIndex];
        for(let i = 0 ;i < duckNum; i++){
            generation.push(newDuck());
        }
    }

    function runGeneration(generationIndex = 0){
        let unexecuteIndex = findUnexecute(generationIndex);
        if(unexecuteIndex != undefined){
            let startTime = mlBasic.time();
            run(generationIndex, unexecuteIndex, (gi = generationIndex, di = unexecuteIndex, st = startTime) => {
                generationList[gi][di].executed = true;
                generationList[gi][di].score = mlBasic.time() - st;

                getProgress(true);
                console.table(generationList[0].map(duckData => duckData.score));

                sendXmlhttp(ML_DIR_PATH + '/write.php', `json=${JSON.stringify({generationList: generationList, generationNumNow: window.mlGenerationNumNow}, true, 4)}`, r => {
                    console.log(`data write: ${r}`);
                }, 'post');

                runGeneration(gi);
            });
        }
        else{
            return(true);
        }
    }

    function procreationGeneration(duckNum = 10, parentGenerationIndex = generationList.length - 1, deleteParentGeneration = false){
        let proportionList = generationList[parentGenerationIndex].map(duckData => {
            return({
                proportion: duckData.score, 
                value: duckData
            });
        });
        let generationNow = [];
        for(let i = 0; i < duckNum; i++){
            let parent = [];
            let child = newDuck();
            parent[0] = proportionRandom(proportionList);
            parent[1] = proportionRandom(proportionList.filter(object => object.value != parent[0]));
            var layerMaxLength = Math.max(parent[0].arguments.length, parent[1].arguments.length)
            for(let i = 0; i < layerMaxLength; i++){
                if(parent[i%2].arguments.length < i + 1){
                    break;
                }
                else{
                    child.arguments[i] = parent[i%2].arguments[i];
                }
            }
            generationNow.push(child);
        }
        if(deleteParentGeneration){
            generationList.splice(parentGenerationIndex, 1);
        }
        generationList.push(generationNow);
    }
    
    /* execute */
    function run(generationIndex = 0, duckNum = 0, doneFunction = () => {}){
        let duckData = generationList[generationIndex][duckNum];
        window.mlDuckNow = mlModel.load(duckData.arguments);

        var myCode = code_mlDuck + `
    let scanDeg = 0;
    let swimDeg = 0;
    let cannonDeg = 0;
    let cannonRange = 0;
    let isSwimming = false;
    let toCannon = false;
    let duck = mlModel.load(${JSON.stringify(duckData.arguments)});
    // let duck = eval('new mlModel({architecture: [1, 6]})');
    function mlCalculate(){
        let response = duck.calculate(
            getX()/100, 
            getY()/100, 
            scanDeg/360, 
            scan(scanDeg)/100, 
            swimDeg/360, 
            isSwimming ? 1 : 0, 
            damage()/100, 
            health()/100, 
            speed()/1, 
            cannonDeg/360, 
            cannonRange/100
        );
        scanDeg = Math.floor(response[0] * 360);
        swimDeg = Math.floor(response[1] * 360);
        isSwimming = response[2] > 0.5 ? true : false;
        // isSwimming = true;
        cannonDeg = Math.floor(response[3] * 360);
        cannonRange = Math.floor(response[4] * 100);
        toCannon = response[5] > 0.5 ? true : false;
        ['scanDeg', 'swimDeg', 'cannonDeg', 'cannonRange', 'isSwimming', 'toCannon'].forEach(n => {
            dataLogAdd(\`\${n}: \${eval(n)}\`);
        });
        dataLogAdd(getProgress(false, true, false));
        dataLogUpdate();
        if(isSwimming){
            swim(swimDeg);
        }
        else{
            stop();
        }
        if(toCannon){
            cannon(cannonDeg, cannonRange);
        }
    }
    while(true){
        eval('mlCalculate()');
    }
        `;
        be().setValue(myCode); // 設定ace editor內容

        let oldFunction = T.$c[0].Si.Ow;
        T.$c[0].Si.Ow = function(a, c){ // 改寫、複寫 T.$c[0].Si.Ow 補充函式
            oldFunction.bind(this)(a, c);
            let d = function(e) {
                console.log(`${T.kf.name} logs: ${e}`);
            };
            a.setProperty(c, "log", a.createNativeFunction(d));

            a.setProperty(c, "dataLogAdd", a.createNativeFunction(dataLogAdd));

            a.setProperty(c, "dataLogUpdate", a.createNativeFunction(dataLogUpdate));

            d = function() { // clearLog
                if(!ML_DEBUG_MODE){
                    console.clear();
                }
            };
            a.setProperty(c, "clearLog", a.createNativeFunction(d));
            
            a.setProperty(c, "getProgress", a.createNativeFunction(getProgress));
        };

        // Object.getPrototypeOf($('#display').getContext("2d")).fill = () => {console.log(this)}
        // CanvasRenderingContext2D.prototype.fill = () => {console.log(this)}

        window.Ye(new Event('click', {"bubbles":true, "cancelable":false})); // 運行程式
        // T.$c[0].oC = new Interpreter(myCode, T.$c[0].Si.Ow); // 重建Interpreter，會因為myCode未經compile而導致鴨子不會動
        reset(doneFunction);
    }

    function reset(doneFunction = () => {}){
        if(T.$c[0].Pf || T.$c.length - T.$q.length <= 1){
            af(new Event('click', {"bubbles":true, "cancelable":false}));
            if(doneFunction){
                setTimeout(doneFunction, 0.5e3); // 之所以等待0.5秒，是因為af需要處裡時間
            }
        }
        else{
            setTimeout(reset, 1e3, doneFunction);
        }
    }

    /* main */
    Audio.prototype.play = () => {};
    if(!ML_DEBUG_MODE){
        console.warn = () => {};
        console.error = () => {};
    }
    else{
        console.clear = () => {};
    }

    canvasBox.style.setProperty('--size', 'calc(min(1vw, 1vh) * 100 - 10px)');
    canvasBox.style.width = 'var(--size)';
    canvasBox.style.height = 'var(--size)';
    canvasBox.style.position = 'fixed';
    canvasBox.style.right = '5px';
    canvasBox.style.bottom = '5px';
    canvasBox.style.opacity = '0.5';
    canvasBox.style.boxSizing = 'border-box';
    // canvasBox.style.pointerEvents = 'none';
    canvasBox.style.zIndex = '999';
    canvasBox.appendChild(mlCanvas);
    for(let canvas of [displayCanvas, mlCanvas]){
        canvas.style.setProperty('--size', 'calc(min(1vw, 1vh) * 100 - 10px)');
        canvas.style.width = 'var(--size)';
        canvas.style.height = 'var(--size)';
        canvas.style.position = 'absolute';
        canvas.style.left = '0px';
        canvas.style.top = '0px';
    }
    // dataLogElement.style.fontSize = '10px';
    $('#avatarStatTable~table').appendChild(dataLogElement);
    dataLogAdd('[mlduck] 2022 © MaoHuPi', false);
    dataLogUpdate();

    T.update = function(){
        T.$K();
        T.aL();
        T.ZK();
        T.$c.length <= T.$q.length + 1 && (T.bs = Math.min(T.bs, Date.now() + 1E3));
        for(let i = 0; i < 1e4; i++){ // 加速player運算
            T.kf = T.$c[0];
            if(T.$c[0].oC && T.kf){
                T.$c[0].oC.step();
            }
        }
        Date.now() > T.bs ? T.stop() : T.eD = setTimeout(T.update, 1E3 / ML_EXECUTION_SPEED / T.mF)
    }

    // $('#docsButton').removeEventListener('click', Ue, true); // 移除click監聽器
    var docsButton = $('#docsButton');
    if(docsButton){
        docsButton.replaceWith(docsButton.cloneNode()); // 利用元素替換來移除所有監聽器
    }
    Ne = functionAdd(Ne, function(){ // 將FPS計數器接至canvas更新函式後
        let colors = ['yellow', 'red', 'green', 'blue'];
        let ctx = mlCanvas.getContext('2d');
        // let ctx = g.g.o.Br;
        let rectSize = {width: 50, height: 5};
        ctx.clearRect(0, 0, mlCanvas.width, mlCanvas.height);
        for(let i = 0; i < T.$c.length; i++){
            let duck = T.$c[i];
            ctx.fillStyle = colors[i];
            ctx.strokeStyle = 'black';
            ctx.fillRect(duck.Wa.x/100*mlCanvas.width - rectSize.width/2, mlCanvas.height-(duck.Wa.y/100*mlCanvas.height) - rectSize.height/2 - 15, rectSize.width*(100 - duck.Of)/100, rectSize.height);
            ctx.strokeRect(duck.Wa.x/100*mlCanvas.width - rectSize.width/2, mlCanvas.height-(duck.Wa.y/100*mlCanvas.height) - rectSize.height/2 - 15, rectSize.width, rectSize.height);
        }
        // ctx.fillStyle = '#0000ff';
        (window.mlCountFPS && window.mlCountFPS());
    });

    window.Uf(1); // 切換至JavaScript輸入
    if (!Qf) { // Vf(); // 啟用JavaScript編輯
        var a = Od ? Nd.getValue() : Xe();
        Od ? a.trim() || (w.clear(),
        Tf(!1)) : true ? Tf(!0) : (Qf = !0,
        setTimeout(function() {
            Nd.setValue(a, -1);
            Qf = !1
        }, 0))
    }
    
    function runAll(){
        runGeneration(0);
        function autoProcreation(){
            if(getProgress() == 1){
                // console.table(generationList[0].map(duckData => duckData.score));
                procreationGeneration(10, 0, true);
                runGeneration(0);
                window.mlGenerationNumNow += 1;
                console.clear();
            }
            setTimeout(autoProcreation, 1e3);
        }
        autoProcreation();
    }

    sendXmlhttp(ML_DIR_PATH + '/read.php', '', json => {
        let data = [];
        try{
            data = JSON.parse(json);
        }catch(error){}
        if(data.generationList && data.generationList.length >= 1 && data.generationList[0].length >= 2){
            window.mlGenerationNumNow = data.generationNumNow ? data.generationNumNow : 1;
            generationList.length = 0;
            for(let layer of data.generationList){
                generationList.push(layer);
            }
            runAll();
        }
        else{
            randomGeneration(0, 10);
            window.mlGenerationNumNow = 1;
            runAll();
        }
    }, 'get');
}
setTimeout(mlduck_main, 1e3);
// copy(JSON.stringify(mlGenerationList, true, 4));
// 16000