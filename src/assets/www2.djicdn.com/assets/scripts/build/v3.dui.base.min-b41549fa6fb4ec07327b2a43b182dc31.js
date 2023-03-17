! function(e, t) {
    e.DUI = "undefined" == typeof DUI ? {} : DUI, DUI.Config = {
        clientSwitcher: !1,
        mobilePrefix: "mobile",
        servers: [],
        env: "production",
        locale: "en",
        langMap: {
            en: {
                lang: "en",
                country: "US",
                currency: "USD"
            },
            cn: {
                lang: "zh-CN",
                country: "CN",
                currency: "CNY"
            },
            "zh-tw": {
                lang: "zh-TW",
                country: "HK",
                currency: "HKD"
            },
            jp: {
                lang: "ja",
                country: "JP",
                currency: "JPY"
            },
            kr: {
                lang: "ko",
                country: "KR",
                currency: "KRW"
            },
            ko: {
                lang: "ko",
                country: "KR",
                currency: "KRW"
            },
            fr: {
                lang: "fr",
                country: "FR",
                currency: "EUR"
            },
            de: {
                lang: "de",
                country: "DE",
                currency: "EUR"
            },
            es: {
                lang: "es",
                country: "ES",
                currency: "EUR"
            },
            ru: {
                lang: "ru",
                country: "RU",
                currency: "EUR"
            },
            "pt-br": {
                lang: "pt-BR",
                country: "BR",
                currency: "BRL"
            },
            it: {
                lang: "it",
                country: "IT",
                currency: "EUR"
            }
        },
        aliasMap: {
            en: "",
            "zh-CN": "cn",
            "zh-TW": "zh-tw",
            ja: "jp",
            ko: "kr",
            "pt-BR": "pt-br"
        },
        countryCodeToNameMap: {
            gb: "uk"
        },
        countryMap: {
            us: "",
            ca: ["", "fr"],
            pr: "",
            be: "",
            dk: "",
            fr: ["fr"],
            de: ["de"],
            gr: "",
            ie: "",
            it: ["it"],
            lu: ["fr"],
            nl: "",
            pt: "",
            es: ["es"],
            gb: "",
            at: ["de"],
            cy: "",
            cz: "",
            ee: "",
            fi: "",
            lv: "",
            li: ["de"],
            mt: "",
            mc: ["fr"],
            no: "",
            pl: "",
            si: "",
            se: "",
            ch: ["de", "fr"],
            hk: ["zh-TW", ""],
            mo: ["zh-TW"],
            tw: ["zh-TW"],
            jp: ["ja"],
            au: "",
            nz: "",
            kr: ["ko"],
            sg: "",
            bg: "",
            hr: "",
            hu: "",
            lt: "",
            sk: "",
            cn: ["zh-CN"],
            mx: ["es"],
            ae: "",
            id: "",
            ru: "ru",
            br: ["pt-BR"]
        },
        continentMap: [{
            continent_code: "asia pacific",
            continent: "亚太",
            countries: [{
                country_code: "cn",
                country: "中国大陆",
                country_english: "China",
                language_code: "zh-CN",
                language: "简体中文"
            }, {
                country_code: "hk",
                country: "香港",
                country_english: "Hong Kong",
                language_code: "zh-TW",
                language: "繁體中文"
            }, {
                country_code: "hk",
                country: "Hong Kong",
                country_english: "Hong Kong",
                language_code: "en",
                language: "English"
            }, {
                country_code: "id",
                country: "Indonesia",
                country_english: "Indonesia",
                language_code: "en",
                language: "English"
            }, {
                country_code: "jp",
                country: "日本",
                country_english: "Japan",
                language_code: "ja",
                language: "日本語"
            }, {
                country_code: "mo",
                country: "澳門",
                country_english: "Macau",
                language_code: "zh-TW",
                language: "繁體中文"
            }, {
                country_code: "sg",
                country: "Singapore",
                country_english: "Singapore",
                language_code: "en",
                language: "English"
            }, {
                country_code: "kr",
                country: "대한민국",
                country_english: "South Korea",
                language_code: "ko",
                language: "한국어"
            }, {
                country_code: "tw",
                country: "台灣",
                country_english: "Taiwan",
                language_code: "zh-TW",
                language: "繁體中文"
            }, {
                country_code: "au",
                country: "Australia",
                country_english: "Australia",
                language_code: "en",
                language: "English"
            }, {
                country_code: "nz",
                country: "New Zealand",
                country_english: "New Zealand",
                language_code: "en",
                language: "English"
            }]
        }, {
            continent_code: "europe",
            continent: "欧洲",
            countries: [{
                country_code: "at",
                country: "Österreich",
                country_english: "Austria",
                language_code: "de",
                language: "Deutsch"
            }, {
                country_code: "ru",
                country: "Россия",
                country_english: "Russia",
                language_code: "ru",
                language: "Pусский"
            }, {
                country_code: "be",
                country: "Belgium",
                country_english: "Belgium",
                language_code: "en",
                language: "English"
            }, {
                country_code: "bg",
                country: "Bulgaria",
                country_english: "Bulgaria",
                language_code: "en",
                language: "English"
            }, {
                country_code: "hr",
                country: "Croatia",
                country_english: "Croatia",
                language_code: "en",
                language: "English"
            }, {
                country_code: "cz",
                country: "Czech Republic",
                country_english: "Czech Republic",
                language_code: "en",
                language: "English"
            }, {
                country_code: "dk",
                country: "Denmark",
                country_english: "Denmark",
                language_code: "en",
                language: "English"
            }, {
                country_code: "ee",
                country: "Estonia",
                country_english: "Estonia",
                language_code: "en",
                language: "English"
            }, {
                country_code: "fi",
                country: "Finland",
                country_english: "Finland",
                language_code: "en",
                language: "English"
            }, {
                country_code: "fr",
                country: "France",
                country_english: "France",
                language_code: "fr",
                language: "Français"
            }, {
                country_code: "de",
                country: "Deutschland",
                country_english: "Germany",
                language_code: "de",
                language: "Deutsch"
            }, {
                country_code: "gr",
                country: "Greece",
                country_english: "Greece",
                language_code: "en",
                language: "English"
            }, {
                country_code: "hu",
                country: "Hungary",
                country_english: "Hungary",
                language_code: "en",
                language: "English"
            }, {
                country_code: "ie",
                country: "Ireland",
                country_english: "Ireland",
                language_code: "en",
                language: "English"
            }, {
                country_code: "it",
                country: "Italy",
                country_english: "Italy",
                language_code: "en",
                language: "English"
            }, {
                country_code: "lv",
                country: "Latvia",
                country_english: "Latvia",
                language_code: "en",
                language: "English"
            }, {
                country_code: "li",
                country: "Liechtenstein",
                country_english: "Liechtenstein",
                language_code: "de",
                language: "Deutsch"
            }, {
                country_code: "lt",
                country: "Lithuania",
                country_english: "Lithuania",
                language_code: "en",
                language: "English"
            }, {
                country_code: "lu",
                country: "Luxembourg",
                country_english: "Luxembourg",
                language_code: "fr",
                language: "Français"
            }, {
                country_code: "mt",
                country: "Malta",
                country_english: "Malta",
                language_code: "en",
                language: "English"
            }, {
                country_code: "mc",
                country: "Monaco",
                country_english: "Monaco",
                language_code: "fr",
                language: "Français"
            }, {
                country_code: "nl",
                country: "Netherlands",
                country_english: "Netherlands",
                language_code: "en",
                language: "English"
            }, {
                country_code: "no",
                country: "Norway",
                country_english: "Norway",
                language_code: "en",
                language: "English"
            }, {
                country_code: "pl",
                country: "Poland",
                country_english: "Poland",
                language_code: "en",
                language: "English"
            }, {
                country_code: "pt",
                country: "Portugal",
                country_english: "Portugal",
                language_code: "en",
                language: "English"
            }, {
                country_code: "sk",
                country: "Slovakia",
                country_english: "Slovakia",
                language_code: "en",
                language: "English"
            }, {
                country_code: "si",
                country: "Slovenia",
                country_english: "Slovenia",
                language_code: "en",
                language: "English"
            }, {
                country_code: "es",
                country: "España",
                country_english: "Spain",
                language_code: "es",
                language: "Español"
            }, {
                country_code: "se",
                country: "Sweden",
                country_english: "Sweden",
                language_code: "en",
                language: "English"
            }, {
                country_code: "ch",
                country: "Switzerland",
                country_english: "Switzerland",
                language_code: "en",
                language: "English"
            }, {
                country_code: "gb",
                country: "United Kingdom",
                country_english: "United Kingdom",
                language_code: "en",
                language: "English"
            }]
        }, {
            continent_code: "middle east",
            continent: "中东",
            countries: [{
                country_code: "ae",
                country: "UAE",
                country_english: "UAE",
                language_code: "en",
                language: "English"
            }]
        }, {
            continent_code: "north america",
            continent: "美洲",
            countries: [{
                country_code: "ca",
                country: "Canada",
                country_english: "Canada",
                language_code: "en",
                language: "English"
            }, {
                country_code: "ca",
                country: "Canada",
                country_english: "Canada",
                language_code: "fr",
                language: "Français"
            }, {
                country_code: "pr",
                country: "Puerto Rico",
                country_english: "Puerto Rico",
                language_code: "en",
                language: "English"
            }, {
                country_code: "us",
                country: "United States",
                country_english: "United States",
                language_code: "en",
                language: "English"
            }, {
                country_code: "mx",
                country: "México",
                country_english: "Mexico",
                language_code: "es",
                language: "Español"
            }]
        }, {
            continent_code: "international",
            continent: "international",
            countries: [{
                country_code: "us",
                country: "Other Regions",
                country_english: "Other Regions",
                language_code: "en",
                language: "English"
            }]
        }],
        continentCountries: {
            ap: {
                cn: {},
                hk: {},
                id: {},
                jp: {},
                mo: {},
                sg: {},
                kr: {},
                tw: {},
                au: {},
                nz: {}
            },
            eu: {
                at: {},
                ru: {},
                be: {},
                bg: {},
                hr: {},
                cz: {},
                dk: {},
                ee: {},
                fi: {},
                fr: {},
                de: {},
                gr: {},
                hu: {},
                ie: {},
                it: {},
                lv: {},
                li: {},
                lt: {},
                lu: {},
                mt: {},
                mc: {},
                nl: {},
                no: {},
                pl: {},
                pt: {},
                sk: {},
                si: {},
                es: {},
                se: {},
                ch: {},
                gb: {}
            },
            me: {
                ae: {}
            },
            na: {
                ca: {},
                pr: {},
                us: {}
            }
        },
        captchaLangMapForPC: {
            cn: "cn",
            en: "en",
            "zh-tw": "tw",
            ja: "ja_JP",
            de: "de_DE",
            fr: "fr_FR",
            kr: "ko_KR",
            es: "es_ES",
            ru: "ru_RU",
            it: "it_IT",
            "pt-br": "pt_BR"
        },
        captchaLangMapForM: {
            cn: "cn",
            en: "en",
            "zh-tw": "tw"
        },
        aliCaptcha: {
            appkeyForM: "FFFF0N4N000000005F55",
            appkeyForPC: "FFFF0N4N000000005F55",
            sceneForM: "nc_other_h5",
            sceneForPC: "nc_other"
        },
        apiHostList: {
            official_api: {
                staging: {
                    host: "//test-www-api.dbeta.me"
                },
                development: {
                    host: ""
                },
                preview: {
                    host: "//stag-www-api.dbeta.me"
                },
                production: {
                    host: "//www-api.dji.com"
                },
                host: "//www-api.dji.com"
            },
            store_api: {
                staging: {
                    host: "//r-store.dbeta.me"
                },
                development: {
                    host: ""
                },
                preview: {
                    host: "//r-store.dbeta.me"
                },
                production: {
                    host: "//store.dji.com"
                },
                host: "//store.dji.com"
            }
        },
        apiList: {
            arsDealer: "/api/ars-dealers",
            currentTime: "/api/util/current_time",
            csrf: "/api/csrf",
            chinaCities: "/api/dealers/china_cities/",
            captchaValidate: "/api/util/captcha/validate",
            captchaNeeded: "/api/util/captcha_needed",
            citiesInChina: "/api/dealers/cities_in_china",
            dealerContinent: "/api/dealers/continents",
            dealerCountry: "/api/dealers/countries/",
            dealerState: "/api/dealers/states/",
            dealerStore: "/api/dealers/store/",
            dealerStores: "/api/dealers/stores/",
            dealerSubmit: "/api/dealers/submit?www=v2",
            dealerWarranties: "/api/dealers/warranties/",
            dealerZipcode: "/api/dealers/zipcode/",
            enterpriseSubIndustry: "/api/enterprise/subIndustry",
            flySafeIntroduction: "/api/flysafe/introduction",
            geoAreas: "/api/geo/areas",
            geoCountry: "/api/geo/country/",
            geoPointInfo: "/api/geo/point-info",
            geoSupportList: "/api/geo/support-list",
            geoSystemCheckUserVerify: "/api/geo-system/check-user-verify",
            geoSystemSubmitUnlockTerm: "/api/geo-system/submit-unlock-terms",
            geoSystemAdvanceUnlock: "/api/geo-system/advance-unlock?www=v2",
            geoSystemCustomUnlock: "/api/geo-system/custom-unlock?www=v2",
            localeIpLocation: "/api/locale/ip-location",
            noFlyCountry: "/api/no-fly/country/",
            officialGetUserInfo: "/api/official/get_user_info/",
            officialGetCurrentCountry: "/api/official/get_current_country",
            productCenterMg: "/api/product_center/mg-1/cn",
            productGroupAllSeries: "/api/products/groups/all-series",
            productListAllNav: "/api/products/list/all-nav",
            productListAllSeries: "/api/products/list/all-series",
            productPrice: "/api/product/price",
            productGetPrice: "/api/product/get_price",
            productDealersMg1: "/api/product_dealers/mg-1",
            productCenterMg1: "/api/product_center/mg-1",
            reserveAvailable: "/api/reserve/available/",
            reserveTypelistWingedAppointment: "/api/reserve/typelist/winged_appointment",
            reserveVerify: "/api/reserve/verify?www=v2",
            searchHotWord: "/api/search/hot-word",
            searchFind: "/api/search/find",
            skypixelLogin: "/oauth2/auth?www=v2",
            showCaseSubmitVideo: "/api/showcase/submit/video?www=v2",
            subscribe: "/api/subscribe?www=v2",
            storeSubscribe: "/api/v8/subscribes",
            serviceCenter: "/api/service/center",
            userInformation: "/api/user/information",
            userInfoEmail: "/api/user/info/email",
            userCart: "/api/user/cart",
            whereToBuyAgriMap: "/api/where-to-buy/agriculture-dealer-maps",
            whereToBuyDealerMap: "/api/where-to-buy/dealer-maps",
            whereToBuyProDealer: "/api/where-to-buy/professional-dealers/",
            whereToBuySearch: "/api/where-to-buy/search/",
            flySafeIpLocation: "/api/flysafe/ip-location",
            flySafeSelfUnlockVerify: "/api/flysafe/self-unlock/verify?www=v2",
            flySafeSelfUnlockSendVerifycationCode: "/api/flysafe/self-unlock/send-verification-code?www=v2",
            flySafeSelfUnlockSendVerifycationVoiceCode: "/api/flysafe/self-unlock/send-verification-voice-code?www=v2",
            flySafeSelfUnlockLicenseCount: "/api/flysafe/self-unlock/check-license-limited?www=v2",
            flySafeLink: "/api/flysafe/link",
            flySafeCountryChunkMap: "/api/flysafe/country-chunk-map",
            getTerraSts: "/api/flysafe/get-sts",
            customUnlockSnCheck: "/api/flysafe/sn_check",
            customUnlockAccountCheck: "/api/flysafe/account_check?www=v2",
            getRmVideos: "/api/get-rm-videos",
            getRmNav: "/api/get-rm-nav"
        },
        formGaType: {
            DEFAULT: "Submit_fail_0",
            CAPTCHA_VERIFICATION_FAIL: "Submit_fail_1",
            EMAIL_VERIFICATION_FAIL: "Submit_fail_2",
            TERMS_REQUIRE: "Submit_fail_3",
            REQUIRE: "Submit_fail_4",
            MORE_SUBMISSION: "Submit_fail_5",
            SUCCESS: "Submit_success"
        }
    };
    var n = t("#app-config").find(".dui-cfg"),
        r = t("body").data();
    n.each(function(n, r) {
        var o = t(r),
            i = o.data("type"),
            a = o.data("key") || "",
            c = o.data("value") || "";
        i && t.isFunction(e[i]) && (c = "Boolean" === i ? "true" === c || c === !0 : e[i](c)), DUI.Config[a] = c
    });
    for (var o in r) r.hasOwnProperty(o) && (DUI.Config[o] = r[o])
}(window, jQuery),
function e(t, n, r) {
    function o(a, c) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!c && u) return u(a, !0);
                if (i) return i(a, !0);
                var s = new Error("Cannot find module '" + a + "'");
                throw s.code = "MODULE_NOT_FOUND", s
            }
            var l = n[a] = {
                exports: {}
            };
            t[a][0].call(l.exports, function(e) {
                var n = t[a][1][e];
                return o(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[a].exports
    }
    for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
    return o
}({
    1: [function(e, t, n) {
        function r() {
            return {
                a: ["target", "href", "title"],
                abbr: ["title"],
                address: [],
                area: ["shape", "coords", "href", "alt"],
                article: [],
                aside: [],
                audio: ["autoplay", "controls", "loop", "preload", "src"],
                b: [],
                bdi: ["dir"],
                bdo: ["dir"],
                big: [],
                blockquote: ["cite"],
                br: [],
                caption: [],
                center: [],
                cite: [],
                code: [],
                col: ["align", "valign", "span", "width"],
                colgroup: ["align", "valign", "span", "width"],
                dd: [],
                del: ["datetime"],
                details: ["open"],
                div: [],
                dl: [],
                dt: [],
                em: [],
                font: ["color", "size", "face"],
                footer: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                header: [],
                hr: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                ins: ["datetime"],
                li: [],
                mark: [],
                nav: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                section: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                table: ["width", "border", "align", "valign"],
                tbody: ["align", "valign"],
                td: ["width", "colspan", "align", "valign"],
                tfoot: ["align", "valign"],
                th: ["width", "colspan", "align", "valign"],
                thead: ["align", "valign"],
                tr: ["rowspan", "align", "valign"],
                tt: [],
                u: [],
                ul: [],
                video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
            }
        }

        function o(e, t, n) {}

        function i(e, t, n) {}

        function a(e, t, n) {}

        function c(e, t, n) {}

        function u(e) {
            return e.replace(I, "&lt;").replace(U, "&gt;")
        }

        function s(e, t, n, r) {
            if (r = r || k, n = h(n), "href" === t || "src" === t) {
                if (n = C.trim(n), "#" === n) return "#";
                if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "#" !== n[0] && "/" !== n[0]) return ""
            } else if ("background" === t) {
                if (L.lastIndex = 0, L.test(n)) return ""
            } else if ("style" === t) {
                if (T.lastIndex = 0, T.test(n)) return "";
                if (O.lastIndex = 0, O.test(n) && (L.lastIndex = 0, L.test(n))) return "";
                n = r.process(n)
            }
            return n = y(n)
        }

        function l(e) {
            return e.replace(x, "&quot;")
        }

        function f(e) {
            return e.replace(D, '"')
        }

        function g(e) {
            return e.replace(S, function(e, t) {
                return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10))
            })
        }

        function p(e) {
            return e.replace(A, ":").replace(j, " ")
        }

        function d(e) {
            for (var t = "", n = 0, r = e.length; n < r; n++) t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
            return C.trim(t)
        }

        function h(e) {
            return e = f(e), e = g(e), e = p(e), e = d(e)
        }

        function y(e) {
            return e = l(e), e = u(e)
        }

        function m() {
            return ""
        }

        function v(e, t) {
            function n(t) {
                return !!r || C.indexOf(e, t) !== -1
            }
            "function" != typeof t && (t = function() {});
            var r = !Array.isArray(e),
                o = [],
                i = !1;
            return {
                onIgnoreTag: function(e, r, a) {
                    if (n(e)) {
                        if (a.isClosing) {
                            var c = "[/removed]",
                                u = a.position + c.length;
                            return o.push([i !== !1 ? i : a.position, u]), i = !1, c
                        }
                        return i || (i = a.position), "[removed]"
                    }
                    return t(e, r, a)
                },
                remove: function(e) {
                    var t = "",
                        n = 0;
                    return C.forEach(o, function(r) {
                        t += e.slice(n, r[0]), n = r[1]
                    }), t += e.slice(n)
                }
            }
        }

        function _(e) {
            return e.replace(E, "")
        }

        function b(e) {
            var t = e.split("");
            return t = t.filter(function(e) {
                var t = e.charCodeAt(0);
                return 127 !== t && (!(t <= 31) || (10 === t || 13 === t))
            }), t.join("")
        }
        var w = e("cssfilter").FilterCSS,
            C = e("./util"),
            k = new w,
            I = /</g,
            U = />/g,
            x = /"/g,
            D = /&quot;/g,
            S = /&#([a-zA-Z0-9]*);?/gim,
            A = /&colon;?/gim,
            j = /&newline;?/gim,
            L = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
            T = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
            O = /u\s*r\s*l\s*\(.*/gi,
            E = /<!--[\s\S]*?-->/g;
        n.whiteList = r(), n.getDefaultWhiteList = r, n.onTag = o, n.onIgnoreTag = i, n.onTagAttr = a, n.onIgnoreTagAttr = c, n.safeAttrValue = s, n.escapeHtml = u, n.escapeQuote = l, n.unescapeQuote = f, n.escapeHtmlEntities = g, n.escapeDangerHtml5Entities = p, n.clearNonPrintableCharacter = d, n.friendlyAttrValue = h, n.escapeAttrValue = y, n.onIgnoreTagStripAll = m, n.StripTagBody = v, n.stripCommentTag = _, n.stripBlankChar = b, n.cssFilter = k
    }, {
        "./util": 4,
        cssfilter: 8
    }],
    2: [function(e, t, n) {
        function r(e, t) {
            var n = new a(t);
            return n.process(e)
        }
        var o = e("./default"),
            i = e("./parser"),
            a = e("./xss");
        n = t.exports = r, n.FilterXSS = a;
        for (var c in o) n[c] = o[c];
        for (var c in i) n[c] = i[c];
        "function" == typeof define && define.amd && define(function() {
            return t.exports
        }), "undefined" != typeof window && (window.filterXSS = t.exports)
    }, {
        "./default": 1,
        "./parser": 3,
        "./xss": 5
    }],
    3: [function(e, t, n) {
        function r(e) {
            var t = e.indexOf(" ");
            if (t === -1) var n = e.slice(1, -1);
            else var n = e.slice(1, t + 1);
            return n = f.trim(n).toLowerCase(), "/" === n.slice(0, 1) && (n = n.slice(1)), "/" === n.slice(-1) && (n = n.slice(0, -1)), n
        }

        function o(e) {
            return "</" === e.slice(0, 2)
        }

        function i(e, t, n) {
            "user strict";
            var i = "",
                a = 0,
                c = !1,
                u = !1,
                s = 0,
                l = e.length,
                f = "",
                g = "";
            for (s = 0; s < l; s++) {
                var p = e.charAt(s);
                if (c === !1) {
                    if ("<" === p) {
                        c = s;
                        continue
                    }
                } else if (u === !1) {
                    if ("<" === p) {
                        i += n(e.slice(a, s)), c = s, a = s;
                        continue
                    }
                    if (">" === p) {
                        i += n(e.slice(a, c)), f = e.slice(c, s + 1), g = r(f), i += t(c, i.length, g, f, o(f)), a = s + 1, c = !1;
                        continue
                    }
                    if (('"' === p || "'" === p) && "=" === e.charAt(s - 1)) {
                        u = p;
                        continue
                    }
                } else if (p === u) {
                    u = !1;
                    continue
                }
            }
            return a < e.length && (i += n(e.substr(a))), i
        }

        function a(e, t) {
            "user strict";

            function n(e, n) {
                if (e = f.trim(e), e = e.replace(g, "").toLowerCase(), !(e.length < 1)) {
                    var r = t(e, n || "");
                    r && o.push(r)
                }
            }
            for (var r = 0, o = [], i = !1, a = e.length, s = 0; s < a; s++) {
                var p, d, h = e.charAt(s);
                if (i !== !1 || "=" !== h)
                    if (i === !1 || s !== r || '"' !== h && "'" !== h || "=" !== e.charAt(s - 1))
                        if (" " !== h);
                        else {
                            if (i === !1) {
                                if (d = c(e, s), d === -1) {
                                    p = f.trim(e.slice(r, s)), n(p), i = !1, r = s + 1;
                                    continue
                                }
                                s = d - 1;
                                continue
                            }
                            if (d = u(e, s - 1), d === -1) {
                                p = f.trim(e.slice(r, s)), p = l(p), n(i, p), i = !1, r = s + 1;
                                continue
                            }
                        }
                else {
                    if (d = e.indexOf(h, s + 1), d === -1) break;
                    p = f.trim(e.slice(r + 1, d)), n(i, p), i = !1, s = d, r = s + 1
                } else i = e.slice(r, s), r = s + 1
            }
            return r < e.length && (i === !1 ? n(e.slice(r)) : n(i, l(f.trim(e.slice(r))))), f.trim(o.join(" "))
        }

        function c(e, t) {
            for (; t < e.length; t++) {
                var n = e[t];
                if (" " !== n) return "=" === n ? t : -1
            }
        }

        function u(e, t) {
            for (; t > 0; t--) {
                var n = e[t];
                if (" " !== n) return "=" === n ? t : -1
            }
        }

        function s(e) {
            return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1]
        }

        function l(e) {
            return s(e) ? e.substr(1, e.length - 2) : e
        }
        var f = e("./util"),
            g = /[^a-zA-Z0-9_:\.\-]/gim;
        n.parseTag = i, n.parseAttr = a
    }, {
        "./util": 4
    }],
    4: [function(e, t, n) {
        t.exports = {
            indexOf: function(e, t) {
                var n, r;
                if (Array.prototype.indexOf) return e.indexOf(t);
                for (n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            forEach: function(e, t, n) {
                var r, o;
                if (Array.prototype.forEach) return e.forEach(t, n);
                for (r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e)
            },
            trim: function(e) {
                return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
            }
        }
    }, {}],
    5: [function(e, t, n) {
        function r(e) {
            return void 0 === e || null === e
        }

        function o(e) {
            var t = e.indexOf(" ");
            if (t === -1) return {
                html: "",
                closing: "/" === e[e.length - 2]
            };
            e = f.trim(e.slice(t + 1, -1));
            var n = "/" === e[e.length - 1];
            return n && (e = f.trim(e.slice(0, -1))), {
                html: e,
                closing: n
            }
        }

        function i(e) {
            e = e || {}, e.stripIgnoreTag && (e.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), e.onIgnoreTag = c.onIgnoreTagStripAll), e.whiteList = e.whiteList || c.whiteList, e.onTag = e.onTag || c.onTag, e.onTagAttr = e.onTagAttr || c.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || c.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr || c.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || c.safeAttrValue, e.escapeHtml = e.escapeHtml || c.escapeHtml, e.css = e.css || {}, this.options = e, this.cssFilter = new a(e.css)
        }
        var a = e("cssfilter").FilterCSS,
            c = e("./default"),
            u = e("./parser"),
            s = u.parseTag,
            l = u.parseAttr,
            f = e("./util");
        i.prototype.process = function(e) {
            if (e = e || "", e = e.toString(), !e) return "";
            var t = this,
                n = t.options,
                i = n.whiteList,
                a = n.onTag,
                u = n.onIgnoreTag,
                g = n.onTagAttr,
                p = n.onIgnoreTagAttr,
                d = n.safeAttrValue,
                h = n.escapeHtml,
                y = t.cssFilter;
            n.stripBlankChar && (e = c.stripBlankChar(e)), n.allowCommentTag || (e = c.stripCommentTag(e));
            var m = !1;
            if (n.stripIgnoreTagBody) {
                var m = c.StripTagBody(n.stripIgnoreTagBody, u);
                u = m.onIgnoreTag
            }
            var v = s(e, function(e, t, n, c, s) {
                var m = {
                        sourcePosition: e,
                        position: t,
                        isClosing: s,
                        isWhite: n in i
                    },
                    v = a(n, c, m);
                if (!r(v)) return v;
                if (m.isWhite) {
                    if (m.isClosing) return "</" + n + ">";
                    var _ = o(c),
                        b = i[n],
                        w = l(_.html, function(e, t) {
                            var o = f.indexOf(b, e) !== -1,
                                i = g(n, e, t, o);
                            if (!r(i)) return i;
                            if (o) return t = d(n, e, t, y), t ? e + '="' + t + '"' : e;
                            var i = p(n, e, t, o);
                            return r(i) ? void 0 : i
                        }),
                        c = "<" + n;
                    return w && (c += " " + w), _.closing && (c += " /"), c += ">"
                }
                var v = u(n, c, m);
                return r(v) ? h(c) : v
            }, h);
            return m && (v = m.remove(v)), v
        }, t.exports = i
    }, {
        "./default": 1,
        "./parser": 3,
        "./util": 4,
        cssfilter: 8
    }],
    6: [function(e, t, n) {
        function r(e) {
            return void 0 === e || null === e
        }

        function o(e) {
            e = e || {}, e.whiteList = e.whiteList || i.whiteList, e.onAttr = e.onAttr || i.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || i.onIgnoreAttr, this.options = e
        }
        var i = e("./default"),
            a = e("./parser");
        e("./util");
        o.prototype.process = function(e) {
            if (e = e || "", e = e.toString(), !e) return "";
            var t = this,
                n = t.options,
                o = n.whiteList,
                i = n.onAttr,
                c = n.onIgnoreAttr,
                u = a(e, function(e, t, n, a, u) {
                    var s = o[n],
                        l = !1;
                    s === !0 ? l = s : "function" == typeof s ? l = s(a) : s instanceof RegExp && (l = s.test(a)), l !== !0 && (l = !1);
                    var f = {
                        position: t,
                        sourcePosition: e,
                        source: u,
                        isWhite: l
                    };
                    if (l) {
                        var g = i(n, a, f);
                        return r(g) ? n + ":" + a : g
                    }
                    var g = c(n, a, f);
                    if (!r(g)) return g
                });
            return u
        }, t.exports = o
    }, {
        "./default": 7,
        "./parser": 9,
        "./util": 10
    }],
    7: [function(e, t, n) {
        function r() {
            var e = {};
            return e["align-content"] = !1, e["align-items"] = !1, e["align-self"] = !1, e["alignment-adjust"] = !1, e["alignment-baseline"] = !1, e.all = !1, e["anchor-point"] = !1, e.animation = !1, e["animation-delay"] = !1, e["animation-direction"] = !1, e["animation-duration"] = !1, e["animation-fill-mode"] = !1, e["animation-iteration-count"] = !1, e["animation-name"] = !1, e["animation-play-state"] = !1, e["animation-timing-function"] = !1, e.azimuth = !1, e["backface-visibility"] = !1, e.background = !0, e["background-attachment"] = !0, e["background-clip"] = !0, e["background-color"] = !0, e["background-image"] = !0, e["background-origin"] = !0, e["background-position"] = !0, e["background-repeat"] = !0, e["background-size"] = !0, e["baseline-shift"] = !1, e.binding = !1, e.bleed = !1, e["bookmark-label"] = !1, e["bookmark-level"] = !1, e["bookmark-state"] = !1, e.border = !0, e["border-bottom"] = !0, e["border-bottom-color"] = !0, e["border-bottom-left-radius"] = !0, e["border-bottom-right-radius"] = !0, e["border-bottom-style"] = !0, e["border-bottom-width"] = !0, e["border-collapse"] = !0, e["border-color"] = !0, e["border-image"] = !0, e["border-image-outset"] = !0, e["border-image-repeat"] = !0, e["border-image-slice"] = !0, e["border-image-source"] = !0, e["border-image-width"] = !0, e["border-left"] = !0, e["border-left-color"] = !0, e["border-left-style"] = !0, e["border-left-width"] = !0, e["border-radius"] = !0, e["border-right"] = !0, e["border-right-color"] = !0, e["border-right-style"] = !0, e["border-right-width"] = !0, e["border-spacing"] = !0, e["border-style"] = !0, e["border-top"] = !0, e["border-top-color"] = !0, e["border-top-left-radius"] = !0, e["border-top-right-radius"] = !0, e["border-top-style"] = !0, e["border-top-width"] = !0, e["border-width"] = !0, e.bottom = !1, e["box-decoration-break"] = !0, e["box-shadow"] = !0, e["box-sizing"] = !0, e["box-snap"] = !0, e["box-suppress"] = !0, e["break-after"] = !0, e["break-before"] = !0, e["break-inside"] = !0, e["caption-side"] = !1, e.chains = !1, e.clear = !0, e.clip = !1, e["clip-path"] = !1, e["clip-rule"] = !1, e.color = !0, e["color-interpolation-filters"] = !0, e["column-count"] = !1, e["column-fill"] = !1, e["column-gap"] = !1, e["column-rule"] = !1, e["column-rule-color"] = !1, e["column-rule-style"] = !1, e["column-rule-width"] = !1, e["column-span"] = !1, e["column-width"] = !1, e.columns = !1, e.contain = !1, e.content = !1, e["counter-increment"] = !1, e["counter-reset"] = !1, e["counter-set"] = !1, e.crop = !1, e.cue = !1, e["cue-after"] = !1, e["cue-before"] = !1, e.cursor = !1, e.direction = !1, e.display = !0, e["display-inside"] = !0, e["display-list"] = !0, e["display-outside"] = !0, e["dominant-baseline"] = !1, e.elevation = !1, e["empty-cells"] = !1, e.filter = !1, e.flex = !1, e["flex-basis"] = !1, e["flex-direction"] = !1, e["flex-flow"] = !1, e["flex-grow"] = !1, e["flex-shrink"] = !1, e["flex-wrap"] = !1, e["float"] = !1, e["float-offset"] = !1, e["flood-color"] = !1, e["flood-opacity"] = !1, e["flow-from"] = !1, e["flow-into"] = !1, e.font = !0, e["font-family"] = !0, e["font-feature-settings"] = !0, e["font-kerning"] = !0, e["font-language-override"] = !0, e["font-size"] = !0, e["font-size-adjust"] = !0, e["font-stretch"] = !0, e["font-style"] = !0, e["font-synthesis"] = !0, e["font-variant"] = !0, e["font-variant-alternates"] = !0, e["font-variant-caps"] = !0, e["font-variant-east-asian"] = !0, e["font-variant-ligatures"] = !0, e["font-variant-numeric"] = !0, e["font-variant-position"] = !0, e["font-weight"] = !0, e.grid = !1, e["grid-area"] = !1, e["grid-auto-columns"] = !1, e["grid-auto-flow"] = !1, e["grid-auto-rows"] = !1, e["grid-column"] = !1, e["grid-column-end"] = !1, e["grid-column-start"] = !1, e["grid-row"] = !1, e["grid-row-end"] = !1, e["grid-row-start"] = !1, e["grid-template"] = !1, e["grid-template-areas"] = !1, e["grid-template-columns"] = !1, e["grid-template-rows"] = !1, e["hanging-punctuation"] = !1, e.height = !0, e.hyphens = !1, e.icon = !1, e["image-orientation"] = !1, e["image-resolution"] = !1, e["ime-mode"] = !1, e["initial-letters"] = !1, e["inline-box-align"] = !1, e["justify-content"] = !1, e["justify-items"] = !1, e["justify-self"] = !1, e.left = !1, e["letter-spacing"] = !0, e["lighting-color"] = !0, e["line-box-contain"] = !1, e["line-break"] = !1, e["line-grid"] = !1, e["line-height"] = !1, e["line-snap"] = !1, e["line-stacking"] = !1, e["line-stacking-ruby"] = !1, e["line-stacking-shift"] = !1, e["line-stacking-strategy"] = !1, e["list-style"] = !0, e["list-style-image"] = !0, e["list-style-position"] = !0, e["list-style-type"] = !0, e.margin = !0, e["margin-bottom"] = !0, e["margin-left"] = !0, e["margin-right"] = !0, e["margin-top"] = !0, e["marker-offset"] = !1, e["marker-side"] = !1, e.marks = !1, e.mask = !1, e["mask-box"] = !1, e["mask-box-outset"] = !1, e["mask-box-repeat"] = !1, e["mask-box-slice"] = !1, e["mask-box-source"] = !1, e["mask-box-width"] = !1, e["mask-clip"] = !1, e["mask-image"] = !1, e["mask-origin"] = !1, e["mask-position"] = !1, e["mask-repeat"] = !1, e["mask-size"] = !1, e["mask-source-type"] = !1, e["mask-type"] = !1, e["max-height"] = !0, e["max-lines"] = !1, e["max-width"] = !0, e["min-height"] = !0, e["min-width"] = !0, e["move-to"] = !1, e["nav-down"] = !1, e["nav-index"] = !1, e["nav-left"] = !1, e["nav-right"] = !1, e["nav-up"] = !1, e["object-fit"] = !1, e["object-position"] = !1, e.opacity = !1, e.order = !1, e.orphans = !1, e.outline = !1, e["outline-color"] = !1, e["outline-offset"] = !1, e["outline-style"] = !1, e["outline-width"] = !1, e.overflow = !1, e["overflow-wrap"] = !1, e["overflow-x"] = !1, e["overflow-y"] = !1, e.padding = !0, e["padding-bottom"] = !0, e["padding-left"] = !0, e["padding-right"] = !0, e["padding-top"] = !0, e.page = !1, e["page-break-after"] = !1, e["page-break-before"] = !1, e["page-break-inside"] = !1, e["page-policy"] = !1, e.pause = !1, e["pause-after"] = !1, e["pause-before"] = !1, e.perspective = !1, e["perspective-origin"] = !1, e.pitch = !1, e["pitch-range"] = !1, e["play-during"] = !1, e.position = !1, e["presentation-level"] = !1, e.quotes = !1, e["region-fragment"] = !1, e.resize = !1, e.rest = !1, e["rest-after"] = !1, e["rest-before"] = !1, e.richness = !1, e.right = !1, e.rotation = !1, e["rotation-point"] = !1, e["ruby-align"] = !1, e["ruby-merge"] = !1, e["ruby-position"] = !1, e["shape-image-threshold"] = !1, e["shape-outside"] = !1, e["shape-margin"] = !1, e.size = !1, e.speak = !1, e["speak-as"] = !1, e["speak-header"] = !1, e["speak-numeral"] = !1, e["speak-punctuation"] = !1, e["speech-rate"] = !1, e.stress = !1, e["string-set"] = !1, e["tab-size"] = !1, e["table-layout"] = !1, e["text-align"] = !0, e["text-align-last"] = !0, e["text-combine-upright"] = !0, e["text-decoration"] = !0, e["text-decoration-color"] = !0, e["text-decoration-line"] = !0, e["text-decoration-skip"] = !0, e["text-decoration-style"] = !0, e["text-emphasis"] = !0, e["text-emphasis-color"] = !0, e["text-emphasis-position"] = !0, e["text-emphasis-style"] = !0, e["text-height"] = !0, e["text-indent"] = !0, e["text-justify"] = !0, e["text-orientation"] = !0, e["text-overflow"] = !0, e["text-shadow"] = !0, e["text-space-collapse"] = !0, e["text-transform"] = !0, e["text-underline-position"] = !0, e["text-wrap"] = !0, e.top = !1, e.transform = !1, e["transform-origin"] = !1, e["transform-style"] = !1, e.transition = !1, e["transition-delay"] = !1, e["transition-duration"] = !1, e["transition-property"] = !1, e["transition-timing-function"] = !1, e["unicode-bidi"] = !1, e["vertical-align"] = !1, e.visibility = !1, e["voice-balance"] = !1, e["voice-duration"] = !1, e["voice-family"] = !1, e["voice-pitch"] = !1, e["voice-range"] = !1, e["voice-rate"] = !1, e["voice-stress"] = !1, e["voice-volume"] = !1, e.volume = !1, e["white-space"] = !1, e.widows = !1, e.width = !0, e["will-change"] = !1, e["word-break"] = !0, e["word-spacing"] = !0, e["word-wrap"] = !0, e["wrap-flow"] = !1, e["wrap-through"] = !1, e["writing-mode"] = !1, e["z-index"] = !1, e
        }

        function o(e, t, n) {}

        function i(e, t, n) {}
        n.whiteList = r(), n.getDefaultWhiteList = r, n.onAttr = o, n.onIgnoreAttr = i
    }, {}],
    8: [function(e, t, n) {
        function r(e, t) {
            var n = new i(t);
            return n.process(e)
        }
        var o = e("./default"),
            i = e("./css");
        n = t.exports = r, n.FilterCSS = i;
        for (var a in o) n[a] = o[a];
        "function" == typeof define && define.amd && define(function() {
            return t.exports
        }), "undefined" != typeof window && (window.filterCSS = t.exports)
    }, {
        "./css": 6,
        "./default": 7
    }],
    9: [function(e, t, n) {
        function r(e, t) {
            function n() {
                if (!i) {
                    var n = o.trim(e.slice(a, c)),
                        r = n.indexOf(":");
                    if (r !== -1) {
                        var s = o.trim(n.slice(0, r)),
                            l = o.trim(n.slice(r + 1));
                        if (s) {
                            var f = t(a, u.length, s, l, n);
                            f && (u += f + "; ")
                        }
                    }
                }
                a = c + 1
            }
            e = o.trimRight(e), ";" !== e[e.length - 1] && (e += ";");
            for (var r = e.length, i = !1, a = 0, c = 0, u = ""; c < r; c++) {
                var s = e[c];
                if ("/" === s && "*" === e[c + 1]) {
                    var l = e.indexOf("*/", c + 2);
                    if (l === -1) break;
                    c = l + 1, a = c + 1, i = !1
                } else "(" === s ? i = !0 : ")" === s ? i = !1 : ";" === s ? i || n() : "\n" === s && n()
            }
            return o.trim(u)
        }
        var o = e("./util");
        t.exports = r
    }, {
        "./util": 10
    }],
    10: [function(e, t, n) {
        t.exports = {
            indexOf: function(e, t) {
                var n, r;
                if (Array.prototype.indexOf) return e.indexOf(t);
                for (n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            forEach: function(e, t, n) {
                var r, o;
                if (Array.prototype.forEach) return e.forEach(t, n);
                for (r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e)
            },
            trim: function(e) {
                return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
            },
            trimRight: function(e) {
                return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "")
            }
        }
    }, {}]
}, {}, [2]),
function(e, t) {
    if (e.DUI = "undefined" == typeof DUI ? {} : DUI, !e.location.host) {
        var n = e.location;
        e.location.host = n.hostname + (n.port ? ":" + n.port : "")
    }
    e.location.origin || (e.location.origin = e.location.protocol + "//" + e.location.host), DUI.page = function(e) {
        var n = {
                params: {},
                init: function() {},
                ready: function() {},
                addViews: function() {
                    return {}
                },
                bind: function() {
                    return {}
                },
                helper: {},
                render: function(e) {
                    var n = this;
                    return t.isArray(e) || (e = [e]), t.each(e, function(e, t) {
                        var r = n.layouts[t];
                        r && r.call(n, t)
                    }), n
                },
                trigger: function(e) {
                    var n = this;
                    return t.isArray(e) || (e = [e]), t.each(e, function(e, t) {
                        var r = n.events[t];
                        r && r.call(n, {
                            event: t,
                            preventDefault: function() {}
                        })
                    }), n
                },
                notify: function() {
                    function e(e, n) {
                        t.isFunction(r.events[e]) && r.events[e].call(r, n)
                    }
                    t(document).change(function(n) {
                        var r = t(n.target),
                            o = r.attr("dui-change");
                        e(o)
                    }), t(document).click(function(n) {
                        var r = t(n.target),
                            o = r.attr("dui-click");
                        e(o, n)
                    })
                }
            },
            r = t.extend({}, n, e);
        return ["init", "addViews", "bind", "notify", "ready"].forEach(function(e) {
            var t = r,
                n = r[e].call(t, {
                    params: r.params
                });
            "addViews" === e ? r.layouts = t.layouts = n : "bind" === e && (r.events = t.events = n)
        }), r
    }, t.extend(DUI, {
        Template: {
            render: function(e, n, r) {
                var o = e;
                r && r.key || (r = t.extend({}, r, {
                    key: "{{key}}|{{!key}}"
                }));
                for (var i in n) {
                    var a = r.key.replace("key", i),
                        c = new RegExp(a, "g");
                    n[i] = "undefined" == typeof n[i] || null === n[i] ? "" : n[i];
                    var u = o.match(c) || [];
                    t.each(u, function(e, t) {
                        t.indexOf("!" + i) == -1 && (n[i] = filterXSS(n[i])), o = o.replace(t, n[i])
                    })
                }
                return o = o.replace(/{{.*}}/g, "")
            },
            uri: function(e, t) {
                for (var n in t) e = e.replace(":" + n, t[n]);
                return e
            },
            redirect: function(e) {
                var t = "en" == DUI.Lang ? "" : "/" + DUI.Lang;
                return e.replace(":locale", t)
            }
        },
        Validate: {
            email: function(e) {
                return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g.test(e)
            },
            length: function(e, t, n) {
                return !("" === e || e.length < t || e.length > n)
            }
        },
        I18n: {
            locale: DUI.Config.locale,
            lang: DUI.Config.lang,
            url: function(e) {
                var t = DUI.Localize.getCountryUrlPrefix();
                return e.replace("/{locale}", t)
            },
            store_url: function(t) {
                var n = e.location || {},
                    r = document.domain,
                    o = r.substring(0, r.indexOf(".")),
                    i = n.port ? n.origin.replace(":" + n.port, "") : n.origin,
                    a = i.replace(o, "store");
                return /\/$/.test(a) || (a += "/"), a + (t || "")
            }
        },
        Storage: {
            setItem: function(e, n, r) {
                if (localStorage) {
                    var o = !1;
                    try {
                        localStorage.setItem(e, n)
                    } catch (i) {
                        o = !0, t.isFunction(r) || ("cn" == DUI.lang ? alert("您处在无痕浏览，请关闭无痕浏览模式") : alert("You are in inprivate browsing, close the inprivate browsing mode"))
                    }
                    t.isFunction(r) && r.call(this, o)
                } else t.cookie && t.isNumeric(r) && t.cookie.set(e, n, parseInt(r) || 7)
            },
            setJSON: function(e, t, n) {
                var r = "";
                try {
                    r = JSON.stringify(t)
                } catch (o) {
                    console.log(o)
                }
                this.setItem(e, r, n)
            },
            getItem: function(e, n) {
                if (localStorage) {
                    var r = localStorage.getItem(e),
                        o = null;
                    if ("json" == n) {
                        try {
                            o = JSON.parse(r)
                        } catch (i) {
                            o = null
                        }
                        return o
                    }
                    return r
                }
                if (t.cookie) return t.cookie.get(e)
            },
            getJSON: function(e) {
                return this.getItem(e, "json")
            },
            removeItem: function(e) {
                localStorage ? localStorage.removeItem(e) : t.cookie && t.cookie.remove(e)
            }
        },
        Async: {
            parallel: function(e, t) {
                var n = e.length,
                    r = 0,
                    o = [],
                    i = null,
                    a = function(e, a) {
                        r += 1, o.push(a), e && (i || (i = []), i.push(e)), r >= n && t(i, o)
                    };
                e.forEach(function(e) {
                    "function" == typeof e && e.call(DUI, a)
                })
            }
        },
        getUrlParam: function(e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                n = window.location.search.substr(1).match(t);
            return null != n ? unescape(n[2]) : ""
        },
        Captcha: {
            isCaptchaNeeded: !0,
            validateParams: {},
            init: function(e, n) {
                DUI.Captcha.getCaptchaNeeded(function() {
                    DUI.Captcha.isCaptchaNeeded === !1 ? (DUI.Captcha.hide(), t("#captcha-input").css("display", "none")) : DUI.Captcha._loadScript(function(t) {
                        if (200 !== t) try {
                            var n = JSON.stringify({
                                type: "front-end",
                                title: "阿里云验证码javascript脚本加载失败",
                                url: window.location.href,
                                stack: t
                            }, !1, 4);
                            Raven.captureException(new Error(n))
                        } catch (r) {}
                        DUI.Captcha._init(e)
                    }), n && n()
                })
            },
            _init: function(e) {
                if (DUI.Captcha.formCaptcha) return DUI.Captcha._init(e);
                DUI.Captcha._pass = !1;
                var n = DUI.Config.use_mobile ? DUI.Config.aliCaptcha.appkeyForM : DUI.Config.aliCaptcha.appkeyForPC,
                    r = DUI.Config.use_mobile ? DUI.Config.aliCaptcha.sceneForM : DUI.Config.aliCaptcha.sceneForPC,
                    o = [n, (new Date).getTime(), Math.random()].join(":"),
                    i = {
                        renderTo: e.renderDom,
                        appkey: n,
                        scene: r,
                        token: o,
                        elementID: e.recordDomsId,
                        callback: function(e) {
                            var i = {
                                token: o,
                                sessionid: e.csessionid,
                                scene: r,
                                appkey: n,
                                sig: e.sig
                            };
                            "pass" !== e.value && 0 !== e.code || (DUI.Captcha._pass = !0, t("#captcha-input").val("pass").trigger("keyup")), DUI.Captcha.validateParams = i
                        }
                    };
                DUI.Config.use_mobile ? (DUI.Config.captchaLangMapForM[DUI.Config.lang] ? i.language = DUI.Config.captchaLangMapForM[DUI.Config.lang] : i.language = DUI.Config.lang, i.bannerHidden = !1, DUI.Captcha.formCaptcha = NoCaptcha.init(i), NoCaptcha.setEnabled(!0), DUI.Captcha.formCaptcha.reset(), DUI.Config.captchaLangMapForM[DUI.Config.lang] || (NoCaptcha.upLang(DUI.Config.lang, window.captchaTranslation || {}), DUI.Captcha.formCaptcha.reset())) : (i.timeout = 3e3, i.times = 5, i.customWidth = e.width || 320, i.language = DUI.Config.captchaLangMapForPC[DUI.Config.lang], DUI.Captcha.formCaptcha = new noCaptcha(i))
            },
            reload: function() {
                DUI.Captcha.formCaptcha && (DUI.Config.use_mobile ? DUI.Captcha.formCaptcha.reset() : DUI.Captcha.formCaptcha.reload())
            },
            hide: function() {
                DUI.Captcha.formCaptcha && DUI.Captcha.formCaptcha.hide()
            },
            show: function() {
                DUI.Captcha.formCaptcha && DUI.Captcha.formCaptcha.show()
            },
            destory: function() {
                DUI.Captcha.formCaptcha && DUI.Captcha.formCaptcha.destroy()
            },
            getResult: function() {
                return DUI.Captcha.isCaptchaNeeded === !1 || DUI.Captcha._pass
            },
            getCaptchaNeeded: function(e) {
                t.getJSON(DUI.API._helper.getApi("captchaNeeded"), function(t) {
                    return DUI.Captcha.isCaptchaNeeded = t && t.needed, e && e(t)
                })
            },
            _loadScript: function(e) {
                var n = {
                        lang: DUI.Localize.getCountryUrlPrefix(),
                        getLocation: function(e) {
                            t.getJSON(DUI.API._helper.getApi("flySafeIpLocation"), function(t) {
                                return e(t)
                            })
                        },
                        loadScript: function(e, n) {
                            var r = this.getFormatTime();
                            t.getScript(e + "?t=" + r).done(function() {
                                n(200)
                            }).fail(function(e) {
                                n(e)
                            })
                        },
                        getFormatTime: function() {
                            var e = new Date,
                                t = e.getFullYear(),
                                n = e.getMonth() + 1,
                                r = e.getDate(),
                                o = e.getHours();
                            return n = 1 == n.toString().length ? "0" + n : n, r = 1 == r.toString().length ? "0" + r : r, o = 1 == o.toString().length ? "0" + o : o, "" + t + n + r + o
                        }
                    },
                    r = {
                        "cn-pc": "//g.alicdn.com/sd/ncpc/nc.js",
                        "foreign-pc": "//aeis.alicdn.com/sd/ncpc/nc.js",
                        "cn-m": "//g.alicdn.com/sd/nch5/index.js",
                        "foreign-m": "//aeis.alicdn.com/sd/nch5/index.js"
                    };
                n.getLocation(function(t) {
                    var o = "CN" === t.country ? "cn-" : "foreign-";
                    o += DUI.Config.use_mobile ? "m" : "pc", n.loadScript(r[o], e)
                })
            }
        }
    }), t(function() {
        DUI.Config.use_mobile ? t("[dui-m-src],[dui-m-data-layzr]").each(function(e, n) {
            t(n).attr("src", t(n).attr("dui-m-src") || t(n).attr("dui-m-data-layzr"))
        }) : t("[dui-pc-src],[dui-pc-data-layzr]").each(function(e, n) {
            t(n).attr("src", t(n).attr("dui-pc-src") || t(n).attr("dui-pc-data-layzr"))
        })
    }), t.fn.render = function(e) {
        var n = {
                script: !0,
                getData: function() {
                    return []
                },
                to: function(e, t) {
                    return r.script ? t ? t.append(e) : void 0 : t.replaceWith(e)
                },
                finish: function(e) {
                    r.script || e.removeClass("hidden")
                }
            },
            r = t.extend(n, e),
            o = t(this).context;
        t(this).each(function(e, n) {
            var i = t(n).html(),
                a = r.getData(),
                c = t(n).data("to"),
                u = [];
            if (!r.script) {
                var s = t(n).data("dui-tpl-ref");
                i = s || t(n).find(".dui-tpl"), s || t(n).data("dui-tpl-ref", i)
            }
            c = c ? t(o).find(c) : t(n).parent(), t.isArray(a) || (a = [a]), t.each(a, function(e, n) {
                r.script ? u.push(DUI.Template.render(i, n)) : i.each(function(e, o) {
                    var i = t(o),
                        a = DUI.Template.render(o.outerHTML, n);
                    a = a.replace(/dui-lazy-/g, "").replace("dui-tpl", ""), r.to(a, i)
                })
            }), r.script && r.to(u.join("").trim(), c), r.finish(t(n))
        })
    }, t.fn.formValued = function(e) {
        var n = t(this);
        return e = e || {}, {
            get: function() {
                var r = {},
                    o = n.find(":disabled");
                o.prop("disabled", !1);
                var i = n.serializeArray();
                return o.prop("disabled", !0), t.each(i, function(t, o) {
                    var i = e[o.name];
                    if (o.value = o.value.replace(/"/g, '\\"'), i === !1) return !0;
                    var a = null;
                    if (i && i.get && (a = n.find("[name='" + o.name + "']"), o.value = i.get(a, o.value)), "" == o.value) {
                        a = n.find("[name='" + o.name + "']").get(0);
                        var c = "number" == (a.type || "").toLowerCase();
                        c && a.validity && a.validity.badInput ? r[o.name] = "invalid" : r[o.name] = o.value
                    } else r[o.name] = o.value
                }), r
            },
            set: function(n) {
                var r = "input,textarea,select",
                    o = t(r);
                o.each(function(r, o) {
                    var i = t(o),
                        a = i.attr("name") || i.data("name"),
                        c = n[a],
                        u = e[a];
                    if (u === !1) return !0;
                    if (u && u.set) {
                        var s = u.set(c, i);
                        s && i.val(s)
                    } else i.val(c)
                })
            }
        }
    }
}(window, jQuery),
function(e) {
    DUI.Cookie = e.cookie = {
        support: navigator.cookieEnabled,
        set: function(e, t, n) {
            if (this.support) {
                n = n || {};
                var r = "";
                if ("number" == typeof n) {
                    var o = n;
                    n = {
                        expires: o
                    }
                }
                if (n.expires || (n.expires = 3), n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
                    var i;
                    "number" == typeof n.expires ? (i = new Date, i.setTime(i.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : i = n.expires, r = "; expires=" + i.toUTCString()
                }
                var a = n.path ? "; path=" + n.path : "",
                    c = n.domain ? "; domain=" + n.domain : "",
                    u = n.secure ? "; secure" : "";
                return document.cookie = [e, "=", encodeURIComponent(t), r, a, c, u].join(""), !0
            }
            return console.log("cookie not supported !"), !1
        },
        get: function(e) {
            if (this.support) {
                for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                    var r = jQuery.trim(t[n]);
                    if (r.substring(0, e.length + 1) == e + "=") return decodeURIComponent(r.substring(e.length + 1))
                }
                return null
            }
            return console.log("cookie not supported !"), null
        },
        remove: function(e, t) {
            return this.support ? (t = t || {}, t.expires = -1, !!this.set(e, "", t)) : (console.log("cookie not supported !"), !1)
        }
    }
}(jQuery),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, e.OfficialScript = t())
}(this, function() {
    "use strict";

    function e(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function t(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function n(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e
    }

    function r(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports
    }

    function o(e) {
        return Object.prototype.toString.call(e).slice(8, -1)
    }

    function i() {
        this.__data__ = [], this.size = 0
    }

    function a(e, t) {
        return e === t || e !== e && t !== t
    }

    function c(e, t) {
        for (var n = e.length; n--;)
            if (Pe(e[n][0], t)) return n;
        return -1
    }

    function u(e) {
        var t = this.__data__,
            n = Fe(t, e);
        if (n < 0) return !1;
        var r = t.length - 1;
        return n == r ? t.pop() : Ne.call(t, n, 1), --this.size, !0
    }

    function s(e) {
        var t = this.__data__,
            n = Fe(t, e);
        return n < 0 ? void 0 : t[n][1]
    }

    function l(e) {
        return Fe(this.__data__, e) > -1
    }

    function f(e, t) {
        var n = this.__data__,
            r = Fe(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
    }

    function g(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    function p() {
        this.__data__ = new He, this.size = 0
    }

    function d(e) {
        var t = this.__data__,
            n = t["delete"](e);
        return this.size = t.size, n
    }

    function h(e) {
        return this.__data__.get(e)
    }

    function y(e) {
        return this.__data__.has(e)
    }

    function m(e) {
        var t = ot.call(e, at),
            n = e[at];
        try {
            e[at] = void 0;
            var r = !0
        } catch (o) {}
        var i = it.call(e);
        return r && (t ? e[at] = n : delete e[at]), i
    }

    function v(e) {
        return st.call(e)
    }

    function _(e) {
        return null == e ? void 0 === e ? gt : ft : pt && pt in Object(e) ? ct(e) : lt(e)
    }

    function b(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }

    function w(e) {
        if (!ht(e)) return !1;
        var t = dt(e);
        return t == mt || t == vt || t == yt || t == _t
    }

    function C(e) {
        return !!kt && kt in e
    }

    function k(e) {
        if (null != e) {
            try {
                return xt.call(e)
            } catch (t) {}
            try {
                return e + ""
            } catch (t) {}
        }
        return ""
    }

    function I(e) {
        if (!ht(e) || It(e)) return !1;
        var t = bt(e) ? Et : At;
        return t.test(Dt(e))
    }

    function U(e, t) {
        return null == e ? void 0 : e[t]
    }

    function x(e, t) {
        var n = Rt(e, t);
        return zt(n) ? n : void 0
    }

    function D() {
        this.__data__ = $t ? $t(null) : {}, this.size = 0
    }

    function S(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }

    function A(e) {
        var t = this.__data__;
        if ($t) {
            var n = t[e];
            return n === Wt ? void 0 : n
        }
        return Vt.call(t, e) ? t[e] : void 0
    }

    function j(e) {
        var t = this.__data__;
        return $t ? void 0 !== t[e] : Gt.call(t, e)
    }

    function L(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = $t && void 0 === t ? Zt : t, this
    }

    function T(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    function O() {
        this.size = 0, this.__data__ = {
            hash: new Xt,
            map: new(Mt || He),
            string: new Xt
        }
    }

    function E(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }

    function z(e, t) {
        var n = e.__data__;
        return tn(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    }

    function R(e) {
        var t = nn(this, e)["delete"](e);
        return this.size -= t ? 1 : 0, t
    }

    function P(e) {
        return nn(this, e).get(e)
    }

    function F(e) {
        return nn(this, e).has(e)
    }

    function M(e, t) {
        var n = nn(this, e),
            r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
    }

    function N(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    function $(e, t) {
        var n = this.__data__;
        if (n instanceof He) {
            var r = n.__data__;
            if (!Mt || r.length < sn - 1) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new un(r)
        }
        return n.set(e, t), this.size = n.size, this
    }

    function B(e) {
        var t = this.__data__ = new He(e);
        this.size = t.size
    }

    function q(e, t, n) {
        "__proto__" == t && pn ? pn(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }

    function W(e, t, n) {
        (void 0 === n || Pe(e[t], n)) && (void 0 !== n || t in e) || dn(e, t, n)
    }

    function H(e) {
        return function(t, n, r) {
            for (var o = -1, i = Object(t), a = r(t), c = a.length; c--;) {
                var u = a[e ? c : ++o];
                if (n(i[u], u, i) === !1) break
            }
            return t
        }
    }

    function V(e) {
        var t = new e.constructor(e.byteLength);
        return new wn(t).set(new wn(e)), t
    }

    function K(e, t) {
        var n = t ? Cn(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
    }

    function J(e, t) {
        var n = -1,
            r = e.length;
        for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
        return t
    }

    function G(e, t) {
        return function(n) {
            return e(t(n))
        }
    }

    function Q(e) {
        var t = e && e.constructor,
            n = "function" == typeof t && t.prototype || Ln;
        return e === n
    }

    function Z(e) {
        return "function" != typeof e.constructor || Tn(e) ? {} : Dn(jn(e))
    }

    function Y(e) {
        return null != e && "object" == typeof e
    }

    function X(e) {
        return En(e) && dt(e) == zn
    }

    function ee(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Wn
    }

    function te(e) {
        return null != e && Hn(e.length) && !bt(e)
    }

    function ne(e) {
        return En(e) && Vn(e)
    }

    function re() {
        return !1
    }

    function oe(e) {
        if (!En(e) || dt(e) != Qn) return !1;
        var t = jn(e);
        if (null === t) return !0;
        var n = er.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && Xn.call(n) == tr
    }

    function ie(e) {
        return En(e) && Hn(e.length) && !!Dr[dt(e)]
    }

    function ae(e) {
        return function(t) {
            return e(t)
        }
    }

    function ce(e, t) {
        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
    }

    function ue(e, t, n) {
        var r = e[t];
        Rr.call(e, t) && Pe(r, n) && (void 0 !== n || t in e) || dn(e, t, n)
    }

    function se(e, t, n, r) {
        var o = !n;
        n || (n = {});
        for (var i = -1, a = t.length; ++i < a;) {
            var c = t[i],
                u = r ? r(n[c], e[c], c, n, e) : void 0;
            void 0 === u && (u = e[c]), o ? dn(n, c, u) : Pr(n, c, u)
        }
        return n
    }

    function le(e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r
    }

    function fe(e, t) {
        var n = typeof e;
        return t = null == t ? Nr : t, !!t && ("number" == n || "symbol" != n && $r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }

    function ge(e, t) {
        var n = qn(e),
            r = !n && $n(e),
            o = !n && !r && Gn(e),
            i = !n && !r && !o && Or(e),
            a = n || r || o || i,
            c = a ? Mr(e.length, String) : [],
            u = c.length;
        for (var s in e) !t && !Wr.call(e, s) || a && ("length" == s || o && ("offset" == s || "parent" == s) || i && ("buffer" == s || "byteLength" == s || "byteOffset" == s) || Br(s, u)) || c.push(s);
        return c
    }

    function pe(e) {
        var t = [];
        if (null != e)
            for (var n in Object(e)) t.push(n);
        return t
    }

    function de(e) {
        if (!ht(e)) return Vr(e);
        var t = Tn(e),
            n = [];
        for (var r in e)("constructor" != r || !t && Jr.call(e, r)) && n.push(r);
        return n
    }

    function he(e) {
        return Vn(e) ? Hr(e, !0) : Gr(e)
    }

    function ye(e) {
        return Fr(e, Qr(e))
    }

    function me(e, t, n, r, o, i, a) {
        var c = Er(e, n),
            u = Er(t, n),
            s = a.get(u);
        if (s) return void hn(e, n, s);
        var l = i ? i(c, u, n + "", e, t, a) : void 0,
            f = void 0 === l;
        if (f) {
            var g = qn(u),
                p = !g && Gn(u),
                d = !g && !p && Or(u);
            l = u, g || p || d ? qn(c) ? l = c : Kn(c) ? l = In(c) : p ? (f = !1, l = _n(u, !0)) : d ? (f = !1, l = kn(u, !0)) : l = [] : nr(u) || $n(u) ? (l = c, $n(c) ? l = Zr(c) : ht(c) && !bt(c) || (l = On(u))) : f = !1
        }
        f && (a.set(u, l), o(l, u, r, i, a), a["delete"](u)), hn(e, n, l)
    }

    function ve(e, t, n, r, o) {
        e !== t && vn(t, function(i, a) {
            if (o || (o = new fn), ht(i)) Yr(e, t, a, n, ve, r, o);
            else {
                var c = r ? r(Er(e, a), i, a + "", e, t, o) : void 0;
                void 0 === c && (c = i), hn(e, a, c)
            }
        }, Qr)
    }

    function _e(e) {
        return e
    }

    function be(e, t, n) {
        switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }

    function we(e, t, n) {
        return t = no(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var r = arguments, o = -1, i = no(r.length - t, 0), a = Array(i); ++o < i;) a[o] = r[t + o];
                o = -1;
                for (var c = Array(t + 1); ++o < t;) c[o] = r[o];
                return c[t] = n(a), to(e, this, c)
            }
    }

    function Ce(e) {
        return function() {
            return e
        }
    }

    function ke(e) {
        var t = 0,
            n = 0;
        return function() {
            var r = so(),
                o = uo - (r - n);
            if (n = r, o > 0) {
                if (++t >= co) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }

    function Ie(e, t) {
        return go(ro(e, t, eo), e + "")
    }

    function Ue(e, t, n) {
        if (!ht(n)) return !1;
        var r = typeof t;
        return !!("number" == r ? Vn(n) && Br(t, n.length) : "string" == r && t in n) && Pe(n[t], e)
    }

    function xe(e) {
        return po(function(t, n) {
            var r = -1,
                o = n.length,
                i = o > 1 ? n[o - 1] : void 0,
                a = o > 2 ? n[2] : void 0;
            for (i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0, a && ho(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o;) {
                var c = n[r];
                c && e(t, c, r, i)
            }
            return t
        })
    }
    var De = e,
        Se = n,
        Ae = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        je = r(function(e, t) {
            ! function(t) {
                var n;
                if (e.exports = t(), n = !0, !n) {
                    var r = window.Cookies,
                        o = window.Cookies = t();
                    o.noConflict = function() {
                        return window.Cookies = r, o
                    }
                }
            }(function() {
                function e() {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) t[r] = n[r]
                    }
                    return t
                }

                function t(e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                }

                function n(r) {
                    function o() {}

                    function i(t, n, i) {
                        if ("undefined" != typeof document) {
                            i = e({
                                path: "/"
                            }, o.defaults, i), "number" == typeof i.expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                            try {
                                var a = JSON.stringify(n);
                                /^[\{\[]/.test(a) && (n = a)
                            } catch (c) {}
                            n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                            var u = "";
                            for (var s in i) i[s] && (u += "; " + s, i[s] !== !0 && (u += "=" + i[s].split(";")[0]));
                            return document.cookie = t + "=" + n + u
                        }
                    }

                    function a(e, n) {
                        if ("undefined" != typeof document) {
                            for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
                                var c = i[a].split("="),
                                    u = c.slice(1).join("=");
                                n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                                try {
                                    var s = t(c[0]);
                                    if (u = (r.read || r)(u, s) || t(u), n) try {
                                        u = JSON.parse(u)
                                    } catch (l) {}
                                    if (o[s] = u, e === s) break
                                } catch (l) {}
                            }
                            return e ? o[e] : o
                        }
                    }
                    return o.set = i, o.get = function(e) {
                        return a(e, !1)
                    }, o.getJSON = function(e) {
                        return a(e, !0)
                    }, o.remove = function(t, n) {
                        i(t, "", e(n, {
                            expires: -1
                        }))
                    }, o.defaults = {}, o.withConverter = n, o
                }
                return n(function() {})
            })
        }),
        Le = {
            cookieLawCountryCode: ["at", "be", "bg", "cz", "dk", "ee", "fi", "fr", "de", "hu", "ie", "it", "lv", "lt", "lu", "mt", "nl", "pl", "pt", "sk", "si", "es", "se", "gb", "gr", "us"],
            clearCookieList: [{
                name: "Hm_lpvt_cb214225e5b6ca1c9dc875febb7d4232"
            }, {
                name: "Hm_lvt_cb214225e5b6ca1c9dc875febb7d4232"
            }, {
                name: "MgidSensorHref"
            }, {
                name: "MgidSensorNVis"
            }, {
                name: "__hssc"
            }, {
                name: "__hssrc"
            }, {
                name: "__hstc"
            }, {
                name: "_dc_gtm_UA-43055594-1"
            }, {
                name: "_ga"
            }, {
                name: "_gat"
            }, {
                name: "_gat_gtag_UA_43055594_1"
            }, {
                name: "_gcl_au"
            }, {
                name: "_gid"
            }, {
                name: "_jzqa"
            }, {
                name: "_jzqb"
            }, {
                name: "_jzqc"
            }, {
                name: "_jzqckmp"
            }, {
                name: "_jzqx"
            }, {
                name: "_qzja"
            }, {
                name: "_qzjb"
            }, {
                name: "_qzjc"
            }, {
                name: "_qzjto"
            }, {
                name: "ckmts"
            }, {
                name: "__qhsrc"
            }, {
                name: "_uetsid"
            }, {
                name: "browsersid"
            }, {
                name: "currency"
            }, {
                name: "djiid"
            }, {
                name: "hubspotutk"
            }, {
                name: "traceid"
            }, {
                name: "user_nick_name"
            }, {
                name: "www_from"
            }, {
                name: "www_lang"
            }, {
                name: "www_user_nick_name"
            }, {
                name: "read_cookie_tips"
            }, {
                name: "_uab_collina"
            }, {
                name: "_qzjto"
            }, {
                name: "_qzjb"
            }, {
                name: "ga_uid"
            }, {
                name: /^_ga_/
            }, {
                name: /^scarab/
            }, {
                name: "_rdt_uuid"
            }, {
                name: "user_avatar_url"
            }, {
                name: "_uetvi"
            }, {
                name: "_uetvid"
            }, {
                name: "_fbp"
            }, {
                name: "_gaexp"
            }, {
                name: "_dji-session"
            }, {
                name: "_djissid"
            }, {
                name: "_sctr"
            }, {
                name: "tracker_device"
            }, {
                name: /^form_utm_/
            }]
        },
        Te = "dji_consentmanager",
        Oe = "lang",
        Ee = "country",
        ze = function() {
            function e(t) {
                De(this, e), this.conf = t
            }
            return Se(e, [{
                key: "isLawCountry",
                value: function(e) {
                    return this.constructor.isLawCountry(e)
                }
            }], [{
                key: "isLawCountry",
                value: function(e) {
                    return !!e && (Le.cookieLawCountryCode.indexOf(e.toLowerCase()) > -1 || !1)
                }
            }, {
                key: "isAcceptCookieTerm",
                value: function() {
                    var e = je.get("country");
                    if (!this.isLawCountry(e)) return !0;
                    var t = je.get(Te);
                    if (!t) return "US" === e.toUpperCase();
                    try {
                        var n = JSON.parse(decodeURIComponent(t));
                        return !("US" !== e.toUpperCase() || n && "deny" === n.opt) || n && "accept" == n.opt
                    } catch (r) {}
                    return !1
                }
            }]), Se(e, null, [{
                key: "clearUncessaryCookie",
                value: function(e) {
                    if (e && Array.isArray(e)) {
                        var t = document.domain,
                            n = "";
                        if ("localhost" !== t.toLowerCase() && "127.0.0.1" !== t) {
                            var r = t.split(".");
                            n = ".".concat(r.slice(-2).join("."))
                        }
                        var i = [];
                        document.cookie.split(";").map(function(e) {
                            i.push(e.split("=")[0].replace(/(^\s*)|(\s*&)/, ""))
                        }), e.forEach(function(e) {
                            var r = e.name,
                                a = e.domain,
                                c = function(e) {
                                    je.remove(e), je.remove(e, {
                                        domain: ".".concat(t)
                                    }), n && je.remove(e, {
                                        domain: n
                                    }), a && je.remove(e, {
                                        domain: a
                                    })
                                },
                                u = o(r);
                            if ("String" === u) c(r);
                            else if ("RegExp" === u)
                                for (var s in i) i[s].match(r) && c(i[s])
                        })
                    }
                }
            }, {
                key: "clearOfficialWebsiteRelatedCookie",
                value: function() {
                    this.isAcceptCookieTerm() || this.clearUncessaryCookie(Le.clearCookieList)
                }
            }, {
                key: "resetCCPALocaleCooke",
                value: function(e) {
                    var t = e || {},
                        n = t.domain,
                        r = je.get(Ee),
                        o = je.get(Oe);
                    if (r && o && n && this.isLawCountry(r)) {
                        var i = {
                            domain: n,
                            path: "/"
                        };
                        je.set(Ee, r, i), je.set(Oe, o, i)
                    }
                }
            }, {
                key: "hideCookiePreferenceInApp",
                value: function() {
                    if (window.officialCCPAScio && window.officialCCPAScio.isUserAgentAllow) {
                        var e = document.querySelector(".cc-consent-preference-li-wrapper");
                        e && window.officialCCPAScio.isUserAgentAllow() && (e.style.display = "none")
                    }
                }
            }, {
                key: "pageAfterLoadHandler",
                value: function() {
                    this.clearOfficialWebsiteRelatedCookie(), this.hideCookiePreferenceInApp()
                }
            }]), e
        }(),
        Re = i,
        Pe = a,
        Fe = c,
        Me = Array.prototype,
        Ne = Me.splice,
        $e = u,
        Be = s,
        qe = l,
        We = f;
    g.prototype.clear = Re, g.prototype["delete"] = $e, g.prototype.get = Be, g.prototype.has = qe, g.prototype.set = We;
    var He = g,
        Ve = p,
        Ke = d,
        Je = h,
        Ge = y,
        Qe = "object" == typeof Ae && Ae && Ae.Object === Object && Ae,
        Ze = Qe,
        Ye = "object" == typeof self && self && self.Object === Object && self,
        Xe = Ze || Ye || Function("return this")(),
        et = Xe,
        tt = et.Symbol,
        nt = tt,
        rt = Object.prototype,
        ot = rt.hasOwnProperty,
        it = rt.toString,
        at = nt ? nt.toStringTag : void 0,
        ct = m,
        ut = Object.prototype,
        st = ut.toString,
        lt = v,
        ft = "[object Null]",
        gt = "[object Undefined]",
        pt = nt ? nt.toStringTag : void 0,
        dt = _,
        ht = b,
        yt = "[object AsyncFunction]",
        mt = "[object Function]",
        vt = "[object GeneratorFunction]",
        _t = "[object Proxy]",
        bt = w,
        wt = et["__core-js_shared__"],
        Ct = wt,
        kt = function() {
            var e = /[^.]+$/.exec(Ct && Ct.keys && Ct.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }(),
        It = C,
        Ut = Function.prototype,
        xt = Ut.toString,
        Dt = k,
        St = /[\\^$.*+?()[\]{}|]/g,
        At = /^\[object .+?Constructor\]$/,
        jt = Function.prototype,
        Lt = Object.prototype,
        Tt = jt.toString,
        Ot = Lt.hasOwnProperty,
        Et = RegExp("^" + Tt.call(Ot).replace(St, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        zt = I,
        Rt = U,
        Pt = x,
        Ft = Pt(et, "Map"),
        Mt = Ft,
        Nt = Pt(Object, "create"),
        $t = Nt,
        Bt = D,
        qt = S,
        Wt = "__lodash_hash_undefined__",
        Ht = Object.prototype,
        Vt = Ht.hasOwnProperty,
        Kt = A,
        Jt = Object.prototype,
        Gt = Jt.hasOwnProperty,
        Qt = j,
        Zt = "__lodash_hash_undefined__",
        Yt = L;
    T.prototype.clear = Bt, T.prototype["delete"] = qt, T.prototype.get = Kt, T.prototype.has = Qt, T.prototype.set = Yt;
    var Xt = T,
        en = O,
        tn = E,
        nn = z,
        rn = R,
        on = P,
        an = F,
        cn = M;
    N.prototype.clear = en, N.prototype["delete"] = rn, N.prototype.get = on, N.prototype.has = an, N.prototype.set = cn;
    var un = N,
        sn = 200,
        ln = $;
    B.prototype.clear = Ve, B.prototype["delete"] = Ke, B.prototype.get = Je, B.prototype.has = Ge, B.prototype.set = ln;
    var fn = B,
        gn = function() {
            try {
                var e = Pt(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (t) {}
        }(),
        pn = gn,
        dn = q,
        hn = W,
        yn = H,
        mn = yn(),
        vn = mn,
        _n = r(function(e, t) {
            function n(e, t) {
                if (t) return e.slice();
                var n = e.length,
                    r = c ? c(n) : new e.constructor(n);
                return e.copy(r), r
            }
            var r = t && !t.nodeType && t,
                o = r && !0 && e && !e.nodeType && e,
                i = o && o.exports === r,
                a = i ? et.Buffer : void 0,
                c = a ? a.allocUnsafe : void 0;
            e.exports = n
        }),
        bn = et.Uint8Array,
        wn = bn,
        Cn = V,
        kn = K,
        In = J,
        Un = Object.create,
        xn = function() {
            function e() {}
            return function(t) {
                if (!ht(t)) return {};
                if (Un) return Un(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0, n
            }
        }(),
        Dn = xn,
        Sn = G,
        An = Sn(Object.getPrototypeOf, Object),
        jn = An,
        Ln = Object.prototype,
        Tn = Q,
        On = Z,
        En = Y,
        zn = "[object Arguments]",
        Rn = X,
        Pn = Object.prototype,
        Fn = Pn.hasOwnProperty,
        Mn = Pn.propertyIsEnumerable,
        Nn = Rn(function() {
            return arguments
        }()) ? Rn : function(e) {
            return En(e) && Fn.call(e, "callee") && !Mn.call(e, "callee")
        },
        $n = Nn,
        Bn = Array.isArray,
        qn = Bn,
        Wn = 9007199254740991,
        Hn = ee,
        Vn = te,
        Kn = ne,
        Jn = re,
        Gn = r(function(e, t) {
            var n = t && !t.nodeType && t,
                r = n && !0 && e && !e.nodeType && e,
                o = r && r.exports === n,
                i = o ? et.Buffer : void 0,
                a = i ? i.isBuffer : void 0,
                c = a || Jn;
            e.exports = c
        }),
        Qn = "[object Object]",
        Zn = Function.prototype,
        Yn = Object.prototype,
        Xn = Zn.toString,
        er = Yn.hasOwnProperty,
        tr = Xn.call(Object),
        nr = oe,
        rr = "[object Arguments]",
        or = "[object Array]",
        ir = "[object Boolean]",
        ar = "[object Date]",
        cr = "[object Error]",
        ur = "[object Function]",
        sr = "[object Map]",
        lr = "[object Number]",
        fr = "[object Object]",
        gr = "[object RegExp]",
        pr = "[object Set]",
        dr = "[object String]",
        hr = "[object WeakMap]",
        yr = "[object ArrayBuffer]",
        mr = "[object DataView]",
        vr = "[object Float32Array]",
        _r = "[object Float64Array]",
        br = "[object Int8Array]",
        wr = "[object Int16Array]",
        Cr = "[object Int32Array]",
        kr = "[object Uint8Array]",
        Ir = "[object Uint8ClampedArray]",
        Ur = "[object Uint16Array]",
        xr = "[object Uint32Array]",
        Dr = {};
    Dr[vr] = Dr[_r] = Dr[br] = Dr[wr] = Dr[Cr] = Dr[kr] = Dr[Ir] = Dr[Ur] = Dr[xr] = !0, Dr[rr] = Dr[or] = Dr[yr] = Dr[ir] = Dr[mr] = Dr[ar] = Dr[cr] = Dr[ur] = Dr[sr] = Dr[lr] = Dr[fr] = Dr[gr] = Dr[pr] = Dr[dr] = Dr[hr] = !1;
    var Sr = ie,
        Ar = ae,
        jr = r(function(e, t) {
            var n = t && !t.nodeType && t,
                r = n && !0 && e && !e.nodeType && e,
                o = r && r.exports === n,
                i = o && Ze.process,
                a = function() {
                    try {
                        var e = r && r.require && r.require("util").types;
                        return e ? e : i && i.binding && i.binding("util")
                    } catch (t) {}
                }();
            e.exports = a
        }),
        Lr = jr && jr.isTypedArray,
        Tr = Lr ? Ar(Lr) : Sr,
        Or = Tr,
        Er = ce,
        zr = Object.prototype,
        Rr = zr.hasOwnProperty,
        Pr = ue,
        Fr = se,
        Mr = le,
        Nr = 9007199254740991,
        $r = /^(?:0|[1-9]\d*)$/,
        Br = fe,
        qr = Object.prototype,
        Wr = qr.hasOwnProperty,
        Hr = ge,
        Vr = pe,
        Kr = Object.prototype,
        Jr = Kr.hasOwnProperty,
        Gr = de,
        Qr = he,
        Zr = ye,
        Yr = me,
        Xr = ve,
        eo = _e,
        to = be,
        no = Math.max,
        ro = we,
        oo = Ce,
        io = pn ? function(e, t) {
            return pn(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: oo(t),
                writable: !0
            })
        } : eo,
        ao = io,
        co = 800,
        uo = 16,
        so = Date.now,
        lo = ke,
        fo = lo(ao),
        go = fo,
        po = Ie,
        ho = Ue,
        yo = xe,
        mo = yo(function(e, t, n) {
            Xr(e, t, n)
        }),
        vo = mo,
        _o = "lang",
        bo = "country",
        wo = "region",
        Co = "other_region_flag",
        ko = function() {
            function e(t) {
                De(this, e), t || (t = {}), this.conf = vo({
                    localeDescMap: {},
                    countryMap: {
                        us: "",
                        ca: ["", "fr"],
                        pr: "",
                        be: "",
                        dk: "",
                        fr: ["fr"],
                        de: ["de"],
                        gr: "",
                        ie: "",
                        it: ["it"],
                        lu: ["fr"],
                        nl: "",
                        pt: "",
                        es: ["es"],
                        gb: "",
                        at: ["de"],
                        cy: "",
                        cz: "",
                        ee: "",
                        fi: "",
                        lv: "",
                        li: ["de"],
                        mt: "",
                        mc: ["fr"],
                        no: "",
                        pl: "",
                        si: "",
                        se: "",
                        ch: "",
                        hk: ["zh-TW", ""],
                        mo: ["zh-TW"],
                        tw: ["zh-TW"],
                        jp: ["ja"],
                        au: "",
                        nz: "",
                        kr: ["ko"],
                        sg: "",
                        bg: "",
                        hr: "",
                        hu: "",
                        lt: "",
                        sk: "",
                        cn: ["zh-CN"],
                        mx: ["es"],
                        ae: "",
                        id: "",
                        ru: "ru",
                        br: ["pt-BR"]
                    },
                    aliasMap: {
                        en: "",
                        "zh-CN": "cn",
                        "zh-TW": "zh-tw",
                        ja: "jp",
                        ko: "kr",
                        "pt-BR": "pt-br"
                    },
                    countryCodeToNameMap: {
                        gb: "uk"
                    },
                    countryNameToCodeMap: {},
                    countryDescMap: {},
                    langMap: {
                        en: {
                            lang: "en",
                            country: "US",
                            currency: "USD"
                        },
                        cn: {
                            lang: "zh-CN",
                            country: "CN",
                            currency: "CNY"
                        },
                        "zh-tw": {
                            lang: "zh-TW",
                            country: "HK",
                            currency: "HKD"
                        },
                        jp: {
                            lang: "ja",
                            country: "JP",
                            currency: "JPY"
                        },
                        kr: {
                            lang: "ko",
                            country: "KR",
                            currency: "KRW"
                        },
                        ko: {
                            lang: "ko",
                            country: "KR",
                            currency: "KRW"
                        },
                        fr: {
                            lang: "fr",
                            country: "FR",
                            currency: "EUR"
                        },
                        de: {
                            lang: "de",
                            country: "DE",
                            currency: "EUR"
                        },
                        es: {
                            lang: "es",
                            country: "ES",
                            currency: "EUR"
                        },
                        ru: {
                            lang: "ru",
                            country: "RU",
                            currency: "EUR"
                        },
                        "pt-br": {
                            lang: "pt-BR",
                            country: "BR",
                            currency: "BRL"
                        },
                        it: {
                            lang: "it",
                            country: "IT",
                            currency: "EUR"
                        }
                    }
                }, t), this.COOKIE_CURRENCY = "currency", this.cookieOptionSession = {
                    domain: this.conf.domain,
                    path: "/"
                }, this.cookieOption = vo({}, {
                    expires: 30
                }, this.cookieOptionSession);
                for (var n in this.conf.countryCodeToNameMap) {
                    var r = this.conf.countryCodeToNameMap[n];
                    this.conf.countryNameToCodeMap[r] = n
                }
            }
            return Se(e, [{
                key: "fixDefaultLang",
                value: function(e, t) {
                    return Array.isArray(e) ? e = e.map(function(e) {
                        return e || (e = "en"), "function" == typeof t && (e = t(e)), e
                    }) : (e = e || "en", "function" == typeof t && (e = t(e))), e
                }
            }, {
                key: "getSuggestLocale",
                value: function(e) {
                    if (!e) return "";
                    var t = this.conf.countryMap[e.toLowerCase()];
                    return t = this.fixDefaultLang(t), Array.isArray(t) ? t[0] : t
                }
            }, {
                key: "setCountry",
                value: function(e, t) {
                    if (!e) return !1;
                    var n = this.cookieOption;
                    return t && (n = this.cookieOptionSession), je.set(wo, e.toUpperCase(), n), !0
                }
            }, {
                key: "getCountry",
                value: function() {
                    var e = je.get(wo) || je.get(bo);
                    return e
                }
            }, {
                key: "setLocale",
                value: function(e, t) {
                    if (!e) return !1;
                    var n = this.cookieOption;
                    return t && (n = this.cookieOptionSession), je.set(_o, e, n), !0
                }
            }, {
                key: "subSetLangInCookie",
                value: function(e) {
                    var t = this.getStoreLang(e);
                    this.setPairedLocalize({
                        country: t.country,
                        locale: t.lang
                    })
                }
            }, {
                key: "setPairedLocalize",
                value: function(e) {
                    var t = e.country,
                        n = e.locale,
                        r = !1;
                    return ze.isLawCountry(t) && (r = !0), this.setCountry(t, r), this.setLocale(n, r), !0
                }
            }, {
                key: "getStoreLang",
                value: function(e) {
                    var t = this.conf.langMap;
                    return t[e] ? t[e] : t.en
                }
            }, {
                key: "getLocale",
                value: function() {
                    var e = je.get(_o);
                    return e
                }
            }, {
                key: "getLanguage",
                value: function(e) {
                    return e = e || this.getLocale(), this.conf.aliasMap[e] || e
                }
            }, {
                key: "getLangForUrl",
                value: function(e) {
                    if (!e) return "";
                    var t = this.getLanguage(e);
                    return ("en" === t ? "" : t).toLowerCase()
                }
            }, {
                key: "getLangUrlPrefix",
                value: function(e) {
                    var t = this.getLangForUrl(e);
                    return t && (t = "/".concat(t)), t
                }
            }, {
                key: "isOtherRegion",
                value: function() {
                    return this.constructor.isOtherRegion()
                }
            }, {
                key: "setOtherRegionFlag",
                value: function() {
                    je.set(Co, 1, this.cookieOptionSession)
                }
            }, {
                key: "resetOtherRegionFlag",
                value: function() {
                    je.remove(Co, vo({}, this.cookieOptionSession))
                }
            }, {
                key: "getCountryUrlPrefix",
                value: function(e) {
                    var t = e && e.country || this.getCountry(),
                        n = e && e.locale || this.getLocale();
                    if (!t) return "/";
                    if (t = t.toLowerCase(), "us" === t && (t = ""), !n) return "/".concat(t);
                    t = this.conf.countryCodeToNameMap[t] || t;
                    var r = "",
                        o = this.fixDefaultLang(this.conf.countryMap[t]);
                    return Array.isArray(o) ? o.forEach(function(e, o) {
                        e.toLowerCase() === n.toLowerCase() && (r = 0 === o ? "/".concat(t) : "/".concat(t, "-").concat(n))
                    }) : o.toLowerCase() === n.toLowerCase() && (r = t ? "/".concat(t) : ""), r
                }
            }, {
                key: "getCountryUrlReg",
                value: function() {
                    var e = this,
                        t = [],
                        n = "",
                        r = function(r) {
                            var o = e.fixDefaultLang(e.conf.countryMap[r]);
                            if (r = e.conf.countryCodeToNameMap[r] || r, Array.isArray(o)) {
                                var i = o.map(function(e, t) {
                                    return 0 === t ? (n = r, "".concat(r, "-").concat(e, "|").concat(r, "(?!-)")) : (n = r, "".concat(r, "-").concat(e))
                                });
                                t = t.concat(i.reverse())
                            } else t.push("".concat(r, "(?!-)"));
                            n = r
                        };
                    for (n in this.conf.countryMap) r(n);
                    return new RegExp("^/?(".concat(t.join("\\b|"), ")/?"), "i")
                }
            }, {
                key: "getLangReg",
                value: function() {
                    var e = this,
                        t = Object.keys(this.conf.localeDescMap).map(function(t) {
                            return void 0 !== e.conf.aliasMap[t] ? e.conf.aliasMap[t] : t
                        }).filter(function(e) {
                            return !!e
                        });
                    return new RegExp("^/?(".concat(t.join("\\b|"), ")/?"), "i")
                }
            }, {
                key: "getLocaleByCountry",
                value: function(e) {
                    return e ? (e = e.toLowerCase(), this.fixDefaultLang(this.conf.countryMap[e])) : ""
                }
            }, {
                key: "getDefaultLocaleByCountry",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : "US",
                        t = this.getLocaleByCountry(e);
                    return Array.isArray(t) ? t[0] : t
                }
            }, {
                key: "resolveUrlCountry",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : "",
                        t = this.getCountryUrlReg(),
                        n = e.match(t),
                        r = e.replace(t, "/").split("?")[0];
                    if (!n) return {
                        country: "US",
                        locale: "en",
                        resolvedPath: r
                    };
                    var o = n[0].replace(/(^\/)|(\/$)/g, "").split("-"),
                        i = o[0],
                        a = o[1];
                    return {
                        country: (this.conf.countryNameToCodeMap[i.toLowerCase()] || i).toUpperCase(),
                        locale: a || this.getDefaultLocaleByCountry(i),
                        resolvedPath: r
                    }
                }
            }, {
                key: "resolveUrlLang",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : "",
                        t = this.getLangReg(),
                        n = e.match(t),
                        r = e.replace(t, "/").split("?")[0];
                    if (!n) return {
                        lang: "en",
                        resolvedPath: r
                    };
                    var o = n[1];
                    return {
                        lang: o,
                        resolvedPath: r
                    }
                }
            }, {
                key: "getCountryName",
                value: function(e) {
                    return e = e || "", this.conf.countryDescMap[e.toLowerCase()]
                }
            }, {
                key: "getLocaleName",
                value: function(e) {
                    return e = e || "", this.conf.localeDescMap[e]
                }
            }], [{
                key: "isOtherRegion",
                value: function() {
                    var e = je.get(_o),
                        t = je.get(wo) || je.get(bo),
                        n = je.get(Co);
                    return !("en" !== e || "US" !== t || "1" !== n)
                }
            }]), e
        }(),
        Io = {
            CCPA: ze,
            Localize: ko
        };
    return Io
}),
function() {
    var e = DUI.Config.domain || ".dji.com",
        t = window.OfficialScript.Localize;
    if (DUI.Localize = new t({
            domain: e
        }), DUI.Localize.isOtherRegion()) {
        var n = "Other Regions",
            r = "English",
            o = $("#current-region-placeholder");
        o.length > 0 && o.html(n + " / " + r)
    }
}(),
function(e, t) {
    e.DUI = "undefined" == typeof DUI ? {} : DUI, t.ajaxSetup({
        beforeSend: function(e, t) {
            var n = t.url;
            n && /(\.dbeta\.me)|(\.dji\.com)/i.test(n) && (t.xhrFields = {
                withCredentials: !0
            })
        }
    }), DUI.API = {
        Factory: function(e, n) {
            var r = {
                    api: {
                        method: "get",
                        url: ""
                    },
                    filter: ["input:text", "input:hidden", "input:password", "textarea", "select", "input:checkbox"],
                    notice: "",
                    cache: "",
                    security: function(e) {
                        for (var t in e) e[t] = encodeURIComponent(e[t]);
                        return e
                    },
                    validate: function(e) {},
                    source: function() {
                        if (!n || !n.find) return {};
                        var e = {},
                            r = {},
                            o = this.filter.map(function(e) {
                                var t = e.indexOf("input:") > -1;
                                return t && (e = e.replace("input:", "")), t ? "input[type=" + e + "]" : e
                            });
                        return n.find(o.join(",")).each(function(n, o) {
                            var i = t(o),
                                a = i.attr("name"),
                                c = i.val();
                            e[a] = {
                                value: c,
                                error: i.data("error"),
                                success: i.data("success"),
                                ele: i
                            }, r[a] = c
                        }), e.rqs = r, e
                    },
                    complete: function(e, t) {
                        if (e && o.error(e), t.success) switch (t.status) {
                            case 200:
                                o.success(t);
                                break;
                            default:
                                o.error(t.extra.msg)
                        } else o.error(t.extra.msg)
                    },
                    showMask: function() {
                        return !1
                    },
                    error: function(e) {},
                    success: function(e) {}
                },
                o = t.extend(r, e);
            return this._build(o)
        },
        _build: function(e) {
            return {
                _doing: !1,
                submit: function(n, r) {
                    if (e.cache) {
                        var o = DUI.Storage.getJSON(e.cache);
                        if (o) return n.call(this, o)
                    }
                    var i = this,
                        a = e.source() || {},
                        c = e.validate(a, DUI.Validate, []) || [],
                        u = DUI.API._helper;
                    if (r = t.isFunction(r) ? r : function() {}, i.notice.clear(), u.Caller = i, u.Option = e, c.length <= 0) {
                        if (i._doing) return;
                        i._doing = !0;
                        var s = {
                            data: e.security(a.rqs ? a.rqs : a),
                            method: e.api.method,
                            url: e.api.url,
                            ajax: e.ajax,
                            option: e
                        };
                        u.handlePost(s, function(o) {
                            200 == o.status && t.isFunction(n) ? (e.cache && DUI.Storage.setJSON(e.cache, o, function() {}), n.call(i, o)) : r.call(i, ((o.extra || {}).msg || {}).first || "", o), i._doing = !1
                        })
                    } else u.completeDone(c, function(e, t) {
                        i._doing = !1, r.call(i, t.first)
                    });
                    return i
                },
                notice: {
                    ele: t(e.notice),
                    clear: function() {
                        this.ele.length > 0 && this.ele.html("")
                    },
                    success: function(e, t) {
                        t = t || "#008800", this.ele.length > 0 ? this.ele.html('<span style="color:' + t + '">' + e + "</span>") : console.log("%c" + e, "color:" + t)
                    },
                    error: function(e, t) {
                        t = t || "#E92B2B", this.ele.length > 0 ? this.ele.html('<span style="color:' + t + '">' + e + "</span>") : console.log("%c" + e, "color:" + t)
                    }
                }
            }
        },
        _helper: {
            _doing: !1,
            Caller: null,
            Option: null,
            Result: {
                success: !1,
                status: 400,
                data: [],
                extra: {
                    msg: []
                }
            },
            renderApi: function(e) {
                if ("string" != typeof e) return e;
                var t = DUI.Localize.getCountryUrlReg(),
                    n = this.getAPIHost("official_api");
                return t.test(e) ? n + e : n + DUI.Localize.getCountryUrlPrefix() + e
            },
            renderStoreApi: function(e) {
                if ("string" != typeof e) return e;
                var t = this.getAPIHost("store_api");
                return t + e
            },
            getApi: function(e) {
                var t = DUI.Config.apiList;
                return this.renderApi(t[e])
            },
            getStoreApi: function(e) {
                var t = DUI.Config.apiList;
                return this.renderStoreApi(t[e])
            },
            getAPIHost: function(e, t) {
                var n = DUI.Config.env;
                "object" == typeof t && (n = t.env ? t.env : n);
                var r = DUI.Config.apiHostList[e],
                    o = r[n] && r[n].host;
                return "undefined" == typeof o && (o = r.host), o
            },
            handlePost: function(e, n) {
                var r = DUI.API._helper;
                setTimeout(function() {
                    t(document).trigger("onRequest", {
                        option: e.option
                    })
                }, 0), "get" != e.method.toLowerCase() && (e.data["www-cache"] = "official", e.data._csrf || (e.data._csrf = DUI.Config._csrf || "403"));
                var o = {
                    url: e.url,
                    data: e.data,
                    dataType: "json",
                    type: e.method,
                    timeout: 1e4,
                    headers: {
                        Accept: "application/vnd.green-v1",
                        Lang: DUI.Lang || "cn",
                        "Access-Control-Allow-Origin": "https://www.dji.com,https://www.dbeta.me"
                    },
                    xhrFields: {
                        withCredentials: !0
                    },
                    success: function(e) {
                        e = t.extend({}, r.Result, e), r.pushTextStatus(e), t.each([e.data, e.extra.msg], function(n, r) {
                            r = t.isArray(r) ? r : [r], r = {
                                first: r[0],
                                list: r
                            }, 0 == n ? e.data = r : e.extra.msg = r
                        }), n.call(this, e), r.Option.complete.call(r.Caller, null, e, n)
                    },
                    complete: function(o, i) {
                        "timeout" == i && r.completeDone("request time out", n), t(document).trigger("onComplete", {
                            option: e.option,
                            status: o.status
                        })
                    },
                    statusCode: {
                        302: function() {
                            r.completeDone("302 , api is moved.", n)
                        },
                        404: function() {
                            r.completeDone("404 , api is not found.", n)
                        },
                        500: function() {
                            r.completeDone("500 , server error , please try again.", n)
                        }
                    }
                };
                t.isPlainObject(e.ajax) ? t.ajax(t.extend({}, o, e.ajax)) : t.ajax(o)
            },
            pushTextStatus: function(e) {
                var n = e.extra.msg,
                    r = e.data,
                    o = !1;
                if (r)
                    for (var i in r)
                        if ("email" === i && r[i] && r[i].length > 0)
                            for (var a = 0; a < r[i].length; a++) r[i][a].indexOf("can't submit more than") !== -1 && (o = !0);
                switch (t.isArray(n) || (e.extra.msg = n ? [n] : []), e.status) {
                    case 422:
                        "undefined" != typeof n || o || e.extra.msg.push("params is invalid , please check."), "undefined" == typeof n && o && e.extra.msg.push("limit_error");
                        break;
                    default:
                        e.extra.msg.push("response status: " + e.status)
                }
            },
            completeDone: function(e, n) {
                e = t.isArray(e) ? e : [e];
                var r = {
                        first: e[0] || "",
                        list: e
                    },
                    o = this.Option;
                n.call(this, e, r), o.complete.call(this.Caller, r, this.Result, n)
            },
            ajaxWithCredent: function(e) {
                return "object" != typeof e ? null : (e.xhrFields = {
                    withCredentials: !0
                }, t.ajax(e))
            }
        }
    }, e.Mask = DUI.Mask = {
        $mask: t("body").find("#mask"),
        locked: !1,
        lock: function(e) {
            this.locked = e
        },
        show: function(e) {
            return this.$wait || (this.$wait = this.$mask.find(".wait-msg")), this.$wait.html(e), this.$mask.show().removeClass("hidden"), this
        },
        hide: function() {
            return this.$mask.hide().addClass("hidden"), this
        }
    }, t(document).on("onRequest", function(e, t) {
        var n = t.option;
        n.showMask() && Mask.show()
    }), t(document).on("onComplete", function(e, t) {
        var n = t.option;
        n.showMask() && !Mask.locked && Mask.hide()
    })
}(window, jQuery),
function() {
    $.fn.login = function(e) {
        var t = $(this),
            n = location.origin + t.attr("action");
        return DUI.API.Factory($.extend({
            api: {
                method: t.attr("method"),
                url: n.replace("http://", "https://")
            },
            notice: t.attr("notice"),
            cache: "dji[user]",
            validate: function(e, t, n) {
                var r = e.email,
                    o = e.password,
                    i = ["email", "length"];
                return o.value && r.value ? $.each([r, o], function(e, r) {
                    t[i[e]](r.value.toLowerCase().trim()) || n.push(r.error)
                }) : n.push(o.ele.data("blank")), n
            }
        }, e), t)
    }, $.fn.register = function(e) {
        var t = $(this),
            n = location.origin + t.attr("action");
        return DUI.API.Factory($.extend({
            api: {
                method: t.attr("method"),
                url: n.replace("http://", "https://")
            },
            notice: t.attr("notice"),
            validate: function(e, t, n) {
                var r = e.email,
                    o = e.password,
                    i = ["email", "length"];
                return o.value && r.value ? $.each([r, o], function(e, r) {
                    var o = i[e],
                        a = t[o],
                        c = r.value.toLowerCase().trim();
                    "length" == o || a(c) ? "length" == o && (a(c, 6, 24) || n.push(r.error)) : n.push(r.error)
                }) : n.push(o.ele.data("blank")), n
            }
        }, e), t)
    }, DUI.Activity = {
        create: function(e) {
            var t = $(this.form),
                n = DUI.Config;
            return DUI.API.Factory($.extend({
                api: {
                    method: t.attr("method"),
                    url: t.attr("action")
                },
                security: function(e) {
                    for (var t in e) e[t] = encodeURIComponent(e[t]);
                    return e._csrf = n._csrf, e
                },
                complete: function() {
                    var e = $(".captcha-img");
                    e.length > 0 && e.click()
                }
            }, e), t)
        },
        generateToken: function(e) {
            return DUI.Config._csrf ? e && e(DUI.Config._csrf) : DUI.API._helper.ajaxWithCredent({
                method: "get",
                url: DUI.API._helper.getApi("csrf")
            }).done(function(t) {
                var n = t._csrf || "403";
                DUI.Config._csrf = n, e && e(n)
            }), DUI.Activity
        }
    }, DUI.queryCarts = function(e) {
        return DUI.API.Factory({
            api: {
                url: DUI.API._helper.getApi("userCart"),
                method: "get"
            },
            source: function() {
                return {
                    uuid: e,
                    www: "v2"
                }
            },
            validate: function(t, n, r) {
                return e || r.push("param uuid is required."), r
            }
        })
    }, DUI.qeuryPrice = function(e) {
        return DUI.API.Factory({
            api: {
                url: DUI.API._helper.getApi("productPrice"),
                method: "get"
            },
            source: function() {
                $.isArray(e) && (e = e.join(","));
                var t = DUI.Localize.getCountry() || "";
                return {
                    slugs: e,
                    country: t
                }
            },
            validate: function(t, n, r) {
                return e || r.push("param slugs is required."), r
            }
        })
    }, DUI.dataReport = function(e) {
        var t = DUI.API._helper.renderApi("/api/data_report"),
            n = $.param({
                scope: e[0],
                content: e[1],
                report_type: e[2]
            });
        return {
            submit: function() {
                DUI.API._helper.ajaxWithCredent({
                    method: "get",
                    url: t + "?" + n
                }).done(function(e) {})
            }
        }
    }
}(),
function(e) {
    e.DUI = "undefined" == typeof DUI ? {} : DUI, DUI.helper = {
        loadScripts: function(e) {
            var t = e.split(","),
                n = document;
            t.forEach(function(e) {
                n.write('<script src="' + e + '"></script>')
            })
        },
        flowStats: function() {
            window.flowStats = function(e, t) {
                e = e.replace(/\/$/, ""), e = e.replace(/(&|\?)?from=buy_now/g, "");
                var n = e.split("#")[1];
                return e = e.split("#")[0], e += e.indexOf("?") > -1 ? "&" : "?", e += "site=brandsite", e.indexOf("from=") < 0 && t && (e = e + "&from=" + t), n && (e = e + "#" + n), e
            }
        },
        initTopicalGaDynamic: function(e) {
            if (e && "string" == typeof e) {
                var t = $("." + e),
                    n = t.find(".ga-data");
                0 != n.length && n.each(function(e, t) {
                    var n = $(this),
                        r = n.data("ga-action") ? n.data("ga-action") : "click",
                        o = n.data("ga-category") ? n.data("ga-category") : "",
                        i = n.data("ga-label") ? n.data("ga-label") : "";
                    r && o && i && n.one(r, function(e) {
                        ga("send", "event", o, r, i)
                    })
                })
            }
        },
        checkInboundLink: function(e) {
            if (!e) return !1;
            var t = !(e.match(/^http/gi) || e.match(/www/gi) || e.match(/com/gi) || e.match(/^\/\//)),
                n = DUI.Config.domain,
                r = new RegExp(n, "gi"),
                o = new RegExp(window.location.host, "gi"),
                i = r.test(e) && o.test(e);
            return !t && !i
        },
        openExternalLink: function(e) {
            var t = e;
            e.match(/^(https?|ftp|file|\/\/).+$/gi) || (t = "//" + t), window.open(t, "_blank")
        },
        openForMinPrograme: function() {
            var e = window.navigator.userAgent;
            return e.toLowerCase().indexOf("miniprogram") !== -1
        },
        bdTrack: function(e) {
            window._agl && window._agl.push(["track", ["success", {
                t: e
            }]])
        },
        getQueryString: function(e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                n = window.location.search.substr(1).match(t),
                r = "";
            if (null != n) return r = n[2]
        },
        checkInView: function(e) {
            var t = e.elm,
                n = e.offset || 0,
                r = e.callback,
                o = e.threshold || 0,
                i = e.defaultInViewOnIE || !1;
            if (t || 0 !== t.length) {
                var a = !1;
                if ("undefined" != typeof window && (a = !!window.MSInputMethodContext && !!document.documentMode), a && i) return setTimeout(function() {
                    var e = {
                        inView: !0,
                        lastEntry: {
                            isIntersecting: !0
                        },
                        observer: {
                            disconnect: function() {}
                        },
                        entries: [{
                            isIntersecting: !0
                        }]
                    };
                    r(e)
                }, 10);
                var c = {
                        rootMargin: n + "px",
                        threshold: o
                    },
                    u = function(e, t) {
                        var n = e.length,
                            o = e[n - 1],
                            i = o.isIntersecting,
                            a = r({
                                inView: i,
                                lastEntry: o,
                                observer: t,
                                entries: e
                            });
                        o.isIntersecting && !a && t.disconnect()
                    },
                    s = new IntersectionObserver(u, c);
                s.observe(t[0])
            }
        },
        debounce: function(e, t, n) {
            var r;
            return function() {
                var o = this,
                    i = arguments,
                    a = function() {
                        r = null, n || e.apply(o, i)
                    },
                    c = n && !r;
                clearTimeout(r), r = setTimeout(a, t), c && e.apply(o, i)
            }
        }
    }, DUI.helper.flowStats(), $.fn.hoverDelay = function(e) {
        var t, n, r = {
                hoverDuring: 50,
                outDuring: 50,
                hoverEvent: function() {
                    $.noop()
                },
                outEvent: function() {
                    $.noop()
                }
            },
            o = $.extend(r, e || {});
        return $(this).each(function() {
            var e = $(this);
            e.hover(function() {
                clearTimeout(n), t = setTimeout(function() {
                    o.hoverEvent.apply(e)
                }, o.hoverDuring)
            }, function() {
                clearTimeout(t), n = setTimeout(function() {
                    o.outEvent.apply(e)
                }, o.outDuring)
            })
        })
    }
}(window);