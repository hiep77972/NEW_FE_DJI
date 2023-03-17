! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";

    function e(e, t) {
        var a = [],
            i = 0;
        if (e && !t && e instanceof q) return e;
        if (e)
            if ("string" == typeof e) {
                var n, s, r = e.trim();
                if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
                    var o = "div";
                    for (0 === r.indexOf("<li") && (o = "ul"), 0 === r.indexOf("<tr") && (o = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (o = "tr"), 0 === r.indexOf("<tbody") && (o = "table"), 0 === r.indexOf("<option") && (o = "select"), s = document.createElement(o), s.innerHTML = r, i = 0; i < s.childNodes.length; i += 1) a.push(s.childNodes[i])
                } else
                    for (n = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])], i = 0; i < n.length; i += 1) n[i] && a.push(n[i])
            } else if (e.nodeType || e === window || e === document) a.push(e);
        else if (e.length > 0 && e[0].nodeType)
            for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new q(a)
    }

    function t(e) {
        for (var t = [], a = 0; a < e.length; a += 1) t.indexOf(e[a]) === -1 && t.push(e[a]);
        return t
    }

    function a(e) {
        var t = this;
        if ("undefined" == typeof e) return this;
        for (var a = e.split(" "), i = 0; i < a.length; i += 1)
            for (var n = 0; n < this.length; n += 1) "undefined" != typeof t[n].classList && t[n].classList.add(a[i]);
        return this
    }

    function i(e) {
        for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
            for (var n = 0; n < this.length; n += 1) "undefined" != typeof t[n].classList && t[n].classList.remove(a[i]);
        return this
    }

    function n(e) {
        return !!this[0] && this[0].classList.contains(e)
    }

    function s(e) {
        for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
            for (var n = 0; n < this.length; n += 1) "undefined" != typeof t[n].classList && t[n].classList.toggle(a[i]);
        return this
    }

    function r(e, t) {
        var a = arguments,
            i = this;
        if (1 !== arguments.length || "string" != typeof e) {
            for (var n = 0; n < this.length; n += 1)
                if (2 === a.length) i[n].setAttribute(e, t);
                else
                    for (var s in e) i[n][s] = e[s], i[n].setAttribute(s, e[s]);
            return this
        }
        if (this[0]) return this[0].getAttribute(e)
    }

    function o(e) {
        for (var t = this, a = 0; a < this.length; a += 1) t[a].removeAttribute(e);
        return this
    }

    function l(e, t) {
        var a, i = this;
        if ("undefined" != typeof t) {
            for (var n = 0; n < this.length; n += 1) a = i[n], a.dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
            return this
        }
        if (a = this[0]) {
            if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
            var s = a.getAttribute("data-" + e);
            if (s) return s
        } else;
    }

    function d(e) {
        for (var t = this, a = 0; a < this.length; a += 1) {
            var i = t[a].style;
            i.webkitTransform = e, i.transform = e
        }
        return this
    }

    function c(e) {
        var t = this;
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a += 1) {
            var i = t[a].style;
            i.webkitTransitionDuration = e, i.transitionDuration = e
        }
        return this
    }

    function u() {
        function t(t) {
            var a = t.target;
            if (a) {
                var i = t.target.dom7EventData || [];
                if (i.unshift(t), e(a).is(o)) l.apply(a, i);
                else
                    for (var n = e(a).parents(), s = 0; s < n.length; s += 1) e(n[s]).is(o) && l.apply(n[s], i)
            }
        }

        function a(e) {
            var t = e && e.target ? e.target.dom7EventData || [] : [];
            t.unshift(e), l.apply(this, t)
        }
        for (var i = this, n = [], s = arguments.length; s--;) n[s] = arguments[s];
        var r = n[0],
            o = n[1],
            l = n[2],
            d = n[3];
        if ("function" == typeof n[1]) {
            var c;
            c = n, r = c[0], l = c[1], d = c[2], o = void 0
        }
        d || (d = !1);
        for (var u, p = r.split(" "), h = 0; h < this.length; h += 1) {
            var f = i[h];
            if (o)
                for (u = 0; u < p.length; u += 1) f.dom7LiveListeners || (f.dom7LiveListeners = []), f.dom7LiveListeners.push({
                    type: r,
                    listener: l,
                    proxyListener: t
                }), f.addEventListener(p[u], t, d);
            else
                for (u = 0; u < p.length; u += 1) f.dom7Listeners || (f.dom7Listeners = []), f.dom7Listeners.push({
                    type: r,
                    listener: l,
                    proxyListener: a
                }), f.addEventListener(p[u], a, d)
        }
        return this
    }

    function p() {
        for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
        var i = t[0],
            n = t[1],
            s = t[2],
            r = t[3];
        if ("function" == typeof t[1]) {
            var o;
            o = t, i = o[0], s = o[1], r = o[2], n = void 0
        }
        r || (r = !1);
        for (var l = i.split(" "), d = 0; d < l.length; d += 1)
            for (var c = 0; c < this.length; c += 1) {
                var u = e[c];
                if (n) {
                    if (u.dom7LiveListeners)
                        for (var p = 0; p < u.dom7LiveListeners.length; p += 1) s ? u.dom7LiveListeners[p].listener === s && u.removeEventListener(l[d], u.dom7LiveListeners[p].proxyListener, r) : u.dom7LiveListeners[p].type === l[d] && u.removeEventListener(l[d], u.dom7LiveListeners[p].proxyListener, r)
                } else if (u.dom7Listeners)
                    for (var h = 0; h < u.dom7Listeners.length; h += 1) s ? u.dom7Listeners[h].listener === s && u.removeEventListener(l[d], u.dom7Listeners[h].proxyListener, r) : u.dom7Listeners[h].type === l[d] && u.removeEventListener(l[d], u.dom7Listeners[h].proxyListener, r)
            }
        return this
    }

    function h() {
        for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
        for (var i = t[0].split(" "), n = t[1], s = 0; s < i.length; s += 1)
            for (var r = 0; r < this.length; r += 1) {
                var o = void 0;
                try {
                    o = new window.CustomEvent(i[s], {
                        detail: n,
                        bubbles: !0,
                        cancelable: !0
                    })
                } catch (l) {
                    o = document.createEvent("Event"), o.initEvent(i[s], !0, !0), o.detail = n
                }
                e[r].dom7EventData = t.filter(function(e, t) {
                    return t > 0
                }), e[r].dispatchEvent(o), e[r].dom7EventData = [], delete e[r].dom7EventData
            }
        return this
    }

    function f(e) {
        function t(s) {
            if (s.target === this)
                for (e.call(this, s), a = 0; a < i.length; a += 1) n.off(i[a], t)
        }
        var a, i = ["webkitTransitionEnd", "transitionend"],
            n = this;
        if (e)
            for (a = 0; a < i.length; a += 1) n.on(i[a], t);
        return this
    }

    function v(e) {
        if (this.length > 0) {
            if (e) {
                var t = this.styles();
                return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
            }
            return this[0].offsetWidth
        }
        return null
    }

    function m(e) {
        if (this.length > 0) {
            if (e) {
                var t = this.styles();
                return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
            }
            return this[0].offsetHeight
        }
        return null
    }

    function g() {
        if (this.length > 0) {
            var e = this[0],
                t = e.getBoundingClientRect(),
                a = document.body,
                i = e.clientTop || a.clientTop || 0,
                n = e.clientLeft || a.clientLeft || 0,
                s = e === window ? window.scrollY : e.scrollTop,
                r = e === window ? window.scrollX : e.scrollLeft;
            return {
                top: t.top + s - i,
                left: t.left + r - n
            }
        }
        return null
    }

    function w() {
        return this[0] ? window.getComputedStyle(this[0], null) : {}
    }

    function y(e, t) {
        var a, i = this;
        if (1 === arguments.length) {
            if ("string" != typeof e) {
                for (a = 0; a < this.length; a += 1)
                    for (var n in e) i[a].style[n] = e[n];
                return this
            }
            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
        }
        if (2 === arguments.length && "string" == typeof e) {
            for (a = 0; a < this.length; a += 1) i[a].style[e] = t;
            return this
        }
        return this
    }

    function b(e) {
        var t = this;
        if (!e) return this;
        for (var a = 0; a < this.length; a += 1)
            if (e.call(t[a], a, t[a]) === !1) return t;
        return this
    }

    function x(e) {
        var t = this;
        if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;
        for (var a = 0; a < this.length; a += 1) t[a].innerHTML = e;
        return this
    }

    function T(e) {
        var t = this;
        if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;
        for (var a = 0; a < this.length; a += 1) t[a].textContent = e;
        return this
    }

    function E(t) {
        var a, i, n = this[0];
        if (!n || "undefined" == typeof t) return !1;
        if ("string" == typeof t) {
            if (n.matches) return n.matches(t);
            if (n.webkitMatchesSelector) return n.webkitMatchesSelector(t);
            if (n.msMatchesSelector) return n.msMatchesSelector(t);
            for (a = e(t), i = 0; i < a.length; i += 1)
                if (a[i] === n) return !0;
            return !1
        }
        if (t === document) return n === document;
        if (t === window) return n === window;
        if (t.nodeType || t instanceof q) {
            for (a = t.nodeType ? [t] : t, i = 0; i < a.length; i += 1)
                if (a[i] === n) return !0;
            return !1
        }
        return !1
    }

    function C() {
        var e, t = this[0];
        if (t) {
            for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
            return e
        }
    }

    function S(e) {
        if ("undefined" == typeof e) return this;
        var t, a = this.length;
        return e > a - 1 ? new q([]) : e < 0 ? (t = a + e, new q(t < 0 ? [] : [this[t]])) : new q([this[e]])
    }

    function M() {
        for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
        for (var i, n = 0; n < t.length; n += 1) {
            i = t[n];
            for (var s = 0; s < this.length; s += 1)
                if ("string" == typeof i) {
                    var r = document.createElement("div");
                    for (r.innerHTML = i; r.firstChild;) e[s].appendChild(r.firstChild)
                } else if (i instanceof q)
                for (var o = 0; o < i.length; o += 1) e[s].appendChild(i[o]);
            else e[s].appendChild(i)
        }
        return this
    }

    function $(e) {
        var t, a, i = this;
        for (t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
                var n = document.createElement("div");
                for (n.innerHTML = e, a = n.childNodes.length - 1; a >= 0; a -= 1) i[t].insertBefore(n.childNodes[a], i[t].childNodes[0])
            } else if (e instanceof q)
            for (a = 0; a < e.length; a += 1) i[t].insertBefore(e[a], i[t].childNodes[0]);
        else i[t].insertBefore(e, i[t].childNodes[0]);
        return this
    }

    function z(t) {
        return new q(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
    }

    function P(t) {
        var a = [],
            i = this[0];
        if (!i) return new q([]);
        for (; i.nextElementSibling;) {
            var n = i.nextElementSibling;
            t ? e(n).is(t) && a.push(n) : a.push(n), i = n
        }
        return new q(a)
    }

    function k(t) {
        if (this.length > 0) {
            var a = this[0];
            return new q(t ? a.previousElementSibling && e(a.previousElementSibling).is(t) ? [a.previousElementSibling] : [] : a.previousElementSibling ? [a.previousElementSibling] : [])
        }
        return new q([])
    }

    function I(t) {
        var a = [],
            i = this[0];
        if (!i) return new q([]);
        for (; i.previousElementSibling;) {
            var n = i.previousElementSibling;
            t ? e(n).is(t) && a.push(n) : a.push(n), i = n
        }
        return new q(a)
    }

    function D(a) {
        for (var i = this, n = [], s = 0; s < this.length; s += 1) null !== i[s].parentNode && (a ? e(i[s].parentNode).is(a) && n.push(i[s].parentNode) : n.push(i[s].parentNode));
        return e(t(n))
    }

    function L(a) {
        for (var i = this, n = [], s = 0; s < this.length; s += 1)
            for (var r = i[s].parentNode; r;) a ? e(r).is(a) && n.push(r) : n.push(r), r = r.parentNode;
        return e(t(n))
    }

    function A(e) {
        var t = this;
        return "undefined" == typeof e ? new q([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
    }

    function O(e) {
        for (var t = this, a = [], i = 0; i < this.length; i += 1)
            for (var n = t[i].querySelectorAll(e), s = 0; s < n.length; s += 1) a.push(n[s]);
        return new q(a)
    }

    function N(a) {
        for (var i = this, n = [], s = 0; s < this.length; s += 1)
            for (var r = i[s].childNodes, o = 0; o < r.length; o += 1) a ? 1 === r[o].nodeType && e(r[o]).is(a) && n.push(r[o]) : 1 === r[o].nodeType && n.push(r[o]);
        return new q(t(n))
    }

    function H() {
        for (var e = this, t = 0; t < this.length; t += 1) e[t].parentNode && e[t].parentNode.removeChild(e[t]);
        return this
    }

    function Y() {
        for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
        var i, n, s = this;
        for (i = 0; i < t.length; i += 1) {
            var r = e(t[i]);
            for (n = 0; n < r.length; n += 1) s[s.length] = r[n], s.length += 1
        }
        return s
    }

    function X() {
        var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            n = e.wrapperEl;
        e.onTouchStart = He.bind(e), e.onTouchMove = Ye.bind(e), e.onTouchEnd = Xe.bind(e), e.onClick = Ge.bind(e);
        var s = "container" === t.touchEventsTarget ? i : n,
            r = !!t.nested;
        if (ge.ie) s.addEventListener(a.start, e.onTouchStart, !1), (U.touch ? s : j).addEventListener(a.move, e.onTouchMove, r), (U.touch ? s : j).addEventListener(a.end, e.onTouchEnd, !1);
        else {
            if (U.touch) {
                var o = !("onTouchStart" !== a.start || !U.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                s.addEventListener(a.start, e.onTouchStart, o), s.addEventListener(a.move, e.onTouchMove, r), s.addEventListener(a.end, e.onTouchEnd, o)
            }(t.simulateTouch && !Ne.ios && !Ne.android || t.simulateTouch && !U.touch && Ne.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), j.addEventListener("mousemove", e.onTouchMove, r), j.addEventListener("mouseup", e.onTouchEnd, !1))
        }(t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), e.on("resize observerUpdate", Ve)
    }

    function V() {
        var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            n = e.wrapperEl,
            s = "container" === t.touchEventsTarget ? i : n,
            r = !!t.nested;
        if (ge.ie) s.removeEventListener(a.start, e.onTouchStart, !1), (U.touch ? s : j).removeEventListener(a.move, e.onTouchMove, r), (U.touch ? s : j).removeEventListener(a.end, e.onTouchEnd, !1);
        else {
            if (U.touch) {
                var o = !("onTouchStart" !== a.start || !U.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                s.removeEventListener(a.start, e.onTouchStart, o), s.removeEventListener(a.move, e.onTouchMove, r), s.removeEventListener(a.end, e.onTouchEnd, o)
            }(t.simulateTouch && !Ne.ios && !Ne.android || t.simulateTouch && !U.touch && Ne.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), j.removeEventListener("mousemove", e.onTouchMove, r), j.removeEventListener("mouseup", e.onTouchEnd, !1))
        }(t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), e.off("resize observerUpdate", Ve)
    }

    function G() {
        var e = "onwheel",
            t = e in j;
        if (!t) {
            var a = j.createElement("div");
            a.setAttribute(e, "return;"), t = "function" == typeof a[e]
        }
        return !t && j.implementation && j.implementation.hasFeature && j.implementation.hasFeature("", "") !== !0 && (t = j.implementation.hasFeature("Events.wheel", "3.0")), t
    }
    var B;
    B = "undefined" == typeof window ? {
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {}
        },
        Image: function() {},
        Date: function() {}
    } : window;
    var R = B,
        q = function(e) {
            for (var t = this, a = 0; a < e.length; a += 1) t[a] = e[a];
            return t.length = e.length, this
        };
    e.fn = q.prototype, e.Class = q, e.Dom7 = q;
    var F = ("resize scroll".split(" "), {
        addClass: a,
        removeClass: i,
        hasClass: n,
        toggleClass: s,
        attr: r,
        removeAttr: o,
        data: l,
        transform: d,
        transition: c,
        on: u,
        off: p,
        trigger: h,
        transitionEnd: f,
        outerWidth: v,
        outerHeight: m,
        offset: g,
        css: y,
        each: b,
        html: x,
        text: T,
        is: E,
        index: C,
        eq: S,
        append: M,
        prepend: $,
        next: z,
        nextAll: P,
        prev: k,
        prevAll: I,
        parent: D,
        parents: L,
        closest: A,
        find: O,
        children: N,
        remove: H,
        add: Y,
        styles: w
    });
    Object.keys(F).forEach(function(t) {
        e.fn[t] = F[t]
    });
    var W, _ = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null
                } catch (a) {}
                try {
                    delete t[e]
                } catch (a) {}
            })
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, t) {
            void 0 === t && (t = "x");
            var a, i, n, s = R.getComputedStyle(e, null);
            return R.WebKitCSSMatrix ? (i = s.transform || s.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function(e) {
                return e.replace(",", ".")
            }).join(", ")), n = new R.WebKitCSSMatrix("none" === i ? "" : i)) : (n = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = R.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = R.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
        },
        parseUrlQuery: function(e) {
            var t, a, i, n, s = {},
                r = e || R.location.href;
            if ("string" == typeof r && r.length)
                for (r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "", a = r.split("&").filter(function(e) {
                        return "" !== e
                    }), n = a.length, t = 0; t < n; t += 1) i = a[t].replace(/#\S+/g, "").split("="), s[decodeURIComponent(i[0])] = "undefined" == typeof i[1] ? void 0 : decodeURIComponent(i[1]) || "";
            return s
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                var n = e[i];
                if (void 0 !== n && null !== n)
                    for (var s = Object.keys(Object(n)), r = 0, o = s.length; r < o; r += 1) {
                        var l = s[r],
                            d = Object.getOwnPropertyDescriptor(n, l);
                        void 0 !== d && d.enumerable && (_.isObject(a[l]) && _.isObject(n[l]) ? _.extend(a[l], n[l]) : !_.isObject(a[l]) && _.isObject(n[l]) ? (a[l] = {}, _.extend(a[l], n[l])) : a[l] = n[l])
                    }
            }
            return a
        }
    };
    W = "undefined" == typeof document ? {
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return {}
        },
        querySelectorAll: function() {
            return []
        },
        createElement: function() {
            return {
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document;
    var j = W,
        U = function() {
            return {
                touch: R.Modernizr && R.Modernizr.touch === !0 || function() {
                    return !!("ontouchstart" in R || R.DocumentTouch && j instanceof R.DocumentTouch)
                }(),
                transforms3d: R.Modernizr && R.Modernizr.csstransforms3d === !0 || function() {
                    var e = j.createElement("div").style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                }(),
                flexbox: function() {
                    for (var e = j.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                        if (t[a] in e) return !0;
                    return !1
                }(),
                observer: function() {
                    return "MutationObserver" in R || "WebkitMutationObserver" in R
                }(),
                passiveListener: function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        R.addEventListener("testPassiveListener", null, t)
                    } catch (a) {}
                    return e
                }(),
                gestures: function() {
                    return "ongesturestart" in R
                }()
            }
        }(),
        K = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                t.on(e, t.params.on[e])
            })
        },
        Z = {
            components: {}
        };
    K.prototype.on = function(e, t) {
        var a = this;
        return "function" != typeof t ? a : (e.split(" ").forEach(function(e) {
            a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e].push(t)
        }), a)
    }, K.prototype.once = function(e, t) {
        function a() {
            for (var n = [], s = arguments.length; s--;) n[s] = arguments[s];
            t.apply(i, n), i.off(e, a)
        }
        var i = this;
        return "function" != typeof t ? i : i.on(e, a)
    }, K.prototype.off = function(e, t) {
        var a = this;
        return e.split(" ").forEach(function(e) {
            "undefined" == typeof t ? a.eventsListeners[e] = [] : a.eventsListeners[e].forEach(function(i, n) {
                i === t && a.eventsListeners[e].splice(n, 1)
            })
        }), a
    }, K.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var a = this;
        if (!a.eventsListeners) return a;
        var i, n, s;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), s = a) : (i = e[0].events, n = e[0].data, s = e[0].context || a);
        var r = Array.isArray(i) ? i : i.split(" ");
        return r.forEach(function(e) {
            if (a.eventsListeners[e]) {
                var t = [];
                a.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }), t.forEach(function(e) {
                    e.apply(s, n)
                })
            }
        }), a
    }, K.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(a) {
            var i = t.modules[a];
            i.params && _.extend(e, i.params)
        })
    }, K.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(a) {
            var i = t.modules[a],
                n = e[a] || {};
            i.instance && Object.keys(i.instance).forEach(function(e) {
                var a = i.instance[e];
                "function" == typeof a ? t[e] = a.bind(t) : t[e] = a
            }), i.on && t.on && Object.keys(i.on).forEach(function(e) {
                t.on(e, i.on[e])
            }), i.create && i.create.bind(t)(n)
        })
    }, Z.components.set = function(e) {
        var t = this;
        t.use && t.use(e)
    }, K.installModule = function(e) {
        for (var t = [], a = arguments.length - 1; a-- > 0;) t[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var n = e.name || Object.keys(i.prototype.modules).length + "_" + _.now();
        return i.prototype.modules[n] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
            i.prototype[t] = e.proto[t]
        }), e["static"] && Object.keys(e["static"]).forEach(function(t) {
            i[t] = e["static"][t]
        }), e.install && e.install.apply(i, t), i
    }, K.use = function(e) {
        for (var t = [], a = arguments.length - 1; a-- > 0;) t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return i.installModule(e)
        }), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(K, Z);
    var J = function() {
            var e, t, a = this,
                i = a.$el;
            e = "undefined" != typeof a.params.width ? a.params.width : i[0].clientWidth, t = "undefined" != typeof a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), _.extend(a, {
                width: e,
                height: t,
                size: a.isHorizontal() ? e : t
            }))
        },
        Q = function() {
            var e = this,
                t = e.params,
                a = e.$wrapperEl,
                i = e.size,
                n = e.rtl,
                s = e.wrongRTL,
                r = a.children("." + e.params.slideClass),
                o = e.virtual && t.virtual.enabled,
                l = o ? e.virtual.slides.length : r.length,
                d = [],
                c = [],
                u = [],
                p = t.slidesOffsetBefore;
            "function" == typeof p && (p = t.slidesOffsetBefore.call(e));
            var h = t.slidesOffsetAfter;
            "function" == typeof h && (h = t.slidesOffsetAfter.call(e));
            var f = l,
                v = e.snapGrid.length,
                m = e.snapGrid.length,
                g = t.spaceBetween,
                w = -p,
                y = 0,
                b = 0;
            if ("undefined" != typeof i) {
                "string" == typeof g && g.indexOf("%") >= 0 && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, n ? r.css({
                    marginLeft: "",
                    marginTop: ""
                }) : r.css({
                    marginRight: "",
                    marginBottom: ""
                });
                var x;
                t.slidesPerColumn > 1 && (x = Math.floor(l / t.slidesPerColumn) === l / e.params.slidesPerColumn ? l : Math.ceil(l / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var T, E = t.slidesPerColumn, C = x / E, S = C - (t.slidesPerColumn * C - l), M = 0; M < l; M += 1) {
                    T = 0;
                    var $ = r.eq(M);
                    if (t.slidesPerColumn > 1) {
                        var z = void 0,
                            P = void 0,
                            k = void 0;
                        "column" === t.slidesPerColumnFill ? (P = Math.floor(M / E), k = M - P * E, (P > S || P === S && k === E - 1) && (k += 1, k >= E && (k = 0, P += 1)), z = P + k * x / E, $.css({
                            "-webkit-box-ordinal-group": z,
                            "-moz-box-ordinal-group": z,
                            "-ms-flex-order": z,
                            "-webkit-order": z,
                            order: z
                        })) : (k = Math.floor(M / C), P = M - k * C), $.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== k && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", P).attr("data-swiper-row", k)
                    }
                    "none" !== $.css("display") && ("auto" === t.slidesPerView ? (T = e.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0), t.roundLengths && (T = Math.floor(T))) : (T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), r[M] && (e.isHorizontal() ? r[M].style.width = T + "px" : r[M].style.height = T + "px")), r[M] && (r[M].swiperSlideSize = T), u.push(T), t.centeredSlides ? (w = w + T / 2 + y / 2 + g, 0 === y && 0 !== M && (w = w - i / 2 - g), 0 === M && (w = w - i / 2 - g), Math.abs(w) < .001 && (w = 0), b % t.slidesPerGroup === 0 && d.push(w), c.push(w)) : (b % t.slidesPerGroup === 0 && d.push(w), c.push(w), w = w + T + g), e.virtualSize += T + g, y = T, b += 1)
                }
                e.virtualSize = Math.max(e.virtualSize, i) + h;
                var I;
                if (n && s && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }), U.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    })), t.slidesPerColumn > 1 && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    }), t.centeredSlides)) {
                    I = [];
                    for (var D = 0; D < d.length; D += 1) d[D] < e.virtualSize + d[0] && I.push(d[D]);
                    d = I
                }
                if (!t.centeredSlides) {
                    I = [];
                    for (var L = 0; L < d.length; L += 1) d[L] <= e.virtualSize - i && I.push(d[L]);
                    d = I, Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i)
                }
                0 === d.length && (d = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? n ? r.css({
                    marginLeft: g + "px"
                }) : r.css({
                    marginRight: g + "px"
                }) : r.css({
                    marginBottom: g + "px"
                })), _.extend(e, {
                    slides: r,
                    snapGrid: d,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), l !== f && e.emit("slidesLengthChange"), d.length !== v && e.emit("snapGridLengthChange"), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        ee = function() {
            var e, t = this,
                a = [],
                i = 0;
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
                    var n = t.activeIndex + e;
                    if (n > t.slides.length) break;
                    a.push(t.slides.eq(n)[0])
                } else a.push(t.slides.eq(t.activeIndex)[0]);
            for (e = 0; e < a.length; e += 1)
                if ("undefined" != typeof a[e]) {
                    var s = a[e].offsetHeight;
                    i = s > i ? s : i
                }
            i && t.$wrapperEl.css("height", i + "px")
        },
        te = function() {
            for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop
        },
        ae = function(e) {
            void 0 === e && (e = this.translate || 0);
            var t = this,
                a = t.params,
                i = t.slides,
                n = t.rtl;
            if (0 !== i.length) {
                "undefined" == typeof i[0].swiperSlideOffset && t.updateSlidesOffset();
                var s = -e;
                n && (s = e), i.removeClass(a.slideVisibleClass);
                for (var r = 0; r < i.length; r += 1) {
                    var o = i[r],
                        l = (s + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(s - o.swiperSlideOffset),
                            c = d + t.slidesSizesGrid[r],
                            u = d >= 0 && d < t.size || c > 0 && c <= t.size || d <= 0 && c >= t.size;
                        u && i.eq(r).addClass(a.slideVisibleClass)
                    }
                    o.progress = n ? -l : l
                }
            }
        },
        ie = function(e) {
            void 0 === e && (e = this.translate || 0);
            var t = this,
                a = t.params,
                i = t.maxTranslate() - t.minTranslate(),
                n = t.progress,
                s = t.isBeginning,
                r = t.isEnd,
                o = s,
                l = r;
            0 === i ? (n = 0, s = !0, r = !0) : (n = (e - t.minTranslate()) / i, s = n <= 0, r = n >= 1), _.extend(t, {
                progress: n,
                isBeginning: s,
                isEnd: r
            }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), s && !o && t.emit("reachBeginning toEdge"), r && !l && t.emit("reachEnd toEdge"), (o && !s || l && !r) && t.emit("fromEdge"), t.emit("progress", n)
        },
        ne = function() {
            var e = this,
                t = e.slides,
                a = e.params,
                i = e.$wrapperEl,
                n = e.activeIndex,
                s = e.realIndex,
                r = e.virtual && a.virtual.enabled;
            t.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass);
            var o;
            o = r ? e.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + n + '"]') : t.eq(n), o.addClass(a.slideActiveClass), a.loop && (o.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(a.slideDuplicateActiveClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(a.slideDuplicateActiveClass));
            var l = o.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);
            a.loop && 0 === l.length && (l = t.eq(0), l.addClass(a.slideNextClass));
            var d = o.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);
            a.loop && 0 === d.length && (d = t.eq(-1), d.addClass(a.slidePrevClass)), a.loop && (l.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass), d.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass))
        },
        se = function(e) {
            var t, a = this,
                i = a.rtl ? a.translate : -a.translate,
                n = a.slidesGrid,
                s = a.snapGrid,
                r = a.params,
                o = a.activeIndex,
                l = a.realIndex,
                d = a.snapIndex,
                c = e;
            if ("undefined" == typeof c) {
                for (var u = 0; u < n.length; u += 1) "undefined" != typeof n[u + 1] ? i >= n[u] && i < n[u + 1] - (n[u + 1] - n[u]) / 2 ? c = u : i >= n[u] && i < n[u + 1] && (c = u + 1) : i >= n[u] && (c = u);
                r.normalizeSlideIndex && (c < 0 || "undefined" == typeof c) && (c = 0)
            }
            if (t = s.indexOf(i) >= 0 ? s.indexOf(i) : Math.floor(c / r.slidesPerGroup), t >= s.length && (t = s.length - 1), c === o) return void(t !== d && (a.snapIndex = t, a.emit("snapIndexChange")));
            var p = parseInt(a.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            _.extend(a, {
                snapIndex: t,
                realIndex: p,
                previousIndex: o,
                activeIndex: c
            }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== p && a.emit("realIndexChange"), a.emit("slideChange")
        },
        re = function(t) {
            var a = this,
                i = a.params,
                n = e(t.target).closest("." + i.slideClass)[0],
                s = !1;
            if (n)
                for (var r = 0; r < a.slides.length; r += 1) a.slides[r] === n && (s = !0);
            return n && s ? (a.clickedSlide = n, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(e(n).attr("data-swiper-slide-index"), 10) : a.clickedIndex = e(n).index(), void(i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide())) : (a.clickedSlide = void 0, void(a.clickedIndex = void 0))
        },
        oe = {
            updateSize: J,
            updateSlides: Q,
            updateAutoHeight: ee,
            updateSlidesOffset: te,
            updateSlidesProgress: ae,
            updateProgress: ie,
            updateSlidesClasses: ne,
            updateActiveIndex: se,
            updateClickedSlide: re
        },
        le = function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this,
                a = t.params,
                i = t.rtl,
                n = t.translate,
                s = t.$wrapperEl;
            if (a.virtualTranslate) return i ? -n : n;
            var r = _.getTranslate(s[0], e);
            return i && (r = -r), r || 0
        },
        de = function(e, t) {
            var a = this,
                i = a.rtl,
                n = a.params,
                s = a.$wrapperEl,
                r = a.progress,
                o = 0,
                l = 0,
                d = 0;
            a.isHorizontal() ? o = i ? -e : e : l = e, n.roundLengths && (o = Math.floor(o), l = Math.floor(l)), n.virtualTranslate || (U.transforms3d ? s.transform("translate3d(" + o + "px, " + l + "px, " + d + "px)") : s.transform("translate(" + o + "px, " + l + "px)")), a.translate = a.isHorizontal() ? o : l;
            var c, u = a.maxTranslate() - a.minTranslate();
            c = 0 === u ? 0 : (e - a.minTranslate()) / u, c !== r && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
        },
        ce = function() {
            return -this.snapGrid[0]
        },
        ue = function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        pe = {
            getTranslate: le,
            setTranslate: de,
            minTranslate: ce,
            maxTranslate: ue
        },
        he = function(e, t) {
            var a = this;
            a.$wrapperEl.transition(e), a.emit("setTransition", e, t)
        },
        fe = function(e) {
            void 0 === e && (e = !0);
            var t = this,
                a = t.activeIndex,
                i = t.params,
                n = t.previousIndex;
            i.autoHeight && t.updateAutoHeight(), t.emit("transitionStart"), e && a !== n && (t.emit("slideChangeTransitionStart"), a > n ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"))
        },
        ve = function(e) {
            void 0 === e && (e = !0);
            var t = this,
                a = t.activeIndex,
                i = t.previousIndex;
            t.animating = !1, t.setTransition(0), t.emit("transitionEnd"), e && a !== i && (t.emit("slideChangeTransitionEnd"), a > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"))
        },
        me = {
            setTransition: he,
            transitionStart: fe,
            transitionEnd: ve
        },
        ge = function() {
            function e() {
                var e = j.createElement("div");
                return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length
            }

            function t() {
                var e = R.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }
            return {
                isSafari: t(),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(R.navigator.userAgent),
                ie: R.navigator.pointerEnabled || R.navigator.msPointerEnabled,
                ieTouch: R.navigator.msPointerEnabled && R.navigator.msMaxTouchPoints > 1 || R.navigator.pointerEnabled && R.navigator.maxTouchPoints > 1,
                lteIE9: e()
            }
        }(),
        we = function(e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var n = this,
                s = e;
            s < 0 && (s = 0);
            var r = n.params,
                o = n.snapGrid,
                l = n.slidesGrid,
                d = n.previousIndex,
                c = n.activeIndex,
                u = n.rtl,
                p = n.$wrapperEl,
                h = Math.floor(s / r.slidesPerGroup);
            h >= o.length && (h = o.length - 1), (c || r.initialSlide || 0) === (d || 0) && a && n.emit("beforeSlideChangeStart");
            var f = -o[h];
            if (n.updateProgress(f), r.normalizeSlideIndex)
                for (var v = 0; v < l.length; v += 1) - Math.floor(100 * f) >= Math.floor(100 * l[v]) && (s = v);
            return !(!n.allowSlideNext && f < n.translate && f < n.minTranslate()) && (!(!n.allowSlidePrev && f > n.translate && f > n.maxTranslate() && (c || 0) !== s) && (u && -f === n.translate || !u && f === n.translate ? (n.updateActiveIndex(s), r.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== r.effect && n.setTranslate(f), !1) : (0 === t || ge.lteIE9 ? (n.setTransition(0), n.setTranslate(f), n.updateActiveIndex(s), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a), n.transitionEnd(a)) : (n.setTransition(t), n.setTranslate(f), n.updateActiveIndex(s), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a), n.animating || (n.animating = !0, p.transitionEnd(function() {
                n && !n.destroyed && n.transitionEnd(a)
            }))), !0)))
        },
        ye = function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                n = i.params,
                s = i.animating;
            return n.loop ? !s && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + n.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + n.slidesPerGroup, e, t, a)
        },
        be = function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                n = i.params,
                s = i.animating;
            return n.loop ? !s && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex - 1, e, t, a)) : i.slideTo(i.activeIndex - 1, e, t, a)
        },
        xe = function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this;
            return i.slideTo(i.activeIndex, e, t, a)
        },
        Te = function() {
            var t, a = this,
                i = a.params,
                n = a.$wrapperEl,
                s = "auto" === i.slidesPerView ? a.slidesPerViewDynamic() : i.slidesPerView,
                r = a.clickedIndex;
            if (i.loop) {
                if (a.animating) return;
                t = parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < a.loopedSlides - s / 2 || r > a.slides.length - a.loopedSlides + s / 2 ? (a.loopFix(), r = n.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), _.nextTick(function() {
                    a.slideTo(r)
                })) : a.slideTo(r) : r > a.slides.length - s ? (a.loopFix(), r = n.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), _.nextTick(function() {
                    a.slideTo(r)
                })) : a.slideTo(r)
            } else a.slideTo(r)
        },
        Ee = {
            slideTo: we,
            slideNext: ye,
            slidePrev: be,
            slideReset: xe,
            slideToClickedSlide: Te
        },
        Ce = function() {
            var t = this,
                a = t.params,
                i = t.$wrapperEl;
            i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
            var n = i.children("." + a.slideClass);
            if (a.loopFillGroupWithBlank) {
                var s = a.slidesPerGroup - n.length % a.slidesPerGroup;
                if (s !== a.slidesPerGroup) {
                    for (var r = 0; r < s; r += 1) {
                        var o = e(j.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
                        i.append(o)
                    }
                    n = i.children("." + a.slideClass)
                }
            }
            "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = n.length), t.loopedSlides = parseInt(a.loopedSlides || a.slidesPerView, 10),
                t.loopedSlides += a.loopAdditionalSlides, t.loopedSlides > n.length && (t.loopedSlides = n.length);
            var l = [],
                d = [];
            n.each(function(a, i) {
                var s = e(i);
                a < t.loopedSlides && d.push(i), a < n.length && a >= n.length - t.loopedSlides && l.push(i), s.attr("data-swiper-slide-index", a)
            });
            for (var c = 0; c < d.length; c += 1) i.append(e(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
            for (var u = l.length - 1; u >= 0; u -= 1) i.prepend(e(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass))
        },
        Se = function() {
            var e, t = this,
                a = t.params,
                i = t.activeIndex,
                n = t.slides,
                s = t.loopedSlides,
                r = t.allowSlidePrev,
                o = t.allowSlideNext;
            t.allowSlidePrev = !0, t.allowSlideNext = !0, i < s ? (e = n.length - 3 * s + i, e += s, t.slideTo(e, 0, !1, !0)) : ("auto" === a.slidesPerView && i >= 2 * s || i > n.length - 2 * a.slidesPerView) && (e = -n.length + i + s, e += s, t.slideTo(e, 0, !1, !0)), t.allowSlidePrev = r, t.allowSlideNext = o
        },
        Me = function() {
            var e = this,
                t = e.$wrapperEl,
                a = e.params,
                i = e.slides;
            t.children("." + a.slideClass + "." + a.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
        },
        $e = {
            loopCreate: Ce,
            loopFix: Se,
            loopDestroy: Me
        },
        ze = function(e) {
            var t = this;
            if (!U.touch && t.params.simulateTouch) {
                var a = t.el;
                a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab"
            }
        },
        Pe = function() {
            var e = this;
            U.touch || (e.el.style.cursor = "")
        },
        ke = {
            setGrabCursor: ze,
            unsetGrabCursor: Pe
        },
        Ie = function(e) {
            var t = this,
                a = t.$wrapperEl,
                i = t.params;
            if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                for (var n = 0; n < e.length; n += 1) e[n] && a.append(e[n]);
            else a.append(e);
            i.loop && t.loopCreate(), i.observer && U.observer || t.update()
        },
        De = function(e) {
            var t = this,
                a = t.params,
                i = t.$wrapperEl,
                n = t.activeIndex;
            a.loop && t.loopDestroy();
            var s = n + 1;
            if ("object" == typeof e && "length" in e) {
                for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                s = n + e.length
            } else i.prepend(e);
            a.loop && t.loopCreate(), a.observer && U.observer || t.update(), t.slideTo(s, 0, !1)
        },
        Le = function(e) {
            var t = this,
                a = t.params,
                i = t.$wrapperEl,
                n = t.activeIndex;
            a.loop && (t.loopDestroy(), t.slides = i.children("." + a.slideClass));
            var s, r = n;
            if ("object" == typeof e && "length" in e) {
                for (var o = 0; o < e.length; o += 1) s = e[o], t.slides[s] && t.slides.eq(s).remove(), s < r && (r -= 1);
                r = Math.max(r, 0)
            } else s = e, t.slides[s] && t.slides.eq(s).remove(), s < r && (r -= 1), r = Math.max(r, 0);
            a.loop && t.loopCreate(), a.observer && U.observer || t.update(), a.loop ? t.slideTo(r + t.loopedSlides, 0, !1) : t.slideTo(r, 0, !1)
        },
        Ae = function() {
            for (var e = this, t = [], a = 0; a < e.slides.length; a += 1) t.push(a);
            e.removeSlide(t)
        },
        Oe = {
            appendSlide: Ie,
            prependSlide: De,
            removeSlide: Le,
            removeAllSlides: Ae
        },
        Ne = function() {
            var e = R.navigator.userAgent,
                t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: R.cordova || R.phonegap,
                    phonegap: R.cordova || R.phonegap
                },
                a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                n = e.match(/(iPad).*OS\s([\d_]+)/),
                s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !n && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (n || r || s) && (t.os = "ios", t.ios = !0), r && !s && (t.osVersion = r[2].replace(/_/g, "."), t.iphone = !0), n && (t.osVersion = n[2].replace(/_/g, "."), t.ipad = !0), s && (t.osVersion = s[3] ? s[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (r || n || s) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                var o = t.osVersion.split("."),
                    l = j.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (s || r) && (1 * o[0] === 7 ? 1 * o[1] >= 1 : 1 * o[0] > 7) && l && l.getAttribute("content").indexOf("minimal-ui") >= 0
            }
            return t.pixelRatio = R.devicePixelRatio || 1, t
        }(),
        He = function(t) {
            var a = this,
                i = a.touchEventsData,
                n = a.params,
                s = a.touches,
                r = t;
            if (r.originalEvent && (r = r.originalEvent), i.isTouchEvent = "touchstart" === r.type, (i.isTouchEvent || !("which" in r) || 3 !== r.which) && (!i.isTouched || !i.isMoved)) {
                if (n.noSwiping && e(r.target).closest("." + n.noSwipingClass)[0]) return void(a.allowClick = !0);
                if (!n.swipeHandler || e(r).closest(n.swipeHandler)[0]) {
                    s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                    var o = s.currentX,
                        l = s.currentY;
                    if (!(Ne.ios && n.iOSEdgeSwipeDetection && o <= n.iOSEdgeSwipeThreshold)) {
                        if (_.extend(i, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0
                            }), s.startX = o, s.startY = l, i.touchStartTime = _.now(), a.allowClick = !0, a.updateSize(), a.swipeDirection = void 0, n.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== r.type) {
                            var d = !0;
                            e(r.target).is(i.formElements) && (d = !1), j.activeElement && e(j.activeElement).is(i.formElements) && j.activeElement.blur(), d && r.preventDefault()
                        }
                        a.emit("touchStart", r)
                    }
                }
            }
        },
        Ye = function(t) {
            var a = this,
                i = a.touchEventsData,
                n = a.params,
                s = a.touches,
                r = a.rtl,
                o = t;
            if (o.originalEvent && (o = o.originalEvent), !i.isTouchEvent || "mousemove" !== o.type) {
                var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                    d = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                if (o.preventedByNestedSwiper) return s.startX = l, void(s.startY = d);
                if (!a.allowTouchMove) return a.allowClick = !1, void(i.isTouched && (_.extend(s, {
                    startX: l,
                    startY: d,
                    currentX: l,
                    currentY: d
                }), i.touchStartTime = _.now()));
                if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                    if (a.isVertical()) {
                        if (s.currentY < s.startY && a.translate <= a.maxTranslate() || s.currentY > s.startY && a.translate >= a.minTranslate()) return
                    } else if (s.currentX < s.startX && a.translate <= a.maxTranslate() || s.currentX > s.startX && a.translate >= a.minTranslate()) return;
                if (i.isTouchEvent && j.activeElement && o.target === j.activeElement && e(o.target).is(i.formElements)) return i.isMoved = !0, void(a.allowClick = !1);
                if (i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                    if (s.currentX = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX, s.currentY = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY, "undefined" == typeof i.isScrolling) {
                        var c;
                        a.isHorizontal() && s.currentY === s.startY || a.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : (c = 180 * Math.atan2(Math.abs(s.currentY - s.startY), Math.abs(s.currentX - s.startX)) / Math.PI, i.isScrolling = a.isHorizontal() ? c > n.touchAngle : 90 - c > n.touchAngle)
                    }
                    if (i.isScrolling && a.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (s.currentX === s.startX && s.currentY === s.startY || (i.startMoving = !0)), i.isTouched) {
                        if (i.isScrolling) return void(i.isTouched = !1);
                        if (i.startMoving) {
                            a.allowClick = !1, o.preventDefault(), n.touchMoveStopPropagation && !n.nested && o.stopPropagation(), i.isMoved || (n.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || a.allowSlideNext !== !0 && a.allowSlidePrev !== !0 || a.setGrabCursor(!0), a.emit("sliderFirstMove", o)), a.emit("sliderMove", o), i.isMoved = !0;
                            var u = a.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
                            s.diff = u, u *= n.touchRatio, r && (u = -u), a.swipeDirection = u > 0 ? "prev" : "next", i.currentTranslate = u + i.startTranslate;
                            var p = !0,
                                h = n.resistanceRatio;
                            if (n.touchReleaseOnEdges && (h = 0), u > 0 && i.currentTranslate > a.minTranslate() ? (p = !1, n.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + u, h))) : u < 0 && i.currentTranslate < a.maxTranslate() && (p = !1, n.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - u, h))), p && (o.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.threshold > 0) {
                                if (!(Math.abs(u) > n.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, i.currentTranslate = i.startTranslate, void(s.diff = a.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                            }
                            n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), n.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: s[a.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }), i.velocities.push({
                                position: s[a.isHorizontal() ? "currentX" : "currentY"],
                                time: _.now()
                            })), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate))
                        }
                    }
                }
            }
        },
        Xe = function(e) {
            var t = this,
                a = t.touchEventsData,
                i = t.params,
                n = t.touches,
                s = t.rtl,
                r = t.$wrapperEl,
                o = t.slidesGrid,
                l = t.snapGrid,
                d = e;
            if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, a.isTouched) {
                i.grabCursor && a.isMoved && a.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
                var c = _.now(),
                    u = c - a.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && c - a.lastClickTime > 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = _.nextTick(function() {
                        t && !t.destroyed && t.emit("click", d)
                    }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = _.now(), _.nextTick(function() {
                        t.destroyed || (t.allowClick = !0)
                    }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === n.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, void(a.isMoved = !1);
                a.isTouched = !1, a.isMoved = !1;
                var p;
                if (p = i.followFinger ? s ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (a.velocities.length > 1) {
                            var h = a.velocities.pop(),
                                f = a.velocities.pop(),
                                v = h.position - f.position,
                                m = h.time - f.time;
                            t.velocity = v / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || _.now() - h.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                        var g = 1e3 * i.freeModeMomentumRatio,
                            w = t.velocity * g,
                            y = t.translate + w;
                        s && (y = -y);
                        var b, x = !1,
                            T = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < -T && (y = t.maxTranslate() - T), b = t.maxTranslate(), x = !0, a.allowMomentumBounce = !0) : y = t.maxTranslate();
                        else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > T && (y = t.minTranslate() + T), b = t.minTranslate(), x = !0, a.allowMomentumBounce = !0) : y = t.minTranslate();
                        else if (i.freeModeSticky) {
                            for (var E, C = 0; C < l.length; C += 1)
                                if (l[C] > -y) {
                                    E = C;
                                    break
                                }
                            y = Math.abs(l[E] - y) < Math.abs(l[E - 1] - y) || "next" === t.swipeDirection ? l[E] : l[E - 1], s || (y = -y)
                        }
                        if (0 !== t.velocity) g = s ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                        else if (i.freeModeSticky) return void t.slideReset();
                        i.freeModeMomentumBounce && x ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(y), t.transitionStart(), t.animating = !0, r.transitionEnd(function() {
                            t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(b), r.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(y), t.transitionStart(), t.animating || (t.animating = !0, r.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    return void((!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()))
                }
                for (var S = 0, M = t.slidesSizesGrid[0], $ = 0; $ < o.length; $ += i.slidesPerGroup) "undefined" != typeof o[$ + i.slidesPerGroup] ? p >= o[$] && p < o[$ + i.slidesPerGroup] && (S = $, M = o[$ + i.slidesPerGroup] - o[$]) : p >= o[$] && (S = $, M = o[o.length - 1] - o[o.length - 2]);
                var z = (p - o[S]) / M;
                if (u > i.longSwipesMs) {
                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (z >= i.longSwipesRatio ? t.slideTo(S + i.slidesPerGroup) : t.slideTo(S)), "prev" === t.swipeDirection && (z > 1 - i.longSwipesRatio ? t.slideTo(S + i.slidesPerGroup) : t.slideTo(S))
                } else {
                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && t.slideTo(S + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(S)
                }
            }
        },
        Ve = function() {
            var e = this,
                t = e.params,
                a = e.el,
                i = e.allowSlideNext,
                n = e.allowSlidePrev;
            if (!a || 0 !== a.offsetWidth) {
                if (t.breakpoints && e.setBreakpoint(), e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                    var s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
                } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                e.allowSlidePrev = n, e.allowSlideNext = i
            }
        },
        Ge = function(e) {
            var t = this;
            t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
        },
        Be = {
            attachEvents: X,
            detachEvents: V
        },
        Re = function() {
            var e = this,
                t = e.activeIndex,
                a = e.loopedSlides;
            void 0 === a && (a = 0);
            var i = e.params,
                n = i.breakpoints;
            if (n && (!n || 0 !== Object.keys(n).length)) {
                var s = e.getBreakpoint(n);
                if (s && e.currentBreakpoint !== s) {
                    var r = s in n ? n[s] : e.originalParams,
                        o = i.loop && r.slidesPerView !== i.slidesPerView;
                    if (_.extend(e.params, r), _.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), e.currentBreakpoint = s, o) {
                        var l = t - a;
                        e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(l + a, 0, !1)
                    }
                }
            }
        },
        qe = function(e) {
            if (e) {
                var t = !1,
                    a = [];
                Object.keys(e).forEach(function(e) {
                    a.push(e)
                }), a.sort(function(e, t) {
                    return parseInt(e, 10) > parseInt(t, 10)
                });
                for (var i = 0; i < a.length; i += 1) {
                    var n = a[i];
                    n >= R.innerWidth && !t && (t = n)
                }
                return t || "max"
            }
        },
        Fe = {
            setBreakpoint: Re,
            getBreakpoint: qe
        },
        We = function() {
            var e = this,
                t = e.classNames,
                a = e.params,
                i = e.rtl,
                n = e.$el,
                s = [];
            s.push(a.direction), a.freeMode && s.push("free-mode"), U.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), i && s.push("rtl"), a.slidesPerColumn > 1 && s.push("multirow"), Ne.android && s.push("android"), Ne.ios && s.push("ios"), (R.navigator.pointerEnabled || R.navigator.msPointerEnabled) && s.push("wp8-" + a.direction), s.forEach(function(e) {
                t.push(a.containerModifierClass + e)
            }), n.addClass(t.join(" "))
        },
        _e = function() {
            var e = this,
                t = e.$el,
                a = e.classNames;
            t.removeClass(a.join(" "))
        },
        je = {
            addClasses: We,
            removeClasses: _e
        },
        Ue = function(e, t, a, i, n, s) {
            function r() {
                s && s()
            }
            var o;
            e.complete && n ? r() : t ? (o = new R.Image, o.onload = r, o.onerror = r, i && (o.sizes = i), a && (o.srcset = a), t && (o.src = t)) : r()
        },
        Ke = function() {
            function e() {
                "undefined" != typeof t && null !== t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
            }
            var t = this;
            t.imagesToLoad = t.$el.find("img");
            for (var a = 0; a < t.imagesToLoad.length; a += 1) {
                var i = t.imagesToLoad[a];
                t.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, e)
            }
        },
        Ze = {
            loadImage: Ue,
            preloadImages: Ke
        },
        Je = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        Qe = {
            update: oe,
            translate: pe,
            transition: me,
            slide: Ee,
            loop: $e,
            grabCursor: ke,
            manipulation: Oe,
            events: Be,
            breakpoints: Fe,
            classes: je,
            images: Ze
        },
        et = {},
        tt = function(t) {
            function a() {
                for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
                var s, r;
                if (1 === i.length && i[0].constructor && i[0].constructor === Object) r = i[0];
                else {
                    var o;
                    o = i, s = o[0], r = o[1]
                }
                r || (r = {}), r = _.extend({}, r), s && !r.el && (r.el = s), t.call(this, r), Object.keys(Qe).forEach(function(e) {
                    Object.keys(Qe[e]).forEach(function(t) {
                        a.prototype[t] || (a.prototype[t] = Qe[e][t])
                    })
                });
                var l = this;
                Object.keys(l.modules).forEach(function(e) {
                    var t = l.modules[e];
                    if (t.params) {
                        var a = Object.keys(t.params)[0],
                            i = t.params[a];
                        if ("object" != typeof i) return;
                        if (!(a in r && "enabled" in i)) return;
                        r[a] === !0 && (r[a] = {
                            enabled: !0
                        }), "object" != typeof r[a] || "enabled" in r[a] || (r[a].enabled = !0), r[a] || (r[a] = {
                            enabled: !1
                        })
                    }
                });
                var d = _.extend({}, Je);
                l.useModulesParams(d), l.params = _.extend({}, d, et, r), l.originalParams = _.extend({}, l.params), l.passedParams = _.extend({}, r);
                var c = e(l.params.el);
                if (s = c[0]) {
                    if (c.length > 1) {
                        var u = [];
                        return c.each(function(e, t) {
                            var i = _.extend({}, r, {
                                el: t
                            });
                            u.push(new a(i))
                        }), u
                    }
                    s.swiper = l, c.data("swiper", l);
                    var p = c.children("." + l.params.wrapperClass);
                    return _.extend(l, {
                        $el: c,
                        el: s,
                        $wrapperEl: p,
                        wrapperEl: p[0],
                        classNames: [],
                        slides: e(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === l.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === l.params.direction
                        },
                        rtl: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === p.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEvents: function() {
                            var e = ["touchstart", "touchmove", "touchend"],
                                t = ["mousedown", "mousemove", "mouseup"];
                            return R.navigator.pointerEnabled ? t = ["pointerdown", "pointermove", "pointerup"] : R.navigator.msPointerEnabled && (t = ["MSPointerDown", "MsPointerMove", "MsPointerUp"]), {
                                start: U.touch || !l.params.simulateTouch ? e[0] : t[0],
                                move: U.touch || !l.params.simulateTouch ? e[1] : t[1],
                                end: U.touch || !l.params.simulateTouch ? e[2] : t[2]
                            }
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: _.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.useModules(), l.params.init && l.init(), l
                }
            }
            t && (a.__proto__ = t), a.prototype = Object.create(t && t.prototype), a.prototype.constructor = a;
            var i = {
                extendedDefaults: {},
                defaults: {},
                Class: {},
                $: {}
            };
            return a.prototype.slidesPerViewDynamic = function() {
                var e = this,
                    t = e.params,
                    a = e.slides,
                    i = e.slidesGrid,
                    n = e.size,
                    s = e.activeIndex,
                    r = 1;
                if (t.centeredSlides) {
                    for (var o, l = a[s].swiperSlideSize, d = s + 1; d < a.length; d += 1) a[d] && !o && (l += a[d].swiperSlideSize, r += 1, l > n && (o = !0));
                    for (var c = s - 1; c >= 0; c -= 1) a[c] && !o && (l += a[c].swiperSlideSize, r += 1, l > n && (o = !0))
                } else
                    for (var u = s + 1; u < a.length; u += 1) i[u] - i[s] < n && (r += 1);
                return r
            }, a.prototype.update = function() {
                function e() {
                    a = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
                }
                var t = this;
                if (t && !t.destroyed) {
                    t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
                    var a, i;
                    t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (i = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), i || e()), t.emit("update")
                }
            }, a.prototype.init = function() {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, a.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var a = this,
                    i = a.params,
                    n = a.$el,
                    s = a.$wrapperEl,
                    r = a.slides;
                a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), n.removeAttr("style"), s.removeAttr("style"), r && r.length && r.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function(e) {
                    a.off(e)
                }), e !== !1 && (a.$el[0].swiper = null, a.$el.data("swiper", null), _.deleteProps(a)), a.destroyed = !0
            }, a.extendDefaults = function(e) {
                _.extend(et, e)
            }, i.extendedDefaults.get = function() {
                return et
            }, i.defaults.get = function() {
                return Je
            }, i.Class.get = function() {
                return t
            }, i.$.get = function() {
                return e
            }, Object.defineProperties(a, i), a
        }(K),
        at = {
            name: "device",
            proto: {
                device: Ne
            },
            "static": {
                device: Ne
            }
        },
        it = {
            name: "support",
            proto: {
                support: U
            },
            "static": {
                support: U
            }
        },
        nt = {
            name: "browser",
            proto: {
                browser: ge
            },
            "static": {
                browser: ge
            }
        },
        st = {
            name: "resize",
            create: function() {
                var e = this;
                _.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    R.addEventListener("resize", e.resize.resizeHandler), R.addEventListener("orientationchange", e.resize.orientationChangeHandler)
                },
                destroy: function() {
                    var e = this;
                    R.removeEventListener("resize", e.resize.resizeHandler), R.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                }
            }
        },
        rt = {
            func: R.MutationObserver || R.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var a = this,
                    i = rt.func,
                    n = new i(function(e) {
                        e.forEach(function(e) {
                            a.emit("observerUpdate", e)
                        })
                    });
                n.observe(e, {
                    attributes: "undefined" == typeof t.attributes || t.attributes,
                    childList: "undefined" == typeof t.childList || t.childList,
                    characterData: "undefined" == typeof t.characterData || t.characterData
                }), a.observer.observers.push(n)
            },
            init: function() {
                var e = this;
                if (U.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], {
                        childList: !1
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                var e = this;
                e.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), e.observer.observers = []
            }
        },
        ot = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    observer: {
                        init: rt.init.bind(e),
                        attach: rt.attach.bind(e),
                        destroy: rt.destroy.bind(e),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.observer.init()
                },
                destroy: function() {
                    var e = this;
                    e.observer.destroy()
                }
            }
        },
        lt = {
            update: function(e) {
                function t() {
                    a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.lazy && a.params.lazy.enabled && a.lazy.load()
                }
                var a = this,
                    i = a.params,
                    n = i.slidesPerView,
                    s = i.slidesPerGroup,
                    r = i.centeredSlides,
                    o = a.virtual,
                    l = o.from,
                    d = o.to,
                    c = o.slides,
                    u = o.slidesGrid,
                    p = o.renderSlide,
                    h = o.offset;
                a.updateActiveIndex();
                var f, v = a.activeIndex || 0;
                f = a.rtl && a.isHorizontal() ? "right" : a.isHorizontal() ? "left" : "top";
                var m, g;
                r ? (m = Math.floor(n / 2) + s, g = Math.floor(n / 2) + s) : (m = n + (s - 1), g = s);
                var w = Math.max((v || 0) - g, 0),
                    y = Math.min((v || 0) + m, c.length - 1),
                    b = (a.slidesGrid[w] || 0) - (a.slidesGrid[0] || 0);
                if (_.extend(a.virtual, {
                        from: w,
                        to: y,
                        offset: b,
                        slidesGrid: a.slidesGrid
                    }), l === w && d === y && !e) return a.slidesGrid !== u && b !== h && a.slides.css(f, b + "px"), void a.updateProgress();
                if (a.params.virtual.renderExternal) return a.params.virtual.renderExternal.call(a, {
                    offset: b,
                    from: w,
                    to: y,
                    slides: function() {
                        for (var e = [], t = w; t <= y; t += 1) e.push(c[t]);
                        return e
                    }()
                }), void t();
                var x = [],
                    T = [];
                if (e) a.$wrapperEl.find("." + a.params.slideClass).remove();
                else
                    for (var E = l; E <= d; E += 1)(E < w || E > y) && a.$wrapperEl.find("." + a.params.slideClass + '[data-swiper-slide-index="' + E + '"]').remove();
                for (var C = 0; C < c.length; C += 1) C >= w && C <= y && ("undefined" == typeof d || e ? T.push(C) : (C > d && T.push(C), C < l && x.push(C)));
                T.forEach(function(e) {
                    a.$wrapperEl.append(p(c[e], e))
                }), x.sort(function(e, t) {
                    return e < t
                }).forEach(function(e) {
                    a.$wrapperEl.prepend(p(c[e], e))
                }), a.$wrapperEl.children(".swiper-slide").css(f, b + "px"), t()
            },
            renderSlide: function(t, a) {
                var i = this,
                    n = i.params.virtual;
                if (n.cache && i.virtual.cache[a]) return i.virtual.cache[a];
                var s = e(n.renderSlide ? n.renderSlide.call(i, t, a) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + a + '">' + t + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", a), n.cache && (i.virtual.cache[a] = s), s
            },
            appendSlide: function(e) {
                var t = this;
                t.virtual.slides.push(e), t.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this;
                if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
                    var a = t.virtual.cache,
                        i = {};
                    Object.keys(a).forEach(function(e) {
                        i[e + 1] = a[e]
                    }), t.virtual.cache = i
                }
                t.virtual.update(!0), t.slideNext(0)
            }
        },
        dt = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    virtual: {
                        update: lt.update.bind(e),
                        appendSlide: lt.appendSlide.bind(e),
                        prependSlide: lt.prependSlide.bind(e),
                        renderSlide: lt.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        _.extend(e.params, t), _.extend(e.originalParams, t), e.virtual.update()
                    }
                },
                setTranslate: function() {
                    var e = this;
                    e.params.virtual.enabled && e.virtual.update()
                }
            }
        },
        ct = {
            handle: function(e) {
                var t = this,
                    a = e;
                a.originalEvent && (a = a.originalEvent);
                var i = a.keyCode || a.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === i || t.isVertical() && 40 === i)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === i || t.isVertical() && 38 === i)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || j.activeElement && j.activeElement.nodeName && ("input" === j.activeElement.nodeName.toLowerCase() || "textarea" === j.activeElement.nodeName.toLowerCase()))) {
                    if (37 === i || 39 === i || 38 === i || 40 === i) {
                        var n = !1;
                        if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var s = {
                                left: R.pageXOffset,
                                top: R.pageYOffset
                            },
                            r = R.innerWidth,
                            o = R.innerHeight,
                            l = t.$el.offset();
                        t.rtl && (l.left -= t.$el[0].scrollLeft);
                        for (var d = [
                                [l.left, l.top],
                                [l.left + t.width, l.top],
                                [l.left, l.top + t.height],
                                [l.left + t.width, l.top + t.height]
                            ], c = 0; c < d.length; c += 1) {
                            var u = d[c];
                            u[0] >= s.left && u[0] <= s.left + r && u[1] >= s.top && u[1] <= s.top + o && (n = !0)
                        }
                        if (!n) return
                    }
                    t.isHorizontal() ? (37 !== i && 39 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === i && !t.rtl || 37 === i && t.rtl) && t.slideNext(), (37 === i && !t.rtl || 39 === i && t.rtl) && t.slidePrev()) : (38 !== i && 40 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === i && t.slideNext(), 38 === i && t.slidePrev()), t.emit("keyPress", i)
                }
            },
            enable: function() {
                var t = this;
                t.keyboard.enabled || (e(j).on("keydown", t.keyboard.handle), t.keyboard.enabled = !0)
            },
            disable: function() {
                var t = this;
                t.keyboard.enabled && (e(j).off("keydown", t.keyboard.handle), t.keyboard.enabled = !1)
            }
        },
        ut = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    keyboard: {
                        enabled: !1,
                        enable: ct.enable.bind(e),
                        disable: ct.disable.bind(e),
                        handle: ct.handle.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.keyboard.enabled && e.keyboard.enable()
                },
                destroy: function() {
                    var e = this;
                    e.keyboard.enabled && e.keyboard.disable()
                }
            }
        },
        pt = {
            lastScrollTime: _.now(),
            event: function() {
                return R.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : G() ? "wheel" : "mousewheel"
            }(),
            normalize: function(e) {
                var t = 10,
                    a = 40,
                    i = 800,
                    n = 0,
                    s = 0,
                    r = 0,
                    o = 0;
                return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (n = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (n = s, s = 0), r = n * t, o = s * t, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || o) && e.deltaMode && (1 === e.deltaMode ? (r *= a, o *= a) : (r *= i, o *= i)), r && !n && (n = r < 1 ? -1 : 1), o && !s && (s = o < 1 ? -1 : 1), {
                    spinX: n,
                    spinY: s,
                    pixelX: r,
                    pixelY: o
                }
            },
            handle: function(e) {
                var t = e,
                    a = this,
                    i = a.params.mousewheel;
                t.originalEvent && (t = t.originalEvent);
                var n = 0,
                    s = a.rtl ? -1 : 1,
                    r = pt.normalize(t);
                if (i.forceToAxis)
                    if (a.isHorizontal()) {
                        if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return !0;
                        n = r.pixelX * s
                    } else {
                        if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return !0;
                        n = r.pixelY
                    }
                else n = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * s : -r.pixelY;
                if (0 === n) return !0;
                if (i.invert && (n = -n), a.params.freeMode) {
                    var o = a.getTranslate() + n * i.sensitivity,
                        l = a.isBeginning,
                        d = a.isEnd;
                    if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = _.nextTick(function() {
                            a.slideReset()
                        }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.stopAutoplay(), 0 === o || o === a.maxTranslate()) return !0
                } else {
                    if (_.now() - a.mousewheel.lastScrollTime > 60)
                        if (n < 0)
                            if (a.isEnd && !a.params.loop || a.animating) {
                                if (i.releaseOnEdges) return !0
                            } else a.slideNext(), a.emit("scroll", t);
                    else if (a.isBeginning && !a.params.loop || a.animating) {
                        if (i.releaseOnEdges) return !0
                    } else a.slidePrev(), a.emit("scroll", t);
                    a.mousewheel.lastScrollTime = (new R.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function() {
                var t = this;
                if (!pt.event) return !1;
                if (t.mousewheel.enabled) return !1;
                var a = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.on(pt.event, t.mousewheel.handle), t.mousewheel.enabled = !0, !0
            },
            disable: function() {
                var t = this;
                if (!pt.event) return !1;
                if (!t.mousewheel.enabled) return !1;
                var a = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.off(pt.event, t.mousewheel.handle), t.mousewheel.enabled = !1, !0
            }
        },
        ht = {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: pt.enable.bind(e),
                        disable: pt.disable.bind(e),
                        handle: pt.handle.bind(e),
                        lastScrollTime: _.now()
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.mousewheel.enabled && e.mousewheel.enable()
                },
                destroy: function() {
                    var e = this;
                    e.mousewheel.enabled && e.mousewheel.disable()
                }
            }
        },
        ft = {
            update: function() {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var a = e.navigation,
                        i = a.$nextEl,
                        n = a.$prevEl;
                    n && n.length > 0 && (e.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass))
                }
            },
            init: function() {
                var t = this,
                    a = t.params.navigation;
                if (a.nextEl || a.prevEl) {
                    var i, n;
                    a.nextEl && (i = e(a.nextEl), t.params.uniqueNavElements && "string" == typeof a.nextEl && i.length > 1 && 1 === t.$el.find(a.nextEl).length && (i = t.$el.find(a.nextEl))), a.prevEl && (n = e(a.prevEl), t.params.uniqueNavElements && "string" == typeof a.prevEl && n.length > 1 && 1 === t.$el.find(a.prevEl).length && (n = t.$el.find(a.prevEl))),
                        i && i.length > 0 && i.on("click", function(e) {
                            e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
                        }), n && n.length > 0 && n.on("click", function(e) {
                            e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
                        }), _.extend(t.navigation, {
                            $nextEl: i,
                            nextEl: i && i[0],
                            $prevEl: n,
                            prevEl: n && n[0]
                        })
                }
            },
            destroy: function() {
                var e = this,
                    t = e.navigation,
                    a = t.$nextEl,
                    i = t.$prevEl;
                a && a.length && (a.off("click"), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(e.params.navigation.disabledClass))
            }
        },
        vt = {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden"
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    navigation: {
                        init: ft.init.bind(e),
                        update: ft.update.bind(e),
                        destroy: ft.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.navigation.init(), e.navigation.update()
                },
                toEdge: function() {
                    var e = this;
                    e.navigation.update()
                },
                fromEdge: function() {
                    var e = this;
                    e.navigation.update()
                },
                destroy: function() {
                    var e = this;
                    e.navigation.destroy()
                },
                click: function(t) {
                    var a = this,
                        i = a.navigation,
                        n = i.$nextEl,
                        s = i.$prevEl;
                    !a.params.navigation.hideOnClick || e(t.target).is(s) || e(t.target).is(n) || (n && n.toggleClass(a.params.navigation.hiddenClass), s && s.toggleClass(a.params.navigation.hiddenClass))
                }
            }
        },
        mt = {
            update: function() {
                var t = this,
                    a = t.rtl,
                    i = t.params.pagination;
                if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                    var n, s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        r = t.pagination.$el,
                        o = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? (n = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), n > s - 1 - 2 * t.loopedSlides && (n -= s - 2 * t.loopedSlides), n > o - 1 && (n -= o), n < 0 && "bullets" !== t.params.paginationType && (n = o + n)) : n = "undefined" != typeof t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                        var l = t.pagination.bullets;
                        if (i.dynamicBullets && (t.pagination.bulletSize = l.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", 5 * t.pagination.bulletSize + "px")), l.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"), r.length > 1) l.each(function(t, a) {
                            var s = e(a);
                            s.index() === n && (s.addClass(i.bulletActiveClass), i.dynamicBullets && (s.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), s.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")))
                        });
                        else {
                            var d = l.eq(n);
                            d.addClass(i.bulletActiveClass), i.dynamicBullets && (d.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), d.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        }
                        if (i.dynamicBullets) {
                            var c = Math.min(l.length, 5),
                                u = (t.pagination.bulletSize * c - t.pagination.bulletSize) / 2 - n * t.pagination.bulletSize,
                                p = a ? "right" : "left";
                            l.css(t.isHorizontal() ? p : "top", u + "px")
                        }
                    }
                    if ("fraction" === i.type && (r.find("." + i.currentClass).text(n + 1), r.find("." + i.totalClass).text(o)), "progressbar" === i.type) {
                        var h = (n + 1) / o,
                            f = h,
                            v = 1;
                        t.isHorizontal() || (v = h, f = 1), r.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + f + ") scaleY(" + v + ")").transition(t.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (r.html(i.renderCustom(t, n + 1, o)), t.emit("paginationRender", t, r[0])) : t.emit("paginationUpdate", t, r[0])
                }
            },
            render: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        n = "";
                    if ("bullets" === t.type) {
                        for (var s = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, r = 0; r < s; r += 1) n += t.renderBullet ? t.renderBullet.call(e, r, t.bulletClass) : "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(n), e.pagination.bullets = i.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (n = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(n)), "progressbar" === t.type && (n = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(n)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function() {
                var t = this,
                    a = t.params.pagination;
                if (a.el) {
                    var i = e(a.el);
                    0 !== i.length && (t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === t.$el.find(a.el).length && (i = t.$el.find(a.el)), "bullets" === a.type && a.clickable && i.addClass(a.clickableClass), i.addClass(a.modifierClass + a.type), "bullets" === a.type && a.dynamicBullets && i.addClass("" + a.modifierClass + a.type + "-dynamic"), a.clickable && i.on("click", "." + a.bulletClass, function(a) {
                        a.preventDefault();
                        var i = e(this).index() * t.params.slidesPerGroup;
                        t.params.loop && (i += t.loopedSlides), t.slideTo(i)
                    }), _.extend(t.pagination, {
                        $el: i,
                        el: i[0]
                    }))
                }
            },
            destroy: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
                }
            }
        },
        gt = {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    type: "bullets",
                    dynamicBullets: !1,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    clickableClass: "swiper-pagination-clickable"
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    pagination: {
                        init: mt.init.bind(e),
                        render: mt.render.bind(e),
                        update: mt.update.bind(e),
                        destroy: mt.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.pagination.init(), e.pagination.render(), e.pagination.update()
                },
                activeIndexChange: function() {
                    var e = this;
                    e.params.loop ? e.pagination.update() : "undefined" == typeof e.snapIndex && e.pagination.update()
                },
                snapIndexChange: function() {
                    var e = this;
                    e.params.loop || e.pagination.update()
                },
                slidesLengthChange: function() {
                    var e = this;
                    e.params.loop && (e.pagination.render(), e.pagination.update())
                },
                snapGridLengthChange: function() {
                    var e = this;
                    e.params.loop || (e.pagination.render(), e.pagination.update())
                },
                destroy: function() {
                    var e = this;
                    e.pagination.destroy()
                },
                click: function(t) {
                    var a = this;
                    a.params.pagination.el && a.params.pagination.hideOnClick && a.pagination.$el.length > 0 && !e(t.target).hasClass(a.params.pagination.bulletClass) && a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)
                }
            }
        },
        wt = {
            setTranslate: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtl,
                        i = e.progress,
                        n = t.dragSize,
                        s = t.trackSize,
                        r = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        d = n,
                        c = (s - n) * i;
                    a && e.isHorizontal() ? (c = -c, c > 0 ? (d = n - c, c = 0) : -c + n > s && (d = s + c)) : c < 0 ? (d = n + c, c = 0) : c + n > s && (d = s - c), e.isHorizontal() ? (U.transforms3d ? r.transform("translate3d(" + c + "px, 0, 0)") : r.transform("translateX(" + c + "px)"), r[0].style.width = d + "px") : (U.transforms3d ? r.transform("translate3d(0px, " + c + "px, 0)") : r.transform("translateY(" + c + "px)"), r[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
                        o[0].style.opacity = 0, o.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(e) {
                var t = this;
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    a[0].style.width = "", a[0].style.height = "";
                    var n, s = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        r = e.size / e.virtualSize,
                        o = r * (s / e.size);
                    n = "auto" === e.params.scrollbar.dragSize ? s * r : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = n + "px" : a[0].style.height = n + "px", r >= 1 ? i[0].style.display = "none" : i[0].style.display = "", e.params.scrollbarHide && (i[0].style.opacity = 0), _.extend(t, {
                        trackSize: s,
                        divider: r,
                        moveDivider: o,
                        dragSize: n
                    })
                }
            },
            setDragPosition: function(e) {
                var t, a = this,
                    i = a.scrollbar,
                    n = i.$el,
                    s = i.dragSize,
                    r = i.moveDivider;
                t = a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                var o = t - n.offset()[a.isHorizontal() ? "left" : "top"] - s / 2,
                    l = -a.minTranslate() * r,
                    d = -a.maxTranslate() * r;
                o < l ? o = l : o > d && (o = d), a.rtl && (o = d - o), o = -o / r, a.updateProgress(o), a.setTranslate(o), a.updateActiveIndex(), a.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    n = t.$wrapperEl,
                    s = i.$el,
                    r = i.$dragEl;
                t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), n.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), s.transition(0), a.hide && s.css("opacity", 1), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this,
                    a = t.scrollbar,
                    i = t.$wrapperEl,
                    n = a.$el,
                    s = a.$dragEl;
                t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), n.transition(0), s.transition(0), t.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    n = i.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = _.nextTick(function() {
                    n.css("opacity", 0), n.transition(400)
                }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideReset())
            },
            enableDraggable: function() {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar,
                        i = a.$el,
                        n = U.touch ? i[0] : document;
                    i.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart), e(n).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove), e(n).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd)
                }
            },
            disableDraggable: function() {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar,
                        i = a.$el,
                        n = U.touch ? i[0] : document;
                    i.off(t.scrollbar.dragEvents.start), e(n).off(t.scrollbar.dragEvents.move), e(n).off(t.scrollbar.dragEvents.end)
                }
            },
            init: function() {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar,
                        i = t.$el,
                        n = t.touchEvents,
                        s = t.params.scrollbar,
                        r = e(s.el);
                    t.params.uniqueNavElements && "string" == typeof s.el && r.length > 1 && 1 === i.find(s.el).length && (r = i.find(s.el));
                    var o = r.find(".swiper-scrollbar-drag");
                    0 === o.length && (o = e('<div class="swiper-scrollbar-drag"></div>'), r.append(o)), t.scrollbar.dragEvents = function() {
                        return t.params.simulateTouch !== !1 || U.touch ? n : {
                            start: "mousedown",
                            move: "mousemove",
                            end: "mouseup"
                        }
                    }(), _.extend(a, {
                        $el: r,
                        el: r[0],
                        $dragEl: o,
                        dragEl: o[0]
                    }), s.draggable && a.enableDraggable()
                }
            },
            destroy: function() {
                var e = this;
                e.scrollbar.disableDraggable()
            }
        },
        yt = {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    scrollbar: {
                        init: wt.init.bind(e),
                        destroy: wt.destroy.bind(e),
                        updateSize: wt.updateSize.bind(e),
                        setTranslate: wt.setTranslate.bind(e),
                        setTransition: wt.setTransition.bind(e),
                        enableDraggable: wt.enableDraggable.bind(e),
                        disableDraggable: wt.disableDraggable.bind(e),
                        setDragPosition: wt.setDragPosition.bind(e),
                        onDragStart: wt.onDragStart.bind(e),
                        onDragMove: wt.onDragMove.bind(e),
                        onDragEnd: wt.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                },
                update: function() {
                    var e = this;
                    e.scrollbar.updateSize()
                },
                resize: function() {
                    var e = this;
                    e.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    var e = this;
                    e.scrollbar.updateSize()
                },
                setTranslate: function() {
                    var e = this;
                    e.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    t.scrollbar.setTransition(e)
                },
                destroy: function() {
                    var e = this;
                    e.scrollbar.destroy()
                }
            }
        },
        bt = {
            setTransform: function(t, a) {
                var i = this,
                    n = i.rtl,
                    s = e(t),
                    r = n ? -1 : 1,
                    o = s.attr("data-swiper-parallax") || "0",
                    l = s.attr("data-swiper-parallax-x"),
                    d = s.attr("data-swiper-parallax-y"),
                    c = s.attr("data-swiper-parallax-scale"),
                    u = s.attr("data-swiper-parallax-opacity");
                if (l || d ? (l = l || "0", d = d || "0") : i.isHorizontal() ? (l = o, d = "0") : (d = o, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * a * r + "%" : l * a * r + "px", d = d.indexOf("%") >= 0 ? parseInt(d, 10) * a + "%" : d * a + "px", "undefined" != typeof u && null !== u) {
                    var p = u - (u - 1) * (1 - Math.abs(a));
                    s[0].style.opacity = p
                }
                if ("undefined" == typeof c || null === c) s.transform("translate3d(" + l + ", " + d + ", 0px)");
                else {
                    var h = c - (c - 1) * (1 - Math.abs(a));
                    s.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + h + ")")
                }
            },
            setTranslate: function() {
                var t = this,
                    a = t.$el,
                    i = t.slides,
                    n = t.progress,
                    s = t.snapGrid;
                a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, a) {
                    t.parallax.setTransform(a, n)
                }), i.each(function(a, i) {
                    var r = i.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (r += Math.ceil(a / 2) - n * (s.length - 1)), r = Math.min(Math.max(r, -1), 1), e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, a) {
                        t.parallax.setTransform(a, r)
                    })
                })
            },
            setTransition: function(t) {
                void 0 === t && (t = this.params.speed);
                var a = this,
                    i = a.$el;
                i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(a, i) {
                    var n = e(i),
                        s = parseInt(n.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (s = 0), n.transition(s)
                })
            }
        },
        xt = {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    parallax: {
                        setTransform: bt.setTransform.bind(e),
                        setTranslate: bt.setTranslate.bind(e),
                        setTransition: bt.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    e.params.watchSlidesProgress = !0
                },
                init: function() {
                    var e = this;
                    e.params.parallax && e.parallax.setTranslate()
                },
                setTranslate: function() {
                    var e = this;
                    e.params.parallax && e.parallax.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    t.params.parallax && t.parallax.setTransition(e)
                }
            }
        },
        Tt = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    n = e.targetTouches[1].pageY,
                    s = Math.sqrt(Math.pow(i - t, 2) + Math.pow(n - a, 2));
                return s
            },
            onGestureStart: function(t) {
                var a = this,
                    i = a.params.zoom,
                    n = a.zoom,
                    s = n.gesture;
                if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !U.gestures) {
                    if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                    n.fakeGestureTouched = !0, s.scaleStart = Tt.getDistanceBetweenTouches(t)
                }
                return s.$slideEl && s.$slideEl.length || (s.$slideEl = e(this), 0 === s.$slideEl.length && (s.$slideEl = a.slides.eq(a.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), void(a.zoom.isScaling = !0)) : void(s.$imageEl = void 0)
            },
            onGestureChange: function(e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    n = i.gesture;
                if (!U.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, n.scaleMove = Tt.getDistanceBetweenTouches(e)
                }
                n.$imageEl && 0 !== n.$imageEl.length && (U.gestures ? t.zoom.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    n = i.gesture;
                if (!U.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !Ne.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), a.minRatio), n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    n = a.image;
                i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (Ne.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    n = a.image,
                    s = a.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, n.isTouched && i.$slideEl)) {
                    n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = _.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = _.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (n.startX = -n.startX), t.rtl && (n.startY = -n.startY));
                    var r = n.width * a.scale,
                        o = n.height * a.scale;
                    if (!(r < i.slideWidth && o < i.slideHeight)) {
                        if (n.minX = Math.min(i.slideWidth / 2 - r / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - o / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !n.isMoved && !a.isScaling) {
                            if (t.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void(n.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void(n.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = n.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = n.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (n.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (n.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(n.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(n.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = n.touchesCurrent.x, s.prevPositionY = n.touchesCurrent.y, s.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this,
                    t = e.zoom,
                    a = t.gesture,
                    i = t.image,
                    n = t.velocity;
                if (a.$imageEl && 0 !== a.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var s = 300,
                        r = 300,
                        o = n.x * s,
                        l = i.currentX + o,
                        d = n.y * r,
                        c = i.currentY + d;
                    0 !== n.x && (s = Math.abs((l - i.currentX) / n.x)), 0 !== n.y && (r = Math.abs((c - i.currentY) / n.y));
                    var u = Math.max(s, r);
                    i.currentX = l, i.currentY = c;
                    var p = i.width * t.scale,
                        h = i.height * t.scale;
                    i.minX = Math.min(a.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(a.slideHeight / 2 - h / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), a.$imageWrapEl.transition(u).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this,
                    t = e.zoom,
                    a = t.gesture;
                a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl.transform("translate3d(0,0,0)"), a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0, t.scale = 1, t.currentScale = 1)
            },
            toggle: function(e) {
                var t = this,
                    a = t.zoom;
                a.scale && 1 !== a.scale ? a.out() : a["in"](e)
            },
            "in": function(t) {
                var a = this,
                    i = a.zoom,
                    n = a.params.zoom,
                    s = i.gesture,
                    r = i.image;
                if (s.$slideEl || (s.$slideEl = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + n.containerClass)), s.$imageEl && 0 !== s.$imageEl.length) {
                    s.$slideEl.addClass("" + n.zoomedSlideClass);
                    var o, l, d, c, u, p, h, f, v, m, g, w, y, b, x, T, E, C;
                    "undefined" == typeof r.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = r.touchesStart.x, l = r.touchesStart.y), i.scale = s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, i.currentScale = s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, t ? (E = s.$slideEl[0].offsetWidth, C = s.$slideEl[0].offsetHeight, d = s.$slideEl.offset().left, c = s.$slideEl.offset().top, u = d + E / 2 - o, p = c + C / 2 - l, v = s.$imageEl[0].offsetWidth, m = s.$imageEl[0].offsetHeight, g = v * i.scale, w = m * i.scale, y = Math.min(E / 2 - g / 2, 0), b = Math.min(C / 2 - w / 2, 0), x = -y, T = -b, h = u * i.scale, f = p * i.scale, h < y && (h = y), h > x && (h = x), f < b && (f = b), f > T && (f = T)) : (h = 0, f = 0), s.$imageWrapEl.transition(300).transform("translate3d(" + h + "px, " + f + "px,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")")
                }
            },
            out: function() {
                var t = this,
                    a = t.zoom,
                    i = t.params.zoom,
                    n = a.gesture;
                n.$slideEl || (n.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + i.containerClass)), n.$imageEl && 0 !== n.$imageEl.length && (a.scale = 1, a.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + i.zoomedSlideClass), n.$slideEl = void 0)
            },
            enable: function() {
                var t = this,
                    a = t.zoom;
                if (!a.enabled) {
                    a.enabled = !0;
                    var i = t.slides,
                        n = !("touchstart" !== t.touchEvents.start || !U.passiveListener || !t.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    U.gestures ? (i.on("gesturestart", a.onGestureStart, n), i.on("gesturechange", a.onGestureChange, n), i.on("gestureend", a.onGestureEnd, n)) : "touchstart" === t.touchEvents.start && (i.on(t.touchEvents.start, a.onGestureStart, n), i.on(t.touchEvents.move, a.onGestureChange, n), i.on(t.touchEvents.end, a.onGestureEnd, n)), t.slides.each(function(i, n) {
                        var s = e(n);
                        s.find("." + t.params.zoom.containerClass).length > 0 && s.on(t.touchEvents.move, a.onTouchMove)
                    })
                }
            },
            disable: function() {
                var t = this,
                    a = t.zoom;
                if (a.enabled) {
                    t.zoom.enabled = !1;
                    var i = t.slides,
                        n = !("touchstart" !== t.touchEvents.start || !U.passiveListener || !t.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    U.gestures ? (i.off("gesturestart", a.onGestureStart, n), i.off("gesturechange", a.onGestureChange, n), i.off("gestureend", a.onGestureEnd, n)) : "touchstart" === t.touchEvents.start && (i.off(t.touchEvents.start, a.onGestureStart, n), i.off(t.touchEvents.move, a.onGestureChange, n), i.off(t.touchEvents.end, a.onGestureEnd, n)), t.slides.each(function(i, n) {
                        var s = e(n);
                        s.find("." + t.params.zoom.containerClass).length > 0 && s.off(t.touchEvents.move, a.onTouchMove)
                    })
                }
            }
        },
        Et = {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(a) {
                    t[a] = Tt[a].bind(e)
                }), _.extend(e, {
                    zoom: t
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.zoom.enabled && e.zoom.enable()
                },
                destroy: function() {
                    var e = this;
                    e.zoom.disable()
                },
                touchStart: function(e) {
                    var t = this;
                    t.zoom.enabled && t.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    var t = this;
                    t.zoom.enabled && t.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    var t = this;
                    t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                },
                transitionEnd: function() {
                    var e = this;
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                }
            }
        },
        Ct = {
            loadInSlide: function(t, a) {
                void 0 === a && (a = !0);
                var i = this,
                    n = i.params.lazy;
                if ("undefined" != typeof t && 0 !== i.slides.length) {
                    var s = i.virtual && i.params.virtual.enabled,
                        r = s ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                        o = r.find("." + n.elementClass + ":not(." + n.loadedClass + "):not(." + n.loadingClass + ")");
                    !r.hasClass(n.elementClass) || r.hasClass(n.loadedClass) || r.hasClass(n.loadingClass) || (o = o.add(r[0])), 0 !== o.length && o.each(function(t, s) {
                        var o = e(s);
                        o.addClass(n.loadingClass);
                        var l = o.attr("data-background"),
                            d = o.attr("data-src"),
                            c = o.attr("data-srcset"),
                            u = o.attr("data-sizes");
                        i.loadImage(o[0], d || l, c, u, !1, function() {
                            if ("undefined" != typeof i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (c && (o.attr("srcset", c), o.removeAttr("data-srcset")), u && (o.attr("sizes", u), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(n.loadedClass).removeClass(n.loadingClass), r.find("." + n.preloaderClass).remove(), i.params.loop && a) {
                                    var e = r.attr("data-swiper-slide-index");
                                    if (r.hasClass(i.params.slideDuplicateClass)) {
                                        var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var s = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(s.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", r[0], o[0])
                            }
                        }), i.emit("lazyImageLoad", r[0], o[0])
                    })
                }
            },
            load: function() {
                function t(e) {
                    if (l) {
                        if (n.children("." + s.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (r[e]) return !0;
                    return !1
                }

                function a(t) {
                    return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
                }
                var i = this,
                    n = i.$wrapperEl,
                    s = i.params,
                    r = i.slides,
                    o = i.activeIndex,
                    l = i.virtual && s.virtual.enabled,
                    d = s.lazy,
                    c = s.slidesPerView;
                if ("auto" === c && (c = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) n.children("." + s.slideVisibleClass).each(function(t, a) {
                    var n = l ? e(a).attr("data-swiper-slide-index") : e(a).index();
                    i.lazy.loadInSlide(n)
                });
                else if (c > 1)
                    for (var u = o; u < o + c; u += 1) t(u) && i.lazy.loadInSlide(u);
                else i.lazy.loadInSlide(o);
                if (d.loadPrevNext)
                    if (c > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
                        for (var p = d.loadPrevNextAmount, h = c, f = Math.min(o + h + Math.max(p, h), r.length), v = Math.max(o - Math.max(h, p), 0), m = o + c; m < f; m += 1) t(m) && i.lazy.loadInSlide(m);
                        for (var g = v; g < o; g += 1) t(g) && i.lazy.loadInSlide(g)
                    } else {
                        var w = n.children("." + s.slideNextClass);
                        w.length > 0 && i.lazy.loadInSlide(a(w));
                        var y = n.children("." + s.slidePrevClass);
                        y.length > 0 && i.lazy.loadInSlide(a(y))
                    }
            }
        },
        St = {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: Ct.load.bind(e),
                        loadInSlide: Ct.loadInSlide.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    e.params.preloadImages && (e.params.preloadImages = !1)
                },
                init: function() {
                    var e = this;
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                },
                scroll: function() {
                    var e = this;
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                },
                resize: function() {
                    var e = this;
                    e.params.lazy.enabled && e.lazy.load()
                },
                scrollbarDragMove: function() {
                    var e = this;
                    e.params.lazy.enabled && e.lazy.load()
                },
                transitionStart: function() {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function() {
                    var e = this;
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                }
            }
        },
        Mt = {
            LinearSpline: function(e, t) {
                var a = function() {
                    var e, t, a;
                    return function(i, n) {
                        for (t = -1, e = i.length; e - t > 1;) a = e + t >> 1, i[a] <= n ? t = a : e = a;
                        return e
                    }
                }();
                this.x = e, this.y = t, this.lastIndex = e.length - 1;
                var i, n;
                return this.interpolate = function(e) {
                    return e ? (n = a(this.x, e), i = n - 1, (e - this.x[i]) * (this.y[n] - this.y[i]) / (this.x[n] - this.x[i]) + this.y[i]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new Mt.LinearSpline(t.slidesGrid, e.slidesGrid) : new Mt.LinearSpline(t.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                function a(e) {
                    var t = e.rtl && "horizontal" === e.params.direction ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), n = -s.controller.spline.interpolate(-t)), n && "container" !== s.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (t - s.minTranslate()) * i + e.minTranslate()), s.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, s), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                var i, n, s = this,
                    r = s.controller.control;
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof tt && a(r[o]);
                else r instanceof tt && t !== r && a(r)
            },
            setTransition: function(e, t) {
                function a(t) {
                    t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
                        s && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
                    }))
                }
                var i, n = this,
                    s = n.controller.control;
                if (Array.isArray(s))
                    for (i = 0; i < s.length; i += 1) s[i] !== t && s[i] instanceof tt && a(s[i]);
                else s instanceof tt && t !== s && a(s)
            }
        },
        $t = {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: Mt.getInterpolateFunction.bind(e),
                        setTranslate: Mt.setTranslate.bind(e),
                        setTransition: Mt.setTransition.bind(e)
                    }
                })
            },
            on: {
                update: function() {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                resize: function() {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                observerUpdate: function() {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                setTranslate: function(e, t) {
                    var a = this;
                    a.controller.control && a.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    var a = this;
                    a.controller.control && a.controller.setTransition(e, t)
                }
            }
        },
        zt = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(t) {
                var a = this,
                    i = a.params.a11y;
                if (13 === t.keyCode) {
                    var n = e(t.target);
                    a.navigation && a.navigation.$nextEl && n.is(a.navigation.$nextEl) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? a.a11y.notify(i.lastSlideMessage) : a.a11y.notify(i.nextSlideMessage)), a.navigation && a.navigation.$prevEl && n.is(a.navigation.$prevEl) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? a.a11y.notify(i.firstSlideMessage) : a.a11y.notify(i.prevSlideMessage)), a.pagination && n.is("." + a.params.pagination.bulletClass) && n[0].click()
                }
            },
            notify: function(e) {
                var t = this,
                    a = t.a11y.liveRegion;
                0 !== a.length && (a.html(""), a.html(e))
            },
            updateNavigation: function() {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && a.length > 0 && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
                }
            },
            updatePagination: function() {
                var t = this,
                    a = t.params.a11y;
                t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(i, n) {
                    var s = e(n);
                    t.a11y.makeElFocusable(s), t.a11y.addElRole(s, "button"), t.a11y.addElLabel(s, a.paginationBulletMessage.replace(/{{index}}/, s.index() + 1))
                })
            },
            init: function() {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, a, i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"),
                    e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function() {
                var e = this;
                e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
                var t, a;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), a && a.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            }
        },
        Pt = {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !1,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var t = this;
                _.extend(t, {
                    a11y: {
                        liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(zt).forEach(function(e) {
                    t.a11y[e] = zt[e].bind(t)
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                },
                toEdge: function() {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                fromEdge: function() {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updatePagination()
                },
                destroy: function() {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.destroy()
                }
            }
        },
        kt = {
            init: function() {
                var e = this;
                if (e.params.history) {
                    if (!R.history || !R.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    t.initialized = !0, t.paths = kt.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || R.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function() {
                var e = this;
                e.params.history.replaceState || R.removeEventListener("popstate", e.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                var e = this;
                e.history.paths = kt.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = R.location.pathname.slice(1).split("/"),
                    t = e.length,
                    a = e[t - 2],
                    i = e[t - 1];
                return {
                    key: a,
                    value: i
                }
            },
            setHistory: function(e, t) {
                var a = this;
                if (a.history.initialized && a.params.history.enabled) {
                    var i = a.slides.eq(t),
                        n = kt.slugify(i.attr("data-history"));
                    R.location.pathname.includes(e) || (n = e + "/" + n);
                    var s = R.history.state;
                    s && s.value === n || (a.params.history.replaceState ? R.history.replaceState({
                        value: n
                    }, null, n) : R.history.pushState({
                        value: n
                    }, null, n))
                }
            },
            slugify: function(e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, a) {
                var i = this;
                if (t)
                    for (var n = 0, s = i.slides.length; n < s; n += 1) {
                        var r = i.slides.eq(n),
                            o = kt.slugify(r.attr("data-history"));
                        if (o === t && !r.hasClass(i.params.slideDuplicateClass)) {
                            var l = r.index();
                            i.slideTo(l, e, a)
                        }
                    } else i.slideTo(0, e, a)
            }
        },
        It = {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    history: {
                        init: kt.init.bind(e),
                        setHistory: kt.setHistory.bind(e),
                        setHistoryPopState: kt.setHistoryPopState.bind(e),
                        scrollToSlide: kt.scrollToSlide.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.history.enabled && e.history.init()
                },
                destroy: function() {
                    var e = this;
                    e.params.history.enabled && e.history.destroy()
                },
                transitionEnd: function() {
                    var e = this;
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                }
            }
        },
        Dt = {
            onHashCange: function() {
                var e = this,
                    t = j.location.hash.replace("#", ""),
                    a = e.slides.eq(e.activeIndex).attr("data-hash");
                t !== a && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
            },
            setHash: function() {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && R.history && R.history.replaceState) R.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            a = t.attr("data-hash") || t.attr("data-history");
                        j.location.hash = a || ""
                    }
            },
            init: function() {
                var t = this;
                if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
                    t.hashNavigation.initialized = !0;
                    var a = j.location.hash.replace("#", "");
                    if (a)
                        for (var i = 0, n = 0, s = t.slides.length; n < s; n += 1) {
                            var r = t.slides.eq(n),
                                o = r.attr("data-hash") || r.attr("data-history");
                            if (o === a && !r.hasClass(t.params.slideDuplicateClass)) {
                                var l = r.index();
                                t.slideTo(l, i, t.params.runCallbacksOnInit, !0)
                            }
                        }
                    t.params.hashNavigation.watchState && e(R).on("hashchange", t.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                var t = this;
                t.params.hashNavigation.watchState && e(R).off("hashchange", t.hashNavigation.onHashCange)
            }
        },
        Lt = {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: Dt.init.bind(e),
                        destroy: Dt.destroy.bind(e),
                        setHash: Dt.setHash.bind(e),
                        onHashCange: Dt.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.init()
                },
                destroy: function() {
                    var e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    var e = this;
                    e.hashNavigation.initialized && e.hashNavigation.setHash()
                }
            }
        },
        At = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = _.nextTick(function() {
                    e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, a)
            },
            start: function() {
                var e = this;
                return "undefined" == typeof e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
            },
            stop: function() {
                var e = this;
                return !!e.autoplay.running && ("undefined" != typeof e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 === e ? (t.autoplay.paused = !1, t.autoplay.run()) : t.$wrapperEl.transitionEnd(function() {
                    t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                })))
            }
        },
        Ot = {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: At.run.bind(e),
                        start: At.start.bind(e),
                        stop: At.stop.bind(e),
                        pause: At.pause.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.autoplay.enabled && e.autoplay.start()
                },
                beforeTransitionStart: function(e, t) {
                    var a = this;
                    a.autoplay.running && (t || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(e) : a.autoplay.stop())
                },
                sliderFirstMove: function() {
                    var e = this;
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                },
                destroy: function() {
                    var e = this;
                    e.autoplay.running && e.autoplay.stop()
                }
            }
        },
        Nt = {
            setTranslate: function() {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        n = i[0].swiperSlideOffset,
                        s = -n;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || (r = s, s = 0);
                    var o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    ge.isSafari ? i.css({
                        opacity: o
                    }).transform("translate(" + s + "px, " + r + "px)") : i.css({
                        opacity: o
                    }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    a = t.slides,
                    i = t.$wrapperEl;
                if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var n = !1;
                    a.transitionEnd(function() {
                        if (!n && t && !t.destroyed) {
                            n = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) i.trigger(e[a])
                        }
                    })
                }
            }
        },
        Ht = {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    fadeEffect: {
                        setTranslate: Nt.setTranslate.bind(e),
                        setTransition: Nt.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        _.extend(e.params, t), _.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    var e = this;
                    "fade" === e.params.effect && e.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    "fade" === t.params.effect && t.fadeEffect.setTransition(e)
                }
            }
        },
        Yt = {
            setTranslate: function() {
                var t, a = this,
                    i = a.$el,
                    n = a.$wrapperEl,
                    s = a.slides,
                    r = a.width,
                    o = a.height,
                    l = a.rtl,
                    d = a.size,
                    c = a.params.cubeEffect,
                    u = a.isHorizontal(),
                    p = a.virtual && a.params.virtual.enabled,
                    h = 0;
                c.shadow && (u ? (t = n.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), n.append(t)), t.css({
                    height: r + "px"
                })) : (t = i.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t))));
                for (var f = 0; f < s.length; f += 1) {
                    var v = s.eq(f),
                        m = f;
                    p && (m = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var g = 90 * m,
                        w = Math.floor(g / 360);
                    l && (g = -g, w = Math.floor(-g / 360));
                    var y = Math.max(Math.min(v[0].progress, 1), -1),
                        b = 0,
                        x = 0,
                        T = 0;
                    m % 4 === 0 ? (b = 4 * -w * d, T = 0) : (m - 1) % 4 === 0 ? (b = 0, T = 4 * -w * d) : (m - 2) % 4 === 0 ? (b = d + 4 * w * d, T = d) : (m - 3) % 4 === 0 && (b = -d, T = 3 * d + 4 * d * w), l && (b = -b), u || (x = b, b = 0);
                    var E = "rotateX(" + (u ? 0 : -g) + "deg) rotateY(" + (u ? g : 0) + "deg) translate3d(" + b + "px, " + x + "px, " + T + "px)";
                    if (y <= 1 && y > -1 && (h = 90 * m + 90 * y, l && (h = 90 * -m - 90 * y)), v.transform(E), c.slideShadows) {
                        var C = u ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = u ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), v.append(C)), 0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), v.append(S)), C.length && (C[0].style.opacity = Math.max(-y, 0)), S.length && (S[0].style.opacity = Math.max(y, 0))
                    }
                }
                if (n.css({
                        "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                        "transform-origin": "50% 50% -" + d / 2 + "px"
                    }), c.shadow)
                    if (u) t.transform("translate3d(0px, " + (r / 2 + c.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.shadowScale + ")");
                    else {
                        var M = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            $ = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
                            z = c.shadowScale,
                            P = c.shadowScale / $,
                            k = c.shadowOffset;
                        t.transform("scale3d(" + z + ", 1, " + P + ") translate3d(0px, " + (o / 2 + k) + "px, " + -o / 2 / P + "px) rotateX(-90deg)")
                    }
                var I = ge.isSafari || ge.isUiWebView ? -d / 2 : 0;
                n.transform("translate3d(0px,0," + I + "px) rotateX(" + (a.isHorizontal() ? 0 : h) + "deg) rotateY(" + (a.isHorizontal() ? -h : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this,
                    a = t.$el,
                    i = t.slides;
                i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e)
            }
        },
        Xt = {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    cubeEffect: {
                        setTranslate: Yt.setTranslate.bind(e),
                        setTransition: Yt.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        _.extend(e.params, t), _.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    var e = this;
                    "cube" === e.params.effect && e.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    "cube" === t.params.effect && t.cubeEffect.setTransition(e)
                }
            }
        },
        Vt = {
            setTranslate: function() {
                for (var t = this, a = t.slides, i = 0; i < a.length; i += 1) {
                    var n = a.eq(i),
                        s = n[0].progress;
                    t.params.flipEffect.limitRotation && (s = Math.max(Math.min(n[0].progress, 1), -1));
                    var r = n[0].swiperSlideOffset,
                        o = -180 * s,
                        l = o,
                        d = 0,
                        c = -r,
                        u = 0;
                    if (t.isHorizontal() ? t.rtl && (l = -l) : (u = c, c = 0, d = -l, l = 0), n[0].style.zIndex = -Math.abs(Math.round(s)) + a.length, t.params.flipEffect.slideShadows) {
                        var p = t.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                            h = t.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                        0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), n.append(p)), 0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(h)), p.length && (p[0].style.opacity = Math.max(-s, 0)), h.length && (h[0].style.opacity = Math.max(s, 0))
                    }
                    n.transform("translate3d(" + c + "px, " + u + "px, 0px) rotateX(" + d + "deg) rotateY(" + l + "deg)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    a = t.slides,
                    i = t.activeIndex,
                    n = t.$wrapperEl;
                if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    a.eq(i).transitionEnd(function() {
                        if (!s && t && !t.destroyed) {
                            s = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) n.trigger(e[a])
                        }
                    })
                }
            }
        },
        Gt = {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    flipEffect: {
                        setTranslate: Vt.setTranslate.bind(e),
                        setTransition: Vt.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        _.extend(e.params, t), _.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    var e = this;
                    "flip" === e.params.effect && e.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    "flip" === t.params.effect && t.flipEffect.setTransition(e)
                }
            }
        },
        Bt = {
            setTranslate: function() {
                for (var t = this, a = t.width, i = t.height, n = t.slides, s = t.$wrapperEl, r = t.slidesSizesGrid, o = t.params.coverflowEffect, l = t.isHorizontal(), d = t.translate, c = l ? -d + a / 2 : -d + i / 2, u = l ? o.rotate : -o.rotate, p = o.depth, h = 0, f = n.length; h < f; h += 1) {
                    var v = n.eq(h),
                        m = r[h],
                        g = v[0].swiperSlideOffset,
                        w = (c - g - m / 2) / m * o.modifier,
                        y = l ? u * w : 0,
                        b = l ? 0 : u * w,
                        x = -p * Math.abs(w),
                        T = l ? 0 : o.stretch * w,
                        E = l ? o.stretch * w : 0;
                    Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0);
                    var C = "translate3d(" + E + "px," + T + "px," + x + "px)  rotateX(" + b + "deg) rotateY(" + y + "deg)";
                    if (v.transform(C), v[0].style.zIndex = -Math.abs(Math.round(w)) + 1, o.slideShadows) {
                        var S = l ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            M = l ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), v.append(S)), 0 === M.length && (M = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), v.append(M)), S.length && (S[0].style.opacity = w > 0 ? w : 0), M.length && (M[0].style.opacity = -w > 0 ? -w : 0)
                    }
                }
                if (ge.ie) {
                    var $ = s[0].style;
                    $.perspectiveOrigin = c + "px 50%"
                }
            },
            setTransition: function(e) {
                var t = this;
                t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        Rt = {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                var e = this;
                _.extend(e, {
                    coverflowEffect: {
                        setTranslate: Bt.setTranslate.bind(e),
                        setTransition: Bt.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    var e = this;
                    "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
                }
            }
        };
    return tt.components = [at, it, nt, st, ot, dt, ut, ht, vt, gt, yt, xt, Et, St, $t, Pt, It, Lt, Ot, Ht, Xt, Gt, Rt], tt
});
var DBVideo = function() {
    "use strict";

    function e(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function t(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function a(e, a, i) {
        return a && t(e.prototype, a), i && t(e, i), e
    }
    var i = e,
        n = a,
        s = function() {
            function e(t) {
                i(this, e), this.defaultParams = {
                    reset: !1,
                    replayWhenRevisible: !1,
                    visiblePlay: !1,
                    lazyLoad: !1,
                    lazyLoadThreshold: 0,
                    containerClassName: "dbv",
                    replayClassName: "",
                    downgradeHtml: "",
                    showWholeElmPlay: !0
                }, this._init(t)
            }
            return n(e, [{
                key: "_init",
                value: function(e) {
                    this.params = Object.assign(this.defaultParams, e), this._processVideo()
                }
            }, {
                key: "_processVideo",
                value: function() {
                    var e = this,
                        t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        a = window.navigator.userAgent,
                        i = !!a.match(/MicroMessenger/gi);
                    this.video_containers = Array.from(document.querySelectorAll(".".concat(this.params.containerClassName))), this.videos = Array.from(document.querySelectorAll(".".concat(this.params.containerClassName, " video"))), this.videos.length && this.videos.forEach(function(n, s) {
                        if (t) {
                            var r = !!a.match(/iPad/i) || !!a.match(/iPhone/i),
                                o = !!a.match(/UCBrowser/gi),
                                l = !!a.match(/android/gi),
                                d = !!a.match(/\bm?qqbrowser\/([0-9.]+)/gi);
                            if (l || r && (o || d)) return void e._initDowngrade(n);
                            e._videoWithControl(n)
                        }
                        e.params.lazyLoad && e._initLazyLoad(n), i ? document.addEventListener("WeixinJSBridgeReady", function() {
                            e.params.visiblePlay && e._initVisiblePlay(n, s), e.params.replayClassName && e._initReplay(n, s), e.params.reset && e._bindEndReset(n)
                        }) : (e.params.visiblePlay && e._initVisiblePlay(n, s), e.params.replayClassName && e._initReplay(n, s), e.params.reset && e._bindEndReset(n))
                    })
                }
            }, {
                key: "_initLazyLoad",
                value: function(e) {
                    function t() {
                        if (n) return !1;
                        if (a._checkVisible(e, a.params.lazyLoadThreshold)) {
                            for (var t = e.querySelectorAll("source"), s = 0; s < t.length; s++) {
                                var r = t[s].dataset.layzrSrc;
                                t[s].setAttribute("src", r)
                            }
                            var o = e.dataset.layzrPoster;
                            o && e.setAttribute("poster", o), e.load(), n = !0, window.removeEventListener("scroll", i), window.removeEventListener("resize", i)
                        }
                    }
                    var a = this,
                        i = this._throttle(t, 50);
                    window.addEventListener("scroll", i), window.addEventListener("resize", i);
                    var n = !1;
                    t()
                }
            }, {
                key: "_initVisiblePlay",
                value: function(e, t) {
                    function a() {
                        if (s.params.showWholeElmPlay) var a = s._showWholeElm(e);
                        else var a = s._checkVisible(e);
                        if (r) {
                            if (n || (s._bindVideoEvent(e, function(e) {
                                    s._triggerVideoPlay(e), e.pause()
                                }), n = !0), a && !i) {
                                var l = e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2;
                                l || s._bindVideoEvent(e, function(e) {
                                    if (e.currentTime = 0, s._triggerVideoPlay(e), s.params.replayClassName) {
                                        var a = s.video_containers[t].querySelector(".".concat(s.params.replayClassName));
                                        a.style.display = "none"
                                    }
                                    n = !0
                                })
                            }
                            i = a
                        } else {
                            if (n || !a) return;
                            s._bindVideoEvent(e, function(e) {
                                e.currentTime = 0, s._triggerVideoPlay(e), n = !0, window.removeEventListener("scroll", o), window.removeEventListener("resize", o)
                            })
                        }
                    }
                    var i = !1,
                        n = !1,
                        s = this,
                        r = s.params.replayWhenRevisible,
                        o = s._throttle(a, 50);
                    window.addEventListener("scroll", o), window.addEventListener("resize", o), a()
                }
            }, {
                key: "_initReplay",
                value: function(e, t) {
                    var a = this,
                        i = a.video_containers[t],
                        n = i.querySelector(".".concat(a.params.replayClassName));
                    e.addEventListener("ended", function() {
                        n.style.display = "block", e.pause()
                    }), n.addEventListener("click", function() {
                        a._bindVideoEvent(e, function(e) {
                            e.currentTime = 0, a._triggerVideoPlay(e)
                        }), n.style.display = "none"
                    })
                }
            }, {
                key: "_initDowngrade",
                value: function(e) {
                    var t = this.params.downgradeHtml;
                    if (t) {
                        var a = e.parentNode,
                            i = document.createElement("div"),
                            n = e.dataset;
                        Object.keys(n).forEach(function(e) {
                            if (e.match(/downgrade/i)) {
                                var a = e;
                                a = a.replace("downgrade", "");
                                var i = n[e];
                                t = t.replace("#".concat(a.toLowerCase(), "#"), i)
                            }
                        }), i.innerHTML = t;
                        var s = i.childNodes[0];
                        a.replaceChild(s, e)
                    }
                }
            }, {
                key: "_bindEndReset",
                value: function(e) {
                    e.addEventListener("ended", function() {
                        e.currentTime = 0
                    })
                }
            }, {
                key: "_videoWithControl",
                value: function(e) {
                    e.removeAttribute("autoplay"), e.setAttribute("playsinline", !0), e.setAttribute("x5-playsinline", !0), e.setAttribute("webkit-playsinline", !0), e.setAttribute("controls", !0), setTimeout(function() {
                        e.removeAttribute("controls")
                    }, 0)
                }
            }, {
                key: "_bindVideoEvent",
                value: function(e, t) {
                    function a() {
                        t(e), e.removeEventListener("canplay", a)
                    }
                    var i = !!window.MSInputMethodContext && !!document.documentMode;
                    i ? (e.load && e.load(), e.addEventListener("canplay", a)) : t(e)
                }
            }, {
                key: "_triggerVideoPlay",
                value: function(e) {
                    var t = window.navigator.userAgent,
                        a = !!t.match(/MicroMessenger/gi);
                    if (a && WeixinJSBridge) WeixinJSBridge.invoke("getNetworkType", {}, function() {
                        setTimeout(function() {
                            var t = e.play();
                            t && t.then && "function" == typeof t.then && t.then(function() {}, function() {})
                        }, 0)
                    }, !1);
                    else {
                        var i = e.play();
                        i && i.then && "function" == typeof i.then && i.then(function() {}, function() {})
                    }
                }
            }, {
                key: "_throttle",
                value: function(e, t) {
                    var a = this,
                        i = arguments,
                        n = !1;
                    return function() {
                        var s = i,
                            r = a;
                        if (!n) return e.apply(r, s), n = !0, setTimeout(function() {
                            return n = !1
                        }, t)
                    }
                }
            }, {
                key: "_checkVisible",
                value: function(e, t) {
                    for (var a = t || 0, i = window.scrollY || window.pageYOffset, n = i + window.innerHeight, s = e.offsetTop - a, r = e.offsetHeight + a; e.offsetParent;) e = e.offsetParent, s += e.offsetTop;
                    return r += s, i <= r && r <= n || n >= s && s >= i || s <= i && r >= n
                }
            }, {
                key: "_showWholeElm",
                value: function(e) {
                    for (var t = window.scrollY || window.pageYOffset, a = t + window.innerHeight, i = e.offsetTop, n = e.offsetHeight; e.offsetParent;) e = e.offsetParent, i += e.offsetTop;
                    return n += i, i >= t && a >= n || i <= t && a <= n
                }
            }]), e
        }();
    return s
}();
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }
}();
var Countdown = function(e) {
    return this.launchTimestamp = 0, this.currentTimestamp = 0, this.CountDownTimer = null, this.timestampGap = 0, this.CountDownData = {}, this.paused = !1, this.settings = {
        reload: !1,
        showDate: !0,
        timeZoneOffset: null,
        launchTime: "",
        remote: {
            url: "locale"
        },
        showWithinOneDay: !1,
        containerClass: ".countdown-thumb",
        daysClass: ".countdown-days",
        hoursClass: ".countdown-hours",
        minsClass: ".countdown-mins",
        secsClass: ".countdown-sec",
        timeTplClass: ".time-tpl",
        onFinish: function() {},
        onReady: function() {},
        beyondOneDay: function() {},
        alreadyEnd: function() {}
    }, this.init = function(e) {
        var t = this;
        settings = $.extend(t.settings, e), this.$container = $(settings.containerClass), this.showType = settings.showType || this.$container.data("show") || "block", "block" === this.showType ? (this.$days = this.$container.find(settings.daysClass), this.$hours = this.$container.find(settings.hoursClass), this.$mins = this.$container.find(settings.minsClass), this.$secs = this.$container.find(settings.secsClass)) : "inline" === this.showType && (this.$tpl = this.$container.find(settings.timeTplClass));
        var a = settings.launchTime || this.$container.data("countdown-launch-time");
        this.launchTime = a;
        var i = new Date(a);
        settings.timeZoneOffset && i.setHours(i.getHours() + settings.timeZoneOffset), this.launchTimestamp = i.getTime();
        var n = settings.reload || this.$container.data("countdown-reload");
        return n && (t.reload = !0), clearTimeout(t.CountDownTimer), t.currentTime(function(e) {
            if (e) {
                t.currentTimestamp = e, t.remoteTimestamp = e;
                var a = new Date,
                    i = t.getTimeGap(t.remoteTimestamp, t.launchTimestamp);
                t.deviceTimestamp = a.getTime(), t.timestampGap = t.remoteTimestamp - t.deviceTimestamp, t.remoteTimestamp <= t.launchTimestamp ? !t.settings.showDate && i.days > 0 ? (t.settings.beyondOneDay.call(t), t.settings.showWithinOneDay && t.withinOneDayRun.call(t)) : requestAnimFrame(function() {
                    t.run.call(t), t.settings.onReady.call(t)
                }) : t.settings.alreadyEnd.call(t)
            }
        }), t
    }, this.run = function() {
        var e, t = this,
            a = new Date,
            i = a.getTime(),
            n = i + t.timestampGap,
            s = t.launchTimestamp;
        if (s - n >= 0 && !this.paused) {
            if (e = this.getTimeGap(n, s), e.sec !== t.CountDownData.sec || e.mins !== t.CountDownData.mins) {
                if ("inline" === this.showType && this.$tpl.length > 0) {
                    var r = this.$tpl.data("time-tpl") || "";
                    e.days > 0 && t.settings.showDate && (r = this.$tpl.data("date-tpl") + " : " + r), r = r.replace("{days}", e.days).replace("{hours}", this.numToStr(e.hours)).replace("{mins}", this.numToStr(e.mins)).replace("{secs}", this.numToStr(e.sec)), 1 == e.days && (r = r.replace("DAYS", "DAY")), this.$tpl.html(r)
                } else "block" === this.showType && (t.settings.showDate && t.$days.text(this.numToStr(e.days)), t.$hours.text(this.numToStr(e.hours)), t.$mins.text(this.numToStr(e.mins)), t.$secs.text(this.numToStr(e.sec)));
                t.CountDownData = e
            }
            requestAnimFrame(t.run.bind(t))
        } else t.reload && window.location.reload(), t.settings.onFinish.call(t)
    }, this.withinOneDayRun = function() {
        var e, t = this,
            a = new Date,
            i = a.getTime(),
            n = i + t.timestampGap,
            s = t.launchTimestamp;
        s - n >= 0 && !this.paused && (e = this.getTimeGap(n, s), 0 === e.days ? (t.run.call(t), t.settings.onReady.call(t)) : requestAnimFrame(t.withinOneDayRun.bind(t)))
    }, this.pause = function() {
        this.paused = !0
    }, this.restore = function() {
        this.paused = !1, requestAnimFrame(this.run.bind(this))
    }, this.numToStr = function(e) {
        return (e < 10 ? "0" : "") + e
    }, this.getTimeGap = function(e, t) {
        var a = (t - e) / 1e3,
            i = {
                days: Math.floor(a / 60 / 60 / 24),
                hours: Math.floor(a / 60 / 60) % 24,
                mins: Math.floor(a / 60) % 60,
                sec: Math.floor(a) % 60
            };
        return i.days = i.days > 0 ? i.days : 0, i.hours = i.hours > 0 ? i.hours : 0, i.mins = i.mins > 0 ? i.mins : 0, i.sec = i.sec > 0 ? i.sec : 0, i
    }, this.currentTime = function(e) {
        var t = this.settings.remote;
        if (!t.url || "locale" === t.url) {
            var a = new Date;
            return console.log("Computer Time (locale):", a), e(a.getTime())
        }
        var i = (new Date).getTime();
        $.ajax({
            url: t.url + "&timestamp=" + i,
            type: "get"
        }).done(function(t, a, i) {
            var n = i.getResponseHeader("Date");
            console.log("Server Time:", n), e(new Date(n).getTime())
        }).fail(function() {
            var t = new Date;
            console.log("Computer Time (locale):", t), e(t.getTime())
        })
    }, this.updataLaunchTime = function(e) {
        var t = new Date(e).getTime();
        this.launchTimestamp !== t && (this.launchTimestamp = t)
    }, this.init(e)
};
$(function() {
    function e(e, t) {
        function a() {
            t(e), i.off("canplay", a)
        }
        var i = $(e);
        l ? (e.load && e.load(), i.on("canplay", a)) : t(e)
    }

    function t(e, t) {
        t = t || function() {};
        var a = e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2;
        if (!a) {
            var i = e.play();
            i && i.then && "function" == typeof i.then ? i.then(function() {
                t()
            }, function() {}) : t()
        }
    }

    function a(e, t) {
        var a = t || 0,
            i = o.scrollTop(),
            n = o.scrollTop() + o.height(),
            s = e.offset().top - a,
            r = s + e.height() + a;
        return i <= r && r <= n || n >= s && s >= i || s <= i && r >= n
    }

    function i() {
        var e = window.navigator.userAgent.toLowerCase();
        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
    }

    function n(e, t) {
        var a;
        return function() {
            var i = arguments,
                n = this;
            if (!a) return e.apply(n, i), a = !0, setTimeout(function() {
                return a = !1
            }, t)
        }
    }

    function s() {
        var e, t = $(window).width();
        t < 1230 ? (e = 591, $(".products-banner-item").css("width", e + "px"), $(".active-banner-item").css("width", e + "px")) : (e = t / 2 - 24, $(".products-banner-item").css("width", e + "px"), $(".active-banner-item").css("width", e + "px"))
    }

    function r() {
        function e(e, r) {
            var o = $(".swiper-slide-countdown .banner-learn-more").find("." + r),
                l = $("." + e).data("countdown-launch-time"),
                d = new Date(l),
                c = d.getTime(),
                u = new Date,
                p = u.getTime(),
                h = (c - p) / 1e3,
                f = Math.floor(h / 60 / 60 / 24);
            f > 0 || 0 === f ? o.hide() : o.show();
            new Countdown({
                showDate: !1,
                showWithinOneDay: !0,
                remote: {
                    url: DUI.API._helper.getApi("currentTime") + "?lang=en"
                },
                containerClass: "." + e,
                alreadyEnd: function() {
                    t.fadeIn(), a.fadeIn(), i.fadeIn(), console.log("alreadyEnd")
                },
                onFinish: function() {
                    t.fadeIn(), a.fadeIn(), i.fadeIn(), o.fadeIn(), console.log("onFinish"), setTimeout(function() {
                        s.fadeOut(1e3), n.css("margin-top", "0px")
                    }, 500)
                },
                onReady: function() {
                    t.fadeIn(), a.fadeIn(), i.fadeIn(), o.hide(), console.log("onReady"), n.css("margin-top", "8px"), setTimeout(function() {
                        s.fadeIn(1e3)
                    }, 500)
                }
            })
        }
        var t = $(".swiper-slide-countdown .banner-logo"),
            a = $(".swiper-slide-countdown .banner-title"),
            i = $(".swiper-slide-countdown .eyebrow"),
            n = $(".swiper-slide-countdown .banner-time"),
            s = $(".swiper-slide-countdown .countdown-thumb");
        e("countdown-thumb-sub", "withCountdown-sub"), e("countdown-thumb", "withCountdown")
    }
    var o = $(window),
        l = !!window.MSInputMethodContext && !!document.documentMode;
    window.innerWidth;
    s(), o.on("resize", s), DUI.DPS_CMS || (DUI.DPS_CMS = new DPS({
        cdn: "production" === DUI.Config.env ? "www1.djicdn.com" : "vg-ec-www-dbeta.s3.amazonaws.com",
        path: "cms/uploads",
        mainClassName: "dps-cms",
        lazyLoad: !0,
        lazyLoadThreshold: "800",
        combo: [{
            name: "default_"
        }, {
            name: "default_webp"
        }, {
            name: "default_1x"
        }, {
            name: "default_1x_webp"
        }, {
            name: "origin"
        }]
    }));
    var d = {
            $list: null,
            $listItems: null,
            listLength: 0,
            hasInitial: !1,
            fitPattern: !1,
            init: function() {
                this.$list = $(".homepage-banner .swiper-scroller-list");
                var e = this.$list.find(".swiper-scroller-item");
                this.listLength = e.length;
                var t = this;
                return !(this.listLength < 3) && (3 === this.listLength && (this.fitPattern = !0), this.$list.prepend(e.eq(this.listLength - 1)), this.fitPattern ? (this.$list.prepend(e.eq(this.listLength - 2).clone()), this.$list.append(e.eq(this.listLength - 1).clone()), this.$list.prepend(e.eq(this.listLength - 3).clone())) : this.$list.prepend(e.eq(this.listLength - 2).clone()), this.$list.removeClass("hidden"), t.bind(), t.hasInitial = !0, void DUI.helper.checkInView({
                    elm: $(".homepage-skypixel-module"),
                    offset: 900,
                    callback: function(e) {
                        var a = e.inView;
                        a && t.skypixel()
                    }
                }))
            },
            bind: function() {
                var e = this;
                $(".slider").eq(0).addClass("active"), this.$list.delegate(".swiper-scroller-item a", "click", function() {
                    var t = $(this).parent("li").index();
                    if (1 === t ? (e.scrollDown(), "function" == typeof ga && ga("send", "event", "pc-homepage", "click", "widget-up")) : 3 === t && (e.scrollUp(), "function" == typeof ga && ga("send", "event", "pc-homepage", "click", "widget-down")), 1 === t || 3 === t) {
                        var a = $(this).parent("li").data("index");
                        $(".slider").removeClass("active"), $(".slider").eq(a - 1).addClass("active");
                        var i = e.$list.find(".swiper-scroller-item").eq(2).data("index");
                        v.slideTo(i)
                    }
                })
            },
            scrollDown: function() {
                var e = this.$list.find(".swiper-scroller-item"),
                    t = this.fitPattern ? e.length - 3 : e.length - 2;
                this.fitPattern && (t -= 1);
                var a = e.eq(t).clone();
                this.$list.prepend(a), e.last().remove()
            },
            scrollUp: function() {
                var e = this.$list.find(".swiper-scroller-item"),
                    t = this.fitPattern ? 3 : 1,
                    a = e.eq(t).clone();
                this.$list.append(a), e.first().remove()
            },
            scrollTo: function(e) {
                if (!this.hasInitial) return !1;
                e > this.listLength ? e %= this.listLength : 0 === e && (e = this.listLength);
                var t = this.$list.find(".swiper-scroller-item").eq(2).data("index");
                if (t === e) return !1;
                var a = t + 1,
                    i = t - 1;
                1 === t ? i = this.listLength : t === this.listLength && (a = 1), e === i ? this.scrollDown() : e === a && this.scrollUp()
            },
            bindCookieTip: function() {
                var e = $("#cookie-tip"),
                    t = (DUI.Config.region || DUI.Localize.getCountry() || "unknow").toLowerCase(),
                    a = DUI.Config.continentCountries,
                    i = DUI.Cookie.get("read_cookie_tips"),
                    n = DUI.Config.domain || ".dji.com";
                e.length && a.eu[t] && !i && ($("body").addClass("display-tips"), $("#cookie-tip-click").click(function() {
                    $("body").removeClass("display-tips"), DUI.Cookie.set("read_cookie_tips", "yes", {
                        domain: n,
                        path: "/",
                        expires: 180
                    })
                }))
            },
            skypixel: function() {
                function i() {
                    var i = !1;
                    if ($("#slide-swiper").find("video").length > 0) {
                        var n = function s() {
                            var n = $("#slide-swiper .swiper-slide-active ").find("video");
                            i || (requestAnimationFrame(s), a($(".homepage-skypixel-module"), 1e3) && (!n[0] || isNaN(n[0].duration) || i || (e(n, function(e) {
                                t(e[0])
                            }), i = !0)))
                        };
                        n()
                    }
                }

                function s() {
                    for (var e = $("#slide-swiper").find("video"), t = 0; t < e.length; t++) !e[t] || isNaN(e[t].duration) || e[t].paused || $(e[t]).parent("swiper-slide").hasClass("swiper-slide-active") || (e[t].currentTime = 0, e[t].pause())
                }

                function r() {
                    var e = !1,
                        t = $("#slide-swiper .swiper-slide-active"),
                        i = $(t).find("video");
                    if (i && i.length > 0) {
                        var n = function o() {
                                var t = requestAnimationFrame(o);
                                a($(".homepage-skypixel-module"), 1e3) && (null === s[0].getAttribute("src") && s[0].setAttribute("src", r), 0 === i[0].readyState && (i[0].load(), e = !0), e && t && window.cancelAnimationFrame(t))
                            },
                            s = i[0].querySelectorAll("source"),
                            r = s[0].dataset.layzrSrc;
                        n()
                    }
                }
                var o = $("#slide-contents"),
                    l = $(".homepage-skypixel-module .swiper-pagination-bullet");
                if ($("#slide-contents").find(".slide-content").length > 1) {
                    var d = function() {
                            return a($(".homepage-skypixel-module")) ? void l.removeClass("swiper-pagination-bullet-active").eq(p.realIndex).addClass("swiper-pagination-bullet-active") : void l.removeClass("swiper-pagination-bullet-active")
                        },
                        c = $(".homepage-skypixel-module .swiper-container .swiper-prev-area "),
                        u = $(".homepage-skypixel-module .swiper-container .swiper-next-area "),
                        p = new Swiper(".homepage-skypixel-module .swiper-container", {
                            loop: !0,
                            initialSlide: 0,
                            centeredSlides: !0,
                            observer: !1,
                            observeParents: !0,
                            navigation: {
                                nextEl: ".homepage-skypixel-module .swiper-btn-next",
                                prevEl: ".homepage-skypixel-module .swiper-btn-prev"
                            },
                            slidesPerView: "auto",
                            spaceBetween: 16,
                            speed: 800,
                            on: {
                                init: function() {
                                    DUI.Layzr(), $("#slide-contents").find(".slide-content").eq(0).addClass("active"), l.removeClass("swiper-pagination-bullet-active")
                                },
                                slideChangeTransitionStart: function() {
                                    r()
                                },
                                slideChangeTransitionEnd: function() {
                                    DUI.Layzr(), s();
                                    var e = $("#slide-swiper .swiper-slide-active ").find("video");
                                    e.length > 0 && i()
                                },
                                slideChange: function() {
                                    DUI.Layzr(), DUI.DPS.checkImageVisibilityAndLoad();
                                    var e = o.find(".slide-content");
                                    e.removeClass("active").removeClass("prev").removeClass("next");
                                    var t = this.realIndex,
                                        a = 0 === this.realIndex ? l.length - 1 : this.realIndex - 1,
                                        i = this.realIndex === l.length - 1 ? 0 : this.realIndex + 1;
                                    $(e.eq(t)).addClass("active"), $(e.eq(a)).addClass("prev"), $(e.eq(i)).addClass("next"), l.removeClass("swiper-pagination-bullet-active").eq(this.realIndex).addClass("swiper-pagination-bullet-active")
                                }
                            }
                        });
                    c.click(function() {
                        p.slidePrev()
                    }), u.click(function() {
                        p.slideNext()
                    });
                    var h = n(d, 50);
                    $(window).on("scroll", h), $(window).on("resize", h), d(), $(l).on("click", function() {
                        var e = $(this).index();
                        p.slideTo(e + l.length)
                    })
                } else 1 === $("#slide-contents").find(".slide-content").length && $("#slide-contents").find(".slide-content").addClass("active")
            }
        },
        c = {
            delay: 6e3,
            stopOnLastSlide: !1,
            disableOnInteraction: !1
        },
        u = $(".homepage-big-banner .swiper-slide-countdown");
    carousel || (c = !1, $(".homepage-big-banner .slider").addClass("slider-cancle-progress"));
    var p = $(".homepage-big-banner .swiper-slide").length,
        h = {
            triggerAutoPlay: function() {
                var a = !1;
                if ($(".homepage-big-banner .swiper-slide").find("video").length > 0) {
                    var i = function n() {
                        var i = $(".homepage-big-banner .swiper-wrapper .swiper-slide-active").find("video");
                        a || (requestAnimationFrame(n), !i[0] || isNaN(i[0].duration) || a || (e(i, function(e) {
                            t(e[0])
                        }), a = !0))
                    };
                    i()
                }
            },
            pauseVideo: function() {
                for (var e = $(".homepage-big-banner .swiper-wrapper .swiper-slide").find("video"), t = 0; t < e.length; t++) !e[t] || isNaN(e[t].duration) || e[t].paused || $(e[t]).parent("swiper-slide").hasClass("swiper-slide-active") || (e[t].currentTime = 0, e[t].pause())
            },
            lazyLoadVideo: function() {
                var e = !1,
                    t = $(".homepage-big-banner .swiper-wrapper .swiper-slide-active"),
                    a = $(t).find("video");
                if (a && a.length > 0) {
                    var i = a[0].querySelectorAll("source"),
                        n = i[0].dataset.layzrSrc,
                        s = function r() {
                            var t = requestAnimationFrame(r);
                            null === i[0].getAttribute("src") && i[0].setAttribute("src", n), 0 === a[0].readyState && (a[0].load(), e = !0), e && t && window.cancelAnimationFrame(t)
                        };
                    s()
                }
            }
        },
        f = !1;
    window.ABTest || (window.ABTest = {}), window.ABTest.changeBigBannerPlayVideo = function() {
        if (!f || carousel) {
            f = !0, h.lazyLoadVideo(), h.pauseVideo();
            var e = $(".homepage-big-banner .swiper-wrapper .swiper-slide-active").find("video");
            e.length > 0 && h.triggerAutoPlay()
        }
    };
    var v = new Swiper(".homepage-big-banner .swiper-container", {
        loop: !0,
        autoplay: c,
        keyboardControl: !0,
        effect: "fade",
        speed: 600,
        simulateTouch: !1,
        observer: !1,
        observeParents: !0,
        navigation: {
            nextEl: ".banner-swiper-container .swiper-btn-prev",
            prevEl: ".banner-swiper-container .swiper-btn-next"
        },
        lazy: {
            loadPrevNext: !1,
            loadPrevNextAmount: 2
        },
        on: {
            init: function() {
                this.lazy.loadInSlide(p), this.lazy.loadInSlide(2), DUI.Layzr()
            },
            slideChangeTransitionStart: function() {
                this.lazy.loadInSlide(this.activeIndex), f && !carousel && h.lazyLoadVideo()
            },
            slideChangeTransitionEnd: function() {
                if (DUI.DPS.checkImageVisibilityAndLoad(), $(".homepage-big-banner .slider").removeClass("active"), $(".homepage-big-banner .slider").eq(this.realIndex).addClass("active"), d.scrollTo(this.activeIndex), f && !carousel) {
                    h.pauseVideo();
                    var e = $(".homepage-big-banner .swiper-wrapper .swiper-slide-active").find("video");
                    e.length > 0 && h.triggerAutoPlay()
                }
            }
        }
    });
    d.init(), window.onload = function() {
        v.params.lazy.loadPrevNext = !0, v.params.lazy.loadPrevNextAmount = p, v.lazy.load()
    };
    var m = u.find("video");
    m.length > 0 && window.addEventListener("pageshow", function() {
        m[0].paused && !isNaN(m[0].duration) && m[0].play()
    }), o.on("resize", function() {
        v.update()
    });
    var g = !1;
    $(window).on("visibilitychange", function() {
        document.hidden ? v.autoplay && v.autoplay.running && (g = !0, v.autoplay.stop()) : g && (g = !1, v.autoplay.start())
    });
    var w = i();
    if (w) {
        var y = $(".homepage-big-banner");
        $(window).on("scroll", n(function() {
            var e = a(y);
            e ? g && (g = !1, v.autoplay.start()) : v.autoplay && v.autoplay.running && (g = !0, v.autoplay.stop())
        }, 500))
    }
    $(".swiper-slide-countdown").length && r();
    var b = {
        init: function() {
            this.stickyNavbar()
        },
        stickyNavbar: function() {
            function e() {
                var e = $(document).scrollTop(),
                    a = parseInt($("body").css("margin-top") || 0);
                e > a ? t.addClass("sticky-white-nav") : t.removeClass("sticky-white-nav")
            }
            window.pcHomepageNavSticky = !0;
            var t = $("#site-header");
            $(document);
            t.addClass("sticky-nav");
            $("body");
            e(), $(window).scroll(e)
        }
    };
    b.init()
});