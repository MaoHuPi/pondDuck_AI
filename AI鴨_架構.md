# AI鴨_架構

## input
```
< position x: float
< position y: float
< scan deg: int
< scan resoult: float
< swim deg: int
< is swimming: bool
< damage: float
< health: float
< speed: float
< cannon deg: int
< cannon range: int
```

## output
```
> scan deg: int
> swim deg: int
> stop: bool
> cannon deg: int
> cannon range: int
> cannon: bool
```

## function
```
scan(deg) 掃描
cannon(deg, range) 射擊
drive(deg) 游泳，同swim
swim(deg) 游泳
stop() 停止游泳
speed() 獲取移動速度
damage() 獲取總扣血量
health() 獲取剩餘血量
loc_x() 獲取X座標?
getX() 獲取X座標
loc_y() 獲取Y座標?
getY() 獲取Y座標
log(any) 印出
```

## TODO
- [x] 因為場地為非同步執行，導致AI鴨無法在一幀內完成運算(需研究「pond/duck/generated/en/compressed.js」到底在寫三小)
- [ ] 待研究：「third-party/JS-Interpreter/compressed.js」第1539行的「Interpreter.prototype.step」實際執行方式(造成執行延遲的原因)

# NOTE
* `$e();` 運行程式
* `T.reset();` 重置
* `T` 遊戲場地物件(內涵遊戲所需變數及控制函數)
* `T.$c` 鴨子物件陣列
* `Ae(T.$c[0]);` 讓鴨子進入死亡狀態($c後的索引值為要殺死的鴨子)
* `T.$c[0].FH` 鴨子compiled後的code
* `T.$c[0].Pf` 鴨子是否死亡
* 「third-party/JS-Interpreter/compressed.js」的「Interpreter」原始碼為「[NeilFraser > JS-Interpreter/interpreter.js](https://github.com/NeilFraser/JS-Interpreter/blob/master/interpreter.js)」