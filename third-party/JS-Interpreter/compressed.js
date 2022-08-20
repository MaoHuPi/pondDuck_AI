var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(b) {
    var a = 0;
    return function() {
        return a < b.length ? {
            done: !1,
            value: b[a++]
        } : {
            done: !0
        }
    }
}
;
$jscomp.arrayIterator = function(b) {
    return {
        next: $jscomp.arrayIteratorImpl(b)
    }
}
;
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(b, a, c) {
    if (b == Array.prototype || b == Object.prototype)
        return b;
    b[a] = c.value;
    return b
}
;
$jscomp.getGlobal = function(b) {
    b = ["object" == typeof globalThis && globalThis, b, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var a = 0; a < b.length; ++a) {
        var c = b[a];
        if (c && c.Math == Math)
            return c
    }
    throw Error("Cannot find global object");
}
;
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(b, a) {
    var c = $jscomp.propertyToPolyfillSymbol[a];
    if (null == c)
        return b[a];
    c = b[c];
    return void 0 !== c ? c : b[a]
};
$jscomp.polyfill = function(b, a, c, d) {
    a && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(b, a, c, d) : $jscomp.polyfillUnisolated(b, a, c, d))
}
;
$jscomp.polyfillUnisolated = function(b, a, c, d) {
    c = $jscomp.global;
    b = b.split(".");
    for (d = 0; d < b.length - 1; d++) {
        var f = b[d];
        if (!(f in c))
            return;
        c = c[f]
    }
    b = b[b.length - 1];
    d = c[b];
    a = a(d);
    a != d && null != a && $jscomp.defineProperty(c, b, {
        configurable: !0,
        writable: !0,
        value: a
    })
}
;
$jscomp.polyfillIsolated = function(b, a, c, d) {
    var f = b.split(".");
    b = 1 === f.length;
    d = f[0];
    d = !b && d in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var g = 0; g < f.length - 1; g++) {
        var m = f[g];
        if (!(m in d))
            return;
        d = d[m]
    }
    f = f[f.length - 1];
    c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? d[f] : null;
    a = a(c);
    null != a && (b ? $jscomp.defineProperty($jscomp.polyfills, f, {
        configurable: !0,
        writable: !0,
        value: a
    }) : a !== c && (void 0 === $jscomp.propertyToPolyfillSymbol[f] && (c = 1E9 * Math.random() >>> 0,
    $jscomp.propertyToPolyfillSymbol[f] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(f) : $jscomp.POLYFILL_PREFIX + c + "$" + f),
    $jscomp.defineProperty(d, $jscomp.propertyToPolyfillSymbol[f], {
        configurable: !0,
        writable: !0,
        value: a
    })))
}
;
$jscomp.initSymbol = function() {}
;
$jscomp.polyfill("Symbol", function(b) {
    if (b)
        return b;
    var a = function(g, m) {
        this.$jscomp$symbol$id_ = g;
        $jscomp.defineProperty(this, "description", {
            configurable: !0,
            writable: !0,
            value: m
        })
    };
    a.prototype.toString = function() {
        return this.$jscomp$symbol$id_
    }
    ;
    var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
      , d = 0
      , f = function(g) {
        if (this instanceof f)
            throw new TypeError("Symbol is not a constructor");
        return new a(c + (g || "") + "_" + d++,g)
    };
    return f
}, "es6", "es3");
$jscomp.polyfill("Symbol.iterator", function(b) {
    if (b)
        return b;
    b = Symbol("Symbol.iterator");
    for (var a = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < a.length; c++) {
        var d = $jscomp.global[a[c]];
        "function" === typeof d && "function" != typeof d.prototype[b] && $jscomp.defineProperty(d.prototype, b, {
            configurable: !0,
            writable: !0,
            value: function() {
                return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
            }
        })
    }
    return b
}, "es6", "es3");
$jscomp.iteratorPrototype = function(b) {
    b = {
        next: b
    };
    b[Symbol.iterator] = function() {
        return this
    }
    ;
    return b
}
;
$jscomp.iteratorFromArray = function(b, a) {
    b instanceof String && (b += "");
    var c = 0
      , d = !1
      , f = {
        next: function() {
            if (!d && c < b.length) {
                var g = c++;
                return {
                    value: a(g, b[g]),
                    done: !1
                }
            }
            d = !0;
            return {
                done: !0,
                value: void 0
            }
        }
    };
    f[Symbol.iterator] = function() {
        return f
    }
    ;
    return f
}
;
$jscomp.polyfill("Array.prototype.keys", function(b) {
    return b ? b : function() {
        return $jscomp.iteratorFromArray(this, function(a) {
            return a
        })
    }
}, "es6", "es3");
$jscomp.polyfill("Array.from", function(b) {
    return b ? b : function(a, c, d) {
        c = null != c ? c : function(q) {
            return q
        }
        ;
        var f = []
          , g = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if ("function" == typeof g) {
            a = g.call(a);
            for (var m = 0; !(g = a.next()).done; )
                f.push(c.call(d, g.value, m++))
        } else
            for (g = a.length,
            m = 0; m < g; m++)
                f.push(c.call(d, a[m], m));
        return f
    }
}, "es6", "es3");
(function(b, a) {
    if ("object" == typeof exports && "object" == typeof module)
        return a(exports);
    if ("function" == typeof define && define.amd)
        return define(["exports"], a);
    a(b.acorn || (b.acorn = {}))
}
)(this, function(b) {
    function a(e) {
        t = e || {};
        for (var h in bb)
            Object.prototype.hasOwnProperty.call(t, h) || (t[h] = bb[h]);
        Da = t.sourceFile || null
    }
    function c(e, h) {
        var k = Jb(p, e);
        h += " (" + k.line + ":" + k.column + ")";
        h = new SyntaxError(h);
        h.pos = e;
        h.loc = k;
        h.raisedAt = l;
        throw h;
    }
    function d(e) {
        e = e.split(" ");
        for (var h = Object.create(null), k = 0; k < e.length; k++)
            h[e[k]] = !0;
        return function(n) {
            return h[n] || !1
        }
    }
    function f() {
        this.line = L;
        this.column = l - I
    }
    function g(e, h) {
        ba = l;
        t.locations && (qa = new f);
        u = e;
        q();
        M = h;
        V = e.beforeExpr
    }
    function m() {
        for (var e = l, h = t.onComment && t.locations && new f, k = p.charCodeAt(l += 2); l < W && 10 !== k && 13 !== k && 8232 !== k && 8233 !== k; )
            ++l,
            k = p.charCodeAt(l);
        if (t.onComment)
            t.onComment(!1, p.slice(e + 2, l), e, l, h, t.locations && new f)
    }
    function q() {
        for (; l < W; ) {
            var e = p.charCodeAt(l);
            if (32 === e)
                ++l;
            else if (13 === e)
                ++l,
                e = p.charCodeAt(l),
                10 === e && ++l,
                t.locations && (++L,
                I = l);
            else if (10 === e || 8232 === e || 8233 === e)
                ++l,
                t.locations && (++L,
                I = l);
            else if (8 < e && 14 > e)
                ++l;
            else if (47 === e)
                if (e = p.charCodeAt(l + 1),
                42 === e) {
                    e = void 0;
                    var h = t.onComment && t.locations && new f
                      , k = l
                      , n = p.indexOf("*/", l += 2);
                    -1 === n && c(l - 2, "Unterminated comment");
                    l = n + 2;
                    if (t.locations)
                        for (ca.lastIndex = k; (e = ca.exec(p)) && e.index < l; )
                            ++L,
                            I = e.index + e[0].length;
                    if (t.onComment)
                        t.onComment(!0, p.slice(k + 2, n), k, l, h, t.locations && new f)
                } else if (47 === e)
                    m();
                else
                    break;
            else if (160 === e)
                ++l;
            else if (5760 <= e && Kb.test(String.fromCharCode(e)))
                ++l;
            else
                break
        }
    }
    function z(e) {
        switch (e) {
        case 46:
            return e = p.charCodeAt(l + 1),
            48 <= e && 57 >= e ? e = cb(!0) : (++l,
            e = g(Ea)),
            e;
        case 40:
            return ++l,
            g(N);
        case 41:
            return ++l,
            g(J);
        case 59:
            return ++l,
            g(O);
        case 44:
            return ++l,
            g(Q);
        case 91:
            return ++l,
            g(ra);
        case 93:
            return ++l,
            g(sa);
        case 123:
            return ++l,
            g(da);
        case 125:
            return ++l,
            g(X);
        case 58:
            return ++l,
            g(ea);
        case 63:
            return ++l,
            g(Fa);
        case 48:
            if (e = p.charCodeAt(l + 1),
            120 === e || 88 === e)
                return l += 2,
                e = ka(16),
                null == e && c(D + 2, "Expected hexadecimal number"),
                ta(p.charCodeAt(l)) && c(l, "Identifier directly after number"),
                g(fa, e);
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            return cb(!1);
        case 34:
        case 39:
            a: {
                l++;
                for (var h = ""; ; ) {
                    l >= W && c(D, "Unterminated string constant");
                    var k = p.charCodeAt(l);
                    if (k === e) {
                        ++l;
                        e = g(la, h);
                        break a
                    }
                    if (92 === k) {
                        k = p.charCodeAt(++l);
                        var n = /^[0-7]+/.exec(p.slice(l, l + 3));
                        for (n && (n = n[0]); n && 255 < parseInt(n, 8); )
                            n = n.slice(0, -1);
                        "0" === n && (n = null);
                        ++l;
                        if (n)
                            H && c(l - 2, "Octal literal in strict mode"),
                            h += String.fromCharCode(parseInt(n, 8)),
                            l += n.length - 1;
                        else
                            switch (k) {
                            case 110:
                                h += "\n";
                                break;
                            case 114:
                                h += "\r";
                                break;
                            case 120:
                                h += String.fromCharCode(ua(2));
                                break;
                            case 117:
                                h += String.fromCharCode(ua(4));
                                break;
                            case 85:
                                h += String.fromCharCode(ua(8));
                                break;
                            case 116:
                                h += "\t";
                                break;
                            case 98:
                                h += "\b";
                                break;
                            case 118:
                                h += "\v";
                                break;
                            case 102:
                                h += "\f";
                                break;
                            case 48:
                                h += "\x00";
                                break;
                            case 13:
                                10 === p.charCodeAt(l) && ++l;
                            case 10:
                                t.locations && (I = l,
                                ++L);
                                break;
                            default:
                                h += String.fromCharCode(k)
                            }
                    } else
                        13 !== k && 10 !== k && 8232 !== k && 8233 !== k || c(D, "Unterminated string constant"),
                        h += String.fromCharCode(k),
                        ++l
                }
            }
            return e;
        case 47:
            return e = p.charCodeAt(l + 1),
            V ? (++l,
            e = ha()) : e = 61 === e ? x(Y, 2) : x(Ga, 1),
            e;
        case 37:
        case 42:
            return e = 61 === p.charCodeAt(l + 1) ? x(Y, 2) : x(Lb, 1),
            e;
        case 124:
        case 38:
            return h = p.charCodeAt(l + 1),
            e = h === e ? x(124 === e ? db : eb, 2) : 61 === h ? x(Y, 2) : x(124 === e ? Mb : Nb, 1),
            e;
        case 94:
            return e = 61 === p.charCodeAt(l + 1) ? x(Y, 2) : x(Ob, 1),
            e;
        case 43:
        case 45:
            return h = p.charCodeAt(l + 1),
            h === e ? 45 == h && 62 == p.charCodeAt(l + 2) && va.test(p.slice(R, l)) ? (l += 3,
            m(),
            q(),
            e = F()) : e = x(Pb, 2) : e = 61 === h ? x(Y, 2) : x(Qb, 1),
            e;
        case 60:
        case 62:
            return h = p.charCodeAt(l + 1),
            k = 1,
            h === e ? (k = 62 === e && 62 === p.charCodeAt(l + 2) ? 3 : 2,
            e = 61 === p.charCodeAt(l + k) ? x(Y, k + 1) : x(Rb, k)) : 33 == h && 60 == e && 45 == p.charCodeAt(l + 2) && 45 == p.charCodeAt(l + 3) ? (l += 4,
            m(),
            q(),
            e = F()) : (61 === h && (k = 61 === p.charCodeAt(l + 2) ? 3 : 2),
            e = x(Sb, k)),
            e;
        case 61:
        case 33:
            return e = 61 === p.charCodeAt(l + 1) ? x(Tb, 61 === p.charCodeAt(l + 2) ? 3 : 2) : x(61 === e ? Ha : fb, 1),
            e;
        case 126:
            return x(fb, 1)
        }
        return !1
    }
    function F(e) {
        e ? l = D + 1 : D = l;
        t.locations && (wa = new f);
        if (e)
            return ha();
        if (l >= W)
            return g(xa);
        var h = p.charCodeAt(l);
        if (ta(h) || 92 === h)
            return gb();
        e = z(h);
        if (!1 === e) {
            h = String.fromCharCode(h);
            if ("\\" === h || hb.test(h))
                return gb();
            c(l, "Unexpected character '" + h + "'")
        }
        return e
    }
    function x(e, h) {
        var k = p.slice(l, l + h);
        l += h;
        g(e, k)
    }
    function ha() {
        for (var e, h, k = l; ; ) {
            l >= W && c(k, "Unterminated regular expression");
            var n = p.charAt(l);
            va.test(n) && c(k, "Unterminated regular expression");
            if (e)
                e = !1;
            else {
                if ("[" === n)
                    h = !0;
                else if ("]" === n && h)
                    h = !1;
                else if ("/" === n && !h)
                    break;
                e = "\\" === n
            }
            ++l
        }
        e = p.slice(k, l);
        ++l;
        (h = ib()) && !/^[gmsiy]*$/.test(h) && c(k, "Invalid regexp flag");
        return g(Ia, new RegExp(e,h))
    }
    function ka(e, h) {
        for (var k = l, n = 0, r = 0, P = null == h ? Infinity : h; r < P; ++r) {
            var C = p.charCodeAt(l);
            C = 97 <= C ? C - 97 + 10 : 65 <= C ? C - 65 + 10 : 48 <= C && 57 >= C ? C - 48 : Infinity;
            if (C >= e)
                break;
            ++l;
            n = n * e + C
        }
        return l === k || null != h && l - k !== h ? null : n
    }
    function cb(e) {
        var h = l
          , k = !1
          , n = 48 === p.charCodeAt(l);
        e || null !== ka(10) || c(h, "Invalid number");
        46 === p.charCodeAt(l) && (++l,
        ka(10),
        k = !0);
        e = p.charCodeAt(l);
        if (69 === e || 101 === e)
            e = p.charCodeAt(++l),
            43 !== e && 45 !== e || ++l,
            null === ka(10) && c(h, "Invalid number"),
            k = !0;
        ta(p.charCodeAt(l)) && c(l, "Identifier directly after number");
        e = p.slice(h, l);
        var r;
        k ? r = parseFloat(e) : n && 1 !== e.length ? /[89]/.test(e) || H ? c(h, "Invalid number") : r = parseInt(e, 8) : r = parseInt(e, 10);
        return g(fa, r)
    }
    function ua(e) {
        e = ka(16, e);
        null === e && c(D, "Bad character escape sequence");
        return e
    }
    function ib() {
        ia = !1;
        for (var e, h = !0, k = l; ; ) {
            var n = p.charCodeAt(l);
            if (jb(n))
                ia && (e += p.charAt(l)),
                ++l;
            else if (92 === n) {
                ia || (e = p.slice(k, l));
                ia = !0;
                117 != p.charCodeAt(++l) && c(l, "Expecting Unicode escape sequence \\uXXXX");
                ++l;
                n = ua(4);
                var r = String.fromCharCode(n);
                r || c(l - 1, "Invalid Unicode escape");
                (h ? ta(n) : jb(n)) || c(l - 4, "Invalid Unicode escape");
                e += r
            } else
                break;
            h = !1
        }
        return ia ? e : p.slice(k, l)
    }
    function gb() {
        var e = ib()
          , h = Z;
        ia || (Ub(e) ? h = Ja[e] : (t.forbidReserved && (3 === t.ecmaVersion ? Vb : Wb)(e) || H && kb(e)) && c(D, "The keyword '" + e + "' is reserved"));
        return g(h, e)
    }
    function w() {
        Ka = D;
        R = ba;
        La = qa;
        F()
    }
    function Ma(e) {
        H = e;
        l = R;
        if (t.locations)
            for (; l < I; )
                I = p.lastIndexOf("\n", I - 2) + 1,
                --L;
        q();
        F()
    }
    function lb() {
        this.type = null;
        this.start = D;
        this.end = null
    }
    function mb() {
        this.start = wa;
        this.end = null;
        null !== Da && (this.source = Da)
    }
    function E() {
        var e = new lb;
        t.locations && (e.loc = new mb);
        t.directSourceFile && (e.sourceFile = t.directSourceFile);
        t.ranges && (e.range = [D, 0]);
        return e
    }
    function U(e) {
        var h = new lb;
        h.start = e.start;
        t.locations && (h.loc = new mb,
        h.loc.start = e.loc.start);
        t.ranges && (h.range = [e.range[0], 0]);
        return h
    }
    function v(e, h) {
        e.type = h;
        e.end = R;
        t.locations && (e.loc.end = La);
        t.ranges && (e.range[1] = R);
        return e
    }
    function Na(e) {
        return 5 <= t.ecmaVersion && "ExpressionStatement" === e.type && "Literal" === e.expression.type && "use strict" === e.expression.value
    }
    function y(e) {
        if (u === e)
            return w(),
            !0
    }
    function ya() {
        return !t.strictSemicolons && (u === xa || u === X || va.test(p.slice(R, D)))
    }
    function aa() {
        y(O) || ya() || S()
    }
    function A(e) {
        u === e ? w() : S()
    }
    function S() {
        c(D, "Unexpected token")
    }
    function za(e) {
        "Identifier" !== e.type && "MemberExpression" !== e.type && c(e.start, "Assigning to rvalue");
        H && "Identifier" === e.type && Aa(e.name) && c(e.start, "Assigning to " + e.name + " in strict mode")
    }
    function K() {
        (u === Ga || u === Y && "/=" == M) && F(!0);
        var e = u
          , h = E();
        switch (e) {
        case Oa:
        case nb:
            w();
            var k = e === Oa;
            y(O) || ya() ? h.label = null : u !== Z ? S() : (h.label = T(),
            aa());
            for (var n = 0; n < B.length; ++n) {
                var r = B[n];
                if (null == h.label || r.name === h.label.name) {
                    if (null != r.kind && (k || "loop" === r.kind))
                        break;
                    if (h.label && k)
                        break
                }
            }
            n === B.length && c(h.start, "Unsyntactic " + e.keyword);
            return v(h, k ? "BreakStatement" : "ContinueStatement");
        case ob:
            return w(),
            aa(),
            v(h, "DebuggerStatement");
        case pb:
            return w(),
            B.push(Pa),
            h.body = K(),
            B.pop(),
            A(Qa),
            h.test = ma(),
            aa(),
            v(h, "DoWhileStatement");
        case qb:
            w();
            B.push(Pa);
            A(N);
            if (u === O)
                return Ra(h, null);
            if (u === Sa)
                return e = E(),
                w(),
                rb(e, !0),
                v(e, "VariableDeclaration"),
                1 === e.declarations.length && y(Ba) ? sb(h, e) : Ra(h, e);
            e = G(!1, !0);
            return y(Ba) ? (za(e),
            sb(h, e)) : Ra(h, e);
        case Ta:
            return w(),
            Ua(h, !0);
        case tb:
            return w(),
            h.test = ma(),
            h.consequent = K(),
            h.alternate = y(ub) ? K() : null,
            v(h, "IfStatement");
        case vb:
            return na || c(D, "'return' outside of function"),
            w(),
            y(O) || ya() ? h.argument = null : (h.argument = G(),
            aa()),
            v(h, "ReturnStatement");
        case Va:
            w();
            h.discriminant = ma();
            h.cases = [];
            A(da);
            for (B.push(Xb); u != X; )
                u === Wa || u === wb ? (e = u === Wa,
                n && v(n, "SwitchCase"),
                h.cases.push(n = E()),
                n.consequent = [],
                w(),
                e ? n.test = G() : (k && c(Ka, "Multiple default clauses"),
                k = !0,
                n.test = null),
                A(ea)) : (n || S(),
                n.consequent.push(K()));
            n && v(n, "SwitchCase");
            w();
            B.pop();
            return v(h, "SwitchStatement");
        case xb:
            return w(),
            va.test(p.slice(R, D)) && c(R, "Illegal newline after throw"),
            h.argument = G(),
            aa(),
            v(h, "ThrowStatement");
        case yb:
            return w(),
            h.block = oa(),
            h.handler = null,
            u === zb && (e = E(),
            w(),
            A(N),
            e.param = T(),
            H && Aa(e.param.name) && c(e.param.start, "Binding " + e.param.name + " in strict mode"),
            A(J),
            e.guard = null,
            e.body = oa(),
            h.handler = v(e, "CatchClause")),
            h.guardedHandlers = Ab,
            h.finalizer = y(Bb) ? oa() : null,
            h.handler || h.finalizer || c(h.start, "Missing catch or finally clause"),
            v(h, "TryStatement");
        case Sa:
            return w(),
            rb(h),
            aa(),
            v(h, "VariableDeclaration");
        case Qa:
            return w(),
            h.test = ma(),
            B.push(Pa),
            h.body = K(),
            B.pop(),
            v(h, "WhileStatement");
        case Cb:
            return H && c(D, "'with' in strict mode"),
            w(),
            h.object = ma(),
            h.body = K(),
            v(h, "WithStatement");
        case da:
            return oa();
        case O:
            return w(),
            v(h, "EmptyStatement");
        default:
            k = M;
            r = G();
            if (e === Z && "Identifier" === r.type && y(ea)) {
                for (n = 0; n < B.length; ++n)
                    B[n].name === k && c(r.start, "Label '" + k + "' is already declared");
                B.push({
                    name: k,
                    kind: u.isLoop ? "loop" : u === Va ? "switch" : null
                });
                h.body = K();
                B.pop();
                h.label = r;
                return v(h, "LabeledStatement")
            }
            h.expression = r;
            aa();
            return v(h, "ExpressionStatement")
        }
    }
    function ma() {
        A(N);
        var e = G();
        A(J);
        return e
    }
    function oa(e) {
        var h = E()
          , k = !0
          , n = !1;
        h.body = [];
        for (A(da); !y(X); ) {
            var r = K();
            h.body.push(r);
            if (k && e && Na(r)) {
                var P = n;
                Ma(n = !0)
            }
            k = !1
        }
        n && !P && Ma(!1);
        return v(h, "BlockStatement")
    }
    function Ra(e, h) {
        e.init = h;
        A(O);
        e.test = u === O ? null : G();
        A(O);
        e.update = u === J ? null : G();
        A(J);
        e.body = K();
        B.pop();
        return v(e, "ForStatement")
    }
    function sb(e, h) {
        e.left = h;
        e.right = G();
        A(J);
        e.body = K();
        B.pop();
        return v(e, "ForInStatement")
    }
    function rb(e, h) {
        e.declarations = [];
        for (e.kind = "var"; ; ) {
            var k = E();
            k.id = T();
            H && Aa(k.id.name) && c(k.id.start, "Binding " + k.id.name + " in strict mode");
            k.init = y(Ha) ? G(!0, h) : null;
            e.declarations.push(v(k, "VariableDeclarator"));
            if (!y(Q))
                break
        }
        return e
    }
    function G(e, h) {
        var k = Xa(h);
        if (!e && u === Q) {
            e = U(k);
            for (e.expressions = [k]; y(Q); )
                e.expressions.push(Xa(h));
            return v(e, "SequenceExpression")
        }
        return k
    }
    function Xa(e) {
        var h = Ya(Za(), -1, e);
        if (y(Fa)) {
            var k = U(h);
            k.test = h;
            k.consequent = G(!0);
            A(ea);
            k.alternate = G(!0, e);
            h = v(k, "ConditionalExpression")
        }
        return u.isAssign ? (k = U(h),
        k.operator = M,
        k.left = h,
        w(),
        k.right = Xa(e),
        za(h),
        v(k, "AssignmentExpression")) : h
    }
    function Ya(e, h, k) {
        var n = u.binop;
        if (null != n && (!k || u !== Ba) && n > h) {
            var r = U(e);
            r.left = e;
            r.operator = M;
            e = u;
            w();
            r.right = Ya(Za(), n, k);
            n = v(r, e === db || e === eb ? "LogicalExpression" : "BinaryExpression");
            return Ya(n, h, k)
        }
        return e
    }
    function Za() {
        if (u.prefix) {
            var e = E()
              , h = u.isUpdate;
            e.operator = M;
            V = e.prefix = !0;
            w();
            e.argument = Za();
            h ? za(e.argument) : H && "delete" === e.operator && "Identifier" === e.argument.type && c(e.start, "Deleting local variable in strict mode");
            return v(e, h ? "UpdateExpression" : "UnaryExpression")
        }
        for (h = pa(Ca()); u.postfix && !ya(); )
            e = U(h),
            e.operator = M,
            e.prefix = !1,
            e.argument = h,
            za(h),
            w(),
            h = v(e, "UpdateExpression");
        return h
    }
    function pa(e, h) {
        if (y(Ea)) {
            var k = U(e);
            k.object = e;
            k.property = T(!0);
            k.computed = !1;
            return pa(v(k, "MemberExpression"), h)
        }
        return y(ra) ? (k = U(e),
        k.object = e,
        k.property = G(),
        k.computed = !0,
        A(sa),
        pa(v(k, "MemberExpression"), h)) : !h && y(N) ? (k = U(e),
        k.callee = e,
        k.arguments = $a(J, !1),
        pa(v(k, "CallExpression"), h)) : e
    }
    function Ca() {
        switch (u) {
        case Db:
            var e = E();
            w();
            return v(e, "ThisExpression");
        case Z:
            return T();
        case fa:
        case la:
        case Ia:
            return e = E(),
            e.value = M,
            e.raw = p.slice(D, ba),
            w(),
            v(e, "Literal");
        case Eb:
        case Fb:
        case Gb:
            return e = E(),
            e.value = u.atomValue,
            e.raw = u.keyword,
            w(),
            v(e, "Literal");
        case N:
            e = wa;
            var h = D;
            w();
            var k = G();
            k.start = h;
            k.end = ba;
            t.locations && (k.loc.start = e,
            k.loc.end = qa);
            t.ranges && (k.range = [h, ba]);
            A(J);
            return k;
        case ra:
            return e = E(),
            w(),
            e.elements = $a(sa, !0, !0),
            v(e, "ArrayExpression");
        case da:
            e = E();
            h = !0;
            k = !1;
            e.properties = [];
            for (w(); !y(X); ) {
                if (h)
                    h = !1;
                else if (A(Q),
                t.allowTrailingCommas && y(X))
                    break;
                var n = {
                    key: u === fa || u === la ? Ca() : T(!0)
                }
                  , r = !1;
                if (y(ea)) {
                    n.value = G(!0);
                    var P = n.kind = "init"
                } else
                    5 <= t.ecmaVersion && "Identifier" === n.key.type && ("get" === n.key.name || "set" === n.key.name) ? (r = k = !0,
                    P = n.kind = n.key.name,
                    n.key = u === fa || u === la ? Ca() : T(!0),
                    u !== N && S(),
                    n.value = Ua(E(), !1)) : S();
                if ("Identifier" === n.key.type && (H || k))
                    for (var C = 0; C < e.properties.length; ++C) {
                        var ja = e.properties[C];
                        if (ja.key.name === n.key.name) {
                            var ab = P == ja.kind || r && "init" === ja.kind || "init" === P && ("get" === ja.kind || "set" === ja.kind);
                            ab && !H && "init" === P && "init" === ja.kind && (ab = !1);
                            ab && c(n.key.start, "Redefinition of property")
                        }
                    }
                e.properties.push(n)
            }
            return v(e, "ObjectExpression");
        case Ta:
            return e = E(),
            w(),
            Ua(e, !1);
        case Hb:
            return e = E(),
            w(),
            e.callee = pa(Ca(), !0),
            y(N) ? e.arguments = $a(J, !1) : e.arguments = Ab,
            v(e, "NewExpression");
        default:
            S()
        }
    }
    function Ua(e, h) {
        u === Z ? e.id = T() : h ? S() : e.id = null;
        e.params = [];
        var k = !0;
        for (A(N); !y(J); )
            k ? k = !1 : A(Q),
            e.params.push(T());
        k = na;
        var n = B;
        na = !0;
        B = [];
        e.body = oa(!0);
        na = k;
        B = n;
        if (H || e.body.body.length && Na(e.body.body[0]))
            for (k = e.id ? -1 : 0; k < e.params.length; ++k)
                if (n = 0 > k ? e.id : e.params[k],
                (kb(n.name) || Aa(n.name)) && c(n.start, "Defining '" + n.name + "' in strict mode"),
                0 <= k)
                    for (var r = 0; r < k; ++r)
                        n.name === e.params[r].name && c(n.start, "Argument name clash in strict mode");
        return v(e, h ? "FunctionDeclaration" : "FunctionExpression")
    }
    function $a(e, h, k) {
        for (var n = [], r = !0; !y(e); ) {
            if (r)
                r = !1;
            else if (A(Q),
            h && t.allowTrailingCommas && y(e))
                break;
            k && u === Q ? n.push(null) : n.push(G(!0))
        }
        return n
    }
    function T(e) {
        var h = E();
        h.name = u === Z ? M : e && !t.forbidReserved && u.keyword || S();
        V = !1;
        w();
        return v(h, "Identifier")
    }
    b.version = "0.4.1";
    var t, p, W, Da;
    b.parse = function(e, h) {
        p = String(e);
        W = p.length;
        a(h);
        L = 1;
        l = I = 0;
        V = !0;
        q();
        var k = t.program;
        Ka = R = l;
        t.locations && (La = new f);
        na = H = null;
        B = [];
        F();
        e = k || E();
        h = !0;
        k || (e.body = []);
        for (; u !== xa; )
            k = K(),
            e.body.push(k),
            h && Na(k) && Ma(!0),
            h = !1;
        return v(e, "Program")
    }
    ;
    var bb = b.defaultOptions = {
        ecmaVersion: 5,
        strictSemicolons: !1,
        allowTrailingCommas: !0,
        forbidReserved: !1,
        locations: !1,
        onComment: null,
        ranges: !1,
        program: null,
        sourceFile: null,
        directSourceFile: null
    }
      , Jb = b.getLineInfo = function(e, h) {
        for (var k = 1, n = 0; ; ) {
            ca.lastIndex = n;
            var r = ca.exec(e);
            if (r && r.index < h)
                ++k,
                n = r.index + r[0].length;
            else
                break
        }
        return {
            line: k,
            column: h - n
        }
    }
    ;
    b.tokenize = function(e, h) {
        function k(r) {
            F(r);
            n.start = D;
            n.end = ba;
            n.startLoc = wa;
            n.endLoc = qa;
            n.type = u;
            n.value = M;
            return n
        }
        p = String(e);
        W = p.length;
        a(h);
        L = 1;
        l = I = 0;
        V = !0;
        q();
        var n = {};
        k.jumpTo = function(r, P) {
            l = r;
            if (t.locations) {
                L = 1;
                I = ca.lastIndex = 0;
                for (var C; (C = ca.exec(p)) && C.index < r; )
                    ++L,
                    I = C.index + C[0].length
            }
            V = P;
            q()
        }
        ;
        return k
    }
    ;
    var l, D, ba, wa, qa, u, M, V, L, I, Ka, R, La, na, B, H, Ab = [], fa = {
        type: "num"
    }, Ia = {
        type: "regexp"
    }, la = {
        type: "string"
    }, Z = {
        type: "name"
    }, xa = {
        type: "eof"
    }, Oa = {
        keyword: "break"
    }, Wa = {
        keyword: "case",
        beforeExpr: !0
    }, zb = {
        keyword: "catch"
    }, nb = {
        keyword: "continue"
    }, ob = {
        keyword: "debugger"
    }, wb = {
        keyword: "default"
    }, pb = {
        keyword: "do",
        isLoop: !0
    }, ub = {
        keyword: "else",
        beforeExpr: !0
    }, Bb = {
        keyword: "finally"
    }, qb = {
        keyword: "for",
        isLoop: !0
    }, Ta = {
        keyword: "function"
    }, tb = {
        keyword: "if"
    }, vb = {
        keyword: "return",
        beforeExpr: !0
    }, Va = {
        keyword: "switch"
    }, xb = {
        keyword: "throw",
        beforeExpr: !0
    }, yb = {
        keyword: "try"
    }, Sa = {
        keyword: "var"
    }, Qa = {
        keyword: "while",
        isLoop: !0
    }, Cb = {
        keyword: "with"
    }, Hb = {
        keyword: "new",
        beforeExpr: !0
    }, Db = {
        keyword: "this"
    }, Eb = {
        keyword: "null",
        atomValue: null
    }, Fb = {
        keyword: "true",
        atomValue: !0
    }, Gb = {
        keyword: "false",
        atomValue: !1
    }, Ba = {
        keyword: "in",
        binop: 7,
        beforeExpr: !0
    }, Ja = {
        "break": Oa,
        "case": Wa,
        "catch": zb,
        "continue": nb,
        "debugger": ob,
        "default": wb,
        "do": pb,
        "else": ub,
        "finally": Bb,
        "for": qb,
        "function": Ta,
        "if": tb,
        "return": vb,
        "switch": Va,
        "throw": xb,
        "try": yb,
        "var": Sa,
        "while": Qa,
        "with": Cb,
        "null": Eb,
        "true": Fb,
        "false": Gb,
        "new": Hb,
        "in": Ba,
        "instanceof": {
            keyword: "instanceof",
            binop: 7,
            beforeExpr: !0
        },
        "this": Db,
        "typeof": {
            keyword: "typeof",
            prefix: !0,
            beforeExpr: !0
        },
        "void": {
            keyword: "void",
            prefix: !0,
            beforeExpr: !0
        },
        "delete": {
            keyword: "delete",
            prefix: !0,
            beforeExpr: !0
        }
    }, ra = {
        type: "[",
        beforeExpr: !0
    }, sa = {
        type: "]"
    }, da = {
        type: "{",
        beforeExpr: !0
    }, X = {
        type: "}"
    }, N = {
        type: "(",
        beforeExpr: !0
    }, J = {
        type: ")"
    }, Q = {
        type: ",",
        beforeExpr: !0
    }, O = {
        type: ";",
        beforeExpr: !0
    }, ea = {
        type: ":",
        beforeExpr: !0
    }, Ea = {
        type: "."
    }, Fa = {
        type: "?",
        beforeExpr: !0
    }, Ga = {
        binop: 10,
        beforeExpr: !0
    }, Ha = {
        isAssign: !0,
        beforeExpr: !0
    }, Y = {
        isAssign: !0,
        beforeExpr: !0
    }, Pb = {
        postfix: !0,
        prefix: !0,
        isUpdate: !0
    }, fb = {
        prefix: !0,
        beforeExpr: !0
    }, db = {
        binop: 1,
        beforeExpr: !0
    }, eb = {
        binop: 2,
        beforeExpr: !0
    }, Mb = {
        binop: 3,
        beforeExpr: !0
    }, Ob = {
        binop: 4,
        beforeExpr: !0
    }, Nb = {
        binop: 5,
        beforeExpr: !0
    }, Tb = {
        binop: 6,
        beforeExpr: !0
    }, Sb = {
        binop: 7,
        beforeExpr: !0
    }, Rb = {
        binop: 8,
        beforeExpr: !0
    }, Qb = {
        binop: 9,
        prefix: !0,
        beforeExpr: !0
    }, Lb = {
        binop: 10,
        beforeExpr: !0
    };
    b.tokTypes = {
        bracketL: ra,
        bracketR: sa,
        braceL: da,
        braceR: X,
        parenL: N,
        parenR: J,
        comma: Q,
        semi: O,
        colon: ea,
        dot: Ea,
        question: Fa,
        slash: Ga,
        eq: Ha,
        name: Z,
        eof: xa,
        num: fa,
        regexp: Ia,
        string: la
    };
    for (var Ib in Ja)
        b.tokTypes["_" + Ib] = Ja[Ib];
    var Vb = d("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"), Wb = d("class enum extends super const export import"), kb = d("implements interface let package private protected public static yield"), Aa = d("eval arguments"), Ub = d("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"), Kb = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/, hb = RegExp("[\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]"), Yb = RegExp("[\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]"), va = /[\n\r\u2028\u2029]/, ca = /\r\n|[\n\r\u2028\u2029]/g, ta = b.isIdentifierStart = function(e) {
        return 65 > e ? 36 === e : 91 > e ? !0 : 97 > e ? 95 === e : 123 > e ? !0 : 170 <= e && hb.test(String.fromCharCode(e))
    }
    , jb = b.isIdentifierChar = function(e) {
        return 48 > e ? 36 === e : 58 > e ? !0 : 65 > e ? !1 : 91 > e ? !0 : 97 > e ? 95 === e : 123 > e ? !0 : 170 <= e && Yb.test(String.fromCharCode(e))
    }
    , ia, Pa = {
        kind: "loop"
    }, Xb = {
        kind: "switch"
    }
});
var Interpreter = function(b, a) {
    "string" === typeof b && (b = this.parse_(b, "code"));
    var c = b.constructor;
    this.newNode = function() {
        return new c({
            options: {}
        })
    }
    ;
    var d = this.newNode(), f;
    for (f in b)
        d[f] = "body" === f ? b[f].slice() : b[f];
    this.ast = d;
    this.initFunc_ = a;
    this.paused_ = !1;
    this.polyfills_ = [];
    this.functionCounter_ = 0;
    this.stepFunctions_ = Object.create(null);
    b = /^step([A-Z]\w*)$/;
    var g, m;
    for (m in this)
        "function" === typeof this[m] && (g = m.match(b)) && (this.stepFunctions_[g[1]] = this[m].bind(this));
    this.globalScope = this.createScope(this.ast, null);
    this.globalObject = this.globalScope.object;
    this.ast = this.parse_(this.polyfills_.join("\n"), "polyfills");
    this.polyfills_ = void 0;
    Interpreter.stripLocations_(this.ast, void 0, void 0);
    g = new Interpreter.State(this.ast,this.globalScope);
    g.done = !1;
    this.stateStack = [g];
    this.run();
    this.value = void 0;
    this.ast = d;
    g = new Interpreter.State(this.ast,this.globalScope);
    g.done = !1;
    this.stateStack.length = 0;
    this.stateStack[0] = g
};
Interpreter.Completion = {
    NORMAL: 0,
    BREAK: 1,
    CONTINUE: 2,
    RETURN: 3,
    THROW: 4
};
Interpreter.PARSE_OPTIONS = {
    locations: !0,
    ecmaVersion: 5
};
Interpreter.READONLY_DESCRIPTOR = {
    configurable: !0,
    enumerable: !0,
    writable: !1
};
Interpreter.NONENUMERABLE_DESCRIPTOR = {
    configurable: !0,
    enumerable: !1,
    writable: !0
};
Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR = {
    configurable: !0,
    enumerable: !1,
    writable: !1
};
Interpreter.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR = {
    configurable: !1,
    enumerable: !1,
    writable: !1
};
Interpreter.VARIABLE_DESCRIPTOR = {
    configurable: !1,
    enumerable: !0,
    writable: !0
};
Interpreter.STEP_ERROR = {
    STEP_ERROR: !0
};
Interpreter.SCOPE_REFERENCE = {
    SCOPE_REFERENCE: !0
};
Interpreter.VALUE_IN_DESCRIPTOR = {
    VALUE_IN_DESCRIPTOR: !0
};
Interpreter.REGEXP_TIMEOUT = {
    REGEXP_TIMEOUT: !0
};
Interpreter.toStringCycles_ = [];
Interpreter.vm = null;
Interpreter.currentInterpreter_ = null;
Interpreter.nativeGlobal = "undefined" === typeof globalThis ? this : globalThis;
Interpreter.WORKER_CODE = ["onmessage = function(e) {", "var result;", "var data = e.data;", "switch (data[0]) {", "case 'split':", "result = data[1].split(data[2], data[3]);", "break;", "case 'match':", "result = data[1].match(data[2]);", "break;", "case 'search':", "result = data[1].search(data[2]);", "break;", "case 'replace':", "result = data[1].replace(data[2], data[3]);", "break;", "case 'exec':", "var regexp = data[1];", "regexp.lastIndex = data[2];", "result = [regexp.exec(data[3]), data[1].lastIndex];", "break;", "default:", "throw Error('Unknown RegExp operation: ' + data[0]);", "}", "postMessage(result);", "};"];
Interpreter.legalArrayLength = function(b) {
    var a = b >>> 0;
    return a === Number(b) ? a : NaN
}
;
Interpreter.legalArrayIndex = function(b) {
    var a = b >>> 0;
    return String(a) === String(b) && 4294967295 !== a ? a : NaN
}
;
Interpreter.stripLocations_ = function(b, a, c) {
    a ? b.start = a : delete b.start;
    c ? b.end = c : delete b.end;
    for (var d in b)
        if ("loc" !== d && b.hasOwnProperty(d)) {
            var f = b[d];
            f && "object" === typeof f && Interpreter.stripLocations_(f, a, c)
        }
}
;
Interpreter.prototype.REGEXP_MODE = 2;
Interpreter.prototype.REGEXP_THREAD_TIMEOUT = 1E3;
Interpreter.prototype.POLYFILL_TIMEOUT = 1E3;
Interpreter.prototype.getterStep_ = !1;
Interpreter.prototype.setterStep_ = !1;
Interpreter.prototype.appendCodeNumber_ = 0;
Interpreter.prototype.parse_ = function(b, a) {
    var c = {}, d;
    for (d in Interpreter.PARSE_OPTIONS)
        c[d] = Interpreter.PARSE_OPTIONS[d];
    c.sourceFile = a;
    return acorn.parse(b, c)
}
;
Interpreter.prototype.appendCode = function(b) {
    var a = this.stateStack[0];
    if (!a || "Program" !== a.node.type)
        throw Error("Expecting original AST to start with a Program node.");
    "string" === typeof b && (b = this.parse_(b, "appendCode" + this.appendCodeNumber_++));
    if (!b || "Program" !== b.type)
        throw Error("Expecting new AST to start with a Program node.");
    this.populateScope_(b, a.scope);
    Array.prototype.push.apply(a.node.body, b.body);
    a.done = !1
}
;
Interpreter.prototype.step = function() {
    var b = this.stateStack
      , a = Date.now() + this.POLYFILL_TIMEOUT;
    do {
        var c = b[b.length - 1];
        if (!c)
            return !1;
        var d = c.node
          , f = d.type;
        if ("Program" === f && c.done)
            return !1;
        if (this.paused_)
            break;
        var g = Interpreter.currentInterpreter_;
        Interpreter.currentInterpreter_ = this;
        try {
            try {
                var m = this.stepFunctions_[f](b, c, d)
            } catch (q) {
                if (q !== Interpreter.STEP_ERROR)
                    throw q;
            }
        } finally {
            Interpreter.currentInterpreter_ = g
        }
        m && b.push(m);
        if (this.getterStep_)
            throw Error("Getter not supported in this context");
        if (this.setterStep_)
            throw Error("Setter not supported in this context");
    } while (!d.end && a > Date.now());
    return !0
}
;
Interpreter.prototype.run = function() {
    for (; !this.paused_ && this.step(); )
        ;
    return this.paused_
}
;
Interpreter.prototype.initGlobal = function(b) {
    this.setProperty(b, "NaN", NaN, Interpreter.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR);
    this.setProperty(b, "Infinity", Infinity, Interpreter.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR);
    this.setProperty(b, "undefined", void 0, Interpreter.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR);
    this.setProperty(b, "window", b, Interpreter.READONLY_DESCRIPTOR);
    this.setProperty(b, "this", b, Interpreter.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR);
    this.setProperty(b, "self", b);
    this.OBJECT_PROTO = new Interpreter.Object(null);
    this.FUNCTION_PROTO = new Interpreter.Object(this.OBJECT_PROTO);
    this.initFunction(b);
    this.initObject(b);
    b.proto = this.OBJECT_PROTO;
    this.setProperty(b, "constructor", this.OBJECT, Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.initArray(b);
    this.initString(b);
    this.initBoolean(b);
    this.initNumber(b);
    this.initDate(b);
    this.initRegExp(b);
    this.initError(b);
    this.initMath(b);
    this.initJSON(b);
    var a = this
      , c = this.createNativeFunction(function(g) {
        throw EvalError("Can't happen");
    }, !1);
    c.eval = !0;
    this.setProperty(b, "eval", c, Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(b, "parseInt", this.createNativeFunction(parseInt, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(b, "parseFloat", this.createNativeFunction(parseFloat, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(b, "isNaN", this.createNativeFunction(isNaN, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(b, "isFinite", this.createNativeFunction(isFinite, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    c = [[escape, "escape"], [unescape, "unescape"], [decodeURI, "decodeURI"], [decodeURIComponent, "decodeURIComponent"], [encodeURI, "encodeURI"], [encodeURIComponent, "encodeURIComponent"]];
    for (var d = 0; d < c.length; d++) {
        var f = function(g) {
            return function(m) {
                try {
                    return g(m)
                } catch (q) {
                    a.throwException(a.URI_ERROR, q.message)
                }
            }
        }(c[d][0]);
        this.setProperty(b, c[d][1], this.createNativeFunction(f, !1), Interpreter.NONENUMERABLE_DESCRIPTOR)
    }
    this.OBJECT = this.OBJECT;
    this.OBJECT_PROTO = this.OBJECT_PROTO;
    this.FUNCTION = this.FUNCTION;
    this.FUNCTION_PROTO = this.FUNCTION_PROTO;
    this.ARRAY = this.ARRAY;
    this.ARRAY_PROTO = this.ARRAY_PROTO;
    this.REGEXP = this.REGEXP;
    this.REGEXP_PROTO = this.REGEXP_PROTO;
    this.DATE = this.DATE;
    this.DATE_PROTO = this.DATE_PROTO;
    this.initFunc_ && this.initFunc_(this, b)
}
;
Interpreter.prototype.functionCodeNumber_ = 0;
Interpreter.prototype.initFunction = function(b) {
    var a = this
      , c = /^[A-Za-z_$][\w$]*$/;
    var d = function(f) {
        var g = arguments.length ? String(arguments[arguments.length - 1]) : ""
          , m = Array.prototype.slice.call(arguments, 0, -1).join(",").trim();
        if (m) {
            m = m.split(/\s*,\s*/);
            for (var q = 0; q < m.length; q++) {
                var z = m[q];
                c.test(z) || a.throwException(a.SYNTAX_ERROR, "Invalid function argument: " + z)
            }
            m = m.join(", ")
        }
        try {
            var F = a.parse_("(function(" + m + ") {" + g + "})", "function" + a.functionCodeNumber_++)
        } catch (x) {
            a.throwException(a.SYNTAX_ERROR, "Invalid code: " + x.message)
        }
        1 !== F.body.length && a.throwException(a.SYNTAX_ERROR, "Invalid code in function body.");
        return a.createFunction(F.body[0].expression, a.globalScope, "anonymous")
    };
    this.FUNCTION = this.createNativeFunction(d, !0);
    this.setProperty(b, "Function", this.FUNCTION, Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.FUNCTION, "prototype", this.FUNCTION_PROTO, Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.FUNCTION_PROTO, "constructor", this.FUNCTION, Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.FUNCTION_PROTO.nativeFunc = function() {}
    ;
    this.FUNCTION_PROTO.nativeFunc.id = this.functionCounter_++;
    this.FUNCTION_PROTO.illegalConstructor = !0;
    this.setProperty(this.FUNCTION_PROTO, "length", 0, Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR);
    this.FUNCTION_PROTO.class = "Function";
    d = function(f, g) {
        var m = a.stateStack[a.stateStack.length - 1];
        m.func_ = this;
        m.funcThis_ = f;
        m.arguments_ = [];
        null !== g && void 0 !== g && (g instanceof Interpreter.Object ? m.arguments_ = a.arrayPseudoToNative(g) : a.throwException(a.TYPE_ERROR, "CreateListFromArrayLike called on non-object"));
        m.doneExec_ = !1
    }
    ;
    this.setNativeFunctionPrototype(this.FUNCTION, "apply", d);
    d = function(f) {
        var g = a.stateStack[a.stateStack.length - 1];
        g.func_ = this;
        g.funcThis_ = f;
        g.arguments_ = [];
        for (var m = 1; m < arguments.length; m++)
            g.arguments_.push(arguments[m]);
        g.doneExec_ = !1
    }
    ;
    this.setNativeFunctionPrototype(this.FUNCTION, "call", d);
    this.polyfills_.push("Object.defineProperty(Function.prototype, 'bind',", "{configurable: true, writable: true, value:", "function bind(oThis) {", "if (typeof this !== 'function') {", "throw TypeError('What is trying to be bound is not callable');", "}", "var aArgs   = Array.prototype.slice.call(arguments, 1),", "fToBind = this,", "fNOP    = function() {},", "fBound  = function() {", "return fToBind.apply(this instanceof fNOP", "? this", ": oThis,", "aArgs.concat(Array.prototype.slice.call(arguments)));", "};", "if (this.prototype) {", "fNOP.prototype = this.prototype;", "}", "fBound.prototype = new fNOP();", "return fBound;", "}", "});", "");
    d = function() {
        return String(this)
    }
    ;
    this.setNativeFunctionPrototype(this.FUNCTION, "toString", d);
    this.setProperty(this.FUNCTION, "toString", this.createNativeFunction(d, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    d = function() {
        return this.valueOf()
    }
    ;
    this.setNativeFunctionPrototype(this.FUNCTION, "valueOf", d);
    this.setProperty(this.FUNCTION, "valueOf", this.createNativeFunction(d, !1), Interpreter.NONENUMERABLE_DESCRIPTOR)
}
;
Interpreter.prototype.initObject = function(b) {
    var a = this;
    var c = function(f) {
        if (void 0 === f || null === f)
            return a.calledWithNew() ? this : a.createObjectProto(a.OBJECT_PROTO);
        if (!(f instanceof Interpreter.Object)) {
            var g = a.createObjectProto(a.getPrototype(f));
            g.data = f;
            return g
        }
        return f
    };
    this.OBJECT = this.createNativeFunction(c, !0);
    this.setProperty(this.OBJECT, "prototype", this.OBJECT_PROTO, Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.OBJECT_PROTO, "constructor", this.OBJECT, Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(b, "Object", this.OBJECT, Interpreter.NONENUMERABLE_DESCRIPTOR);
    var d = function(f) {
        void 0 !== f && null !== f || a.throwException(a.TYPE_ERROR, "Cannot convert '" + f + "' to object")
    };
    c = function(f) {
        d(f);
        return a.arrayNativeToPseudo(Object.getOwnPropertyNames(f instanceof Interpreter.Object ? f.properties : f))
    }
    ;
    this.setProperty(this.OBJECT, "getOwnPropertyNames", this.createNativeFunction(c, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    c = function(f) {
        d(f);
        f instanceof Interpreter.Object && (f = f.properties);
        return a.arrayNativeToPseudo(Object.keys(f))
    }
    ;
    this.setProperty(this.OBJECT, "keys", this.createNativeFunction(c, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    c = function(f) {
        if (null === f)
            return a.createObjectProto(null);
        f instanceof Interpreter.Object || a.throwException(a.TYPE_ERROR, "Object prototype may only be an Object or null");
        return a.createObjectProto(f)
    }
    ;
    this.setProperty(this.OBJECT, "create", this.createNativeFunction(c, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.polyfills_.push("(function() {", "var create_ = Object.create;", "Object.create = function create(proto, props) {", "var obj = create_(proto);", "props && Object.defineProperties(obj, props);", "return obj;", "};", "})();", "");
    c = function(f, g, m) {
        g = String(g);
        f instanceof Interpreter.Object || a.throwException(a.TYPE_ERROR, "Object.defineProperty called on non-object");
        m instanceof Interpreter.Object || a.throwException(a.TYPE_ERROR, "Property description must be an object");
        !f.properties[g] && f.preventExtensions && a.throwException(a.TYPE_ERROR, "Can't define property '" + g + "', object is not extensible");
        a.setProperty(f, g, Interpreter.VALUE_IN_DESCRIPTOR, m.properties);
        return f
    }
    ;
    this.setProperty(this.OBJECT, "defineProperty", this.createNativeFunction(c, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.polyfills_.push("(function() {", "var defineProperty_ = Object.defineProperty;", "Object.defineProperty = function defineProperty(obj, prop, d1) {", "var d2 = {};", "if ('configurable' in d1) d2.configurable = d1.configurable;", "if ('enumerable' in d1) d2.enumerable = d1.enumerable;", "if ('writable' in d1) d2.writable = d1.writable;", "if ('value' in d1) d2.value = d1.value;", "if ('get' in d1) d2.get = d1.get;", "if ('set' in d1) d2.set = d1.set;", "return defineProperty_(obj, prop, d2);", "};", "})();", "Object.defineProperty(Object, 'defineProperties',", "{configurable: true, writable: true, value:", "function defineProperties(obj, props) {", "var keys = Object.keys(props);", "for (var i = 0; i < keys.length; i++) {", "Object.defineProperty(obj, keys[i], props[keys[i]]);", "}", "return obj;", "}", "});", "");
    c = function(f, g) {
        f instanceof Interpreter.Object || a.throwException(a.TYPE_ERROR, "Object.getOwnPropertyDescriptor called on non-object");
        g = String(g);
        if (g in f.properties) {
            var m = Object.getOwnPropertyDescriptor(f.properties, g)
              , q = f.getter[g];
            f = f.setter[g];
            g = a.createObjectProto(a.OBJECT_PROTO);
            q || f ? (a.setProperty(g, "get", q),
            a.setProperty(g, "set", f)) : (a.setProperty(g, "value", m.value),
            a.setProperty(g, "writable", m.writable));
            a.setProperty(g, "configurable", m.configurable);
            a.setProperty(g, "enumerable", m.enumerable);
            return g
        }
    }
    ;
    this.setProperty(this.OBJECT, "getOwnPropertyDescriptor", this.createNativeFunction(c, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    c = function(f) {
        d(f);
        return a.getPrototype(f)
    }
    ;
    this.setProperty(this.OBJECT, "getPrototypeOf", this.createNativeFunction(c, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    c = function(f) {
        return !!f && !f.preventExtensions
    }
    ;
    this.setProperty(this.OBJECT, "isExtensible", this.createNativeFunction(c, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    c = function(f) {
        f instanceof Interpreter.Object && (f.preventExtensions = !0);
        return f
    }
    ;
    this.setProperty(this.OBJECT, "preventExtensions", this.createNativeFunction(c, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setNativeFunctionPrototype(this.OBJECT, "toString", Interpreter.Object.prototype.toString);
    this.setNativeFunctionPrototype(this.OBJECT, "toLocaleString", Interpreter.Object.prototype.toString);
    this.setNativeFunctionPrototype(this.OBJECT, "valueOf", Interpreter.Object.prototype.valueOf);
    c = function(f) {
        d(this);
        return this instanceof Interpreter.Object ? String(f)in this.properties : this.hasOwnProperty(f)
    }
    ;
    this.setNativeFunctionPrototype(this.OBJECT, "hasOwnProperty", c);
    c = function(f) {
        d(this);
        return this instanceof Interpreter.Object ? Object.prototype.propertyIsEnumerable.call(this.properties, f) : this.propertyIsEnumerable(f)
    }
    ;
    this.setNativeFunctionPrototype(this.OBJECT, "propertyIsEnumerable", c);
    c = function(f) {
        for (; ; ) {
            f = a.getPrototype(f);
            if (!f)
                return !1;
            if (f === this)
                return !0
        }
    }
    ;
    this.setNativeFunctionPrototype(this.OBJECT, "isPrototypeOf", c)
}
;
Interpreter.prototype.initArray = function(b) {
    var a = this;
    var c = function(d) {
        var f = a.calledWithNew() ? this : a.createArray()
          , g = arguments[0];
        if (1 === arguments.length && "number" === typeof g)
            isNaN(Interpreter.legalArrayLength(g)) && a.throwException(a.RANGE_ERROR, "Invalid array length"),
            f.properties.length = g;
        else {
            for (g = 0; g < arguments.length; g++)
                f.properties[g] = arguments[g];
            f.properties.length = g
        }
        return f
    };
    this.ARRAY = this.createNativeFunction(c, !0);
    this.ARRAY_PROTO = this.ARRAY.properties.prototype;
    this.setProperty(b, "Array", this.ARRAY, Interpreter.NONENUMERABLE_DESCRIPTOR);
    c = function(d) {
        return d && "Array" === d.class
    }
    ;
    this.setProperty(this.ARRAY, "isArray", this.createNativeFunction(c, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.ARRAY_PROTO, "length", 0, {
        configurable: !1,
        enumerable: !1,
        writable: !0
    });
    this.ARRAY_PROTO.class = "Array";
    this.polyfills_.push("Object.defineProperty(Array.prototype, 'pop',", "{configurable: true, writable: true, value:", "function pop() {", "if (!this) throw TypeError();", "var o = Object(this);", "var len = o.length >>> 0;", "if (!len || len < 0) {", "o.length = 0;", "return undefined;", "}", "len--;", "var x = o[len];", "delete o[len];", "o.length = len;", "return x;", "}", "});", "Object.defineProperty(Array.prototype, 'push',", "{configurable: true, writable: true, value:", "function push(var_args) {", "if (!this) throw TypeError();", "var o = Object(this);", "var len = o.length >>> 0;", "for (var i = 0; i < arguments.length; i++) {", "o[len] = arguments[i];", "len++;", "}", "o.length = len;", "return len;", "}", "});", "Object.defineProperty(Array.prototype, 'shift',", "{configurable: true, writable: true, value:", "function shift() {", "if (!this) throw TypeError();", "var o = Object(this);", "var len = o.length >>> 0;", "if (!len || len < 0) {", "o.length = 0;", "return undefined;", "}", "var value = o[0];", "for (var i = 0; i < len - 1; i++) {", "if ((i + 1) in o) {", "o[i] = o[i + 1];", "} else {", "delete o[i];", "}", "}", "delete o[i];", "o.length = len - 1;", "return value;", "}", "});", "Object.defineProperty(Array.prototype, 'unshift',", "{configurable: true, writable: true, value:", "function unshift(var_args) {", "if (!this) throw TypeError();", "var o = Object(this);", "var len = o.length >>> 0;", "if (!len || len < 0) {", "len = 0;", "}", "for (var i = len - 1; i >= 0; i--) {", "if (i in o) {", "o[i + arguments.length] = o[i];", "} else {", "delete o[i + arguments.length];", "}", "}", "for (var i = 0; i < arguments.length; i++) {", "o[i] = arguments[i];", "}", "return (o.length = len + arguments.length);", "}", "});", "Object.defineProperty(Array.prototype, 'reverse',", "{configurable: true, writable: true, value:", "function reverse() {", "if (!this) throw TypeError();", "var o = Object(this);", "var len = o.length >>> 0;", "if (!len || len < 2) {", "return o;", "}", "for (var i = 0; i < len / 2 - 0.5; i++) {", "var x = o[i];", "var hasX = i in o;", "if ((len - i - 1) in o) {", "o[i] = o[len - i - 1];", "} else {", "delete o[i];", "}", "if (hasX) {", "o[len - i - 1] = x;", "} else {", "delete o[len - i - 1];", "}", "}", "return o;", "}", "});", "Object.defineProperty(Array.prototype, 'indexOf',", "{configurable: true, writable: true, value:", "function indexOf(searchElement, fromIndex) {", "if (!this) throw TypeError();", "var o = Object(this);", "var len = o.length >>> 0;", "var n = fromIndex | 0;", "if (!len || n >= len) {", "return -1;", "}", "var i = Math.max(n >= 0 ? n : len - Math.abs(n), 0);", "while (i < len) {", "if (i in o && o[i] === searchElement) {", "return i;", "}", "i++;", "}", "return -1;", "}", "});", "Object.defineProperty(Array.prototype, 'lastIndexOf',", "{configurable: true, writable: true, value:", "function lastIndexOf(searchElement, fromIndex) {", "if (!this) throw TypeError();", "var o = Object(this);", "var len = o.length >>> 0;", "if (!len) {", "return -1;", "}", "var n = len - 1;", "if (arguments.length > 1) {", "n = fromIndex | 0;", "if (n) {", "n = (n > 0 || -1) * Math.floor(Math.abs(n));", "}", "}", "var i = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);", "while (i >= 0) {", "if (i in o && o[i] === searchElement) {", "return i;", "}", "i--;", "}", "return -1;", "}", "});", "Object.defineProperty(Array.prototype, 'slice',", "{configurable: true, writable: true, value:", "function slice(start, end) {", "if (!this) throw TypeError();", "var o = Object(this);", "var len = o.length >>> 0;", "start |= 0;", "start = (start >= 0) ? start : Math.max(0, len + start);", "if (typeof end !== 'undefined') {", "if (end !== Infinity) {", "end |= 0;", "}", "if (end < 0) {", "end = len + end;", "} else {", "end = Math.min(end, len);", "}", "} else {", "end = len;", "}", "var size = end - start;", "var cloned = new Array(size);", "for (var i = 0; i < size; i++) {", "if ((start + i) in o) {", "cloned[i] = o[start + i];", "}", "}", "return cloned;", "}", "});", "Object.defineProperty(Array.prototype, 'splice',", "{configurable: true, writable: true, value:", "function splice(start, deleteCount, var_args) {", "if (!this) throw TypeError();", "var o = Object(this);", "var len = o.length >>> 0;", "start |= 0;", "if (start < 0) {", "start = Math.max(len + start, 0);", "} else {", "start = Math.min(start, len);", "}", "if (arguments.length < 1) {", "deleteCount = len - start;", "} else {", "deleteCount |= 0;", "deleteCount = Math.max(0, Math.min(deleteCount, len - start));", "}", "var removed = [];", "for (var i = start; i < start + deleteCount; i++) {", "if (i in o) {", "removed.push(o[i]);", "} else {", "removed.length++;", "}", "if ((i + deleteCount) in o) {", "o[i] = o[i + deleteCount];", "} else {", "delete o[i];", "}", "}", "for (var i = start + deleteCount; i < len - deleteCount; i++) {", "if ((i + deleteCount) in o) {", "o[i] = o[i + deleteCount];", "} else {", "delete o[i];", "}", "}", "for (var i = len - deleteCount; i < len; i++) {", "delete o[i];", "}", "len -= deleteCount;", "var arl = arguments.length - 2;", "for (var i = len - 1; i >= start; i--) {", "if (i in o) {", "o[i + arl] = o[i];", "} else {", "delete o[i + arl];", "}", "}", "len += arl;", "for (var i = 2; i < arguments.length; i++) {", "o[start + i - 2] = arguments[i];", "}", "o.length = len;", "return removed;", "}", "});", "Object.defineProperty(Array.prototype, 'concat',", "{configurable: true, writable: true, value:", "function concat(var_args) {", "if (!this) throw TypeError();", "var o = Object(this);", "var cloned = [];", "for (var i = -1; i < arguments.length; i++) {", "var value = (i === -1) ? o : arguments[i];", "if (Array.isArray(value)) {", "for (var j = 0, l = value.length; j < l; j++) {", "if (j in value) {", "cloned.push(value[j]);", "} else {", "cloned.length++;", "}", "}", "} else {", "cloned.push(value);", "}", "}", "return cloned;", "}", "});", "Object.defineProperty(Array.prototype, 'join',", "{configurable: true, writable: true, value:", "function join(opt_separator) {", "if (!this) throw TypeError();", "var o = Object(this);", "var sep = typeof opt_separator === 'undefined' ?", "',' : ('' + opt_separator);", "var str = '';", "for (var i = 0; i < o.length; i++) {", "if (i && sep) {", "str += sep;", "}", "str += (o[i] === null || o[i] === undefined) ? '' : o[i];", "}", "return str;", "}", "});", "Object.defineProperty(Array.prototype, 'every',", "{configurable: true, writable: true, value:", "function every(callbackfn, thisArg) {", "if (!this || typeof callbackfn !== 'function') throw TypeError();", "var t, k;", "var o = Object(this);", "var len = o.length >>> 0;", "if (arguments.length > 1) t = thisArg;", "k = 0;", "while (k < len) {", "if (k in o && !callbackfn.call(t, o[k], k, o)) return false;", "k++;", "}", "return true;", "}", "});", "Object.defineProperty(Array.prototype, 'filter',", "{configurable: true, writable: true, value:", "function filter(fun, var_args) {", "if (this === void 0 || this === null || typeof fun !== 'function') throw TypeError();", "var o = Object(this);", "var len = o.length >>> 0;", "var res = [];", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in o) {", "var val = o[i];", "if (fun.call(thisArg, val, i, o)) res.push(val);", "}", "}", "return res;", "}", "});", "Object.defineProperty(Array.prototype, 'forEach',", "{configurable: true, writable: true, value:", "function forEach(callback, thisArg) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var t, k;", "var o = Object(this);", "var len = o.length >>> 0;", "if (arguments.length > 1) t = thisArg;", "k = 0;", "while (k < len) {", "if (k in o) callback.call(t, o[k], k, o);", "k++;", "}", "}", "});", "Object.defineProperty(Array.prototype, 'map',", "{configurable: true, writable: true, value:", "function map(callback, thisArg) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var t, a, k;", "var o = Object(this);", "var len = o.length >>> 0;", "if (arguments.length > 1) t = thisArg;", "a = new Array(len);", "k = 0;", "while (k < len) {", "if (k in o) a[k] = callback.call(t, o[k], k, o);", "k++;", "}", "return a;", "}", "});", "Object.defineProperty(Array.prototype, 'reduce',", "{configurable: true, writable: true, value:", "function reduce(callback /*, initialValue*/) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var o = Object(this), len = o.length >>> 0, k = 0, value;", "if (arguments.length === 2) {", "value = arguments[1];", "} else {", "while (k < len && !(k in o)) k++;", "if (k >= len) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = o[k++];", "}", "for (; k < len; k++) {", "if (k in o) value = callback(value, o[k], k, o);", "}", "return value;", "}", "});", "Object.defineProperty(Array.prototype, 'reduceRight',", "{configurable: true, writable: true, value:", "function reduceRight(callback /*, initialValue*/) {", "if (null === this || 'undefined' === typeof this || 'function' !== typeof callback) throw TypeError();", "var o = Object(this), len = o.length >>> 0, k = len - 1, value;", "if (arguments.length >= 2) {", "value = arguments[1];", "} else {", "while (k >= 0 && !(k in o)) k--;", "if (k < 0) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = o[k--];", "}", "for (; k >= 0; k--) {", "if (k in o) value = callback(value, o[k], k, o);", "}", "return value;", "}", "});", "Object.defineProperty(Array.prototype, 'some',", "{configurable: true, writable: true, value:", "function some(fun/*, thisArg*/) {", "if (!this || typeof fun !== 'function') throw TypeError();", "var o = Object(this);", "var len = o.length >>> 0;", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in o && fun.call(thisArg, o[i], i, o)) {", "return true;", "}", "}", "return false;", "}", "});", "Object.defineProperty(Array.prototype, 'sort',", "{configurable: true, writable: true, value:", "function sort(opt_comp) {", "if (!this) throw TypeError();", "if (typeof opt_comp !== 'function') {", "opt_comp = undefined;", "}", "for (var i = 0; i < this.length; i++) {", "var changes = 0;", "for (var j = 0; j < this.length - i - 1; j++) {", "if (opt_comp ? (opt_comp(this[j], this[j + 1]) > 0) :", "(String(this[j]) > String(this[j + 1]))) {", "var swap = this[j];", "var hasSwap = j in this;", "if ((j + 1) in this) {", "this[j] = this[j + 1];", "} else {", "delete this[j];", "}", "if (hasSwap) {", "this[j + 1] = swap;", "} else {", "delete this[j + 1];", "}", "changes++;", "}", "}", "if (!changes) break;", "}", "return this;", "}", "});", "Object.defineProperty(Array.prototype, 'toLocaleString',", "{configurable: true, writable: true, value:", "function toLocaleString() {", "if (!this) throw TypeError();", "var o = Object(this);", "var out = [];", "for (var i = 0; i < o.length; i++) {", "out[i] = (o[i] === null || o[i] === undefined) ? '' : o[i].toLocaleString();", "}", "return out.join(',');", "}", "});", "")
}
;
Interpreter.prototype.initString = function(b) {
    var a = this;
    var c = function(d) {
        d = arguments.length ? Interpreter.nativeGlobal.String(d) : "";
        return a.calledWithNew() ? (this.data = d,
        this) : d
    };
    this.STRING = this.createNativeFunction(c, !0);
    this.setProperty(b, "String", this.STRING, Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.STRING, "fromCharCode", this.createNativeFunction(String.fromCharCode, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    b = "charAt charCodeAt concat indexOf lastIndexOf slice substr substring toLocaleLowerCase toLocaleUpperCase toLowerCase toUpperCase trim".split(" ");
    for (c = 0; c < b.length; c++)
        this.setNativeFunctionPrototype(this.STRING, b[c], String.prototype[b[c]]);
    c = function(d, f, g) {
        f = a.pseudoToNative(f);
        g = a.pseudoToNative(g);
        try {
            return String(this).localeCompare(d, f, g)
        } catch (m) {
            a.throwException(a.ERROR, "localeCompare: " + m.message)
        }
    }
    ;
    this.setNativeFunctionPrototype(this.STRING, "localeCompare", c);
    c = function(d, f, g) {
        var m = String(this);
        f = f ? Number(f) : void 0;
        if (a.isa(d, a.REGEXP) && (d = d.data,
        a.maybeThrowRegExp(d, g),
        2 === a.REGEXP_MODE)) {
            if (Interpreter.vm)
                d = a.vmCall("string.split(separator, limit)", {
                    string: m,
                    separator: d,
                    limit: f
                }, d, g),
                d !== Interpreter.REGEXP_TIMEOUT && g(a.arrayNativeToPseudo(d));
            else {
                var q = a.createWorker()
                  , z = a.regExpTimeout(d, q, g);
                q.onmessage = function(F) {
                    clearTimeout(z);
                    g(a.arrayNativeToPseudo(F.data))
                }
                ;
                q.postMessage(["split", m, d, f])
            }
            return
        }
        d = m.split(d, f);
        g(a.arrayNativeToPseudo(d))
    }
    ;
    this.setAsyncFunctionPrototype(this.STRING, "split", c);
    c = function(d, f) {
        var g = String(this);
        d = a.isa(d, a.REGEXP) ? d.data : new RegExp(d);
        a.maybeThrowRegExp(d, f);
        if (2 === a.REGEXP_MODE)
            if (Interpreter.vm)
                d = a.vmCall("string.match(regexp)", {
                    string: g,
                    regexp: d
                }, d, f),
                d !== Interpreter.REGEXP_TIMEOUT && f(d && a.arrayNativeToPseudo(d));
            else {
                var m = a.createWorker()
                  , q = a.regExpTimeout(d, m, f);
                m.onmessage = function(z) {
                    clearTimeout(q);
                    f(z.data && a.arrayNativeToPseudo(z.data))
                }
                ;
                m.postMessage(["match", g, d])
            }
        else
            d = g.match(d),
            f(d && a.arrayNativeToPseudo(d))
    }
    ;
    this.setAsyncFunctionPrototype(this.STRING, "match", c);
    c = function(d, f) {
        var g = String(this);
        d = a.isa(d, a.REGEXP) ? d.data : new RegExp(d);
        a.maybeThrowRegExp(d, f);
        if (2 === a.REGEXP_MODE)
            if (Interpreter.vm)
                d = a.vmCall("string.search(regexp)", {
                    string: g,
                    regexp: d
                }, d, f),
                d !== Interpreter.REGEXP_TIMEOUT && f(d);
            else {
                var m = a.createWorker()
                  , q = a.regExpTimeout(d, m, f);
                m.onmessage = function(z) {
                    clearTimeout(q);
                    f(z.data)
                }
                ;
                m.postMessage(["search", g, d])
            }
        else
            f(g.search(d))
    }
    ;
    this.setAsyncFunctionPrototype(this.STRING, "search", c);
    c = function(d, f, g) {
        var m = String(this);
        f = String(f);
        if (a.isa(d, a.REGEXP) && (d = d.data,
        a.maybeThrowRegExp(d, g),
        2 === a.REGEXP_MODE)) {
            if (Interpreter.vm)
                d = a.vmCall("string.replace(substr, newSubstr)", {
                    string: m,
                    substr: d,
                    newSubstr: f
                }, d, g),
                d !== Interpreter.REGEXP_TIMEOUT && g(d);
            else {
                var q = a.createWorker()
                  , z = a.regExpTimeout(d, q, g);
                q.onmessage = function(F) {
                    clearTimeout(z);
                    g(F.data)
                }
                ;
                q.postMessage(["replace", m, d, f])
            }
            return
        }
        g(m.replace(d, f))
    }
    ;
    this.setAsyncFunctionPrototype(this.STRING, "replace", c);
    this.polyfills_.push("(function() {", "var replace_ = String.prototype.replace;", "String.prototype.replace = function replace(substr, newSubstr) {", "if (typeof newSubstr !== 'function') {", "return replace_.call(this, substr, newSubstr);", "}", "var str = this;", "if (substr instanceof RegExp) {", "var subs = [];", "var m = substr.exec(str);", "while (m) {", "m.push(m.index, str);", "var inject = newSubstr.apply(null, m);", "subs.push([m.index, m[0].length, inject]);", "m = substr.global ? substr.exec(str) : null;", "}", "for (var i = subs.length - 1; i >= 0; i--) {", "str = str.substring(0, subs[i][0]) + subs[i][2] + str.substring(subs[i][0] + subs[i][1]);", "}", "} else {", "var i = str.indexOf(substr);", "if (i !== -1) {", "var inject = newSubstr(str.substr(i, substr.length), i, str);", "str = str.substring(0, i) + inject + str.substring(i + substr.length);", "}", "}", "return str;", "};", "})();", "")
}
;
Interpreter.prototype.initBoolean = function(b) {
    var a = this;
    this.BOOLEAN = this.createNativeFunction(function(c) {
        c = Interpreter.nativeGlobal.Boolean(c);
        return a.calledWithNew() ? (this.data = c,
        this) : c
    }, !0);
    this.setProperty(b, "Boolean", this.BOOLEAN, Interpreter.NONENUMERABLE_DESCRIPTOR)
}
;
Interpreter.prototype.initNumber = function(b) {
    var a = this;
    var c = function(d) {
        d = arguments.length ? Interpreter.nativeGlobal.Number(d) : 0;
        return a.calledWithNew() ? (this.data = d,
        this) : d
    };
    this.NUMBER = this.createNativeFunction(c, !0);
    this.setProperty(b, "Number", this.NUMBER, Interpreter.NONENUMERABLE_DESCRIPTOR);
    b = ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"];
    for (c = 0; c < b.length; c++)
        this.setProperty(this.NUMBER, b[c], Number[b[c]], Interpreter.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR);
    c = function(d) {
        try {
            return Number(this).toExponential(d)
        } catch (f) {
            a.throwException(a.ERROR, f.message)
        }
    }
    ;
    this.setNativeFunctionPrototype(this.NUMBER, "toExponential", c);
    c = function(d) {
        try {
            return Number(this).toFixed(d)
        } catch (f) {
            a.throwException(a.ERROR, f.message)
        }
    }
    ;
    this.setNativeFunctionPrototype(this.NUMBER, "toFixed", c);
    c = function(d) {
        try {
            return Number(this).toPrecision(d)
        } catch (f) {
            a.throwException(a.ERROR, f.message)
        }
    }
    ;
    this.setNativeFunctionPrototype(this.NUMBER, "toPrecision", c);
    c = function(d) {
        try {
            return Number(this).toString(d)
        } catch (f) {
            a.throwException(a.ERROR, f.message)
        }
    }
    ;
    this.setNativeFunctionPrototype(this.NUMBER, "toString", c);
    c = function(d, f) {
        d = d ? a.pseudoToNative(d) : void 0;
        f = f ? a.pseudoToNative(f) : void 0;
        return Number(this).toLocaleString(d, f)
    }
    ;
    this.setNativeFunctionPrototype(this.NUMBER, "toLocaleString", c)
}
;
Interpreter.prototype.initDate = function(b) {
    var a = this;
    var c = function(f, g) {
        if (!a.calledWithNew())
            return Interpreter.nativeGlobal.Date();
        var m = [null].concat(Array.from(arguments));
        this.data = new (Function.prototype.bind.apply(Interpreter.nativeGlobal.Date, m));
        return this
    };
    this.DATE = this.createNativeFunction(c, !0);
    this.DATE_PROTO = this.DATE.properties.prototype;
    this.setProperty(b, "Date", this.DATE, Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.DATE, "now", this.createNativeFunction(Date.now, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.DATE, "parse", this.createNativeFunction(Date.parse, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.DATE, "UTC", this.createNativeFunction(Date.UTC, !1), Interpreter.NONENUMERABLE_DESCRIPTOR);
    b = "getDate getDay getFullYear getHours getMilliseconds getMinutes getMonth getSeconds getTime getTimezoneOffset getUTCDate getUTCDay getUTCFullYear getUTCHours getUTCMilliseconds getUTCMinutes getUTCMonth getUTCSeconds getYear setDate setFullYear setHours setMilliseconds setMinutes setMonth setSeconds setTime setUTCDate setUTCFullYear setUTCHours setUTCMilliseconds setUTCMinutes setUTCMonth setUTCSeconds setYear toDateString toISOString toJSON toGMTString toLocaleDateString toLocaleString toLocaleTimeString toTimeString toUTCString".split(" ");
    for (var d = 0; d < b.length; d++)
        c = function(f) {
            return function(g) {
                var m = this.data;
                m instanceof Date || a.throwException(a.TYPE_ERROR, f + " not called on a Date");
                for (var q = [], z = 0; z < arguments.length; z++)
                    q[z] = a.pseudoToNative(arguments[z]);
                return m[f].apply(m, q)
            }
        }(b[d]),
        this.setNativeFunctionPrototype(this.DATE, b[d], c)
}
;
Interpreter.prototype.initRegExp = function(b) {
    var a = this;
    var c = function(d, f) {
        if (a.calledWithNew())
            var g = this;
        else {
            if (void 0 === f && a.isa(d, a.REGEXP))
                return d;
            g = a.createObjectProto(a.REGEXP_PROTO)
        }
        d = void 0 === d ? "" : String(d);
        f = f ? String(f) : "";
        a.populateRegExp(g, new Interpreter.nativeGlobal.RegExp(d,f));
        return g
    };
    this.REGEXP = this.createNativeFunction(c, !0);
    this.REGEXP_PROTO = this.REGEXP.properties.prototype;
    this.setProperty(b, "RegExp", this.REGEXP, Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.REGEXP.properties.prototype, "global", void 0, Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.REGEXP.properties.prototype, "ignoreCase", void 0, Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.REGEXP.properties.prototype, "multiline", void 0, Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.REGEXP.properties.prototype, "source", "(?:)", Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR);
    this.polyfills_.push("Object.defineProperty(RegExp.prototype, 'test',", "{configurable: true, writable: true, value:", "function test(str) {", "return !!this.exec(str);", "}", "});");
    c = function(d, f) {
        function g(x) {
            if (x) {
                var ha = a.arrayNativeToPseudo(x);
                a.setProperty(ha, "index", x.index);
                a.setProperty(ha, "input", x.input);
                return ha
            }
            return null
        }
        var m = this.data;
        d = String(d);
        m.lastIndex = Number(a.getProperty(this, "lastIndex"));
        a.maybeThrowRegExp(m, f);
        if (2 === a.REGEXP_MODE)
            if (Interpreter.vm)
                d = a.vmCall("regexp.exec(string)", {
                    string: d,
                    regexp: m
                }, m, f),
                d !== Interpreter.REGEXP_TIMEOUT && (a.setProperty(this, "lastIndex", m.lastIndex),
                f(g(d)));
            else {
                var q = a.createWorker()
                  , z = a.regExpTimeout(m, q, f)
                  , F = this;
                q.onmessage = function(x) {
                    clearTimeout(z);
                    a.setProperty(F, "lastIndex", x.data[1]);
                    f(g(x.data[0]))
                }
                ;
                q.postMessage(["exec", m, m.lastIndex, d])
            }
        else
            d = m.exec(d),
            a.setProperty(this, "lastIndex", m.lastIndex),
            f(g(d))
    }
    ;
    this.setAsyncFunctionPrototype(this.REGEXP, "exec", c)
}
;
Interpreter.prototype.initError = function(b) {
    var a = this;
    this.ERROR = this.createNativeFunction(function(d) {
        var f = a.calledWithNew() ? this : a.createObject(a.ERROR);
        a.populateError(f, d);
        return f
    }, !0);
    this.setProperty(b, "Error", this.ERROR, Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.ERROR.properties.prototype, "message", "", Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(this.ERROR.properties.prototype, "name", "Error", Interpreter.NONENUMERABLE_DESCRIPTOR);
    var c = function(d) {
        var f = a.createNativeFunction(function(g) {
            var m = a.calledWithNew() ? this : a.createObject(f);
            a.populateError(m, g);
            return m
        }, !0);
        a.setProperty(f, "prototype", a.createObject(a.ERROR), Interpreter.NONENUMERABLE_DESCRIPTOR);
        a.setProperty(f.properties.prototype, "name", d, Interpreter.NONENUMERABLE_DESCRIPTOR);
        a.setProperty(b, d, f, Interpreter.NONENUMERABLE_DESCRIPTOR);
        return f
    };
    this.EVAL_ERROR = c("EvalError");
    this.RANGE_ERROR = c("RangeError");
    this.REFERENCE_ERROR = c("ReferenceError");
    this.SYNTAX_ERROR = c("SyntaxError");
    this.TYPE_ERROR = c("TypeError");
    this.URI_ERROR = c("URIError")
}
;
Interpreter.prototype.initMath = function(b) {
    var a = this.createObjectProto(this.OBJECT_PROTO);
    this.setProperty(b, "Math", a, Interpreter.NONENUMERABLE_DESCRIPTOR);
    var c = "E LN2 LN10 LOG2E LOG10E PI SQRT1_2 SQRT2".split(" ");
    for (b = 0; b < c.length; b++)
        this.setProperty(a, c[b], Math[c[b]], Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR);
    c = "abs acos asin atan atan2 ceil cos exp floor log max min pow random round sin sqrt tan".split(" ");
    for (b = 0; b < c.length; b++)
        this.setProperty(a, c[b], this.createNativeFunction(Math[c[b]], !1), Interpreter.NONENUMERABLE_DESCRIPTOR)
}
;
Interpreter.prototype.initJSON = function(b) {
    var a = this
      , c = a.createObjectProto(this.OBJECT_PROTO);
    this.setProperty(b, "JSON", c, Interpreter.NONENUMERABLE_DESCRIPTOR);
    b = function(d) {
        try {
            var f = JSON.parse(String(d))
        } catch (g) {
            a.throwException(a.SYNTAX_ERROR, g.message)
        }
        return a.nativeToPseudo(f)
    }
    ;
    this.setProperty(c, "parse", this.createNativeFunction(b, !1));
    b = function(d, f, g) {
        f && "Function" === f.class ? a.throwException(a.TYPE_ERROR, "Function replacer on JSON.stringify not supported") : f && "Array" === f.class ? (f = a.arrayPseudoToNative(f),
        f = f.filter(function(q) {
            return "string" === typeof q || "number" === typeof q
        })) : f = null;
        "string" !== typeof g && "number" !== typeof g && (g = void 0);
        d = a.pseudoToNative(d);
        try {
            var m = JSON.stringify(d, f, g)
        } catch (q) {
            a.throwException(a.TYPE_ERROR, q.message)
        }
        return m
    }
    ;
    this.setProperty(c, "stringify", this.createNativeFunction(b, !1))
}
;
Interpreter.prototype.isa = function(b, a) {
    if (null === b || void 0 === b || !a)
        return !1;
    a = a.properties.prototype;
    if (b === a)
        return !0;
    for (b = this.getPrototype(b); b; ) {
        if (b === a)
            return !0;
        b = b.proto
    }
    return !1
}
;
Interpreter.prototype.populateRegExp = function(b, a) {
    b.data = new RegExp(a.source,a.flags);
    this.setProperty(b, "lastIndex", a.lastIndex, Interpreter.NONENUMERABLE_DESCRIPTOR);
    this.setProperty(b, "source", a.source, Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR);
    this.setProperty(b, "global", a.global, Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR);
    this.setProperty(b, "ignoreCase", a.ignoreCase, Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR);
    this.setProperty(b, "multiline", a.multiline, Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR)
}
;
Interpreter.prototype.populateError = function(b, a) {
    a && this.setProperty(b, "message", String(a), Interpreter.NONENUMERABLE_DESCRIPTOR);
    a = [];
    for (var c = this.stateStack.length - 1; 0 <= c; c--) {
        var d = this.stateStack[c]
          , f = d.node;
        "CallExpression" === f.type && (d = d.func_) && a.length && (a[a.length - 1].name = this.getProperty(d, "name"));
        !f.loc || a.length && "CallExpression" !== f.type || a.push({
            loc: f.loc
        })
    }
    f = String(this.getProperty(b, "name"));
    c = String(this.getProperty(b, "message"));
    d = f + ": " + c + "\n";
    for (c = 0; c < a.length; c++) {
        var g = a[c].loc;
        f = a[c].name;
        g = g.source + ":" + g.start.line + ":" + g.start.column;
        d = f ? d + ("  at " + f + " (" + g + ")\n") : d + ("  at " + g + "\n")
    }
    this.setProperty(b, "stack", d.trim(), Interpreter.NONENUMERABLE_DESCRIPTOR)
}
;
Interpreter.prototype.createWorker = function() {
    var b = this.createWorker.blob_;
    b || (b = new Blob([Interpreter.WORKER_CODE.join("\n")],{
        type: "application/javascript"
    }),
    this.createWorker.blob_ = b);
    return new Worker(URL.createObjectURL(b))
}
;
Interpreter.prototype.vmCall = function(b, a, c, d) {
    var f = {
        timeout: this.REGEXP_THREAD_TIMEOUT
    };
    try {
        return Interpreter.vm.runInNewContext(b, a, f)
    } catch (g) {
        d(null),
        this.throwException(this.ERROR, "RegExp Timeout: " + c)
    }
    return Interpreter.REGEXP_TIMEOUT
}
;
Interpreter.prototype.maybeThrowRegExp = function(b, a) {
    if (0 === this.REGEXP_MODE)
        var c = !1;
    else if (1 === this.REGEXP_MODE)
        c = !0;
    else if (Interpreter.vm)
        c = !0;
    else if ("function" === typeof Worker && "function" === typeof URL)
        c = !0;
    else if ("function" === typeof require) {
        try {
            Interpreter.vm = require("vm")
        } catch (d) {}
        c = !!Interpreter.vm
    } else
        c = !1;
    c || (a(null),
    this.throwException(this.ERROR, "Regular expressions not supported: " + b))
}
;
Interpreter.prototype.regExpTimeout = function(b, a, c) {
    var d = this;
    return setTimeout(function() {
        a.terminate();
        c(null);
        try {
            d.throwException(d.ERROR, "RegExp Timeout: " + b)
        } catch (f) {}
    }, this.REGEXP_THREAD_TIMEOUT)
}
;
Interpreter.prototype.createObject = function(b) {
    return this.createObjectProto(b && b.properties.prototype)
}
;
Interpreter.prototype.createObjectProto = function(b) {
    if ("object" !== typeof b)
        throw Error("Non object prototype");
    b = new Interpreter.Object(b);
    this.isa(b, this.ERROR) && (b.class = "Error");
    return b
}
;
Interpreter.prototype.createArray = function() {
    var b = this.createObjectProto(this.ARRAY_PROTO);
    this.setProperty(b, "length", 0, {
        configurable: !1,
        enumerable: !1,
        writable: !0
    });
    b.class = "Array";
    return b
}
;
Interpreter.prototype.createFunctionBase_ = function(b, a) {
    var c = this.createObjectProto(this.FUNCTION_PROTO);
    a ? (a = this.createObjectProto(this.OBJECT_PROTO),
    this.setProperty(c, "prototype", a, Interpreter.NONENUMERABLE_DESCRIPTOR),
    this.setProperty(a, "constructor", c, Interpreter.NONENUMERABLE_DESCRIPTOR)) : c.illegalConstructor = !0;
    this.setProperty(c, "length", b, Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR);
    c.class = "Function";
    return c
}
;
Interpreter.prototype.createFunction = function(b, a, c) {
    var d = this.createFunctionBase_(b.params.length, !0);
    d.parentScope = a;
    d.node = b;
    this.setProperty(d, "name", b.id ? String(b.id.name) : c || "", Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR);
    return d
}
;
Interpreter.prototype.createNativeFunction = function(b, a) {
    a = this.createFunctionBase_(b.length, a);
    a.nativeFunc = b;
    b.id = this.functionCounter_++;
    this.setProperty(a, "name", b.name, Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR);
    return a
}
;
Interpreter.prototype.createAsyncFunction = function(b) {
    var a = this.createFunctionBase_(b.length, !0);
    a.asyncFunc = b;
    b.id = this.functionCounter_++;
    this.setProperty(a, "name", b.name, Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR);
    return a
}
;
Interpreter.prototype.nativeToPseudo = function(b) {
    if (b instanceof Interpreter.Object)
        throw Error("Object is already pseudo");
    if ("object" !== typeof b && "function" !== typeof b || null === b)
        return b;
    if (b instanceof RegExp) {
        var a = this.createObjectProto(this.REGEXP_PROTO);
        this.populateRegExp(a, b);
        return a
    }
    if (b instanceof Date)
        return a = this.createObjectProto(this.DATE_PROTO),
        a.data = new Date(b.valueOf()),
        a;
    if ("function" === typeof b) {
        var c = this;
        a = Object.getOwnPropertyDescriptor(b, "prototype");
        return this.createNativeFunction(function() {
            var f = Array.prototype.slice.call(arguments).map(function(g) {
                return c.pseudoToNative(g)
            });
            f = b.apply(c, f);
            return c.nativeToPseudo(f)
        }, !!a)
    }
    if (Array.isArray(b)) {
        a = this.createArray();
        for (var d = 0; d < b.length; d++)
            d in b && this.setProperty(a, d, this.nativeToPseudo(b[d]));
        return a
    }
    a = this.createObjectProto(this.OBJECT_PROTO);
    for (d in b)
        this.setProperty(a, d, this.nativeToPseudo(b[d]));
    return a
}
;
Interpreter.prototype.pseudoToNative = function(b, a) {
    if ("object" !== typeof b && "function" !== typeof b || null === b)
        return b;
    if (!(b instanceof Interpreter.Object))
        throw Error("Object is not pseudo");
    if (this.isa(b, this.REGEXP))
        return a = new RegExp(b.data.source,b.data.flags),
        a.lastIndex = b.data.lastIndex,
        a;
    if (this.isa(b, this.DATE))
        return new Date(b.data.valueOf());
    a = a || {
        pseudo: [],
        native: []
    };
    var c = a.pseudo.indexOf(b);
    if (-1 !== c)
        return a.native[c];
    a.pseudo.push(b);
    if (this.isa(b, this.ARRAY)) {
        var d = [];
        a.native.push(d);
        var f = this.getProperty(b, "length");
        for (c = 0; c < f; c++)
            this.hasProperty(b, c) && (d[c] = this.pseudoToNative(this.getProperty(b, c), a))
    } else
        for (f in d = {},
        a.native.push(d),
        b.properties)
            c = this.pseudoToNative(b.properties[f], a),
            Object.defineProperty(d, f, {
                value: c,
                writable: !0,
                enumerable: !0,
                configurable: !0
            });
    a.pseudo.pop();
    a.native.pop();
    return d
}
;
Interpreter.prototype.arrayNativeToPseudo = function(b) {
    for (var a = this.createArray(), c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++)
        this.setProperty(a, c[d], b[c[d]]);
    return a
}
;
Interpreter.prototype.arrayPseudoToNative = function(b) {
    var a = [], c;
    for (c in b.properties)
        a[c] = this.getProperty(b, c);
    a.length = Interpreter.legalArrayLength(this.getProperty(b, "length")) || 0;
    return a
}
;
Interpreter.prototype.getPrototype = function(b) {
    switch (typeof b) {
    case "number":
        return this.NUMBER.properties.prototype;
    case "boolean":
        return this.BOOLEAN.properties.prototype;
    case "string":
        return this.STRING.properties.prototype
    }
    return b ? b.proto : null
}
;
Interpreter.prototype.getProperty = function(b, a) {
    if (this.getterStep_)
        throw Error("Getter not supported in that context");
    a = String(a);
    void 0 !== b && null !== b || this.throwException(this.TYPE_ERROR, "Cannot read property '" + a + "' of " + b);
    if ("object" === typeof b && !(b instanceof Interpreter.Object))
        throw TypeError("Expecting native value or pseudo object");
    if ("length" === a) {
        if (this.isa(b, this.STRING))
            return String(b).length
    } else if (64 > a.charCodeAt(0) && this.isa(b, this.STRING)) {
        var c = Interpreter.legalArrayIndex(a);
        if (!isNaN(c) && c < String(b).length)
            return String(b)[c]
    }
    do
        if (b.properties && a in b.properties)
            return (c = b.getter[a]) ? (this.getterStep_ = !0,
            c) : b.properties[a];
    while (b = this.getPrototype(b))
}
;
Interpreter.prototype.hasProperty = function(b, a) {
    if (!(b instanceof Interpreter.Object))
        throw TypeError("Primitive data type has no properties");
    a = String(a);
    if ("length" === a && this.isa(b, this.STRING))
        return !0;
    if (this.isa(b, this.STRING)) {
        var c = Interpreter.legalArrayIndex(a);
        if (!isNaN(c) && c < String(b).length)
            return !0
    }
    do
        if (b.properties && a in b.properties)
            return !0;
    while (b = this.getPrototype(b));
    return !1
}
;
Interpreter.prototype.setProperty = function(b, a, c, d) {
    if (this.setterStep_)
        throw Error("Setter not supported in that context");
    a = String(a);
    void 0 !== b && null !== b || this.throwException(this.TYPE_ERROR, "Cannot set property '" + a + "' of " + b);
    if ("object" === typeof b && !(b instanceof Interpreter.Object))
        throw TypeError("Expecting native value or pseudo object");
    d && ("get"in d || "set"in d) && ("value"in d || "writable"in d) && this.throwException(this.TYPE_ERROR, "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
    var f = !this.stateStack || this.getScope().strict;
    if (b instanceof Interpreter.Object) {
        if (this.isa(b, this.STRING)) {
            var g = Interpreter.legalArrayIndex(a);
            if ("length" === a || !isNaN(g) && g < String(b).length) {
                f && this.throwException(this.TYPE_ERROR, "Cannot assign to read only property '" + a + "' of String '" + b.data + "'");
                return
            }
        }
        if ("Array" === b.class)
            if (g = b.properties.length,
            "length" === a) {
                if (d) {
                    if (!("value"in d))
                        return;
                    c = d.value
                }
                c = Interpreter.legalArrayLength(c);
                isNaN(c) && this.throwException(this.RANGE_ERROR, "Invalid array length");
                if (c < g)
                    for (m in b.properties) {
                        var m = Interpreter.legalArrayIndex(m);
                        !isNaN(m) && c <= m && delete b.properties[m]
                    }
            } else
                isNaN(m = Interpreter.legalArrayIndex(a)) || (b.properties.length = Math.max(g, m + 1));
        if (!b.preventExtensions || a in b.properties)
            if (d) {
                f = {};
                "get"in d && d.get && (b.getter[a] = d.get,
                f.get = this.setProperty.placeholderGet_);
                "set"in d && d.set && (b.setter[a] = d.set,
                f.set = this.setProperty.placeholderSet_);
                "configurable"in d && (f.configurable = d.configurable);
                "enumerable"in d && (f.enumerable = d.enumerable);
                "writable"in d && (f.writable = d.writable,
                delete b.getter[a],
                delete b.setter[a]);
                "value"in d ? (f.value = d.value,
                delete b.getter[a],
                delete b.setter[a]) : c !== Interpreter.VALUE_IN_DESCRIPTOR && (f.value = c,
                delete b.getter[a],
                delete b.setter[a]);
                try {
                    Object.defineProperty(b.properties, a, f)
                } catch (q) {
                    this.throwException(this.TYPE_ERROR, "Cannot redefine property: " + a)
                }
                "get"in d && !d.get && delete b.getter[a];
                "set"in d && !d.set && delete b.setter[a]
            } else {
                if (c === Interpreter.VALUE_IN_DESCRIPTOR)
                    throw ReferenceError("Value not specified.");
                for (d = b; !(a in d.properties); )
                    if (d = this.getPrototype(d),
                    !d) {
                        d = b;
                        break
                    }
                if (d.setter && d.setter[a])
                    return this.setterStep_ = !0,
                    d.setter[a];
                if (d.getter && d.getter[a])
                    f && this.throwException(this.TYPE_ERROR, "Cannot set property '" + a + "' of object '" + b + "' which only has a getter");
                else
                    try {
                        b.properties[a] = c
                    } catch (q) {
                        f && this.throwException(this.TYPE_ERROR, "Cannot assign to read only property '" + a + "' of object '" + b + "'")
                    }
            }
        else
            f && this.throwException(this.TYPE_ERROR, "Can't add property '" + a + "', object is not extensible")
    } else
        f && this.throwException(this.TYPE_ERROR, "Can't create property '" + a + "' on '" + b + "'")
}
;
Interpreter.prototype.setProperty.placeholderGet_ = function() {
    throw Error("Placeholder getter");
}
;
Interpreter.prototype.setProperty.placeholderSet_ = function() {
    throw Error("Placeholder setter");
}
;
Interpreter.prototype.setNativeFunctionPrototype = function(b, a, c) {
    this.setProperty(b.properties.prototype, a, this.createNativeFunction(c, !1), Interpreter.NONENUMERABLE_DESCRIPTOR)
}
;
Interpreter.prototype.setAsyncFunctionPrototype = function(b, a, c) {
    this.setProperty(b.properties.prototype, a, this.createAsyncFunction(c), Interpreter.NONENUMERABLE_DESCRIPTOR)
}
;
Interpreter.prototype.getScope = function() {
    var b = this.stateStack[this.stateStack.length - 1].scope;
    if (!b)
        throw Error("No scope found.");
    return b
}
;
Interpreter.prototype.createScope = function(b, a) {
    var c = !1;
    if (a && a.strict)
        c = !0;
    else {
        var d = b.body && b.body[0];
        d && d.expression && "Literal" === d.expression.type && "use strict" === d.expression.value && (c = !0)
    }
    d = this.createObjectProto(null);
    c = new Interpreter.Scope(a,c,d);
    a || this.initGlobal(c.object);
    this.populateScope_(b, c);
    return c
}
;
Interpreter.prototype.createSpecialScope = function(b, a) {
    if (!b)
        throw Error("parentScope required");
    a = a || this.createObjectProto(null);
    return new Interpreter.Scope(b,b.strict,a)
}
;
Interpreter.prototype.getValueFromScope = function(b) {
    for (var a = this.getScope(); a && a !== this.globalScope; ) {
        if (b in a.object.properties)
            return a.object.properties[b];
        a = a.parentScope
    }
    if (a === this.globalScope && this.hasProperty(a.object, b))
        return this.getProperty(a.object, b);
    a = this.stateStack[this.stateStack.length - 1].node;
    "UnaryExpression" === a.type && "typeof" === a.operator || this.throwException(this.REFERENCE_ERROR, b + " is not defined")
}
;
Interpreter.prototype.setValueToScope = function(b, a) {
    for (var c = this.getScope(), d = c.strict; c && c !== this.globalScope; ) {
        if (b in c.object.properties) {
            c.object.properties[b] = a;
            return
        }
        c = c.parentScope
    }
    if (c === this.globalScope && (!d || this.hasProperty(c.object, b)))
        return this.setProperty(c.object, b, a);
    this.throwException(this.REFERENCE_ERROR, b + " is not defined")
}
;
Interpreter.prototype.populateScope_ = function(b, a) {
    if ("VariableDeclaration" === b.type)
        for (var c = 0; c < b.declarations.length; c++)
            this.setProperty(a.object, b.declarations[c].id.name, void 0, Interpreter.VARIABLE_DESCRIPTOR);
    else {
        if ("FunctionDeclaration" === b.type) {
            this.setProperty(a.object, b.id.name, this.createFunction(b, a), Interpreter.VARIABLE_DESCRIPTOR);
            return
        }
        if ("FunctionExpression" === b.type || "ExpressionStatement" === b.type)
            return
    }
    var d = b.constructor, f;
    for (f in b) {
        var g = b[f];
        if (g && "object" === typeof g)
            if (Array.isArray(g))
                for (c = 0; c < g.length; c++)
                    g[c] && g[c].constructor === d && this.populateScope_(g[c], a);
            else
                g.constructor === d && this.populateScope_(g, a)
    }
}
;
Interpreter.prototype.calledWithNew = function() {
    return this.stateStack[this.stateStack.length - 1].isConstructor
}
;
Interpreter.prototype.getValue = function(b) {
    return b[0] === Interpreter.SCOPE_REFERENCE ? this.getValueFromScope(b[1]) : this.getProperty(b[0], b[1])
}
;
Interpreter.prototype.setValue = function(b, a) {
    return b[0] === Interpreter.SCOPE_REFERENCE ? this.setValueToScope(b[1], a) : this.setProperty(b[0], b[1], a)
}
;
Interpreter.prototype.throwException = function(b, a) {
    void 0 !== a && (b = this.createObject(b),
    this.populateError(b, a));
    this.unwind(Interpreter.Completion.THROW, b, void 0);
    throw Interpreter.STEP_ERROR;
}
;
Interpreter.prototype.unwind = function(b, a, c) {
    if (b === Interpreter.Completion.NORMAL)
        throw TypeError("Should not unwind for NORMAL completions");
    var d = this.stateStack;
    a: for (; 0 < d.length; d.pop()) {
        var f = d[d.length - 1];
        switch (f.node.type) {
        case "TryStatement":
            f.cv = {
                type: b,
                value: a,
                label: c
            };
            return;
        case "CallExpression":
        case "NewExpression":
            if (b === Interpreter.Completion.RETURN) {
                f.value = a;
                return
            }
            if (b !== Interpreter.Completion.THROW)
                throw Error("Unsynatctic break/continue not rejected by Acorn");
            break;
        case "Program":
            f.done = !0;
            break a
        }
        if (b === Interpreter.Completion.BREAK) {
            if (c ? f.labels && -1 !== f.labels.indexOf(c) : f.isLoop || f.isSwitch) {
                d.pop();
                return
            }
        } else if (b === Interpreter.Completion.CONTINUE && (c ? f.labels && -1 !== f.labels.indexOf(c) : f.isLoop))
            return
    }
    this.isa(a, this.ERROR) ? (b = {
        EvalError: EvalError,
        RangeError: RangeError,
        ReferenceError: ReferenceError,
        SyntaxError: SyntaxError,
        TypeError: TypeError,
        URIError: URIError
    },
    c = String(this.getProperty(a, "name")),
    d = this.getProperty(a, "message").valueOf(),
    b = (b[c] || Error)(d),
    b.stack = String(this.getProperty(a, "stack"))) : b = String(a);
    throw b;
}
;
Interpreter.prototype.createGetter_ = function(b, a) {
    if (!this.getterStep_)
        throw Error("Unexpected call to createGetter");
    this.getterStep_ = !1;
    a = Array.isArray(a) ? a[0] : a;
    var c = new this.newNode;
    c.type = "CallExpression";
    c = new Interpreter.State(c,this.stateStack[this.stateStack.length - 1].scope);
    c.doneCallee_ = 2;
    c.funcThis_ = a;
    c.func_ = b;
    c.doneArgs_ = !0;
    c.arguments_ = [];
    return c
}
;
Interpreter.prototype.createSetter_ = function(b, a, c) {
    if (!this.setterStep_)
        throw Error("Unexpected call to createSetter");
    this.setterStep_ = !1;
    a = Array.isArray(a) ? a[0] : this.globalObject;
    var d = new this.newNode;
    d.type = "CallExpression";
    d = new Interpreter.State(d,this.stateStack[this.stateStack.length - 1].scope);
    d.doneCallee_ = 2;
    d.funcThis_ = a;
    d.func_ = b;
    d.doneArgs_ = !0;
    d.arguments_ = [c];
    return d
}
;
Interpreter.prototype.boxThis_ = function(b) {
    if (void 0 === b || null === b)
        return this.globalObject;
    if (!(b instanceof Interpreter.Object)) {
        var a = this.createObjectProto(this.getPrototype(b));
        a.data = b;
        return a
    }
    return b
}
;
Interpreter.prototype.getGlobalScope = function() {
    return this.globalScope
}
;
Interpreter.prototype.getStateStack = function() {
    return this.stateStack
}
;
Interpreter.prototype.setStateStack = function(b) {
    this.stateStack = b
}
;
Interpreter.State = function(b, a) {
    this.node = b;
    this.scope = a
}
;
Interpreter.Scope = function(b, a, c) {
    this.parentScope = b;
    this.strict = a;
    this.object = c
}
;
Interpreter.Object = function(b) {
    this.getter = Object.create(null);
    this.setter = Object.create(null);
    this.properties = Object.create(null);
    this.proto = b
}
;
Interpreter.Object.prototype.proto = null;
Interpreter.Object.prototype.class = "Object";
Interpreter.Object.prototype.data = null;
Interpreter.Object.prototype.toString = function() {
    if (!Interpreter.currentInterpreter_)
        return "[object Interpreter.Object]";
    if (!(this instanceof Interpreter.Object))
        return String(this);
    if ("Array" === this.class) {
        var b = Interpreter.toStringCycles_;
        b.push(this);
        try {
            var a = []
              , c = this.properties.length
              , d = !1;
            1024 < c && (c = 1E3,
            d = !0);
            for (var f = 0; f < c; f++) {
                var g = this.properties[f];
                a[f] = g instanceof Interpreter.Object && -1 !== b.indexOf(g) ? "..." : g
            }
            d && a.push("...")
        } finally {
            b.pop()
        }
        return a.join(",")
    }
    if ("Error" === this.class) {
        b = Interpreter.toStringCycles_;
        if (-1 !== b.indexOf(this))
            return "[object Error]";
        c = this;
        do
            if ("name"in c.properties) {
                a = c.properties.name;
                break
            }
        while (c = c.proto);
        c = this;
        do
            if ("message"in c.properties) {
                d = c.properties.message;
                break
            }
        while (c = c.proto);
        b.push(this);
        try {
            a = a && String(a),
            d = d && String(d)
        } finally {
            b.pop()
        }
        return d ? a + ": " + d : String(a)
    }
    return null !== this.data ? String(this.data) : "[object " + this.class + "]"
}
;
Interpreter.Object.prototype.valueOf = function() {
    return !Interpreter.currentInterpreter_ || void 0 === this.data || null === this.data || this.data instanceof RegExp ? this : this.data instanceof Date ? this.data.valueOf() : this.data
}
;
Interpreter.prototype.stepArrayExpression = function(b, a, c) {
    c = c.elements;
    var d = a.n_ || 0;
    a.array_ ? (this.setProperty(a.array_, d, a.value),
    d++) : (a.array_ = this.createArray(),
    a.array_.properties.length = c.length);
    for (; d < c.length; ) {
        if (c[d])
            return a.n_ = d,
            new Interpreter.State(c[d],a.scope);
        d++
    }
    b.pop();
    b[b.length - 1].value = a.array_
}
;
Interpreter.prototype.stepAssignmentExpression = function(b, a, c) {
    if (!a.doneLeft_)
        return a.doneLeft_ = !0,
        a = new Interpreter.State(c.left,a.scope),
        a.components = !0,
        a;
    if (!a.doneRight_) {
        a.leftReference_ || (a.leftReference_ = a.value);
        a.doneGetter_ && (a.leftValue_ = a.value);
        if (!a.doneGetter_ && "=" !== c.operator && (b = this.getValue(a.leftReference_),
        a.leftValue_ = b,
        this.getterStep_))
            return a.doneGetter_ = !0,
            this.createGetter_(b, a.leftReference_);
        a.doneRight_ = !0;
        "=" === c.operator && "Identifier" === c.left.type && (a.destinationName = c.left.name);
        return new Interpreter.State(c.right,a.scope)
    }
    if (a.doneSetter_)
        b.pop(),
        b[b.length - 1].value = a.setterValue_;
    else {
        var d = a.leftValue_
          , f = a.value;
        switch (c.operator) {
        case "=":
            d = f;
            break;
        case "+=":
            d += f;
            break;
        case "-=":
            d -= f;
            break;
        case "*=":
            d *= f;
            break;
        case "/=":
            d /= f;
            break;
        case "%=":
            d %= f;
            break;
        case "<<=":
            d <<= f;
            break;
        case ">>=":
            d >>= f;
            break;
        case ">>>=":
            d >>>= f;
            break;
        case "&=":
            d &= f;
            break;
        case "^=":
            d ^= f;
            break;
        case "|=":
            d |= f;
            break;
        default:
            throw SyntaxError("Unknown assignment expression: " + c.operator);
        }
        if (c = this.setValue(a.leftReference_, d))
            return a.doneSetter_ = !0,
            a.setterValue_ = d,
            this.createSetter_(c, a.leftReference_, d);
        b.pop();
        b[b.length - 1].value = d
    }
}
;
Interpreter.prototype.stepBinaryExpression = function(b, a, c) {
    if (!a.doneLeft_)
        return a.doneLeft_ = !0,
        new Interpreter.State(c.left,a.scope);
    if (!a.doneRight_)
        return a.doneRight_ = !0,
        a.leftValue_ = a.value,
        new Interpreter.State(c.right,a.scope);
    b.pop();
    var d = a.leftValue_;
    a = a.value;
    switch (c.operator) {
    case "==":
        c = d == a;
        break;
    case "!=":
        c = d != a;
        break;
    case "===":
        c = d === a;
        break;
    case "!==":
        c = d !== a;
        break;
    case ">":
        c = d > a;
        break;
    case ">=":
        c = d >= a;
        break;
    case "<":
        c = d < a;
        break;
    case "<=":
        c = d <= a;
        break;
    case "+":
        c = d + a;
        break;
    case "-":
        c = d - a;
        break;
    case "*":
        c = d * a;
        break;
    case "/":
        c = d / a;
        break;
    case "%":
        c = d % a;
        break;
    case "&":
        c = d & a;
        break;
    case "|":
        c = d | a;
        break;
    case "^":
        c = d ^ a;
        break;
    case "<<":
        c = d << a;
        break;
    case ">>":
        c = d >> a;
        break;
    case ">>>":
        c = d >>> a;
        break;
    case "in":
        a instanceof Interpreter.Object || this.throwException(this.TYPE_ERROR, "'in' expects an object, not '" + a + "'");
        c = this.hasProperty(a, d);
        break;
    case "instanceof":
        this.isa(a, this.FUNCTION) || this.throwException(this.TYPE_ERROR, "Right-hand side of instanceof is not an object");
        c = d instanceof Interpreter.Object ? this.isa(d, a) : !1;
        break;
    default:
        throw SyntaxError("Unknown binary operator: " + c.operator);
    }
    b[b.length - 1].value = c
}
;
Interpreter.prototype.stepBlockStatement = function(b, a, c) {
    var d = a.n_ || 0;
    if (c = c.body[d])
        return a.n_ = d + 1,
        new Interpreter.State(c,a.scope);
    b.pop()
}
;
Interpreter.prototype.stepBreakStatement = function(b, a, c) {
    this.unwind(Interpreter.Completion.BREAK, void 0, c.label && c.label.name)
}
;
Interpreter.prototype.evalCodeNumber_ = 0;
Interpreter.prototype.stepCallExpression = function(b, a, c) {
    if (!a.doneCallee_) {
        a.doneCallee_ = 1;
        var d = new Interpreter.State(c.callee,a.scope);
        d.components = !0;
        return d
    }
    if (1 === a.doneCallee_) {
        a.doneCallee_ = 2;
        d = a.value;
        if (Array.isArray(d)) {
            if (a.func_ = this.getValue(d),
            d[0] === Interpreter.SCOPE_REFERENCE ? a.directEval_ = "eval" === d[1] : a.funcThis_ = d[0],
            d = a.func_,
            this.getterStep_)
                return a.doneCallee_ = 1,
                this.createGetter_(d, a.value)
        } else
            a.func_ = d;
        a.arguments_ = [];
        a.n_ = 0
    }
    d = a.func_;
    if (!a.doneArgs_) {
        0 !== a.n_ && a.arguments_.push(a.value);
        if (c.arguments[a.n_])
            return new Interpreter.State(c.arguments[a.n_++],a.scope);
        if ("NewExpression" === c.type) {
            d instanceof Interpreter.Object && !d.illegalConstructor || this.throwException(this.TYPE_ERROR, d + " is not a constructor");
            if (d === this.ARRAY)
                a.funcThis_ = this.createArray();
            else {
                var f = d.properties.prototype;
                if ("object" !== typeof f || null === f)
                    f = this.OBJECT_PROTO;
                a.funcThis_ = this.createObjectProto(f)
            }
            a.isConstructor = !0
        }
        a.doneArgs_ = !0
    }
    if (a.doneExec_)
        b.pop(),
        b[b.length - 1].value = a.isConstructor && "object" !== typeof a.value ? a.funcThis_ : a.value;
    else {
        a.doneExec_ = !0;
        d instanceof Interpreter.Object || this.throwException(this.TYPE_ERROR, d + " is not a function");
        if (b = d.node) {
            c = this.createScope(b.body, d.parentScope);
            for (var g = 0; g < b.params.length; g++)
                this.setProperty(c.object, b.params[g].name, a.arguments_.length > g ? a.arguments_[g] : void 0);
            f = this.createArray();
            for (g = 0; g < a.arguments_.length; g++)
                this.setProperty(f, g, a.arguments_[g]);
            this.setProperty(c.object, "arguments", f);
            (g = b.id && b.id.name) && this.setProperty(c.object, g, d);
            c.strict || (a.funcThis_ = this.boxThis_(a.funcThis_));
            this.setProperty(c.object, "this", a.funcThis_, Interpreter.READONLY_DESCRIPTOR);
            a.value = void 0;
            return new Interpreter.State(b.body,c)
        }
        if (d.eval)
            if (d = a.arguments_[0],
            "string" !== typeof d)
                a.value = d;
            else {
                try {
                    g = this.parse_(String(d), "eval" + this.evalCodeNumber_++)
                } catch (q) {
                    this.throwException(this.SYNTAX_ERROR, "Invalid code: " + q.message)
                }
                d = new this.newNode;
                d.type = "EvalProgram_";
                d.body = g.body;
                Interpreter.stripLocations_(d, c.start, c.end);
                c = a.directEval_ ? a.scope : this.globalScope;
                c.strict ? c = this.createScope(g, c) : this.populateScope_(g, c);
                this.value = void 0;
                return new Interpreter.State(d,c)
            }
        else if (d.nativeFunc)
            a.scope.strict || (a.funcThis_ = this.boxThis_(a.funcThis_)),
            a.value = d.nativeFunc.apply(a.funcThis_, a.arguments_);
        else if (d.asyncFunc) {
            var m = this;
            g = d.asyncFunc.length - 1;
            g = a.arguments_.concat(Array(g)).slice(0, g);
            g.push(function(q) {
                a.value = q;
                m.paused_ = !1
            });
            this.paused_ = !0;
            a.scope.strict || (a.funcThis_ = this.boxThis_(a.funcThis_));
            d.asyncFunc.apply(a.funcThis_, g)
        } else
            this.throwException(this.TYPE_ERROR, d.class + " is not callable")
    }
}
;
Interpreter.prototype.stepCatchClause = function(b, a, c) {
    if (a.done_)
        b.pop();
    else
        return a.done_ = !0,
        b = this.createSpecialScope(a.scope),
        this.setProperty(b.object, c.param.name, a.throwValue),
        new Interpreter.State(c.body,b)
}
;
Interpreter.prototype.stepConditionalExpression = function(b, a, c) {
    var d = a.mode_ || 0;
    if (0 === d)
        return a.mode_ = 1,
        new Interpreter.State(c.test,a.scope);
    if (1 === d) {
        a.mode_ = 2;
        if ((d = !!a.value) && c.consequent)
            return new Interpreter.State(c.consequent,a.scope);
        if (!d && c.alternate)
            return new Interpreter.State(c.alternate,a.scope);
        this.value = void 0
    }
    b.pop();
    "ConditionalExpression" === c.type && (b[b.length - 1].value = a.value)
}
;
Interpreter.prototype.stepContinueStatement = function(b, a, c) {
    this.unwind(Interpreter.Completion.CONTINUE, void 0, c.label && c.label.name)
}
;
Interpreter.prototype.stepDebuggerStatement = function(b, a, c) {
    b.pop()
}
;
Interpreter.prototype.stepDoWhileStatement = function(b, a, c) {
    "DoWhileStatement" === c.type && void 0 === a.test_ && (a.value = !0,
    a.test_ = !0);
    if (!a.test_)
        return a.test_ = !0,
        new Interpreter.State(c.test,a.scope);
    if (!a.value)
        b.pop();
    else if (c.body)
        return a.test_ = !1,
        a.isLoop = !0,
        new Interpreter.State(c.body,a.scope)
}
;
Interpreter.prototype.stepEmptyStatement = function(b, a, c) {
    b.pop()
}
;
Interpreter.prototype.stepEvalProgram_ = function(b, a, c) {
    var d = a.n_ || 0;
    if (c = c.body[d])
        return a.n_ = d + 1,
        new Interpreter.State(c,a.scope);
    b.pop();
    b[b.length - 1].value = this.value
}
;
Interpreter.prototype.stepExpressionStatement = function(b, a, c) {
    if (!a.done_)
        return a.done_ = !0,
        new Interpreter.State(c.expression,a.scope);
    b.pop();
    this.value = a.value
}
;
Interpreter.prototype.stepForInStatement = function(b, a, c) {
    if (!a.doneInit_ && (a.doneInit_ = !0,
    c.left.declarations && c.left.declarations[0].init))
        return a.scope.strict && this.throwException(this.SYNTAX_ERROR, "for-in loop variable declaration may not have an initializer."),
        new Interpreter.State(c.left,a.scope);
    if (!a.doneObject_)
        return a.doneObject_ = !0,
        a.variable_ || (a.variable_ = a.value),
        new Interpreter.State(c.right,a.scope);
    a.isLoop || (a.isLoop = !0,
    a.object_ = a.value,
    a.visited_ = Object.create(null));
    if (void 0 === a.name_)
        a: for (; ; ) {
            if (a.object_ instanceof Interpreter.Object)
                for (a.props_ || (a.props_ = Object.getOwnPropertyNames(a.object_.properties)); ; ) {
                    var d = a.props_.shift();
                    if (void 0 === d)
                        break;
                    if (Object.prototype.hasOwnProperty.call(a.object_.properties, d) && !a.visited_[d] && (a.visited_[d] = !0,
                    Object.prototype.propertyIsEnumerable.call(a.object_.properties, d))) {
                        a.name_ = d;
                        break a
                    }
                }
            else if (null !== a.object_ && void 0 !== a.object_)
                for (a.props_ || (a.props_ = Object.getOwnPropertyNames(a.object_)); ; ) {
                    d = a.props_.shift();
                    if (void 0 === d)
                        break;
                    a.visited_[d] = !0;
                    if (Object.prototype.propertyIsEnumerable.call(a.object_, d)) {
                        a.name_ = d;
                        break a
                    }
                }
            a.object_ = this.getPrototype(a.object_);
            a.props_ = null;
            if (null === a.object_) {
                b.pop();
                return
            }
        }
    if (!a.doneVariable_)
        if (a.doneVariable_ = !0,
        b = c.left,
        "VariableDeclaration" === b.type)
            a.variable_ = [Interpreter.SCOPE_REFERENCE, b.declarations[0].id.name];
        else
            return a.variable_ = null,
            a = new Interpreter.State(b,a.scope),
            a.components = !0,
            a;
    a.variable_ || (a.variable_ = a.value);
    if (!a.doneSetter_ && (a.doneSetter_ = !0,
    b = a.name_,
    d = this.setValue(a.variable_, b)))
        return this.createSetter_(d, a.variable_, b);
    a.name_ = void 0;
    a.doneVariable_ = !1;
    a.doneSetter_ = !1;
    if (c.body)
        return new Interpreter.State(c.body,a.scope)
}
;
Interpreter.prototype.stepForStatement = function(b, a, c) {
    var d = a.mode_ || 0;
    if (0 === d) {
        if (a.mode_ = 1,
        c.init)
            return new Interpreter.State(c.init,a.scope)
    } else if (1 === d) {
        if (a.mode_ = 2,
        c.test)
            return new Interpreter.State(c.test,a.scope)
    } else if (2 === d)
        if (a.mode_ = 3,
        c.test && !a.value)
            b.pop();
        else
            return a.isLoop = !0,
            new Interpreter.State(c.body,a.scope);
    else if (3 === d && (a.mode_ = 1,
    c.update))
        return new Interpreter.State(c.update,a.scope)
}
;
Interpreter.prototype.stepFunctionDeclaration = function(b, a, c) {
    b.pop()
}
;
Interpreter.prototype.stepFunctionExpression = function(b, a, c) {
    b.pop();
    a = b[b.length - 1];
    a.value = this.createFunction(c, a.scope, a.destinationName)
}
;
Interpreter.prototype.stepIdentifier = function(b, a, c) {
    b.pop();
    if (a.components)
        b[b.length - 1].value = [Interpreter.SCOPE_REFERENCE, c.name];
    else {
        a = this.getValueFromScope(c.name);
        if (this.getterStep_)
            return this.createGetter_(a, this.globalObject);
        b[b.length - 1].value = a
    }
}
;
Interpreter.prototype.stepIfStatement = Interpreter.prototype.stepConditionalExpression;
Interpreter.prototype.stepLabeledStatement = function(b, a, c) {
    b.pop();
    b = a.labels || [];
    b.push(c.label.name);
    a = new Interpreter.State(c.body,a.scope);
    a.labels = b;
    return a
}
;
Interpreter.prototype.stepLiteral = function(b, a, c) {
    b.pop();
    a = c.value;
    a instanceof RegExp && (c = this.createObjectProto(this.REGEXP_PROTO),
    this.populateRegExp(c, a),
    a = c);
    b[b.length - 1].value = a
}
;
Interpreter.prototype.stepLogicalExpression = function(b, a, c) {
    if ("&&" !== c.operator && "||" !== c.operator)
        throw SyntaxError("Unknown logical operator: " + c.operator);
    if (!a.doneLeft_)
        return a.doneLeft_ = !0,
        new Interpreter.State(c.left,a.scope);
    if (a.doneRight_)
        b.pop(),
        b[b.length - 1].value = a.value;
    else if ("&&" === c.operator && !a.value || "||" === c.operator && a.value)
        b.pop(),
        b[b.length - 1].value = a.value;
    else
        return a.doneRight_ = !0,
        new Interpreter.State(c.right,a.scope)
}
;
Interpreter.prototype.stepMemberExpression = function(b, a, c) {
    if (!a.doneObject_)
        return a.doneObject_ = !0,
        new Interpreter.State(c.object,a.scope);
    if (c.computed)
        if (a.doneProperty_)
            c = a.value;
        else
            return a.object_ = a.value,
            a.doneProperty_ = !0,
            new Interpreter.State(c.property,a.scope);
    else
        a.object_ = a.value,
        c = c.property.name;
    b.pop();
    if (a.components)
        b[b.length - 1].value = [a.object_, c];
    else {
        c = this.getProperty(a.object_, c);
        if (this.getterStep_)
            return this.createGetter_(c, a.object_);
        b[b.length - 1].value = c
    }
}
;
Interpreter.prototype.stepNewExpression = Interpreter.prototype.stepCallExpression;
Interpreter.prototype.stepObjectExpression = function(b, a, c) {
    var d = a.n_ || 0
      , f = c.properties[d];
    if (a.object_) {
        var g = a.destinationName;
        a.properties_[g] || (a.properties_[g] = {});
        a.properties_[g][f.kind] = a.value;
        a.n_ = ++d;
        f = c.properties[d]
    } else
        a.object_ = this.createObjectProto(this.OBJECT_PROTO),
        a.properties_ = Object.create(null);
    if (f) {
        var m = f.key;
        if ("Identifier" === m.type)
            g = m.name;
        else if ("Literal" === m.type)
            g = m.value;
        else
            throw SyntaxError("Unknown object structure: " + m.type);
        a.destinationName = g;
        return new Interpreter.State(f.value,a.scope)
    }
    for (m in a.properties_)
        c = a.properties_[m],
        "get"in c || "set"in c ? this.setProperty(a.object_, m, Interpreter.VALUE_IN_DESCRIPTOR, {
            configurable: !0,
            enumerable: !0,
            get: c.get,
            set: c.set
        }) : this.setProperty(a.object_, m, c.init);
    b.pop();
    b[b.length - 1].value = a.object_
}
;
Interpreter.prototype.stepProgram = function(b, a, c) {
    if (b = c.body.shift())
        return a.done = !1,
        new Interpreter.State(b,a.scope);
    a.done = !0
}
;
Interpreter.prototype.stepReturnStatement = function(b, a, c) {
    if (c.argument && !a.done_)
        return a.done_ = !0,
        new Interpreter.State(c.argument,a.scope);
    this.unwind(Interpreter.Completion.RETURN, a.value, void 0)
}
;
Interpreter.prototype.stepSequenceExpression = function(b, a, c) {
    var d = a.n_ || 0;
    if (c = c.expressions[d])
        return a.n_ = d + 1,
        new Interpreter.State(c,a.scope);
    b.pop();
    b[b.length - 1].value = a.value
}
;
Interpreter.prototype.stepSwitchStatement = function(b, a, c) {
    if (!a.test_)
        return a.test_ = 1,
        new Interpreter.State(c.discriminant,a.scope);
    1 === a.test_ && (a.test_ = 2,
    a.switchValue_ = a.value,
    a.defaultCase_ = -1);
    for (; ; ) {
        var d = a.index_ || 0
          , f = c.cases[d];
        if (a.matched_ || !f || f.test)
            if (f || a.matched_ || -1 === a.defaultCase_)
                if (f) {
                    if (!a.matched_ && !a.tested_ && f.test)
                        return a.tested_ = !0,
                        new Interpreter.State(f.test,a.scope);
                    if (a.matched_ || a.value === a.switchValue_) {
                        a.matched_ = !0;
                        var g = a.n_ || 0;
                        if (f.consequent[g])
                            return a.isSwitch = !0,
                            a.n_ = g + 1,
                            new Interpreter.State(f.consequent[g],a.scope)
                    }
                    a.tested_ = !1;
                    a.n_ = 0;
                    a.index_ = d + 1
                } else {
                    b.pop();
                    break
                }
            else
                a.matched_ = !0,
                a.index_ = a.defaultCase_;
        else
            a.defaultCase_ = d,
            a.index_ = d + 1
    }
}
;
Interpreter.prototype.stepThisExpression = function(b, a, c) {
    b.pop();
    b[b.length - 1].value = this.getValueFromScope("this")
}
;
Interpreter.prototype.stepThrowStatement = function(b, a, c) {
    if (a.done_)
        this.throwException(a.value);
    else
        return a.done_ = !0,
        new Interpreter.State(c.argument,a.scope)
}
;
Interpreter.prototype.stepTryStatement = function(b, a, c) {
    if (!a.doneBlock_)
        return a.doneBlock_ = !0,
        new Interpreter.State(c.block,a.scope);
    if (a.cv && a.cv.type === Interpreter.Completion.THROW && !a.doneHandler_ && c.handler)
        return a.doneHandler_ = !0,
        b = new Interpreter.State(c.handler,a.scope),
        b.throwValue = a.cv.value,
        a.cv = void 0,
        b;
    if (!a.doneFinalizer_ && c.finalizer)
        return a.doneFinalizer_ = !0,
        new Interpreter.State(c.finalizer,a.scope);
    b.pop();
    a.cv && this.unwind(a.cv.type, a.cv.value, a.cv.label)
}
;
Interpreter.prototype.stepUnaryExpression = function(b, a, c) {
    if (!a.done_)
        return a.done_ = !0,
        b = new Interpreter.State(c.argument,a.scope),
        b.components = "delete" === c.operator,
        b;
    b.pop();
    var d = a.value;
    if ("-" === c.operator)
        d = -d;
    else if ("+" === c.operator)
        d = +d;
    else if ("!" === c.operator)
        d = !d;
    else if ("~" === c.operator)
        d = ~d;
    else if ("delete" === c.operator) {
        c = !0;
        if (Array.isArray(d)) {
            var f = d[0];
            f === Interpreter.SCOPE_REFERENCE && (f = a.scope);
            d = String(d[1]);
            try {
                delete f.properties[d]
            } catch (g) {
                a.scope.strict ? this.throwException(this.TYPE_ERROR, "Cannot delete property '" + d + "' of '" + f + "'") : c = !1
            }
        }
        d = c
    } else if ("typeof" === c.operator)
        d = d && "Function" === d.class ? "function" : typeof d;
    else if ("void" === c.operator)
        d = void 0;
    else
        throw SyntaxError("Unknown unary operator: " + c.operator);
    b[b.length - 1].value = d
}
;
Interpreter.prototype.stepUpdateExpression = function(b, a, c) {
    if (!a.doneLeft_)
        return a.doneLeft_ = !0,
        b = new Interpreter.State(c.argument,a.scope),
        b.components = !0,
        b;
    a.leftSide_ || (a.leftSide_ = a.value);
    a.doneGetter_ && (a.leftValue_ = a.value);
    if (!a.doneGetter_) {
        var d = this.getValue(a.leftSide_);
        a.leftValue_ = d;
        if (this.getterStep_)
            return a.doneGetter_ = !0,
            this.createGetter_(d, a.leftSide_)
    }
    if (a.doneSetter_)
        b.pop(),
        b[b.length - 1].value = a.setterValue_;
    else {
        d = Number(a.leftValue_);
        if ("++" === c.operator)
            var f = d + 1;
        else if ("--" === c.operator)
            f = d - 1;
        else
            throw SyntaxError("Unknown update expression: " + c.operator);
        c = c.prefix ? f : d;
        if (d = this.setValue(a.leftSide_, f))
            return a.doneSetter_ = !0,
            a.setterValue_ = c,
            this.createSetter_(d, a.leftSide_, f);
        b.pop();
        b[b.length - 1].value = c
    }
}
;
Interpreter.prototype.stepVariableDeclaration = function(b, a, c) {
    c = c.declarations;
    var d = a.n_ || 0
      , f = c[d];
    a.init_ && f && (this.setValueToScope(f.id.name, a.value),
    a.init_ = !1,
    f = c[++d]);
    for (; f; ) {
        if (f.init)
            return a.n_ = d,
            a.init_ = !0,
            a.destinationName = f.id.name,
            new Interpreter.State(f.init,a.scope);
        f = c[++d]
    }
    b.pop()
}
;
Interpreter.prototype.stepWithStatement = function(b, a, c) {
    if (a.doneObject_)
        if (a.doneBody_)
            b.pop();
        else
            return a.doneBody_ = !0,
            b = this.createSpecialScope(a.scope, a.value),
            new Interpreter.State(c.body,b);
    else
        return a.doneObject_ = !0,
        new Interpreter.State(c.object,a.scope)
}
;
Interpreter.prototype.stepWhileStatement = Interpreter.prototype.stepDoWhileStatement;
this.Interpreter = Interpreter;
Interpreter.prototype.step = Interpreter.prototype.step;
Interpreter.prototype.run = Interpreter.prototype.run;
Interpreter.prototype.appendCode = Interpreter.prototype.appendCode;
Interpreter.prototype.createObject = Interpreter.prototype.createObject;
Interpreter.prototype.createObjectProto = Interpreter.prototype.createObjectProto;
Interpreter.prototype.createAsyncFunction = Interpreter.prototype.createAsyncFunction;
Interpreter.prototype.createNativeFunction = Interpreter.prototype.createNativeFunction;
Interpreter.prototype.getProperty = Interpreter.prototype.getProperty;
Interpreter.prototype.setProperty = Interpreter.prototype.setProperty;
Interpreter.prototype.nativeToPseudo = Interpreter.prototype.nativeToPseudo;
Interpreter.prototype.pseudoToNative = Interpreter.prototype.pseudoToNative;
Interpreter.prototype.getGlobalScope = Interpreter.prototype.getGlobalScope;
Interpreter.prototype.getStateStack = Interpreter.prototype.getStateStack;
Interpreter.prototype.setStateStack = Interpreter.prototype.setStateStack;