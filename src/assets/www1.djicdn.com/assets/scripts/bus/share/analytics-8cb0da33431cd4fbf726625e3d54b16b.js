var analy = {
        initial: function() {
            var e = DUI.Localize.getCountry() || "",
                t = DUI.Config.ga_id || "UA-43055594-1",
                a = DUI.Config.domain || "dji.com";
            a = a.replace(/^\./, "");
            var n = DUI.Config.env;
            this.initPerformanceObserver(), this.google(t, a), "cn" === e.toLowerCase() && "production" === n && this.ad_track()
        },
        _LCP: null,
        setPerformanceMetric: function() {
            "function" == typeof ga && null !== this._LCP && ga("set", "metric1", this._LCP)
        },
        initPerformanceObserver: function() {
            var e = this;
            try {
                var t = new PerformanceObserver(function(t) {
                    var a = t.getEntries(),
                        n = a[a.length - 1];
                    if ("largest-contentful-paint" === n.entryType) {
                        var r = n.renderTime || n.loadTime;
                        e._LCP = parseInt(r), e.setPerformanceMetric()
                    }
                });
                t.observe({
                    entryTypes: ["largest-contentful-paint"]
                })
            } catch (a) {}
        },
        handleGetLoadTtfbTime: function() {
            window.addEventListener("load", function() {
                var e = 0,
                    t = 0;
                window.performance && (window.performance.getEntriesByType("navigation")[0] ? (e = Math.round(window.performance.getEntriesByType("navigation")[0].loadEventStart), t = Math.round(window.performance.getEntriesByType("navigation")[0].responseStart - window.performance.getEntriesByType("navigation")[0].requestStart)) : window.performance.timing && (e = Math.round(window.performance.timing.loadEventStart - window.performance.timing.navigationStart), t = Math.round(window.performance.timing.responseStart - window.performance.timing.requestStart))), e && t && (ga("set", "metric2", e), ga("set", "metric3", t), ga("send", "event", window.location.pathname + window.location.search, "load", "time", {
                    nonInteraction: !0
                }))
            })
        },
        google: function(e, t) {
            ! function(e, t, a, n, r, i, o) {
                e.GoogleAnalyticsObject = r, e[r] = e[r] || function() {
                    (e[r].q = e[r].q || []).push(arguments)
                }, e[r].l = 1 * new Date, i = t.createElement(a), o = t.getElementsByTagName(a)[0], i.async = 1, i.src = n, o.parentNode.insertBefore(i, o)
            }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
            var a = DUI.Cookie.get("ga_uid") ? DUI.Cookie.get("ga_uid") : null;
            ga("create", e, t, {
                userId: a,
                siteSpeedSampleRate: 100
            }), ga("set", "anonymizeIp", !0), ga("require", "displayfeatures");
            var n = DUI.Config.region || "";
            if ("cn" == n.toLowerCase() && ga("set", "allowAdFeatures", !1), this.setPerformanceMetric(), this.handleGetLoadTtfbTime(), ga("set", "dimension2", a), ga("set", "dimension3", DUI.Cookie.get("_ga") && DUI.Cookie.get("_ga").substr(6)), ga("set", "dimension4", DUI.Localize.getCountry()), "object" == typeof _google_optimize_config) {
                var r = _google_optimize_config.expId,
                    i = _google_optimize_config.varId;
                r && i && ga("set", "exp", r + "." + i)
            }
            if (window.ABTest) {
                var o = window.ABTest.varIds,
                    c = window.ABTest.expIds;
                if (Array.isArray(c) && Array.isArray(o)) {
                    for (var g = [], s = 0; s < c.length; s++) {
                        var l = c[s],
                            d = o[s],
                            u = analyHelper.formatExpVarToNum(d);
                        l && "number" == typeof u && g.push(l + "." + u)
                    }
                    var f = g.join("!");
                    f && ga("set", "exp", f)
                }
            }
            ga("send", "pageview")
        },
        ad_track: function() {
            var e = window._mvq || [];
            window._mvq = e, e.push(["$setAccount", "m-28941-0"]), e.push(["$logConversion"]), window.addEventListener("load", function() {
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = "https:" == document.location.protocol ? "https://static-ssl.mediav.com/mvl.js" : "http://static.mediav.com/mvl.js";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            })
        },
        common_ga_data: [{
            selector: ".site-nav-menu a",
            category: "nav_",
            categorySelector: "",
            getCategory: "category",
            eventAction: "click",
            getAction: "page",
            eventLabel: ""
        }, {
            selector: "#siteHeaderNavbar .navbar-nav a",
            category: "nav_right",
            getCategory: "",
            eventAction: "click",
            getAction: "nav_right",
            eventLabel: ""
        }, {
            selector: ".site-footer a",
            category: "footer_",
            getCategory: "footer_category",
            eventAction: "click",
            getAction: "footer_page",
            eventLabel: ""
        }],
        page_ga_data: [{
            selector: ".container-fluid a",
            category: "homeBanner",
            eventAction: "click",
            eventLabel: ""
        }],
        unBubbleEvents: ["mouseenter"],
        add_common_ga: function() {
            for (var e = this.common_ga_data, t = 0, a = e.length; t < a; t++) ! function(t) {
                var a = e[t],
                    n = a.selector,
                    r = a.category,
                    i = a.eventAction,
                    o = a.getCategory,
                    c = a.getAction;
                $(n).on(i, function(e) {
                    var t = $(this),
                        a = r + analyHelper.getAction(t, o),
                        n = analyHelper.getAction(t, c);
                    $(this)[0].innerText, ga("send", "event", a, i, n)
                })
            }(t)
        },
        add_page_ga: function() {
            for (var e = this.page_ga_data, t = 0, a = e.length; t < a; t++) ! function(t) {
                var a = e[t],
                    n = a.selector,
                    r = a.category,
                    i = a.eventAction;
                $(n).on(i, function(e) {
                    var t = $(this),
                        a = analyHelper.getAction(t, "footer_page");
                    ga("send", "event", r, i, a)
                })
            }(t)
        },
        init_ga: function() {
            var e = $(".ga-data"),
                t = [],
                a = this.unBubbleEvents;
            if (0 != e.length) {
                e.each(function() {
                    var e = $(this),
                        n = e.data("ga-action") ? e.data("ga-action") : "click",
                        r = e.data("ga-category") ? e.data("ga-category") : "",
                        i = e.data("ga-label") ? e.data("ga-label") : "";
                    if (n && r && i)
                        for (var o = n.split(","), c = 0; c < o.length; c++) {
                            if (a.indexOf(o[c]) > -1) return void analyHelper.unBubble(o[c], e, r, i);
                            t.push(o[c])
                        }
                });
                var n = analyHelper.unique(t);
                analyHelper.bubbleGa(n)
            }
        }
    },
    analyHelper = {
        unBubble: function(e, t, a, n) {
            t.on(e, function() {
                var r = t.data("ga-action-name") || "",
                    i = r ? analyHelper.getActionName(r, e) : e;
                ga("send", "event", a, i, n)
            })
        },
        bd_track: function(e) {
            window._agl && window._agl.push(["track", ["success", {
                t: e
            }]])
        },
        bubbleGa: function(e) {
            if (e.length > 0)
                for (var t = 0; t < e.length; t++) analyHelper.sendGa(e[t])
        },
        sendGa: function(e) {
            var t = document.querySelector("body");
            t.addEventListener(e, function(t) {
                for (var a = t || window.event, n = a.target || a.srcElement; n && n.hasAttribute && !n.hasAttribute("data-ga-action") && "BODY" != n.tagName;) n = n.parentNode;
                if (n && n.hasAttribute && n.hasAttribute("data-ga-action")) {
                    var r = n.getAttribute("data-ga-action") ? n.getAttribute("data-ga-action") : "click",
                        i = n.getAttribute("data-ga-category") ? n.getAttribute("data-ga-category") : "",
                        o = n.getAttribute("data-ga-label") ? n.getAttribute("data-ga-label") : "",
                        c = n.getAttribute("data-bd-track") ? n.getAttribute("data-bd-track") : "";
                    window.ga && r.indexOf(t.type) > -1 && ga("send", "event", i, e, o), c && r.indexOf(t.type) > -1 && "click" === t.type && analyHelper.bd_track(c)
                }
            })
        },
        getAction: function(e, t) {
            var a = /[^\/]*$/,
                n = "",
                r = "";
            switch (t) {
                case "category":
                    r = e.parents(".category-item").children("a").attr("href"), n = r.indexOf("javascript") == -1 ? a.exec(r)[0] : "community";
                    break;
                case "page":
                    r = e.attr("href"), r = r.indexOf("bbs.dji.com") == -1 ? r : "bbs", n = r.indexOf("skypixel") == -1 ? a.exec(r)[0] : "skypixel", 0 != e.parents(".children-star-goods").length && (n = "stargood_" + n);
                    break;
                case "nav_right":
                    e.parents(".nav-language").length > 0 ? n = e.attr("data-lang") : e.parents(".nav-search").length > 0 ? n = "search" : e.parents(".nav-shopping-cart").length > 0 ? n = "store" : (r = (e.attr("href") || "").split("?")[0], n = a.exec(r)[0]);
                    break;
                case "footer_category":
                    r = e.parents(".link-list").find("a").first().attr("href"), r = this.isOuterLink(r), n = a.exec(r)[0];
                    break;
                case "footer_page":
                    r = (e.attr("href") || "").split("?")[0], r = this.isOuterLink(r), n = a.exec(r)[0]
            }
            return n
        },
        isOuterLink: function(e) {
            var t = "www.dji.com",
                a = /(?:http(?:s)?:\/\/)?(?:www\.)?(.*?)\./;
            return e.indexOf(t) == -1 && (e = e.match(a) ? e.match(a)[1] : e), e
        },
        unique: function(e) {
            for (var t = [], a = 0, n = e.length; a < n; a++) {
                var r = e[a];
                t.indexOf(r) === -1 && t.push(r)
            }
            return t
        },
        getActionName: function(e, t) {
            if (!e || !t) return t;
            var a = RegExp(t + "=(\\w*)").exec(e);
            return Array.isArray(a) && a[1] ? a[1] : t
        },
        formatExpVarToNum: function(e) {
            if (!e || "string" != typeof e) return !1;
            var t = e.charCodeAt() - 65;
            return !Number.isNaN(t) && t >= 0 && t <= 6 && t
        }
    };
$(function() {
    analy.initial(), analy.add_page_ga(), analy.init_ga()
});