function loadRenderFunction(e) {
    var n = document.head || document.getElementsByTagName("head")[0],
        o = document.createElement("script"),
        t = new Promise(function(e, n) {
            o.onload = e, o.onerror = n
        }),
        a = "prod" === e ? "https://account.djicdn.com" : "https://account-cdn.dbeta.me";
    return a += "account-center-feedback-fe/" + e + "/generate.umd.cjs", o.setAttribute("src", a + "?t=" + (new Date).getTime()), o.async = !0, n.append(o), t.then(function() {
        function e(o, t) {
            setTimeout(function() {
                n++, window.accountCenterFeedback ? o() : n >= 5 ? t() : e(o, t)
            }, 300)
        }
        var n = 0;
        return new Promise(function(n, o) {
            e(n, o)
        })
    })
}

function render(e) {
    var n = {
            en: "en_US",
            "zh-CN": "zh_CN",
            "zh-TW": "zh_TW",
            ja: "ja_JP",
            ko: "ko_KR",
            fr: "fr_FR",
            de: "DE_DE",
            es: "es_ES",
            it: "it_IT",
            ru: "ru_RU",
            "pt-BR": "pt_BR"
        },
        o = DUI.Config.lang;
    window.accountCenterFeedback.updateConfig({
        bottom: "204px",
        right: "48px",
        zindex: "999",
        lang: n[o] || n.en,
        appId: "dji-official-fe",
        appName: "大疆官网",
        appUserId: DUI.Cookie.get("fb_v1") || DUI.Cookie.get("ga_uid"),
        region: DUI.Config.region,
        login: !!DUI.Cookie.get("fb_v1"),
        env: e
    })
}

function rateComponent(e) {
    loadRenderFunction(e).then(function() {
        render(e)
    }, function() {
        console.log("account center feedback load failed.")
    })
}

function shouldRateShow() {
    var e = {
            prod: new RegExp("^/(avata|mavic-3|mavic-3-classic|osmo-mobile-6|pocket-2|ronin-4d|camera-drones|handheld)$"),
            stag: new RegExp("^/(avata|mavic-3|mavic-3-classic|osmo-mobile-6|pocket-2|ronin-4d|camera-drones|handheld)$"),
            test: new RegExp("/(test-kimi|avata|mavic-3|mavic-3-classic|osmo-mobile-6|pocket-2|ronin-4d|camera-drones|handheld)$"),
            dev: new RegExp("/(test-kimi|avata|mavic-3|mavic-3-classic|osmo-mobile-6|pocket-2|ronin-4d|camera-drones|handheld)$")
        },
        n = {
            staging: "test",
            preview: "stag",
            production: "prod"
        },
        o = n[DUI.Config.env] || "dev";
    window.location.pathname.match(e[o]) && rateComponent(o)
}
shouldRateShow();