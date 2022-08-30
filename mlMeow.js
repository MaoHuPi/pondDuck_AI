'use strict';

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
    static proportionRandom(data = [{proportion: 1, value: false}]){
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
        let model = new mlModel();
        var layers = mlBasic.getArg(data, 'layers', false);
        if(layers){
            var architecture = layers.map(layer => layer.length);
            model.architecture = architecture;
            model.init(false);
            for(let layerIndex = 0; layerIndex < model.layers.length; layerIndex++){
                for(let pointIndex = 0; pointIndex < model.layers[layerIndex].length; pointIndex++){
                    model.layers[layerIndex][pointIndex].id = layers[layerIndex][pointIndex].id;
                }
            }
            for(let layerIndex = 0; layerIndex < model.layers.length; layerIndex++){
                for(let pointIndex = 0; pointIndex < model.layers[layerIndex].length; pointIndex++){
                    if(layerIndex + 1 < model.layers.length){
                        let point = model.layers[layerIndex][pointIndex];
                        let outputsId = layers[layerIndex][pointIndex].outputs.map(line => line.output);
                        for(let point2 of model.layers[layerIndex + 1]){
                            let outputIndex = outputsId.indexOf(point2.id);
                            if(outputIndex > -1){
                                point.connect(point2, layers[layerIndex][pointIndex].outputs[outputIndex].gate);
                            }
                        }
                    }
                }
            }
        }
        return(model);
    }
    static random(architecture){
        let model = new mlModel({architecture: architecture});
        model.init(true);
        return(model);
    }
}
class mlGenerationList{
    constructor(args = {}){
        this.newModel = mlBasic.getArg(args, 'newModel', mlModel.random);
        this.runFunction = mlBasic.getArg(args, 'runFunction', () => {});
        this.generationList = mlBasic.getArg(args, 'generationList', []);
    }
    findUnexecute(generationIndex = 0){
        let unexecuteIndex = undefined;
        this.generationList[generationIndex].map((model, index) => {
            if(!('executed' in model) || model.executed == false){
                unexecuteIndex = index;
                return;
            }
        });
        return(unexecuteIndex);
    }
    newModelData(){
        var modelData = {
            id: undefined, 
            arguments: this.newModel().pack(), 
            score: 0, 
            executed: false
        };
        return(modelData);
    }
    randomGeneration(generationIndex, modelNum){
        this.generationList[generationIndex] = this.generationList[generationIndex] || [];
        var generation = this.generationList[generationIndex];
        for(let i = 0 ;i < modelNum; i++){
            generation.push(this.newModelData());
        }
    }
    runGeneration(generationIndex = 0){
        let unexecuteIndex = this.findUnexecute(generationIndex);
        if(unexecuteIndex != undefined){
            let startTime = mlBasic.time();
            let modelData = this.generationList[generationIndex][unexecuteIndex];
            this.runFunction(mlModel.load(modelData.arguments), modelData);
            this.generationList[generationIndex][unexecuteIndex].executed = true;
            // this.generationList[generationIndex][unexecuteIndex].score = mlBasic.time() - startTime;
            this.runGeneration(generationIndex);
        }
        else{
            return(true);
        }
    }
    procreationGeneration(modelNum = 10, parentGenerationIndex = this.generationList.length - 1, deleteParentGeneration = false){
        let proportionList = this.generationList[parentGenerationIndex].map(modelData => {
            return({
                proportion: modelData.score, 
                value: modelData
            });
        });
        let generationNow = [];
        for(let i = 0; i < modelNum; i++){
            let parent = [];
            let child = this.newModelData();
            parent[0] = mlBasic.proportionRandom(proportionList);
            parent[1] = mlBasic.proportionRandom(proportionList.filter(object => object.value != parent[0]));
            console.log(parent);
            console.log(parent[0]);
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
            this.generationList.splice(parentGenerationIndex, 1);
        }
        this.generationList.push(generationNow);
    }
}

class mlMeow{
    static mlBasic = mlBasic;
    static mlPoint = mlPoint;
    static mlLine = mlLine;
    static mlModel = mlModel;
    static mlGenerationList = mlGenerationList;
}
export {mlBasic, mlPoint, mlLine, mlModel, mlGenerationList, mlMeow};