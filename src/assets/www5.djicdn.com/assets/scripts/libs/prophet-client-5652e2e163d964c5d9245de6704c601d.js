! function() {
    function e(e, n) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
            if (Array.isArray(e) || (r = t(e)) || n && e && "number" == typeof e.length) {
                r && (e = r);
                var i = 0,
                    o = function() {};
                return {
                    s: o,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, c = !0,
            h = !1;
        return {
            s: function() {
                r = r.call(e)
            },
            n: function() {
                var e = r.next();
                return c = e.done, e
            },
            e: function(e) {
                h = !0, a = e
            },
            f: function() {
                try {
                    c || null == r["return"] || r["return"]()
                } finally {
                    if (h) throw a
                }
            }
        }
    }

    function t(e, t) {
        if (e) {
            if ("string" == typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
        }
    }

    function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }
    var a = function() {
        "use strict";

        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return r(this, t), t.instance ? (t.instance.debug("already consturcted."), t.instance) : (t.instance = this, this.init(e), this)
        }
        return o(t, [{
            key: "init",
            value: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = {
                        maxPrefetchOnLoadLimit: 1,
                        maxPrefetchOnVisibleLimit: 5,
                        hoverDelay: 300,
                        maxHoverPrefetchLimit: 3,
                        maxTouchStartOrMouseDownPrefetchLimit: 3,
                        prefetchDocumentWhitelistReg: /REGEXP_MATCH_WHITE_LIST_IS_DISABLED/,
                        maxPrefetchMainDocumentCount: 3,
                        prefetchMainDocumentOnVisible: !1,
                        prefetchMainDocumentOnHover: !1,
                        prefetchMainDocumentOnTouchStartOrMouseDown: !1,
                        APIURL: "http://localhost:1338/api/prophet",
                        debug: !1,
                        enable: !0,
                        minLoadEnableThreshold: 800,
                        maxLoadEnableThreshold: 5e3
                    },
                    r = Object.assign({}, n, t);
                "string" == typeof r.prefetchDocumentWhitelistReg && (r.prefetchDocumentWhitelistReg = new RegExp(r.prefetchDocumentWhitelistReg)), this.config = {
                    maxPrefetchOnLoadLimit: r.maxPrefetchOnLoadLimit,
                    maxPrefetchOnVisibleLimit: r.maxPrefetchOnVisibleLimit,
                    hoverDelay: r.hoverDelay,
                    maxHoverPrefetchLimit: r.maxHoverPrefetchLimit,
                    maxTouchStartOrMouseDownPrefetchLimit: r.maxTouchStartOrMouseDownPrefetchLimit,
                    prefetchDocumentWhitelistReg: r.prefetchDocumentWhitelistReg,
                    maxPrefetchMainDocumentCount: r.maxPrefetchMainDocumentCount,
                    prefetchMainDocumentOnVisible: r.prefetchMainDocumentOnVisible,
                    prefetchMainDocumentOnHover: r.prefetchMainDocumentOnHover,
                    prefetchMainDocumentOnTouchStartOrMouseDown: r.prefetchMainDocumentOnTouchStartOrMouseDown,
                    APIURL: r.APIURL,
                    debug: r.debug,
                    enable: r.enable,
                    minLoadEnableThreshold: r.minLoadEnableThreshold,
                    maxLoadEnableThreshold: r.maxLoadEnableThreshold
                }, this.predictionData = [], this.linkVisibleObserver = [], this.prefetchedResource = {}, this.prefetchOnVisibleCount = 0, this.prefetchOnHoverCount = 0, this.hoverActivatedDOM = new Set, this.prefetchOnTouchStartOrMouseDownCount = 0, this.touchActivatedDOM = new Set, this.prefetchMainDocumentCount = 0, this.prefetchedMainDocument = {}, this.shoulEnablePrefetch = this.determineShouldEnablePrefetch(), this.shoulEnablePrefetch && (this.addForEachPolyfill(), this.detectPrefetchCompatibility(), this.detectAlreadyPreloadedResources(), this.predictionPromise = this.fetchPredictionAndConfig(this.config.APIURL), this.predictionPromise.then(function() {
                    e.debug("Prediction map get, resolved."), e.prefetchTopPageOnLoad(), e.observeAllLinksVisibility(), e.initMouseOverEventHandler(), e.initMouseDownOrTouchStartEventHandler(), e.initHitRateTracker()
                }, function(t) {
                    e.debug("Rejected, reason:", t)
                }))
            }
        }, {
            key: "checkIsFireFox",
            value: function() {
                if ("undefined" != typeof this.checkIsFireFox.cache) return this.checkIsFireFox.cache;
                var e = window.navigator.userAgent;
                return this.checkIsFireFox.cache = /firefox/i.test(e), this.checkIsFireFox.cache
            }
        }, {
            key: "checkIsSafari",
            value: function() {
                if ("undefined" != typeof this.checkIsSafari.cache) return this.checkIsSafari.cache;
                var e = window.navigator.userAgent;
                return this.checkIsSafari.cache = /Safari/i.test(e) && !/Chrome/i.test(e), this.checkIsSafari.cache
            }
        }, {
            key: "checkIsIE",
            value: function() {
                if ("undefined" != typeof this.checkIsIE.cache) return this.checkIsIE.cache;
                var e = !1,
                    t = window.navigator.userAgent,
                    n = t.indexOf("MSIE "),
                    r = t.indexOf("Trident/"),
                    i = t.indexOf("Edge/");
                return (n > 0 || r > 0 || i > 0) && (e = !0), this.checkIsIE.cache = e, this.checkIsIE.cache
            }
        }, {
            key: "determineShouldEnablePrefetch",
            value: function() {
                var e = !0;
                this.config.enable === !1 && (e = !1);
                var t = window.location.search;
                if (/prophet-client=disable/.test("".concat(t)) && (e = !1), window.navigator.connection && window.navigator.connection.saveData && (e = !1), this.config.minLoadEnableThreshold >= 0 && this.config.maxLoadEnableThreshold >= 0) {
                    var n = 0;
                    window.performance && (window.performance.getEntriesByType("navigation")[0] ? n = Math.round(window.performance.getEntriesByType("navigation")[0].loadEventStart) : window.performance.timing && (n = Math.round(window.performance.timing.loadEventStart - window.performance.timing.navigationStart))), this.debug("loadEventStartTime>>>", n), (this.config.minLoadEnableThreshold > n || this.config.maxLoadEnableThreshold < n) && (e = !1)
                }
                return this.debug("shouldEnableProphetClient>>>", e), e
            }
        }, {
            key: "debug",
            value: function() {
                var e;
                if (this.config.debug) {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    (e = console).log.apply(e, ["[PROPHET-CLIENT]"].concat(n))
                }
            }
        }, {
            key: "addForEachPolyfill",
            value: function() {
                window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach)
            }
        }, {
            key: "detectAlreadyPreloadedResources",
            value: function() {
                var e = this,
                    t = document.querySelectorAll("link[rel=preload");
                t.forEach(function(t) {
                    var n = t.getAttribute("href");
                    e.prefetchedResource[n] = !0
                });
                var n = /^PROPHET_CLINET_PREFETCH_/;
                Object.keys(sessionStorage).forEach(function(t) {
                    if (n.test(t)) {
                        var r = t.replace(n, "");
                        e.prefetchedResource[r] = !0
                    }
                }), this.debug("detectAlreadyPreloadedResources this.prefetchedResource is", this.prefetchedResource)
            }
        }, {
            key: "detectPrefetchCompatibility",
            value: function() {
                this.relPrefetch = this.hasRel("preload") && !this.hasRel("prefetch") ? "preload" : "prefetch"
            }
        }, {
            key: "hasRel",
            value: function(e, t) {
                try {
                    return t = document.createElement("link"), t.relList.supports(e)
                } catch (n) {}
            }
        }, {
            key: "prefetchTopPageOnLoad",
            value: function() {
                for (var e = 0; e < this.config.maxPrefetchOnLoadLimit; e++) {
                    var t = this.getPredictionFromIndex(e);
                    if (t) {
                        var n = t.pagePath,
                            r = !1,
                            i = this.prefetchAPage(n, r);
                        this.debug("STAGE1 Prefetch Status: ".concat(i, ", pagePath:").concat(n, ", index:").concat(e))
                    } else this.debug("STAGE1 Prefetch nextPage not found for index:".concat(e, ", not prefetching."))
                }
            }
        }, {
            key: "fetchPredictionAndConfig",
            value: function(e) {
                var t = this;
                return new Promise(function(n, r) {
                    try {
                        var i = new XMLHttpRequest,
                            o = window.location,
                            a = o.hostname,
                            c = o.pathname;
                        i.open("get", "".concat(e, "?hostname=").concat(a, "&pathname=").concat(c)), i.withCredentials = !0, i.onreadystatechange = function() {
                            try {
                                if (4 === i.readyState) {
                                    var e = i.status;
                                    if (0 === e || 200 === e) {
                                        var o = JSON.parse(i.responseText);
                                        t.predictionData = o, o && o.config && Object.assign(t.config, o.config), t.debug("this.config >>> ", t.config), t.debug("this.predictionData >>> ", t.predictionData), n(o)
                                    } else r(i)
                                }
                            } catch (a) {
                                r(a)
                            }
                        }, i.send()
                    } catch (h) {
                        r(h)
                    }
                })
            }
        }, {
            key: "observeAllLinksVisibility",
            value: function() {
                var t = this;
                if ("function" == typeof IntersectionObserver && "function" == typeof IntersectionObserverEntry && 0 !== this.predictionData.nextPages.length) {
                    var n = document.querySelectorAll("a[href]");
                    n.forEach(function(e) {
                        t.observeLinks(e)
                    }), this.DOMMutationObserver = new MutationObserver(function(n) {
                        var r, i = e(n);
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                var o = r.value;
                                "childList" === o.type && o.addedNodes.length > 0 && o.addedNodes.forEach(function(e) {
                                    "function" == typeof e.querySelectorAll && e.querySelectorAll("a[href]").forEach(function(e) {
                                        t.observeLinks(e)
                                    })
                                })
                            }
                        } catch (a) {
                            i.e(a)
                        } finally {
                            i.f()
                        }
                    }), this.DOMMutationObserver.observe(document.body, {
                        attributes: !1,
                        childList: !0,
                        subtree: !0
                    })
                }
            }
        }, {
            key: "observeLinks",
            value: function(e) {
                var t = this,
                    n = new IntersectionObserver(function(e) {
                        e.forEach(function(e) {
                            if (t.prefetchOnVisibleCount >= t.config.maxPrefetchOnVisibleLimit && t.linkVisibleObserver.length > 0 && t.DOMMutationObserver && (t.debug("STAGE2 this.config.maxPrefetchOnVisibleLimit reached, disconnecting all the observers."), t.linkVisibleObserver.forEach(function(e) {
                                    e.disconnect()
                                }), t.linkVisibleObserver = [], t.DOMMutationObserver.disconnect(), delete t.DOMMutationObserver), e.isIntersecting) {
                                n.disconnect();
                                for (var r = e.target.getAttribute("href"), i = t.hrefKeyGenerator(r), o = 0; o < t.config.maxPrefetchOnVisibleLimit && o < t.predictionData.nextPages.length && t.prefetchOnVisibleCount < t.config.maxPrefetchOnVisibleLimit; o++)
                                    if (t.predictionData.nextPages[o].pagePath === i) {
                                        var a = !1;
                                        t.config.prefetchMainDocumentOnVisible && t.prefetchMainDocumentCount < t.config.maxPrefetchMainDocumentCount && (a = !0);
                                        var c = t.doPrefetch(r, e.target, a);
                                        t.debug("STAGE2 entry.isIntersecting. shouldPrefetchMainDocument".concat(a, ", result: ").concat(c, ", href:").concat(r, ", hrefKey:").concat(i, ", index:").concat(o, ", entry.target:"), e.target), c && (t.prefetchOnVisibleCount += 1, a && (t.prefetchMainDocumentCount += 1))
                                    }
                            }
                        })
                    });
                n.observe(e), this.linkVisibleObserver.push(n)
            }
        }, {
            key: "initMouseOverEventHandler",
            value: function() {
                var e = this,
                    t = function n(t) {
                        e.prefetchOnHoverCount >= e.config.maxHoverPrefetchLimit ? (e.debug("STAGE3 this.config.maxHoverPrefetchLimit reached, removing event handler."), document.removeEventListener("mouseover", n)) : e.mouseOverElementHandler(t.target)
                    };
                document.addEventListener("mouseover", t)
            }
        }, {
            key: "mouseOverElementHandler",
            value: function(e) {
                var t = this;
                if (e && this.predictionData && this.isElement(e)) {
                    if (this.hoverActivatedDOM.has(e)) return void this.debug("STAGE3 MouseOver target alerady activated, won't activate again. >>>", e);
                    var n = e.getAttribute("href");
                    if (n) {
                        var r = setTimeout(function() {
                                t.debug("STAGE3 MouseOver Trigger >>>", e);
                                var r = !1;
                                t.config.prefetchMainDocumentOnHover && t.prefetchMainDocumentCount < t.config.maxPrefetchMainDocumentCount && (r = !0);
                                var i = t.doPrefetch(n, e, r);
                                t.debug("STAGE3 MouseOver Trigger Result >>>", i), i && (t.hoverActivatedDOM.add(e), t.prefetchOnHoverCount += 1, r && (t.prefetchMainDocumentCount += 1))
                            }, this.config.hoverDelay),
                            i = function o() {
                                clearTimeout(r), e.removeEventListener("mouseout", o)
                            };
                        e.addEventListener("mouseout", i)
                    } else if (this.isElement(e.parentNode)) return this.mouseOverElementHandler(e.parentNode)
                }
            }
        }, {
            key: "initMouseDownOrTouchStartEventHandler",
            value: function() {
                var e = this,
                    t = function n(t) {
                        e.prefetchOnTouchStartOrMouseDownCount >= e.config.maxTouchStartOrMouseDownPrefetchLimit ? (e.debug("STAGE4 this.config.maxTouchStartOrMouseDownPrefetchLimit reached, removing event handler."), document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n)) : e.touchStartOrMouseDownELementHandler(t.target)
                    };
                document.addEventListener("mousedown", t), document.addEventListener("touchstart", t)
            }
        }, {
            key: "touchStartOrMouseDownELementHandler",
            value: function(e) {
                if (e && this.predictionData && this.isElement(e)) {
                    if (this.touchActivatedDOM.has(e)) return void this.debug("STAGE4 touchStartOrMouseDown target alerady activated, won't activate again. >>>", e);
                    var t = e.getAttribute("href");
                    if (t) {
                        var n = !1;
                        this.config.prefetchMainDocumentOnTouchStartOrMouseDown && this.prefetchMainDocumentCount < this.config.maxPrefetchMainDocumentCount && (n = !0), this.debug("STAGE4 touchStartOrMouseDown Trigger >>>", t, e, e, n);
                        var r = this.doPrefetch(t, e, n);
                        r && (this.touchActivatedDOM.add(e), this.prefetchOnTouchStartOrMouseDownCount += 1, n && (this.prefetchMainDocumentCount += 1)), this.debug("STAGE4 touchStartOrMouseDown Result, this.prefetchOnTouchStartOrMouseDownCount", r, this.prefetchOnTouchStartOrMouseDownCount)
                    } else if (this.isElement(e.parentNode)) return this.touchStartOrMouseDownELementHandler(e.parentNode)
                }
            }
        }, {
            key: "initHitRateTracker",
            value: function() {
                var e = this;
                if ("function" == typeof ga) {
                    var t = function n(t) {
                        var r = t.target || t;
                        if (r && e.predictionData && e.isElement(r)) {
                            var i = r.getAttribute("href");
                            if (i) {
                                var o = {
                                    hitType: "event",
                                    eventCategory: "Prophet-Client-Path-".concat(window.location.pathname),
                                    eventAction: "predict-".concat(i),
                                    eventLabel: e.prefetchedMainDocument[i] ? "success" : "fail"
                                };
                                e.debug("sending GA event >>>>", o), ga("send", o)
                            } else if (e.isElement(r.parentNode)) return n(r.parentNode)
                        }
                    };
                    document.addEventListener("click", t)
                }
            }
        }, {
            key: "doPrefetch",
            value: function(e, t, n) {
                var r = this.prefetchAPage(e, n);
                return this.debug("href, dom, prefetchMainDocument, prefetchSuccess >>>", e, t, n, r), this.config.debug && (r || this.prefetchedMainDocument[e] ? n ? t.style.background = "rgba(255,0,0,0.3)" : t.style.background = "rgba(255,255,0,0.3)" : t.style.background = "rgba(0,255,255,0.3) "), r
            }
        }, {
            key: "prefetchAPage",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this.prefetchedMainDocument[e]) return this.debug("prefetchAPage tthis.prefetchedMainDocument[href] is ".concat(this.prefetchedMainDocument[e], ", returning.(href: ").concat(e, ")")), !1;
                var r = this.hrefKeyGenerator(e),
                    i = this.getPredictionSkeleton(r),
                    o = Array.isArray(i) && i.length > 0,
                    a = this.config.prefetchDocumentWhitelistReg.test(e);
                if (/javascript\:\;/.test(r) || "" === r || window.location.pathname === r) return this.debug("prefetchAPage not prefetching because ther href is invalid. >>> ", e), !1;
                if (!o && /^(\/\/|http:\/\/|https:\/\/)/.test(e) && !a) return this.debug("prefetchAPage not prefetching because this.config.prefetchDocumentWhitelistReg not match >>> ", e), !1;
                this.debug("prefetchAPage href,hrefKey >>> ", e, r);
                var c = [],
                    h = !1,
                    s = !1;
                this.checkIsSafari() || this.checkIsFireFox() || this.checkIsIE() || !n || !o && !a || (this.debug("prefetchAPage prefetchMainDocument >>> ", r), c.push(this.prefetchNodeGenerator(e, !1, "document")), this.prefetchedMainDocument[e] = !0, h = !0), o && (this.debug("prefetchAPage nextPageSkeleton >>>", i), i.forEach(function(e) {
                    var n = e.url;
                    "image" === e.as && window.devicePixelRatio > 1 && /@1x\./.test(n) && (n = n.replace("@1x", "")), t.prefetchedResource[n] || e.cors || (c.push(t.prefetchNodeGenerator(n, e.cors, e.as)), t.prefetchedResource[n] = !0)
                }), s = !0), s || this.debug("prefetchAPage pageSkeleton not found >>> ", r);
                for (var u = function(e) {
                        var t = c.slice(e, e + 5),
                            n = document.createDocumentFragment();
                        t.forEach(function(e) {
                            n.appendChild(e)
                        });
                        var r = function() {
                            document.head.appendChild(n)
                        };
                        window.requestIdleCallback ? window.requestIdleCallback(r) : setTimeout(r, 5 * e)
                    }, f = 0; f < c.length; f += 5) u(f);
                this.syncPrefetchedResourceToStorage();
                var d = !1;
                return n ? h && (d = !0) : d = s, d
            }
        }, {
            key: "syncPrefetchedResourceToStorage",
            value: function() {
                Object.keys(this.prefetchedResource).forEach(function(e) {
                    sessionStorage.setItem("PROPHET_CLINET_PREFETCH_".concat(e), "true")
                })
            }
        }, {
            key: "getPredictionFromIndex",
            value: function(e) {
                return this.predictionData && Array.isArray(this.predictionData.nextPages) && this.predictionData.nextPages.length > 0 ? this.predictionData.nextPages[e] : null
            }
        }, {
            key: "getPredictionSkeleton",
            value: function(t) {
                if (this.predictionData && Array.isArray(this.predictionData.nextPages)) {
                    var n, r = e(this.predictionData.nextPages);
                    try {
                        for (r.s(); !(n = r.n()).done;) {
                            var i = n.value;
                            if (i.pagePath === t && Array.isArray(i.pageSkeleton)) return i.pageSkeleton
                        }
                    } catch (o) {
                        r.e(o)
                    } finally {
                        r.f()
                    }
                }
                return null
            }
        }, {
            key: "isElement",
            value: function(e) {
                return e instanceof Element || e instanceof HTMLDocument && "function" == typeof e.getAttribute
            }
        }, {
            key: "hrefKeyGenerator",
            value: function(e) {
                var t = e;
                return /\?.*$/.test(e) && (t = e.replace(/\?.*$/, "")), /\#.*$/.test(e) && (t = t.replace(/\#.*$/, "")), t = t.replace(window.location.origin, ""), t = t.replace(/\/$/, ""), "" === t && (t = "/"), t
            }
        }, {
            key: "prefetchNodeGenerator",
            value: function(e, t, n) {
                var r = document.createElement("link");
                return r.rel = this.relPrefetch, r.href = e, t && r.setAttribute("crossorgin", "anonymous"), n && (r.as = n), r
            }
        }]), t
    }();
    window.ProphetClient = a
}();