! function() {
    var e, t = ($("body"), $("#site-header")),
        a = $("#siteHeaderNavbar ul.navbar-category"),
        i = a.find(".dui-dropdown-menu"),
        n = $("#siteHeaderNavbar ul.navbar-category .dui-dropdown-menu.consumer .menu-container"),
        r = $("#siteHeaderNavbar ul.navbar-category .dui-dropdown-menu.commercial .menu-container .content-container"),
        o = $(".dui-navbar .dui-dropdown-menu.container-fluid.commercial .tab-panel"),
        s = $(".dui-navbar .dui-dropdown-menu.container-fluid.commercial .tab-panel.active"),
        c = [],
        l = $(".site-header-navbar li.category-item .nav-item-title"),
        d = $("#siteHeaderNavbar li.category-item"),
        u = d.find(".series-bottom-list .series-item"),
        h = $(".dui-navbar .dui-dropdown-menu.container-fluid.commercial .tab-item"),
        f = $(".dui-navbar .dui-dropdown-menu.container-fluid.commercial .content-container"),
        p = 100,
        v = 64,
        m = !1,
        g = [],
        b = {
            loadLazyNavImg: function(e) {
                function t(e, t) {
                    for (var a = 0; a < e.length; a++) {
                        if ("" === e[a].dataset.navLazy) return;
                        e[a].src = e[a].dataset.navLazy
                    }
                    t.data("load-lazy", !0)
                }
                if (!e.data("load-lazy")) {
                    var a = e.find("img[data-nav-lazy]");
                    t(a, e)
                }
            },
            closeMenu: function() {
                var e = a.find(".opened");
                e.find(".commercial").length > 0 && !h.eq(0).hasClass("active") && h.eq(0).click(), e.removeClass("opened"), t.addClass("collapsed"), i.stop().css({
                    height: "0",
                    "pointer-events": "none"
                }), window.pcHomepageNavSticky && (b.switchScrollLockWhenSticky(!1), n.scrollTop(0), r.scrollTop(0))
            },
            initial: function() {
                u.each(function(e, t) {
                    var a = $(t),
                        i = a.find("a.series-cover-content");
                    i.eq(0).hasClass("active") || (i.removeClass("active"), i.eq(0).addClass("active"))
                })
            },
            checkIsIPadPro: function() {
                var e = window.navigator.userAgent,
                    t = e.indexOf("Safari") !== -1 && e.indexOf("Version") !== -1,
                    a = e.indexOf("iPhone") !== -1 && e.indexOf("Version") !== -1;
                return t && !a && "ontouchend" in document
            },
            debounce: function(e, t, a, i, n) {
                if (clearTimeout(t.tId), t && e) {
                    var r = {
                        context: a,
                        index: i,
                        event: n
                    };
                    t.tId = setTimeout(function() {
                        t.call(r)
                    }, p)
                }
            },
            switchScrollLockWhenSticky: function(t) {
                if (window.pcHomepageNavSticky) {
                    var a = document.querySelector("body");
                    if (t) {
                        m || (e = window.scrollY || window.pageYOffset), m = !0;
                        var i = setTimeout(function() {
                            a.style.height = "100vh"
                        }, 300);
                        g.push(i)
                    } else b.clearAllTimers(), a.style.height = "", m && "number" == typeof e && window.scrollTo(window.scrollX || window.pageXOffset, e), m = !1
                }
            },
            checkScrollLockWhenSticky: function(e) {
                if (window.pcHomepageNavSticky) {
                    var t = e + v >= window.innerHeight;
                    b.switchScrollLockWhenSticky(t)
                }
            },
            clearAllTimers: function() {
                for (var e = 0; e < g.length; e++) clearTimeout(g[e]);
                g = []
            }
        },
        w = {
            init: function() {
                this.initMenuHeight(), this.handleDropdown(), this.handleNavMenuHover(), this.isNewProduct(), this.gaHoverEvent(), this.invertAgLayout()
            },
            initMenuHeight: function() {
                i.each(function(e, t) {
                    var a = $(t).find(".menu-container").height();
                    if ("commercial-dropdown" !== $(t).attr("type")) c.push(a);
                    else {
                        var i = $(s).height(),
                            n = i + 96 + 112;
                        c.push(n)
                    }
                })
            },
            invertAgLayout: function() {
                var e = i.find(".enterprise-tab .tab-list .active.tab-item"),
                    t = i.find(".active.tab-panel .enterprise-product"),
                    a = i.find(".active.tab-panel .enterprise-solution"),
                    n = i.find(".active.tab-panel .divider"),
                    r = e.attr("type");
                "agriculture" === r && (n.after(a), n.before(t))
            },
            handleDropdown: function() {
                function e() {
                    var e = this.index;
                    h.siblings().removeClass("active"), o.siblings().removeClass("active"), h.eq(e).addClass("active"), o.eq(e).addClass("active");
                    var t = o.eq(e);
                    a = t.height();
                    var i = a + 96 + 112;
                    f.css("height", a + 96 + 48 + "px"), b.checkScrollLockWhenSticky(i), $(".dui-dropdown-menu.commercial .tab-panel .link-list").css("height", 0);
                    var n = $(".dui-dropdown-menu.commercial .tab-panel.active .link-list"),
                        r = $(".dui-dropdown-menu.commercial .tab-panel.active .link-list .content-wrapper"),
                        s = r.height();
                    n.css("height", s + "px"), w.invertAgLayout()
                }
                this.handleDropDownWithHover();
                var t = $(".site-header-navbar li.category-item .close-menu");
                t.click(function() {
                    b.closeMenu()
                });
                var a = s.height();
                f.css("height", a + 96 + 64 + "px"), h.hover(function() {
                    var t = $(this).index();
                    b.debounce(!0, e, $(this), t)
                }, function() {
                    b.debounce(!1, e, null, null)
                }), h.on("click", function() {
                    var t = $(this).index();
                    b.debounce(!0, e, $(this), t)
                })
            },
            handleDropDownWithHover: function() {
                function e(e, a) {
                    "click" === a ? t.hasClass("collapsed") || !e.hasClass("category-item-sink") || e.hasClass("single-dropdown-active") ? e.removeClass("single-dropdown-active") : e.addClass("single-dropdown-active") : e.hasClass("category-item-sink") && !e.hasClass("single-dropdown-active") && e.addClass("single-dropdown-active")
                }

                function a(a, n) {
                    var r = a,
                        o = r.index(),
                        s = c[o],
                        u = r.find(".dui-dropdown-menu");
                    if (r.hasClass("opened")) r.hasClass("opened") && "click" === n && (e(r, n), b.closeMenu($(this)), t.addClass("collapsed"));
                    else {
                        var h = l.find(".opened");
                        t.hasClass("collapsed") ? (h.length > 0 ? (i.stop().css("height", ""), d.removeClass("opened")) : u.stop().css("height", ""), u.animate({
                            height: s + "px"
                        }, 300, "linear", function() {
                            u.css({
                                height: "auto",
                                "pointer-events": "auto"
                            })
                        }), t.removeClass("collapsed")) : (d.removeClass("opened"), i.stop().css("height", ""), u.stop().css({
                            height: "auto",
                            "pointer-events": "auto"
                        })), e(r, n), r.addClass("opened"), b.initial(r), b.checkScrollLockWhenSticky(c[o])
                    }
                    setTimeout(function() {
                        b.loadLazyNavImg(r)
                    }, 340)
                }
                b.checkIsIPadPro() ? $("#siteHeaderNavbar .navbar-category").on("mouseleave", function() {
                    var e = $(".site-header-navbar li.category-item.opened");
                    b.closeMenu(e)
                }) : d.hoverDelay({
                    hoverEvent: function() {
                        a($(this))
                    },
                    outEvent: function() {
                        b.closeMenu($(this))
                    }
                })
            },
            handleNavMenuHover: function() {
                function e() {
                    this.context && (this.context.siblings().removeClass("active"), this.context.eq(this.index).addClass("active"))
                }
                var t = $(".site-header-navbar li.category-item"),
                    a = t.find(".series-bottom-list ul.product-list .product-list-item"),
                    i = t.find(".series-bottom-list .series-item a.series-cover-content");
                a.hover(function() {
                    var t = $(this).index(),
                        a = $(this).parent("ul.product-list").parent(".series-item").find("a.series-cover-content");
                    b.debounce(!0, e, a, t)
                }, function() {
                    b.debounce(!1, e, null, null)
                }), i.hover(function() {
                    var e = $(this).find("img.original"),
                        t = $(this).find("img.hover-cover"),
                        a = t.attr("src");
                    a && (e.removeClass("show-cover"), t.addClass("show-cover"))
                }, function() {
                    var e = $(this).find("img.original"),
                        t = $(this).find("img.hover-cover");
                    t.removeClass("show-cover"), e.addClass("show-cover")
                })
            },
            isNewProduct: function() {
                var e = $(".site-header-navbar li.category-item .product-list-item"),
                    t = new Date;
                e.each(function(e, a) {
                    var i = $(a).find(".new"),
                        n = i.attr("title"),
                        r = i.attr("beginTime"),
                        o = i.attr("endTime");
                    r && o && (r = new Date(r), o = new Date(o), t >= r && t <= o && i.html(n))
                })
            },
            gaHoverEvent: function() {
                var e = $("#siteHeaderNavbar a");
                e.each(function(e, t) {
                    var a = $(t).attr("href");
                    a && "javascript:;" !== a || $(t).addClass("no-configuration-link")
                })
            }
        };
    w.init()
}();
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e, t) {
    DUI.page({
        $nav: null,
        $navAccount: null,
        $navUser: null,
        $navCart: null,
        $searchForm: null,
        $searchBox: null,
        $searchInput: null,
        $searchBtn: null,
        $searchResultData: [],
        $currentPanelClass: "",
        $searchStorageKey: "",
        User: null,
        searchKeys: "",
        isSearching: !1,
        init: function() {
            this.$nav = t(".dui-navbar"), this.$navAccount = this.$nav.find(".nav-account"), this.$navUser = this.$nav.find(".nav-user"), this.$searchForm = this.$nav.find(".search-form"), this.$searchBox = this.$nav.find(".search-box"), this.$searchInput = this.$nav.find(".search-input"), this.$searchBtn = this.$searchBox.find(".search-btn"), this.$navCart = this.$nav.find(".nav-store"), this.$navLanguage = this.$nav.find(".nav-language"), this.requested_cart = !1, this.do_query_cart = !1, DUI.searchHelper = this.helper
        },
        ready: function() {
            DUI.Cookie.remove("www_redirect_to", {
                domain: DUI.Config.domain || ".dji.com",
                path: "/"
            }), this.render(["renderAccount"]);
            var e = DUI.Cookie.get("cart_data_reload");
            "true" == e && this.render("renderCarts"), this.$searchStorageKey = "head-historical-search-list-" + (DUI.I18n.lang || "")
        },
        addViews: function() {
            var e = (t(".nav-store .btn-store .cart"), t(".nav-store .btn-store .count"), t(".nav-store .dui-dropdown-menu"));
            return {
                renderCarts: function() {
                    var a = this,
                        i = DUI.Cookie.get("cart_uuid") || "",
                        n = DUI.Config.domain || ".dji.com";
                    a.do_query_cart = !0, DUI.queryCarts(i).submit(function(i) {
                        var r = i.data.first || {},
                            o = r.quantity;
                        if (a.quantity = o, o <= 0) e.addClass("hidden");
                        else {
                            e.removeClass("hidden");
                            var s = 0,
                                c = r.products && r.products.length,
                                l = a.$navCart.find(".total"),
                                d = l.data("tmpl");
                            t(".nav-store .product-list li").remove(), t("#tpl-cart").render({
                                getData: function() {
                                    return r = (r.products || []).splice(0, 3).map(function(e) {
                                        return e.cover = e.variant.cover.mini, e.title = e.variant.title, e.product_url = DUI.I18n.store_url("product/" + e.variant.slug), s += e.quantity, e
                                    })
                                }
                            }), c > 3 ? l.text(d.replace("#", o - s)).removeClass("hidden") : l.addClass("hidden")
                        }
                        a.requested_cart = !0, a.do_query_cart = !1, DUI.Cookie.set("cart_data_qty", o || 0, {
                            domain: n,
                            path: "/"
                        }), DUI.Cookie.set("cart_data_reload", "false", {
                            domain: n,
                            path: "/"
                        })
                    }, function(t) {
                        e.addClass("hidden"), a.do_query_cart = !1, this.notice.error(t)
                    })
                },
                renderAccount: function() {
                    var e = this,
                        a = DUI.Cookie.get("_logged") || "",
                        i = e.User,
                        n = DUI.Config.domain || ".dji.com";
                    if (DUI.Storage.removeItem("dji[user]"), !i && "yes" == a) {
                        var r = DUI.Cookie.get("user_nick_name") || "",
                            o = "//www2.djicdn.com/assets/uploads/1db6b3ba6bee86b9eb54e37651072f84.svg";
                        /(?:javascript|jav\s+ascript|\&#\d+|\&#x)/i.test(o) && (o = ""), i = {
                            success: !0,
                            status: 200,
                            data: {
                                first: {
                                    nick_name: r,
                                    avatar: o
                                }
                            }
                        }, e.User = i
                    }
                    if (a && e.User) {
                        var s = i.data.first,
                            n = location.hostname.replace("www", "");
                        e.$navUser.render({
                            script: !1,
                            getData: function() {
                                var e = "//www2.djicdn.com/assets/uploads/1db6b3ba6bee86b9eb54e37651072f84.svg";
                                return s.avatar = s.avatar ? "string" == typeof s.avatar ? s.avatar : s.avatar.thumb.x2 : e, s
                            }
                        }), s.nick_name ? e.$navUser.find(".nick-name").removeClass("hidden") : localStorage.removeItem("dji[user]"), e.$navAccount.addClass("hidden"), e.$navUser.removeClass("hidden")
                    } else {
                        var c = DUI.Cookie.get("user_nick_name");
                        c && DUI.Cookie.remove("user_nick_name", {
                            domain: n
                        }), e.$navAccount.removeClass("hidden"), e.$navUser.addClass("hidden")
                    }
                    t([".login-link", ".logout-link", ".register-link"]).each(function(t, a) {
                        var i = e.$nav.find(a),
                            n = i.attr("href") || "";
                        n += (n.indexOf("?") > -1 ? "&" : "?") + "backUrl=" + encodeURIComponent(location.href), i.attr("href", n)
                    })
                }
            }
        },
        bind: function() {
            function e(e, t, a) {
                var i;
                return function() {
                    var n = this,
                        r = arguments,
                        o = function() {
                            i = null, a || e.apply(n, r)
                        },
                        s = a && !i;
                    clearTimeout(i), i = setTimeout(o, t), s && e.apply(n, r)
                }
            }

            function a() {
                var e = v.$searchInput.val().trim();
                v.searchKeys = e, g != e && (g = e, setTimeout(function() {
                    v.searchKeys == e && v.helper.getSearchHotWords(e, function(t) {
                        t && v.searchKeys == e && f(t)
                    })
                }, 100))
            }

            function i(e) {
                if ("string" != typeof e) throw Error("In replaceRedundantSlash(url), the url must be string");
                return e.split(/\/+/).reduce(function(e, t) {
                    return /:$/.test(e) ? e + "//" + t : e + "/" + t
                })
            }

            function n() {
                var e = "https://www.dji.com/";
                if (DUI && DUI.Config && DUI.Config.env) {
                    var t = DUI.Config.env;
                    "production" === t ? e = "https://www.dji.com/" : "development" === t || "preview" === t ? e = window.location.origin.replace(/(coupon|citizenship|enterprise)\./, "www.") + "/" : "staging" === t && (e = window.location.origin.replace(/(coupon|citizenship|enterprise)\./, "wwww.") + "/")
                }
                return e
            }

            function r(e) {
                var t = v.$searchResultData.autocomplete || [],
                    a = t.filter(function(t) {
                        return t.id === e
                    })[0],
                    i = DUI.Storage.getItem(v.$searchStorageKey);
                i = JSON.parse(i) || [];
                var n = JSON.parse(JSON.stringify(i));
                if (n.map(function(t, a) {
                        if (t.id === e) {
                            var r = n.length - i.length;
                            i.splice(a - r, 1)
                        }
                    }), a && "object" === ("undefined" == typeof a ? "undefined" : _typeof(a)) && a.id && (i.unshift(a), i.length > 5 && i.pop(), i.length > 0)) {
                    var r = JSON.stringify(i);
                    DUI.Storage.setItem(v.$searchStorageKey, r)
                }
            }

            function o(e) {
                var t, a = v.$currentPanelClass || ".search-push",
                    i = v.$searchBox.find(a + " li"),
                    n = i.length,
                    r = m;
                return !(n <= 0) && (r = r >= 0 ? r + e - 39 + n : (n - (40 - e) / 2) % n, r = Math.abs(r % n), i.removeClass("active"), i.eq(r).addClass("active"), t = i.eq(r).hasClass("quick-link") ? g : i.eq(r).text(), v.$searchInput.val(t), void(m = r))
            }

            function s(e, t) {
                var a = "",
                    i = e.length;
                return e.forEach(function(e, n) {
                    var r = n + 1 + "-" + i;
                    a += "string" == typeof e ? l(e, r) : c(e, r, t)
                }), a
            }

            function c(e, t, a) {
                var i = "https://";
                return t = "history" === a ? "history" : t, '<li><a class="head-search-item ga-data" data-id="' + e.id + '" data-ga-category="head-search-' + a + '", data-ga-action="click", data-ga-label="search-item-rank-' + t + '" href="' + i + document.domain + "/" + DUI.I18n.lang + "/" + e.slug + "?site=brandsite&from=" + a + '">' + e.title + "</a></li>"
            }

            function l(e, t) {
                var a = "https://";
                return '<li><a class="ga-data" data-ga-category="head-search-hotwords", data-ga-action="click", data-ga-label="search-item-rank-' + t + '" href="' + a + document.domain + "/" + DUI.I18n.lang + "/search?cache=no&q=" + e + '&site=brandsite&from=hotwords">' + e + "</a></li>"
            }

            function d(e) {
                var t = v.$searchBox.find(".history-words-list"),
                    a = s(e, "history");
                t.find("li").remove(), t.html(a), "" !== a && p("history")
            }

            function u(e) {
                for (var t = v.$searchBox.find(".marketing-words-list"), a = "https://", i = "", n = e.length, r = 0; r < n; r++) {
                    var o = e[r].url.toLocaleLowerCase();
                    o = o.replace(/^(https?:)?\/\//, a), DUI.helper.flowStats(), o = flowStats(o, "recommended");
                    var s = e[r].url.indexOf("mini-2-se") !== -1 ? " other-region-special" : "";
                    i += '<li class="quick-link' + s + '"><a class="ga-data" data-ga-category="head-search-recommended", data-ga-action="click", data-ga-label="search-quicklink-' + DUI.I18n.lang + "-" + e[r].title + '" href="' + o + '">' + e[r].title + "</a></li>"
                }
                t.find("li").remove(), t.html(i), "" !== i && p("recommended")
            }

            function h(e) {
                var t = (v.$searchInput.val().trim() || "", v.$searchBox.find(".hot-words-list")),
                    a = s(e, "autocomplete");
                t.find("li").remove(), t.html(a), "" !== a && p("search")
            }

            function f(e) {
                v.$searchResultData = e;
                var t = e.lucky_urls || [],
                    a = e.hot_words || [];
                "en" === DUI.I18n.lang && (a = e.autocomplete || []);
                var i = v.$searchBox.find(".search-push");
                return v.$searchBox.find(".marketing-words"), v.$searchBox.find(".hot-words"), v.$searchBox.find(".history-words"), 0 == t.length && 0 == a.length ? (console.log("Opps，后台没有相关内容"), void i.hide()) : (a.length > 0 ? h(a) : u(t), m = -1, void(v.isSearching && i.slideDown(500)))
            }

            function p(e) {
                var t = {
                    history: ".history-words",
                    recommended: ".marketing-words",
                    search: ".hot-words"
                };
                for (var a in t)
                    if (t.hasOwnProperty(a)) {
                        var i = v.$searchBox.find(t[a]);
                        i.hide()
                    }
                var n = t[e],
                    r = v.$searchBox.find(n);
                r.show(), v.$currentPanelClass = n || "";
                var o = v.$searchBox.find(".search-push");
                o.show(), DUI.helper.initTopicalGaDynamic("search-push")
            }
            var v = this;
            this.requested_cart = !1;
            var m = -1,
                g = "";
            v.$searchInput.keydown(function(e) {
                var t = e.which;
                38 != t && 40 != t || (e.preventDefault(), o(t))
            }), t(".search-item").on("click", ".head-search-item", function() {
                var e = t(this).data("id");
                r(e)
            }), t(".search-push").on("click", ".clean-history-list", function() {
                return DUI.Storage.removeItem(v.$searchStorageKey), v.$searchInput.focus(), !1
            }), v.$searchInput.focus(function(e) {
                var a = t(this).val().trim();
                if (!a) {
                    var i = DUI.Storage.getItem(v.$searchStorageKey);
                    i = JSON.parse(i), i ? d(i) : v.helper.getSearchHotWords(a, function(e) {
                        e && f(e)
                    })
                }
            });
            var b = e(a, 500, !1);
            return v.$searchInput.keyup(function(e) {
                var t = e.which;
                return 38 != t && 40 != t && void b()
            }), v.$searchForm.submit(function() {
                var e, t = v.$searchInput.val().trim();
                if (v.$searchInput.val(t), !t.trim()) return !1;
                if (m >= 0) {
                    var a = v.$searchBox.find(".search-push li").eq(m).find("a");
                    e = a.attr("href");
                    var o = a.data("id");
                    return o && r(o), window.open(i(e), "__this"), !1
                }
                return e = n() + DUI.Localize.getCountryUrlPrefix() + "/search?q=" + t, window.open(i(e), "__this"), !1
            }), v.$searchBtn.click(function() {
                var e, t = v.$searchInput.val().trim();
                return v.$searchInput.val(t), !!t.trim() && (m >= 0 ? (e = v.$searchBox.find(".search-push li").eq(m).find("a").attr("href"), window.open(i(e), "__this"), !1) : (e = n() + DUI.Localize.getCountryUrlPrefix() + "/search?q=" + t, window.open(i(e), "__this"), !1))
            }), t(window).scroll(function() {
                t("#site-header").hasClass("navbar-searching") && (v.$nav.removeClass("navbar-searching"), v.$nav.find("li.category-item .close-menu").click(), t("#siteHeaderSearch").stop().animate({
                    opacity: 0
                }, 300, function() {
                    t(this).css("display", "none")
                }), t("#siteHeaderNavbar").stop().animate({
                    opacity: 1
                }, 300, function() {
                    t(this).css("display", "")
                }), v.$searchBox.find(".search-push").hide(), v.$searchInput.val(""), v.isSearching = !1)
            }), v.$navCart.hover(function() {
                if (!v.do_query_cart) {
                    var e = DUI.Cookie.get("cart_data_reload"),
                        t = DUI.Cookie.get("cart_data_qty");
                    v.requested_cart && "true" != e && t == v.quantity || v.render("renderCarts")
                }
            }), {
                searchOn: function() {
                    v.$nav.addClass("navbar-searching"), t("#siteHeaderNavbar").stop().animate({
                        opacity: 0
                    }, 300, function() {
                        t(this).css("display", "none")
                    }), t("#siteHeaderSearch").stop().animate({
                        opacity: 1
                    }, 300, function() {
                        t(this).css("display", "block"), window.setTimeout(function() {
                            v.$searchInput.focus(), v.isSearching = !0
                        }, 500)
                    })
                },
                searchOff: function() {
                    v.$nav.removeClass("navbar-searching"), t("#siteHeaderSearch").stop().animate({
                        opacity: 0
                    }, 300, function() {
                        t(this).css("display", "none")
                    }), t("#siteHeaderNavbar").stop().animate({
                        opacity: 1
                    }, 300, function() {
                        t(this).css("display", "")
                    }), v.$searchBox.find(".search-push").hide(), v.$searchInput.val(""), v.isSearching = !1
                }
            }
        },
        helper: {
            getSearchHotWords: function(e, a) {
                var i = e || "";
                t.ajax({
                    type: "GET",
                    url: DUI.API._helper.getApi("searchHotWord"),
                    data: {
                        q: i,
                        lang: DUI.I18n.lang
                    },
                    dataType: "json",
                    success: function(e) {
                        a(e)
                    },
                    error: function(e, t) {
                        a(null)
                    }
                })
            }
        }
    })
}(window, jQuery),
function(e, t) {
    DUI.page({
        $siteFooter: null,
        $siteFooterLocale: null,
        $dropdown: null,
        $subscribeForm: null,
        $subscribeInput: null,
        $subscribeBtn: null,
        $subscribeTip: null,
        $subscribeTip2: null,
        init: function() {
            this.$siteFooter = t("#site-footer"), this.$siteFooterLocale = this.$siteFooter.find(".footer-locale"), this.$dropdown = this.$siteFooter.find("#select-locale-dropdown"), this.$subscribeForm = this.$siteFooter.find("#footer-subscribe-form"), this.$subscribeInput = this.$subscribeForm.find(".form-input"), this.$subscribeBtn = this.$siteFooter.find("#footer-subscribe-btn"), this.$subscribeTip = this.$subscribeForm.find(".tip"), this.$subscribeTip2 = this.$subscribeForm.find(".tip-2"), this.showRecord(), this.bindModalSubscribe(), this.handleInitFloatActionBtn()
        },
        ready: function() {
            DUI.Cookie.remove("www_redirect_to", {
                domain: DUI.Config.domain || ".dji.com",
                path: "/"
            }), t(".footer-change-country").length ? this.helper.changeCountry.call(this) : this.helper.changeLanguage.call(this)
        },
        bind: function() {
            function e(e, t) {
                var n = window.ABTest && window.ABTest.mapKeyToVar && window.ABTest.mapKeyToVar.subscribe_de_exp,
                    r = "B" === n;
                DUI.API._helper.ajaxWithCredent({
                    method: "POST",
                    url: i,
                    data: e
                }).done(function(i) {
                    r ? DUI.API._helper.ajaxWithCredent({
                        method: "POST",
                        dataType: "json",
                        contentType: "application/json",
                        url: DUI.API._helper.getStoreApi("storeSubscribe"),
                        data: JSON.stringify({
                            country: "de",
                            language: "de",
                            source: "official_footer",
                            email: e.email
                        })
                    }).done(function(e) {
                        i && 200 == i.status && e && 200 == e.status ? window.ga && ga("send", "event", "pc-footer", "click", "other-subscribe-success") : window.ga && ga("send", "event", "pc-footer", "click", "other-subscribe-error"), a.$subscribeTip.html(a.$subscribeTip.data("success")), a.$subscribeTip2.html(a.$subscribeTip2.data("success")), setTimeout(function() {
                            a.$subscribeTip.html("")
                        }, 3e4), t && t()
                    }).fail(function(e) {
                        console.error("subscribes error: ", e), t && t()
                    }) : (i && 200 == i.status ? window.ga && ga("send", "event", "pc-footer", "click", "other-subscribe-success") : window.ga && ga("send", "event", "pc-footer", "click", "other-subscribe-error"), a.$subscribeTip.html(a.$subscribeTip.data("success")), a.$subscribeTip2.html(a.$subscribeTip2.data("success")), setTimeout(function() {
                        a.$subscribeTip.html("")
                    }, 3e3), t && t())
                }).fail(function(e) {
                    console.error("subscribe error: ", e), t && t()
                })
            }
            var a = this,
                i = DUI.API._helper.getApi("subscribe");
            t(".footer-locale").hover(function() {
                a.$dropdown.css("maxHeight", "100vh")
            }, function() {
                a.$dropdown.css("maxHeight", "0")
            }), t(".footer-locale").click(function() {
                a.$dropdown.css("maxHeight", "100vh")
            }), a.$dropdown.find(".active").click(function() {
                a.$dropdown.css("maxHeight", "0")
            }), a.bindSelectCountry(), a.$subscribeInput.keyup(function() {
                var e = t(this).val();
                if (a.helper.isValidEmail(e)) a.$subscribeBtn.addClass("is-valid"), a.$subscribeTip.html("");
                else {
                    a.$subscribeBtn.removeClass("is-valid");
                    var i = a.$subscribeTip.data("error");
                    a.$subscribeTip.html(i)
                }
            }), a.$subscribeInput.blur(function() {
                a.$subscribeTip.html("")
            }), a.$subscribeBtn.click(function() {
                var t = a.$subscribeInput.val();
                if (a.helper.isValidEmail(t)) {
                    var i, n = {
                            email: t,
                            subscribe_source: "official_footer"
                        },
                        r = window.ABTest && window.ABTest.mapKeyToVar && window.ABTest.mapKeyToVar.subscribe_de_exp,
                        o = "";
                    return "B" === r && (n.exp_hit = r, o = a.helper.setStoreSubscribeExpCookie(), i = function() {
                        a.helper.resetStoreExpCookie(o)
                    }), DUI.Config._csrf ? (n._csrf = DUI.Config._csrf, e(n, i)) : DUI.Activity.generateToken(function(t) {
                        n._csrf = t, e(n, i)
                    })
                }
                a.$subscribeTip.html(a.$subscribeTip.data("error"))
            });
            var n = t(".footer-item:last").find(".footer-column:last");
            return n.after(t("#site-footer .subscribe")), t(".social-wechat").hover(function() {
                t(this).find(".popup").fadeIn(300)
            }, function() {
                t(this).find(".popup").fadeOut(300)
            }), {}
        },
        bindModalSubscribe: function() {
            function e(e, t) {
                var r = window.ABTest && window.ABTest.mapKeyToVar && window.ABTest.mapKeyToVar.subscribe_de_exp,
                    o = "B" === r;
                DUI.API._helper.ajaxWithCredent({
                    url: i,
                    method: "POST",
                    data: e
                }).done(function(i) {
                    if (o) DUI.API._helper.ajaxWithCredent({
                        method: "POST",
                        dataType: "json",
                        contentType: "application/json",
                        url: DUI.API._helper.getStoreApi("storeSubscribe"),
                        data: JSON.stringify({
                            country: "de",
                            language: "de",
                            source: "official_popup",
                            email: e.email
                        })
                    }).done(function(e) {
                        if (i && "200" === i.status && e && 200 == e.status) {
                            n.removeClass("loading"), c.addClass("hide"), l.addClass("active"), window.ga && ga("send", "event", "subcribe_modal", "submit", "email-ok");
                            var r = "subscribe-modal-submit-flag";
                            a.helper.setLocalStorage(r, !0)
                        } else n.removeClass("loading"), window.ga && ga("send", "event", "subcribe_modal", "submit", "email-fail");
                        t && t()
                    }).fail(function(e) {
                        console.error("subscribes error: ", e), t && t()
                    });
                    else {
                        if (i && "200" === i.status) {
                            n.removeClass("loading"), c.addClass("hide"), l.addClass("active"), window.ga && ga("send", "event", "subcribe_modal", "submit", "email-ok");
                            var r = "subscribe-modal-submit-flag";
                            a.helper.setLocalStorage(r, !0)
                        } else n.removeClass("loading"), window.ga && ga("send", "event", "subcribe_modal", "submit", "email-fail");
                        t && t()
                    }
                }).fail(function(e) {
                    console.error("subscribe error: ", e), t && t()
                })
            }
            var a = this,
                i = DUI.API._helper.getApi("subscribe"),
                n = t("#subscribe-modal-wrapper"),
                r = t("#subscribe-modal-email-input"),
                o = t("#subscribe-modal-submit-btn"),
                s = t("#email-input-error-tip"),
                c = t("#subscribe-modal-content"),
                l = t("#subscribe-modal-success");
            n && r && o && (r.keyup(function() {
                var e = t(this).val();
                e && !a.helper.isValidEmail(e) ? (r.addClass("email-input-error"), s.addClass("email-input-has-error")) : (r.removeClass("email-input-error"), s.removeClass("email-input-has-error"))
            }), r.focus(function() {
                s.removeClass("email-input-blurring")
            }), r.blur(function() {
                s.addClass("email-input-blurring")
            }), o.click(function() {
                var t = r.val();
                if (window.ga && ga("send", "event", "subscribe_modal", "submit", "modal_subscribe"), t && a.helper.isValidEmail(t)) {
                    n.addClass("loading");
                    var i, o = {
                            email: t,
                            subscribe_source: "official_popup"
                        },
                        s = window.ABTest && window.ABTest.mapKeyToVar && window.ABTest.mapKeyToVar.subscribe_de_exp,
                        c = "";
                    return "B" === s && (o.exp_hit = s, c = a.helper.setStoreSubscribeExpCookie(), i = function() {
                        a.helper.resetStoreExpCookie(c)
                    }), DUI.Config._csrf ? (o._csrf = DUI.Config._csrf, e(o, i)) : DUI.Activity.generateToken(function(t) {
                        o._csrf = t, e(o, i)
                    })
                }
            }))
        },
        bindSelectCountry: function() {
            var e = t(".footer-change-country"),
                a = t(".select-country");
            e.on("click", function() {
                a.show(), t("html").addClass("country-modal-open")
            }), a.find(".country-header--close").on("click", function() {
                return a.hide(), t("html").removeClass("country-modal-open"), !1
            }), a.find(".country-modal").on("click", function() {
                return a.hide(), t("html").removeClass("country-modal-open"), !1
            })
        },
        showRecord: function() {
            var e = DUI.Localize.getCountry() || "",
                a = DUI.Config.lang,
                i = t("#J_footer_record");
            "cn" != e.toLowerCase() && "cn" != a || i.removeClass("hidden")
        },
        handleInitFloatActionBtn: function() {
            if ("undefined" != typeof window && "undefined" != typeof FloatActionButton) {
                var e = t("#float-button-text");
                if (!e.length) return;
                var a = e.attr("data-hover-tip") ? e.attr("data-hover-tip") : "",
                    i = e.attr("data-main-title") ? e.attr("data-main-title") : "",
                    n = JSON.parse(e.attr("data-content-list")) ? JSON.parse(e.attr("data-content-list")) : [],
                    r = DUI.I18n.locale,
                    o = e.attr("data-main-button-type") ? e.attr("data-main-button-type") : "popup-type",
                    s = "link-type" === o,
                    c = e.attr("data-main-link-type") ? e.attr("data-main-link-type") : "chat",
                    l = e.attr("data-main-link") ? e.attr("data-main-link") : "",
                    d = function() {
                        var e = {
                            isMobile: !1,
                            gaCategory: "enterprise_pc_floating window",
                            hoverTips: a,
                            mainTitle: i,
                            contentList: n,
                            showOnlineServicePopUp: "zh-CN" === r || "zh-TW" === r || "en" === r || "es" === r || "ru" === r,
                            displayMainOnly: s,
                            mainLinkType: c,
                            mainLink: l
                        };
                        new FloatActionButton(e)
                    };
                "complete" !== document.readyState ? window.addEventListener("load", function() {
                    d()
                }) : d()
            }
        },
        helper: {
            setLangInCookie: function(e, t) {
                DUI.Localize.subSetLangInCookie(e)
            },
            changeLanguage: function() {
                var e, a = this,
                    i = a.$siteFooterLocale.find(".change-language"),
                    n = [],
                    r = [],
                    o = "",
                    s = location.origin,
                    c = location.hostname.split(".")[0] || "",
                    l = {
                        coupon: ["/en", "/cn"],
                        citizenship: ["/en", "/cn"],
                        enterprise: []
                    };
                DUI.Config.enterprise_lang && DUI.Config.enterprise_lang.forEach(function(e) {
                    /^\/.*/g.test(e) ? l.enterprise.push(e) : l.enterprise.push("/" + e)
                }), c = c.replace(/^r-/, "");
                for (var d = 0, u = i.length; d < u; d++) {
                    var h = "/" + i.eq(d).data("lang");
                    n.push(h), "/en" !== h && r.push(h)
                }
                if ("/" == o) o = "";
                else {
                    var f = new RegExp("^(" + r.join("|") + ")", "g");
                    o = o.replace(f, "")
                }
                for (var p = 0, v = i.length; p < v; p++) {
                    var m = "/en" == n[p] ? "" : n[p];
                    e = s + m + o, i.eq(p).attr("href", e), l[c] && l[c].indexOf(n[p]) < 0 && i.eq(p).closest("li").hide()
                }
                return a.$siteFooterLocale.delegate(".change-language", "click", function(e) {
                    e.preventDefault();
                    var i = t(this).data("lang");
                    if (a.helper.setLangInCookie.call(a, i), "_top" == t(this).attr("target")) top.location.href = t(this).attr("href");
                    else {
                        var n = t(this).attr("href");
                        window.location.href = n
                    }
                }), n
            },
            changeCountry: function() {
                t(".countrybox").on("scroll", function(e) {
                    return e.preventDefault(), !1
                }), t(".countrylist--item").on("click", function(e) {
                    e.preventDefault();
                    var a = t(this).data("country"),
                        i = t(this).data("locale"),
                        n = t(this).data("continent");
                    if ("international" === n && "us" === a && "en" === i ? DUI.Localize.setOtherRegionFlag() : DUI.Localize.resetOtherRegionFlag(), DUI.Localize.setPairedLocalize({
                            country: a,
                            locale: i
                        })) {
                        var r = DUI.Localize.getCountryUrlPrefix({
                            locale: i,
                            country: a
                        }) || "/";
                        "_top" == t(this).attr("target") ? top.location.href = r : window.location.href = r
                    }
                })
            },
            getStoreLang: function(e) {
                var t = DUI.Config.langMap;
                return t[e] ? t[e] : t.en
            },
            isValidEmail: function(e) {
                var t = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*\.){1,63}[a-z0-9]+$/;
                return t.test(e)
            },
            setCookie: function(e, t, a) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * a * 60 * 60 * 1e3), document.cookie = e + "=" + t + "; expires=" + i.toGMTString()
            },
            getCookie: function(e) {
                for (var t = e + "=", a = document.cookie.split(";"), i = 0; i < a.length; i++) {
                    var n = a[i].trim();
                    if (0 === n.indexOf(t)) return n.substring(t.length, n.length)
                }
                return ""
            },
            setLocalStorage: function(e, t) {
                try {
                    window.localStorage.setItem(e, t)
                } catch (a) {}
            },
            setStoreExpCookieValue: function(e) {
                var t = window.location.hostname.split(".").reverse(),
                    a = t[1] ? "." + t[1] + "." + t[0] : "",
                    i = 7776e3;
                document.cookie = a ? "_ab_exp=" + e + "; path=/; domain=" + a + "; max-age=" + i : "_ab_exp=" + e + "; path=/; max-age=" + i
            },
            setStoreSubscribeExpCookie: function() {
                var e = this,
                    t = e.getCookie("_ab_exp"),
                    a = "";
                return t ? (a = t.replace("~pop-footer-subscribe-courtesy.A", "").replace("~pop-footer-subscribe-courtesy.B", "").replace("pop-footer-subscribe-courtesy.A", "").replace("pop-footer-subscribe-courtesy.B", ""), a += "~pop-footer-subscribe-courtesy.B") : a = "pop-footer-subscribe-courtesy.B", e.setStoreExpCookieValue(a), t
            },
            resetStoreExpCookie: function(e) {
                var t = this;
                t.setStoreExpCookieValue(e)
            }
        }
    })
}(window, jQuery);