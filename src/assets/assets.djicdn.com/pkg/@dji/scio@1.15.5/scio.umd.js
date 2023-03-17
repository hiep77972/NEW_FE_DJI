! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Scio = t()
}(this, (function() {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(t)
    }

    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function o(e, t, o) {
        return t && i(e.prototype, t), o && i(e, o), e
    }

    function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && s(e, t)
    }

    function r(e) {
        return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function a(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function c(e, t) {
        return !t || "object" != typeof t && "function" != typeof t ? a(e) : t
    }

    function l(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var i, o = r(e);
            if (t) {
                var n = r(this).constructor;
                i = Reflect.construct(o, arguments, n)
            } else i = o.apply(this, arguments);
            return c(this, i)
        }
    }

    function u(e, t, i) {
        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var o = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e)););
                return e
            }(e, t);
            if (o) {
                var n = Object.getOwnPropertyDescriptor(o, t);
                return n.get ? n.get.call(i) : n.value
            }
        })(e, t, i || e)
    }

    function d(e) {
        if (Array.isArray(e)) {
            for (var t = [], i = 0; i < e.length; ++i) t.push(d(e[i]));
            return t
        }
        if (p(e)) {
            var o = {};
            for (var n in e) o[n] = d(e[n]);
            return o
        }
        return e
    }

    function p(t) {
        return t && "object" === e(t) && !Array.isArray(t)
    }

    function f(e, t) {
        if (!p(e)) return t;
        for (var i in t) e[i] = p(e[i]) && p(t[i]) ? f(e[i], t[i]) : t[i];
        return e
    }

    function h(e, t, i) {
        var o;
        !e && p(o = i.shift()) || (o = {});
        for (var n = 0; n < i.length; ++n) {
            var r = i[n];
            if (p(r))
                for (var s in r)
                    if ("__proto__" !== s) {
                        var a = e ? d(r[s]) : r[s];
                        o[s] = t ? f(o[s], a) : a
                    }
        }
        return o
    }

    function m() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return h(!0 === t[0], !1, t)
    }

    function b() {
        return m.apply(void 0, arguments)
    }
    b.clone = d, b.isPlainObject = p, b.recursive = function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return h(!0 === t[0], !0, t)
    };

    function g(e) {
        return "." + e.join(".")
    }
    var v = {
            hasLaw: ["AT", "BE", "BG", "CZ", "DK", "EE", "FI", "FR", "DE", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "SI", "ES", "SE", "GB", "GR"]
        },
        k = {
            list: ["pilot", "dji-app-android", "dji-app-ios", "dji-app-android", "djifly_ios", "dididayao", "dji-app-mimo-ios", "dji-app-mimo-android"]
        },
        y = function(e) {
            var t = (" " + document.cookie).split(" " + e + "=");
            return t.length < 2 ? void 0 : t.pop().split(";").shift()
        },
        w = function(e, t, i, o, n, r) {
            var s = new Date;
            s.setHours(s.getHours() + 24 * ("number" != typeof i ? 365 : i)), document.cookie = e + "=" + t + ";expires=" + s.toUTCString() + ";path=" + (n || "/") + (o ? ";domain=" + o : "") + (r ? ";secure" : "")
        },
        x = function() {
            var e = window.location.hostname;
            if (/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(e)) return e;
            if ("localhost" === e) return e;
            var t = e.split(".");
            return t.length <= 2 ? g(t) : (t = t.slice(-3))[2].length >= 3 || t[1].length > 3 ? g(t.slice(-2)) : g(t)
        },
        C = function(e, t) {
            return "" !== e && (void 0 === t ? v.hasLaw : v.hasLaw.concat(t)).indexOf(e) < 0
        },
        z = function(e) {
            var t = ("undefined" != typeof window ? window.navigator.userAgent : "all").toLocaleLowerCase(),
                i = void 0 === e ? k.list : k.list.concat(e);
            for (var o in i) {
                var n = i[o],
                    r = "string" == typeof n && t.indexOf(n) > -1,
                    s = "RegExp" === A(n) && n.test(t);
                if (r || s) return !0
            }
            return !1
        };

    function P(e) {
        (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? e(): document.addEventListener("DOMContentLoaded", e)
    }

    function A(e) {
        return Object.prototype.toString.call(e).slice(8, -1)
    }

    function j(e, t) {
        return t.filter((function(t) {
            return "string" == typeof t ? e.indexOf(t) > -1 : t.test(e)
        })).length > 0
    }
    var E = {
            cookieExists: !1,
            acceptCookie: !1,
            cookieVersion: 1,
            openInIframe: !1,
            showAuto: !0,
            delay: 1e3,
            language: "en",
            fallbackLng: "en",
            country: "",
            appId: "",
            environment: "",
            loggerEnabled: !1,
            loggerUrl: "https://store-api.dji.com/logger/beacon.gif",
            loggerParams: {},
            privacyPolicy: "https://www.dji.com/policy?from=scio",
            locale: {
                en: {
                    privacyPolicy: "Cookie Policy",
                    cookiePreferences: "Cookie Preferences",
                    acceptAll: "Accept All",
                    requiredOnly: "Required Only",
                    bar: {
                        title: "We Value Your Privacy",
                        desc: 'We use cookies to personalize and enhance your browsing experience on our websites.By clicking "Accept all cookies", you agree to the use of cookies.You can manage your settings at any time through {{cookiePreferences}} or read our {{privacyPolicy}} to learn more.'
                    },
                    modal: {
                        desc: "Cookies are small files which, when placed on your device, enable us to provide certain features and functionality of DJI websites and online services to you. We use the following types of cookies on our websites. View {{privacyPolicy}} for full details."
                    }
                },
                de: {
                    privacyPolicy: "Cookie-Richtlinien",
                    cookiePreferences: "Cookie-Einstellungen",
                    acceptAll: "Alle akzeptieren",
                    requiredOnly: "Nur notwendige",
                    bar: {
                        title: "Wir schätzen deine Privatsphäre",
                        desc: 'Wir verwenden Cookies, um deinen Besuch auf unseren Webseiten zu verbessern und individuell auf dich abzustimmen. Durch Klicken auf "Alle Cookies akzeptieren" stimmst du der Verwendung von Cookies zu. Du kannst deine Einstellungen jederzeit über {{cookiePreferences}} ändern. Mehr Details findest du in unseren {{privacyPolicy}}.'
                    },
                    modal: {
                        desc: "Cookies sind kleine Dateien, die bestimmte Funktionen auf DJI-Webseiten und Onlinediensten ermöglichen, wenn sie auf deinem Gerät gespeichert werden. Wir verwenden die folgenden Arten von Cookies auf unseren Webseiten. Ausführliche Informationen findest du in unseren {{privacyPolicy}}."
                    }
                },
                it: {
                    privacyPolicy: "Policy per i cookie",
                    cookiePreferences: "Preferenze dei cookie",
                    acceptAll: "Accetta tutto",
                    requiredOnly: "Solo richiesti",
                    bar: {
                        title: "DJI rispetta la privacy degli utenti",
                        desc: 'Utilizziamo i cookie per personalizzare e migliorare la navigazione del nostro sito Web. Facendo clic su " Accetta tutti i cookie ", si accetta l’utilizzo di cookie. È possibile gestire le impostazioni in qualsiasi momento tramite {{cookiePreferences}} o leggere {{privacyPolicy}} per ulteriori informazioni.'
                    },
                    modal: {
                        desc: "I cookie sono file di piccole dimensioni che, quando vengono inseriti nel dispositivo, consentono di fornire agli utenti alcune caratteristiche e funzionalità dei siti Web DJI, nonché servizi online. Sui nostri siti Web utilizziamo i seguenti tipi di cookie. Vedere {{privacyPolicy}} per i dettagli completi."
                    }
                },
                fr: {
                    privacyPolicy: "Politique relative à l'utilisation des Cookies",
                    cookiePreferences: "Préférences Cookies",
                    acceptAll: "Tout accepter",
                    requiredOnly: "Nécessaires seulement",
                    bar: {
                        title: "Nous respectons votre vie privée",
                        desc: "Nous utilisons des cookies pour personnaliser et améliorer votre expérience de navigation sur notre site internet. En cliquant sur « Accepter tous les cookies », vous acceptez l'utilisation des cookies. Vous pouvez modifier ces paramètres à tout moment dans les {{cookiePreferences}} ou lisez notre {{privacyPolicy}} pour plus d'informations."
                    },
                    modal: {
                        desc: "Les cookies sont de petits fichiers qui, lorsque placés sur votre appareil, nous permettent de vous proposer certaines fonctionnalités des sites internet DJI ainsi que des services en ligne. Nous utilisons les types de cookies suivants sur notre site internet. Consultez la {{privacyPolicy}} pour plus de détails."
                    }
                },
                es: {
                    privacyPolicy: "Política de cookies",
                    cookiePreferences: "Preferencias de cookies",
                    acceptAll: "Aceptar todas las cookies",
                    requiredOnly: "Aceptar solo cookies necesarias",
                    bar: {
                        title: "Valoramos tu privacidad",
                        desc: "Usamos las cookies para personalizar y mejorar tu experiencia de navegación en nuestro sitio web. Al hacer clic en “Aceptar todas las cookies”, aceptas su uso. Puedes modificar la configuración en cualquier momento en {{cookiePreferences}}, así como leer la {{privacyPolicy}} para obtener más información."
                    },
                    modal: {
                        desc: "Las cookies son pequeños archivos que, cuando se almacenan en tu dispositivo, nos permiten ofrecerte determinadas características y funciones de los servicios online y sitios web de DJI. Nuestros sitios web usan los siguientes tipos de cookies. Para obtener más información, consulta la {{privacyPolicy}}."
                    }
                }
            },
            categories: {
                necessary: {
                    necessary: !0,
                    locale: {
                        en: {
                            title: "Strictly Necessary Cookies",
                            desc: "These cookies are essential for you to use our websites, such as the cookies used for carrying out the transmission of a communication, the cookies that record requests for information from the Internet and block web attacks so as to ensure web security, the cookies that are strictly necessary for us to provide information society services that you request. You must accept strictly necessary cookies to be able to use our websites."
                        },
                        de: {
                            title: "Notwendige Cookies",
                            desc: "Diese Cookies sind für die Nutzung unserer Websites unerlässlich, um mit dir zu kommunizieren, um deine Anfragen zu bearbeiten und deine Sicherheit zu gewährleisten (z. B. Webangriffe zu blockieren). Die Cookies werden für alle grundlegenden Dienste auf unseren Webseiten benötigt. Du musst die notwendigen Cookies akzeptieren, um unsere Websites nutzen zu können."
                        },
                        it: {
                            title: "Cookie strettamente necessari",
                            desc: "Questi cookie sono essenziali per l’utilizzo dei nostri siti Web, ad esempio i cookie utilizzati per effettuare la trasmissione di una comunicazione, i cookie che registrano richieste di informazioni da Internet e bloccano attacchi Web per garantire la protezione Web, i cookie strettamente necessari per fornire i servizi aziendali di informazione richiesti dall’utente. Per poter utilizzare i nostri siti Web è necessario accettare i cookie strettamente necessari."
                        },
                        fr: {
                            title: "Cookies strictement nécessaires",
                            desc: "Ces cookies sont essentiels lorsque vous utilisez notre site internet, tels que les cookies de transmission de communication, les cookies d'enregistrement de demandes d'informations sur internet et bloquant les attaques de sites web pour assurer la sécurité internet, les cookies indispensables en termes de services de la société de l'information que vous demandez. Vous devez accepter les cookies strictement nécessaires afin d'utiliser notre site internet."
                        },
                        es: {
                            title: "Cookies estrictamente necesarias",
                            desc: "Estas cookies son esenciales para que puedas usar nuestro sitio web. Como, por ejemplo, las cookies que se usan para facilitar la transmisión de una comunicación, las que registran solicitudes de información de Internet y bloquean ataques web para ofrecer seguridad web, y las que son estrictamente necesarias para proporcionar información a los servicios de la sociedad que se soliciten. Para poder usar nuestros sitios web, deberás aceptar las cookies estrictamente necesarias."
                        }
                    }
                },
                preference: {
                    locale: {
                        en: {
                            title: "Preference Cookies",
                            desc: 'These cookies are also known as "functionality cookies", these cookies allow us to remember choices you have made through your use of our websites, like what language you prefer, what region you are in, or what your username and password are so you can automatically log in. These cookies can help us reallocate work load among our servers and enable our webpages to respond faster.'
                        },
                        de: {
                            title: "Bevorzugte Cookies",
                            desc: 'Diese Cookies werden auch "Funktionscookies" genannt. Sie halten fest, wie du unsere Webseiten benutzt hast, z. B. welche Sprache du bevorzugst, in welcher Region du dich befindest oder wie dein Benutzername und dein Passwort lauten, damit du dich automatisch anmelden kannst. Diese Cookies können uns dabei helfen, die Serverauslastung zu optimieren und dir schnellere Reaktionszeiten auf unseren Webseiten zu bieten.'
                        },
                        it: {
                            title: "Cookie preferiti",
                            desc: "Questi cookie sono anche noti come “cookie di funzionalità” e consentono di ricordare le scelte effettuate durante l’utilizzo dei siti Web, come la lingua preferita, la regione di residenza o i valori di nome utente e password per effettuare automaticamente l’accesso. Questi cookie consentono di riallocare il carico di lavoro tra i server e permettono alle pagine Web di rispondere più rapidamente."
                        },
                        fr: {
                            title: "Cookies préférentiels",
                            desc: "Aussi connus comme « cookies fonctionnels », ces cookies nous permettent d'enregistrer vos choix lors de l'utilisation de notre site internet, tels que la langue préférée, votre région de résidence, ou votre identifiant et mot de passe afin de vous connecter automatiquement. Ces cookies nous aident à redistribuer la charge d'informations sur nos serveurs et permettre ainsi de meilleures performances de notre site internet."
                        },
                        es: {
                            title: "Cookies de preferencias",
                            desc: 'Estas cookies, también conocidas como "cookies de funcionalidad", nos permiten recordar las opciones que seleccionas cuando navegas por nuestro sitio web, como tu idioma preferido, la región en la que te encuentras o cuál es tu nombre de usuario y contraseña para que puedas iniciar sesión automáticamente. Estas cookies nos ayudan a redistribuir la carga de trabajo entre los diferentes servidores para que nuestras páginas web respondan más rápido.'
                        }
                    }
                },
                statistics: {
                    locale: {
                        en: {
                            title: "Statistics Cookies",
                            desc: 'These cookies are also known as "performance cookies", these cookies collect information about how you use our websites, like which web pages you visited and which links you clicked on. These cookies can help us to improve your browsing experience on our websites.'
                        },
                        de: {
                            title: "Statistik-Cookies",
                            desc: "Diese Cookies sammeln Informationen darüber, wie du unsere Webseiten benutzt, z. B. welche Seiten du besucht hast und auf welche Links du geklickt hast. Diese Cookies können uns helfen, deinen Besuch auf unseren Webseiten besser zu gestallten."
                        },
                        it: {
                            title: "Cookie di statistica",
                            desc: 'These cookies are also known as "performance cookies", these cookies collect information about how you use our websites, like which webpages you visited and which links you clicked on. These cookies can help us to improve your browsing experience on our websites.'
                        },
                        fr: {
                            title: "Cookies statistiques",
                            desc: 'Questi cookie sono anche noti come "cookie di prestazioni" e consentono di raccogliere informazioni sull’utilizzo dei siti Web, come le pagine Web visitate e i collegamenti selezionati. Questi cookie consentono di migliorare la navigazione dei nostri siti Web.'
                        },
                        es: {
                            title: "Cookies de estadísticas",
                            desc: 'Estas cookies, también conocidas como "cookies de rendimiento", recopilan información acerca de cómo usas nuestro sitio web, qué páginas web visitas y qué enlaces abres. Estas cookies nos ayudan a mejorar tu experiencia de navegación en nuestros sitios web.'
                        }
                    }
                },
                marketing: {
                    locale: {
                        en: {
                            title: "Marketing Cookies",
                            desc: "These cookies can track your online activities to help us deliver more relevant advertisements or limit the number of time that the same advertisement is shown to you."
                        },
                        de: {
                            title: "Marketing-Cookies",
                            desc: "Diese Cookies berücksichtigen deine Online-Aktivitäten und helfen uns relevante Werbung anzuzeigen oder Werbung zeitlich zu begrenzen."
                        },
                        it: {
                            title: "Cookie di marketing",
                            desc: "Questi cookie consentono di tracciare le attività online per poter offrire pubblicità più pertinenti o limitare il numero di visualizzazioni della stessa pubblicità."
                        },
                        fr: {
                            title: "Cookies marketing",
                            desc: "Ces cookies suivent votre activité en ligne pour nous aider à cibler les publicités contextuelles ou limiter le nombre d’apparition d’une publicité."
                        },
                        es: {
                            title: "Cookies de marketing",
                            desc: "Estas cookies realizan un seguimiento de tus actividades en línea para ayudarnos a ofrecerte anuncios más relevantes o limitar el número de veces que se muestra el mismo anuncio."
                        }
                    }
                }
            }
        },
        L = {
            appendChild: [],
            insertBefore: [],
            wrappers: []
        },
        O = new(function() {
            function e() {
                t(this, e), this.observers = {}
            }
            return o(e, [{
                key: "on",
                value: function(e, t) {
                    var i = this;
                    return e.split(" ").forEach((function(e) {
                        i.observers[e] = i.observers[e] || [], i.observers[e].push(t)
                    })), this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) {
                        return e !== t
                    })) : delete this.observers[e])
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) i[o - 1] = arguments[o];
                    if (this.observers[e]) {
                        var n = [].concat(this.observers[e]);
                        n.forEach((function(e) {
                            e.apply(void 0, i)
                        }))
                    }
                    if (this.observers["*"]) {
                        var r = [].concat(this.observers["*"]);
                        r.forEach((function(t) {
                            t.apply(t, [e].concat(i))
                        }))
                    }
                }
            }]), e
        }()),
        S = function() {
            function e(i, o) {
                t(this, e), this.buffer = L, this.setConfiguration = this.setConfiguration.bind(this), this.options = E, this.on = O.on.bind(O), this.emit = O.emit.bind(O), this.logger = this.logger.bind(this), this.setConfiguration(i, o), this.isRegionAllow = C, this.isUserAgentAllow = z
            }
            return o(e, [{
                key: "setConfiguration",
                value: function(e, t) {
                    b(this.options, t, e), this.cookieToConfig(), this.overrideOpenConfig()
                }
            }, {
                key: "overrideOpenConfig",
                value: function() {
                    var e = this.options,
                        t = e.country,
                        i = e.extraCountry,
                        o = e.extraUA,
                        n = e.openInIframe;
                    e.hasOwnProperty("open") || (e.open = !0, C(t, i) && (e.open = !1), z(o) && (e.open = !1), n || window.self === window.top || (e.open = !1), "US" !== t || z(o) || (e.open = !0))
                }
            }, {
                key: "cookieToConfig",
                value: function() {
                    var e = this.options;

                    function t() {
                        return w("dji_consentmanager", "", -1, "".concat(x()), "/"), location.reload(), !1
                    }
                    var i = y("dji_consentmanager");
                    if (e.consentCookie = i, i) try {
                        var o = JSON.parse(decodeURIComponent(i));
                        if (o.version !== e.cookieVersion) return t();
                        "accept" === o.opt ? e.acceptCookie = !0 : e.acceptCookie = !1, e.cookieExists = !0
                    } catch (e) {
                        return this.emit("error", e), t()
                    }
                }
            }, {
                key: "logger",
                value: function(e) {
                    var t = this.options,
                        i = t.loggerUrl,
                        o = t.loggerEnabled,
                        n = t.loggerParams,
                        r = t.country,
                        s = t.language,
                        a = t.appId,
                        c = t.environment;
                    if (!o || !i) return null;
                    var l = {
                        appId: a,
                        environment: c,
                        country: r,
                        language: s,
                        version: "1.15.5"
                    };
                    b(l, n, e);
                    var u = Object.keys(l).map((function(e) {
                            return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(l[e]))
                        })).join("&"),
                        d = new Image;
                    return d.setAttribute("crossorigin", "anonymous"), d.src = "".concat(i, "?").concat(u), d
                }
            }]), e
        }(),
        q = function(e) {
            n(r, e);
            var i = l(r);

            function r(e) {
                var o;
                return t(this, r), (o = i.call(this, e)).hasPassGdprConsent = o.hasPassGdprConsent.bind(a(o)), o
            }
            return o(r, [{
                key: "hasPassGdprConsent",
                value: function() {
                    var e = this.options,
                        t = e.country,
                        i = e.extraCountry,
                        o = e.extraUA,
                        n = e.acceptCookie,
                        r = e.consentCookie,
                        s = C(t, i),
                        a = s && "US" !== t,
                        c = z(o);
                    return r ? !!(n || a || c) : !!s || !!c
                }
            }]), r
        }(S),
        T = function(e) {
            n(r, e);
            var i = l(r);

            function r(e) {
                return t(this, r), i.call(this, e)
            }
            return o(r, [{
                key: "init",
                value: function() {
                    this.overrideAppendChild(), this.overrideInsertBefore()
                }
            }, {
                key: "overrideAppendChild",
                value: function() {
                    var e = this.buffer,
                        t = this.options,
                        i = this.hasPassGdprConsent;
                    Element.prototype.appendChild = function(o) {
                        if ("SCRIPT" !== arguments[0].tagName || i() || !j(arguments[0].outerHTML, t.services)) return Node.prototype.appendChild.apply(this, arguments);
                        e.appendChild.push({
                            this: this,
                            arguments: arguments
                        })
                    }
                }
            }, {
                key: "overrideInsertBefore",
                value: function() {
                    var e = this.buffer,
                        t = this.options,
                        i = this.hasPassGdprConsent;
                    Element.prototype.insertBefore = function(o) {
                        if ("SCRIPT" !== arguments[0].tagName || i() || !j(arguments[0].outerHTML, t.services)) return Node.prototype.insertBefore.apply(this, arguments);
                        e.insertBefore.push({
                            this: this,
                            arguments: arguments
                        })
                    }
                }
            }]), r
        }(q),
        W = function(e) {
            n(s, e);
            var i = l(s);

            function s(e) {
                return t(this, s), i.call(this, e)
            }
            return o(s, [{
                key: "init",
                value: function() {
                    this.filterTags(), this.observer().observe(document.documentElement, {
                        childList: !0,
                        subtree: !0
                    })
                }
            }, {
                key: "filterTags",
                value: function() {
                    var e = this;
                    P((function() {
                        var t = document.querySelectorAll('script[type="'.concat("javascript/blocked", '"]'));
                        Array.prototype.forEach.call(t, (function(t) {
                            if (u(r(s.prototype), "hasPassGdprConsent", e).call(e)) {
                                var i = document.createElement("script"),
                                    o = t.parentNode;
                                for (var n in t.type = "application/javascript", t.attributes) {
                                    var a = t.attributes[n];
                                    i.setAttribute(a.nodeName, a.nodeValue)
                                }
                                i.innerHTML = t.innerHTML, o.insertBefore(i, t), o.removeChild(t)
                            }
                        }))
                    }))
                }
            }, {
                key: "observer",
                value: function() {
                    var e = this;
                    return new MutationObserver((function(t) {
                        if (!u(r(s.prototype), "hasPassGdprConsent", e).call(e))
                            for (var i = e.options.services, o = 0; o < t.length; o++)
                                for (var n = t[o].addedNodes, a = function(e) {
                                        var t = n[e];
                                        if (1 === t.nodeType && "SCRIPT" === t.tagName && j(t.src, i)) {
                                            t.type = "javascript/blocked";
                                            t.addEventListener("beforescriptexecute", (function e(i) {
                                                "javascript/blocked" === t.getAttribute("type") && i.preventDefault(), t.removeEventListener("beforescriptexecute", e)
                                            }))
                                        }
                                    }, c = 0; c < n.length; c++) a(c)
                    }))
                }
            }]), s
        }(q),
        D = function(e) {
            n(r, e);
            var i = l(r);

            function r(e) {
                var o;
                return t(this, r), (o = i.call(this, e)).wrapper = function() {}, o.runWrappers = o.runWrappers.bind(a(o)), o
            }
            return o(r, [{
                key: "init",
                value: function() {
                    this.filterWrappers(), this.on("statusChanged", this.runWrappers)
                }
            }, {
                key: "filterWrappers",
                value: function() {
                    var e = this.hasPassGdprConsent;
                    this.wrapper = function() {
                        var t = arguments.length > 1 ? arguments[1] : void 0;
                        e() ? t() : this.buffer.wrappers.push(t)
                    }
                }
            }, {
                key: "runWrappers",
                value: function(e) {
                    if ("accept" === e) {
                        for (var t in this.buffer.wrappers) {
                            (0, this.buffer.wrappers[t])()
                        }
                        this.buffer.wrappers = []
                    }
                }
            }]), r
        }(q),
        I = function(e) {
            n(r, e);
            var i = l(r);

            function r(e) {
                return t(this, r), i.call(this, e)
            }
            return o(r, [{
                key: "init",
                value: function() {
                    this.filterLocalCookies()
                }
            }, {
                key: "getCookieDescriptor",
                value: function() {
                    var e;
                    return (e = Object.getOwnPropertyDescriptor(Document.prototype, "cookie") || Object.getOwnPropertyDescriptor(HTMLDocument.prototype, "cookie")) || ((e = {}).get = Document.prototype.__lookupGetter__("cookie"), e.set = Document.prototype.__lookupSetter__("cookie")), e
                }
            }, {
                key: "filterLocalCookies",
                value: function() {
                    var e = this.getCookieDescriptor(),
                        t = this.options.cookies,
                        i = this;
                    "function" == typeof e.get && t && t.length && Object.defineProperty(document, "cookie", {
                        configurable: !0,
                        get: function() {
                            return e.get.apply(document)
                        },
                        set: function() {
                            var o = arguments,
                                n = arguments[0].split("=")[0],
                                r = i.hasPassGdprConsent(),
                                s = r || !t || !t.length || t && t.length && !i.isLocalBlackListCookie(n, t);
                            s && e.set.apply(document, o)
                        }
                    })
                }
            }, {
                key: "isLocalBlackListCookie",
                value: function(e, t) {
                    return t.filter((function(t) {
                        return "string" == typeof t.name ? e.indexOf(t.name) > -1 : t.name.test(e)
                    })).length > 0
                }
            }]), r
        }(q);

    function B(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            o = arguments.length > 3 ? arguments[3] : void 0;
        return o.reduce((function(e, i) {
            return e && e[i] ? e[i] : "[missing translation: ".concat(t, "/").concat(o.join("/"), "]")
        }), e[t] || e["".concat(i)])
    }

    function N(e, t) {
        return e.replace(/\{\{([\w\d]+)\}\}/g, (function(e, i) {
            return t[i] || "[missing context: ".concat(i, "]")
        }))
    }

    function M(e, t, i, o) {
        for (var n = i.split("."), r = B(e, t, o, n), s = arguments.length, a = new Array(s > 4 ? s - 4 : 0), c = 4; c < s; c++) a[c - 4] = arguments[c];
        return a.length > 0 ? N.apply(void 0, [r].concat(a)) : r
    }! function(e, t) {
        void 0 === t && (t = {});
        var i = t.insertAt;
        if (e && "undefined" != typeof document) {
            var o = document.head || document.getElementsByTagName("head")[0],
                n = document.createElement("style");
            n.type = "text/css", "top" === i && o.firstChild ? o.insertBefore(n, o.firstChild) : o.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
        }
    }(".cc-window,.cc-window *{-webkit-box-sizing:border-box;box-sizing:border-box}.cc-window *{color:rgba(0,0,0,.65);font-size:14px;font-weight:400;line-height:24px}.cc-window a{color:#1890ff;text-decoration:none}.cc-window a:hover{text-decoration:underline}.cc-window a:hover,.cc-window button:hover{cursor:pointer}.cc-window .cc-mask{position:absolute;background:rgba(0,0,0,.6);top:0;left:0;width:100vw;height:100vh;opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.cc-window .cc-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid rgba(0,0,0,.09)}.cc-window .cc-title{padding:16px 24px;line-height:24px;font-size:16px;font-weight:500;color:rgba(0,0,0,.85)}.cc-window .cc-body{padding:16px 0}.cc-window .cc-close{display:block;margin:8px;padding:13px 0;-webkit-box-flex:0;-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px;width:40px;height:40px;cursor:pointer;text-align:center;border-radius:20px;-webkit-transition:.3s;transition:.3s}.cc-window .cc-close:hover{background:rgba(0,0,0,.04)}.cc-window .cc-close svg{vertical-align:top}.cc-window .cc-btn{position:relative;padding:0 15px;border:1px solid rgba(0,0,0,.15);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff;color:rgba(0,0,0,.65);font-weight:400;font-family:inherit;white-space:nowrap;text-align:center;-webkit-transition:all .3s ease;transition:all .3s ease;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:40px;font-size:16px;line-height:20px;letter-spacing:-.02em;border-radius:4px;display:block;width:100%}.cc-window .cc-btn+.cc-btn{margin-top:8px}.cc-window .cc-btn:hover{cursor:pointer;text-decoration:none!important;background:rgba(0,0,0,.04);color:rgba(0,0,0,.85)}.cc-window .cc-btn:active{background:rgba(0,0,0,.09);-webkit-box-shadow:none;box-shadow:none;outline:none}.cc-window .cc-btn:focus{z-index:1;-webkit-box-shadow:0 0 0 2px hsla(0,0%,78.4%,.2);box-shadow:0 0 0 2px hsla(0,0%,78.4%,.2);outline:none}.cc-window .cc-btn-primary{background:-webkit-gradient(linear,left top,left bottom,from(#535759),to(#3b3e40));background:-webkit-linear-gradient(#535759,#3b3e40);background:linear-gradient(#535759,#3b3e40);color:#fff;border:none}.cc-window .cc-btn-primary:hover{background:-webkit-gradient(linear,left top,left bottom,from(#6c7073),to(#535759));background:-webkit-linear-gradient(#6c7073,#535759);background:linear-gradient(#6c7073,#535759);color:#fff}.cc-window .cc-btn-primary:active{background:-webkit-gradient(linear,left top,left bottom,from(#3b3e40),to(#535759));background:-webkit-linear-gradient(#3b3e40,#535759);background:linear-gradient(#3b3e40,#535759);color:#fff}.cc-window .cc-group{margin:24px 0 0}.cc-window .cc-group .cc-title{font-size:18px}.cc-window .cc-group .cc-desc{margin:0 0 0 40px}.cc-visible .cc-mask{opacity:1}.cc-bar{position:fixed;bottom:0;left:0;display:none;width:100%;z-index:9998;background-color:#fff;opacity:0;-webkit-transform:translateY(50%);transform:translateY(50%);-webkit-transition:all .3s ease-out;transition:all .3s ease-out;-webkit-box-shadow:0 -4px 8px rgba(0,0,0,.1);box-shadow:0 -4px 8px rgba(0,0,0,.1)}.cc-bar.cc-visible{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.cc-bar .cc-body{padding:16px 24px}.cc-bar .cc-footer{padding:0 24px 24px}.cc-modal{position:fixed;bottom:0;left:0;display:none;width:100%;height:100%;outline:0;z-index:9999;overflow:hidden;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.cc-modal.cc-visible{display:block}.cc-modal.cc-visible .cc-dialog{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.cc-modal .cc-dialog{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;max-width:800px;min-height:260px;margin:0 auto;background-color:#fff;-webkit-transition:all .3s ease-out;transition:all .3s ease-out;max-height:100%;-webkit-box-shadow:0 4px 8px rgba(0,0,0,.2);box-shadow:0 4px 8px rgba(0,0,0,.2);opacity:0;-webkit-transform:translateY(50%);transform:translateY(50%)}.cc-modal .cc-body{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:24px;font-size:16px;overflow-y:auto;-webkit-overflow-scrolling:touch}.cc-modal .cc-desc{font-size:16px}.cc-modal .cc-group .cc-title{margin-bottom:8px;padding:0}.cc-modal .cc-icon{width:24px;height:24px;display:inline-block;text-align:center;padding:1px;vertical-align:bottom;margin-right:16px}.cc-modal .cc-footer,.cc-modal .cc-header{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.cc-modal .cc-footer{padding:12px 24px;text-align:right;border-top:1px solid rgba(0,0,0,.09)}.cc-classic .cc-btn-primary{background:-webkit-gradient(linear,left top,left bottom,from(#40a9ff),to(#1890ff));background:-webkit-linear-gradient(#40a9ff,#1890ff);background:linear-gradient(#40a9ff,#1890ff);color:#fff}.cc-classic .cc-btn-primary:hover{background:-webkit-gradient(linear,left top,left bottom,from(#69c0ff),to(#40a9ff));background:-webkit-linear-gradient(#69c0ff,#40a9ff);background:linear-gradient(#69c0ff,#40a9ff);color:#fff}.cc-classic .cc-btn-primary:active{background:-webkit-gradient(linear,left top,left bottom,from(#1890ff),to(#40a9ff));background:-webkit-linear-gradient(#1890ff,#40a9ff);background:linear-gradient(#1890ff,#40a9ff);color:#fff}@media (min-width:576px){.cc-window .cc-footer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.cc-window .cc-btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:auto}.cc-window .cc-btn+.cc-btn{margin-right:8px;margin-top:0}.cc-bar .cc-header{border-bottom:none}.cc-bar .cc-dialog{position:relative;max-width:1248px;margin:0 auto;padding:0 24px}.cc-bar .cc-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 0 24px}.cc-bar .cc-body{padding:0;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;max-width:700px;margin-right:1em}.cc-bar .cc-footer{padding:0;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;white-space:nowrap}.cc-bar .cc-title{padding:24px 24px 0 0}.cc-bar .cc-close{margin:16px 0 0}.cc-modal{bottom:auto;top:0;height:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.cc-modal .cc-dialog{max-height:calc(100% - 192px);border-radius:4px}.cc-modal .cc-footer .cc-btn{height:32px;font-size:14px}.cc-notification .cc-dialog{height:auto}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.cc-modal .cc-dialog .cc-body{max-height:calc(100vh - 308px);min-height:146px}}");
    var R = '<svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M14.164 8.117a.788.788 0 011.078 0 .788.788 0 010 1.078l-5.297 5.297a.814.814 0 01-.539.211.818.818 0 01-.539-.21l-2.25-2.25a.788.788 0 010-1.079.788.788 0 011.078 0l1.711 1.734 4.758-4.78zM11 21.5C5.201 21.5.5 16.799.5 11S5.201.5 11 .5 21.5 5.201 21.5 11 16.799 21.5 11 21.5zm0-1.5a9 9 0 100-18 9 9 0 000 18z" fill="#52C41A" fill-rule="evenodd"/></svg>',
        _ = '<svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M10.26 11.76h-3a.75.75 0 110-1.5h7.5a.75.75 0 110 1.5h-4.5zM11 21.5C5.201 21.5.5 16.799.5 11S5.201.5 11 .5 21.5 5.201 21.5 11 16.799 21.5 11 21.5zm0-1.5a9 9 0 100-18 9 9 0 000 18z" fill="#000" fill-rule="evenodd" fill-opacity=".25"/></svg>',
        U = function(e) {
            n(r, e);
            var i = l(r);

            function r(e) {
                var o;
                return t(this, r), (o = i.call(this, e, r.defaultOptions)).elements = {}, o.motion = {}, o.buildInterface((function() {
                    o.addEventListeners()
                })), o.open = o.open.bind(a(o)), o.close = o.close.bind(a(o)), o
            }
            return o(r, [{
                key: "t",
                value: function(e) {
                    for (var t = this.options, i = t.locale, o = t.language, n = t.fallbackLng, r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) s[a - 1] = arguments[a];
                    return M.apply(void 0, [i, o, e, n].concat(s))
                }
            }, {
                key: "open",
                value: function(e) {
                    var t = this;
                    this.elements[e] && !this.motion[e] && (this.motion[e] = !0, this.elements[e].style.display = "flex", clearTimeout(this.timer), this.timer = setTimeout((function() {
                        t.motion[e] = !1, t.elements[e].classList.add("cc-visible")
                    }), 10), this.emit("popupOpened", e), this.logger({
                        event: "popupOpened",
                        type: e
                    }))
                }
            }, {
                key: "close",
                value: function(e) {
                    var t = this;
                    this.elements[e] && !this.motion[e] && (this.motion[e] = !0, this.elements[e].classList.remove("cc-visible"), setTimeout((function() {
                        t.motion[e] = !1, t.elements[e].style.display = "none"
                    }), 1e3))
                }
            }, {
                key: "closeMarkup",
                value: function() {
                    return '<a class="cc-close">'.concat('<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 6.293l5.086-5.086a1 1 0 0 1 1.414 0L7.707 7l5.086 5.086a1 1 0 0 1 0 1.414L7 7.707l-5.086 5.086a1 1 0 0 1-1.414 0L6.293 7 1.207 1.914a1 1 0 0 1 0-1.414L7 6.293z" fill="#000" fill-rule="evenodd" fill-opacity=".85"/></svg>', "</a>")
                }
            }, {
                key: "link",
                value: function() {
                    return {
                        cookiePreferences: '<a class="cc-consent-prefernces">'.concat(this.t("cookiePreferences"), "</a>"),
                        privacyPolicy: '<a href="'.concat(this.options.privacyPolicy, '" rel="noreferrer noopener" target="_blank">').concat(this.t("privacyPolicy"), "</a>")
                    }
                }
            }, {
                key: "buildBar",
                value: function() {
                    var e = "bar" === this.options.bar.appearance,
                        t = '<div class="cc-window cc-notification cc-'.concat(this.options.bar.appearance, " cc-").concat(this.options.theme, '">\n      ').concat(this.options.bar.overlay ? '<div class="cc-mask"></div>' : "", '\n      <div class="cc-dialog" style="max-width: ').concat(this.options.bar.maxWidth, "px;width: ").concat(this.options.bar.maxWidth, 'px;">\n        <div class="cc-header">\n          <div class="cc-title">').concat(this.t("bar.title"), "</div>\n          ").concat(this.options.bar.closable ? this.closeMarkup() : "", "\n        </div>\n        ").concat(e ? '<div class="cc-content">' : "", '\n          <div class="cc-body">\n            <div class="cc-text">').concat(this.t("bar.desc", this.link()), '</div>\n          </div>\n          <div class="cc-footer">\n            <button class="cc-consent-accept cc-btn cc-btn-primary">').concat(this.t("acceptAll"), '</button><button class="cc-consent-prefernces cc-btn cc-btn-default">').concat(this.t("cookiePreferences"), "</button>\n          </div>\n        ").concat(e ? "</div>" : "", "\n      </div>\n    </div>");
                    return this.el(t)
                }
            }, {
                key: "buildModal",
                value: function() {
                    var e = this,
                        t = this.options.fallbackLng,
                        i = Object.keys(this.options.categories).map((function(i) {
                            var o = e.options.categories[i];
                            return '<dl class="cc-group">\n      <dt class="cc-title"><span class="cc-icon">'.concat(o.necessary || e.options.acceptCookie || "US" === e.options.country && !e.options.cookieExists ? R : _, "</span>").concat(M(o.locale, e.options.language, "title", t), '</dt>\n      <dd class="cc-desc">').concat(M(o.locale, e.options.language, "desc", t), "</dd>\n    </dl>")
                        })).join(""),
                        o = '<div class="cc-window cc-configuration cc-modal cc-'.concat(this.options.theme, '">\n      <div class="cc-mask"></div>\n      <div class="cc-dialog" style="max-width: ').concat(this.options.modal.maxWidth, "px;width: ").concat(this.options.modal.maxWidth, 'px;">\n        <div class="cc-header">\n          <div class="cc-title">').concat(this.t("cookiePreferences"), "</div>\n          ").concat(this.closeMarkup(), '\n        </div>\n        <div class="cc-body">\n          <div class="cc-desc">').concat(this.t("modal.desc", this.link()), "</div>\n          ").concat(i, '\n        </div>\n        <div class="cc-footer">\n          <button class="cc-consent-accept cc-btn cc-btn-primary">').concat(this.t("acceptAll"), '</button><button class="cc-btn cc-btn-default cc-js-modal-submit">').concat(this.t("requiredOnly"), "</button>\n        </div>\n      </div>\n    </div>");
                    return this.el(o)
                }
            }, {
                key: "el",
                value: function(e) {
                    var t = document.createElement("div");
                    return t.innerHTML = e, t.children[0]
                }
            }, {
                key: "mount",
                value: function(e, t) {
                    try {
                        e.appendChild(t)
                    } catch (e) {
                        this.emit("error", new Error("No container to attach too."))
                    }
                    return t
                }
            }, {
                key: "render",
                value: function(e, t, i) {
                    var o = this.options;
                    if (void 0 === i && (i = function() {}), void 0 !== this.elements[e]) return this.elements[e].parentNode.replaceChild(t, this.elements[e]), this.elements[e] = t, i(t), t;
                    var n = "function" == typeof o.container ? o.container() : document.body,
                        r = this.mount(n, t);
                    return r && (this.elements[e] = r), i(r), r
                }
            }, {
                key: "buildInterface",
                value: function(e) {
                    var t = this,
                        i = this;
                    P((function() {
                        i.render("bar", i.buildBar(), (function(e) {
                            !i.options.cookieExists && i.options.showAuto && setTimeout((function() {
                                t.open("bar")
                            }), t.options.delay)
                        })), i.render("modal", i.buildModal()), "function" == typeof e && e()
                    }))
                }
            }, {
                key: "replaceScriptTags",
                value: function() {
                    var e = document.querySelectorAll('script[type="javascript/blocked"]');
                    Array.prototype.forEach.call(e, (function(e) {
                        var t = document.createElement("script"),
                            i = e.parentNode;
                        for (var o in e.type = "application/javascript", e.attributes) {
                            var n = e.attributes[o];
                            t.setAttribute(n.nodeName, n.nodeValue)
                        }
                        t.innerHTML = e.innerHTML, i.insertBefore(t, e), i.removeChild(e)
                    }))
                }
            }, {
                key: "updateIcon",
                value: function(e) {
                    var t = this.elements.modal.querySelectorAll(".cc-icon");
                    Array.prototype.forEach.call(t, (function(t, i) {
                        0 !== i && (t.innerHTML = "accept" === e ? R : _)
                    }))
                }
            }, {
                key: "addEventListeners",
                value: function() {
                    var e = this,
                        t = document.querySelectorAll(".cc-consent-accept");
                    Array.prototype.forEach.call(t, (function(t) {
                        t.addEventListener("click", (function() {
                            e.buildCookie((function(t) {
                                e.setCookieCallback(t), e.updateIcon("accept"), e.writeBufferToDOM(), e.replaceScriptTags(), e.emit("statusChanged", "accept")
                            }), "accept"), e.logger({
                                event: "statusChanged",
                                type: "accept"
                            }), e.close("bar"), e.close("modal")
                        }))
                    }));
                    var i = this.elements.bar.querySelector(".cc-close");
                    i && i.addEventListener("click", (function() {
                        e.emit("closeCookieBanner"), e.close("bar"), e.logger({
                            event: "closeCookieBanner"
                        })
                    })), document.body.addEventListener("click", (function(t) {
                        var i = t && t.target;
                        if (i) {
                            for (; !i.classList || !i.classList.contains("cc-consent-prefernces");) {
                                if (!i.parentNode || i === document.body) {
                                    i = null;
                                    break
                                }
                                i = i.parentNode
                            }
                            i && (t && t.preventDefault(), e.open("modal"))
                        }
                    })), this.elements.modal.querySelector(".cc-close").addEventListener("click", (function() {
                        e.close("modal"), e.emit("closeCookiePreference"), e.logger({
                            event: "closeCookiePreference"
                        })
                    })), this.elements.modal.querySelector(".cc-js-modal-submit").addEventListener("click", (function() {
                        e.buildCookie((function(t) {
                            e.setCookieCallback(t, (function() {
                                e.updateIcon("deny"), e.close("bar"), e.close("modal")
                            })), e.emit("statusChanged", "deny"), e.logger({
                                event: "statusChanged",
                                type: "deny"
                            })
                        }), "deny")
                    }))
                }
            }, {
                key: "writeBufferToDOM",
                value: function() {
                    for (var e in this.buffer.appendChild) {
                        var t = this.buffer.appendChild[e];
                        Node.prototype.appendChild.apply(t.this, t.arguments)
                    }
                    for (var i in this.buffer.appendChild = [], this.buffer.insertBefore) {
                        var o = this.buffer.insertBefore[i];
                        o.arguments[1] = null === o.arguments[0].parentNode ? o.this.lastChild : o.arguments[1], Node.prototype.insertBefore.apply(o.this, o.arguments)
                    }
                    this.buffer.insertBefore = []
                }
            }, {
                key: "buildCookie",
                value: function(e, t) {
                    this.options.acceptCookie = "accept" === t;
                    var i = {
                        version: this.options.cookieVersion
                    };
                    return i.opt = t, e && e(i), i
                }
            }, {
                key: "setCookieCallback",
                value: function(e, t) {
                    var i = "".concat(encodeURIComponent(JSON.stringify(e)));
                    w("dji_consentmanager", i, 36135, "".concat(x()), "/"), this.options.consentCookie = i, t && t()
                }
            }, {
                key: "destroy",
                value: function() {}
            }]), r
        }(S);
    U.defaultOptions = {
        theme: "default",
        bar: {
            appearance: "bar",
            maxWidth: 1248,
            overlay: !1,
            closable: !0
        },
        modal: {
            maxWidth: 800
        }
    };
    var G = function(e) {
        n(s, e);
        var i = l(s);

        function s(e) {
            return t(this, s), i.call(this, e)
        }
        return o(s, [{
            key: "init",
            value: function() {
                this.removeUnwantedCookies()
            }
        }, {
            key: "removeUnwantedCookies",
            value: function() {
                var e = [],
                    t = this.options.cookies;
                if (document.cookie.split(";").map((function(t) {
                        e.push(t.split("=")[0].replace(/(^\s*)|(\s*&)/, ""))
                    })), "Array" === A(t) && !u(r(s.prototype), "hasPassGdprConsent", this).call(this))
                    for (var i in t) {
                        var o = A(t[i].name);
                        if ("String" === o) e.indexOf(t[i].name) > -1 && w(t[i].name, "", -1, t[i].domain ? t[i].domain : "", "/");
                        else if ("RegExp" === o) {
                            var n = t[i];
                            for (var a in e) e[a].match(n.name) && w(e[a], "", -1, t[i].domain ? t[i].domain : "", "/")
                        }
                    }
            }
        }]), s
    }(q);
    return function(e) {
        n(r, e);
        var i = l(r);

        function r(e) {
            var o;
            return t(this, r), (o = i.call(this, e)).init(e), o
        }
        return o(r, [{
            key: "init",
            value: function(e) {
                var t = this,
                    i = new G(e),
                    o = new T(e),
                    n = new W(e),
                    r = new D(e),
                    s = new I(e),
                    a = this.options.open;
                if (i.init(), o.init(), n.init(), r.init(), s.init(), a) {
                    var c = new U(e);
                    this.elements = c.elements, this.open = c.open, this.close = c.close
                } else P((function() {
                    var e = document.querySelectorAll(".cc-consent-prefernces");
                    Array.prototype.forEach.call(e, (function(e) {
                        e.style.display = "none"
                    }))
                }));
                this.wrapper = r.wrapper, setTimeout((function() {
                    t.emit("initialized"), t.logger({
                        event: "initialized"
                    })
                }))
            }
        }, {
            key: "setLocale",
            value: function(e) {
                return this.options.language = e, this
            }
        }, {
            key: "setCountry",
            value: function(e) {
                return this.options.country = e, this
            }
        }, {
            key: "version",
            get: function() {
                return "1.15.5"
            }
        }]), r
    }(S)
}));