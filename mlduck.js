'use strict';
let myCode = `
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
class mlBasic{
    static idList = [];
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
        while(output == undefined || (typeof output == 'string' && mlBasic.idList.indexOf(output) > -1)){
            output = [];
            for(let i = 0; i < length; i++){
                output[i] = mlBasic.pick(charCodeList);
            }
            output = String.fromCharCode(...output);
        }
        mlBasic.idList.push(output);
        return(output);
    }
    static sigmoid(x, k = 10) {
        return 1 / (1 + Math.exp(-x/k));
    }
}
class mlPoint{
    constructor(args = {}){
        this.id = mlBasic.randid(5);
        this.activation = mlBasic.getArg(args, 'activation', mlBasic.sigmoid);
        this.outputs = mlBasic.getArg(args, 'output', []);
        this.value = mlBasic.getArg(args, 'value', 0);
    }
    send(){
        this.value = this.activation(this.value);
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
        this.init();
    }
    init(autoConnect = true){
        this.layers = [];
        for(let layerIndex = 0; layerIndex < this.architecture.length; layerIndex++){
            this.layers[layerIndex] = this.layers[layerIndex] || [];
            for(let pointIndex = 0; pointIndex < this.architecture[layerIndex]; pointIndex++){
                let pointNow = new mlPoint();
                this.layers[layerIndex][pointIndex] = pointNow;
                if(autoConnect && layerIndex - 1 > -1){
                    this.layers[layerIndex - 1].forEach(point => {
                        // 暫時先全部連接並隨機gate
                        point.connect(pointNow, mlBasic.randfloat(0, 1));
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
                point.send();
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
                        let outputsId = layers[layerIndex][pointIndex].outputs.map(line => line.output)
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
}
class mlDuck{
    constructor(args = {}){
        this.model = new mlModel({architecture: [6, 10, 10, 10, 3]});
    }
}
function mlduck_main(){
    const $ = function(c, f = document){return(f.querySelector(c));};
    const $$ = function(c, f = document){return(f.querySelectorAll(c));};
    const codeTextarea = $('textarea.ace_text-input');
    /*
     * note
     * $e(); // 運行程式
     * T.reset(); // 重置
     */
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
    be().setValue(myCode); // 設定ace editor內容
    Ye(new Event('click', {"bubbles":true, "cancelable":false})); // 運行程式
}
setTimeout(mlduck_main, 1e3);