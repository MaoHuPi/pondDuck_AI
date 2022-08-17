// Automatically generated file.  Do not edit!

var b, g = {
    pa: {
        tc: 1,
        xe: 2,
        bd: 3,
        cf: 4
    }
};
g.Jb = {};
g.Pz = 40;
g.dA = 125;
g.OE = 5;
g.iF = 10;
g.Md = 28;
g.yE = g.Md;
g.BE = 8;
g.yq = 250;
g.Nt = 10;
g.vE = 30;
g.QF = 750;
g.CG = 100;
g.PE = !0;
g.vF = .45;
g.wF = .65;
g.Nd = {
    width: 96,
    height: 124,
    url: "sprites.png"
};
g.Jb.Jf = {
    Ib: -1,
    Aq: 0,
    Mc: 1
};
g.KL = 0;
g.LL = 1;
g.IL = 1;
g.JL = 2;
g.Xl = [];
g.Xl[g.pa.tc] = g.pa.xe;
g.Xl[g.pa.xe] = g.pa.tc;
g.Xl[g.pa.bd] = g.pa.cf;
g.Xl[g.pa.cf] = g.pa.bd;
g.hc = "VARIABLE";
g.bm = "PROCEDURE";
g.fA = "RENAME_VARIABLE_ID";
g.rz = "DELETE_VARIABLE_ID";
g.Jb.Dq = "_TEMP_COLLAPSED_INPUT";
g.Jb.Cq = "_TEMP_COLLAPSED_FIELD";
g.g = {};
g.g.global = function() {
    return "object" === typeof self ? self : "object" === typeof window ? window : "object" === typeof global ? global : this
}();
g.i = {};
g.g.global.Blockly || (g.g.global.Blockly = {});
g.g.global.Blockly.Msg || (g.g.global.Blockly.Msg = g.i);
g.g.Cb = {};
g.g.Cb.parse = function(a) {
    a = String(a).toLowerCase().trim();
    var c = g.g.Cb.names[a];
    if (c)
        return c;
    c = "0x" == a.substring(0, 2) ? "#" + a.substring(2) : a;
    c = "#" == c[0] ? c : "#" + c;
    if (/^#[0-9a-f]{6}$/.test(c))
        return c;
    if (/^#[0-9a-f]{3}$/.test(c))
        return ["#", c[1], c[1], c[2], c[2], c[3], c[3]].join("");
    var d = a.match(/^(?:rgb)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
    return d && (a = Number(d[1]),
    c = Number(d[2]),
    d = Number(d[3]),
    0 <= a && 256 > a && 0 <= c && 256 > c && 0 <= d && 256 > d) ? g.g.Cb.sy(a, c, d) : null
}
;
g.g.Cb.sy = function(a, c, d) {
    c = a << 16 | c << 8 | d;
    return 16 > a ? "#" + (16777216 | c).toString(16).substr(1) : "#" + c.toString(16)
}
;
g.g.Cb.gC = function(a) {
    a = g.g.Cb.parse(a);
    if (!a)
        return [0, 0, 0];
    a = parseInt(a.substr(1), 16);
    return [a >> 16, a >> 8 & 255, a & 255]
}
;
g.g.Cb.lC = function(a) {
    var c = g.vF
      , d = 255 * g.wF
      , e = 0
      , f = 0
      , h = 0;
    if (0 == c)
        h = f = e = d;
    else {
        var k = Math.floor(a / 60)
          , l = a / 60 - k;
        a = d * (1 - c);
        var m = d * (1 - c * l);
        c = d * (1 - c * (1 - l));
        switch (k) {
        case 1:
            e = m;
            f = d;
            h = a;
            break;
        case 2:
            e = a;
            f = d;
            h = c;
            break;
        case 3:
            e = a;
            f = m;
            h = d;
            break;
        case 4:
            e = c;
            f = a;
            h = d;
            break;
        case 5:
            e = d;
            f = a;
            h = m;
            break;
        case 6:
        case 0:
            e = d,
            f = c,
            h = a
        }
    }
    return g.g.Cb.sy(Math.floor(e), Math.floor(f), Math.floor(h))
}
;
g.g.Cb.fv = function(a, c, d) {
    a = g.g.Cb.parse(a);
    if (!a)
        return null;
    c = g.g.Cb.parse(c);
    if (!c)
        return null;
    a = g.g.Cb.gC(a);
    c = g.g.Cb.gC(c);
    return g.g.Cb.sy(Math.round(c[0] + d * (a[0] - c[0])), Math.round(c[1] + d * (a[1] - c[1])), Math.round(c[2] + d * (a[2] - c[2])))
}
;
g.g.Cb.names = {
    aqua: "#00ffff",
    black: "#000000",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    gray: "#808080",
    green: "#008000",
    lime: "#00ff00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    teal: "#008080",
    white: "#ffffff",
    yellow: "#ffff00"
};
g.g.V = function(a, c) {
    this.x = a;
    this.y = c
}
;
g.g.V.qf = function(a, c) {
    return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1
}
;
g.g.V.Bo = function(a, c) {
    var d = a.x - c.x;
    a = a.y - c.y;
    return Math.sqrt(d * d + a * a)
}
;
g.g.V.mJ = function(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y)
}
;
g.g.V.Ao = function(a, c) {
    return new g.g.V(a.x - c.x,a.y - c.y)
}
;
g.g.V.sum = function(a, c) {
    return new g.g.V(a.x + c.x,a.y + c.y)
}
;
g.g.V.prototype.clone = function() {
    return new g.g.V(this.x,this.y)
}
;
g.g.V.prototype.scale = function(a) {
    this.x *= a;
    this.y *= a;
    return this
}
;
g.g.V.prototype.translate = function(a, c) {
    this.x += a;
    this.y += c;
    return this
}
;
g.g.Rect = function(a, c, d, e) {
    this.top = a;
    this.bottom = c;
    this.left = d;
    this.right = e
}
;
g.g.Rect.prototype.contains = function(a, c) {
    return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom
}
;
g.g.yb = {};
g.g.yb.startsWith = function(a, c) {
    return 0 == a.lastIndexOf(c, 0)
}
;
g.g.yb.Cy = function(a) {
    return a.length ? a.reduce(function(c, d) {
        return c.length < d.length ? c : d
    }).length : 0
}
;
g.g.yb.DH = function(a, c) {
    if (!a.length)
        return 0;
    if (1 == a.length)
        return a[0].length;
    var d = 0;
    c = c || g.g.yb.Cy(a);
    for (var e = 0; e < c; e++) {
        for (var f = a[0][e], h = 1; h < a.length; h++)
            if (f != a[h][e])
                return d;
        " " == f && (d = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h][e]) && " " != f)
            return d;
    return c
}
;
g.g.yb.EH = function(a, c) {
    if (!a.length)
        return 0;
    if (1 == a.length)
        return a[0].length;
    var d = 0;
    c = c || g.g.yb.Cy(a);
    for (var e = 0; e < c; e++) {
        for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
            if (f != a[h].substr(-e - 1, 1))
                return d;
        " " == f && (d = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f)
            return d;
    return c
}
;
g.g.yb.ZD = function(a, c) {
    a = a.split("\n");
    for (var d = 0; d < a.length; d++)
        a[d] = g.g.yb.lL(a[d], c);
    return a.join("\n")
}
;
g.g.yb.lL = function(a, c) {
    if (a.length <= c)
        return a;
    for (var d = a.trim().split(/\s+/), e = 0; e < d.length; e++)
        d[e].length > c && (c = d[e].length);
    e = -Infinity;
    var f = 1;
    do {
        var h = e;
        var k = a;
        a = [];
        var l = d.length / f
          , m = 1;
        for (e = 0; e < d.length - 1; e++)
            m < (e + 1.5) / l ? (m++,
            a[e] = !0) : a[e] = !1;
        a = g.g.yb.$D(d, a, c);
        e = g.g.yb.Yy(d, a, c);
        a = g.g.yb.mL(d, a);
        f++
    } while (e > h);
    return k
}
;
g.g.yb.Yy = function(a, c, d) {
    for (var e = [0], f = [], h = 0; h < a.length; h++)
        e[e.length - 1] += a[h].length,
        !0 === c[h] ? (e.push(0),
        f.push(a[h].charAt(a[h].length - 1))) : !1 === c[h] && e[e.length - 1]++;
    a = Math.max.apply(Math, e);
    for (h = c = 0; h < e.length; h++)
        c -= 2 * Math.pow(Math.abs(d - e[h]), 1.5),
        c -= Math.pow(a - e[h], 1.5),
        -1 != ".?!".indexOf(f[h]) ? c += d / 3 : -1 != ",;)]}".indexOf(f[h]) && (c += d / 4);
    1 < e.length && e[e.length - 1] <= e[e.length - 2] && (c += .5);
    return c
}
;
g.g.yb.$D = function(a, c, d) {
    for (var e = g.g.yb.Yy(a, c, d), f, h = 0; h < c.length - 1; h++)
        if (c[h] != c[h + 1]) {
            var k = [].concat(c);
            k[h] = !k[h];
            k[h + 1] = !k[h + 1];
            var l = g.g.yb.Yy(a, k, d);
            l > e && (e = l,
            f = k)
        }
    return f ? g.g.yb.$D(a, f, d) : c
}
;
g.g.yb.mL = function(a, c) {
    for (var d = [], e = 0; e < a.length; e++)
        d.push(a[e]),
        void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
    return d.join("")
}
;
g.g.sd = function(a, c) {
    this.width = a;
    this.height = c
}
;
g.g.sd.qf = function(a, c) {
    return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1
}
;
g.g.style = {};
g.g.style.Fh = function(a) {
    if ("none" != g.g.style.WB(a, "display"))
        return g.g.style.TB(a);
    var c = a.style
      , d = c.display
      , e = c.visibility
      , f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    var h = a.offsetWidth;
    a = a.offsetHeight;
    c.display = d;
    c.position = f;
    c.visibility = e;
    return new g.g.sd(h,a)
}
;
g.g.style.TB = function(a) {
    return new g.g.sd(a.offsetWidth,a.offsetHeight)
}
;
g.g.style.WB = function(a, c) {
    return g.g.style.getComputedStyle(a, c) || g.g.style.uI(a, c) || a.style && a.style[c]
}
;
g.g.style.getComputedStyle = function(a, c) {
    return document.defaultView && document.defaultView.getComputedStyle && (a = document.defaultView.getComputedStyle(a, null)) ? a[c] || a.getPropertyValue(c) || "" : ""
}
;
g.g.style.uI = function(a, c) {
    return a.currentStyle ? a.currentStyle[c] : null
}
;
g.g.style.Ik = function(a) {
    var c = new g.g.V(0,0);
    a = a.getBoundingClientRect();
    var d = document.documentElement;
    d = new g.g.V(window.pageXOffset || d.scrollLeft,window.pageYOffset || d.scrollTop);
    c.x = a.left + d.x;
    c.y = a.top + d.y;
    return c
}
;
g.g.style.GI = function() {
    var a = document.body
      , c = document.documentElement;
    return new g.g.V(a.scrollLeft || c.scrollLeft,a.scrollTop || c.scrollTop)
}
;
g.g.style.mP = function(a, c) {
    a.style.display = c ? "" : "none"
}
;
g.g.style.ZO = function(a) {
    return "rtl" == g.g.style.WB(a, "direction")
}
;
g.g.style.rI = function(a) {
    var c = g.g.style.getComputedStyle(a, "borderLeftWidth")
      , d = g.g.style.getComputedStyle(a, "borderRightWidth")
      , e = g.g.style.getComputedStyle(a, "borderTopWidth");
    a = g.g.style.getComputedStyle(a, "borderBottomWidth");
    return {
        top: parseFloat(e),
        right: parseFloat(d),
        bottom: parseFloat(a),
        left: parseFloat(c)
    }
}
;
g.g.style.wK = function(a, c) {
    a = g.g.style.xI(a, c);
    c.scrollLeft = a.x;
    c.scrollTop = a.y
}
;
g.g.style.xI = function(a, c) {
    var d = g.g.style.Ik(a)
      , e = g.g.style.Ik(c)
      , f = g.g.style.rI(c)
      , h = d.x - e.x - f.left;
    d = d.y - e.y - f.top;
    a = g.g.style.TB(a);
    e = c.clientHeight - a.height;
    f = c.scrollLeft;
    var k = c.scrollTop;
    f += Math.min(h, Math.max(h - (c.clientWidth - a.width), 0));
    k += Math.min(d, Math.max(d - e, 0));
    return new g.g.V(f,k)
}
;
g.g.userAgent = {};
(function(a) {
    function c(e) {
        return -1 != d.indexOf(e.toUpperCase())
    }
    g.g.userAgent.raw = a;
    var d = g.g.userAgent.raw.toUpperCase();
    g.g.userAgent.Ze = c("Trident") || c("MSIE");
    g.g.userAgent.ek = c("Edge");
    g.g.userAgent.FF = c("JavaFX");
    g.g.userAgent.AL = (c("Chrome") || c("CriOS")) && !g.g.userAgent.ek;
    g.g.userAgent.uA = c("WebKit") && !g.g.userAgent.ek;
    g.g.userAgent.pF = c("Gecko") && !g.g.userAgent.uA && !g.g.userAgent.Ze && !g.g.userAgent.ek;
    g.g.userAgent.Uj = c("Android");
    a = g.g.global.navigator && g.g.global.navigator.maxTouchPoints;
    g.g.userAgent.dh = c("iPad") || c("Macintosh") && 0 < a;
    g.g.userAgent.Mz = c("iPod");
    g.g.userAgent.cu = c("iPhone") && !g.g.userAgent.dh && !g.g.userAgent.Mz;
    g.g.userAgent.TF = c("Macintosh");
    g.g.userAgent.JG = g.g.userAgent.dh || g.g.userAgent.Uj && !c("Mobile") || c("Silk");
    g.g.userAgent.Wz = !g.g.userAgent.JG && (g.g.userAgent.Mz || g.g.userAgent.cu || g.g.userAgent.Uj || c("IEMobile"))
}
)(g.g.global.navigator && g.g.global.navigator.userAgent || "");
g.g.BJ = function(a) {
    a.preventDefault();
    a.stopPropagation()
}
;
g.g.zs = function(a) {
    return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable || a.target.dataset && "true" == a.target.dataset.aP
}
;
g.g.sf = function(a) {
    var c = new g.g.V(0,0)
      , d = a.getAttribute("x");
    d && (c.x = parseInt(d, 10));
    if (d = a.getAttribute("y"))
        c.y = parseInt(d, 10);
    if (d = (d = a.getAttribute("transform")) && d.match(g.g.sf.VG))
        c.x += Number(d[1]),
        d[3] && (c.y += Number(d[3]));
    (a = a.getAttribute("style")) && -1 < a.indexOf("translate") && (a = a.match(g.g.sf.WG)) && (c.x += Number(a[1]),
    a[3] && (c.y += Number(a[3])));
    return c
}
;
g.g.To = function(a) {
    for (var c = 0, d = 0; a; ) {
        var e = g.g.sf(a);
        c += e.x;
        d += e.y;
        if (-1 != (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv "))
            break;
        a = a.parentNode
    }
    return new g.g.V(c,d)
}
;
g.g.sf.VG = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
g.g.sf.WG = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
g.g.$k = function(a) {
    return a.ctrlKey && g.g.userAgent.TF ? !0 : 2 == a.button
}
;
g.g.rp = function(a, c, d) {
    var e = c.createSVGPoint();
    e.x = a.clientX;
    e.y = a.clientY;
    d || (d = c.getScreenCTM().inverse());
    return e.matrixTransform(d)
}
;
g.g.SB = function(a) {
    switch (a.deltaMode) {
    default:
        return {
            x: a.deltaX,
            y: a.deltaY
        };
    case 1:
        return {
            x: a.deltaX * g.Pz,
            y: a.deltaY * g.Pz
        };
    case 2:
        return {
            x: a.deltaX * g.dA,
            y: a.deltaY * g.dA
        }
    }
}
;
g.g.SK = function(a) {
    return g.g.Ly(a, !0)
}
;
g.g.se = function(a) {
    if ("string" != typeof a)
        return a;
    a = g.g.Ly(a, !1);
    return a.length ? String(a[0]) : ""
}
;
g.g.RA = function(a) {
    for (var c = g.i, d = a.match(/%{BKY_[A-Z]\w*}/ig), e = 0; e < d.length; e++)
        void 0 == c[d[e].toUpperCase().slice(6, -1)] && console.warn("No message string for " + d[e] + " in " + a)
}
;
g.g.Ly = function(a, c) {
    var d = []
      , e = a.split("");
    e.push("");
    var f = 0;
    a = [];
    for (var h = null, k = 0; k < e.length; k++) {
        var l = e[k];
        0 == f ? "%" == l ? ((l = a.join("")) && d.push(l),
        a.length = 0,
        f = 1) : a.push(l) : 1 == f ? "%" == l ? (a.push(l),
        f = 0) : c && "0" <= l && "9" >= l ? (f = 2,
        h = l,
        (l = a.join("")) && d.push(l),
        a.length = 0) : "{" == l ? f = 3 : (a.push("%", l),
        f = 0) : 2 == f ? "0" <= l && "9" >= l ? h += l : (d.push(parseInt(h, 10)),
        k--,
        f = 0) : 3 == f && ("" == l ? (a.splice(0, 0, "%{"),
        k--,
        f = 0) : "}" != l ? a.push(l) : (f = a.join(""),
        /[A-Z]\w*/i.test(f) ? (l = f.toUpperCase(),
        (l = g.g.yb.startsWith(l, "BKY_") ? l.substring(4) : null) && l in g.i ? (f = g.i[l],
        "string" == typeof f ? Array.prototype.push.apply(d, g.g.Ly(f, c)) : c ? d.push(String(f)) : d.push(f)) : d.push("%{" + f + "}")) : d.push("%{" + f + "}"),
        f = a.length = 0))
    }
    (l = a.join("")) && d.push(l);
    c = [];
    for (k = a.length = 0; k < d.length; ++k)
        "string" == typeof d[k] ? a.push(d[k]) : ((l = a.join("")) && c.push(l),
        a.length = 0,
        c.push(d[k]));
    (l = a.join("")) && c.push(l);
    a.length = 0;
    return c
}
;
g.g.Dg = function() {
    for (var a = g.g.Dg.zD.length, c = [], d = 0; 20 > d; d++)
        c[d] = g.g.Dg.zD.charAt(Math.random() * a);
    return c.join("")
}
;
g.g.Dg.zD = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.g.Uk = function() {
    if (void 0 !== g.g.Uk.uv)
        return g.g.Uk.uv;
    if (!g.g.global.getComputedStyle)
        return !1;
    var a = document.createElement("p")
      , c = "none"
      , d = {
        webkitTransform: "-webkit-transform",
        OTransform: "-o-transform",
        msTransform: "-ms-transform",
        MozTransform: "-moz-transform",
        transform: "transform"
    };
    document.body.insertBefore(a, null);
    for (var e in d)
        if (void 0 !== a.style[e]) {
            a.style[e] = "translate3d(1px,1px,1px)";
            c = g.g.global.getComputedStyle(a);
            if (!c)
                return document.body.removeChild(a),
                !1;
            c = c.getPropertyValue(d[e])
        }
    document.body.removeChild(a);
    g.g.Uk.uv = "none" !== c;
    return g.g.Uk.uv
}
;
g.g.tD = function(a) {
    if ("object" != typeof document)
        throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
    if ("complete" == document.readyState)
        a();
    else
        var c = setInterval(function() {
            "complete" == document.readyState && (clearInterval(c),
            a())
        }, 10)
}
;
g.g.FI = function() {
    var a = g.g.style.GI();
    return new g.g.Rect(a.y,document.documentElement.clientHeight + a.y,a.x,document.documentElement.clientWidth + a.x)
}
;
g.g.rr = function(a, c) {
    c = a.indexOf(c);
    if (-1 == c)
        return !1;
    a.splice(c, 1);
    return !0
}
;
g.g.zI = function() {
    var a = document.documentElement
      , c = window;
    return g.g.userAgent.Ze && c.pageYOffset != a.scrollTop ? new g.g.V(a.scrollLeft,a.scrollTop) : new g.g.V(c.pageXOffset || a.scrollLeft,c.pageYOffset || a.scrollTop)
}
;
g.g.rw = function(a, c) {
    var d = Object.create(null)
      , e = q(a, !0);
    c && (a = t(a)) && (a = e.indexOf(a),
    e.splice(a, e.length - a));
    for (a = 0; c = e[a]; a++)
        d[c.type] ? d[c.type]++ : d[c.type] = 1;
    return d
}
;
g.g.kP = function(a, c) {
    var d = c.x;
    c = c.y;
    var e = aa(a).getBoundingClientRect();
    d = new g.g.V(d - e.left,c - e.top);
    c = g.g.To(a.zb);
    return g.g.V.Ao(d, c).scale(1 / a.scale)
}
;
g.g.bt = function(a) {
    var c = "string" == typeof a ? g.g.se(a) : a
      , d = Number(c);
    if (!isNaN(d) && 0 <= d && 360 >= d)
        return {
            VI: d,
            Yo: g.g.Cb.lC(d)
        };
    if (d = g.g.Cb.parse(c))
        return {
            VI: null,
            Yo: d
        };
    d = 'Invalid colour: "' + c + '"';
    a != c && (d += ' (from "' + a + '")');
    throw Error(d);
}
;
g.Touch = {};
g.Touch.qA = "ontouchstart"in g.g.global || !!(g.g.global.document && document.documentElement && "ontouchstart"in document.documentElement) || !(!g.g.global.navigator || !g.g.global.navigator.maxTouchPoints && !g.g.global.navigator.msMaxTouchPoints);
g.Touch.eq = null;
g.Touch.og = {};
g.g.global.PointerEvent ? g.Touch.og = {
    mousedown: ["pointerdown"],
    mouseenter: ["pointerenter"],
    mouseleave: ["pointerleave"],
    mousemove: ["pointermove"],
    mouseout: ["pointerout"],
    mouseover: ["pointerover"],
    mouseup: ["pointerup", "pointercancel"],
    touchend: ["pointerup"],
    touchcancel: ["pointercancel"]
} : g.Touch.qA && (g.Touch.og = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});
g.Fs = 0;
g.kJ = function(a, c) {
    g.tj();
    a.changedTouches && 1 != a.changedTouches.length || (g.Fs = setTimeout(function() {
        a.changedTouches && (a.button = 2,
        a.clientX = a.changedTouches[0].clientX,
        a.clientY = a.changedTouches[0].clientY);
        c && ba(c, a)
    }, g.QF))
}
;
g.tj = function() {
    g.Fs && (clearTimeout(g.Fs),
    g.Fs = 0)
}
;
g.Touch.xk = function() {
    g.Touch.eq = null
}
;
g.Touch.Fy = function(a) {
    return !g.Touch.cJ(a) || g.Touch.zH(a)
}
;
g.Touch.os = function(a) {
    return void 0 != a.pointerId ? a.pointerId : a.changedTouches && a.changedTouches[0] && void 0 !== a.changedTouches[0].identifier && null !== a.changedTouches[0].identifier ? a.changedTouches[0].identifier : "mouse"
}
;
g.Touch.zH = function(a) {
    var c = g.Touch.os(a);
    return void 0 !== g.Touch.eq && null !== g.Touch.eq ? g.Touch.eq == c : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type ? (g.Touch.eq = c,
    !0) : !1
}
;
g.Touch.yK = function(a) {
    if (g.g.yb.startsWith(a.type, "touch")) {
        var c = a.changedTouches[0];
        a.clientX = c.clientX;
        a.clientY = c.clientY
    }
}
;
g.Touch.cJ = function(a) {
    return g.g.yb.startsWith(a.type, "touch") || g.g.yb.startsWith(a.type, "mouse") || g.g.yb.startsWith(a.type, "pointer")
}
;
g.Touch.Bs = function(a) {
    return g.g.yb.startsWith(a.type, "touch") || g.g.yb.startsWith(a.type, "pointer")
}
;
g.Touch.FK = function(a) {
    var c = [];
    if (a.changedTouches)
        for (var d = 0; d < a.changedTouches.length; d++)
            c[d] = {
                type: a.type,
                changedTouches: [a.changedTouches[d]],
                target: a.target,
                stopPropagation: function() {
                    a.stopPropagation()
                },
                preventDefault: function() {
                    a.preventDefault()
                }
            };
    else
        c.push(a);
    return c
}
;
g.M = {};
g.M.va = function(a, c, d, e, f, h) {
    function k(y) {
        var N = !f;
        y = g.Touch.FK(y);
        for (var Q = 0, F; F = y[Q]; Q++)
            if (!N || g.Touch.Fy(F))
                g.Touch.yK(F),
                d ? e.call(d, F) : e(F),
                l = !0
    }
    var l = !1
      , m = [];
    if (g.g.global.PointerEvent && c in g.Touch.og)
        for (var n = 0, p; p = g.Touch.og[c][n]; n++)
            a.addEventListener(p, k, !1),
            m.push([a, p, k]);
    else if (a.addEventListener(c, k, !1),
    m.push([a, c, k]),
    c in g.Touch.og) {
        var r = function(y) {
            k(y);
            var N = !h;
            l && N && y.preventDefault()
        };
        for (n = 0; p = g.Touch.og[c][n]; n++)
            a.addEventListener(p, r, !1),
            m.push([a, p, r])
    }
    return m
}
;
g.M.bind = function(a, c, d, e) {
    function f(n) {
        d ? e.call(d, n) : e(n)
    }
    var h = [];
    if (g.g.global.PointerEvent && c in g.Touch.og)
        for (var k = 0, l; l = g.Touch.og[c][k]; k++)
            a.addEventListener(l, f, !1),
            h.push([a, l, f]);
    else if (a.addEventListener(c, f, !1),
    h.push([a, c, f]),
    c in g.Touch.og) {
        var m = function(n) {
            if (n.changedTouches && 1 == n.changedTouches.length) {
                var p = n.changedTouches[0];
                n.clientX = p.clientX;
                n.clientY = p.clientY
            }
            f(n);
            n.preventDefault()
        };
        for (k = 0; l = g.Touch.og[c][k]; k++)
            a.addEventListener(l, m, !1),
            h.push([a, l, m])
    }
    return h
}
;
g.M.Ra = function(a) {
    for (; a.length; ) {
        var c = a.pop()
          , d = c[2];
        c[0].removeEventListener(c[1], d, !1)
    }
    return d
}
;
g.Uc = {};
g.Uc.Rw = !1;
g.Uc.register = function(a) {
    if (g.Uc.Rw)
        throw Error("CSS already injected");
    Array.prototype.push.apply(g.Uc.Rt, a);
    a.length = 0
}
;
g.Uc.Sk = function(a, c) {
    if (!g.Uc.Rw) {
        g.Uc.Rw = !0;
        var d = g.Uc.Rt.join("\n");
        g.Uc.Rt.length = 0;
        a && (a = c.replace(/[\\/]$/, ""),
        d = d.replace(/<<<PATH>>>/g, a),
        a = document.createElement("style"),
        a.id = "blockly-common-style",
        d = document.createTextNode(d),
        a.appendChild(d),
        document.head.insertBefore(a, document.head.firstChild))
    }
}
;
g.Uc.Rt = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "position: absolute;", "display: block;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 99999;", "}", ".injectionDiv {", "height: 100%;", "position: relative;", "overflow: hidden;", "touch-action: none;", "}", ".blocklyNonSelectable {", "user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "}", ".blocklyWsDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;", "}", ".blocklyWsDragSurface.blocklyOverflowVisible {", "overflow: visible;", "}", ".blocklyBlockDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;", "right: 0;", "bottom: 0;", "overflow: visible !important;", "z-index: 50;", "}", ".blocklyBlockCanvas.blocklyCanvasTransitioning,", ".blocklyBubbleCanvas.blocklyCanvasTransitioning {", "transition: transform .5s;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);", "color: #000;", "display: none;", "font: 9pt sans-serif;", "opacity: .9;", "padding: 2px;", "position: absolute;", "z-index: 100000;", "}", ".blocklyDropDownDiv {", "position: absolute;", "left: 0;", "top: 0;", "z-index: 1000;", "display: none;", "border: 1px solid;", "border-color: #dadce0;", "background-color: #fff;", "border-radius: 2px;", "padding: 4px;", "box-shadow: 0 0 3px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownDiv.blocklyFocused {", "box-shadow: 0 0 6px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownContent {", "max-height: 300px;", "overflow: auto;", "overflow-x: hidden;", "position: relative;", "}", ".blocklyDropDownArrow {", "position: absolute;", "left: 0;", "top: 0;", "width: 16px;", "height: 16px;", "z-index: -1;", "background-color: inherit;", "border-color: inherit;", "}", ".blocklyDropDownButton {", "display: inline-block;", "float: left;", "padding: 0;", "margin: 4px;", "border-radius: 4px;", "outline: none;", "border: 1px solid;", "transition: box-shadow .1s;", "cursor: pointer;", "}", ".blocklyArrowTop {", "border-top: 1px solid;", "border-left: 1px solid;", "border-top-left-radius: 4px;", "border-color: inherit;", "}", ".blocklyArrowBottom {", "border-bottom: 1px solid;", "border-right: 1px solid;", "border-bottom-right-radius: 4px;", "border-color: inherit;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;", "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #515A5A;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;", "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;", "stroke-width: 1;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;", "}", ".blocklyDraggable {", 'cursor: url("<<<PATH>>>/handopen.cur"), auto;', "cursor: grab;", "cursor: -webkit-grab;", "}", ".blocklyDragging {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDraggable:active {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyBlockDragSurface .blocklyDraggable {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDragging.blocklyDraggingDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {", "fill-opacity: .5;", "stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyInsertionMarker>.blocklyPath,", ".blocklyInsertionMarker>.blocklyPathLight,", ".blocklyInsertionMarker>.blocklyPathDark {", "fill-opacity: .2;", "stroke: none;", "}", ".blocklyMultilineText {", "font-family: monospace;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyFlyout {", "position: absolute;", "z-index: 20;", "}", ".blocklyText text {", "cursor: default;", "}", ".blocklySvg text,", ".blocklyBlockDragSurface text {", "user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;", "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {", "margin: 0;", "padding: 0;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "height: 100%;", "margin: 0;", "outline: none;", "padding: 0;", "width: 100%;", "text-align: center;", "display: block;", "box-sizing: border-box;", "}", ".blocklyHtmlInput::-ms-clear {", "display: none;", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyMainWorkspaceScrollbar {", "z-index: 20;", "}", ".blocklyFlyoutScrollbar {", "z-index: 30;", "}", ".blocklyScrollbarHorizontal,", ".blocklyScrollbarVertical {", "position: absolute;", "outline: none;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyVerticalMarker {", "stroke-width: 3px;", "fill: rgba(255,255,255,.5);", "pointer-events: none;", "}", ".blocklyComputeCanvas {", "position: absolute;", "width: 0;", "height: 0;", "}", ".blocklyNoPointerEvents {", "pointer-events: none;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "max-height: 100%;", "}", ".blocklyDropdownMenu {", "border-radius: 2px;", "padding: 0 !important;", "}", ".blocklyDropdownMenu .blocklyMenuItem {", "padding-left: 28px;", "}", ".blocklyDropdownMenu .blocklyMenuItemRtl {", "padding-left: 5px;", "padding-right: 28px;", "}", ".blocklyWidgetDiv .blocklyMenu {", "background: #fff;", "border: 1px solid transparent;", "box-shadow: 0 0 3px 1px rgba(0,0,0,.3);", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "}", ".blocklyWidgetDiv .blocklyMenu.blocklyFocused {", "box-shadow: 0 0 6px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownDiv .blocklyMenu {", "background: inherit;", "border: inherit;", 'font: normal 13px "Helvetica Neue", Helvetica, sans-serif;', "outline: none;", "position: relative;", "z-index: 20000;", "}", ".blocklyMenuItem {", "border: none;", "color: #000;", "cursor: pointer;", "list-style: none;", "margin: 0;", "min-width: 7em;", "padding: 6px 15px;", "white-space: nowrap;", "}", ".blocklyMenuItemDisabled {", "color: #ccc;", "cursor: inherit;", "}", ".blocklyMenuItemHighlight {", "background-color: rgba(0,0,0,.1);", "}", ".blocklyMenuItemCheckbox {", "height: 16px;", "position: absolute;", "width: 16px;", "}", ".blocklyMenuItemSelected .blocklyMenuItemCheckbox {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px;", "float: left;", "margin-left: -24px;", "position: static;", "}", ".blocklyMenuItemRtl .blocklyMenuItemCheckbox {", "float: right;", "margin-right: -24px;", "}"];
g.g.F = function(a) {
    this.PK = a
}
;
g.g.F.prototype.toString = function() {
    return this.PK
}
;
g.g.F.Jt = new g.g.F("animate");
g.g.F.Bq = new g.g.F("circle");
g.g.F.zn = new g.g.F("clipPath");
g.g.F.qz = new g.g.F("defs");
g.g.F.xz = new g.g.F("feComposite");
g.g.F.bM = new g.g.F("feComponentTransfer");
g.g.F.cM = new g.g.F("feFlood");
g.g.F.dM = new g.g.F("feFuncA");
g.g.F.ZE = new g.g.F("feGaussianBlur");
g.g.F.$E = new g.g.F("fePointLight");
g.g.F.aF = new g.g.F("feSpecularLighting");
g.g.F.hF = new g.g.F("filter");
g.g.F.jF = new g.g.F("foreignObject");
g.g.F.rc = new g.g.F("g");
g.g.F.jk = new g.g.F("image");
g.g.F.kk = new g.g.F("line");
g.g.F.Ld = new g.g.F("path");
g.g.F.eA = new g.g.F("pattern");
g.g.F.kG = new g.g.F("polygon");
g.g.F.Dc = new g.g.F("rect");
g.g.F.Ii = new g.g.F("svg");
g.g.F.Iu = new g.g.F("text");
g.g.F.Pu = new g.g.F("tspan");
g.g.o = {};
g.g.o.Un = "http://www.w3.org/2000/svg";
g.g.o.ik = "http://www.w3.org/1999/xhtml";
g.g.o.Mf = "http://www.w3.org/1999/xlink";
g.g.o.Di = {
    ELEMENT_NODE: 1,
    TEXT_NODE: 3,
    COMMENT_NODE: 8,
    DOCUMENT_POSITION_CONTAINED_BY: 16
};
g.g.o.Nf = null;
g.g.o.pv = 0;
g.g.o.Br = null;
g.g.o.N = function(a, c, d) {
    a = document.createElementNS(g.g.o.Un, String(a));
    for (var e in c)
        a.setAttribute(e, c[e]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    d && d.appendChild(a);
    return a
}
;
g.g.o.Fa = function(a, c) {
    var d = a.getAttribute("class") || "";
    -1 == (" " + d + " ").indexOf(" " + c + " ") && (d && (d += " "),
    a.setAttribute("class", d + c))
}
;
g.g.o.rD = function(a, c) {
    c = c.split(" ");
    for (var d = 0; d < c.length; d++)
        g.g.o.dc(a, c[d])
}
;
g.g.o.dc = function(a, c) {
    var d = a.getAttribute("class");
    if (-1 != (" " + d + " ").indexOf(" " + c + " ")) {
        d = d.split(/\s+/);
        for (var e = 0; e < d.length; e++)
            d[e] && d[e] != c || (d.splice(e, 1),
            e--);
        d.length ? a.setAttribute("class", d.join(" ")) : a.removeAttribute("class")
    }
}
;
g.g.o.qs = function(a, c) {
    return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ")
}
;
g.g.o.removeNode = function(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
}
;
g.g.o.Tk = function(a, c) {
    var d = c.nextSibling;
    c = c.parentNode;
    if (!c)
        throw Error("Reference node has no parent.");
    d ? c.insertBefore(a, d) : c.appendChild(a)
}
;
g.g.o.containsNode = function(a, c) {
    return !!(a.compareDocumentPosition(c) & g.g.o.Di.DOCUMENT_POSITION_CONTAINED_BY)
}
;
g.g.o.Mp = function(a, c) {
    a.style.transform = c;
    a.style["-webkit-transform"] = c
}
;
g.g.o.Vp = function() {
    g.g.o.pv++;
    g.g.o.Nf || (g.g.o.Nf = Object.create(null))
}
;
g.g.o.Wp = function() {
    g.g.o.pv--;
    g.g.o.pv || (g.g.o.Nf = null)
}
;
g.g.o.SO = function(a) {
    var c = a.textContent + "\n" + a.className.baseVal, d;
    if (g.g.o.Nf && (d = g.g.o.Nf[c]))
        return d;
    try {
        d = g.g.userAgent.Ze || g.g.userAgent.ek ? a.getBBox().width : a.getComputedTextLength()
    } catch (e) {
        return 8 * a.textContent.length
    }
    g.g.o.Nf && (g.g.o.Nf[c] = d);
    return d
}
;
g.g.o.xw = function(a, c, d, e) {
    return g.g.o.MB(a, c + "pt", d, e)
}
;
g.g.o.MB = function(a, c, d, e) {
    var f = a.textContent;
    a = f + "\n" + a.className.baseVal;
    var h;
    if (g.g.o.Nf && (h = g.g.o.Nf[a]))
        return h;
    g.g.o.Br || (h = document.createElement("canvas"),
    h.className = "blocklyComputeCanvas",
    document.body.appendChild(h),
    g.g.o.Br = h.getContext("2d"));
    g.g.o.Br.font = d + " " + c + " " + e;
    h = g.g.o.Br.measureText(f).width;
    g.g.o.Nf && (g.g.o.Nf[a] = h);
    return h
}
;
g.g.o.GC = function(a, c, d, e) {
    var f = document.createElement("span");
    f.style.font = d + " " + c + " " + e;
    f.textContent = a;
    a = document.createElement("div");
    a.style.width = "1px";
    a.style.height = "0px";
    c = document.createElement("div");
    c.setAttribute("style", "position: fixed; top: 0; left: 0; display: flex;");
    c.appendChild(f);
    c.appendChild(a);
    document.body.appendChild(c);
    try {
        d = {},
        c.style.alignItems = "baseline",
        d.ff = a.offsetTop - f.offsetTop,
        c.style.alignItems = "flex-end",
        d.height = a.offsetTop - f.offsetTop
    } finally {
        document.body.removeChild(c)
    }
    return d
}
;
g.gk = function(a, c, d, e) {
    this.s = a;
    this.Bt = c;
    this.ai = d.text;
    this.rl = new g.g.V(0,0);
    this.Nh = e;
    this.Ar = d.callbackKey || d.callbackkey;
    this.iB = d["web-class"] || null;
    this.ld = null;
    this.info = d
}
;
g.gk.UF = 5;
g.gk.VF = 2;
b = g.gk.prototype;
b.width = 0;
b.height = 0;
b.eb = function() {
    var a = this.Nh ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
    this.iB && (a += " " + this.iB);
    this.R = g.g.o.N(g.g.F.rc, {
        "class": a
    }, this.s.zb);
    if (!this.Nh)
        var c = g.g.o.N(g.g.F.Dc, {
            "class": "blocklyFlyoutButtonShadow",
            rx: 4,
            ry: 4,
            x: 1,
            y: 1
        }, this.R);
    a = g.g.o.N(g.g.F.Dc, {
        "class": this.Nh ? "blocklyFlyoutLabelBackground" : "blocklyFlyoutButtonBackground",
        rx: 4,
        ry: 4
    }, this.R);
    var d = g.g.o.N(g.g.F.Iu, {
        "class": this.Nh ? "blocklyFlyoutLabelText" : "blocklyText",
        x: 0,
        y: 0,
        "text-anchor": "middle"
    }, this.R)
      , e = g.g.se(this.ai);
    this.s.L && (e += "\u200f");
    d.textContent = e;
    this.Nh && (this.Ky = d,
    this.s.Bc.subscribe(this.Ky, "flyoutForegroundColour", "fill"));
    var f = g.g.style.getComputedStyle(d, "fontSize")
      , h = g.g.style.getComputedStyle(d, "fontWeight")
      , k = g.g.style.getComputedStyle(d, "fontFamily");
    this.width = g.g.o.MB(d, f, h, k);
    e = g.g.o.GC(e, f, h, k);
    this.height = e.height;
    this.Nh || (this.width += 2 * g.gk.UF,
    this.height += 2 * g.gk.VF,
    c.setAttribute("width", this.width),
    c.setAttribute("height", this.height));
    a.setAttribute("width", this.width);
    a.setAttribute("height", this.height);
    d.setAttribute("x", this.width / 2);
    d.setAttribute("y", this.height / 2 - e.height / 2 + e.ff);
    ca(this);
    this.ld = g.M.va(this.R, "mouseup", this, this.QJ);
    return this.R
}
;
b.show = function() {
    ca(this);
    this.R.setAttribute("display", "block")
}
;
function ca(a) {
    a.R.setAttribute("transform", "translate(" + a.rl.x + "," + a.rl.y + ")")
}
b.moveTo = function(a, c) {
    this.rl.x = a;
    this.rl.y = c;
    ca(this)
}
;
b.I = function() {
    this.ld && g.M.Ra(this.ld);
    this.R && g.g.o.removeNode(this.R);
    this.Ky && this.s.Bc.unsubscribe(this.Ky)
}
;
b.QJ = function(a) {
    (a = this.Bt.Eh(a)) && a.cancel();
    this.Nh && this.Ar ? console.warn("Labels should not have callbacks. Label text: " + this.ai) : this.Nh || this.Ar && da(this.Bt, this.Ar) ? this.Nh || da(this.Bt, this.Ar)(this) : console.warn("Buttons should have callbacks. Button text: " + this.ai)
}
;
g.Uc.register(".blocklyFlyoutButton {,fill: #888;,cursor: default;,},.blocklyFlyoutButtonShadow {,fill: #666;,},.blocklyFlyoutButton:hover {,fill: #aaa;,},.blocklyFlyoutLabel {,cursor: default;,},.blocklyFlyoutLabelBackground {,opacity: 0;,}".split(","));
g.Tb = function() {
    this.Xi = Object.create(null);
    this.nm = Object.create(null)
}
;
function ea(a, c) {
    var d = c.zk.id;
    if (a.Xi[d])
        throw Error('Plugin "' + d + '" with capabilities "' + a.Xi[d].tg + '" already added.');
    a.Xi[d] = c;
    for (var e = [], f = 0; f < c.tg.length; f++) {
        var h = String(c.tg[f]).toLowerCase();
        e.push(h);
        void 0 === a.nm[h] ? a.nm[h] = [d] : a.nm[h].push(d)
    }
    a.Xi[d].tg = e
}
function fa(a, c) {
    var d = a.Xi[c];
    if (d) {
        for (var e = 0; e < d.tg.length; e++) {
            var f = String(d.tg[e]).toLowerCase();
            a.nm[f].splice(a.nm[f].indexOf(c), 1)
        }
        delete a.Xi[c]
    }
}
function ha(a, c) {
    var d = g.Tb.bc.Jq;
    d = String(d).toLowerCase();
    return -1 !== a.Xi[c].tg.indexOf(d)
}
function ia(a, c) {
    c = String(c).toLowerCase();
    c = a.nm[c];
    if (!c)
        return [];
    var d = []
      , e = []
      , f = a.Xi;
    c.forEach(function(h) {
        e.push(f[h])
    });
    e.sort(function(h, k) {
        return h.weight - k.weight
    });
    e.forEach(function(h) {
        d.push(h.zk)
    });
    return d
}
g.Tb.bc = function(a) {
    this.Lg = a
}
;
g.Tb.bc.prototype.toString = function() {
    return this.Lg
}
;
g.Tb.bc.wu = new g.Tb.bc("positionable");
g.Tb.bc.Kq = new g.Tb.bc("drag_target");
g.Tb.bc.Jq = new g.Tb.bc("delete_area");
g.Tb.bc.Lt = new g.Tb.bc("autohideable");
g.B = {};
g.B.qn = Object.create(null);
g.B.bk = "default";
g.B.U = function(a) {
    this.Lg = a
}
;
g.B.U.prototype.toString = function() {
    return this.Lg
}
;
g.B.U.lz = new g.B.U("connectionChecker");
g.B.U.ak = new g.B.U("cursor");
g.B.U.cc = new g.B.U("event");
g.B.U.qd = new g.B.U("field");
g.B.U.RENDERER = new g.B.U("renderer");
g.B.U.pA = new g.B.U("toolbox");
g.B.U.Ju = new g.B.U("theme");
g.B.U.fm = new g.B.U("toolboxItem");
g.B.U.Pq = new g.B.U("flyoutsVerticalToolbox");
g.B.U.Zt = new g.B.U("flyoutsHorizontalToolbox");
g.B.U.Uz = new g.B.U("metricsManager");
g.B.U.gz = new g.B.U("blockDragger");
g.B.register = function(a, c, d, e) {
    if (!(a instanceof g.B.U) && "string" != typeof a || "" == String(a).trim())
        throw Error('Invalid type "' + a + '". The type must be a non-empty string or a Blockly.registry.Type.');
    a = String(a).toLowerCase();
    if ("string" != typeof c || "" == c.trim())
        throw Error('Invalid name "' + c + '". The name must be a non-empty string.');
    c = c.toLowerCase();
    if (!d)
        throw Error("Can not register a null value");
    var f = g.B.qn[a];
    f || (f = g.B.qn[a] = Object.create(null));
    g.B.cL(a, d);
    if (!e && f[c])
        throw Error('Name "' + c + '" with type "' + a + '" already registered.');
    f[c] = d
}
;
g.B.cL = function(a, c) {
    switch (a) {
    case String(g.B.U.qd):
        if ("function" != typeof c.ka)
            throw Error('Type "' + a + '" must have a fromJson function');
    }
}
;
g.B.unregister = function(a, c) {
    a = String(a).toLowerCase();
    c = c.toLowerCase();
    var d = g.B.qn[a];
    d && d[c] ? delete g.B.qn[a][c] : console.warn("Unable to unregister [" + c + "][" + a + "] from the registry.")
}
;
g.B.NB = function(a, c, d) {
    a = String(a).toLowerCase();
    c = c.toLowerCase();
    var e = g.B.qn[a];
    if (!e || !e[c]) {
        c = "Unable to find [" + c + "][" + a + "] in the registry.";
        if (d)
            throw Error(c + " You must require or register a " + a + " plugin.");
        console.warn(c);
        return null
    }
    return e[c]
}
;
g.B.QI = function(a) {
    var c = g.B.U.fm;
    c = String(c).toLowerCase();
    a = a.toLowerCase();
    return (c = g.B.qn[c]) ? !!c[a] : !1
}
;
g.B.Po = function(a, c, d) {
    return g.B.NB(a, c, d)
}
;
g.B.Bw = function(a, c) {
    return g.B.NB(a, c)
}
;
g.B.Qf = function(a, c, d) {
    c = c.plugins[a.toString()] || g.B.bk;
    return "function" == typeof c ? c : g.B.Po(a, c, d)
}
;
g.h = {};
g.h.bC = "";
g.h.$a = !0;
g.h.Sv = 0;
g.h.Bn = "create";
g.h.ji = g.h.Bn;
g.h.ck = "delete";
g.h.vq = g.h.ck;
g.h.Zj = "change";
g.h.eg = g.h.Zj;
g.h.Kn = "move";
g.h.ki = g.h.Kn;
g.h.Wn = "var_create";
g.h.mr = "var_delete";
g.h.Tu = "var_rename";
g.h.Ru = "ui";
g.h.wq = "drag";
g.h.Hi = "selected";
g.h.Jl = "click";
g.h.ku = "marker_move";
g.h.Vj = "bubble_open";
g.h.Ou = "trashcan_open";
g.h.Lu = "toolbox_item_select";
g.h.Ku = "theme_change";
g.h.Xn = "viewport_change";
g.h.Eq = "comment_create";
g.h.kz = "comment_delete";
g.h.jz = "comment_change";
g.h.An = "comment_move";
g.h.Yt = "finished_loading";
g.h.rE = [g.h.ji, g.h.ki, g.h.Eq, g.h.An];
g.h.En = [];
g.h.Ga = function(a) {
    g.h.isEnabled() && (g.h.En.length || setTimeout(g.h.lI, 0),
    g.h.En.push(a))
}
;
g.h.lI = function() {
    for (var a = g.h.filter(g.h.En, !0), c = g.h.En.length = 0, d; d = a[c]; c++)
        if (d.Sc) {
            var e = g.Ub.Oo(d.Sc);
            if (e) {
                var f = d;
                if (f.$a)
                    for (e.Al.push(f),
                    e.Cp.length = 0; e.Al.length > e.Sz && 0 <= e.Sz; )
                        e.Al.shift();
                for (var h = 0; d = e.$d[h]; h++)
                    d(f)
            }
        }
}
;
g.h.filter = function(a, c) {
    a = a.slice();
    c || a.reverse();
    for (var d = [], e = Object.create(null), f = 0, h; h = a[f]; f++)
        if (!h.Om()) {
            var k = [h.Xw ? g.h.Ru : h.type, h.ob, h.Sc].join(" ")
              , l = e[k]
              , m = l ? l.event : null;
            if (!l)
                e[k] = {
                    event: h,
                    index: f
                },
                d.push(h);
            else if (h.type == g.h.Kn && l.index == f - 1)
                m.jl = h.jl,
                m.il = h.il,
                m.xj = h.xj,
                l.index = f;
            else if (h.type == g.h.Zj && h.element == m.element && h.name == m.name)
                m.newValue = h.newValue;
            else if (h.type == g.h.Xn)
                m.If = h.If,
                m.Hf = h.Hf,
                m.scale = h.scale,
                m.tp = h.tp;
            else if (h.type != g.h.Jl || m.type != g.h.Vj)
                e[k] = {
                    event: h,
                    index: f
                },
                d.push(h)
        }
    a = d.filter(function(n) {
        return !n.Om()
    });
    c || a.reverse();
    for (f = 1; h = a[f]; f++)
        h.type == g.h.Zj && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
    return a
}
;
g.h.BH = function() {
    for (var a = 0, c; c = g.h.En[a]; a++)
        c.$a = !1
}
;
g.h.disable = function() {
    g.h.Sv++
}
;
g.h.enable = function() {
    g.h.Sv--
}
;
g.h.isEnabled = function() {
    return 0 == g.h.Sv
}
;
g.h.oc = function() {
    return g.h.bC
}
;
g.h.la = function(a) {
    g.h.bC = "boolean" == typeof a ? a ? g.g.Dg() : "" : a
}
;
g.h.KB = function(a) {
    var c = [];
    a = q(a, !1);
    for (var d = 0, e; e = a[d]; d++)
        c[d] = e.id;
    return c
}
;
g.h.ka = function(a) {
    var c = g.h.get(a.type);
    if (!c)
        throw Error("Unknown event type.");
    c = new c;
    c.ka(a);
    c.Sc = (void 0).id;
    return c
}
;
g.h.get = function(a) {
    return g.B.Po(g.B.U.cc, a)
}
;
g.h.ZH = function(a) {
    if ((a.type == g.h.Kn || a.type == g.h.Bn) && a.Sc) {
        var c = g.Ub.Oo(a.Sc)
          , d = c.Td(a.ob);
        if (d) {
            a = g.h.$a;
            try {
                g.h.$a = !1;
                var e = d.getParent();
                if (e && e.isEnabled()) {
                    var f = q(d, !1);
                    c = 0;
                    for (var h; h = f[c]; c++)
                        h.ee(!0)
                } else if ((d.T || d.qa) && !c.yc()) {
                    do
                        d.ee(!1),
                        d = t(d);
                    while (d)
                }
            } finally {
                g.h.$a = a
            }
        }
    }
}
;
g.h.Abstract = function() {
    this.Me = null;
    this.Sc = void 0;
    this.group = g.h.oc();
    this.$a = g.h.$a
}
;
b = g.h.Abstract.prototype;
b.Xw = !1;
b.Ca = function() {
    var a = {
        type: this.type
    };
    this.group && (a.group = this.group);
    return a
}
;
b.ka = function(a) {
    this.Me = !1;
    this.group = a.group
}
;
b.Om = function() {
    return !1
}
;
b.run = function() {}
;
function u(a) {
    if (a.Sc)
        var c = g.Ub.Oo(a.Sc);
    if (!c)
        throw Error("Workspace is null. Event must have been generated from real Blockly events.");
    return c
}
;g.g.object = {};
g.g.object.W = function(a, c) {
    a.v = c.prototype;
    a.prototype = Object.create(c.prototype);
    a.prototype.constructor = a
}
;
g.g.object.Oe = function(a, c) {
    for (var d in c)
        a[d] = c[d]
}
;
g.g.object.um = function(a, c) {
    for (var d in c)
        a[d] = null != c[d] && "object" === typeof c[d] ? g.g.object.um(a[d] || Object.create(null), c[d]) : c[d];
    return a
}
;
g.g.object.values = function(a) {
    return Object.values ? Object.values(a) : Object.keys(a).map(function(c) {
        return a[c]
    })
}
;
g.h.ze = function(a) {
    g.h.ze.v.constructor.call(this);
    this.Me = "undefined" == typeof a;
    this.Sc = a ? a : "";
    this.$a = !1
}
;
g.g.object.W(g.h.ze, g.h.Abstract);
g.h.ze.prototype.Xw = !0;
g.h.Oi = function(a, c, d, e) {
    g.h.Oi.v.constructor.call(this, a ? a.u.id : void 0);
    this.ob = a ? a.id : null;
    this.element = "undefined" == typeof c ? "" : c;
    this.oldValue = "undefined" == typeof d ? "" : d;
    this.newValue = "undefined" == typeof e ? "" : e
}
;
g.g.object.W(g.h.Oi, g.h.ze);
g.h.Oi.prototype.type = g.h.Ru;
g.h.Oi.prototype.Ca = function() {
    var a = g.h.Oi.v.Ca.call(this);
    a.element = this.element;
    void 0 !== this.newValue && (a.newValue = this.newValue);
    this.ob && (a.blockId = this.ob);
    return a
}
;
g.h.Oi.prototype.ka = function(a) {
    g.h.Oi.v.ka.call(this, a);
    this.element = a.element;
    this.newValue = a.newValue;
    this.ob = a.blockId
}
;
g.B.register(g.B.U.cc, g.h.Ru, g.h.Oi);
g.h.oi = function(a, c, d) {
    g.h.oi.v.constructor.call(this, a ? a.u.id : c);
    this.ob = a ? a.id : null;
    this.HD = d
}
;
g.g.object.W(g.h.oi, g.h.ze);
g.h.oi.prototype.type = g.h.Jl;
g.h.oi.prototype.Ca = function() {
    var a = g.h.oi.v.Ca.call(this);
    a.targetType = this.HD;
    this.ob && (a.blockId = this.ob);
    return a
}
;
g.h.oi.prototype.ka = function(a) {
    g.h.oi.v.ka.call(this, a);
    this.HD = a.targetType;
    this.ob = a.blockId
}
;
g.B.register(g.B.U.cc, g.h.Jl, g.h.oi);
g.yM = function() {}
;
g.MM = function() {}
;
g.g.dN = function() {}
;
g.Hu = function(a, c, d, e, f) {
    this.s = a;
    c = void 0 === c ? !0 : c;
    d = void 0 === d ? !0 : d;
    var h = c && d;
    c && (this.Fb = new g.bb(a,!0,h,e,f));
    d && (this.sb = new g.bb(a,!1,h,e,f));
    h && (this.uo = g.g.o.N(g.g.F.Dc, {
        height: g.bb.md,
        width: g.bb.md,
        "class": "blocklyScrollbarBackground"
    }, null),
    g.g.o.Tk(this.uo, a.$f));
    this.wb = null
}
;
b = g.Hu.prototype;
b.I = function() {
    g.g.o.removeNode(this.uo);
    this.wb = this.s = this.uo = null;
    this.Fb && (this.Fb.I(),
    this.Fb = null);
    this.sb && (this.sb.I(),
    this.sb = null)
}
;
b.resize = function() {
    var a = this.s.Ud();
    if (a) {
        var c = !1
          , d = !1;
        this.wb && this.wb.Ic == a.Ic && this.wb.Rc == a.Rc && this.wb.Pd == a.Pd && this.wb.ud == a.ud ? (this.wb && this.wb.scrollWidth == a.scrollWidth && this.wb.Hf == a.Hf && this.wb.scrollLeft == a.scrollLeft || (c = !0),
        this.wb && this.wb.scrollHeight == a.scrollHeight && this.wb.If == a.If && this.wb.scrollTop == a.scrollTop || (d = !0)) : d = c = !0;
        if (c || d) {
            try {
                g.h.disable(),
                this.Fb && c && this.Fb.resize(a),
                this.sb && d && this.sb.resize(a)
            } finally {
                g.h.enable()
            }
            ja(this.s)
        }
        this.Fb && this.sb && (this.wb && this.wb.Ic == a.Ic && this.wb.ud == a.ud || this.uo.setAttribute("x", this.sb.position.x),
        this.wb && this.wb.Rc == a.Rc && this.wb.Pd == a.Pd || this.uo.setAttribute("y", this.Fb.position.y));
        this.wb = a
    }
}
;
b.tt = function(a, c) {
    this.Fb && this.Fb.tt(a, c);
    this.sb && this.sb.tt(a, c)
}
;
b.set = function(a, c, d) {
    this.Fb && this.Fb.set(a, !1);
    this.sb && this.sb.set(c, !1);
    if (d || void 0 === d)
        a = {},
        this.Fb && (a.x = ka(this.Fb)),
        this.sb && (a.y = ka(this.sb)),
        this.s.Np(a)
}
;
b.vl = function(a) {
    this.Fb && this.Fb.vl(a);
    this.sb && this.sb.vl(a)
}
;
b.isVisible = function() {
    var a = !1;
    this.Fb && (a = this.Fb.isVisible());
    this.sb && (a = a || this.sb.isVisible());
    return a
}
;
g.bb = function(a, c, d, e, f) {
    this.s = a;
    this.Bj = d || !1;
    this.Ok = c;
    this.bl = void 0 !== f ? f : g.bb.KE;
    this.ratio = this.wb = null;
    this.Fe(e);
    this.position = new g.g.V(0,0);
    a = g.bb.md;
    c ? (this.nd.setAttribute("height", a),
    this.Mg.setAttribute("height", a),
    this.Ue.setAttribute("height", a - 5),
    this.Ue.setAttribute("y", 2.5),
    this.Ds = "width",
    this.gD = "x") : (this.nd.setAttribute("width", a),
    this.Mg.setAttribute("width", a),
    this.Ue.setAttribute("width", a - 5),
    this.Ue.setAttribute("x", 2.5),
    this.Ds = "height",
    this.gD = "y");
    this.$C = g.M.va(this.nd, "mousedown", this, this.KJ);
    this.aD = g.M.va(this.Ue, "mousedown", this, this.LJ)
}
;
b = g.bb.prototype;
b.Qx = new g.g.V(0,0);
b.BD = 0;
b.Cf = 0;
b.gj = 0;
b.Wo = 0;
b.Ne = !0;
b.Ak = !0;
g.bb.md = 15;
g.Touch.qA && (g.bb.md = 25);
g.bb.KE = .5;
g.bb.pJ = function(a, c) {
    return a.Ic == c.Ic && a.Rc == c.Rc && a.Hf == c.Hf && a.If == c.If && a.Pd == c.Pd && a.ud == c.ud && a.scrollWidth == c.scrollWidth && a.scrollHeight == c.scrollHeight && a.scrollLeft == c.scrollLeft && a.scrollTop == c.scrollTop
}
;
b = g.bb.prototype;
b.I = function() {
    la();
    g.M.Ra(this.$C);
    this.$C = null;
    g.M.Ra(this.aD);
    this.aD = null;
    g.g.o.removeNode(this.Mg);
    this.nd = this.R = this.Mg = null;
    this.Ue && (this.s.Bc.unsubscribe(this.Ue),
    this.Ue = null);
    this.s = null
}
;
function ma(a, c) {
    return c = 0 >= c || isNaN(c) ? 0 : Math.min(c, a.Cf)
}
function na(a, c) {
    a.gj = c;
    a.Ue.setAttribute(a.Ds, a.gj)
}
function oa(a, c) {
    return c = 0 >= c || isNaN(c) ? 0 : Math.min(c, a.Cf - a.gj)
}
function pa(a, c) {
    a.Wo = c;
    a.Ue.setAttribute(a.gD, a.Wo)
}
function qa(a, c) {
    a.Cf = c;
    a.Mg.setAttribute(a.Ds, a.Cf);
    a.nd.setAttribute(a.Ds, a.Cf)
}
b.setPosition = function(a, c) {
    this.position.x = a;
    this.position.y = c;
    g.g.o.Mp(this.Mg, "translate(" + (this.position.x + this.Qx.x) + "px," + (this.position.y + this.Qx.y) + "px)")
}
;
b.resize = function(a) {
    if (!a && (a = this.s.Ud(),
    !a))
        return;
    if (!this.wb || !g.bb.pJ(a, this.wb)) {
        if (this.Ok) {
            var c = a;
            sa(this, c) ? ta(this, c) : ua(this, c)
        } else
            c = a,
            sa(this, c) ? va(this, c) : wa(this, c);
        this.wb = a;
        xa(this)
    }
}
;
function sa(a, c) {
    return a.wb ? a.wb.Ic !== c.Ic || a.wb.Rc !== c.Rc || a.wb.ud !== c.ud || a.wb.Pd !== c.Pd : !0
}
function ta(a, c) {
    var d = c.Ic - 2 * a.bl;
    a.Bj && (d -= g.bb.md);
    qa(a, Math.max(0, d));
    d = c.ud + a.bl;
    a.Bj && a.s.L && (d += g.bb.md);
    a.setPosition(d, c.Pd + c.Rc - g.bb.md - a.bl);
    ua(a, c)
}
function ua(a, c) {
    if (c.Ic >= c.scrollWidth)
        na(a, a.Cf),
        pa(a, 0),
        a.Bj || a.rb(!1);
    else {
        a.Bj || a.rb(!0);
        var d = a.Cf * c.Ic / c.scrollWidth;
        d = ma(a, d);
        na(a, d);
        d = c.scrollWidth - c.Ic;
        var e = a.Cf - a.gj;
        c = (c.Hf - c.scrollLeft) / d * e;
        c = oa(a, c);
        pa(a, c);
        a.ratio = e / d
    }
}
function va(a, c) {
    var d = c.Rc - 2 * a.bl;
    a.Bj && (d -= g.bb.md);
    qa(a, Math.max(0, d));
    a.setPosition(a.s.L ? c.ud + a.bl : c.ud + c.Ic - g.bb.md - a.bl, c.Pd + a.bl);
    wa(a, c)
}
function wa(a, c) {
    if (c.Rc >= c.scrollHeight)
        na(a, a.Cf),
        pa(a, 0),
        a.Bj || a.rb(!1);
    else {
        a.Bj || a.rb(!0);
        var d = a.Cf * c.Rc / c.scrollHeight;
        d = ma(a, d);
        na(a, d);
        d = c.scrollHeight - c.Rc;
        var e = a.Cf - a.gj;
        c = (c.If - c.scrollTop) / d * e;
        c = oa(a, c);
        pa(a, c);
        a.ratio = e / d
    }
}
b.Fe = function(a) {
    var c = "blocklyScrollbar" + (this.Ok ? "Horizontal" : "Vertical");
    a && (c += " " + a);
    this.Mg = g.g.o.N(g.g.F.Ii, {
        "class": c
    }, null);
    this.R = g.g.o.N(g.g.F.rc, {}, this.Mg);
    this.nd = g.g.o.N(g.g.F.Dc, {
        "class": "blocklyScrollbarBackground"
    }, this.R);
    a = Math.floor((g.bb.md - 5) / 2);
    this.Ue = g.g.o.N(g.g.F.Dc, {
        "class": "blocklyScrollbarHandle",
        rx: a,
        ry: a
    }, this.R);
    this.s.Bc.subscribe(this.Ue, "scrollbarColour", "fill");
    this.s.Bc.subscribe(this.Ue, "scrollbarOpacity", "fill-opacity");
    g.g.o.Tk(this.Mg, v(this.s))
}
;
b.isVisible = function() {
    return this.Ne
}
;
b.vl = function(a) {
    var c = a != this.Ak;
    this.Ak = a;
    c && this.hq()
}
;
b.rb = function(a) {
    var c = a != this.isVisible();
    if (this.Bj)
        throw Error("Unable to toggle visibility of paired scrollbars.");
    this.Ne = a;
    c && this.hq()
}
;
b.hq = function() {
    this.Ak && this.isVisible() ? this.Mg.setAttribute("display", "block") : this.Mg.setAttribute("display", "none")
}
;
b.KJ = function(a) {
    ya(this.s);
    g.Touch.xk();
    la();
    if (g.g.$k(a))
        a.stopPropagation();
    else {
        var c = g.g.rp(a, v(this.s), za(this.s));
        c = this.Ok ? c.x : c.y;
        var d = g.g.To(this.Ue);
        d = this.Ok ? d.x : d.y;
        var e = this.Wo
          , f = .95 * this.gj;
        c <= d ? e -= f : c >= d + this.gj && (e += f);
        pa(this, oa(this, e));
        xa(this);
        a.stopPropagation();
        a.preventDefault()
    }
}
;
b.LJ = function(a) {
    ya(this.s);
    la();
    g.g.$k(a) ? a.stopPropagation() : (this.IK = this.Wo,
    Aa(this.s),
    this.BD = this.Ok ? a.clientX : a.clientY,
    g.bb.ld = g.M.va(document, "mouseup", this, this.PJ),
    g.bb.zj = g.M.va(document, "mousemove", this, this.MJ),
    a.stopPropagation(),
    a.preventDefault())
}
;
b.MJ = function(a) {
    pa(this, oa(this, this.IK + ((this.Ok ? a.clientX : a.clientY) - this.BD)));
    xa(this)
}
;
b.PJ = function() {
    Ba(this.s);
    g.Touch.xk();
    la()
}
;
function la() {
    g.Fc(!0);
    g.bb.ld && (g.M.Ra(g.bb.ld),
    g.bb.ld = null);
    g.bb.zj && (g.M.Ra(g.bb.zj),
    g.bb.zj = null)
}
function ka(a) {
    a = a.Wo / (a.Cf - a.gj);
    isNaN(a) && (a = 0);
    return a
}
function xa(a) {
    var c = ka(a)
      , d = {};
    a.Ok ? d.x = c : d.y = c;
    a.s.Np(d)
}
b.set = function(a, c) {
    pa(this, oa(this, a * this.ratio));
    (c || void 0 === c) && xa(this)
}
;
b.tt = function(a, c) {
    this.Qx = new g.g.V(a,c)
}
;
g.lb = {
    rg: g.pa.tc,
    df: g.pa.bd,
    jg: 5
};
g.g.xml = {};
g.g.xml.aG = "https://developers.google.com/blockly/xml";
g.g.xml.document = function() {
    return document
}
;
g.g.xml.createElement = function(a) {
    return g.g.xml.document().createElementNS(g.g.xml.aG, a)
}
;
g.g.xml.createTextNode = function(a) {
    return g.g.xml.document().createTextNode(a)
}
;
g.g.xml.QK = function(a) {
    return (new DOMParser).parseFromString(a, "text/xml")
}
;
g.g.xml.pe = function(a) {
    return (new XMLSerializer).serializeToString(a)
}
;
g.P = {};
g.P.kL = function() {
    var a = w
      , c = g.g.xml.createElement("xml")
      , d = g.P.fL(g.$.Zu(a));
    d.hasChildNodes() && c.appendChild(d);
    var e = [].concat(a.Et);
    1 < e.length && (a.Vg.offset = Math.sin(g.g.Sa.Cd(g.Ub.hA)),
    a.L && (a.Vg.offset *= -1),
    e.sort(a.Vg));
    d = 0;
    for (var f; f = e[d]; d++)
        c.appendChild(f.LD(!0));
    a = a.xc(!0);
    for (d = 0; e = a[d]; d++)
        c.appendChild(g.P.hv(e, !0));
    return c
}
;
g.P.fL = function(a) {
    for (var c = g.g.xml.createElement("variables"), d = 0, e; e = a[d]; d++) {
        var f = g.g.xml.createElement("variable");
        f.appendChild(g.g.xml.createTextNode(e.name));
        e.type && f.setAttribute("type", e.type);
        f.id = e.La();
        c.appendChild(f)
    }
    return c
}
;
g.P.hv = function(a, c) {
    if (a.zd() && (a = Ca(a, !1)[0],
    !a))
        return new DocumentFragment;
    var d;
    a.u.L && (d = a.u.Ih());
    c = g.P.ph(a, c);
    var e = a.jb();
    c.setAttribute("x", Math.round(a.u.L ? d - e.x : e.x));
    c.setAttribute("y", Math.round(e.y));
    return c
}
;
g.P.kI = function(a) {
    var c = !1;
    a.name && (a.qk ? c = !0 : a.Lq && (console.warn("Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."),
    c = !0));
    return c ? (c = g.g.xml.createElement("field"),
    c.setAttribute("name", a.name || ""),
    a.KD(c)) : null
}
;
g.P.bH = function(a, c) {
    for (var d = 0, e; e = a.Z[d]; d++)
        for (var f = 0, h; h = e.ib[f]; f++)
            (h = g.P.kI(h)) && c.appendChild(h)
}
;
g.P.ph = function(a, c) {
    if (a.zd())
        return (a = Ca(a, !1)[0]) ? g.P.ph(a) : new DocumentFragment;
    var d = g.g.xml.createElement(a.Pa ? "shadow" : "block");
    d.setAttribute("type", a.type);
    c || d.setAttribute("id", a.id);
    if (a.pb) {
        var e = a.pb();
        e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e)
    }
    g.P.bH(a, d);
    if (e = a.Ce.text) {
        var f = a.Ce.size
          , h = a.Ce.Yx
          , k = g.g.xml.createElement("comment");
        k.appendChild(g.g.xml.createTextNode(e));
        k.setAttribute("pinned", h);
        k.setAttribute("h", f.height);
        k.setAttribute("w", f.width);
        d.appendChild(k)
    }
    a.data && (e = g.g.xml.createElement("data"),
    e.appendChild(g.g.xml.createTextNode(a.data)),
    d.appendChild(e));
    for (e = 0; f = a.Z[e]; e++) {
        var l;
        h = !0;
        if (f.type != g.lb.jg) {
            var m = f.connection.sa();
            f.type == g.lb.rg ? l = g.g.xml.createElement("value") : f.type == g.lb.df && (l = g.g.xml.createElement("statement"));
            k = f.connection.Em();
            !k || m && m.Pa || l.appendChild(g.P.UA(k, c));
            m && (k = g.P.ph(m, c),
            k.nodeType == g.g.o.Di.ELEMENT_NODE && (l.appendChild(k),
            h = !1));
            l.setAttribute("name", f.name);
            h || d.appendChild(l)
        }
    }
    void 0 != a.Kh && a.Kh != a.ZI && d.setAttribute("inline", a.Kh);
    a.isCollapsed() && d.setAttribute("collapsed", !0);
    a.isEnabled() || d.setAttribute("disabled", !0);
    a.vf() || a.Pa || d.setAttribute("deletable", !1);
    a.Gc() || a.Pa || d.setAttribute("movable", !1);
    a.Yd() || d.setAttribute("editable", !1);
    if (e = t(a))
        k = g.P.ph(e, c),
        k.nodeType == g.g.o.Di.ELEMENT_NODE && (l = g.g.xml.createElement("next"),
        l.appendChild(k),
        d.appendChild(l));
    k = a.ba && a.ba.Em();
    !k || e && e.Pa || l.appendChild(g.P.UA(k, c));
    return d
}
;
g.P.UA = function(a, c) {
    for (var d = a = a.cloneNode(!0), e; d; )
        if (c && "shadow" == d.nodeName && d.removeAttribute("id"),
        d.firstChild)
            d = d.firstChild;
        else {
            for (; d && !d.nextSibling; )
                e = d,
                d = d.parentNode,
                e.nodeType == g.g.o.Di.TEXT_NODE && "" == e.data.trim() && d.firstChild != e && g.g.o.removeNode(e);
            d && (e = d,
            d = d.nextSibling,
            e.nodeType == g.g.o.Di.TEXT_NODE && "" == e.data.trim() && g.g.o.removeNode(e))
        }
    return a
}
;
g.P.pe = function(a) {
    return g.g.xml.pe(a).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>")
}
;
g.P.NO = function(a) {
    a = g.P.pe(a).split("<");
    for (var c = "", d = 1; d < a.length; d++) {
        var e = a[d];
        "/" == e[0] && (c = c.substring(2));
        a[d] = c + "<" + e;
        "/" != e[0] && "/>" != e.slice(-2) && (c += "  ")
    }
    a = a.join("\n");
    a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
    return a.replace(/^\n/, "")
}
;
g.P.Ff = function(a) {
    var c = g.g.xml.QK(a);
    if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length)
        throw Error("textToDom was unable to parse: " + a);
    return c.documentElement
}
;
g.P.EO = function(a, c) {
    c.Yc(!1);
    c.clear();
    a = g.P.Dk(a, c);
    c.Yc(!0);
    return a
}
;
g.P.Dk = function(a, c) {
    if (a instanceof g.Ub) {
        var d = a;
        a = c;
        c = d;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")
    }
    var e;
    c.L && (e = c.Ih());
    d = [];
    g.g.o.Vp();
    var f = g.h.oc();
    f || g.h.la(!0);
    c.Yc && c.Yc(!1);
    var h = !0;
    try {
        for (var k = 0, l; l = a.childNodes[k]; k++) {
            var m = l.nodeName.toLowerCase()
              , n = l;
            if ("block" == m || "shadow" == m && !g.h.$a) {
                var p = g.P.Ck(n, c);
                d.push(p.id);
                var r = n.hasAttribute("x") ? parseInt(n.getAttribute("x"), 10) : 10
                  , y = n.hasAttribute("y") ? parseInt(n.getAttribute("y"), 10) : 10;
                isNaN(r) || isNaN(y) || p.moveBy(c.L ? e - r : r, y);
                h = !1
            } else {
                if ("shadow" == m)
                    throw TypeError("Shadow block cannot be a top-level block.");
                if ("comment" == m)
                    c.ra ? g.hm ? g.hm.Am(n) : console.warn("Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment.") : g.yA ? g.yA.Am(n) : console.warn("Missing require for Blockly.WorkspaceComment, ignoring workspace comment.");
                else if ("variables" == m) {
                    if (h)
                        g.P.dI(n, c);
                    else
                        throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                    h = !1
                }
            }
        }
    } finally {
        f || g.h.la(!1),
        g.g.o.Wp()
    }
    c.Yc && c.Yc(!0);
    g.h.Ga(new (g.h.get(g.h.Yt))(c));
    return d
}
;
g.P.AO = function(a, c) {
    var d;
    Object.prototype.hasOwnProperty.call(c, "scale") && (d = Da(c));
    a = g.P.Dk(a, c);
    if (d && d.top != d.bottom) {
        var e = d.bottom;
        var f = c.L ? d.right : d.left;
        var h = Infinity
          , k = -Infinity
          , l = Infinity;
        for (d = 0; d < a.length; d++) {
            var m = c.Td(a[d]).jb();
            m.y < l && (l = m.y);
            m.x < h && (h = m.x);
            m.x > k && (k = m.x)
        }
        e = e - l + 10;
        f = c.L ? f - k : f - h;
        for (d = 0; d < a.length; d++)
            c.Td(a[d]).moveBy(f, e)
    }
    return a
}
;
g.P.Ck = function(a, c) {
    if (a instanceof g.Ub) {
        var d = a;
        a = c;
        c = d;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.")
    }
    g.h.disable();
    d = c.Gk();
    try {
        var e = g.P.Xv(a, c)
          , f = q(e, !1);
        if (c.ra) {
            Ea(e, !1);
            for (var h = f.length - 1; 0 <= h; h--)
                f[h].uf();
            for (h = f.length - 1; 0 <= h; h--)
                f[h].Ia(!1);
            setTimeout(function() {
                e.mf || Ea(e, !0)
            }, 1);
            Fa(e);
            Ga(c)
        } else
            for (h = f.length - 1; 0 <= h; h--)
                f[h].Rk()
    } finally {
        g.h.enable()
    }
    if (g.h.isEnabled()) {
        a = g.$.FB(c, d);
        for (h = 0; h < a.length; h++)
            c = a[h],
            g.h.Ga(new (g.h.get(g.h.Wn))(c));
        g.h.Ga(new (g.h.get(g.h.Bn))(e))
    }
    return e
}
;
g.P.dI = function(a, c) {
    for (var d = 0, e; e = a.childNodes[d]; d++)
        if (e.nodeType == g.g.o.Di.ELEMENT_NODE) {
            var f = e.getAttribute("type")
              , h = e.getAttribute("id");
            c.jf(e.textContent, f, h)
        }
}
;
g.P.nJ = function(a) {
    for (var c = {
        KC: [],
        Wi: [],
        data: [],
        Ho: [],
        input: [],
        next: []
    }, d = 0, e; e = a.childNodes[d]; d++)
        if (e.nodeType != g.g.o.Di.TEXT_NODE)
            switch (e.nodeName.toLowerCase()) {
            case "mutation":
                c.KC.push(e);
                break;
            case "comment":
                if (!g.Comment) {
                    console.warn("Missing require for Blockly.Comment, ignoring block comment.");
                    break
                }
                c.Wi.push(e);
                break;
            case "data":
                c.data.push(e);
                break;
            case "title":
            case "field":
                c.Ho.push(e);
                break;
            case "value":
            case "statement":
                c.input.push(e);
                break;
            case "next":
                c.next.push(e);
                break;
            default:
                console.warn("Ignoring unknown tag: " + e.nodeName)
            }
    return c
}
;
g.P.gH = function(a, c) {
    for (var d = !1, e = 0, f; f = a[e]; e++)
        c.Wb && (c.Wb(f),
        c.uf && (d = !0));
    return d
}
;
g.P.cH = function(a, c) {
    for (var d = 0, e; e = a[d]; d++) {
        var f = e.textContent
          , h = "true" == e.getAttribute("pinned")
          , k = parseInt(e.getAttribute("w"), 10);
        e = parseInt(e.getAttribute("h"), 10);
        c.Sg(f);
        c.Ce.Yx = h;
        isNaN(k) || isNaN(e) || (c.Ce.size = new g.g.sd(k,e));
        h && c.vI && !c.Xb && setTimeout(function() {
            c.hf.rb(!0)
        }, 1)
    }
}
;
g.P.dH = function(a, c) {
    for (var d = 0, e; e = a[d]; d++)
        c.data = e.textContent
}
;
g.P.eH = function(a, c) {
    for (var d = 0, e; e = a[d]; d++) {
        var f = e.getAttribute("name");
        g.P.cI(c, f, e)
    }
}
;
g.P.AB = function(a) {
    for (var c = {
        mo: null,
        no: null
    }, d = 0, e; e = a.childNodes[d]; d++)
        e.nodeType == g.g.o.Di.ELEMENT_NODE && ("block" == e.nodeName.toLowerCase() ? c.mo = e : "shadow" == e.nodeName.toLowerCase() && (c.no = e));
    return c
}
;
g.P.fH = function(a, c, d, e) {
    for (var f = 0, h; h = a[f]; f++) {
        var k = h.getAttribute("name")
          , l = x(d, k);
        if (!l) {
            console.warn("Ignoring non-existent input " + k + " in block " + e);
            break
        }
        h = g.P.AB(h);
        if (h.mo) {
            if (!l.connection)
                throw TypeError("Input connection does not exist.");
            g.P.Xv(h.mo, c, l.connection, !1)
        }
        h.no && l.connection.dn(h.no)
    }
}
;
g.P.hH = function(a, c, d) {
    for (var e = 0, f; f = a[e]; e++) {
        f = g.P.AB(f);
        if (f.mo) {
            if (!d.ba)
                throw TypeError("Next statement does not exist.");
            if (d.ba.isConnected())
                throw TypeError("Next statement is already connected.");
            g.P.Xv(f.mo, c, d.ba, !0)
        }
        f.no && d.ba && d.ba.dn(f.no)
    }
}
;
g.P.Xv = function(a, c, d, e) {
    var f = a.getAttribute("type");
    if (!f)
        throw TypeError("Block type unspecified: " + a.outerHTML);
    var h = a.getAttribute("id");
    h = c.wj(f, h);
    var k = g.P.nJ(a)
      , l = g.P.gH(k.KC, h);
    g.P.cH(k.Wi, h);
    g.P.dH(k.data, h);
    if (d)
        if (e)
            if (h.qa)
                d.connect(h.qa);
            else
                throw TypeError("Next block does not have previous statement.");
        else if (h.T)
            d.connect(h.T);
        else if (h.qa)
            d.connect(h.qa);
        else
            throw TypeError("Child block does not have output or previous statement.");
    g.P.eH(k.Ho, h);
    g.P.fH(k.input, c, h, f);
    g.P.hH(k.next, c, h);
    l && h.uf();
    (c = a.getAttribute("inline")) && h.Xc("true" == c);
    (c = a.getAttribute("disabled")) && h.ee("true" != c && "disabled" != c);
    if (c = a.getAttribute("deletable"))
        h.Lv = "true" == c;
    (c = a.getAttribute("movable")) && h.st("true" == c);
    (c = a.getAttribute("editable")) && h.wy("true" == c);
    (c = a.getAttribute("collapsed")) && h.Kj("true" == c);
    if ("shadow" == a.nodeName.toLowerCase()) {
        a = Ca(h, !1);
        for (c = 0; d = a[c]; c++)
            if (!d.Pa)
                throw TypeError("Shadow block not allowed non-shadow child.");
        if (h.Gh().length)
            throw TypeError("Shadow blocks cannot have variable references.");
        h.zy(!0)
    }
    return h
}
;
g.P.cI = function(a, c, d) {
    var e = z(a, c);
    e ? e.Am(d) : console.warn("Ignoring non-existent field " + c + " in block " + a.type)
}
;
g.P.WH = function(a) {
    for (var c = 0, d; d = a.childNodes[c]; c++)
        if ("next" == d.nodeName.toLowerCase()) {
            a.removeChild(d);
            break
        }
}
;
g.g.Y = {};
g.g.Y.Pt = "categoryToolbox";
g.g.Y.Cz = "flyoutToolbox";
g.g.Y.Ka = {
    td: 0,
    Yg: 1,
    Ib: 2,
    Mc: 3
};
g.g.Y.Dv = function(a) {
    if (!a)
        return null;
    if (a instanceof Element || "string" == typeof a)
        a = g.g.Y.Vx(a),
        a = g.g.Y.LH(a);
    g.g.Y.bL(a);
    return a
}
;
g.g.Y.bL = function(a) {
    var c = a.kind;
    a = a.contents;
    if (c && c != g.g.Y.Cz && c != g.g.Y.Pt)
        throw Error("Invalid toolbox kind " + c + ". Please supply either " + g.g.Y.Cz + " or " + g.g.Y.Pt);
    if (!a)
        throw Error("Toolbox must have a contents attribute.");
}
;
g.g.Y.dB = function(a) {
    return a ? a.contents ? a.contents : Array.isArray(a) && 0 < a.length && !a[0].nodeType ? a : g.g.Y.Zy(a) : []
}
;
g.g.Y.Xo = function(a) {
    if (!a)
        return !1;
    var c = a.kind;
    return c ? c == g.g.Y.Pt : !!a.contents.filter(function(d) {
        return "CATEGORY" == d.kind.toUpperCase()
    }).length
}
;
g.g.Y.qC = function(a) {
    return a && a.contents ? !!a.contents.filter(function(c) {
        return "CATEGORY" == c.kind.toUpperCase()
    }).length : !1
}
;
g.g.Y.LH = function(a) {
    var c = {
        contents: g.g.Y.Zy(a)
    };
    a instanceof Node && g.g.Y.BA(a, c);
    return c
}
;
g.g.Y.Zy = function(a) {
    var c = []
      , d = a.childNodes;
    d || (d = a);
    a = 0;
    for (var e; e = d[a]; a++)
        if (e.tagName) {
            var f = {}
              , h = e.tagName.toUpperCase();
            f.kind = h;
            "BLOCK" == h ? f.blockxml = e : e.childNodes && 0 < e.childNodes.length && (f.contents = g.g.Y.Zy(e));
            g.g.Y.BA(e, f);
            c.push(f)
        }
    return c
}
;
g.g.Y.BA = function(a, c) {
    for (var d = 0; d < a.attributes.length; d++) {
        var e = a.attributes[d];
        -1 < e.nodeName.indexOf("css-") ? (c.cssconfig = c.cssconfig || {},
        c.cssconfig[e.nodeName.replace("css-", "")] = e.value) : c[e.nodeName] = e.value
    }
}
;
g.g.Y.Vx = function(a) {
    if (a) {
        if ("string" != typeof a && (g.g.userAgent.Ze && a.outerHTML ? a = a.outerHTML : a instanceof Element || (a = null)),
        "string" == typeof a && (a = g.P.Ff(a),
        "xml" != a.nodeName.toLowerCase()))
            throw TypeError("Toolbox should be an <xml> document.");
    } else
        a = null;
    return a
}
;
g.Rb = {};
g.Rb.rn = {
    td: 0,
    Yg: 1
};
g.Rb.Lw = {
    Ib: 0,
    Mc: 1
};
g.Rb.jo = {
    wk: 0,
    Ol: 1
};
g.Rb.VB = function(a, c, d, e, f, h) {
    var k = h.qb && !!h.qb.sb;
    a.Zo === g.Rb.Lw.Ib ? (d = f.nr.left + d,
    k && h.L && (d += g.bb.md)) : (d = f.nr.left + f.YD.width - c.width - d,
    k && !h.L && (d -= g.bb.md));
    a.vertical === g.Rb.rn.td ? a = f.nr.top + e : (a = f.nr.top + f.YD.height - c.height - e,
    h.qb && h.qb.Fb && (a -= g.bb.md));
    return new g.g.Rect(a,a + c.height,d,d + c.width)
}
;
g.Rb.JB = function(a, c) {
    return {
        Zo: c.OD.position === g.g.Y.Ka.Ib || a.Vd && !a.L ? g.Rb.Lw.Mc : g.Rb.Lw.Ib,
        vertical: c.OD.position === g.g.Y.Ka.Yg ? g.Rb.rn.td : g.Rb.rn.Yg
    }
}
;
g.Rb.LA = function(a, c, d, e) {
    for (var f = a.left, h = a.right - a.left, k = a.bottom - a.top, l = 0, m; m = e[l]; l++)
        a.left > m.right || a.right < m.left || a.top > m.bottom || a.bottom < m.top || (a = d === g.Rb.jo.wk ? m.top - k - c : m.bottom + c,
        a = new g.g.Rect(a,a + k,f,f + h),
        l = -1);
    return a
}
;
g.Xu = function(a) {
    this.s = a;
    this.id = "zoomControls";
    this.ii = this.qq = this.vn = this.Nx = this.Mx = this.Ox = null
}
;
b = g.Xu.prototype;
b.oh = 32;
b.wi = 32;
b.gr = 2;
b.Uq = 11;
b.In = 20;
b.ju = 20;
b.R = null;
b.Ph = 0;
b.ci = 0;
b.bp = !1;
b.eb = function() {
    this.R = g.g.o.N(g.g.F.rc, {}, null);
    var a = String(Math.random()).substring(2);
    this.qq = g.g.o.N(g.g.F.rc, {
        "class": "blocklyZoom"
    }, this.R);
    var c = g.g.o.N(g.g.F.zn, {
        id: "blocklyZoomoutClipPath" + a
    }, this.qq);
    g.g.o.N(g.g.F.Dc, {
        width: 32,
        height: 32
    }, c);
    g.g.o.N(g.g.F.jk, {
        width: g.Nd.width,
        height: g.Nd.height,
        x: -64,
        y: -92,
        "clip-path": "url(#blocklyZoomoutClipPath" + a + ")"
    }, this.qq).setAttributeNS(g.g.o.Mf, "xlink:href", this.s.options.Dj + g.Nd.url);
    this.Nx = g.M.va(this.qq, "mousedown", null, this.eE.bind(this, -1));
    this.vn = g.g.o.N(g.g.F.rc, {
        "class": "blocklyZoom"
    }, this.R);
    c = g.g.o.N(g.g.F.zn, {
        id: "blocklyZoominClipPath" + a
    }, this.vn);
    g.g.o.N(g.g.F.Dc, {
        width: 32,
        height: 32
    }, c);
    g.g.o.N(g.g.F.jk, {
        width: g.Nd.width,
        height: g.Nd.height,
        x: -32,
        y: -92,
        "clip-path": "url(#blocklyZoominClipPath" + a + ")"
    }, this.vn).setAttributeNS(g.g.o.Mf, "xlink:href", this.s.options.Dj + g.Nd.url);
    this.Mx = g.M.va(this.vn, "mousedown", null, this.eE.bind(this, 1));
    this.s.Gc() && (this.ii = g.g.o.N(g.g.F.rc, {
        "class": "blocklyZoom"
    }, this.R),
    c = g.g.o.N(g.g.F.zn, {
        id: "blocklyZoomresetClipPath" + a
    }, this.ii),
    g.g.o.N(g.g.F.Dc, {
        width: 32,
        height: 32
    }, c),
    g.g.o.N(g.g.F.jk, {
        width: g.Nd.width,
        height: g.Nd.height,
        y: -92,
        "clip-path": "url(#blocklyZoomresetClipPath" + a + ")"
    }, this.ii).setAttributeNS(g.g.o.Mf, "xlink:href", this.s.options.Dj + g.Nd.url),
    this.Ox = g.M.va(this.ii, "mousedown", null, this.sK.bind(this)));
    return this.R
}
;
b.S = function() {
    ea(this.s.De, {
        zk: this,
        weight: 2,
        tg: [g.Tb.bc.wu]
    });
    this.bp = !0
}
;
b.I = function() {
    fa(this.s.De, "zoomControls");
    this.R && g.g.o.removeNode(this.R);
    this.Ox && g.M.Ra(this.Ox);
    this.Mx && g.M.Ra(this.Mx);
    this.Nx && g.M.Ra(this.Nx)
}
;
b.Bm = function() {
    var a = this.gr + 2 * this.wi;
    this.ii && (a += this.Uq + this.wi);
    return new g.g.Rect(this.ci,this.ci + a,this.Ph,this.Ph + this.oh)
}
;
b.position = function(a, c) {
    if (this.bp) {
        var d = g.Rb.JB(this.s, a)
          , e = this.gr + 2 * this.wi;
        this.ii && (e += this.Uq + this.wi);
        a = g.Rb.VB(d, new g.g.sd(this.oh,e), this.ju, this.In, a, this.s);
        d = d.vertical;
        c = g.Rb.LA(a, this.In, d === g.Rb.rn.td ? g.Rb.jo.Ol : g.Rb.jo.wk, c);
        d === g.Rb.rn.td ? (d = this.gr + this.wi,
        this.vn.setAttribute("transform", "translate(0, " + d + ")"),
        this.ii && this.ii.setAttribute("transform", "translate(0, " + (d + this.Uq + this.wi) + ")")) : (d = this.ii ? this.Uq + this.wi : 0,
        this.vn.setAttribute("transform", "translate(0, " + d + ")"),
        this.qq.setAttribute("transform", "translate(0, " + (d + this.gr + this.wi) + ")"));
        this.ci = c.top;
        this.Ph = c.left;
        this.R.setAttribute("transform", "translate(" + this.Ph + "," + this.ci + ")")
    }
}
;
b.eE = function(a, c) {
    ya(this.s);
    Ha(this.s, a);
    Ia(this);
    g.Touch.xk();
    c.stopPropagation();
    c.preventDefault()
}
;
b.sK = function(a) {
    ya(this.s);
    var c = Math.log(this.s.options.Sb.DD / this.s.scale) / Math.log(this.s.options.Sb.uD)
      , d = this.s;
    g.g.o.Fa(d.zb, "blocklyCanvasTransitioning");
    g.g.o.Fa(d.$f, "blocklyCanvasTransitioning");
    Ha(this.s, c);
    c = this.s;
    if (c.Gc()) {
        d = c.Ud();
        var e = (d.scrollWidth - d.Ic) / 2
          , f = (d.scrollHeight - d.Rc) / 2;
        e = -e - d.scrollLeft;
        f = -f - d.scrollTop;
        c.scroll(e, f)
    } else
        console.warn("Tried to move a non-movable workspace. This could result in blocks becoming inaccessible.");
    setTimeout(this.s.gI.bind(this.s), 500);
    Ia(this);
    g.Touch.xk();
    a.stopPropagation();
    a.preventDefault()
}
;
function Ia(a) {
    a = new (g.h.get(g.h.Jl))(null,a.s.id,"zoom_controls");
    g.h.Ga(a)
}
g.Uc.register([".blocklyZoom>image, .blocklyZoom>svg>image {", "opacity: .4;", "}", ".blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {", "opacity: .6;", "}", ".blocklyZoom>image:active, .blocklyZoom>svg>image:active {", "opacity: .8;", "}"]);
g.g.Sa = {};
g.g.Sa.Cd = function(a) {
    return a * Math.PI / 180
}
;
g.g.Sa.nn = function(a) {
    return 180 * a / Math.PI
}
;
g.g.Sa.ug = function(a, c, d) {
    if (d < a) {
        var e = d;
        d = a;
        a = e
    }
    return Math.max(a, Math.min(c, d))
}
;
g.G = function() {}
;
g.G.kv = null;
g.G.zf = null;
g.G.lD = null;
g.G.uq = 16;
g.G.hz = 1;
g.G.ez = 12;
g.G.cA = 16;
g.G.Kt = .25;
g.G.av = null;
g.G.ol = null;
g.G.Yf = "";
g.G.ag = "";
g.G.eb = function() {
    if (!g.G.hg) {
        var a = document.createElement("div");
        a.className = "blocklyDropDownDiv";
        (g.$s || document.body).appendChild(a);
        g.G.hg = a;
        var c = document.createElement("div");
        c.className = "blocklyDropDownContent";
        a.appendChild(c);
        g.G.wh = c;
        c = document.createElement("div");
        c.className = "blocklyDropDownArrow";
        a.appendChild(c);
        g.G.ef = c;
        g.G.hg.style.opacity = 0;
        g.G.hg.style.transition = "transform " + g.G.Kt + "s, opacity " + g.G.Kt + "s";
        a.addEventListener("focusin", function() {
            g.g.o.Fa(a, "blocklyFocused")
        });
        a.addEventListener("focusout", function() {
            g.g.o.dc(a, "blocklyFocused")
        })
    }
}
;
g.G.xK = function(a) {
    g.G.kv = a
}
;
g.G.IB = function() {
    return g.G.wh
}
;
g.G.AH = function() {
    g.G.wh.textContent = "";
    g.G.wh.style.width = ""
}
;
g.G.Wc = function(a, c) {
    g.G.hg.style.backgroundColor = a;
    g.G.hg.style.borderColor = c
}
;
g.G.oP = function(a, c, d, e) {
    return g.G.yD(g.G.QB(c), a, d, e)
}
;
g.G.xD = function(a, c) {
    g.G.lD = !0;
    g.G.yD(g.G.RB(a), a, c)
}
;
g.G.QB = function(a) {
    var c = a.Ma()
      , d = c.getBBox()
      , e = a.u.scale;
    a = d.height * e;
    d = d.width * e;
    c = g.g.style.Ik(c);
    return new g.g.Rect(c.y,c.y + a,c.x,c.x + d)
}
;
g.G.RB = function(a) {
    a = Ja(a);
    return new g.g.Rect(a.top,a.bottom,a.left,a.right)
}
;
g.G.yD = function(a, c, d, e) {
    var f = a.left + (a.right - a.left) / 2
      , h = a.bottom;
    a = a.top;
    e && (a += e);
    e = c.aa();
    for (var k = e.u; k.options.pc; )
        k = k.options.pc;
    g.G.xK(v(k).parentNode);
    return g.G.show(c, e.L, f, h, f, a, d)
}
;
g.G.show = function(a, c, d, e, f, h, k) {
    g.G.zf = a;
    g.G.ol = k || null;
    a = g.G.hg;
    a.style.direction = c ? "rtl" : "ltr";
    c = g.dj();
    g.G.Yf = c.Ob.Rf();
    g.G.ag = c.Gg().Rf();
    g.g.o.Fa(a, g.G.Yf);
    g.g.o.Fa(a, g.G.ag);
    return g.G.zp(d, e, f, h)
}
;
g.G.sI = function() {
    var a = g.g.style.Ik(g.G.kv)
      , c = g.g.style.Fh(g.G.kv);
    return {
        left: a.x,
        right: a.x + c.width,
        top: a.y,
        bottom: a.y + c.height,
        width: c.width,
        height: c.height
    }
}
;
g.G.BI = function(a, c, d, e) {
    var f = g.G.sI()
      , h = g.g.style.Fh(g.G.hg);
    return c + h.height < f.bottom ? g.G.PB(a, c, f, h) : e - h.height > f.top ? g.G.OB(d, e, f, h) : c + h.height < document.documentElement.clientHeight ? g.G.PB(a, c, f, h) : e - h.height > document.documentElement.clientTop ? g.G.OB(d, e, f, h) : g.G.CI(a, f, h)
}
;
g.G.PB = function(a, c, d, e) {
    a = g.G.Cw(a, d.left, d.right, e.width);
    return {
        Pw: a.ym,
        Qw: c,
        lw: a.ym,
        mw: c + g.G.cA,
        jm: a.jm,
        cv: -(g.G.uq / 2 + g.G.hz),
        vr: !0,
        bv: !0
    }
}
;
g.G.OB = function(a, c, d, e) {
    a = g.G.Cw(a, d.left, d.right, e.width);
    return {
        Pw: a.ym,
        Qw: c - e.height,
        lw: a.ym,
        mw: c - e.height - g.G.cA,
        jm: a.jm,
        cv: e.height - 2 * g.G.hz - g.G.uq / 2,
        vr: !1,
        bv: !0
    }
}
;
g.G.CI = function(a, c, d) {
    a = g.G.Cw(a, c.left, c.right, d.width);
    return {
        Pw: a.ym,
        Qw: 0,
        lw: a.ym,
        mw: 0,
        vr: null,
        jm: null,
        cv: null,
        bv: !1
    }
}
;
g.G.Cw = function(a, c, d, e) {
    var f = a;
    a = g.g.Sa.ug(c, a - e / 2, d - e);
    f -= g.G.uq / 2;
    c = g.g.Sa.ug(g.G.ez, f - a, e - g.G.ez - g.G.uq);
    return {
        jm: c,
        ym: a
    }
}
;
g.G.isVisible = function() {
    return !!g.G.zf
}
;
g.G.Im = function(a, c) {
    g.G.zf === a && (c ? g.G.Mk() : g.G.Va())
}
;
g.G.Va = function() {
    var a = g.G.hg;
    a.style.transform = "translate(0, 0)";
    a.style.opacity = 0;
    g.G.av = setTimeout(function() {
        g.G.Mk()
    }, 1E3 * g.G.Kt);
    g.G.ol && (g.G.ol(),
    g.G.ol = null)
}
;
g.G.Mk = function() {
    if (g.G.isVisible()) {
        g.G.av && clearTimeout(g.G.av);
        var a = g.G.hg;
        a.style.transform = "";
        a.style.left = "";
        a.style.top = "";
        a.style.opacity = 0;
        a.style.display = "none";
        a.style.backgroundColor = "";
        a.style.borderColor = "";
        g.G.ol && (g.G.ol(),
        g.G.ol = null);
        g.G.AH();
        g.G.zf = null;
        g.G.Yf && (g.g.o.dc(a, g.G.Yf),
        g.G.Yf = "");
        g.G.ag && (g.g.o.dc(a, g.G.ag),
        g.G.ag = "");
        ya(g.dj())
    }
}
;
g.G.zp = function(a, c, d, e) {
    a = g.G.BI(a, c, d, e);
    a.bv ? (g.G.ef.style.display = "",
    g.G.ef.style.transform = "translate(" + a.jm + "px," + a.cv + "px) rotate(45deg)",
    g.G.ef.setAttribute("class", a.vr ? "blocklyDropDownArrow blocklyArrowTop" : "blocklyDropDownArrow blocklyArrowBottom")) : g.G.ef.style.display = "none";
    c = Math.floor(a.Pw);
    d = Math.floor(a.Qw);
    e = Math.floor(a.lw);
    var f = Math.floor(a.mw)
      , h = g.G.hg;
    h.style.left = c + "px";
    h.style.top = d + "px";
    h.style.display = "block";
    h.style.opacity = 1;
    h.style.transform = "translate(" + (e - c) + "px," + (f - d) + "px)";
    return !!a.vr
}
;
g.G.hP = function() {
    if (g.G.zf) {
        var a = g.G.zf
          , c = a.aa();
        a = g.G.lD ? g.G.RB(a) : g.G.QB(c);
        c = a.left + (a.right - a.left) / 2;
        g.G.zp(c, a.bottom, c, a.top)
    } else
        g.G.Va()
}
;
g.h.fg = function(a) {
    g.h.fg.v.constructor.call(this);
    this.ob = (this.Me = "undefined" == typeof a) ? "" : a.id;
    this.Sc = this.Me ? "" : a.u.id
}
;
g.g.object.W(g.h.fg, g.h.Abstract);
g.h.fg.prototype.Ca = function() {
    var a = g.h.fg.v.Ca.call(this);
    a.blockId = this.ob;
    return a
}
;
g.h.fg.prototype.ka = function(a) {
    g.h.fg.v.ka.call(this, a);
    this.ob = a.blockId
}
;
g.h.Xj = function(a, c, d, e, f) {
    g.h.IE.v.constructor.call(this, a);
    a && (this.element = "undefined" == typeof c ? "" : c,
    this.name = "undefined" == typeof d ? "" : d,
    this.oldValue = "undefined" == typeof e ? "" : e,
    this.newValue = "undefined" == typeof f ? "" : f)
}
;
g.g.object.W(g.h.Xj, g.h.fg);
g.h.IE = g.h.Xj;
b = g.h.Xj.prototype;
b.type = g.h.Zj;
b.Ca = function() {
    var a = g.h.Xj.v.Ca.call(this);
    a.element = this.element;
    this.name && (a.name = this.name);
    a.oldValue = this.oldValue;
    a.newValue = this.newValue;
    return a
}
;
b.ka = function(a) {
    g.h.Xj.v.ka.call(this, a);
    this.element = a.element;
    this.name = a.name;
    this.oldValue = a.oldValue;
    this.newValue = a.newValue
}
;
b.Om = function() {
    return this.oldValue == this.newValue
}
;
b.run = function(a) {
    var c = u(this).Td(this.ob);
    if (c)
        switch (c.kd && c.kd.rb(!1),
        a = a ? this.newValue : this.oldValue,
        this.element) {
        case "field":
            (c = z(c, this.name)) ? c.setValue(a) : console.warn("Can't set non-existent field: " + this.name);
            break;
        case "comment":
            c.Sg(a || null);
            break;
        case "collapsed":
            c.Kj(!!a);
            break;
        case "disabled":
            c.ee(!a);
            break;
        case "inline":
            c.Xc(!!a);
            break;
        case "mutation":
            var d = "";
            c.pb && (d = (d = c.pb()) && g.P.pe(d));
            if (c.Wb) {
                var e = g.P.Ff(a || "<mutation/>");
                c.Wb(e)
            }
            g.h.Ga(new g.h.Xj(c,"mutation",null,d,a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
        }
    else
        console.warn("Can't change non-existent block: " + this.ob)
}
;
g.h.gg = function(a) {
    g.h.gg.v.constructor.call(this, a);
    a && (a.Pa && (this.$a = !1),
    this.xml = a.u.ra ? g.P.hv(a) : g.P.ph(a),
    this.jj = g.h.KB(a))
}
;
g.g.object.W(g.h.gg, g.h.fg);
g.h.uL = g.h.gg;
g.h.gg.prototype.type = g.h.Bn;
g.h.gg.prototype.Ca = function() {
    var a = g.h.gg.v.Ca.call(this);
    a.xml = g.P.pe(this.xml);
    a.ids = this.jj;
    this.$a || (a.recordUndo = this.$a);
    return a
}
;
g.h.gg.prototype.ka = function(a) {
    g.h.gg.v.ka.call(this, a);
    this.xml = g.P.Ff(a.xml);
    this.jj = a.ids;
    void 0 !== a.recordUndo && (this.$a = a.recordUndo)
}
;
g.h.gg.prototype.run = function(a) {
    var c = u(this);
    if (a)
        a = g.g.xml.createElement("xml"),
        a.appendChild(this.xml),
        g.P.Dk(a, c);
    else {
        a = 0;
        for (var d; d = this.jj[a]; a++) {
            var e = c.Td(d);
            e ? e.I(!1) : d == this.ob && console.warn("Can't uncreate non-existent block: " + d)
        }
    }
}
;
g.h.kg = function(a) {
    g.h.kg.v.constructor.call(this, a);
    if (a) {
        if (a.getParent())
            throw Error("Connected blocks cannot be deleted.");
        a.Pa && (this.$a = !1);
        this.Um = a.u.ra ? g.P.hv(a) : g.P.ph(a);
        this.jj = g.h.KB(a)
    }
}
;
g.g.object.W(g.h.kg, g.h.fg);
g.h.vL = g.h.kg;
g.h.kg.prototype.type = g.h.ck;
g.h.kg.prototype.Ca = function() {
    var a = g.h.kg.v.Ca.call(this);
    a.oldXml = g.P.pe(this.Um);
    a.ids = this.jj;
    this.$a || (a.recordUndo = this.$a);
    return a
}
;
g.h.kg.prototype.ka = function(a) {
    g.h.kg.v.ka.call(this, a);
    this.Um = g.P.Ff(a.oldXml);
    this.jj = a.ids;
    void 0 !== a.recordUndo && (this.$a = a.recordUndo)
}
;
g.h.kg.prototype.run = function(a) {
    var c = u(this);
    if (a) {
        a = 0;
        for (var d; d = this.jj[a]; a++) {
            var e = c.Td(d);
            e ? e.I(!1) : d == this.ob && console.warn("Can't delete non-existent block: " + d)
        }
    } else
        a = g.g.xml.createElement("xml"),
        a.appendChild(this.Um),
        g.P.Dk(a, c)
}
;
g.h.mk = function(a) {
    g.h.mk.v.constructor.call(this, a);
    a && (a.Pa && (this.$a = !1),
    a = Ka(this),
    this.UC = a.bD,
    this.QC = a.mC,
    this.Bx = a.eB)
}
;
g.g.object.W(g.h.mk, g.h.fg);
g.h.wL = g.h.mk;
b = g.h.mk.prototype;
b.type = g.h.Kn;
b.Ca = function() {
    var a = g.h.mk.v.Ca.call(this);
    this.jl && (a.newParentId = this.jl);
    this.il && (a.newInputName = this.il);
    this.xj && (a.newCoordinate = Math.round(this.xj.x) + "," + Math.round(this.xj.y));
    this.$a || (a.recordUndo = this.$a);
    return a
}
;
b.ka = function(a) {
    g.h.mk.v.ka.call(this, a);
    this.jl = a.newParentId;
    this.il = a.newInputName;
    if (a.newCoordinate) {
        var c = a.newCoordinate.split(",");
        this.xj = new g.g.V(Number(c[0]),Number(c[1]))
    }
    void 0 !== a.recordUndo && (this.$a = a.recordUndo)
}
;
b.tl = function() {
    var a = Ka(this);
    this.jl = a.bD;
    this.il = a.mC;
    this.xj = a.eB
}
;
function Ka(a) {
    var c = u(a).Td(a.ob);
    a = {};
    var d = c.getParent();
    if (d) {
        if (a.bD = d.id,
        c = La(d, c))
            a.mC = c.name
    } else
        a.eB = c.jb();
    return a
}
b.Om = function() {
    return this.UC == this.jl && this.QC == this.il && g.g.V.qf(this.Bx, this.xj)
}
;
b.run = function(a) {
    var c = u(this)
      , d = c.Td(this.ob);
    if (d) {
        var e = a ? this.jl : this.UC
          , f = a ? this.il : this.QC
          , h = a ? this.xj : this.Bx;
        a = null;
        if (e && (a = c.Td(e),
        !a)) {
            console.warn("Can't connect to non-existent block: " + e);
            return
        }
        d.getParent() && A(d);
        if (h)
            f = d.jb(),
            d.moveBy(h.x - f.x, h.y - f.y);
        else {
            d = d.T || d.qa;
            c = d.type;
            if (f) {
                if (a = x(a, f))
                    var k = a.connection
            } else
                c == g.pa.cf && (k = a.ba);
            k ? d.connect(k) : console.warn("Can't connect to non-existent input: " + f)
        }
    } else
        console.warn("Can't move non-existent block: " + this.ob)
}
;
g.B.register(g.B.U.cc, g.h.Bn, g.h.gg);
g.B.register(g.B.U.cc, g.h.ck, g.h.kg);
g.B.register(g.B.U.cc, g.h.Zj, g.h.Xj);
g.B.register(g.B.U.cc, g.h.Kn, g.h.mk);
g.h.Fn = function(a) {
    this.Me = "undefined" == typeof a;
    this.Sc = a ? a.id : "";
    this.group = g.h.oc();
    this.$a = !1
}
;
g.g.object.W(g.h.Fn, g.h.Abstract);
g.h.Fn.prototype.type = g.h.Yt;
g.h.Fn.prototype.Ca = function() {
    var a = {
        type: this.type
    };
    this.group && (a.group = this.group);
    this.Sc && (a.workspaceId = this.Sc);
    return a
}
;
g.h.Fn.prototype.ka = function(a) {
    this.Me = !1;
    this.Sc = a.workspaceId;
    this.group = a.group
}
;
g.B.register(g.B.U.cc, g.h.Yt, g.h.Fn);
g.h.kh = function(a) {
    g.h.kh.v.constructor.call(this);
    this.Sj = (this.Me = "undefined" == typeof a) ? "" : a.La();
    this.Sc = this.Me ? "" : a.u.id
}
;
g.g.object.W(g.h.kh, g.h.Abstract);
g.h.kh.prototype.Ca = function() {
    var a = g.h.kh.v.Ca.call(this);
    a.varId = this.Sj;
    return a
}
;
g.h.kh.prototype.ka = function(a) {
    g.h.kh.v.Ca.call(this);
    this.Sj = a.varId
}
;
g.h.lh = function(a) {
    g.h.lh.v.constructor.call(this, a);
    a && (this.Dl = a.type,
    this.Cl = a.name)
}
;
g.g.object.W(g.h.lh, g.h.kh);
g.h.lh.prototype.type = g.h.Wn;
g.h.lh.prototype.Ca = function() {
    var a = g.h.lh.v.Ca.call(this);
    a.varType = this.Dl;
    a.varName = this.Cl;
    return a
}
;
g.h.lh.prototype.ka = function(a) {
    g.h.lh.v.ka.call(this, a);
    this.Dl = a.varType;
    this.Cl = a.varName
}
;
g.h.lh.prototype.run = function(a) {
    var c = u(this);
    a ? c.jf(this.Cl, this.Dl, this.Sj) : c.Bh(this.Sj)
}
;
g.h.mh = function(a) {
    g.h.mh.v.constructor.call(this, a);
    a && (this.Dl = a.type,
    this.Cl = a.name)
}
;
g.g.object.W(g.h.mh, g.h.kh);
g.h.mh.prototype.type = g.h.mr;
g.h.mh.prototype.Ca = function() {
    var a = g.h.mh.v.Ca.call(this);
    a.varType = this.Dl;
    a.varName = this.Cl;
    return a
}
;
g.h.mh.prototype.ka = function(a) {
    g.h.mh.v.ka.call(this, a);
    this.Dl = a.varType;
    this.Cl = a.varName
}
;
g.h.mh.prototype.run = function(a) {
    var c = u(this);
    a ? c.Bh(this.Sj) : c.jf(this.Cl, this.Dl, this.Sj)
}
;
g.h.nh = function(a, c) {
    g.h.nh.v.constructor.call(this, a);
    a && (this.Cx = a.name,
    this.yx = "undefined" == typeof c ? "" : c)
}
;
g.g.object.W(g.h.nh, g.h.kh);
g.h.nh.prototype.type = g.h.Tu;
g.h.nh.prototype.Ca = function() {
    var a = g.h.nh.v.Ca.call(this);
    a.oldName = this.Cx;
    a.newName = this.yx;
    return a
}
;
g.h.nh.prototype.ka = function(a) {
    g.h.nh.v.ka.call(this, a);
    this.Cx = a.oldName;
    this.yx = a.newName
}
;
g.h.nh.prototype.run = function(a) {
    var c = u(this);
    a ? c.Hj(this.Sj, this.yx) : c.Hj(this.Sj, this.Cx)
}
;
g.B.register(g.B.U.cc, g.h.Wn, g.h.lh);
g.B.register(g.B.U.cc, g.h.mr, g.h.mh);
g.B.register(g.B.U.cc, g.h.Tu, g.h.nh);
g.iz = function(a) {
    this.to = a;
    this.eb()
}
;
b = g.iz.prototype;
b.Eb = null;
b.Bg = null;
b.to = null;
b.Jj = 1;
b.Zp = null;
b.TA = new g.g.V(0,0);
b.eb = function() {
    this.Eb || (this.Eb = g.g.o.N(g.g.F.Ii, {
        xmlns: g.g.o.Un,
        "xmlns:html": g.g.o.ik,
        "xmlns:xlink": g.g.o.Mf,
        version: "1.1",
        "class": "blocklyBlockDragSurface"
    }, this.to),
    this.Bg = g.g.o.N(g.g.F.rc, {}, this.Eb))
}
;
function Ma(a, c) {
    if (a.Bg.childNodes.length)
        throw Error("Already dragging a block.");
    a.Bg.appendChild(c);
    a.Eb.style.display = "block";
    a.Zp = new g.g.V(0,0)
}
b.zl = function(a, c) {
    this.Zp = new g.g.V(a * this.Jj,c * this.Jj);
    a = this.Zp.x;
    c = this.Zp.y;
    a = a.toFixed(0);
    c = c.toFixed(0);
    this.Eb.style.display = "block";
    g.g.o.Mp(this.Eb, "translate3d(" + a + "px, " + c + "px, 0px)")
}
;
b.Dw = function() {
    var a = g.g.sf(this.Eb);
    return new g.g.V(a.x / this.Jj,a.y / this.Jj)
}
;
b.oc = function() {
    return this.Bg
}
;
b.Ma = function() {
    return this.Eb
}
;
b.Er = function(a) {
    a ? a.appendChild(this.Bg.firstChild) : this.Bg.removeChild(this.Bg.firstChild);
    this.Eb.style.display = "none";
    if (this.Bg.childNodes.length)
        throw Error("Drag group was not cleared.");
    this.Zp = null
}
;
g.hk = function(a, c) {
    this.Fm = a;
    this.Hy = c.spacing;
    this.AC = c.length;
    this.hJ = (this.ix = a.firstChild) && this.ix.nextSibling;
    this.EK = c.snap
}
;
g.hk.prototype.Jj = 1;
g.hk.prototype.I = function() {
    this.Fm = null
}
;
g.hk.prototype.update = function(a) {
    this.Jj = a;
    var c = this.Hy * a || 100;
    this.Fm.setAttribute("width", c);
    this.Fm.setAttribute("height", c);
    c = Math.floor(this.Hy / 2) + .5;
    var d = c - this.AC / 2
      , e = c + this.AC / 2;
    c *= a;
    d *= a;
    e *= a;
    Na(this.ix, a, d, e, c, c);
    Na(this.hJ, a, c, c, d, e)
}
;
function Na(a, c, d, e, f, h) {
    a && (a.setAttribute("stroke-width", c),
    a.setAttribute("x1", d),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", h))
}
g.hk.prototype.moveTo = function(a, c) {
    this.Fm.setAttribute("x", a);
    this.Fm.setAttribute("y", c);
    (g.g.userAgent.Ze || g.g.userAgent.ek) && this.update(this.Jj)
}
;
g.hk.eb = function(a, c, d) {
    a = g.g.o.N(g.g.F.eA, {
        id: "blocklyGridPattern" + a,
        patternUnits: "userSpaceOnUse"
    }, d);
    0 < c.length && 0 < c.spacing ? (g.g.o.N(g.g.F.kk, {
        stroke: c.colour
    }, a),
    1 < c.length && g.g.o.N(g.g.F.kk, {
        stroke: c.colour
    }, a)) : g.g.o.N(g.g.F.kk, {}, a);
    return a
}
;
g.tk = function(a, c, d, e) {
    this.name = a;
    this.Ti = c || Object.create(null);
    this.Cr = d || Object.create(null);
    this.YA = e || Object.create(null);
    this.fontStyle = Object.create(null);
    this.Iy = null;
    g.B.register(g.B.U.Ju, a, this)
}
;
g.tk.prototype.Rf = function() {
    return this.name + "-theme"
}
;
function Oa(a, c) {
    return (c = a.YA[c]) && "string" == typeof c && Oa(a, c) ? Oa(a, c) : c ? String(c) : null
}
g.tk.UH = function(a, c) {
    var d = new g.tk(a)
      , e = c.base;
    e && ("string" == typeof e && (e = g.B.Bw(g.B.U.Ju, e)),
    e instanceof g.tk && (g.g.object.um(d, e),
    d.name = a));
    g.g.object.um(d.Ti, c.blockStyles);
    g.g.object.um(d.Cr, c.categoryStyles);
    g.g.object.um(d.YA, c.componentStyles);
    g.g.object.um(d.fontStyle, c.fontStyle);
    null != c.startHats && (d.Iy = c.startHats);
    return d
}
;
g.jh = {};
g.jh.ni = {};
g.jh.ni.RH = {
    colour_blocks: {
        colourPrimary: "20"
    },
    list_blocks: {
        colourPrimary: "260"
    },
    logic_blocks: {
        colourPrimary: "210"
    },
    loop_blocks: {
        colourPrimary: "120"
    },
    math_blocks: {
        colourPrimary: "230"
    },
    procedure_blocks: {
        colourPrimary: "290"
    },
    text_blocks: {
        colourPrimary: "160"
    },
    variable_blocks: {
        colourPrimary: "330"
    },
    hat_blocks: {
        colourPrimary: "330",
        hat: "cap"
    }
};
g.jh.ni.Cr = {
    colour_category: {
        colour: "20"
    },
    list_category: {
        colour: "260"
    },
    logic_category: {
        colour: "210"
    },
    loop_category: {
        colour: "120"
    },
    math_category: {
        colour: "230"
    },
    procedure_category: {
        colour: "290"
    },
    text_category: {
        colour: "160"
    },
    variable_category: {
        colour: "330"
    }
};
g.jh.ni = new g.tk("classic",g.jh.ni.RH,g.jh.ni.Cr);
g.g.Ql = {};
g.g.Ql.AJ = 0;
g.g.Ql.Aw = function() {
    return "blockly-" + (g.g.Ql.AJ++).toString(36)
}
;
g.Kd = function(a) {
    var c = !!a.readOnly;
    if (c)
        var d = null
          , e = !1
          , f = !1
          , h = !1
          , k = !1
          , l = !1
          , m = !1;
    else {
        d = g.g.Y.Dv(a.toolbox);
        e = g.g.Y.Xo(d);
        f = a.trashcan;
        void 0 === f && (f = e);
        var n = a.maxTrashcanContents;
        f ? void 0 === n && (n = 32) : n = 0;
        h = a.collapse;
        void 0 === h && (h = e);
        k = a.comments;
        void 0 === k && (k = e);
        l = a.disable;
        void 0 === l && (l = e);
        m = a.sounds;
        void 0 === m && (m = !0)
    }
    var p = !!a.rtl
      , r = a.horizontalLayout;
    void 0 === r && (r = !1);
    var y = a.toolboxPosition;
    y = "end" !== y;
    y = r ? y ? g.g.Y.Ka.td : g.g.Y.Ka.Yg : y == p ? g.g.Y.Ka.Mc : g.g.Y.Ka.Ib;
    var N = a.css;
    void 0 === N && (N = !0);
    var Q = "https://blockly-demo.appspot.com/static/media/";
    a.media ? Q = a.media : a.path && (Q = a.path + "media/");
    var F = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex
      , ra = a.renderer || "geras"
      , Ze = a.plugins || {};
    this.L = p;
    this.Sh = F;
    this.collapse = h;
    this.po = k;
    this.disable = l;
    this.readOnly = c;
    this.sx = a.maxBlocks || Infinity;
    this.Hs = a.maxInstances;
    this.Dj = Q;
    this.Xo = e;
    this.Bd = g.Kd.TJ(a, e);
    this.eC = f;
    this.Is = n;
    this.SI = m;
    this.OI = N;
    this.Vd = r;
    this.Kg = d;
    this.aC = g.Kd.SJ(a);
    this.Sb = g.Kd.VJ(a);
    this.Gb = y;
    this.RK = g.Kd.UJ(a);
    this.Fp = ra;
    this.Gp = a.rendererOverrides;
    this.Hw = null;
    this.pc = a.parentWorkspace;
    this.plugins = Ze
}
;
g.xL = function() {}
;
g.Kd.TJ = function(a, c) {
    var d = a.move || {}
      , e = {};
    void 0 === d.scrollbars && void 0 === a.scrollbars ? e.scrollbars = c : "object" == typeof d.scrollbars ? (e.scrollbars = {},
    e.scrollbars.Zo = !!d.scrollbars.horizontal,
    e.scrollbars.vertical = !!d.scrollbars.vertical,
    e.scrollbars.Zo && e.scrollbars.vertical ? e.scrollbars = !0 : e.scrollbars.Zo || e.scrollbars.vertical || (e.scrollbars = !1)) : e.scrollbars = !!d.scrollbars || !!a.scrollbars;
    e.sn = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : "object" == typeof e.scrollbars;
    e.Dh = e.scrollbars ? void 0 === d.drag ? !0 : !!d.drag : !1;
    return e
}
;
g.Kd.VJ = function(a) {
    a = a.zoom || {};
    var c = {};
    c.controls = void 0 === a.controls ? !1 : !!a.controls;
    c.sn = void 0 === a.wheel ? !1 : !!a.wheel;
    c.DD = void 0 === a.startScale ? 1 : Number(a.startScale);
    c.np = void 0 === a.maxScale ? 3 : Number(a.maxScale);
    c.pp = void 0 === a.minScale ? .3 : Number(a.minScale);
    c.uD = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
    c.fD = void 0 === a.pinch ? c.sn || c.controls : !!a.pinch;
    return c
}
;
g.Kd.SJ = function(a) {
    a = a.grid || {};
    var c = {};
    c.spacing = Number(a.spacing) || 0;
    c.Cb = a.colour || "#888";
    c.length = void 0 === a.length ? 1 : Number(a.length);
    c.pP = 0 < c.spacing && !!a.snap;
    return c
}
;
g.Kd.UJ = function(a) {
    a = a.theme || g.jh.ni;
    return "string" == typeof a ? g.B.Bw(g.B.U.Ju, a) : a instanceof g.tk ? a : g.tk.UH(a.name || "builtin" + g.g.Ql.Aw(), a)
}
;
g.Kd.Vx = function(a) {
    g.g.xm.warn("Blockly.Options.parseToolboxTree", "September 2020", "September 2021", "Blockly.utils.toolbox.parseToolboxTree");
    return g.g.Y.Vx(a)
}
;
g.K = {};
g.K.visible = !1;
g.K.mm = !1;
g.K.JF = 50;
g.K.IC = 0;
g.K.Qp = 0;
g.K.bx = 0;
g.K.ex = 0;
g.K.Db = null;
g.K.yp = null;
g.K.Yz = 0;
g.K.Zz = 10;
g.K.nG = 10;
g.K.uF = 750;
g.K.iu = 5;
g.K.mb = null;
g.K.EI = function() {
    var a = g.K.YB(g.K.Db);
    if (a) {
        for (a = a.Gf; "function" == typeof a; )
            a = a();
        if ("string" != typeof a)
            throw Error("Tooltip function must return a string.");
        return a
    }
    return ""
}
;
g.K.YB = function(a) {
    for (; a && a.Gf; ) {
        if ("string" == typeof a.Gf || "function" == typeof a.Gf)
            return a;
        a = a.Gf
    }
    return null
}
;
g.K.eb = function() {
    g.K.mb || (g.K.mb = document.createElement("div"),
    g.K.mb.className = "blocklyTooltipDiv",
    (g.$s || document.body).appendChild(g.K.mb))
}
;
g.K.lm = function(a) {
    a.sJ = g.M.bind(a, "mouseover", null, g.K.OJ);
    a.qJ = g.M.bind(a, "mouseout", null, g.K.NJ);
    a.addEventListener("mousemove", g.K.vp, !1)
}
;
g.K.Qy = function(a) {
    a && (g.M.Ra(a.sJ),
    g.M.Ra(a.qJ),
    a.removeEventListener("mousemove", g.K.vp))
}
;
g.K.OJ = function(a) {
    g.K.mm || (a = g.K.YB(a.currentTarget),
    g.K.Db != a && (g.K.Va(),
    g.K.yp = null,
    g.K.Db = a),
    clearTimeout(g.K.IC))
}
;
g.K.NJ = function() {
    g.K.mm || (g.K.IC = setTimeout(function() {
        g.K.Db = null;
        g.K.yp = null;
        g.K.Va()
    }, 1),
    clearTimeout(g.K.Qp))
}
;
g.K.vp = function(a) {
    if (g.K.Db && g.K.Db.Gf && !g.K.mm)
        if (g.K.visible) {
            var c = g.K.bx - a.pageX;
            a = g.K.ex - a.pageY;
            Math.sqrt(c * c + a * a) > g.K.nG && g.K.Va()
        } else
            g.K.yp != g.K.Db && (clearTimeout(g.K.Qp),
            g.K.bx = a.pageX,
            g.K.ex = a.pageY,
            g.K.Qp = setTimeout(g.K.DK, g.K.uF))
}
;
g.K.I = function() {
    g.K.Db = null;
    g.K.yp = null;
    g.K.Va()
}
;
g.K.Va = function() {
    g.K.visible && (g.K.visible = !1,
    g.K.mb && (g.K.mb.style.display = "none"));
    g.K.Qp && clearTimeout(g.K.Qp)
}
;
g.K.block = function() {
    g.K.Va();
    g.K.mm = !0
}
;
g.K.YK = function() {
    g.K.mm = !1
}
;
g.K.DK = function() {
    if (!g.K.mm && (g.K.yp = g.K.Db,
    g.K.mb)) {
        g.K.mb.textContent = "";
        var a = g.K.EI();
        a = g.g.yb.ZD(a, g.K.JF);
        a = a.split("\n");
        for (var c = 0; c < a.length; c++) {
            var d = document.createElement("div");
            d.appendChild(document.createTextNode(a[c]));
            g.K.mb.appendChild(d)
        }
        a = g.K.Db.L;
        c = document.documentElement.clientWidth;
        d = document.documentElement.clientHeight;
        g.K.mb.style.direction = a ? "rtl" : "ltr";
        g.K.mb.style.display = "block";
        g.K.visible = !0;
        var e = g.K.bx;
        e = a ? e - (g.K.Yz + g.K.mb.offsetWidth) : e + g.K.Yz;
        var f = g.K.ex + g.K.Zz;
        f + g.K.mb.offsetHeight > d + window.scrollY && (f -= g.K.mb.offsetHeight + 2 * g.K.Zz);
        a ? e = Math.max(g.K.iu - window.scrollX, e) : e + g.K.mb.offsetWidth > c + window.scrollX - 2 * g.K.iu && (e = c - g.K.mb.offsetWidth - 2 * g.K.iu);
        g.K.mb.style.top = f + "px";
        g.K.mb.style.left = e + "px"
    }
}
;
g.g.za = {};
g.g.za.hE = "aria-";
g.g.za.yG = "role";
g.g.za.Gi = {
    lM: "grid",
    mM: "gridcell",
    qF: "group",
    KF: "listbox",
    YF: "menu",
    ZF: "menuitem",
    cN: "menuitemcheckbox",
    dG: "option",
    lG: "presentation",
    Du: "row",
    NG: "tree",
    OG: "treeitem"
};
g.g.za.State = {
    It: "activedescendant",
    CL: "colcount",
    NE: "disabled",
    XE: "expanded",
    Kz: "invalid",
    GF: "label",
    HF: "labelledby",
    IF: "level",
    SN: "orientation",
    YN: "posinset",
    cO: "rowcount",
    Hi: "selected",
    gO: "setsize",
    QG: "valuemax",
    SG: "valuemin"
};
g.g.za.Df = function(a, c) {
    a.setAttribute(g.g.za.yG, c)
}
;
g.g.za.ge = function(a, c, d) {
    Array.isArray(d) && (d = d.join(" "));
    a.setAttribute(g.g.za.hE + c, d)
}
;
g.qM = function() {}
;
g.rM = function() {}
;
g.sM = function() {}
;
g.HM = function() {}
;
g.g.xm = {};
g.g.xm.warn = function(a, c, d, e) {
    a = a + " was deprecated on " + c + " and will be deleted on " + d + ".";
    e && (a += "\nUse " + e + " instead.");
    console.warn(a)
}
;
g.Ja = function(a, c) {
    this.J = a;
    this.type = c
}
;
g.Ja.zq = 0;
g.Ja.rG = 1;
g.Ja.uG = 2;
g.Ja.tG = 3;
g.Ja.oG = 4;
g.Ja.pG = 5;
g.Ja.sG = 6;
g.Ja.qG = 7;
b = g.Ja.prototype;
b.ta = null;
b.mf = !1;
b.Vi = null;
b.wt = null;
b.x = 0;
b.y = 0;
b.Lr = function(a) {
    var c = this.aa()
      , d = a.aa();
    a.isConnected() && a.disconnect();
    if (this.isConnected()) {
        var e = this.Em(!0);
        this.wt = null;
        var f = this.sa();
        if (f.Pa)
            f.I(!1);
        else {
            this.disconnect();
            var h = f
        }
        this.wt = e
    }
    var k;
    g.h.isEnabled() && (k = new (g.h.get(g.h.ki))(d));
    g.Ja.HH(this, a);
    d.ut(c);
    k && (k.tl(),
    g.h.Ga(k));
    h && (a = this.type === g.pa.tc ? h.T : h.qa,
    (d = g.Ja.HB(d, a)) ? a.connect(d) : a.Gx(this))
}
;
b.I = function() {
    if (this.isConnected()) {
        this.dn(null);
        var a = this.sa();
        a && A(a)
    }
    this.mf = !0
}
;
b.aa = function() {
    return this.J
}
;
function Pa(a) {
    return a.type == g.pa.tc || a.type == g.pa.bd
}
b.isConnected = function() {
    return !!this.ta
}
;
b.vv = function(a) {
    g.g.xm.warn("Connection.prototype.canConnectWithReason", "July 2020", "July 2021", "the workspace's connection checker");
    return this.J.u.vh.vv(this, a, !1)
}
;
b.Gx = function() {}
;
b.connect = function(a) {
    if (this.ta != a && Qa(this.J.u.vh, this, a, !1)) {
        var c = g.h.oc();
        c || g.h.la(!0);
        Pa(this) ? this.Lr(a) : a.Lr(this);
        c || g.h.la(!1)
    }
}
;
g.Ja.HH = function(a, c) {
    if (!a || !c)
        throw Error("Cannot connect null connections.");
    a.ta = c;
    c.ta = a
}
;
g.Ja.DI = function(a, c) {
    var d = null;
    c = c.T;
    for (var e = c.J.u.vh, f = 0, h; h = a.Z[f]; f++)
        if ((h = h.connection) && Qa(e, c, h, !1)) {
            if (d)
                return null;
            d = h
        }
    return d
}
;
g.Ja.wI = function(a, c) {
    for (var d; d = g.Ja.DI(a, c); )
        if (a = d.sa(),
        !a || a.Pa)
            return d;
    return null
}
;
g.Ja.HB = function(a, c) {
    if (c.type === g.pa.xe)
        return g.Ja.wI(a, c.aa());
    a = a.Cs(!0);
    var d = c.J.u.vh;
    return a && Qa(d, c, a, !1) ? a : null
}
;
b = g.Ja.prototype;
b.disconnect = function() {
    var a = this.ta;
    if (!a)
        throw Error("Source connection not connected.");
    if (a.ta != this)
        throw Error("Target connection not connected to source connection.");
    if (Pa(this)) {
        var c = this.J;
        var d = a.aa();
        a = this
    } else
        c = a.aa(),
        d = this.J;
    var e = g.h.oc();
    e || g.h.la(!0);
    this.Tv(c, d);
    d.Pa || a.Hp();
    e || g.h.la(!1)
}
;
b.Tv = function(a, c) {
    var d;
    g.h.isEnabled() && (d = new (g.h.get(g.h.ki))(c));
    this.ta = this.ta.ta = null;
    c.ut(null);
    d && (d.tl(),
    g.h.Ga(d))
}
;
b.Hp = function() {
    var a = this.aa()
      , c = this.Em();
    if (a.u && c)
        if (a = g.P.Ck(c, a.u),
        a.T)
            this.connect(a.T);
        else if (a.qa)
            this.connect(a.qa);
        else
            throw Error("Child block does not have output or previous statement.");
}
;
b.sa = function() {
    return this.isConnected() ? this.ta.aa() : null
}
;
b.XC = function() {
    !this.isConnected() || this.ta && Qa(this.J.u.vh, this, this.ta, !1) || A(Pa(this) ? this.sa() : this.J)
}
;
b.Pb = function(a) {
    a ? (Array.isArray(a) || (a = [a]),
    this.Vi = a,
    this.XC()) : this.Vi = null;
    return this
}
;
b.dn = function(a) {
    this.wt = a;
    a = this.sa();
    a ? a.Pa && (a.I(!1),
    this.Hp()) : this.Hp()
}
;
b.Em = function(a) {
    return a && this.sa().Pa ? g.P.ph(this.sa()) : this.wt
}
;
b.LC = function() {
    return []
}
;
b.Fg = function() {
    for (var a = null, c = this.J.Z, d = 0; d < c.length; d++)
        if (c[d].connection === this) {
            a = c[d];
            break
        }
    return a
}
;
g.zM = function() {}
;
g.oz = function() {}
;
function Qa(a, c, d, e, f) {
    return a.vv(c, d, e, f) == g.Ja.zq
}
g.oz.prototype.vv = function(a, c, d, e) {
    if (a && c) {
        if (Pa(a)) {
            var f = a.aa();
            var h = c.aa()
        } else
            h = a.aa(),
            f = c.aa();
        f = f == h ? g.Ja.rG : c.type != g.Xl[a.type] ? g.Ja.uG : f.u !== h.u ? g.Ja.pG : f.Pa && !h.Pa ? g.Ja.sG : g.Ja.zq
    } else
        f = g.Ja.tG;
    return f != g.Ja.zq ? f : Ra(a, c) ? d && !Sa(a, c, e || 0) ? g.Ja.qG : g.Ja.zq : g.Ja.oG
}
;
function Ra(a, c) {
    a = a.Vi;
    c = c.Vi;
    if (!a || !c)
        return !0;
    for (var d = 0; d < a.length; d++)
        if (-1 != c.indexOf(a[d]))
            return !0;
    return !1
}
function Sa(a, c, d) {
    if (Ta(a, c) > d || c.aa().zd())
        return !1;
    switch (c.type) {
    case g.pa.cf:
        return a.ta || -1 != g.zm.indexOf(c) ? a = !1 : c.ta ? (a = c.sa(),
        a = a.zd() ? !(a.qa && a.qa.sa()) : !1) : a = !0,
        a;
    case g.pa.xe:
        if (c.isConnected() && !c.sa().zd() || a.isConnected())
            return !1;
        break;
    case g.pa.tc:
        if (c.isConnected() && !c.sa().Gc() && !c.sa().Pa)
            return !1;
        break;
    case g.pa.bd:
        if (c.isConnected() && !a.aa().ba && !c.sa().Pa && c.sa().ba)
            return !1;
        break;
    default:
        return !1
    }
    return -1 != g.zm.indexOf(c) ? !1 : !0
}
g.B.register(g.B.U.lz, g.B.bk, g.oz);
g.Uu = function(a) {
    this.Ta = Object.create(null);
    this.u = a
}
;
b = g.Uu.prototype;
b.clear = function() {
    this.Ta = Object.create(null)
}
;
b.nt = function(a, c) {
    var d = this.hd(c, a.type)
      , e = B(this.u);
    g.h.la(!0);
    try {
        if (d && d.La() != a.La()) {
            var f = a.type;
            c != d.name && Ua(d, c, e);
            for (c = 0; c < e.length; c++)
                e[c].mt(a.La(), d.La());
            g.h.Ga(new (g.h.get(g.h.mr))(a));
            this.Ta[f].splice(this.Vo(f).indexOf(a), 1)
        } else
            Ua(a, c, e)
    } finally {
        g.h.la(!1)
    }
}
;
b.Hj = function(a, c) {
    var d = this.Uf(a);
    if (!d)
        throw Error("Tried to rename a variable that didn't exist. ID: " + a);
    this.nt(d, c)
}
;
function Ua(a, c, d) {
    g.h.Ga(new (g.h.get(g.h.Tu))(a,c));
    a.name = c;
    for (c = 0; c < d.length; c++)
        d[c].Ft(a)
}
b.jf = function(a, c, d) {
    var e = this.hd(a, c);
    if (e) {
        if (d && e.La() != d)
            throw Error('Variable "' + a + '" is already in use and its id is "' + e.La() + '" which conflicts with the passed in id, "' + d + '".');
        return e
    }
    if (d && this.Uf(d))
        throw Error('Variable id, "' + d + '", is already in use.');
    e = d || g.g.Dg();
    c = c || "";
    e = new g.Yn(this.u,a,c,e);
    a = this.Ta[c] || [];
    a.push(e);
    delete this.Ta[c];
    this.Ta[c] = a;
    return e
}
;
b.Bh = function(a) {
    var c = this.Uf(a);
    if (c) {
        var d = c.name
          , e = this.Gw(a);
        a = 0;
        for (var f; f = e[a]; a++)
            if ("procedures_defnoreturn" == f.type || "procedures_defreturn" == f.type) {
                a = C(f, "NAME");
                d = g.i.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace("%2", a);
                g.alert(d);
                return
            }
        var h = this;
        1 < e.length ? (d = g.i.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(e.length)).replace("%2", d),
        g.confirm(d, function(k) {
            k && c && Va(h, c, e)
        })) : Va(h, c, e)
    } else
        console.warn("Can't delete non-existent variable: " + a)
}
;
function Va(a, c, d) {
    var e = g.h.oc();
    e || g.h.la(!0);
    try {
        for (var f = 0; f < d.length; f++)
            d[f].I(!0);
        var h = a.Ta[c.type];
        a = 0;
        for (var k; k = h[a]; a++)
            if (k.La() == c.La()) {
                h.splice(a, 1);
                g.h.Ga(new (g.h.get(g.h.mr))(c));
                break
            }
    } finally {
        e || g.h.la(!1)
    }
}
b.hd = function(a, c) {
    if (c = this.Ta[c || ""])
        for (var d = 0, e; e = c[d]; d++)
            if (g.Jd.qf(e.name, a))
                return e;
    return null
}
;
b.Uf = function(a) {
    for (var c = Object.keys(this.Ta), d = 0; d < c.length; d++)
        for (var e = c[d], f = 0, h; h = this.Ta[e][f]; f++)
            if (h.La() == a)
                return h;
    return null
}
;
b.Vo = function(a) {
    return (a = this.Ta[a || ""]) ? a.slice() : []
}
;
b.Fw = function(a) {
    var c = {};
    g.g.object.Oe(c, this.Ta);
    a && a.Ej && g.g.object.Oe(c, a.Ej.Ta);
    a = Object.keys(c);
    c = !1;
    for (var d = 0; d < a.length; d++)
        "" == a[d] && (c = !0);
    c || a.push("");
    return a
}
;
b.Gk = function() {
    var a = [], c;
    for (c in this.Ta)
        a = a.concat(this.Ta[c]);
    return a
}
;
b.qw = function() {
    var a = [], c;
    for (c in this.Ta)
        for (var d = this.Ta[c], e = 0, f; f = d[e]; e++)
            a.push(f.name);
    return a
}
;
b.Gw = function(a) {
    for (var c = [], d = B(this.u), e = 0; e < d.length; e++) {
        var f = d[e].Gh();
        if (f)
            for (var h = 0; h < f.length; h++)
                f[h].La() == a && c.push(d[e])
    }
    return c
}
;
g.Ub = function(a) {
    this.id = g.g.Dg();
    g.Ub.ao[this.id] = this;
    this.options = a || new g.Kd({});
    this.L = !!this.options.L;
    this.Vd = !!this.options.Vd;
    this.Gb = this.options.Gb;
    this.vh = new (g.B.Qf(g.B.U.lz, this.options, !0))(this);
    this.bq = [];
    this.Et = [];
    this.Kr = Object.create(null);
    this.$d = [];
    this.Al = [];
    this.Cp = [];
    this.gv = Object.create(null);
    this.ei = Object.create(null);
    this.Ta = new g.Uu(this);
    this.Ej = null
}
;
b = g.Ub.prototype;
b.ra = !1;
b.Uw = !1;
b.Sz = 1024;
b.Nr = null;
b.I = function() {
    this.$d.length = 0;
    this.clear();
    delete g.Ub.ao[this.id]
}
;
g.Ub.hA = 3;
b = g.Ub.prototype;
b.Vg = function(a, c) {
    a = a.jb();
    c = c.jb();
    return a.y + g.Ub.prototype.Vg.offset * a.x - (c.y + g.Ub.prototype.Vg.offset * c.x)
}
;
b.qr = function(a) {
    this.bq.push(a)
}
;
b.jt = function(a) {
    if (!g.g.rr(this.bq, a))
        throw Error("Block not present in workspace's list of top-most blocks.");
}
;
b.xc = function(a) {
    var c = [].concat(this.bq);
    a && 1 < c.length && (this.Vg.offset = Math.sin(g.g.Sa.Cd(g.Ub.hA)),
    this.L && (this.Vg.offset *= -1),
    c.sort(this.Vg));
    return c
}
;
function Wa(a, c) {
    return a.ei[c] ? a.ei[c].slice(0) : []
}
function B(a) {
    var c = a.xc(!1);
    for (a = 0; a < c.length; a++)
        c.push.apply(c, Ca(c[a], !1));
    return c.filter(function(d) {
        return !d.zd()
    })
}
b.clear = function() {
    this.Uw = !0;
    try {
        var a = g.h.oc();
        for (a || g.h.la(!0); this.bq.length; )
            this.bq[0].I(!1);
        for (; this.Et.length; )
            this.Et[this.Et.length - 1].I(!1);
        a || g.h.la(!1);
        this.Ta.clear();
        this.Ej && this.Ej.clear()
    } finally {
        this.Uw = !1
    }
}
;
b.Hj = function(a, c) {
    this.Ta.Hj(a, c)
}
;
b.jf = function(a, c, d) {
    return this.Ta.jf(a, c, d)
}
;
b.Gw = function(a) {
    return this.Ta.Gw(a)
}
;
b.Bh = function(a) {
    this.Ta.Bh(a)
}
;
b.hd = function(a, c) {
    return this.Ta.hd(a, c)
}
;
b.Uf = function(a) {
    return this.Ta.Uf(a)
}
;
b.Vo = function(a) {
    return this.Ta.Vo(a)
}
;
b.Fw = function() {
    return this.Ta.Fw(this)
}
;
b.Gk = function() {
    return this.Ta.Gk()
}
;
b.qw = function() {
    return this.Ta.qw()
}
;
b.Ih = function() {
    return 0
}
;
b.wj = function(a, c) {
    return new g.Il(this,a,c)
}
;
function Xa(a) {
    return isNaN(a.options.sx) ? Infinity : a.options.sx - B(a).length
}
function Ya(a, c) {
    if (!Za(a))
        return !0;
    var d = 0, e;
    for (e in c) {
        if (c[e] > (a.options.Hs ? (void 0 !== a.options.Hs[e] ? a.options.Hs[e] : Infinity) - Wa(a, e).length : Infinity))
            return !1;
        d += c[e]
    }
    return d > Xa(a) ? !1 : !0
}
function Za(a) {
    return Infinity != a.options.sx || !!a.options.Hs
}
function $a(a, c) {
    var d = c ? a.Cp : a.Al;
    a = c ? a.Al : a.Cp;
    var e = d.pop();
    if (e) {
        for (var f = [e]; d.length && e.group && e.group == d[d.length - 1].group; )
            f.push(d.pop());
        for (d = 0; e = f[d]; d++)
            a.push(e);
        f = g.h.filter(f, c);
        g.h.$a = !1;
        try {
            for (d = 0; e = f[d]; d++)
                e.run(c)
        } finally {
            g.h.$a = !0
        }
    }
}
function D(a, c) {
    a.$d.push(c)
}
function ab(a, c) {
    g.g.rr(a.$d, c)
}
b.Td = function(a) {
    return this.gv[a] || null
}
;
b.By = function(a) {
    this.Ta = a
}
;
g.Ub.ao = Object.create(null);
g.Ub.Oo = function(a) {
    return g.Ub.ao[a] || null
}
;
g.Ub.getAll = function() {
    var a = [], c;
    for (c in g.Ub.ao)
        a.push(g.Ub.ao[c]);
    return a
}
;
g.zA = function(a) {
    this.to = a;
    this.eb()
}
;
b = g.zA.prototype;
b.Eb = null;
b.to = null;
b.eb = function() {
    this.Eb || (this.Eb = g.g.o.N(g.g.F.Ii, {
        xmlns: g.g.o.Un,
        "xmlns:html": g.g.o.ik,
        "xmlns:xlink": g.g.o.Mf,
        version: "1.1",
        "class": "blocklyWsDragSurface blocklyOverflowVisible"
    }, null),
    this.to.appendChild(this.Eb))
}
;
b.zl = function(a, c) {
    a = a.toFixed(0);
    c = c.toFixed(0);
    this.Eb.style.display = "block";
    g.g.o.Mp(this.Eb, "translate3d(" + a + "px, " + c + "px, 0px)")
}
;
b.Dw = function() {
    return g.g.sf(this.Eb)
}
;
b.Er = function(a) {
    if (!a)
        throw Error("Couldn't clear and hide the drag surface: missing new surface.");
    var c = this.Eb.childNodes[0]
      , d = this.Eb.childNodes[1];
    if (!(c && d && g.g.o.qs(c, "blocklyBlockCanvas") && g.g.o.qs(d, "blocklyBubbleCanvas")))
        throw Error("Couldn't clear and hide the drag surface. A node was missing.");
    null != this.by ? g.g.o.Tk(c, this.by) : a.insertBefore(c, a.firstChild);
    g.g.o.Tk(d, c);
    this.Eb.style.display = "none";
    if (this.Eb.childNodes.length)
        throw Error("Drag surface was not cleared.");
    g.g.o.Mp(this.Eb, "");
    this.by = null
}
;
g.m = {};
g.m.register = function(a, c) {
    g.B.register(g.B.U.RENDERER, a, c)
}
;
g.m.unregister = function(a) {
    g.B.unregister(g.B.U.RENDERER, a)
}
;
g.m.S = function(a, c, d) {
    a = new (g.B.Po(g.B.U.RENDERER, a))(a);
    a.S(c, d);
    return a
}
;
g.H = function(a, c, d) {
    if (!c)
        throw Error("Cannot create a node without a location.");
    this.gq = a;
    this.Oa = c;
    this.cE = null;
    (a = d || null) && a.bE && (this.cE = a.bE)
}
;
g.H.types = {
    qd: "field",
    Jc: "block",
    $e: "input",
    nk: "output",
    Ci: "next",
    Fi: "previous",
    rk: "stack",
    ne: "workspace"
};
g.H.Bi = !1;
g.H.JE = -20;
g.H.VO = function(a) {
    switch (a) {
    case g.H.types.Fi:
    case g.H.types.Ci:
    case g.H.types.$e:
    case g.H.types.nk:
        return !0
    }
    return !1
}
;
g.H.sm = function(a) {
    return a ? new g.H(g.H.types.qd,a) : null
}
;
g.H.aj = function(a) {
    if (!a)
        return null;
    var c = a.type;
    return c == g.pa.tc || c == g.pa.bd && a.Fg() ? g.H.Bk(a.Fg()) : c == g.pa.bd ? new g.H(g.H.types.Ci,a) : c == g.pa.xe ? new g.H(g.H.types.nk,a) : c == g.pa.cf ? new g.H(g.H.types.Fi,a) : null
}
;
g.H.Bk = function(a) {
    return a && a.connection ? new g.H(g.H.types.$e,a.connection) : null
}
;
g.H.$i = function(a) {
    return a ? new g.H(g.H.types.Jc,a) : null
}
;
g.H.Pr = function(a) {
    return a ? new g.H(g.H.types.rk,a) : null
}
;
g.H.PH = function(a, c) {
    return c && a ? new g.H(g.H.types.ne,a,{
        bE: c
    }) : null
}
;
g.H.MO = function(a) {
    var c = a.qa || a.T;
    return c ? g.H.aj(c) : g.H.$i(a)
}
;
b = g.H.prototype;
b.getType = function() {
    return this.gq
}
;
function bb(a, c) {
    a = a.Oa;
    a instanceof g.Il || (a = a.aa());
    if (!a || !a.u)
        return null;
    var d = a.Tf();
    a = d.u.xc(!0);
    for (var e = 0, f; f = a[e]; e++)
        if (d.id == f.id)
            return c = e + (c ? 1 : -1),
            -1 == c || c == a.length ? null : g.H.Pr(a[c]);
    throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}
function cb(a) {
    if (!a)
        return null;
    do
        var c = a.qa && a.qa.sa();
    while (c && t(c) == a && (a = c));
    return (c = a.qa || a.T) && c.ta && c.ta.Fg() ? g.H.Bk(c.ta.Fg()) : g.H.Pr(a)
}
b.aa = function() {
    return this.getType() === g.H.types.Jc ? this.Oa : this.getType() === g.H.types.rk ? this.Oa : this.getType() === g.H.types.ne ? null : this.Oa.aa()
}
;
b.next = function() {
    switch (this.gq) {
    case g.H.types.rk:
        return bb(this, !0);
    case g.H.types.nk:
        var a = this.Oa;
        return g.H.$i(a.aa());
    case g.H.types.qd:
        a: {
            var c = this.Oa
              , d = c.Fg();
            a = c.aa();
            c = d.ib.indexOf(c) + 1;
            d = a.Z.indexOf(d);
            for (var e; e = a.Z[d]; d++) {
                for (var f = e.ib; c < f.length; ) {
                    if (db(f[c]) || g.H.Bi) {
                        a = g.H.sm(f[c]);
                        break a
                    }
                    c++
                }
                c = 0;
                if (e.connection) {
                    a = g.H.Bk(e);
                    break a
                }
            }
            a = null
        }
        return a;
    case g.H.types.$e:
        a: {
            c = this.Oa.Fg();
            a = c.aa();
            for (c = a.Z.indexOf(c) + 1; d = a.Z[c]; c++) {
                e = d.ib;
                f = 0;
                for (var h; h = e[f]; f++)
                    if (db(h) || g.H.Bi) {
                        a = g.H.sm(h);
                        break a
                    }
                if (d.connection) {
                    a = g.H.Bk(d);
                    break a
                }
            }
            a = null
        }
        return a;
    case g.H.types.Jc:
        return g.H.aj(this.Oa.ba);
    case g.H.types.Fi:
        return a = this.Oa,
        g.H.$i(a.aa());
    case g.H.types.Ci:
        return a = this.Oa,
        g.H.aj(a.ta)
    }
    return null
}
;
b.kj = function() {
    switch (this.gq) {
    case g.H.types.ne:
        var a = this.Oa.xc(!0);
        if (0 < a.length)
            return g.H.Pr(a[0]);
        break;
    case g.H.types.rk:
        a = this.Oa;
        var c = a.qa || a.T;
        return c ? g.H.aj(c) : g.H.$i(a);
    case g.H.types.Jc:
        a = this.Oa;
        a: {
            a = a.Z;
            c = 0;
            for (var d; d = a[c]; c++) {
                for (var e = d.ib, f = 0, h; h = e[f]; f++)
                    if (db(h) || g.H.Bi) {
                        a = g.H.sm(h);
                        break a
                    }
                if (d.connection) {
                    a = g.H.Bk(d);
                    break a
                }
            }
            a = null
        }
        return a;
    case g.H.types.$e:
        return g.H.aj(this.Oa.ta)
    }
    return null
}
;
b.Vh = function() {
    switch (this.gq) {
    case g.H.types.rk:
        return bb(this, !1);
    case g.H.types.qd:
        a: {
            var a = this.Oa;
            var c = a.Fg();
            var d = a.aa();
            a = c.ib.indexOf(a) - 1;
            for (var e = d.Z.indexOf(c), f; f = d.Z[e]; e--) {
                if (f.connection && f !== c) {
                    c = g.H.Bk(f);
                    break a
                }
                for (f = f.ib; -1 < a; ) {
                    if (db(f[a]) || g.H.Bi) {
                        c = g.H.sm(f[a]);
                        break a
                    }
                    a--
                }
                0 <= e - 1 && (a = d.Z[e - 1].ib.length - 1)
            }
            c = null
        }
        return c;
    case g.H.types.$e:
        a: {
            c = this.Oa.Fg();
            d = c.aa();
            for (a = d.Z.indexOf(c); e = d.Z[a]; a--) {
                if (e.connection && e !== c) {
                    c = g.H.Bk(e);
                    break a
                }
                e = e.ib;
                f = e.length - 1;
                for (var h; h = e[f]; f--)
                    if (db(h) || g.H.Bi) {
                        c = g.H.sm(h);
                        break a
                    }
            }
            c = null
        }
        return c;
    case g.H.types.Jc:
        return c = this.Oa,
        g.H.aj(c.qa || c.T);
    case g.H.types.Fi:
        c = this.Oa;
        if ((c = c.ta) && !c.Fg())
            return g.H.aj(c);
        break;
    case g.H.types.Ci:
        return c = this.Oa,
        g.H.$i(c.aa())
    }
    return null
}
;
b.Aj = function() {
    switch (this.gq) {
    case g.H.types.rk:
        var a = this.Oa
          , c = a.jb();
        return g.H.PH(a.u, new g.g.V(c.x,c.y + g.H.JE));
    case g.H.types.nk:
        return a = this.Oa,
        (c = a.ta) ? g.H.aj(c) : g.H.Pr(a.aa());
    case g.H.types.qd:
        return g.H.$i(this.Oa.aa());
    case g.H.types.$e:
        return a = this.Oa,
        g.H.$i(a.aa());
    case g.H.types.Jc:
        return a = this.Oa,
        cb(a);
    case g.H.types.Fi:
        return a = this.Oa,
        cb(a.aa());
    case g.H.types.Ci:
        return a = this.Oa,
        cb(a.aa())
    }
    return null
}
;
g.O = Object.create(null);
g.ma = {};
g.ma.wn = Object.create(null);
g.ma.register = function(a, c) {
    if ("string" != typeof a || "" == a.trim())
        throw Error('Error: Invalid extension name "' + a + '"');
    if (g.ma.wn[a])
        throw Error('Error: Extension "' + a + '" is already registered.');
    if ("function" != typeof c)
        throw Error('Error: Extension "' + a + '" must be a function');
    g.ma.wn[a] = c
}
;
g.ma.ht = function(a, c) {
    if (!c || "object" != typeof c)
        throw Error('Error: Mixin "' + a + '" must be a object');
    g.ma.register(a, function() {
        this.Oe(c)
    })
}
;
g.ma.jy = function(a, c, d, e) {
    var f = 'Error when registering mutator "' + a + '": ';
    g.ma.QA(f, c.Wb, "domToMutation");
    g.ma.QA(f, c.pb, "mutationToDom");
    var h = g.ma.SA(c, f);
    if (d && "function" != typeof d)
        throw Error('Extension "' + a + '" is not a function');
    g.ma.register(a, function() {
        if (h) {
            if (!g.ec)
                throw Error(f + "Missing require for Blockly.Mutator");
            this.Nj(new g.ec(e || []))
        }
        this.Oe(c);
        d && d.apply(this)
    })
}
;
g.ma.unregister = function(a) {
    g.ma.wn[a] ? delete g.ma.wn[a] : console.warn('No extension mapping for name "' + a + '" found to unregister')
}
;
g.ma.apply = function(a, c, d) {
    var e = g.ma.wn[a];
    if ("function" != typeof e)
        throw Error('Error: Extension "' + a + '" not found.');
    if (d)
        g.ma.yH(a, c);
    else
        var f = g.ma.zw(c);
    e.apply(c);
    if (d)
        g.ma.wH('Error after applying mutator "' + a + '": ', c);
    else if (!g.ma.wJ(f, c))
        throw Error('Error when applying extension "' + a + '": mutation properties changed when applying a non-mutator extension.');
}
;
g.ma.QA = function(a, c, d) {
    if (!c)
        throw Error(a + 'missing required property "' + d + '"');
    if ("function" != typeof c)
        throw Error(a + '" required property "' + d + '" must be a function');
}
;
g.ma.yH = function(a, c) {
    if (g.ma.zw(c).length)
        throw Error('Error: tried to apply mutation "' + a + '" to a block that already has mutator functions.  Block id: ' + c.id);
}
;
g.ma.SA = function(a, c) {
    var d = void 0 !== a.uh
      , e = void 0 !== a.zh;
    if (d && e) {
        if ("function" != typeof a.uh)
            throw Error(c + "compose must be a function.");
        if ("function" != typeof a.zh)
            throw Error(c + "decompose must be a function.");
        return !0
    }
    if (!d && !e)
        return !1;
    throw Error(c + 'Must have both or neither of "compose" and "decompose"');
}
;
g.ma.wH = function(a, c) {
    if ("function" != typeof c.Wb)
        throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
    if ("function" != typeof c.pb)
        throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
    g.ma.SA(c, a)
}
;
g.ma.zw = function(a) {
    var c = [];
    void 0 !== a.Wb && c.push(a.Wb);
    void 0 !== a.pb && c.push(a.pb);
    void 0 !== a.uh && c.push(a.uh);
    void 0 !== a.zh && c.push(a.zh);
    return c
}
;
g.ma.wJ = function(a, c) {
    c = g.ma.zw(c);
    if (c.length != a.length)
        return !1;
    for (var d = 0; d < c.length; d++)
        if (a[d] != c[d])
            return !1;
    return !0
}
;
g.ma.yr = function(a, c) {
    var d = [];
    "object" == typeof document && g.g.tD(function() {
        for (var e in c)
            g.g.RA(c[e])
    });
    return function() {
        this.type && -1 == d.indexOf(this.type) && (g.ma.xH(this, a, c),
        d.push(this.type));
        this.ab(function() {
            var e = String(C(this, a))
              , f = c[e];
            null == f ? -1 == d.indexOf(this.type) && (e = "No tooltip mapping for value " + e + " of field " + a,
            null != this.type && (e += " of block type " + this.type),
            console.warn(e + ".")) : f = g.g.se(f);
            return f
        }
        .bind(this))
    }
}
;
g.ma.xH = function(a, c, d) {
    var e = z(a, c);
    if (!eb(e)) {
        e = e.getOptions();
        for (var f = 0; f < e.length; ++f) {
            var h = e[f][1];
            null == d[h] && console.warn("No tooltip mapping for value " + h + " of field " + c + " of block type " + a.type)
        }
    }
}
;
g.ma.nv = function(a) {
    "object" == typeof document && g.g.tD(function() {
        g.g.RA(a)
    });
    return function() {
        this.ab(function() {
            var c = z(this, "VAR");
            return g.g.se(a).replace("%1", c ? c.yd() : "")
        }
        .bind(this))
    }
}
;
g.ma.iI = function() {
    this.TK = this.Gf;
    this.ab(function() {
        var a = this.getParent();
        return a && fb(a) && a.Gf || this.TK
    }
    .bind(this))
}
;
g.ma.register("parent_tooltip_when_inline", g.ma.iI);
g.rf = {};
g.rf.register = function(a, c) {
    g.B.register(g.B.U.qd, a, c)
}
;
g.rf.unregister = function(a) {
    g.B.unregister(g.B.U.qd, a)
}
;
g.rf.ka = function(a) {
    var c = g.B.Bw(g.B.U.qd, a.type);
    return c ? c.ka(a) : (console.warn("Blockly could not create a field of type " + a.type + ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."),
    null)
}
;
g.CM = function() {}
;
g.Bb = {};
g.Bb.Uv = 0;
g.Bb.Ur = null;
g.Bb.aI = function(a) {
    var c = a.u
      , d = a.Ma();
    c.Qi.play("delete");
    a = gb(c, d);
    d = d.cloneNode(!0);
    d.VK = a.x;
    d.WK = a.y;
    d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
    v(c).appendChild(d);
    d.HA = d.getBBox();
    g.Bb.sB(d, c.L, new Date, c.scale)
}
;
g.Bb.sB = function(a, c, d, e) {
    var f = (new Date - d) / 150;
    1 < f ? g.g.o.removeNode(a) : (a.setAttribute("transform", "translate(" + (a.VK + (c ? -1 : 1) * a.HA.width * e / 2 * f) + "," + (a.WK + a.HA.height * e * f) + ") scale(" + (1 - f) * e + ")"),
    setTimeout(g.Bb.sB, 10, a, c, d, e))
}
;
g.Bb.IH = function(a) {
    var c = a.u
      , d = c.scale;
    c.Qi.play("click");
    if (!(1 > d)) {
        var e = gb(c, a.Ma());
        a.T ? (e.x += (a.L ? 3 : -3) * d,
        e.y += 13 * d) : a.qa && (e.x += (a.L ? -23 : 23) * d,
        e.y += 3 * d);
        a = g.g.o.N(g.g.F.Bq, {
            cx: e.x,
            cy: e.y,
            r: 0,
            fill: "none",
            stroke: "#888",
            "stroke-width": 10
        }, v(c));
        g.Bb.bB(a, new Date, d)
    }
}
;
g.Bb.bB = function(a, c, d) {
    var e = (new Date - c) / 150;
    1 < e ? g.g.o.removeNode(a) : (a.setAttribute("r", 25 * e * d),
    a.style.opacity = 1 - e,
    g.Bb.Uv = setTimeout(g.Bb.bB, 10, a, c, d))
}
;
g.Bb.$H = function(a) {
    a.u.Qi.play("disconnect");
    if (!(1 > a.u.scale)) {
        var c = E(a).height;
        c = Math.atan(10 / c) / Math.PI * 180;
        a.L || (c *= -1);
        g.Bb.rB(a.Ma(), c, new Date)
    }
}
;
g.Bb.rB = function(a, c, d) {
    var e = (new Date - d) / 200;
    1 < e ? a.Rp = "" : (a.Rp = "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")",
    g.Bb.Ur = a,
    g.Bb.Uv = setTimeout(g.Bb.rB, 10, a, c, d));
    a.setAttribute("transform", a.fq + a.Rp)
}
;
g.Bb.Vv = function() {
    if (g.Bb.Ur) {
        clearTimeout(g.Bb.Uv);
        var a = g.Bb.Ur;
        a.Rp = "";
        a.setAttribute("transform", a.fq);
        g.Bb.Ur = null
    }
}
;
g.h.li = function(a, c, d) {
    g.h.li.v.constructor.call(this, a ? a.u.id : void 0);
    this.ob = a ? a.id : null;
    this.uC = c;
    this.JA = d
}
;
g.g.object.W(g.h.li, g.h.ze);
g.h.li.prototype.type = g.h.wq;
g.h.li.prototype.Ca = function() {
    var a = g.h.li.v.Ca.call(this);
    a.isStart = this.uC;
    a.blockId = this.ob;
    a.blocks = this.JA;
    return a
}
;
g.h.li.prototype.ka = function(a) {
    g.h.li.v.ka.call(this, a);
    this.uC = a.isStart;
    this.ob = a.blockId;
    this.JA = a.blocks
}
;
g.B.register(g.B.U.cc, g.h.wq, g.h.li);
g.uM = function() {}
;
g.Hd = function(a) {
    this.Rj = g.selected = a;
    this.s = a.u;
    this.rj = this.$w = null;
    this.Jo = hb(this, this.Rj);
    this.Ad = this.mc = null;
    this.dg = !1;
    this.Go = this.Kw = this.cl = null;
    this.wr = ib(this)
}
;
g.Hd.$l = {
    au: 0,
    zF: 1,
    gA: 2
};
g.Hd.uz = "The insertion marker manager tried to create a marker but the result is missing %1. If you are using a mutator, make sure your domToMutation method is properly defined.";
g.Hd.prototype.I = function() {
    this.wr.length = 0;
    g.h.disable();
    try {
        this.Jo && this.Jo.I(),
        this.rj && this.rj.I()
    } finally {
        g.h.enable()
    }
}
;
g.Hd.prototype.update = function(a, c) {
    var d = this.mc && this.Ad ? g.yE : g.Md;
    for (var e = null, f = null, h = 0; h < this.wr.length; h++) {
        var k = this.wr[h]
          , l = k.closest(d, a);
        l.connection && (e = l.connection,
        f = k,
        d = l.et)
    }
    d = {
        closest: e,
        local: f,
        et: d
    };
    if ((this.dg = this.Ey(d, c)) || jb(this, d, a)) {
        g.h.disable();
        d.closest ? (a = this.mc != d.closest,
        c = this.Ad != d.local,
        this.mc && this.Ad && (a || c || this.dg) && kb(this)) : kb(this);
        this.Ad = this.mc = this.cl = null;
        if (!this.dg && (a = d.closest,
        c = d.local,
        a))
            if (a == this.mc || a.aa().zd())
                console.log("Trying to connect to an insertion marker");
            else {
                this.mc = a;
                this.Ad = c;
                a = this.mc;
                c = this.Ad;
                d = this.Rj;
                c.type == g.pa.xe || c.type == g.pa.cf ? ((e = !a.isConnected()) || (e = a.sa(),
                e = !!g.Ja.HB(d, c.type === g.pa.xe ? e.T : e.qa)),
                c = e ? g.Hd.$l.au : g.Hd.$l.gA) : c = g.Hd.$l.au;
                switch (c) {
                case g.Hd.$l.zF:
                    this.Kw = this.mc.aa();
                    break;
                case g.Hd.$l.au:
                    e = this.Ad;
                    c = this.mc;
                    d = this.$w && e == this.$w ? this.rj : this.Jo;
                    e = d.yw(e.aa(), e);
                    if (e == this.cl)
                        throw Error("Made it to showInsertionMarker_ even though the marker isn't changing");
                    d.Ia();
                    d.ra = !0;
                    d.Ma().setAttribute("visibility", "visible");
                    e && c && (e.type != g.pa.bd && e.type != g.pa.tc || d.moveBy(c.x - e.x, c.y - e.y));
                    c && e.connect(c);
                    this.cl = e;
                    break;
                case g.Hd.$l.gA:
                    this.Go = this.mc.sa(),
                    lb(this.Go.Nb, "blocklyReplaceable", !0)
                }
                a && (d = a.J.u.Ob.na(),
                c = mb(d, a),
                a.type == g.pa.tc || a.type == g.pa.xe ? (d = d.em,
                c = g.g.D.moveBy(0, -d) + g.g.D.oa("v", d) + c.Af + g.g.D.oa("v", d)) : (d = d.Nn - d.Hb,
                c = g.g.D.moveBy(-d, 0) + g.g.D.oa("h", d) + c.Cj + g.g.D.oa("h", d)),
                d = a.J.jb(),
                g.Ja.jC = g.g.o.N(g.g.F.Ld, {
                    "class": "blocklyHighlightedConnectionPath",
                    d: c,
                    transform: "translate(" + (a.x - d.x) + "," + (a.y - d.y) + ")" + (a.J.L ? " scale(-1 1)" : "")
                }, a.J.Ma()))
            }
        g.h.enable()
    }
}
;
function hb(a, c) {
    var d = c.type;
    g.h.disable();
    try {
        var e = a.s.wj(d);
        e.wD(!0);
        if (c.pb) {
            var f = c.pb();
            f && e.Wb(f)
        }
        for (a = 0; a < c.Z.length; a++) {
            var h = c.Z[a];
            if (h.name != g.Jb.Dq) {
                var k = e.Z[a];
                if (!k)
                    throw Error(g.Hd.uz.replace("%1", "an input"));
                for (d = 0; d < h.ib.length; d++) {
                    var l = h.ib[d]
                      , m = k.ib[d];
                    if (!m)
                        throw Error(g.Hd.uz.replace("%1", "a field"));
                    m.setValue(l.getValue())
                }
            }
        }
        e.Kj(c.isCollapsed());
        e.Xc(fb(c));
        e.uf();
        e.Ma().setAttribute("visibility", "hidden")
    } finally {
        g.h.enable()
    }
    return e
}
function ib(a) {
    var c = a.Rj.Sf(!1)
      , d = a.Rj.Cs(!0);
    if (d && d != a.Rj.ba) {
        c.push(d);
        a.$w = d;
        if (a.rj) {
            g.h.disable();
            try {
                a.rj.I()
            } finally {
                g.h.enable()
            }
        }
        a.rj = hb(a, d.aa())
    }
    return c
}
function jb(a, c, d) {
    var e = c.local
      , f = c.closest;
    c = c.et;
    if (e && f) {
        if (a.Ad && a.mc) {
            if (a.mc == f && a.Ad == e)
                return !1;
            e = a.Ad.x + d.x - a.mc.x;
            a = a.Ad.y + d.y - a.mc.y;
            a = Math.sqrt(e * e + a * a);
            return !(f && c > a - g.BE)
        }
        if (a.Ad || a.mc)
            console.error("Only one of localConnection_ and closestConnection_ was set.");
        else
            return !0
    } else
        return !(!a.Ad || !a.mc);
    console.error("Returning true from shouldUpdatePreviews, but it's not clear why.");
    return !0
}
g.Hd.prototype.Ey = function(a, c) {
    return c && ha(this.s.De, c.id) ? c.Xy(this.Rj, a && !!a.closest) : !1
}
;
function kb(a) {
    a.mc && a.mc.sa() && (g.g.o.removeNode(g.Ja.jC),
    delete g.Ja.jC);
    if (a.Go)
        lb(a.Go.Nb, "blocklyReplaceable", !1),
        a.Go = null;
    else if (a.Kw)
        a.Kw = null;
    else if (a.cl)
        if (a.cl) {
            var c = a.cl
              , d = c.aa()
              , e = d.ba
              , f = d.qa
              , h = d.T;
            h = c.type == g.pa.tc && !(h && h.ta);
            !(c != e || f && f.ta) || h ? A(c.sa(), !1) : c.type == g.pa.bd && c != e ? (e = c.ta,
            A(e.aa(), !1),
            f = f ? f.ta : null,
            A(d, !0),
            f && f.connect(e)) : A(d, !0);
            if (c.ta)
                throw Error("markerConnection_ still connected at the end of disconnectInsertionMarker");
            a.cl = null;
            (a = d.Ma()) && a.setAttribute("visibility", "hidden")
        } else
            console.log("No insertion marker connection to disconnect")
}
g.Hd.prototype.Dm = function() {
    var a = [];
    this.Jo && a.push(this.Jo);
    this.rj && a.push(this.rj);
    return a
}
;
g.xn = function(a, c) {
    this.Lb = a;
    this.s = c;
    this.Cg = new g.Hd(this.Lb);
    this.wc = null;
    this.dg = !1;
    this.Wg = this.Lb.jb();
    this.Yr = g.xn.XI(a)
}
;
g.xn.prototype.I = function() {
    this.Yr.length = 0;
    this.Cg && this.Cg.I()
}
;
g.xn.XI = function(a) {
    var c = [];
    a = q(a, !1);
    for (var d = 0, e; e = a[d]; d++) {
        e = nb(e);
        for (var f = 0; f < e.length; f++)
            c.push({
                location: e[f].Pk,
                icon: e[f]
            })
    }
    return c
}
;
b = g.xn.prototype;
b.Tp = function(a, c) {
    g.h.oc() || g.h.la(!0);
    var d = new (g.h.get(g.h.wq))(this.Lb,!0,q(this.Lb, !1));
    g.h.Ga(d);
    this.s.ip && ob(this.Lb);
    g.g.o.Vp();
    this.s.Yc(!1);
    g.Bb.Vv();
    if (this.Lb.getParent() || c && this.Lb.ba && this.Lb.ba.sa())
        A(this.Lb, c),
        a = this.Vm(a),
        a = g.g.V.sum(this.Wg, a),
        this.Lb.translate(a.x, a.y),
        g.Bb.$H(this.Lb),
        a = this.Cg,
        a.wr = ib(a);
    this.Lb.Lj(!0);
    a = this.Lb;
    a.mq && (c = a.jb(),
    a.Ma().removeAttribute("transform"),
    a.u.Ae.zl(c.x, c.y),
    (c = a.Ma()) && Ma(a.u.Ae, c))
}
;
b.Dh = function(a, c) {
    c = this.Vm(c);
    var d = g.g.V.sum(this.Wg, c);
    this.Lb.wx(d);
    for (d = 0; d < this.Yr.length; d++) {
        var e = this.Yr[d];
        pb(e.icon, g.g.V.sum(e.location, c))
    }
    d = this.wc;
    this.wc = qb(this.s, a);
    this.Cg.update(c, this.wc);
    a = this.dg;
    this.dg = this.Cg.dg;
    a != this.dg && this.Lb.vy(this.dg);
    this.wc !== d && (d && d.Rs(),
    this.wc && this.wc.Ex());
    this.wc && this.wc.Fx()
}
;
b.Do = function(a, c) {
    this.Dh(a, c);
    this.Yr = [];
    a = new (g.h.get(g.h.wq))(this.Lb,!1,q(this.Lb, !1));
    g.h.Ga(a);
    g.g.o.Wp();
    g.Bb.Vv();
    c = this.Vm(c);
    a = g.g.V.sum(this.Wg, c);
    var d = this.Lb;
    d.mq && (d.translate(a.x, a.y),
    d.u.Ae.Er(d.u.zb));
    this.wc && this.wc.Ss();
    this.dg ? (this.Io(),
    this.Lb.I(!1, !0),
    g.zm = [],
    a = !0) : a = !1;
    a || (this.Lb.Lj(!1),
    c ? (rb(this.Lb, c.x, c.y),
    this.Io(),
    this.Cg.mc ? (c = this.Cg,
    c.mc && (g.h.disable(),
    kb(c),
    g.h.enable(),
    c.Ad.connect(c.mc),
    c.Rj.ra && (g.Bb.IH((Pa(c.Ad) ? c.mc : c.Ad).aa()),
    ob(c.Rj.Tf())))) : this.Lb.Ia(),
    sb(this.Lb)) : g.ov(this.Lb.u, this.s.ce.fj(!0), this.Lb));
    this.s.Yc(!0);
    g.h.la(!1)
}
;
b.Io = function() {
    var a = new (g.h.get(g.h.ki))(this.Lb);
    a.Bx = this.Wg;
    a.tl();
    g.h.Ga(a)
}
;
b.Vm = function(a) {
    a = new g.g.V(a.x / this.s.scale,a.y / this.s.scale);
    this.s.ip && a.scale(1 / this.s.options.pc.scale);
    return a
}
;
b.Dm = function() {
    return this.Cg && this.Cg.Dm ? this.Cg.Dm() : []
}
;
g.B.register(g.B.U.gz, g.B.bk, g.xn);
g.AM = function() {}
;
g.FM = function() {}
;
g.wM = function() {}
;
g.xa = function(a, c, d, e, f, h) {
    this.s = a;
    this.wh = c;
    this.CK = d;
    this.Kx = this.Jx = this.vx = this.py = null;
    this.mf = !1;
    d = g.xa.iE;
    this.s.L && (d = -d);
    this.jH = g.g.Sa.Cd(d);
    a.$f.appendChild(this.Fe(c, !(!f || !h)));
    this.vc = e;
    this.oy && tb(this);
    f && h || (a = this.wh.getBBox(),
    f = a.width + 2 * g.xa.pd,
    h = a.height + 2 * g.xa.pd);
    this.Lp(f, h);
    tb(this);
    ub(this);
    this.oy = !0
}
;
g.xa.pd = 6;
g.xa.jE = 5;
g.xa.iE = 20;
g.xa.cz = 4;
g.xa.fE = 8;
g.xa.ld = null;
g.xa.zj = null;
g.xa.Oy = function() {
    g.xa.ld && (g.M.Ra(g.xa.ld),
    g.xa.ld = null);
    g.xa.zj && (g.M.Ra(g.xa.zj),
    g.xa.zj = null)
}
;
g.xa.pH = function() {
    g.Touch.xk();
    g.xa.Oy()
}
;
b = g.xa.prototype;
b.oy = !1;
b.vc = null;
b.Qg = 0;
b.Gj = 0;
b.tb = 0;
b.Pc = 0;
b.dv = !0;
b.Fe = function(a, c) {
    this.gf = g.g.o.N(g.g.F.rc, {}, null);
    var d = {
        filter: "url(#" + this.s.Ob.na().Zr + ")"
    };
    g.g.userAgent.FF && (d = {});
    d = g.g.o.N(g.g.F.rc, d, this.gf);
    this.KA = g.g.o.N(g.g.F.Ld, {}, d);
    this.xr = g.g.o.N(g.g.F.Dc, {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: g.xa.pd,
        ry: g.xa.pd
    }, d);
    c ? (this.Xh = g.g.o.N(g.g.F.rc, {
        "class": this.s.L ? "blocklyResizeSW" : "blocklyResizeSE"
    }, this.gf),
    c = 2 * g.xa.pd,
    g.g.o.N(g.g.F.kG, {
        points: "0,x x,x x,0".replace(/x/g, c.toString())
    }, this.Xh),
    g.g.o.N(g.g.F.kk, {
        "class": "blocklyResizeLine",
        x1: c / 3,
        y1: c - 1,
        x2: c - 1,
        y2: c / 3
    }, this.Xh),
    g.g.o.N(g.g.F.kk, {
        "class": "blocklyResizeLine",
        x1: 2 * c / 3,
        y1: c - 1,
        x2: c - 1,
        y2: 2 * c / 3
    }, this.Xh)) : this.Xh = null;
    this.s.options.readOnly || (this.Jx = g.M.va(this.xr, "mousedown", this, this.oH),
    this.Xh && (this.Kx = g.M.va(this.Xh, "mousedown", this, this.tK)));
    this.gf.appendChild(a);
    return this.gf
}
;
b.Ma = function() {
    return this.gf
}
;
function vb(a, c) {
    a.gf.dataset && (a.gf.dataset.blockId = c)
}
b.oH = function(a) {
    var c = this.s.Eh(a);
    if (c) {
        if (c.Kk)
            throw Error("Tried to call gesture.handleBubbleStart, but the gesture had already been started.");
        c.Te || (c.Te = this);
        c.xf = a
    }
}
;
b.Pp = function() {}
;
b.vf = function() {
    return !1
}
;
b.vy = function() {}
;
b.tK = function(a) {
    wb(this);
    g.xa.Oy();
    g.g.$k(a) || (this.s.Tp(a, new g.g.V(this.s.L ? -this.tb : this.tb,this.Pc)),
    g.xa.ld = g.M.va(document, "mouseup", this, g.xa.pH),
    g.xa.zj = g.M.va(document, "mousemove", this, this.uK),
    g.Fc());
    a.stopPropagation()
}
;
b.uK = function(a) {
    this.dv = !1;
    var c = this.s;
    a = g.g.rp(a, v(c), za(c));
    a.x /= c.scale;
    a.y /= c.scale;
    c = g.g.V.sum(c.uB, a);
    this.Lp(this.s.L ? -c.x : c.x, c.y);
    this.s.L && tb(this)
}
;
function xb(a, c) {
    a.vx = c
}
function wb(a) {
    var c = a.gf.parentNode;
    return c.lastChild !== a.gf ? (c.appendChild(a.gf),
    !0) : !1
}
function yb(a, c, d) {
    var e = a.s.L ? a.vc.x - c.x - a.tb : c.x + a.vc.x;
    c = c.y + a.vc.y;
    return Math.max(0, Math.min(1, (Math.min(e + a.tb, d.left + d.width) - Math.max(e, d.left)) * (Math.min(c + a.Pc, d.top + d.height) - Math.max(c, d.top)) / (a.tb * a.Pc)))
}
function tb(a) {
    var c = a.vc.x;
    c = a.s.L ? c - (a.Qg + a.tb) : c + a.Qg;
    a.moveTo(c, a.Gj + a.vc.y)
}
b.moveTo = function(a, c) {
    this.gf.setAttribute("transform", "translate(" + a + "," + c + ")")
}
;
b.Lj = function(a) {
    !a && this.vx && this.vx()
}
;
b.sw = function() {
    return new g.g.sd(this.tb,this.Pc)
}
;
b.Lp = function(a, c) {
    var d = 2 * g.xa.pd;
    a = Math.max(a, d + 45);
    c = Math.max(c, d + 20);
    this.tb = a;
    this.Pc = c;
    this.xr.setAttribute("width", a);
    this.xr.setAttribute("height", c);
    this.Xh && (this.s.L ? this.Xh.setAttribute("transform", "translate(" + 2 * g.xa.pd + "," + (c - d) + ") scale(-1 1)") : this.Xh.setAttribute("transform", "translate(" + (a - d) + "," + (c - d) + ")"));
    if (this.dv) {
        a = zb(this.s.ce, !0);
        c = -this.tb / 4;
        if (!(this.tb > a.width)) {
            if (this.s.L) {
                d = this.vc.x - c;
                var e = d - this.tb;
                var f = a.left + a.width
                  , h = a.left + g.bb.md / this.s.scale
            } else
                e = c + this.vc.x,
                d = e + this.tb,
                h = a.left,
                f = a.left + a.width - g.bb.md / this.s.scale;
            this.s.L ? e < h ? c = -(h - this.vc.x + this.tb) : d > f && (c = -(f - this.vc.x)) : e < h ? c = h - this.vc.x : d > f && (c = f - this.vc.x - this.tb)
        }
        e = c;
        c = -this.Pc / 4;
        if (!(this.Pc > a.height)) {
            d = this.vc.y + c;
            f = d + this.Pc;
            h = a.top;
            var k = a.top + a.height - g.bb.md / this.s.scale
              , l = this.vc.y;
            d < h ? c = h - l : f > k && (c = k - l - this.Pc)
        }
        h = c;
        f = this.CK.getBBox();
        c = {
            x: e,
            y: -this.Pc - this.s.Ob.na().Jn
        };
        d = {
            x: -this.tb - 30,
            y: h
        };
        h = {
            x: f.width,
            y: h
        };
        k = {
            x: e,
            y: f.height
        };
        e = f.width < f.height ? h : k;
        f = f.width < f.height ? k : h;
        h = yb(this, c, a);
        k = yb(this, d, a);
        l = yb(this, e, a);
        a = Math.max(h, k, l, yb(this, f, a));
        h == a ? (this.Qg = c.x,
        this.Gj = c.y) : k == a ? (this.Qg = d.x,
        this.Gj = d.y) : l == a ? (this.Qg = e.x,
        this.Gj = e.y) : (this.Qg = f.x,
        this.Gj = f.y)
    }
    tb(this);
    ub(this);
    this.py && this.py()
}
;
function ub(a) {
    var c = []
      , d = a.tb / 2
      , e = a.Pc / 2
      , f = -a.Qg
      , h = -a.Gj;
    if (d == f && e == h)
        c.push("M " + d + "," + e);
    else {
        h -= e;
        f -= d;
        a.s.L && (f *= -1);
        var k = Math.sqrt(h * h + f * f)
          , l = Math.acos(f / k);
        0 > h && (l = 2 * Math.PI - l);
        var m = l + Math.PI / 2;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        var n = Math.sin(m)
          , p = Math.cos(m)
          , r = a.sw();
        m = (r.width + r.height) / g.xa.jE;
        m = Math.min(m, r.width, r.height) / 4;
        r = 1 - g.xa.fE / k;
        f = d + r * f;
        h = e + r * h;
        r = d + m * p;
        var y = e + m * n;
        d -= m * p;
        e -= m * n;
        n = l + a.jH;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * k / g.xa.cz;
        k = Math.cos(n) * k / g.xa.cz;
        c.push("M" + r + "," + y);
        c.push("C" + (r + k) + "," + (y + l) + " " + f + "," + h + " " + f + "," + h);
        c.push("C" + f + "," + h + " " + (d + k) + "," + (e + l) + " " + d + "," + e)
    }
    c.push("z");
    a.KA.setAttribute("d", c.join(" "))
}
b.Wc = function(a) {
    this.xr.setAttribute("fill", a);
    this.KA.setAttribute("fill", a)
}
;
b.I = function() {
    this.Jx && g.M.Ra(this.Jx);
    this.Kx && g.M.Ra(this.Kx);
    g.xa.Oy();
    g.g.o.removeNode(this.gf);
    this.mf = !0
}
;
b.wx = function(a, c) {
    a ? a.zl(c.x, c.y) : this.moveTo(c.x, c.y);
    this.Qg = this.s.L ? this.vc.x - c.x - this.tb : c.x - this.vc.x;
    this.Gj = c.y - this.vc.y;
    ub(this)
}
;
b.jb = function() {
    return new g.g.V(this.s.L ? -this.Qg + this.vc.x - this.tb : this.vc.x + this.Qg,this.vc.y + this.Gj)
}
;
g.xa.Ff = function(a) {
    var c = g.g.o.N(g.g.F.Iu, {
        "class": "blocklyText blocklyBubbleText blocklyNoPointerEvents",
        y: g.xa.pd
    }, null);
    a = a.split("\n");
    for (var d = 0; d < a.length; d++) {
        var e = g.g.o.N(g.g.F.Pu, {
            dy: "1em",
            x: g.xa.pd
        }, c)
          , f = document.createTextNode(a[d]);
        e.appendChild(f)
    }
    return c
}
;
g.xa.gB = function(a, c, d) {
    d = new g.xa(c.u,a,c.Nb.ac,d,null,null);
    vb(d, c.id);
    if (c.L) {
        c = a.getBBox().width;
        for (var e = 0, f; f = a.childNodes[e]; e++)
            f.setAttribute("text-anchor", "end"),
            f.setAttribute("x", c + g.xa.pd)
    }
    return d
}
;
g.h.Zg = function(a) {
    this.wg = (this.Me = "undefined" == typeof a) ? "" : a.id;
    this.Sc = this.Me ? "" : a.u.id;
    this.group = g.h.oc();
    this.$a = g.h.$a
}
;
g.g.object.W(g.h.Zg, g.h.Abstract);
g.h.Zg.prototype.Ca = function() {
    var a = g.h.Zg.v.Ca.call(this);
    this.wg && (a.commentId = this.wg);
    return a
}
;
g.h.Zg.prototype.ka = function(a) {
    g.h.Zg.v.ka.call(this, a);
    this.wg = a.commentId
}
;
g.h.Kl = function(a, c, d) {
    g.h.Kl.v.constructor.call(this, a);
    a && (this.Ps = "undefined" == typeof c ? "" : c,
    this.Os = "undefined" == typeof d ? "" : d)
}
;
g.g.object.W(g.h.Kl, g.h.Zg);
b = g.h.Kl.prototype;
b.type = g.h.jz;
b.Ca = function() {
    var a = g.h.Kl.v.Ca.call(this);
    a.oldContents = this.Ps;
    a.newContents = this.Os;
    return a
}
;
b.ka = function(a) {
    g.h.Kl.v.ka.call(this, a);
    this.Ps = a.oldContents;
    this.Os = a.newContents
}
;
b.Om = function() {
    return this.Ps == this.Os
}
;
b.run = function(a) {
    var c;
    (c = u(this).Kr[this.wg] || null) ? c.lP(a ? this.Os : this.Ps) : console.warn("Can't change non-existent comment: " + this.wg)
}
;
g.h.$g = function(a) {
    g.h.$g.v.constructor.call(this, a);
    a && (this.xml = a.LD())
}
;
g.g.object.W(g.h.$g, g.h.Zg);
g.h.$g.prototype.type = g.h.Eq;
g.h.$g.prototype.Ca = function() {
    var a = g.h.$g.v.Ca.call(this);
    a.xml = g.P.pe(this.xml);
    return a
}
;
g.h.$g.prototype.ka = function(a) {
    g.h.$g.v.ka.call(this, a);
    this.xml = g.P.Ff(a.xml)
}
;
g.h.$g.prototype.run = function(a) {
    g.h.nz(this, a)
}
;
g.h.nz = function(a, c) {
    var d = u(a);
    c ? (c = g.g.xml.createElement("xml"),
    c.appendChild(a.xml),
    g.P.Dk(c, d)) : (d = d.Kr[a.wg] || null) ? d.I(!1, !1) : console.warn("Can't uncreate non-existent comment: " + a.wg)
}
;
g.h.ah = function(a) {
    g.h.ah.v.constructor.call(this, a);
    a && (this.xml = a.LD())
}
;
g.g.object.W(g.h.ah, g.h.Zg);
g.h.ah.prototype.type = g.h.kz;
g.h.ah.prototype.Ca = function() {
    return g.h.ah.v.Ca.call(this)
}
;
g.h.ah.prototype.ka = function(a) {
    g.h.ah.v.ka.call(this, a)
}
;
g.h.ah.prototype.run = function(a) {
    g.h.nz(this, !a)
}
;
g.h.Ll = function(a) {
    g.h.Ll.v.constructor.call(this, a);
    a && (this.Bv = a,
    this.ml = a.$B(),
    this.hl = null)
}
;
g.g.object.W(g.h.Ll, g.h.Zg);
b = g.h.Ll.prototype;
b.tl = function() {
    if (!this.Bv)
        throw Error("Tried to record the new position of a comment on the same event twice.");
    this.hl = this.Bv.$B();
    this.Bv = null
}
;
b.type = g.h.An;
b.Ca = function() {
    var a = g.h.Ll.v.Ca.call(this);
    this.ml && (a.oldCoordinate = Math.round(this.ml.x) + "," + Math.round(this.ml.y));
    this.hl && (a.newCoordinate = Math.round(this.hl.x) + "," + Math.round(this.hl.y));
    return a
}
;
b.ka = function(a) {
    g.h.Ll.v.ka.call(this, a);
    if (a.oldCoordinate) {
        var c = a.oldCoordinate.split(",");
        this.ml = new g.g.V(Number(c[0]),Number(c[1]))
    }
    a.newCoordinate && (c = a.newCoordinate.split(","),
    this.hl = new g.g.V(Number(c[0]),Number(c[1])))
}
;
b.Om = function() {
    return g.g.V.qf(this.ml, this.hl)
}
;
b.run = function(a) {
    var c;
    if (c = u(this).Kr[this.wg] || null) {
        a = a ? this.hl : this.ml;
        var d = c.$B();
        c.moveBy(a.x - d.x, a.y - d.y)
    } else
        console.warn("Can't move non-existent comment: " + this.wg)
}
;
g.B.register(g.B.U.cc, g.h.Eq, g.h.$g);
g.B.register(g.B.U.cc, g.h.jz, g.h.Kl);
g.B.register(g.B.U.cc, g.h.An, g.h.Ll);
g.B.register(g.B.U.cc, g.h.kz, g.h.ah);
g.yn = function(a, c) {
    this.xd = a;
    this.s = c;
    this.wc = null;
    this.oq = !1;
    this.Wg = this.xd.jb();
    this.Ek = g.g.Uk() && c.Ae ? c.Ae : null
}
;
g.yn.prototype.I = function() {
    this.Ek = this.s = this.xd = null
}
;
function Ab(a, c, d) {
    d = a.Vm(d);
    d = g.g.V.sum(a.Wg, d);
    a.xd.wx(a.Ek, d);
    d = a.wc;
    a.wc = qb(a.s, c);
    c = a.oq;
    a.oq = a.Ey(a.wc);
    c != a.oq && a.xd.vy(a.oq);
    a.wc !== d && (d && d.Rs(),
    a.wc && a.wc.Ex());
    a.wc && a.wc.Fx()
}
g.yn.prototype.Ey = function(a) {
    return a && ha(this.s.De, a.id) ? a.Xy(this.xd, !1) : !1
}
;
function Bb(a, c, d) {
    Ab(a, c, d);
    c = a.Vm(d);
    c = g.g.V.sum(a.Wg, c);
    a.xd.moveTo(c.x, c.y);
    a.wc && a.wc.Ss();
    a.oq ? (a.Io(),
    a.xd.I(!1, !0)) : (a.Ek && a.Ek.Er(a.s.$f),
    a.xd.Lj && a.xd.Lj(!1),
    a.Io());
    a.s.Yc(!0);
    g.h.la(!1)
}
g.yn.prototype.Io = function() {
    if (this.xd.UO) {
        var a = new (g.h.get(g.h.An))(this.xd);
        a.ml = this.Wg;
        a.tl();
        g.h.Ga(a)
    }
}
;
g.yn.prototype.Vm = function(a) {
    a = new g.g.V(a.x / this.s.scale,a.y / this.s.scale);
    this.s.ip && a.scale(1 / this.s.options.pc.scale);
    return a
}
;
g.bo = function(a) {
    this.s = a;
    this.kC = Cb(this.s);
    this.XD = Db(this.s);
    this.LK = new g.g.V(a.scrollX,a.scrollY)
}
;
g.bo.prototype.I = function() {
    this.s = null
}
;
g.bo.prototype.Tp = function() {
    g.selected && Eb(g.selected);
    Aa(this.s)
}
;
g.bo.prototype.Do = function(a) {
    this.Dh(a);
    Ba(this.s)
}
;
g.bo.prototype.Dh = function(a) {
    a = g.g.V.sum(this.LK, a);
    if (this.kC && this.XD)
        this.s.scroll(a.x, a.y);
    else if (this.kC)
        this.s.scroll(a.x, this.s.scrollY);
    else if (this.XD)
        this.s.scroll(this.s.scrollX, a.y);
    else
        throw new TypeError("Invalid state.");
}
;
g.mg = function(a, c) {
    this.HC = null;
    this.Rd = new g.g.V(0,0);
    this.zc = this.od = this.gn = this.hn = this.Te = null;
    this.Iv = c;
    this.ep = this.Xk = this.fp = this.Jk = !1;
    this.xf = a;
    this.Aa = this.Fl = this.sg = this.Ui = this.Ys = this.Xs = null;
    this.vs = this.Kk = this.OA = !1;
    this.fC = !g.PE
}
;
b = g.mg.prototype;
b.I = function() {
    g.Touch.xk();
    g.K.YK();
    this.Iv.wd = null;
    this.Xs && g.M.Ra(this.Xs);
    this.Ys && g.M.Ra(this.Ys);
    this.sg && this.sg.I();
    this.Fl && this.Fl.I();
    this.Ui && this.Ui.I()
}
;
function Fb(a, c) {
    a.Rd = g.g.V.Ao(new g.g.V(c.clientX,c.clientY), a.HC);
    if (a.Jk)
        var d = !1;
    else
        a.Jk = g.g.V.mJ(a.Rd) > (a.Aa ? g.iF : g.OE),
        d = a.Jk;
    if (d) {
        if (a.OA)
            throw Error("updateIsDragging_ should only be called once per gesture.");
        a.OA = !0;
        a.Te ? (a.ep = !0,
        a.Ui = new g.yn(a.Te,a.zc),
        d = a.Ui,
        g.h.oc() || g.h.la(!0),
        d.s.Yc(!1),
        d.xd.dv = !1,
        d.Ek && (d.xd.moveTo(0, 0),
        d.Ek.zl(d.Wg.x, d.Wg.y),
        Ma(d.Ek, d.xd.Ma())),
        d.xd.Lj && d.xd.Lj(!0),
        Ab(a.Ui, a.xf, a.Rd),
        d = !0) : d = !1;
        if (!d) {
            if (a.od) {
                if (a.Aa) {
                    if (a.od && a.od.isEnabled()) {
                        if (!(d = !Gb(a.Aa))) {
                            d = a.Rd;
                            d = Math.atan2(d.y, d.x) / Math.PI * 180;
                            var e = a.Aa.eI;
                            d = d < e && d > -e || d < -180 + e || d > 180 - e ? !0 : !1
                        }
                        d ? (a.zc = a.Aa.Qa,
                        Hb(a.zc),
                        g.h.oc() || g.h.la(!0),
                        a.gn = null,
                        a.od = Ib(a.Aa, a.od),
                        a.od.select(),
                        d = !0) : d = !1
                    } else
                        d = !1;
                    a.Xk = d
                } else
                    a.od.Gc() && (a.Xk = !0);
                a.Xk ? (a.sg = new (g.B.Qf(g.B.U.gz, a.Iv.options, !0))(a.od,a.zc),
                a.sg.Tp(a.Rd, a.fC),
                a.sg.Dh(a.xf, a.Rd),
                d = !0) : d = !1
            } else
                d = !1;
            if (d = !d)
                if (a.Aa)
                    d = Gb(a.Aa);
                else if (d = a.zc)
                    d = a.zc,
                    d = d.options.Bd && d.options.Bd.Dh;
            d && (a.Fl = new g.bo(a.zc),
            a.fp = !0,
            a.Fl.Tp())
        }
        g.tj()
    }
    a.xf = c
}
b.Wv = function(a) {
    g.g.zs(a) ? this.cancel() : (this.Kk = !0,
    g.Bb.Vv(),
    Hb(this.zc),
    this.zc.ip && this.zc.resize(),
    g.Fc(!!this.Aa),
    ya(this.zc),
    this.xf = a,
    g.K.block(),
    this.od && this.od.select(),
    g.g.$k(a) ? ba(this, a) : ("touchstart" != a.type.toLowerCase() && "pointerdown" != a.type.toLowerCase() || "mouse" == a.pointerType || g.kJ(a, this),
    this.HC = new g.g.V(a.clientX,a.clientY),
    this.fC = a.altKey || a.ctrlKey || a.metaKey,
    this.lm(a)))
}
;
b.lm = function(a) {
    this.Xs = g.M.va(document, "mousemove", null, this.Gm.bind(this));
    this.Ys = g.M.va(document, "mouseup", null, this.ps.bind(this));
    a.preventDefault();
    a.stopPropagation()
}
;
b.Gm = function(a) {
    Fb(this, a);
    this.fp ? this.Fl.Dh(this.Rd) : this.Xk ? this.sg.Dh(this.xf, this.Rd) : this.ep && Ab(this.Ui, this.xf, this.Rd);
    a.preventDefault();
    a.stopPropagation()
}
;
b.ps = function(a) {
    Fb(this, a);
    g.tj();
    if (this.vs)
        console.log("Trying to end a gesture recursively.");
    else {
        this.vs = !0;
        if (this.ep)
            Bb(this.Ui, a, this.Rd);
        else if (this.Xk)
            this.sg.Do(a, this.Rd);
        else if (this.fp)
            this.Fl.Do(this.Rd);
        else if (this.Te && !this.Jk)
            this.Te.zK && this.Te.zK(),
            this.Te.select && this.Te.select();
        else if (Jb(this)) {
            var c = this.hn
              , d = this.xf;
            db(c) && c.Ug(d);
            Kb(this)
        } else
            !this.gn || this.Jk || Jb(this) ? this.gn || this.Te || this.hn || this.Jk || (c = this.Iv,
            g.selected && Eb(g.selected),
            c = this.zc || c,
            g.h.Ga(new (g.h.get(g.h.Jl))(null,c.id,"workspace"))) : (this.Aa && this.Aa.Ri ? this.od.isEnabled() && (g.h.oc() || g.h.la(!0),
            sb(Ib(this.Aa, this.od))) : (c = new (g.h.get(g.h.Jl))(this.gn,this.zc.id,"block"),
            g.h.Ga(c)),
            Kb(this),
            g.h.la(!1));
        a.preventDefault();
        a.stopPropagation();
        this.I()
    }
}
;
b.cancel = function() {
    this.vs || (g.tj(),
    this.ep ? Bb(this.Ui, this.xf, this.Rd) : this.Xk ? this.sg.Do(this.xf, this.Rd) : this.fp && this.Fl.Do(this.Rd),
    this.I())
}
;
function ba(a, c) {
    a.od ? (Kb(a),
    g.Fc(!!a.Aa),
    a.od.Pp(c)) : a.Te ? a.Te.Pp(c) : a.zc && !a.Aa && (g.Fc(),
    a.zc.Pp(c));
    c.preventDefault();
    c.stopPropagation();
    a.I()
}
function Lb(a, c, d) {
    if (a.Kk)
        throw Error("Tried to call gesture.handleWsStart, but the gesture had already been started.");
    a.zc || (a.zc = d);
    a.xf = c;
    a.Wv(c)
}
function Mb(a, c, d) {
    if (a.Kk)
        throw Error("Tried to call gesture.handleFlyoutStart, but the gesture had already been started.");
    a.Aa || (a.Aa = d);
    Lb(a, c, d.s)
}
function Kb(a) {
    a.od && !a.Aa && ob(a.od)
}
function Nb(a, c) {
    a.gn || a.Te || (a.gn = c,
    c.Xb && c != c.Tf() ? Ob(a, c.Tf()) : Ob(a, c))
}
function Ob(a, c) {
    c.Pa ? Ob(a, c.getParent()) : a.od = c
}
function Jb(a) {
    return (a.hn ? db(a.hn) : !1) && !a.Jk && (!a.Aa || !a.Aa.Ri)
}
b.yc = function() {
    return this.fp || this.Xk || this.ep
}
;
b.Dm = function() {
    return this.sg ? this.sg.Dm() : []
}
;
g.mg.Qk = function() {
    for (var a = g.Ub.getAll(), c = 0, d; d = a[c]; c++)
        if (d.wd)
            return !0;
    return !1
}
;
g.NM = function() {}
;
g.Xq = function() {
    this.nf = this.Ge = this.Cb = null;
    this.type = "marker"
}
;
function Pb(a, c) {
    var d = a.Ge;
    a.Ge = c;
    a.nf && a.nf.draw(d, a.Ge)
}
g.Xq.prototype.draw = function() {
    this.nf && this.nf.draw(this.Ge, this.Ge)
}
;
g.Xq.prototype.Va = function() {
    this.nf && this.nf.Va()
}
;
g.Xq.prototype.I = function() {
    this.nf && this.nf.I()
}
;
g.pi = function() {
    g.pi.v.constructor.call(this);
    this.type = "cursor"
}
;
g.g.object.W(g.pi, g.Xq);
g.pi.prototype.next = function() {
    var a = this.Ge;
    if (!a)
        return null;
    for (a = a.next(); a && a.next() && (a.getType() == g.H.types.Ci || a.getType() == g.H.types.Jc); )
        a = a.next();
    a && Pb(this, a);
    return a
}
;
g.pi.prototype.kj = function() {
    var a = this.Ge;
    if (!a)
        return null;
    if (a.getType() == g.H.types.Fi || a.getType() == g.H.types.nk)
        a = a.next();
    (a = a.kj()) && Pb(this, a);
    return a
}
;
g.pi.prototype.Vh = function() {
    var a = this.Ge;
    if (!a)
        return null;
    for (a = a.Vh(); a && a.Vh() && (a.getType() == g.H.types.Ci || a.getType() == g.H.types.Jc); )
        a = a.Vh();
    a && Pb(this, a);
    return a
}
;
g.pi.prototype.Aj = function() {
    var a = this.Ge;
    if (!a)
        return null;
    (a = a.Aj()) && a.getType() == g.H.types.Jc && (a = a.Vh() || a);
    a && Pb(this, a);
    return a
}
;
g.B.register(g.B.U.ak, g.B.bk, g.pi);
g.Ln = function(a) {
    this.xh = this.lf = null;
    this.mp = Object.create(null);
    this.s = a
}
;
g.Ln.Qz = "local_marker_1";
b = g.Ln.prototype;
b.Cm = function() {
    return this.lf
}
;
b.Uo = function(a) {
    return this.mp[a] || null
}
;
b.Yh = function(a) {
    a ? (this.s.zb.appendChild(a),
    this.xh = a) : this.xh = null
}
;
b.Mj = function(a) {
    a ? this.s.zb && (this.xh ? this.s.zb.insertBefore(a, this.xh) : this.s.zb.appendChild(a)) : this.Rh = null
}
;
b.I = function() {
    for (var a = Object.keys(this.mp), c = 0, d; d = a[c]; c++) {
        var e = this.mp[d];
        if (e)
            e.I(),
            delete this.mp[d];
        else
            throw Error("Marker with ID " + d + " does not exist. Can only unregister markers that exist.");
    }
    this.mp = null;
    this.lf && (this.lf.I(),
    this.lf = null)
}
;
g.ga = {};
g.ga.zf = null;
g.ga.Xr = null;
g.ga.Yf = "";
g.ga.ag = "";
g.ga.eb = function() {
    g.ga.mb || (g.ga.mb = document.createElement("div"),
    g.ga.mb.className = "blocklyWidgetDiv",
    (g.$s || document.body).appendChild(g.ga.mb))
}
;
g.ga.show = function(a, c, d) {
    g.ga.Va();
    g.ga.zf = a;
    g.ga.Xr = d;
    a = g.ga.mb;
    a.style.direction = c ? "rtl" : "ltr";
    a.style.display = "block";
    c = g.dj();
    g.ga.Yf = c.Ob.Rf();
    g.ga.ag = c.Gg().Rf();
    g.g.o.Fa(a, g.ga.Yf);
    g.g.o.Fa(a, g.ga.ag)
}
;
g.ga.Va = function() {
    if (g.ga.isVisible()) {
        g.ga.zf = null;
        var a = g.ga.mb;
        a.style.display = "none";
        a.style.left = "";
        a.style.top = "";
        g.ga.Xr && g.ga.Xr();
        g.ga.Xr = null;
        a.textContent = "";
        g.ga.Yf && (g.g.o.dc(a, g.ga.Yf),
        g.ga.Yf = "");
        g.ga.ag && (g.g.o.dc(a, g.ga.ag),
        g.ga.ag = "");
        ya(g.dj())
    }
}
;
g.ga.isVisible = function() {
    return !!g.ga.zf
}
;
g.ga.Im = function(a) {
    g.ga.zf == a && g.ga.Va()
}
;
g.ga.zp = function(a, c, d) {
    g.ga.mb.style.left = a + "px";
    g.ga.mb.style.top = c + "px";
    g.ga.mb.style.height = d + "px"
}
;
g.ga.XJ = function(a, c, d, e) {
    var f = g.ga.uH(a, c, d);
    a = g.ga.tH(a, c, d, e);
    0 > f ? g.ga.zp(a, 0, d.height + f) : g.ga.zp(a, f, d.height)
}
;
g.ga.tH = function(a, c, d, e) {
    if (e)
        return c = Math.max(c.right - d.width, a.left),
        Math.min(c, a.right - d.width);
    c = Math.min(c.left, a.right - d.width);
    return Math.max(c, a.left)
}
;
g.ga.uH = function(a, c, d) {
    return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom
}
;
g.ve = function(a, c, d) {
    this.Cc = this.Nl;
    this.PD = this.Bl = null;
    this.ie = new g.g.sd(0,0);
    this.C = this.ux = this.$h = this.Ac = this.kc = this.He = this.Rh = this.xh = null;
    d && this.oe(d);
    this.setValue(a);
    c && (this.Bl = c)
}
;
b = g.ve.prototype;
b.Nl = null;
b.name = void 0;
b.mf = !1;
b.FC = 50;
b.J = null;
b.Lh = !0;
b.Tj = !0;
b.yv = null;
g.ve.Xz = "\u00a0";
b = g.ve.prototype;
b.Lq = !0;
b.qk = !1;
b.oe = function(a) {
    var c = a.tooltip;
    "string" == typeof c && (c = g.g.se(a.tooltip));
    c && this.ab(c)
}
;
b.Ay = function(a) {
    if (this.J)
        throw Error("Field already bound to a block.");
    this.J = a
}
;
b.na = function() {
    !this.C && this.J && this.J.u && this.J.u.ra && (this.C = this.J.u.Ob.na());
    return this.C
}
;
b.aa = function() {
    return this.J
}
;
b.S = function() {
    this.He || (this.He = g.g.o.N(g.g.F.rc, {}, null),
    this.isVisible() || (this.He.style.display = "none"),
    this.J.Ma().appendChild(this.He),
    this.lj(),
    this.gi(),
    this.ab(this.PD),
    g.K.lm(Qb(this)),
    this.ux = g.M.va(Qb(this), "mousedown", this, this.yj),
    this.Rk())
}
;
b.lj = function() {
    Rb(this);
    Sb(this)
}
;
b.Rk = function() {}
;
function Rb(a) {
    a.kc = g.g.o.N(g.g.F.Dc, {
        rx: a.na().Nq,
        ry: a.na().Nq,
        x: 0,
        y: 0,
        height: a.ie.height,
        width: a.ie.width,
        "class": "blocklyFieldRect"
    }, a.He)
}
function Sb(a) {
    a.Ac = g.g.o.N(g.g.F.Iu, {
        "class": "blocklyText"
    }, a.He);
    a.na().Xt && a.Ac.setAttribute("dominant-baseline", "central");
    a.$h = document.createTextNode("");
    a.Ac.appendChild(a.$h)
}
b.Am = function(a) {
    this.setValue(a.textContent)
}
;
b.KD = function(a) {
    a.textContent = this.getValue();
    return a
}
;
b.I = function() {
    g.G.Im(this);
    g.ga.Im(this);
    g.K.Qy(Qb(this));
    this.ux && g.M.Ra(this.ux);
    g.g.o.removeNode(this.He);
    this.mf = !0
}
;
b.gi = function() {
    var a = this.He;
    this.Lq && a && (this.J.Yd() ? (g.g.o.Fa(a, "blocklyEditableText"),
    g.g.o.dc(a, "blocklyNonEditableText"),
    a.style.cursor = this.ak) : (g.g.o.Fa(a, "blocklyNonEditableText"),
    g.g.o.dc(a, "blocklyEditableText"),
    a.style.cursor = ""))
}
;
function db(a) {
    return !!a.J && a.J.Yd() && !!a.Ug && "function" === typeof a.Ug
}
b.isVisible = function() {
    return this.Tj
}
;
b.rb = function(a) {
    if (this.Tj != a) {
        this.Tj = a;
        var c = this.Ma();
        c && (c.style.display = a ? "block" : "none")
    }
}
;
function Tb(a, c) {
    a.Bl = c
}
b.ZB = function() {
    return this.Bl
}
;
b.Ma = function() {
    return this.He
}
;
b.ic = function() {}
;
b.Ij = function() {
    this.$h && (this.$h.nodeValue = this.ls());
    Ub(this)
}
;
function Ub(a, c) {
    var d = a.na();
    c = void 0 != c ? c : a.kc ? a.na().Pl : 0;
    var e = 2 * c
      , f = d.Oq
      , h = 0;
    a.Ac && (h = g.g.o.xw(a.Ac, d.si, d.ui, d.ri),
    e += h);
    a.kc && (f = Math.max(f, d.zz));
    a.ie.height = f;
    a.ie.width = e;
    Vb(a, c, h);
    Wb(a)
}
function Vb(a, c, d) {
    if (a.Ac) {
        var e = a.na()
          , f = a.ie.height / 2;
        a.Ac.setAttribute("x", a.J.L ? a.ie.width - d - c : c);
        a.Ac.setAttribute("y", e.Xt ? f : f - e.Oq / 2 + e.Bz)
    }
}
function Wb(a) {
    a.kc && (a.kc.setAttribute("width", a.ie.width),
    a.kc.setAttribute("height", a.ie.height),
    a.kc.setAttribute("rx", a.na().Nq),
    a.kc.setAttribute("ry", a.na().Nq))
}
b.Fh = function() {
    if (!this.isVisible())
        return new g.g.sd(0,0);
    this.Lh ? (this.Ij(),
    this.Lh = !1) : this.Tj && 0 == this.ie.width && (console.warn("Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."),
    this.Ij());
    return this.ie
}
;
function Ja(a) {
    if (a.kc)
        c = a.kc.getBoundingClientRect(),
        a = g.g.style.Ik(a.kc),
        e = c.width,
        c = c.height;
    else {
        var c = E(a.J)
          , d = a.J.u.scale;
        a = g.g.style.Ik(Qb(a));
        var e = c.width * d;
        c = c.height * d;
        g.g.userAgent.pF ? (a.x += 1.5 * d,
        a.y += 1.5 * d) : g.g.userAgent.ek || g.g.userAgent.Ze || (a.x -= .5 * d,
        a.y -= .5 * d);
        e += 1 * d;
        c += 1 * d
    }
    return new g.g.Rect(a.y,a.y + c,a.x,a.x + e)
}
b.ls = function() {
    var a = this.yd();
    if (!a)
        return g.ve.Xz;
    a.length > this.FC && (a = a.substring(0, this.FC - 2) + "\u2026");
    a = a.replace(/\s/g, g.ve.Xz);
    this.J && this.J.L && (a += "\u200f");
    return a
}
;
b.yd = function() {
    if (this.Ew) {
        var a = this.Ew.call(this);
        if (null !== a)
            return String(a)
    }
    return String(this.getValue())
}
;
b.lp = function() {
    this.Lh = !0;
    this.C = null
}
;
function Xb(a) {
    a.Lh = !0;
    a.J && a.J.ra && (a.J.Ia(),
    a.J.Zb(),
    a.Ty())
}
b.setValue = function(a) {
    if (null !== a) {
        var c = this.bj(a);
        a = Yb(this, a, c);
        if (!(a instanceof Error)) {
            if (c = this.ZB())
                if (c = c.call(this, a),
                a = Yb(this, a, c),
                a instanceof Error)
                    return;
            c = this.J;
            if (!c || !c.mf) {
                var d = this.getValue();
                d === a ? this.Ch(a) : (c && g.h.isEnabled() && g.h.Ga(new (g.h.get(g.h.eg))(c,"field",this.name || null,d,a)),
                this.Ch(a),
                this.Lh && Xb(this))
            }
        }
    }
}
;
function Yb(a, c, d) {
    if (null === d)
        return a.tB(),
        a.Lh && Xb(a),
        Error();
    void 0 !== d && (c = d);
    return c
}
b.getValue = function() {
    return this.Cc
}
;
b.bj = function(a) {
    return null === a || void 0 === a ? null : a
}
;
b.Ch = function(a) {
    this.Cc = a;
    this.Lh = !0
}
;
b.tB = function() {}
;
b.yj = function(a) {
    if (this.J && this.J.u && (a = this.J.u.Eh(a))) {
        if (a.Kk)
            throw Error("Tried to call gesture.setStartField, but the gesture had already been started.");
        a.hn || (a.hn = this)
    }
}
;
b.ab = function(a) {
    a || "" === a || (a = this.J);
    var c = Qb(this);
    c ? c.Gf = a : this.PD = a
}
;
function Qb(a) {
    return a.yv || a.Ma()
}
b.Dp = function() {
    return !1
}
;
b.Fg = function() {
    for (var a = null, c = this.J, d = c.Z, e = 0; e < c.Z.length; e++)
        for (var f = d[e], h = f.ib, k = 0; k < h.length; k++)
            if (h[k] === this) {
                a = f;
                break
            }
    return a
}
;
b.vC = function() {
    return !1
}
;
b.Yh = function(a) {
    a ? (this.He.appendChild(a),
    this.xh = a) : this.xh = null
}
;
b.Mj = function(a) {
    a ? (this.He.appendChild(a),
    this.Rh = a) : this.Rh = null
}
;
b.Ty = function() {
    var a = this.J.u;
    a.Sm && this.xh && a.Cm().draw();
    a.Sm && this.Rh && a.Uo(g.Ln.Qz).draw()
}
;
g.je = function(a, c, d) {
    this.Dr = null;
    g.je.v.constructor.call(this, a, null, d);
    d || (this.Dr = c || null)
}
;
g.g.object.W(g.je, g.ve);
g.je.prototype.Nl = "";
g.je.ka = function(a) {
    var c = g.g.se(a.text);
    return new g.je(c,void 0,a)
}
;
g.je.prototype.Lq = !1;
g.je.prototype.oe = function(a) {
    g.je.v.oe.call(this, a);
    this.Dr = a["class"]
}
;
g.je.prototype.lj = function() {
    Sb(this);
    this.Dr && g.g.o.Fa(this.Ac, this.Dr)
}
;
g.je.prototype.bj = function(a) {
    return null === a || void 0 === a ? null : String(a)
}
;
g.rf.register("field_label", g.je);
g.Nz = function(a, c, d, e) {
    if (a != g.lb.jg && !c)
        throw Error("Value inputs and statement inputs must have non-empty name.");
    this.type = a;
    this.name = c;
    this.J = d;
    this.connection = e;
    this.ib = []
}
;
b = g.Nz.prototype;
b.align = g.Jb.Jf.Ib;
b.Tj = !0;
b.aa = function() {
    return this.J
}
;
function G(a, c, d) {
    Zb(a, a.ib.length, c, d);
    return a
}
function Zb(a, c, d, e) {
    if (0 > c || c > a.ib.length)
        throw Error("index " + c + " out of bounds.");
    if (!(d || "" == d && e))
        return c;
    "string" == typeof d && (d = g.rf.ka({
        type: "field_label",
        text: d
    }));
    d.Ay(a.J);
    a.J.ra && (d.S(),
    d.ic());
    d.name = e;
    d.rb(a.isVisible());
    d.$x && (c = Zb(a, c, d.$x));
    a.ib.splice(c, 0, d);
    ++c;
    d.Jy && (c = Zb(a, c, d.Jy));
    a.J.ra && (a.J = a.J,
    a.J.Ia(),
    a.J.Zb());
    return c
}
function $b(a, c) {
    for (var d = 0, e; e = a.ib[d]; d++)
        if (e.name === c) {
            e.I();
            a.ib.splice(d, 1);
            a.J.ra && (a.J = a.J,
            a.J.Ia(),
            a.J.Zb());
            return
        }
    throw Error('Field "' + c + '" not found.');
}
b.isVisible = function() {
    return this.Tj
}
;
b.rb = function(a) {
    if (this.Tj != a) {
        this.Tj = a;
        for (var c = 0, d; d = this.ib[c]; c++)
            d.rb(a);
        if (this.connection) {
            this.connection = this.connection;
            if (a)
                ac(this.connection);
            else if (c = this.connection,
            bc(c, !1),
            c.ta)
                for (c = q(c.sa(), !1),
                d = 0; d < c.length; d++) {
                    for (var e = c[d], f = e.Sf(!0), h = 0; h < f.length; h++)
                        bc(f[h], !1);
                    e = nb(e);
                    for (h = 0; h < e.length; h++)
                        e[h].rb(!1)
                }
            if (c = this.connection.sa())
                c.Ma().style.display = a ? "block" : "none"
        }
    }
}
;
b.lp = function() {
    for (var a = 0, c; c = this.ib[a]; a++)
        c.lp()
}
;
b.Pb = function(a) {
    if (!this.connection)
        throw Error("This input does not have a connection.");
    this.connection.Pb(a);
    return this
}
;
function cc(a, c) {
    a.align = c;
    a.J.ra && (a.J = a.J,
    a.J.Ia());
    return a
}
b.dn = function(a) {
    if (!this.connection)
        throw Error("This input does not have a connection.");
    this.connection.dn(a)
}
;
b.Em = function() {
    if (!this.connection)
        throw Error("This input does not have a connection.");
    return this.connection.Em()
}
;
b.S = function() {
    if (this.J.u.ra)
        for (var a = 0; a < this.ib.length; a++)
            this.ib[a].S()
}
;
b.I = function() {
    for (var a = 0, c; c = this.ib[a]; a++)
        c.I();
    this.connection && this.connection.I();
    this.J = null
}
;
g.Il = function(a, c, d) {
    if (g.Generator && "undefined" != typeof g.Generator.prototype[c])
        throw Error('Block prototypeName "' + c + '" conflicts with Blockly.Generator members.');
    this.id = d && !a.Td(d) ? d : g.g.Dg();
    a.gv[this.id] = this;
    this.qa = this.ba = this.T = null;
    this.Z = [];
    this.Kh = void 0;
    this.disabled = !1;
    this.Gf = "";
    this.contextMenu = !0;
    this.Ng = null;
    this.rh = [];
    this.xB = this.JC = this.Lv = !0;
    this.yk = this.Pa = !1;
    this.Wi = null;
    this.Ce = {
        text: null,
        Yx: !1,
        size: new g.g.sd(160,80)
    };
    this.dE = new g.g.V(0,0);
    this.u = a;
    this.Xb = a.Vf;
    this.L = a.L;
    this.Nm = !1;
    this.Hg = void 0;
    this.ra = null;
    if (c) {
        this.type = c;
        d = g.O[c];
        if (!d || "object" != typeof d)
            throw TypeError("Unknown block type: " + c);
        g.g.object.Oe(this, d)
    }
    a.qr(this);
    a.ei[this.type] || (a.ei[this.type] = []);
    a.ei[this.type].push(this);
    (a = g.h.oc()) || g.h.la(!0);
    c = g.h.$a;
    try {
        "function" == typeof this.S && (g.h.$a = !1,
        this.S(),
        g.h.$a = c),
        g.h.isEnabled() && g.h.Ga(new (g.h.get(g.h.ji))(this))
    } finally {
        a || g.h.la(!1),
        g.h.$a = c
    }
    this.ZI = this.Kh;
    if ("function" == typeof this.onchange) {
        if ((a = this.onchange) && "function" != typeof a)
            throw Error("onchange must be a function.");
        this.wp && ab(this.u, this.wp);
        if (this.onchange = a)
            this.wp = a.bind(this),
            D(this.u, this.wp)
    }
}
;
g.Il.Dq = g.Jb.Dq;
g.Il.Cq = g.Jb.Cq;
b = g.Il.prototype;
b.data = null;
b.mf = !1;
b.ed = "#000000";
b.wl = "";
b.I = function(a) {
    if (this.u) {
        this.wp && ab(this.u, this.wp);
        A(this, a);
        g.h.isEnabled() && g.h.Ga(new (g.h.get(g.h.vq))(this));
        g.h.disable();
        try {
            if (this.u) {
                this.u.jt(this);
                var c = this.u;
                c.ei[this.type].splice(c.ei[this.type].indexOf(this), 1);
                c.ei[this.type].length || delete c.ei[this.type];
                delete this.u.gv[this.id];
                this.u = null
            }
            g.selected == this && (g.selected = null);
            for (var d = this.rh.length - 1; 0 <= d; d--)
                this.rh[d].I(!1);
            d = 0;
            for (var e; e = this.Z[d]; d++)
                e.I();
            this.Z.length = 0;
            var f = this.Sf(!0);
            d = 0;
            for (var h; h = f[d]; d++)
                h.I()
        } finally {
            g.h.enable(),
            this.mf = !0
        }
    }
}
;
b.Rk = function() {
    for (var a = 0, c; c = this.Z[a]; a++)
        for (var d = 0, e; e = c.ib[d]; d++)
            e.Rk && e.Rk()
}
;
function A(a, c) {
    if (a.T) {
        var d = null;
        a.T.isConnected() && (d = a.T.ta,
        a.T.disconnect());
        if (d && c) {
            a: {
                c = null;
                for (var e = 0; e < a.Z.length; e++) {
                    var f = a.Z[e].connection;
                    if (f && f.type == g.pa.tc && f.ta) {
                        if (c) {
                            c = null;
                            break a
                        }
                        c = f
                    }
                }
            }
            c && c.isConnected() && !c.sa().Pa && (c = c.ta,
            c.disconnect(),
            Qa(a.u.vh, c, d, !1) ? d.connect(c) : c.Gx(d))
        }
    } else
        a.qa && (d = null,
        a.qa.isConnected() && (d = a.qa.ta,
        a.qa.disconnect()),
        e = t(a),
        c && e && !e.Pa && (c = a.ba.ta,
        c.disconnect(),
        d && Qa(a.u.vh, d, c, !1) && d.connect(c)))
}
b.Sf = function() {
    var a = [];
    this.T && a.push(this.T);
    this.qa && a.push(this.qa);
    this.ba && a.push(this.ba);
    for (var c = 0, d; d = this.Z[c]; c++)
        d.connection && a.push(d.connection);
    return a
}
;
b.Cs = function(a) {
    for (var c = this.ba; c; ) {
        var d = c.sa();
        if (!d || a && d.Pa)
            return c;
        c = d.ba
    }
    return null
}
;
b.Zb = function() {}
;
b.getParent = function() {
    return this.Ng
}
;
function La(a, c) {
    for (var d = 0, e; e = a.Z[d]; d++)
        if (e.connection && e.connection.sa() == c)
            return e;
    return null
}
function dc(a) {
    do {
        var c = a;
        a = a.getParent();
        if (!a)
            return null
    } while (t(a) == c);
    return a
}
function t(a) {
    return a.ba && a.ba.sa()
}
b.Tf = function() {
    var a = this;
    do {
        var c = a;
        a = c.Ng
    } while (a);
    return c
}
;
function Ca(a, c) {
    if (!c)
        return a.rh;
    c = [];
    for (var d = 0, e; e = a.Z[d]; d++)
        e.connection && (e = e.connection.sa()) && c.push(e);
    (a = t(a)) && c.push(a);
    return c
}
b.ut = function(a) {
    if (a != this.Ng) {
        if (this.Ng) {
            g.g.rr(this.Ng.rh, this);
            if (this.qa && this.qa.isConnected())
                throw Error("Still connected to previous block.");
            if (this.T && this.T.isConnected())
                throw Error("Still connected to parent block.");
            this.Ng = null
        } else
            this.u.jt(this);
        (this.Ng = a) ? a.rh.push(this) : this.u.qr(this)
    }
}
;
function q(a, c) {
    var d = [a];
    a = Ca(a, c);
    for (var e, f = 0; e = a[f]; f++)
        d.push.apply(d, q(e, c));
    return d
}
b.vf = function() {
    return this.Lv && !this.Pa && !(this.u && this.u.options.readOnly)
}
;
b.Gc = function() {
    return this.JC && !this.Pa && !(this.u && this.u.options.readOnly)
}
;
b.st = function(a) {
    this.JC = a
}
;
b.zy = function(a) {
    this.Pa = a
}
;
b.zd = function() {
    return this.Nm
}
;
b.wD = function(a) {
    this.Nm = a
}
;
b.Yd = function() {
    return this.xB && !(this.u && this.u.options.readOnly)
}
;
b.wy = function(a) {
    this.xB = a;
    a = 0;
    for (var c; c = this.Z[a]; a++)
        for (var d = 0, e; e = c.ib[d]; d++)
            e.gi()
}
;
b.yw = function(a, c) {
    var d = this.Sf(!0);
    a = a.Sf(!0);
    if (d.length != a.length)
        throw Error("Connection lists did not match in length.");
    for (var e = 0; e < a.length; e++)
        if (a[e] == c)
            return d[e];
    return null
}
;
b.ab = function(a) {
    this.Gf = a
}
;
b.vw = function() {
    return this.ed
}
;
b.Wc = function(a) {
    this.ed = g.g.bt(a).Yo
}
;
b.$b = function(a) {
    this.wl = a
}
;
function z(a, c) {
    if ("string" !== typeof c)
        throw TypeError("Blockly.Block.prototype.getField expects a string with the field name but received " + (void 0 === c ? "nothing" : c + " of type " + typeof c) + " instead");
    for (var d = 0, e; e = a.Z[d]; d++)
        for (var f = 0, h; h = e.ib[f]; f++)
            if (h.name === c)
                return h;
    return null
}
b.Hh = function() {
    for (var a = [], c = 0, d; d = this.Z[c]; c++)
        for (var e = 0, f; f = d.ib[e]; e++)
            f.Dp() && a.push(f.getValue());
    return a
}
;
b.Gh = function() {
    for (var a = [], c = 0, d; d = this.Z[c]; c++)
        for (var e = 0, f; f = d.ib[e]; e++)
            f.Dp() && (f = this.u.Uf(f.getValue())) && a.push(f);
    return a
}
;
b.Ft = function(a) {
    for (var c = 0, d; d = this.Z[c]; c++)
        for (var e = 0, f; f = d.ib[e]; e++)
            f.Dp() && a.La() == f.getValue() && Xb(f)
}
;
b.mt = function(a, c) {
    for (var d = 0, e; e = this.Z[d]; d++)
        for (var f = 0, h; h = e.ib[f]; f++)
            h.Dp() && a == h.getValue() && h.setValue(c)
}
;
function C(a, c) {
    return (a = z(a, c)) ? a.getValue() : null
}
function ec(a, c, d) {
    a = z(a, d);
    if (!a)
        throw Error('Field "' + d + '" not found.');
    a.setValue(c)
}
b.Se = function(a, c) {
    if (a) {
        void 0 === c && (c = null);
        if (!this.qa) {
            if (this.T)
                throw Error("Remove output connection prior to adding previous connection.");
            this.qa = this.kp(g.pa.cf)
        }
        this.qa.Pb(c)
    } else if (this.qa) {
        if (this.qa.isConnected())
            throw Error("Must disconnect previous statement before removing connection.");
        this.qa.I();
        this.qa = null
    }
}
;
b.Re = function(a, c) {
    if (a)
        void 0 === c && (c = null),
        this.ba || (this.ba = this.kp(g.pa.bd)),
        this.ba.Pb(c);
    else if (this.ba) {
        if (this.ba.isConnected())
            throw Error("Must disconnect next statement before removing connection.");
        this.ba.I();
        this.ba = null
    }
}
;
b.fe = function(a, c) {
    if (a) {
        void 0 === c && (c = null);
        if (!this.T) {
            if (this.qa)
                throw Error("Remove previous connection prior to adding output connection.");
            this.T = this.kp(g.pa.xe)
        }
        this.T.Pb(c)
    } else if (this.T) {
        if (this.T.isConnected())
            throw Error("Must disconnect output value before removing connection.");
        this.T.I();
        this.T = null
    }
}
;
b.Xc = function(a) {
    this.Kh != a && (g.h.Ga(new (g.h.get(g.h.eg))(this,"inline",null,this.Kh,a)),
    this.Kh = a)
}
;
function fb(a) {
    if (void 0 != a.Kh)
        return a.Kh;
    for (var c = 1; c < a.Z.length; c++)
        if (a.Z[c - 1].type == g.lb.jg && a.Z[c].type == g.lb.jg)
            return !1;
    for (c = 1; c < a.Z.length; c++)
        if (a.Z[c - 1].type == g.lb.rg && a.Z[c].type == g.lb.jg)
            return !0;
    return !1
}
b.isEnabled = function() {
    return !this.disabled
}
;
b.ee = function(a) {
    this.isEnabled() != a && (g.h.Ga(new (g.h.get(g.h.eg))(this,"disabled",null,this.disabled,!a)),
    this.disabled = !a)
}
;
function fc(a) {
    for (a = dc(a); a; ) {
        if (a.disabled)
            return !0;
        a = dc(a)
    }
    return !1
}
b.isCollapsed = function() {
    return this.yk
}
;
b.Kj = function(a) {
    this.yk != a && (g.h.Ga(new (g.h.get(g.h.eg))(this,"collapsed",null,this.yk,a)),
    this.yk = a)
}
;
b.toString = function(a, c) {
    function d(n) {
        var p = n.Vi;
        !p && n.ta && (p = n.ta.Vi);
        return !!p && (-1 != p.indexOf("Boolean") || -1 != p.indexOf("Number"))
    }
    function e() {
        k && k.getType() == l.getType() && k.Oa == l.Oa && (k = null)
    }
    var f = [];
    c = c || "?";
    var h = g.H.Bi;
    g.H.Bi = !0;
    for (var k = g.H.$i(this), l = k; k; ) {
        switch (k.getType()) {
        case g.H.types.$e:
            var m = k.Oa;
            k.kj() ? d(m) && f.push("(") : f.push(c);
            break;
        case g.H.types.qd:
            m = k.Oa,
            m.name != g.Jb.Cq && f.push(m.yd())
        }
        m = k;
        k = m.kj() || m.next();
        if (!k) {
            k = m.Aj();
            for (e(); k && !k.next(); )
                k = k.Aj(),
                e(),
                k && k.getType() == g.H.types.$e && d(k.Oa) && f.push(")");
            k && (k = k.next())
        }
    }
    g.H.Bi = h;
    for (c = 2; c < f.length; c++)
        "(" == f[c - 2] && ")" == f[c] && (f[c - 2] = f[c - 1],
        f.splice(c - 1, 2));
    f = f.reduce(function(n, p) {
        return n + ("(" == n.substr(-1) || ")" == p ? "" : " ") + p
    }, "");
    f = f.trim() || "???";
    a && f.length > a && (f = f.substring(0, a - 3) + "...");
    return f
}
;
function H(a, c) {
    return a.ho(g.lb.rg, c)
}
function gc(a, c) {
    return a.ho(g.lb.df, c)
}
function I(a, c) {
    return a.ho(g.lb.jg, c || "")
}
function J(a, c) {
    var d = c.type ? 'Block "' + c.type + '": ' : "";
    if (c.output && c.previousStatement)
        throw Error(d + "Must not have both an output and a previousStatement.");
    c.style && c.style.Hg && (a.Hg = c.style.Hg,
    c.style = null);
    if (c.style && c.colour)
        throw Error(d + "Must not have both a colour and a style.");
    if (c.style) {
        var e = c.style;
        try {
            a.$b(e)
        } catch (ra) {
            console.warn(d + "Style does not exist: ", e)
        }
    } else if ("colour"in c)
        if (void 0 === c.colour)
            console.warn(d + "Undefined colour value.");
        else {
            e = c.colour;
            try {
                a.Wc(e)
            } catch (ra) {
                console.warn(d + "Illegal colour value: ", e)
            }
        }
    for (e = 0; void 0 !== c["message" + e]; ) {
        var f = a
          , h = c["args" + e] || []
          , k = c["lastDummyAlign" + e]
          , l = d
          , m = g.g.SK(c["message" + e])
          , n = f;
        var p = m;
        for (var r = h.length, y = [], N = 0, Q = 0; Q < p.length; Q++) {
            var F = p[Q];
            if ("number" == typeof F) {
                if (1 > F || F > r)
                    throw Error('Block "' + n.type + '": Message index %' + F + " out of range.");
                if (y[F])
                    throw Error('Block "' + n.type + '": Message index %' + F + " duplicated.");
                y[F] = !0;
                N++
            }
        }
        if (N != r)
            throw Error('Block "' + n.type + '": Message does not reference all ' + r + " arg(s).");
        n = h;
        h = [];
        for (p = 0; p < m.length; p++) {
            r = m[p];
            "number" == typeof r && (r = n[r - 1]);
            if ("string" == typeof r && (r = hc(r),
            !r))
                continue;
            h.push(r)
        }
        (m = h.length) && !ic(h[m - 1].type) && (m = {
            type: "input_dummy"
        },
        k && (m.align = k),
        h.push(m));
        k = h;
        h = [];
        for (m = 0; p = k[m]; m++)
            if (ic(p.type)) {
                n = f;
                r = l;
                N = {
                    LEFT: g.Jb.Jf.Ib,
                    RIGHT: g.Jb.Jf.Mc,
                    CENTRE: g.Jb.Jf.Aq,
                    CENTER: g.Jb.Jf.Aq
                };
                y = null;
                switch (p.type) {
                case "input_value":
                    y = H(n, p.name);
                    break;
                case "input_statement":
                    y = gc(n, p.name);
                    break;
                case "input_dummy":
                    y = I(n, p.name)
                }
                y ? (p.check && y.Pb(p.check),
                p.align && (n = N[p.align.toUpperCase()],
                void 0 === n ? console.warn(r + "Illegal align value: ", p.align) : cc(y, n)),
                n = y) : n = null;
                if (n) {
                    for (p = 0; r = h[p]; p++)
                        G(n, r[0], r[1]);
                    h.length = 0
                }
            } else
                (n = jc(f, p)) && h.push([n, p.name]);
        e++
    }
    void 0 !== c.inputsInline && a.Xc(c.inputsInline);
    void 0 !== c.output && a.fe(!0, c.output);
    void 0 !== c.previousStatement && a.Se(!0, c.previousStatement);
    void 0 !== c.nextStatement && a.Re(!0, c.nextStatement);
    void 0 !== c.tooltip && (e = c.tooltip,
    e = g.g.se(e),
    a.ab(e));
    void 0 !== c.enableContextMenu && (e = c.enableContextMenu,
    a.contextMenu = !!e);
    void 0 !== c.helpUrl && (e = c.helpUrl,
    e = g.g.se(e),
    a.Mb = e);
    "string" == typeof c.extensions && (console.warn(d + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" + c.type + "' block."),
    c.extensions = [c.extensions]);
    void 0 !== c.mutator && g.ma.apply(c.mutator, a, !0);
    c = c.extensions;
    if (Array.isArray(c))
        for (d = 0; d < c.length; ++d)
            g.ma.apply(c[d], a, !1)
}
b.Oe = function(a, c) {
    if (void 0 !== c && "boolean" != typeof c)
        throw Error("opt_disableCheck must be a boolean if provided");
    if (!c) {
        c = [];
        for (var d in a)
            void 0 !== this[d] && c.push(d);
        if (c.length)
            throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
    }
    g.g.object.Oe(this, a)
}
;
function jc(a, c) {
    var d = g.rf.ka(c);
    return !d && c.alt ? "string" == typeof c.alt ? (c = hc(c.alt)) ? jc(a, c) : null : jc(a, c.alt) : d
}
function ic(a) {
    return "input_value" == a || "input_statement" == a || "input_dummy" == a
}
function hc(a) {
    return (a = a.trim()) ? {
        type: "field_label",
        text: a
    } : null
}
b.ho = function(a, c) {
    var d = null;
    if (a == g.lb.rg || a == g.lb.df)
        d = this.kp(a);
    a = new g.Nz(a,c,this,d);
    this.Z.push(a);
    return a
}
;
function kc(a, c, d) {
    if (c != d) {
        for (var e = -1, f = d ? -1 : a.Z.length, h = 0, k; k = a.Z[h]; h++)
            if (k.name == c) {
                if (e = h,
                -1 != f)
                    break
            } else if (d && k.name == d && (f = h,
            -1 != e))
                break;
        if (-1 == e)
            throw Error('Named input "' + c + '" not found.');
        if (-1 == f)
            throw Error('Reference input "' + d + '" not found.');
        a.xx(e, f)
    }
}
b.xx = function(a, c) {
    if (a == c)
        throw Error("Can't move input to itself.");
    if (a >= this.Z.length)
        throw RangeError("Input index " + a + " out of bounds.");
    if (c > this.Z.length)
        throw RangeError("Reference input " + c + " out of bounds.");
    var d = this.Z[a];
    this.Z.splice(a, 1);
    a < c && c--;
    this.Z.splice(c, 0, d)
}
;
b.xb = function(a, c) {
    for (var d = 0, e; e = this.Z[d]; d++)
        if (e.name == a)
            return e.I(),
            this.Z.splice(d, 1),
            !0;
    if (c)
        return !1;
    throw Error("Input not found: " + a);
}
;
function x(a, c) {
    for (var d = 0, e; e = a.Z[d]; d++)
        if (e.name == c)
            return e;
    return null
}
function K(a, c) {
    return (a = x(a, c)) && a.connection && a.connection.sa()
}
b.Sg = function(a) {
    this.Ce.text != a && (g.h.Ga(new (g.h.get(g.h.eg))(this,"comment",null,this.Ce.text,a)),
    this.Wi = this.Ce.text = a)
}
;
b.fn = function() {}
;
b.Nj = function() {}
;
b.jb = function() {
    return this.dE
}
;
b.moveBy = function(a, c) {
    if (this.Ng)
        throw Error("Block has parent.");
    var d = new (g.h.get(g.h.ki))(this);
    this.dE.translate(a, c);
    d.tl();
    g.h.Ga(d)
}
;
b.kp = function(a) {
    return new g.Ja(this,a)
}
;
g.m.LM = function() {}
;
g.g.ea = {
    yO: 0,
    YM: 3,
    lE: 8,
    IG: 9,
    hN: 12,
    Vt: 13,
    dr: 16,
    $j: 17,
    Hl: 18,
    UN: 19,
    yL: 20,
    vz: 27,
    jA: 32,
    iG: 33,
    hG: 34,
    VE: 35,
    tF: 36,
    Ib: 37,
    wk: 38,
    Mc: 39,
    Ol: 40,
    XN: 43,
    ZN: 44,
    KM: 45,
    ck: 46,
    ZERO: 48,
    ONE: 49,
    sO: 50,
    mO: 51,
    kM: 52,
    jM: 53,
    jO: 54,
    hO: 55,
    NL: 56,
    fN: 57,
    hM: 59,
    fM: 61,
    eM: 173,
    gM: 163,
    $N: 63,
    rL: 64,
    nL: 65,
    sL: 66,
    Ot: 67,
    FL: 68,
    E: 69,
    PL: 70,
    rc: 71,
    nM: 72,
    pM: 73,
    SM: 74,
    TM: 75,
    UM: 76,
    XM: 77,
    eN: 78,
    xN: 79,
    TN: 80,
    Q: 81,
    aO: 82,
    dO: 83,
    lO: 84,
    tO: 85,
    Su: 86,
    vO: 87,
    Wu: 88,
    XG: 89,
    im: 90,
    Ul: 91,
    zO: 92,
    EL: 93,
    wN: 96,
    pN: 97,
    vN: 98,
    uN: 99,
    lN: 100,
    kN: 101,
    tN: 102,
    sN: 103,
    jN: 104,
    oN: 105,
    nN: 106,
    rN: 107,
    mN: 109,
    qN: 110,
    iN: 111,
    QL: 112,
    UL: 113,
    VL: 114,
    WL: 115,
    XL: 116,
    YL: 117,
    ZL: 118,
    $L: 119,
    aM: 120,
    RL: 121,
    SL: 122,
    TL: 123,
    gN: 144,
    eO: 145,
    iM: 166,
    VM: 183,
    fO: 186,
    GL: 189,
    OL: 187,
    DL: 188,
    VN: 190,
    kO: 191,
    qL: 192,
    nO: 192,
    iO: 222,
    yN: 219,
    tL: 220,
    BL: 221,
    xO: 224,
    ZM: 224,
    $M: 91,
    aN: 93,
    wO: 229,
    uO: 252,
    WN: 255
};
g.lu = function() {
    this.Xf = [];
    this.ul = this.Db = this.Us = this.Ls = this.Ks = this.Fr = this.Ms = this.Nk = this.Px = null
}
;
b = g.lu.prototype;
b.Ia = function(a) {
    var c = document.createElement("div");
    c.className = "blocklyMenu goog-menu blocklyNonSelectable";
    c.tabIndex = 0;
    this.ul && g.g.za.Df(c, this.ul);
    this.Db = c;
    for (var d = 0, e; e = this.Xf[d]; d++)
        c.appendChild(e.eb());
    this.Ms = g.M.va(c, "mouseover", this, this.MI, !0);
    this.Fr = g.M.va(c, "click", this, this.HI, !0);
    this.Ks = g.M.va(c, "mouseenter", this, this.KI, !0);
    this.Ls = g.M.va(c, "mouseleave", this, this.LI, !0);
    this.Us = g.M.va(c, "keydown", this, this.II);
    a.appendChild(c)
}
;
b.focus = function() {
    var a = this.Db;
    a && (a.focus({
        preventScroll: !0
    }),
    g.g.o.Fa(a, "blocklyFocused"))
}
;
b.Df = function(a) {
    this.ul = a
}
;
b.I = function() {
    this.Ms && (g.M.Ra(this.Ms),
    this.Ms = null);
    this.Fr && (g.M.Ra(this.Fr),
    this.Fr = null);
    this.Ks && (g.M.Ra(this.Ks),
    this.Ks = null);
    this.Ls && (g.M.Ra(this.Ls),
    this.Ls = null);
    this.Us && (g.M.Ra(this.Us),
    this.Us = null);
    for (var a = 0, c; c = this.Xf[a]; a++)
        c.I();
    this.Db = null
}
;
function lc(a, c) {
    for (var d = a.Db; c && c != d; ) {
        if (g.g.o.qs(c, "blocklyMenuItem"))
            for (var e = 0, f; f = a.Xf[e]; e++)
                if (f.Db == c)
                    return f;
        c = c.parentElement
    }
    return null
}
b.Zh = function(a) {
    var c = this.Nk;
    c && (c.Zh(!1),
    this.Nk = null);
    a && (a.Zh(!0),
    this.Nk = a,
    c = this.Db,
    g.g.style.wK(a.Db, c),
    g.g.za.ge(c, g.g.za.State.It, a.La()))
}
;
function mc(a, c, d) {
    c += d;
    for (var e; e = a.Xf[c]; ) {
        if (e.isEnabled()) {
            a.Zh(e);
            break
        }
        c += d
    }
}
b.MI = function(a) {
    (a = lc(this, a.target)) && (a.isEnabled() ? this.Nk != a && this.Zh(a) : this.Zh(null))
}
;
b.HI = function(a) {
    var c = this.Px;
    this.Px = null;
    c && "number" == typeof a.clientX && 1 > g.g.V.Bo(c, new g.g.V(a.clientX,a.clientY)) || (a = lc(this, a.target)) && a.isEnabled() && a.co && a.co(a)
}
;
b.KI = function() {
    this.focus()
}
;
b.LI = function() {
    if (this.Db) {
        var a = this.Db;
        a && (a.blur(),
        g.g.o.dc(a, "blocklyFocused"));
        this.Zh(null)
    }
}
;
b.II = function(a) {
    if (this.Xf.length && !(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)) {
        var c = this.Nk;
        switch (a.keyCode) {
        case g.g.ea.Vt:
        case g.g.ea.jA:
            c && c.isEnabled() && c.co && c.co(c);
            break;
        case g.g.ea.wk:
            c = this.Xf.indexOf(this.Nk);
            mc(this, 0 > c ? this.Xf.length : c, -1);
            break;
        case g.g.ea.Ol:
            mc(this, this.Xf.indexOf(this.Nk), 1);
            break;
        case g.g.ea.iG:
        case g.g.ea.tF:
            mc(this, -1, 1);
            break;
        case g.g.ea.hG:
        case g.g.ea.VE:
            mc(this, this.Xf.length, -1);
            break;
        default:
            return
        }
        a.preventDefault();
        a.stopPropagation()
    }
}
;
b.Fh = function() {
    var a = this.Db
      , c = g.g.style.Fh(a);
    c.height = a.scrollHeight;
    return c
}
;
g.mu = function(a, c) {
    this.wh = a;
    this.Cc = c;
    this.$r = !0;
    this.Db = null;
    this.ty = !1;
    this.ul = null;
    this.iC = this.xv = this.wv = !1;
    this.co = null
}
;
b = g.mu.prototype;
b.eb = function() {
    var a = document.createElement("div");
    a.id = g.g.Ql.Aw();
    this.Db = a;
    a.className = "blocklyMenuItem goog-menuitem " + (this.$r ? "" : "blocklyMenuItemDisabled goog-menuitem-disabled ") + (this.xv ? "blocklyMenuItemSelected goog-option-selected " : "") + (this.iC ? "blocklyMenuItemHighlight goog-menuitem-highlight " : "") + (this.ty ? "blocklyMenuItemRtl goog-menuitem-rtl " : "");
    var c = document.createElement("div");
    c.className = "blocklyMenuItemContent goog-menuitem-content";
    if (this.wv) {
        var d = document.createElement("div");
        d.className = "blocklyMenuItemCheckbox goog-menuitem-checkbox";
        c.appendChild(d)
    }
    d = this.wh;
    "string" == typeof this.wh && (d = document.createTextNode(this.wh));
    c.appendChild(d);
    a.appendChild(c);
    this.ul && g.g.za.Df(a, this.ul);
    g.g.za.ge(a, g.g.za.State.Hi, this.wv && this.xv || !1);
    g.g.za.ge(a, g.g.za.State.NE, !this.$r);
    return a
}
;
b.I = function() {
    this.Db = null
}
;
b.La = function() {
    return this.Db.id
}
;
b.getValue = function() {
    return this.Cc
}
;
b.Df = function(a) {
    this.ul = a
}
;
b.Zh = function(a) {
    this.iC = a;
    var c = this.Db;
    c && this.isEnabled() && (a ? (g.g.o.Fa(c, "blocklyMenuItemHighlight"),
    g.g.o.Fa(c, "goog-menuitem-highlight")) : (g.g.o.dc(c, "blocklyMenuItemHighlight"),
    g.g.o.dc(c, "goog-menuitem-highlight")))
}
;
b.isEnabled = function() {
    return this.$r
}
;
b.ee = function(a) {
    this.$r = a
}
;
function nc(a, c, d) {
    a.co = c.bind(d)
}
;g.Za = {};
g.Za.Qr = null;
g.Za.ae = null;
g.Za.show = function(a, c, d) {
    g.ga.show(g.Za, d, g.Za.I);
    if (c.length) {
        var e = g.Za.WJ(c, d);
        g.Za.ae = e;
        g.Za.rl(e, a, d);
        setTimeout(function() {
            e.focus()
        }, 1);
        g.Za.Qr = null
    } else
        g.Za.Va()
}
;
g.Za.WJ = function(a, c) {
    var d = new g.lu;
    d.Df(g.g.za.Gi.YF);
    for (var e = 0, f; f = a[e]; e++) {
        var h = new g.mu(f.text);
        h.ty = c;
        h.Df(g.g.za.Gi.ZF);
        d.Xf.push(h);
        h.ee(f.enabled);
        f.enabled && nc(h, function() {
            g.Za.Va();
            this.cb(this.scope)
        }, f)
    }
    return d
}
;
g.Za.rl = function(a, c, d) {
    var e = g.g.FI();
    c = new g.g.Rect(c.clientY + e.top,c.clientY + e.top,c.clientX + e.left,c.clientX + e.left);
    g.Za.OH(a);
    var f = a.Fh();
    d && (c.left += f.width,
    c.right += f.width,
    e.left += f.width,
    e.right += f.width);
    g.ga.XJ(e, c, f, d);
    a.focus()
}
;
g.Za.OH = function(a) {
    a.Ia(g.ga.mb);
    var c = a.Db;
    g.g.o.Fa(c, "blocklyContextMenu");
    g.M.va(c, "contextmenu", null, g.g.BJ);
    a.focus()
}
;
g.Za.Va = function() {
    g.ga.Im(g.Za);
    g.Za.Qr = null
}
;
g.Za.I = function() {
    g.Za.ae && (g.Za.ae.I(),
    g.Za.ae = null)
}
;
g.Za.zr = function(a, c) {
    return function() {
        g.h.disable();
        try {
            var d = g.P.Ck(c, a.u)
              , e = a.jb();
            e.x = a.L ? e.x - g.Md : e.x + g.Md;
            e.y += 2 * g.Md;
            d.moveBy(e.x, e.y)
        } finally {
            g.h.enable()
        }
        g.h.isEnabled() && !d.Pa && g.h.Ga(new (g.h.get(g.h.ji))(d));
        d.select()
    }
}
;
g.Za.FO = function(a) {
    return {
        text: g.i.REMOVE_COMMENT,
        enabled: !0,
        cb: function() {
            g.h.la(!0);
            a.I(!0, !0);
            g.h.la(!1)
        }
    }
}
;
g.Za.GO = function(a) {
    return {
        text: g.i.DUPLICATE_COMMENT,
        enabled: !0,
        cb: function() {
            g.duplicate(a)
        }
    }
}
;
g.Za.tP = function(a, c) {
    if (!g.hm)
        throw Error("Missing require for Blockly.WorkspaceCommentSvg");
    var d = {
        enabled: !g.g.userAgent.Ze
    };
    d.text = g.i.ADD_COMMENT;
    d.cb = function() {
        var e = new g.hm(a,g.i.WORKSPACE_COMMENT_DEFAULT_TEXT,g.hm.LE,g.hm.LE)
          , f = aa(a).getBoundingClientRect();
        f = new g.g.V(c.clientX - f.left,c.clientY - f.top);
        var h = g.g.To(a.zb);
        f = g.g.V.Ao(f, h);
        f.scale(1 / a.scale);
        e.moveBy(f.x, f.y);
        a.ra && (e.uf(),
        e.Ia(),
        e.select())
    }
    ;
    return d
}
;
g.Ua = function() {
    g.Ua.B = this;
    this.Bf = Object.create(null)
}
;
g.Ua.Od = {
    Jc: "block",
    ne: "workspace"
};
g.Ua.B = null;
g.Ua.prototype.register = function(a) {
    if (this.Bf[a.id])
        throw Error('Menu item with ID "' + a.id + '" is already registered.');
    this.Bf[a.id] = a
}
;
g.Ua.prototype.unregister = function(a) {
    if (!this.Bf[a])
        throw Error('Menu item with ID "' + a + '" not found.');
    delete this.Bf[a]
}
;
g.Ua.prototype.getItem = function(a) {
    return this.Bf[a] || null
}
;
function oc(a, c) {
    var d = []
      , e = g.Ua.B.Bf;
    Object.keys(e).forEach(function(f) {
        f = e[f];
        if (a == f.Qe) {
            var h = f.qc(c);
            "hidden" != h && (f = {
                text: "function" == typeof f.Sd ? f.Sd(c) : f.Sd,
                enabled: "enabled" == h,
                cb: f.cb,
                scope: c,
                weight: f.weight
            },
            d.push(f))
        }
    });
    d.sort(function(f, h) {
        return f.weight - h.weight
    });
    return d
}
new g.Ua;
g.h.Ji = function(a, c, d) {
    g.h.Ji.v.constructor.call(this, d);
    this.PC = a;
    this.MC = c
}
;
g.g.object.W(g.h.Ji, g.h.ze);
g.h.Ji.prototype.type = g.h.Hi;
g.h.Ji.prototype.Ca = function() {
    var a = g.h.Ji.v.Ca.call(this);
    a.oldElementId = this.PC;
    a.newElementId = this.MC;
    return a
}
;
g.h.Ji.prototype.ka = function(a) {
    g.h.Ji.v.ka.call(this, a);
    this.PC = a.oldElementId;
    this.MC = a.newElementId
}
;
g.B.register(g.B.U.cc, g.h.Hi, g.h.Ji);
g.vM = function() {}
;
g.BM = function() {}
;
g.uc = function(a, c) {
    g.uc.v.constructor.call(this, a, c);
    this.zg = a.u.Nr[c];
    this.jB = a.u.Nr[g.Xl[c]];
    this.kl = new g.g.V(0,0);
    this.di = g.uc.qg.vA;
    this.ta = null
}
;
g.g.object.W(g.uc, g.Ja);
g.uc.qg = {
    vA: -1,
    sA: 0,
    gm: 1
};
b = g.uc.prototype;
b.I = function() {
    g.uc.v.I.call(this);
    this.di == g.uc.qg.gm && pc(this.zg, this, this.y)
}
;
b.aa = function() {
    return g.uc.v.aa.call(this)
}
;
b.sa = function() {
    return g.uc.v.sa.call(this)
}
;
function Ta(a, c) {
    var d = a.x - c.x;
    a = a.y - c.y;
    return Math.sqrt(d * d + a * a)
}
function qc(a, c) {
    if (!a.J.u.yc()) {
        var d = a.J.Tf();
        if (!d.Xb) {
            var e = !1;
            if (!d.Gc()) {
                d = c.aa().Tf();
                if (!d.Gc())
                    return;
                c = a;
                e = !0
            }
            var f = g.selected == d;
            f || d.pr();
            var h = c.x + g.Md + Math.floor(Math.random() * g.Nt) - a.x
              , k = c.y + g.Md + Math.floor(Math.random() * g.Nt) - a.y;
            e && (k = -k);
            d.L && (h = c.x - g.Md - Math.floor(Math.random() * g.Nt) - a.x);
            d.moveBy(h, k);
            f || d.Ep()
        }
    }
}
b.moveTo = function(a, c) {
    if (this.di == g.uc.qg.vA) {
        var d = this.zg;
        d.nc.splice(rc(d, c), 0, this);
        this.di = g.uc.qg.gm
    } else
        this.di == g.uc.qg.gm && (pc(this.zg, this, this.y),
        d = this.zg,
        d.nc.splice(rc(d, c), 0, this));
    this.x = a;
    this.y = c
}
;
b.moveBy = function(a, c) {
    this.moveTo(this.x + a, this.y + c)
}
;
function sc(a, c) {
    a.moveTo(c.x + a.kl.x, c.y + a.kl.y)
}
function L(a, c, d) {
    a.kl.x = c;
    a.kl.y = d
}
function tc(a) {
    var c = a.ta.x - a.x
      , d = a.ta.y - a.y;
    if (0 != c || 0 != d) {
        a = a.sa();
        var e = a.Ma();
        if (!e)
            throw Error("block is not rendered.");
        e = g.g.sf(e);
        a.Ma().setAttribute("transform", "translate(" + (e.x - c) + "," + (e.y - d) + ")");
        rb(a, -c, -d)
    }
}
b.closest = function(a, c) {
    var d = this.jB;
    if (d.nc.length) {
        var e = this.y
          , f = this.x;
        this.x = f + c.x;
        this.y = e + c.y;
        var h = rc(d, this.y);
        c = null;
        for (var k = a, l, m = h - 1; 0 <= m && Math.abs(d.nc[m].y - this.y) <= a; )
            l = d.nc[m],
            Qa(d.aB, this, l, !0, k) && (c = l,
            k = Ta(l, this)),
            m--;
        for (; h < d.nc.length && Math.abs(d.nc[h].y - this.y) <= a; )
            l = d.nc[h],
            Qa(d.aB, this, l, !0, k) && (c = l,
            k = Ta(l, this)),
            h++;
        this.x = f;
        this.y = e;
        a = {
            connection: c,
            et: k
        }
    } else
        a = {
            connection: null,
            et: a
        };
    return a
}
;
function bc(a, c) {
    c && a.di == g.uc.qg.gm || !c && a.di == g.uc.qg.sA || a.J.Xb || (c ? (c = a.zg,
    c.nc.splice(rc(c, a.y), 0, a),
    a.di = g.uc.qg.gm) : (a.di == g.uc.qg.gm && pc(a.zg, a, a.y),
    a.di = g.uc.qg.sA))
}
function ac(a) {
    bc(a, !0);
    var c = [];
    if (a.type != g.pa.tc && a.type != g.pa.bd)
        return c;
    if (a = a.sa()) {
        if (a.isCollapsed()) {
            var d = [];
            a.T && d.push(a.T);
            a.ba && d.push(a.ba);
            a.qa && d.push(a.qa)
        } else
            d = a.Sf(!0);
        for (var e = 0; e < d.length; e++)
            c.push.apply(c, ac(d[e]));
        c.length || (c[0] = a)
    }
    return c
}
b.Gx = function(a) {
    var c = this.aa();
    if (g.h.$a) {
        var d = g.h.oc();
        setTimeout(function() {
            c.mf || c.getParent() || (g.h.la(d),
            qc(this, a),
            g.h.la(!1))
        }
        .bind(this), g.yq)
    }
}
;
b.Tv = function(a, c) {
    g.uc.v.Tv.call(this, a, c);
    a.ra && a.Ia();
    c.ra && (Fa(c),
    c.Ia(),
    c.Ma().style.display = "block")
}
;
b.Hp = function() {
    g.uc.v.Hp.call(this);
    var a = this.sa();
    a && (a.uf(),
    a.Ia(!1),
    a = this.aa(),
    a.ra && a.Ia())
}
;
b.LC = function(a) {
    return uc(this.jB, this, a)
}
;
b.Lr = function(a) {
    g.uc.v.Lr.call(this, a);
    var c = this.aa();
    a = a.aa();
    var d = c.ra
      , e = a.ra;
    d && Fa(c);
    e && Fa(a);
    d && e && (this.type == g.pa.bd || this.type == g.pa.cf ? a.Ia() : c.Ia());
    if (c = La(c, a))
        c = c.isVisible(),
        a.Ma().style.display = c ? "block" : "none"
}
;
b.XC = function() {
    !this.isConnected() || this.ta && Qa(this.J.u.vh, this, this.ta, !1) || (A(Pa(this) ? this.sa() : this.J),
    this.J.Zb())
}
;
g.Wj = function() {
    g.Wj.v.constructor.call(this)
}
;
g.g.object.W(g.Wj, g.pi);
g.Wj.Pg = "basicCursor";
b = g.Wj.prototype;
b.next = function() {
    var a = this.Ge;
    if (!a)
        return null;
    (a = vc(this, a, this.Uy)) && Pb(this, a);
    return a
}
;
b.kj = function() {
    return this.next()
}
;
b.Vh = function() {
    var a = this.Ge;
    if (!a)
        return null;
    (a = wc(this, a, this.Uy)) && Pb(this, a);
    return a
}
;
b.Aj = function() {
    return this.Vh()
}
;
function vc(a, c, d) {
    if (!c)
        return null;
    var e = c.kj() || c.next();
    if (d(e))
        return e;
    if (e)
        return vc(a, e, d);
    c = xc(a, c.Aj());
    return d(c) ? c : c ? vc(a, c, d) : null
}
function wc(a, c, d) {
    if (!c)
        return null;
    var e = c.Vh();
    e = e ? yc(a, e) : c.Aj();
    return d(e) ? e : e ? wc(a, e, d) : null
}
b.Uy = function(a) {
    var c = !1;
    a = a && a.getType();
    if (a == g.H.types.nk || a == g.H.types.$e || a == g.H.types.qd || a == g.H.types.Ci || a == g.H.types.Fi || a == g.H.types.ne)
        c = !0;
    return c
}
;
function xc(a, c) {
    if (!c)
        return null;
    var d = c.next();
    return d ? d : xc(a, c.Aj())
}
function yc(a, c) {
    if (!c.kj())
        return c;
    for (c = c.kj(); c.next(); )
        c = c.next();
    return yc(a, c)
}
g.B.register(g.B.U.ak, g.Wj.Pg, g.Wj);
g.kr = function() {
    g.kr.v.constructor.call(this)
}
;
g.g.object.W(g.kr, g.Wj);
g.kr.prototype.Uy = function(a) {
    var c = !1
      , d = a && a.getType();
    a && (a = a.Oa,
    d == g.H.types.qd && a && a.vC() && db(a) && (c = !0));
    return c
}
;
g.kb = function(a, c, d) {
    this.R = g.g.o.N(g.g.F.rc, {}, null);
    this.R.fq = "";
    this.style = zc(a.Ob.na(), null);
    this.Nb = a.Ob.DC(this.R, this.style);
    this.ny = this.ra = !1;
    this.u = a;
    this.qa = this.ba = this.T = null;
    this.mq = g.g.Uk() && !!a.Ae;
    var e = this.Nb.ac;
    e.Gf = this;
    g.K.lm(e);
    g.kb.v.constructor.call(this, a, c, d);
    this.R.dataset ? this.R.dataset.id = this.id : g.g.userAgent.Ze && this.R.setAttribute("data-id", this.id)
}
;
g.g.object.W(g.kb, g.Il);
g.kb.prototype.height = 0;
g.kb.prototype.width = 0;
g.kb.prototype.ue = null;
g.kb.JM = -1;
g.kb.uE = "TEMP_COLLAPSED_WARNING_";
b = g.kb.prototype;
b.uf = function() {
    if (!this.u.ra)
        throw TypeError("Workspace is headless.");
    for (var a = 0, c; c = this.Z[a]; a++)
        c.S();
    c = nb(this);
    for (a = 0; a < c.length; a++)
        Ac(c[a]);
    this.ic();
    lb(this.Nb, "blocklyDraggable", this.Gc());
    a = this.Ma();
    this.u.options.readOnly || this.hI || !a || g.M.va(a, "mousedown", this, this.yj);
    this.hI = !0;
    a.parentNode || this.u.zb.appendChild(a)
}
;
b.select = function() {
    if (this.Pa && this.getParent())
        this.getParent().select();
    else if (g.selected != this) {
        var a = null;
        if (g.selected) {
            a = g.selected.id;
            g.h.disable();
            try {
                Eb(g.selected)
            } finally {
                g.h.enable()
            }
        }
        a = new (g.h.get(g.h.Hi))(a,this.id,this.u.id);
        g.h.Ga(a);
        g.selected = this;
        this.pr()
    }
}
;
function Eb(a) {
    if (g.selected == a) {
        var c = new (g.h.get(g.h.Hi))(a.id,null,a.u.id);
        c.Sc = a.u.id;
        g.h.Ga(c);
        g.selected = null;
        a.Ep()
    }
}
b.kd = null;
b.Wi = null;
b.hf = null;
b.We = null;
function nb(a) {
    var c = [];
    a.kd && c.push(a.kd);
    a.hf && c.push(a.hf);
    a.We && c.push(a.We);
    return c
}
b.ut = function(a) {
    var c = this.Ng;
    if (a != c) {
        g.g.o.Vp();
        g.kb.v.ut.call(this, a);
        g.g.o.Wp();
        var d = this.Ma();
        if (!this.u.Uw && d) {
            var e = this.jb();
            a ? (a.Ma().appendChild(d),
            a = this.jb(),
            rb(this, a.x - e.x, a.y - e.y)) : c && (this.u.zb.appendChild(d),
            this.translate(e.x, e.y));
            this.ic()
        }
    }
}
;
b.jb = function() {
    var a = 0
      , c = 0
      , d = this.mq ? this.u.Ae.oc() : null
      , e = this.Ma();
    if (e) {
        do {
            var f = g.g.sf(e);
            a += f.x;
            c += f.y;
            this.mq && this.u.Ae.Bg.firstChild == e && (f = this.u.Ae.Dw(),
            a += f.x,
            c += f.y);
            e = e.parentNode
        } while (e && e != this.u.zb && e != d)
    }
    return new g.g.V(a,c)
}
;
b.moveBy = function(a, c) {
    if (this.Ng)
        throw Error("Block has parent.");
    var d = g.h.isEnabled();
    if (d)
        var e = new (g.h.get(g.h.ki))(this);
    var f = this.jb();
    this.translate(f.x + a, f.y + c);
    rb(this, a, c);
    d && (e.tl(),
    g.h.Ga(e));
    Ga(this.u)
}
;
b.translate = function(a, c) {
    this.Ma().setAttribute("transform", "translate(" + a + "," + c + ")")
}
;
b.moveTo = function(a) {
    var c = this.jb();
    this.moveBy(a.x - c.x, a.y - c.y)
}
;
b.wx = function(a) {
    this.mq ? this.u.Ae.zl(a.x, a.y) : (this.R.fq = "translate(" + a.x + "," + a.y + ")",
    this.R.setAttribute("transform", this.R.fq + this.R.Rp))
}
;
function Bc(a) {
    if (a.u && !a.u.yc() && !a.getParent() && !a.Xb) {
        var c = a.u.tf;
        if (c && c.EK) {
            var d = c.Hy
              , e = d / 2
              , f = a.jb();
            c = Math.round((f.x - e) / d) * d + e - f.x;
            d = Math.round((f.y - e) / d) * d + e - f.y;
            c = Math.round(c);
            d = Math.round(d);
            0 == c && 0 == d || a.moveBy(c, d)
        }
    }
}
b.Bm = function() {
    var a = this.jb()
      , c = E(this);
    if (this.L) {
        var d = a.x - c.width;
        var e = a.x
    } else
        d = a.x,
        e = a.x + c.width;
    return new g.g.Rect(a.y,a.y + c.height,d,e)
}
;
b.lp = function() {
    this.Nb.Jb = this.u.Ob.na();
    for (var a = 0, c; c = this.Z[a]; a++)
        c.lp()
}
;
b.Kj = function(a) {
    this.yk != a && (g.kb.v.Kj.call(this, a),
    a ? this.ra && this.Ia() : Cc(this))
}
;
function Cc(a) {
    for (var c = a.isCollapsed(), d = g.Jb.Dq, e = g.Jb.Cq, f = 0, h; h = a.Z[f]; f++)
        h.name != d && h.rb(!c);
    if (c) {
        h = nb(a);
        for (f = 0; c = h[f]; f++)
            c.rb(!1);
        f = a.toString(g.vE);
        (h = z(a, e)) ? h.setValue(f) : (h = x(a, d) || I(a, d),
        G(h, new g.je(f), e))
    } else
        Fa(a),
        a.xb(d)
}
b.yj = function(a) {
    var c = this.u && this.u.Eh(a);
    if (c) {
        if (c.Kk)
            throw Error("Tried to call gesture.handleBlockStart, but the gesture had already been started.");
        Nb(c, this);
        c.xf = a
    }
}
;
b.showHelp = function() {
    var a = "function" == typeof this.Mb ? this.Mb() : this.Mb;
    a && window.open(a)
}
;
b.Pp = function(a) {
    if (this.u.options.readOnly || !this.contextMenu)
        var c = null;
    else
        c = oc(g.Ua.Od.Jc, {
            block: this
        }),
        this.yh && this.yh(c);
    c && c.length && (g.Za.show(a, c, this.L),
    g.Za.Qr = this)
}
;
function rb(a, c, d) {
    if (a.ra) {
        for (var e = a.Sf(!1), f = 0; f < e.length; f++)
            e[f].moveBy(c, d);
        e = nb(a);
        for (f = 0; f < e.length; f++)
            Dc(e[f]);
        for (f = 0; f < a.rh.length; f++)
            rb(a.rh[f], c, d)
    }
}
b.Lj = function(a) {
    if (a) {
        var c = this.Ma();
        c.fq = "";
        c.Rp = "";
        g.zm = g.zm.concat(this.Sf(!0));
        g.g.o.Fa(this.R, "blocklyDragging")
    } else
        g.zm = [],
        g.g.o.dc(this.R, "blocklyDragging");
    for (c = 0; c < this.rh.length; c++)
        this.rh[c].Lj(a)
}
;
b.st = function(a) {
    g.kb.v.st.call(this, a);
    lb(this.Nb, "blocklyDraggable", a)
}
;
b.wy = function(a) {
    g.kb.v.wy.call(this, a);
    a = nb(this);
    for (var c = 0; c < a.length; c++)
        a[c].gi()
}
;
b.zy = function(a) {
    g.kb.v.zy.call(this, a);
    this.ic()
}
;
b.wD = function(a) {
    this.Nm != a && (this.Nm = a) && (this.Wc(this.u.Ob.na().bu),
    lb(this.Nb, "blocklyInsertionMarker", !0))
}
;
b.Ma = function() {
    return this.R
}
;
b.I = function(a, c) {
    if (this.u) {
        g.K.I();
        g.K.Qy(this.Nb.ac);
        g.g.o.Vp();
        var d = this.u;
        g.selected == this && (Eb(this),
        Ec(this.u));
        g.Za.Qr == this && g.Za.Va();
        c && this.ra && (A(this, a),
        g.Bb.aI(this));
        this.ra = !1;
        if (this.ue) {
            for (var e in this.ue)
                clearTimeout(this.ue[e]);
            this.ue = null
        }
        c = nb(this);
        for (e = 0; e < c.length; e++)
            c[e].I();
        g.kb.v.I.call(this, !!a);
        g.g.o.removeNode(this.R);
        Ga(d);
        this.R = null;
        g.g.o.Wp()
    }
}
;
b.ic = function() {
    this.Nb.ic(this);
    for (var a = nb(this), c = 0; c < a.length; c++)
        a[c].ic();
    for (a = 0; c = this.Z[a]; a++)
        for (var d = 0, e; e = c.ib[d]; d++)
            e.ic()
}
;
function Fa(a) {
    var c = Ca(a, !1);
    a.ic();
    if (!a.isCollapsed()) {
        a = 0;
        for (var d; d = c[a]; a++)
            d.ra && Fa(d)
    }
}
b.vI = function() {
    return this.hf
}
;
b.Sg = function(a) {
    if (!g.Comment)
        throw Error("Missing require for Blockly.Comment");
    this.Ce.text != a && (g.kb.v.Sg.call(this, a),
    a = null != a,
    !!this.hf == a ? (a = this.hf,
    a.yl ? a.yl.value = a.jd.text : a.ql && (a.ql.firstChild.textContent = a.jd.text)) : (a ? this.Wi = this.hf = new g.Comment(this) : (this.hf.I(),
    this.Wi = this.hf = null),
    this.ra && (this.Ia(),
    this.Zb())))
}
;
b.fn = function(a, c) {
    if (!g.$n)
        throw Error("Missing require for Blockly.Warning");
    this.ue || (this.ue = Object.create(null));
    var d = c || "";
    if (d)
        this.ue[d] && (clearTimeout(this.ue[d]),
        delete this.ue[d]);
    else
        for (var e in this.ue)
            clearTimeout(this.ue[e]),
            delete this.ue[e];
    if (this.u.yc()) {
        var f = this;
        this.ue[d] = setTimeout(function() {
            f.u && (delete f.ue[d],
            f.fn(a, d))
        }, 100)
    } else {
        this.Xb && (a = null);
        c = !1;
        if ("string" == typeof a) {
            e = dc(this);
            for (var h = null; e; )
                e.isCollapsed() && (h = e),
                e = dc(e);
            h && h.fn(g.i.COLLAPSED_WARNINGS_WARNING, g.kb.uE);
            this.We || (this.We = new g.$n(this),
            c = !0);
            Fc(this.We, a, d)
        } else
            this.We && !d ? (this.We.I(),
            c = !0) : this.We && (c = this.We.yd(),
            Fc(this.We, "", d),
            (e = this.We.yd()) || this.We.I(),
            c = c != e);
        c && this.ra && (this.Ia(),
        this.Zb())
    }
}
;
b.Nj = function(a) {
    this.kd && this.kd !== a && this.kd.I();
    a && (a.X = this,
    this.kd = a,
    Ac(a));
    this.ra && (this.Ia(),
    this.Zb())
}
;
b.ee = function(a) {
    this.isEnabled() != a && (g.kb.v.ee.call(this, a),
    this.ra && !fc(this) && Fa(this))
}
;
b.Zh = function(a) {
    this.ra && this.Nb.RD(a)
}
;
b.pr = function() {
    lb(this.Nb, "blocklySelected", !0)
}
;
b.Ep = function() {
    lb(this.Nb, "blocklySelected", !1)
}
;
b.vy = function(a) {
    lb(this.Nb, "blocklyDraggingDelete", a)
}
;
b.vw = function() {
    return this.style.sh
}
;
b.Wc = function(a) {
    g.kb.v.Wc.call(this, a);
    a = Gc(this.u.Ob.na(), this.ed);
    this.Nb.$b(a.style);
    this.style = a.style;
    this.wl = a.name;
    this.ic()
}
;
b.$b = function(a) {
    var c = zc(this.u.Ob.na(), a);
    this.wl = a;
    if (c)
        this.Hg = c.Hg,
        this.Nb.$b(c),
        this.ed = c.sh,
        this.style = c,
        this.ic();
    else
        throw Error("Invalid style name: " + a);
}
;
function ob(a) {
    do {
        var c = a.Ma()
          , d = c.parentNode
          , e = d.childNodes;
        e[e.length - 1] !== c && d.appendChild(c);
        a = a.getParent()
    } while (a)
}
b.Se = function(a, c) {
    g.kb.v.Se.call(this, a, c);
    this.ra && (this.Ia(),
    this.Zb())
}
;
b.Re = function(a, c) {
    g.kb.v.Re.call(this, a, c);
    this.ra && (this.Ia(),
    this.Zb())
}
;
b.fe = function(a, c) {
    g.kb.v.fe.call(this, a, c);
    this.ra && (this.Ia(),
    this.Zb())
}
;
b.Xc = function(a) {
    g.kb.v.Xc.call(this, a);
    this.ra && (this.Ia(),
    this.Zb())
}
;
b.xb = function(a, c) {
    a = g.kb.v.xb.call(this, a, c);
    this.ra && (this.Ia(),
    this.Zb());
    return a
}
;
b.xx = function(a, c) {
    g.kb.v.xx.call(this, a, c);
    this.ra && (this.Ia(),
    this.Zb())
}
;
b.ho = function(a, c) {
    a = g.kb.v.ho.call(this, a, c);
    this.ra && (this.Ia(),
    this.Zb());
    return a
}
;
function Ea(a, c) {
    a.qa && bc(a.qa, c);
    a.T && bc(a.T, c);
    if (a.ba) {
        bc(a.ba, c);
        var d = a.ba.sa();
        d && Ea(d, c)
    }
    if (!a.yk)
        for (d = 0; d < a.Z.length; d++) {
            var e = a.Z[d].connection;
            e && (bc(e, c),
            (e = e.sa()) && Ea(e, c))
        }
}
b.Sf = function(a) {
    var c = [];
    if (a || this.ra)
        if (this.T && c.push(this.T),
        this.qa && c.push(this.qa),
        this.ba && c.push(this.ba),
        a || !this.yk) {
            a = 0;
            for (var d; d = this.Z[a]; a++)
                d.connection && c.push(d.connection)
        }
    return c
}
;
b.Cs = function(a) {
    return g.kb.v.Cs.call(this, a)
}
;
b.yw = function(a, c) {
    return g.kb.v.yw.call(this, a, c)
}
;
b.kp = function(a) {
    return new g.uc(this,a)
}
;
b.Zb = function() {
    if (this.u && !this.u.yc()) {
        var a = this.Tf();
        if (!a.Xb)
            for (var c = this.Sf(!1), d = 0, e; e = c[d]; d++) {
                e.isConnected() && Pa(e) && e.sa().Zb();
                for (var f = e.LC(g.Md), h = 0, k; k = f[h]; h++)
                    e.isConnected() && k.isConnected() || k.aa().Tf() != a && (Pa(e) ? qc(k, e) : qc(e, k))
            }
    }
}
;
function sb(a) {
    var c = g.h.oc();
    setTimeout(function() {
        g.h.la(c);
        Bc(a);
        g.h.la(!1)
    }, g.yq / 2);
    setTimeout(function() {
        g.h.la(c);
        a.Zb();
        g.h.la(!1)
    }, g.yq)
}
b.getParent = function() {
    return g.kb.v.getParent.call(this)
}
;
b.Tf = function() {
    return g.kb.v.Tf.call(this)
}
;
b.Ia = function(a) {
    if (!this.ny) {
        this.ny = !0;
        try {
            this.ra = !0;
            g.g.o.Vp();
            this.isCollapsed() && Cc(this);
            this.u.Ob.Ia(this);
            var c = this.jb();
            this.qa && sc(this.qa, c);
            this.T && sc(this.T, c);
            for (var d = 0; d < this.Z.length; d++) {
                var e = this.Z[d].connection;
                e && (sc(e, c),
                e.isConnected() && tc(e))
            }
            this.ba && (sc(this.ba, c),
            this.ba.isConnected() && tc(this.ba));
            if (!1 !== a) {
                var f = this.getParent();
                f ? f.Ia(!0) : Ga(this.u)
            }
            g.g.o.Wp();
            this.Ty()
        } finally {
            this.ny = !1
        }
    }
}
;
b.Ty = function() {
    this.u.Sm && this.Nb.xo && this.u.Cm().draw();
    this.u.Sm && this.Nb.px && this.u.Uo(g.Ln.Qz).draw()
}
;
b.Yh = function(a) {
    this.Nb.Yh(a)
}
;
b.Mj = function(a) {
    this.Nb.Mj(a)
}
;
function E(a) {
    var c = a.height
      , d = a.width
      , e = t(a);
    e && (e = E(e),
    a = a.u.Ob.na().pu,
    c += e.height - a,
    d = Math.max(d, e.width));
    return {
        height: c,
        width: d
    }
}
;g.Ml = function(a) {
    this.nc = [];
    this.aB = a
}
;
function Hc(a, c, d) {
    if (!a.nc.length)
        return -1;
    var e = rc(a, d);
    if (e >= a.nc.length)
        return -1;
    d = c.y;
    for (var f = e; 0 <= f && a.nc[f].y == d; ) {
        if (a.nc[f] == c)
            return f;
        f--
    }
    for (f = e; f < a.nc.length && a.nc[f].y == d; ) {
        if (a.nc[f] == c)
            return f;
        f++
    }
    return -1
}
function rc(a, c) {
    if (!a.nc.length)
        return 0;
    for (var d = 0, e = a.nc.length; d < e; ) {
        var f = Math.floor((d + e) / 2);
        if (a.nc[f].y < c)
            d = f + 1;
        else if (a.nc[f].y > c)
            e = f;
        else {
            d = f;
            break
        }
    }
    return d
}
function pc(a, c, d) {
    c = Hc(a, c, d);
    if (-1 == c)
        throw Error("Unable to find connection in connectionDB.");
    a.nc.splice(c, 1)
}
function uc(a, c, d) {
    function e(n) {
        var p = h - f[n].x
          , r = k - f[n].y;
        Math.sqrt(p * p + r * r) <= d && m.push(f[n]);
        return r < d
    }
    var f = a.nc
      , h = c.x
      , k = c.y;
    a = 0;
    for (var l = c = f.length - 2; a < l; )
        f[l].y < k ? a = l : c = l,
        l = Math.floor((a + c) / 2);
    var m = [];
    c = a = l;
    if (f.length) {
        for (; 0 <= a && e(a); )
            a--;
        do
            c++;
        while (c < f.length && e(c))
    }
    return m
}
g.Ml.S = function(a) {
    var c = [];
    c[g.pa.tc] = new g.Ml(a);
    c[g.pa.xe] = new g.Ml(a);
    c[g.pa.bd] = new g.Ml(a);
    c[g.pa.cf] = new g.Ml(a);
    return c
}
;
g.h.Li = function(a, c) {
    g.h.Li.v.constructor.call(this, c);
    this.ID = a
}
;
g.g.object.W(g.h.Li, g.h.ze);
g.h.Li.prototype.type = g.h.Ku;
g.h.Li.prototype.Ca = function() {
    var a = g.h.Li.v.Ca.call(this);
    a.themeName = this.ID;
    return a
}
;
g.h.Li.prototype.ka = function(a) {
    g.h.Li.v.ka.call(this, a);
    this.ID = a.themeName
}
;
g.B.register(g.B.U.cc, g.h.Ku, g.h.Li);
g.h.Pi = function(a, c, d, e, f) {
    g.h.Pi.v.constructor.call(this, e);
    this.If = a;
    this.Hf = c;
    this.scale = d;
    this.tp = f
}
;
g.g.object.W(g.h.Pi, g.h.ze);
g.h.Pi.prototype.type = g.h.Xn;
g.h.Pi.prototype.Ca = function() {
    var a = g.h.Pi.v.Ca.call(this);
    a.viewTop = this.If;
    a.viewLeft = this.Hf;
    a.scale = this.scale;
    a.oldScale = this.tp;
    return a
}
;
g.h.Pi.prototype.ka = function(a) {
    g.h.Pi.v.ka.call(this, a);
    this.If = a.viewTop;
    this.Hf = a.viewLeft;
    this.scale = a.scale;
    this.tp = a.oldScale
}
;
g.B.register(g.B.U.cc, g.h.Xn, g.h.Pi);
g.IM = function() {}
;
g.Mn = function(a) {
    this.s = a
}
;
function Ic(a) {
    var c = 0
      , d = 0;
    a && (c = a.Ih(),
    d = a.Pc);
    return new g.g.sd(c,d)
}
function Jc(a) {
    var c = Ic(a.s.Je(!0));
    return {
        width: c.width,
        height: c.height,
        position: a.s.Gb
    }
}
function Kc(a) {
    var c = Ic(a.s.Qb);
    return {
        width: c.width,
        height: c.height,
        position: a.s.Gb
    }
}
function Lc(a) {
    var c = 0
      , d = Kc(a)
      , e = Jc(a)
      , f = !!a.s.Qb;
    a = !!a.s.Je(!0);
    var h = f ? d.position : e.position
      , k = h == g.g.Y.Ka.Ib;
    h = h == g.g.Y.Ka.td;
    f && k ? c = d.width : a && k && (c = e.width);
    k = 0;
    f && h ? k = d.height : a && h && (k = e.height);
    return {
        top: k,
        left: c
    }
}
function zb(a, c) {
    c = c ? a.s.scale : 1;
    var d = Mc(a.s)
      , e = Kc(a)
      , f = Jc(a)
      , h = a.s.Qb ? e.position : f.position;
    if (a.s.Qb)
        if (h == g.g.Y.Ka.td || h == g.g.Y.Ka.Yg)
            d.height -= e.height;
        else {
            if (h == g.g.Y.Ka.Ib || h == g.g.Y.Ka.Mc)
                d.width -= e.width
        }
    else if (a.s.Je(!0))
        if (h == g.g.Y.Ka.td || h == g.g.Y.Ka.Yg)
            d.height -= f.height;
        else if (h == g.g.Y.Ka.Ib || h == g.g.Y.Ka.Mc)
            d.width -= f.width;
    return {
        height: d.height / c,
        width: d.width / c,
        top: -a.s.scrollY / c,
        left: -a.s.scrollX / c
    }
}
g.Mn.prototype.ks = function() {
    var a = this.s.scale
      , c = Da(this.s);
    return {
        height: (c.bottom - c.top) * a,
        width: (c.right - c.left) * a,
        top: c.top * a,
        left: c.left * a
    }
}
;
g.Mn.prototype.fj = function(a, c, d) {
    a = a ? this.s.scale : 1;
    var e = c || zb(this, !1);
    d = d || this.ks();
    if (Cb(this.s) && Db(this.s))
        c = {};
    else {
        c = Cb(this.s);
        var f = Db(this.s)
          , h = e || zb(this, !1);
        var k = {};
        f || (k.top = h.top,
        k.bottom = h.top + h.height);
        c || (k.left = h.left,
        k.right = h.left + h.width);
        c = k
    }
    k = d.top + d.height;
    f = d.left + d.width;
    h = e.width;
    var l = e.height;
    var m = h / 2
      , n = l / 2;
    e = Math.min(d.top - n, k - l);
    k = Math.max(k + n, d.top + l);
    l = Math.min(d.left - m, f - h);
    d = Math.max(f + m, d.left + h);
    e = void 0 !== c.top ? c.top : e;
    f = void 0 !== c.left ? c.left : l;
    return {
        top: e / a,
        left: f / a,
        width: ((void 0 !== c.right ? c.right : d) - f) / a,
        height: ((void 0 !== c.bottom ? c.bottom : k) - e) / a
    }
}
;
g.Mn.prototype.Ud = function() {
    var a = Kc(this)
      , c = Jc(this)
      , d = Mc(this.s)
      , e = Lc(this)
      , f = zb(this)
      , h = this.ks()
      , k = this.fj(!1, f, h);
    return {
        IO: h.height,
        LO: h.width,
        KO: h.top,
        JO: h.left,
        scrollHeight: k.height,
        scrollWidth: k.width,
        scrollTop: k.top,
        scrollLeft: k.left,
        Rc: f.height,
        Ic: f.width,
        If: f.top,
        Hf: f.left,
        Pd: e.top,
        ud: e.left,
        ED: d.height,
        FD: d.width,
        sP: a.width,
        rP: a.height,
        Gb: a.position,
        QO: c.width,
        PO: c.height
    }
}
;
g.B.register(g.B.U.Uz, g.B.bk, g.Mn);
g.Gn = function(a, c) {
    this.Aa = c;
    g.Gn.v.constructor.call(this, a)
}
;
g.g.object.W(g.Gn, g.Mn);
g.Gn.prototype.ks = function() {
    try {
        var a = this.s.zb.getBBox()
    } catch (d) {
        a = {
            height: 0,
            y: 0,
            width: 0,
            x: 0
        }
    }
    var c = this.s.scale;
    return {
        height: a.height * c,
        width: a.width * c,
        top: a.y * c,
        left: a.x * c
    }
}
;
g.Gn.prototype.fj = function(a, c, d) {
    c = d || this.ks();
    d = this.Aa.lk * this.s.scale;
    a = a ? this.s.scale : 1;
    return {
        height: (c.height + 2 * d) / a,
        width: (c.width + c.left + d) / a,
        top: 0,
        left: 0
    }
}
;
g.rA = function(a, c) {
    this.s = a;
    this.bi = c;
    this.Yp = [];
    this.xg = Object.create(null)
}
;
b = g.rA.prototype;
b.Gg = function() {
    return this.bi
}
;
b.Op = function(a) {
    var c = this.bi;
    this.bi = a;
    if (a = aa(this.s))
        c && g.g.o.dc(a, c.Rf()),
        g.g.o.Fa(a, this.bi.Rf());
    for (c = 0; a = this.Yp[c]; c++)
        a.Zm();
    c = 0;
    a = Object.keys(this.xg);
    for (var d; d = a[c]; c++)
        for (var e = 0, f; f = this.xg[d][e]; e++)
            f.element.style[f.propertyName] = this.bi && Oa(this.bi, d) || "";
    g.Fc()
}
;
b.subscribe = function(a, c, d) {
    this.xg[c] || (this.xg[c] = []);
    this.xg[c].push({
        element: a,
        propertyName: d
    });
    a.style[d] = this.bi && Oa(this.bi, c) || ""
}
;
b.unsubscribe = function(a) {
    if (a)
        for (var c = Object.keys(this.xg), d = 0, e; e = c[d]; d++) {
            for (var f = this.xg[e], h = f.length - 1; 0 <= h; h--)
                f[h].element === a && f.splice(h, 1);
            this.xg[e].length || delete this.xg[e]
        }
}
;
b.I = function() {
    this.xg = this.Yp = this.bi = this.zf = null
}
;
g.me = function(a, c) {
    g.me.v.constructor.call(this, a, c);
    this.ys = !1;
    this.Be = Object.create(null);
    this.AD = this.Ap = 0;
    this.sC = this.Lx = null
}
;
g.g.object.W(g.me, g.mg);
g.me.YG = 5;
g.me.ZG = 6;
b = g.me.prototype;
b.Wv = function(a) {
    this.sC = this.zc.options.Sb && this.zc.options.Sb.fD;
    g.me.v.Wv.call(this, a);
    !this.vs && g.Touch.Bs(a) && Nc(this, a)
}
;
b.lm = function(a) {
    this.Lx = g.M.va(document, "mousedown", null, this.NI.bind(this), !0);
    this.Xs = g.M.va(document, "mousemove", null, this.Gm.bind(this), !0);
    this.Ys = g.M.va(document, "mouseup", null, this.ps.bind(this), !0);
    a.preventDefault();
    a.stopPropagation()
}
;
b.NI = function(a) {
    !this.yc() && g.Touch.Bs(a) && (Nc(this, a),
    this.ys && g.tj())
}
;
b.Gm = function(a) {
    if (this.yc())
        g.Touch.Fy(a) && g.me.v.Gm.call(this, a);
    else if (this.ys) {
        if (g.Touch.Bs(a)) {
            this.Be[g.Touch.os(a)] = Oc(this, a);
            var c = Object.keys(this.Be);
            if (this.sC && 2 === c.length) {
                c = Object.keys(this.Be);
                c = g.g.V.Bo(this.Be[c[0]], this.Be[c[1]]) / this.AD;
                if (0 < this.Ap && Infinity > this.Ap) {
                    var d = c - this.Ap;
                    d = 0 < d ? d * g.me.YG : d * g.me.ZG;
                    var e = this.zc
                      , f = g.g.rp(a, v(e), za(e));
                    e.zoom(f.x, f.y, d)
                }
                this.Ap = c;
                a.preventDefault()
            } else
                g.me.v.Gm.call(this, a)
        }
        g.tj()
    } else
        g.me.v.Gm.call(this, a)
}
;
b.ps = function(a) {
    if (g.Touch.Bs(a) && !this.yc()) {
        var c = g.Touch.os(a);
        this.Be[c] && delete this.Be[c];
        2 > Object.keys(this.Be).length && (this.Be = Object.create(null),
        this.Ap = 0)
    }
    !this.ys || this.yc() ? g.Touch.Fy(a) && g.me.v.ps.call(this, a) : (a.preventDefault(),
    a.stopPropagation(),
    this.I())
}
;
b.I = function() {
    g.me.v.I.call(this);
    this.Lx && g.M.Ra(this.Lx)
}
;
function Nc(a, c) {
    a.Be[g.Touch.os(c)] = Oc(a, c);
    var d = Object.keys(a.Be);
    2 == d.length && (a.AD = g.g.V.Bo(a.Be[d[0]], a.Be[d[1]]),
    a.ys = !0,
    c.preventDefault())
}
function Oc(a, c) {
    return a.zc ? new g.g.V(c.changedTouches ? c.changedTouches[0].pageX : c.pageX,c.changedTouches ? c.changedTouches[0].pageY : c.pageY) : null
}
;g.xA = function(a) {
    this.Ux = a;
    this.Tn = Object.create(null)
}
;
b = g.xA.prototype;
b.ax = null;
b.I = function() {
    this.Tn = this.Ux = null
}
;
b.load = function(a, c) {
    if (a.length) {
        try {
            var d = new g.g.global.Audio
        } catch (l) {
            return
        }
        for (var e, f = 0; f < a.length; f++) {
            var h = a[f]
              , k = h.match(/\.(\w+)$/);
            if (k && d.canPlayType("audio/" + k[1])) {
                e = new g.g.global.Audio(h);
                break
            }
        }
        e && e.play && (this.Tn[c] = e)
    }
}
;
b.preload = function() {
    for (var a in this.Tn) {
        var c = this.Tn[a];
        c.volume = .01;
        var d = c.play();
        void 0 !== d ? d.then(c.pause).catch(function() {}) : c.pause();
        if (g.g.userAgent.dh || g.g.userAgent.cu)
            break
    }
}
;
b.play = function(a, c) {
    var d = this.Tn[a];
    d ? (a = new Date,
    null != this.ax && a - this.ax < g.CG || (this.ax = a,
    d = g.g.userAgent.dh || g.g.userAgent.Uj ? d : d.cloneNode(),
    d.volume = void 0 === c ? 1 : c,
    d.play())) : this.Ux && this.Ux.Qi.play(a, c)
}
;
g.Vc = function(a, c, d) {
    g.Vc.v.constructor.call(this, a);
    this.ce = new (g.B.Qf(g.B.U.Uz, a, !0))(this);
    this.Ud = a.Ud || this.ce.Ud.bind(this.ce);
    this.Np = a.Np || g.Vc.BK;
    this.De = new g.Tb;
    this.Nr = g.Ml.S(this.vh);
    c && (this.Ae = c);
    d && (this.El = d);
    this.Gt = !!this.El && g.g.Uk();
    this.Qi = new g.xA(a.pc);
    this.tf = this.options.Hw ? new g.hk(this.options.Hw,a.aC) : null;
    this.Wf = new g.Ln(this);
    this.My = Object.create(null);
    this.ow = Object.create(null);
    g.$ && g.$.Ko && Pc(this, g.hc, g.$.Ko);
    g.Da && g.Da.Ko && (Pc(this, g.bm, g.Da.Ko),
    D(this, g.Da.vJ));
    this.Bc = this.options.pc ? this.options.pc.Bc : new g.rA(this,this.options.RK || g.jh.ni);
    this.Bc.Yp.push(this);
    this.Ob = g.m.S(this.options.Fp || "geras", this.Gg(), this.options.Gp);
    this.rv = null;
    this.Sm = !1;
    this.cq = [];
    this.Zv = [];
    this.qv = new g.g.sd(0,0)
}
;
g.g.object.W(g.Vc, g.Ub);
b = g.Vc.prototype;
b.ot = null;
b.ra = !0;
b.Ne = !0;
b.Vf = !1;
b.ip = !1;
b.qy = !0;
b.scrollX = 0;
b.scrollY = 0;
b.uB = null;
b.scale = 1;
b.Dx = 1;
b.VC = 0;
b.SC = 0;
b.pn = null;
b.qb = null;
b.Aa = null;
b.Qb = null;
b.wd = null;
b.Ae = null;
b.El = null;
b.Gt = !1;
b.us = !1;
b.Sw = null;
b.zC = null;
b.Qa = null;
b.pC = null;
b.Tw = !0;
b.Yh = function(a) {
    this.Wf.Yh(a)
}
;
b.Mj = function(a) {
    this.Wf.Mj(a)
}
;
b.Uo = function(a) {
    return this.Wf ? this.Wf.Uo(a) : null
}
;
b.Cm = function() {
    return this.Wf ? this.Wf.Cm() : null
}
;
b.Gg = function() {
    return this.Bc.Gg()
}
;
b.Op = function(a) {
    a || (a = g.jh.ni);
    this.Bc.Op(a)
}
;
b.Zm = function() {
    this.R && this.Ob.gy(this.R, this.Gg());
    Qc(B(this).filter(function(c) {
        return !!c.wl
    }));
    Rc(this);
    this.Qb && this.Qb.Zm();
    this.isVisible() && this.rb(!0);
    var a = new (g.h.get(g.h.Ku))(this.Gg().name,this.id);
    g.h.Ga(a)
}
;
function Qc(a) {
    for (var c = 0, d; d = a[c]; c++) {
        var e = d.wl;
        if (e && (d.$b(e),
        d.kd)) {
            var f = d.kd.s;
            if (f && B(f)) {
                var h = B(f);
                for (e = 0; d = h[e]; e++)
                    d.$b(d.wl);
                if (d = f.Je())
                    for (f = B(d.s),
                    e = 0; d = f[e]; e++)
                        d.$b(d.wl)
            }
        }
    }
}
function za(a) {
    if (a.Tw) {
        var c = v(a).getScreenCTM();
        c && (a.pC = c.inverse(),
        a.Tw = !1)
    }
    return a.pC
}
b.iq = function() {
    this.Tw = !0
}
;
b.isVisible = function() {
    return this.Ne
}
;
function gb(a, c) {
    var d = 0
      , e = 0
      , f = 1;
    if (g.g.o.containsNode(a.zb, c) || g.g.o.containsNode(a.$f, c))
        f = a.scale;
    do {
        var h = g.g.sf(c);
        if (c == a.zb || c == a.$f)
            f = 1;
        d += h.x * f;
        e += h.y * f;
        c = c.parentNode
    } while (c && c != v(a));
    return new g.g.V(d,e)
}
function Mc(a) {
    a = a.qv;
    return new g.g.sd(a.width,a.height)
}
function aa(a) {
    if (!a.Sw)
        for (var c = a.R; c; ) {
            if (-1 != (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) {
                a.Sw = c;
                break
            }
            c = c.parentNode
        }
    return a.Sw
}
b.eb = function(a) {
    this.R = g.g.o.N(g.g.F.rc, {
        "class": "blocklyWorkspace"
    }, null);
    a && (this.nd = g.g.o.N(g.g.F.Dc, {
        height: "100%",
        width: "100%",
        "class": a
    }, this.R),
    "blocklyMainBackground" == a && this.tf ? this.nd.style.fill = "url(#" + this.tf.Fm.id + ")" : this.Bc.subscribe(this.nd, "workspaceBackgroundColour", "fill"));
    this.zb = g.g.o.N(g.g.F.rc, {
        "class": "blocklyBlockCanvas"
    }, this.R);
    this.$f = g.g.o.N(g.g.F.rc, {
        "class": "blocklyBubbleCanvas"
    }, this.R);
    this.Vf || (g.M.va(this.R, "mousedown", this, this.yj, !1, !0),
    g.M.va(this.R, "wheel", this, this.RJ));
    this.options.Xo && (this.Qb = new (g.B.Qf(g.B.U.pA, this.options, !0))(this));
    this.tf && this.tf.update(this.scale);
    Sc(this);
    var c = g.B.Qf(g.B.U.ak, this.options);
    c && (a = this.Wf,
    c = new c,
    a.lf && a.lf.nf && a.lf.nf.I(),
    a.lf = c,
    a.lf && (c = a.lf,
    c = new g.m.zi(a.s,a.s.Ob.na(),c),
    a.lf.nf = c,
    a.Yh(a.lf.nf.eb())));
    this.Ob.eb(this.R, this.Gg());
    return this.R
}
;
b.I = function() {
    this.ra = !1;
    this.wd && this.wd.cancel();
    this.R && (g.g.o.removeNode(this.R),
    this.R = null);
    this.$f = this.zb = null;
    this.Qb && (this.Qb.I(),
    this.Qb = null);
    this.Aa && (this.Aa.I(),
    this.Aa = null);
    this.pn && (this.pn.I(),
    this.pn = null);
    this.qb && (this.qb.I(),
    this.qb = null);
    this.pq && (this.pq.I(),
    this.pq = null);
    this.Qi && (this.Qi.I(),
    this.Qi = null);
    this.tf && (this.tf.I(),
    this.tf = null);
    this.Ob.I();
    this.Wf && (this.Wf.I(),
    this.Wf = null);
    g.Vc.v.I.call(this);
    if (this.Bc) {
        var a = this.Bc
          , c = a.Yp.indexOf(this);
        if (0 > c)
            throw Error("Cannot unsubscribe a workspace that hasn't been subscribed.");
        a.Yp.splice(c, 1);
        this.Bc.unsubscribe(this.nd);
        this.options.pc || (this.Bc.I(),
        this.Bc = null)
    }
    this.ow = this.My = this.Nr = null;
    this.options.pc || (a = v(this)) && a.parentNode && g.g.o.removeNode(a.parentNode);
    this.ot && (g.M.Ra(this.ot),
    this.ot = null)
}
;
b.wj = function(a, c) {
    return new g.kb(this,a,c)
}
;
function Tc(a, c) {
    var d = new g.Kd({
        parentWorkspace: a,
        rtl: a.L,
        oneBasedIndex: a.options.Sh,
        horizontalLayout: a.Vd,
        renderer: a.options.Fp,
        rendererOverrides: a.options.Gp,
        move: {
            scrollbars: !0
        }
    });
    d.Gb = a.options.Gb;
    a.Aa = a.Vd ? new (g.B.Qf(g.B.U.Zt, a.options, !0))(d) : new (g.B.Qf(g.B.U.Pq, a.options, !0))(d);
    a.Aa.Ri = !1;
    a.Aa.s.rb(!0);
    return a.Aa.eb(c)
}
b.Je = function(a) {
    return this.Aa || a ? this.Aa : this.Qb ? this.Qb.Je() : null
}
;
function Ga(a) {
    a.qy && a.ra && (a.qb && a.qb.resize(),
    a.iq())
}
b.resize = function() {
    this.Qb && this.Qb.position();
    this.Aa && this.Aa.position();
    var a = ia(this.De, g.Tb.bc.wu);
    var c = this.ce;
    c = {
        YD: zb(c),
        nr: Lc(c),
        OD: Kc(c)
    };
    for (var d = [], e = 0, f; f = a[e]; e++)
        f.position(c, d),
        (f = f.Bm()) && d.push(f);
    this.qb && this.qb.resize();
    this.iq();
    Sc(this)
}
;
function Hb(a) {
    var c = g.g.zI();
    g.g.V.qf(a.zC, c) || (a.zC = c,
    a.iq(),
    Sc(a))
}
function Uc(a, c, d) {
    var e = v(a);
    c && (a.qv.width = c,
    e.sH = c);
    d && (a.qv.height = d,
    e.rH = d)
}
function v(a) {
    if (!a.rv)
        for (var c = a.R; c; ) {
            if ("svg" == c.tagName) {
                a.rv = c;
                break
            }
            c = c.parentNode
        }
    return a.rv
}
function ja(a) {
    if (g.h.isEnabled()) {
        var c = a.scale
          , d = -a.scrollY
          , e = -a.scrollX;
        if (!(c == a.Dx && 1 > Math.abs(d - a.VC) && 1 > Math.abs(e - a.SC))) {
            var f = new (g.h.get(g.h.Xn))(d,e,c,a.id,a.Dx);
            a.Dx = c;
            a.VC = d;
            a.SC = e;
            g.h.Ga(f)
        }
    }
}
b.translate = function(a, c) {
    if (this.Gt && this.us)
        this.El.zl(a, c);
    else {
        var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
        this.zb.setAttribute("transform", d);
        this.$f.setAttribute("transform", d)
    }
    if (this.Ae) {
        d = this.Ae;
        var e = this.scale;
        d.Jj = e;
        var f = a.toFixed(0)
          , h = c.toFixed(0);
        d.TA.x = parseInt(f, 10);
        d.TA.y = parseInt(h, 10);
        d.Bg.setAttribute("transform", "translate(" + f + "," + h + ") scale(" + e + ")")
    }
    this.tf && this.tf.moveTo(a, c);
    ja(this)
}
;
function Ba(a) {
    if (a.Gt) {
        a.us = !1;
        var c = a.El.Dw();
        a.El.Er(a.R);
        c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
        a.zb.setAttribute("transform", c);
        a.$f.setAttribute("transform", c)
    }
}
function Aa(a) {
    if (a.Gt && !a.us) {
        a.us = !0;
        var c = a.zb.previousSibling
          , d = parseInt(v(a).getAttribute("width"), 10)
          , e = parseInt(v(a).getAttribute("height"), 10)
          , f = g.g.sf(a.zb)
          , h = a.El
          , k = a.zb
          , l = a.$f
          , m = a.scale;
        if (h.Eb.childNodes.length)
            throw Error("Already dragging a block.");
        h.by = c;
        k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        h.Eb.setAttribute("width", d);
        h.Eb.setAttribute("height", e);
        h.Eb.appendChild(k);
        h.Eb.appendChild(l);
        h.Eb.style.display = "block";
        a.El.zl(f.x, f.y)
    }
}
b.Ih = function() {
    var a = this.Ud();
    return a ? a.Ic / this.scale : 0
}
;
b.rb = function(a) {
    this.Ne = a;
    if (this.R)
        if (this.qb && this.qb.vl(a),
        this.Je() && this.Je().vl(a),
        v(this).style.display = a ? "block" : "none",
        this.Qb && this.Qb.rb(a),
        a) {
            a = B(this);
            for (var c = a.length - 1; 0 <= c; c--)
                a[c].lp();
            this.Ia();
            this.Qb && this.Qb.position()
        } else
            g.Fc(!0)
}
;
b.Ia = function() {
    for (var a = B(this), c = a.length - 1; 0 <= c; c--)
        a[c].Ia(!1);
    if (this.wd)
        for (a = this.wd.Dm(),
        c = 0; c < a.length; c++)
            a[c].Ia(!1);
    c = this.Wf;
    c.s.Sm && c.xh && c.s.Cm().draw()
}
;
b.ct = function(a) {
    if (this.ra && a.tagName && !(a.getElementsByTagName("block").length >= Xa(this)))
        if (this.wd && this.wd.cancel(),
        "comment" == a.tagName.toLowerCase()) {
            g.h.disable();
            try {
                var c = g.hm.Am(a)
                  , d = parseInt(a.getAttribute("x"), 10)
                  , e = parseInt(a.getAttribute("y"), 10);
                isNaN(d) || isNaN(e) || (this.L && (d = -d),
                c.moveBy(d + 50, e + 50))
            } finally {
                g.h.enable()
            }
            g.h.isEnabled() && g.yA.OO(c);
            c.select()
        } else {
            g.h.disable();
            try {
                var f = g.P.Ck(a, this)
                  , h = parseInt(a.getAttribute("x"), 10)
                  , k = parseInt(a.getAttribute("y"), 10);
                if (!isNaN(h) && !isNaN(k)) {
                    this.L && (h = -h);
                    do {
                        a = !1;
                        var l = B(this);
                        c = 0;
                        for (var m; m = l[c]; c++) {
                            var n = m.jb();
                            if (1 >= Math.abs(h - n.x) && 1 >= Math.abs(k - n.y)) {
                                a = !0;
                                break
                            }
                        }
                        if (!a) {
                            var p = f.Sf(!1);
                            c = 0;
                            for (var r; r = p[c]; c++)
                                if (r.closest(g.Md, new g.g.V(h,k)).connection) {
                                    a = !0;
                                    break
                                }
                        }
                        a && (h = this.L ? h - g.Md : h + g.Md,
                        k += 2 * g.Md)
                    } while (a);
                    f.moveBy(h, k)
                }
            } finally {
                g.h.enable()
            }
            g.h.isEnabled() && !f.Pa && g.h.Ga(new (g.h.get(g.h.ji))(f));
            f.select()
        }
}
;
function Rc(a) {
    (a = a.Vf ? a.Qa : a) && !a.wd && a.Qb && a.Qb.Je() && (a = a.Qb,
    a.Ab && a.Ab.Oh() && a.Ab.cj.length && a.Aa.show(a.Ab.cj))
}
b.Hj = function(a, c) {
    g.Vc.v.Hj.call(this, a, c);
    Rc(this)
}
;
b.Bh = function(a) {
    g.Vc.v.Bh.call(this, a);
    Rc(this)
}
;
b.jf = function(a, c, d) {
    a = g.Vc.v.jf.call(this, a, c, d);
    Rc(this);
    return a
}
;
function Sc(a) {
    var c = ia(a.De, g.Tb.bc.Kq);
    a.Zv = [];
    for (var d = 0, e; e = c[d]; d++) {
        var f = e.uw();
        f && a.Zv.push({
            zk: e,
            CH: f
        })
    }
}
function qb(a, c) {
    for (var d = 0, e; e = a.Zv[d]; d++)
        if (e.CH.contains(c.clientX, c.clientY))
            return e.zk;
    return null
}
b.yj = function(a) {
    var c = this.Eh(a);
    c && Lb(c, a, this)
}
;
b.Tp = function(a, c) {
    a = g.g.rp(a, v(this), za(this));
    a.x /= this.scale;
    a.y /= this.scale;
    this.uB = g.g.V.Ao(c, a)
}
;
b.yc = function() {
    return null != this.wd && this.wd.yc()
}
;
b.Gc = function() {
    return this.options.Bd && !!this.options.Bd.scrollbars || this.options.Bd && this.options.Bd.sn || this.options.Bd && this.options.Bd.Dh || this.options.Sb && this.options.Sb.sn || this.options.Sb && this.options.Sb.fD
}
;
function Cb(a) {
    var c = !!a.qb;
    return a.Gc() && (!c || c && !!a.qb.Fb)
}
function Db(a) {
    var c = !!a.qb;
    return a.Gc() && (!c || c && !!a.qb.sb)
}
b.RJ = function(a) {
    if (g.mg.Qk())
        a.preventDefault(),
        a.stopPropagation();
    else {
        var c = this.options.Sb && this.options.Sb.sn
          , d = this.options.Bd && this.options.Bd.sn;
        if (c || d) {
            var e = g.g.SB(a);
            !c || !a.ctrlKey && d ? (c = this.scrollX - e.x,
            d = this.scrollY - e.y,
            a.shiftKey && !e.x && (c = this.scrollX - e.y,
            d = this.scrollY),
            this.scroll(c, d)) : (e = -e.y / 50,
            c = g.g.rp(a, v(this), za(this)),
            this.zoom(c.x, c.y, e));
            a.preventDefault()
        }
    }
}
;
function Da(a) {
    a = [].concat(a.cq);
    if (!a.length)
        return new g.g.Rect(0,0,0,0);
    for (var c = a[0].Bm(), d = 1; d < a.length; d++) {
        var e = a[d];
        e.zd && e.zd() || (e = e.Bm(),
        e.top < c.top && (c.top = e.top),
        e.bottom > c.bottom && (c.bottom = e.bottom),
        e.left < c.left && (c.left = e.left),
        e.right > c.right && (c.right = e.right))
    }
    return c
}
b.Pp = function(a) {
    if (!this.options.readOnly && !this.Vf) {
        var c = oc(g.Ua.Od.ne, {
            u: this
        });
        this.GH && this.GH(c, a);
        g.Za.show(a, c, this.L)
    }
}
;
function ya(a) {
    if (a.options.pc)
        ya(a.options.pc);
    else {
        g.jp = a;
        document.activeElement && document.activeElement.blur && document.activeElement.blur();
        try {
            v(a).focus({
                preventScroll: !0
            })
        } catch (c) {
            try {
                v(a).parentNode.setActive()
            } catch (d) {
                v(a).parentNode.focus({
                    preventScroll: !0
                })
            }
        }
    }
}
b.zoom = function(a, c, d) {
    d = Math.pow(this.options.Sb.uD, d);
    var e = this.scale * d;
    if (this.scale != e) {
        e > this.options.Sb.np ? d = this.options.Sb.np / this.scale : e < this.options.Sb.pp && (d = this.options.Sb.pp / this.scale);
        var f = this.zb.getCTM()
          , h = v(this).createSVGPoint();
        h.x = a;
        h.y = c;
        h = h.matrixTransform(f.inverse());
        a = h.x;
        c = h.y;
        f = f.translate(a * (1 - d), c * (1 - d)).scale(d);
        this.scrollX = f.e;
        this.scrollY = f.f;
        this.setScale(e)
    }
}
;
function Ha(a, c) {
    var d = a.Ud();
    if (a.Aa) {
        var e = d.FD ? d.FD / 2 : 0;
        d = d.ED ? d.ED / 2 : 0
    } else
        e = d.Ic / 2 + d.ud,
        d = d.Rc / 2 + d.Pd;
    a.zoom(e, d, c)
}
b.gI = function() {
    g.g.o.dc(this.zb, "blocklyCanvasTransitioning");
    g.g.o.dc(this.$f, "blocklyCanvasTransitioning")
}
;
b.setScale = function(a) {
    this.options.Sb.np && a > this.options.Sb.np ? a = this.options.Sb.np : this.options.Sb.pp && a < this.options.Sb.pp && (a = this.options.Sb.pp);
    this.scale = a;
    g.Fc(!1);
    this.Aa && (this.Aa.ey(),
    Sc(this));
    this.tf && this.tf.update(this.scale);
    a = this.Ud();
    this.scrollX -= a.ud;
    this.scrollY -= a.Pd;
    a.Hf += a.ud;
    a.If += a.Pd;
    this.scroll(this.scrollX, this.scrollY);
    if (this.qb)
        if (this.Aa) {
            var c = this.qb;
            c.Fb && ta(c.Fb, a);
            c.sb && va(c.sb, a)
        } else
            c = this.qb,
            c.Fb && ua(c.Fb, a),
            c.sb && wa(c.sb, a)
}
;
function Vc(a) {
    return a.options.pc ? Vc(a.options.pc) : a.scale
}
b.scroll = function(a, c) {
    g.Fc(!0);
    var d = this.Ud();
    a = Math.min(a, -d.scrollLeft);
    c = Math.min(c, -d.scrollTop);
    var e = d.scrollTop + Math.max(0, d.scrollHeight - d.Rc);
    a = Math.max(a, -(d.scrollLeft + Math.max(0, d.scrollWidth - d.Ic)));
    c = Math.max(c, -e);
    this.scrollX = a;
    this.scrollY = c;
    this.qb && this.qb.set(-(a + d.scrollLeft), -(c + d.scrollTop), !1);
    a += d.ud;
    c += d.Pd;
    this.translate(a, c)
}
;
g.Vc.BK = function(a) {
    var c = this.Ud();
    "number" == typeof a.x && (this.scrollX = -(c.scrollLeft + (c.scrollWidth - c.Ic) * a.x));
    "number" == typeof a.y && (this.scrollY = -(c.scrollTop + (c.scrollHeight - c.Rc) * a.y));
    this.translate(this.scrollX + c.ud, this.scrollY + c.Pd)
}
;
b = g.Vc.prototype;
b.Td = function(a) {
    return g.Vc.v.Td.call(this, a)
}
;
b.xc = function(a) {
    return g.Vc.v.xc.call(this, a)
}
;
b.qr = function(a) {
    this.cq.push(a);
    g.Vc.v.qr.call(this, a)
}
;
b.jt = function(a) {
    g.g.rr(this.cq, a);
    g.Vc.v.jt.call(this, a)
}
;
b.Yc = function(a) {
    var c = !this.qy && a;
    this.qy = a;
    c && Ga(this)
}
;
b.clear = function() {
    this.Yc(!1);
    g.Vc.v.clear.call(this);
    this.cq = [];
    this.Yc(!0)
}
;
function Wc(a, c) {
    if ("function" != typeof c)
        throw TypeError("Button callbacks must be functions.");
    a.ow.CREATE_VARIABLE = c
}
function da(a, c) {
    return (a = a.ow[c]) ? a : null
}
function Pc(a, c, d) {
    if ("function" != typeof d)
        throw TypeError("Toolbox category callbacks must be functions.");
    a.My[c] = d
}
b.Eh = function(a) {
    var c = "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
      , d = this.wd;
    return d ? c && d.Kk ? (console.warn("Tried to start the same gesture twice."),
    d.cancel(),
    null) : d : c ? this.wd = new g.me(a,this) : null
}
;
function Ec(a) {
    a.wd && a.wd.cancel()
}
;g.Sk = function(a, c) {
    g.vH();
    "string" == typeof a && (a = document.getElementById(a) || document.querySelector(a));
    if (!a || !g.g.o.containsNode(document, a))
        throw Error("Error: container is not in current document.");
    c = new g.Kd(c || {});
    var d = document.createElement("div");
    d.className = "injectionDiv";
    d.tabIndex = 0;
    g.g.za.ge(d, g.g.za.State.GF, g.i.WORKSPACE_ARIA_LABEL);
    a.appendChild(d);
    a = g.Fe(d, c);
    var e = new g.iz(d)
      , f = new g.zA(d)
      , h = g.MH(a, c, e, f);
    g.YI(h);
    g.jp = h;
    g.ln(h);
    d.addEventListener("focusin", function() {
        g.jp = h
    });
    return h
}
;
g.Fe = function(a, c) {
    a.setAttribute("dir", "LTR");
    g.Uc.Sk(c.OI, c.Dj);
    a = g.g.o.N(g.g.F.Ii, {
        xmlns: g.g.o.Un,
        "xmlns:html": g.g.o.ik,
        "xmlns:xlink": g.g.o.Mf,
        version: "1.1",
        "class": "blocklySvg",
        tabindex: "0"
    }, a);
    var d = g.g.o.N(g.g.F.qz, {}, a);
    c.Hw = g.hk.eb(String(Math.random()).substring(2), c.aC, d);
    return a
}
;
g.MH = function(a, c, d, e) {
    c.pc = null;
    c = new g.Vc(c,d,e);
    d = c.options;
    c.scale = d.Sb.DD;
    a.appendChild(c.eb("blocklyMainBackground"));
    g.g.o.Fa(aa(c), c.Ob.Rf());
    g.g.o.Fa(aa(c), c.Gg().Rf());
    !d.Xo && d.Kg && (e = Tc(c, g.g.F.Ii),
    g.g.o.Tk(e, a));
    if (d.eC) {
        if (!g.Oc)
            throw Error("Missing require for Blockly.Trashcan");
        c.pn = new g.Oc(c);
        e = c.pn.eb();
        c.R.insertBefore(e, c.zb)
    }
    if (d.Sb && d.Sb.controls) {
        if (!g.Xu)
            throw Error("Missing require for Blockly.ZoomControls");
        c.pq = new g.Xu(c);
        d = c.pq.eb();
        c.R.appendChild(d)
    }
    c.Bc.subscribe(a, "workspaceBackgroundColour", "background-color");
    c.translate(0, 0);
    D(c, g.qH(c));
    g.ln(c);
    g.ga.eb();
    g.G.eb();
    g.K.eb();
    return c
}
;
g.jI = function(a, c) {
    var d = null;
    switch (c.type) {
    case g.h.ji:
    case g.h.ki:
        (d = a.Td(c.ob)) && (d = d.Tf());
        break;
    case g.h.Eq:
    case g.h.An:
        d = a.Kr[c.wg] || null
    }
    return d
}
;
g.MA = function(a) {
    var c = a.ce;
    if (!(Cb(c.s) && Db(c.s) || a.yc())) {
        c = c.fj(!0);
        for (var d = [].concat(a.cq), e = 0, f; f = d[e]; e++)
            g.ov(a, c, f)
    }
}
;
g.qH = function(a) {
    return function(c) {
        var d = a.ce;
        if (!(Cb(d.s) && Db(d.s) || a.yc()))
            if (-1 !== g.h.rE.indexOf(c.type)) {
                d = d.fj(!0);
                var e = g.jI(a, c);
                if (e) {
                    var f = g.h.oc();
                    g.h.la(c.group);
                    g.ov(a, d, e) && !c.group && console.warn("Moved object in bounds but there was no event group. This may break undo.");
                    null !== f && g.h.la(f)
                }
            } else
                c.type === g.h.Xn && c.scale > c.tp && g.MA(a)
    }
}
;
g.ov = function(a, c, d) {
    var e = d.Bm()
      , f = g.g.Sa.ug(c.top, e.top, c.top + c.height - (e.bottom - e.top)) - e.top
      , h = c.left;
    c = c.left + c.width - (e.right - e.left);
    a.L ? h = Math.min(c, h) : c = Math.max(h, c);
    return (a = g.g.Sa.ug(h, e.left, c) - e.left) || f ? (d.moveBy(a, f),
    !0) : !1
}
;
g.YI = function(a) {
    var c = a.options
      , d = v(a);
    g.M.va(d.parentNode, "contextmenu", null, function(f) {
        g.g.zs(f) || f.preventDefault()
    });
    d = g.M.va(window, "resize", null, function() {
        g.Fc(!0);
        g.ln(a);
        g.MA(a)
    });
    a.ot = d;
    g.Sk.lH();
    if (c.Kg) {
        d = a.Qb;
        var e = a.Je(!0);
        d ? d.S() : e && (e.S(a),
        e.show(c.Kg),
        "function" == typeof e.uy && e.uy())
    }
    c.eC && a.pn.S();
    c.Sb && c.Sb.controls && a.pq.S();
    c.Bd && c.Bd.scrollbars ? (a.qb = new g.Hu(a,!0 === c.Bd.scrollbars || !!c.Bd.scrollbars.Zo,!0 === c.Bd.scrollbars || !!c.Bd.scrollbars.vertical,"blocklyMainWorkspaceScrollbar"),
    a.qb.resize()) : a.Np({
        x: .5,
        y: .5
    });
    c.SI && g.Sk.iJ(c.Dj, a)
}
;
g.Sk.lH = function() {
    g.bI || (g.M.va(document, "scroll", null, function() {
        for (var a = g.Ub.getAll(), c = 0, d; d = a[c]; c++)
            d.iq && d.iq()
    }),
    g.M.va(document, "keydown", null, g.up),
    g.M.bind(document, "touchend", null, g.tj),
    g.M.bind(document, "touchcancel", null, g.tj),
    g.g.userAgent.dh && g.M.va(window, "orientationchange", document, function() {
        g.ln(g.dj())
    }));
    g.bI = !0
}
;
g.Sk.iJ = function(a, c) {
    function d() {
        for (; f.length; )
            g.M.Ra(f.pop());
        e.preload()
    }
    var e = c.Qi;
    e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    e.load([a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
    var f = [];
    f.push(g.M.va(document, "mousemove", null, d, !0));
    f.push(g.M.va(document, "touchstart", null, d, !0))
}
;
g.Jd = function(a, c) {
    this.WD = c || "";
    this.sD = Object.create(null);
    if (a)
        for (a = a.split(","),
        c = 0; c < a.length; c++)
            this.sD[a[c]] = !0;
    this.reset()
}
;
g.Jd.Ut = "DEVELOPER_VARIABLE";
g.Jd.prototype.reset = function() {
    this.zg = Object.create(null);
    this.kB = Object.create(null);
    this.Ta = null
}
;
g.Jd.prototype.By = function(a) {
    this.Ta = a
}
;
g.Jd.prototype.gd = function(a, c) {
    var d = a;
    c == g.hc && (this.Ta ? a = (a = this.Ta.Uf(a)) ? a.name : null : (console.warn("Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the following code in your generator's init() function:\nBlockly.YourGeneratorName.nameDB_.setVariableMap(workspace.getVariableMap());"),
    a = null),
    a && (d = a));
    a = d.toLowerCase();
    var e = c == g.hc || c == g.Jd.Ut ? this.WD : "";
    c in this.zg || (this.zg[c] = Object.create(null));
    var f = this.zg[c];
    if (a in f)
        return e + f[a];
    c = M(this, d, c);
    f[a] = c.substr(e.length);
    return c
}
;
function M(a, c, d) {
    c ? (c = encodeURI(c.replace(/ /g, "_")).replace(/[^\w]/g, "_"),
    -1 != "0123456789".indexOf(c[0]) && (c = "my_" + c)) : c = g.i.UNNAMED_KEY || "unnamed";
    for (var e = ""; a.kB[c + e] || c + e in a.sD; )
        e = e ? e + 1 : 2;
    c += e;
    a.kB[c] = !0;
    return (d == g.hc || d == g.Jd.Ut ? a.WD : "") + c
}
g.Jd.qf = function(a, c) {
    return a.toLowerCase() == c.toLowerCase()
}
;
g.Da = {};
g.Da.nu = g.bm;
g.Da.pz = "x";
g.Da.FA = function(a) {
    var c = Wa(a, "procedures_defnoreturn").map(function(d) {
        return d.ej()
    });
    a = Wa(a, "procedures_defreturn").map(function(d) {
        return d.ej()
    });
    c.sort(g.Da.nD);
    a.sort(g.Da.nD);
    return [c, a]
}
;
g.Da.nD = function(a, c) {
    return a[0].localeCompare(c[0], void 0, {
        sensitivity: "base"
    })
}
;
g.Da.fs = function(a, c) {
    if (c.Xb)
        return a;
    for (a = a || g.i.UNNAMED_KEY || "unnamed"; !g.Da.bJ(a, c.u, c); ) {
        var d = a.match(/^(.*?)(\d+)$/);
        a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2"
    }
    return a
}
;
g.Da.bJ = function(a, c, d) {
    return !g.Da.dJ(a, c, d)
}
;
g.Da.dJ = function(a, c, d) {
    c = B(c);
    for (var e = 0; e < c.length; e++)
        if (c[e] != d && c[e].ej) {
            var f = c[e].ej();
            if (g.Jd.qf(f[0], a))
                return !0
        }
    return !1
}
;
g.Da.kt = function(a) {
    a = a.trim();
    var c = g.Da.fs(a, this.aa())
      , d = this.getValue();
    if (d != a && d != c) {
        a = B(this.aa().u);
        for (var e = 0; e < a.length; e++)
            a[e].$m && a[e].$m(d, c)
    }
    return c
}
;
g.Da.Ko = function(a) {
    function c(h, k) {
        for (var l = 0; l < h.length; l++) {
            var m = h[l][0]
              , n = h[l][1]
              , p = g.g.xml.createElement("block");
            p.setAttribute("type", k);
            p.setAttribute("gap", 16);
            var r = g.g.xml.createElement("mutation");
            r.setAttribute("name", m);
            p.appendChild(r);
            for (m = 0; m < n.length; m++) {
                var y = g.g.xml.createElement("arg");
                y.setAttribute("name", n[m]);
                r.appendChild(y)
            }
            d.push(p)
        }
    }
    var d = [];
    if (g.O.procedures_defnoreturn) {
        var e = g.g.xml.createElement("block");
        e.setAttribute("type", "procedures_defnoreturn");
        e.setAttribute("gap", 16);
        var f = g.g.xml.createElement("field");
        f.setAttribute("name", "NAME");
        f.appendChild(g.g.xml.createTextNode(g.i.PROCEDURES_DEFNORETURN_PROCEDURE));
        e.appendChild(f);
        d.push(e)
    }
    g.O.procedures_defreturn && (e = g.g.xml.createElement("block"),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    f = g.g.xml.createElement("field"),
    f.setAttribute("name", "NAME"),
    f.appendChild(g.g.xml.createTextNode(g.i.PROCEDURES_DEFRETURN_PROCEDURE)),
    e.appendChild(f),
    d.push(e));
    g.O.procedures_ifreturn && (e = g.g.xml.createElement("block"),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    d.push(e));
    d.length && d[d.length - 1].setAttribute("gap", 24);
    a = g.Da.FA(a);
    c(a[0], "procedures_callnoreturn");
    c(a[1], "procedures_callreturn");
    return d
}
;
g.Da.SD = function(a) {
    for (var c = [], d = Wa(a, "procedures_mutatorarg"), e = 0, f; f = d[e]; e++)
        c.push(C(f, "NAME"));
    d = g.g.xml.createElement("xml");
    e = g.g.xml.createElement("block");
    e.setAttribute("type", "procedures_mutatorarg");
    f = g.g.xml.createElement("field");
    f.setAttribute("name", "NAME");
    c = g.g.xml.createTextNode(g.$.EB(g.Da.pz, c));
    f.appendChild(c);
    e.appendChild(f);
    d.appendChild(e);
    if (c = g.g.Y.Dv(d)) {
        if (!a.options.Kg)
            throw Error("Existing toolbox is null.  Can't create new toolbox.");
        if (g.g.Y.Xo(c)) {
            if (!a.Qb)
                throw Error("Existing toolbox has no categories.  Can't change mode.");
            a.options.Kg = c;
            a.Qb.Ia(c)
        } else {
            if (!a.Aa)
                throw Error("Existing toolbox has categories.  Can't change mode.");
            a.options.Kg = c;
            a.Aa.show(c)
        }
    } else if (a.options.Kg)
        throw Error("Can't nullify an existing toolbox.");
}
;
g.Da.vJ = function(a) {
    if (a.type == g.h.Vj && "mutator" === a.mv && a.Pm) {
        a = g.Ub.Oo(a.Sc).Td(a.ob);
        var c = a.type;
        if ("procedures_defnoreturn" == c || "procedures_defreturn" == c)
            a = a.kd.s,
            g.Da.SD(a),
            D(a, g.Da.uJ)
    }
}
;
g.Da.uJ = function(a) {
    a.type != g.h.ji && a.type != g.h.vq && a.type != g.h.eg || g.Da.SD(g.Ub.Oo(a.Sc))
}
;
g.Da.tI = function(a, c) {
    var d = [];
    c = B(c);
    for (var e = 0; e < c.length; e++)
        if (c[e].Ke) {
            var f = c[e].Ke();
            f && g.Jd.qf(f, a) && d.push(c[e])
        }
    return d
}
;
g.Da.sp = function(a) {
    var c = g.h.$a
      , d = a.ej()[0]
      , e = a.pb(!0);
    a = g.Da.tI(d, a.u);
    d = 0;
    for (var f; f = a[d]; d++) {
        var h = f.pb();
        h = h && g.P.pe(h);
        f.Wb(e);
        var k = f.pb();
        k = k && g.P.pe(k);
        h != k && (g.h.$a = !1,
        g.h.Ga(new (g.h.get(g.h.eg))(f,"mutation",null,h,k)),
        g.h.$a = c)
    }
}
;
g.Da.Qo = function(a, c) {
    c = B(c);
    for (var d = 0; d < c.length; d++)
        if (c[d].ej) {
            var e = c[d].ej();
            if (e && g.Jd.qf(e[0], a))
                return c[d]
        }
    return null
}
;
g.Nc = function() {
    g.Nc.B = this;
    this.Bf = Object.create(null);
    this.Rm = Object.create(null)
}
;
g.Nc.Js = {
    Shift: g.g.ea.dr,
    Control: g.g.ea.$j,
    Alt: g.g.ea.Hl,
    Meta: g.g.ea.Ul
};
g.Nc.prototype.register = function(a, c) {
    if (this.Bf[a.name] && !c)
        throw Error('Shortcut with name "' + a.name + '" already exists.');
    this.Bf[a.name] = a
}
;
g.Nc.prototype.unregister = function(a) {
    if (!this.Bf[a])
        return console.warn('Keyboard shortcut with name "' + a + '" not found.'),
        !1;
    for (var c in this.Rm) {
        var d = c
          , e = this.Rm[d]
          , f = e.indexOf(a);
        -1 < f && (e.splice(f, 1),
        0 == e.length && delete this.Rm[d])
    }
    delete this.Bf[a];
    return !0
}
;
function O(a, c) {
    var d = g.Nc.B;
    a = String(a);
    var e = d.Rm[a];
    if (e)
        throw Error('Shortcut with name "' + c + '" collides with shortcuts ' + e.toString());
    d.Rm[a] = [c]
}
g.Nc.prototype.up = function(a, c) {
    var d = "";
    for (e in g.Nc.Js)
        c.getModifierState(e) && ("" != d && (d += "+"),
        d += e);
    "" != d && c.keyCode ? d = d + "+" + c.keyCode : c.keyCode && (d = c.keyCode.toString());
    d = this.Rm[d] || [];
    if (!d)
        return !1;
    var e = 0;
    for (var f; f = d[e]; e++)
        if (f = this.Bf[f],
        (!f.qc || f.qc(a)) && f.cb && f.cb(a, c, f))
            return !0;
    return !1
}
;
function P(a, c) {
    var d = "";
    if (c) {
        for (var e = g.g.object.values(g.Nc.Js), f = 0, h; h = c[f]; f++)
            if (0 > e.indexOf(h))
                throw Error(h + " is not a valid modifier key.");
        for (var k in g.Nc.Js)
            -1 < c.indexOf(g.Nc.Js[k]) && ("" != d && (d += "+"),
            d += k)
    }
    "" != d && a ? d = d + "+" + a : a && (d = a.toString());
    return d
}
new g.Nc;
g.Yn = function(a, c, d, e) {
    this.u = a;
    this.name = c;
    this.type = d || "";
    this.Nw = e || g.g.Dg();
    g.h.Ga(new (g.h.get(g.h.Wn))(this))
}
;
g.Yn.prototype.La = function() {
    return this.Nw
}
;
g.Yn.XA = function(a, c) {
    return a.name.localeCompare(c.name, void 0, {
        sensitivity: "base"
    })
}
;
g.$ = {};
g.$.nu = g.hc;
g.$.Zu = function(a) {
    var c = B(a);
    a = Object.create(null);
    for (var d = 0; d < c.length; d++) {
        var e = c[d].Gh();
        if (e)
            for (var f = 0; f < e.length; f++) {
                var h = e[f]
                  , k = h.La();
                k && (a[k] = h)
            }
    }
    c = [];
    for (k in a)
        c.push(a[k]);
    return c
}
;
g.$.az = {};
g.$.aH = function(a) {
    a = B(a);
    for (var c = Object.create(null), d = 0, e; e = a[d]; d++) {
        var f = e.RO;
        !f && e.yI && (f = e.yI,
        g.$.az[e.type] || (console.warn("Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" + e.type + "')"),
        g.$.az[e.type] = !0));
        if (f)
            for (e = f(),
            f = 0; f < e.length; f++)
                c[e[f]] = !0
    }
    return Object.keys(c)
}
;
g.$.Ko = function(a) {
    var c = []
      , d = document.createElement("button");
    d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
    d.setAttribute("callbackKey", "CREATE_VARIABLE");
    Wc(a, function(e) {
        g.$.hB(e.Bt)
    });
    c.push(d);
    a = g.$.nI(a);
    return c = c.concat(a)
}
;
g.$.nI = function(a) {
    a = a.Vo("");
    var c = [];
    if (0 < a.length) {
        var d = a[a.length - 1];
        if (g.O.variables_set) {
            var e = g.g.xml.createElement("block");
            e.setAttribute("type", "variables_set");
            e.setAttribute("gap", g.O.math_change ? 8 : 24);
            e.appendChild(g.$.No(d));
            c.push(e)
        }
        g.O.math_change && (e = g.g.xml.createElement("block"),
        e.setAttribute("type", "math_change"),
        e.setAttribute("gap", g.O.variables_get ? 20 : 8),
        e.appendChild(g.$.No(d)),
        d = g.P.Ff('<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'),
        e.appendChild(d),
        c.push(e));
        if (g.O.variables_get) {
            a.sort(g.Yn.XA);
            d = 0;
            for (var f; f = a[d]; d++)
                e = g.g.xml.createElement("block"),
                e.setAttribute("type", "variables_get"),
                e.setAttribute("gap", 8),
                e.appendChild(g.$.No(f)),
                c.push(e)
        }
    }
    return c
}
;
g.$.tA = "ijkmnopqrstuvwxyzabcdefgh";
g.$.pI = function(a) {
    return g.$.EB(g.$.tA.charAt(0), a.qw())
}
;
g.$.EB = function(a, c) {
    if (!c.length)
        return a;
    for (var d = g.$.tA, e = "", f = d.indexOf(a); ; ) {
        for (var h = !1, k = 0; k < c.length; k++)
            if (c[k].toLowerCase() == a) {
                h = !0;
                break
            }
        if (!h)
            return a;
        f++;
        f == d.length && (f = 0,
        e = Number(e) + 1);
        a = d.charAt(f) + e
    }
}
;
g.$.hB = function(a, c, d) {
    function e(h) {
        g.$.oD(g.i.NEW_VARIABLE_TITLE, h, function(k) {
            if (k) {
                var l = g.$.xJ(k, a);
                if (l) {
                    if (l.type == f)
                        var m = g.i.VARIABLE_ALREADY_EXISTS.replace("%1", l.name);
                    else
                        m = g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE,
                        m = m.replace("%1", l.name).replace("%2", l.type);
                    g.alert(m, function() {
                        e(k)
                    })
                } else
                    a.jf(k, f),
                    c && c(k)
            } else
                c && c(null)
        })
    }
    var f = d || "";
    e("")
}
;
g.$.jf = g.$.hB;
g.$.nt = function(a, c) {
    function d(e) {
        var f = g.i.RENAME_VARIABLE_TITLE.replace("%1", c.name);
        g.$.oD(f, e, function(h) {
            if (h) {
                var k = g.$.yJ(h, c.type, a);
                k ? (k = g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace("%1", k.name).replace("%2", k.type),
                g.alert(k, function() {
                    d(h)
                })) : a.Hj(c.La(), h)
            }
        })
    }
    d("")
}
;
g.$.oD = function(a, c, d) {
    g.prompt(a, c, function(e) {
        e && (e = e.replace(/[\s\xa0]+/g, " ").trim(),
        e == g.i.RENAME_VARIABLE || e == g.i.NEW_VARIABLE) && (e = null);
        d(e)
    })
}
;
g.$.yJ = function(a, c, d) {
    d = d.Ta.Gk();
    a = a.toLowerCase();
    for (var e = 0, f; f = d[e]; e++)
        if (f.name.toLowerCase() == a && f.type != c)
            return f;
    return null
}
;
g.$.xJ = function(a, c) {
    c = c.Ta.Gk();
    a = a.toLowerCase();
    for (var d = 0, e; e = c[d]; d++)
        if (e.name.toLowerCase() == a)
            return e;
    return null
}
;
g.$.No = function(a) {
    var c = g.g.xml.createElement("field");
    c.setAttribute("name", "VAR");
    c.setAttribute("id", a.La());
    c.setAttribute("variabletype", a.type);
    a = g.g.xml.createTextNode(a.name);
    c.appendChild(a);
    return c
}
;
g.$.ns = function(a, c, d, e) {
    var f = g.$.hd(a, c, d, e);
    f || (f = g.$.NH(a, c, d, e));
    return f
}
;
g.$.hd = function(a, c, d, e) {
    var f = a.Ej
      , h = null;
    if (c && (h = a.Uf(c),
    !h && f && (h = f.Uf(c)),
    h))
        return h;
    if (d) {
        if (void 0 == e)
            throw Error("Tried to look up a variable by name without a type");
        h = a.hd(d, e);
        !h && f && (h = f.hd(d, e))
    }
    return h
}
;
g.$.NH = function(a, c, d, e) {
    var f = a.Ej;
    d || (d = g.$.pI(a.Vf ? a.Qa : a));
    return f ? f.jf(d, e, c) : a.jf(d, e, c)
}
;
g.$.FB = function(a, c) {
    a = a.Gk();
    var d = [];
    if (c.length != a.length)
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            -1 == c.indexOf(f) && d.push(f)
        }
    return d
}
;
g.VERSION = "uncompiled";
g.jp = null;
g.selected = null;
g.zm = [];
g.pm = null;
g.Ir = null;
g.zv = null;
g.DO = null;
g.$s = null;
g.qP = function(a) {
    g.g.xm.warn("Blockly.svgSize", "March 2021", "March 2022", "workspace.getCachedParentSvgSize");
    return new g.g.sd(a.sH,a.rH)
}
;
g.iP = function(a) {
    Ga(a)
}
;
g.ln = function(a) {
    for (; a.options.pc; )
        a = a.options.pc;
    var c = v(a)
      , d = Mc(a)
      , e = c.parentNode;
    if (e) {
        var f = e.offsetWidth;
        e = e.offsetHeight;
        d.width != f && (c.setAttribute("width", f + "px"),
        Uc(a, f, null));
        d.height != e && (c.setAttribute("height", e + "px"),
        Uc(a, null, e));
        a.resize()
    }
}
;
g.up = function(a) {
    var c = g.jp;
    !c || g.g.zs(a) || c.ra && !c.isVisible() || g.Nc.B.up(c, a)
}
;
g.Mv = function(a) {
    a.u.Vf || (g.h.la(!0),
    g.Fc(),
    a.T ? a.I(!1, !0) : a.I(!0, !0),
    g.h.la(!1))
}
;
g.Ev = function(a) {
    if (a.Nm)
        a = null;
    else {
        var c = g.P.ph(a, !0);
        g.P.WH(c);
        var d = a.jb();
        c.setAttribute("x", a.L ? -d.x : d.x);
        c.setAttribute("y", d.y);
        a = {
            xml: c,
            source: a.u,
            XK: g.g.rw(a, !0)
        }
    }
    a && (g.pm = a.xml,
    g.Ir = a.source,
    g.zv = a.XK)
}
;
g.ct = function() {
    if (!g.pm)
        return !1;
    var a = g.Ir;
    a.Vf && (a = a.Qa);
    return g.zv && Ya(a, g.zv) ? (g.h.la(!0),
    a.ct(g.pm),
    g.h.la(!1),
    !0) : !1
}
;
g.duplicate = function(a) {
    var c = g.pm
      , d = g.Ir;
    g.Ev(a);
    a.u.ct(g.pm);
    g.pm = c;
    g.Ir = d
}
;
g.eP = function(a) {
    g.g.zs(a) || a.preventDefault()
}
;
g.Fc = function(a) {
    g.K.Va();
    g.ga.Va();
    g.G.Mk();
    var c = !!a;
    ia(g.dj().De, g.Tb.bc.Lt).forEach(function(d) {
        d.GA(c)
    })
}
;
g.dj = function() {
    return g.jp
}
;
g.alert = function(a, c) {
    alert(a);
    c && c()
}
;
g.confirm = function(a, c) {
    c(confirm(a))
}
;
g.prompt = function(a, c, d) {
    d(prompt(a, c))
}
;
g.gJ = function(a) {
    return function() {
        J(this, a)
    }
}
;
g.vm = function(a) {
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (d) {
            var e = d.type;
            null == e || "" === e ? console.warn("Block definition #" + c + " in JSON array is missing a type attribute. Skipping.") : (g.O[e] && console.warn("Block definition #" + c + ' in JSON array overwrites prior definition of "' + e + '".'),
            g.O[e] = {
                S: g.gJ(d)
            })
        } else
            console.warn("Block definition #" + c + " in JSON array is " + d + ". Skipping.")
    }
}
;
g.qj = function(a) {
    return /^\s*-?\d+(\.\d+)?\s*$/.test(a)
}
;
g.WI = function(a) {
    return g.g.Cb.lC(a)
}
;
g.vH = function() {
    g.vd("LOGIC_HUE", ["Blocks", "logic", "HUE"]);
    g.vd("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
    g.vd("LOOPS_HUE", ["Blocks", "loops", "HUE"]);
    g.vd("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
    g.vd("MATH_HUE", ["Blocks", "math", "HUE"]);
    g.vd("MATH_HUE", ["Constants", "Math", "HUE"], 230);
    g.vd("TEXTS_HUE", ["Blocks", "texts", "HUE"]);
    g.vd("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
    g.vd("LISTS_HUE", ["Blocks", "lists", "HUE"]);
    g.vd("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
    g.vd("COLOUR_HUE", ["Blocks", "colour", "HUE"]);
    g.vd("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
    g.vd("VARIABLES_HUE", ["Blocks", "variables", "HUE"]);
    g.vd("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
    g.vd("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
    g.vd("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"])
}
;
g.vd = function(a, c, d) {
    for (var e = "Blockly", f = g, h = 0; h < c.length; ++h)
        e += "." + c[h],
        f && (f = f[c[h]]);
    f && f !== d && (a = (void 0 === d ? '%1 has been removed. Use Blockly.Msg["%2"].' : '%1 is deprecated and unused. Override Blockly.Msg["%2"].').replace("%1", e).replace("%2", a),
    console.warn(a))
}
;
g.nP = function(a) {
    g.$s = a
}
;
g.ev = g.M.bind;
g.Py = g.M.Ra;
g.CO = g.M.va;
g.pL = g.Jb.Jf.Ib;
g.oL = g.Jb.Jf.Aq;
g.tq = g.Jb.Jf.Mc;
g.tc = g.pa.tc;
g.xe = g.pa.xe;
g.bd = g.pa.bd;
g.cf = g.pa.cf;
g.ML = g.lb.jg;
g.rO = g.g.Y.Ka.td;
g.oO = g.g.Y.Ka.Yg;
g.pO = g.g.Y.Ka.Ib;
g.qO = g.g.Y.Ka.Mc;
g.Ea = {};
g.Ea.ly = function() {
    g.Ua.B.register({
        Sd: function() {
            return g.i.UNDO
        },
        qc: function(a) {
            return 0 < a.u.Al.length ? "enabled" : "disabled"
        },
        cb: function(a) {
            $a(a.u, !1)
        },
        Qe: g.Ua.Od.ne,
        id: "undoWorkspace",
        weight: 1
    })
}
;
g.Ea.ky = function() {
    g.Ua.B.register({
        Sd: function() {
            return g.i.REDO
        },
        qc: function(a) {
            return 0 < a.u.Cp.length ? "enabled" : "disabled"
        },
        cb: function(a) {
            $a(a.u, !0)
        },
        Qe: g.Ua.Od.ne,
        id: "redoWorkspace",
        weight: 2
    })
}
;
g.Ea.bK = function() {
    g.Ua.B.register({
        Sd: function() {
            return g.i.CLEAN_UP
        },
        qc: function(a) {
            return a.u.Gc() ? 1 < a.u.xc(!1).length ? "enabled" : "disabled" : "hidden"
        },
        cb: function(a) {
            a = a.u;
            a.Yc(!1);
            g.h.la(!0);
            for (var c = a.xc(!0), d = 0, e = 0, f; f = c[e]; e++)
                if (f.Gc()) {
                    var h = f.jb();
                    f.moveBy(-h.x, d - h.y);
                    Bc(f);
                    d = f.jb().y + E(f).height + a.Ob.na().Jn
                }
            g.h.la(!1);
            a.Yc(!0)
        },
        Qe: g.Ua.Od.ne,
        id: "cleanWorkspace",
        weight: 3
    })
}
;
g.Ea.MD = function(a, c) {
    for (var d = 0, e = 0; e < c.length; e++)
        for (var f = c[e]; f; )
            setTimeout(f.Kj.bind(f, a), d),
            f = t(f),
            d += 10
}
;
g.Ea.cK = function() {
    g.Ua.B.register({
        Sd: function() {
            return g.i.COLLAPSE_ALL
        },
        qc: function(a) {
            if (a.u.options.collapse) {
                a = a.u.xc(!1);
                for (var c = 0; c < a.length; c++)
                    for (var d = a[c]; d; ) {
                        if (!d.isCollapsed())
                            return "enabled";
                        d = t(d)
                    }
                return "disabled"
            }
            return "hidden"
        },
        cb: function(a) {
            g.Ea.MD(!0, a.u.xc(!0))
        },
        Qe: g.Ua.Od.ne,
        id: "collapseWorkspace",
        weight: 4
    })
}
;
g.Ea.nK = function() {
    g.Ua.B.register({
        Sd: function() {
            return g.i.EXPAND_ALL
        },
        qc: function(a) {
            if (a.u.options.collapse) {
                a = a.u.xc(!1);
                for (var c = 0; c < a.length; c++)
                    for (var d = a[c]; d; ) {
                        if (d.isCollapsed())
                            return "enabled";
                        d = t(d)
                    }
                return "disabled"
            }
            return "hidden"
        },
        cb: function(a) {
            g.Ea.MD(!1, a.u.xc(!0))
        },
        Qe: g.Ua.Od.ne,
        id: "expandWorkspace",
        weight: 5
    })
}
;
g.Ea.CA = function(a, c) {
    if (a.vf())
        Array.prototype.push.apply(c, q(a, !1));
    else {
        a = Ca(a, !1);
        for (var d = 0; d < a.length; d++)
            g.Ea.CA(a[d], c)
    }
}
;
g.Ea.ww = function(a) {
    var c = [];
    a = a.xc(!0);
    for (var d = 0; d < a.length; d++)
        g.Ea.CA(a[d], c);
    return c
}
;
g.Ea.Rr = function(a, c) {
    g.h.la(c);
    var d = a.shift();
    d && (d.u ? (d.I(!1, !0),
    setTimeout(g.Ea.Rr, 10, a, c)) : g.Ea.Rr(a, c));
    g.h.la(!1)
}
;
g.Ea.jK = function() {
    g.Ua.B.register({
        Sd: function(a) {
            if (a.u)
                return a = g.Ea.ww(a.u).length,
                1 == a ? g.i.DELETE_BLOCK : g.i.DELETE_X_BLOCKS.replace("%1", String(a))
        },
        qc: function(a) {
            if (a.u)
                return 0 < g.Ea.ww(a.u).length ? "enabled" : "disabled"
        },
        cb: function(a) {
            if (a.u) {
                Ec(a.u);
                var c = g.Ea.ww(a.u)
                  , d = g.g.Dg();
                2 > c.length ? g.Ea.Rr(c, d) : g.confirm(g.i.DELETE_ALL_BLOCKS.replace("%1", c.length), function(e) {
                    e && g.Ea.Rr(c, d)
                })
            }
        },
        Qe: g.Ua.Od.ne,
        id: "workspaceDelete",
        weight: 6
    })
}
;
g.Ea.rK = function() {
    g.Ea.ly();
    g.Ea.ky();
    g.Ea.bK();
    g.Ea.cK();
    g.Ea.nK();
    g.Ea.jK()
}
;
g.Ea.lK = function() {
    g.Ua.B.register({
        Sd: function() {
            return g.i.DUPLICATE_BLOCK
        },
        qc: function(a) {
            a = a.block;
            return !a.Xb && a.vf() && a.Gc() ? (Za(a.u) ? Ya(a.u, g.g.rw(a, !0)) : 1) ? "enabled" : "disabled" : "hidden"
        },
        cb: function(a) {
            a.block && g.duplicate(a.block)
        },
        Qe: g.Ua.Od.Jc,
        id: "blockDuplicate",
        weight: 1
    })
}
;
g.Ea.eK = function() {
    g.Ua.B.register({
        Sd: function(a) {
            return a.block.hf ? g.i.REMOVE_COMMENT : g.i.ADD_COMMENT
        },
        qc: function(a) {
            a = a.block;
            return g.g.userAgent.Ze || a.Xb || !a.u.options.po || a.isCollapsed() || !a.Yd() ? "hidden" : "enabled"
        },
        cb: function(a) {
            a = a.block;
            a.hf ? a.Sg(null) : a.Sg("")
        },
        Qe: g.Ua.Od.Jc,
        id: "blockComment",
        weight: 2
    })
}
;
g.Ea.pK = function() {
    g.Ua.B.register({
        Sd: function(a) {
            return fb(a.block) ? g.i.EXTERNAL_INPUTS : g.i.INLINE_INPUTS
        },
        qc: function(a) {
            a = a.block;
            if (!a.Xb && a.Gc() && !a.isCollapsed())
                for (var c = 1; c < a.Z.length; c++)
                    if (a.Z[c - 1].type != g.lb.df && a.Z[c].type != g.lb.df)
                        return "enabled";
            return "hidden"
        },
        cb: function(a) {
            a.block.Xc(!fb(a.block))
        },
        Qe: g.Ua.Od.Jc,
        id: "blockInline",
        weight: 3
    })
}
;
g.Ea.dK = function() {
    g.Ua.B.register({
        Sd: function(a) {
            return a.block.isCollapsed() ? g.i.EXPAND_BLOCK : g.i.COLLAPSE_BLOCK
        },
        qc: function(a) {
            a = a.block;
            return !a.Xb && a.Gc() && a.u.options.collapse ? "enabled" : "hidden"
        },
        cb: function(a) {
            a.block.Kj(!a.block.isCollapsed())
        },
        Qe: g.Ua.Od.Jc,
        id: "blockCollapseExpand",
        weight: 4
    })
}
;
g.Ea.kK = function() {
    g.Ua.B.register({
        Sd: function(a) {
            return a.block.isEnabled() ? g.i.DISABLE_BLOCK : g.i.ENABLE_BLOCK
        },
        qc: function(a) {
            a = a.block;
            return !a.Xb && a.u.options.disable && a.Yd() ? fc(a) ? "disabled" : "enabled" : "hidden"
        },
        cb: function(a) {
            a = a.block;
            var c = g.h.oc();
            c || g.h.la(!0);
            a.ee(!a.isEnabled());
            c || g.h.la(!1)
        },
        Qe: g.Ua.Od.Jc,
        id: "blockDisable",
        weight: 5
    })
}
;
g.Ea.iy = function() {
    g.Ua.B.register({
        Sd: function(a) {
            var c = a.block;
            a = q(c, !1).length;
            (c = t(c)) && (a -= q(c, !1).length);
            return 1 == a ? g.i.DELETE_BLOCK : g.i.DELETE_X_BLOCKS.replace("%1", String(a))
        },
        qc: function(a) {
            return !a.block.Xb && a.block.vf() ? "enabled" : "hidden"
        },
        cb: function(a) {
            g.h.la(!0);
            a.block && g.Mv(a.block);
            g.h.la(!1)
        },
        Qe: g.Ua.Od.Jc,
        id: "blockDelete",
        weight: 6
    })
}
;
g.Ea.oK = function() {
    g.Ua.B.register({
        Sd: function() {
            return g.i.HELP
        },
        qc: function(a) {
            a = a.block;
            return ("function" == typeof a.Mb ? a.Mb() : a.Mb) ? "enabled" : "hidden"
        },
        cb: function(a) {
            a.block.showHelp()
        },
        Qe: g.Ua.Od.Jc,
        id: "blockHelp",
        weight: 7
    })
}
;
g.Ea.aK = function() {
    g.Ea.lK();
    g.Ea.eK();
    g.Ea.pK();
    g.Ea.dK();
    g.Ea.kK();
    g.Ea.iy();
    g.Ea.oK()
}
;
g.Ea.hK = function() {
    g.Ea.rK();
    g.Ea.aK()
}
;
g.Ea.hK();
g.Yb = {};
g.Yb.names = {
    WE: "escape",
    ck: "delete",
    AE: "copy",
    HE: "cut",
    jG: "paste",
    PG: "undo",
    vG: "redo"
};
g.Yb.mK = function() {
    var a = {
        name: g.Yb.names.WE,
        qc: function(c) {
            return !c.options.readOnly
        },
        cb: function() {
            g.Fc();
            return !0
        }
    };
    g.Nc.B.register(a);
    O(g.g.ea.vz, a.name)
}
;
g.Yb.iy = function() {
    var a = {
        name: g.Yb.names.ck,
        qc: function(c) {
            return !c.options.readOnly && g.selected && g.selected.vf()
        },
        cb: function(c, d) {
            d.preventDefault();
            if (g.mg.Qk())
                return !1;
            g.Mv(g.selected);
            return !0
        }
    };
    g.Nc.B.register(a);
    O(g.g.ea.ck, a.name);
    O(g.g.ea.lE, a.name)
}
;
g.Yb.fK = function() {
    var a = {
        name: g.Yb.names.AE,
        qc: function(d) {
            return !d.options.readOnly && !g.mg.Qk() && g.selected && g.selected.vf() && g.selected.Gc()
        },
        cb: function(d, e) {
            e.preventDefault();
            g.Fc();
            g.Ev(g.selected);
            return !0
        }
    };
    g.Nc.B.register(a);
    var c = P(g.g.ea.Ot, [g.g.ea.$j]);
    O(c, a.name);
    c = P(g.g.ea.Ot, [g.g.ea.Hl]);
    O(c, a.name);
    c = P(g.g.ea.Ot, [g.g.ea.Ul]);
    O(c, a.name)
}
;
g.Yb.gK = function() {
    var a = {
        name: g.Yb.names.HE,
        qc: function(d) {
            return !d.options.readOnly && !g.mg.Qk() && g.selected && g.selected.vf() && g.selected.Gc() && !g.selected.u.Vf
        },
        cb: function() {
            g.Ev(g.selected);
            g.Mv(g.selected);
            return !0
        }
    };
    g.Nc.B.register(a);
    var c = P(g.g.ea.Wu, [g.g.ea.$j]);
    O(c, a.name);
    c = P(g.g.ea.Wu, [g.g.ea.Hl]);
    O(c, a.name);
    c = P(g.g.ea.Wu, [g.g.ea.Ul]);
    O(c, a.name)
}
;
g.Yb.qK = function() {
    var a = {
        name: g.Yb.names.jG,
        qc: function(d) {
            return !d.options.readOnly && !g.mg.Qk()
        },
        cb: function() {
            return g.ct()
        }
    };
    g.Nc.B.register(a);
    var c = P(g.g.ea.Su, [g.g.ea.$j]);
    O(c, a.name);
    c = P(g.g.ea.Su, [g.g.ea.Hl]);
    O(c, a.name);
    c = P(g.g.ea.Su, [g.g.ea.Ul]);
    O(c, a.name)
}
;
g.Yb.ly = function() {
    var a = {
        name: g.Yb.names.PG,
        qc: function(d) {
            return !d.options.readOnly && !g.mg.Qk()
        },
        cb: function(d) {
            g.Fc();
            $a(d, !1);
            return !0
        }
    };
    g.Nc.B.register(a);
    var c = P(g.g.ea.im, [g.g.ea.$j]);
    O(c, a.name);
    c = P(g.g.ea.im, [g.g.ea.Hl]);
    O(c, a.name);
    c = P(g.g.ea.im, [g.g.ea.Ul]);
    O(c, a.name)
}
;
g.Yb.ky = function() {
    var a = {
        name: g.Yb.names.vG,
        qc: function(d) {
            return !g.mg.Qk() && !d.options.readOnly
        },
        cb: function(d) {
            g.Fc();
            $a(d, !0);
            return !0
        }
    };
    g.Nc.B.register(a);
    var c = P(g.g.ea.im, [g.g.ea.dr, g.g.ea.$j]);
    O(c, a.name);
    c = P(g.g.ea.im, [g.g.ea.dr, g.g.ea.Hl]);
    O(c, a.name);
    c = P(g.g.ea.im, [g.g.ea.dr, g.g.ea.Ul]);
    O(c, a.name);
    c = P(g.g.ea.XG, [g.g.ea.$j]);
    O(c, a.name)
}
;
g.Yb.iK = function() {
    g.Yb.mK();
    g.Yb.iy();
    g.Yb.fK();
    g.Yb.gK();
    g.Yb.qK();
    g.Yb.ly();
    g.Yb.ky()
}
;
g.Yb.iK();
g.g.D = {};
g.g.D.Xa = function(a, c) {
    return " " + a + "," + c + " "
}
;
g.g.D.curve = function(a, c) {
    return " " + a + c.join("")
}
;
g.g.D.moveTo = function(a, c) {
    return " M " + a + "," + c + " "
}
;
g.g.D.moveBy = function(a, c) {
    return " m " + a + "," + c + " "
}
;
g.g.D.lineTo = function(a, c) {
    return " l " + a + "," + c + " "
}
;
g.g.D.line = function(a) {
    return " l" + a.join("")
}
;
g.g.D.oa = function(a, c) {
    return " " + a + " " + c + " "
}
;
g.g.D.arc = function(a, c, d, e) {
    return a + " " + d + " " + d + " " + c + e
}
;
g.m.bh = function() {
    this.ng = 0;
    this.BG = 3;
    this.bf = 5;
    this.Tz = 8;
    this.Id = 10;
    this.oA = this.bf;
    this.Vn = 15;
    this.em = 5;
    this.jr = 8;
    this.bG = 15;
    this.pu = 4;
    this.$F = 12;
    this.RE = 16;
    this.QE = this.sz = this.Vn;
    this.Hb = 8;
    this.HG = this.Nn = 15;
    this.lA = 0;
    this.nA = 20;
    this.mE = 4;
    this.LG = this.bf;
    this.MG = this.Id;
    this.pE = this.bf;
    this.oE = this.Id;
    this.rq = !1;
    this.EG = 15;
    this.FG = 100;
    this.DG = 15;
    this.Jn = 24;
    this.TE = 14.5;
    this.SE = this.Vn + 11;
    this.YE = 2;
    this.UE = this.Jn;
    this.kA = g.g.D.moveBy(0, 0);
    this.DF = 12;
    this.EF = 6;
    this.si = 11;
    this.ui = "normal";
    this.ri = "sans-serif";
    this.Bz = this.Oq = -1;
    this.Nq = 4;
    this.zz = 16;
    this.Pl = 5;
    this.yz = "#fff";
    this.Xt = !g.g.userAgent.Ze && !g.g.userAgent.ek;
    this.Az = this.zz;
    this.dF = this.cF = this.Wt = !1;
    this.fF = this.Pl;
    this.Dn = 12;
    this.eF = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
    this.gF = !1;
    this.bF = this.Pl - 3;
    this.ft = String(Math.random()).substring(2);
    this.Zr = "";
    this.iw = null;
    this.qB = "";
    this.wo = this.lB = this.Rv = null;
    this.Gq = "#cc0a0a";
    this.Wq = "#4286f4";
    this.Iq = 100;
    this.wA = 5;
    this.Hq = 10;
    this.CE = 2;
    this.EE = 4;
    this.Dz = !1;
    this.bu = "#000000";
    this.Sq = .2;
    this.iA = {
        mG: 1,
        Wl: 2
    }
}
;
b = g.m.bh.prototype;
b.S = function() {
    this.Sl = this.lx();
    this.Wl = this.mx();
    this.cm = this.ox();
    this.yu = this.nx();
    var a = this.Hb
      , c = g.g.D.arc("a", "0 0,0", a, g.g.D.Xa(-a, a))
      , d = g.g.D.arc("a", "0 0,0", a, g.g.D.Xa(a, a));
    this.Tq = {
        width: a,
        height: a,
        Wx: c,
        dt: d
    };
    a = this.Hb;
    c = g.g.D.moveBy(0, a) + g.g.D.arc("a", "0 0,1", a, g.g.D.Xa(a, -a));
    d = g.g.D.arc("a", "0 0,1", a, g.g.D.Xa(a, a));
    var e = g.g.D.arc("a", "0 0,1", a, g.g.D.Xa(-a, -a))
      , f = g.g.D.arc("a", "0 0,1", a, g.g.D.Xa(-a, a));
    this.Sn = {
        Ny: c,
        UK: d,
        nH: f,
        jv: e,
        vK: a
    }
}
;
b.Op = function(a) {
    this.Ti = Object.create(null);
    var c = a.Ti, d;
    for (d in c)
        this.Ti[d] = Xc(c[d]);
    this.ri = a.fontStyle && void 0 != a.fontStyle.family ? a.fontStyle.family : this.ri;
    this.ui = a.fontStyle && void 0 != a.fontStyle.weight ? a.fontStyle.weight : this.ui;
    this.si = a.fontStyle && void 0 != a.fontStyle.size ? a.fontStyle.size : this.si;
    c = g.g.o.GC("Hg", this.si + "pt", this.ui, this.ri);
    this.Oq = c.height;
    this.Bz = c.ff;
    this.Gq = Oa(a, "cursorColour") || this.Gq;
    this.Wq = Oa(a, "markerColour") || this.Wq;
    this.bu = Oa(a, "insertionMarkerColour") || this.bu;
    this.Sq = Number(Oa(a, "insertionMarkerOpacity")) || this.Sq;
    this.rq = null != a.Iy ? a.Iy : this.rq
}
;
function Gc(a, c) {
    var d = "auto_" + c;
    a.Ti[d] || (a.Ti[d] = Xc({
        colourPrimary: c
    }));
    return {
        style: a.Ti[d],
        name: d
    }
}
function zc(a, c) {
    return a.Ti[c || ""] || (c && 0 == c.indexOf("auto_") ? Gc(a, c.substring(5)).style : Xc({
        colourPrimary: "#000000"
    }))
}
function Xc(a) {
    var c = {};
    a && g.g.object.Oe(c, a);
    a = g.g.bt(c.colourPrimary || "#000");
    c.sh = a.Yo;
    c.colourSecondary ? a = g.g.bt(c.colourSecondary).Yo : (a = c.sh,
    a = g.g.Cb.fv("#fff", a, .6) || a);
    c.Jr = a;
    c.colourTertiary ? a = g.g.bt(c.colourTertiary).Yo : (a = c.sh,
    a = g.g.Cb.fv("#fff", a, .3) || a);
    c.vg = a;
    c.Hg = c.hat || "";
    return c
}
b.I = function() {
    this.iw && g.g.o.removeNode(this.iw);
    this.Rv && g.g.o.removeNode(this.Rv);
    this.lB && g.g.o.removeNode(this.lB);
    this.wo = null
}
;
b.lx = function() {
    var a = this.DF
      , c = this.EF
      , d = g.g.D.line([g.g.D.Xa(c, a / 4), g.g.D.Xa(2 * -c, a / 2), g.g.D.Xa(c, a / 4)]);
    return {
        height: a,
        width: c,
        path: d
    }
}
;
b.ox = function() {
    var a = this.EG
      , c = this.FG
      , d = g.g.D.curve("c", [g.g.D.Xa(30, -a), g.g.D.Xa(70, -a), g.g.D.Xa(c, 0)]);
    return {
        height: a,
        width: c,
        path: d
    }
}
;
b.nx = function() {
    function a(h) {
        h = h ? -1 : 1;
        var k = -h
          , l = d / 2
          , m = g.g.D.Xa(c, h * l);
        return g.g.D.curve("c", [g.g.D.Xa(0, h * (l + 2.5)), g.g.D.Xa(-c, k * (l + .5)), g.g.D.Xa(-c, h * l)]) + g.g.D.curve("s", [g.g.D.Xa(c, 2.5 * k), m])
    }
    var c = this.jr
      , d = this.Vn
      , e = a(!0)
      , f = a(!1);
    return {
        type: this.iA.mG,
        width: c,
        height: d,
        Af: f,
        xp: e
    }
}
;
b.mx = function() {
    function a(k) {
        return g.g.D.line([g.g.D.Xa(k * e, d), g.g.D.Xa(3 * k, 0), g.g.D.Xa(k * e, -d)])
    }
    var c = this.bG
      , d = this.pu
      , e = (c - 3) / 2
      , f = a(1)
      , h = a(-1);
    return {
        type: this.iA.Wl,
        width: c,
        height: d,
        Cj: f,
        dD: h
    }
}
;
function mb(a, c) {
    switch (c.type) {
    case g.pa.tc:
    case g.pa.xe:
        return a.yu;
    case g.pa.cf:
    case g.pa.bd:
        return a.Wl;
    default:
        throw Error("Unknown connection type");
    }
}
b.eb = function(a, c, d) {
    d = this.tw(d);
    c = "blockly-renderer-style-" + c;
    this.wo = document.getElementById(c);
    var e = d.join("\n");
    this.wo ? this.wo.firstChild.textContent = e : (d = document.createElement("style"),
    d.id = c,
    c = document.createTextNode(e),
    d.appendChild(c),
    document.head.insertBefore(d, document.head.firstChild),
    this.wo = d);
    a = g.g.o.N(g.g.F.qz, {}, a);
    c = g.g.o.N(g.g.F.hF, {
        id: "blocklyEmbossFilter" + this.ft
    }, a);
    g.g.o.N(g.g.F.ZE, {
        "in": "SourceAlpha",
        stdDeviation: 1,
        result: "blur"
    }, c);
    d = g.g.o.N(g.g.F.aF, {
        "in": "blur",
        surfaceScale: 1,
        specularConstant: .5,
        specularExponent: 10,
        "lighting-color": "white",
        result: "specOut"
    }, c);
    g.g.o.N(g.g.F.$E, {
        x: -5E3,
        y: -1E4,
        z: 2E4
    }, d);
    g.g.o.N(g.g.F.xz, {
        "in": "specOut",
        in2: "SourceAlpha",
        operator: "in",
        result: "specOut"
    }, c);
    g.g.o.N(g.g.F.xz, {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, c);
    this.Zr = c.id;
    this.iw = c;
    a = g.g.o.N(g.g.F.eA, {
        id: "blocklyDisabledPattern" + this.ft,
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, a);
    g.g.o.N(g.g.F.Dc, {
        width: 10,
        height: 10,
        fill: "#aaa"
    }, a);
    g.g.o.N(g.g.F.Ld, {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, a);
    this.qB = a.id;
    this.Rv = a
}
;
b.tw = function(a) {
    return [a + " .blocklyText, ", a + " .blocklyFlyoutLabelText {", "font: " + this.ui + " " + this.si + "pt " + this.ri + ";", "}", a + " .blocklyText {", "fill: #fff;", "}", a + " .blocklyNonEditableText>rect,", a + " .blocklyEditableText>rect {", "fill: " + this.yz + ";", "fill-opacity: .6;", "stroke: none;", "}", a + " .blocklyNonEditableText>text,", a + " .blocklyEditableText>text {", "fill: #000;", "}", a + " .blocklyFlyoutLabelText {", "fill: #000;", "}", a + " .blocklyText.blocklyBubbleText {", "fill: #000;", "}", a + " .blocklyEditableText:not(.editing):hover>rect {", "stroke: #fff;", "stroke-width: 2;", "}", a + " .blocklyHtmlInput {", "font-family: " + this.ri + ";", "font-weight: " + this.ui + ";", "}", a + " .blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", a + " .blocklyHighlightedConnectionPath {", "stroke: #fc3;", "}", a + " .blocklyReplaceable .blocklyPath {", "fill-opacity: .5;", "}", a + " .blocklyReplaceable .blocklyPathLight,", a + " .blocklyReplaceable .blocklyPathDark {", "display: none;", "}", a + " .blocklyInsertionMarker>.blocklyPath {", "fill-opacity: " + this.Sq + ";", "stroke: none;", "}"]
}
;
g.m.A = {
    NONE: 0,
    qd: 1,
    Ez: 2,
    Hz: 4,
    Eu: 8,
    fz: 16,
    Lz: 32,
    wz: 64,
    $e: 128,
    Iz: 256,
    mA: 512,
    zE: 1024,
    xu: 2048,
    ou: 4096,
    fG: 8192,
    Tt: 16384,
    gu: 32768,
    fu: 65536,
    Cu: 131072,
    Bu: 262144,
    Oz: 524288,
    Du: 1048576,
    Nu: 2097152,
    Mt: 4194304,
    Jz: 8388608
};
g.m.A.WM = g.m.A.gu | g.m.A.fu;
g.m.A.bO = g.m.A.Cu | g.m.A.Bu;
g.m.A.Ax = 16777216;
g.m.A.getType = function(a) {
    Object.prototype.hasOwnProperty.call(g.m.A, a) || (g.m.A[a] = g.m.A.Ax,
    g.m.A.Ax <<= 1);
    return g.m.A[a]
}
;
g.m.A.Mh = function(a) {
    return a.type & g.m.A.qd
}
;
g.m.A.Zk = function(a) {
    return a.type & g.m.A.Ez
}
;
g.m.A.Lm = function(a) {
    return a.type & g.m.A.Hz
}
;
g.m.A.wf = function(a) {
    return a.type & g.m.A.Eu
}
;
g.m.A.XO = function(a) {
    return a.type & g.m.A.Lz
}
;
g.m.A.nj = function(a) {
    return a.type & g.m.A.$e
}
;
g.m.A.gp = function(a) {
    return a.type & g.m.A.wz
}
;
g.m.A.mj = function(a) {
    return a.type & g.m.A.Iz
}
;
g.m.A.al = function(a) {
    return a.type & g.m.A.mA
}
;
g.m.A.Qm = function(a) {
    return a.type & g.m.A.xu
}
;
g.m.A.pj = function(a) {
    return a.type & g.m.A.ou
}
;
g.m.A.eJ = function(a) {
    return a.type & (g.m.A.xu | g.m.A.ou)
}
;
g.m.A.oj = function(a) {
    return a.type & g.m.A.fu
}
;
g.m.A.tC = function(a) {
    return a.type & g.m.A.Bu
}
;
g.m.A.hp = function(a) {
    return a.type & g.m.A.gu
}
;
g.m.A.YO = function(a) {
    return a.type & g.m.A.Cu
}
;
g.m.A.WO = function(a) {
    return a.type & g.m.A.Tt
}
;
g.m.A.rC = function(a) {
    return a.type & g.m.A.Oz
}
;
g.m.A.$O = function(a) {
    return a.type & g.m.A.Du
}
;
g.m.A.TO = function(a) {
    return a.type & g.m.A.fz
}
;
g.m.A.As = function(a) {
    return a.type & g.m.A.Nu
}
;
g.m.A.ts = function(a) {
    return a.type & g.m.A.Mt
}
;
g.m.A.fJ = function(a) {
    return a.type & (g.m.A.Nu | g.m.A.Mt)
}
;
g.m.A.aJ = function(a) {
    return a.type & g.m.A.Jz
}
;
g.m.Ai = function(a) {
    this.height = this.width = 0;
    this.type = g.m.A.NONE;
    this.om = this.Ya = 0;
    this.C = a;
    this.yf = this.C.Nn
}
;
g.m.Ja = function(a, c) {
    g.m.Ja.v.constructor.call(this, a);
    this.Qd = c;
    this.shape = mb(this.C, c);
    this.Yk = !!this.shape.isDynamic;
    this.type |= g.m.A.zE
}
;
g.g.object.W(g.m.Ja, g.m.Ai);
g.m.vu = function(a, c) {
    g.m.vu.v.constructor.call(this, a, c);
    this.type |= g.m.A.fG;
    this.height = this.Yk ? 0 : this.shape.height;
    this.Ef = this.width = this.Yk ? 0 : this.shape.width;
    this.Ee = this.C.em;
    this.so = 0
}
;
g.g.object.W(g.m.vu, g.m.Ja);
g.m.zu = function(a, c) {
    g.m.zu.v.constructor.call(this, a, c);
    this.type |= g.m.A.xu;
    this.height = this.shape.height;
    this.width = this.shape.width
}
;
g.g.object.W(g.m.zu, g.m.Ja);
g.m.qu = function(a, c) {
    g.m.qu.v.constructor.call(this, a, c);
    this.type |= g.m.A.ou;
    this.height = this.shape.height;
    this.width = this.shape.width
}
;
g.g.object.W(g.m.qu, g.m.Ja);
g.m.Hn = function(a, c) {
    g.m.Hn.v.constructor.call(this, a, c.connection);
    this.type |= g.m.A.$e;
    this.input = c;
    this.align = c.align;
    (this.Yi = c.connection && c.connection.sa() ? c.connection.sa() : null) ? (a = E(this.Yi),
    this.qo = a.width,
    this.Mr = a.height) : this.Mr = this.qo = 0;
    this.Ee = this.so = 0
}
;
g.g.object.W(g.m.Hn, g.m.Ja);
g.m.xi = function(a, c) {
    g.m.xi.v.constructor.call(this, a, c);
    this.type |= g.m.A.Iz;
    this.Yi ? (this.width = this.qo,
    this.height = this.Mr) : (this.height = this.C.SE,
    this.width = this.C.TE);
    this.qm = this.Yk ? this.shape.height(this.height) : this.shape.height;
    this.yg = this.Yk ? this.shape.width(this.height) : this.shape.width;
    this.Yi || (this.width += this.yg * (this.Yk ? 2 : 1));
    this.Ee = this.Yk ? this.shape.Ee(this.qm) : this.C.em;
    this.so = this.Yk ? this.shape.so(this.yg) : 0
}
;
g.g.object.W(g.m.xi, g.m.Hn);
g.m.Ki = function(a, c) {
    g.m.Ki.v.constructor.call(this, a, c);
    this.type |= g.m.A.mA;
    this.height = this.Yi ? this.Mr + this.C.lA : this.C.UE;
    this.width = this.C.HG + this.shape.width
}
;
g.g.object.W(g.m.Ki, g.m.Hn);
g.m.Mq = function(a, c) {
    g.m.Mq.v.constructor.call(this, a, c);
    this.type |= g.m.A.wz;
    this.height = this.Yi ? this.Mr - this.C.em - this.C.bf : this.shape.height;
    this.width = this.shape.width + this.C.YE;
    this.Ee = this.C.em;
    this.qm = this.shape.height;
    this.yg = this.shape.width
}
;
g.g.object.W(g.m.Mq, g.m.Hn);
g.m.ke = function(a, c) {
    g.m.ke.v.constructor.call(this, a);
    this.icon = c;
    this.isVisible = c.isVisible();
    this.type |= g.m.A.Hz;
    a = new g.g.sd(g.ke.prototype.er,g.ke.prototype.er - 2);
    this.height = a.height;
    this.width = a.width
}
;
g.g.object.W(g.m.ke, g.m.Ai);
g.m.du = function(a) {
    g.m.du.v.constructor.call(this, a);
    this.type |= g.m.A.Oz;
    this.height = this.C.Sl.height;
    this.width = this.C.Sl.width
}
;
g.g.object.W(g.m.du, g.m.Ai);
g.m.ve = function(a, c) {
    g.m.ve.v.constructor.call(this, a);
    this.Ho = c;
    this.Yd = c.Lq;
    this.mI = !1;
    this.type |= g.m.A.qd;
    a = this.Ho.Fh();
    this.height = a.height;
    this.width = a.width
}
;
g.g.object.W(g.m.ve, g.m.Ai);
g.m.$t = function(a) {
    g.m.$t.v.constructor.call(this, a);
    this.type |= g.m.A.Ez;
    this.height = this.C.cm.height;
    this.width = this.C.cm.width;
    this.km = this.height
}
;
g.g.object.W(g.m.$t, g.m.Ai);
g.m.dm = function(a, c) {
    g.m.dm.v.constructor.call(this, a);
    this.type = (c && "left" != c ? g.m.A.Cu : g.m.A.gu) | g.m.A.Tt;
    this.width = this.height = this.C.ng
}
;
g.g.object.W(g.m.dm, g.m.Ai);
g.m.cr = function(a, c) {
    g.m.cr.v.constructor.call(this, a);
    this.type = (c && "left" != c ? g.m.A.Bu : g.m.A.fu) | g.m.A.Tt;
    this.width = this.C.Hb;
    this.height = this.C.Hb / 2
}
;
g.g.object.W(g.m.cr, g.m.Ai);
g.m.eh = function(a, c) {
    g.m.eh.v.constructor.call(this, a);
    this.type = this.type | g.m.A.Eu | g.m.A.Lz;
    this.width = c;
    this.height = this.C.DG
}
;
g.g.object.W(g.m.eh, g.m.Ai);
g.m.pk = function(a) {
    this.type = g.m.A.Du;
    this.elements = [];
    this.Ya = this.Tc = this.cg = this.minWidth = this.minHeight = this.width = this.height = 0;
    this.cC = this.Hm = this.Iw = this.Ec = this.hj = !1;
    this.C = a;
    this.yf = this.C.Nn;
    this.align = null
}
;
g.m.pk.prototype.measure = function() {
    throw Error("Unexpected attempt to measure a base Row.");
}
;
function Yc(a) {
    for (var c = a.elements.length - 1, d; d = a.elements[c]; c--)
        if (g.m.A.nj(d))
            return d;
    return null
}
g.m.pk.prototype.zt = function() {
    return !0
}
;
g.m.pk.prototype.Fo = function() {
    return !0
}
;
g.m.vk = function(a) {
    g.m.vk.v.constructor.call(this, a);
    this.type |= g.m.A.Nu;
    this.km = this.qh = 0;
    this.RI = !1;
    this.connection = null
}
;
g.g.object.W(g.m.vk, g.m.pk);
g.m.vk.prototype.Jw = function(a) {
    var c = (a.Hg ? "cap" === a.Hg : this.C.rq) && !a.T && !a.qa
      , d = a.qa && a.qa.sa();
    return !!a.T || c || (d ? t(d) == a : !1)
}
;
g.m.vk.prototype.measure = function() {
    for (var a = 0, c = 0, d = 0, e = 0, f; f = this.elements[e]; e++)
        c += f.width,
        g.m.A.wf(f) || (g.m.A.Zk(f) ? d = Math.max(d, f.km) : a = Math.max(a, f.height));
    this.width = Math.max(this.minWidth, c);
    this.height = Math.max(this.minHeight, a) + d;
    this.qh = this.km = d;
    this.cg = this.width
}
;
g.m.vk.prototype.zt = function() {
    return !1
}
;
g.m.vk.prototype.Fo = function() {
    return !1
}
;
g.m.Yj = function(a) {
    g.m.Yj.v.constructor.call(this, a);
    this.type |= g.m.A.Mt;
    this.dC = !1;
    this.connection = null;
    this.ff = this.zo = 0
}
;
g.g.object.W(g.m.Yj, g.m.pk);
g.m.Yj.prototype.Jw = function(a) {
    return !!a.T || !!t(a)
}
;
g.m.Yj.prototype.measure = function() {
    for (var a = 0, c = 0, d = 0, e = 0, f; f = this.elements[e]; e++)
        c += f.width,
        g.m.A.wf(f) || (g.m.A.pj(f) ? d = Math.max(d, f.height) : a = Math.max(a, f.height));
    this.width = Math.max(this.minWidth, c);
    this.height = Math.max(this.minHeight, a) + d;
    this.zo = d;
    this.cg = this.width
}
;
g.m.Yj.prototype.zt = function() {
    return !1
}
;
g.m.Yj.prototype.Fo = function() {
    return !1
}
;
g.m.ir = function(a, c, d) {
    g.m.ir.v.constructor.call(this, a);
    this.type = this.type | g.m.A.Eu | g.m.A.fz;
    this.width = d;
    this.height = c;
    this.DB = !1;
    this.cg = 0;
    this.elements = [new g.m.eh(this.C,d)]
}
;
g.g.object.W(g.m.ir, g.m.pk);
g.m.ir.prototype.measure = function() {}
;
g.m.Rl = function(a) {
    g.m.Rl.v.constructor.call(this, a);
    this.type |= g.m.A.Jz;
    this.$A = 0
}
;
g.g.object.W(g.m.Rl, g.m.pk);
g.m.Rl.prototype.measure = function() {
    this.width = this.minWidth;
    this.height = this.minHeight;
    for (var a = 0, c = 0, d; d = this.elements[c]; c++)
        this.width += d.width,
        g.m.A.nj(d) && (g.m.A.al(d) ? a += d.qo : g.m.A.gp(d) && 0 != d.qo && (a += d.qo - d.yg)),
        g.m.A.wf(d) || (this.height = Math.max(this.height, d.height));
    this.$A = a;
    this.cg = this.width + a
}
;
g.m.Rl.prototype.Fo = function() {
    return !this.hj && !this.Ec
}
;
g.m.Lf = function(a, c) {
    this.X = c;
    this.Ob = a;
    this.C = this.Ob.na();
    this.T = c.T ? new g.m.vu(this.C,c.T) : null;
    this.Mm = fb(c) && !c.isCollapsed();
    this.isCollapsed = c.isCollapsed();
    this.zd = c.zd();
    this.L = c.L;
    this.Oj = this.width = this.tn = this.height = 0;
    this.rows = [];
    this.nC = [];
    this.hC = [];
    this.Hc = new g.m.vk(this.C);
    this.Vb = new g.m.Yj(this.C);
    this.yt = this.Ef = 0
}
;
b = g.m.Lf.prototype;
b.measure = function() {
    var a = !!this.X.qa
      , c = (this.X.Hg ? "cap" === this.X.Hg : this.C.rq) && !this.T && !a
      , d = this.Hc.Jw(this.X) ? g.m.dm : g.m.cr;
    this.Hc.elements.push(new d(this.C));
    c ? (a = new g.m.$t(this.C),
    this.Hc.elements.push(a),
    this.Hc.qh = a.km) : a && (this.Hc.RI = !0,
    this.Hc.connection = new g.m.zu(this.C,this.X.qa),
    this.Hc.elements.push(this.Hc.connection));
    this.X.Z.length && this.X.Z[0].type == g.lb.df && !this.X.isCollapsed() ? this.Hc.minHeight = this.C.MG : this.Hc.minHeight = this.C.LG;
    d = g.m.dm;
    this.Hc.elements.push(new d(this.C,"right"));
    this.rows.push(this.Hc);
    a = new g.m.Rl(this.C);
    this.nC.push(a);
    d = nb(this.X);
    c = 0;
    for (var e; e = d[c]; c++) {
        var f = new g.m.ke(this.C,e);
        this.isCollapsed && e.WA ? this.hC.push(f) : a.elements.push(f)
    }
    e = null;
    for (c = 0; d = this.X.Z[c]; c++)
        if (d.isVisible()) {
            !e || d.type != g.lb.df && e.type != g.lb.df && (d.type != g.lb.rg && d.type != g.lb.jg || this.Mm) || (this.rows.push(a),
            a = new g.m.Rl(this.C),
            this.nC.push(a));
            for (e = 0; f = d.ib[e]; e++)
                a.elements.push(new g.m.ve(this.C,f,d));
            this.EA(d, a);
            e = d
        }
    this.isCollapsed && (a.cC = !0,
    a.elements.push(new g.m.du(this.C)));
    (a.elements.length || a.Hm) && this.rows.push(a);
    this.Zx();
    this.rows.push(this.Vb);
    this.DA();
    a = this.rows;
    this.rows = [];
    for (c = 0; c < a.length; c++)
        if (this.rows.push(a[c]),
        c != a.length - 1) {
            d = this.rows;
            e = d.push;
            f = a[c];
            var h = a[c + 1]
              , k = new g.m.ir(this.C,this.UB(f, h),this.width - this.Ef);
            f.Ec && (k.DB = !0);
            h.Ec && (k.fP = !0);
            e.call(d, k)
        }
    for (e = d = c = a = 0; f = this.rows[e]; e++)
        f.measure(),
        c = Math.max(c, f.width),
        f.Ec && (a = Math.max(a, f.width - Yc(f).width)),
        d = Math.max(d, f.cg);
    this.Oj = a;
    this.width = c;
    for (e = 0; f = this.rows[e]; e++)
        f.Ec && (f.Oj = this.Oj);
    this.tn = Math.max(c, d);
    this.T && (this.Ef = this.T.width,
    this.width += this.T.width,
    this.tn += this.T.width);
    this.Yu();
    this.zB()
}
;
b.Zx = function() {
    this.Vb.dC = !!this.X.ba;
    this.Vb.minHeight = this.X.Z.length && this.X.Z[this.X.Z.length - 1].type == g.lb.df ? this.C.oE : this.C.pE;
    this.Vb.Jw(this.X) ? this.Vb.elements.push(new g.m.dm(this.C)) : this.Vb.elements.push(new g.m.cr(this.C));
    this.Vb.dC && (this.Vb.connection = new g.m.qu(this.C,this.X.ba),
    this.Vb.elements.push(this.Vb.connection));
    this.Vb.elements.push(new g.m.dm(this.C,"right"))
}
;
b.EA = function(a, c) {
    this.Mm && a.type == g.lb.rg ? (c.elements.push(new g.m.xi(this.C,a)),
    c.Iw = !0) : a.type == g.lb.df ? (c.elements.push(new g.m.Ki(this.C,a)),
    c.Ec = !0) : a.type == g.lb.rg ? (c.elements.push(new g.m.Mq(this.C,a)),
    c.hj = !0) : a.type == g.lb.jg && (c.minHeight = Math.max(c.minHeight, a.aa() && a.aa().Pa ? this.C.QE : this.C.sz),
    c.Hm = !0);
    null == c.align && (c.align = a.align)
}
;
b.DA = function() {
    for (var a = 0, c; c = this.rows[a]; a++) {
        var d = c.elements;
        c.elements = [];
        c.zt() && c.elements.push(new g.m.eh(this.C,this.Hk(null, d[0])));
        if (d.length) {
            for (var e = 0; e < d.length - 1; e++)
                c.elements.push(d[e]),
                c.elements.push(new g.m.eh(this.C,this.Hk(d[e], d[e + 1])));
            c.elements.push(d[d.length - 1]);
            c.Fo() && c.elements.push(new g.m.eh(this.C,this.Hk(d[d.length - 1], null)))
        }
    }
}
;
b.Hk = function(a, c) {
    if (!a && c && g.m.A.al(c))
        return this.C.nA;
    if (a && g.m.A.nj(a) && !c) {
        if (g.m.A.gp(a))
            return this.C.ng;
        if (g.m.A.mj(a))
            return this.C.Id;
        if (g.m.A.al(a))
            return this.C.ng
    }
    return a && g.m.A.hp(a) && c && (g.m.A.Qm(c) || g.m.A.pj(c)) ? c.yf : a && g.m.A.oj(a) && c && (g.m.A.Qm(c) || g.m.A.pj(c)) ? c.yf - this.C.Hb : this.C.bf
}
;
b.Yu = function() {
    for (var a = 0, c; c = this.rows[a]; a++)
        if (c.Ec)
            Zc(this, c);
        else {
            var d = this.Ro(c) - c.width;
            0 < d && $c(c, d);
            g.m.A.fJ(c) && (c.cg = c.width)
        }
}
;
b.Ro = function() {
    return this.width - this.Ef
}
;
function $c(a, c) {
    a: {
        var d = 0;
        for (var e; e = a.elements[d]; d++)
            if (g.m.A.wf(e)) {
                d = e;
                break a
            }
        d = null
    }
    a: {
        e = a.elements.length - 1;
        for (var f; f = a.elements[e]; e--)
            if (g.m.A.wf(f)) {
                e = f;
                break a
            }
        e = null
    }
    if (a.hj || a.Ec)
        a.cg += c;
    a.align == g.Jb.Jf.Ib ? e.width += c : a.align == g.Jb.Jf.Aq ? (d.width += c / 2,
    e.width += c / 2) : a.align == g.Jb.Jf.Mc ? d.width += c : e.width += c;
    a.width += c
}
function Zc(a, c) {
    var d = Yc(c)
      , e = c.width - d.width
      , f = a.Oj;
    e = f - e;
    0 < e && $c(c, e);
    e = c.width;
    f = a.Ro(c);
    d.width += f - e;
    d.height = Math.max(d.height, c.height);
    c.width += f - e;
    c.cg = Math.max(c.width, a.Oj + c.$A)
}
b.UB = function() {
    return this.C.bf
}
;
b.LB = function(a, c) {
    return g.m.A.wf(c) ? a.Tc + c.height / 2 : g.m.A.ts(a) ? (a = a.Tc + a.height - a.zo,
    g.m.A.pj(c) ? a + c.height / 2 : a - c.height / 2) : g.m.A.As(a) ? g.m.A.Zk(c) ? a.qh - c.height / 2 : a.qh + c.height / 2 : a.Tc + a.height / 2
}
;
function ad(a, c) {
    for (var d = c.Ya, e = 0, f; f = c.elements[e]; e++)
        g.m.A.wf(f) && (f.height = c.height),
        f.Ya = d,
        f.om = a.LB(c, f),
        d += f.width
}
b.zB = function() {
    for (var a = 0, c = 0, d = 0, e; e = this.rows[d]; d++)
        e.Tc = c,
        e.Ya = this.Ef,
        c += e.height,
        a = Math.max(a, e.cg),
        ad(this, e);
    this.T && this.X.ba && this.X.ba.isConnected() && (a = Math.max(a, E(this.X.ba.sa()).width));
    this.tn = a + this.Ef;
    this.height = c;
    this.yt = this.Hc.qh;
    this.Vb.ff = c - this.Vb.zo
}
;
g.m.Dd = function(a, c) {
    this.X = a;
    this.Ha = c;
    a.jb();
    this.ss = this.fb = "";
    this.C = c.Ob.na()
}
;
b = g.m.Dd.prototype;
b.draw = function() {
    bd(this);
    cd(this);
    dd(this);
    this.X.Nb.xy(this.fb + "\n" + this.ss);
    this.Ha.L && this.X.Nb.nw();
    ed(this)
}
;
function ed(a) {
    a.X.height = a.Ha.height;
    a.X.width = a.Ha.tn
}
function bd(a) {
    for (var c = 0, d; d = a.Ha.hC[c]; c++)
        d.icon.Xd.setAttribute("display", "none")
}
function cd(a) {
    a.ew();
    for (var c = 1; c < a.Ha.rows.length - 1; c++) {
        var d = a.Ha.rows[c];
        d.cC ? a.Co(d) : d.Ec ? a.dw(d) : d.hj ? a.fw(d) : a.vB(d)
    }
    a.$v();
    a.cw()
}
b.ew = function() {
    var a = this.Ha.Hc
      , c = a.elements
      , d = this.Ha.Hc;
    if (d.connection) {
        var e = d.Ya + d.yf;
        L(d.connection.Qd, this.Ha.L ? -e : e, 0)
    }
    this.fb += g.g.D.moveBy(a.Ya, this.Ha.yt);
    for (d = 0; e = c[d]; d++)
        g.m.A.oj(e) ? this.fb += this.C.Sn.Ny : g.m.A.tC(e) ? this.fb += this.C.Sn.UK : g.m.A.Qm(e) ? this.fb += e.shape.Cj : g.m.A.Zk(e) ? this.fb += this.C.cm.path : g.m.A.wf(e) && (this.fb += g.g.D.oa("h", e.width));
    this.fb += g.g.D.oa("v", a.height)
}
;
b.Co = function(a) {
    this.fb += this.C.Sl.path + g.g.D.oa("v", a.height - this.C.Sl.height)
}
;
b.fw = function(a) {
    var c = Yc(a);
    this.hD(a);
    var d = "function" == typeof c.shape.Af ? c.shape.Af(c.height) : c.shape.Af;
    this.fb += g.g.D.oa("H", c.Ya + c.width) + d + g.g.D.oa("v", a.height - c.qm)
}
;
b.dw = function(a) {
    var c = Yc(a);
    this.fb += g.g.D.oa("H", c.Ya + c.yf + c.shape.width) + (c.shape.dD + g.g.D.oa("h", -(c.yf - this.C.Tq.width)) + this.C.Tq.Wx) + g.g.D.oa("v", a.height - 2 * this.C.Tq.height) + this.C.Tq.dt + g.g.D.oa("H", a.Ya + a.width);
    this.kD(a)
}
;
b.vB = function(a) {
    this.fb += g.g.D.oa("V", a.Tc + a.height)
}
;
b.$v = function() {
    var a = this.Ha.Vb
      , c = a.elements;
    this.jD();
    for (var d = 0, e = "", f = c.length - 1, h; h = c[f]; f--)
        g.m.A.pj(h) ? e += h.shape.dD : g.m.A.hp(h) ? e += g.g.D.oa("H", a.Ya) : g.m.A.oj(h) ? e += this.C.Sn.jv : g.m.A.tC(h) ? (e += this.C.Sn.nH,
        d = this.C.Sn.vK) : g.m.A.wf(h) && (e += g.g.D.oa("h", -1 * h.width));
    this.fb += g.g.D.oa("V", a.ff - d);
    this.fb += e
}
;
b.cw = function() {
    var a = this.Ha.T;
    if (this.Ha.T) {
        var c = this.Ha.Ef + this.Ha.T.so;
        L(this.X.T, this.Ha.L ? -c : c, this.Ha.T.Ee)
    }
    a && (c = a.Ee + a.height,
    a = "function" == typeof a.shape.xp ? a.shape.xp(a.height) : a.shape.xp,
    this.fb += g.g.D.oa("V", c) + a);
    this.fb += "z"
}
;
function dd(a) {
    for (var c = 0, d; d = a.Ha.rows[c]; c++)
        for (var e = 0, f; f = d.elements[e]; e++)
            if (g.m.A.mj(f))
                a.bw(f);
            else if (g.m.A.Lm(f) || g.m.A.Mh(f)) {
                var h = a;
                if (g.m.A.Mh(f))
                    var k = f.Ho.Ma();
                else
                    g.m.A.Lm(f) && (k = f.icon.Xd);
                var l = f.om - f.height / 2
                  , m = f.Ya
                  , n = "";
                h.Ha.L && (m = -(m + f.width),
                f.mI && (m += f.width,
                n = "scale(-1 1)"));
                g.m.A.Lm(f) ? (k.setAttribute("display", "block"),
                k.setAttribute("transform", "translate(" + m + "," + l + ")"),
                Dc(f.icon)) : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
                h.Ha.zd && k.setAttribute("display", "none")
            }
}
b.bw = function(a) {
    var c = a.width
      , d = a.height
      , e = a.Ee
      , f = a.qm + e;
    this.ss += g.g.D.moveTo(a.Ya + a.yg, a.om - d / 2) + g.g.D.oa("v", e) + a.shape.Af + g.g.D.oa("v", d - f) + g.g.D.oa("h", c - a.yg) + g.g.D.oa("v", -d) + "z";
    this.iD(a)
}
;
b.iD = function(a) {
    var c = a.om - a.height / 2;
    if (a.Qd) {
        var d = a.Ya + a.yg + a.so;
        this.Ha.L && (d *= -1);
        L(a.Qd, d, c + a.Ee)
    }
}
;
b.kD = function(a) {
    var c = Yc(a);
    if (c.Qd) {
        var d = a.Ya + a.Oj + c.yf;
        this.Ha.L && (d *= -1);
        L(c.Qd, d, a.Tc)
    }
}
;
b.hD = function(a) {
    var c = Yc(a);
    if (c.Qd) {
        var d = a.Ya + a.width;
        this.Ha.L && (d *= -1);
        L(c.Qd, d, a.Tc)
    }
}
;
b.jD = function() {
    var a = this.Ha.Vb;
    if (a.connection) {
        var c = a.connection
          , d = c.Ya;
        L(c.Qd, this.Ha.L ? -d : d, a.ff)
    }
}
;
g.h.yi = function(a, c, d, e) {
    var f = a ? a.u.id : void 0;
    e && e.getType() == g.H.types.ne && (f = e.Oa.id);
    g.h.yi.v.constructor.call(this, f);
    this.ob = a ? a.id : null;
    this.TC = d;
    this.OC = e;
    this.Jg = c
}
;
g.g.object.W(g.h.yi, g.h.ze);
g.h.yi.prototype.type = g.h.ku;
g.h.yi.prototype.Ca = function() {
    var a = g.h.yi.v.Ca.call(this);
    a.isCursor = this.Jg;
    a.blockId = this.ob;
    a.oldNode = this.TC;
    a.newNode = this.OC;
    return a
}
;
g.h.yi.prototype.ka = function(a) {
    g.h.yi.v.ka.call(this, a);
    this.Jg = a.isCursor;
    this.ob = a.blockId;
    this.TC = a.oldNode;
    this.OC = a.newNode
}
;
g.B.register(g.B.U.cc, g.h.ku, g.h.yi);
g.m.zi = function(a, c, d) {
    this.s = a;
    this.qx = d;
    this.Uh = null;
    this.C = c;
    this.tm = null;
    a = this.Jg() ? this.C.Gq : this.C.Wq;
    this.ed = d.Cb || a
}
;
g.m.zi.DE = "blocklyCursor";
g.m.zi.WF = "blocklyMarker";
g.m.zi.sF = .75;
b = g.m.zi.prototype;
b.Ma = function() {
    return this.R
}
;
b.Uo = function() {
    return this.qx
}
;
b.Jg = function() {
    return "cursor" == this.qx.type
}
;
b.eb = function() {
    var a = this.Jg() ? g.m.zi.DE : g.m.zi.WF;
    this.R = g.g.o.N(g.g.F.rc, {
        "class": a
    }, null);
    this.Rh = g.g.o.N(g.g.F.rc, {
        width: this.C.Iq,
        height: this.C.wA
    }, this.R);
    this.uj = g.g.o.N(g.g.F.Dc, {
        width: this.C.Iq,
        height: this.C.wA,
        style: "display: none"
    }, this.Rh);
    this.fl = g.g.o.N(g.g.F.Dc, {
        "class": "blocklyVerticalMarker",
        rx: 10,
        ry: 10,
        style: "display: none"
    }, this.Rh);
    this.dl = g.g.o.N(g.g.F.Ld, {
        transform: "",
        style: "display: none"
    }, this.Rh);
    this.Qh = g.g.o.N(g.g.F.Ld, {
        transform: "",
        style: "display: none",
        fill: "none",
        "stroke-width": this.C.EE
    }, this.Rh);
    this.Jg() && (a = {
        attributeType: "XML",
        attributeName: "fill",
        dur: "1s",
        values: this.ed + ";transparent;transparent;",
        repeatCount: "indefinite"
    },
    g.g.o.N(g.g.F.Jt, a, this.uj),
    g.g.o.N(g.g.F.Jt, a, this.dl),
    a.attributeName = "stroke",
    g.g.o.N(g.g.F.Jt, a, this.Qh));
    return this.R
}
;
function fd(a, c) {
    a.Jg() ? (a.Uh && a.Uh.Yh(null),
    c.Yh(a.Ma())) : (a.Uh && a.Uh.Mj(null),
    c.Mj(a.Ma()));
    a.Uh = c
}
b.draw = function(a, c) {
    if (c) {
        this.C = this.s.Ob.na();
        var d = this.Jg() ? this.C.Gq : this.C.Wq;
        this.ed = this.qx.Cb || d;
        this.uj.setAttribute("fill", this.ed);
        this.fl.setAttribute("stroke", this.ed);
        this.dl.setAttribute("fill", this.ed);
        this.Qh.setAttribute("stroke", this.ed);
        this.Jg() && (d = this.ed + ";transparent;transparent;",
        this.uj.firstChild.setAttribute("values", d),
        this.dl.firstChild.setAttribute("values", d),
        this.Qh.firstChild.setAttribute("values", d));
        d = c.Oa.type;
        if (c.getType() == g.H.types.Jc)
            gd(this, c);
        else if (c.getType() == g.H.types.nk)
            gd(this, c);
        else if (d == g.pa.tc) {
            var e = c.Oa;
            d = e.aa();
            var f = e.kl.x
              , h = e.kl.y;
            e = g.g.D.moveTo(0, 0) + mb(this.C, e).Af;
            this.dl.setAttribute("d", e);
            this.dl.setAttribute("transform", "translate(" + f + "," + h + ")" + (this.s.L ? " scale(-1 1)" : ""));
            this.tm = this.dl;
            fd(this, d);
            hd(this)
        } else if (d == g.pa.bd)
            h = c.Oa,
            d = h.aa(),
            f = 0,
            h = h.kl.y,
            e = E(d).width,
            this.s.L && (f = -e),
            id(this, f, h, e),
            fd(this, d),
            hd(this);
        else if (c.getType() == g.H.types.Fi)
            gd(this, c);
        else if (c.getType() == g.H.types.qd)
            d = c.Oa,
            f = d.Fh().width,
            h = d.Fh().height,
            jd(this, 0, 0, f, h),
            fd(this, d),
            hd(this);
        else if (c.getType() == g.H.types.ne)
            f = c.cE,
            d = f.x,
            f = f.y,
            this.s.L && (d -= this.C.Iq),
            id(this, d, f, this.C.Iq),
            fd(this, this.s),
            hd(this);
        else if (c.getType() == g.H.types.rk) {
            d = c.Oa;
            h = E(d);
            f = h.width + this.C.Hq;
            h = h.height + this.C.Hq;
            var k = e = -this.C.Hq / 2
              , l = -this.C.Hq / 2;
            this.s.L && (k = -(f + e));
            jd(this, k, l, f, h);
            fd(this, d);
            hd(this)
        }
        d = c.aa();
        a = new (g.h.get(g.h.ku))(d,this.Jg(),a,c);
        g.h.Ga(a);
        a = this.tm.childNodes[0];
        void 0 !== a && a.beginElement && a.beginElement()
    } else
        this.Va()
}
;
function gd(a, c) {
    c = c.aa();
    var d = c.width
      , e = c.height
      , f = e * g.m.zi.sF
      , h = a.C.CE;
    if (c.qa) {
        var k = mb(a.C, c.qa);
        e = k;
        d = g.g.D.moveBy(-h, f) + g.g.D.oa("V", -h) + g.g.D.oa("H", a.C.Nn) + e.Cj + g.g.D.oa("H", d + 2 * h) + g.g.D.oa("V", f);
        a.Qh.setAttribute("d", d)
    } else
        c.T ? (f = k = mb(a.C, c.T),
        d = g.g.D.moveBy(d, 0) + g.g.D.oa("h", -(d - f.width)) + g.g.D.oa("v", a.C.em) + f.Af + g.g.D.oa("V", e) + g.g.D.oa("H", d),
        a.Qh.setAttribute("d", d)) : (d = g.g.D.moveBy(-h, f) + g.g.D.oa("V", -h) + g.g.D.oa("H", d + 2 * h) + g.g.D.oa("V", f),
        a.Qh.setAttribute("d", d));
    a.s.L && a.Qh.setAttribute("transform", "scale(-1 1)");
    a.tm = a.Qh;
    fd(a, c);
    hd(a)
}
function hd(a) {
    a.Va();
    a.tm.style.display = ""
}
function id(a, c, d, e) {
    a.uj.setAttribute("x", c);
    a.uj.setAttribute("y", d);
    a.uj.setAttribute("width", e);
    a.tm = a.uj
}
function jd(a, c, d, e, f) {
    a.fl.setAttribute("x", c);
    a.fl.setAttribute("y", d);
    a.fl.setAttribute("width", e);
    a.fl.setAttribute("height", f);
    a.tm = a.fl
}
b.Va = function() {
    this.uj.style.display = "none";
    this.fl.style.display = "none";
    this.dl.style.display = "none";
    this.Qh.style.display = "none"
}
;
b.I = function() {
    this.R && g.g.o.removeNode(this.R)
}
;
g.m.gh = function(a, c, d) {
    this.Jb = d;
    this.Xg = a;
    this.ac = g.g.o.N(g.g.F.Ld, {
        "class": "blocklyPath"
    }, this.Xg);
    this.style = c;
    this.px = this.xo = null
}
;
b = g.m.gh.prototype;
b.xy = function(a) {
    this.ac.setAttribute("d", a)
}
;
b.nw = function() {
    this.ac.setAttribute("transform", "scale(-1 1)")
}
;
b.Yh = function(a) {
    a ? (this.Xg.appendChild(a),
    this.xo = a) : this.xo = null
}
;
b.Mj = function(a) {
    a ? (this.xo ? this.Xg.insertBefore(a, this.xo) : this.Xg.appendChild(a),
    this.px = a) : this.px = null
}
;
b.ic = function(a) {
    this.ac.setAttribute("stroke", this.style.vg);
    this.ac.setAttribute("fill", this.style.sh);
    this.TD(a.Pa);
    this.Ry(!a.isEnabled() || fc(a))
}
;
b.$b = function(a) {
    this.style = a
}
;
function lb(a, c, d) {
    d ? g.g.o.Fa(a.Xg, c) : g.g.o.dc(a.Xg, c)
}
b.RD = function(a) {
    a ? this.ac.setAttribute("filter", "url(#" + this.Jb.Zr + ")") : this.ac.setAttribute("filter", "none")
}
;
b.TD = function(a) {
    a && (this.ac.setAttribute("stroke", "none"),
    this.ac.setAttribute("fill", this.style.Jr))
}
;
b.Ry = function(a) {
    lb(this, "blocklyDisabled", a);
    a && this.ac.setAttribute("fill", "url(#" + this.Jb.qB + ")")
}
;
g.m.ih = function(a) {
    this.name = a;
    this.Sx = this.C = null
}
;
b = g.m.ih.prototype;
b.Rf = function() {
    return this.name + "-renderer"
}
;
b.S = function(a, c) {
    this.C = this.jx();
    c && (this.Sx = c,
    g.g.object.Oe(this.C, c));
    this.C.Op(a);
    this.C.S()
}
;
b.eb = function(a, c) {
    this.C.eb(a, this.name + "-" + c.name, "." + this.Rf() + "." + c.Rf())
}
;
b.gy = function(a, c) {
    var d = this.na();
    d.I();
    this.C = this.jx();
    this.Sx && g.g.object.Oe(this.C, this.Sx);
    this.C.ft = d.ft;
    this.C.Op(c);
    this.C.S();
    this.eb(a, c)
}
;
b.I = function() {
    this.C && this.C.I()
}
;
b.jx = function() {
    return new g.m.bh
}
;
b.EC = function(a) {
    return new g.m.Lf(this,a)
}
;
b.CC = function(a, c) {
    return new g.m.Dd(a,c)
}
;
b.DC = function(a, c) {
    return new g.m.gh(a,c,this.C)
}
;
b.na = function() {
    return this.C
}
;
b.Ia = function(a) {
    var c = this.EC(a);
    c.measure();
    this.CC(a, c).draw()
}
;
g.wa = {};
g.wa.bh = function() {
    g.wa.bh.v.constructor.call(this);
    this.Xt = !1;
    this.ad = 1;
    this.XF = 30;
    this.lA = -this.pu / 2
}
;
g.g.object.W(g.wa.bh, g.m.bh);
g.wa.bh.prototype.tw = function(a) {
    return g.wa.bh.v.tw.call(this, a).concat([a + " .blocklyInsertionMarker>.blocklyPathLight,", a + " .blocklyInsertionMarker>.blocklyPathDark {", "fill-opacity: " + this.Sq + ";", "stroke: none;", "}"])
}
;
g.wa.Gz = function(a) {
    this.Ha = a;
    this.cp = this.Ba = "";
    this.cd = this.Ha.L;
    a = a.Ob;
    this.C = a.na();
    this.Le = a.Le;
    this.re = this.Le.OFFSET;
    this.Rx = this.Le.gG;
    this.Jm = this.Le.AF;
    this.Bp = this.Le.yu;
    this.CJ = this.Le.Wl;
    this.KK = this.Le.cm;
    this.wC = this.Le.Sl
}
;
g.wa.Gz.prototype.Co = function(a) {
    this.Ha.L && (this.Ba += this.wC.Cj + g.g.D.oa("v", a.height - this.wC.height - this.re))
}
;
function kd(a, c) {
    var d = c.Ya + c.width - a.re;
    c.DB && (a.Ba += g.g.D.oa("H", d));
    a.cd && (a.Ba += g.g.D.oa("H", d),
    c.height > a.re && (a.Ba += g.g.D.oa("V", c.Tc + c.height - a.re)))
}
;g.wa.xi = function(a, c) {
    g.wa.xi.v.constructor.call(this, a, c);
    this.Yi && (this.width += this.C.ad,
    this.height += this.C.ad)
}
;
g.g.object.W(g.wa.xi, g.m.xi);
g.wa.Ki = function(a, c) {
    g.wa.Ki.v.constructor.call(this, a, c);
    this.Yi && (this.height += this.C.ad)
}
;
g.g.object.W(g.wa.Ki, g.m.Ki);
g.wa.Lf = function(a, c) {
    g.wa.Lf.v.constructor.call(this, a, c)
}
;
g.g.object.W(g.wa.Lf, g.m.Lf);
b = g.wa.Lf.prototype;
b.Zx = function() {
    g.wa.Lf.v.Zx.call(this);
    this.X.Z.length && this.X.Z[this.X.Z.length - 1].type == g.lb.df || (this.Vb.minHeight = this.C.bf - this.C.ad)
}
;
b.EA = function(a, c) {
    this.Mm && a.type == g.lb.rg ? (c.elements.push(new g.wa.xi(this.C,a)),
    c.Iw = !0) : a.type == g.lb.df ? (c.elements.push(new g.wa.Ki(this.C,a)),
    c.Ec = !0) : a.type == g.lb.rg ? (c.elements.push(new g.m.Mq(this.C,a)),
    c.hj = !0) : a.type == g.lb.jg && (c.minHeight = Math.max(c.minHeight, this.C.sz),
    c.Hm = !0);
    this.Mm || null != c.align || (c.align = a.align)
}
;
b.DA = function() {
    for (var a = !1, c = 0, d; d = this.rows[c]; c++)
        d.hj && (a = !0);
    for (c = 0; d = this.rows[c]; c++) {
        var e = d.elements;
        d.elements = [];
        d.zt() && d.elements.push(new g.m.eh(this.C,this.Hk(null, e[0])));
        if (e.length) {
            for (var f = 0; f < e.length - 1; f++) {
                d.elements.push(e[f]);
                var h = this.Hk(e[f], e[f + 1]);
                d.elements.push(new g.m.eh(this.C,h))
            }
            d.elements.push(e[e.length - 1]);
            d.Fo() && (h = this.Hk(e[e.length - 1], null),
            a && d.Hm && (h += this.C.jr),
            d.elements.push(new g.m.eh(this.C,h)))
        }
    }
}
;
b.Hk = function(a, c) {
    if (!a)
        return c && g.m.A.Mh(c) && c.Yd ? this.C.bf : c && g.m.A.mj(c) ? this.C.Tz : c && g.m.A.al(c) ? this.C.nA : this.C.Id;
    if (!g.m.A.nj(a) && (!c || g.m.A.al(c)))
        return g.m.A.Mh(a) && a.Yd ? this.C.bf : g.m.A.Lm(a) ? 2 * this.C.Id + 1 : g.m.A.Zk(a) ? this.C.ng : g.m.A.eJ(a) ? this.C.Id : g.m.A.oj(a) ? this.C.$F : g.m.A.rC(a) ? this.C.ng : this.C.Id;
    if (g.m.A.nj(a) && !c) {
        if (g.m.A.gp(a))
            return this.C.ng;
        if (g.m.A.mj(a))
            return this.C.Id;
        if (g.m.A.al(a))
            return this.C.ng
    }
    if (!g.m.A.nj(a) && c && g.m.A.nj(c)) {
        if (g.m.A.Mh(a) && a.Yd) {
            if (g.m.A.mj(c) || g.m.A.gp(c))
                return this.C.BG
        } else {
            if (g.m.A.mj(c) || g.m.A.gp(c))
                return this.C.Tz;
            if (g.m.A.al(c))
                return this.C.Id
        }
        return this.C.Id - 1
    }
    if (g.m.A.Lm(a) && c && !g.m.A.nj(c))
        return this.C.Id;
    if (g.m.A.mj(a) && c && g.m.A.Mh(c))
        return c.Yd ? this.C.bf : this.C.Id;
    if (g.m.A.hp(a) && c) {
        if (g.m.A.Zk(c))
            return this.C.ng;
        if (g.m.A.Qm(c))
            return c.yf;
        if (g.m.A.pj(c))
            return a = (this.L ? 1 : -1) * this.C.ad / 2,
            c.yf + a
    }
    if (g.m.A.oj(a) && c) {
        if (g.m.A.Qm(c))
            return c.yf - this.C.Hb;
        if (g.m.A.pj(c))
            return a = (this.L ? 1 : -1) * this.C.ad / 2,
            c.yf - this.C.Hb + a
    }
    return g.m.A.Mh(a) && c && g.m.A.Mh(c) && a.Yd == c.Yd || c && g.m.A.rC(c) ? this.C.Id : this.C.bf
}
;
b.UB = function(a, c) {
    return g.m.A.As(a) && g.m.A.ts(c) ? this.C.RE : g.m.A.As(a) || g.m.A.ts(c) ? this.C.ng : a.hj && c.hj ? this.C.Id : !a.Ec && c.Ec ? this.C.mE : a.Ec && c.Ec || !a.Ec && c.Hm || a.Hm ? this.C.Id : this.C.bf
}
;
b.LB = function(a, c) {
    if (g.m.A.wf(c))
        return a.Tc + c.height / 2;
    if (g.m.A.ts(a))
        return a = a.Tc + a.height - a.zo,
        g.m.A.pj(c) ? a + c.height / 2 : a - c.height / 2;
    if (g.m.A.As(a))
        return g.m.A.Zk(c) ? a.qh - c.height / 2 : a.qh + c.height / 2;
    var d = a.Tc;
    g.m.A.Mh(c) || g.m.A.Lm(c) ? (d += c.height / 2,
    (a.Iw || a.Ec) && c.height + this.C.oA <= a.height && (d += this.C.oA)) : d = g.m.A.mj(c) ? d + c.height / 2 : d + a.height / 2;
    return d
}
;
b.Yu = function() {
    if (this.Mm) {
        for (var a = 0, c = null, d = this.rows.length - 1, e; e = this.rows[d]; d--)
            e.zx = a,
            g.m.A.aJ(e) && (e.Ec && Zc(this, e),
            c && c.Ec && e.width < c.width ? e.zx = c.width : a = e.width,
            c = e);
        for (d = a = 0; e = this.rows[d]; d++)
            e.Ec ? a = this.Ro(e) : g.m.A.wf(e) ? e.width = Math.max(a, e.zx) : (a = Math.max(a, e.zx) - e.width,
            0 < a && $c(e, a),
            a = e.width)
    } else
        g.wa.Lf.v.Yu.call(this)
}
;
b.Ro = function(a) {
    return this.Mm && a.Ec ? this.Oj + this.C.XF + this.Ef : g.wa.Lf.v.Ro.call(this, a)
}
;
b.zB = function() {
    for (var a = 0, c = 0, d = 0, e; e = this.rows[d]; d++) {
        e.Tc = c;
        e.Ya = this.Ef;
        c += e.height;
        a = Math.max(a, e.cg);
        var f = c - this.Hc.km;
        e == this.Vb && f < this.C.Jn && (f = this.C.Jn - f,
        this.Vb.height += f,
        c += f);
        ad(this, e)
    }
    this.T && this.X.ba && this.X.ba.isConnected() && (a = Math.max(a, E(this.X.ba.sa()).width - this.C.ad));
    this.Vb.ff = c - this.Vb.zo;
    this.tn = a + this.Ef + this.C.ad;
    this.width += this.C.ad;
    this.height = c + this.C.ad;
    this.yt = this.Hc.qh
}
;
g.wa.Dd = function(a, c) {
    g.wa.Dd.v.constructor.call(this, a, c);
    this.Ig = new g.wa.Gz(c)
}
;
g.g.object.W(g.wa.Dd, g.m.Dd);
b = g.wa.Dd.prototype;
b.draw = function() {
    bd(this);
    cd(this);
    dd(this);
    var a = this.X.Nb;
    a.xy(this.fb + "\n" + this.ss);
    var c = this.Ig;
    a.xl.setAttribute("d", c.Ba + "\n" + c.cp);
    this.Ha.L && a.nw();
    ed(this)
}
;
b.ew = function() {
    var a = this.Ig
      , c = this.Ha.Hc;
    a.Ba += g.g.D.moveBy(c.Ya, a.Ha.yt);
    for (var d = 0, e; e = c.elements[d]; d++)
        g.m.A.hp(e) ? a.Ba += a.Le.kA : g.m.A.oj(e) ? a.Ba += a.Rx.Ny(a.cd) : g.m.A.Qm(e) ? a.Ba += a.CJ.Cj : g.m.A.Zk(e) ? a.Ba += a.KK.path(a.cd) : g.m.A.wf(e) && 0 != e.width && (a.Ba += g.g.D.oa("H", e.Ya + e.width - a.re));
    a.Ba += g.g.D.oa("H", c.Ya + c.width - a.re);
    kd(this.Ig, this.Ha.Hc);
    g.wa.Dd.v.ew.call(this)
}
;
b.Co = function(a) {
    this.Ig.Co(a);
    g.wa.Dd.v.Co.call(this, a)
}
;
b.fw = function(a) {
    var c = this.Ig
      , d = Yc(a);
    if (c.cd) {
        var e = a.height - d.qm;
        c.Ba += g.g.D.moveTo(d.Ya + d.width - c.re, a.Tc) + c.Bp.Af(c.cd) + g.g.D.oa("v", e)
    } else
        c.Ba += g.g.D.moveTo(d.Ya + d.width, a.Tc) + c.Bp.Af(c.cd);
    g.wa.Dd.v.fw.call(this, a)
}
;
b.dw = function(a) {
    var c = this.Ig
      , d = Yc(a);
    if (c.cd) {
        var e = a.height - 2 * c.Jm.height;
        c.Ba += g.g.D.moveTo(d.Ya, a.Tc) + c.Jm.Wx(c.cd) + g.g.D.oa("v", e) + c.Jm.dt(c.cd) + g.g.D.lineTo(a.width - d.Ya - c.Jm.width, 0)
    } else
        c.Ba += g.g.D.moveTo(d.Ya, a.Tc + a.height) + c.Jm.dt(c.cd) + g.g.D.lineTo(a.width - d.Ya - c.Jm.width, 0);
    g.wa.Dd.v.dw.call(this, a)
}
;
b.vB = function(a) {
    kd(this.Ig, a);
    this.fb += g.g.D.oa("H", a.Ya + a.width) + g.g.D.oa("V", a.Tc + a.height)
}
;
b.$v = function() {
    var a = this.Ig
      , c = this.Ha.Vb;
    if (a.cd)
        a.Ba += g.g.D.oa("V", c.ff - a.re);
    else {
        var d = a.Ha.Vb.elements[0];
        g.m.A.hp(d) ? a.Ba += g.g.D.moveTo(c.Ya + a.re, c.ff - a.re) : g.m.A.oj(d) && (a.Ba += g.g.D.moveTo(c.Ya, c.ff),
        a.Ba += a.Rx.jv())
    }
    g.wa.Dd.v.$v.call(this)
}
;
b.cw = function() {
    var a = this.Ig
      , c = a.Ha.T;
    c && (c = c.Ee + c.height,
    a.cd ? a.Ba += g.g.D.moveTo(a.Ha.Ef, c) : (a.Ba += g.g.D.moveTo(a.Ha.Ef + a.re, a.Ha.Vb.ff - a.re),
    a.Ba += g.g.D.oa("V", c)),
    a.Ba += a.Bp.xp(a.cd));
    a.cd || (c = a.Ha.Hc,
    a.Ba = g.m.A.oj(c.elements[0]) ? a.Ba + g.g.D.oa("V", a.Rx.height) : a.Ba + g.g.D.oa("V", c.qh + a.re));
    g.wa.Dd.v.cw.call(this)
}
;
b.bw = function(a) {
    var c = this.Ig
      , d = c.re
      , e = a.Ya + a.yg
      , f = a.om - a.height / 2
      , h = a.width - a.yg
      , k = f + d;
    if (c.cd) {
        f = a.Ee - d;
        var l = a.height - (a.Ee + a.qm) + d;
        c.cp += g.g.D.moveTo(e - d, k) + g.g.D.oa("v", f) + c.Bp.Af(c.cd) + g.g.D.oa("v", l) + g.g.D.oa("h", h)
    } else
        c.cp += g.g.D.moveTo(a.Ya + a.width + d, k) + g.g.D.oa("v", a.height) + g.g.D.oa("h", -h) + g.g.D.moveTo(e, f + a.Ee) + c.Bp.Af(c.cd);
    g.wa.Dd.v.bw.call(this, a)
}
;
b.iD = function(a) {
    var c = a.om - a.height / 2;
    if (a.Qd) {
        var d = a.Ya + a.yg + this.C.ad;
        this.Ha.L && (d *= -1);
        L(a.Qd, d, c + a.Ee + this.C.ad)
    }
}
;
b.kD = function(a) {
    var c = Yc(a);
    if (c.Qd) {
        var d = a.Ya + a.Oj + c.yf;
        d = this.Ha.L ? -1 * d : d + this.C.ad;
        L(c.Qd, d, a.Tc + this.C.ad)
    }
}
;
b.hD = function(a) {
    var c = Yc(a);
    if (c.Qd) {
        var d = a.Ya + a.width + this.C.ad;
        this.Ha.L && (d *= -1);
        L(c.Qd, d, a.Tc)
    }
}
;
b.jD = function() {
    var a = this.Ha.Vb;
    if (a.connection) {
        var c = a.connection
          , d = c.Ya;
        L(c.Qd, (this.Ha.L ? -d : d) + this.C.ad / 2, a.ff + this.C.ad)
    }
}
;
g.wa.Fz = function(a) {
    this.rm = a;
    this.OFFSET = .5;
    this.kA = g.g.D.moveBy(this.OFFSET, this.OFFSET)
}
;
b = g.wa.Fz.prototype;
b.S = function() {
    this.AF = ld(this);
    this.gG = md(this);
    this.yu = this.nx();
    this.Wl = this.mx();
    this.Sl = this.lx();
    this.cm = this.ox()
}
;
function ld(a) {
    var c = a.rm.Hb;
    a = a.OFFSET;
    var d = (1 - Math.SQRT1_2) * (c + a) - a
      , e = g.g.D.moveBy(d, d) + g.g.D.arc("a", "0 0,0", c, g.g.D.Xa(-d - a, c - d))
      , f = g.g.D.arc("a", "0 0,0", c + a, g.g.D.Xa(c + a, c + a))
      , h = g.g.D.moveBy(d, -d) + g.g.D.arc("a", "0 0,0", c + a, g.g.D.Xa(c - d, d + a));
    return {
        width: c + a,
        height: c,
        Wx: function(k) {
            return k ? e : ""
        },
        dt: function(k) {
            return k ? f : h
        }
    }
}
function md(a) {
    var c = a.rm.Hb;
    a = a.OFFSET;
    var d = (1 - Math.SQRT1_2) * (c - a) + a
      , e = g.g.D.moveBy(d, d) + g.g.D.arc("a", "0 0,1", c - a, g.g.D.Xa(c - d, -d + a))
      , f = g.g.D.moveBy(a, c) + g.g.D.arc("a", "0 0,1", c - a, g.g.D.Xa(c, -c + a))
      , h = -d
      , k = g.g.D.moveBy(d, h) + g.g.D.arc("a", "0 0,1", c - a, g.g.D.Xa(-d + a, -h - c));
    return {
        height: c,
        Ny: function(l) {
            return l ? e : f
        },
        jv: function() {
            return k
        }
    }
}
b.nx = function() {
    var a = this.rm.jr
      , c = this.rm.Vn
      , d = g.g.D.moveBy(-2, -c + 3.4) + g.g.D.lineTo(-.45 * a, -2.1)
      , e = g.g.D.oa("v", 2.5) + g.g.D.moveBy(.97 * -a, 2.5) + g.g.D.curve("q", [g.g.D.Xa(.05 * -a, 10), g.g.D.Xa(.3 * a, 9.5)]) + g.g.D.moveBy(.67 * a, -1.9) + g.g.D.oa("v", 2.5)
      , f = g.g.D.oa("v", -1.5) + g.g.D.moveBy(-.92 * a, -.5) + g.g.D.curve("q", [g.g.D.Xa(-.19 * a, -5.5), g.g.D.Xa(0, -11)]) + g.g.D.moveBy(.92 * a, 1)
      , h = g.g.D.moveBy(-5, c - .7) + g.g.D.lineTo(.46 * a, -2.1);
    return {
        width: a,
        height: c,
        xp: function(k) {
            return k ? d : f
        },
        Af: function(k) {
            return k ? e : h
        }
    }
}
;
b.mx = function() {
    return {
        Cj: g.g.D.oa("h", this.OFFSET) + this.rm.Wl.Cj
    }
}
;
b.lx = function() {
    return {
        Cj: g.g.D.lineTo(5.1, 2.6) + g.g.D.moveBy(-10.2, 6.8) + g.g.D.lineTo(5.1, 2.6),
        height: 12,
        width: 10.2
    }
}
;
b.ox = function() {
    var a = this.rm.cm.height
      , c = g.g.D.moveBy(25, -8.7) + g.g.D.curve("c", [g.g.D.Xa(29.7, -6.2), g.g.D.Xa(57.2, -.5), g.g.D.Xa(75, 8.7)])
      , d = g.g.D.curve("c", [g.g.D.Xa(17.8, -9.2), g.g.D.Xa(45.3, -14.9), g.g.D.Xa(75, -8.7)]) + g.g.D.moveTo(100.5, a + .5);
    return {
        path: function(e) {
            return e ? c : d
        }
    }
}
;
g.wa.gh = function(a, c, d) {
    this.Jb = d;
    this.Xg = a;
    this.aq = g.g.o.N(g.g.F.Ld, {
        "class": "blocklyPathDark",
        transform: "translate(1,1)"
    }, this.Xg);
    this.ac = g.g.o.N(g.g.F.Ld, {
        "class": "blocklyPath"
    }, this.Xg);
    this.xl = g.g.o.N(g.g.F.Ld, {
        "class": "blocklyPathLight"
    }, this.Xg);
    this.Av = "#000000";
    this.style = c
}
;
g.g.object.W(g.wa.gh, g.m.gh);
b = g.wa.gh.prototype;
b.xy = function(a) {
    this.ac.setAttribute("d", a);
    this.aq.setAttribute("d", a)
}
;
b.nw = function() {
    this.ac.setAttribute("transform", "scale(-1 1)");
    this.xl.setAttribute("transform", "scale(-1 1)");
    this.aq.setAttribute("transform", "translate(1,1) scale(-1 1)")
}
;
b.ic = function(a) {
    this.xl.style.display = "";
    this.aq.style.display = "";
    this.xl.setAttribute("stroke", this.style.vg);
    this.aq.setAttribute("fill", this.Av);
    g.wa.gh.v.ic.call(this, a);
    this.ac.setAttribute("stroke", "none")
}
;
b.$b = function(a) {
    this.style = a;
    this.Av = g.g.Cb.fv("#000", this.style.sh, .2) || this.Av
}
;
b.RD = function(a) {
    a ? (this.ac.setAttribute("filter", "url(#" + this.Jb.Zr + ")"),
    this.xl.style.display = "none") : (this.ac.setAttribute("filter", "none"),
    this.xl.style.display = "inline")
}
;
b.TD = function(a) {
    a && (this.xl.style.display = "none",
    this.aq.setAttribute("fill", this.style.Jr),
    this.ac.setAttribute("stroke", "none"),
    this.ac.setAttribute("fill", this.style.Jr))
}
;
b.Ry = function(a) {
    g.wa.gh.v.Ry.call(this, a);
    a && this.ac.setAttribute("stroke", "none")
}
;
g.wa.ih = function(a) {
    g.wa.ih.v.constructor.call(this, a);
    this.Le = null
}
;
g.g.object.W(g.wa.ih, g.m.ih);
b = g.wa.ih.prototype;
b.S = function(a, c) {
    g.wa.ih.v.S.call(this, a, c);
    this.Le = new g.wa.Fz(this.na());
    this.Le.S()
}
;
b.gy = function(a, c) {
    g.wa.ih.v.gy.call(this, a, c);
    this.Le.S()
}
;
b.jx = function() {
    return new g.wa.bh
}
;
b.EC = function(a) {
    return new g.wa.Lf(this,a)
}
;
b.CC = function(a, c) {
    return new g.wa.Dd(a,c)
}
;
b.DC = function(a, c) {
    return new g.wa.gh(a,c,this.na())
}
;
g.m.register("geras", g.wa.ih);
var nd = {
    am: "\u12a0\u121b\u122d\u129b",
    ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
    be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
    "be-tarask": "Tara\u0161kievica",
    bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
    bn: "\u09ac\u09be\u0982\u09b2\u09be",
    br: "Brezhoneg",
    ca: "Catal\u00e0",
    cs: "\u010cesky",
    da: "Dansk",
    de: "Deutsch",
    el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
    en: "English",
    eo: "Esperanto",
    es: "Espa\u00f1ol",
    eu: "Euskara",
    fa: "\u0641\u0627\u0631\u0633\u06cc",
    fi: "Suomi",
    fo: "F\u00f8royskt",
    fr: "Fran\u00e7ais",
    gl: "Galego",
    ha: "Hausa",
    he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
    hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
    hr: "Hrvatski",
    hu: "Magyar",
    hy: "\u0570\u0561\u0575\u0565\u0580\u0567\u0576",
    ia: "Interlingua",
    id: "Bahasa Indonesia",
    ig: "As\u1ee5s\u1ee5 Igbo",
    is: "\u00cdslenska",
    it: "Italiano",
    ja: "\u65e5\u672c\u8a9e",
    kab: "Taqbaylit",
    kn: "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",
    ko: "\ud55c\uad6d\uc5b4",
    lt: "Lietuvi\u0173",
    lv: "Latvie\u0161u",
    ms: "Bahasa Melayu",
    my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
    nb: "Norsk Bokm\u00e5l",
    nl: "Nederlands, Vlaams",
    pl: "Polski",
    pms: "Piemont\u00e8is",
    pt: "Portugu\u00eas",
    "pt-br": "Portugu\u00eas Brasileiro",
    ro: "Rom\u00e2n\u0103",
    ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
    sc: "Sardu",
    sk: "Sloven\u010dina",
    sl: "Sloven\u0161\u010dina",
    sq: "Shqip",
    sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
    "sr-latn": "Srpski",
    sv: "Svenska",
    th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
    ti: "\u1275\u130d\u122d\u129b",
    tr: "T\u00fcrk\u00e7e",
    uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
    ur: "\u0627\u064f\u0631\u062f\u064f\u0648\u202c",
    vi: "Ti\u1ebfng Vi\u1ec7t",
    yo: "\u00c8d\u00e8 Yor\u00f9b\u00e1",
    "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
    "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
}
  , od = "ace ar fa he mzn ps ur".split(" ")
  , pd = window.BlocklyGamesLang
  , qd = window.BlocklyGamesLanguages
  , rd = /\.html$/.test(window.location.pathname);
function sd(a) {
    try {
        if (0 != a.lineno || 0 != a.colno) {
            var c = Date.now();
            if (!(sd.yC + 1E4 > c)) {
                sd.yC = c;
                var d = new XMLHttpRequest
                  , e = "error=" + encodeURIComponent(a.message + " " + a.filename + " " + a.lineno + ":" + a.colno) + "&amp;url=" + encodeURIComponent(window.location);
                d.open("POST", "/errorReporter");
                d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                d.send(e);
                console.log("Error reported.")
            }
        }
    } catch (f) {
        console.log(a.error)
    }
}
sd.yC = 0;
rd || window.addEventListener("error", sd);
var td, ud = Math, vd = ud.floor, wd = Number, xd, yd = window.location.search.match(RegExp("[?&]level=([^&]+)"));
xd = yd ? decodeURIComponent(yd[1].replace(/\+/g, "%20")) : "NaN";
var zd = vd.call(ud, wd(xd));
td = isNaN(zd) ? 1 : g.g.Sa.ug(1, zd, 10);
function Ad() {
    document.title = document.getElementById("title").textContent;
    document.dir = -1 != od.indexOf(pd) ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", pd);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var c = [], d = 0; d < qd.length; d++) {
            var e = qd[d];
            c.push([nd[e], e])
        }
        c.sort(function(h, k) {
            return h[0] > k[0] ? 1 : h[0] < k[0] ? -1 : 0
        });
        for (d = a.options.length = 0; d < c.length; d++) {
            var f = c[d];
            e = f[1];
            f = new Option(f[0],e);
            e == pd && (f.selected = !0);
            a.options.add(f)
        }
        1 >= a.options.length && (a.style.display = "none")
    }
    for (d = 1; 10 >= d; d++)
        a = document.getElementById("level" + d),
        c = !!Bd(d),
        a && c && (a.className += " level_done");
    (d = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(Cd, 1)
}
function Bd(a) {
    var c = Dd;
    try {
        var d = window.localStorage[c + a]
    } catch (e) {}
    return d
}
function R(a) {
    var c;
    (c = document.getElementById(a)) ? (c = c.textContent,
    c = c.replace(/\\n/g, "\n")) : c = null;
    return null === c ? "[Unknown message: " + a + "]" : c
}
function Ed(a, c) {
    if (!a)
        throw TypeError("Element not found: " + a);
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", c, !0);
    a.addEventListener("touchend", function(d) {
        d.preventDefault();
        c(d)
    }, !0)
}
function Fd(a) {
    a %= 360;
    0 > a && (a += 360);
    return a
}
function Cd() {
    if (!rd) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function(d) {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var c = document.createElement("script");
        c.async = 1;
        c.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(c);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
}
;g.i.ADD_COMMENT = "Add Comment";
g.i.CANNOT_DELETE_VARIABLE_PROCEDURE = "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
g.i.CHANGE_VALUE_TITLE = "Change value:";
g.i.CLEAN_UP = "Clean up Blocks";
g.i.COLLAPSED_WARNINGS_WARNING = "Collapsed blocks contain warnings.";
g.i.COLLAPSE_ALL = "Collapse Blocks";
g.i.COLLAPSE_BLOCK = "Collapse Block";
g.i.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue with next iteration of loop";
g.i.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Break out of the containing loop.";
g.i.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Skip the rest of this loop, and continue with the next iteration.";
g.i.CONTROLS_FLOW_STATEMENTS_WARNING = "Warning: This block may only be used within a loop.";
g.i.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each";
g.i.CONTROLS_FOREACH_TITLE = "for each item %1 in list %2";
g.i.CONTROLS_FOREACH_TOOLTIP = "For each item in a list, set the variable '%1' to the item, and then do some statements.";
g.i.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with";
g.i.CONTROLS_FOR_TITLE = "count with %1 from %2 to %3 by %4";
g.i.CONTROLS_FOR_TOOLTIP = "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
g.i.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
g.i.CONTROLS_IF_ELSE_TOOLTIP = "Add a final, catch-all condition to the if block.";
g.i.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
g.i.CONTROLS_IF_IF_TOOLTIP = "Add, remove, or reorder sections to reconfigure this if block.";
g.i.CONTROLS_IF_MSG_ELSE = "else";
g.i.CONTROLS_IF_MSG_ELSEIF = "else if";
g.i.CONTROLS_IF_MSG_IF = "if";
g.i.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
g.i.CONTROLS_IF_TOOLTIP_2 = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
g.i.CONTROLS_IF_TOOLTIP_3 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
g.i.CONTROLS_IF_TOOLTIP_4 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
g.i.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
g.i.CONTROLS_REPEAT_INPUT_DO = "do";
g.i.CONTROLS_REPEAT_TITLE = "repeat %1 times";
g.i.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.";
g.i.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat";
g.i.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until";
g.i.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while";
g.i.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "While a value is false, then do some statements.";
g.i.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "While a value is true, then do some statements.";
g.i.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
g.i.DELETE_BLOCK = "Delete Block";
g.i.DELETE_VARIABLE = "Delete the '%1' variable";
g.i.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
g.i.DELETE_X_BLOCKS = "Delete %1 Blocks";
g.i.DIALOG_CANCEL = "Cancel";
g.i.DIALOG_OK = "OK";
g.i.DISABLE_BLOCK = "Disable Block";
g.i.DUPLICATE_BLOCK = "Duplicate";
g.i.DUPLICATE_COMMENT = "Duplicate Comment";
g.i.ENABLE_BLOCK = "Enable Block";
g.i.EXPAND_ALL = "Expand Blocks";
g.i.EXPAND_BLOCK = "Expand Block";
g.i.EXTERNAL_INPUTS = "External Inputs";
g.i.HELP = "Help";
g.i.INLINE_INPUTS = "Inline Inputs";
g.i.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
g.i.LISTS_CREATE_EMPTY_TITLE = "create empty list";
g.i.LISTS_CREATE_EMPTY_TOOLTIP = "Returns a list, of length 0, containing no data records";
g.i.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
g.i.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Add, remove, or reorder sections to reconfigure this list block.";
g.i.LISTS_CREATE_WITH_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.i.LISTS_CREATE_WITH_INPUT_WITH = "create list with";
g.i.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.";
g.i.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.";
g.i.LISTS_GET_INDEX_FIRST = "first";
g.i.LISTS_GET_INDEX_FROM_END = "# from end";
g.i.LISTS_GET_INDEX_FROM_START = "#";
g.i.LISTS_GET_INDEX_GET = "get";
g.i.LISTS_GET_INDEX_GET_REMOVE = "get and remove";
g.i.LISTS_GET_INDEX_LAST = "last";
g.i.LISTS_GET_INDEX_RANDOM = "random";
g.i.LISTS_GET_INDEX_REMOVE = "remove";
g.i.LISTS_GET_INDEX_TAIL = "";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "Returns the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Removes and returns the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Removes and returns the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Removes and returns the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Removes and returns a random item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Removes the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.";
g.i.LISTS_GET_SUBLIST_END_FROM_END = "to # from end";
g.i.LISTS_GET_SUBLIST_END_FROM_START = "to #";
g.i.LISTS_GET_SUBLIST_END_LAST = "to last";
g.i.LISTS_GET_SUBLIST_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
g.i.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first";
g.i.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end";
g.i.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #";
g.i.LISTS_GET_SUBLIST_TAIL = "";
g.i.LISTS_GET_SUBLIST_TOOLTIP = "Creates a copy of the specified portion of a list.";
g.i.LISTS_INDEX_FROM_END_TOOLTIP = "%1 is the last item.";
g.i.LISTS_INDEX_FROM_START_TOOLTIP = "%1 is the first item.";
g.i.LISTS_INDEX_OF_FIRST = "find first occurrence of item";
g.i.LISTS_INDEX_OF_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
g.i.LISTS_INDEX_OF_LAST = "find last occurrence of item";
g.i.LISTS_INDEX_OF_TOOLTIP = "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";
g.i.LISTS_INLIST = "in list";
g.i.LISTS_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#is-empty";
g.i.LISTS_ISEMPTY_TITLE = "%1 is empty";
g.i.LISTS_ISEMPTY_TOOLTIP = "Returns true if the list is empty.";
g.i.LISTS_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Lists#length-of";
g.i.LISTS_LENGTH_TITLE = "length of %1";
g.i.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.";
g.i.LISTS_REPEAT_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.i.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times";
g.i.LISTS_REPEAT_TOOLTIP = "Creates a list consisting of the given value repeated the specified number of times.";
g.i.LISTS_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
g.i.LISTS_REVERSE_MESSAGE0 = "reverse %1";
g.i.LISTS_REVERSE_TOOLTIP = "Reverse a copy of a list.";
g.i.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set";
g.i.LISTS_SET_INDEX_INPUT_TO = "as";
g.i.LISTS_SET_INDEX_INSERT = "insert at";
g.i.LISTS_SET_INDEX_SET = "set";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Inserts the item at the start of a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Inserts the item at the specified position in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Append the item to the end of a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Inserts the item randomly in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Sets the item at the specified position in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.";
g.i.LISTS_SORT_HELPURL = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
g.i.LISTS_SORT_ORDER_ASCENDING = "ascending";
g.i.LISTS_SORT_ORDER_DESCENDING = "descending";
g.i.LISTS_SORT_TITLE = "sort %1 %2 %3";
g.i.LISTS_SORT_TOOLTIP = "Sort a copy of a list.";
g.i.LISTS_SORT_TYPE_IGNORECASE = "alphabetic, ignore case";
g.i.LISTS_SORT_TYPE_NUMERIC = "numeric";
g.i.LISTS_SORT_TYPE_TEXT = "alphabetic";
g.i.LISTS_SPLIT_HELPURL = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
g.i.LISTS_SPLIT_LIST_FROM_TEXT = "make list from text";
g.i.LISTS_SPLIT_TEXT_FROM_LIST = "make text from list";
g.i.LISTS_SPLIT_TOOLTIP_JOIN = "Join a list of texts into one text, separated by a delimiter.";
g.i.LISTS_SPLIT_TOOLTIP_SPLIT = "Split text into a list of texts, breaking at each delimiter.";
g.i.LISTS_SPLIT_WITH_DELIMITER = "with delimiter";
g.i.LOGIC_BOOLEAN_FALSE = "false";
g.i.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values";
g.i.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
g.i.LOGIC_BOOLEAN_TRUE = "true";
g.i.LOGIC_COMPARE_HELPURL = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
g.i.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
g.i.LOGIC_COMPARE_TOOLTIP_GT = "Return true if the first input is greater than the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_GTE = "Return true if the first input is greater than or equal to the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_LT = "Return true if the first input is smaller than the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_LTE = "Return true if the first input is smaller than or equal to the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_NEQ = "Return true if both inputs are not equal to each other.";
g.i.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
g.i.LOGIC_NEGATE_TITLE = "not %1";
g.i.LOGIC_NEGATE_TOOLTIP = "Returns true if the input is false. Returns false if the input is true.";
g.i.LOGIC_OPERATION_AND = "and";
g.i.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations";
g.i.LOGIC_OPERATION_OR = "or";
g.i.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
g.i.LOGIC_OPERATION_TOOLTIP_OR = "Return true if at least one of the inputs is true.";
g.i.LOGIC_TERNARY_CONDITION = "test";
g.i.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
g.i.LOGIC_TERNARY_IF_FALSE = "if false";
g.i.LOGIC_TERNARY_IF_TRUE = "if true";
g.i.LOGIC_TERNARY_TOOLTIP = "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
g.i.MATH_ADDITION_SYMBOL = "+";
g.i.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
g.i.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_POWER = "Return the first number raised to the power of the second number.";
g.i.MATH_ATAN2_HELPURL = "https://en.wikipedia.org/wiki/Atan2";
g.i.MATH_ATAN2_TITLE = "atan2 of X:%1 Y:%2";
g.i.MATH_ATAN2_TOOLTIP = "Return the arctangent of point (X, Y) in degrees from -180 to 180.";
g.i.MATH_CHANGE_HELPURL = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
g.i.MATH_CHANGE_TITLE = "change %1 by %2";
g.i.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
g.i.MATH_CONSTANT_HELPURL = "https://en.wikipedia.org/wiki/Mathematical_constant";
g.i.MATH_CONSTANT_TOOLTIP = "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
g.i.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_(graphics)";
g.i.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
g.i.MATH_CONSTRAIN_TOOLTIP = "Constrain a number to be between the specified limits (inclusive).";
g.i.MATH_DIVISION_SYMBOL = "\u00f7";
g.i.MATH_IS_DIVISIBLE_BY = "is divisible by";
g.i.MATH_IS_EVEN = "is even";
g.i.MATH_IS_NEGATIVE = "is negative";
g.i.MATH_IS_ODD = "is odd";
g.i.MATH_IS_POSITIVE = "is positive";
g.i.MATH_IS_PRIME = "is prime";
g.i.MATH_IS_TOOLTIP = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
g.i.MATH_IS_WHOLE = "is whole";
g.i.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
g.i.MATH_MODULO_TITLE = "remainder of %1 \u00f7 %2";
g.i.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
g.i.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
g.i.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
g.i.MATH_NUMBER_TOOLTIP = "A number.";
g.i.MATH_ONLIST_HELPURL = "";
g.i.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
g.i.MATH_ONLIST_OPERATOR_MAX = "max of list";
g.i.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
g.i.MATH_ONLIST_OPERATOR_MIN = "min of list";
g.i.MATH_ONLIST_OPERATOR_MODE = "modes of list";
g.i.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
g.i.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
g.i.MATH_ONLIST_OPERATOR_SUM = "sum of list";
g.i.MATH_ONLIST_TOOLTIP_AVERAGE = "Return the average (arithmetic mean) of the numeric values in the list.";
g.i.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MODE = "Return a list of the most common item(s) in the list.";
g.i.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
g.i.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
g.i.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
g.i.MATH_POWER_SYMBOL = "^";
g.i.MATH_RANDOM_FLOAT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
g.i.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
g.i.MATH_RANDOM_FLOAT_TOOLTIP = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
g.i.MATH_RANDOM_INT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
g.i.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
g.i.MATH_RANDOM_INT_TOOLTIP = "Return a random integer between the two specified limits, inclusive.";
g.i.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
g.i.MATH_ROUND_OPERATOR_ROUND = "round";
g.i.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
g.i.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
g.i.MATH_ROUND_TOOLTIP = "Round a number up or down.";
g.i.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
g.i.MATH_SINGLE_OP_ABSOLUTE = "absolute";
g.i.MATH_SINGLE_OP_ROOT = "square root";
g.i.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
g.i.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
g.i.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
g.i.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
g.i.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
g.i.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
g.i.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
g.i.MATH_SUBTRACTION_SYMBOL = "-";
g.i.MATH_TRIG_ACOS = "acos";
g.i.MATH_TRIG_ASIN = "asin";
g.i.MATH_TRIG_ATAN = "atan";
g.i.MATH_TRIG_COS = "cos";
g.i.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
g.i.MATH_TRIG_SIN = "sin";
g.i.MATH_TRIG_TAN = "tan";
g.i.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
g.i.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
g.i.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
g.i.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
g.i.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
g.i.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
g.i.NEW_VARIABLE = "Create variable...";
g.i.NEW_VARIABLE_TITLE = "New variable name:";
g.i.ORDINAL_NUMBER_SUFFIX = "";
g.i.PROCEDURES_ALLOW_STATEMENTS = "allow statements";
g.i.PROCEDURES_BEFORE_PARAMS = "with:";
g.i.PROCEDURES_CALLNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.";
g.i.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_CALLRETURN_TOOLTIP = "Run the user-defined function '%1' and use its output.";
g.i.PROCEDURES_CALL_BEFORE_PARAMS = "with:";
g.i.PROCEDURES_CREATE_DO = "Create '%1'";
g.i.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function...";
g.i.PROCEDURES_DEFNORETURN_DO = "";
g.i.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
g.i.PROCEDURES_DEFNORETURN_TITLE = "to";
g.i.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.";
g.i.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_DEFRETURN_RETURN = "return";
g.i.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.";
g.i.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition";
g.i.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
g.i.PROCEDURES_IFRETURN_TOOLTIP = "If a value is true, then return a second value.";
g.i.PROCEDURES_IFRETURN_WARNING = "Warning: This block may be used only within a function definition.";
g.i.PROCEDURES_MUTATORARG_TITLE = "input name:";
g.i.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.";
g.i.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs";
g.i.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Add, remove, or reorder inputs to this function.";
g.i.REDO = "Redo";
g.i.REMOVE_COMMENT = "Remove Comment";
g.i.RENAME_VARIABLE = "Rename variable...";
g.i.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
g.i.UNDO = "Undo";
g.i.UNNAMED_KEY = "unnamed";
g.i.VARIABLES_DEFAULT_NAME = "item";
g.i.VARIABLES_GET_CREATE_SET = "Create 'set %1'";
g.i.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get";
g.i.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.";
g.i.VARIABLES_SET = "set %1 to %2";
g.i.VARIABLES_SET_CREATE_GET = "Create 'get %1'";
g.i.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set";
g.i.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.";
g.i.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = "A variable named '%1' already exists for another type: '%2'.";
g.i.WORKSPACE_ARIA_LABEL = "Blockly Workspace";
g.i.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
g.i.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = g.i.CONTROLS_IF_MSG_ELSEIF;
g.i.CONTROLS_IF_ELSE_TITLE_ELSE = g.i.CONTROLS_IF_MSG_ELSE;
g.i.CONTROLS_IF_IF_TITLE_IF = g.i.CONTROLS_IF_MSG_IF;
g.i.CONTROLS_IF_MSG_THEN = g.i.CONTROLS_REPEAT_INPUT_DO;
g.i.LISTS_CREATE_WITH_ITEM_TITLE = g.i.VARIABLES_DEFAULT_NAME;
g.i.LISTS_GET_INDEX_HELPURL = g.i.LISTS_INDEX_OF_HELPURL;
g.i.LISTS_GET_INDEX_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_GET_SUBLIST_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_INDEX_OF_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_SET_INDEX_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.MATH_CHANGE_TITLE_ITEM = g.i.VARIABLES_DEFAULT_NAME;
g.i.PROCEDURES_DEFRETURN_COMMENT = g.i.PROCEDURES_DEFNORETURN_COMMENT;
g.i.PROCEDURES_DEFRETURN_PROCEDURE = g.i.PROCEDURES_DEFNORETURN_PROCEDURE;
g.i.PROCEDURES_DEFRETURN_TITLE = g.i.PROCEDURES_DEFNORETURN_TITLE;
g.i.LOGIC_HUE = "210";
g.i.LOOPS_HUE = "120";
g.i.MATH_HUE = "230";
g.i.LISTS_HUE = "260";
g.i.VARIABLES_HUE = "330";
g.i.PROCEDURES_HUE = "290";
var BlocklyStorage = {}
  , Gd = null
  , Hd = null;
function Id() {
    var a = Gd();
    Jd("xml=" + encodeURIComponent(a))
}
var Kd = {};
function Jd(a) {
    var c = Ld;
    Kd["/storage"] && Kd["/storage"].abort();
    Kd["/storage"] = new XMLHttpRequest;
    Kd["/storage"].onload = function() {
        200 === this.status ? c && c.call(this) : Md(R("Games_httpRequestError") + "\nXHR status: " + this.status);
        Kd["/storage"] = null
    }
    ;
    Kd["/storage"].open("POST", "/storage");
    Kd["/storage"].setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Kd["/storage"].send(a)
}
function Ld() {
    window.location.hash = this.responseText.trim();
    Md(R("Games_linkAlert").replace("%1", window.location.href));
    Hd = Gd()
}
function Md(a) {
    if ("object" === typeof S) {
        var c = document.getElementById("linkButton");
        S.OK(c, a)
    } else
        alert(a)
}
;var w = null
  , Nd = null
  , Od = !1;
function Pd() {
    Ad();
    var a = document.getElementById("linkButton");
    a && (rd ? a.style.display = "none" : (Gd = Qd,
    Ed(a, Id)));
    (a = document.getElementById("languageMenu")) && a.addEventListener("change", Rd, !0)
}
function Qd() {
    if (Od)
        var a = Nd.getValue();
    else {
        a = g.P.kL();
        if (1 == w.xc(!1).length && a.querySelector) {
            var c = a.querySelector("block");
            c && (c.removeAttribute("x"),
            c.removeAttribute("y"))
        }
        a = g.P.pe(a)
    }
    return a
}
function Sd() {
    "object" == typeof BlocklyStorage && null !== Hd && Hd != Qd() && (window.location.hash = "",
    Hd = null)
}
function Td() {
    window.location = (rd ? "index.html" : "./") + "?lang=" + pd
}
function Rd() {
    window.sessionStorage && (window.sessionStorage.cP = Qd());
    var a = document.getElementById("languageMenu");
    a = encodeURIComponent(a.options[a.selectedIndex].value);
    var c = window.location.search;
    c = 1 >= c.length ? "?lang=" + a : /[?&]lang=[^&]*/.test(c) ? c.replace(/([?&]lang=)[^&]*/, "$1" + a) : c.replace(/\?/, "?lang=" + a + "&");
    window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + c
}
function Ud() {
    10 > td ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + pd + "&level=" + (td + 1) : Td()
}
function Vd() {
    var a = "".replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
    return a.replace(/\s+$/, "")
}
function Wd(a) {
    if ("click" == a.type && "touchend" == Xd && Yd + 2E3 > Date.now() || Xd == a.type && Yd + 400 > Date.now())
        return a.preventDefault(),
        a.stopPropagation(),
        !0;
    Xd = a.type;
    Yd = Date.now();
    return !1
}
var Xd = null
  , Yd = 0;
function Zd() {
    setTimeout(function() {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "third-party/JS-Interpreter/compressed.js";
        document.head.appendChild(a)
    }, 1)
}
function $d() {
    setTimeout(function() {
        var a = document.createElement("link");
        a.rel = "stylesheet";
        a.type = "text/css";
        a.href = "common/prettify.css";
        document.head.appendChild(a);
        a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "common/prettify.js";
        document.head.appendChild(a)
    }, 1)
}
;function ae() {
    setTimeout(function() {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "third-party/babel.min.js";
        document.head.appendChild(a)
    }, 1)
}
function be() {
    var a = window.ace;
    a.require("ace/ext/language_tools");
    Nd = a = a.edit("editor");
    a.setTheme("ace/theme/chrome");
    a.setShowPrintMargin(!1);
    a.setOptions({
        enableBasicAutocompletion: !0,
        enableLiveAutocompletion: !0
    });
    a = a.getSession();
    a.setMode("ace/mode/javascript");
    a.setTabSize(2);
    a.setUseSoftTabs(!0);
    a.on("change", Sd);
    ce();
    return a
}
function ce() {
    var a = Nd.getSession().getMode().$highlightRules.$keywordList;
    a ? a.splice(0, Infinity, "arguments", "this", "NaN", "Math", "JSON", "parseInt", "parseFloat", "isNaN", "isFinite", "eval", "String", "RegExp", "Object", "Number", "Function", "Date", "Boolean", "Array", "while", "var", "let", "typeof", "try", "throw", "switch", "return", "new", "instanceof", "of", "in", "if", "function", "for", "finally", "else", "do", "delete", "continue", "catch", "case", "break", "const", "undefined", "Infinity", "null", "false", "true") : setTimeout(ce, ce.mB *= 2)
}
ce.mB = 1;
var S = {
    Wk: !1,
    nB: null,
    Sr: null,
    Gy: function(a, c, d, e, f, h) {
        function k() {
            if (S.Wk) {
                l.style.visibility = "visible";
                l.style.zIndex = 10;
                m.style.visibility = "hidden";
                var p = a.getElementsByClassName("primary");
                p.length || (p = a.getElementsByClassName("secondary"),
                p.length || (p = a.getElementsByTagName("button")));
                p.length && p[0].focus()
            }
        }
        if (!a)
            throw TypeError("Content not found: " + a);
        S.Wk && S.Lk(!1);
        g.dj() && g.Fc(!0);
        S.Wk = !0;
        S.nB = c;
        S.Sr = h;
        var l = document.getElementById("dialog");
        h = document.getElementById("dialogShadow");
        var m = document.getElementById("dialogBorder"), n;
        for (n in f)
            l.style[n] = f[n];
        e && (h.style.visibility = "visible",
        h.style.opacity = .3,
        h.style.zIndex = 9,
        e = document.createElement("div"),
        e.id = "dialogHeader",
        l.appendChild(e),
        S.Nv = g.ev(e, "mousedown", null, S.XH));
        f = a.getElementsByClassName("dialogOk");
        for (e = 0; e < f.length; e++)
            f[e].textContent = g.i.DIALOG_OK;
        f = a.getElementsByClassName("dialogCancel");
        for (e = 0; e < f.length; e++)
            f[e].textContent = g.i.DIALOG_CANCEL;
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        try {
            c.blur()
        } catch (p) {}
        d && c ? (S.vj(c, !1, .2),
        S.vj(l, !0, .8),
        setTimeout(k, 175)) : k()
    },
    oB: 0,
    pB: 0,
    XH: function(a) {
        S.Qv();
        if (!g.g.$k(a)) {
            var c = document.getElementById("dialog");
            S.oB = c.offsetLeft - a.clientX;
            S.pB = c.offsetTop - a.clientY;
            S.Pv = g.ev(document, "mouseup", null, S.Qv);
            S.Ov = g.ev(document, "mousemove", null, S.YH);
            a.stopPropagation()
        }
    },
    YH: function(a) {
        var c = document.getElementById("dialog")
          , d = S.oB + a.clientX;
        a = S.pB + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight - c.offsetHeight);
        d = Math.max(d, 0);
        d = Math.min(d, window.innerWidth - c.offsetWidth);
        c.style.left = d + "px";
        c.style.top = a + "px"
    },
    Qv: function() {
        S.Pv && (g.Py(S.Pv),
        S.Pv = null);
        S.Ov && (g.Py(S.Ov),
        S.Ov = null)
    },
    Lk: function(a) {
        function c() {
            e.style.zIndex = -1;
            e.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }
        if (S.Wk) {
            S.Qv();
            S.Nv && (g.Py(S.Nv),
            S.Nv = null);
            S.Wk = !1;
            S.Sr && S.Sr();
            S.Sr = null;
            var d = !1 === a ? null : S.nB;
            a = document.getElementById("dialog");
            var e = document.getElementById("dialogShadow");
            e.style.opacity = 0;
            d && a ? (S.vj(a, !1, .8),
            S.vj(d, !0, .2),
            setTimeout(c, 175)) : c();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((d = document.getElementById("dialogHeader")) && d.parentNode.removeChild(d); a.firstChild; )
                d = a.firstChild,
                d.className += " dialogHiddenContent",
                document.body.appendChild(d)
        }
    },
    vj: function(a, c, d) {
        function e() {
            f.style.width = h.width + "px";
            f.style.height = h.height + "px";
            f.style.left = h.x + "px";
            f.style.top = h.y + "px";
            f.style.opacity = d
        }
        if (a) {
            var f = document.getElementById("dialogBorder")
              , h = S.qI(a);
            c ? (f.className = "dialogAnimate",
            setTimeout(e, 1)) : (f.className = "",
            e());
            f.style.visibility = "visible"
        }
    },
    qI: function(a) {
        var c = g.g.style.Ik(a);
        c = {
            x: c.x,
            y: c.y
        };
        a.getBBox ? (a = a.getBBox(),
        c.height = a.height,
        c.width = a.width) : (c.height = a.offsetHeight,
        c.width = a.offsetWidth);
        return c
    },
    OK: function(a, c) {
        var d = document.getElementById("containerStorage");
        d.textContent = "";
        c = c.split("\n");
        for (var e = 0; e < c.length; e++) {
            var f = document.createElement("p");
            f.appendChild(document.createTextNode(c[e]));
            d.appendChild(f)
        }
        d = document.getElementById("dialogStorage");
        S.Gy(d, a, !0, !0, {
            width: "50%",
            left: "25%",
            top: "5em"
        }, S.NK);
        S.HK()
    },
    $G: function() {
        if (!Bd(td))
            if (S.Wk || w.yc())
                setTimeout(S.$G, 15E3);
            else {
                var a = document.getElementById("dialogAbort")
                  , c = document.getElementById("abortCancel");
                c.addEventListener("click", S.Lk, !0);
                c.addEventListener("touchend", S.Lk, !0);
                c = document.getElementById("abortOk");
                c.addEventListener("click", Td, !0);
                c.addEventListener("touchend", Td, !0);
                S.Gy(a, null, !1, !0, {
                    width: "40%",
                    left: "30%",
                    top: "3em"
                }, function() {
                    document.body.removeEventListener("keydown", S.AA, !0)
                });
                document.body.addEventListener("keydown", S.AA, !0)
            }
    },
    HO: function() {
        var a = document.getElementById("dialogDone");
        if (w) {
            var c = document.getElementById("dialogLinesText");
            c.textContent = "";
            var d = Vd();
            var e = d.replace(/\/\/[^\n]*/g, "");
            e = e.replace(/\/\*.*\*\//g, "");
            e = e.replace(/[ \t]+\n/g, "\n");
            e = e.replace(/\n+/g, "\n");
            e = e.trim();
            e = e.split("\n").length;
            var f = document.getElementById("containerCode");
            f.textContent = d;
            "function" == typeof prettyPrintOne && (d = f.innerHTML,
            d = prettyPrintOne(d, "js"),
            f.innerHTML = d);
            d = 1 == e ? R("Games_linesOfCode1") : R("Games_linesOfCode2").replace("%1", String(e));
            c.appendChild(document.createTextNode(d))
        }
        d = 10 > td ? R("Games_nextLevel").replace("%1", String(td + 1)) : R("Games_finalLevel");
        c = document.getElementById("doneCancel");
        c.addEventListener("click", S.Lk, !0);
        c.addEventListener("touchend", S.Lk, !0);
        c = document.getElementById("doneOk");
        c.addEventListener("click", Ud, !0);
        c.addEventListener("touchend", Ud, !0);
        S.Gy(a, null, !1, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function() {
            document.body.removeEventListener("keydown", S.ZA, !0)
        });
        document.body.addEventListener("keydown", S.ZA, !0);
        document.getElementById("dialogDoneText").textContent = d
    },
    Tr: function(a) {
        !S.Wk || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (S.Lk(!0),
        a.stopPropagation(),
        a.preventDefault())
    },
    HK: function() {
        document.body.addEventListener("keydown", S.Tr, !0)
    },
    NK: function() {
        document.body.removeEventListener("keydown", S.Tr, !0)
    },
    ZA: function(a) {
        S.Tr(a);
        13 != a.keyCode && 32 != a.keyCode || Ud()
    },
    AA: function(a) {
        S.Tr(a);
        13 != a.keyCode && 32 != a.keyCode || Td()
    }
};
window.BlocklyDialogs = S;
S.hideDialog = S.Lk;
g.h.mi = function(a, c, d) {
    g.h.mi.v.constructor.call(this, a ? a.u.id : void 0);
    this.ob = a ? a.id : null;
    this.Pm = c;
    this.mv = d
}
;
g.g.object.W(g.h.mi, g.h.ze);
g.h.mi.prototype.type = g.h.Vj;
g.h.mi.prototype.Ca = function() {
    var a = g.h.mi.v.Ca.call(this);
    a.isOpen = this.Pm;
    a.bubbleType = this.mv;
    a.blockId = this.ob;
    return a
}
;
g.h.mi.prototype.ka = function(a) {
    g.h.mi.v.ka.call(this, a);
    this.Pm = a.isOpen;
    this.mv = a.bubbleType;
    this.ob = a.blockId
}
;
g.B.register(g.B.U.cc, g.h.Vj, g.h.mi);
g.ke = function(a) {
    this.X = a;
    this.Xd = null
}
;
b = g.ke.prototype;
b.WA = !0;
b.er = 17;
b.lc = null;
b.Pk = null;
function Ac(a) {
    a.Xd || (a.Xd = g.g.o.N(g.g.F.rc, {
        "class": "blocklyIconGroup"
    }, null),
    a.X.Xb && g.g.o.Fa(a.Xd, "blocklyIconGroupReadonly"),
    a.aw(a.Xd),
    a.X.Ma().appendChild(a.Xd),
    g.M.va(a.Xd, "mouseup", a, a.Mw),
    a.gi())
}
b.I = function() {
    g.g.o.removeNode(this.Xd);
    this.Xd = null;
    this.rb(!1);
    this.X = null
}
;
b.gi = function() {}
;
b.isVisible = function() {
    return !!this.lc
}
;
b.Mw = function(a) {
    this.X.u.yc() || this.X.Xb || g.g.$k(a) || this.rb(!this.isVisible())
}
;
b.ic = function() {
    this.isVisible() && this.lc.Wc(this.X.style.sh)
}
;
function pb(a, c) {
    a.Pk = c;
    a.isVisible() && (a = a.lc,
    a.vc = c,
    a.oy && tb(a))
}
function Dc(a) {
    var c = a.X.jb()
      , d = g.g.sf(a.Xd);
    c = new g.g.V(c.x + d.x + a.er / 2,c.y + d.y + a.er / 2);
    g.g.V.qf(a.Pk, c) || pb(a, c)
}
;g.$n = function(a) {
    g.$n.v.constructor.call(this, a);
    Ac(this);
    this.ai = Object.create(null)
}
;
g.g.object.W(g.$n, g.ke);
b = g.$n.prototype;
b.WA = !1;
b.aw = function(a) {
    g.g.o.N(g.g.F.Ld, {
        "class": "blocklyIconShape",
        d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
    }, a);
    g.g.o.N(g.g.F.Ld, {
        "class": "blocklyIconSymbol",
        d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
    }, a);
    g.g.o.N(g.g.F.Dc, {
        "class": "blocklyIconSymbol",
        x: "7",
        y: "11",
        height: "2",
        width: "2"
    }, a)
}
;
b.rb = function(a) {
    a != this.isVisible() && (g.h.Ga(new (g.h.get(g.h.Vj))(this.X,a,"warning")),
    a ? this.Or() : this.Wr())
}
;
b.Or = function() {
    this.ql = g.xa.Ff(this.yd());
    this.lc = g.xa.gB(this.ql, this.X, this.Pk);
    this.ic()
}
;
b.Wr = function() {
    this.lc.I();
    this.ql = this.lc = null
}
;
function Fc(a, c, d) {
    a.ai[d] != c && (c ? a.ai[d] = c : delete a.ai[d],
    a.isVisible() && (a.rb(!1),
    a.rb(!0)))
}
b.yd = function() {
    var a = [], c;
    for (c in this.ai)
        a.push(this.ai[c]);
    return a.join("\n")
}
;
b.I = function() {
    this.X.We = null;
    g.ke.prototype.I.call(this)
}
;
g.Comment = function(a) {
    g.Comment.v.constructor.call(this, a);
    this.jd = a.Ce;
    this.jd.text = this.jd.text || "";
    this.tv = "";
    this.Ts = this.Qs = this.Zs = this.ld = null;
    Ac(this)
}
;
g.g.object.W(g.Comment, g.ke);
b = g.Comment.prototype;
b.aw = function(a) {
    g.g.o.N(g.g.F.Bq, {
        "class": "blocklyIconShape",
        r: "8",
        cx: "8",
        cy: "8"
    }, a);
    g.g.o.N(g.g.F.Ld, {
        "class": "blocklyIconSymbol",
        d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z"
    }, a);
    g.g.o.N(g.g.F.Dc, {
        "class": "blocklyIconSymbol",
        x: "6.8",
        y: "10.78",
        height: "2",
        width: "2"
    }, a)
}
;
b.Gv = function() {
    this.Lo = g.g.o.N(g.g.F.jF, {
        x: g.xa.pd,
        y: g.xa.pd
    }, null);
    var a = document.createElementNS(g.g.o.ik, "body");
    a.setAttribute("xmlns", g.g.o.ik);
    a.className = "blocklyMinimalBody";
    var c = this.yl = document.createElementNS(g.g.o.ik, "textarea");
    c.className = "blocklyCommentTextarea";
    c.setAttribute("dir", this.X.L ? "RTL" : "LTR");
    c.value = this.jd.text;
    de(this);
    a.appendChild(c);
    this.Lo.appendChild(a);
    this.ld = g.M.va(c, "mouseup", this, this.JK, !0, !0);
    this.Zs = g.M.va(c, "wheel", this, function(d) {
        d.stopPropagation()
    });
    this.Qs = g.M.va(c, "change", this, function() {
        this.tv != this.jd.text && g.h.Ga(new (g.h.get(g.h.eg))(this.X,"comment",null,this.tv,this.jd.text))
    });
    this.Ts = g.M.va(c, "input", this, function() {
        this.jd.text = c.value
    });
    setTimeout(c.focus.bind(c), 0);
    return this.Lo
}
;
b.gi = function() {
    g.Comment.v.gi.call(this);
    this.isVisible() && (this.Wr(),
    this.Or())
}
;
b.FJ = function() {
    this.isVisible() && (this.jd.size = this.lc.sw(),
    de(this))
}
;
function de(a) {
    var c = a.jd.size
      , d = 2 * g.xa.pd
      , e = c.width - d;
    c = c.height - d;
    a.Lo.setAttribute("width", e);
    a.Lo.setAttribute("height", c);
    a.yl.style.width = e - 4 + "px";
    a.yl.style.height = c - 4 + "px"
}
b.rb = function(a) {
    a != this.isVisible() && (g.h.Ga(new (g.h.get(g.h.Vj))(this.X,a,"comment")),
    (this.jd.Yx = a) ? this.Or() : this.Wr())
}
;
b.Or = function() {
    if (!this.X.Yd() || g.g.userAgent.Ze)
        this.ql = g.xa.Ff(this.X.Ce.text),
        this.lc = g.xa.gB(this.ql, this.X, this.Pk);
    else {
        this.lc = new g.xa(this.X.u,this.Gv(),this.X.Nb.ac,this.Pk,this.jd.size.width,this.jd.size.height);
        vb(this.lc, this.X.id);
        var a = this.FJ.bind(this);
        this.lc.py = a
    }
    this.ic()
}
;
b.Wr = function() {
    this.ld && (g.M.Ra(this.ld),
    this.ld = null);
    this.Zs && (g.M.Ra(this.Zs),
    this.Zs = null);
    this.Qs && (g.M.Ra(this.Qs),
    this.Qs = null);
    this.Ts && (g.M.Ra(this.Ts),
    this.Ts = null);
    this.lc.I();
    this.ql = this.Lo = this.yl = this.lc = null
}
;
b.JK = function() {
    wb(this.lc) && this.yl.focus();
    this.tv = this.jd.text
}
;
b.sw = function() {
    return this.jd.size
}
;
b.Lp = function(a, c) {
    this.lc ? this.lc.Lp(a, c) : (this.jd.size.width = a,
    this.jd.size.height = c)
}
;
b.I = function() {
    this.X.Wi = null;
    g.ke.prototype.I.call(this)
}
;
g.Uc.register(".blocklyCommentTextarea {,background-color: #fef49c;,border: 0;,outline: 0;,margin: 0;,padding: 3px;,resize: none;,display: block;,text-overflow: hidden;,}".split(","));
g.RM = function() {}
;
g.OM = function() {}
;
g.xM = function() {}
;
g.Qu = function(a, c, d) {
    this.Nw = a.toolboxitemid || g.g.Ql.Aw();
    this.gx = (this.Uh = d || null) ? this.Uh.gx + 1 : 0;
    this.Ct = a;
    this.Th = c;
    this.s = this.Th.s
}
;
b = g.Qu.prototype;
b.S = function() {}
;
b.So = function() {
    return null
}
;
b.La = function() {
    return this.Nw
}
;
b.getParent = function() {
    return null
}
;
b.Oh = function() {
    return !1
}
;
b.Vk = function() {
    return !1
}
;
b.I = function() {}
;
g.ye = function(a, c, d) {
    g.ye.v.constructor.call(this, a, c, d);
    this.Lg = g.g.se(a.name);
    this.ed = ee(this, a);
    this.Yw = this.ap = this.Jp = this.Pe = this.Qc = null;
    this.fd = this.kx();
    g.g.object.Oe(this.fd, a.cssconfig || a.cssConfig);
    this.$I = this.Vw = !1;
    this.cj = [];
    this.cD(a)
}
;
g.g.object.W(g.ye, g.Qu);
g.ye.Pg = "category";
g.ye.zJ = 19;
g.ye.borderWidth = 8;
g.ye.QH = "#57e";
b = g.ye.prototype;
b.kx = function() {
    return {
        container: "blocklyToolboxCategory",
        row: "blocklyTreeRow",
        rowcontentcontainer: "blocklyTreeRowContentContainer",
        icon: "blocklyTreeIcon",
        label: "blocklyTreeLabel",
        contents: "blocklyToolboxContents",
        selected: "blocklyTreeSelected",
        openicon: "blocklyTreeIconOpen",
        closedicon: "blocklyTreeIconClosed"
    }
}
;
b.cD = function(a) {
    var c = a.contents;
    if (a.custom)
        this.cj = a.custom;
    else if (c) {
        a = 0;
        for (var d; d = c[a]; a++)
            this.cj.push(d)
    }
}
;
b.S = function() {
    this.Fe();
    "true" == this.Ct.hidden && this.Va()
}
;
b.Fe = function() {
    this.Qc = this.Fv();
    g.g.za.Df(this.Qc, g.g.za.Gi.OG);
    g.g.za.ge(this.Qc, g.g.za.State.Hi, !1);
    g.g.za.ge(this.Qc, g.g.za.State.IF, this.gx);
    var a = document.createElement("div");
    g.g.o.Fa(a, this.fd.row);
    var c = g.ye.zJ * this.gx;
    c = c.toString() + "px";
    this.s.L ? a.style.paddingRight = c : a.style.paddingLeft = c;
    this.Pe = a;
    this.Pe.style.pointerEvents = "auto";
    this.Qc.appendChild(this.Pe);
    a = document.createElement("div");
    g.g.o.Fa(a, this.fd.rowcontentcontainer);
    this.Jp = a;
    this.Jp.style.pointerEvents = "none";
    this.Pe.appendChild(this.Jp);
    this.ap = this.fB();
    g.g.za.Df(this.ap, g.g.za.Gi.lG);
    this.Jp.appendChild(this.ap);
    a = this.Lg;
    c = document.createElement("span");
    c.setAttribute("id", this.La() + ".label");
    c.textContent = a;
    g.g.o.Fa(c, this.fd.label);
    this.Yw = c;
    this.Jp.appendChild(this.Yw);
    g.g.za.ge(this.Qc, g.g.za.State.HF, this.Yw.getAttribute("id"));
    fe(this, this.ed);
    return this.Qc
}
;
b.Fv = function() {
    var a = document.createElement("div");
    g.g.o.Fa(a, this.fd.container);
    return a
}
;
b.fB = function() {
    var a = document.createElement("span");
    this.Th.$o || g.g.o.Fa(a, this.fd.icon);
    a.style.display = "inline-block";
    return a
}
;
b.Zm = function() {
    this.ed = ee(this, this.Ct);
    fe(this, this.ed)
}
;
function fe(a, c) {
    c && (c = g.ye.borderWidth + "px solid " + (c || "#ddd"),
    a.s.L ? a.Pe.style.borderRight = c : a.Pe.style.borderLeft = c)
}
function ee(a, c) {
    var d = c.categorystyle || c.categoryStyle;
    if ((c = c.colour) && d)
        console.warn('Toolbox category "' + a.Lg + '" must not have both a style and a colour');
    else {
        if (d)
            a: {
                c = a.s.Gg();
                if (d && c) {
                    if ((c = c.Cr[d]) && c.Cb) {
                        a = ge(a, c.Cb);
                        break a
                    }
                    console.warn('Style "' + d + '" must exist and contain a colour value')
                }
                a = ""
            }
        else
            a = ge(a, c);
        return a
    }
    return ""
}
b.GB = function() {
    return this.Pe
}
;
function ge(a, c) {
    c = g.g.se(c);
    if (null == c || "" === c)
        return "";
    var d = Number(c);
    if (isNaN(d)) {
        if (d = g.g.Cb.parse(c))
            return d;
        console.warn('Toolbox category "' + a.Lg + '" has unrecognized colour attribute: ' + c);
        return ""
    }
    return g.WI(d)
}
b.vt = function(a) {
    this.Qc.style.display = a ? "block" : "none";
    this.Vw = !a;
    this.Th.Ab == this && he(this.Th, null)
}
;
b.Va = function() {
    this.vt(!1)
}
;
b.show = function() {
    this.vt(!0)
}
;
b.isVisible = function() {
    var a;
    if (a = !this.Vw)
        a: {
            for (a = this; a.getParent(); )
                if (a = a.getParent(),
                !a.Fk) {
                    a = !1;
                    break a
                }
            a = !0
        }
    return a
}
;
b.Oh = function() {
    return this.isVisible() && !this.$I
}
;
b.YC = function() {}
;
function ie(a, c) {
    if (c) {
        var d = ge(a, g.ye.QH);
        a.Pe.style.backgroundColor = a.ed || d;
        g.g.o.Fa(a.Pe, a.fd.selected)
    } else
        a.Pe.style.backgroundColor = "",
        g.g.o.dc(a.Pe, a.fd.selected);
    g.g.za.ge(a.Qc, g.g.za.State.Hi, c)
}
b.gd = function() {
    return this.Lg
}
;
b.getParent = function() {
    return this.Uh
}
;
b.So = function() {
    return this.Qc
}
;
b.I = function() {
    g.g.o.removeNode(this.Qc)
}
;
g.Uc.register([".blocklyTreeRow:not(.blocklyTreeSelected):hover {", "background-color: rgba(255, 255, 255, 0.2);", "}", '.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {', "margin: 1px 5px 1px 0;", "}", '.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {', "margin: 1px 0 1px 5px;", "}", ".blocklyTreeRow {", "height: 22px;", "line-height: 22px;", "margin-bottom: 3px;", "padding-right: 8px;", "white-space: nowrap;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "margin-left: 8px;", "padding-right: 0px", "}", ".blocklyTreeIcon {", "background-image: url(<<<PATH>>>/sprites.png);", "height: 16px;", "vertical-align: middle;", "visibility: hidden;", "width: 16px;", "}", ".blocklyTreeIconClosed {", "background-position: -32px -1px;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {', "background-position: 0 -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosed {", "background-position: -32px -17px;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {', "background-position: 0 -17px;", "}", ".blocklyTreeIconOpen {", "background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "background-position: -16px -17px;", "}", ".blocklyTreeLabel {", "cursor: default;", "font: 16px sans-serif;", "padding: 0 3px;", "vertical-align: middle;", "}", ".blocklyToolboxDelete .blocklyTreeLabel {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyTreeSelected .blocklyTreeLabel {", "color: #fff;", "}"]);
g.B.register(g.B.U.fm, g.ye.Pg, g.ye);
g.pg = function(a, c) {
    g.pg.v.constructor.call(this, a, c);
    this.fd = {
        container: "blocklyTreeSeparator"
    };
    g.g.object.Oe(this.fd, a.cssconfig || a.cssConfig)
}
;
g.g.object.W(g.pg, g.Qu);
g.pg.Pg = "sep";
g.pg.prototype.S = function() {
    this.Fe()
}
;
g.pg.prototype.Fe = function() {
    var a = document.createElement("div");
    g.g.o.Fa(a, this.fd.container);
    return this.Qc = a
}
;
g.pg.prototype.So = function() {
    return this.Qc
}
;
g.pg.prototype.I = function() {
    g.g.o.removeNode(this.Qc)
}
;
g.Uc.register('.blocklyTreeSeparator {,border-bottom: solid #e5e5e5 1px;,height: 0;,margin: 5px 0;,},.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {,border-right: solid #e5e5e5 1px;,border-bottom: none;,height: auto;,margin: 0 5px 0 5px;,padding: 5px 0;,width: 0;,}'.split(","));
g.B.register(g.B.U.fm, g.pg.Pg, g.pg);
g.Kf = function(a, c, d) {
    this.Xp = null;
    this.Fk = !1;
    this.Dt = [];
    g.Kf.v.constructor.call(this, a, c, d)
}
;
g.g.object.W(g.Kf, g.ye);
g.Kf.Pg = "collapsibleCategory";
b = g.Kf.prototype;
b.kx = function() {
    var a = g.Kf.v.kx.call(this);
    a.contents = "blocklyToolboxContents";
    return a
}
;
b.cD = function(a) {
    var c = a.contents
      , d = !0;
    if (a.custom)
        this.cj = a.custom;
    else if (c) {
        a = 0;
        for (var e; e = c[a]; a++)
            !g.B.QI(e.kind) || e.kind.toLowerCase() == g.pg.Pg && d ? (this.cj.push(e),
            d = !0) : (this.Hv(e),
            d = !1)
    }
}
;
b.Hv = function(a) {
    var c = a.kind;
    "CATEGORY" == c.toUpperCase() && g.g.Y.qC(a) && (c = g.Kf.Pg);
    a = new (g.B.Po(g.B.U.fm, c))(a,this.Th,this);
    this.Dt.push(a)
}
;
b.S = function() {
    g.Kf.v.S.call(this);
    je(this, "true" == this.Ct.expanded || this.Ct.expanded)
}
;
b.Fe = function() {
    g.Kf.v.Fe.call(this);
    var a = this.Dt
      , c = document.createElement("div");
    g.g.o.Fa(c, this.fd.contents);
    for (var d = 0; d < a.length; d++) {
        var e = a[d];
        e.S();
        c.appendChild(e.So());
        e.GB && e.Pe.setAttribute("id", e.La())
    }
    this.Xp = c;
    g.g.za.Df(this.Xp, g.g.za.Gi.qF);
    this.Qc.appendChild(this.Xp);
    return this.Qc
}
;
b.fB = function() {
    var a = document.createElement("span");
    this.Th.$o || (g.g.o.Fa(a, this.fd.icon),
    a.style.visibility = "visible");
    a.style.display = "inline-block";
    return a
}
;
function je(a, c) {
    if (a.Fk != c) {
        if (a.Fk = c) {
            a.Xp.style.display = "block";
            var d = a.ap;
            d && (g.g.o.rD(d, a.fd.closedicon),
            g.g.o.Fa(d, a.fd.openicon))
        } else if (a.Xp.style.display = "none",
        d = a.ap)
            g.g.o.rD(d, a.fd.openicon),
            g.g.o.Fa(d, a.fd.closedicon);
        g.g.za.ge(a.Qc, g.g.za.State.XE, c);
        ke(a.Th)
    }
}
b.vt = function(a) {
    this.Qc.style.display = a ? "block" : "none";
    for (var c = 0, d; d = this.Dt[c]; c++)
        d.vt(a);
    this.Vw = !a;
    this.Th.Ab == this && he(this.Th, null)
}
;
b.Vk = function() {
    return !0
}
;
b.YC = function() {
    je(this, !this.Fk)
}
;
b.So = function() {
    return this.Qc
}
;
g.B.register(g.B.U.fm, g.Kf.Pg, g.Kf);
g.EM = function() {}
;
g.Cn = function() {}
;
g.Cn.prototype.Ex = function() {}
;
g.Cn.prototype.Fx = function() {}
;
g.Cn.prototype.Rs = function() {}
;
g.Cn.prototype.Ss = function() {}
;
g.DM = function() {}
;
g.dk = function() {
    g.dk.v.constructor.call(this);
    this.Gl = !1
}
;
g.g.object.W(g.dk, g.Cn);
g.dk.prototype.Xy = function(a, c) {
    a instanceof g.kb ? (a = !a.getParent() && a.vf(),
    this.lq(a && !c)) : this.lq(a.vf());
    return this.Gl
}
;
g.dk.prototype.lq = function(a) {
    this.Gl = a
}
;
g.h.Mi = function(a, c, d) {
    g.h.Mi.v.constructor.call(this, d);
    this.RC = a;
    this.NC = c
}
;
g.g.object.W(g.h.Mi, g.h.ze);
g.h.Mi.prototype.type = g.h.Lu;
g.h.Mi.prototype.Ca = function() {
    var a = g.h.Mi.v.Ca.call(this);
    a.oldItem = this.RC;
    a.newItem = this.NC;
    return a
}
;
g.h.Mi.prototype.ka = function(a) {
    g.h.Mi.v.ka.call(this, a);
    this.RC = a.oldItem;
    this.NC = a.newItem
}
;
g.B.register(g.B.U.cc, g.h.Lu, g.h.Mi);
g.tM = function() {}
;
g.PM = function() {}
;
g.QM = function() {}
;
g.lr = function(a) {
    g.lr.v.constructor.call(this);
    this.s = a;
    this.id = "toolbox";
    this.ND = a.options.Kg || {
        contents: []
    };
    this.$o = a.options.Vd;
    this.Zi = this.we = null;
    this.Ne = !1;
    this.Kb = [];
    this.Pc = this.tb = 0;
    this.L = a.options.L;
    this.Aa = null;
    this.Cv = Object.create(null);
    this.Gb = a.options.Gb;
    this.Ab = null;
    this.io = []
}
;
g.g.object.W(g.lr, g.dk);
b = g.lr.prototype;
b.S = function() {
    var a = this.s
      , c = v(a)
      , d = this.s
      , e = new g.Kd({
        parentWorkspace: d,
        rtl: d.L,
        oneBasedIndex: d.options.Sh,
        horizontalLayout: d.Vd,
        renderer: d.options.Fp,
        rendererOverrides: d.options.Gp,
        move: {
            scrollbars: !0
        }
    });
    e.Gb = d.options.Gb;
    this.Aa = new (d.Vd ? g.B.Qf(g.B.U.Zt, d.options, !0) : g.B.Qf(g.B.U.Pq, d.options, !0))(e);
    this.we = this.Fe(this.s);
    g.g.o.Tk(this.Aa.eb("svg"), c);
    this.rb(!0);
    this.Aa.S(a);
    this.Ia(this.ND);
    a = a.Bc;
    a.subscribe(this.we, "toolboxBackgroundColour", "background-color");
    a.subscribe(this.we, "toolboxForegroundColour", "color");
    ea(this.s.De, {
        zk: this,
        weight: 1,
        tg: [g.Tb.bc.Lt, g.Tb.bc.Jq, g.Tb.bc.Kq]
    })
}
;
b.Fe = function(a) {
    var c = v(a);
    a = this.Fv();
    var d = document.createElement("div");
    g.g.o.Fa(d, "blocklyToolboxContents");
    this.$o && (d.style.flexDirection = "row");
    this.Zi = d;
    this.Zi.tabIndex = 0;
    g.g.za.Df(this.Zi, g.g.za.Gi.NG);
    a.appendChild(this.Zi);
    c.parentNode.insertBefore(a, c);
    c = this.Zi;
    d = g.M.va(a, "click", this, this.GJ, !1, !0);
    this.io.push(d);
    c = g.M.va(c, "keydown", this, this.JJ, !1, !0);
    this.io.push(c);
    return a
}
;
b.Fv = function() {
    var a = document.createElement("div");
    a.setAttribute("layout", this.$o ? "h" : "v");
    g.g.o.Fa(a, "blocklyToolboxDiv");
    g.g.o.Fa(a, "blocklyNonSelectable");
    a.setAttribute("dir", this.L ? "RTL" : "LTR");
    return a
}
;
b.GJ = function(a) {
    if (g.g.$k(a) || a.target == this.we)
        g.Fc(!1);
    else {
        if (a = a.target.getAttribute("id"))
            a = this.Cv[a] || null,
            a.Oh() && (he(this, a),
            a.YC());
        g.Fc(!0)
    }
    g.Touch.xk()
}
;
b.JJ = function(a) {
    var c = !1;
    switch (a.keyCode) {
    case g.g.ea.Ol:
        c = le(this);
        break;
    case g.g.ea.wk:
        a: {
            if (this.Ab && (c = this.Kb.indexOf(this.Ab) - 1,
            -1 < c && c < this.Kb.length)) {
                for (var d = this.Kb[c]; d && !d.Oh(); )
                    d = this.Kb[--c];
                if (d && d.Oh()) {
                    he(this, d);
                    c = !0;
                    break a
                }
            }
            c = !1
        }
        break;
    case g.g.ea.Ib:
        c = me(this);
        break;
    case g.g.ea.Mc:
        this.Ab && this.Ab.Vk() ? (c = this.Ab,
        c.Fk ? le(this) : je(c, !0),
        c = !0) : c = !1;
        break;
    case g.g.ea.Vt:
    case g.g.ea.jA:
        this.Ab && this.Ab.Vk() && (c = this.Ab,
        je(c, !c.Fk),
        c = !0);
        break;
    default:
        c = !1
    }
    !c && this.Ab && this.Ab.up && (c = this.Ab.up(a));
    c && a.preventDefault()
}
;
b.Ia = function(a) {
    this.ND = a;
    for (var c = 0; c < this.Kb.length; c++) {
        var d = this.Kb[c];
        d && d.I()
    }
    this.Kb = [];
    this.Cv = Object.create(null);
    a = a.contents;
    c = document.createDocumentFragment();
    d = 0;
    for (var e; e = a[d]; d++)
        this.Hv(e, c);
    this.Zi.appendChild(c);
    this.position();
    ke(this)
}
;
b.Hv = function(a, c) {
    var d = a.kind;
    "CATEGORY" == d.toUpperCase() && g.g.Y.qC(a) && (d = g.Kf.Pg);
    if (d = g.B.Po(g.B.U.fm, d.toLowerCase()))
        a = new d(a,this),
        ne(this, a),
        a.S(),
        (d = a.So()) && c.appendChild(d),
        a.GB && a.Pe.setAttribute("id", a.La())
}
;
function ne(a, c) {
    a.Kb.push(c);
    a.Cv[c.La()] = c;
    if (c.Vk())
        for (var d = 0, e; e = c.Dt[d]; d++)
            ne(a, e)
}
b.uw = function() {
    if (!this.we || !this.Ne)
        return null;
    var a = this.we.getBoundingClientRect()
      , c = a.top
      , d = c + a.height
      , e = a.left;
    a = e + a.width;
    return this.Gb == g.g.Y.Ka.td ? new g.g.Rect(-1E7,d,-1E7,1E7) : this.Gb == g.g.Y.Ka.Yg ? new g.g.Rect(c,1E7,-1E7,1E7) : this.Gb == g.g.Y.Ka.Ib ? new g.g.Rect(-1E7,1E7,-1E7,a) : new g.g.Rect(-1E7,1E7,e,1E7)
}
;
b.Xy = function(a) {
    a instanceof g.kb ? this.lq(!a.getParent() && a.vf()) : this.lq(a.vf());
    return this.Gl
}
;
b.Ex = function() {
    oe(this, !0)
}
;
b.Rs = function() {
    oe(this, !1)
}
;
b.Ss = function() {
    oe(this, !1)
}
;
b.lq = function(a) {
    a !== this.Gl && (oe(this, !1),
    this.Gl = a,
    oe(this, !0))
}
;
function oe(a, c) {
    var d = a.Gl ? "blocklyToolboxDelete" : "blocklyToolboxGrab";
    c ? g.g.o.Fa(a.we, d) : g.g.o.dc(a.we, d)
}
b.Ih = function() {
    return this.tb
}
;
b.Je = function() {
    return this.Aa
}
;
b.position = function() {
    var a = this.s.Ud()
      , c = this.we;
    c && (this.$o ? (c.style.left = "0",
    c.style.height = "auto",
    c.style.width = "100%",
    this.Pc = c.offsetHeight,
    this.tb = a.Ic,
    this.Gb == g.g.Y.Ka.td ? c.style.top = "0" : c.style.bottom = "0") : (this.Gb == g.g.Y.Ka.Mc ? c.style.right = "0" : c.style.left = "0",
    c.style.height = "100%",
    this.tb = c.offsetWidth,
    this.Pc = a.Rc),
    this.Aa.position())
}
;
function ke(a) {
    var c = a.s
      , d = a.we.getBoundingClientRect();
    c.translate(a.Gb == g.g.Y.Ka.Ib ? c.scrollX + d.width : c.scrollX, a.Gb == g.g.Y.Ka.td ? c.scrollY + d.height : c.scrollY);
    g.ln(c)
}
b.Zm = function() {
    for (var a = 0; a < this.Kb.length; a++) {
        var c = this.Kb[a];
        c.Zm && c.Zm()
    }
}
;
b.rb = function(a) {
    this.Ne !== a && (this.we.style.display = a ? "block" : "none",
    this.Ne = a,
    Sc(this.s))
}
;
b.GA = function(a) {
    !a && this.Aa && this.Aa.Ri && he(this, null)
}
;
function he(a, c) {
    var d = a.Ab;
    if ((c || d) && (!c || c.Oh())) {
        null == d || d.Vk() && d == c || null == d || (a.Ab = null,
        ie(d, !1),
        g.g.za.ge(a.Zi, g.g.za.State.It, ""));
        null != c && c != d && null != c && (a.Ab = c,
        ie(c, !0),
        g.g.za.ge(a.Zi, g.g.za.State.It, c.La()));
        (d != c || c.Vk()) && c && c.cj.length ? (a.Aa.show(c.cj),
        a.Aa.uy()) : a.Aa.Va();
        var e = d && d.gd()
          , f = c && c.gd();
        d == c && (f = null);
        a = new (g.h.get(g.h.Lu))(e,f,a.s.id);
        g.h.Ga(a)
    }
}
function me(a) {
    return a.Ab ? a.Ab.Vk() && a.Ab.Fk ? (je(a.Ab, !1),
    !0) : a.Ab.getParent() && a.Ab.getParent().Oh() ? (he(a, a.Ab.getParent()),
    !0) : !1 : !1
}
function le(a) {
    if (!a.Ab)
        return !1;
    var c = a.Kb.indexOf(a.Ab) + 1;
    if (-1 < c && c < a.Kb.length) {
        for (var d = a.Kb[c]; d && !d.Oh(); )
            d = a.Kb[++c];
        if (d && d.Oh())
            return he(a, d),
            !0
    }
    return !1
}
b.I = function() {
    fa(this.s.De, "toolbox");
    this.Aa.I();
    for (var a = 0; a < this.Kb.length; a++)
        this.Kb[a].I();
    for (a = 0; a < this.io.length; a++)
        g.M.Ra(this.io[a]);
    this.io = [];
    this.Kb = [];
    this.s.Bc.unsubscribe(this.we);
    g.g.o.removeNode(this.we)
}
;
g.Uc.register([".blocklyToolboxDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyToolboxGrab {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyToolboxDiv {", "background-color: #ddd;", "overflow-x: visible;", "overflow-y: auto;", "padding: 4px 0 4px 0;", "position: absolute;", "z-index: 70;", "-webkit-tap-highlight-color: transparent;", "}", ".blocklyToolboxContents {", "display: flex;", "flex-wrap: wrap;", "flex-direction: column;", "}", ".blocklyToolboxContents:focus {", "outline: none;", "}"]);
g.B.register(g.B.U.pA, g.B.bk, g.lr);
g.h.Ni = function(a, c) {
    g.h.Ni.v.constructor.call(this, c);
    this.Pm = a
}
;
g.g.object.W(g.h.Ni, g.h.ze);
g.h.Ni.prototype.type = g.h.Ou;
g.h.Ni.prototype.Ca = function() {
    var a = g.h.Ni.v.Ca.call(this);
    a.isOpen = this.Pm;
    return a
}
;
g.h.Ni.prototype.ka = function(a) {
    g.h.Ni.v.ka.call(this, a);
    this.Pm = a.isOpen
}
;
g.B.register(g.B.U.cc, g.h.Ou, g.h.Ni);
g.Oc = function(a) {
    g.Oc.v.constructor.call(this);
    this.s = a;
    this.id = "trashcan";
    this.Kb = [];
    this.Ie = null;
    0 >= this.s.options.Is || (a = new g.Kd({
        scrollbars: !0,
        parentWorkspace: this.s,
        rtl: this.s.L,
        oneBasedIndex: this.s.options.Sh,
        renderer: this.s.options.Fp,
        rendererOverrides: this.s.options.Gp,
        move: {
            scrollbars: !0
        }
    }),
    this.s.Vd ? (a.Gb = this.s.Gb == g.g.Y.Ka.td ? g.g.Y.Ka.Yg : g.g.Y.Ka.td,
    this.Ie = new (g.B.Qf(g.B.U.Zt, this.s.options, !0))(a)) : (a.Gb = this.s.Gb == g.g.Y.Ka.Mc ? g.g.Y.Ka.Ib : g.g.Y.Ka.Mc,
    this.Ie = new (g.B.Qf(g.B.U.Pq, this.s.options, !0))(a)),
    D(this.s, this.HJ.bind(this)))
}
;
g.g.object.W(g.Oc, g.dk);
b = g.Oc.prototype;
b.oh = 47;
b.xq = 44;
b.Tl = 16;
b.In = 20;
b.ju = 20;
b.Vq = 10;
b.Fu = 0;
b.Gu = 32;
b.rF = .1;
g.Oc.gE = 80;
g.Oc.bz = 4;
g.Oc.$z = .4;
g.Oc.cG = .8;
g.Oc.Rz = 45;
b = g.Oc.prototype;
b.xs = !1;
b.tx = 0;
b.R = null;
b.At = null;
b.hx = 0;
b.sj = 0;
b.Ph = 0;
b.ci = 0;
b.bp = !1;
b.eb = function() {
    this.R = g.g.o.N(g.g.F.rc, {
        "class": "blocklyTrash"
    }, null);
    var a = String(Math.random()).substring(2);
    var c = g.g.o.N(g.g.F.zn, {
        id: "blocklyTrashBodyClipPath" + a
    }, this.R);
    g.g.o.N(g.g.F.Dc, {
        width: this.oh,
        height: this.xq,
        y: this.Tl
    }, c);
    var d = g.g.o.N(g.g.F.jk, {
        width: g.Nd.width,
        x: -this.Fu,
        height: g.Nd.height,
        y: -this.Gu,
        "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")"
    }, this.R);
    d.setAttributeNS(g.g.o.Mf, "xlink:href", this.s.options.Dj + g.Nd.url);
    c = g.g.o.N(g.g.F.zn, {
        id: "blocklyTrashLidClipPath" + a
    }, this.R);
    g.g.o.N(g.g.F.Dc, {
        width: this.oh,
        height: this.Tl
    }, c);
    this.At = g.g.o.N(g.g.F.jk, {
        width: g.Nd.width,
        x: -this.Fu,
        height: g.Nd.height,
        y: -this.Gu,
        "clip-path": "url(#blocklyTrashLidClipPath" + a + ")"
    }, this.R);
    this.At.setAttributeNS(g.g.o.Mf, "xlink:href", this.s.options.Dj + g.Nd.url);
    g.M.bind(this.R, "mousedown", this, this.mH);
    g.M.bind(this.R, "mouseup", this, this.click);
    g.M.bind(d, "mouseover", this, this.tJ);
    g.M.bind(d, "mouseout", this, this.rJ);
    this.$u();
    return this.R
}
;
b.S = function() {
    0 < this.s.options.Is && (g.g.o.Tk(this.Ie.eb(g.g.F.Ii), v(this.s)),
    this.Ie.S(this.s));
    ea(this.s.De, {
        zk: this,
        weight: 1,
        tg: [g.Tb.bc.Lt, g.Tb.bc.Jq, g.Tb.bc.Kq, g.Tb.bc.wu]
    });
    this.bp = !0;
    this.cn(!1)
}
;
b.I = function() {
    fa(this.s.De, "trashcan");
    this.R && (g.g.o.removeNode(this.R),
    this.R = null);
    this.s = this.At = null;
    clearTimeout(this.hx)
}
;
b.GA = function(a) {
    !a && this.Ie && this.Ie && this.Ie.isVisible() && (this.Ie.Va(),
    pe(this, !1))
}
;
b.position = function(a, c) {
    if (this.bp) {
        var d = g.Rb.JB(this.s, a);
        a = g.Rb.VB(d, new g.g.sd(this.oh,this.xq + this.Tl), this.ju, this.In, a, this.s);
        c = g.Rb.LA(a, this.In, d.vertical === g.Rb.rn.td ? g.Rb.jo.Ol : g.Rb.jo.wk, c);
        this.ci = c.top;
        this.Ph = c.left;
        this.R.setAttribute("transform", "translate(" + this.Ph + "," + this.ci + ")")
    }
}
;
b.Bm = function() {
    return new g.g.Rect(this.ci,this.ci + this.xq + this.Tl,this.Ph,this.Ph + this.oh)
}
;
b.uw = function() {
    if (!this.R)
        return null;
    var a = this.R.getBoundingClientRect()
      , c = a.top + this.Gu - this.Vq;
    a = a.left + this.Fu - this.Vq;
    return new g.g.Rect(c,c + this.Tl + this.xq + 2 * this.Vq,a,a + this.oh + 2 * this.Vq)
}
;
b.Fx = function() {
    this.cn(this.Gl)
}
;
b.Rs = function() {
    this.cn(!1)
}
;
b.Ss = function() {
    setTimeout(this.cn.bind(this, !1), 100)
}
;
b.cn = function(a) {
    this.xs != a && (clearTimeout(this.hx),
    this.xs = a,
    this.$u())
}
;
b.$u = function() {
    var a = 1 / (g.Oc.bz + 1);
    this.sj += this.xs ? a : -a;
    this.sj = Math.min(Math.max(this.sj, this.tx), 1);
    qe(this, this.sj * g.Oc.Rz);
    this.R.style.opacity = g.Oc.$z + this.sj * (g.Oc.cG - g.Oc.$z);
    this.sj > this.tx && 1 > this.sj && (this.hx = setTimeout(this.$u.bind(this), g.Oc.gE / g.Oc.bz))
}
;
function qe(a, c) {
    var d = a.s.Gb == g.g.Y.Ka.Mc || a.s.Vd && a.s.L;
    a.At.setAttribute("transform", "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.oh - 4) + "," + (a.Tl - 2) + ")")
}
b.click = function() {
    if (this.Kb.length && (!this.Ie || !this.Ie.isVisible())) {
        var a = this.Kb.map(g.P.Ff);
        this.Ie.show(a);
        pe(this, !0)
    }
}
;
function pe(a, c) {
    a = new (g.h.get(g.h.Ou))(c,a.s.id);
    g.h.Ga(a)
}
b.mH = function(a) {
    this.Ie && this.Ie.isVisible() || !this.Kb.length || a.stopPropagation()
}
;
b.tJ = function() {
    this.Kb.length && this.cn(!0)
}
;
b.rJ = function() {
    this.cn(!1)
}
;
b.HJ = function(a) {
    if (!(0 >= this.s.options.Is) && a.type == g.h.vq && a.Um.tagName && "shadow" != a.Um.tagName.toLowerCase()) {
        for (var c = a = a.Um.cloneNode(!0); c; ) {
            c.removeAttribute && (c.removeAttribute("x"),
            c.removeAttribute("y"),
            c.removeAttribute("id"),
            c.removeAttribute("disabled"),
            "comment" == c.nodeName && (c.removeAttribute("h"),
            c.removeAttribute("w"),
            c.removeAttribute("pinned")));
            var d = c.firstChild || c.nextSibling;
            if (!d)
                for (d = c.parentNode; d; ) {
                    if (d.nextSibling) {
                        d = d.nextSibling;
                        break
                    }
                    d = d.parentNode
                }
            c = d
        }
        a = g.P.pe(a);
        if (-1 == this.Kb.indexOf(a)) {
            for (this.Kb.unshift(a); this.Kb.length > this.s.options.Is; )
                this.Kb.pop();
            this.tx = a = this.rF;
            this.xs || qe(this, a * g.Oc.Rz)
        }
    }
}
;
g.GM = function() {}
;
g.fk = function(a) {
    g.fk.v.constructor.call(this);
    a.Np = this.AK.bind(this);
    var c = this.s = new g.Vc(a)
      , d = new g.Gn(this.s,this);
    c.ce = d;
    c.Ud = c.ce.Ud.bind(c.ce);
    this.s.Vf = !0;
    this.s.rb(this.Ne);
    this.id = g.g.Dg();
    this.L = !!a.L;
    this.Vd = !1;
    this.Qj = a.Gb;
    this.jw = [];
    this.Gs = [];
    this.lo = [];
    this.$d = [];
    this.Xx = [];
    this.mn = this.s.Ob.na().jr;
    this.Qa = null
}
;
g.g.object.W(g.fk, g.dk);
b = g.fk.prototype;
b.Ri = !0;
b.Ne = !1;
b.Ak = !0;
b.Hb = 8;
b.lk = g.fk.prototype.Hb;
b.nF = 3 * g.fk.prototype.lk;
b.oF = 3 * g.fk.prototype.lk;
b.AG = 2.5;
b.tb = 0;
b.Pc = 0;
b.eI = 70;
b.eb = function(a) {
    this.R = g.g.o.N(a, {
        "class": "blocklyFlyout",
        style: "display: none"
    }, null);
    this.nd = g.g.o.N(g.g.F.Ld, {
        "class": "blocklyFlyoutBackground"
    }, this.R);
    this.R.appendChild(this.s.eb());
    this.s.Bc.subscribe(this.nd, "flyoutBackgroundColour", "fill");
    this.s.Bc.subscribe(this.nd, "flyoutOpacity", "fill-opacity");
    return this.R
}
;
b.S = function(a) {
    this.Qa = a;
    this.s.Qa = a;
    this.s.qb = new g.Hu(this.s,this.Vd,!this.Vd,"blocklyFlyoutScrollbar",this.AG);
    this.Va();
    Array.prototype.push.apply(this.jw, g.M.va(this.R, "wheel", this, this.hL));
    this.Ri || (this.ds = this.kw.bind(this),
    D(this.Qa, this.ds));
    Array.prototype.push.apply(this.jw, g.M.va(this.nd, "mousedown", this, this.yj));
    this.s.Eh = this.Qa.Eh.bind(this.Qa);
    this.s.By(this.Qa.Ta);
    var c = this.s;
    c.Ej = new g.Uu(c);
    ea(a.De, {
        zk: this,
        weight: 1,
        tg: [g.Tb.bc.Jq, g.Tb.bc.Kq]
    })
}
;
b.I = function() {
    this.Va();
    fa(this.s.De, this.id);
    g.M.Ra(this.jw);
    this.ds && (ab(this.Qa, this.ds),
    this.ds = null);
    this.s && (this.s.Bc.unsubscribe(this.nd),
    this.s.Qa = null,
    this.s.I(),
    this.s = null);
    this.R && (g.g.o.removeNode(this.R),
    this.R = null);
    this.Qa = this.nd = null
}
;
b.Ih = function() {
    return this.tb
}
;
b.isVisible = function() {
    return this.Ne
}
;
b.rb = function(a) {
    var c = a != this.isVisible();
    this.Ne = a;
    c && (this.Ri || Sc(this.s),
    this.hq())
}
;
b.vl = function(a) {
    var c = a != this.Ak;
    this.Ak = a;
    c && this.hq()
}
;
b.hq = function() {
    var a = this.Ak ? this.isVisible() : !1;
    this.R.style.display = a ? "block" : "none";
    this.s.qb.vl(a)
}
;
b.Va = function() {
    if (this.isVisible()) {
        this.rb(!1);
        for (var a = 0, c; c = this.$d[a]; a++)
            g.M.Ra(c);
        this.$d.length = 0;
        this.Fj && (ab(this.s, this.Fj),
        this.Fj = null)
    }
}
;
b.show = function(a) {
    this.s.Yc(!1);
    this.Va();
    re(this);
    "string" == typeof a && (a = se(this, a));
    this.rb(!0);
    a = g.g.Y.dB(a);
    a = te(this, a);
    ue(this, a.KH, a.oI);
    this.$d.push(g.M.va(this.nd, "mouseover", this, function() {
        for (var c = this.s.xc(!1), d = 0, e; e = c[d]; d++)
            e.Ep()
    }));
    this.Vd ? this.Pc = 0 : this.tb = 0;
    this.s.Yc(!0);
    this.ey();
    this.kw();
    this.position();
    this.Fj = this.ey.bind(this);
    D(this.s, this.Fj)
}
;
function te(a, c) {
    var d = []
      , e = [];
    a.Xx.length = 0;
    for (var f = a.Vd ? a.nF : a.oF, h = 0, k; k = c[h]; h++) {
        if (k.custom) {
            var l = se(a, k.custom);
            l = g.g.Y.dB(l);
            c.splice.apply(c, [h, 1].concat(l));
            k = c[h]
        }
        switch (k.kind.toUpperCase()) {
        case "BLOCK":
            l = k;
            var m = l;
            k = null;
            var n = m.blockxml;
            n && "string" != typeof n ? k = n : n && "string" == typeof n ? (k = g.P.Ff(n),
            m.blockxml = k) : m.type && (k = g.g.xml.createElement("xml"),
            k.setAttribute("type", m.type),
            k.setAttribute("disabled", m.disabled),
            m.blockxml = k);
            if (!k)
                throw Error("Error: Invalid block definition. Block definition must have blockxml or type.");
            m = k;
            k = a;
            n = g.P.Ck(m, k.s);
            n.isEnabled() || k.Xx.push(n);
            k = n;
            l = parseInt(l.gap || m.getAttribute("gap"), 10);
            e.push(isNaN(l) ? f : l);
            d.push({
                type: "block",
                block: k
            });
            break;
        case "SEP":
            l = e;
            m = f;
            k = parseInt(k.gap, 10);
            !isNaN(k) && 0 < l.length ? l[l.length - 1] = k : l.push(m);
            break;
        case "LABEL":
            l = ve(a, k, !0);
            d.push({
                type: "button",
                button: l
            });
            e.push(f);
            break;
        case "BUTTON":
            l = ve(a, k, !1),
            d.push({
                type: "button",
                button: l
            }),
            e.push(f)
        }
    }
    return {
        KH: d,
        oI: e
    }
}
function se(a, c) {
    c = a.s.Qa.My[c] || null;
    if ("function" != typeof c)
        throw TypeError("Couldn't find a callback function when opening a toolbox category.");
    a = c(a.s.Qa);
    if (!Array.isArray(a))
        throw new TypeError("Result of toolbox category callback must be an array.");
    return a
}
function ve(a, c, d) {
    if (!g.gk)
        throw Error("Missing require for Blockly.FlyoutButton");
    return new g.gk(a.s,a.Qa,c,d)
}
function re(a) {
    for (var c = a.s.xc(!1), d = 0, e; e = c[d]; d++)
        e.u == a.s && e.I(!1, !1);
    for (d = 0; d < a.Gs.length; d++)
        if (c = a.Gs[d])
            g.K.Qy(c),
            g.g.o.removeNode(c);
    for (d = a.Gs.length = 0; c = a.lo[d]; d++)
        c.I();
    a.lo.length = 0;
    a.s.Ej.clear()
}
function we(a, c) {
    return function(d) {
        var e = a.Qa.Eh(d);
        e && (Nb(e, c),
        Mb(e, d, a))
    }
}
b.yj = function(a) {
    var c = this.Qa.Eh(a);
    c && Mb(c, a, this)
}
;
function Ib(a, c) {
    var d = null;
    g.h.disable();
    var e = a.Qa.Gk();
    a.Qa.Yc(!1);
    try {
        var f = a.Qa;
        if (!c.Ma())
            throw Error("oldBlock is not rendered.");
        var h = g.P.ph(c, !0);
        f.Yc(!1);
        var k = g.P.Ck(h, f);
        if (!k.Ma())
            throw Error("block is not rendered.");
        var l = g.g.To(f.zb)
          , m = g.g.To(a.s.zb)
          , n = c.jb();
        n.scale(a.s.scale);
        var p = g.g.V.sum(m, n)
          , r = g.g.V.Ao(p, l);
        r.scale(1 / f.scale);
        k.moveBy(r.x, r.y);
        d = k
    } finally {
        g.h.enable()
    }
    g.Fc();
    c = g.$.FB(a.Qa, e);
    if (g.h.isEnabled()) {
        g.h.la(!0);
        for (e = 0; e < c.length; e++)
            f = c[e],
            g.h.Ga(new (g.h.get(g.h.Wn))(f));
        g.h.Ga(new (g.h.get(g.h.ji))(d))
    }
    a.Ri ? a.Va() : a.kw();
    return d
}
b.kw = function() {
    for (var a = this.s.xc(!1), c = 0, d; d = a[c]; c++)
        if (-1 == this.Xx.indexOf(d))
            for (var e = Ya(this.Qa, g.g.rw(d)); d; )
                d.ee(e),
                d = t(d)
}
;
b.ey = function() {
    this.Fj && ab(this.s, this.Fj);
    this.s.scale = this.Qa.scale;
    for (var a = 0, c = this.s.xc(!1), d = 0, e; e = c[d]; d++) {
        var f = E(e).width;
        e.T && (f -= this.mn);
        a = Math.max(a, f)
    }
    for (d = 0; e = this.lo[d]; d++)
        a = Math.max(a, e.width);
    a += 1.5 * this.lk + this.mn;
    a *= this.s.scale;
    a += g.bb.md;
    if (this.tb != a) {
        for (d = 0; e = c[d]; d++) {
            if (this.L) {
                f = e.jb().x;
                var h = a / this.s.scale - this.lk;
                e.T || (h -= this.mn);
                e.moveBy(h - f, 0)
            }
            e.CB && (f = e.CB,
            h = e,
            e = E(h),
            f.setAttribute("width", e.width),
            f.setAttribute("height", e.height),
            h = h.jb(),
            f.setAttribute("y", h.y),
            f.setAttribute("x", this.L ? h.x - e.width : h.x))
        }
        if (this.L)
            for (d = 0; e = this.lo[d]; d++)
                e.moveTo(a / this.s.scale - e.width - this.lk - this.mn, e.rl.y);
        this.Qa.Gb != this.Qj || this.Qj != g.g.Y.Ka.Ib || this.Qa.Qb || this.Qa.translate(this.Qa.scrollX + a, this.Qa.scrollY);
        this.tb = a;
        this.position();
        Sc(this.Qa)
    }
    this.Fj && D(this.s, this.Fj)
}
;
function Gb(a) {
    return a.s.qb ? a.s.qb.isVisible() : !1
}
;g.Zn = function(a) {
    g.Zn.v.constructor.call(this, a)
}
;
g.g.object.W(g.Zn, g.fk);
g.Zn.gP = "verticalFlyout";
b = g.Zn.prototype;
b.AK = function(a) {
    if (this.isVisible()) {
        var c = this.s.ce
          , d = c.fj()
          , e = zb(c);
        c = Lc(c);
        "number" == typeof a.y && (this.s.scrollY = -(d.top + (d.height - e.height) * a.y));
        this.s.translate(this.s.scrollX + c.left, this.s.scrollY + c.top)
    }
}
;
b.position = function() {
    if (this.isVisible() && this.Qa.isVisible()) {
        var a = zb(this.Qa.ce);
        this.Pc = a.height;
        var c = this.tb - this.Hb;
        a = a.height - 2 * this.Hb;
        var d = this.Qj == g.g.Y.Ka.Mc
          , e = c + this.Hb;
        e = ["M " + (d ? e : 0) + ",0"];
        e.push("h", d ? -c : c);
        e.push("a", this.Hb, this.Hb, 0, 0, d ? 0 : 1, d ? -this.Hb : this.Hb, this.Hb);
        e.push("v", Math.max(0, a));
        e.push("a", this.Hb, this.Hb, 0, 0, d ? 0 : 1, d ? this.Hb : -this.Hb, this.Hb);
        e.push("h", d ? c : -c);
        e.push("z");
        this.nd.setAttribute("d", e.join(" "));
        this.isVisible() ? (d = this.Qa.ce,
        c = Lc(d),
        a = zb(d),
        d = Kc(d),
        d = this.Qa.Gb == this.Qj ? this.Qa.Qb ? this.Qj == g.g.Y.Ka.Ib ? d.width : a.width - this.tb : this.Qj == g.g.Y.Ka.Ib ? 0 : a.width : this.Qj == g.g.Y.Ka.Ib ? 0 : a.width + c.left - this.tb) : d = 0;
        c = this.tb;
        a = this.Pc;
        this.R.setAttribute("width", c);
        this.R.setAttribute("height", a);
        Uc(this.s, c, a);
        "svg" == this.R.tagName ? g.g.o.Mp(this.R, "translate(" + d + "px,0px)") : this.R.setAttribute("transform", "translate(" + d + ",0)");
        if (c = this.s.qb)
            c.tt(d, 0),
            c.resize(),
            c.Fb && c.Fb.setPosition(c.Fb.position.x, c.Fb.position.y),
            c.sb && c.sb.setPosition(c.sb.position.x, c.sb.position.y)
    }
}
;
b.uy = function() {
    var a = this.s.qb;
    a.sb && a.sb.set(0, !0)
}
;
b.hL = function(a) {
    var c = g.g.SB(a);
    if (c.y) {
        var d = this.s.ce
          , e = d.fj();
        c = zb(d).top - e.top + c.y;
        d = this.s.qb;
        d.sb && d.sb.set(c, !0);
        g.ga.Va();
        g.G.Mk()
    }
    a.preventDefault();
    a.stopPropagation()
}
;
function ue(a, c, d) {
    a.s.scale = a.Qa.scale;
    for (var e = a.lk, f = a.L ? e : e + a.mn, h = 0, k; k = c[h]; h++)
        if ("block" == k.type) {
            k = k.block;
            for (var l = q(k, !1), m = 0, n; n = l[m]; m++)
                n.Xb = !0;
            k.Ia();
            n = k.Ma();
            l = E(k);
            m = k.T ? f - a.mn : f;
            k.moveBy(m, e);
            var p = a
              , r = k
              , y = h;
            m = g.g.o.N(g.g.F.Dc, {
                "fill-opacity": 0,
                x: a.L ? m - l.width : m,
                y: e,
                height: l.height,
                width: l.width
            }, null);
            m.Gf = r;
            g.K.lm(m);
            p.s.zb.insertBefore(m, r.Ma());
            r.CB = m;
            p.Gs[y] = m;
            p = a;
            p.$d.push(g.M.va(n, "mousedown", null, we(p, k)));
            p.$d.push(g.M.va(m, "mousedown", null, we(p, k)));
            p.$d.push(g.M.bind(n, "mouseenter", k, k.pr));
            p.$d.push(g.M.bind(n, "mouseleave", k, k.Ep));
            p.$d.push(g.M.bind(m, "mouseenter", k, k.pr));
            p.$d.push(g.M.bind(m, "mouseleave", k, k.Ep));
            e += l.height + d[h]
        } else
            "button" == k.type && (l = a,
            m = k.button,
            n = f,
            p = e,
            r = m.eb(),
            m.moveTo(n, p),
            m.show(),
            l.$d.push(g.M.va(r, "mousedown", l, l.yj)),
            l.lo.push(m),
            e += k.button.height + d[h])
}
b.uw = function() {
    if (!this.R || this.Ri || !this.isVisible())
        return null;
    var a = this.R.getBoundingClientRect()
      , c = a.left;
    return this.Qj == g.g.Y.Ka.Ib ? new g.g.Rect(-1E9,1E9,-1E9,c + a.width) : new g.g.Rect(-1E9,1E9,c,1E9)
}
;
g.B.register(g.B.U.Pq, g.B.bk, g.Zn);
function xe(a, c, d) {
    var e = T;
    this.name = a;
    this.CD = c;
    this.GK = 0;
    this.wB = d;
    this.Si = e;
    this.Wa = new g.g.V;
    this.reset();
    this.Ht = e.$c.length;
    e.$c.push(this);
    console.log(this + " loaded.")
}
b = xe.prototype;
b.MK = !1;
b.Pf = !1;
b.Of = 0;
b.Ah = 0;
b.facing = 0;
b.speed = 0;
b.Ag = 0;
b.Wa = null;
b.Zw = 0;
b.toString = function() {
    return "[" + this.name + "]"
}
;
function ye(a, c, d, e) {
    a.IA = c;
    a.xC = d;
    a.FH = e
}
b.reset = function() {
    delete this.MK;
    delete this.Pf;
    delete this.speed;
    delete this.Ag;
    delete this.Zw;
    this.Of = this.GK;
    this.Wa.x = this.CD.x;
    this.Wa.y = this.CD.y;
    this.facing = this.Ah = Fd(g.g.Sa.nn(Math.atan2(50 - this.Wa.y, 50 - this.Wa.x)));
    this.oC = null
}
;
b.Ow = function() {
    this.oC = new Interpreter(this.FH,this.Si.Ow)
}
;
function ze(a, c) {
    a.Of += c;
    100 <= a.Of && Ae(a)
}
function Ae(a) {
    a.speed = 0;
    a.Pf = !0;
    a.Of = 100;
    a.Si.$q.unshift(a);
    a.Si.lg.push({
        type: "DIE",
        avatar: a
    });
    console.log(a + " sinks.")
}
b.stop = function() {
    this.Ag = 0
}
;
var T = {
    $c: [],
    $q: [],
    lg: [],
    Vl: [],
    mF: 50,
    GG: 100,
    wG: .5,
    kf: null,
    kE: 1,
    Vz: 3,
    $y: 5,
    wE: 5,
    Qt: 3,
    eD: 0,
    bs: 0,
    JD: 0,
    KG: 3E5,
    Yv: null,
    reset: function() {
        clearTimeout(T.eD);
        T.lg.length = 0;
        T.Vl.length = 0;
        T.$q.length = 0;
        for (var a = T.JD = 0, c; c = T.$c[a]; a++)
            c.reset()
    },
    start: function(a) {
        T.Yv = a;
        T.bs = Date.now() + T.KG;
        console.log("Starting battle with " + T.$c.length + " avatars.");
        a = 0;
        for (var c; c = T.$c[a]; a++)
            try {
                c.Ow()
            } catch (d) {
                console.log(c + " fails to load: " + d),
                Ae(c)
            }
        T.update()
    },
    update: function() {
        T.$K();
        T.aL();
        T.ZK();
        T.$c.length <= T.$q.length + 1 && (T.bs = Math.min(T.bs, Date.now() + 1E3));
        Date.now() > T.bs ? T.stop() : T.eD = setTimeout(T.update, 1E3 / T.mF)
    },
    stop: function() {
        for (var a = [], c = 0, d; d = T.$c[c]; c++)
            d.Pf || a.push(d);
        c = a.length;
        for (a.sort(function(e, f) {
            return e.Of - f.Of
        }); a.length; )
            T.$q.unshift(a.pop());
        T.Yv && T.Yv(c)
    },
    aL: function() {
        for (var a = T.Vl.length - 1; 0 <= a; a--) {
            var c = T.Vl[a];
            c.progress += T.Vz;
            var d = 0;
            if (c.gt - c.progress < T.Vz / 2) {
                T.Vl.splice(a, 1);
                for (var e = 0, f; f = T.$c[e]; e++)
                    if (!f.Pf) {
                        var h = 10 * (1 - g.g.V.Bo(f.Wa, c.Eo) / 4);
                        0 < h && (ze(f, h),
                        d = Math.max(d, h))
                    }
                T.lg.push({
                    type: "BOOM",
                    damage: d,
                    x: c.Eo.x,
                    y: c.Eo.y
                })
            }
        }
    },
    ZK: function() {
        for (var a = 0, c; c = T.$c[a]; a++)
            if (!c.Pf && (c.speed < c.Ag ? c.speed = Math.min(c.speed + T.$y, c.Ag) : c.speed > c.Ag && (c.speed = Math.max(c.speed - T.$y, c.Ag)),
            0 < c.speed)) {
                var d = T.VA(c)
                  , e = d[1]
                  , f = g.g.Sa.Cd(c.Ah)
                  , h = c.speed / 100 * T.kE
                  , k = Math.cos(f) * h;
                h *= Math.sin(f);
                c.Wa.x += k;
                c.Wa.y += h;
                0 > c.Wa.x || 100 < c.Wa.x || 0 > c.Wa.y || 100 < c.Wa.y ? (c.Wa.x = g.g.Sa.ug(c.Wa.x, 0, 100),
                c.Wa.y = g.g.Sa.ug(c.Wa.y, 0, 100),
                e = c.speed / 100 * T.Qt,
                ze(c, e),
                c.speed = 0,
                c.Ag = 0,
                T.lg.push({
                    type: "CRASH",
                    avatar: c,
                    damage: e
                })) : (d = T.VA(c),
                f = d[0],
                d = d[1],
                d < T.wE && e > d && (c.Wa.x -= k,
                c.Wa.y -= h,
                e = Math.max(c.speed, f.speed) / 100 * T.Qt,
                ze(c, e),
                c.speed = 0,
                c.Ag = 0,
                ze(f, e),
                f.speed = 0,
                f.Ag = 0,
                T.lg.push({
                    type: "CRASH",
                    avatar: c,
                    damage: e
                }, {
                    type: "CRASH",
                    avatar: f,
                    damage: e
                })))
            }
    },
    $K: function() {
        for (var a = 0; a < T.GG; a++) {
            T.JD++;
            for (var c = 0, d; d = T.$c[c]; c++)
                if (!d.Pf) {
                    T.kf = d;
                    try {
                        d.oC.step()
                    } catch (e) {
                        console.log(d + " throws an error: " + e),
                        Ae(d)
                    }
                    T.kf = null
                }
        }
    },
    Ow: function(a, c) {
        var d = function(e) {
            console.log(T.kf.name + " logs: " + Number(e))
        };
        a.setProperty(c, "log", a.createNativeFunction(d));
        d = function(e, f) {
            var h = e;
            e = T.kf;
            var k = void 0 === f || null === f ? 5 : f;
            if ("number" != typeof h || isNaN(h) || "number" != typeof k || isNaN(k))
                throw TypeError();
            h = Fd(h);
            k = g.g.Sa.ug(k, 0, 20);
            e.Si.lg.push({
                type: "SCAN",
                avatar: e,
                degree: h,
                resolution: k
            });
            f = Fd(h - k / 2);
            h = Fd(h + k / 2);
            f > h && (h += 360);
            k = e.Wa.x;
            for (var l = e.Wa.y, m = Infinity, n = 0, p; p = e.Si.$c[n]; n++)
                if (p != e && !p.Pf) {
                    var r = p.Wa.x
                      , y = p.Wa.y;
                    p = Math.sqrt((y - l) * (y - l) + (r - k) * (r - k));
                    p >= m || (r = Math.atan2(y - l, r - k),
                    r = Fd(g.g.Sa.nn(r)),
                    r < f && (r += 360),
                    f <= r && r <= h && (m = p))
                }
            return m
        }
        ;
        a.setProperty(c, "scan", a.createNativeFunction(d));
        d = function(e, f) {
            var h = f;
            f = T.kf;
            if ("number" != typeof e || isNaN(e) || "number" != typeof h || isNaN(h))
                throw TypeError;
            var k = Date.now();
            f.Zw + 1E3 * f.Si.wG > k ? e = !1 : (f.Zw = k,
            k = new g.g.V(f.Wa.x,f.Wa.y),
            e = Fd(e),
            f.facing = e,
            h = g.g.Sa.ug(h, 0, 70),
            e = {
                kH: f,
                Up: k,
                Ah: e,
                gt: h,
                Eo: new g.g.V(k.x + h * Math.cos(g.g.Sa.Cd(e)),k.y + h * Math.sin(g.g.Sa.Cd(e))),
                progress: 0
            },
            f.Si.Vl.push(e),
            f.Si.lg.push({
                type: "BANG",
                avatar: f,
                degree: e.Ah
            }),
            e = !0);
            return e
        }
        ;
        a.setProperty(c, "cannon", a.createNativeFunction(d));
        d = function(e, f) {
            var h = T.kf;
            f = void 0 === f || null === f ? 50 : f;
            if ("number" != typeof e || isNaN(e) || "number" != typeof f || isNaN(f))
                throw TypeError;
            e = Fd(e);
            h.Ah != e && (50 >= h.speed ? (h.Ah = e,
            h.facing = h.Ah) : f = 0);
            0 == h.speed && 0 < f && (h.speed = .1);
            h.Ag = g.g.Sa.ug(f, 0, 100)
        }
        ;
        a.setProperty(c, "drive", a.createNativeFunction(d));
        a.setProperty(c, "swim", a.createNativeFunction(d));
        a.setProperty(c, "stop", a.createNativeFunction(function() {
            T.kf.stop()
        }));
        a.setProperty(c, "damage", a.createNativeFunction(function() {
            return T.kf.Of
        }));
        a.setProperty(c, "health", a.createNativeFunction(function() {
            return 100 - T.kf.Of
        }));
        a.setProperty(c, "speed", a.createNativeFunction(function() {
            return T.kf.speed
        }));
        d = function() {
            return T.kf.Wa.x
        }
        ;
        a.setProperty(c, "loc_x", a.createNativeFunction(d));
        a.setProperty(c, "getX", a.createNativeFunction(d));
        d = function() {
            return T.kf.Wa.y
        }
        ;
        a.setProperty(c, "loc_y", a.createNativeFunction(d));
        a.setProperty(c, "getY", a.createNativeFunction(d));
        if (c = a.getProperty(c, "Math"))
            d = function(e) {
                return Math.sin(g.g.Sa.Cd(e))
            }
            ,
            a.setProperty(c, "sin_deg", a.createNativeFunction(d)),
            d = function(e) {
                return Math.cos(g.g.Sa.Cd(e))
            }
            ,
            a.setProperty(c, "cos_deg", a.createNativeFunction(d)),
            d = function(e) {
                return Math.tan(g.g.Sa.Cd(e))
            }
            ,
            a.setProperty(c, "tan_deg", a.createNativeFunction(d)),
            d = function(e) {
                return g.g.Sa.nn(Math.asin(e))
            }
            ,
            a.setProperty(c, "asin_deg", a.createNativeFunction(d)),
            d = function(e) {
                return g.g.Sa.nn(Math.acos(e))
            }
            ,
            a.setProperty(c, "acos_deg", a.createNativeFunction(d)),
            d = function(e) {
                return g.g.Sa.nn(Math.atan(e))
            }
            ,
            a.setProperty(c, "atan_deg", a.createNativeFunction(d))
    },
    VA: function(a) {
        for (var c = null, d = Infinity, e = 0, f; f = T.$c[e]; e++)
            if (!f.Pf && a != f) {
                var h = Math.min(d, g.g.V.Bo(a.Wa, f.Wa));
                h < d && (d = h,
                c = f)
            }
        return [c, d]
    }
};
var Be, Ce, De, Ee = {}, Fe = [], Ge = new Image;
Ge.src = "pond/sprites.png";
var He = ["#ff8b00", "#c90015", "#166c0b", "#223068"]
  , Ie = 0
  , Je = Object.create(null);
function Ke() {
    Be = document.getElementById("scratch").getContext("2d");
    var a = document.getElementById("display").getContext("2d");
    Ce = a;
    De = a.canvas.width;
    a.globalCompositeOperation = "copy";
    Le(["pond/whack.mp3", "pond/whack.ogg"], "whack");
    Le(["pond/boom.mp3", "pond/boom.ogg"], "boom");
    Le(["pond/splash.mp3", "pond/splash.ogg"], "splash");
    if (!g.g.userAgent.dh && !g.g.userAgent.cu)
        for (var c in Je) {
            a = Je[c];
            a.volume = .01;
            try {
                a.play()
            } catch (d) {}
            a.pause()
        }
}
function Me() {
    clearTimeout(Ie);
    Fe.length = 0;
    var a = document.getElementById("avatarStatRow1");
    a.innerHTML = "";
    var c = document.getElementById("avatarStatRow2");
    c.innerHTML = "";
    for (var d = [], e = [], f = document.getElementById("avatar-select"), h = 0, k; k = T.$c[h]; h++) {
        var l = Math.floor(h / 2) % 2 ? c : a
          , m = He[k.Ht % He.length]
          , n = document.createElement("td");
        f && (n.className = "asButton",
        n.setAttribute("role", "button"),
        n.addEventListener("click", function(r) {
            return function() {
                f.selectedIndex = r;
                var y = document.createEvent("HTMLEvents");
                y.initEvent("change", !1, !0);
                f.dispatchEvent(y)
            }
        }(h)));
        n.style.borderColor = m;
        var p = document.createElement("div");
        p.className = "avatarStatHealth";
        p.style.background = m;
        k.gL = p;
        e[h] = p;
        n.appendChild(p);
        p = document.createElement("div");
        p.className = "avatarStatName";
        k = document.createTextNode(k.name);
        p.appendChild(k);
        d[h] = p;
        n.appendChild(p);
        p = document.createElement("div");
        k = document.createTextNode("\u00a0");
        p.appendChild(k);
        n.appendChild(p);
        l.appendChild(n)
    }
    for (h = 0; p = d[h]; h++)
        p.style.width = p.parentNode.offsetWidth - 2 + "px";
    for (h = 0; p = e[h]; h++)
        p.style.height = p.parentNode.offsetHeight - 2 + "px";
    Ne()
}
var Oe = 0
  , Pe = 0;
function Qe() {
    Ne();
    var a = Date.now()
      , c = Math.max(1, 1E3 / 36 - (a - Oe - Pe));
    Ie = setTimeout(Qe, c);
    Oe = a;
    Pe = c
}
function Re(a) {
    return a / 100 * (De - 35) + 17.5
}
function Ne() {
    var a = Be;
    a.beginPath();
    a.rect(0, 0, a.canvas.width, a.canvas.height);
    a.fillStyle = "#527dbf";
    a.fill();
    for (var c = [], d = 0, e; e = T.$c[d]; d++)
        e.Pf && c.push(e);
    for (d = 0; e = T.$c[d]; d++)
        e.Pf || c.push(e);
    for (d = 0; e = c[d]; d++) {
        a.save();
        var f = Re(e.Wa.x)
          , h = Re(100 - e.Wa.y);
        a.translate(f, h);
        var k = e.Ht % He.length * 35;
        e.Pf && (a.globalAlpha = .25);
        0 < e.speed && (a.save(),
        f = 50 < e.speed ? 0 : 25 < e.speed ? 35 : 70,
        a.rotate(g.g.Sa.Cd(-e.Ah)),
        a.drawImage(Ge, 455, f, 35, 35, -45.5, -17.5, 35, 35),
        a.restore());
        a.drawImage(Ge, 0, k, 35, 35, -17.5, -17.5, 35, 35);
        f = g.g.Sa.Cd(e.facing);
        a.translate(12 * Math.cos(f), 12 * -Math.sin(f) - 2);
        f = (14 - Math.round(e.facing / 360 * 12)) % 12 + 1;
        e = e.facing % 30;
        15 <= e && (e -= 30);
        e /= 1.5;
        a.rotate(g.g.Sa.Cd(-e));
        a.drawImage(Ge, 35 * f, k, 35, 35, -15.5, -15.5, 35, 35);
        a.restore()
    }
    for (d = 0; e = T.Vl[d]; d++) {
        a.save();
        h = e.progress / e.gt;
        k = (e.Eo.y - e.Up.y) * -h;
        f = e.gt / 2;
        var l = .15 * e.gt;
        f = l - Math.pow((e.progress - f) / Math.sqrt(l) * l / f, 2);
        h = Re(e.Up.x + (e.Eo.x - e.Up.x) * h);
        l = Re(100 - e.Up.y + k - f);
        k = Re(100 - e.Up.y + k);
        a.beginPath();
        a.arc(h, k, 5 * Math.max(0, 1 - f / 10), 0, 2 * Math.PI, !0);
        a.closePath();
        a.fillStyle = "rgba(128, 128, 128, " + Math.max(0, 1 - f / 10) + ")";
        a.fill();
        a.beginPath();
        a.arc(h, l, 5, 0, 2 * Math.PI, !0);
        a.closePath();
        a.fillStyle = He[e.kH.Ht % He.length];
        a.fill()
    }
    for (d = 0; d < T.lg.length; d++)
        if (f = T.lg[d],
        e = f.avatar,
        "CRASH" == f.type) {
            if (k = Ee[e.id],
            !k || k + 1E3 < Date.now())
                Se("whack", f.damage / T.Qt),
                Ee[e.id] = Date.now()
        } else
            "SCAN" == f.type ? (h = Math.max(f.resolution / 2, .5),
            k = -g.g.Sa.Cd(f.degree + h),
            l = -g.g.Sa.Cd(f.degree - h),
            a.beginPath(),
            f = Re(e.Wa.x),
            h = Re(100 - e.Wa.y),
            a.moveTo(f, h),
            a.lineTo(f + 200 * Math.cos(k), h + 200 * Math.sin(k)),
            a.arc(f, h, 200, k, l),
            a.lineTo(f, h),
            e = a.createRadialGradient(f, h, 17.5, f, h, 200),
            e.addColorStop(0, "rgba(255, 255, 255, 0.3)"),
            e.addColorStop(1, "rgba(255, 255, 255, 0)"),
            a.fillStyle = e,
            a.fill()) : "BANG" != f.type && ("BOOM" == f.type ? (f.damage && Se("boom", f.damage / 10),
            Fe.push({
                x: f.x,
                y: f.y,
                t: 0
            })) : "DIE" == f.type && Se("splash"));
    T.lg.length = 0;
    for (d = Fe.length - 1; 0 <= d; d--)
        e = Fe[d],
        f = Re(e.x),
        h = Re(100 - e.y),
        a.beginPath(),
        a.arc(f, h, e.t + 1, 0, 2 * Math.PI, !0),
        a.closePath(),
        a.lineWidth = 5,
        a.strokeStyle = "rgba(255, 255, 255, " + (1 - e.t / 10) + ")",
        a.stroke(),
        e.t += 2,
        10 < e.t && Fe.splice(d, 1);
    Ce.drawImage(a.canvas, 0, 0);
    for (d = 0; e = c[d]; d++)
        a = e.gL,
        a.parentNode.title = e.name + ": " + Math.round(100 - e.Of) + "%",
        a.style.width = Math.max(0, a.parentNode.offsetWidth * (1 - e.Of / 100) - 2) + "px"
}
function Le(a, c) {
    if (window.Audio && a.length) {
        for (var d, e = new window.Audio, f = 0; f < a.length; f++) {
            var h = a[f]
              , k = h.match(/\.(\w+)$/);
            if (k && e.canPlayType("audio/" + k[1])) {
                d = new window.Audio(h);
                break
            }
        }
        d && d.play && (Je[c] = d)
    }
}
function Se(a, c) {
    a = Je[a];
    a = g.g.userAgent.dh || g.g.userAgent.Uj ? a : a.cloneNode();
    a.volume = void 0 === c ? 1 : c;
    a.play()
}
;var U = null
  , Te = !1;
function Ue() {
    if (!Te) {
        var a = document.getElementById("docsButton")
          , c = document.getElementById("dialogDocs")
          , d = document.getElementById("frameDocs")
          , e = "pond/docs.html?lang=" + pd + "&mode=" + td;
        d.src != e && (d.src = e);
        Te = !0;
        S.vj(a, !1, .2);
        S.vj(c, !0, .8);
        setTimeout(function() {
            c.style.visibility = "visible";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }, 175)
    }
}
function Ve() {
    if (Te) {
        var a = document.getElementById("docsButton")
          , c = document.getElementById("dialogDocs");
        Te = !1;
        S.vj(c, !1, .8);
        S.vj(a, !0, .2);
        setTimeout(function() {
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }, 175);
        c.style.visibility = "hidden"
    }
}
function We() {
    var a = U;
    if (a) {
        var c = Qd()
          , d = Od ? Nd.getValue() : Xe();
        if (Od) {
            try {
                var e = "object" == typeof Babel ? Babel.transform(d, {
                    presets: ["es2015"]
                }).code : void 0;
                d = e || d
            } catch (f) {
                alert(f)
            }
            ye(a, void 0, c, d)
        } else
            ye(a, c, void 0, d)
    }
}
function Ye(a) {
    if (!Wd(a)) {
        We();
        a = document.getElementById("runButton");
        var c = document.getElementById("resetButton");
        c.style.minWidth || (c.style.minWidth = a.offsetWidth + "px");
        a.style.display = "none";
        c.style.display = "inline";
        $e()
    }
}
function af(a) {
    Wd(a) || (document.getElementById("runButton").style.display = "inline",
    document.getElementById("resetButton").style.display = "none",
    T.reset(),
    Me())
}
function $e() {
    "Interpreter"in window ? (T.reset(),
    Me(),
    T.start(null),
    Qe()) : setTimeout($e, 250)
}
;g.gb = function(a, c, d) {
    "function" != typeof a && g.gb.VD(a);
    this.Tm = a;
    this.Jy = this.$x = this.hs = null;
    a = this.Tm;
    if (Array.isArray(a)) {
        for (var e = !1, f = 0; f < a.length; f++) {
            var h = a[f][0];
            "string" == typeof h ? a[f][0] = g.g.se(h) : (null != h.alt && (a[f][0].alt = g.g.se(h.alt)),
            e = !0)
        }
        if (!(e || 2 > a.length)) {
            e = [];
            for (f = 0; f < a.length; f++)
                e.push(a[f][0]);
            f = g.g.yb.Cy(e);
            h = g.g.yb.DH(e, f);
            var k = g.g.yb.EH(e, f);
            !h && !k || f <= h + k || (h && (this.$x = e[0].substring(0, h - 1)),
            k && (this.Jy = e[0].substr(1 - k)),
            this.Tm = g.gb.iH(a, h, k))
        }
    }
    this.an = this.getOptions(!1)[0];
    g.gb.v.constructor.call(this, this.an[1], c, d);
    this.jn = this.ef = this.Jh = this.ae = this.Kp = null
}
;
g.g.object.W(g.gb, g.ve);
g.gb.ka = function(a) {
    return new g.gb(a.options,void 0,a)
}
;
g.gb.prototype.Am = function(a) {
    eb(this) && this.getOptions(!1);
    this.setValue(a.textContent)
}
;
g.gb.prototype.qk = !0;
g.gb.zL = 25;
g.gb.bN = .45;
g.gb.xF = 5;
g.gb.yF = 2 * g.gb.xF;
g.gb.dz = g.g.userAgent.Uj ? "\u25bc" : "\u25be";
b = g.gb.prototype;
b.ak = "default";
b.lj = function() {
    this.Dy() ? Rb(this) : this.yv = this.J.Ma();
    Sb(this);
    this.Jh = g.g.o.N(g.g.F.jk, {}, this.He);
    this.na().dF ? (this.jn = g.g.o.N(g.g.F.jk, {
        height: this.na().Dn + "px",
        width: this.na().Dn + "px"
    }, this.He),
    this.jn.setAttributeNS(g.g.o.Mf, "xlink:href", this.na().eF)) : (this.ef = g.g.o.N(g.g.F.Pu, {}, this.Ac),
    this.ef.appendChild(document.createTextNode(this.J.L ? g.gb.dz + " " : " " + g.gb.dz)),
    this.J.L ? this.Ac.insertBefore(this.ef, this.$h) : this.Ac.appendChild(this.ef));
    this.kc && g.g.o.Fa(this.kc, "blocklyDropdownRect")
}
;
b.Dy = function() {
    return !this.na().Wt || this.na().Wt && !this.J.Pa
}
;
b.Ug = function(a) {
    this.gw();
    this.ae.Px = a && "number" === typeof a.clientX ? new g.g.V(a.clientX,a.clientY) : null;
    this.ae.Ia(g.G.IB());
    g.g.o.Fa(this.ae.Db, "blocklyDropdownMenu");
    if (this.na().cF) {
        a = this.J.Pa ? this.J.getParent().vw() : this.J.vw();
        var c = this.J.Pa ? this.J.getParent().style.vg : this.J.style.vg;
        g.G.Wc(a, c)
    }
    g.G.xD(this, this.hw.bind(this));
    this.ae.focus();
    this.Kp && this.ae.Zh(this.Kp);
    this.ic()
}
;
b.gw = function() {
    var a = new g.lu;
    a.Df(g.g.za.Gi.KF);
    this.ae = a;
    var c = this.getOptions(!1);
    this.Kp = null;
    for (var d = 0; d < c.length; d++) {
        var e = c[d][0]
          , f = c[d][1];
        if ("object" == typeof e) {
            var h = new Image(e.width,e.height);
            h.src = e.src;
            h.alt = e.alt || "";
            e = h
        }
        e = new g.mu(e,f);
        e.Df(g.g.za.Gi.dG);
        e.ty = this.J.L;
        e.wv = !0;
        a.Xf.push(e);
        e.xv = f == this.Cc;
        f == this.Cc && (this.Kp = e);
        nc(e, this.JI, this)
    }
}
;
b.hw = function() {
    this.ae && this.ae.I();
    this.Kp = this.ae = null;
    this.ic()
}
;
b.JI = function(a) {
    g.G.Im(this, !0);
    this.ZC(a)
}
;
b.ZC = function(a) {
    this.setValue(a.getValue())
}
;
g.gb.iH = function(a, c, d) {
    for (var e = [], f = 0; f < a.length; f++) {
        var h = a[f][0]
          , k = a[f][1];
        h = h.substring(c, h.length - d);
        e[f] = [h, k]
    }
    return e
}
;
function eb(a) {
    return "function" == typeof a.Tm
}
b = g.gb.prototype;
b.getOptions = function(a) {
    return eb(this) ? (this.hs && a || (this.hs = this.Tm.call(this),
    g.gb.VD(this.hs)),
    this.hs) : this.Tm
}
;
b.bj = function(a) {
    for (var c = !1, d = this.getOptions(!0), e = 0, f; f = d[e]; e++)
        if (f[1] == a) {
            c = !0;
            break
        }
    return c ? a : (this.J && console.warn("Cannot set the dropdown's value to an unavailable option. Block type: " + this.J.type + ", Field name: " + this.name + ", Value: " + a),
    null)
}
;
b.Ch = function(a) {
    g.gb.v.Ch.call(this, a);
    a = this.getOptions(!0);
    for (var c = 0, d; d = a[c]; c++)
        d[1] == this.Cc && (this.an = d)
}
;
b.ic = function() {
    this.kc && (this.kc.setAttribute("stroke", this.J.style.vg),
    this.ae ? this.kc.setAttribute("fill", this.J.style.vg) : this.kc.setAttribute("fill", "transparent"));
    this.J && this.ef && (this.ef.style.fill = this.J.Pa ? this.J.style.Jr : this.J.style.sh)
}
;
b.Ij = function() {
    this.$h.nodeValue = "";
    this.Jh.style.display = "none";
    var a = this.an && this.an[0];
    if (a && "object" == typeof a) {
        this.Jh.style.display = "";
        this.Jh.setAttributeNS(g.g.o.Mf, "xlink:href", a.src);
        this.Jh.setAttribute("height", a.height);
        this.Jh.setAttribute("width", a.width);
        var c = Number(a.height);
        a = Number(a.width);
        var d = !!this.kc
          , e = Math.max(d ? this.na().Az : 0, c + g.gb.yF);
        d = d ? this.na().Pl : 0;
        var f = this.jn ? bf(this, a + d, e / 2 - this.na().Dn / 2) : g.g.o.xw(this.ef, this.na().si, this.na().ui, this.na().ri);
        this.ie.width = a + f + 2 * d;
        this.ie.height = e;
        var h = 0;
        this.J.L ? this.Jh.setAttribute("x", d + f) : (h = a + f,
        this.Ac.setAttribute("text-anchor", "end"),
        this.Jh.setAttribute("x", d));
        this.Jh.setAttribute("y", e / 2 - c / 2);
        Vb(this, h + d, a + f)
    } else
        this.$h.nodeValue = this.ls(),
        g.g.o.Fa(this.Ac, "blocklyDropdownText"),
        this.Ac.setAttribute("text-anchor", "start"),
        e = !!this.kc,
        c = Math.max(e ? this.na().Az : 0, this.na().Oq),
        a = g.g.o.xw(this.Ac, this.na().si, this.na().ui, this.na().ri),
        e = e ? this.na().Pl : 0,
        d = 0,
        this.jn && (d = bf(this, a + e, c / 2 - this.na().Dn / 2)),
        this.ie.width = a + d + 2 * e,
        this.ie.height = c,
        Vb(this, e, a);
    Wb(this)
}
;
function bf(a, c, d) {
    if (!a.jn)
        return 0;
    var e = a.kc ? a.na().Pl : 0
      , f = a.na().fF
      , h = a.na().Dn;
    a.jn.setAttribute("transform", "translate(" + (a.J.L ? e : c + f) + "," + d + ")");
    return h + f
}
b.Ew = function() {
    if (!this.an)
        return null;
    var a = this.an[0];
    return "object" == typeof a ? a.alt : a
}
;
g.gb.VD = function(a) {
    if (!Array.isArray(a))
        throw TypeError("FieldDropdown options must be an array.");
    if (!a.length)
        throw TypeError("FieldDropdown options must not be an empty array.");
    for (var c = !1, d = 0; d < a.length; ++d) {
        var e = a[d];
        Array.isArray(e) ? "string" != typeof e[1] ? (c = !0,
        console.error("Invalid option[" + d + "]: Each FieldDropdown option id must be a string. Found " + e[1] + " in: ", e)) : e[0] && "string" != typeof e[0] && "string" != typeof e[0].src && (c = !0,
        console.error("Invalid option[" + d + "]: Each FieldDropdown option must have a string label or image description. Found" + e[0] + " in: ", e)) : (c = !0,
        console.error("Invalid option[" + d + "]: Each FieldDropdown option must be an array. Found: ", e))
    }
    if (c)
        throw TypeError("Found invalid FieldDropdown options.");
}
;
g.rf.register("field_dropdown", g.gb);
g.Kc = function(a, c, d) {
    this.Sp = !0;
    g.Kc.v.constructor.call(this, a, c, d);
    this.Ws = this.Vs = this.Wd = null;
    this.gs = !1;
    this.s = null
}
;
g.g.object.W(g.Kc, g.ve);
g.Kc.prototype.Nl = "";
g.Kc.ka = function(a) {
    var c = g.g.se(a.text);
    return new g.Kc(c,void 0,a)
}
;
g.Kc.prototype.qk = !0;
g.Kc.nE = 4;
b = g.Kc.prototype;
b.ak = "text";
b.oe = function(a) {
    g.Kc.v.oe.call(this, a);
    "boolean" == typeof a.spellcheck && (this.Sp = a.spellcheck)
}
;
b.lj = function() {
    if (this.na().Dz) {
        for (var a = 0, c = 0, d = 0, e; e = this.J.Z[d]; d++) {
            for (var f = 0; e.ib[f]; f++)
                a++;
            e.connection && c++
        }
        this.gs = 1 >= a && this.J.T && !c
    } else
        this.gs = !1;
    this.gs ? this.yv = this.J.Ma() : Rb(this);
    Sb(this)
}
;
b.bj = function(a) {
    return null === a || void 0 === a ? null : String(a)
}
;
b.tB = function() {
    if (this.Km) {
        this.Ww = !1;
        var a = this.Cc;
        this.Cc = this.Wd.QD;
        this.J && g.h.isEnabled() && g.h.Ga(new (g.h.get(g.h.eg))(this.J,"field",this.name || null,a,this.Cc))
    }
}
;
b.Ch = function(a) {
    this.Ww = !0;
    this.Cc = a;
    this.Km || (this.Lh = !0)
}
;
b.ic = function() {
    this.J && this.na().Dz && (this.kc ? this.kc.setAttribute("stroke", this.J.style.vg) : this.J.Nb.ac.setAttribute("fill", this.na().yz))
}
;
b.Ij = function() {
    g.Kc.v.Ij.call(this);
    if (this.Km) {
        cf(this);
        var a = this.Wd;
        this.Ww ? (g.g.o.dc(a, "blocklyInvalidInput"),
        g.g.za.ge(a, g.g.za.State.Kz, !1)) : (g.g.o.Fa(a, "blocklyInvalidInput"),
        g.g.za.ge(a, g.g.za.State.Kz, !0))
    }
}
;
function df(a) {
    0 != a.Sp && (a.Sp = !1,
    a.Wd && a.Wd.setAttribute("spellcheck", a.Sp))
}
b.Ug = function(a, c) {
    this.s = this.J.u;
    a = c || !1;
    !a && (g.g.userAgent.Wz || g.g.userAgent.Uj || g.g.userAgent.dh) ? ef(this) : (g.ga.show(this, this.J.L, this.iL.bind(this)),
    this.Wd = this.Wy(),
    this.Km = !0,
    a || (this.Wd.focus({
        preventScroll: !0
    }),
    this.Wd.select()))
}
;
function ef(a) {
    g.prompt(g.i.CHANGE_VALUE_TITLE, a.yd(), function(c) {
        null !== c && this.setValue(c)
    }
    .bind(a))
}
b.Wy = function() {
    var a = g.ga.mb;
    g.g.o.Fa(Qb(this), "editing");
    var c = document.createElement("input");
    c.className = "blocklyHtmlInput";
    c.setAttribute("spellcheck", this.Sp);
    var d = Vc(this.s)
      , e = this.na().si * d + "pt";
    a.style.fontSize = e;
    c.style.fontSize = e;
    e = g.Kc.nE * d + "px";
    if (this.gs) {
        e = Ja(this);
        e = (e.bottom - e.top) / 2 + "px";
        var f = this.J.getParent() ? this.J.getParent().style.vg : this.J.style.vg;
        c.style.border = 1 * d + "px solid " + f;
        a.style.borderRadius = e;
        a.style.transition = "box-shadow 0.25s ease 0s";
        this.na().gF && (a.style.boxShadow = "rgba(255, 255, 255, 0.3) 0px 0px 0px " + 4 * d + "px")
    }
    c.style.borderRadius = e;
    a.appendChild(c);
    c.value = c.defaultValue = String(this.Cc);
    c.QD = this.Cc;
    c.WC = null;
    cf(this);
    this.Vs = g.M.va(c, "keydown", this, this.Ix);
    this.Ws = g.M.va(c, "input", this, this.IJ);
    return c
}
;
b.iL = function() {
    this.Km = !1;
    this.Ww = !0;
    Xb(this);
    this.Hx && this.Hx(this.Cc);
    this.Vs && (g.M.Ra(this.Vs),
    this.Vs = null);
    this.Ws && (g.M.Ra(this.Ws),
    this.Ws = null);
    var a = g.ga.mb.style;
    a.width = "auto";
    a.height = "auto";
    a.fontSize = "";
    a.transition = "";
    a.boxShadow = "";
    this.Wd = null;
    g.g.o.dc(Qb(this), "editing")
}
;
b.Ix = function(a) {
    if (a.keyCode == g.g.ea.Vt)
        g.ga.Va(),
        g.G.Mk();
    else if (a.keyCode == g.g.ea.vz)
        this.setValue(this.Wd.QD),
        g.ga.Va(),
        g.G.Mk();
    else if (a.keyCode == g.g.ea.IG) {
        g.ga.Va();
        g.G.Mk();
        var c = this.J
          , d = !a.shiftKey
          , e = new g.kr;
        Pb(e, g.H.sm(this));
        var f = e.Ge;
        d ? e.next() : e.Vh();
        (d = e.Ge) && d !== f && (f = d.Oa,
        db(f) && f.Ug(void 0),
        c.u.Sm && Pb(c.u.Cm(), d));
        a.preventDefault()
    }
}
;
b.IJ = function() {
    var a = this.Wd.value;
    a !== this.Wd.WC && (this.Wd.WC = a,
    g.h.la(!0),
    this.setValue(a),
    Xb(this),
    cf(this),
    g.h.la(!1))
}
;
function cf(a) {
    var c = g.ga.mb
      , d = Ja(a);
    c.style.width = d.right - d.left + "px";
    c.style.height = d.bottom - d.top + "px";
    a = new g.g.V(a.J.L ? d.right - c.offsetWidth : d.left,d.top);
    c.style.left = a.x + "px";
    c.style.top = a.y + "px"
}
b.vC = function() {
    return !0
}
;
b.Ew = function() {
    return this.Km && this.Wd ? this.Wd.value : null
}
;
g.rf.register("field_input", g.Kc);
g.Ed = function(a, c, d, e, f, h) {
    this.qp = -Infinity;
    this.op = Infinity;
    this.Wm = 0;
    this.Jv = null;
    g.Ed.v.constructor.call(this, a, f, h);
    h || (ff(this, c),
    gf(this, d),
    hf(this, e),
    this.setValue(this.getValue()))
}
;
g.g.object.W(g.Ed, g.Kc);
g.Ed.prototype.Nl = 0;
g.Ed.ka = function(a) {
    return new g.Ed(a.value,void 0,void 0,void 0,void 0,a)
}
;
g.Ed.prototype.qk = !0;
g.Ed.prototype.oe = function(a) {
    g.Ed.v.oe.call(this, a);
    ff(this, a.min);
    gf(this, a.max);
    hf(this, a.precision)
}
;
function ff(a, c) {
    null == c ? a.qp = -Infinity : (c = Number(c),
    isNaN(c) || (a.qp = c))
}
function gf(a, c) {
    null == c ? a.op = Infinity : (c = Number(c),
    isNaN(c) || (a.op = c))
}
function hf(a, c) {
    a.Wm = Number(c) || 0;
    var d = String(a.Wm);
    -1 != d.indexOf("e") && (d = a.Wm.toLocaleString("en-US", {
        maximumFractionDigits: 20
    }));
    var e = d.indexOf(".");
    a.Jv = -1 == e ? c ? 0 : null : d.length - e - 1
}
g.Ed.prototype.bj = function(a) {
    if (null === a)
        return null;
    a = String(a);
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = a.replace(/infinity/i, "Infinity");
    a = Number(a || 0);
    if (isNaN(a))
        return null;
    a = Math.min(Math.max(a, this.qp), this.op);
    this.Wm && isFinite(a) && (a = Math.round(a / this.Wm) * this.Wm);
    null != this.Jv && (a = Number(a.toFixed(this.Jv)));
    return a
}
;
g.Ed.prototype.Wy = function() {
    var a = g.Ed.v.Wy.call(this);
    -Infinity < this.qp && g.g.za.ge(a, g.g.za.State.SG, this.qp);
    Infinity > this.op && g.g.za.ge(a, g.g.za.State.QG, this.op);
    return a
}
;
g.rf.register("field_number", g.Ed);
g.Fd = function(a, c, d, e, f) {
    this.Tm = g.Fd.fI;
    this.TH = "string" === typeof a ? a : "";
    this.ie = new g.g.sd(0,0);
    f && this.oe(f);
    c && (this.Bl = c);
    f || jf(this, d, e)
}
;
g.g.object.W(g.Fd, g.gb);
g.Fd.ka = function(a) {
    var c = g.g.se(a.variable);
    return new g.Fd(c,void 0,void 0,void 0,a)
}
;
b = g.Fd.prototype;
b.qk = !0;
b.oe = function(a) {
    g.Fd.v.oe.call(this, a);
    jf(this, a.variableTypes, a.defaultType)
}
;
b.Rk = function() {
    if (!this.te) {
        var a = g.$.ns(this.J.u, null, this.TH, this.SH);
        this.Ch(a.La())
    }
}
;
b.Dy = function() {
    return g.Fd.v.Dy.call(this) && (!this.na().Wt || "variables_get" != this.J.type)
}
;
b.Am = function(a) {
    var c = a.getAttribute("id")
      , d = a.textContent
      , e = a.getAttribute("variabletype") || a.getAttribute("variableType") || "";
    c = g.$.ns(this.J.u, c, d, e);
    if (null != e && e !== c.type)
        throw Error("Serialized variable type with id '" + c.La() + "' had type " + c.type + ", and does not match variable field that references it: " + g.P.pe(a) + ".");
    this.setValue(c.La())
}
;
b.KD = function(a) {
    this.Rk();
    a.id = this.te.La();
    a.textContent = this.te.name;
    this.te.type && a.setAttribute("variabletype", this.te.type);
    return a
}
;
b.Ay = function(a) {
    if (a.Pa)
        throw Error("Variable fields are not allowed to exist on shadow blocks.");
    g.Fd.v.Ay.call(this, a)
}
;
b.getValue = function() {
    return this.te ? this.te.La() : null
}
;
b.yd = function() {
    return this.te ? this.te.name : ""
}
;
b.hd = function() {
    return this.te
}
;
b.ZB = function() {
    return this.te ? this.Bl : null
}
;
b.bj = function(a) {
    if (null === a)
        return null;
    var c = g.$.hd(this.J.u, a);
    if (!c)
        return console.warn("Variable id doesn't point to a real variable! ID was " + a),
        null;
    c = c.type;
    var d;
    a: if (d = kf(this)) {
        for (var e = 0; e < d.length; e++)
            if (c == d[e]) {
                d = !0;
                break a
            }
        d = !1
    } else
        d = !0;
    return d ? a : (console.warn("Variable type doesn't match this field!  Type was " + c),
    null)
}
;
b.Ch = function(a) {
    this.te = g.$.hd(this.J.u, a);
    g.Fd.v.Ch.call(this, a)
}
;
function kf(a) {
    var c = a.dL;
    if (null === c && a.J && a.J.u)
        return a.J.u.Fw();
    c = c || [""];
    if (0 == c.length)
        throw a = a.yd(),
        Error("'variableTypes' of field variable " + a + " was an empty list");
    return c
}
function jf(a, c, d) {
    d = d || "";
    if (null == c || void 0 == c)
        c = null;
    else if (Array.isArray(c)) {
        for (var e = !1, f = 0; f < c.length; f++)
            c[f] == d && (e = !0);
        if (!e)
            throw Error("Invalid default type '" + d + "' in the definition of a FieldVariable");
    } else
        throw Error("'variableTypes' was not an array in the definition of a FieldVariable");
    a.SH = d;
    a.dL = c
}
g.Fd.fI = function() {
    if (!this.te)
        throw Error("Tried to call dropdownCreate on a variable field with no variable selected.");
    var a = this.yd()
      , c = [];
    if (this.J && this.J.u)
        for (var d = kf(this), e = 0; e < d.length; e++)
            c = c.concat(this.J.u.Vo(d[e]));
    c.sort(g.Yn.XA);
    d = [];
    for (e = 0; e < c.length; e++)
        d[e] = [c[e].name, c[e].La()];
    d.push([g.i.RENAME_VARIABLE, g.fA]);
    g.i.DELETE_VARIABLE && d.push([g.i.DELETE_VARIABLE.replace("%1", a), g.rz]);
    return d
}
;
g.Fd.prototype.ZC = function(a) {
    a = a.getValue();
    if (this.J && this.J.u) {
        if (a == g.fA) {
            g.$.nt(this.J.u, this.te);
            return
        }
        if (a == g.rz) {
            this.J.u.Bh(this.te.La());
            return
        }
    }
    this.setValue(a)
}
;
g.Fd.prototype.Dp = function() {
    return !0
}
;
g.rf.register("field_variable", g.Fd);
g.O.Sa = {};
g.ya = {};
g.ya.Math = {};
g.ya.Math.Qq = 230;
g.vm([{
    type: "math_number",
    message0: "%1",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: "Number",
    helpUrl: "%{BKY_MATH_NUMBER_HELPURL}",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
}, {
    type: "math_arithmetic",
    message0: "%1 %2 %3",
    args0: [{
        type: "input_value",
        name: "A",
        check: "Number"
    }, {
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"], ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"], ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"], ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"], ["%{BKY_MATH_POWER_SYMBOL}", "POWER"]]
    }, {
        type: "input_value",
        name: "B",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_single",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"], ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"], ["-", "NEG"], ["ln", "LN"], ["log10", "LOG10"], ["e^", "EXP"], ["10^", "POW10"]]
    }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_trig",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_MATH_TRIG_SIN}", "SIN"], ["%{BKY_MATH_TRIG_COS}", "COS"], ["%{BKY_MATH_TRIG_TAN}", "TAN"], ["%{BKY_MATH_TRIG_ASIN}", "ASIN"], ["%{BKY_MATH_TRIG_ACOS}", "ACOS"], ["%{BKY_MATH_TRIG_ATAN}", "ATAN"]]
    }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_TRIG_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_constant",
    message0: "%1",
    args0: [{
        type: "field_dropdown",
        name: "CONSTANT",
        options: [["\u03c0", "PI"], ["e", "E"], ["\u03c6", "GOLDEN_RATIO"], ["sqrt(2)", "SQRT2"], ["sqrt(\u00bd)", "SQRT1_2"], ["\u221e", "INFINITY"]]
    }],
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTANT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTANT_HELPURL}"
}, {
    type: "math_number_property",
    message0: "%1 %2",
    args0: [{
        type: "input_value",
        name: "NUMBER_TO_CHECK",
        check: "Number"
    }, {
        type: "field_dropdown",
        name: "PROPERTY",
        options: [["%{BKY_MATH_IS_EVEN}", "EVEN"], ["%{BKY_MATH_IS_ODD}", "ODD"], ["%{BKY_MATH_IS_PRIME}", "PRIME"], ["%{BKY_MATH_IS_WHOLE}", "WHOLE"], ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"], ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"], ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"]]
    }],
    inputsInline: !0,
    output: "Boolean",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_IS_TOOLTIP}",
    mutator: "math_is_divisibleby_mutator"
}, {
    type: "math_change",
    message0: "%{BKY_MATH_CHANGE_TITLE}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_MATH_CHANGE_TITLE_ITEM}"
    }, {
        type: "input_value",
        name: "DELTA",
        check: "Number"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_MATH_CHANGE_HELPURL}",
    extensions: ["math_change_tooltip"]
}, {
    type: "math_round",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"], ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"], ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"]]
    }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ROUND_HELPURL}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}"
}, {
    type: "math_on_list",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"], ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"], ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"], ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"], ["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}", "MEDIAN"], ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"], ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}", "STD_DEV"], ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}", "RANDOM"]]
    }, {
        type: "input_value",
        name: "LIST",
        check: "Array"
    }],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ONLIST_HELPURL}",
    mutator: "math_modes_of_list_mutator",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_modulo",
    message0: "%{BKY_MATH_MODULO_TITLE}",
    args0: [{
        type: "input_value",
        name: "DIVIDEND",
        check: "Number"
    }, {
        type: "input_value",
        name: "DIVISOR",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
    helpUrl: "%{BKY_MATH_MODULO_HELPURL}"
}, {
    type: "math_constrain",
    message0: "%{BKY_MATH_CONSTRAIN_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: "Number"
    }, {
        type: "input_value",
        name: "LOW",
        check: "Number"
    }, {
        type: "input_value",
        name: "HIGH",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTRAIN_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTRAIN_HELPURL}"
}, {
    type: "math_random_int",
    message0: "%{BKY_MATH_RANDOM_INT_TITLE}",
    args0: [{
        type: "input_value",
        name: "FROM",
        check: "Number"
    }, {
        type: "input_value",
        name: "TO",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_INT_HELPURL}"
}, {
    type: "math_random_float",
    message0: "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}",
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_FLOAT_HELPURL}"
}, {
    type: "math_atan2",
    message0: "%{BKY_MATH_ATAN2_TITLE}",
    args0: [{
        type: "input_value",
        name: "X",
        check: "Number"
    }, {
        type: "input_value",
        name: "Y",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_ATAN2_TOOLTIP}",
    helpUrl: "%{BKY_MATH_ATAN2_HELPURL}"
}]);
g.ya.Math.Mu = {
    ADD: "%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",
    MINUS: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",
    MULTIPLY: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",
    DIVIDE: "%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",
    POWER: "%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",
    ROOT: "%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",
    ABS: "%{BKY_MATH_SINGLE_TOOLTIP_ABS}",
    NEG: "%{BKY_MATH_SINGLE_TOOLTIP_NEG}",
    LN: "%{BKY_MATH_SINGLE_TOOLTIP_LN}",
    LOG10: "%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",
    EXP: "%{BKY_MATH_SINGLE_TOOLTIP_EXP}",
    POW10: "%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
    SIN: "%{BKY_MATH_TRIG_TOOLTIP_SIN}",
    COS: "%{BKY_MATH_TRIG_TOOLTIP_COS}",
    TAN: "%{BKY_MATH_TRIG_TOOLTIP_TAN}",
    ASIN: "%{BKY_MATH_TRIG_TOOLTIP_ASIN}",
    ACOS: "%{BKY_MATH_TRIG_TOOLTIP_ACOS}",
    ATAN: "%{BKY_MATH_TRIG_TOOLTIP_ATAN}",
    SUM: "%{BKY_MATH_ONLIST_TOOLTIP_SUM}",
    MIN: "%{BKY_MATH_ONLIST_TOOLTIP_MIN}",
    MAX: "%{BKY_MATH_ONLIST_TOOLTIP_MAX}",
    AVERAGE: "%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",
    MEDIAN: "%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",
    MODE: "%{BKY_MATH_ONLIST_TOOLTIP_MODE}",
    STD_DEV: "%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",
    RANDOM: "%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}"
};
g.ma.register("math_op_tooltip", g.ma.yr("OP", g.ya.Math.Mu));
g.ya.Math.BF = {
    pb: function() {
        var a = g.g.xml.createElement("mutation")
          , c = "DIVISIBLE_BY" == C(this, "PROPERTY");
        a.setAttribute("divisor_input", c);
        return a
    },
    Wb: function(a) {
        a = "true" == a.getAttribute("divisor_input");
        this.Zc(a)
    },
    Zc: function(a) {
        var c = x(this, "DIVISOR");
        a ? c || H(this, "DIVISOR").Pb("Number") : c && this.xb("DIVISOR")
    }
};
g.ya.Math.CF = function() {
    Tb(z(this, "PROPERTY"), function(a) {
        a = "DIVISIBLE_BY" == a;
        this.aa().Zc(a)
    })
}
;
g.ma.jy("math_is_divisibleby_mutator", g.ya.Math.BF, g.ya.Math.CF);
g.ma.register("math_change_tooltip", g.ma.nv("%{BKY_MATH_CHANGE_TOOLTIP}"));
g.ya.Math.MF = {
    kq: function(a) {
        "MODE" == a ? this.T.Pb("Array") : this.T.Pb("Number")
    },
    pb: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("op", C(this, "OP"));
        return a
    },
    Wb: function(a) {
        this.kq(a.getAttribute("op"))
    }
};
g.ya.Math.LF = function() {
    Tb(z(this, "OP"), function(a) {
        this.kq(a)
    }
    .bind(this))
}
;
g.ma.jy("math_modes_of_list_mutator", g.ya.Math.MF, g.ya.Math.LF);
g.ua = function(a, c, d) {
    this.oo = g.ua.tE;
    this.ll = g.ua.OFFSET;
    this.aE = g.ua.UG;
    this.Ip = g.ua.zG;
    g.ua.v.constructor.call(this, a, c, d);
    this.Ns = this.Gr = this.Hr = this.Es = this.Mo = this.yB = null
}
;
g.g.object.W(g.ua, g.Kc);
g.ua.prototype.Nl = 0;
g.ua.ka = function(a) {
    return new g.ua(a.angle,void 0,a)
}
;
g.ua.prototype.qk = !0;
g.ua.zG = 15;
g.ua.Lc = 50;
g.ua.tE = !1;
g.ua.OFFSET = 0;
g.ua.UG = 360;
g.ua.hh = g.ua.Lc - 1;
b = g.ua.prototype;
b.oe = function(a) {
    g.ua.v.oe.call(this, a);
    switch (a.mode) {
    case "compass":
        this.oo = !0;
        this.ll = 90;
        break;
    case "protractor":
        this.oo = !1,
        this.ll = 0
    }
    var c = a.clockwise;
    "boolean" == typeof c && (this.oo = c);
    c = a.offset;
    null != c && (c = Number(c),
    isNaN(c) || (this.ll = c));
    c = a.wrap;
    null != c && (c = Number(c),
    isNaN(c) || (this.aE = c));
    a = a.round;
    null != a && (a = Number(a),
    isNaN(a) || (this.Ip = a))
}
;
b.lj = function() {
    g.ua.v.lj.call(this);
    this.GD = g.g.o.N(g.g.F.Pu, {}, null);
    this.GD.appendChild(document.createTextNode("\u00b0"));
    this.Ac.appendChild(this.GD)
}
;
b.Ij = function() {
    g.ua.v.Ij.call(this);
    lf(this)
}
;
b.Ug = function(a) {
    g.ua.v.Ug.call(this, a, g.g.userAgent.Wz || g.g.userAgent.Uj || g.g.userAgent.dh);
    this.gw();
    g.G.IB().appendChild(this.yB);
    g.G.Wc(this.J.style.sh, this.J.style.vg);
    g.G.xD(this, this.hw.bind(this));
    lf(this)
}
;
b.gw = function() {
    var a = g.g.o.N(g.g.F.Ii, {
        xmlns: g.g.o.Un,
        "xmlns:html": g.g.o.ik,
        "xmlns:xlink": g.g.o.Mf,
        version: "1.1",
        height: 2 * g.ua.Lc + "px",
        width: 2 * g.ua.Lc + "px",
        style: "touch-action: none"
    }, null)
      , c = g.g.o.N(g.g.F.Bq, {
        cx: g.ua.Lc,
        cy: g.ua.Lc,
        r: g.ua.hh,
        "class": "blocklyAngleCircle"
    }, a);
    this.Mo = g.g.o.N(g.g.F.Ld, {
        "class": "blocklyAngleGauge"
    }, a);
    this.Es = g.g.o.N(g.g.F.kk, {
        x1: g.ua.Lc,
        y1: g.ua.Lc,
        "class": "blocklyAngleLine"
    }, a);
    for (var d = 0; 360 > d; d += 15)
        g.g.o.N(g.g.F.kk, {
            x1: g.ua.Lc + g.ua.hh,
            y1: g.ua.Lc,
            x2: g.ua.Lc + g.ua.hh - (0 == d % 45 ? 10 : 5),
            y2: g.ua.Lc,
            "class": "blocklyAngleMarks",
            transform: "rotate(" + d + "," + g.ua.Lc + "," + g.ua.Lc + ")"
        }, a);
    this.Hr = g.M.va(a, "click", this, this.TI);
    this.Gr = g.M.va(c, "click", this, this.vp, !0, !0);
    this.Ns = g.M.va(c, "mousemove", this, this.vp, !0, !0);
    this.yB = a
}
;
b.hw = function() {
    this.Hr && (g.M.Ra(this.Hr),
    this.Hr = null);
    this.Gr && (g.M.Ra(this.Gr),
    this.Gr = null);
    this.Ns && (g.M.Ra(this.Ns),
    this.Ns = null);
    this.Es = this.Mo = null
}
;
b.TI = function() {
    g.G.Im(this);
    g.ga.Va()
}
;
b.vp = function(a) {
    var c = this.Mo.ownerSVGElement.getBoundingClientRect()
      , d = a.clientX - c.left - g.ua.Lc;
    a = a.clientY - c.top - g.ua.Lc;
    c = Math.atan(-a / d);
    isNaN(c) || (c = g.g.Sa.nn(c),
    0 > d ? c += 180 : 0 < a && (c += 360),
    c = this.oo ? this.ll + 360 - c : 360 - (this.ll - c),
    mf(this, c))
}
;
function mf(a, c) {
    a.Ip && (c = Math.round(c / a.Ip) * a.Ip);
    c = nf(a, c);
    c != a.Cc && (a.Lh = !0,
    a.Km && (a.Wd.value = String(c)),
    a.setValue(c))
}
function lf(a) {
    if (a.Mo) {
        var c = Number(a.yd()) + a.ll
          , d = g.g.Sa.Cd(c % 360);
        c = ["M ", g.ua.Lc, ",", g.ua.Lc];
        var e = g.ua.Lc
          , f = g.ua.Lc;
        if (!isNaN(d)) {
            var h = Number(a.oo)
              , k = g.g.Sa.Cd(a.ll)
              , l = Math.cos(k) * g.ua.hh
              , m = Math.sin(k) * -g.ua.hh;
            h && (d = 2 * k - d);
            e += Math.cos(d) * g.ua.hh;
            f -= Math.sin(d) * g.ua.hh;
            d = Math.abs(Math.floor((d - k) / Math.PI) % 2);
            h && (d = 1 - d);
            c.push(" l ", l, ",", m, " A ", g.ua.hh, ",", g.ua.hh, " 0 ", d, " ", h, " ", e, ",", f, " z")
        }
        a.Mo.setAttribute("d", c.join(""));
        a.Es.setAttribute("x2", e);
        a.Es.setAttribute("y2", f)
    }
}
b.Ix = function(a) {
    g.ua.v.Ix.call(this, a);
    var c;
    a.keyCode === g.g.ea.Ib ? c = this.J.L ? 1 : -1 : a.keyCode === g.g.ea.Mc ? c = this.J.L ? -1 : 1 : a.keyCode === g.g.ea.Ol ? c = -1 : a.keyCode === g.g.ea.wk && (c = 1);
    if (c) {
        var d = this.getValue();
        mf(this, d + c * this.Ip);
        a.preventDefault();
        a.stopPropagation()
    }
}
;
b.bj = function(a) {
    a = Number(a);
    return isNaN(a) || !isFinite(a) ? null : nf(this, a)
}
;
function nf(a, c) {
    c %= 360;
    0 > c && (c += 360);
    c > a.aE && (c -= 360);
    return c
}
g.Uc.register(".blocklyAngleCircle {,stroke: #444;,stroke-width: 1;,fill: #ddd;,fill-opacity: .8;,},.blocklyAngleMarks {,stroke: #444;,stroke-width: 1;,},.blocklyAngleGauge {,fill: #f88;,fill-opacity: .8;,pointer-events: none;,},.blocklyAngleLine {,stroke: #f00;,stroke-width: 2;,stroke-linecap: round;,pointer-events: none;,}".split(","));
g.rf.register("field_angle", g.ua);
g.Generator = function(a) {
    this.Lg = a;
    this.kF = new RegExp(this.Xe,"g")
}
;
b = g.Generator.prototype;
b.Rq = null;
b.le = null;
b.dd = null;
b.Gd = "  ";
b.xE = 60;
b.Zq = [];
b.ws = null;
function Xe() {
    var a = g.j
      , c = w;
    c || (console.warn("No workspace specified in workspaceToCode call.  Guessing."),
    c = g.dj());
    var d = [];
    a.S(c);
    c = c.xc(!0);
    for (var e = 0, f; f = c[e]; e++) {
        var h = of(a, f);
        Array.isArray(h) && (h = h[0]);
        h && (f.T && (h = a.vD(h),
        a.le && !f.Pj && (h = V(a.le, f) + h),
        a.dd && !f.Pj && (h += V(a.dd, f))),
        d.push(h))
    }
    d = d.join("\n");
    d = a.finish(d);
    d = d.replace(/^\s+\n/, "");
    d = d.replace(/\n\s+$/, "\n");
    return d = d.replace(/[ \t]+\n/g, "\n")
}
function W(a, c) {
    return c + a.replace(/(?!\n$)\n/g, "\n" + c)
}
function of(a, c) {
    !1 === a.ws && console.warn("Generator init was not called before blockToCode was called.");
    if (!c)
        return "";
    if (!c.isEnabled())
        return of(a, t(c));
    if (c.zd())
        return of(a, Ca(c, !1)[0]);
    var d = a[c.type];
    if ("function" != typeof d)
        throw Error('Language "' + a.Lg + '" does not know how to generate code for block type "' + c.type + '".');
    d = d.call(c, c);
    if (Array.isArray(d)) {
        if (!c.T)
            throw TypeError("Expecting string from statement block: " + c.type);
        return [a.rt(c, d[0]), d[1]]
    }
    if ("string" == typeof d)
        return a.le && !c.Pj && (d = V(a.le, c) + d),
        a.dd && !c.Pj && (d += V(a.dd, c)),
        a.rt(c, d);
    if (null === d)
        return "";
    throw SyntaxError("Invalid code generated: " + d);
}
function X(a, c, d, e) {
    if (isNaN(e))
        throw TypeError("Expecting valid order from block: " + c.type);
    var f = K(c, d);
    if (!f)
        return "";
    d = of(a, f);
    if ("" === d)
        return "";
    if (!Array.isArray(d))
        throw TypeError("Expecting tuple from value block: " + f.type);
    c = d[0];
    d = d[1];
    if (isNaN(d))
        throw TypeError("Expecting valid order from value block: " + f.type);
    if (!c)
        return "";
    f = !1;
    var h = Math.floor(e)
      , k = Math.floor(d);
    if (h <= k && (h != k || 0 != h && 99 != h))
        for (f = !0,
        h = 0; h < a.Zq.length; h++)
            if (a.Zq[h][0] == e && a.Zq[h][1] == d) {
                f = !1;
                break
            }
    f && (c = "(" + c + ")");
    return c
}
function pf(a, c) {
    var d = g.j;
    a = K(a, c);
    c = of(d, a);
    if ("string" != typeof c)
        throw TypeError("Expecting code from statement block: " + (a && a.type));
    c && (c = W(c, d.Gd));
    return c
}
function qf(a, c) {
    var d = g.j;
    d.Rq && (a = W(V(d.Rq, c), d.Gd) + a);
    d.dd && !c.Pj && (a = W(V(d.dd, c), d.Gd) + a);
    d.le && !c.Pj && (a += W(V(d.le, c), d.Gd));
    return a
}
function V(a, c) {
    c = c.id.replace(/\$/g, "$$$$");
    return a.replace(/%1/g, "'" + c + "'")
}
b.Au = "";
function rf(a, c) {
    a.Au += c + ","
}
b.Xe = "{leCUI8hutHZI4480Dc}";
Object.defineProperty(g.Generator.prototype, "variableDB_", {
    get: function() {
        g.g.xm.warn("variableDB_", "May 2021", "May 2026", "nameDB_");
        return this.vb
    },
    set: function(a) {
        g.g.xm.warn("variableDB_", "May 2021", "May 2026", "nameDB_");
        this.vb = a
    }
});
function Y(a, c) {
    var d = g.j;
    if (!d.wm[a]) {
        var e = M(d.vb, a, g.bm);
        d.pw[a] = e;
        c = c.join("\n").replace(d.kF, e);
        for (var f; f != c; )
            f = c,
            c = c.replace(/^(( {2})*) {2}/gm, "$1\x00");
        c = c.replace(/\0/g, d.Gd);
        d.wm[a] = c
    }
    return d.pw[a]
}
g.Generator.prototype.S = function() {
    this.wm = Object.create(null);
    this.pw = Object.create(null)
}
;
g.Generator.prototype.rt = function(a, c) {
    return c
}
;
g.Generator.prototype.finish = function(a) {
    delete this.wm;
    delete this.pw;
    return a
}
;
g.Generator.prototype.vD = function(a) {
    return a
}
;
g.j = new g.Generator("JavaScript");
rf(g.j, "break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments," + Object.getOwnPropertyNames(g.g.global).join(","));
g.j.Yl = 0;
g.j.NN = 1.1;
g.j.fc = 1.2;
g.j.ub = 2;
g.j.KN = 3;
g.j.GN = 3;
g.j.CN = 4.1;
g.j.PN = 4.2;
g.j.Rn = 4.3;
g.j.Pn = 4.4;
g.j.ON = 4.5;
g.j.QN = 4.6;
g.j.HN = 4.7;
g.j.AN = 4.8;
g.j.IN = 5;
g.j.uu = 5.1;
g.j.On = 5.2;
g.j.Qn = 5.3;
g.j.Zl = 6.1;
g.j.Ei = 6.2;
g.j.EN = 7;
g.j.eG = 8;
g.j.JN = 8;
g.j.MN = 8;
g.j.bA = 9;
g.j.BN = 10;
g.j.FN = 11;
g.j.DN = 12;
g.j.su = 13;
g.j.tu = 14;
g.j.Yq = 15;
g.j.fh = 16;
g.j.RN = 17;
g.j.aA = 18;
g.j.hb = 99;
g.j.Zq = [[g.j.ub, g.j.fc], [g.j.ub, g.j.ub], [g.j.fc, g.j.fc], [g.j.fc, g.j.ub], [g.j.Pn, g.j.Pn], [g.j.uu, g.j.uu], [g.j.Ei, g.j.Ei], [g.j.su, g.j.su], [g.j.tu, g.j.tu]];
g.j.ws = !1;
g.j.S = function(a) {
    Object.getPrototypeOf(this).S.call(this);
    this.vb ? this.vb.reset() : this.vb = new g.Jd(this.Au);
    this.vb.By(a.Ta);
    for (var c = this.vb, d = g.$.Zu(a), e = 0; e < d.length; e++)
        c.gd(d[e].La(), g.hc);
    c = this.vb;
    d = g.Da.FA(a);
    d = d[0].concat(d[1]);
    for (e = 0; e < d.length; e++)
        c.gd(d[e][0], g.bm);
    c = [];
    e = g.$.aH(a);
    for (d = 0; d < e.length; d++)
        c.push(this.vb.gd(e[d], g.Jd.Ut));
    a = g.$.Zu(a);
    for (d = 0; d < a.length; d++)
        c.push(this.vb.gd(a[d].La(), g.hc));
    c.length && (this.wm.variables = "var " + c.join(", ") + ";");
    this.ws = !0
}
;
g.j.finish = function(a) {
    var c = g.g.object.values(this.wm);
    a = Object.getPrototypeOf(this).finish.call(this, a);
    this.ws = !1;
    this.vb.reset();
    return c.join("\n\n") + "\n\n\n" + a
}
;
g.j.vD = function(a) {
    return a + ";\n"
}
;
g.j.ZJ = function(a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'"
}
;
g.j.dP = function(a) {
    return a.split(/\n/g).map(this.ZJ).join(" + '\\n' +\n")
}
;
g.j.rt = function(a, c) {
    var d = "";
    if (!a.T || !a.T.ta) {
        var e = a.Ce.text;
        e && (e = g.g.yb.ZD(e, this.xE - 3),
        d += W(e + "\n", "// "));
        for (var f = 0; f < a.Z.length; f++)
            if (a.Z[f].type == g.lb.rg) {
                var h = a.Z[f].connection.sa();
                if (h) {
                    e = [];
                    h = q(h, !0);
                    for (var k = 0; k < h.length; k++) {
                        var l = h[k].Ce.text;
                        l && e.push(l)
                    }
                    e.length && e.push("");
                    (e = e.join("\n")) && (d += W(e, "// "))
                }
            }
    }
    a = a.ba && a.ba.sa();
    a = of(this, a);
    return d + c + a
}
;
g.j.Eg = function(a, c, d, e, f) {
    d = d || 0;
    f = f || this.hb;
    a.u.options.Sh && d--;
    var h = a.u.options.Sh ? "1" : "0";
    a = 0 < d ? X(this, a, c, this.Ei) || h : 0 > d ? X(this, a, c, this.Zl) || h : e ? X(this, a, c, this.Rn) || h : X(this, a, c, f) || h;
    if (g.qj(a))
        a = Number(a) + d,
        e && (a = -a);
    else {
        if (0 < d) {
            a = a + " + " + d;
            var k = this.Ei
        } else
            0 > d && (a = a + " - " + -d,
            k = this.Zl);
        e && (a = d ? "-(" + a + ")" : "-" + a,
        k = this.Rn);
        k = Math.floor(k);
        f = Math.floor(f);
        k && f >= k && (a = "(" + a + ")")
    }
    return a
}
;
g.j.Sa = {};
g.j.math_number = function(a) {
    a = Number(C(a, "NUM"));
    return [a, 0 <= a ? g.j.Yl : g.j.Rn]
}
;
g.j.math_arithmetic = function(a) {
    var c = {
        ADD: [" + ", g.j.Ei],
        MINUS: [" - ", g.j.Zl],
        MULTIPLY: [" * ", g.j.uu],
        DIVIDE: [" / ", g.j.On],
        POWER: [null, g.j.hb]
    }[C(a, "OP")]
      , d = c[0];
    c = c[1];
    var e = X(g.j, a, "A", c) || "0";
    a = X(g.j, a, "B", c) || "0";
    return d ? [e + d + a, c] : ["Math.pow(" + e + ", " + a + ")", g.j.ub]
}
;
g.j.math_single = function(a) {
    var c = C(a, "OP");
    if ("NEG" == c)
        return a = X(g.j, a, "NUM", g.j.Rn) || "0",
        "-" == a[0] && (a = " " + a),
        ["-" + a, g.j.Rn];
    a = "SIN" == c || "COS" == c || "TAN" == c ? X(g.j, a, "NUM", g.j.On) || "0" : X(g.j, a, "NUM", g.j.hb) || "0";
    switch (c) {
    case "ABS":
        var d = "Math.abs(" + a + ")";
        break;
    case "ROOT":
        d = "Math.sqrt(" + a + ")";
        break;
    case "LN":
        d = "Math.log(" + a + ")";
        break;
    case "EXP":
        d = "Math.exp(" + a + ")";
        break;
    case "POW10":
        d = "Math.pow(10," + a + ")";
        break;
    case "ROUND":
        d = "Math.round(" + a + ")";
        break;
    case "ROUNDUP":
        d = "Math.ceil(" + a + ")";
        break;
    case "ROUNDDOWN":
        d = "Math.floor(" + a + ")";
        break;
    case "SIN":
        d = "Math.sin(" + a + " / 180 * Math.PI)";
        break;
    case "COS":
        d = "Math.cos(" + a + " / 180 * Math.PI)";
        break;
    case "TAN":
        d = "Math.tan(" + a + " / 180 * Math.PI)"
    }
    if (d)
        return [d, g.j.ub];
    switch (c) {
    case "LOG10":
        d = "Math.log(" + a + ") / Math.log(10)";
        break;
    case "ASIN":
        d = "Math.asin(" + a + ") / Math.PI * 180";
        break;
    case "ACOS":
        d = "Math.acos(" + a + ") / Math.PI * 180";
        break;
    case "ATAN":
        d = "Math.atan(" + a + ") / Math.PI * 180";
        break;
    default:
        throw Error("Unknown math operator: " + c);
    }
    return [d, g.j.On]
}
;
g.j.math_constant = function(a) {
    return {
        PI: ["Math.PI", g.j.fc],
        E: ["Math.E", g.j.fc],
        GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", g.j.On],
        SQRT2: ["Math.SQRT2", g.j.fc],
        SQRT1_2: ["Math.SQRT1_2", g.j.fc],
        INFINITY: ["Infinity", g.j.Yl]
    }[C(a, "CONSTANT")]
}
;
g.j.math_number_property = function(a) {
    var c = X(g.j, a, "NUMBER_TO_CHECK", g.j.Qn) || "0"
      , d = C(a, "PROPERTY");
    if ("PRIME" == d) {
        var e = Y("mathIsPrime", ["function " + g.j.Xe + "(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.", "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).", "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"]) + "(" + c + ")";
        return [e, g.j.ub]
    }
    switch (d) {
    case "EVEN":
        e = c + " % 2 == 0";
        break;
    case "ODD":
        e = c + " % 2 == 1";
        break;
    case "WHOLE":
        e = c + " % 1 == 0";
        break;
    case "POSITIVE":
        e = c + " > 0";
        break;
    case "NEGATIVE":
        e = c + " < 0";
        break;
    case "DIVISIBLE_BY":
        a = X(g.j, a, "DIVISOR", g.j.Qn) || "0",
        e = c + " % " + a + " == 0"
    }
    return [e, g.j.bA]
}
;
g.j.math_change = function(a) {
    var c = X(g.j, a, "DELTA", g.j.Ei) || "0";
    a = g.j.vb.gd(C(a, "VAR"), g.hc);
    return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + c + ";\n"
}
;
g.j.math_round = g.j.math_single;
g.j.math_trig = g.j.math_single;
g.j.math_on_list = function(a) {
    var c = C(a, "OP");
    switch (c) {
    case "SUM":
        a = X(g.j, a, "LIST", g.j.fc) || "[]";
        a += ".reduce(function(x, y) {return x + y;})";
        break;
    case "MIN":
        a = X(g.j, a, "LIST", g.j.hb) || "[]";
        a = "Math.min.apply(null, " + a + ")";
        break;
    case "MAX":
        a = X(g.j, a, "LIST", g.j.hb) || "[]";
        a = "Math.max.apply(null, " + a + ")";
        break;
    case "AVERAGE":
        c = Y("mathMean", ["function " + g.j.Xe + "(myList) {", "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;", "}"]);
        a = X(g.j, a, "LIST", g.j.hb) || "[]";
        a = c + "(" + a + ")";
        break;
    case "MEDIAN":
        c = Y("mathMedian", ["function " + g.j.Xe + "(myList) {", "  var localList = myList.filter(function (x) {return typeof x == 'number';});", "  if (!localList.length) return null;", "  localList.sort(function(a, b) {return b - a;});", "  if (localList.length % 2 == 0) {", "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;", "  } else {", "    return localList[(localList.length - 1) / 2];", "  }", "}"]);
        a = X(g.j, a, "LIST", g.j.hb) || "[]";
        a = c + "(" + a + ")";
        break;
    case "MODE":
        c = Y("mathModes", ["function " + g.j.Xe + "(values) {", "  var modes = [];", "  var counts = [];", "  var maxCount = 0;", "  for (var i = 0; i < values.length; i++) {", "    var value = values[i];", "    var found = false;", "    var thisCount;", "    for (var j = 0; j < counts.length; j++) {", "      if (counts[j][0] === value) {", "        thisCount = ++counts[j][1];", "        found = true;", "        break;", "      }", "    }", "    if (!found) {", "      counts.push([value, 1]);", "      thisCount = 1;", "    }", "    maxCount = Math.max(thisCount, maxCount);", "  }", "  for (var j = 0; j < counts.length; j++) {", "    if (counts[j][1] == maxCount) {", "        modes.push(counts[j][0]);", "    }", "  }", "  return modes;", "}"]);
        a = X(g.j, a, "LIST", g.j.hb) || "[]";
        a = c + "(" + a + ")";
        break;
    case "STD_DEV":
        c = Y("mathStandardDeviation", ["function " + g.j.Xe + "(numbers) {", "  var n = numbers.length;", "  if (!n) return null;", "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;", "  var variance = 0;", "  for (var j = 0; j < n; j++) {", "    variance += Math.pow(numbers[j] - mean, 2);", "  }", "  variance = variance / n;", "  return Math.sqrt(variance);", "}"]);
        a = X(g.j, a, "LIST", g.j.hb) || "[]";
        a = c + "(" + a + ")";
        break;
    case "RANDOM":
        c = Y("mathRandomList", ["function " + g.j.Xe + "(list) {", "  var x = Math.floor(Math.random() * list.length);", "  return list[x];", "}"]);
        a = X(g.j, a, "LIST", g.j.hb) || "[]";
        a = c + "(" + a + ")";
        break;
    default:
        throw Error("Unknown operator: " + c);
    }
    return [a, g.j.ub]
}
;
g.j.math_modulo = function(a) {
    var c = X(g.j, a, "DIVIDEND", g.j.Qn) || "0";
    a = X(g.j, a, "DIVISOR", g.j.Qn) || "0";
    return [c + " % " + a, g.j.Qn]
}
;
g.j.math_constrain = function(a) {
    var c = X(g.j, a, "VALUE", g.j.hb) || "0"
      , d = X(g.j, a, "LOW", g.j.hb) || "0";
    a = X(g.j, a, "HIGH", g.j.hb) || "Infinity";
    return ["Math.min(Math.max(" + c + ", " + d + "), " + a + ")", g.j.ub]
}
;
g.j.math_random_int = function(a) {
    var c = X(g.j, a, "FROM", g.j.hb) || "0";
    a = X(g.j, a, "TO", g.j.hb) || "0";
    return [Y("mathRandomInt", ["function " + g.j.Xe + "(a, b) {", "  if (a > b) {", "    // Swap a and b to ensure a is smaller.", "    var c = a;", "    a = b;", "    b = c;", "  }", "  return Math.floor(Math.random() * (b - a + 1) + a);", "}"]) + "(" + c + ", " + a + ")", g.j.ub]
}
;
g.j.math_random_float = function() {
    return ["Math.random()", g.j.ub]
}
;
g.j.math_atan2 = function(a) {
    var c = X(g.j, a, "X", g.j.hb) || "0";
    return ["Math.atan2(" + (X(g.j, a, "Y", g.j.hb) || "0") + ", " + c + ") / Math.PI * 180", g.j.On]
}
;
g.ec = function(a) {
    g.ec.v.constructor.call(this, null);
    this.pD = a
}
;
g.g.object.W(g.ec, g.ke);
b = g.ec.prototype;
b.s = null;
b.un = 0;
b.nq = 0;
b.aw = function(a) {
    g.g.o.N(g.g.F.Dc, {
        "class": "blocklyIconShape",
        rx: "4",
        ry: "4",
        height: "16",
        width: "16"
    }, a);
    g.g.o.N(g.g.F.Ld, {
        "class": "blocklyIconSymbol",
        d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"
    }, a);
    g.g.o.N(g.g.F.Bq, {
        "class": "blocklyIconShape",
        r: "2.7",
        cx: "8",
        cy: "8"
    }, a)
}
;
b.Mw = function(a) {
    this.X.Yd() && g.ke.prototype.Mw.call(this, a)
}
;
b.Gv = function() {
    this.$p = g.g.o.N(g.g.F.Ii, {
        x: g.xa.pd,
        y: g.xa.pd
    }, null);
    if (this.pD.length)
        for (var a = g.g.xml.createElement("xml"), c = 0, d; d = this.pD[c]; c++) {
            var e = g.g.xml.createElement("block");
            e.setAttribute("type", d);
            a.appendChild(e)
        }
    else
        a = null;
    c = new g.Kd({
        disable: !1,
        parentWorkspace: this.X.u,
        media: this.X.u.options.Dj,
        rtl: this.X.L,
        horizontalLayout: !1,
        renderer: this.X.u.options.Fp,
        rendererOverrides: this.X.u.options.Gp
    });
    c.Gb = this.X.L ? g.g.Y.Ka.Mc : g.g.Y.Ka.Ib;
    if (d = !!a)
        c.Kg = g.g.Y.Dv(a);
    this.s = new g.Vc(c);
    this.s.ip = !0;
    D(this.s, g.h.ZH);
    a = d ? Tc(this.s, g.g.F.rc) : null;
    c = this.s.eb("blocklyMutatorBackground");
    a && c.insertBefore(a, this.s.zb);
    this.$p.appendChild(c);
    return this.$p
}
;
b.gi = function() {
    g.ec.v.gi.call(this);
    this.X.Xb || (this.X.Yd() ? this.Xd && g.g.o.dc(this.Xd, "blocklyIconGroupReadonly") : (this.rb(!1),
    this.Xd && g.g.o.Fa(this.Xd, "blocklyIconGroupReadonly")))
}
;
function sf(a) {
    var c = 2 * g.xa.pd
      , d = a.s.zb.getBBox()
      , e = d.width + d.x
      , f = d.height + 3 * c
      , h = a.s.Je();
    if (h) {
        var k = h.s.ce.fj();
        f = Math.max(f, k.height + 20);
        e += h.Ih()
    }
    a.X.L && (e = -d.x);
    e += 3 * c;
    if (Math.abs(a.un - e) > c || Math.abs(a.nq - f) > c)
        a.un = e,
        a.nq = f,
        a.lc.Lp(e + c, f + c),
        a.$p.setAttribute("width", a.un),
        a.$p.setAttribute("height", a.nq),
        Uc(a.s, a.un, a.nq);
    a.X.L && a.s.zb.setAttribute("transform", "translate(" + a.un + ",0)");
    a.s.resize()
}
b.EJ = function() {
    this.s && Sc(this.s)
}
;
b.rb = function(a) {
    if (a != this.isVisible())
        if (g.h.Ga(new (g.h.get(g.h.Vj))(this.X,a,"mutator")),
        a) {
            this.lc = new g.xa(this.X.u,this.Gv(),this.X.Nb.ac,this.Pk,null,null);
            vb(this.lc, this.X.id);
            xb(this.lc, this.EJ.bind(this));
            var c = this.s.options.Kg;
            a = this.s.Je();
            c && (a.S(this.s),
            a.show(c));
            this.Rg = this.X.zh(this.s);
            c = q(this.Rg, !1);
            for (var d = 0, e; e = c[d]; d++)
                e.Ia();
            this.Rg.st(!1);
            this.Rg.Lv = !1;
            a ? (c = 2 * a.Hb,
            a = this.Rg.L ? a.Ih() + c : c) : a = c = 16;
            this.X.L && (a = -a);
            this.Rg.moveBy(a, c);
            if (this.X.qt) {
                var f = this
                  , h = this.X;
                h.qt(this.Rg);
                this.xt = function() {
                    h.qt(f.Rg)
                }
                ;
                D(this.X.u, this.xt)
            }
            sf(this);
            D(this.s, this.jL.bind(this));
            this.ic()
        } else
            this.$p = null,
            this.s.I(),
            this.Rg = this.s = null,
            this.lc.I(),
            this.lc = null,
            this.nq = this.un = 0,
            this.xt && (ab(this.X.u, this.xt),
            this.xt = null)
}
;
b.jL = function(a) {
    if (!(a.Xw || a.type == g.h.Zj && "disabled" == a.element)) {
        if (!this.s.yc()) {
            a = this.s.xc(!1);
            for (var c = 0, d; d = a[c]; c++) {
                var e = d.jb();
                20 > e.y && d.moveBy(0, 20 - e.y);
                if (d.L) {
                    var f = -20
                      , h = this.s.Je();
                    h && (f -= h.Ih());
                    e.x > f && d.moveBy(f - e.x, 0)
                } else
                    20 > e.x && d.moveBy(20 - e.x, 0)
            }
        }
        if (this.Rg.u == this.s) {
            g.h.la(!0);
            d = this.X;
            a = (a = d.pb()) && g.P.pe(a);
            c = d.ra;
            d.ra = !1;
            d.uh(this.Rg);
            d.ra = c;
            d.uf();
            d.ra && d.Ia();
            c = (c = d.pb()) && g.P.pe(c);
            if (a != c) {
                g.h.Ga(new (g.h.get(g.h.eg))(d,"mutation",null,a,c));
                var k = g.h.oc();
                setTimeout(function() {
                    g.h.la(k);
                    d.Zb();
                    g.h.la(!1)
                }, g.yq)
            }
            this.s.yc() || sf(this);
            g.h.la(!1)
        }
    }
}
;
b.I = function() {
    this.X.kd = null;
    g.ke.prototype.I.call(this)
}
;
g.ec.Ym = function(a, c, d) {
    if (!a || !a.aa().u)
        return !1;
    d = x(c, d).connection;
    var e = a.sa();
    return e && e != c || d.ta == a ? !1 : (d.isConnected() && d.disconnect(),
    d.connect(a),
    !0)
}
;
g.ec.BB = function(a) {
    var c = null;
    if (a && a.options) {
        var d = a.options.pc;
        a.Vf ? d && d.options && (c = d.options.pc) : d && (c = d)
    }
    return c
}
;
g.ya.SF = {};
g.ya.SF.Qq = 260;
g.vm([{
    type: "lists_create_empty",
    message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE}",
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_CREATE_EMPTY_HELPURL}"
}, {
    type: "lists_repeat",
    message0: "%{BKY_LISTS_REPEAT_TITLE}",
    args0: [{
        type: "input_value",
        name: "ITEM"
    }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REPEAT_HELPURL}"
}, {
    type: "lists_reverse",
    message0: "%{BKY_LISTS_REVERSE_MESSAGE0}",
    args0: [{
        type: "input_value",
        name: "LIST",
        check: "Array"
    }],
    output: "Array",
    inputsInline: !0,
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REVERSE_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REVERSE_HELPURL}"
}, {
    type: "lists_isEmpty",
    message0: "%{BKY_LISTS_ISEMPTY_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: ["String", "Array"]
    }],
    output: "Boolean",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_ISEMPTY_HELPURL}"
}, {
    type: "lists_length",
    message0: "%{BKY_LISTS_LENGTH_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: ["String", "Array"]
    }],
    output: "Number",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_LENGTH_HELPURL}"
}]);
g.O.lists_create_with = {
    S: function() {
        this.Mb = g.i.LISTS_CREATE_WITH_HELPURL;
        this.$b("list_blocks");
        this.Zd = 3;
        this.Zc();
        this.fe(!0, "Array");
        this.Nj(new g.ec(["lists_create_with_item"]));
        this.ab(g.i.LISTS_CREATE_WITH_TOOLTIP)
    },
    pb: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("items", this.Zd);
        return a
    },
    Wb: function(a) {
        this.Zd = parseInt(a.getAttribute("items"), 10);
        this.Zc()
    },
    zh: function(a) {
        var c = a.wj("lists_create_with_container");
        c.uf();
        for (var d = x(c, "STACK").connection, e = 0; e < this.Zd; e++) {
            var f = a.wj("lists_create_with_item");
            f.uf();
            d.connect(f.qa);
            d = f.ba
        }
        return c
    },
    uh: function(a) {
        var c = K(a, "STACK");
        for (a = []; c && !c.zd(); )
            a.push(c.Vy),
            c = c.ba && c.ba.sa();
        for (c = 0; c < this.Zd; c++) {
            var d = x(this, "ADD" + c).connection.ta;
            d && -1 == a.indexOf(d) && d.disconnect()
        }
        this.Zd = a.length;
        this.Zc();
        for (c = 0; c < this.Zd; c++)
            g.ec.Ym(a[c], this, "ADD" + c)
    },
    qt: function(a) {
        a = K(a, "STACK");
        for (var c = 0; a; ) {
            var d = x(this, "ADD" + c);
            a.Vy = d && d.connection.ta;
            c++;
            a = a.ba && a.ba.sa()
        }
    },
    Zc: function() {
        this.Zd && x(this, "EMPTY") ? this.xb("EMPTY") : this.Zd || x(this, "EMPTY") || G(I(this, "EMPTY"), g.i.LISTS_CREATE_EMPTY_TITLE);
        for (var a = 0; a < this.Zd; a++)
            if (!x(this, "ADD" + a)) {
                var c = cc(H(this, "ADD" + a), g.tq);
                0 == a && G(c, g.i.LISTS_CREATE_WITH_INPUT_WITH)
            }
        for (; x(this, "ADD" + a); )
            this.xb("ADD" + a),
            a++
    }
};
g.O.lists_create_with_container = {
    S: function() {
        this.$b("list_blocks");
        G(I(this), g.i.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
        gc(this, "STACK");
        this.ab(g.i.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = !1
    }
};
g.O.lists_create_with_item = {
    S: function() {
        this.$b("list_blocks");
        G(I(this), g.i.LISTS_CREATE_WITH_ITEM_TITLE);
        this.Se(!0);
        this.Re(!0);
        this.ab(g.i.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = !1
    }
};
g.O.lists_indexOf = {
    S: function() {
        var a = [[g.i.LISTS_INDEX_OF_FIRST, "FIRST"], [g.i.LISTS_INDEX_OF_LAST, "LAST"]];
        this.Mb = g.i.LISTS_INDEX_OF_HELPURL;
        this.$b("list_blocks");
        this.fe(!0, "Number");
        G(H(this, "VALUE").Pb("Array"), g.i.LISTS_INDEX_OF_INPUT_IN_LIST);
        G(H(this, "FIND"), new g.gb(a), "END");
        this.Xc(!0);
        var c = this;
        this.ab(function() {
            return g.i.LISTS_INDEX_OF_TOOLTIP.replace("%1", c.u.options.Sh ? "0" : "-1")
        })
    }
};
g.O.lists_getIndex = {
    S: function() {
        var a = [[g.i.LISTS_GET_INDEX_GET, "GET"], [g.i.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"], [g.i.LISTS_GET_INDEX_REMOVE, "REMOVE"]];
        this.Vu = [[g.i.LISTS_GET_INDEX_FROM_START, "FROM_START"], [g.i.LISTS_GET_INDEX_FROM_END, "FROM_END"], [g.i.LISTS_GET_INDEX_FIRST, "FIRST"], [g.i.LISTS_GET_INDEX_LAST, "LAST"], [g.i.LISTS_GET_INDEX_RANDOM, "RANDOM"]];
        this.Mb = g.i.LISTS_GET_INDEX_HELPURL;
        this.$b("list_blocks");
        a = new g.gb(a,function(d) {
            d = "REMOVE" == d;
            this.aa().UD(d)
        }
        );
        G(H(this, "VALUE").Pb("Array"), g.i.LISTS_GET_INDEX_INPUT_IN_LIST);
        G(G(I(this), a, "MODE"), "", "SPACE");
        I(this, "AT");
        g.i.LISTS_GET_INDEX_TAIL && G(I(this, "TAIL"), g.i.LISTS_GET_INDEX_TAIL);
        this.Xc(!0);
        this.fe(!0);
        this.Ve(!0);
        var c = this;
        this.ab(function() {
            var d = C(c, "MODE")
              , e = C(c, "WHERE")
              , f = "";
            switch (d + " " + e) {
            case "GET FROM_START":
            case "GET FROM_END":
                f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
                break;
            case "GET FIRST":
                f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
                break;
            case "GET LAST":
                f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
                break;
            case "GET RANDOM":
                f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
                break;
            case "GET_REMOVE FROM_START":
            case "GET_REMOVE FROM_END":
                f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
                break;
            case "GET_REMOVE FIRST":
                f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
                break;
            case "GET_REMOVE LAST":
                f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
                break;
            case "GET_REMOVE RANDOM":
                f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
                break;
            case "REMOVE FROM_START":
            case "REMOVE FROM_END":
                f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
                break;
            case "REMOVE FIRST":
                f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
                break;
            case "REMOVE LAST":
                f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
                break;
            case "REMOVE RANDOM":
                f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM
            }
            if ("FROM_START" == e || "FROM_END" == e)
                f += "  " + ("FROM_START" == e ? g.i.LISTS_INDEX_FROM_START_TOOLTIP : g.i.LISTS_INDEX_FROM_END_TOOLTIP).replace("%1", c.u.options.Sh ? "#1" : "#0");
            return f
        })
    },
    pb: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("statement", !this.T);
        a.setAttribute("at", x(this, "AT").type == g.tc);
        return a
    },
    Wb: function(a) {
        var c = "true" == a.getAttribute("statement");
        this.UD(c);
        a = "false" != a.getAttribute("at");
        this.Ve(a)
    },
    UD: function(a) {
        a != !this.T && (A(this, !0),
        a ? (this.fe(!1),
        this.Se(!0),
        this.Re(!0)) : (this.Se(!1),
        this.Re(!1),
        this.fe(!0)))
    },
    Ve: function(a) {
        this.xb("AT");
        this.xb("ORDINAL", !0);
        a ? (H(this, "AT").Pb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX && G(I(this, "ORDINAL"), g.i.ORDINAL_NUMBER_SUFFIX)) : I(this, "AT");
        var c = new g.gb(this.Vu,function(d) {
            var e = "FROM_START" == d || "FROM_END" == d;
            if (e != a) {
                var f = this.aa();
                f.Ve(e);
                ec(f, d, "WHERE");
                return null
            }
        }
        );
        G(x(this, "AT"), c, "WHERE");
        g.i.LISTS_GET_INDEX_TAIL && kc(this, "TAIL", null)
    }
};
g.O.lists_setIndex = {
    S: function() {
        var a = [[g.i.LISTS_SET_INDEX_SET, "SET"], [g.i.LISTS_SET_INDEX_INSERT, "INSERT"]];
        this.Vu = [[g.i.LISTS_GET_INDEX_FROM_START, "FROM_START"], [g.i.LISTS_GET_INDEX_FROM_END, "FROM_END"], [g.i.LISTS_GET_INDEX_FIRST, "FIRST"], [g.i.LISTS_GET_INDEX_LAST, "LAST"], [g.i.LISTS_GET_INDEX_RANDOM, "RANDOM"]];
        this.Mb = g.i.LISTS_SET_INDEX_HELPURL;
        this.$b("list_blocks");
        G(H(this, "LIST").Pb("Array"), g.i.LISTS_SET_INDEX_INPUT_IN_LIST);
        G(G(I(this), new g.gb(a), "MODE"), "", "SPACE");
        I(this, "AT");
        G(H(this, "TO"), g.i.LISTS_SET_INDEX_INPUT_TO);
        this.Xc(!0);
        this.Se(!0);
        this.Re(!0);
        this.ab(g.i.LISTS_SET_INDEX_TOOLTIP);
        this.Ve(!0);
        var c = this;
        this.ab(function() {
            var d = C(c, "MODE")
              , e = C(c, "WHERE")
              , f = "";
            switch (d + " " + e) {
            case "SET FROM_START":
            case "SET FROM_END":
                f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
                break;
            case "SET FIRST":
                f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
                break;
            case "SET LAST":
                f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
                break;
            case "SET RANDOM":
                f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
                break;
            case "INSERT FROM_START":
            case "INSERT FROM_END":
                f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
                break;
            case "INSERT FIRST":
                f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
                break;
            case "INSERT LAST":
                f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
                break;
            case "INSERT RANDOM":
                f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM
            }
            if ("FROM_START" == e || "FROM_END" == e)
                f += "  " + g.i.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", c.u.options.Sh ? "#1" : "#0");
            return f
        })
    },
    pb: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("at", x(this, "AT").type == g.tc);
        return a
    },
    Wb: function(a) {
        a = "false" != a.getAttribute("at");
        this.Ve(a)
    },
    Ve: function(a) {
        this.xb("AT");
        this.xb("ORDINAL", !0);
        a ? (H(this, "AT").Pb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX && G(I(this, "ORDINAL"), g.i.ORDINAL_NUMBER_SUFFIX)) : I(this, "AT");
        var c = new g.gb(this.Vu,function(d) {
            var e = "FROM_START" == d || "FROM_END" == d;
            if (e != a) {
                var f = this.aa();
                f.Ve(e);
                ec(f, d, "WHERE");
                return null
            }
        }
        );
        kc(this, "AT", "TO");
        x(this, "ORDINAL") && kc(this, "ORDINAL", "TO");
        G(x(this, "AT"), c, "WHERE")
    }
};
g.O.lists_getSublist = {
    S: function() {
        this.WHERE_OPTIONS_1 = [[g.i.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"], [g.i.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"], [g.i.LISTS_GET_SUBLIST_START_FIRST, "FIRST"]];
        this.WHERE_OPTIONS_2 = [[g.i.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"], [g.i.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"], [g.i.LISTS_GET_SUBLIST_END_LAST, "LAST"]];
        this.Mb = g.i.LISTS_GET_SUBLIST_HELPURL;
        this.$b("list_blocks");
        G(H(this, "LIST").Pb("Array"), g.i.LISTS_GET_SUBLIST_INPUT_IN_LIST);
        I(this, "AT1");
        I(this, "AT2");
        g.i.LISTS_GET_SUBLIST_TAIL && G(I(this, "TAIL"), g.i.LISTS_GET_SUBLIST_TAIL);
        this.Xc(!0);
        this.fe(!0, "Array");
        this.Ve(1, !0);
        this.Ve(2, !0);
        this.ab(g.i.LISTS_GET_SUBLIST_TOOLTIP)
    },
    pb: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("at1", x(this, "AT1").type == g.tc);
        a.setAttribute("at2", x(this, "AT2").type == g.tc);
        return a
    },
    Wb: function(a) {
        var c = "true" == a.getAttribute("at1");
        a = "true" == a.getAttribute("at2");
        this.Ve(1, c);
        this.Ve(2, a)
    },
    Ve: function(a, c) {
        this.xb("AT" + a);
        this.xb("ORDINAL" + a, !0);
        c ? (H(this, "AT" + a).Pb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX && G(I(this, "ORDINAL" + a), g.i.ORDINAL_NUMBER_SUFFIX)) : I(this, "AT" + a);
        var d = new g.gb(this["WHERE_OPTIONS_" + a],function(e) {
            var f = "FROM_START" == e || "FROM_END" == e;
            if (f != c) {
                var h = this.aa();
                h.Ve(a, f);
                ec(h, e, "WHERE" + a);
                return null
            }
        }
        );
        G(x(this, "AT" + a), d, "WHERE" + a);
        1 == a && (kc(this, "AT1", "AT2"),
        x(this, "ORDINAL1") && kc(this, "ORDINAL1", "AT2"));
        g.i.LISTS_GET_SUBLIST_TAIL && kc(this, "TAIL", null)
    }
};
g.O.lists_sort = {
    S: function() {
        J(this, {
            message0: g.i.LISTS_SORT_TITLE,
            args0: [{
                type: "field_dropdown",
                name: "TYPE",
                options: [[g.i.LISTS_SORT_TYPE_NUMERIC, "NUMERIC"], [g.i.LISTS_SORT_TYPE_TEXT, "TEXT"], [g.i.LISTS_SORT_TYPE_IGNORECASE, "IGNORE_CASE"]]
            }, {
                type: "field_dropdown",
                name: "DIRECTION",
                options: [[g.i.LISTS_SORT_ORDER_ASCENDING, "1"], [g.i.LISTS_SORT_ORDER_DESCENDING, "-1"]]
            }, {
                type: "input_value",
                name: "LIST",
                check: "Array"
            }],
            output: "Array",
            style: "list_blocks",
            tooltip: g.i.LISTS_SORT_TOOLTIP,
            helpUrl: g.i.LISTS_SORT_HELPURL
        })
    }
};
g.O.lists_split = {
    S: function() {
        var a = this
          , c = new g.gb([[g.i.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"], [g.i.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"]],function(d) {
            a.kq(d)
        }
        );
        this.Mb = g.i.LISTS_SPLIT_HELPURL;
        this.$b("list_blocks");
        G(H(this, "INPUT").Pb("String"), c, "MODE");
        G(H(this, "DELIM").Pb("String"), g.i.LISTS_SPLIT_WITH_DELIMITER);
        this.Xc(!0);
        this.fe(!0, "Array");
        this.ab(function() {
            var d = C(a, "MODE");
            if ("SPLIT" == d)
                return g.i.LISTS_SPLIT_TOOLTIP_SPLIT;
            if ("JOIN" == d)
                return g.i.LISTS_SPLIT_TOOLTIP_JOIN;
            throw Error("Unknown mode: " + d);
        })
    },
    kq: function(a) {
        if (C(this, "MODE") != a) {
            var c = x(this, "INPUT").connection;
            c.dn(null);
            var d = c.sa();
            d && (c.disconnect(),
            d.Pa ? d.I() : this.Zb())
        }
        "SPLIT" == a ? (this.T.Pb("Array"),
        x(this, "INPUT").Pb("String")) : (this.T.Pb("String"),
        x(this, "INPUT").Pb("Array"))
    },
    pb: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("mode", C(this, "MODE"));
        return a
    },
    Wb: function(a) {
        this.kq(a.getAttribute("mode"))
    }
};
g.O.jJ = {};
g.ya.rd = {};
g.ya.rd.Qq = 210;
g.vm([{
    type: "logic_boolean",
    message0: "%1",
    args0: [{
        type: "field_dropdown",
        name: "BOOL",
        options: [["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"], ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]]
    }],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_BOOLEAN_HELPURL}"
}, {
    type: "controls_if",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{
        type: "input_value",
        name: "IF0",
        check: "Boolean"
    }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{
        type: "input_statement",
        name: "DO0"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    mutator: "controls_if_mutator",
    extensions: ["controls_if_tooltip"]
}, {
    type: "controls_ifelse",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{
        type: "input_value",
        name: "IF0",
        check: "Boolean"
    }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{
        type: "input_statement",
        name: "DO0"
    }],
    message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
    args2: [{
        type: "input_statement",
        name: "ELSE"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    extensions: ["controls_if_tooltip"]
}, {
    type: "logic_compare",
    message0: "%1 %2 %3",
    args0: [{
        type: "input_value",
        name: "A"
    }, {
        type: "field_dropdown",
        name: "OP",
        options: [["=", "EQ"], ["\u2260", "NEQ"], ["\u200f<", "LT"], ["\u200f\u2264", "LTE"], ["\u200f>", "GT"], ["\u200f\u2265", "GTE"]]
    }, {
        type: "input_value",
        name: "B"
    }],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
    extensions: ["logic_compare", "logic_op_tooltip"]
}, {
    type: "logic_operation",
    message0: "%1 %2 %3",
    args0: [{
        type: "input_value",
        name: "A",
        check: "Boolean"
    }, {
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_LOGIC_OPERATION_AND}", "AND"], ["%{BKY_LOGIC_OPERATION_OR}", "OR"]]
    }, {
        type: "input_value",
        name: "B",
        check: "Boolean"
    }],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_OPERATION_HELPURL}",
    extensions: ["logic_op_tooltip"]
}, {
    type: "logic_negate",
    message0: "%{BKY_LOGIC_NEGATE_TITLE}",
    args0: [{
        type: "input_value",
        name: "BOOL",
        check: "Boolean"
    }],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}"
}, {
    type: "logic_ternary",
    message0: "%{BKY_LOGIC_TERNARY_CONDITION} %1",
    args0: [{
        type: "input_value",
        name: "IF",
        check: "Boolean"
    }],
    message1: "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
    args1: [{
        type: "input_value",
        name: "THEN"
    }],
    message2: "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
    args2: [{
        type: "input_value",
        name: "ELSE"
    }],
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_TERNARY_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_TERNARY_HELPURL}",
    extensions: ["logic_ternary"]
}]);
g.vm([{
    type: "controls_if_if",
    message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}",
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}"
}, {
    type: "controls_if_elseif",
    message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",
    previousStatement: null,
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}"
}, {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}"
}]);
g.ya.rd.Mu = {
    EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
    NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
    LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
    LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
    GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
    GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
    AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
    OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}"
};
g.ma.register("logic_op_tooltip", g.ma.yr("OP", g.ya.rd.Mu));
g.ya.rd.St = {
    qe: 0,
    pf: 0,
    Pj: !0,
    pb: function() {
        if (!this.qe && !this.pf)
            return null;
        var a = g.g.xml.createElement("mutation");
        this.qe && a.setAttribute("elseif", this.qe);
        this.pf && a.setAttribute("else", 1);
        return a
    },
    Wb: function(a) {
        this.qe = parseInt(a.getAttribute("elseif"), 10) || 0;
        this.pf = parseInt(a.getAttribute("else"), 10) || 0;
        this.$J()
    },
    zh: function(a) {
        var c = a.wj("controls_if_if");
        c.uf();
        for (var d = c.ba, e = 1; e <= this.qe; e++) {
            var f = a.wj("controls_if_elseif");
            f.uf();
            d.connect(f.qa);
            d = f.ba
        }
        this.pf && (a = a.wj("controls_if_else"),
        a.uf(),
        d.connect(a.qa));
        return c
    },
    uh: function(a) {
        a = a.ba.sa();
        this.pf = this.qe = 0;
        for (var c = [null], d = [null], e = null; a && !a.zd(); ) {
            switch (a.type) {
            case "controls_if_elseif":
                this.qe++;
                c.push(a.Vy);
                d.push(a.Zf);
                break;
            case "controls_if_else":
                this.pf++;
                e = a.Zf;
                break;
            default:
                throw TypeError("Unknown block type: " + a.type);
            }
            a = a.ba && a.ba.sa()
        }
        this.Zc();
        this.qD(c, d, e)
    },
    qt: function(a) {
        a = a.ba.sa();
        for (var c = 1; a; ) {
            switch (a.type) {
            case "controls_if_elseif":
                var d = x(this, "IF" + c)
                  , e = x(this, "DO" + c);
                a.Vy = d && d.connection.ta;
                a.Zf = e && e.connection.ta;
                c++;
                break;
            case "controls_if_else":
                e = x(this, "ELSE");
                a.Zf = e && e.connection.ta;
                break;
            default:
                throw TypeError("Unknown block type: " + a.type);
            }
            a = a.ba && a.ba.sa()
        }
    },
    $J: function() {
        var a = [null]
          , c = [null]
          , d = null;
        x(this, "ELSE") && (d = x(this, "ELSE").connection.ta);
        for (var e = 1; x(this, "IF" + e); ) {
            var f = x(this, "DO" + e);
            a.push(x(this, "IF" + e).connection.ta);
            c.push(f.connection.ta);
            e++
        }
        this.Zc();
        this.qD(a, c, d)
    },
    Zc: function() {
        x(this, "ELSE") && this.xb("ELSE");
        for (var a = 1; x(this, "IF" + a); )
            this.xb("IF" + a),
            this.xb("DO" + a),
            a++;
        for (a = 1; a <= this.qe; a++)
            G(H(this, "IF" + a).Pb("Boolean"), g.i.CONTROLS_IF_MSG_ELSEIF),
            G(gc(this, "DO" + a), g.i.CONTROLS_IF_MSG_THEN);
        this.pf && G(gc(this, "ELSE"), g.i.CONTROLS_IF_MSG_ELSE)
    },
    qD: function(a, c, d) {
        for (var e = 1; e <= this.qe; e++)
            g.ec.Ym(a[e], this, "IF" + e),
            g.ec.Ym(c[e], this, "DO" + e);
        g.ec.Ym(d, this, "ELSE")
    }
};
g.ma.jy("controls_if_mutator", g.ya.rd.St, null, ["controls_if_elseif", "controls_if_else"]);
g.ya.rd.mz = function() {
    this.ab(function() {
        if (this.qe || this.pf) {
            if (!this.qe && this.pf)
                return g.i.CONTROLS_IF_TOOLTIP_2;
            if (this.qe && !this.pf)
                return g.i.CONTROLS_IF_TOOLTIP_3;
            if (this.qe && this.pf)
                return g.i.CONTROLS_IF_TOOLTIP_4
        } else
            return g.i.CONTROLS_IF_TOOLTIP_1;
        return ""
    }
    .bind(this))
}
;
g.ma.register("controls_if_tooltip", g.ya.rd.mz);
g.ya.rd.OF = {
    onchange: function(a) {
        this.Xm || (this.Xm = [null, null]);
        var c = K(this, "A")
          , d = K(this, "B");
        c && d && !Ra(c.T, d.T) && (g.h.la(a.group),
        a = this.Xm[0],
        a !== c && (A(c),
        !a || a.mf || a.Pa || x(this, "A").connection.connect(a.T)),
        c = this.Xm[1],
        c !== d && (A(d),
        !c || c.mf || c.Pa || x(this, "B").connection.connect(c.T)),
        this.Zb(),
        g.h.la(!1));
        this.Xm[0] = K(this, "A");
        this.Xm[1] = K(this, "B")
    }
};
g.ya.rd.NF = function() {
    this.Oe(g.ya.rd.OF)
}
;
g.ma.register("logic_compare", g.ya.rd.NF);
g.ya.rd.PF = {
    mD: null,
    onchange: function(a) {
        var c = K(this, "THEN")
          , d = K(this, "ELSE")
          , e = this.T.ta;
        if ((c || d) && e)
            for (var f = 0; 2 > f; f++) {
                var h = 1 == f ? c : d;
                h && !Ra(h.T, e) && (g.h.la(a.group),
                e === this.mD ? (A(this),
                e.aa().Zb()) : (A(h),
                h.Zb()),
                g.h.la(!1))
            }
        this.mD = e
    }
};
g.ma.ht("logic_ternary", g.ya.rd.PF);
g.O.lJ = {};
g.ya.af = {};
g.ya.af.Qq = 120;
g.vm([{
    type: "controls_repeat_ext",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{
        type: "input_value",
        name: "TIMES",
        check: "Number"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
}, {
    type: "controls_repeat",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{
        type: "field_number",
        name: "TIMES",
        value: 10,
        min: 0,
        precision: 1
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
}, {
    type: "controls_whileUntil",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "MODE",
        options: [["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"], ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"]]
    }, {
        type: "input_value",
        name: "BOOL",
        check: "Boolean"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
    extensions: ["controls_whileUntil_tooltip"]
}, {
    type: "controls_for",
    message0: "%{BKY_CONTROLS_FOR_TITLE}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: null
    }, {
        type: "input_value",
        name: "FROM",
        check: "Number",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "TO",
        check: "Number",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "BY",
        check: "Number",
        align: "RIGHT"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_for_tooltip"]
}, {
    type: "controls_forEach",
    message0: "%{BKY_CONTROLS_FOREACH_TITLE}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: null
    }, {
        type: "input_value",
        name: "LIST",
        check: "Array"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOREACH_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_forEach_tooltip"]
}, {
    type: "controls_flow_statements",
    message0: "%1",
    args0: [{
        type: "field_dropdown",
        name: "FLOW",
        options: [["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}", "BREAK"], ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}", "CONTINUE"]]
    }],
    previousStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
    extensions: ["controls_flow_tooltip", "controls_flow_in_loop_check"]
}]);
g.ya.af.TG = {
    WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",
    UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}"
};
g.ma.register("controls_whileUntil_tooltip", g.ma.yr("MODE", g.ya.af.TG));
g.ya.af.qE = {
    BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
    CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}"
};
g.ma.register("controls_flow_tooltip", g.ma.yr("FLOW", g.ya.af.qE));
g.ya.af.FE = {
    yh: function(a) {
        if (!this.Xb) {
            var c = z(this, "VAR").hd()
              , d = c.name;
            if (!this.isCollapsed() && null != d) {
                var e = {
                    enabled: !0
                };
                e.text = g.i.VARIABLES_SET_CREATE_GET.replace("%1", d);
                c = g.$.No(c);
                d = g.g.xml.createElement("block");
                d.setAttribute("type", "variables_get");
                d.appendChild(c);
                e.cb = g.Za.zr(this, d);
                a.push(e)
            }
        }
    }
};
g.ma.ht("contextMenu_newGetVariableBlock", g.ya.af.FE);
g.ma.register("controls_for_tooltip", g.ma.nv("%{BKY_CONTROLS_FOR_TOOLTIP}"));
g.ma.register("controls_forEach_tooltip", g.ma.nv("%{BKY_CONTROLS_FOREACH_TOOLTIP}"));
g.ya.af.Fq = {
    RF: ["controls_repeat", "controls_repeat_ext", "controls_forEach", "controls_for", "controls_whileUntil"],
    Pj: !0,
    XB: function(a) {
        do {
            if (-1 != g.ya.af.Fq.RF.indexOf(a.type))
                return a;
            a = dc(a)
        } while (a);
        return null
    },
    onchange: function(a) {
        if (this.u.yc && !this.u.yc() && a.type == g.h.ki) {
            var c = g.ya.af.Fq.XB(this);
            this.fn(c ? null : g.i.CONTROLS_FLOW_STATEMENTS_WARNING);
            if (!this.Xb) {
                var d = g.h.oc();
                g.h.la(a.group);
                this.ee(c);
                g.h.la(d)
            }
        }
    }
};
g.ma.ht("controls_flow_in_loop_check", g.ya.af.Fq);
g.Ye = function(a, c, d) {
    this.PA = null;
    g.Ye.v.constructor.call(this, a, c, d)
}
;
g.g.object.W(g.Ye, g.ve);
g.Ye.prototype.Nl = !1;
g.Ye.ka = function(a) {
    return new g.Ye(a.checked,void 0,a)
}
;
g.Ye.sE = "\u2713";
b = g.Ye.prototype;
b.qk = !0;
b.ak = "default";
b.oe = function(a) {
    g.Ye.v.oe.call(this, a);
    a.checkCharacter && (this.PA = a.checkCharacter)
}
;
b.lj = function() {
    g.Ye.v.lj.call(this);
    g.g.o.Fa(this.Ac, "blocklyCheckbox");
    this.Ac.style.display = this.Cc ? "block" : "none"
}
;
b.Ij = function() {
    this.$h && (this.$h.nodeValue = this.ls());
    Ub(this, this.na().bF)
}
;
b.ls = function() {
    return this.PA || g.Ye.sE
}
;
b.Ug = function() {
    this.setValue(!this.Cc)
}
;
b.bj = function(a) {
    return !0 === a || "TRUE" === a ? "TRUE" : !1 === a || "FALSE" === a ? "FALSE" : null
}
;
b.Ch = function(a) {
    this.Cc = tf(a);
    this.Ac && (this.Ac.style.display = this.Cc ? "block" : "none")
}
;
b.getValue = function() {
    return this.Cc ? "TRUE" : "FALSE"
}
;
b.yd = function() {
    return String(tf(this.Cc))
}
;
function tf(a) {
    return "string" == typeof a ? "TRUE" == a : !!a
}
g.rf.register("field_checkbox", g.Ye);
g.O.YJ = {};
g.O.procedures_defnoreturn = {
    S: function() {
        var a = g.Da.fs("", this);
        a = new g.Kc(a,g.Da.kt);
        df(a);
        G(G(G(I(this), g.i.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
        this.Nj(new g.ec(["procedures_mutatorarg"]));
        (this.u.options.po || this.u.options.pc && this.u.options.pc.options.po) && g.i.PROCEDURES_DEFNORETURN_COMMENT && this.Sg(g.i.PROCEDURES_DEFNORETURN_COMMENT);
        this.$b("procedure_blocks");
        this.ab(g.i.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.Mb = g.i.PROCEDURES_DEFNORETURN_HELPURL;
        this.Na = [];
        this.jc = [];
        this.Tg(!0);
        this.Zf = null
    },
    Tg: function(a) {
        this.rs !== a && (a ? (G(gc(this, "STACK"), g.i.PROCEDURES_DEFNORETURN_DO),
        x(this, "RETURN") && kc(this, "STACK", "RETURN")) : this.xb("STACK", !0),
        this.rs = a)
    },
    jq: function() {
        var a = "";
        this.Na.length && (a = g.i.PROCEDURES_BEFORE_PARAMS + " " + this.Na.join(", "));
        g.h.disable();
        try {
            ec(this, a, "PARAMS")
        } finally {
            g.h.enable()
        }
    },
    pb: function(a) {
        var c = g.g.xml.createElement("mutation");
        a && c.setAttribute("name", C(this, "NAME"));
        for (var d = 0; d < this.jc.length; d++) {
            var e = g.g.xml.createElement("arg")
              , f = this.jc[d];
            e.setAttribute("name", f.name);
            e.setAttribute("varid", f.La());
            a && this.Tx && e.setAttribute("paramId", this.Tx[d]);
            c.appendChild(e)
        }
        this.rs || c.setAttribute("statements", "false");
        return c
    },
    Wb: function(a) {
        this.Na = [];
        this.jc = [];
        for (var c = 0, d; d = a.childNodes[c]; c++)
            if ("arg" == d.nodeName.toLowerCase()) {
                var e = d.getAttribute("name");
                d = d.getAttribute("varid") || d.getAttribute("varId");
                this.Na.push(e);
                d = g.$.ns(this.u, d, e, "");
                null != d ? this.jc.push(d) : console.log("Failed to create a variable with name " + e + ", ignoring.")
            }
        this.jq();
        g.Da.sp(this);
        this.Tg("false" !== a.getAttribute("statements"))
    },
    zh: function(a) {
        var c = g.g.xml.createElement("block");
        c.setAttribute("type", "procedures_mutatorcontainer");
        var d = g.g.xml.createElement("statement");
        d.setAttribute("name", "STACK");
        c.appendChild(d);
        for (var e = 0; e < this.Na.length; e++) {
            var f = g.g.xml.createElement("block");
            f.setAttribute("type", "procedures_mutatorarg");
            var h = g.g.xml.createElement("field");
            h.setAttribute("name", "NAME");
            var k = g.g.xml.createTextNode(this.Na[e]);
            h.appendChild(k);
            f.appendChild(h);
            h = g.g.xml.createElement("next");
            f.appendChild(h);
            d.appendChild(f);
            d = h
        }
        a = g.P.Ck(c, a);
        "procedures_defreturn" == this.type ? ec(a, this.rs, "STATEMENTS") : a.xb("STATEMENT_INPUT");
        g.Da.sp(this);
        return a
    },
    uh: function(a) {
        this.Na = [];
        this.Tx = [];
        this.jc = [];
        for (var c = K(a, "STACK"); c && !c.zd(); ) {
            var d = C(c, "NAME");
            this.Na.push(d);
            d = this.u.hd(d, "");
            this.jc.push(d);
            this.Tx.push(c.id);
            c = c.ba && c.ba.sa()
        }
        this.jq();
        g.Da.sp(this);
        a = C(a, "STATEMENTS");
        if (null !== a && (a = "TRUE" == a,
        this.rs != a))
            if (a)
                this.Tg(!0),
                g.ec.Ym(this.Zf, this, "STACK"),
                this.Zf = null;
            else {
                a = x(this, "STACK").connection;
                if (this.Zf = a.ta)
                    a = a.sa(),
                    A(a),
                    a.Zb();
                this.Tg(!1)
            }
    },
    ej: function() {
        return [C(this, "NAME"), this.Na, !1]
    },
    Hh: function() {
        return this.Na
    },
    Gh: function() {
        return this.jc
    },
    mt: function(a, c) {
        var d = this.u.Uf(a);
        if ("" == d.type) {
            d = d.name;
            c = this.u.Uf(c);
            for (var e = !1, f = 0; f < this.jc.length; f++)
                this.jc[f].La() == a && (this.Na[f] = c.name,
                this.jc[f] = c,
                e = !0);
            e && (this.Vr(d, c.name),
            g.Da.sp(this))
        }
    },
    Ft: function(a) {
        for (var c = a.name, d = !1, e = 0; e < this.jc.length; e++)
            if (this.jc[e].La() == a.La()) {
                var f = this.Na[e];
                this.Na[e] = c;
                d = !0
            }
        d && (this.Vr(f, c),
        g.Da.sp(this))
    },
    Vr: function(a, c) {
        this.jq();
        if (this.kd && this.kd.isVisible())
            for (var d = B(this.kd.s), e = 0, f; f = d[e]; e++)
                "procedures_mutatorarg" == f.type && g.Jd.qf(a, C(f, "NAME")) && ec(f, c, "NAME")
    },
    yh: function(a) {
        if (!this.Xb) {
            var c = {
                enabled: !0
            }
              , d = C(this, "NAME");
            c.text = g.i.PROCEDURES_CREATE_DO.replace("%1", d);
            var e = g.g.xml.createElement("mutation");
            e.setAttribute("name", d);
            for (d = 0; d < this.Na.length; d++) {
                var f = g.g.xml.createElement("arg");
                f.setAttribute("name", this.Na[d]);
                e.appendChild(f)
            }
            d = g.g.xml.createElement("block");
            d.setAttribute("type", this.NA);
            d.appendChild(e);
            c.cb = g.Za.zr(this, d);
            a.push(c);
            if (!this.isCollapsed())
                for (d = 0; d < this.jc.length; d++)
                    c = {
                        enabled: !0
                    },
                    e = this.jc[d],
                    c.text = g.i.VARIABLES_SET_CREATE_GET.replace("%1", e.name),
                    e = g.$.No(e),
                    f = g.g.xml.createElement("block"),
                    f.setAttribute("type", "variables_get"),
                    f.appendChild(e),
                    c.cb = g.Za.zr(this, f),
                    a.push(c)
        }
    },
    NA: "procedures_callnoreturn"
};
g.O.procedures_defreturn = {
    S: function() {
        var a = g.Da.fs("", this);
        a = new g.Kc(a,g.Da.kt);
        df(a);
        G(G(G(I(this), g.i.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
        G(cc(H(this, "RETURN"), g.tq), g.i.PROCEDURES_DEFRETURN_RETURN);
        this.Nj(new g.ec(["procedures_mutatorarg"]));
        (this.u.options.po || this.u.options.pc && this.u.options.pc.options.po) && g.i.PROCEDURES_DEFRETURN_COMMENT && this.Sg(g.i.PROCEDURES_DEFRETURN_COMMENT);
        this.$b("procedure_blocks");
        this.ab(g.i.PROCEDURES_DEFRETURN_TOOLTIP);
        this.Mb = g.i.PROCEDURES_DEFRETURN_HELPURL;
        this.Na = [];
        this.jc = [];
        this.Tg(!0);
        this.Zf = null
    },
    Tg: g.O.procedures_defnoreturn.Tg,
    jq: g.O.procedures_defnoreturn.jq,
    pb: g.O.procedures_defnoreturn.pb,
    Wb: g.O.procedures_defnoreturn.Wb,
    zh: g.O.procedures_defnoreturn.zh,
    uh: g.O.procedures_defnoreturn.uh,
    ej: function() {
        return [C(this, "NAME"), this.Na, !0]
    },
    Hh: g.O.procedures_defnoreturn.Hh,
    Gh: g.O.procedures_defnoreturn.Gh,
    mt: g.O.procedures_defnoreturn.mt,
    Ft: g.O.procedures_defnoreturn.Ft,
    Vr: g.O.procedures_defnoreturn.Vr,
    yh: g.O.procedures_defnoreturn.yh,
    NA: "procedures_callreturn"
};
g.O.procedures_mutatorcontainer = {
    S: function() {
        G(I(this), g.i.PROCEDURES_MUTATORCONTAINER_TITLE);
        gc(this, "STACK");
        G(G(I(this, "STATEMENT_INPUT"), g.i.PROCEDURES_ALLOW_STATEMENTS), new g.Ye("TRUE"), "STATEMENTS");
        this.$b("procedure_blocks");
        this.ab(g.i.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = !1
    }
};
g.O.procedures_mutatorarg = {
    S: function() {
        var a = new g.Kc(g.Da.pz,this.Bl);
        a.DJ = a.Ug;
        a.Ug = function() {
            this.vo = [];
            this.DJ()
        }
        ;
        G(G(I(this), g.i.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
        this.Se(!0);
        this.Re(!0);
        this.$b("procedure_blocks");
        this.ab(g.i.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = !1;
        a.Hx = this.VH;
        a.vo = [];
        a.Hx("x")
    },
    Bl: function(a) {
        var c = this.aa()
          , d = g.ec.BB(c.u);
        a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
        if (!a)
            return null;
        for (var e = B(c.u.Qa || c.u), f = a.toLowerCase(), h = 0; h < e.length; h++)
            if (e[h].id != this.aa().id) {
                var k = C(e[h], "NAME");
                if (k && k.toLowerCase() == f)
                    return null
            }
        if (c.Xb)
            return a;
        (c = d.hd(a, "")) && c.name != a && d.Hj(c.La(), a);
        c || (c = d.jf(a, "")) && this.vo && this.vo.push(c);
        return a
    },
    VH: function(a) {
        var c = g.ec.BB(this.aa().u);
        if (c)
            for (var d = 0; d < this.vo.length; d++) {
                var e = this.vo[d];
                e.name != a && c.Bh(e.La())
            }
    }
};
g.O.procedures_callnoreturn = {
    S: function() {
        G(I(this, "TOPROW"), "", "NAME");
        this.Se(!0);
        this.Re(!0);
        this.$b("procedure_blocks");
        this.Mb = g.i.PROCEDURES_CALLNORETURN_HELPURL;
        this.Na = [];
        this.jc = [];
        this.Wh = {};
        this.Og = null;
        this.ay = !0
    },
    Ke: function() {
        return C(this, "NAME")
    },
    $m: function(a, c) {
        g.Jd.qf(a, this.Ke()) && (ec(this, c, "NAME"),
        this.ab((this.T ? g.i.PROCEDURES_CALLRETURN_TOOLTIP : g.i.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", c)))
    },
    yy: function(a, c) {
        var d = g.Da.Qo(this.Ke(), this.u)
          , e = d && d.kd && d.kd.isVisible();
        e || (this.Wh = {},
        this.Og = null);
        if (c)
            if (a.join("\n") == this.Na.join("\n"))
                this.Og = c;
            else {
                if (c.length != a.length)
                    throw RangeError("paramNames and paramIds must be the same length.");
                this.Kj(!1);
                this.Og || (this.Wh = {},
                this.Og = []);
                d = this.ra;
                this.ra = !1;
                for (var f = 0; f < this.Na.length; f++) {
                    var h = x(this, "ARG" + f);
                    h && (h = h.connection.ta,
                    this.Wh[this.Og[f]] = h,
                    e && h && -1 == c.indexOf(this.Og[f]) && (h.disconnect(),
                    h.aa().Zb()))
                }
                this.Na = [].concat(a);
                this.jc = [];
                for (f = 0; f < this.Na.length; f++)
                    a = g.$.ns(this.u, null, this.Na[f], ""),
                    this.jc.push(a);
                this.Zc();
                if (this.Og = c)
                    for (f = 0; f < this.Na.length; f++)
                        c = this.Og[f],
                        c in this.Wh && (h = this.Wh[c],
                        g.ec.Ym(h, this, "ARG" + f) || delete this.Wh[c]);
                (this.ra = d) && this.Ia()
            }
    },
    Zc: function() {
        for (var a = 0; a < this.Na.length; a++) {
            var c = z(this, "ARGNAME" + a);
            if (c) {
                g.h.disable();
                try {
                    c.setValue(this.Na[a])
                } finally {
                    g.h.enable()
                }
            } else
                c = new g.je(this.Na[a]),
                G(cc(H(this, "ARG" + a), g.tq), c, "ARGNAME" + a).S()
        }
        for (; x(this, "ARG" + a); )
            this.xb("ARG" + a),
            a++;
        if (a = x(this, "TOPROW"))
            this.Na.length ? z(this, "WITH") || (G(a, g.i.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"),
            a.S()) : z(this, "WITH") && $b(a, "WITH")
    },
    pb: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("name", this.Ke());
        for (var c = 0; c < this.Na.length; c++) {
            var d = g.g.xml.createElement("arg");
            d.setAttribute("name", this.Na[c]);
            a.appendChild(d)
        }
        return a
    },
    Wb: function(a) {
        var c = a.getAttribute("name");
        this.$m(this.Ke(), c);
        c = [];
        for (var d = [], e = 0, f; f = a.childNodes[e]; e++)
            "arg" == f.nodeName.toLowerCase() && (c.push(f.getAttribute("name")),
            d.push(f.getAttribute("paramId")));
        this.yy(c, d)
    },
    Hh: function() {
        return this.Na
    },
    Gh: function() {
        return this.jc
    },
    onchange: function(a) {
        if (this.u && !this.u.Vf && a.$a)
            if (a.type == g.h.ji && -1 != a.jj.indexOf(this.id)) {
                var c = this.Ke();
                c = g.Da.Qo(c, this.u);
                !c || c.type == this.Kv && JSON.stringify(c.Hh()) == JSON.stringify(this.Na) || (c = null);
                if (!c) {
                    g.h.la(a.group);
                    a = g.g.xml.createElement("xml");
                    c = g.g.xml.createElement("block");
                    c.setAttribute("type", this.Kv);
                    var d = this.jb()
                      , e = d.y + 2 * g.Md;
                    c.setAttribute("x", d.x + g.Md * (this.L ? -1 : 1));
                    c.setAttribute("y", e);
                    d = this.pb();
                    c.appendChild(d);
                    d = g.g.xml.createElement("field");
                    d.setAttribute("name", "NAME");
                    e = this.Ke();
                    e || (e = g.Da.fs("", this),
                    this.$m("", e));
                    d.appendChild(g.g.xml.createTextNode(e));
                    c.appendChild(d);
                    a.appendChild(c);
                    g.P.Dk(a, this.u);
                    g.h.la(!1)
                }
            } else
                a.type == g.h.vq ? (c = this.Ke(),
                c = g.Da.Qo(c, this.u),
                c || (g.h.la(a.group),
                this.I(!0),
                g.h.la(!1))) : a.type == g.h.Zj && "disabled" == a.element && (c = this.Ke(),
                (c = g.Da.Qo(c, this.u)) && c.id == a.ob && ((c = g.h.oc()) && console.log("Saw an existing group while responding to a definition change"),
                g.h.la(a.group),
                a.newValue ? (this.ay = this.isEnabled(),
                this.ee(!1)) : this.ee(this.ay),
                g.h.la(c)))
    },
    yh: function(a) {
        if (this.u.Gc()) {
            var c = {
                enabled: !0
            };
            c.text = g.i.PROCEDURES_HIGHLIGHT_DEF;
            var d = this.Ke()
              , e = this.u;
            c.cb = function() {
                var f = g.Da.Qo(d, e);
                if (f) {
                    var h = f.id;
                    if (e.Gc()) {
                        if (h = h ? e.Td(h) : null) {
                            var k = h.jb()
                              , l = E(h)
                              , m = e.scale;
                            h = (k.x + (e.L ? -1 : 1) * l.width / 2) * m;
                            k = (k.y + l.height / 2) * m;
                            l = e.Ud();
                            e.scroll(-(h - l.Ic / 2), -(k - l.Rc / 2))
                        }
                    } else
                        console.warn("Tried to move a non-movable workspace. This could result in blocks becoming inaccessible.");
                    f.select()
                }
            }
            ;
            a.push(c)
        }
    },
    Kv: "procedures_defnoreturn"
};
g.O.procedures_callreturn = {
    S: function() {
        G(I(this, "TOPROW"), "", "NAME");
        this.fe(!0);
        this.$b("procedure_blocks");
        this.Mb = g.i.PROCEDURES_CALLRETURN_HELPURL;
        this.Na = [];
        this.jc = [];
        this.Wh = {};
        this.Og = null;
        this.ay = !0
    },
    Ke: g.O.procedures_callnoreturn.Ke,
    $m: g.O.procedures_callnoreturn.$m,
    yy: g.O.procedures_callnoreturn.yy,
    Zc: g.O.procedures_callnoreturn.Zc,
    pb: g.O.procedures_callnoreturn.pb,
    Wb: g.O.procedures_callnoreturn.Wb,
    Hh: g.O.procedures_callnoreturn.Hh,
    Gh: g.O.procedures_callnoreturn.Gh,
    onchange: g.O.procedures_callnoreturn.onchange,
    yh: g.O.procedures_callnoreturn.yh,
    Kv: "procedures_defreturn"
};
g.O.procedures_ifreturn = {
    S: function() {
        G(H(this, "CONDITION").Pb("Boolean"), g.i.CONTROLS_IF_MSG_IF);
        G(H(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN);
        this.Xc(!0);
        this.Se(!0);
        this.Re(!0);
        this.$b("procedure_blocks");
        this.ab(g.i.PROCEDURES_IFRETURN_TOOLTIP);
        this.Mb = g.i.PROCEDURES_IFRETURN_HELPURL;
        this.ij = !0
    },
    pb: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("value", Number(this.ij));
        return a
    },
    Wb: function(a) {
        this.ij = 1 == a.getAttribute("value");
        this.ij || (this.xb("VALUE"),
        G(I(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN))
    },
    onchange: function() {
        if (this.u.yc && !this.u.yc()) {
            var a = !1
              , c = this;
            do {
                if (-1 != this.lF.indexOf(c.type)) {
                    a = !0;
                    break
                }
                c = dc(c)
            } while (c);
            a ? ("procedures_defnoreturn" == c.type && this.ij ? (this.xb("VALUE"),
            G(I(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN),
            this.ij = !1) : "procedures_defreturn" != c.type || this.ij || (this.xb("VALUE"),
            G(H(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN),
            this.ij = !0),
            this.fn(null),
            this.Xb || this.ee(!0)) : (this.fn(g.i.PROCEDURES_IFRETURN_WARNING),
            this.Xb || fc(this) || this.ee(!1))
        }
    },
    lF: ["procedures_defnoreturn", "procedures_defreturn"]
};
g.O.eL = {};
g.ya.$ = {};
g.ya.$.Qq = 330;
g.vm([{
    type: "variables_get",
    message0: "%1",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }],
    output: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableSetterGetter"]
}, {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }, {
        type: "input_value",
        name: "VALUE"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableSetterGetter"]
}]);
g.ya.$.GE = {
    yh: function(a) {
        if (!this.Xb) {
            if ("variables_get" == this.type)
                var c = "variables_set"
                  , d = g.i.VARIABLES_GET_CREATE_SET;
            else
                c = "variables_get",
                d = g.i.VARIABLES_SET_CREATE_GET;
            var e = {
                enabled: 0 < Xa(this.u)
            }
              , f = z(this, "VAR").yd();
            e.text = d.replace("%1", f);
            d = g.g.xml.createElement("field");
            d.setAttribute("name", "VAR");
            d.appendChild(g.g.xml.createTextNode(f));
            f = g.g.xml.createElement("block");
            f.setAttribute("type", c);
            f.appendChild(d);
            e.cb = g.Za.zr(this, f);
            a.push(e)
        } else if ("variables_get" == this.type || "variables_get_reporter" == this.type)
            c = {
                text: g.i.RENAME_VARIABLE,
                enabled: !0,
                cb: g.ya.$.xG(this)
            },
            f = z(this, "VAR").yd(),
            e = {
                text: g.i.DELETE_VARIABLE.replace("%1", f),
                enabled: !0,
                cb: g.ya.$.ME(this)
            },
            a.unshift(c),
            a.unshift(e)
    }
};
g.ya.$.xG = function(a) {
    return function() {
        var c = a.u
          , d = z(a, "VAR").hd();
        g.$.nt(c, d)
    }
}
;
g.ya.$.ME = function(a) {
    return function() {
        var c = a.u
          , d = z(a, "VAR").hd();
        c.Bh(d.La());
        Rc(c)
    }
}
;
g.ma.ht("contextMenu_variableSetterGetter", g.ya.$.GE);
g.j.BC = {};
g.j.lists_create_empty = function() {
    return ["[]", g.j.Yl]
}
;
g.j.lists_create_with = function(a) {
    for (var c = Array(a.Zd), d = 0; d < a.Zd; d++)
        c[d] = X(g.j, a, "ADD" + d, g.j.hb) || "null";
    return ["[" + c.join(", ") + "]", g.j.Yl]
}
;
g.j.lists_repeat = function(a) {
    var c = Y("listsRepeat", ["function " + g.j.Xe + "(value, n) {", "  var array = [];", "  for (var i = 0; i < n; i++) {", "    array[i] = value;", "  }", "  return array;", "}"])
      , d = X(g.j, a, "ITEM", g.j.hb) || "null";
    a = X(g.j, a, "NUM", g.j.hb) || "0";
    return [c + "(" + d + ", " + a + ")", g.j.ub]
}
;
g.j.lists_length = function(a) {
    return [(X(g.j, a, "VALUE", g.j.fc) || "[]") + ".length", g.j.fc]
}
;
g.j.lists_isEmpty = function(a) {
    return ["!" + (X(g.j, a, "VALUE", g.j.fc) || "[]") + ".length", g.j.Pn]
}
;
g.j.lists_indexOf = function(a) {
    var c = "FIRST" == C(a, "END") ? "indexOf" : "lastIndexOf"
      , d = X(g.j, a, "FIND", g.j.hb) || "''";
    c = (X(g.j, a, "VALUE", g.j.fc) || "[]") + "." + c + "(" + d + ")";
    return a.u.options.Sh ? [c + " + 1", g.j.Ei] : [c, g.j.ub]
}
;
g.j.lists_getIndex = function(a) {
    var c = C(a, "MODE") || "GET"
      , d = C(a, "WHERE") || "FROM_START"
      , e = X(g.j, a, "VALUE", "RANDOM" == d ? g.j.hb : g.j.fc) || "[]";
    switch (d) {
    case "FIRST":
        if ("GET" == c)
            return [e + "[0]", g.j.fc];
        if ("GET_REMOVE" == c)
            return [e + ".shift()", g.j.fc];
        if ("REMOVE" == c)
            return e + ".shift();\n";
        break;
    case "LAST":
        if ("GET" == c)
            return [e + ".slice(-1)[0]", g.j.fc];
        if ("GET_REMOVE" == c)
            return [e + ".pop()", g.j.fc];
        if ("REMOVE" == c)
            return e + ".pop();\n";
        break;
    case "FROM_START":
        a = g.j.Eg(a, "AT");
        if ("GET" == c)
            return [e + "[" + a + "]", g.j.fc];
        if ("GET_REMOVE" == c)
            return [e + ".splice(" + a + ", 1)[0]", g.j.ub];
        if ("REMOVE" == c)
            return e + ".splice(" + a + ", 1);\n";
        break;
    case "FROM_END":
        a = g.j.Eg(a, "AT", 1, !0);
        if ("GET" == c)
            return [e + ".slice(" + a + ")[0]", g.j.ub];
        if ("GET_REMOVE" == c)
            return [e + ".splice(" + a + ", 1)[0]", g.j.ub];
        if ("REMOVE" == c)
            return e + ".splice(" + a + ", 1);";
        break;
    case "RANDOM":
        e = Y("listsGetRandomItem", ["function " + g.j.Xe + "(list, remove) {", "  var x = Math.floor(Math.random() * list.length);", "  if (remove) {", "    return list.splice(x, 1)[0];", "  } else {", "    return list[x];", "  }", "}"]) + "(" + e + ", " + ("GET" != c) + ")";
        if ("GET" == c || "GET_REMOVE" == c)
            return [e, g.j.ub];
        if ("REMOVE" == c)
            return e + ";\n"
    }
    throw Error("Unhandled combination (lists_getIndex).");
}
;
g.j.lists_setIndex = function(a) {
    function c() {
        if (d.match(/^\w+$/))
            return "";
        var k = M(g.j.vb, "tmpList", g.hc)
          , l = "var " + k + " = " + d + ";\n";
        d = k;
        return l
    }
    var d = X(g.j, a, "LIST", g.j.fc) || "[]"
      , e = C(a, "MODE") || "GET"
      , f = C(a, "WHERE") || "FROM_START"
      , h = X(g.j, a, "TO", g.j.fh) || "null";
    switch (f) {
    case "FIRST":
        if ("SET" == e)
            return d + "[0] = " + h + ";\n";
        if ("INSERT" == e)
            return d + ".unshift(" + h + ");\n";
        break;
    case "LAST":
        if ("SET" == e)
            return a = c(),
            a + (d + "[" + d + ".length - 1] = " + h + ";\n");
        if ("INSERT" == e)
            return d + ".push(" + h + ");\n";
        break;
    case "FROM_START":
        f = g.j.Eg(a, "AT");
        if ("SET" == e)
            return d + "[" + f + "] = " + h + ";\n";
        if ("INSERT" == e)
            return d + ".splice(" + f + ", 0, " + h + ");\n";
        break;
    case "FROM_END":
        f = g.j.Eg(a, "AT", 1, !1, g.j.Zl);
        a = c();
        if ("SET" == e)
            return a + (d + "[" + d + ".length - " + f + "] = " + h + ";\n");
        if ("INSERT" == e)
            return a + (d + ".splice(" + d + ".length - " + f + ", 0, " + h + ");\n");
        break;
    case "RANDOM":
        a = c();
        f = M(g.j.vb, "tmpX", g.hc);
        a += "var " + f + " = Math.floor(Math.random() * " + d + ".length);\n";
        if ("SET" == e)
            return a + (d + "[" + f + "] = " + h + ";\n");
        if ("INSERT" == e)
            return a + (d + ".splice(" + f + ", 0, " + h + ");\n")
    }
    throw Error("Unhandled combination (lists_setIndex).");
}
;
g.j.BC.AI = function(a, c, d) {
    return "FIRST" == c ? "0" : "FROM_END" == c ? a + ".length - 1 - " + d : "LAST" == c ? a + ".length - 1" : d
}
;
g.j.lists_getSublist = function(a) {
    var c = X(g.j, a, "LIST", g.j.fc) || "[]"
      , d = C(a, "WHERE1")
      , e = C(a, "WHERE2");
    if ("FIRST" == d && "LAST" == e)
        c += ".slice(0)";
    else if (c.match(/^\w+$/) || "FROM_END" != d && "FROM_START" == e) {
        switch (d) {
        case "FROM_START":
            var f = g.j.Eg(a, "AT1");
            break;
        case "FROM_END":
            f = g.j.Eg(a, "AT1", 1, !1, g.j.Zl);
            f = c + ".length - " + f;
            break;
        case "FIRST":
            f = "0";
            break;
        default:
            throw Error("Unhandled option (lists_getSublist).");
        }
        switch (e) {
        case "FROM_START":
            a = g.j.Eg(a, "AT2", 1);
            break;
        case "FROM_END":
            a = g.j.Eg(a, "AT2", 0, !1, g.j.Zl);
            a = c + ".length - " + a;
            break;
        case "LAST":
            a = c + ".length";
            break;
        default:
            throw Error("Unhandled option (lists_getSublist).");
        }
        c = c + ".slice(" + f + ", " + a + ")"
    } else {
        f = g.j.Eg(a, "AT1");
        a = g.j.Eg(a, "AT2");
        var h = g.j.BC.AI
          , k = {
            FIRST: "First",
            LAST: "Last",
            FROM_START: "FromStart",
            FROM_END: "FromEnd"
        };
        c = Y("subsequence" + k[d] + k[e], ["function " + g.j.Xe + "(sequence" + ("FROM_END" == d || "FROM_START" == d ? ", at1" : "") + ("FROM_END" == e || "FROM_START" == e ? ", at2" : "") + ") {", "  var start = " + h("sequence", d, "at1") + ";", "  var end = " + h("sequence", e, "at2") + " + 1;", "  return sequence.slice(start, end);", "}"]) + "(" + c + ("FROM_END" == d || "FROM_START" == d ? ", " + f : "") + ("FROM_END" == e || "FROM_START" == e ? ", " + a : "") + ")"
    }
    return [c, g.j.ub]
}
;
g.j.lists_sort = function(a) {
    var c = X(g.j, a, "LIST", g.j.ub) || "[]"
      , d = "1" === C(a, "DIRECTION") ? 1 : -1;
    a = C(a, "TYPE");
    var e = Y("listsGetSortCompare", ["function " + g.j.Xe + "(type, direction) {", "  var compareFuncs = {", '    "NUMERIC": function(a, b) {', "        return Number(a) - Number(b); },", '    "TEXT": function(a, b) {', "        return a.toString() > b.toString() ? 1 : -1; },", '    "IGNORE_CASE": function(a, b) {', "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },", "  };", "  var compare = compareFuncs[type];", "  return function(a, b) { return compare(a, b) * direction; }", "}"]);
    return [c + ".slice().sort(" + e + '("' + a + '", ' + d + "))", g.j.ub]
}
;
g.j.lists_split = function(a) {
    var c = X(g.j, a, "INPUT", g.j.fc)
      , d = X(g.j, a, "DELIM", g.j.hb) || "''";
    a = C(a, "MODE");
    if ("SPLIT" == a)
        c || (c = "''"),
        a = "split";
    else if ("JOIN" == a)
        c || (c = "[]"),
        a = "join";
    else
        throw Error("Unknown mode: " + a);
    return [c + "." + a + "(" + d + ")", g.j.ub]
}
;
g.j.lists_reverse = function(a) {
    return [(X(g.j, a, "LIST", g.j.ub) || "[]") + ".slice().reverse()", g.j.ub]
}
;
g.j.jJ = {};
g.j.controls_if = function(a) {
    var c = 0
      , d = "";
    g.j.le && (d += V(g.j.le, a));
    do {
        var e = X(g.j, a, "IF" + c, g.j.hb) || "false";
        var f = pf(a, "DO" + c);
        g.j.dd && (f = W(V(g.j.dd, a), g.j.Gd) + f);
        d += (0 < c ? " else " : "") + "if (" + e + ") {\n" + f + "}";
        ++c
    } while (x(a, "IF" + c));
    if (x(a, "ELSE") || g.j.dd)
        f = pf(a, "ELSE"),
        g.j.dd && (f = W(V(g.j.dd, a), g.j.Gd) + f),
        d += " else {\n" + f + "}";
    return d + "\n"
}
;
g.j.controls_ifelse = g.j.controls_if;
g.j.logic_compare = function(a) {
    var c = {
        EQ: "==",
        NEQ: "!=",
        LT: "<",
        LTE: "<=",
        GT: ">",
        GTE: ">="
    }[C(a, "OP")]
      , d = "==" == c || "!=" == c ? g.j.bA : g.j.eG
      , e = X(g.j, a, "A", d) || "0";
    a = X(g.j, a, "B", d) || "0";
    return [e + " " + c + " " + a, d]
}
;
g.j.logic_operation = function(a) {
    var c = "AND" == C(a, "OP") ? "&&" : "||"
      , d = "&&" == c ? g.j.su : g.j.tu
      , e = X(g.j, a, "A", d);
    a = X(g.j, a, "B", d);
    if (e || a) {
        var f = "&&" == c ? "true" : "false";
        e || (e = f);
        a || (a = f)
    } else
        a = e = "false";
    return [e + " " + c + " " + a, d]
}
;
g.j.logic_negate = function(a) {
    var c = g.j.Pn;
    return ["!" + (X(g.j, a, "BOOL", c) || "true"), c]
}
;
g.j.logic_boolean = function(a) {
    return ["TRUE" == C(a, "BOOL") ? "true" : "false", g.j.Yl]
}
;
g.j.logic_ternary = function(a) {
    var c = X(g.j, a, "IF", g.j.Yq) || "false"
      , d = X(g.j, a, "THEN", g.j.Yq) || "null";
    a = X(g.j, a, "ELSE", g.j.Yq) || "null";
    return [c + " ? " + d + " : " + a, g.j.Yq]
}
;
g.j.lJ = {};
g.j.controls_repeat_ext = function(a) {
    var c = z(a, "TIMES") ? String(Number(C(a, "TIMES"))) : X(g.j, a, "TIMES", g.j.fh) || "0"
      , d = pf(a, "DO");
    d = qf(d, a);
    a = "";
    var e = M(g.j.vb, "count", g.hc)
      , f = c;
    c.match(/^\w+$/) || g.qj(c) || (f = M(g.j.vb, "repeat_end", g.hc),
    a += "var " + f + " = " + c + ";\n");
    return a + ("for (var " + e + " = 0; " + e + " < " + f + "; " + e + "++) {\n" + d + "}\n")
}
;
g.j.controls_repeat = g.j.controls_repeat_ext;
g.j.controls_whileUntil = function(a) {
    var c = "UNTIL" == C(a, "MODE")
      , d = X(g.j, a, "BOOL", c ? g.j.Pn : g.j.hb) || "false"
      , e = pf(a, "DO");
    e = qf(e, a);
    c && (d = "!" + d);
    return "while (" + d + ") {\n" + e + "}\n"
}
;
g.j.controls_for = function(a) {
    var c = g.j.vb.gd(C(a, "VAR"), g.hc)
      , d = X(g.j, a, "FROM", g.j.fh) || "0"
      , e = X(g.j, a, "TO", g.j.fh) || "0"
      , f = X(g.j, a, "BY", g.j.fh) || "1"
      , h = pf(a, "DO");
    h = qf(h, a);
    if (g.qj(d) && g.qj(e) && g.qj(f)) {
        var k = Number(d) <= Number(e);
        a = "for (" + c + " = " + d + "; " + c + (k ? " <= " : " >= ") + e + "; " + c;
        c = Math.abs(Number(f));
        a = (1 == c ? a + (k ? "++" : "--") : a + ((k ? " += " : " -= ") + c)) + (") {\n" + h + "}\n")
    } else
        a = "",
        k = d,
        d.match(/^\w+$/) || g.qj(d) || (k = M(g.j.vb, c + "_start", g.hc),
        a += "var " + k + " = " + d + ";\n"),
        d = e,
        e.match(/^\w+$/) || g.qj(e) || (d = M(g.j.vb, c + "_end", g.hc),
        a += "var " + d + " = " + e + ";\n"),
        e = M(g.j.vb, c + "_inc", g.hc),
        a += "var " + e + " = ",
        a = g.qj(f) ? a + (Math.abs(f) + ";\n") : a + ("Math.abs(" + f + ");\n"),
        a = a + ("if (" + k + " > " + d + ") {\n") + (g.j.Gd + e + " = -" + e + ";\n"),
        a += "}\n",
        a += "for (" + c + " = " + k + "; " + e + " >= 0 ? " + c + " <= " + d + " : " + c + " >= " + d + "; " + c + " += " + e + ") {\n" + h + "}\n";
    return a
}
;
g.j.controls_forEach = function(a) {
    var c = g.j.vb.gd(C(a, "VAR"), g.hc)
      , d = X(g.j, a, "LIST", g.j.fh) || "[]"
      , e = pf(a, "DO");
    e = qf(e, a);
    a = "";
    var f = d;
    d.match(/^\w+$/) || (f = M(g.j.vb, c + "_list", g.hc),
    a += "var " + f + " = " + d + ";\n");
    d = M(g.j.vb, c + "_index", g.hc);
    e = g.j.Gd + c + " = " + f + "[" + d + "];\n" + e;
    return a + ("for (var " + d + " in " + f + ") {\n" + e + "}\n")
}
;
g.j.controls_flow_statements = function(a) {
    var c = "";
    g.j.le && (c += V(g.j.le, a));
    g.j.dd && (c += V(g.j.dd, a));
    if (g.j.le) {
        var d = g.ya.af.Fq.XB(a);
        d && !d.Pj && (c += V(g.j.le, d))
    }
    switch (C(a, "FLOW")) {
    case "BREAK":
        return c + "break;\n";
    case "CONTINUE":
        return c + "continue;\n"
    }
    throw Error("Unknown flow statement.");
}
;
g.j.YJ = {};
g.j.procedures_defreturn = function(a) {
    var c = g.j.vb.gd(C(a, "NAME"), g.bm)
      , d = "";
    g.j.le && (d += V(g.j.le, a));
    g.j.dd && (d += V(g.j.dd, a));
    d && (d = W(d, g.j.Gd));
    var e = "";
    g.j.Rq && (e = W(V(g.j.Rq, a), g.j.Gd));
    var f = pf(a, "STACK")
      , h = X(g.j, a, "RETURN", g.j.hb) || ""
      , k = "";
    f && h && (k = d);
    h && (h = g.j.Gd + "return " + h + ";\n");
    for (var l = [], m = a.Hh(), n = 0; n < m.length; n++)
        l[n] = g.j.vb.gd(m[n], g.hc);
    d = "function " + c + "(" + l.join(", ") + ") {\n" + d + e + f + k + h + "}";
    d = g.j.rt(a, d);
    g.j.wm["%" + c] = d;
    return null
}
;
g.j.procedures_defnoreturn = g.j.procedures_defreturn;
g.j.procedures_callreturn = function(a) {
    for (var c = g.j.vb.gd(C(a, "NAME"), g.bm), d = [], e = a.Hh(), f = 0; f < e.length; f++)
        d[f] = X(g.j, a, "ARG" + f, g.j.hb) || "null";
    return [c + "(" + d.join(", ") + ")", g.j.ub]
}
;
g.j.procedures_callnoreturn = function(a) {
    return g.j.procedures_callreturn(a)[0] + ";\n"
}
;
g.j.procedures_ifreturn = function(a) {
    var c = "if (" + (X(g.j, a, "CONDITION", g.j.hb) || "false") + ") {\n";
    g.j.dd && (c += W(V(g.j.dd, a), g.j.Gd));
    a.ij ? (a = X(g.j, a, "VALUE", g.j.hb) || "null",
    c += g.j.Gd + "return " + a + ";\n") : c += g.j.Gd + "return;\n";
    return c + "}\n"
}
;
g.j.eL = {};
g.j.variables_get = function(a) {
    return [g.j.vb.gd(C(a, "VAR"), g.hc), g.j.Yl]
}
;
g.j.variables_set = function(a) {
    var c = X(g.j, a, "VALUE", g.j.fh) || "0";
    return g.j.vb.gd(C(a, "VAR"), g.hc) + " = " + c + ";\n"
}
;
for (var uf in g.ya.rd.St)
    g.O.controls_if[uf] = g.ya.rd.St[uf];
g.O.controls_if.S = function() {
    this.Mb = g.i.CONTROLS_IF_HELPURL;
    this.Wc(g.i.LOGIC_HUE);
    G(H(this, "IF0").Pb("Boolean"), "if (");
    G(I(this), ") {");
    gc(this, "DO0");
    G(I(this, "TAIL"), "}");
    this.Xc(!0);
    this.Se(!0);
    this.Re(!0);
    this.Nj(new g.ec(["controls_if_elseif", "controls_if_else"]));
    g.ya.rd.mz.apply(this)
}
;
g.O.controls_if.Zc = function() {
    x(this, "ELSE") && (this.xb("ELSEMSG"),
    this.xb("ELSE"));
    for (var a = 1; x(this, "IF" + a); )
        this.xb("IF" + a),
        this.xb("TAIL" + a),
        this.xb("DO" + a),
        a++;
    for (a = 1; a <= this.qe; a++)
        G(H(this, "IF" + a).Pb("Boolean"), "} else if ("),
        G(I(this, "TAIL" + a), ") {"),
        gc(this, "DO" + a);
    this.pf && (G(I(this, "ELSEMSG"), "} else {"),
    gc(this, "ELSE"));
    kc(this, "TAIL", null)
}
;
g.O.logic_compare.S = function() {
    this.Mb = g.i.LOGIC_COMPARE_HELPURL;
    this.Wc(g.i.LOGIC_HUE);
    this.fe(!0, "Boolean");
    H(this, "A");
    G(H(this, "B"), new g.gb([["==", "EQ"], ["!=", "NEQ"], ["<", "LT"], ["<=", "LTE"], [">", "GT"], [">=", "GTE"]]), "OP");
    this.Xc(!0);
    var a = this;
    this.ab(function() {
        var c = C(a, "OP");
        return {
            EQ: g.i.LOGIC_COMPARE_TOOLTIP_EQ,
            NEQ: g.i.LOGIC_COMPARE_TOOLTIP_NEQ,
            LT: g.i.LOGIC_COMPARE_TOOLTIP_LT,
            LTE: g.i.LOGIC_COMPARE_TOOLTIP_LTE,
            GT: g.i.LOGIC_COMPARE_TOOLTIP_GT,
            GTE: g.i.LOGIC_COMPARE_TOOLTIP_GTE
        }[c]
    });
    this.Xm = [null, null]
}
;
g.i.LOGIC_OPERATION_AND = "&&";
g.i.LOGIC_OPERATION_OR = "||";
g.i.LOGIC_NEGATE_TITLE = "! %1";
g.i.LOGIC_BOOLEAN_TRUE = "true";
g.i.LOGIC_BOOLEAN_FALSE = "false";
g.O.controls_whileUntil.S = function() {
    J(this, {
        message0: "while ( %1 ) { %2 %3 }",
        args0: [{
            type: "input_value",
            name: "BOOL",
            check: "Boolean"
        }, {
            type: "input_dummy"
        }, {
            type: "input_statement",
            name: "DO"
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        colour: g.i.LOOPS_HUE,
        tooltip: g.i.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
        helpUrl: g.i.CONTROLS_WHILEUNTIL_HELPURL
    })
}
;
g.O.controls_for.S = function() {
    J(this, {
        message0: "for (var %1 = %2;  %3 < %4;  %5 += 1) { %6 %7 }",
        args0: [{
            type: "field_variable",
            name: "VAR",
            variable: null
        }, {
            type: "input_value",
            name: "FROM",
            check: "Number",
            align: "RIGHT"
        }, {
            type: "field_label",
            name: "VAR1",
            text: "?"
        }, {
            type: "input_value",
            name: "TO",
            check: "Number",
            align: "RIGHT"
        }, {
            type: "field_label",
            name: "VAR2",
            text: "?"
        }, {
            type: "input_dummy"
        }, {
            type: "input_statement",
            name: "DO"
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        colour: g.i.LOOPS_HUE,
        helpUrl: g.i.CONTROLS_FOR_HELPURL
    });
    var a = this;
    this.ab(function() {
        return g.i.CONTROLS_FOR_TOOLTIP.replace("%1", C(a, "VAR"))
    })
}
;
g.O.controls_for.onchange = function() {
    var a = z(this, "VAR").yd();
    ec(this, a, "VAR1");
    ec(this, a, "VAR2")
}
;
g.j.controls_for = function(a) {
    var c = g.j.vb.gd(C(a, "VAR"), g.$.nu)
      , d = X(g.j, a, "FROM", g.j.fh) || "0"
      , e = X(g.j, a, "TO", g.j.fh) || "0"
      , f = pf(a, "DO");
    f = qf(f, a.id);
    return "for (var " + c + " = " + d + "; " + c + " < " + e + "; " + c + " += 1) {\n" + f + "}\n"
}
;
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break ;";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue ;";
g.O.math_arithmetic.S = function() {
    J(this, {
        message0: "%1 %2 %3",
        args0: [{
            type: "input_value",
            name: "A",
            check: "Number"
        }, {
            type: "field_dropdown",
            name: "OP",
            options: [["+", "ADD"], ["-", "MINUS"], ["*", "MULTIPLY"], ["/", "DIVIDE"]]
        }, {
            type: "input_value",
            name: "B",
            check: "Number"
        }],
        inputsInline: !0,
        output: "Number",
        colour: g.i.MATH_HUE,
        helpUrl: g.i.MATH_ARITHMETIC_HELPURL
    });
    var a = this;
    this.ab(function() {
        var c = C(a, "OP");
        return {
            ADD: g.i.MATH_ARITHMETIC_TOOLTIP_ADD,
            MINUS: g.i.MATH_ARITHMETIC_TOOLTIP_MINUS,
            MULTIPLY: g.i.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
            DIVIDE: g.i.MATH_ARITHMETIC_TOOLTIP_DIVIDE
        }[c]
    })
}
;
g.O.math_change.S = function() {
    J(this, {
        message0: "%1 += %2;",
        args0: [{
            type: "field_variable",
            name: "VAR",
            variable: "name"
        }, {
            type: "input_value",
            name: "DELTA",
            check: "Number"
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        colour: g.i.VARIABLES_HUE,
        helpUrl: g.i.MATH_CHANGE_HELPURL
    });
    var a = this;
    this.ab(function() {
        return g.i.MATH_CHANGE_TOOLTIP.replace("%1", z(a, "VAR").hd().name)
    })
}
;
g.j.math_change = function(a) {
    var c = X(g.j, a, "DELTA", g.j.Ei) || "0";
    return g.j.vb.gd(C(a, "VAR"), g.$.nu) + " += " + c + ";\n"
}
;
g.O.math_random_int.S = function() {
    J(this, {
        message0: "%1(%2,%3)",
        args0: ["Math.randomInt", {
            type: "input_value",
            name: "FROM",
            check: "Number"
        }, {
            type: "input_value",
            name: "TO",
            check: "Number"
        }],
        inputsInline: !0,
        output: "Number",
        colour: g.i.MATH_HUE,
        tooltip: g.i.MATH_RANDOM_INT_TOOLTIP,
        helpUrl: g.i.MATH_RANDOM_INT_HELPURL
    })
}
;
g.i.MATH_RANDOM_FLOAT_TITLE_RANDOM = "Math.random  (  )";
g.i.LISTS_CREATE_EMPTY_TITLE = "[ ]";
g.i.LISTS_CREATE_WITH_INPUT_WITH = "[";
g.O.lists_create_with.Zc = function() {
    x(this, "TAIL") && this.xb("TAIL");
    this.Zd && x(this, "EMPTY") ? this.xb("EMPTY") : this.Zd || x(this, "EMPTY") || G(I(this, "EMPTY"), g.i.LISTS_CREATE_EMPTY_TITLE);
    for (var a = 0; a < this.Zd; a++)
        if (!x(this, "ADD" + a)) {
            var c = H(this, "ADD" + a);
            0 == a ? G(c, g.i.LISTS_CREATE_WITH_INPUT_WITH) : G(c, ",")
        }
    for (; x(this, "ADD" + a); )
        this.xb("ADD" + a),
        a++;
    this.Zd && G(I(this, "TAIL"), "]")
}
;
g.O.lists_getIndex = {
    S: function() {
        J(this, {
            message0: "%1[%2]",
            args0: [{
                type: "input_value",
                name: "VALUE",
                check: "Array"
            }, {
                type: "input_value",
                name: "AT",
                check: "Number"
            }],
            inputsInline: !0,
            output: null,
            colour: g.i.LISTS_HUE,
            tooltip: g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM + g.i.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"),
            helpUrl: g.i.LISTS_GET_INDEX_HELPURL
        })
    }
};
g.O.lists_setIndex = {
    S: function() {
        J(this, {
            message0: "%1[%2] = %3;",
            args0: [{
                type: "input_value",
                name: "LIST",
                check: "Array"
            }, {
                type: "input_value",
                name: "AT",
                check: "Number"
            }, {
                type: "input_value",
                name: "TO"
            }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            colour: g.i.LISTS_HUE,
            tooltip: g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM + g.i.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"),
            helpUrl: g.i.LISTS_SET_INDEX_HELPURL
        })
    }
};
g.i.LISTS_LENGTH_TITLE = "%1 . length";
g.O.variables_get.S = function() {
    this.Mb = g.i.VARIABLES_GET_HELPURL;
    this.Wc(g.i.VARIABLES_HUE);
    G(I(this), new g.Fd("name"), "VAR");
    this.fe(!0);
    this.ab(g.i.VARIABLES_GET_TOOLTIP)
}
;
g.O.variables_set.S = function() {
    this.Mb = g.i.VARIABLES_SET_HELPURL;
    this.Wc(g.i.VARIABLES_HUE);
    G(G(G(H(this, "VALUE"), "var"), new g.Fd("name"), "VAR"), "=");
    G(I(this), ";");
    this.Xc(!0);
    this.Se(!0);
    this.Re(!0);
    this.ab(g.i.VARIABLES_SET_TOOLTIP)
}
;
g.O.procedures_defnoreturn.S = function() {
    var a = new g.Kc("",g.Da.kt);
    G(G(G(G(G(I(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
    this.Tg(!0);
    G(I(this), "}");
    this.Nj(new g.ec(["procedures_mutatorarg"]));
    g.i.PROCEDURES_DEFNORETURN_COMMENT && this.Sg(g.i.PROCEDURES_DEFNORETURN_COMMENT);
    this.Wc(g.i.PROCEDURES_HUE);
    this.ab(g.i.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.Mb = g.i.PROCEDURES_DEFNORETURN_HELPURL;
    this.Na = [];
    this.jc = [];
    this.Tg(!0);
    this.Zf = null
}
;
g.O.procedures_defreturn.S = function() {
    var a = new g.Kc("",g.Da.kt);
    G(G(G(G(G(I(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
    G(cc(H(this, "RETURN"), g.tq), "return");
    G(I(this), "}");
    this.Nj(new g.ec(["procedures_mutatorarg"]));
    g.i.PROCEDURES_DEFRETURN_COMMENT && this.Sg(g.i.PROCEDURES_DEFRETURN_COMMENT);
    this.Wc(g.i.PROCEDURES_HUE);
    this.ab(g.i.PROCEDURES_DEFRETURN_TOOLTIP);
    this.Mb = g.i.PROCEDURES_DEFRETURN_HELPURL;
    this.Na = [];
    this.jc = [];
    this.Tg(!0);
    this.Zf = null
}
;
g.i.PROCEDURES_BEFORE_PARAMS = "";
g.O.procedures_callnoreturn.S = function() {
    this.Mb = g.i.PROCEDURES_CALLNORETURN_HELPURL;
    this.Wc(g.i.PROCEDURES_HUE);
    G(G(I(this), "", "NAME"), "(");
    G(I(this, "TAIL"), ");");
    this.Xc(!0);
    this.Se(!0);
    this.Re(!0);
    this.ab(g.i.PROCEDURES_CALLNORETURN_TOOLTIP);
    this.Na = [];
    this.Wh = {}
}
;
g.O.procedures_callnoreturn.Zc = function() {
    for (var a = 0; a < this.Na.length; a++)
        if (!x(this, "ARG" + a)) {
            new g.je(this.Na[a]);
            var c = H(this, "ARG" + a);
            0 < a && G(c, ",");
            c.S()
        }
    for (; x(this, "ARG" + a); )
        this.xb("ARG" + a),
        a++;
    kc(this, "TAIL", null)
}
;
g.O.procedures_callreturn.S = function() {
    this.Mb = g.i.PROCEDURES_CALLRETURN_HELPURL;
    this.Wc(g.i.PROCEDURES_HUE);
    G(G(I(this), "", "NAME"), "(");
    G(I(this, "TAIL"), ")");
    this.Xc(!0);
    this.fe(!0);
    this.ab(g.i.PROCEDURES_CALLRETURN_TOOLTIP);
    this.Na = [];
    this.Wh = {}
}
;
g.O.procedures_callreturn.Zc = g.O.procedures_callnoreturn.Zc;
delete g.O.procedures_ifreturn;
g.O.pond_scan = {
    S: function() {
        J(this, {
            message0: "%1(%2)",
            args0: ["scan", {
                type: "input_value",
                name: "DEGREE",
                check: ["Number", "Angle"]
            }],
            inputsInline: !0,
            output: "Number",
            colour: 290,
            tooltip: R("Pond_scanTooltip")
        })
    }
};
g.j.pond_scan = function(a) {
    return ["scan(" + (X(g.j, a, "DEGREE", g.j.hb) || 0) + ")", g.j.ub]
}
;
g.O.pond_cannon = {
    S: function() {
        J(this, {
            message0: "%1(%2, %3);",
            args0: ["cannon", {
                type: "input_value",
                name: "DEGREE",
                check: ["Number", "Angle"]
            }, {
                type: "input_value",
                name: "RANGE",
                check: "Number"
            }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: R("Pond_cannonTooltip")
        })
    }
};
g.j.pond_cannon = function(a) {
    var c = X(g.j, a, "DEGREE", g.j.aA) || 0;
    a = X(g.j, a, "RANGE", g.j.aA) || 0;
    return "cannon(" + c + ", " + a + ");\n"
}
;
g.O.pond_swim = {
    S: function() {
        J(this, {
            message0: "%1(%2);",
            args0: ["swim", {
                type: "input_value",
                name: "DEGREE",
                check: ["Number", "Angle"]
            }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: R("Pond_swimTooltip")
        })
    }
};
g.j.pond_swim = function(a) {
    return "swim(" + (X(g.j, a, "DEGREE", g.j.hb) || 0) + ");\n"
}
;
g.O.pond_stop = {
    S: function() {
        J(this, {
            message0: "%1(%2);",
            args0: ["stop", ""],
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: R("Pond_stopTooltip")
        })
    }
};
g.j.pond_stop = function() {
    return "stop();\n"
}
;
g.O.pond_health = {
    S: function() {
        J(this, {
            message0: "%1(%2)",
            args0: ["health", ""],
            output: "Number",
            colour: 290,
            tooltip: R("Pond_healthTooltip")
        })
    }
};
g.j.pond_health = function() {
    return ["health()", g.j.ub]
}
;
g.O.pond_speed = {
    S: function() {
        J(this, {
            message0: "%1(%2)",
            args0: ["speed", ""],
            output: "Number",
            colour: 290,
            tooltip: R("Pond_speedTooltip")
        })
    }
};
g.j.pond_speed = function() {
    return ["speed()", g.j.ub]
}
;
g.O.pond_getX = {
    S: function() {
        J(this, {
            message0: "%1(%2)",
            args0: ["getX", ""],
            output: "Number",
            colour: 290,
            tooltip: R("Pond_locXTooltip")
        })
    }
};
g.j.pond_getX = function() {
    return ["getX()", g.j.ub]
}
;
g.O.pond_getY = {
    S: function() {
        J(this, {
            message0: "%1(%2)",
            args0: ["getY", ""],
            output: "Number",
            colour: 290,
            tooltip: R("Pond_locYTooltip")
        })
    }
};
g.j.pond_getY = function() {
    return ["getY()", g.j.ub]
}
;
g.O.pond_log = {
    S: function() {
        J(this, {
            message0: "%1(%2);",
            args0: ["log", {
                type: "input_value",
                name: "VALUE"
            }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: R("Pond_logTooltip")
        })
    }
};
g.j.pond_log = function(a) {
    return "log(" + (X(g.j, a, "VALUE", g.j.hb) || "''") + ");\n"
}
;
g.O.pond_math_number = {
    S: function() {
        this.Mb = g.i.MATH_NUMBER_HELPURL;
        this.Wc(g.i.MATH_HUE);
        G(I(this, "DUMMY"), new g.Ed(0), "NUM");
        this.fe(!0, "Number");
        this.ab(g.i.MATH_NUMBER_TOOLTIP)
    },
    pb: function() {
        var a = document.createElement("mutation")
          , c = z(this, "NUM").constructor == g.ua;
        a.setAttribute("angle_field", c);
        return a
    },
    Wb: function(a) {
        a = "true" == a.getAttribute("angle_field");
        this.Sy(a)
    },
    onchange: function() {
        if (this.u && this.T.ta && this.T.ta.Vi) {
            var a = z(this, "NUM");
            -1 != this.T.ta.Vi.indexOf("Angle") ? a.constructor != g.ua && this.Sy(!0) : a.constructor != g.Ed && this.Sy(!1)
        }
    },
    Sy: function(a) {
        g.h.disable();
        var c = x(this, "DUMMY")
          , d = z(this, "NUM")
          , e = d.getValue();
        a ? ($b(c, "NUM"),
        d = new g.ua(""),
        G(c, d, "NUM"),
        d.setValue(e)) : ($b(c, "NUM"),
        G(c, new g.Ed(e), "NUM"));
        this.ra && this.Ia();
        g.h.enable()
    }
};
g.O.pond_math_single = {
    S: function() {
        J(this, {
            message0: "%1 (%2)",
            args0: [{
                type: "field_dropdown",
                name: "OP",
                options: [["Math.sqrt", "ROOT"], ["Math.abs", "ABS"], ["Math.sin_deg", "SIN"], ["Math.cos_deg", "COS"], ["Math.tan_deg", "TAN"], ["Math.asin_deg", "ASIN"], ["Math.acos_deg", "ACOS"], ["Math.atan_deg", "ATAN"]]
            }, {
                type: "input_value",
                name: "NUM",
                check: "Number"
            }],
            inputsInline: !0,
            output: "Number",
            colour: g.i.MATH_HUE,
            helpUrl: g.i.MATH_SINGLE_HELPURL
        });
        var a = this;
        this.ab(function() {
            var c = C(a, "OP");
            return {
                ROOT: g.i.MATH_SINGLE_TOOLTIP_ROOT,
                ABS: g.i.MATH_SINGLE_TOOLTIP_ABS,
                SIN: g.i.MATH_TRIG_TOOLTIP_SIN,
                COS: g.i.MATH_TRIG_TOOLTIP_COS,
                TAN: g.i.MATH_TRIG_TOOLTIP_TAN,
                ASIN: g.i.MATH_TRIG_TOOLTIP_ASIN,
                ACOS: g.i.MATH_TRIG_TOOLTIP_ACOS,
                ATAN: g.i.MATH_TRIG_TOOLTIP_ATAN
            }[c]
        })
    }
};
g.j.pond_math_single = function(a) {
    var c = C(a, "OP");
    a = X(g.j, a, "NUM", g.j.hb) || "0";
    switch (c) {
    case "ABS":
        c = "Math.abs(" + a + ")";
        break;
    case "ROOT":
        c = "Math.sqrt(" + a + ")";
        break;
    case "SIN":
        c = "Math.sin_deg(" + a + ")";
        break;
    case "COS":
        c = "Math.cos_deg(" + a + ")";
        break;
    case "TAN":
        c = "Math.tan_deg(" + a + ")";
        break;
    case "ASIN":
        c = "Math.asin_deg(" + a + ")";
        break;
    case "ACOS":
        c = "Math.acos_deg(" + a + ")";
        break;
    case "ATAN":
        c = "Math.atan_deg(" + a + ")";
        break;
    default:
        throw Error("Unknown math operator: " + c);
    }
    return [c, g.j.ub]
}
;
g.j.pond_math_number = g.j.math_number;
g.O.pond_loc_x = g.O.pond_getX;
g.j.pond_loc_x = g.j.pond_getX;
g.O.pond_loc_y = g.O.pond_getY;
g.j.pond_loc_y = g.j.pond_getY;
g.O.pond_controls_if = g.O.controls_if;
g.j.pond_controls_if = g.j.controls_if;
g.O.pond_loops_while = g.O.controls_whileUntil;
g.j.pond_loops_while = g.j.controls_whileUntil;
g.O.pond_math_arithmetic = g.O.math_arithmetic;
g.j.pond_math_arithmetic = g.j.math_arithmetic;
g.O.pond_math_change = g.O.math_change;
g.j.pond_math_change = g.j.math_change;
var vf = vf || {};
function wf(a, c) {
    function d() {}
    d.prototype = c.prototype;
    a.v = c.prototype;
    a.prototype = new d;
    a.prototype.constructor = a;
    a.BO = function(e, f, h) {
        return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2))
    }
}
if (!xf) {
    var xf, yf = "";
    "undefined" !== typeof navigator && navigator && "string" == typeof navigator.userAgent && (yf = navigator.userAgent);
    var zf = 0 == yf.indexOf("Opera");
    xf = {
        bP: {
            oM: "ScriptEngine"in window
        },
        zN: zf,
        Ze: !zf && -1 != yf.indexOf("MSIE"),
        uA: !zf && -1 != yf.indexOf("WebKit")
    }
}
if (!Af)
    var Af = {};
if (!Bf)
    var Bf = {};
if (!Cf)
    var Cf = {};
if (!Df)
    var Df = {};
if (!Ef)
    var Ef = {};
if (!Ff)
    var Ff = {};
var Gf = vf.HL ? {
    jP: !0
} : {};
function Hf() {
    throw Error("Do not instantiate directly");
}
Hf.prototype.cB = null;
Hf.prototype.toString = function() {
    return this.content
}
;
function If(a) {
    if (null != a)
        switch (a.cB) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
        }
    return null
}
function Jf() {
    Hf.call(this)
}
wf(Jf, Hf);
Jf.prototype.JH = Gf;
function Z(a) {
    return null != a && a.JH === Gf ? a : Kf(String(String(a)).replace(Lf, Mf), If(a))
}
var Kf = function(a) {
    function c() {}
    c.prototype = a.prototype;
    return function(d, e) {
        var f = new c;
        f.content = String(d);
        void 0 !== e && (f.cB = e);
        return f
    }
}(Jf)
  , Nf = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\v": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};
function Mf(a) {
    return Nf[a]
}
var Lf = /[\x00\x22\x26\x27\x3c\x3e]/g;
function Of() {
    var a = {
        lang: pd,
        UI: rd
    }
      , c = '<table width="100%"><tr><td><h1><span id="title">' + ((a.UI ? '<a href="index.html?lang=' + Z(a.lang) + '">' : '<a href="./?lang=' + Z(a.lang) + '">') + "Blockly Games</a> : " + Z("Pond") + "</span>");
    if (a.level) {
        for (var d = " &nbsp; ", e = a.oJ + 1, f = 1; f < e; f++) {
            var h = "?lang=" + Z(a.lang) + "&level=" + Z(f);
            d += " " + (f == a.level ? '<span class="level_number level_done" id="level' + Z(f) + '">' + Z(f) + "</span>" : f == a.oJ ? '<a class="level_number" id="level' + Z(f) + '" href="' + Z(h) + '">' + Z(f) + "</a>" : '<a class="level_dot" id="level' + Z(f) + '" href="' + Z(h) + '"></a>')
        }
        a = d
    } else
        a = "";
    return '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\n\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Pond_scanTooltip">Scan for enemies. Specify a direction (0-360). \\nReturns the distance to the closest enemy in that \\ndirection. Returns Infinity if no enemy found. </span><span id="Pond_cannonTooltip">Fire the cannon. Specify a direction (0-360) and \\na range (0-70). </span><span id="Pond_swimTooltip">Swim forward. Specify a direction (0-360). </span><span id="Pond_stopTooltip">Stop swimming. Player will slow to a stop. </span><span id="Pond_healthTooltip">Returns the player\'s current health (0 is dead, \\n100 is healthy). </span><span id="Pond_speedTooltip">Returns the current speed of the player (0 is \\nstopped, 100 is full speed). </span><span id="Pond_locXTooltip">Returns the X coordinate of the player (0 is the \\nleft edge, 100 is the right edge). </span><span id="Pond_locYTooltip">Returns the Y coordinate of the player (0 is the \\nbottom edge, 100 is the top edge). </span><span id="Pond_logTooltip">Prints a number to your browser\'s console.</span></div><div style="display: none"><span id="Pond_myName">Player</span></div>' + (c + a + '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Display the language documentation.">Documentation</button></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div><div id="tabarea"><div id="editorBar" class="tab-bar"><div><select id="avatar-select"></select></div><div class="tab tab-selected">Blocks</div><div class="tab">JavaScript</div></div><div class="tab-bar-clear"></div><div id="blockly"></div><div id="editor"></div></div><xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Pond"><block type="pond_cannon"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">70</field></shadow></value></block><block type="pond_scan"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block><block type="pond_swim"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block><block type="pond_stop"></block><block type="pond_getX"></block><block type="pond_getY"></block><block type="pond_speed"></block><block type="pond_health"></block><block type="pond_log"><value name="VALUE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">123</field></shadow></value></block></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_boolean"></block></category><category name="Loops"><block type="controls_whileUntil"></block></category><category name="Math"><block type="pond_math_number"><mutation angle_field="false"></mutation></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="pond_math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_random_float"></block></category><sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category></xml><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>')
}
;var Dd = "pond-duck"
  , Pf = null
  , Qf = !0
  , Rf = U = null;
function Sf() {
    Qf = !0;
    var a = document.getElementById("avatar-select")
      , c = a.selectedIndex;
    U != T.$c[c] && (We(),
    U = T.$c[c],
    a.style.backgroundColor = He[U.Ht % He.length],
    void 0 !== U.IA && (w && w.I(),
    a = {
        rtl: !1,
        trashcan: !0,
        readOnly: !U.wB,
        zoom: {
            controls: !0,
            wheel: !0
        }
    },
    (c = document.getElementById("toolbox")) && (a.toolbox = c),
    a.media = "third-party/blockly/media/",
    a.oneBasedIndex = !1,
    w = g.Sk("blockly", a),
    D(w, Sd),
    a = g.P.Ff(U.IA),
    g.P.Dk(a, w),
    a = w,
    a.Al.length = 0,
    a.Cp.length = 0,
    g.h.BH(),
    Tf(!1),
    Uf(0)),
    void 0 !== U.xC && (Nd.setValue(U.xC, -1),
    Tf(!0),
    Uf(1)),
    Nd.setReadOnly(!U.wB),
    Qf = !1)
}
function Uf(a) {
    for (var c = 0; c < Pf.length; c++)
        a == c ? g.g.o.Fa(Pf[c], "tab-selected") : g.g.o.dc(Pf[c], "tab-selected");
    var d = ["blockly", "editor"];
    c = 0;
    for (var e; e = d[c]; c++)
        document.getElementById(e).style.visibility = c == a ? "visible" : "hidden";
    g.Fc(!1);
    document.getElementById("docsButton").disabled = !1;
    td = 0 == a ? 11 : 12;
    Te && (document.getElementById("frameDocs").src = "pond/docs.html?lang=" + pd + "&mode=" + td);
    Qf || Od || 1 != a || (a = Xe(),
    Qf = !0,
    Nd.setValue(a, -1),
    Qf = !1)
}
function Vf() {
    if (!Qf) {
        var a = Od ? Nd.getValue() : Xe();
        Od ? a.trim() || (w.clear(),
        Tf(!1)) : !w.xc(!1).length || confirm(R("Games_breakLink")) ? Tf(!0) : (Qf = !0,
        setTimeout(function() {
            Nd.setValue(a, -1);
            Qf = !1
        }, 0))
    }
}
function Tf(a) {
    Od = a;
    var c = Pf[0];
    a ? g.g.o.Fa(c, "tab-disabled") : g.g.o.dc(c, "tab-disabled")
}
var Wf = document.createElement("script");
Wf.type = "text/javascript";
Wf.src = "pond/duck/default-ducks.js";
document.head.appendChild(Wf);
window.addEventListener("load", function() {
    function a() {
        var y = h.offsetTop;
        k.style.top = y - window.pageYOffset + "px";
        k.style.left = f ? "10px" : "420px";
        k.style.width = window.innerWidth - 440 + "px";
        y = Math.max(0, y + k.offsetHeight - window.pageYOffset) + "px";
        for (var N = f ? "10px" : "420px", Q = window.innerWidth - 440 + "px", F = 0, ra; ra = m[F]; F++)
            ra.style.top = y,
            ra.style.left = N,
            ra.style.width = Q
    }
    function c(y) {
        return function() {
            g.g.o.qs(d[y], "tab-disabled") || Uf(y)
        }
    }
    Rf = window.DUCKS;
    document.body.innerHTML = Of();
    Pd();
    Ke();
    Ed("runButton", Ye);
    Ed("resetButton", af);
    Ed("docsButton", Ue);
    Ed("closeDocs", Ve);
    Zd();
    $d();
    var d = Array.prototype.slice.call(document.querySelectorAll("#editorBar>.tab"));
    Pf = d;
    for (var e = 0; e < d.length; e++)
        Ed(d[e], c(e));
    var f = -1 != od.indexOf(pd)
      , h = document.getElementById("visualization")
      , k = document.getElementById("tabarea");
    e = document.getElementById("blockly");
    var l = document.getElementById("editor")
      , m = [e, l];
    window.addEventListener("scroll", function() {
        a(null);
        g.ln(w)
    });
    window.addEventListener("resize", a);
    a(null);
    be().on("change", Vf);
    ae();
    rf(g.j, "scan,cannon,drive,swim,stop,speed,damage,health,loc_x,getX,loc_y,getY,log");
    l = [new g.g.V(20,80), new g.g.V(80,80), new g.g.V(20,20), new g.g.V(80,20)];
    var n = document.getElementById("avatar-select"), p;
    for (e = 0; p = Rf[e]; e++) {
        null === p.name && (p.name = R("Pond_myName"));
        var r = new Option(p.name,p.id);
        n.add(r);
        r = new xe(p.name,l[e],p.editable);
        void 0 === p.blockly && void 0 === p.js && (p.js = p.compiled);
        ye(r, p.blockly, p.js, p.compiled)
    }
    n.addEventListener("change", Sf);
    T.reset();
    Me();
    n && (Sf(),
    n.style.width = "0",
    setTimeout(function() {
        n.style.width = "auto"
    }, 0))
});
