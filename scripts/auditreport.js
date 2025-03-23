/*
 Copyright and licenses see https://www.dynatrace.com/company/trust-center/customers/reports/ */
(function () {
    function Na() {
        document.cookie = "__dTCookie=1;SameSite=Lax";
        const Fa = document.cookie.includes("__dTCookie");
        document.cookie = "__dTCookie=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
        return Fa;
    }
    function Sa() {
        return void 0 === Ta.dialogArguments
            ? navigator.cookieEnabled || Na()
            : Na();
    }
    function eb() {
        if (Sa()) {
            var Fa = Ta.dT_,
                Ra = null === Fa || void 0 === Fa ? void 0 : Fa.platformPrefix,
                va;
            if ((va = !Fa || Ra)) {
                var Ja;
                (va =
                    null === Fa || void 0 === Fa
                        ? void 0
                        : Fa.minAgentVersion) && "10307250124095659" < `${va}`
                    ? (console.log(
                          "[CookiePrefix/initConfig] Min agent version detected, and javascript agent is older - the javascript agent will not be initialized!"
                      ),
                      (va = !1))
                    : ((va =
                          (null === (Ja = document.currentScript) ||
                          void 0 === Ja
                              ? void 0
                              : Ja.getAttribute("data-dtconfig")) ||
                          "app=ca896ddec2fd3e19|cuc=ajex64gr|cors=1|mel=100000|expw=1|featureHash=ICA7NVfqrux|dpvc=1|lastModification=1741989642030|reportUrl=https://bf29241ovs.bf.dynatrace.com/bf|tp=500,50,0|rdnt=1|uxrgce=1|agentUri=https://js-cdn.dynatrace.com/jstag/16294a69b33/ruxitagent_ICA7NVfqrux_10307250124095659.js|auto=true|domain=|rid=RID_|rpid="),
                      Ra && !va.includes(`cuc=${Ra}`)
                          ? (console.log(
                                `[CookiePrefix/initConfig] value of platformPrefix [${Ra}] does not match the "cuc" value in the current config - initConfig will not initialize!`
                            ),
                            (va = !1))
                          : (va = !0));
            }
            va &&
                ((Fa = {
                    cfg: "app=ca896ddec2fd3e19|cuc=ajex64gr|cors=1|mel=100000|expw=1|featureHash=ICA7NVfqrux|dpvc=1|lastModification=1741989642030|reportUrl=https://bf29241ovs.bf.dynatrace.com/bf|tp=500,50,0|rdnt=1|uxrgce=1|agentUri=https://js-cdn.dynatrace.com/jstag/16294a69b33/ruxitagent_ICA7NVfqrux_10307250124095659.js|auto=true|domain=|rid=RID_|rpid=",
                    iCE: Sa,
                    platformCookieOffset:
                        null === Fa || void 0 === Fa
                            ? void 0
                            : Fa.platformCookieOffset,
                }),
                Ra && (Fa.platformPrefix = Ra),
                (Ta.dT_ = Fa));
        }
    }
    this.dT_ && dT_.prm && dT_.prm();
    var Ta =
        "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof window
            ? window
            : void 0;
    if (!("documentMode" in document) || isNaN(document.documentMode)) {
        const Fa = Ta.dT_;
        !Fa || (!Fa.cfg && Fa.platformPrefix)
            ? eb()
            : Fa.gCP ||
              (Ta.console.log(
                  "Duplicate agent injection detected, turning off redundant initConfig."
              ),
              (Fa.di = 1));
    }
})();
(function () {
    function Na(f) {
        var q;
        return function () {
            if (q) return q;
            var C,
                Q,
                W,
                Oa,
                cb =
                    -1 !== Nf
                        ? Nf
                        : (null ===
                              (Q =
                                  null === (C = Ca.dT_) || void 0 === C
                                      ? void 0
                                      : C.scv) || void 0 === Q
                              ? void 0
                              : Q.call(C, "postfix")) ||
                          (null ===
                              (Oa =
                                  null === (W = Ca.dT_) || void 0 === W
                                      ? void 0
                                      : W.gCP) || void 0 === Oa
                              ? void 0
                              : Oa.call(W));
            return (q = C = (Nf = cb) ? "".concat(f).concat(cb) : f);
        };
    }
    function Sa() {
        var f = 0;
        try {
            f = Math.round(Ca.performance.timeOrigin);
        } catch (q) {}
        if (0 >= f || isNaN(f) || !isFinite(f)) {
            oe.push({
                severity: "Warning",
                type: "ptoi",
                text: `performance.timeOrigin is invalid, with a value of [${f}]. Falling back to performance.timing.navigationStart`,
            });
            f = 0;
            try {
                f = Ca.performance.timing.navigationStart;
            } catch (q) {}
            f = 0 >= f || isNaN(f) || !isFinite(f) ? pe : f;
        }
        Eb = f;
        Ib = eb;
        return Eb;
    }
    function eb() {
        return Eb;
    }
    function Ta() {
        return Ib();
    }
    function Fa() {
        var f;
        let q = 0;
        if (
            null ===
                (f = null === Ca || void 0 === Ca ? void 0 : Ca.performance) ||
            void 0 === f
                ? 0
                : f.now
        )
            try {
                q = Math.round(Ca.performance.now());
            } catch (C) {}
        return 0 >= q || isNaN(q) || !isFinite(q)
            ? new Date().getTime() - Ib()
            : q;
    }
    function Ra(f, q) {
        if (!q) return "";
        var C = f + "=";
        f = q.indexOf(C);
        if (0 > f) return "";
        for (; 0 <= f; ) {
            if (0 === f || " " === q.charAt(f - 1) || ";" === q.charAt(f - 1))
                return (
                    (C = f + C.length),
                    (f = q.indexOf(";", f)),
                    0 <= f ? q.substring(C, f) : q.substring(C)
                );
            f = q.indexOf(C, f + C.length);
        }
        return "";
    }
    function va(f) {
        return Ra(f, document.cookie);
    }
    function Ja() {}
    function Ha(f, q = document.cookie) {
        return Ra(f, q);
    }
    function bb() {}
    function $a(f, q) {
        return function () {
            f.apply(q, arguments);
        };
    }
    function ua(f) {
        if (!(this instanceof ua))
            throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof f) throw new TypeError("not a function");
        this.qa = 0;
        this.mc = !1;
        this.va = void 0;
        this.La = [];
        ca(f, this);
    }
    function ka(f, q) {
        for (; 3 === f.qa; ) f = f.va;
        0 === f.qa
            ? f.La.push(q)
            : ((f.mc = !0),
              ua.Hb(function () {
                  var C = 1 === f.qa ? q.ne : q.oe;
                  if (null === C) (1 === f.qa ? na : da)(q.promise, f.va);
                  else {
                      try {
                          var Q = C(f.va);
                      } catch (W) {
                          da(q.promise, W);
                          return;
                      }
                      na(q.promise, Q);
                  }
              }));
    }
    function na(f, q) {
        try {
            if (q === f)
                throw new TypeError(
                    "A promise cannot be resolved with itself."
                );
            if (q && ("object" === typeof q || "function" === typeof q)) {
                var C = q.then;
                if (q instanceof ua) {
                    f.qa = 3;
                    f.va = q;
                    Ka(f);
                    return;
                }
                if ("function" === typeof C) {
                    ca($a(C, q), f);
                    return;
                }
            }
            f.qa = 1;
            f.va = q;
            Ka(f);
        } catch (Q) {
            da(f, Q);
        }
    }
    function da(f, q) {
        f.qa = 2;
        f.va = q;
        Ka(f);
    }
    function Ka(f) {
        2 === f.qa &&
            0 === f.La.length &&
            ua.Hb(function () {
                f.mc || ua.pc(f.va);
            });
        for (var q = 0, C = f.La.length; q < C; q++) ka(f, f.La[q]);
        f.La = null;
    }
    function T(f, q, C) {
        this.ne = "function" === typeof f ? f : null;
        this.oe = "function" === typeof q ? q : null;
        this.promise = C;
    }
    function ca(f, q) {
        var C = !1;
        try {
            f(
                function (Q) {
                    C || ((C = !0), na(q, Q));
                },
                function (Q) {
                    C || ((C = !0), da(q, Q));
                }
            );
        } catch (Q) {
            C || ((C = !0), da(q, Q));
        }
    }
    function V() {
        Vb.Hb = function (f) {
            if ("string" === typeof f)
                throw Error("Promise polyfill called _immediateFn with string");
            f();
        };
        Vb.pc = () => {};
        return Vb;
    }
    function K(f, q = []) {
        var C;
        if (!f || ("object" !== typeof f && "function" !== typeof f)) return !1;
        const Q = "number" !== typeof q ? q : [];
        let W = null;
        const Oa = [];
        switch ("number" === typeof q ? q : 5) {
            case 1:
                W = "Boolean";
                break;
            case 2:
                W = "Number";
                break;
            case 3:
                W = "String";
                break;
            case 4:
                W = "Function";
                break;
            case 5:
                W = "Object";
                break;
            case 6:
                W = "Date";
                Oa.push("getTime");
                break;
            case 7:
                W = "Error";
                Oa.push("name", "message");
                break;
            case 8:
                W = "Element";
                break;
            case 9:
                W = "HTMLElement";
                break;
            case 10:
                W = "HTMLImageElement";
                Oa.push("complete");
                break;
            case 11:
                W = "PerformanceEntry";
                break;
            case 12:
                W = "PerformanceTiming";
                break;
            case 13:
                W = "PerformanceResourceTiming";
                break;
            case 14:
                W = "PerformanceNavigationTiming";
                break;
            case 15:
                W = "CSSRule";
                Oa.push("cssText", "parentStyleSheet");
                break;
            case 16:
                W = "CSSStyleSheet";
                Oa.push("cssRules", "insertRule");
                break;
            case 17:
                W = "Request";
                Oa.push("url");
                break;
            case 18:
                W = "Response";
                Oa.push("ok", "status", "statusText");
                break;
            case 19:
                W = "Set";
                Oa.push("add", "entries", "forEach");
                break;
            case 20:
                W = "Map";
                Oa.push("set", "entries", "forEach");
                break;
            case 21:
                W = "Worker";
                Oa.push("addEventListener", "postMessage", "terminate");
                break;
            case 22:
                W = "XMLHttpRequest";
                Oa.push("open", "send", "setRequestHeader");
                break;
            case 23:
                W = "SVGScriptElement";
                Oa.push("ownerSVGElement", "type");
                break;
            case 24:
                W = "HTMLMetaElement";
                Oa.push("httpEquiv", "content", "name");
                break;
            case 25:
                W = "HTMLHeadElement";
                break;
            case 26:
                W = "ArrayBuffer";
                break;
            case 27:
                (W = "ShadowRoot"), Oa.push("host", "mode");
        }
        const { Of: cb, bg: Zb } = { Of: W, bg: Oa };
        if (!cb) return !1;
        q = Zb.length ? Zb : Q;
        if (!Q.length)
            try {
                if (
                    (Ca[cb] && f instanceof Ca[cb]) ||
                    Object.prototype.toString.call(f) === "[object " + cb + "]"
                )
                    return !0;
                if (f && f.nodeType && 1 === f.nodeType) {
                    const $b =
                        null === (C = f.ownerDocument.defaultView) ||
                        void 0 === C
                            ? void 0
                            : C[cb];
                    if ("function" === typeof $b && f instanceof $b) return !0;
                }
            } catch ($b) {}
        for (const $b of q)
            if (
                ("string" !== typeof $b &&
                    "number" !== typeof $b &&
                    "symbol" !== typeof $b) ||
                !($b in f)
            )
                return !1;
        return !!q.length;
    }
    function pa(f, q, C, Q) {
        "undefined" === typeof Q && (Q = aa(q, !0));
        "boolean" === typeof Q && (Q = aa(q, Q));
        f === Ca
            ? qc && qc(q, C, Q)
            : Oe && K(f, 21)
            ? Vd.call(f, q, C, Q)
            : f.addEventListener &&
              (f === Ca.document || f === Ca.document.documentElement
                  ? Bc.call(f, q, C, Q)
                  : qc.call(f, q, C, Q));
        Q = !1;
        for (let W = oc.length; 0 <= --W; ) {
            const Oa = oc[W];
            if (Oa.object === f && Oa.event === q && Oa.I === C) {
                Q = !0;
                break;
            }
        }
        Q || oc.push({ object: f, event: q, I: C });
    }
    function X(f, q, C, Q) {
        for (let W = oc.length; 0 <= --W; ) {
            const Oa = oc[W];
            if (Oa.object === f && Oa.event === q && Oa.I === C) {
                oc.splice(W, 1);
                break;
            }
        }
        "undefined" === typeof Q && (Q = aa(q, !0));
        "boolean" === typeof Q && (Q = aa(q, Q));
        f === Ca
            ? Dc && Dc(q, C, Q)
            : f.removeEventListener &&
              (f === Ca.document || f === Ca.document.documentElement
                  ? Uc.call(f, q, C, Q)
                  : Dc.call(f, q, C, Q));
    }
    function aa(f, q) {
        let C = !1;
        try {
            if (qc && Wd.includes(f)) {
                const Q = Object.defineProperty({}, "passive", {
                    get: function () {
                        C = !0;
                    },
                });
                qc("test", Ja, Q);
            }
        } catch (Q) {}
        return C ? { passive: !0, capture: q } : q;
    }
    function Z() {
        const f = oc;
        for (let q = f.length; 0 <= --q; ) {
            const C = f[q];
            X(C.object, C.event, C.I);
        }
        oc = [];
    }
    function xa(f) {
        return (
            "function" === typeof f &&
            /{\s+\[native code]/.test(Function.prototype.toString.call(f))
        );
    }
    function P(f, q, ...C) {
        return void 0 !== Function.prototype.bind && xa(Function.prototype.bind)
            ? Function.prototype.bind.call(f, q, ...C)
            : function (...Q) {
                  return f.apply(
                      q,
                      (C || []).concat(
                          Array.prototype.slice.call(arguments) || []
                      )
                  );
              };
    }
    function sa() {
        if (Xd) {
            const f = new Xd();
            if (Rc)
                for (const q of ud) void 0 !== Rc[q] && (f[q] = P(Rc[q], f));
            return f;
        }
        return new Ca.XMLHttpRequest();
    }
    function Ia() {
        document.cookie = "__dTCookie=1;SameSite=Lax";
        const f = document.cookie.includes("__dTCookie");
        document.cookie = "__dTCookie=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
        return f;
    }
    function L() {
        return void 0 === Ca.dialogArguments
            ? navigator.cookieEnabled || Ia()
            : Ia();
    }
    function S() {
        return Ca.dT_;
    }
    function ma(f) {
        f = encodeURIComponent(f);
        const q = [];
        if (f)
            for (let C = 0; C < f.length; C++) {
                const Q = f.charAt(C);
                q.push(hf[Q] || Q);
            }
        return q.join("");
    }
    function ja(f) {
        f.includes("^") &&
            ((f = f.split("^^").join("^")),
            (f = f.split("^dq").join('"')),
            (f = f.split("^rb").join(">")),
            (f = f.split("^lb").join("<")),
            (f = f.split("^p").join("|")),
            (f = f.split("^e").join("=")),
            (f = f.split("^s").join(";")),
            (f = f.split("^c").join(",")),
            (f = f.split("^bs").join("\\")));
        return f;
    }
    function ha() {
        return Yc;
    }
    function Aa(f) {
        Yc = f;
    }
    function Ba(f) {
        const q = r("rid"),
            C = r("rpid");
        q && (f.rid = q);
        C && (f.rpid = C);
    }
    function Wa(f) {
        if ((f = f.xb)) {
            f = ja(f);
            try {
                Yc = new RegExp(f, "i");
            } catch (q) {}
        } else Yc = void 0;
    }
    function Va(f) {
        return "n" === f || "s" === f || "l" === f ? `;SameSite=${Ve[f]}` : "";
    }
    function Mb(f, q, C) {
        let Q = 1,
            W = 0;
        do
            (document.cookie =
                f +
                '=""' +
                (q ? ";domain=" + q : "") +
                ";path=" +
                C.substring(0, Q) +
                "; expires=Thu, 01 Jan 1970 00:00:01 GMT;"),
                (Q = C.indexOf("/", Q)),
                W++;
        while (-1 !== Q && 5 > W);
    }
    function ic() {
        const f = (document.domain || location.hostname || "").split(".");
        return 1 >= f.length ? [] : f;
    }
    function Yb(f, q) {
        q = `dTValidationCookieValue;path=/;domain=${f}${Va(q)}`;
        document.cookie = `${ra()}=${q}`;
        return Ha(ra()) ? (Mb(ra(), f, "/"), !0) : !1;
    }
    function U(f) {
        v("eao")
            ? (We = f)
            : Ca.console.log(
                  `${jf} App override configuration is not enabled! The provided app config callback method will not be invoked!`
              );
    }
    function db() {
        if (Ca.MobileAgent || Ca.dynatraceMobile) {
            const f = va("dtAdkSettings");
            return wc(f).privacyState || null;
        }
        return null;
    }
    function gc(f, q) {
        return !rc() || (S().overloadPrevention && !ea())
            ? null
            : f.apply(this, q);
    }
    function rc() {
        const f = db();
        return 2 === f || 1 === f ? !1 : !v("coo") || v("cooO") || ea();
    }
    function tc(f, q) {
        try {
            Ca.sessionStorage.setItem(f, q);
        } catch (C) {}
    }
    function nc(f, q) {
        gc(tc, [f, q]);
    }
    function wb(f) {
        try {
            return Ca.sessionStorage.getItem(f);
        } catch (q) {}
        return null;
    }
    function Rb(f) {
        try {
            Ca.sessionStorage.removeItem(f);
        } catch (q) {}
    }
    function fb(f) {
        document.cookie =
            f +
            '="";path=/' +
            (r("domain") ? ";domain=" + r("domain") : "") +
            "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
    function Wb(f, q, C, Q) {
        q || 0 === q
            ? ((q = (q + "").replace(/[;\n\r]/g, "_")),
              (f =
                  f +
                  "=" +
                  q +
                  ";path=/" +
                  (r("domain") ? ";domain=" + r("domain") : "")),
              C && (f += ";expires=" + C.toUTCString()),
              (f += Va(r("cssm"))),
              Q && "https:" === location.protocol && (f += ";Secure"),
              (document.cookie = f))
            : fb(f);
    }
    function Pb(f, q, C, Q) {
        gc(Wb, [f, q, C, Q]);
    }
    function ec(f) {
        return f.includes("v_4") ? !0 : !1;
    }
    function bc(f) {
        f = Ha(u(), f);
        f || ((f = wb(u())) && ec(f) ? Bb(f) : (f = ""));
        return ec(f) ? f : "";
    }
    function Bb(f) {
        Pb(u(), f, void 0, v("ssc"));
    }
    function D(f) {
        return (f = f || bc())
            ? wc(f)
            : { sessionId: "", serverId: "", overloadState: 0, appState: {} };
    }
    function R(f) {
        return D(f).serverId;
    }
    function Ma(f) {
        return D(f).sessionId;
    }
    function ea() {
        return navigator.userAgent.includes(fg);
    }
    function gb(f) {
        const q = {};
        f = f.split("|");
        for (const C of f)
            (f = C.split("=")),
                2 === f.length &&
                    (q[f[0]] = decodeURIComponent(f[1].replace(/\+/g, " ")));
        return q;
    }
    function kb() {
        const f = Jb();
        return (
            (f.indexOf("dbg") === f.length - 3
                ? f.substring(0, f.length - 3)
                : f) +
            "_" +
            r("app") +
            "_Store"
        );
    }
    function ab(f, q = {}, C) {
        f = f.split("|");
        for (var Q of f) {
            var W = Q;
            f = Q.indexOf("=");
            -1 === f
                ? (q[W] = "1")
                : ((W = Q.substring(0, f)),
                  (q[W] = Q.substring(f + 1, Q.length)));
        }
        !C &&
            (C = q.spc) &&
            ((Q = document.createElement("textarea")),
            (Q.innerHTML = C),
            (q.spc = Q.value));
        return q;
    }
    function ob(f) {
        var q;
        return null !== (q = hc[f]) && void 0 !== q ? q : Fd[f];
    }
    function v(f) {
        f = ob(f);
        return "false" === f || "0" === f ? !1 : !!f;
    }
    function z(f) {
        var q = ob(f);
        q = parseInt(q);
        isNaN(q) && (q = Fd[f]);
        return q;
    }
    function r(f) {
        if ("app" === f) {
            a: {
                try {
                    if (We) {
                        var q = We();
                        if (q && "string" === typeof q && Xe.test(q)) {
                            var C = q;
                            break a;
                        }
                        Ca.console.log(
                            `${jf} Registered app config callback method did not return a string in the correct app id format ${Xe} The default app ID will be used instead! Got value: ${q}`
                        );
                    }
                } catch (Q) {
                    Ca.console.log(
                        `${jf} Failed to execute the registered app config callback method! The default app ID will be used instead!`,
                        Q
                    );
                }
                C = void 0;
            }
            if (C) return C;
        }
        return (ob(f) || "") + "";
    }
    function G(f, q) {
        hc[f] = q + "";
    }
    function J(f) {
        return (hc = f);
    }
    function ia(f) {
        const q = hc[f];
        q && (hc[f] = q.includes("#" + f.toUpperCase()) ? "" : q);
    }
    function ta(f) {
        var q = f.agentUri;
        (null === q || void 0 === q ? 0 : q.includes("_")) &&
            (q = /([a-zA-Z]*)[0-9]{0,4}_([a-zA-Z_0-9]*)_[0-9]+/g.exec(q)) &&
            q.length &&
            2 < q.length &&
            (f.featureHash = q[2]);
    }
    function Da(f) {
        var q = S().platformCookieOffset;
        if ("number" === typeof q) {
            a: {
                var C = r("cssm");
                var Q = ic();
                if (Q.length)
                    for (q = Q.slice(q); q.length; ) {
                        if (Yb(q.join("."), C)) {
                            C = q.join(".");
                            break a;
                        }
                        q.shift();
                    }
                C = "";
            }
            C && (f.domain = C);
        } else if (
            ((C = f.domain || ""),
            (q =
                (q = location.hostname) && C
                    ? q === C ||
                      q.includes("." + C, q.length - ("." + C).length)
                    : !0),
            !C || !q)
        ) {
            f.domainOverride ||
                ((f.domainOriginal = f.domain || ""),
                (f.domainOverride = `${location.hostname},${C}`),
                delete f.domain);
            a: {
                Q = r("cssm");
                const Oa = ic().reverse();
                if (Oa.length) {
                    var W = Oa[0];
                    for (let cb = 1; cb <= Oa.length; cb++) {
                        if (Yb(W, Q)) {
                            Q = W;
                            break a;
                        }
                        const Zb = Oa[cb];
                        Zb && (W = `${Zb}.${W}`);
                    }
                }
                Q = "";
            }
            Q && (f.domain = Q);
            q ||
                oe.push({
                    type: "dpi",
                    severity: "Warning",
                    text: `Configured domain "${C}" is invalid for current location "${location.hostname}". Agent will use "${f.domain}" instead.`,
                });
        }
    }
    function yb(f, q) {
        Da(f);
        const C = hc.pVO;
        C && (f.pVO = C);
        q || (f.bp = (f.bp || Fd.bp) + "");
    }
    function Fb(f, q) {
        if (null === f || void 0 === f || !f.attributes) return q;
        let C = q;
        var Q = f.attributes.getNamedItem("data-dtconfig");
        if (!Q) return C;
        f = f.src;
        Q = Q.value;
        const W = {};
        hc.legacy = "1";
        var Oa = /([a-zA-Z]*)_([a-zA-Z_0-9]*)_([0-9]+)/g;
        f &&
            ((Oa = Oa.exec(f)), null === Oa || void 0 === Oa ? 0 : Oa.length) &&
            ((W.agentUri = f),
            (W.featureHash = Oa[2]),
            (W.agentLocation = f.substring(0, f.indexOf(Oa[1]) - 1)),
            (W.buildNumber = Oa[3]));
        Q && ab(Q, W, !0);
        Da(W);
        if (!q) C = W;
        else if (!W.syntheticConfig) return W;
        return C;
    }
    function Kb() {
        return hc;
    }
    function Cb(f) {
        return Fd[f] === ob(f);
    }
    function Jb() {
        var f = r("agentUri");
        if (!f) return "ruxitagentjs";
        f = f.substring(f.lastIndexOf("/") + 1);
        return f.includes("_") ? f.substring(0, f.indexOf("_")) : f;
    }
    function ib() {
        return (
            navigator.userAgent.includes("Googlebot") ||
            navigator.userAgent.includes("AdsBot-Google")
        );
    }
    function Qb(f) {
        let q = f;
        const C = Math.pow(2, 32);
        return function () {
            q = (1664525 * q + 1013904223) % C;
            return q / C;
        };
    }
    function Lc(f, q) {
        return isNaN(f) || isNaN(q)
            ? Math.floor(33 * kf())
            : Math.floor(kf() * (q - f + 1)) + f;
    }
    function pc(f) {
        if (isNaN(f) || 0 > f) return "";
        var q = Ca.crypto;
        if (q && !ib()) q = q.getRandomValues(new Uint8Array(f));
        else {
            q = [];
            for (var C = 0; C < f; C++) q.push(Lc(0, 32));
        }
        f = Array(f);
        for (C = 0; C < q.length; C++) {
            const Q = Math.abs(q[C] % 32);
            f.push(String.fromCharCode(Q + (9 >= Q ? 48 : 55)));
        }
        return f.join("");
    }
    function md(f = !0) {
        Of = f;
    }
    function Ec() {
        return qe;
    }
    function Cc() {
        const f = Ca.dT_;
        try {
            let C = Ca.parent;
            for (; C && C !== Ca; ) {
                const Q = C.dT_;
                var q;
                if (
                    (q =
                        !!(Q && "ea" in Q) && "10307250124095659" === Q.version)
                ) {
                    const W = !f.bcv("ac") || f.scv("app") === Q.scv("app"),
                        Oa = f.scv("postfix"),
                        cb = Q.scv("postfix");
                    q = W && Oa === cb;
                }
                if (q) return Q.tdto();
                C = C !== C.parent ? C.parent : void 0;
            }
        } catch (C) {}
        return f;
    }
    function Gd(f, q = "", C) {
        var Q = f.indexOf("h"),
            W = f.indexOf("v");
        const Oa = f.indexOf("e"),
            cb = f.substring(f.indexOf("$") + 1, Q);
        Q = -1 !== W ? f.substring(Q + 1, W) : f.substring(Q + 1);
        q ||
            -1 === W ||
            (q = -1 !== Oa ? f.substring(W + 1, Oa) : f.substring(W + 1));
        f = null;
        C ||
            ((C = parseInt(cb.split("_")[0])),
            (W = Kc() % zf),
            W < C && (W += zf),
            (C = C + 9e5 > W));
        C &&
            (f = {
                frameId: cb,
                D: "-" === Q ? "-" : parseInt(Q),
                visitId: "",
            });
        return { visitId: q, te: f };
    }
    function zd(f, q, C) {
        var Q = z("pcl");
        Q = f.length - Q;
        0 < Q && f.splice(0, Q);
        Q = R(Ha(u(), C));
        const W = [],
            Oa = Q ? `${Q}$` : "";
        for (const cb of f)
            "-" !== cb.D && W.push(`${Oa}${cb.frameId}h${cb.D}`);
        f = W.join("p");
        f || (Of && (Nc(!0, "a", C), md(!1)), (f += `${Q}$${qe}h-`));
        f += `v${q || rb(C)}`;
        q = f + "e0";
        Pb(t(), q, void 0, v("ssc"));
    }
    function Sc(f, q = document.cookie) {
        var C = Ha(t(), q);
        q = [];
        if (C && "-" !== C) {
            var Q = C.split("p");
            C = "";
            for (const W of Q)
                (Q = Gd(W, C, f)), (C = Q.visitId), Q.te && q.push(Q.te);
            for (const W of q) W.visitId = C;
        }
        return q;
    }
    function H(f, q) {
        const C = document.cookie;
        q = Sc(q, C);
        let Q = !1;
        for (const W of q) W.frameId === qe && ((W.D = f), (Q = !0));
        Q || q.push({ frameId: qe, D: f, visitId: "" });
        zd(q, void 0, C);
    }
    function fa() {
        return lf;
    }
    function F(f, q) {
        try {
            Ca.localStorage.setItem(f, q);
        } catch (C) {}
    }
    function oa(f) {
        try {
            Ca.localStorage.removeItem(f);
        } catch (q) {}
    }
    function za(f) {
        try {
            return Ca.localStorage.getItem(f);
        } catch (q) {}
        return null;
    }
    function Qa(f, q = !1) {
        rc() ? f() : q ? Pf.push(f) : Qf.push(f);
    }
    function Ea() {
        if (!v("coo") || rc()) return !1;
        for (const f of Qf) gd(f, 0);
        Qf = [];
        G("cooO", !0);
        for (const f of Pf) f();
        Pf.length = 0;
        return !0;
    }
    function mb() {
        if (!v("coo") || !rc()) return !1;
        G("cooO", !1);
        fb(u());
        fb(t());
        fb(Ua());
        fb("dtAdk");
        fb(N());
        fb(A());
        try {
            Rb(Vc()),
                Rb(A()),
                oa(Vc()),
                oa(A()),
                Rb(N()),
                Rb(u()),
                oa(kb()),
                oa("dtAdk");
        } catch (f) {}
        return !0;
    }
    function tb(f, q = document.cookie || "") {
        return q.split(f + "=").length - 1;
    }
    function pb(f, q) {
        var C = tb(f, q);
        if (1 < C) {
            q = r("domain") || Ca.location.hostname;
            const Q = Ca.location.hostname,
                W = Ca.location.pathname;
            let Oa = 0,
                cb = 0;
            vd.add(f);
            do {
                const Zb = Q.substring(Oa);
                if (Zb !== q || "/" !== W) {
                    Mb(f, Zb === q ? "" : Zb, W);
                    const $b = tb(f);
                    $b < C && (vd.add(Zb), (C = $b));
                }
                Oa = Q.indexOf(".", Oa) + 1;
                cb++;
            } while (0 !== Oa && 10 > cb && 1 < C);
            r("domain") && 1 < C && Mb(f, "", W);
        }
    }
    function Gb() {
        var f = document.cookie;
        pb(t(), f);
        pb(u(), f);
        pb(A(), f);
        f = vd.size;
        0 < f &&
            f !== re &&
            ((re = f),
            oe.push({
                severity: "Error",
                type: "dcn",
                text: `Duplicate cookie name${
                    1 !== f ? "s" : ""
                } detected: ${Array.from(vd).join(",")}`,
            }));
    }
    function Xb() {
        vd = new Set();
        Gb();
        y(function (f, q, C, Q) {
            0 === vd.size ||
                q ||
                (f.av(Q, "dCN", Array.from(vd).join(",")),
                vd.clear(),
                (re = 0));
        });
    }
    function rb(f) {
        return Pc(f) || Nc(!0, "c", f);
    }
    function Pc(f) {
        if (hd(f) <= Kc()) return Nc(!0, "t", f);
        const q = Od(f);
        if (!q) return Nc(!0, "c", f);
        const C = ce.exec(q);
        if (!C || 3 !== C.length || 32 !== C[1].length || isNaN(parseInt(C[2])))
            return Nc(!0, "i", f);
        nc(Vc(), q);
        return q;
    }
    function xc(f, q) {
        var C = Kc();
        q = id(q).Hc;
        f && (q = C);
        Fc(C + Ad + "|" + q);
        Hd();
    }
    function qd(f) {
        const q = "t" + (Kc() - hd(f));
        Nc(!0, q, f);
    }
    function Od(f) {
        var q, C;
        return null !==
            (C =
                null === (q = Sc(!0, f)[0]) || void 0 === q
                    ? void 0
                    : q.visitId) && void 0 !== C
            ? C
            : wb(Vc());
    }
    function de() {
        let f = pc(32);
        try {
            f = f.replace(/[0-9]/g, function (q) {
                return String.fromCharCode(Math.floor(2.5 * parseInt(q) + 65));
            });
        } catch (q) {
            throw (K(q, 7), q);
        }
        return f + "-0";
    }
    function pd(f, q) {
        const C = Sc(!1, q);
        zd(C, f, q);
        nc(Vc(), f);
        xc(!0);
    }
    function Pd(f, q, C) {
        return Nc(f, q, C);
    }
    function Nc(f, q, C) {
        f && (Ce = !0);
        f = Od(C);
        C = de();
        pd(C);
        if (Od(document.cookie)) for (const Q of Id) Q(C, Ce, q, f);
        return C;
    }
    function Wc(f) {
        Id.push(f);
    }
    function Jd(f) {
        f = Id.indexOf(f);
        -1 !== f && Id.splice(f);
    }
    function Hd(f) {
        ee && m(ee);
        ee = gd(Bd, hd(f) - Kc());
    }
    function Bd() {
        const f = document.cookie;
        if (hd(f) <= Kc()) return gc(qd, [f]), !0;
        Qa(Hd);
        return !1;
    }
    function Fc(f) {
        const q = P(Pb, null, A(), f, void 0, v("ssc"));
        q();
        const C = Ha(A());
        "" !== C &&
            f !== C &&
            (Gb(),
            q(),
            f === Ha(A()) ||
                se ||
                (oe.push({
                    severity: "Error",
                    type: "dcn",
                    text: "Could not sanitize cookies",
                }),
                (se = !0)));
        nc(A(), f);
    }
    function Cd(f, q) {
        (q = Ha(f, q)) || (q = wb(f) || "");
        return q;
    }
    function Ic() {
        var f = Pc() || "";
        nc(Vc(), f);
        f = Cd(A());
        Fc(f);
        oa(Vc());
        oa(A());
    }
    function id(f) {
        const q = { Gd: 0, Hc: 0 };
        if ((f = Cd(A(), f)))
            try {
                const C = f.split("|");
                2 === C.length &&
                    ((q.Gd = parseInt(C[0])), (q.Hc = parseInt(C[1])));
            } catch (C) {}
        return q;
    }
    function hd(f) {
        f = id(f);
        return Math.min(f.Gd, f.Hc + Ye);
    }
    function Qd(f) {
        Ad = f;
    }
    function ke() {
        const f = Ce;
        Ce = !1;
        return f;
    }
    function wd() {
        Bd() || xc(!1);
    }
    function xd() {
        if (v("nsfnv")) {
            var f = Ha(u());
            if (!f.includes("_srv_-")) {
                const q = wc(f).serverId;
                f = f.replace(
                    `${"_srv_"}${q}`,
                    `${"_srv_"}${`${-1 * Lc(2, te)}`.replace("-", "-2D")}`
                );
                Bb(f);
            }
        }
    }
    function cd() {
        Qa(function () {
            if (!Ma()) {
                const f = -1 * Lc(2, te),
                    q = pc(32);
                Bb(`v_4${"_srv_"}${`${f}`.replace("-", "-2D")}_sn_${q}`);
            }
        }, !0);
        Wc(xd);
    }
    function wc(f) {
        var q;
        const C = {},
            Q = { sessionId: "", serverId: "", overloadState: 0, appState: C };
        var W = f.split("_");
        if (2 < W.length && 0 === W.length % 2) {
            f = +W[1];
            if (isNaN(f) || 3 > f) return Q;
            f = {};
            for (var Oa = 2; Oa < W.length; Oa++) {
                const cb = W[Oa];
                cb.startsWith(vg)
                    ? (C[cb.substring(6).toLowerCase()] = +W[Oa + 1])
                    : (f[cb] = W[Oa + 1]);
                Oa++;
            }
            f.sn
                ? ((W = f.sn), (W = 32 === W.length || 12 >= W.length ? W : ""))
                : (W = "hybrid");
            Q.sessionId = W;
            if (f.srv) {
                a: {
                    W = f.srv.replace("-2D", "-");
                    if (
                        !isNaN(+W) &&
                        ((Oa = parseInt(W)), Oa >= -te && Oa <= te)
                    )
                        break a;
                    W = "";
                }
                Q.serverId = W;
            }
            W = +f.ol;
            1 === W && Kd(ea());
            0 <= W && 2 >= W && (Q.overloadState = W);
            f = +f.prv;
            isNaN(f) || (Q.privacyState = 1 > f || 4 < f ? 1 : f);
            f =
                null === (q = r("app")) || void 0 === q
                    ? void 0
                    : q.toLowerCase();
            q = C[f];
            isNaN(q) || 0 !== q || Kd(ea());
        }
        return Q;
    }
    function Kd(f) {
        const q = S();
        f || ((q.disabled = !0), (q.overloadPrevention = !0));
    }
    function Rd() {
        return Kc();
    }
    function gd(f, q, ...C) {
        function Q() {
            delete De[W];
            f.apply(this, arguments);
        }
        let W;
        "apply" in le
            ? (C.unshift(Q, q), (W = le.apply(Ca, C)))
            : (W = le(Q, q));
        De[W] = !0;
        return W;
    }
    function m(f) {
        delete De[f];
        "apply" in fe ? fe.call(Ca, f) : fe(f);
    }
    function y(f) {
        Sd.push(f);
    }
    function w(f) {
        let q = Sd.length;
        for (; q--; )
            if (Sd[q] === f) {
                Sd.splice(q, 1);
                break;
            }
    }
    function I() {
        return Sd;
    }
    function M(f, q) {
        return gg(f, q);
    }
    function la(f) {
        Ze(f);
    }
    function ya(f, q) {
        if (!wg || !xg) return "";
        f = new wg([f], { type: q });
        return xg(f);
    }
    function La(f, q) {
        return yg ? new yg(f, q) : void 0;
    }
    function Pa(f) {
        "function" === typeof f && Rf.push(f);
    }
    function qb() {
        return Rf;
    }
    function sb() {
        return pe;
    }
    function zb(f) {
        function q(...C) {
            if ("number" !== typeof C[0] || !De[C[0]])
                try {
                    return f.apply(this, C);
                } catch (Q) {
                    return f(C[0]);
                }
        }
        q[jb] = f;
        return q;
    }
    function jc() {
        return oe;
    }
    function Qc() {
        Ib = Sa;
        Ca.performance && (Kc = () => Math.round(Ib() + Fa()));
        if (!Kc || isNaN(Kc()) || 0 >= Kc() || !isFinite(Kc()))
            Kc = () => new Date().getTime();
    }
    function jd() {
        Ee && ((Ca.clearTimeout = fe), (Ca.clearInterval = Ze), (Ee = !1));
    }
    function kd() {
        var f = Ha(N());
        (f && 45 === (null === f || void 0 === f ? void 0 : f.length)) ||
            ((f = za(N()) || wb(N())),
            45 !== (null === f || void 0 === f ? void 0 : f.length) &&
                ((zg = !0), (f = Kc() + ""), (f += pc(45 - f.length))));
        Dd(f);
        return f;
    }
    function Dd(f) {
        let q;
        if (v("dpvc") || v("pVO")) nc(N(), f);
        else {
            q = new Date();
            var C = q.getMonth() + Math.min(24, Math.max(1, z("rvcl")));
            q.setMonth(C);
            C = N();
            gc(F, [C, f]);
        }
        Pb(N(), f, q, v("ssc"));
    }
    function Fe() {
        return zg;
    }
    function hg(f) {
        const q = Ha(N());
        fb(N());
        Rb(N());
        oa(N());
        G("pVO", !0);
        Dd(q);
        f && gc(F, ["dt-pVO", "1"]);
        Ic();
    }
    function Ag() {
        oa("dt-pVO");
        v("pVO") && (G("pVO", !1), kd());
        Rb(N());
        Ic();
    }
    function mf(f, q, C, Q, W, Oa) {
        const cb = document.createElement("script");
        cb.setAttribute("src", f);
        q && cb.setAttribute("defer", "defer");
        C && (cb.onload = C);
        Q && (cb.onerror = Q);
        W && cb.setAttribute("id", W);
        Oa && v("esi") && cb.setAttribute("integrity", Oa);
        cb.setAttribute("crossorigin", "anonymous");
        f = document.getElementsByTagName("script")[0];
        f.parentElement.insertBefore(cb, f);
    }
    function $e(f) {
        return (
            lh +
            "/" +
            ue +
            "_" +
            f +
            "_" +
            (z("buildNumber") || S().version) +
            ".js"
        );
    }
    function Af() {
        var f, q;
        try {
            null ===
                (q =
                    null === (f = Ca.MobileAgent) || void 0 === f
                        ? void 0
                        : f.incrementActionCount) ||
                void 0 === q ||
                q.call(f);
        } catch (C) {}
    }
    function Bg() {
        const f = Ca.dT_;
        Ca.dT_ = {
            di: 0,
            version: "10307250124095659",
            cfg: f ? f.cfg : "",
            iCE: f
                ? L
                : function () {
                      return navigator.cookieEnabled;
                  },
            ica: 1,
            disabled: !1,
            disabledReason: "",
            overloadPrevention: !1,
            gAST: sb,
            ww: La,
            stu: ya,
            nw: Rd,
            st: gd,
            si: M,
            aBPSL: y,
            rBPSL: w,
            gBPSL: I,
            aBPSCC: Pa,
            gBPSCC: qb,
            buildType: "dynatrace",
            gSSV: wb,
            sSSV: nc,
            rSSV: Rb,
            rvl: oa,
            iVSC: ec,
            p3SC: wc,
            dC: fb,
            sC: Pb,
            esc: ma,
            gSId: R,
            gDtc: Ma,
            gSC: bc,
            sSC: Bb,
            gC: va,
            cRN: Lc,
            cRS: pc,
            cfgO: Kb,
            pCfg: gb,
            pCSAA: ab,
            cFHFAU: ta,
            sCD: yb,
            bcv: v,
            ncv: z,
            scv: r,
            stcv: G,
            rplC: J,
            cLSCK: kb,
            gFId: Ec,
            gBAU: $e,
            iS: mf,
            eWE: Qa,
            oEIEWA: gc,
            eA: Ea,
            dA: mb,
            iNV: Fe,
            gVID: kd,
            dPV: hg,
            ePV: Ag,
            sVIdUP: md,
            sVTT: Qd,
            sVID: pd,
            rVID: Pc,
            gVI: rb,
            gNVIdN: Pd,
            gARnVF: ke,
            cAUV: wd,
            uVT: xc,
            aNVL: Wc,
            rNVL: Jd,
            gPC: Sc,
            cPC: H,
            sPC: zd,
            clB: jd,
            ct: m,
            aRI: Ba,
            iXB: Wa,
            gXBR: ha,
            sXBR: Aa,
            de: ja,
            iEC: Af,
            rnw: Fa,
            gto: Ta,
            ael: pa,
            rel: X,
            sup: aa,
            cuel: Z,
            iAEPOO: rc,
            iSM: ea,
            gxwp: sa,
            iIO: K,
            prm: V,
            cI: la,
            gidi: jc,
            iDCV: Cb,
            gCF: Ha,
            gPSMB: db,
            lvl: za,
            gCP: (null === f || void 0 === f ? 0 : f.platformPrefix)
                ? function () {
                      return f.platformPrefix || "";
                  }
                : void 0,
            platformCookieOffset:
                null === f || void 0 === f ? void 0 : f.platformCookieOffset,
            tdto: Cc,
            gFLAI: fa,
            rACC: U,
            gAN: Jb,
        };
    }
    function Pe(...f) {
        Ca.console.log.apply(Ca.console, f);
    }
    this.dT_ && dT_.prm && dT_.prm();
    var Ca =
            "undefined" !== typeof globalThis
                ? globalThis
                : "undefined" !== typeof window
                ? window
                : void 0,
        Sf;
    (function (f) {
        f[(f.ENABLED = 0)] = "ENABLED";
        f[(f.DISABLED = 1)] = "DISABLED";
        f[(f.DELAYED = 2)] = "DELAYED";
    })(Sf || (Sf = {}));
    var Qe;
    (function (f) {
        f[(f.BLOCKED_BY_PERCENTAGE = 0)] = "BLOCKED_BY_PERCENTAGE";
        f[(f.ENABLED = 1)] = "ENABLED";
        f[(f.BLOCKED = 2)] = "BLOCKED";
    })(Qe || (Qe = {}));
    var Cg;
    (function (f) {
        f[(f.NONE = 1)] = "NONE";
        f[(f.OFF = 2)] = "OFF";
        f[(f.PERFORMANCE = 3)] = "PERFORMANCE";
        f[(f.BEHAVIOR = 4)] = "BEHAVIOR";
    })(Cg || (Cg = {}));
    var ig;
    (function (f) {
        f.OVERLOAD_PREVENTION = "ol";
        f.PRIVACY_STATE = "prv";
        f.SERVER_ID = "srv";
        f.SESSION_ID = "sn";
    })(ig || (ig = {}));
    var Dg;
    (function (f) {
        f.DYNATRACE_MOBILE = "dynatraceMobile";
        f.MOBILE_AGENT = "MobileAgent";
    })(Dg || (Dg = {}));
    var Eg;
    (function (f) {
        f[(f.ARRAY = 0)] = "ARRAY";
        f[(f.BOOLEAN = 1)] = "BOOLEAN";
        f[(f.NUMBER = 2)] = "NUMBER";
        f[(f.STRING = 3)] = "STRING";
        f[(f.FUNCTION = 4)] = "FUNCTION";
        f[(f.OBJECT = 5)] = "OBJECT";
        f[(f.DATE = 6)] = "DATE";
        f[(f.ERROR = 7)] = "ERROR";
        f[(f.ELEMENT = 8)] = "ELEMENT";
        f[(f.HTML_ELEMENT = 9)] = "HTML_ELEMENT";
        f[(f.HTML_IMAGE_ELEMENT = 10)] = "HTML_IMAGE_ELEMENT";
        f[(f.PERFORMANCE_ENTRY = 11)] = "PERFORMANCE_ENTRY";
        f[(f.PERFORMANCE_TIMING = 12)] = "PERFORMANCE_TIMING";
        f[(f.PERFORMANCE_RESOURCE_TIMING = 13)] = "PERFORMANCE_RESOURCE_TIMING";
        f[(f.PERFORMANCE_NAVIGATION_TIMING = 14)] =
            "PERFORMANCE_NAVIGATION_TIMING";
        f[(f.CSS_RULE = 15)] = "CSS_RULE";
        f[(f.CSS_STYLE_SHEET = 16)] = "CSS_STYLE_SHEET";
        f[(f.REQUEST = 17)] = "REQUEST";
        f[(f.RESPONSE = 18)] = "RESPONSE";
        f[(f.SET = 19)] = "SET";
        f[(f.MAP = 20)] = "MAP";
        f[(f.WORKER = 21)] = "WORKER";
        f[(f.XML_HTTP_REQUEST = 22)] = "XML_HTTP_REQUEST";
        f[(f.SVG_SCRIPT_ELEMENT = 23)] = "SVG_SCRIPT_ELEMENT";
        f[(f.HTML_META_ELEMENT = 24)] = "HTML_META_ELEMENT";
        f[(f.HTML_HEAD_ELEMENT = 25)] = "HTML_HEAD_ELEMENT";
        f[(f.ARRAY_BUFFER = 26)] = "ARRAY_BUFFER";
        f[(f.SHADOW_ROOT = 27)] = "SHADOW_ROOT";
    })(Eg || (Eg = {}));
    var Nf = -1,
        t = Na("dtPC"),
        u = Na("dtCookie"),
        A = Na("rxvt"),
        N = Na("rxVisitor"),
        ra = Na("dTValidationCookie"),
        Ua = Na("dtSa"),
        jb = Symbol.for("dt_2");
    Symbol.for("dt_3");
    var Eb,
        Ib,
        Sb = setTimeout;
    ua.prototype["catch"] = function (f) {
        return this.then(null, f);
    };
    ua.prototype.then = function (f, q) {
        var C = new this.constructor(bb);
        ka(this, new T(f, q, C));
        return C;
    };
    ua.prototype["finally"] = function (f) {
        var q = this.constructor;
        return this.then(
            function (C) {
                return q.resolve(f()).then(function () {
                    return C;
                });
            },
            function (C) {
                return q.resolve(f()).then(function () {
                    return q.reject(C);
                });
            }
        );
    };
    ua.all = function (f) {
        return new ua(function (q, C) {
            function Q(Zb, $b) {
                try {
                    if (
                        $b &&
                        ("object" === typeof $b || "function" === typeof $b)
                    ) {
                        var $c = $b.then;
                        if ("function" === typeof $c) {
                            $c.call(
                                $b,
                                function (rd) {
                                    Q(Zb, rd);
                                },
                                C
                            );
                            return;
                        }
                    }
                    W[Zb] = $b;
                    0 === --Oa && q(W);
                } catch (rd) {
                    C(rd);
                }
            }
            if (!f || "undefined" === typeof f.length)
                return C(new TypeError("Promise.all accepts an array"));
            var W = Array.prototype.slice.call(f);
            if (0 === W.length) return q([]);
            for (var Oa = W.length, cb = 0; cb < W.length; cb++) Q(cb, W[cb]);
        });
    };
    ua.allSettled = function (f) {
        return new this(function (q, C) {
            function Q(cb, Zb) {
                if (
                    Zb &&
                    ("object" === typeof Zb || "function" === typeof Zb)
                ) {
                    var $b = Zb.then;
                    if ("function" === typeof $b) {
                        $b.call(
                            Zb,
                            function ($c) {
                                Q(cb, $c);
                            },
                            function ($c) {
                                W[cb] = { status: "rejected", reason: $c };
                                0 === --Oa && q(W);
                            }
                        );
                        return;
                    }
                }
                W[cb] = { status: "fulfilled", value: Zb };
                0 === --Oa && q(W);
            }
            if (!f || "undefined" === typeof f.length)
                return C(
                    new TypeError(
                        typeof f +
                            " " +
                            f +
                            " is not iterable(cannot read property Symbol(Symbol.iterator))"
                    )
                );
            var W = Array.prototype.slice.call(f);
            if (0 === W.length) return q([]);
            var Oa = W.length;
            for (C = 0; C < W.length; C++) Q(C, W[C]);
        });
    };
    ua.resolve = function (f) {
        return f && "object" === typeof f && f.constructor === ua
            ? f
            : new ua(function (q) {
                  q(f);
              });
    };
    ua.reject = function (f) {
        return new ua(function (q, C) {
            C(f);
        });
    };
    ua.race = function (f) {
        return new ua(function (q, C) {
            if (!f || "undefined" === typeof f.length)
                return C(new TypeError("Promise.race accepts an array"));
            for (var Q = 0, W = f.length; Q < W; Q++)
                ua.resolve(f[Q]).then(q, C);
        });
    };
    ua.Hb =
        ("function" === typeof setImmediate &&
            function (f) {
                setImmediate(f);
            }) ||
        function (f) {
            Sb(f, 0);
        };
    ua.pc = function (f) {
        "undefined" !== typeof console &&
            console &&
            console.warn("Possible Unhandled Promise Rejection:", f);
    };
    var Vb = ua,
        sc;
    (function (f) {
        f.ANCHOR = "A";
        f.BUTTON = "BUTTON";
        f.FORM = "FORM";
        f.I_FRAME = "IFRAME";
        f.IMAGE = "IMG";
        f.INPUT = "INPUT";
        f.LABEL = "LABEL";
        f.LINK = "LINK";
        f.OPTION = "OPTION";
        f.SCRIPT = "SCRIPT";
        f.SELECT = "SELECT";
        f.STYLE = "STYLE";
        f.TEXT_AREA = "TEXTAREA";
    })(sc || (sc = {}));
    var qc,
        Dc,
        Bc,
        Uc,
        Oe = Ca.Worker,
        Vd = Oe && Oe.prototype.addEventListener,
        oc = [],
        Wd = ["touchstart", "touchend", "scroll"],
        Xd,
        ud =
            "abort getAllResponseHeaders getResponseHeader open overrideMimeType send setRequestHeader".split(
                " "
            ),
        Rc,
        hf = {
            "!": "%21",
            "~": "%7E",
            "*": "%2A",
            "(": "%28",
            ")": "%29",
            "'": "%27",
            $: "%24",
            ";": "%3B",
            ",": "%2C",
        },
        Yc,
        Ge;
    (function (f) {
        f.LAX = "l";
        f.NONE = "n";
        f.NOT_SET = "0";
        f.STRICT = "s";
    })(Ge || (Ge = {}));
    var Vc = Na("rxvisitid"),
        Ve = { l: "Lax", s: "Strict", n: "None" },
        Fd,
        jf = "[Dynatrace RUM JavaScript]",
        Xe = /^[a-f0-9]{12,16}$/,
        We,
        fg = "RuxitSynthetic",
        Ci = /c(\w+)=([^ ]+(?: (?!c?\w+=)[^( c)]+)*)/g,
        hc = {},
        kf,
        Ug,
        Of = !1,
        qe,
        zf = 6e8,
        lf,
        Qf = [],
        Pf = [],
        vd,
        re = 0,
        ce = /([A-Z]+)-([0-9]+)/,
        Id = [],
        Ad,
        Ye,
        Ce = !1,
        ee,
        se = !1,
        te = 32768,
        vg = "app-3A",
        yg = Ca.Worker,
        wg = Ca.Blob,
        xg = Ca.URL && Ca.URL.createObjectURL,
        fe,
        Ze,
        le,
        gg,
        Ee = !1,
        Sd,
        Rf = [],
        oe = [],
        pe,
        Yd,
        De = {},
        Kc,
        zg = !1,
        mh,
        lh,
        ue;
    (function () {
        var f, q, C;
        if (!("documentMode" in document) || isNaN(document.documentMode)) {
            var Q = !(null === (f = navigator.userAgent) || void 0 === f
                ? 0
                : f.includes("RuxitSynthetic"));
            if (
                !Ca.dT_ ||
                !Ca.dT_.cfg ||
                "string" !== typeof Ca.dT_.cfg ||
                ("initialized" in Ca.dT_ && Ca.dT_.initialized)
            )
                (null === (q = Ca.dT_) || void 0 === q ? 0 : q.gCP)
                    ? Pe(
                          "[CookiePrefix/initCode] initCode with cookie prefix already initialized, not initializing initCode!"
                      )
                    : Pe(
                          "InitConfig not found or agent already initialized! This is an injection issue."
                      ),
                    Ca.dT_ && (Ca.dT_.di = 3);
            else if (Q)
                try {
                    Bg();
                    Fd = {
                        ade: "",
                        aew: !0,
                        apn: "",
                        agentLocation: "",
                        agentUri: "",
                        app: "",
                        ac: !0,
                        async: !1,
                        ase: !1,
                        auto: !1,
                        bp: 3,
                        bs: !1,
                        buildNumber: 0,
                        csprv: !0,
                        cepl: 16e3,
                        cls: !0,
                        ccNcss: !1,
                        coo: !1,
                        cooO: !1,
                        cssm: "0",
                        cwtDomains: "",
                        cwtUrl: "w2dax4xgw3",
                        cwt: "",
                        cors: !1,
                        cuc: "",
                        cce: !1,
                        cux: !1,
                        postfix: "",
                        dataDtConfig: "",
                        debugName: "",
                        dvl: 500,
                        dASXH: !1,
                        disableCookieManager: !1,
                        dKAH: !1,
                        disableLogging: !1,
                        dmo: !1,
                        doel: !1,
                        dpch: !1,
                        dpvc: !1,
                        disableXhrFailures: !1,
                        domain: "",
                        domainOverride: "",
                        domainOriginal: "",
                        doNotDetect: "",
                        ds: !0,
                        dsndb: !1,
                        dsa: !1,
                        dsss: !1,
                        dssv: !0,
                        earxa: !0,
                        eao: !1,
                        exp: !1,
                        eni: !0,
                        esi: !1,
                        etc: !1,
                        expw: !1,
                        instr: "",
                        evl: "",
                        fa: !1,
                        fvdi: !1,
                        featureHash: "",
                        hvt: 216e5,
                        imm: !1,
                        ign: "",
                        iub: "",
                        iqvn: !1,
                        initializedModules: "",
                        lastModification: 0,
                        lupr: !0,
                        lab: !1,
                        legacy: !1,
                        lt: !0,
                        mb: "",
                        md: "",
                        mdp: "",
                        mdl: "",
                        mcepsl: 100,
                        mdn: 5e3,
                        mhl: 4e3,
                        mpl: 1024,
                        mmds: 2e4,
                        msl: 3e4,
                        bismepl: 2e3,
                        mel: 200,
                        mepp: 10,
                        moa: 30,
                        mrt: 3,
                        ntd: !1,
                        nsfnv: !1,
                        ncw: !1,
                        oat: 180,
                        ote: !1,
                        owasp: !1,
                        pcl: 20,
                        pt: !0,
                        perfbv: 1,
                        prfSmpl: 0,
                        pVO: !1,
                        peti: !1,
                        raxeh: !0,
                        rdnt: 0,
                        nosr: !0,
                        reportUrl: "dynaTraceMonitor",
                        rid: "",
                        ridPath: "",
                        rpid: "",
                        rcdec: 12096e5,
                        rtl: 0,
                        rtp: 2,
                        rtt: 1e3,
                        rtu: 200,
                        rvcl: 24,
                        sl: 100,
                        ssc: !1,
                        svNB: !1,
                        srad: !0,
                        srbbv: 1,
                        srbw: !0,
                        srdinitrec: !0,
                        srmr: 100,
                        srms: "1,1,,,",
                        srsr: 1e5,
                        srtbv: 3,
                        srtd: 1,
                        srtr: 500,
                        srvr: "",
                        srvi: 0,
                        srwo: !1,
                        srre: "",
                        srxcss: !0,
                        srxicss: !0,
                        srficros: !0,
                        srmrc: !1,
                        srsdom: !0,
                        srfirrbv: !0,
                        srcss: !0,
                        srmcrl: 1,
                        srmcrv: 10,
                        st: 3e3,
                        spc: "",
                        syntheticConfig: !1,
                        tal: 0,
                        tt: 100,
                        tvc: 3e3,
                        uxdce: !1,
                        uxdcw: 1500,
                        uxrgce: !0,
                        uxrgcm: "100,25,300,3;100,25,300,3",
                        uam: !1,
                        uana: "data-dtname,data-dtName",
                        uanpi: 0,
                        pui: !1,
                        usrvd: !0,
                        vrt: !1,
                        vcfi: !0,
                        vcsb: !1,
                        vcit: 1e3,
                        vct: 50,
                        vcx: 50,
                        vscl: 0,
                        vncm: 1,
                        vrei: "",
                        xb: "",
                        chw: "",
                        xt: 0,
                        xhb: "",
                    };
                    var W;
                    V();
                    var Oa;
                    Xd = Ca.XMLHttpRequest;
                    const Ld =
                        null === (Oa = Ca.XMLHttpRequest) || void 0 === Oa
                            ? void 0
                            : Oa.prototype;
                    if (Ld) {
                        Rc = {};
                        for (const Gc of ud)
                            void 0 !== Ld[Gc] && (Rc[Gc] = Ld[Gc]);
                    }
                    qc = Ca.addEventListener;
                    Dc = Ca.removeEventListener;
                    Bc = Ca.document.addEventListener;
                    Uc = Ca.document.removeEventListener;
                    le = Ca.setTimeout;
                    gg = Ca.setInterval;
                    Ee || ((fe = Ca.clearTimeout), (Ze = Ca.clearInterval));
                    const nd = L ? L() : navigator.cookieEnabled,
                        ge =
                            1 ===
                            wc(
                                Ha("dtAdkSettings") ||
                                    (null === (W = Yd) || void 0 === W
                                        ? void 0
                                        : W.getItem("dtAdkSettings")) ||
                                    ""
                            ).overloadState;
                    if (
                        !(!nd || ge
                            ? 0
                            : "complete" !== document.readyState ||
                              (Ca.performance && Ca.performance.timing))
                    )
                        throw Error("Error during initCode initialization");
                    try {
                        Yd = Ca.localStorage;
                    } catch (Gc) {}
                    oe = [];
                    Qc();
                    pe = Kc();
                    Sd = [];
                    De = {};
                    Ee ||
                        ((Ca.clearTimeout = zb(fe)),
                        (Ca.clearInterval = zb(Ze)),
                        (Ee = !0));
                    const ld = Math.random(),
                        Ed = Math.random();
                    Ug = 0 !== ld && 0 !== Ed && ld !== Ed;
                    if (ib()) {
                        var cb = performance.getEntriesByType("navigation")[0];
                        if (cb) {
                            f = 0;
                            for (var Zb in cb) {
                                const Gc = +cb[Zb];
                                !isNaN(Gc) &&
                                    isFinite(Gc) &&
                                    (f += Math.abs(Gc));
                            }
                            var $b = Math.floor(1e4 * f);
                        } else $b = Kc();
                        kf = Qb($b);
                    } else Ug ? (kf = Math.random) : (kf = Qb(Kc()));
                    qe = (pe % zf) + "_" + parseInt(Lc(0, 1e3) + "");
                    a: {
                        const Gc = S().cfg;
                        hc = {
                            reportUrl: "dynaTraceMonitor",
                            initializedModules: "",
                            dataDtConfig: "string" === typeof Gc ? Gc : "",
                        };
                        S().cfg = hc;
                        const He = hc.dataDtConfig;
                        He &&
                            !He.includes("#CONFIGSTRING") &&
                            (ab(He, hc),
                            ia("domain"),
                            ia("auto"),
                            ia("app"),
                            ta(hc));
                        let dd = (hc.dataDtConfig || "").includes(
                            "#CONFIGSTRING"
                        )
                            ? null
                            : hc;
                        if ((dd = Fb(document.currentScript, dd)))
                            for (const ad in dd)
                                if (
                                    Object.prototype.hasOwnProperty.call(dd, ad)
                                ) {
                                    cb = ad;
                                    $b = hc;
                                    Zb = cb;
                                    var $c = dd[cb];
                                    "undefined" !== typeof $c && ($b[Zb] = $c);
                                }
                        const Bf = kb();
                        try {
                            const ad = ($c = Yd) && $c.getItem(Bf);
                            if (ad) {
                                const nf = gb(ad),
                                    he = ab(nf.config || ""),
                                    Ie = hc.lastModification || "0",
                                    Rh = parseInt(
                                        (
                                            he.lastModification ||
                                            nf.lastModification ||
                                            "0"
                                        ).substring(0, 13)
                                    ),
                                    nh =
                                        "string" === typeof Ie
                                            ? parseInt(Ie.substring(0, 13))
                                            : Ie;
                                if (!Ie || Rh >= nh)
                                    if (
                                        ((he.agentUri =
                                            he.agentUri || r("agentUri")),
                                        (he.featureHash =
                                            nf.featureHash || r("featureHash")),
                                        he.agentUri && ta(he),
                                        yb(he, !0),
                                        Wa(he),
                                        Ba(he),
                                        Rh > (+hc.lastModification || 0))
                                    ) {
                                        const bj = v("auto"),
                                            Sj = v("legacy");
                                        hc = J(he);
                                        hc.auto = bj ? "1" : "0";
                                        hc.legacy = Sj ? "1" : "0";
                                    }
                            }
                        } catch (ad) {}
                        yb(hc);
                        try {
                            const ad = hc.ign;
                            if (ad && new RegExp(ad).test(Ca.location.href)) {
                                delete Ca.dT_;
                                var rd = !1;
                                break a;
                            }
                        } catch (ad) {}
                        if (ea()) {
                            {
                                var of = navigator.userAgent;
                                const nf = of.lastIndexOf(fg);
                                if (-1 === nf) var Re = {};
                                else {
                                    var jg = of.substring(nf).matchAll(Ci);
                                    if (jg) {
                                        of = {};
                                        for (var Zd of jg) {
                                            const [, he, Ie] = Zd;
                                            of[he] = Ie;
                                        }
                                        Re = of;
                                    } else Re = {};
                                }
                            }
                            Zd = Re;
                            let ad;
                            for (ad in Zd)
                                if (
                                    Object.prototype.hasOwnProperty.call(
                                        Zd,
                                        ad
                                    ) &&
                                    Zd[ad]
                                ) {
                                    Re = hc;
                                    jg = ad;
                                    var Tf = Zd[ad];
                                    "undefined" !== typeof Tf && (Re[jg] = Tf);
                                }
                            J(hc);
                        }
                        var Sh = r("cuc"),
                            Fg,
                            kg;
                        const af =
                            null ===
                                (kg =
                                    null === (Fg = Ca.dT_) || void 0 === Fg
                                        ? void 0
                                        : Fg.gCP) || void 0 === kg
                                ? void 0
                                : kg.call(Fg);
                        if (Sh && af && Sh !== af)
                            throw Error("platformPrefix and cuc do not match!");
                        rd = !0;
                    }
                    if (!rd) throw Error("Error during config initialization");
                    Xb();
                    mh = S().disabled;
                    var sd;
                    if (!(sd = r("agentLocation")))
                        a: {
                            const Gc = r("agentUri");
                            if (Gc || document.currentScript) {
                                let dd = Gc || document.currentScript.src;
                                if (dd) {
                                    const Bf = dd.includes("_complete") ? 2 : 1;
                                    let af = dd.lastIndexOf("/");
                                    for (rd = 0; rd < Bf && -1 !== af; rd++)
                                        (dd = dd.substring(0, af)),
                                            (af = dd.lastIndexOf("/"));
                                    sd = dd;
                                    break a;
                                }
                            }
                            const He = location.pathname;
                            sd = He.substring(0, He.lastIndexOf("/"));
                        }
                    lh = sd;
                    ue = Jb();
                    "true" !== Ha("dtUseDebugAgent") ||
                        ue.includes("dbg") ||
                        (ue = r("debugName") || ue + "dbg");
                    if (!v("auto") && !v("legacy") && !mh) {
                        const Gc = r("agentUri") || $e(r("featureHash"));
                        v("async") || "complete" === document.readyState
                            ? mf(Gc, v("async"), void 0, void 0, "dtjsagent")
                            : (document.write(
                                  `<script id="${"dtjsagentdw"}" type="text/javascript" src="${Gc}" crossorigin="anonymous"><\/script>`
                              ),
                              document.getElementById("dtjsagentdw") ||
                                  mf(
                                      Gc,
                                      v("async"),
                                      void 0,
                                      void 0,
                                      "dtjsagent"
                                  ));
                    }
                    Ha(u()) && G("cooO", !0);
                    cd();
                    G("pVO", !!za("dt-pVO"));
                    Qa(kd);
                    Ad = 18e5;
                    Ye = z("hvt") || 216e5;
                    const pf = Cc();
                    lf = void 0;
                    pf && "ea" in pf && (lf = pf.gITAID());
                    gc(H, [lf || 1]);
                } catch (Ld) {
                    "platformPrefix and cuc do not match!" === Ld.message
                        ? ((sd = Ca.dT_),
                          (Ca.dT_ = {
                              minAgentVersion: sd.minAgentVersion,
                              platformPrefix:
                                  (null === (C = sd.gCP) || void 0 === C
                                      ? void 0
                                      : C.call(sd)) || sd.platformPrefix,
                              platformCookieOffset: sd.platformCookieOffset,
                          }),
                          Pe(
                              "[CookiePrefix/initCode] cuc and platformPrefix do not match, disabling agent!"
                          ))
                        : (delete Ca.dT_,
                          Pe("JsAgent initCode initialization failed!", Ld));
                }
        }
    })();
})();
(function () {
    function Na() {
        Na =
            Object.assign ||
            function (a) {
                for (var c, g = 1, k = arguments.length; g < k; g++) {
                    c = arguments[g];
                    for (var p in c)
                        Object.prototype.hasOwnProperty.call(c, p) &&
                            (a[p] = c[p]);
                }
                return a;
            };
        return Na.apply(this, arguments);
    }
    function Sa(a) {
        var c;
        return function () {
            if (c) return c;
            var g,
                k,
                p,
                B,
                O =
                    -1 !== cj
                        ? cj
                        : (null ===
                              (k =
                                  null === (g = lb.dT_) || void 0 === g
                                      ? void 0
                                      : g.scv) || void 0 === k
                              ? void 0
                              : k.call(g, "postfix")) ||
                          (null ===
                              (B =
                                  null === (p = lb.dT_) || void 0 === p
                                      ? void 0
                                      : p.gCP) || void 0 === B
                              ? void 0
                              : B.call(p));
            return (c = g = (cj = O) ? "".concat(a).concat(O) : a);
        };
    }
    function eb(a) {
        return !!a.interactionId;
    }
    function Ta(a) {
        a.getEntries()
            .filter(eb)
            .forEach(function (c) {
                qf = Math.min(qf, c.interactionId);
                Th = (Vg = Math.max(Vg, c.interactionId))
                    ? (Vg - qf) / 7 + 1
                    : 0;
            });
    }
    function Fa(a) {
        function c() {
            fc.takeRecords && p(fc.takeRecords());
        }
        function g() {
            Za = [];
            Xa = ve ? Th : performance.interactionCount || 0;
        }
        function k(Db) {
            var kc = Za[Za.length - 1],
                od = vb[Db.interactionId];
            if (od || 10 > Za.length || Db.duration > kc.latency)
                od
                    ? (od.entries.push(Db),
                      (od.latency = Math.max(od.latency, Db.duration)))
                    : ((Db = {
                          id: Db.interactionId,
                          latency: Db.duration,
                          entries: [Db],
                      }),
                      (vb[Db.id] = Db),
                      Za.push(Db)),
                    Za.sort(Ra),
                    Za.splice(10).forEach(function (we) {
                        delete vb[we.id];
                    });
        }
        function p(Db) {
            if (Db) {
                for (var kc = 0, od = 0; od < Db.length; od++)
                    B(Db[od]) && kc++;
                if (0 === kc)
                    O ||
                        Y.forEach(function (Gg) {
                            Gg({ entries: [], latency: 8, id: -1 });
                        });
                else {
                    qa += kc;
                    var we =
                        Za[
                            Math.min(
                                Za.length - 1,
                                Math.floor(
                                    ((ve
                                        ? Th
                                        : performance.interactionCount || 0) -
                                        Xa) /
                                        50
                                )
                            )
                        ];
                    we &&
                        (O !== we.latency &&
                            Y.forEach(function (Gg) {
                                Gg(we);
                            }),
                        (O = we.latency));
                }
            }
        }
        function B(Db) {
            if (40 > Db.duration) return !1;
            if (-1 !== Ya && Db.startTime < Ya) return !0;
            Db.interactionId && k(Db);
            "first-input" === Db.entryType &&
                (Za.some(function (kc) {
                    return kc.entries.some(function (od) {
                        return (
                            Db.duration === od.duration &&
                            Db.startTime === od.startTime
                        );
                    });
                }) ||
                    k(Db));
            return !0;
        }
        void 0 === a && (a = 40);
        "interactionCount" in performance ||
            ve ||
            ((ve = new PerformanceObserver(Ta)),
            ve.observe({ type: "event", buffered: !0, durationThreshold: 0 }));
        var O = 0,
            Y = [],
            qa = 0,
            Xa = 0,
            Ya = -1,
            Za = [],
            vb = {},
            fc = new PerformanceObserver(function (Db) {
                p(Db.getEntries());
            });
        fc.observe({ type: "event", buffered: !0, durationThreshold: a });
        "PerformanceEventTiming" in window &&
            "interactionId" in PerformanceEventTiming.prototype &&
            fc.observe({ type: "first-input", buffered: !0 });
        lb.addEventListener("pageshow", g, !0);
        return {
            Ec: function () {
                c();
                return O;
            },
            reset: function (Db) {
                void 0 === Db && (Db = -1);
                Za = [];
                vb = {};
                qa = O = Xa = 0;
                Ya = Db;
            },
            ki: function (Db) {
                Y.push(Db);
            },
            Ci: function () {
                Y = [];
                lb.removeEventListener("pageshow", g, !0);
                fc.disconnect();
            },
            Lf: c,
            Ch: function () {
                return qa;
            },
        };
    }
    function Ra(a, c) {
        return c.latency - a.latency;
    }
    function va() {
        return "10307250124095659";
    }
    function Ja(a) {
        return !!(a && "ea" in a);
    }
    function Ha(a, c) {
        const g = !a.bcv("ac") || a.scv("app") === c.scv("app");
        a = a.scv("postfix");
        c = c.scv("postfix");
        return g && a === c;
    }
    function bb() {
        const a = lb.dT_;
        try {
            let c = lb.parent;
            for (; c && c !== lb; ) {
                const g = c.dT_;
                if (Ja(g) && "10307250124095659" === g.version && Ha(a, g))
                    return g.tdto();
                c = c !== c.parent ? c.parent : void 0;
            }
        } catch (c) {}
        return a;
    }
    function $a(a) {
        const c = a.version.startsWith("10279");
        a.tdto && !c
            ? ((bf = a.tdto), (ed = a.gFLAI))
            : ((bf = bb), (a.tdto = bf), (ed = () => {}), (a.gFLAI = ed));
    }
    function ua() {
        document.cookie = "__dTCookie=1;SameSite=Lax";
        const a = document.cookie.includes("__dTCookie");
        document.cookie = "__dTCookie=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
        return a;
    }
    function ka(a, ...c) {
        return Di ? Di(a, c) : a.apply(this, c);
    }
    function na(a, c, g) {
        return a.splice(c, (g || c) - c + 1 || a.length);
    }
    function da() {
        return ac;
    }
    function Ka(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c);
    }
    function T(a) {
        if (Object.keys) return Object.keys(a);
        const c = [];
        if (a === Object(a)) for (const g in a) Ka(a, g) && c.push(g);
        return c;
    }
    function ca(a, c) {
        a = Hg[a];
        a.includes(c) || a.push(c);
    }
    function V(a, c) {
        a = Hg[a];
        c = a.indexOf(c);
        -1 !== c && na(a, c);
    }
    function K(a) {
        var c = Hg[a.kind].slice();
        const g = [];
        for (const k of c) (c = k(a)) && g.push(c);
        return g;
    }
    function pa() {
        const a = ac,
            c = va();
        a !== c &&
            ca("DEBUG_INFO_REQUESTED", function () {
                return [
                    {
                        type: "miav",
                        severity: "Warning",
                        text: `Snippet version(${a}) does not match the version of the monitoring code(${c}). Consider updating your code snippet for best compatibility.`,
                    },
                ];
            });
        ca("DEBUG_INFO_REQUESTED", function () {
            return [
                {
                    type: "v",
                    severity: "Info",
                    text: `Snippet version: ${a} ; Monitoring code:${va()}`,
                },
            ];
        });
    }
    function X() {
        return lb.dT_;
    }
    function aa(a, c = []) {
        var g = lb.dT_;
        g = (null === g || void 0 === g ? 0 : g.iIO) ? g.iIO : null;
        return !(null === g || void 0 === g || !g(a, c));
    }
    function Z() {}
    function xa(a) {
        return (
            (aa(a, 9) || P(a)) &&
            ("string" === typeof a.textContent ||
                "string" === typeof a.innerText)
        );
    }
    function P(a) {
        return a && a.nodeType && 1 === a.nodeType;
    }
    function sa(a) {
        return a && "INPUT" === a.nodeName;
    }
    function Ia(a) {
        return a && "SCRIPT" === a.nodeName;
    }
    function L(a) {
        return (
            "function" === typeof a &&
            /{\s+\[native code]/.test(Function.prototype.toString.call(a))
        );
    }
    function S() {
        return vc;
    }
    function ma() {
        return yc;
    }
    function ja() {
        return cf;
    }
    function ha() {
        return fd;
    }
    function Aa(a, c) {
        a ? a.id === a.Oa() && (oh = a) : (oh = c ? null : oh);
    }
    function Ba() {
        var a = yd.Fa.length;
        for (--a; 0 <= a; a--) {
            const c = yd.Fa[a];
            if ((c.Kc() && !c.Qa) || (c.Qa && c.Wf())) return c;
        }
        return null;
    }
    function Wa(a) {
        return yd.actions[a];
    }
    function Va() {
        return Je;
    }
    function Mb() {
        const a = document.location;
        return a ? !a.href.startsWith("http") : !0;
    }
    function ic() {
        const a =
            navigator.userAgent ||
            navigator.vendor ||
            (lb.opera && lb.opera.version()) ||
            "";
        return (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substring(0, 4)
            )
        );
    }
    function Yb() {
        return (
            "1" === navigator.doNotTrack ||
            "yes" === navigator.doNotTrack ||
            "1" === navigator.msDoNotTrack ||
            "1" === lb.doNotTrack
        );
    }
    function U() {
        return /(gomezagent|googlebot|adsbot-google|mediapartners-google|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|facebookexternalhit|ia_archiver)/i.test(
            navigator.userAgent
        );
    }
    function db() {
        var a = bf();
        if (a === X() || !Ja(a) || !a.gITAID) return ($d = gc), $d();
        a = a.gITAID();
        rf = a + 1;
        return a;
    }
    function gc() {
        return rf++;
    }
    function rc() {
        return $d();
    }
    function tc() {
        return Md;
    }
    function nc() {
        return xe;
    }
    function wb(a) {
        const c = [];
        if (a)
            for (let g = 0; g < a.length; g++) {
                const k = a.charAt(g),
                    p = Uh[k];
                p ? c.push(p) : c.push(k);
            }
        return c.join("");
    }
    function Rb(a) {
        if (!a) return "";
        let c = "";
        for (let g = 0; g < a.length; g++) {
            const k = Wg[a.charAt(g) + a.charAt(g + 1)];
            k ? ((c += k), g++) : (c += a.charAt(g));
        }
        return c;
    }
    function fb(a) {
        return a
            ? Rb(a)
                  .replace(/_5F/g, "_")
                  .replace(/_25/g, "%")
                  .replace(/_7C/g, "|")
            : "";
    }
    function Wb(a) {
        if (!a) return "";
        a = a.replace(/_/g, "_5F").replace(/%/g, "_25").replace(/\|/g, "_7C");
        return wb(a);
    }
    function Pb(a) {
        if (!a || !a.includes("://")) return "";
        a = a.split("/")[2].split(":")[0].toLowerCase();
        a: {
            for (c of Tj)
                if (a.includes(c)) {
                    var c = !0;
                    break a;
                }
            c = !1;
        }
        return c ? "" : a;
    }
    function ec(a) {
        let c = 0;
        if (a) {
            const g = a.length;
            for (let k = 0; k < g; k++)
                (c = 31 * c + a.charCodeAt(k)), (c &= c);
        }
        return c;
    }
    function bc(a, c, g) {
        Di(Bb, [a, c, g]);
    }
    function Bb(a, c, g) {
        try {
            lb.sessionStorage.setItem(a, c + "");
        } catch (k) {
            g || Uf(a, c + "", void 0, xb("ssc"));
        }
    }
    function D(a, c, g = !0) {
        let k = !0;
        try {
            lb.localStorage[a] = c;
        } catch (p) {
            (k = !1), g && Uf(a, c, void 0, xb("ssc"));
        }
        return k;
    }
    function R(a, c) {
        try {
            return lb.sessionStorage[a] || "";
        } catch (g) {}
        return c ? "" : Ig(a);
    }
    function Ma() {
        const a = lb.location;
        return a ? ea(a.href) : "-";
    }
    function ea(a) {
        const c = a.indexOf("#");
        return 0 <= c ? a.substring(0, c) : a;
    }
    function gb(a) {
        Uf("dtUseDebugAgent", a, void 0, xb("ssc"));
    }
    function kb(a) {
        Uf("dt_dbg_console", a, void 0, xb("ssc"));
    }
    function ab(a = "TRACE") {
        Uf(
            "dt_dbg_logfilter",
            `level=${a}|featureHash=|fileName=`,
            void 0,
            xb("ssc")
        );
    }
    function ob(a) {
        const c = a.match(/:(\d+)/);
        return c ? c[1] : a.startsWith("https") ? "443" : "80";
    }
    function v(a) {
        if (!a) return !1;
        a = a.trim().toLowerCase();
        a.startsWith("//") && (a = location.protocol + a);
        var c = location.href.startsWith("http");
        if (!a.startsWith("http") || !c) return !1;
        if (
            location.href.indexOf(location.host) !==
            a.indexOf(location.host.toLowerCase())
        )
            return !0;
        c = location.port || ob(location.href);
        return ob(a) !== c;
    }
    function z(a) {
        try {
            return new URL(a, document.baseURI).href;
        } catch (c) {
            return a;
        }
    }
    function r() {
        try {
            return lb.location.href;
        } catch (a) {}
        return "";
    }
    function G(a) {
        if (!a) return "";
        try {
            const g = z(a);
            if (!lb.location) return g;
            const k = lb.location;
            let p = k.origin;
            if (!p) {
                if (!k.protocol || !k.host) return g;
                p = k.protocol + "//" + k.host;
            }
            var c =
                g.substring(0, p.length + 1).toLowerCase() ===
                (p + "/").toLowerCase()
                    ? g.substring(p.length)
                    : g;
        } catch (g) {
            (c = a), a.startsWith("?") && (c = lb.location.pathname + a);
        }
        return J(c, 500);
    }
    function J(a, c = 100, g = !1, k = "...") {
        return !a || a.length <= c
            ? a
            : g
            ? k + a.substring(Math.max(0, a.length - c + k.length))
            : a.substring(0, Math.max(0, c - k.length)) + k;
    }
    function ia(a) {
        const c = Nb("sl");
        return J(a, c);
    }
    function ta(a, c, g, k) {
        if (a[k].set) {
            const p = a[k].set(c, g);
            p && p.get && p.get(c) === g && (a[k] = p);
        } else a[k][c] = g;
    }
    function Da(a, c, g, k) {
        g && ((g = J(g, Nb("mhl"))), ta(a, c, g, k));
    }
    function yb(a) {
        return a ? a.split("?")[0] : "";
    }
    function Fb() {
        var a = Vh();
        if (a) {
            var c = a.indexOf("-");
            a = -1 === c ? "" : a.substring(0, c);
            if (a) {
                c = "";
                for (let g = 0; g + 1 < a.length; g += 2)
                    c += a.charCodeAt(g) + a.charCodeAt(g + 1) + "";
                a = Math.floor(Math.abs(1e7 * Math.sin(parseInt(c))));
            } else a = 0;
        } else a = !1;
        return a;
    }
    function Kb() {
        const a = Ei();
        return 3 === a ? !0 : 4 === a ? !1 : !!Nb("rdnt") && Yb();
    }
    function Cb(a, c, g) {
        if (!a || !c) return [];
        const k = [];
        for (let p = 0; p < a.length; p += c) {
            let B;
            p + c <= a.length
                ? ((B = a.slice(p, p + c)),
                  "%" === B.charAt(B.length - 1) &&
                      a.length >= p + c + 1 &&
                      ((B += a.charAt(p + c)),
                      (B += a.charAt(p + c + 1)),
                      (p += 2)),
                  "%" === B.charAt(B.length - 2) &&
                      a.length >= p + c + 2 &&
                      ((B += a.charAt(p + c)), (p += 1)))
                : (B = a.slice(p));
            k.push(B);
        }
        if (g)
            for (a = k.length, c = 0; c < a; c++)
                k[c] =
                    g
                        .replace(/#index#/, c + 1 + "")
                        .replace(/#total#/, a + "") + k[c];
        return k;
    }
    function Jb(a) {
        return !1 === a ? 0 : "number" === typeof a ? 2 : 1;
    }
    function ib(a, c = Nb("rtu")) {
        if (!a) return "";
        var g = Nb("rtp");
        if (!g || (a.length > c && 2 === g)) a = yb(a);
        var k = Wb(a);
        if (k.length > c) {
            g = Wb(Pb(a));
            a = a.split("/");
            a = a[a.length - 1];
            var p = Wb(a);
            if (p !== g) {
                if (((k = g + "/../" + p), (c = k.length - c), 0 < c))
                    if (p.length > c) {
                        c = Math.max(p.length - (c + 2), 0);
                        k = Math.max(a.length - c, 0);
                        for (p = Wb(a.substring(k, a.length)); p.length > c; )
                            (k += Math.ceil((p.length - c) / 3)),
                                (p = Wb(a.substring(k, a.length)));
                        k = g + "/../.." + p;
                    } else k = J(g, c, !1, ".../") + p;
            } else k = J(k, c, !0);
        }
        return k;
    }
    function Qb(a, c) {
        const g = 1e3 * Nb("oat");
        return (null !== c && void 0 !== c ? c : ae()) + g >= a ? a : -2;
    }
    function Lc() {
        return X().disabled && !X().syn;
    }
    function pc(a) {
        const c = X();
        c.syn || ((c.disabledReason = a), (c.disabled = !0));
    }
    function md(a, c) {
        return Ig(a, c) || Xg(a) || "";
    }
    function Ec(a) {
        return null === a || void 0 === a ? void 0 : a.startsWith("data:");
    }
    function Cc(a) {
        return (a = Wa(a)) && a.ib ? a : null;
    }
    function Gd(a) {
        return (a = "number" === typeof a ? Cc(a) : a) ? a.gb() : "";
    }
    function zd(a, c, g) {
        let k = fd;
        g && (k = Wa(g));
        if (!k) return !1;
        k.lf(a, c);
        return !0;
    }
    function Sc() {
        const a = Uj(!0);
        if (0 < a.length) {
            const c = [];
            for (const g of a) g.frameId !== Ke() && c.push(g);
            Cf(c);
        }
    }
    function H(a) {
        if (!a) return "";
        const c = Ke() + "h" + a,
            g = document.cookie,
            k = Ig(Df(), g);
        return xb("dASXH") && k && k.includes(c) && !Mb()
            ? ""
            : Wh() + "$" + Ke() + "h" + a + "v" + Vh(g) + "e0";
    }
    function fa(a) {
        for (let c = Vf.length - 1; 0 <= c; c--)
            if (Vf[c] === a) {
                na(Vf, c);
                break;
            }
    }
    function F(a) {
        if (0 < Yg || (a && 0 < Vf.length))
            if (((a = Vf.length), 0 < a)) return Vf[a - 1];
        return 0;
    }
    function oa(a, c) {
        if (L(Array.prototype.map)) return Array.prototype.map.call(a, c);
        const g = [];
        for (let k = 0; k < a.length; k++) g.push(c(a[k], k, a));
        return g;
    }
    function za() {
        return oa(Fi, function (a) {
            return a.message
                ? `Status: ${a.status}, Message: "${a.message}"`
                : `Status: ${a.status}`;
        });
    }
    function Qa(a, c) {
        if (L(Array.prototype.filter)) return Array.prototype.filter.call(a, c);
        const g = [];
        for (let k = 0; k < a.length; k++) {
            const p = a[k];
            c(p, k, a) && g.push(p);
        }
        return g;
    }
    function Ea(a, c = !1) {
        const g = [`i${a.id}`, `k${a.kind}`, `h${+a.hydrated}`];
        c && g.push(`t${+a.trigger}`);
        return g.join(";");
    }
    function mb(a) {
        if (a) {
            const c = document.getElementsByTagName("LABEL"),
                g = c.length;
            for (let k = 0; k < g; k++) {
                const p = c[k];
                if (p && "LABEL" === p.nodeName && p.htmlFor === a)
                    return tb(p.innerText, p.textContent);
            }
        }
        return "";
    }
    function tb(...a) {
        for (const c of a)
            if ("string" === typeof c && (a = c.trim())) return a;
        return "";
    }
    function pb(a) {
        if (!a || a.startsWith("data:")) return "";
        a = a.split("/");
        return 0 < a.length ? a[a.length - 1].split(".")[0] : "";
    }
    function Gb(a) {
        if (a && a.split) {
            var c = a.split("/");
            if (0 < c.length && ((c = c[c.length - 1].trim()), null !== c))
                return c;
        }
        return a || "";
    }
    function Xb(a) {
        return xa(a) ? a.innerText || a.textContent : a.textContent;
    }
    function rb(a, c) {
        var g = c.nodeName ? c.nodeName.toUpperCase() : "unknown",
            k = P(c) ? c.getAttribute("type") : "";
        k = "string" === typeof k ? k.toUpperCase() : "";
        let p = "";
        switch (a) {
            case 0:
                P(c)
                    ? ((g = ""),
                      sa(c) &&
                          "HIDDEN" !== k &&
                          ((g =
                              !k ||
                              ("BUTTON" !== k &&
                                  "SUBMIT" !== k &&
                                  "RESET" !== k &&
                                  "IMAGE" !== k)
                                  ? null
                                  : c.value),
                          (a = mb(c.id)),
                          (g =
                              !k ||
                              ("BUTTON" !== k &&
                                  "SUBMIT" !== k &&
                                  "RESET" !== k)
                                  ? tb(a, g)
                                  : tb(g, a))),
                      g || (g = tb(Xb(c))),
                      (p = g))
                    : (p = "");
                break;
            case 1:
                g = "";
                if ((sa(c) && "HIDDEN" !== k) || (c && "BUTTON" === c.nodeName))
                    (k = "IMAGE" === k ? c.getAttribute("alt") : null),
                        (g = tb(c.name, c.title, k));
                p = g;
                break;
            case 3:
                P(c)
                    ? ((c = c.className),
                      (p = aa(c, ["baseVal", "animVal"])
                          ? c.baseVal || c.animVal || ""
                          : c))
                    : (p = "");
                break;
            case 4:
                c = "";
                "INPUT" === g && "HIDDEN" !== k
                    ? (c = "INPUT: " + k)
                    : "A" === g
                    ? (c = "LINK")
                    : "-" === x && (x = c = g);
                p = c;
                break;
            case 2:
                (g = ""),
                    sa(c) && "IMAGE" === k
                        ? (g = pb(c.src))
                        : c && "A" === c.nodeName
                        ? (g = tb(c.title, Gb(c.href)))
                        : c && "IMG" === c.nodeName
                        ? (g = tb(c.name, c.title, c.alt, pb(c.src)))
                        : c &&
                          "FORM" === c.nodeName &&
                          (g = tb(c.name, c.id, c.action)),
                    g || (g = tb(c.title, c.data, c.wholeText, c.id)),
                    (p = g);
        }
        return p;
    }
    function Pc(a) {
        if (!a) return "";
        try {
            var c = a.nodeName ? a.nodeName.toUpperCase() : "unknown";
            if (
                "HTML" === c ||
                "BODY" === c ||
                "HEAD" === c ||
                "#DOCUMENT" === c
            )
                return x;
            for (c = 0; 4 >= c; c++) {
                const g = rb(c, a);
                if (g && g !== x) return g;
            }
            return Pc(a.parentNode);
        } catch (g) {}
        return "";
    }
    function xc(a, c) {
        if (!c) return "";
        const g = c.length;
        if (0 >= g || 20 < ba) return "";
        for (let k = 0; k < g; k++) {
            const p = c[k];
            let B;
            ba++;
            if ((B = xc(a, p.childNodes))) return B;
            ba--;
            if ((B = rb(a, p))) return B;
        }
        return "";
    }
    function qd(a) {
        try {
            const k = a.nodeName ? a.nodeName.toUpperCase() : "unknown";
            if (
                "HTML" === k ||
                "BODY" === k ||
                "HEAD" === k ||
                "#DOCUMENT" === k
            )
                return "Page: " + d;
            if (a && "SELECT" === a.nodeName) {
                const B = a.nodeName ? a.nodeName.toUpperCase() : null,
                    O = mb(a.id);
                var c = tb(O, a.name, B),
                    g = null;
                if (!a.multiple) {
                    const Y =
                        a.options && -1 < a.selectedIndex
                            ? a.options[a.selectedIndex]
                            : null;
                    Y && (g = tb(Y.label, Y.innerText, Y.textContent));
                }
                return g ? "[" + c + "] to value [" + g + "]" : c;
            }
            if (a && "TEXTAREA" === a.nodeName) {
                const B = a.nodeName ? a.nodeName.toUpperCase() : null,
                    O = mb(a.id);
                return tb(O, a.name, B) || a.nodeName;
            }
            const p = tb(Xb(a));
            if (p) return p;
            ba = 0;
            if (a.childNodes && 0 < a.childNodes.length) {
                a: {
                    for (c = 0; 4 >= c; c++) {
                        const B = xc(c, [a]);
                        if (B) {
                            g = B;
                            break a;
                        }
                    }
                    g = "";
                }
                return g;
            }
        } catch (k) {}
        return Pc(a);
    }
    function Od() {
        h = Mc("uana").split(",");
        n = Nb("uanpi") || 0;
    }
    function de() {
        return lc;
    }
    function pd(a) {
        3 === a && (Tb = []);
        lc = a;
    }
    function Pd() {
        return wa;
    }
    function Nc(a) {
        const c = Qa(lg, function (g) {
            return g.timestamp <= a;
        });
        return c[c.length - 1] || null;
    }
    function Wc(a) {
        Array.isArray(a) ? Tb.push(...a) : Tb.push(a);
    }
    function Jd(a, c = Infinity) {
        var g = c + 1;
        let k = "",
            p = "";
        "string" === typeof a
            ? (p = a)
            : "object" === typeof a && a && (p = a.toString());
        a = Mc("spc") + "\t\n\r";
        for (const B of p)
            if (!a.includes(B) && ((k += B), k.length >= g)) break;
        return J(k, c, !1, "...");
    }
    function Hd(a) {
        let c = Se;
        try {
            for (; c; ) {
                var g;
                if (
                    (g =
                        a.target &&
                        "string" !== typeof a.target &&
                        a.target !== c.target &&
                        "string" !== typeof c.target)
                )
                    a: {
                        try {
                            let k = a.target.parentNode;
                            for (; k; ) {
                                if (k === c.target) {
                                    g = !0;
                                    break a;
                                }
                                k = k.parentNode;
                            }
                        } catch (k) {}
                        g = !1;
                    }
                g && (a = c);
                c = c.next;
            }
        } catch (k) {}
        Se = a;
    }
    function Bd({
        id: a,
        target: c,
        type: g,
        kf: k,
        Fg: p,
        url: B,
        title: O,
        view: Y,
    }) {
        return {
            id: a,
            target: c,
            name: "",
            type: g,
            next: void 0,
            Gb: void 0,
            info: k || "-",
            start: cc(),
            hc: !1,
            Ne: cc() + (p || 30),
            url: B || r(),
            title: O || document.title,
            da: "",
            view: Y,
            Rb: function () {
                if (!this.name) {
                    if (xb("uam"))
                        var qa = {
                            da:
                                "dTMasked_" +
                                (xa(this.target) ? this.target.nodeName : ""),
                        };
                    else {
                        var Xa = this.target || "";
                        x = "-";
                        if ("string" === typeof Xa) qa = { da: Xa };
                        else if (P(Xa)) {
                            qa = qd(Xa) || x;
                            a: {
                                try {
                                    for (let Za = 0; Za <= n; Za++) {
                                        for (const vb of h) {
                                            const fc = Xa.getAttribute(vb);
                                            if (fc) {
                                                var Ya = fc;
                                                break a;
                                            }
                                        }
                                        if (Xa.parentElement)
                                            Xa = Xa.parentElement;
                                        else break;
                                    }
                                } catch (Za) {}
                                Ya = "";
                            }
                            qa = { da: qa, Ob: Ya };
                        } else qa = { da: x };
                    }
                    Ya = Nb("sl");
                    qa.da = Jd(qa.da, Ya);
                    qa.Ob = Jd(qa.Ob, Ya);
                    this.name = qa.Ob || qa.da;
                    qa.Ob && (this.da = qa.da);
                }
                return this.name;
            },
            Sh: function () {
                return this.hc;
            },
            ug: function () {
                let qa = this;
                do (qa.hc = !0), (qa = qa.next);
                while (qa);
            },
        };
    }
    function Fc(a, c, g, k, p, B, O = wa) {
        if (wc(Nd)) return Nd.bi(a, c, g, k, p, B, O);
        const Y = Bd({
            id: ph++,
            target: a,
            type: c,
            kf: g,
            Fg: k,
            url: p,
            title: B,
            view: O,
        });
        try {
            return Zg && ((Y.next = Se), Y.next && (Y.next.Gb = Y), Hd(Y)), Y;
        } finally {
            Lb(function () {
                ke(Y);
            }, Y.Ne - cc());
        }
    }
    function Cd() {
        return wc(Nd) ? Nd.gci() : Se;
    }
    function Ic() {
        return wc(Nd) ? Nd.gpi() : Le;
    }
    function id(a, c) {
        if (wc(Nd)) return Nd.cii(a, c);
        c = c ? Ic() : Cd();
        if (!c) return dj[a];
        switch (a) {
            case "name":
                return c.Rb();
            case "type":
                return c.type;
            case "validUntil":
                return c.Ne;
            case "start":
                return c.start;
            case "target":
                return c.target;
            case "url":
                return c.url;
            case "title":
                return c.title;
            default:
                return null;
        }
    }
    function hd(a) {
        return id(a, !0);
    }
    function Qd(a, c) {
        return {
            timeout: a,
            url: id("url", c),
            name: id("name", c),
            startTime: id("start", c),
            type: id("type", c) || "-",
            title: id("title", c),
        };
    }
    function ke(a) {
        if (wc(Nd)) Nd.ei(a);
        else if (Se) {
            let c = Se;
            for (; c.next && c !== a; ) c = c.next;
            c === a &&
                (id("name") && (Le = Se),
                (c.target = void 0),
                c.Gb && (c.Gb.next = c.next),
                c.next && (c.next.Gb = c.Gb),
                c === Se && (Se = c.next));
        }
    }
    function wd(a = "") {
        return a
            ? (Mc("doNotDetect") ? Mc("doNotDetect").split(",") : []).includes(
                  a
              )
            : !1;
    }
    function xd(a, c, g) {
        if (!wd(g)) {
            var k = c ? c : a;
            Vj[a] = function (p) {
                K({ kind: "GLOBAL_EVENT_FIRED", detail: { t: a, e: p } });
                var B = xb("ote"),
                    O = xb("ase");
                const Y = "boolean" !== typeof p.isTrusted || p.isTrusted,
                    qa = p.isRuxitSynthetic;
                if (O ? qa : !B || Y) {
                    (B = p.target || p.currentTarget || p.srcElement || null) &&
                        B.shadowRoot &&
                        p.composed &&
                        p.bubbles &&
                        "function" === typeof p.composedPath &&
                        (O = p.composedPath()) &&
                        O.length &&
                        (B = O[0]);
                    a: {
                        O = B;
                        if (
                            ("KD" === k || "KU" === k) &&
                            sa(O) &&
                            "password" !== O.type
                        )
                            if (
                                ((p = p.keyCode || p.charCode || p.code),
                                (O = +p),
                                xb("uam") && !isNaN(O))
                            ) {
                                if (
                                    ((O = String.fromCharCode(O)),
                                    !(
                                        ("a" <= O && "z" >= O) ||
                                        ("A" <= O && "Z" >= O) ||
                                        ("0" <= O && "9" >= O)
                                    ))
                                ) {
                                    p += "";
                                    break a;
                                }
                            } else {
                                p += "";
                                break a;
                            }
                        p = "";
                    }
                    Fc(B, k + p, void 0, 30);
                }
            };
            sf(document, a, Vj[a]);
        }
    }
    function cd(a) {
        Zg = a;
        if (!a) {
            for (a = Se; a; ) (a.target = void 0), (a = a.next);
            Se = void 0;
        }
    }
    function wc(a) {
        return a !== X() && Ja(a);
    }
    function Kd(a) {
        Ek = a;
    }
    function Rd(a, c) {
        var g;
        if (c <= Ek) return !1;
        c = null === (g = fd) || void 0 === g ? void 0 : g.Tb();
        g = !!c && a === c.name;
        c = oh;
        if (!c) return !g;
        a = a === c.name && (!c.Ee || 3e3 >= cc() - c.start);
        return !g && !a;
    }
    function gd(a, c) {
        if (!xb("dsa") || !a.startsWith("false")) {
            var g = xb("dssv"),
                k = xb("dsss"),
                p = k && g,
                B = k && !g,
                O = g && !k;
            g = !g && !k;
            k = c ? a + "|" + c : a;
            var Y = Ef();
            p && bc(Y, k);
            B && (bc(Y, a), Uf(Y, Wf(c || "-"), void 0, xb("ssc")));
            O && (bc(Y, c || "-"), Uf(Y, Wf(a), void 0, xb("ssc")));
            g && Uf(Y, Wf(k), void 0, xb("ssc"));
        }
    }
    function m() {
        var a = null;
        const c = ie[0];
        if (c) {
            c.Ha(0);
            c.Qd();
            a = c;
            for (let g = 0; g < c.subActions.length; g++)
                (a = c.subActions[g]), a.Ha(0), a.Qd();
        }
        return a;
    }
    function y(a = cc(), c, g, k, p, B) {
        const O = F(!0),
            Y = fd || m();
        let qa = [];
        if (!O && c && g && a)
            qa = [
                !p + "",
                wb(g),
                p || "-1",
                wb(c),
                wb(k || "-"),
                a,
                Ke(),
                Wb(Ma()),
                "",
                "",
                wb(location.hash.substring(1)),
                wb(B || ""),
            ];
        else if (Y) {
            Y.Mb();
            const Xa = Y.status;
            Y.status = 2;
            Lb(function () {
                Y.status = Xa;
            }, 0);
            qa = [
                "false",
                wb(Y.type),
                Y.id,
                wb(Y.name),
                wb(Y.info || "-"),
                Y.start,
                Ke(),
                Wb(Ma()),
                "",
                "",
                wb(location.hash.substring(1)),
                wb(Y.da || ""),
            ];
        }
        return qa;
    }
    function w(a, c = null, g) {
        var k = !1;
        const p = bf();
        Ja(p) && (k = p.iSAC());
        if (!k || p === X()) {
            a && (gd("-"), (yl = []));
            k = Cd();
            if (!k) {
                var B = Ic();
                B &&
                    Rd(hd("name"), hd("start")) &&
                    3e3 >= cc() - hd("validUntil") &&
                    (k = B);
            }
            B = [];
            k && !k.hc
                ? (k.ug(), (B = y(k.start, k.Rb(), k.type, k.info, k.D, k.da)))
                : c
                ? (B = y(c.start, c.name, c.type, c.info, c.id, c.da))
                : a && (B = y(g));
            a = B;
            c = yl;
            1 < c.length &&
                1 < a.length &&
                c[3] === a[3] &&
                ((c[2] = a[2]), (c[0] = a[0]), (a = c));
            a.length &&
                ((c = wa),
                (g = c.timestamp),
                (k = c.group),
                (c = [Wb(c.name), g, Wb(k || ""), wb(Ea(c, !0))]),
                gd(a.join("|"), c.join("|")),
                (yl = a.concat(c)),
                Ja(p) && p.sSAC(!0, !0));
        }
    }
    function I(a, c, g, k, p = !1, B = !1) {
        if (p) la(a, c, g, k, B);
        else {
            try {
                for (p = 0; p < a.length; p++)
                    p in a && c.call(g, a[p], p, a, () => {});
            } catch (Y) {
                var O = Y;
            }
            if (k) O ? k.call(g, a, O) : k.call(g, a);
            else if (O) throw O;
        }
    }
    function M(a, c, g, k = !1, p = !1) {
        return new Ff(function (B, O) {
            I(
                a,
                c,
                g,
                function (Y, qa) {
                    qa ? O(qa) : B(Y);
                },
                k,
                p
            );
        });
    }
    function la(a, c, g, k, p = !1) {
        const B = p ? a : Array.prototype.slice.call(a);
        let O = 0,
            Y = !1,
            qa = 0;
        const Xa = (Za) => {
                k && !Y && (k.apply(g, Za ? [B, Za] : [B]), (Y = !0));
            },
            Ya = (Za, vb) => {
                if (!Y) {
                    var fc;
                    try {
                        4 > c.length && O++,
                            Za in vb &&
                                (fc = c.call(g, vb[Za], Za, vb, function () {
                                    O++;
                                    O === vb.length && Xa();
                                    for (let kc = qa + 1; kc < vb.length; kc++)
                                        (qa = kc),
                                            ya(function () {
                                                Ya(kc, B);
                                            });
                                }));
                    } catch (kc) {
                        var Db = kc;
                        fc = !1;
                    }
                    for (let kc = qa + 1; kc < vb.length; kc++)
                        (qa = kc),
                            ya(function () {
                                Ya(kc, B);
                            });
                    (!1 === fc || Db) && Xa(Db);
                    O !== vb.length || Y || Xa();
                }
            };
        for (let Za = 0; Za < B.length; Za++)
            (qa = Za),
                ya(function () {
                    Ya(Za, B);
                });
        O === B.length && ya(Xa);
    }
    function ya(a) {
        zl ||
            ((zl = !0),
            Lb(function () {
                zl = !1;
                const c = Fk;
                Fk = [];
                var g = cc();
                let k = 0;
                for (; k < c.length && 35 > cc() - g; ) c[k](), k++;
                for (g = k; g < c.length; g++) ya(c[g]);
            }, 0));
        Fk.push(a);
    }
    function La(a, c) {
        return ej("mcepsl") ? ib(c) : ib(c, Nb("mcepsl"));
    }
    function Pa(a, c, g = !1, k) {
        var p;
        return "tvn" === a || "svn" === a || "tvg" === a || "svg" === a
            ? c
            : c && c.length > k
            ? (g &&
                  (null === (p = lb.console) ||
                      void 0 === p ||
                      p.log(
                          `Truncating agent event because the size for property [${a}] exceeds size limit of ${k} characters: [${c.length}]`
                      )),
              J(c, k, "lcpSel" === a))
            : c;
    }
    function qb(a, c) {
        const g = Nb("mcepsl"),
            k = [];
        for (const Y of c) {
            c = Y[0];
            var p = Y[1];
            a: {
                var B = c;
                if (0 === lc) break a;
                const { name: qa, group: Xa, timestamp: Ya } = wa;
                p =
                    (qa && p === qa && "tvn" === B) ||
                    (Xa && p === Xa && ("tvg" === B || "svg" === B)) ||
                    (Ya && p === Ya + "" && "tvt" === B)
                        ? ""
                        : p;
            }
            B = Pa;
            var O = Wj[a];
            "function" === typeof O && (B = O);
            "object" === typeof O && O[c] && (B = O[c]);
            O = J(c, g);
            (c = B(c, p, !1, Nb("mcepsl"))) && O && k.push([O, c]);
        }
        return k;
    }
    function sb(a, c = 1) {
        const g = [c + "", a.id + "", "_event_", a.timestamp + "", a.kind + ""];
        a = qb(a.kind, a.$b);
        I(a, function ([k, p]) {
            g.push(wb(k));
            g.push(wb(p));
        });
        return g.join("|");
    }
    function zb(a, c, g) {
        let k = "";
        var p = "";
        for (const qa of a) {
            qa.ke();
            a = qa.yc();
            qa.Qc(g);
            k || (k = qa.gb());
            p = qa.gb();
            if ("_load_" === qa.type) {
                vc = !0;
                var B = Gi;
                if (B) {
                    p = [B.id, B.name, B.type, B.info, B.frameId, B.startTime];
                    if (B.isDelayed) {
                        var O = "";
                        B.anchor && (O = "#" + B.anchor);
                        p.unshift("d");
                        O = wb(B.Ca + O);
                        p.push(O, "");
                    } else p.unshift("s");
                    p.push(B.da || "");
                    if (B.pa) {
                        O = B.pa.timestamp;
                        var Y = B.pa.group;
                        p.push(B.pa.name);
                        p.push(O);
                        Y && p.push(Y);
                    }
                    O = p.join("|");
                    p = B.Ca;
                    c.push(O);
                    Gi = null;
                }
            }
            qa.parentFrameActionName &&
                ((B = c),
                (O = B.push),
                (Y = qa.we),
                (Y = [0, qa.ve, wb(qa.parentFrameActionName), Y].join("|")),
                O.call(B, Y));
            c.push(a);
        }
        return { kb: k, Ca: p };
    }
    function jc(a, c) {
        const g = Qa(ie, function (p) {
            return (p.Yd() || a || c) && !p.xg();
        });
        let k = cf;
        if (c) {
            k = [];
            cf = [];
            for (const p of g)
                K({
                    kind:
                        2 <= p.status
                            ? "ACTION_BEACON_FORCED"
                            : "ACTION_CLOSED",
                    detail: {
                        a: p.start,
                        s: p.stop,
                        r: p.Oa(),
                        i: p.id,
                        f: !0,
                        t: p.type,
                        x: p.xhrUrl,
                        rt: void 0,
                        xm: p.pb,
                        xe: p.Za,
                        cs: p.Ja,
                        ce: p.Ua,
                        ["in"]: p.info,
                    },
                });
            yd.Fa = [];
            Aa(fd && null !== fd ? fd.Tb() : null);
            fd = null;
        }
        return { og: g, Cf: k };
    }
    function Qc(a = !1, c = !1) {
        const g = [],
            { Cf: k, og: p } = jc(c, a),
            { kb: B, Ca: O } = zb(p, g, a);
        I(fj, function (Y) {
            g.push(sb(Y));
        });
        ie = [...k];
        fj = [];
        return { qc: g.join(","), referer: B, sourceUrl: O };
    }
    function jd(a, c, g, k) {
        const p = gj().slice();
        for (const B of p)
            try {
                B(a, c, g, k);
            } catch (O) {}
    }
    function kd() {
        return Xj;
    }
    function Dd(a) {
        a = wb(a);
        Al.includes(a) || Al.push(a);
    }
    function Fe(a) {
        return Al.includes(a);
    }
    function hg() {
        const a = {};
        try {
            let c = Xh;
            for (; c && c !== lb; ) {
                const g = c.dT_;
                Ja(g) && g.version !== va() && (a[g.version] = 1);
                c = c !== c.parent ? c.parent : void 0;
            }
        } catch (c) {}
        return a;
    }
    function Ag() {
        return !qh;
    }
    function mf(a, c, g, k) {
        c = hg();
        c = Qa(T(c), $e);
        Gk.push(...c);
        0 < c.length && (c.unshift(va()), a.av(k, "afv", c.join(",")));
    }
    function $e(a) {
        return !Gk.includes(a);
    }
    function Af() {
        if (Xh && Xh !== lb) {
            var a = Xh.dT_;
            Ja(a) &&
                a.version === va() &&
                Ha(X(), a) &&
                (($g = a), (a = $g.tdto()), Ja(a) && (qh = a));
        }
    }
    function Bg() {
        try {
            Af();
        } catch (c) {}
        Te(mf);
        const a = X();
        qh
            ? ((Xj = qh.pageId),
              (a.ue = qh.ue),
              (Yj = $g.gFId()),
              $g.frameCount++)
            : ((Xj = Ke()), (a.ue = document.title));
        a.pageId = Xj;
        ca("DEBUG_INFO_REQUESTED", function () {
            var c = hg();
            c = T(c);
            return 0 === c.length
                ? null
                : [
                      {
                          severity: "Error",
                          text: `Version of current agent ${va()} mismatches with version${
                              1 < c.length ? "s" : ""
                          } ${c.join(
                              ", "
                          )} of parent frames. Make sure to use the same version on all frames to secure compatibility!`,
                          type: "mpv",
                      },
                  ];
        });
    }
    function Pe(a) {
        return a && 1 === a.length ? Mc("featureHash").includes(a) : !1;
    }
    function Ca(a, c, g, k = Sf(a)) {
        const p = lb.dT_,
            B = !!X().syn;
        c = c || !B;
        a = B && !p.iMod().includes(a);
        return c && g && (k || a);
    }
    function Sf(a) {
        const c = lb.dT_;
        if (c.ism(a) && !c.iMod().includes(a)) return c.iMod(a), !0;
        c.ism(a) &&
            ((a = 'Module "' + a + '" already enabled!'),
            X().gCP || lb.console.log("WARNING: " + a));
        return !1;
    }
    function Qe(a) {
        let c = Xf.initializedModules || "";
        a && (c += a);
        return (Xf.initializedModules = c);
    }
    function Cg(a, c = va()) {
        var g = Mc("agentUri");
        g = g.substring(0, g.lastIndexOf("/"));
        let k = Yf();
        "true" === Jg("dtUseDebugAgent") &&
            lb.dT_debugger &&
            !k.includes("dbg") &&
            (k = Mc("debugName") || k + "dbg");
        return `${g}/${k}_${a}_${c}.js`;
    }
    function ig(a) {
        return Xf[a];
    }
    function Dg(a, c) {
        Xf[a] = c + "";
        K({ kind: "CONFIG_UPDATE", detail: Xf });
    }
    function Eg({ dg: a, hd: c, qf: g }) {
        return g || (a && "sendBeacon" in navigator && !xb("dsndb") && !c)
            ? Bl
            : Je.ff
            ? em
            : vm;
    }
    function Nf() {
        return Yh;
    }
    function t(a, c, g, k, p, B) {
        ah = !1;
        a = k || Yh.H(a, c, g);
        return a.beacon ? jb(!!g, a, p, B) : 0;
    }
    function u(a, c, g, k, p, B) {
        const O = Kg(md("dtAdkSettings")).overloadState;
        rh = O;
        if (1 === O) return 0;
        if (2 !== O) return t(a, c, g, k, p, B) || 0;
        if (g) return 0;
        Lb(function () {
            u(a, c, g, k, p, B);
        }, 5e3);
        return 0;
    }
    function A(a, c) {
        const g = document.cookie;
        var k = sh(g);
        const p = Mc("cuc");
        N(c, "sn", encodeURIComponent(k));
        N(c, "latency", "0");
        N(c, "flavor", xb("cors") ? "cors" : "post");
        if (void 0 === c.crc) {
            k = a.Wd ? a.cd : a.Me();
            k = "string" === typeof k ? new TextEncoder().encode(k) : k;
            for (var B = -1, O = 0; O < k.length; )
                B = (B >>> 8) ^ Lg[(B ^ k[O++]) & 255];
            k = (B ^ -1) >>> 0;
            -1 !== k && (c.crc = k);
        }
        N(c, "vi", encodeURIComponent(a.Sb("vi") || Vh()));
        N(c, "bp", 3);
        N(c, "v", Zh);
        N(c, "app", encodeURIComponent(Mc("app")));
        N(c, "type", "js3");
        N(c, "dtAdk", encodeURIComponent(md("dtAdk", g)));
        N(c, "contentType", "");
        N(c, "modifiedSince", Nb("lastModification"));
        N(c, "svrid", Wh());
        p && (c.en = p);
        c.contentType && "srRs" === c.contentType && N(c, "msl", Nb("msl"));
        c.end = 1;
    }
    function N(a, c, g) {
        void 0 === a[c] && (a[c] = g);
    }
    function ra(a) {
        const c = "type sn svrid flavor vi contentType modifiedSince".split(
            " "
        );
        xb("owasp") || c.push("rf");
        xb("cors") && c.push("dtAdk");
        c.push("bp");
        Mc("app") && c.push("app");
        a.contentType && c.push("v");
        "event" === a.contentType && c.push("st");
        -1 !== a.crc && c.push("crc");
        Mc("cuc") && c.push("en");
        "srRs" === a.contentType && c.push("msl");
        c.push("end");
        return c;
    }
    function Ua(a, c) {
        A(a, c);
        var g = ra(c);
        a = Mc("reportUrl");
        (g = oa(
            Qa(g, function (k) {
                return !!c[k];
            }),
            function (k) {
                return `${k}=${c[k]}`;
            }
        ).join("&")) && (a += "?" + g);
        return a;
    }
    function jb(a, c, g = !1, k = { contentType: "" }) {
        if (Lc() || !c.beacon) return 0;
        const p = c.beacon,
            B = c.referrer || r();
        Eb(k, B, p);
        c = Vb(p);
        if (!c.length) return 0;
        const O = Eg({ qf: xb("svNB"), dg: a, hd: g }),
            Y = Ua(p, k);
        I(
            oa(
                oa(c, function (qa, Xa, Ya) {
                    return {
                        path: Y,
                        kb: B,
                        beacon: p,
                        tc: qa,
                        uf: Xa,
                        vf: Ya.length,
                        hd: g,
                    };
                }),
                function (qa) {
                    return new O(qa);
                }
            ),
            Ib
        );
        return 2;
    }
    function Eb(a, c, g) {
        c = encodeURIComponent(c || "");
        N(a, "rf", Cb(c, Nb("mhl"))[0]);
        xb("owasp") && Yh.av(g, "rf", c);
        Yh.av(g, "time", cc());
    }
    function Ib(a) {
        return !!ka(Sb, a);
    }
    function Sb(a) {
        a.send().catch(function () {});
    }
    function Vb(a) {
        if (a.cd) return [a.cd];
        a = a.Me();
        var c = X().syn ? 145e3 : Nb("msl") - 40;
        var g = a.length;
        c = 0 === g % c ? Math.floor(g / c) : Math.floor(g / c) + 1;
        if (!(1 < c)) return [a];
        if (1 > c || 20 < c) return [];
        c = X().syn ? 145e3 : Nb("msl") - 40;
        g = "sid=" + cc() + "&p#index#_#total#=";
        return Cb(a, c, g);
    }
    function sc(a) {
        ah ? ("number" !== typeof a ? qc() : cc() + a < bh && qc(a)) : qc(a);
    }
    function qc(a) {
        Gf(Cl);
        "number" === typeof a
            ? ((bh = cc() + (a || 0)), (Cl = Lb(u, a)), (ah = !0))
            : u();
    }
    function Dc(a, c) {
        return u(a, c, !1);
    }
    function Bc(a) {
        gj().push(function (c, g, k, p) {
            a(p, g, k, p.Nb);
        });
    }
    function Uc() {
        const a = za(),
            c = [];
        for (let g = 0; g < a.length; g++)
            c.push({
                severity: "Error",
                type: "be",
                text: `Beacon sending failure instance ${g + 1} of ${
                    a.length
                }: ${a[g]}`,
            });
        100 === a.length &&
            c.push({
                severity: "Error",
                type: "be",
                text: "Beacon sending failures exceeded limit of 100 errors!",
            });
        return c;
    }
    function Oe() {
        Zh = parseInt(va());
        Yh = new mg();
        Hk = 0;
        th(function (a, c, g) {
            g &&
                (10 > Mg.length
                    ? Mg.push(g)
                    : (a = Mg[10])
                    ? (Mg[10] = +a + 1 + "")
                    : Mg.push("1"));
        });
        rh = Kg(md("dtAdkSettings")).overloadState;
        ca("DEBUG_INFO_REQUESTED", Uc);
    }
    function Vd() {
        let a = !1;
        const c = [],
            g = cf;
        for (const k of g)
            k.bc &&
                0 < k.bc &&
                (k.Ya && cc() > k.Ya && ((k.Ya += 6e4), c.push(k)), (a = !0));
        0 < c.length && u(!0, !0);
        for (const k of c) k.bc && k.bc--;
        a && Lb(Vd, 1e3);
    }
    function oc(a, c, g) {
        const k = fd;
        k !== a && (k && !g && Aa(k), (fd = a) ? ka(hj, a.id, c) : Sc());
    }
    function Wd(a) {
        var c;
        ch = null;
        const g =
            (null === (c = null === $g || void 0 === $g ? void 0 : $g.gca) ||
            void 0 === c
                ? void 0
                : c.call($g)) || [];
        if ((ch = g[g.length - 1]))
            (a.ve = ch.id),
                (a.parentFrameActionName = ch.name),
                ch.childFrameActions
                    ? ch.childFrameActions++
                    : (ch.childFrameActions = 1);
    }
    function Xd() {
        const a = Kg(md("dtAdkSettings")).overloadState;
        if (rh !== a && ((rh = a), 0 !== a)) for (const c of cf) c.Pc();
    }
    function ud() {
        var a = [];
        for (var c = yd.Fa.length - 1; 0 <= c; c--)
            if (yd.Fa[c].Yd()) {
                var g = na(yd.Fa, c);
                a = a.concat(g);
            }
        c = !1;
        Xd();
        g = cf;
        for (let p = g.length - 1; 0 <= p; p--) {
            const B = g[p];
            if (B.yg) {
                na(g, p);
                continue;
            }
            var k = a.includes(B);
            const O = ch;
            k
                ? (na(g, p), (c = !0))
                : O &&
                  ((k = $g.gca()),
                  (B.we = Xh && k[k.length - 1] === O ? "S" : "A"),
                  (ch = null));
        }
        c && sc();
    }
    function Rc() {
        "hidden" === document.visibilityState ? ((Hi = "1"), hf()) : (Hi = "0");
    }
    function hf() {
        K({ kind: "VISIBILITY_CHANGED", detail: Hi });
    }
    function Yc(a, c, g) {
        if (L(Array.prototype.reduce))
            return Array.prototype.reduce.call(a, c, g);
        var k = "undefined" !== typeof g;
        g = k ? g : a[0];
        if ("undefined" === typeof g)
            throw new TypeError("Reduce of empty array with no initial value");
        for (k = k ? 0 : 1; k < a.length; k++) g = c(g, a[k], k, a);
        return g;
    }
    function Ge(a, c, g, k) {
        const p = ae() + Math.round(g.startTime),
            B = p - a;
        p >= a &&
            p <= c &&
            0 <= B &&
            (null == k.ub || B < k.Vc) &&
            ((k.ub = g), (k.Vc = B));
    }
    function Vc(a, c, g, k) {
        return Yc(
            a,
            function (p, B) {
                if ("rtRequestId" in B) return p;
                const O = B.responseStatus;
                if (k && O && k !== O) return p;
                Ge(c, g, B, p);
                return p;
            },
            { ub: null, Vc: Number.MAX_VALUE }
        ).ub;
    }
    function Ve(a, c) {
        return Qa(a, function (g) {
            return g.initiatorType === c;
        });
    }
    function Fd(a, c) {
        return Qa(a, function (g) {
            g = g.responseStatus;
            return !g || g === c;
        });
    }
    function jf(a, c, g, k, p) {
        try {
            if (!(a && performance && performance.getEntriesByName))
                return null;
            let B = z(a);
            B.startsWith("/")
                ? (B = location.protocol + "//" + location.host + B)
                : B.startsWith("http") ||
                  (B =
                      location.href.substring(
                          0,
                          location.href.lastIndexOf("/") + 1
                      ) + B);
            let O = performance.getEntriesByName(B);
            c && (O = Ve(O, c));
            p && (O = Fd(O, p));
            if (O.length)
                return g ? Vc(O, g, k || Number.MAX_VALUE, p) : O[O.length - 1];
            O = performance.getEntriesByType("resource");
            c && (O = Ve(O, c));
            p && (O = Fd(O, p));
            B.includes("?") || (B += "?");
            const Y = { ub: null, Vc: Number.MAX_VALUE };
            for (let qa = O.length - 1; 0 <= qa; qa--) {
                const Xa = O[qa];
                if (0 === Xa.name.lastIndexOf(B, 0))
                    if (g) Ge(g, k || Number.MAX_VALUE, Xa, Y);
                    else return Xa;
            }
            return Y.ub;
        } catch (B) {
            return null;
        }
    }
    function Xe(a) {
        return (
            (wm && aa(a, 13) && "navigation" !== a.entryType) ||
            aa(a, ["_dtCl"])
        );
    }
    function We(a) {
        return (
            (xm && aa(a, 14)) ||
            (aa(a, ["entryType", "requestStart"]) &&
                "navigation" === a.entryType)
        );
    }
    function fg(a) {
        bd++;
        (a = Wa(a.detail.i)) && !a.pa && (a.pa = wa);
    }
    function Ci(a) {
        bd--;
        if ((a = Wa(a.detail.i))) a.Cg = Nc(a.stop) || wa;
        1 > bd && (lg = []);
    }
    function hc(a, c, g) {
        const k = c[ij[a]];
        c = c.startTime;
        if (k)
            if ("yK".includes(a)) g.push(a, k);
            else if ("T" === a)
                "number" === typeof k && 0 > k && 0 === k % 1 && g.push(a, k);
            else {
                var p = +k >= c;
                "j" === a && Ii(k, 2) && Math.abs(k - c) < Dl && (p = !1);
                var B = k;
                "uvwxACDEFNOPQRSTUX".includes(a)
                    ? (p = 0 <= +k)
                    : "number" === typeof k
                    ? (B = Math.round(k - c))
                    : (B = k);
                p && g.push(a, B);
            }
    }
    function kf(a, c, g) {
        if ((c = c[ye[a]])) {
            var k = 0 <= c;
            "j" === a && 0 === c && (k = !1);
            k && g.push(a, Math.round(c));
        }
    }
    function Ug(a, c, g) {
        (c = c[tf[a]]) && g.push(a, c);
    }
    function Of(a, c) {
        const g = a.serverTiming;
        a = {};
        for (var k of ym) a[k] = "";
        if (g) {
            for (const p of g)
                p.description &&
                    !isNaN(+p.description) &&
                    ((k = p.name), k in a && !a[k] && (a[k] = p.description));
            a.dtRequestID && (c.push("C"), c.push(a.dtRequestID));
            a.dtRpid && (c.push("M"), c.push(a.dtRpid));
            a.dtSInfo && (c.push("V"), c.push(a.dtSInfo));
            a.dtTao && (c.push("W"), c.push(a.dtTao));
        }
    }
    function qe(a, c, g, k) {
        a = T(a);
        for (const p of a) g(p, c, k);
    }
    function zf() {
        if (!window.performance) return [];
        let a = null;
        var c = -1;
        const g = ae();
        "getEntriesByType" in performance &&
            (a = performance.getEntriesByType("navigation")[0]) &&
            a.type &&
            (c = zm[a.type]);
        (a && "responseEnd" in a) || (a = performance.timing);
        -1 === c && (c = performance.navigation.type);
        return (!X().googleBot || X().syn) && 0 < g
            ? ((c = ["a", c, "b", Math.round(g)]), lf(a, c, g), c)
            : [];
    }
    function lf(a, c, g) {
        if (
            (Ji && aa(a, 12)) ||
            (aa(a, ["navigationStart"]) && !("entryType" in a))
        )
            for (var k in Ng) {
                if (Ka(Ng, k)) {
                    var p = k,
                        B = a[Ng[p]];
                    if (B) {
                        var O = B >= g;
                        "j" === k && B === g && (O = !1);
                        O && c.push(p, Math.round(B - g));
                    }
                }
            }
        else
            (g = X()),
                (k = g.gFU ? g.gFU() : {}),
                Xe(a)
                    ? (qe(ij, a, hc, c),
                      (g = c.push),
                      (B = []),
                      Xe(a)
                          ? ("xmlhttprequest" === a.initiatorType ||
                            "fetch" === a.initiatorType
                                ? ((O = "1"),
                                  $h[a.name] && ((O = "11"), delete $h[a.name]),
                                  B.push("z", O))
                                : $h[a.name] &&
                                  (B.push("z", "01"), delete $h[a.name]),
                            (O = ""),
                            "frame" === a.initiatorType
                                ? (O = "f")
                                : "iframe" === a.initiatorType ||
                                  "subdocument" === a.initiatorType
                                ? (O = isNaN(k[a.name]) ? "i" : "i" + k[a.name])
                                : 0 <= (a.frameId || -1) &&
                                  (O = "r" + a.frameId),
                            O && B.push("B", O))
                          : $h[a.name] &&
                            (B.push("z", "01"), delete $h[a.name]),
                      g.call(c, ...B),
                      c.push(
                          "I",
                          null !== (p = Am[a.initiatorType]) && void 0 !== p
                              ? p
                              : 0
                      ),
                      Of(a, c))
                    : We(a)
                    ? (qe(ye, a, kf, c), Of(a, c))
                    : qe(tf, a, Ug, c);
    }
    function Qf() {
        xb("ntd") ||
            Te(function (a, c, g, k) {
                c ||
                    fm ||
                    !a.hla(k) ||
                    ((fm = !0),
                    (c = El || zf()),
                    a.av(k, "nt", c.join("") || "0", !0),
                    (El = void 0));
            });
    }
    function Pf(a) {
        var c;
        if (!a) return null;
        let g =
            null === (c = a.getEntriesByType) || void 0 === c
                ? void 0
                : c.call(a, "navigation")[0];
        We(g) || (g = a.timing);
        return g;
    }
    function vd(a, c = !1) {
        if (!a) return null;
        let g;
        const k = ce(a);
        for (const p of gm)
            if (((g = re(a, p, c) || -1), 0 < g && g !== k))
                return Math.round(g);
        return null;
    }
    function re(a, c, g = !1) {
        const k = Pf(a);
        if (!k) return null;
        c = k[c];
        if ("number" !== typeof c || 0 === c) return null;
        a = ce(a);
        We(k) ? g && (c += a) : g || (c -= a);
        return Math.round(c);
    }
    function ce(a) {
        var c;
        return Math.round(
            a.timeOrigin ||
                (null === (c = a.timing) || void 0 === c
                    ? void 0
                    : c.navigationStart) ||
                -1
        );
    }
    function Id() {
        K({ kind: "INSTRUMENTATION_TRIGGERED", detail: void 0 });
    }
    function Ad(a) {
        var c = cf;
        Wd(a);
        c.push(a);
        c = fd;
        c !== a && (Aa(c), (fd = a));
        ie.push(a);
        Lb(Vd, 5e3);
    }
    function Ye({
        type: a,
        name: c,
        start: g,
        stop: k,
        domNodes: p,
        info: B,
        xhrUrl: O,
        od: Y,
        Ca: qa = "",
        wb: Xa = !1,
        isCustomAction: Ya = !1,
        ib: Za = !1,
        Le: vb = -1,
        da: fc = "",
        pa: Db,
        Nc: kc,
        id: od,
    }) {
        a = new Bm(
            g,
            k || g,
            a,
            c,
            B || "",
            p || -1,
            Ce(qa),
            document.title,
            O || "",
            Ya,
            Za,
            Xa,
            Y,
            vb,
            fc,
            hm,
            Db,
            kc,
            od
        );
        Xd();
        a.Kc() && yd.Fa.push(a);
        yd.actions[a.id] = a;
        ka(ai);
        return a;
    }
    function Ce(a) {
        if (a) {
            const c = document.createElement("a");
            c.href = a;
            if ("file:" === c.protocol || "about:" === c.protocol || c.hostname)
                return c.href;
            const g = (k, p, B, O) => {
                k.av(O, "rfi", 1, !1);
                bi(g);
            };
            Te(g);
        }
        return location.href;
    }
    function ee(a) {
        var c;
        a.start || (a.start = cc());
        const g = Ye(a);
        g.sa = Lb(function () {
            if (g && (3 !== g.status || g.Mc())) {
                var p = g.start + 1e3 * Nb("oat");
                se(g.id, p, void 0, !0);
            }
        }, 1e3 * Nb("oat"));
        let k = null;
        switch (Jb(a.Ba)) {
            case 1:
                k = fd;
                break;
            case 2:
                if (((k = Wa(a.Ba)), !k && "_load_" === a.type)) return g;
        }
        K({
            kind: "ACTION_ENTERED",
            detail: {
                i: g.id,
                a: a.start,
                s: 0,
                x: a.xhrUrl,
                r: k ? k.Oa() : g.id,
                t: g.type,
                e: null === (c = Cd()) || void 0 === c ? void 0 : c.target,
                rt: void 0,
                xm: g.pb,
                xe: g.Za,
                cs: g.Ja,
                ce: g.Ua,
                ["in"]: g.info,
            },
        });
        "undefined" === typeof a.Le && oc(g, !1, !!k);
        if (k) {
            k = k.Tb();
            k.zd(g);
            a = cf;
            for (const p of a)
                p.Ya && p.Ya > g.start + 1e4 && (p.Ya = g.start + 1e4);
        } else Ad(g.Nf()), df();
        return g;
    }
    function se(a, c, g, k = !1) {
        a = Wa(a);
        var p = X();
        !c &&
            a &&
            "_load_" === a.name &&
            "_load_" === a.type &&
            p.gLVD &&
            ((k = re(lb.performance, "loadEventEnd"))
                ? ((c = p.gVCP()), (c = Math.max(c, k) + ae()))
                : (c = cc()),
            (k = !0));
        p =
            "number" === typeof c &&
            (null === a || void 0 === a ? void 0 : a.isCustomAction);
        c = c || cc();
        a &&
            (K({
                kind: "ACTION_LEFT",
                detail: { i: a.id, a: a.start, s: c, r: a.Oa() },
            }),
            a.xc(c, g, p, k),
            ud());
        oc(Ba(), !0);
    }
    function te(a, c, g) {
        let k = fd;
        "undefined" !== typeof c && null !== c && (k = Wa(c));
        if (k) return k.zd(a, g), !1;
        Wd(a);
        ie.push(a);
        return !0;
    }
    function vg(a, c, g, k, p, B, O, Y) {
        "undefined" === typeof k ? (k = !0) : null === k && (k = !1);
        a = {
            name: ia(a),
            type: c,
            start: g,
            Ba: k,
            info: p || "",
            xhrUrl: B || "",
            isCustomAction: !!O,
        };
        Y && (a.Ca = Y);
        return ee(a).id;
    }
    function yg(a, c, g) {
        Id();
        se(a, c, g);
    }
    function wg(a, c, g, k) {
        a = Ye({
            type: a,
            name: J(c + "=" + g, Nb("mpl")),
            start: cc(),
            wb: !0,
        });
        te(a, k);
        sc();
    }
    function xg(a) {
        const c = yd.Fa.slice();
        for (const g of c) se(g.id, a);
        return c.length;
    }
    function fe(a) {
        for (const c of ng) if (c.D === a) return !0;
        return !1;
    }
    function Ze(a) {
        if (Ec(a)) return !0;
        const c = ef();
        return !!(
            (null === c || void 0 === c ? 0 : c.exec) &&
            a &&
            (c.exec(a) || c.exec(z(a)))
        );
    }
    function le(a, c = 3, g = "", k = !1, p, B = !1, O = !1) {
        if (g && Ze(g)) return 0;
        const Y = G(g);
        var qa = Cd();
        const Xa = a || "-";
        var Ya = F(!1);
        if (Zf) {
            if (Ya && !Wa(Ya)) return 0;
            $f = !0;
        }
        qa && (qa.info = "-" === qa.info ? Xa : qa.info + ", " + Xa);
        !Ya && (null === qa || void 0 === qa ? 0 : qa.D) && (Ya = qa.D);
        g = z(g);
        $h[g] = !0;
        a = {
            name: a,
            type: "xhr",
            start: cc(),
            info: Xa,
            xhrUrl: Y,
            isCustomAction: k,
            od: p,
            Nc: O,
        };
        Ya
            ? ((c = 0), B || ((a.Ba = Ya), (c = Ee(a))))
            : qa
            ? ((B = 0),
              3 <= c &&
                  ((B = gg(
                      Object.assign(Object.assign({}, a), {
                          name: qa.Rb(),
                          type: qa.type,
                          start: qa.start,
                          info: qa.info,
                          Ca: qa.url,
                          Ba: !1,
                          da: qa.da || "",
                          pa: qa.view,
                      })
                  )),
                  (qa.D = B),
                  qa.hc && w(!0, Wa(B))),
              (c = B))
            : (qa = fd)
            ? ((Ya = 0),
              1 <= c &&
                  !B &&
                  (Ya = Ee(Object.assign(Object.assign({}, a), { Ba: qa.id }))),
              (c = Ya))
            : (c = xb("cux")
                  ? gg(
                        Object.assign(Object.assign({}, a), {
                            name: "Unlinked XHR",
                            type: "xhr",
                            Ba: !1,
                        })
                    )
                  : 0);
        return c;
    }
    function gg(a) {
        a: {
            var c = a.info;
            const g = a.xhrUrl;
            if (a.od && ng.length)
                for (let k = ng.length - 1; 0 <= k; k--) {
                    const p = ng[k],
                        B = p.D,
                        O = Cc(B);
                    if (
                        O &&
                        c &&
                        !c.startsWith(p.Ff) &&
                        yb(O.xhrUrl || "") === p.xhrUrl &&
                        p.xhrUrl === yb(g || "")
                    ) {
                        c = B;
                        break a;
                    }
                }
            c = 0;
        }
        if (c) return c;
        a.ib = !0;
        return ee(a).id;
    }
    function Ee(a) {
        const c = a.Ba;
        let g = null;
        "number" === typeof c && (g = Cc(c));
        a.Ba = g ? g.id : !0;
        return gg(a);
    }
    function Sd(a, c = cc(), g, k = Z) {
        const p = Cc(a);
        if (!p) return -1;
        p.ae();
        return Lb(function () {
            Rf(a, c, g);
            k();
        }, 0);
    }
    function Rf(a, c = cc(), g) {
        const k = Cc(a);
        !k ||
            (g && !k.info.includes(g) && k.name !== g) ||
            (k.ae(),
            Lb(function () {
                $f || (Cc(a) && se(a, c));
            }, jj),
            Id());
    }
    function oe(a, c) {
        if (a) {
            var g = Cc(a);
            g &&
                (g.Yc++,
                g.Ja || (c && 4 !== c) || g.wg(cc()),
                Vf.push(a),
                Yg++);
        }
    }
    function pe(a) {
        if (a) {
            var c = Cc(a);
            c &&
                (c.vg(cc()),
                c.Yc--,
                Yg--,
                Lb(function () {
                    fa(a);
                }, 0));
        }
    }
    function Yd(a, c, g) {
        if ("number" !== typeof a || isNaN(a) || 0 > a) return !1;
        0 === a && ((a = 971), (c = "XHR Canceled"));
        c && (c += "");
        g = Wa(g) || fd;
        if (!g || -1 !== g.Za || !g.ib) return !1;
        g.Za = a;
        c && 0 < c.length && (g.pb = c);
        return !0;
    }
    function De() {
        return !xb("disableXhrFailures");
    }
    function Kc(a) {
        return (a = Wa(a)) && a.ib ? [a.Ja, a.Ua] : [0, 0];
    }
    function zg(a, c) {
        var g = Cc(a);
        if (g) {
            const k = g.xhrUrl;
            g.Ge(c);
            g = ng;
            for (const p of g)
                p.D === a && p.xhrUrl === yb(k) && (p.xhrUrl = yb(c));
        }
    }
    function mh(a) {
        return (a = Cc(a)) ? a.xhrUrl : "";
    }
    function lh(a, c) {
        (a = Cc(a)) && a.rg(c);
    }
    function ue(a, c, g, k = "headers", p) {
        a = a || {};
        c = c || a.url;
        a[k] = a[k] || {};
        var B = g || a.actionId;
        if (
            !a[k] ||
            !uh() ||
            Ec(c) ||
            (kj && c && (kj.test(c) || kj.test(z(c))))
        )
            return a;
        var O = !(!ci || !c || (!ci.test(c) && !ci.test(z(c))));
        let Y = "";
        g = Gd(B);
        if (O) {
            Y = H(B);
            O = a;
            var qa = Y,
                Xa = [];
            const Ya = sh(),
                Za = Wh(Ya).replace("-", "-2D");
            Xa.push(`sn="v_4_srv_${Za}_sn_${lj(Ya)}"`);
            qa && Xa.push(`pc="${qa}"`);
            Xa.push(`v="${di()}"`);
            Xa.push(`app="${Mc("app")}"`);
            (qa = md("dtAdk")) && Xa.push(`adk="${qa}"`);
            Xa = Xa.join(", ");
            qa = Nb("mhl") - Xa.length - 6;
            Xa += `, r="${J(ea(g), Math.max(qa, 0))}"`;
            ta(O, "x-dtc", Xa, k);
        }
        if (v(c)) return a;
        p && ta(a, "traceparent", `00-${p.traceId}-${p.spanId}-00`, k);
        p = xb("dpch");
        B &&
            (!p &&
                ((O = a), (B = Y || H(B))) &&
                (Da(O, "x-dtpc", B, k),
                Mb() &&
                    (Da(O, "x-dtreferer", ea(r()), k),
                    Da(O, "x-host", Pb(c), k))),
            g && g !== r() && Da(a, "x-dtreferer", ea(g), k));
        Ze(c) && !p && Da(a, "x-dtpc", "ignore", k);
        return a;
    }
    function f(a) {
        a = ei(a);
        if (!a) return null;
        try {
            return new RegExp(a, "i");
        } catch (c) {}
        return null;
    }
    function q() {
        ci = f(Mc("chw"));
        kj = f(Mc("xhb"));
        ca("CONFIG_UPDATE", function () {
            ci = f(Mc("chw"));
            kj = f(Mc("xhb"));
        });
    }
    function C() {
        const a = fd;
        return a ? a.name : "";
    }
    function Q(a) {
        const c = yd.Fa;
        for (const g of c) g.Oe = a.detail;
    }
    function W(a) {
        var c;
        return null === (c = Wa(a)) || void 0 === c ? void 0 : c.nf();
    }
    function Oa() {
        var a = document;
        const c = a.documentElement;
        var g = 0,
            k = 0;
        const p = a.body;
        "number" === typeof self.innerWidth
            ? ((g = self.innerWidth), (k = self.innerHeight))
            : a && (c.clientWidth || c.clientHeight)
            ? ((g = c.clientWidth), (k = c.clientHeight))
            : p &&
              (p.clientWidth || p.clientHeight) &&
              ((g = p.clientWidth), (k = p.clientHeight));
        if (0 > g || 0 > k)
            (a = { width: 0, height: 10 }),
                Je.ie ? (a.width = 140) : (a.width = 10),
                (g = Math.max(g, a.width)),
                (k = Math.max(k, a.height));
        X().bwsW = g;
        X().bwsH = k;
    }
    function cb() {
        const a = X();
        ca("LOAD_END", Oa);
        Te(function (c, g, k, p) {
            if (!g) {
                g = function (qa) {
                    return 0 > qa || 2147483647 <= qa || isNaN(qa) ? 0 : qa;
                };
                k = a.bwsW;
                var B = a.bwsH,
                    O = bf();
                Ja(O) && ((k = O.bwsW), (B = O.bwsH));
                0 >= k && (Oa(), (k = a.bwsW), (B = a.bwsH));
                k = g(k);
                O = g(B);
                var Y = (B = 0);
                c.av(p, "w", k);
                c.av(p, "h", O);
                if ((k = lb.screen))
                    (B = g(k.width)),
                        (Y = g(k.height)),
                        c.av(p, "sw", B),
                        c.av(p, "sh", Y);
            }
        });
    }
    function Zb() {
        var a = 0;
        let c = 0,
            g = 0,
            k = "Info";
        const p = [];
        xb("coo") && xb("cooO")
            ? (a++,
              p.push({
                  severity: "Info",
                  text: "Opt-in mode is active, but dtrum.enable() has been called.",
                  type: "cooeaoa",
              }))
            : xb("coo") &&
              ((k = "Warning"),
              c++,
              p.push({
                  severity: "Warning",
                  text: "Opt-in mode is active. Call dtrum.enable() to start collecting data.",
                  type: "cooe",
              }));
        if (Lc()) {
            c++;
            k = "Warning";
            var B = X().disabledReason,
                O = `Agent for application '${Mc(
                    "app"
                )}' is currently disabled because of `;
            p.push({
                severity: "Warning",
                text: `${O}${
                    B ||
                    "a missing RUM License or RUM was disabled for this application"
                }.`,
                type: "jsad",
            });
        }
        xb("dsss") &&
            (c++,
            (k = "Warning"),
            p.push({
                severity: "Warning",
                text: "DISABLE_SUBDOMAIN_SOURCEACTION_SUPPORT is set.",
                type: "sssd",
            }));
        a: {
            B = Mc("featureHash");
            O = "7degijmovx".split("");
            for (Y of O)
                if (B.includes(Y)) {
                    var Y = !1;
                    break a;
                }
            Y = !0;
        }
        Y &&
            (c++,
            (k = "Warning"),
            p.push({
                severity: "Warning",
                text: "No module(that could detect a XHR) is active!",
                type: "nxma",
            }));
        Kb() &&
            (c++,
            (k = "Warning"),
            p.push({
                severity: "Warning",
                text: "Should not track is set on this browser and respected by the RUM monitoring code!",
                type: "snt",
            }));
        if ((Y = Mc("doNotDetect")))
            (Y = Mc("featureHash")), (Y = !Y.includes("a") && !Y.includes("l"));
        Y &&
            (c++,
            (k = "Warning"),
            p.push({
                severity: "Warning",
                text: "Do not detect values are configured & neither module 'a' nor 'l' are active. This can result in missing user actions!",
                type: "dnt",
            }));
        xb("ssc") &&
            "https:" !== location.protocol &&
            (g++,
            (k = "Error"),
            p.push({
                severity: "Error",
                text: "Secure cookies are enabled, but can't be set as the page isn't using https.",
                type: "scbip",
            }));
        return 0 < p.length
            ? ((a = [$b(g, "Error"), $b(c, "Warning"), $b(a, "Info")]),
              [
                  {
                      severity: k,
                      text: `${a.join("")}regarding agent configuration.`,
                      type: "ci",
                      children: p,
                  },
              ])
            : null;
    }
    function $b(a, c) {
        return a ? `${a} ${c}${1 < a ? "s" : ""} ` : "";
    }
    function $c() {
        ca("DEBUG_INFO_REQUESTED", Zb);
        Te(function (a, c, g, k) {
            xb("ssc") && "https:" !== location.protocol && a.av(k, "sconsp", 1);
        });
    }
    function rd() {
        return Mc("rpid") ? "automatically" : "manually";
    }
    function of() {
        Zj = void 0;
        Ia(document.currentScript) && (fi = document.currentScript);
        ca("DEBUG_INFO_REQUESTED", function () {
            Zj ||
                (Zj = fi
                    ? fi.src
                        ? fi.dataset.dtconfig
                            ? `OneAgent JavaScripTag ${rd()} injected`
                            : fi.src.includes("_complete")
                            ? `JavaScriptTag ${rd()} injected`
                            : fi.getAttribute("defer")
                            ? `CodeSnippetDeferred ${rd()} injected`
                            : `CodeSnippetSync ${rd()} injected`
                        : fi.dataset.dtconfig
                        ? `InlineCode ${rd()} injected`
                        : "Couldn't detect injection mode."
                    : "Couldn't detect injection mode.");
            return [{ severity: "Info", text: Zj, type: "im" }];
        });
    }
    function Re(a) {
        switch (a) {
            case 1:
                if ((a = document.currentScript) && Ia(a)) {
                    a: {
                        var c, g;
                        if (
                            document.documentElement &&
                            ((a = document.documentElement.outerHTML.split(
                                a.outerHTML
                            )),
                            2 === a.length)
                        ) {
                            a =
                                (null ===
                                    (g =
                                        null === (c = a[0]) || void 0 === c
                                            ? void 0
                                            : c.split("\n")) || void 0 === g
                                    ? void 0
                                    : g.length) + 1;
                            break a;
                        }
                        a = void 0;
                    }
                    return `Agent is double injected! Is it manually and automatic injected? Current used agent is near: ${document.location}:${a}`;
                }
                return "Agent is double injected! Is it manually and automatic injected?";
            case 2:
                return "Problem detected while agent initialization! Snippet couldn't initialize so can't initialize monitoring code";
            case 3:
                return "Problem detected while agent initialization! Snippet couldn't initialize as initConfig didn't initialize.";
            default:
                return "";
        }
    }
    function jg() {
        ca("DEBUG_INFO_REQUESTED", function () {
            return 0 !== X().di
                ? [{ severity: "Error", text: Re(X().di), type: "di" }]
                : null;
        });
        Te(function (a, c, g, k) {
            0 === X().di || c || a.av(k, "di", X().di);
        });
    }
    function Zd() {
        const a = [];
        I(
            [
                {
                    object: window,
                    Zc: "window",
                    Cc: [
                        "postMessage",
                        "Map",
                        "Array",
                        "WeakMap",
                        "MutationObserver",
                    ],
                },
                {
                    object: Array.prototype,
                    Zc: "Array.prototype",
                    Cc: "forEach map filter every some find includes join reverse slice sort splice concat pop push shift unshift".split(
                        " "
                    ),
                },
                { object: Map.prototype, Zc: "Map.prototype", Cc: ["forEach"] },
            ],
            function ({ object: c, Zc: g, Cc: k }) {
                c &&
                    I(k, function (p) {
                        L(c[p]) || a.push(`${g}.${p}`);
                    });
            }
        );
        return a.length
            ? [
                  {
                      severity: "Warning",
                      text: `The following native functions are modified: ${a.join(
                          ", "
                      )}`,
                      type: "mnf",
                  },
              ]
            : null;
    }
    function Tf() {
        return K({ kind: "DEBUG_INFO_REQUESTED", detail: void 0 }).flat();
    }
    function Sh() {
        Te(function () {
            if (!Xf.disableCookieManager) {
                var a = sh();
                if (!a || !a.includes("_srv_-"))
                    try {
                        if (lb.sessionStorage) {
                            var c = a,
                                g = Ue(og()) || "";
                            Og(g) || (g = "");
                            if (g && "null" !== g && c !== g) {
                                const p = Kg(g).sessionId || "";
                                if ("undefined" !== typeof c && "" !== c) {
                                    if ((g = c) && p) {
                                        let B = g;
                                        const O = B.indexOf("_sn_");
                                        if (-1 !== O) {
                                            const Y = B.indexOf("_", O + 4),
                                                qa =
                                                    -1 !== Y
                                                        ? B.substring(O, Y)
                                                        : B.substring(O);
                                            qa &&
                                                (B = B.replace(qa, "_sn_" + p));
                                        }
                                        g = B;
                                    }
                                    var k = g;
                                } else k = g;
                                c = k;
                            }
                            if ((a = c)) Hf(a), dh(og(), a);
                        }
                    } catch (p) {}
            }
        });
    }
    function Fg(a) {
        ca("ACTION_ENTERED", function k(g) {
            a.dtWF = k;
            const { i: p, a: B, r: O, e: Y } = g.detail;
            a(p, B, O === p, Y);
        });
    }
    function kg(a) {
        ca("ACTION_LEFT", function k(g) {
            a.dtWF = k;
            const { i: p, s: B, r: O } = g.detail;
            a(p, B, O === p);
        });
    }
    function sd(a, c) {
        fj.push(a);
        0 === c ? sc() : sc(2e3);
    }
    function Ld(a, c, g = !1, k = cc(), p = 0) {
        var B = c;
        if (1 === p && "_csprv_" === a) {
            if (0 !== lc) {
                B = wa;
                var O = B.timestamp,
                    Y = B.group,
                    qa = B.trigger;
                c.push(["tvn", B.name]);
                c.push(["tvt", O + ""]);
                c.push(["tvtrg", qa + ""]);
                c.push(["tvm", Ea(B)]);
                Y && c.push(["tvg", Y]);
            }
            B = c;
        }
        a = { id: $d(), timestamp: k, kind: a, $b: B };
        switch (Jb(g)) {
            case 1:
                (g = fd) ? g.yd(a) : sd(a, p);
                break;
            case 2:
                (g = Wa(g)) ? g.yd(a) : sd(a, p);
                break;
            case 0:
                sd(a, p);
        }
    }
    function nd(a, c) {
        return a ? { oldView: a, newView: c } : { newView: c };
    }
    function ge(a, c = Nb("vncm")) {
        const { pathname: g, hash: k } = new URL(a);
        0 === c
            ? (a = g + k)
            : 2 === c
            ? ((a = k || "/"),
              a.startsWith("#") && (a = a.replace("#", "")),
              a.startsWith("/") || (a = "/" + a))
            : (a = g);
        return a;
    }
    function ld(a, c) {
        a.name = c.name;
        c.group && (a.group = c.group);
        a.hydrated = !0;
    }
    function Ed(a) {
        const c = [],
            g = a.name,
            k = a.timestamp,
            p = a.group,
            B = a.trigger;
        g &&
            k &&
            (c.push(["svn", g]),
            c.push(["svt", k + ""]),
            c.push(["svtrg", B + ""]),
            c.push(["svm", Ea(a)]));
        p && c.push(["svg", p]);
        return c;
    }
    function pf(a) {
        const c = [];
        var g = a.oldView;
        const k = a.newView;
        g && c.push(...Ed(g));
        g = k.group;
        const p = k.trigger;
        c.push(["tvn", k.name]);
        c.push(["tvtrg", p + ""]);
        c.push(["tvm", Ea(k)]);
        g && c.push(["tvg", g]);
        c.length && Ld("_view_", c, !1, a.newView.timestamp || void 0, 1);
    }
    function Gc(a) {
        vc ? pf(a.detail) : Wc(a.detail);
    }
    function He(a) {
        a.detail.i === xe &&
            ((a = Tb), a.length && (I(a, pf), (Tb = [])), V("ACTION_SENT", He));
    }
    function dd() {
        ub = wa = Object.assign(Object.assign({}, wa), {
            id: ++Ga,
            timestamp: cc(),
            kind: 2,
            hydrated: !1,
        });
        pf({ newView: wa });
    }
    function Bf() {
        sf(lb, "pageshow", function (a) {
            "persisted" in a &&
                a.persisted &&
                K({ kind: "BF_CACHE_RESTORED", detail: void 0 });
        });
    }
    function af(a, c = Nb("dvl")) {
        let g;
        return function (...k) {
            void 0 !== g && Gf(g);
            g = Lb(() => {
                a.apply(this, k);
            }, c);
        };
    }
    function ad() {
        if (1 === lc) {
            var a = wa,
                c = ge(r());
            a = a.name;
            (a + "/" === c ? 0 : a !== c) && he({ name: c });
        }
    }
    function nf() {
        const a = wa,
            c = ub;
        a.id !== c.id &&
            (K({ kind: "VIEW_STABLE", detail: nd(c, a) }), (ub = a));
    }
    function he(a) {
        const c = wa;
        var g = Object,
            k = g.assign,
            p = Object,
            B = p.assign;
        const O = Nb("rtu"),
            Y = Object.assign({}, a);
        Y.name = J(a.name, O, !0);
        a.group && (Y.group = J(a.group, O, !0));
        wa = a = k.call(g, B.call(p, {}, Y), {
            timestamp: cc(),
            id: ++Ga,
            kind: 1,
            trigger: lc,
            hydrated: !1,
        });
        0 < bd && lg.push(a);
        K({ kind: "VIEW_CHANGE", detail: nd(c, wa) });
        Fl();
    }
    function Ie(a) {
        var c, g, k;
        const p =
            null === (c = null === a || void 0 === a ? void 0 : a.detail) ||
            void 0 === c
                ? void 0
                : c.oldView;
        p &&
            ((a =
                null ===
                    (k =
                        null ===
                            (g =
                                null === a || void 0 === a
                                    ? void 0
                                    : a.detail) || void 0 === g
                            ? void 0
                            : g.newView) || void 0 === k
                    ? void 0
                    : k.timestamp),
            Rh(p, 0, a));
    }
    function Rh(a, c, g) {
        c = K({ kind: "VIEW_END", detail: { view: a, Dg: 1 === c } }).flat();
        0 !== c.length &&
            ((a = [...c, ...Ed(a)]), Ld("_viewend_", a, !1, g, 1));
    }
    function nh(a) {
        const c = History.prototype[a];
        c &&
            (History.prototype[a] = Ik(function (...g) {
                const k = im.dtAWF(c, this, g);
                K({ kind: "HISTORY_API_EVENT", detail: { t: a, p: g } });
                return k;
            }, c));
    }
    function bj(a, c, g, k) {
        if (!c) {
            c = wa;
            g = c.timestamp;
            var p = c.group,
                B = c.trigger;
            a.av(k, "tvn", encodeURIComponent(wb(c.name)));
            a.av(k, "tvt", g + "");
            a.av(k, "tvm", encodeURIComponent(Ea(c)));
            a.av(k, "tvtrg", B + "");
            p && a.av(k, "tvg", encodeURIComponent(wb(p)));
        }
    }
    function Sj() {
        mj || (mj = document.createElement("doc:rdy"));
        if (mj.doScroll) {
            const a = function () {
                try {
                    mj.doScroll("left"), (mj = void 0), (vh = cc()), Id();
                } catch (c) {
                    Lb(a, 0);
                }
            };
            a();
        } else
            document.addEventListener(
                "DOMContentLoaded",
                function () {
                    vh = cc();
                    Id();
                },
                !1
            );
    }
    function Gl() {
        return nj;
    }
    function oj() {
        let a = If;
        var c = Pf(lb.performance);
        if (!c) return Math.round(a);
        var g = We(c)
            ? 6e4 >= c.domContentLoadedEventStart
            : 6e4 >= Math.abs(c.domLoading - a);
        if (!X().syn && !g) return a;
        g = ae();
        const k = c.redirectStart,
            p = c.fetchStart;
        c = (We(c) ? 0 : g) + 6e4;
        c = k ? (c > k ? g : k) : p ? (c > p ? g : p) : g;
        isFinite(c) && (a = c);
        return Math.round(a);
    }
    function Ki() {
        const a = re(lb.performance, "loadEventEnd", !0),
            c = cc();
        return Math.round(a || c);
    }
    function gi(a, c) {
        wh--;
        if (xh && c) {
            var g = (xh.get(c) || 1) - 1;
            g ? xh.set(c, g) : xh.delete(c);
        }
        if (!wh && yh)
            try {
                K({ kind: "LOAD_END", detail: void 0 });
            } catch (k) {}
        if (0 >= wh) {
            if (yh) {
                c = yh.id;
                El = zf();
                a = a ? Math.max(Ki(), a) : Ki();
                g = re(lb.performance, "loadEventStart", !0) || ae();
                g = g < Md ? 0 : Math.round(g);
                if (a && g && a >= g) {
                    const k = cc() - a;
                    5e3 < Math.abs(k) && (a += k);
                    se(c, a, g);
                } else se(c);
                yh = null;
            }
            eh || ak();
        }
        c = bf();
        c !== X() && Ja(c) && c.sole();
    }
    function pj(a) {
        wh++;
        if (xh && a) {
            const c = xh.get(a) || 0;
            xh.set(a, c + 1);
        }
    }
    function ak(a, c) {
        const g = Wa(xe);
        if (g) {
            var k = 0;
            lb.performance && !a && (k = c || Ki());
            k || (k = cc());
            se(g.id, k);
            nj = g.stop;
            Id();
        }
    }
    function Jk() {
        ak(1);
    }
    function bk() {
        eh = !0;
    }
    function qj() {
        const a = Wa(xe);
        a &&
            !yh &&
            (yh = ee({
                name: "_onload_",
                type: "_load_",
                start: cc(),
                Ba: a.id,
            }));
    }
    function ck() {
        if (!hi || 0 < wh) (hi = !0), Id(), gi();
    }
    function dk() {
        Id();
        if (!Li) {
            var a = bf(),
                c = Ja(a) && a !== X();
            c && a.iolm(lb);
            qj();
            Li = !0;
            ca("PAGE_LEAVING", function k() {
                yh && c && a.sole(void 0, lb);
                V("PAGE_LEAVING", k);
            });
            Lb(ck, 0);
        }
    }
    function ii() {
        "loaded" === document.readyState && Id();
        "complete" === document.readyState && dk();
    }
    function ek() {
        Id();
        Li ||
            ("complete" === document.readyState
                ? Kk
                    ? u(!1, !0)
                    : ((Kk = !0), Lb(ek, 3e3))
                : Lb(ek, 3e3));
    }
    function Hl() {
        Rh(wa, 1);
        var a = K({ kind: "PAGE_END", detail: void 0 }).flat();
        0 !== a.length &&
            ((a = [...a, ["url", rj]]), Ld("_pageend_", a, !1, void 0, 1));
        fk(0);
        Sc();
    }
    function Il() {
        fk(1);
    }
    function Lk() {
        sj = Zf = !1;
        Mk(!1);
        u(!1, !0, !0);
        $f = !1;
    }
    function gk(a) {
        const c = Yh.H(!1, !0, !0);
        c.beacon && (u(!1, !0, !0, c), 1 === a && (sj = !0));
    }
    function fk(a) {
        if (Zf && !$f) gk(a);
        else {
            var c = cc();
            1 === a &&
                ((Zf = !0),
                Lb(function () {
                    Lb(Lk, 2e3);
                }, 1));
            K({ kind: "PAGE_LEAVING", detail: Zf });
            (hk && sj) || w(1 === a, fd, c);
            gk(a);
            $f = !1;
        }
    }
    function Nk(a, c) {
        if (vc || isNaN(a) || 100 > a || 1e3 < a) return !1;
        ik = { responseCode: a, message: c + "" };
        return !0;
    }
    function Ok() {
        return hk;
    }
    function Mk(a, c) {
        hk = a;
        Gf(Mi);
        c &&
            (Mi = Lb(function () {
                hk = !1;
            }, 2e3));
    }
    function Pk() {
        lb.doNotCreateLoadAction ||
            ((xe = ee({
                name: "_load_",
                type: "_load_",
                start: Md,
                id: ed() || $d(),
            }).id),
            Id(),
            ii());
        const a = (c) => {
            xe === c.detail.i && V("ACTION_CLOSED", a);
        };
        ca("ACTION_CLOSED", a);
    }
    function zh(a, c, g = !1, k) {
        a = {
            msg: "",
            file: "",
            line: -1,
            column: -1,
            error: a,
            stackContainsWrapper: g,
        };
        "number" === typeof c && (a.parentActionId = c);
        k && (a.source = k);
        jk(a);
    }
    function Pg(a, c, g, k) {
        a[c] && pg(g, "" + a[c], k);
    }
    function jk(a) {
        var c = a.error,
            g = a.msg;
        if (!((!g && !c) || Ni + 1 > Nb("mepp"))) {
            Ni++;
            "string" === typeof c
                ? (g = a.msg || c)
                : (c = c || lb.event || { message: "", name: "" });
            c = Object.assign(Object.assign({}, a), { msg: g, error: c });
            g = Cd();
            var k;
            g && (k = { name: g.Rb(), type: g.type });
            g = c.error;
            "string" === typeof g && (g = {});
            var p = g.columnNumber || 0,
                B = c.msg,
                O = c.file,
                Y = c.column,
                qa = c.line,
                Xa = c.source;
            B =
                g.message ||
                g.name ||
                g.ai ||
                g.description ||
                B ||
                g.errorMessage ||
                g.Zg ||
                g.data ||
                g.jh ||
                "Indeterminable error name";
            O =
                g.fileName ||
                g.filename ||
                g.sourceURL ||
                g.xh ||
                g.file ||
                O ||
                "";
            qa = g.lineNumber || g.lineno || g.line || g.zh || qa || -1;
            p =
                (g.columnNumber ? p + 1 : void 0) ||
                g.yh ||
                g.colno ||
                g.column ||
                Y ||
                -1;
            if (!(Y = ji(g)))
                a: {
                    try {
                        throw Error("");
                    } catch (Za) {
                        if ((Y = ji(Za)) && 3 < Y.split(/\r\n|\r|\n/).length) {
                            Y = "<generated>\n" + Y;
                            break a;
                        }
                    }
                    Y = "";
                }
            k = {
                message: B,
                file: O,
                line: qa,
                column: p,
                stack: Y,
                userInput: k,
                code: g.ci || g.code || g.errorCode || g.status,
                timestamp: cc() - If,
                debugInfo: "",
                type: g.name || "Error",
                source: Xa || "1",
            };
            "Indeterminable error name" === k.message &&
                ((g = Qg("msg", c.msg)),
                (g += Qg("file", c.file)),
                (g += Qg("line", c.line)),
                (g += Qg("column", c.column)),
                (g += Qg("error", c.error)),
                (k.debugInfo = g));
            k.stack &&
                c.stackContainsWrapper &&
                (k.stack = "<wrapper>" + k.stack);
            if (k.stack) {
                if (1200 < k.stack.length) {
                    g = k.stack.split(/(\r\n|\n|\r)/gm);
                    c = "";
                    for (Ya of g)
                        if (
                            ((g = Ya.trim()),
                            (Xa = g.length),
                            0 < Xa &&
                                (c =
                                    250 < Xa
                                        ? c +
                                          (g.substring(0, 150) +
                                              "[...]" +
                                              g.substring(Xa - 100) +
                                              "\n")
                                        : c + (g + "\n")),
                            1200 < c.length)
                        )
                            break;
                    k.stack = c;
                }
                k.stack = k.stack
                    .replace(RegExp("\\|", "g"), "^p")
                    .replace(/(\r\n|\n|\r)/gm, "|");
            }
            500 < k.message.length && (k.message = k.message.substring(0, 500));
            var Ya = k.file;
            c = k.stack;
            g = Yf();
            Ya &&
                c &&
                !c.includes(g) &&
                Ya.includes(g) &&
                (k.incompleteStack =
                    1200 < c.length ? "stringLength" : "numLines");
            Ya = k;
            5011 !== Ya.code &&
                ((c = a.parentActionId),
                (a = cc()),
                (a = Ye({
                    type: "_error_",
                    name: Jd(Ya.message),
                    start: a,
                    wb: !0,
                })),
                (c = te(a, c)),
                a &&
                    (Pg(Ya, "type", "_type_", a),
                    Ya.file &&
                        ((k = Ya.file),
                        0 <= Ya.line && (k += "|" + Ya.line),
                        0 <= Ya.column && (k += "|" + Ya.column),
                        pg("_location_", k, a)),
                    (k = Ya.incompleteStack) && pg("_istack_", k, a),
                    Pg(Ya, "stack", "_stack_", a),
                    Pg(Ya, "code", "_code_", a),
                    Pg(Ya, "timestamp", "_ts_", a),
                    Pg(Ya, "debugInfo", "_debug_", a),
                    Ya.userInput &&
                        pg(
                            "_useraction_",
                            Ya.userInput.type + "|" + Ya.userInput.name,
                            a
                        ),
                    Pg(Ya, "source", "_source_", a),
                    c && sc()));
        }
    }
    function ji(a) {
        return a
            ? a.stack || a.ih || a.xi || (a.error && a.error.stack) || ""
            : "";
    }
    function pg(a, c, g) {
        const k = cc();
        a = Ye({ type: a, name: Jd(c), start: k, wb: !0 });
        te(a, g.id, !0);
    }
    function Qg(a, c) {
        a = a + "|" + (typeof c + "|");
        if (null === c) a += "null|";
        else if ("object" === typeof c)
            for (const g in c) {
                if (Ka(c, g) && "stack" !== g && "error" !== g) {
                    const k = g;
                    a += g + "|";
                    const p = typeof c[k];
                    a += p + "|";
                    "object" !== p && "function" !== p && (a += c[k] + "|");
                }
            }
        else a += c + "|";
        return a;
    }
    function ki(a, c, g) {
        const k = cc();
        a = Jd(a);
        c = Ye({ type: c, name: a, start: k, stop: k, wb: !0, domNodes: -1 });
        g = te(c, g);
        ka(ai);
        g && sc();
        return g;
    }
    function Qk() {
        X().syn || (ki("visit end", "_endVisit_", -1) ? uf(!1, "a") : Ah());
    }
    function Rk(a, c) {
        Ni > Nb("mepp") || (Ni++, ki(a, "_error_", c));
    }
    function Sk(a, c) {
        ki(a, "_warning_", c);
    }
    function kk(a, c) {
        ki(a, "_log_", c);
    }
    function fh(a, c, g) {
        const k = cc();
        a = Ye({ type: "_rs_", name: ia(a + "=" + c), start: k, wb: !0 });
        te(a, g);
        sc();
    }
    function Oi(a, c) {
        switch (a) {
            case "_uaps_":
                if ("string" !== typeof c) {
                    a = `value [${c}] is not a valid short string, because it is of type ${typeof c}.`;
                    break;
                } else
                    a =
                        "value is not of type 'string'. Make sure to pass in a string.";
                (c = c.length) ||
                    (a =
                        "value is not a valid short string because it is empty.");
                const g = Nb("mpl");
                c > g &&
                    (a = `value is ${c} characters long, which is longer than the maximum of ${g} characters`);
                break;
            case "_uapl_":
                a = `value [${c}] is not a valid java long.`;
                break;
            case "_uapdt_":
                a = `value [${c}] is not a valid date.`;
                break;
            case "_uapdbl_":
                a = `value [${c}] is not a valid java double.`;
                break;
            default:
                a = `value [${c}] is not of a supported type. Has type of ${typeof c}.`;
        }
        return a;
    }
    function Tk(a, c) {
        return {
            failedProperties: a.Fc(),
            sentProperties: a.Rd(),
            info: `Number of total failed properties: ${c}`,
        };
    }
    function mc(a) {
        return !(
            "number" !== typeof a ||
            isNaN(a) ||
            0 !== a % 1 ||
            0x7fffffffffffffff < a ||
            -0x7fffffffffffffff > a
        );
    }
    function Jl(a) {
        return !(
            "number" !== typeof a ||
            isNaN(a) ||
            1.7976931348623157e308 < a ||
            -1.7976931348623157e308 > a
        );
    }
    function Uk(a) {
        return (
            "string" === typeof a &&
            0 !== a.trim().length &&
            a.length <= Nb("mpl")
        );
    }
    function tj(a) {
        return !!a && "[object Date]" === Object.prototype.toString.call(a);
    }
    function li(a, c, g, k, p) {
        c && "object" === typeof c && Bh({ data: c, type: "_uapl_" }, mc, a);
        g && "object" === typeof g && Bh({ data: g, type: "_uapdt_" }, tj, a);
        k && "object" === typeof k && Bh({ data: k, type: "_uaps_" }, Uk, a);
        p && "object" === typeof p && Bh({ data: p, type: "_uapdbl_" }, Jl, a);
    }
    function Bh(a, c, g) {
        const k = a.data,
            p = Kb();
        for (const B in k) {
            if (!(Ka(k, B) && 0 < B.trim().length && 50 >= B.length)) continue;
            let O = p,
                Y = k[B];
            null !== Y &&
                "object" === typeof Y &&
                Ka(Y, "value") &&
                ((O = O && !Y["public"]), (Y = Y.value));
            c(Y)
                ? (O
                      ? (Y = "dT_pv")
                      : "_uapdt_" === a.type && tj(Y) && (Y = Y.getTime()),
                  g.Je(a.type, B, Y))
                : g.Md(a.type, B, Y);
        }
    }
    function lk(a) {
        a = a ? Object.keys(a) : [];
        if (0 === a.length) return !1;
        for (const c of a) if (!Kl.includes(c)) return !1;
        return !0;
    }
    function Vk(a) {
        return oa(
            Qa(T(a), function (c) {
                c = a[c];
                return !!(c && 0 < c.size);
            }),
            function (c) {
                const g = [];
                a[c].forEach(function (k, p) {
                    g.push(`${p},${k}`);
                });
                return `${c}=${g.join(";")}`;
            }
        ).join(";");
    }
    function zc(a, c, g, k, p) {
        a = new Ch(a);
        lk(c) ? li(a, c.Uh, c.vh, c.ui, c.Th) : li(a, c, g, k, p);
        return a.Y();
    }
    function Ac(a) {
        qg[a] ? qg[a]++ : (qg[a] = 1);
    }
    function mk() {
        xb("ds") &&
            ((qg = {}),
            Te(function (a, c, g, k) {
                if (xb("ds")) {
                    g = "";
                    for (p in qg)
                        Ka(qg, p) && (g += `${g ? "|" : ""}${p}-${qg[p]}`);
                    var p = g;
                    !c && vc && p && (a.av(k, "ds", p, !1), (qg = {}));
                }
            }));
    }
    function Wk(a, c, g, k) {
        if (Dh || uj.length)
            uj.length && a.av(k, "fsp", encodeURIComponent(uj.join(",")), !0),
                Dh && a.av(k, "sp", encodeURIComponent(Vk(Dh)), !0),
                (Dh = void 0),
                (uj = []);
    }
    function Xk(a, c, g, k) {
        const p = new vj();
        Dh || (Dh = {});
        lk(a)
            ? p.Y(Dh, a)
            : p.Y(Dh, { javaLong: a, date: c, shortString: g, javaDouble: k });
        uj.push(...p.qb());
        a = Tk(p, vj.B);
        c = p.Fc();
        if (c.length)
            for (const { key: B, reason: O } of c)
                (nk =
                    "Property key [" + B + "] was not accepted because: " + O),
                    lb.console.log(nk);
        (p.tb() || c.length) && sc();
        return a;
    }
    function Me() {
        return nk
            ? [
                  {
                      severity: "Info",
                      text:
                          nk + "(Note: only last errorMessage gets reported!)",
                      type: "wsp",
                  },
              ]
            : null;
    }
    function Ne(a, c) {
        if (lc !== c) return -2;
        if (3 === c && !vc) {
            var g;
            ld(wa, a);
            ld(ub, a);
            a = nd(null === (g = Gi) || void 0 === g ? void 0 : g.pa, wa);
            Wc(a);
            return 2;
        }
        g = wa;
        if (1 === a.id && 1 === g.id && 1 === Tb.length)
            return ld(Tb[0].newView, a), ld(wa, a), ld(ub, a), 2;
        if (g.name === a.name) return -1;
        he(a);
        return 1;
    }
    function Ab(a) {
        const c = +a;
        return a && !isNaN(c) && 11359836e5 < c && 41338908e5 > c ? c : cc();
    }
    function hb(a) {
        return "function" === typeof a;
    }
    function Hb(a, c) {
        return typeof a === c;
    }
    function Zc(a, c) {
        return Hb(a, c) || "undefined" === typeof a || null === a;
    }
    function ze(a) {
        lb.console.log(a);
    }
    function Oc(a, c, g) {
        ze(`${a} "${c}" is deprecated! ${g}`);
    }
    function Ob() {
        ze(
            "Wrong argument types in method. Please check the documentation to fix that"
        );
    }
    function uc() {
        ze("Too many arguments. Please check the documentation to fix that");
    }
    function Eh() {
        ze("No action was found with provided action id argument.");
    }
    function wj() {
        return Yh.B();
    }
    function Yk(a, c = !1, g = !1, k) {
        xj(a, (null === k || void 0 === k ? void 0 : k.contentType) || "");
        return u(!1, !0, c, { referrer: r(), beacon: a }, g, k);
    }
    function Zk(a) {
        ok.push(a);
    }
    function xj(a, c) {
        I(ok, function (g) {
            g(a, c);
        });
    }
    function $k(a, c) {
        yj &&
            (yj && !ag && (Pi.observe(document, pk), (ag = !0)),
            bg[a] || ((bg[a] = []), (Qi = Object.keys(bg)), (mi[a] = c)));
    }
    function al(a) {
        yj &&
            (bg[a] && (delete bg[a], delete mi[a]),
            (Qi = Object.keys(bg)),
            0 === Qi.length && Pi && ag && (Pi.disconnect(), (ag = !1)));
    }
    function bl(a, c) {
        if (!Fh) return null;
        Gh[a] || (Gh[a] = new Fh(c));
        return Gh[a];
    }
    function cl(a) {
        yj && Gh[a] && (Gh[a].disconnect(), delete Gh[a]);
    }
    function dl(a) {
        return bg[a] ? bg[a] : [];
    }
    function el(a, c) {
        bg[a] = c;
    }
    function fl() {
        pk = { childList: !0, subtree: !0 };
        Fh &&
            (Pi = new Fh(function (a) {
                var c = cc();
                const g = [];
                for (const k of a)
                    "childList" === k.type && g.push.apply(g, k.addedNodes);
                if (g.length) {
                    a = { time: c, nodes: g };
                    for (const k of Qi)
                        (c = mi[k]),
                            "function" === typeof c && c(k, a),
                            bg[k].push(a);
                }
            }));
    }
    function gl(a, c, g, k, p, B = "win") {
        try {
            const O = Ri[B] || {};
            O[c] = a[c];
            Ri[B] = O;
            Object.defineProperty(a, c, {
                get:
                    g ||
                    function () {
                        return O[c];
                    },
                set: function (Y) {
                    O[c] = Y;
                    k && (Y || p) && k.apply(a, [Y]);
                },
                configurable: !0,
            });
            return !0;
        } catch (O) {}
        return !1;
    }
    function hl(a, c, g, k) {
        if ((k = k || a[c])) {
            const p = g || "win";
            try {
                delete a[c] && ((a[c] = k), Ri[p] && (Ri[p][c] = null));
            } catch (B) {
                try {
                    Object.defineProperty(a, c, {
                        get: function () {
                            return Ri[p] && Ri[p][c];
                        },
                        configurable: !0,
                    });
                } catch (O) {}
            }
        }
    }
    function il(a) {
        var c = fd;
        return c && c.jc < Nb("tal") && c.lb + a <= Nb("tt")
            ? ((c = F(!1)),
              (a = {
                  name: `${"setTimeout(..., "}${a})`,
                  type: "_t_",
                  start: cc(),
                  Le: a,
                  Ba: c || !0,
              }),
              ee(a).id)
            : 0;
    }
    function ni(a) {
        if ((a = Wa(a)))
            a.xc(),
                Lb(function () {
                    ud();
                    oc(Ba(), !0);
                }, 0);
    }
    function Jf(a) {
        const c = Wa(a);
        c && (c.Bg(), Yg++, Vf.push(a), oc(c));
    }
    function vf(a) {
        const c = Wa(a);
        c &&
            (Yg--,
            Lb(function () {
                fa(a);
                c.Df();
                oc(Ba(), !0);
            }, 0));
    }
    function zj(a) {
        if (xb("etc") || !a) qk = a;
    }
    function jl() {
        return null === qk || void 0 === qk ? void 0 : qk();
    }
    function Aj(a, c) {
        return Yd(970, a || "XHR Error", c);
    }
    function rk(a) {
        return Yd(971, "XHR Canceled", a);
    }
    function Kf(a) {
        return Yd(972, "XHR Timeout", a);
    }
    function Bj(a, c) {
        let g;
        g = 0 === a.time ? 0 : c - a.time;
        a.total += g;
        a.time = c;
        return (a.Zd = g);
    }
    function Si(a, c = cc()) {
        let g = Ti[a];
        void 0 === g && (g = Ti[a] = { time: c, total: 0, Zd: 0 });
        return Bj(g, c);
    }
    function Ui(a, c = cc()) {
        a = Ti[a];
        if (void 0 === a) return 0;
        Bj(a, c);
        a.time = 0;
        return a.Zd;
    }
    function kl(a) {
        a = Ti[a];
        return void 0 === a ? 0 : a.total;
    }
    function Ll(a, c, g, k = !1) {
        return g
            ? new Ff(function (p, B) {
                  const O = [];
                  I(
                      a,
                      function (Y, qa) {
                          c(Y, qa, a) && O.push(Y);
                      },
                      null,
                      function (Y, qa) {
                          qa ? B(O) : p(O);
                      },
                      g,
                      k
                  );
              })
            : Ff.resolve(Qa(a, c));
    }
    function Ml(a, c, g) {
        if (!a || !c) return -1;
        if (a.findIndex) return a.findIndex(c, g);
        for (let k = 0; k < a.length; k++) if (c.call(g, a[k], k, a)) return k;
        return -1;
    }
    function Nl(a, c) {
        let g = "";
        a.classList.forEach(function (p) {
            g += `.${p}`;
        });
        const k = a.tagName.toLowerCase();
        return g
            ? "..." + J(`${k}${g}`, c - k.length - 3, !1, "")
            : (a = a.id)
            ? "..." + J(`#${a}`, c - 3, !1, "")
            : "";
    }
    function Vi(a) {
        let c = a.getAttribute("class");
        const g = 100 - a.tagName.length;
        if (!c) return "";
        c = c.trim().replace(/ +/g, ".");
        if (c.length <= g) return c;
        a = Qa(c.split("."), function (k) {
            return k.length < g;
        });
        for (c = a.join("."); c.length > g && a.length; )
            a.pop(), (c = a.join("."));
        return c;
    }
    function Ub(a, c) {
        let g;
        if (a.id && 100 >= a.id.length) return c.unshift(`#${a.id}`), !0;
        g = a.nodeName.toLowerCase();
        c.unshift(g);
        var k = Vi(a);
        if (k && ((g += `.${k}`), (c[0] = g), Cj(c))) return !0;
        k = a;
        let p = 1;
        for (; k; )
            (k = k.previousElementSibling),
                (null === k || void 0 === k ? void 0 : k.nodeName) ===
                    a.nodeName && p++;
        g += `:nth-of-type(${p})`;
        c[0] = g;
        if (Cj(c)) return !0;
        k = a.previousElementSibling;
        for (p = 1; k; ) (k = k.previousElementSibling), ++p;
        g = g.replace(
            /:nth-of-type\(\d+\)/,
            1 < p ? `:nth-child(${p})` : ":first-child"
        );
        c[0] = g;
        return Cj(c);
    }
    function Cj(a) {
        return 1 === document.querySelectorAll(a.join(">") || "").length;
    }
    function Hh(a) {
        if (!a || !Ii(a, 8) || !document.querySelectorAll) return "";
        try {
            let c = a;
            const g = [];
            for (; c && 100 >= g.join(">").length && !Ub(c, g); )
                c = c.parentElement;
            const k = g.join(">");
            return 100 < k.length ? Nl(a, 100) || J(k, 100, !0) : k;
        } catch (c) {}
        return "";
    }
    function oi(a, c) {
        try {
            if (
                3 !== lc &&
                ("__vue__" === c || "__vue_app__" === c) &&
                xb("usrvd") &&
                2 !== lc
            ) {
                var g, k, p, B;
                var O =
                    (null ===
                        (p =
                            null ===
                                (k =
                                    null === (g = a.__vue_app__) || void 0 === g
                                        ? void 0
                                        : g.config) || void 0 === k
                                ? void 0
                                : k.globalProperties) || void 0 === p
                        ? void 0
                        : p.$router) ||
                    (null === (B = a.__vue__) || void 0 === B
                        ? void 0
                        : B.$router);
                if (O) {
                    var Y = "function" === typeof O.afterEach;
                    var qa = O.currentRoute && Y ? !0 : !1;
                } else qa = !1;
                if (qa) {
                    var Xa, Ya;
                    if (
                        (Xa =
                            (null === (Ya = O.matcher) || void 0 === Ya
                                ? void 0
                                : Ya.match) || O.resolve)
                    ) {
                        var Za, vb, fc;
                        let od =
                            null !==
                                (fc =
                                    null !== (Za = O.options.base) &&
                                    void 0 !== Za
                                        ? Za
                                        : null === (vb = O.options.history) ||
                                          void 0 === vb
                                        ? void 0
                                        : vb.base) && void 0 !== fc
                                ? fc
                                : "";
                        const we = O.options.mode;
                        od || "hash" !== we || (od = "#");
                        var Db = od;
                        a = Tb;
                        for (var kc of a)
                            kc.oldView &&
                                ld(kc.oldView, pi(kc.oldView, Xa, Db)),
                                ld(kc.newView, pi(kc.newView, Xa, Db));
                        kc = wa;
                        a = ub;
                        ld(kc, pi(kc, Xa, Db));
                        ld(a, pi(a, Xa, Db));
                    }
                    O.afterEach(Ih);
                    pd(2);
                }
            }
        } catch (od) {
            pd(1);
        }
    }
    function Ih(a) {
        2 === lc && Ne(Rg(a), 2);
    }
    function Rg(a) {
        const c = a.matched;
        a = a.path;
        return c.length
            ? { group: c[c.length - 1].path, name: a }
            : { name: a };
    }
    function pi(a, c, g) {
        const k = a.name.indexOf(g);
        let p = a.name;
        p === g ? (p = "/") : -1 !== k && (p = p.substring(k + g.length));
        a = Object.assign(Object.assign({}, a), { name: p });
        return Object.assign(Object.assign({}, a), Rg(c(a.name)));
    }
    function Wi(a) {
        void 0 === Xi && (Xi = Nb("prfSmpl") > Math.floor(1e4 * Math.random()));
        Xi &&
            (0 > Ae &&
                ((Ae = Nb("msl")),
                nb.dT_.si(function () {
                    sk();
                }, 3e4),
                sf(lb, "beforeunload", function () {
                    sk(!0);
                })),
            ll.push(a));
    }
    function Ol(a) {
        let c = "";
        I(a.d, function (g) {
            c += `${g[0]}${"="}${g[1]}${"|"}`;
        });
        return `${a.i}${"|"}${a.t}${"|"}${c.slice(0, -1)}`;
    }
    function ml(a, c) {
        let g = "";
        I(T(c[1]), function (k) {
            g += `${k}${"="}${c[1][k]}${"|"}`;
        });
        return `${a}${"|"}${c[0]}${"|"}${g.slice(0, -1)}`;
    }
    function sk(a = !1) {
        I(ll.splice(0), function (c) {
            if (0 === c.t) {
                var g = !1;
                const k = c.d;
                let p = k.length;
                for (; !g && p; ) g = 0 === k[--p][1];
            } else g = !1;
            g || (c.a ? Yi(c) : Dj.push(Ol(c)));
        });
        qi(a);
    }
    function Yi(a) {
        const c = a.i,
            g = rg[c];
        g
            ? ((g[0] += a.t),
              I(a.d, function (k) {
                  g[1][k[0]] = void 0 !== g[1][k[0]] ? g[1][k[0]] + k[1] : k[1];
              }))
            : ((rg[c] = [a.t, {}]),
              I(a.d, function (k) {
                  rg[c][1][k[0]] = k[1];
              }));
    }
    function qi(a = !1) {
        I(T(rg), function (g) {
            Dj.push(ml(g, rg[g]));
        });
        let c = "";
        I(Dj, function (g, k, p) {
            if (c.length + 1 + g.length >= Ae) {
                tk(c, a);
                c = "";
                if (k === p.length - 1) {
                    tk(`${"1,"}${g}`, a);
                    return;
                }
                c = `${"1,"}${g}`;
            } else c ? (c = c + "," + g) : (c = `${"1,"}${g}`);
            c.length && k === p.length - 1 && tk(c, a);
        });
        Dj = [];
        rg = {};
    }
    function tk(a, c = !1) {
        const g = wj();
        Yh.ar(g, a);
        Yk(g, c, !1, { contentType: "perf" });
    }
    function Pl() {
        Jh = sg.connection;
        xb("eni") &&
            Jh &&
            Te(function (a, c, g, k) {
                !c &&
                    vc &&
                    Jh &&
                    ((c = `${Jh.effectiveType || "-"}|${Jh.downlink || -1}`),
                    Jh.type && (c = `${c}|${Jh.type}`),
                    a.av(k, "ni", c, !1));
            });
    }
    function Ql(a) {
        return (
            "longtask" ===
                (null === a || void 0 === a ? void 0 : a.entryType) &&
            50 < a.duration
        );
    }
    function Lf(a) {
        ri.push({ startTime: a.startTime, duration: a.duration });
    }
    function uk() {
        try {
            (Ej = new PerformanceObserver(function (a) {
                I(Qa(a.getEntries(), Ql), Lf);
            })),
                Ej.observe({ type: "longtask", buffered: !0 });
        } catch (a) {}
    }
    function vk() {
        gh = hh = 0;
        si = ti = -5e3;
        Fj = [];
        if (xb("cls") && Td.cls)
            try {
                new PerformanceObserver(function (a) {
                    a = a.getEntries();
                    for (const c of a)
                        if (
                            "layout-shift" ===
                                (null === c || void 0 === c
                                    ? void 0
                                    : c.entryType) &&
                            !c.hadRecentInput
                        )
                            if (((a = c.startTime), 0 === cg)) {
                                if (5e3 < a - ti || 1e3 < a - si)
                                    (ti = a), (gh = 0);
                                si = a;
                                gh += c.value;
                                hh = Math.max(hh, gh);
                            } else
                                1 === cg &&
                                    Fj.push({ startTime: a, yf: c.value });
                }).observe({ type: "layout-shift", buffered: !0 });
            } catch (a) {}
    }
    function wk() {
        Gj = new lb.PerformanceObserver(function (a) {
            a = a.getEntries();
            for (const c of a) {
                a = c.name;
                const g = Math.round(c.startTime);
                "first-paint" === a && (Hj = g);
                "first-contentful-paint" === a && (xk = g);
            }
        });
        try {
            Gj.observe({ type: "paint", buffered: !0 });
        } catch (a) {
            Gj.observe({ entryTypes: ["paint"] });
        }
    }
    function ff() {
        Ij = new lb.PerformanceObserver(function (a) {
            a = a.getEntries();
            a = a[a.length - 1];
            if (a.size > ui)
                switch (((ui = a.size), cg)) {
                    case 0:
                        jm = gf(a);
                        break;
                    case 1:
                        ih.push(gf(a));
                        break;
                    case 2:
                        nj - Md > a.startTime &&
                            ((ui = a.size),
                            (a = gf(a)),
                            Ld(
                                "_wv_",
                                [
                                    ["AAI", xe + ""],
                                    ["lcpE", a.Bc || "-"],
                                    ["lcpSel", a.gd || "-"],
                                    ["lcpS", a.size + ""],
                                    ["lcpT", a.Ra + ""],
                                    ["lcpU", a.url || "-"],
                                    ["lcpLT", a.loadTime + ""],
                                ],
                                !1,
                                void 0,
                                1
                            ));
                }
        });
        try {
            Ij.observe({ type: "largest-contentful-paint", buffered: !0 });
        } catch (a) {
            Ij.observe({ entryTypes: ["largest-contentful-paint"] });
        }
    }
    function gf(a) {
        var c;
        let g = a.startTime;
        g && (g = Qb(g));
        return {
            Ra: Math.round(g),
            loadTime: Math.round(a.loadTime),
            size: a.size,
            gd: Hh(a.element) || "-",
            Bc:
                (null === (c = a.element) || void 0 === c
                    ? void 0
                    : c.tagName) || "-",
            url: a.url || "-",
        };
    }
    function nl(a) {
        for (const c of a.getEntries())
            "first-input" === c.entryType &&
                c.processingStart &&
                c.startTime &&
                ((b = Math.round(c.startTime)),
                (e = Math.round(c.processingStart - c.startTime)));
        ol();
    }
    function ol() {
        2 === cg &&
            cc() < nj + 2e4 &&
            Ld(
                "_wv_",
                [
                    ["AAI", xe + ""],
                    ["fIS", b + ""],
                    ["fID", e + ""],
                ],
                !1,
                void 0,
                1
            );
    }
    function Rl() {
        var a;
        const c =
            null === (a = lb.PerformanceObserver) || void 0 === a
                ? void 0
                : a.supportedEntryTypes;
        return !!c && c.includes("first-input");
    }
    function pl() {
        if (Rl())
            try {
                new PerformanceObserver(nl).observe({
                    type: "first-input",
                    buffered: !0,
                });
            } catch (a) {}
        else
            ca("GLOBAL_EVENT_FIRED", function g(c) {
                const { e: k, t: p } = c.detail;
                {
                    const O = k.timeStamp;
                    if (!b && Sl.includes(p) && O) {
                        c = ae();
                        var B = 1e12 < O;
                        B && O < c
                            ? (c = !1)
                            : ((b = Math.round(B ? O - c : O)),
                              (e = Math.max(0, Math.round(me() - b))),
                              ol(),
                              (c = !0));
                    } else c = !1;
                }
                c && V("GLOBAL_EVENT_FIRED", g);
            });
    }
    function yk(a) {
        a.Lf();
        l = a.Ec();
        a.reset(me());
    }
    function ql(a, c) {
        return [["inp", (void 0 === l || c.detail.Dg ? a.Ec() : l) + ""]];
    }
    function zk(a) {
        return [["inp", a.Ec() + ""]];
    }
    function Jj(a) {
        a.detail.i === xe && (V("ACTION_CLOSED", Jj), (cg = 1));
    }
    function rl(a) {
        const { i: c, a: g, s: k } = a.detail;
        if (c === xe) {
            V("ACTION_BEFORE_SEND", rl);
            cg = 2;
            const qa = [];
            a = qa;
            var p = k - g;
            if (xb("pt")) {
                if (Td.lcpT) {
                    var B = jm;
                    for (var O = ih.length - 1; 0 <= O; O--)
                        if (ih[O].Ra < p) {
                            B = ih[O];
                            break;
                        }
                    B && 0 !== B.Ra
                        ? B.Ra > p
                            ? (B = { Ra: -6 })
                            : (ui = B.size || 0)
                        : (B = { Ra: -5 });
                    B.Bc && B.gd && B.url
                        ? a.push(
                              ["lcpE", B.Bc],
                              ["lcpSel", B.gd],
                              ["lcpS", B.size + ""],
                              ["lcpT", B.Ra + ""],
                              ["lcpU", B.url],
                              ["lcpLT", B.loadTime + ""]
                          )
                        : a.push(["lcpT", B.Ra + ""]);
                } else a.push(["lcpT", "-3"]);
                Td.fcp
                    ? a.push(["fcp", (xk ? (xk > p ? -6 : Qb(xk)) : -5) + ""])
                    : a.push(["fcp", "-3"]);
                Td.fp
                    ? a.push(["fp", (Hj ? (Hj > p ? -6 : Qb(Hj)) : -5) + ""])
                    : a.push(["fp", "-3"]);
            }
            if (xb("cls"))
                if (Td.cls) {
                    B = a.push;
                    for (var Y of Fj)
                        if (((O = Y.startTime), O < p)) {
                            if (5e3 < O - ti || 1e3 < O - si)
                                (ti = O), (gh = 0);
                            si = O;
                            gh += Y.yf;
                            hh = Math.max(hh, gh);
                        }
                    Fj = [];
                    B.call(a, ["cls", +hh.toFixed(4) + ""]);
                } else a.push(["cls", "-3"]);
            if (xb("lt"))
                if (Td.lt) {
                    Y = a.push;
                    B = 0;
                    O = ae();
                    for (const Xa of ri) {
                        const Ya = B + Xa.duration > p;
                        O + Xa.startTime + Xa.duration <= k &&
                            !Ya &&
                            (B += Xa.duration);
                    }
                    null === Ej || void 0 === Ej || Ej.disconnect();
                    Y.call(a, ["lt", Math.round(B) + ""]);
                } else a.push(["lt", "-3"]);
            Td.inp || a.push(["inp", "-3"]);
            (0 === b && 0 === e) || qa.push(["fIS", b + ""], ["fID", e + ""]);
            0 < qa.length && Ld("_wv_", qa, xe, Md, 1);
        }
    }
    function dg() {
        try {
            if (
                !lb.dT_ ||
                !(void 0 === lb.dialogArguments
                    ? navigator.cookieEnabled || ua()
                    : ua())
            )
                return !1;
            var a = lb.dT_;
            a.initialized = !1;
            a.pageId = "";
            a.pageTitle = "";
            a.frameCount = 0;
            a.bwsW = 0;
            a.bwsH = 0;
            a.syn = !1;
            a.googleBot = !1;
            a.tp = Ag;
            a.gicv = da;
            a.aFU = Dd;
            a.gPId = kd;
            a.iRO = Fe;
            a.gBI = Va;
            a.iMD = ic;
            a.cfg = ig;
            a.acfgP = Dg;
            a.smbi = Sf;
            a.ism = Pe;
            a.iMod = Qe;
            a.gMu = Cg;
            a.tau = z;
            a.icr = v;
            a.lv = R;
            a.sv = bc;
            a.svl = D;
            a.gh = Pb;
            a.aesc = wb;
            a.puesc = Rb;
            a.tpesc = Wb;
            a.apl = gl;
            a.rpl = hl;
            a.dbg = gb;
            a.dbc = kb;
            a.dlf = ab;
            a.loc = r;
            a.sch = ue;
            a.gNTO = ce;
            a.vAT = Qb;
            a.cVIn = Fb;
            a.sNT = Kb;
            a.gPAH = H;
            a.id = Lc;
            a.ss = Dc;
            a.ssP = Xk;
            a.asl = Bc;
            a.sMPS = sc;
            a.gBP = Nf;
            a.cB = wj;
            a.sB = Yk;
            a.ea = vg;
            a.la = yg;
            a.lx = Rf;
            a.dlx = Sd;
            a.ex = le;
            a.ec = oe;
            a.lc = pe;
            a.eV = Qk;
            a.pe = Rk;
            a.pw = Sk;
            a.pl = kk;
            a.rs = fh;
            a.pcn = ki;
            a.ca = ha;
            a.can = C;
            a.isci = Rd;
            a.ti = Id;
            a.las = S;
            a.gca = ja;
            a.gAR = Gd;
            a.gAA = Cc;
            a.sxbe = Ze;
            a.aWF = Ak.dtAWF;
            a.mx = De;
            a.mxf = Yd;
            a.mxg = Aj;
            a.mxc = rk;
            a.mxt = Kf;
            a.gITAID = rc;
            a.re = jk;
            a.rex = zh;
            a.bi = Fc;
            a.ei = ke;
            a.gci = Cd;
            a.gpi = Ic;
            a.cii = id;
            a.pii = hd;
            a.gcv = Pd;
            a.aad = cd;
            a.sole = gi;
            a.iolm = pj;
            a.solb = qj;
            a.slem = bk;
            a.lst = tc;
            a.sle = Jk;
            a.gLEELF = vd;
            a.gNNTV = re;
            a.gLAet = Gl;
            a.iSAC = Ok;
            a.sSAC = Mk;
            a.lAID = nc;
            a.maep = Nk;
            a.snt = lf;
            a.aO = bl;
            a.rO = cl;
            a.aMO = $k;
            a.rMO = al;
            a.gMN = dl;
            a.sMN = el;
            a.eta = il;
            a.lta = ni;
            a.etc = Jf;
            a.ltc = vf;
            a.cia = xg;
            a.wst = Si;
            a.wsp = Ui;
            a.wtt = kl;
            a.rpm = Wi;
            a.sasl = Zk;
            a.dnrui = Kd;
            a.aFr = Qa;
            a.fE = I;
            a.aM = oa;
            a.aAP = zc;
            a.aAPY = wg;
            a.iBt = U;
            a.cAE = Ld;
            a.addE = ca;
            a.remE = V;
            a.disE = K;
            a.red = Yc;
            a.cUIRO = Qd;
            a.aAWC = W;
            a.gXACT = Kc;
            a.uaxu = zg;
            a.gaxu = mh;
            a.last = ma;
            a.aFI = Ml;
            a.aur = ib;
            a.oK = T;
            a.oHOP = Ka;
            a.gdi = Tf;
            a.ssmbi = Ca;
            a.gecsss = Hh;
            a.fEP = M;
            a.iVRA = oi;
            a.sNV = Ne;
            a.sVDM = pd;
            a.gVDM = de;
            a.fP = Ll;
            a.iNF = L;
            a.aAPy = zd;
            a.uabmr = lh;
            a.cbf = Vc;
            a.asyncCoreVersion = "10307250124095659";
            a.gRT = jf;
            a.itcp = zj;
            a.gtc = jl;
            a.nan = Jd;
            a.wwi = Ik;
            var c = X();
            Lb = c.st;
            cc = c.nw;
            Uf = c.sC;
            Jg = c.gC;
            Wf = c.esc;
            tg = c.cLSCK;
            Uj = c.gPC;
            Cf = c.sPC;
            Og = c.iVSC;
            Kg = c.p3SC;
            sh = c.gSC;
            Hf = c.sSC;
            Vh = c.gVI;
            hj = c.cPC;
            Ue = c.gSSV;
            dh = c.sSSV;
            Wh = c.gSId;
            Kh = c.pCfg;
            Lh = c.pCSAA;
            Kj = c.cFHFAU;
            dc = c.sCD;
            xb = c.bcv;
            Nb = c.ncv;
            Mc = c.scv;
            wf = c.stcv;
            td = c.rplC;
            Te = c.aBPSL;
            gj = c.gBPSL;
            eg = c.gBPSCC;
            Ke = c.gFId;
            Di = c.oEIEWA;
            vi = c.iNV;
            di = c.gVID;
            jh = c.gARnVF;
            ai = c.cAUV;
            Ah = c.sVIdUP;
            lj = c.gDtc;
            wi = c.cfgO;
            ac = c.version;
            bi = c.rBPSL;
            th = c.aNVL;
            kh = c.dPV;
            Lj = c.ePV;
            Zi = c.eA;
            Mh = c.dA;
            Nh = c.iXB;
            ei = c.de;
            Oh = c.aRI;
            ef = c.gXBR;
            me = c.rnw;
            ae = c.gto;
            df = c.iEC;
            Gf = c.ct;
            sf = c.ael;
            uf = c.gNVIdN;
            xi = c.gxwp;
            Sg = c.prm;
            yi = c.gidi;
            ej = c.iDCV;
            Ig = c.gCF;
            Ii = c.iIO;
            Ei = c.gPSMB;
            uh = c.iAEPOO;
            Xg = c.lvl;
            Yf = c.gAN;
            $a(c);
            c.version = va();
            Ff = Sg();
            var g = X();
            const Xc = navigator.userAgent;
            c = {
                ie: NaN,
                edge: NaN,
                ec: NaN,
                ff: NaN,
                ch: NaN,
                sf: NaN,
                msf: NaN,
                ab: NaN,
                op: NaN,
            };
            try {
                a = /Firefox[\/\s](\d+\.\d+)/;
                const be = /(iPod|iPhone|iPad)/,
                    je = /AppleWebKit/;
                if (Xc.includes("MSIE")) {
                    const Jc = Xc.lastIndexOf("MSIE") + 5;
                    c.ie = parseInt(Xc.substring(Jc, Jc + 3));
                } else if (Xc.includes("Trident")) {
                    if (Xc.includes("rv:")) {
                        const Jc = Xc.lastIndexOf("rv:") + 3;
                        var k = parseInt(Xc.substring(Jc, Jc + 2));
                    } else if (Xc.includes("rv ")) {
                        const Jc = Xc.lastIndexOf("rv ") + 3;
                        k = parseInt(Xc.substring(Jc, Jc + 2));
                    } else k = NaN;
                    c.ie = k;
                } else if (Xc.includes("Edge")) {
                    const Jc = Xc.lastIndexOf("Edge") + 5;
                    c.edge = parseInt(Xc.substring(Jc, Jc + 2));
                } else if (Xc.includes("Edg/")) {
                    const Jc = Xc.lastIndexOf("Edg/") + 4;
                    c.ec = parseInt(Xc.substring(Jc, Jc + 2));
                } else if (a.test(Xc)) {
                    const Jc = parseInt((Xc.match(a) || [])[1]);
                    c.ff = -1 === Jc ? 0 : Jc;
                } else if (Xc.includes("Android")) {
                    const Jc = Xc.indexOf("Android") + 8;
                    c.ab = parseFloat(Xc.substring(Jc, Jc + 3));
                } else if (Xc.match(be) && Xc.match(je))
                    c.msf = parseFloat(
                        (Xc.match(/(?:OS |Version\/)([0-9]+)(?:[_.][0-9])*/) ||
                            [])[1]
                    );
                else if (
                    ("Safari" !== navigator.appName &&
                        !Xc.includes("Safari")) ||
                    Xc.includes("Chrom")
                )
                    if (lb.opera)
                        c.op = parseInt(lb.opera.version().split(".")[0]);
                    else if (Xc.includes("OPR/"))
                        c.op = parseInt(
                            (Xc.match(/OPR\/([0-9]*\.[0-9]*)/) || [])[1]
                        );
                    else {
                        var p;
                        var B =
                            +(null === (p = /Chrome\/([0-9]{1,4})/.exec(Xc)) ||
                            void 0 === p
                                ? NaN
                                : p[1]) || NaN;
                        c.ch = B;
                    }
                else {
                    const Jc = Xc.substring(Xc.lastIndexOf("Version/")).match(
                        /Version\/([0-9]+(\.[0-9]*)?)/
                    );
                    c.sf = Jc ? parseInt(Jc[1]) : NaN;
                }
            } catch (be) {}
            Je = c;
            g.syn = Xc.includes("RuxitSynthetic");
            g.googleBot = Xc.includes("Googlebot");
            var O;
            const zi = lb.dT_,
                Tl = va();
            Tl === zi.version ||
                (null !== (O = lb.console) &&
                    void 0 !== O &&
                    O.log(
                        "WARNING: Snippet version [" +
                            zi.version +
                            "] and monitoring code [" +
                            Tl +
                            "] versions do not match! Please update your code snippet to ensure compatibility."
                    ));
            zi.version = "10307250124095659";
            If = zi.agentStartTime || zi.gAST();
            if (!zi || zi.initialized) return !1;
            const sl = T(Hg);
            for (const be of sl) Hg[be] = [];
            pa();
            Bg();
            Xf = wi ? wi() : X().cfg;
            Xf.initializedModules = "";
            Nh(Xf);
            Oe();
            g = 0;
            Je.sf ? (g = 100) : Je.msf && (g = 1e3);
            jj = g;
            yd = { actions: {}, Fa: [] };
            $d = db;
            rf = 1;
            km = 0;
            cf = [];
            ie = [];
            fd = null;
            Aa(null, !0);
            ng = [];
            q();
            yc = 0;
            ca("VISIBILITY_CHANGED", Q);
            d = Gb(r());
            Od();
            ca("CONFIG_UPDATE", Od);
            Vj = {};
            Nd = bf();
            Le = Se = void 0;
            ph = 0;
            Zg = !0;
            (xb("imm") && ic()) ||
                (xd("click", "C", "clk"),
                xd("mousedown", "D", "mdw"),
                xd("mouseup", "U", "mup"));
            xd("dblclick", "CC", "dcl");
            xd("keydown", "KD", "kyd");
            xd("keyup", "KU", "kyu");
            xd("scroll", "S", "scr");
            xd("touchstart", "TS", "tcs");
            xd("touchend", "TE", "tce");
            xd("change", "H", "chg");
            if (Mc("ade")) {
                var Y = Mc("ade").split(",");
                if (Y && 0 < Y.length) for (const be of Y) xd(be);
            }
            nj = 0;
            a: {
                const be = document.getElementsByTagName("meta"),
                    je = Nb("mrt");
                for (Y = 0; Y < be.length; Y++) {
                    const Jc = be[Y],
                        tl = Jc.getAttribute("http-equiv");
                    if (tl && "refresh" === tl.toLowerCase()) {
                        const lm = Jc.getAttribute("content");
                        if (parseInt(((lm && lm.split(";")) || [])[0]) <= je) {
                            var qa = !0;
                            break a;
                        }
                    }
                }
                qa = !1;
            }
            qa && pj();
            "undefined" !== typeof WeakMap && (xh = new WeakMap());
            var Xa = document.location;
            const Ul = bf();
            Xa && Ja(Ul) && Ul.aFU(Xa.href);
            const Mj = Mc("rid");
            if (!Mj || "RID_" === Mj) {
                Xa = wf;
                var Ya = Mc("ridPath");
                const be = Ya ? Ya : lb.location.pathname;
                let je = lb.location.search;
                je && je.length && je.startsWith("?") && (je = je.substring(1));
                Ya = je;
                let Jc;
                Jc = 31 + ec(be);
                Jc = 31 * Jc + ec(Ya);
                Xa("rid", "RID_" + (Jc & Jc));
            }
            sf(lb, "beforeunload", Il);
            sf(lb, "pagehide", Hl);
            sf(document, "readystatechange", ii);
            Lb(ek, 3e3);
            sf(lb, "load", dk);
            Md = oj();
            const Bk = bf();
            if (Ja(Bk)) {
                var Za = Bk.sSAC;
                Za && Za(!1);
                var vb = (
                    xb("dsss") ? R(Ef()) : decodeURIComponent(Ig(Ef()))
                ).split("|");
                if (12 === vb.length) {
                    const be = xb("dsss"),
                        je = xb("dssv");
                    Za = "";
                    !be && je
                        ? (Za = R(Ef(), !0))
                        : be && !je && (Za = decodeURIComponent(Ig(Ef())));
                    const Jc = Za.split("|");
                    if (4 === Jc.length) {
                        const [tl, lm, Fm, Gm] = Jc;
                        vb.push(tl);
                        vb.push(lm);
                        vb.push(Fm || "");
                        vb.push(Gm);
                    }
                }
                var fc = vb.join("|");
                !qa && gd("-");
                if (fc && "-" !== fc) {
                    var Db = fc.split("|");
                    if (16 === Db.length || 12 === Db.length) {
                        var kc = parseInt(Db[5]);
                        vb = Md - kc;
                        if (-10 < vb && 6e4 >= vb) {
                            vb = {
                                id: -1,
                                kind: -1,
                                hydrated: !1,
                                trigger: -1,
                            };
                            const be = Rb(Db[15]).split(";");
                            for (const je of be) {
                                const Jc = je.substring(1);
                                switch (je.charAt(0)) {
                                    case "i":
                                        vb.id = +Jc;
                                        break;
                                    case "k":
                                        vb.kind = +Jc;
                                        break;
                                    case "h":
                                        vb.hydrated = !!+Jc;
                                        break;
                                    case "t":
                                        vb.trigger = +Jc;
                                }
                            }
                            var od = vb;
                            var we = {
                                isDelayed: "true" == Db[0],
                                type: Db[1],
                                id: parseInt(Db[2]),
                                name: Db[3],
                                info: Db[4],
                                startTime: kc,
                                frameId: Db[6],
                                Ca: fb(Db[7]),
                                anchor: Db[10],
                                da: Db[11],
                                pa: void 0,
                            };
                            16 === Db.length &&
                                (we.pa = {
                                    name: fb(Db[12]),
                                    timestamp: parseInt(Db[13]),
                                    group: fb(Db[14]),
                                    trigger: od.trigger,
                                    kind: od.kind,
                                    hydrated: od.hydrated,
                                    id: od.id,
                                });
                            Db = !1;
                            X() !== Bk && (Db = Bk.iRO(we.Ca));
                            !document.referrer ||
                            we.Ca === document.referrer ||
                            we.Ca === document.location.href ||
                            Db
                                ? (Gi = we)
                                : gd(fc);
                        } else gd("-");
                    }
                }
            }
            try {
                pd(1);
                ub = wa = {
                    id: ++Ga,
                    name: ge(r()),
                    timestamp: Md,
                    kind: 0,
                    trigger: lc,
                    hydrated: !1,
                };
                Bf();
                var Gg;
                const be = null === (Gg = Gi) || void 0 === Gg ? void 0 : Gg.pa,
                    je = nd(be, wa);
                Wc(je);
                ca("VIEW_STABLE", Gc);
                ca("ACTION_ENTERED", fg);
                ca("ACTION_BEFORE_SEND", Ci);
                ca("ACTION_SENT", He);
                ca("BF_CACHE_RESTORED", dd);
                Fl = af(nf);
                ca("HISTORY_API_EVENT", ad);
                sf(lb, "popstate", ad);
                sf(lb, "hashchange", ad);
                try {
                    nh("pushState"), nh("replaceState");
                } catch (Jc) {}
                Te(bj);
                ca("VIEW_STABLE", Ie);
                rj = r();
            } catch (be) {}
            Sj();
            Pk();
            cb();
            Sh();
            Qf();
            Pl();
            Hi = "0";
            const Vl = document.visibilityState;
            Vl
                ? ("hidden" === Vl && (Hi = "1"),
                  sf(document, "visibilitychange", Rc))
                : (Hi = "2");
            hf();
            cg = 0;
            const Ud = !!lb.PerformanceObserver;
            Td.cls = !(!Ud || !lb.LayoutShift);
            Td.fcp = !(!Ud || !lb.PerformancePaintTiming);
            Td.fp = !(!Ud || !lb.PerformancePaintTiming);
            Td.lcpT = !(!Ud || !lb.LargestContentfulPaint);
            Td.lt = !(!Ud || !lb.PerformanceLongTaskTiming);
            var Wl,
                ul,
                vl,
                Cm =
                    lb.PerformanceEventTiming &&
                    lb.PerformanceEventTiming.prototype &&
                    "interactionId" in lb.PerformanceEventTiming.prototype,
                mm =
                    null ===
                        (vl =
                            null ===
                                (ul =
                                    null === (Wl = lb.PerformanceObserver) ||
                                    void 0 === Wl
                                        ? void 0
                                        : Wl.supportedEntryTypes) ||
                            void 0 === ul
                                ? void 0
                                : ul.includes) || void 0 === vl
                        ? void 0
                        : vl.call(ul, "event");
            Td.inp = !(!Cm || !mm);
            xb("pt") && (Td.fp && wk(), Td.lcpT && ff());
            vk();
            ri = [];
            xb("lt") && Td.lt && uk();
            pl();
            if (Td.inp) {
                var Tc = Fa();
                ca("VIEW_CHANGE", yk.bind(null, Tc));
                ca("VIEW_END", ql.bind(null, Tc));
                var $i = Fa();
                ca("PAGE_END", zk.bind(null, $i));
            }
            ca("ACTION_CLOSED", Jj);
            ca("ACTION_BEFORE_SEND", rl);
            mk();
            fl();
            Te(Wk);
            ca("DEBUG_INFO_REQUESTED", Me);
            of();
            $c();
            ca("DEBUG_INFO_REQUESTED", yi);
            jg();
            ca("DEBUG_INFO_REQUESTED", Zd);
            if ("undefined" === typeof lb.dT_) var Xl = !1;
            else
                "undefined" === typeof lb.dtrum && (lb.dtrum = new wl()),
                    (Xl = !0);
            if (!Xl) return !1;
            const Be = X();
            Be.initialized = !0;
            const Hc = Be.initCallback;
            "function" === typeof Hc && Hc();
        } catch (Xc) {
            return !1;
        }
        return !0;
    }
    var Ff = (this.dT_ && dT_.prm && dT_.prm()) || window.Promise,
        nb = "undefined" !== typeof window ? window : self,
        lb =
            "undefined" !== typeof globalThis
                ? globalThis
                : "undefined" !== typeof window
                ? window
                : void 0,
        sg = lb.navigator,
        Nj = {
            u: "transferSize",
            v: "encodedBodySize",
            w: "decodedBodySize",
            L: "workerStart",
            M: "dtRpid",
            V: "dtSInfo",
            W: "dtTao",
            X: "responseStatus",
        },
        tf = {
            x: "statuscode",
            y: "ip",
            A: "failedResource",
            C: "requestId",
            E: "relevance",
            F: "relevantArea",
            K: "isCritical",
            N: "vcIrrelevanceReason",
            O: "imageWidth",
            P: "imageHeight",
            Q: "imageNaturalWidth",
            R: "imageNaturalHeight",
            S: "onloadTime",
            T: "rtRequestId",
            U: "certExpDate",
        },
        xf = {
            o: "domInteractive",
            p: "domContentLoadedEventStart",
            q: "domContentLoadedEventEnd",
            r: "domComplete",
            s: "loadEventStart",
            t: "loadEventEnd",
        },
        yf = {
            c: "redirectStart",
            d: "redirectEnd",
            e: "fetchStart",
            f: "domainLookupStart",
            g: "domainLookupEnd",
            h: "connectStart",
            i: "connectEnd",
            j: "secureConnectionStart",
            k: "requestStart",
            l: "responseStart",
            m: "responseEnd",
        },
        Ng = Na(Na(Na({}, yf), { n: "domLoading" }), xf),
        ye = Na(Na(Na({}, yf), xf), Nj),
        ij = Na(Na(Na({}, yf), Nj), tf);
    Na(Na(Na({}, ij), Ng), ye);
    var ne;
    (function (a) {
        a[(a.ENABLED = 0)] = "ENABLED";
        a[(a.DISABLED = 1)] = "DISABLED";
        a[(a.DELAYED = 2)] = "DELAYED";
    })(ne || (ne = {}));
    var Oj;
    (function (a) {
        a[(a.BLOCKED_BY_PERCENTAGE = 0)] = "BLOCKED_BY_PERCENTAGE";
        a[(a.ENABLED = 1)] = "ENABLED";
        a[(a.BLOCKED = 2)] = "BLOCKED";
    })(Oj || (Oj = {}));
    var Pj;
    (function (a) {
        a[(a.NONE = 1)] = "NONE";
        a[(a.OFF = 2)] = "OFF";
        a[(a.PERFORMANCE = 3)] = "PERFORMANCE";
        a[(a.BEHAVIOR = 4)] = "BEHAVIOR";
    })(Pj || (Pj = {}));
    var ug;
    (function (a) {
        a.OVERLOAD_PREVENTION = "ol";
        a.PRIVACY_STATE = "prv";
        a.SERVER_ID = "srv";
        a.SESSION_ID = "sn";
    })(ug || (ug = {}));
    var Ck;
    (function (a) {
        a.DYNATRACE_MOBILE = "dynatraceMobile";
        a.MOBILE_AGENT = "MobileAgent";
    })(Ck || (Ck = {}));
    var Qj;
    (function (a) {
        a[(a.ARRAY = 0)] = "ARRAY";
        a[(a.BOOLEAN = 1)] = "BOOLEAN";
        a[(a.NUMBER = 2)] = "NUMBER";
        a[(a.STRING = 3)] = "STRING";
        a[(a.FUNCTION = 4)] = "FUNCTION";
        a[(a.OBJECT = 5)] = "OBJECT";
        a[(a.DATE = 6)] = "DATE";
        a[(a.ERROR = 7)] = "ERROR";
        a[(a.ELEMENT = 8)] = "ELEMENT";
        a[(a.HTML_ELEMENT = 9)] = "HTML_ELEMENT";
        a[(a.HTML_IMAGE_ELEMENT = 10)] = "HTML_IMAGE_ELEMENT";
        a[(a.PERFORMANCE_ENTRY = 11)] = "PERFORMANCE_ENTRY";
        a[(a.PERFORMANCE_TIMING = 12)] = "PERFORMANCE_TIMING";
        a[(a.PERFORMANCE_RESOURCE_TIMING = 13)] = "PERFORMANCE_RESOURCE_TIMING";
        a[(a.PERFORMANCE_NAVIGATION_TIMING = 14)] =
            "PERFORMANCE_NAVIGATION_TIMING";
        a[(a.CSS_RULE = 15)] = "CSS_RULE";
        a[(a.CSS_STYLE_SHEET = 16)] = "CSS_STYLE_SHEET";
        a[(a.REQUEST = 17)] = "REQUEST";
        a[(a.RESPONSE = 18)] = "RESPONSE";
        a[(a.SET = 19)] = "SET";
        a[(a.MAP = 20)] = "MAP";
        a[(a.WORKER = 21)] = "WORKER";
        a[(a.XML_HTTP_REQUEST = 22)] = "XML_HTTP_REQUEST";
        a[(a.SVG_SCRIPT_ELEMENT = 23)] = "SVG_SCRIPT_ELEMENT";
        a[(a.HTML_META_ELEMENT = 24)] = "HTML_META_ELEMENT";
        a[(a.HTML_HEAD_ELEMENT = 25)] = "HTML_HEAD_ELEMENT";
        a[(a.ARRAY_BUFFER = 26)] = "ARRAY_BUFFER";
        a[(a.SHADOW_ROOT = 27)] = "SHADOW_ROOT";
    })(Qj || (Qj = {}));
    var cj = -1,
        Df = Sa("dtPC"),
        og = Sa("dtCookie");
    Sa("rxvt");
    Sa("rxVisitor");
    Sa("dTValidationCookie");
    var Ef = Sa("dtSa"),
        Lg = (function () {
            for (var a, c = [], g = 0; 256 > g; g++) {
                a = g;
                for (var k = 0; 8 > k; k++)
                    a = a & 1 ? 3988292384 ^ (a >>> 1) : a >>> 1;
                c[g] = a;
            }
            return c;
        })(),
        Ai = Symbol.for("dt_2");
    Symbol.for("dt_3");
    var Th = 0,
        qf = Infinity,
        Vg = 0,
        ve,
        bf,
        ed,
        Lb,
        cc,
        Uf,
        Jg,
        Wf,
        tg,
        Uj,
        Cf,
        Og,
        Kg,
        sh,
        Hf,
        Vh,
        hj,
        Ue,
        dh,
        Wh,
        Kh,
        Lh,
        Kj,
        dc,
        xb,
        Nb,
        Mc,
        wf,
        td,
        Te,
        gj,
        eg,
        Ke,
        Di,
        vi,
        di,
        jh,
        ai,
        Ah,
        lj,
        wi,
        bi,
        th,
        kh,
        Lj,
        Zi,
        Mh,
        Nh,
        ei,
        Oh,
        ef,
        me,
        ae,
        df,
        Gf,
        sf,
        uf,
        xi,
        Sg,
        yi,
        ej,
        Ig,
        Ii,
        Ei,
        uh,
        Xg,
        Yf,
        ac,
        If,
        Hg = {
            CONFIG_UPDATE: [],
            ACTION_CLOSED: [],
            ACTION_BEACON_FORCED: [],
            ACTION_BEFORE_SEND: [],
            ACTION_SENT: [],
            ACTION_ENTERED: [],
            ACTION_LEFT: [],
            VIEW_CHANGE: [],
            VIEW_STABLE: [],
            DEBUG_INFO_REQUESTED: [],
            CSS_TRANSMISSION_STARTED: [],
            VISUALLY_COMPLETE: [],
            GLOBAL_EVENT_FIRED: [],
            HISTORY_API_EVENT: [],
            VISIBILITY_CHANGED: [],
            LOAD_END: [],
            INSTRUMENTATION_TRIGGERED: [],
            PAGE_LEAVING: [],
            HTTP_RESPONSE: [],
            OPT_IN_STATE_CHANGED: [],
            PAGE_END: [],
            VIEW_END: [],
            BF_CACHE_RESTORED: [],
            REQUEST_STARTED: [],
            REQUEST_COMPLETED: [],
        },
        Mf;
    (function (a) {
        a.ANCHOR = "A";
        a.BUTTON = "BUTTON";
        a.FORM = "FORM";
        a.I_FRAME = "IFRAME";
        a.IMAGE = "IMG";
        a.INPUT = "INPUT";
        a.LABEL = "LABEL";
        a.LINK = "LINK";
        a.OPTION = "OPTION";
        a.SCRIPT = "SCRIPT";
        a.SELECT = "SELECT";
        a.STYLE = "STYLE";
        a.TEXT_AREA = "TEXTAREA";
    })(Mf || (Mf = {}));
    var vc = !1,
        yc = 0,
        cf = [],
        ie = [],
        fd,
        oh,
        yd,
        Je,
        rf = 1,
        $d = db,
        $f = !1,
        Md = -1,
        xe,
        Mg = [],
        Zf = !1,
        vh,
        ik,
        rh,
        Uh = { "^": "^^", "|": "^p", ",": "^c", ";": "^s" },
        Wg = (function (a) {
            const c = {};
            for (const g in a) Ka(a, g) && (c[a[g]] = g);
            return c;
        })(Uh),
        Tj = "^><%/\\(){}[]".split(""),
        Yg = 0,
        Vf = [],
        Dk = !0,
        Fi = [],
        fj = [],
        d,
        h = [],
        n = 0,
        x = "-",
        E;
    (function (a) {
        a[(a.LABEL = 0)] = "LABEL";
        a[(a.NAME = 1)] = "NAME";
        a[(a.OTHER = 2)] = "OTHER";
        a[(a.CLASS = 3)] = "CLASS";
        a[(a.TAG = 4)] = "TAG";
    })(E || (E = {}));
    var ba = 0,
        Ga = 0,
        wa,
        ub,
        Tb = [],
        lc = 0,
        bd = 0,
        lg = [],
        dj = {
            name: "",
            type: "",
            validUntil: 0,
            start: 0,
            target: void 0,
            url: "",
            title: "",
            view: void 0,
        },
        Se,
        Le,
        ph,
        Zg,
        Nd,
        Vj,
        Ek = -1,
        Gi = null,
        yl = [],
        Fk = [],
        zl = !1,
        Wj = {
            _csprv_: {
                blockedURL: La,
                documentURL: La,
                referrer: La,
                sourceFile: La,
            },
            _customerror_: function (a, c) {
                return "name" === a
                    ? Pa(a, c, !0, 1e3)
                    : Pa(a, c, !0, Nb("mcepsl"));
            },
            _vc_: {
                VE: function (a, c) {
                    return c;
                },
            },
            _dj_: function (a, c) {
                return c;
            },
            _wv_: { lcpU: La },
        },
        Hk,
        Ph = class {
            constructor() {
                this.id = ++Hk;
                this.B = [];
                this.Wd = this.Nb = !1;
                this.H = [];
            }
            jf(a) {
                this.B.push(a);
            }
            kg(a) {
                for (let c = 0; c < this.B.length; c++)
                    if (this.B[c] === a) {
                        na(this.B, c);
                        break;
                    }
            }
            nb(a, c, g, k) {
                for (const p of this.B) p(a, c, g, k);
            }
            mf(a) {
                this.cd = a;
                "string" !== typeof a && (this.Wd = !0);
            }
            Z(a, c, g = !1) {
                this.Nb = this.Nb || g;
                this.H.push([a, c]);
            }
            cb(a, c, g) {
                c && this.Z(a, c, g);
            }
            Sb(a) {
                for (const c of this.H) if (c[0] === a) return c[1];
                return "";
            }
            Me() {
                const a = [];
                for (const c of this.H) a.push("$", c[0], "=", c[1]);
                return a.join("");
            }
            raw() {
                return this.H;
            }
        },
        qh,
        Yj,
        $g,
        Xh = lb.parent,
        Al = [],
        Gk = [],
        Xj = "",
        mg = class {
            B() {
                return new Ph();
            }
            ua(a, c) {
                if (Dk) return null;
                const g = this.B();
                xb("bs") && g.Z("bs", "1", !1);
                ka(jd, this, a, c, g);
                return g.Nb ? g : null;
            }
            Y(a, c, g, k) {
                g.cb("isUnload", k ? "1" : "", !1);
                g.cb("latC", "0", !1);
                g.cb("app", Mc("app"), !1);
                g.Z("vi", Vh(), !1);
                g.cb("dnt", Yb() ? "1" : "", !1);
                g.Z("fId", Ke(), !1);
                k = va();
                const p = ac;
                g.Z("v", k, !1);
                p !== k && g.Z("iv", p, !1);
                a ||
                    ((k = di()),
                    this.av(g, "vID", k),
                    this.ha(g) && vi() && this.av(g, "nV", "1"));
                !a && c && jh() && g.Z("nVAT", "1", !1);
                a = g.cb;
                c = encodeURIComponent;
                k = Mg;
                Mg = [];
                a.call(g, "vcr", c(k.join(",")));
            }
            aa(a) {
                const c = ik;
                c &&
                    vc &&
                    (a.Z("responseCode", c.responseCode, !1),
                    a.cb("responseMessage", Wf(c.message), !1),
                    (ik = void 0));
            }
            H(a = !1, c = !1, g = !1) {
                if (a) {
                    var k = [],
                        p = "",
                        B = "",
                        O = cf;
                    var Y = 0;
                    for (var qa of O) {
                        qa.Kd(Y)
                            ? (O = { He: !0, Ie: !0 })
                            : (Y++,
                              (O = qa.Kd(Y + qa.Eb)) || (Y += qa.Eb),
                              (O = { He: !1, Ie: O }));
                        const Za = O;
                        if (!Za.He) {
                            p || (p = qa.gb());
                            B = qa.gb();
                            if (qa.parentFrameActionName) {
                                O = k;
                                var Xa = O.push;
                                var Ya = qa.we;
                                Ya = [
                                    0,
                                    qa.ve,
                                    wb(qa.parentFrameActionName),
                                    Ya,
                                ].join("|");
                                Xa.call(O, Ya);
                            }
                            k.push(qa.yc(Za.Ie));
                        }
                    }
                    Y = { qc: k.join(","), referer: p, sourceUrl: B };
                } else Y = Qc(c, g);
                if ((k = 0 < Y.qc.length)) {
                    p = this.B();
                    p.Z("a", Wf(Y.qc), !0);
                    Mc("domainOverride") &&
                        (p.Z("dO", Mc("domainOverride"), !1),
                        wf("domainOverride", ""));
                    xb("bs") && p.Z("bs", "1", !1);
                    a && p.Z("PV", "1", !1);
                    X().pageId !== Ke() && p.Z("pId", X().pageId, !1);
                    Yj && p.Z("pFId", Yj, !1);
                    p.Z("rId", Mc("rid"), !1);
                    p.Z("rpId", Mc("rpid"), !1);
                    if (!a) {
                        a: {
                            B = (qa = lb.performance) ? qa.timing : !1;
                            if (
                                qa &&
                                B &&
                                ((qa = B.domComplete),
                                (B = B.domContentLoadedEventEnd),
                                qa || B)
                            ) {
                                B = qa ? qa : B;
                                break a;
                            }
                            B = vh;
                        }
                        B && p.Z("domR", B, !1);
                        this.aa(p);
                    }
                    F(g) && p.Z("unload", "xhr", !1);
                    ka(jd, this, a, c, p);
                    Dk = !1;
                } else p = this.ua(a, c);
                p && (this.ga(Y.sourceUrl, p), this.Y(a, k, p, g));
                return { beacon: p, referrer: Y.referer };
            }
            ga(a, c) {
                const g = r();
                c.Z("url", encodeURIComponent(g), !1);
                c.Z("title", Wf(Jd(document.title, 100)), !1);
                var k = c.Sb("a");
                k = k && (k.startsWith("s") || k.startsWith("d"));
                a && a !== g && !k && c.Z("sUrl", encodeURIComponent(a), !1);
            }
            av(a, c, g, k, p) {
                g = "function" === typeof g ? g() : g;
                "undefined" !== typeof g &&
                    null !== g &&
                    "" !== g &&
                    a.Z(c + (p ? p : ""), g, k);
            }
            ha(a) {
                return !!a.Sb("a");
            }
            hla(a) {
                return a.Sb("a").includes("_load_");
            }
            ar(a, c) {
                a.mf(c);
            }
            aBRL(a, c) {
                a.jf(c);
            }
            rBRL(a, c) {
                a.kg(c);
            }
        },
        Yl = class extends Error {
            constructor(a) {
                super();
                this.status = a;
            }
        },
        Zl = class extends Yl {
            constructor({ status: a, message: c, Ma: g, uc: k }) {
                super(a);
                this.message = c || "";
                this.Ma = g;
                this.uc = k;
            }
        },
        Xf,
        nm = [],
        xl;
    (function (a) {
        a.ENABLED = "enabled";
        a.NAME = "name";
    })(xl || (xl = {}));
    var om;
    (function (a) {
        a.FAIL = "fail";
        a.SUCCESS = "success";
    })(om || (om = {}));
    var pm;
    (function (a) {
        a.STREAM = "application/octet-stream";
        a.TEXT = "text/plain;charset=UTF-8";
    })(pm || (pm = {}));
    var $l = class {
            constructor(a) {
                this.B = a;
                this.aa = a.hd
                    ? "application/octet-stream"
                    : "text/plain;charset=UTF-8";
            }
            send() {
                var a = this.B.path;
                for (const c of nm) c(a);
                return this.Y()
                    .then(this.zc.bind(this))
                    .catch(this.tb.bind(this));
            }
            ua() {
                return J(this.B.kb, Nb("mhl"));
            }
            Da() {
                const a = this.B.kb;
                return !!a && a !== r() && !xb("cors");
            }
            nb(a, c) {
                const g = this.B.uf,
                    k = this.B.vf,
                    p = this.B.beacon;
                try {
                    p.nb(a, c, g, k);
                } catch (B) {}
            }
            qb(a) {
                if (
                    !("object" === typeof a && a && "status" in a && Ii(a, 7))
                ) {
                    a =
                        "object" === typeof a && a && "message" in a
                            ? a.message
                            : "";
                    var c;
                    if ((c = this.Ma()))
                        (c = Je),
                            (c =
                                !!(c.sf || c.msf || c.ff) &&
                                "sendBeacon" in navigator &&
                                !xb("dsndb"));
                    a = new Zl({ status: 0, message: a, Ma: c, uc: this.B });
                }
                return a;
            }
            zc({ body: a, status: c }) {
                this.ga("success", a || c);
                if (a) {
                    c =
                        (null === a || void 0 === a ? void 0 : a.split("|")) ||
                        [];
                    c.splice(0, 1);
                    for (const Xa of c) {
                        c = a;
                        const [Ya, Za] = Xa.split("=");
                        if (Ya === og() || "sn" === Ya) {
                            if (((c = decodeURIComponent(Za)), Og(c))) {
                                Hf(c);
                                c = og();
                                try {
                                    lb.sessionStorage.removeItem(c);
                                } catch (vb) {}
                            }
                        } else if ("name" === Ya)
                            try {
                                if (!xb("eao")) {
                                    var g = tg(),
                                        k = lb.localStorage.getItem(g),
                                        p = Mc("cuc"),
                                        B = 0;
                                    if (k) {
                                        const vb = Kh(k),
                                            fc = Lh(vb.config || "", vb);
                                        B = parseInt(
                                            fc.lastModification || "0"
                                        );
                                    }
                                    var O = Kh(c),
                                        Y = Lh(O.config || "");
                                    if (!p || !Y.cuc || p === Y.cuc) {
                                        var qa = parseInt(
                                            Y.lastModification || "0"
                                        );
                                        qa > B &&
                                            (lb.localStorage.setItem(g, c),
                                            Kj(Y),
                                            dc(Y, !0),
                                            Nh(Y),
                                            Oh(Y),
                                            qa > +(Xf.lastModification || 0) &&
                                                ((Xf = td(Y)),
                                                K({
                                                    kind: "CONFIG_UPDATE",
                                                    detail: Xf,
                                                })));
                                    }
                                }
                            } catch (vb) {}
                        else
                            "enabled" === Ya &&
                                "false" === Za &&
                                pc("Cost Control");
                    }
                }
            }
            ga(a, c) {
                for (const g of eg()) g(this.B.beacon, a, c);
            }
            tb(a) {
                a = this.qb(a);
                100 <= Fi.length || Fi.push(a);
                this.ga("fail", a.status);
                if (429 === a.status) {
                    for (const c of cf) c.Pc();
                    pc("Overload Prevention");
                    return Ff.resolve();
                }
                if (!Zf)
                    try {
                        const c = tg();
                        lb.localStorage.removeItem(c);
                    } catch (c) {}
                return a.Ma ? Ff.reject(a) : Ff.resolve();
            }
        },
        Dm = lb.fetch,
        vm = class extends $l {
            constructor(a) {
                super(a);
                a = a.tc;
                const c = { ["Content-Type"]: this.aa };
                this.Da() && (c["x-dtreferer"] = this.ua());
                this.H = {
                    method: "POST",
                    credentials: "same-origin",
                    headers: c,
                    body: a,
                    keepalive: "string" === typeof a && 65536 > a.length,
                };
                this.Dc();
            }
            Dc() {
                const a = Nb("xt");
                if (a) {
                    var c = new AbortController();
                    nb.dT_.st(c.abort.bind(c), a);
                    this.H.signal = c.signal;
                }
            }
            Y() {
                try {
                    return Dm(this.B.path, this.H).then(this.Ea.bind(this));
                } catch (a) {
                    return Ff.reject(a);
                }
            }
            Ea(a) {
                this.nb(XMLHttpRequest.DONE, a.status);
                if (!a.ok || 200 !== a.status) throw new Yl(a.status);
                return a.text().then(function (c) {
                    return { body: c, status: a.status };
                });
            }
            Ma() {
                return !0;
            }
        },
        Bl = class extends $l {
            constructor(a) {
                super(a);
            }
            Y() {
                const a = this.B.path,
                    c = this.B.tc;
                let g = !1;
                try {
                    g = navigator.sendBeacon(a, c || "");
                } catch (k) {}
                if (!g)
                    return (
                        this.nb(XMLHttpRequest.DONE, 0), Ff.reject(new Yl(0))
                    );
                this.nb(XMLHttpRequest.DONE, 200);
                return Ff.resolve({ status: 200, body: void 0 });
            }
            Ma() {
                return !1;
            }
        },
        qm = class extends $l {
            constructor(a) {
                super(a);
                this.H = xi();
            }
            Y() {
                const a = this.B.path,
                    c = this.B.tc,
                    g = this;
                return new Ff(function (k, p) {
                    const B = g.H;
                    B.open("POST", a, !0);
                    B.setRequestHeader("Content-Type", g.aa);
                    g.Da() && B.setRequestHeader("x-dtreferer", g.ua());
                    B.addEventListener("readystatechange", function () {
                        g.nb(B.readyState, B.status);
                        B.readyState === XMLHttpRequest.DONE &&
                            (200 === B.status
                                ? k({ body: B.responseText, status: B.status })
                                : p(
                                      new Zl({
                                          status: B.status,
                                          Ma: !0,
                                          uc: g.B,
                                      })
                                  ));
                    });
                    B.send(c);
                });
            }
        },
        em = class extends qm {
            constructor(a) {
                super(a);
                if ((a = Nb("xt")))
                    (this.H.timeout = a),
                        (this.H.ontimeout = this.Ea.bind(this));
            }
            Ea() {
                try {
                    this.H.abort();
                } catch (a) {}
            }
            Ma() {
                return !0;
            }
        },
        ah = !1,
        Cl,
        bh,
        Yh,
        Zh,
        ch,
        hm = { xf: ud },
        Hi,
        km = 0,
        rm;
    (function (a) {
        a.INITIATOR_TYPE = "initiatorType";
        a.START_TIME = "startTime";
    })(rm || (rm = {}));
    var wm =
            "function" === typeof PerformanceResourceTiming ||
            "object" === typeof PerformanceResourceTiming,
        xm =
            "function" === typeof PerformanceNavigationTiming ||
            "object" === typeof PerformanceNavigationTiming,
        Ji =
            "function" === typeof PerformanceTiming ||
            "object" === typeof PerformanceTiming,
        zm = { navigate: 0, reload: 1, back_forward: 2, prerender: 3 },
        Am = {
            unknown: 0,
            xmlhttprequest: 1,
            fetch: 2,
            beacon: 3,
            iframe: 4,
            frame: 5,
            subdocument: 6,
            img: 7,
            image: 8,
            css: 9,
            svg: 10,
            link: 11,
            script: 12,
            input: 13,
            body: 14,
            object: 15,
            embed: 16,
            source: 17,
            audio: 18,
            video: 19,
            track: 20,
            eventsource: 21,
            other: 22,
            icon: 23,
        },
        $h = {},
        Dl = Math.pow(2, -52),
        ym = ["dtRpid", "dtSInfo", "dtTao", "dtRequestID"],
        fm = !1,
        El,
        Tg = ["_warning_", "_error_", "_log_", "_rs_"],
        Bm = class {
            constructor(
                a,
                c,
                g,
                k,
                p,
                B,
                O,
                Y,
                qa,
                Xa,
                Ya,
                Za,
                vb = { readyState: -1, status: -1 },
                fc = -1,
                Db,
                kc,
                od,
                we,
                Gg = $d()
            ) {
                this.start = a;
                this.stop = c;
                this.type = g;
                this.name = k;
                this.info = p;
                this.domNodes = B;
                this.kb = O;
                this.title = Y;
                this.isCustomAction = Xa;
                this.ib = Ya;
                this.od = vb;
                this.da = Db;
                this.qb = kc;
                this.Nc = we;
                this.id = Gg;
                this.depth = 1;
                this.lb = this.jc = 0;
                this.sa = -1;
                this.Yc = this.Eb = 0;
                this.Za = -1;
                this.pb = "";
                this.subActions = [];
                this.ga = [];
                this.$b = [];
                this.errors = [];
                this.status = 0;
                this.H = [];
                this.childFrameActions = 0;
                this.aa = !1;
                this.Ua = this.Ja = 0;
                this.Ee = !1;
                this.Zb = 0;
                this.xhrUrl = "";
                this.ua = !1;
                this.Ge(qa);
                this.Oe = Hi;
                this.Ha(c);
                this.status = Za ? 3 : 0;
                this.Qa = 0 <= fc;
                this.lb = Math.max(fc, 0);
                od && (this.pa = od);
            }
            gb() {
                return this.parent ? this.parent.gb() : this.kb;
            }
            Oa() {
                return this.parent ? this.parent.Oa() : this.id;
            }
            Ha(a) {
                this.ua || ((this.stop = a), (yc = Math.max(yc, this.stop)));
            }
            Qd() {
                this.ua = !0;
            }
            zd(a, c = !1) {
                (3 !== this.status || c) &&
                    a &&
                    a.name &&
                    ((a.depth = this.depth + 1),
                    this.subActions.push(a),
                    a.Kc() && (this.Zb++, this.Ud(1)),
                    (a.parent = this),
                    a.Qa || this.Mb(),
                    (a.lb += this.lb),
                    (a.jc = this.jc + +a.Qa));
            }
            Yd() {
                return 3 === this.status && !this.Mc();
            }
            close(a, c, g, k = !1) {
                this.domNodes = document.getElementsByTagName("*").length;
                this.start = c || this.start;
                c = !1;
                const p = this.start,
                    B = this.stop,
                    O = this.id,
                    Y = this.Zb;
                a && (this.Ha(Math.max(a, p, B)), g && (c = !0));
                if (Y) return (this.status = 1), !1;
                if (3 === this.status) return !1;
                this.status = 3;
                K({
                    kind: "ACTION_CLOSED",
                    detail: {
                        s: B,
                        a: p,
                        r: this.Oa(),
                        i: O,
                        f: k,
                        t: this.type,
                        x: this.xhrUrl,
                        dne: c,
                        rt: void 0,
                        cs: this.Ja,
                        ce: this.Ua,
                        xe: this.Za,
                        xm: this.pb,
                        ["in"]: this.info,
                    },
                });
                return !0;
            }
            Hd() {
                this.Eb--;
                this.parent && this.parent.Hd();
            }
            xc(a, c, g, k = !1) {
                if (this.close(a, c, g, k)) {
                    var p = this.parent;
                    if (p) {
                        p.Zb--;
                        this.Y() || p.Hd();
                        const B = p.stop;
                        p.Ha(Math.max(this.stop, B));
                        Lb(() => {
                            this.tb(p, B);
                        }, 0);
                        1 === p.status && p.xc(a);
                    }
                }
            }
            tb(a, c) {
                this.Qa &&
                    (Gf(this.sa),
                    a.stop === this.stop && (a.stop = c),
                    a.lg(this),
                    delete yd.actions[this.id]);
            }
            Kd(a) {
                return a + 1 > Nb("moa") && !this.Y();
            }
            zc() {
                const a =
                    this.bestMatchingResource ||
                    jf(
                        this.xhrUrl,
                        "fetch" === this.info ? "fetch" : "xmlhttprequest",
                        this.start,
                        3 === this.status ? this.stop : 0
                    );
                return Xe(a) ? a : null;
            }
            Mf() {
                const a = this.zc();
                if (!a || 0 >= a.startTime) return [];
                this.Da(a);
                const c = ["b", ae() + Math.round(a.startTime)];
                lf(a, c, a.startTime);
                return c;
            }
            ke() {
                const a = this.start,
                    c = this.stop,
                    g = this.id;
                for (const k of this.subActions) k.ke();
                K({
                    kind: "ACTION_BEFORE_SEND",
                    detail: { s: c, a, i: g, r: this.Oa() },
                });
            }
            Qc(a) {
                const c = this.start,
                    g = this.stop,
                    k = this.id,
                    p = this.type,
                    B = this.xhrUrl,
                    O = this.Ja,
                    Y = this.Ua,
                    qa = this.pb,
                    Xa = this.Za,
                    Ya = this.B;
                for (const Za of this.subActions) Za.Qc(a);
                K({
                    kind: "ACTION_SENT",
                    detail: {
                        s: g,
                        a: c,
                        r: this.Oa(),
                        i: k,
                        f: a,
                        t: p,
                        x: B,
                        rt: Ya,
                        cs: O,
                        ce: Y,
                        xm: qa,
                        xe: Xa,
                        ["in"]: this.info,
                    },
                });
                Gf(this.sa);
                delete yd.actions[this.id];
                this.Ee = !0;
            }
            Pc() {
                this.yg = !0;
                I(this.subActions, function (a) {
                    a.Pc();
                });
            }
            Mc() {
                return !!this.H.length;
            }
            Nf() {
                this.Ya = this.start + 1e4;
                this.bc = 100;
                return this;
            }
            Bg() {
                this.Xf = cc();
            }
            Df() {
                this.Ea = cc();
            }
            Wf() {
                return !!this.Xf && !this.Ea;
            }
            Kc() {
                return 1 === this.status || 0 === this.status;
            }
            Tb() {
                return ((this.Qa && 3 === this.status) ||
                    (this.ib && !(0 < this.Yc))) &&
                    this.parent
                    ? this.parent.Tb()
                    : this;
            }
            yc(a) {
                const c = this.depth;
                var g = this.ga;
                const k = this.subActions;
                this.domNodes ||
                    (this.domNodes = document.getElementsByTagName("*").length);
                const p = [];
                I(g, function (B) {
                    p.push(sb(B, c + 1));
                });
                for (g = 0; g < k.length && !a; g++) p.push(k[g].yc());
                p.unshift(this.Ka());
                return p.join(",");
            }
            Ka() {
                var a = this.stop;
                const c = this.start,
                    g = this.id,
                    k = this.type,
                    p = this.info,
                    B = this.status,
                    O = this.name,
                    Y = [];
                Y[0] = this.depth + "";
                Y[1] = g + "";
                Y[2] = wb(O);
                Y[3] = wb(k);
                Y[4] = wb(p) || "-";
                Y[5] = c + "";
                Y[6] = (3 === B ? a : 0) + "";
                a = this.Dc();
                for (const qa of a)
                    if ((a = qa[1]))
                        (a =
                            "string" === typeof a
                                ? wb(a)
                                : "boolean" === typeof a
                                ? +a + ""
                                : a + ""),
                            Y.push(qa[0] + "", a);
                return Y.join("|");
            }
            Dc() {
                const a = this.xhrUrl,
                    c = this.Ua,
                    g = this.Ja,
                    k = this.start,
                    p = this.name,
                    B = this.Za,
                    O = this.pb;
                var Y = this.pa;
                const qa = this.Cg,
                    Xa = this.Oe,
                    Ya = this.$b.slice();
                Ya.push(
                    ["dn", this.domNodes],
                    ["cfa", this.childFrameActions],
                    ["xu", a],
                    ["ica", this.isCustomAction],
                    ["gn", this.da]
                );
                var Za = Ya.push;
                {
                    const kc = [];
                    if (0 !== lc) {
                        var vb = wa,
                            fc = vb.name,
                            Db = vb.timestamp;
                        vb = vb.group;
                        Y &&
                            (Y.name !== fc && kc.push(["svn", Y.name]),
                            Y.timestamp !== Db && kc.push(["svt", Y.timestamp]),
                            Y.group &&
                                Y.group !== vb &&
                                kc.push(["svg", Y.group]),
                            kc.push(["svtrg", Y.trigger]),
                            kc.push(["svm", Ea(Y)]));
                        qa &&
                            (qa.name !== fc && kc.push(["tvn", qa.name]),
                            qa.timestamp !== Db &&
                                kc.push(["tvt", qa.timestamp]),
                            qa.group &&
                                qa.group !== vb &&
                                kc.push(["tvg", qa.group]),
                            kc.push(["tvtrg", qa.trigger]),
                            kc.push(["tvm", Ea(qa)]));
                    }
                    Y = kc;
                }
                Za.call(Ya, ...Y);
                a && !xb("ntd") && Ya.push(["xrt", this.Mf().join("")]);
                "_load_" === p &&
                    "undefined" !== typeof document &&
                    Ya.push(["lr", document.referrer]);
                "0" !== Xa && Ya.push(["bg", Xa]);
                g &&
                    c &&
                    (0 < g ? Ya.push(["xcs", g - k]) : Ya.push(["xcs", g]),
                    0 < c ? Ya.push(["xce", c - k]) : Ya.push(["xce", c]));
                -1 !== B && Ya.push(["rc", B]);
                O && Ya.push(["rm", O]);
                this.B &&
                    this.stop < this.B.responseEnd &&
                    this.Nc &&
                    Ya.push(["sd", 1]);
                return Ya;
            }
            xg() {
                return 3600001 <= cc() - this.start ? (this.Qc(!1), !0) : !1;
            }
            Ge(a) {
                this.xhrUrl = a.trim();
            }
            rg(a) {
                this.bestMatchingResource = a;
                this.Da(a);
            }
            Da(a) {
                !Xe(a) ||
                    this.B === a ||
                    "rtRequestId" in a ||
                    ((a.rtRequestId = --km), (this.B = a));
            }
            Mb() {
                this.Qa &&
                    ((this.Qa = !1),
                    this.Ha(this.Ea || this.stop),
                    (this.lb = this.jc = 0),
                    this.parent && this.parent.Mb());
            }
            yd(a) {
                this.Mb();
                this.Ha(Math.max(a.timestamp, this.stop));
                let c = this.parent;
                for (; c; ) c.Ha(Math.max(c.stop, this.stop)), (c = c.parent);
                this.ga.push(a);
            }
            nf() {
                const a = (c = -1) => {
                    var g;
                    na(this.H, this.H.indexOf(a));
                    this.Ha(Math.max(c, this.stop));
                    this.Mc() ||
                        null === (g = this.qb) ||
                        void 0 === g ||
                        g.xf();
                };
                this.H.push(a);
                return a;
            }
            lf(a, c) {
                this.$b.push([a, c]);
            }
            ae() {
                this.aa = !0;
            }
            wg(a) {
                this.aa ||
                    (a > this.stop && 3 === this.status
                        ? (this.Ja = -6)
                        : (this.Ja = a));
            }
            vg(a) {
                this.aa ||
                    (a > this.stop && 3 === this.status
                        ? (this.Ua = -6)
                        : (this.Ua = a));
            }
            Ud(a) {
                this.Eb += a;
                const c = 3 === this.status;
                c && (this.status = 1);
                this.parent &&
                    (c && (this.Y() || a++, this.parent.Zb++),
                    this.parent.Ud(a));
            }
            Y() {
                return Tg.includes(this.type);
            }
            lg(a) {
                const c = this.subActions;
                for (let g = c.length - 1; 0 <= g; g--)
                    if (c[g] === a) {
                        na(c, g);
                        a.parent = void 0;
                        break;
                    }
            }
        },
        gm =
            "loadEventEnd loadEventStart domComplete domContentLoadedEventEnd domContentLoadedEventStart domInteractive responseEnd".split(
                " "
            ),
        ng = [],
        Ak = {
            dtAWF: function (a, c, g, k, p, B) {
                k && !fe(k)
                    ? (ng.push({ xhrUrl: G(yb(p || "")), D: k, Ff: B || "" }),
                      (a = a.apply(c, g || [])),
                      "g" === B
                          ? Lb(function () {
                                for (let O = 0; O < ng.length; O++)
                                    if (ng[O].D === k) {
                                        na(ng, O);
                                        break;
                                    }
                            }, 0)
                          : ng.pop())
                    : (a = a.apply(c, g || []));
                return a;
            },
        },
        jj,
        Bi;
    (function (a) {
        a[(a.ERROR = 970)] = "ERROR";
        a[(a.CANCELED = 971)] = "CANCELED";
        a[(a.TIMEOUT = 972)] = "TIMEOUT";
    })(Bi || (Bi = {}));
    var ci = null,
        kj = null,
        fi = void 0,
        Zj = void 0,
        am;
    (function (a) {
        a[(a.BOTH = 0)] = "BOTH";
        a[(a.PATH = 1)] = "PATH";
        a[(a.HASH = 2)] = "HASH";
    })(am || (am = {}));
    var bm;
    (function (a) {
        a.HASHCHANGE = "hashchange";
        a.POPSTATE = "popstate";
    })(bm || (bm = {}));
    var Fl, sm;
    (function (a) {
        a[(a.VIEW_CHANGE = 0)] = "VIEW_CHANGE";
        a[(a.PAGE_END = 1)] = "PAGE_END";
    })(sm || (sm = {}));
    var rj = "",
        Ik = function (a, c, g) {
            c[a] = g || !0;
            return c;
        }.bind(null, Ai),
        im = {
            dtAWF: function (a, c, g) {
                return a.apply(c, g || []);
            },
        },
        mj,
        Li = !1,
        hi = !1,
        Kk = !1,
        wh = 1,
        yh = null,
        sj = !1,
        nj,
        eh = !1,
        hk = !1,
        Mi = -1,
        xh,
        tm;
    (function (a) {
        a[(a.PAGE_HIDE = 0)] = "PAGE_HIDE";
        a[(a.BEFORE_UNLOAD = 1)] = "BEFORE_UNLOAD";
    })(tm || (tm = {}));
    var Ni = 0;
    setInterval(function () {
        0 < Ni && Ni--;
    }, 3e4);
    var Qh;
    (function (a) {
        a.DATE = "spD";
        a.DOUBLE = "spDb";
        a.LONG = "spL";
        a.SHORT_STRING = "spSS";
    })(Qh || (Qh = {}));
    var Kl = ["javaLong", "date", "shortString", "javaDouble"],
        Ch = class a {
            constructor(c) {
                this.D = c;
                this.H = [];
                this.B = [];
            }
            Je(c, g, k) {
                wg(c, g, k, this.D);
                this.H.push({ key: g, value: k });
            }
            Md(c, g, k) {
                c = Oi(c, k);
                this.B.push({ key: g, reason: c });
                a.B++;
            }
            Rd() {
                return this.H;
            }
            Fc() {
                return this.B;
            }
            Y() {
                return Tk(this, a.B);
            }
        };
    Ch.B = 0;
    var qg = {},
        vj = class a {
            constructor() {
                this.B = [];
                this.Ea = [];
                this.ua = new Map();
                this.aa = new Map();
                this.Da = new Map();
                this.ga = new Map();
                this.H = 0;
            }
            Je(c, g, k) {
                switch (c) {
                    case "_uapl_":
                        this.ua.set(g, k);
                        break;
                    case "_uapdbl_":
                        this.ga.set(g, k);
                        break;
                    case "_uaps_":
                        this.Da.set(g, k);
                        break;
                    case "_uapdt_":
                        this.aa.set(g, k);
                        break;
                    default:
                        return;
                }
                this.H++;
                this.Ea.push({ key: g, value: k });
            }
            Md(c, g, k) {
                c = Oi(c, k);
                this.B.push({ key: g, reason: c });
                a.B++;
            }
            tb() {
                return 0 < this.H;
            }
            Rd() {
                return this.Ea;
            }
            Fc() {
                return this.B;
            }
            qb() {
                const c = [];
                for (const g of this.B) c.push(g.key);
                return c;
            }
            Y(c, g) {
                li(this, g.javaLong, g.date, g.shortString, g.javaDouble);
                this.ua.forEach(function (k, p) {
                    var B;
                    null !== (B = c.spL) && void 0 !== B
                        ? B
                        : (c.spL = new Map());
                    c.spL.set(p, k + "");
                });
                this.aa.forEach(function (k, p) {
                    var B;
                    null !== (B = c.spD) && void 0 !== B
                        ? B
                        : (c.spD = new Map());
                    c.spD.set(p, k + "");
                });
                this.Da.forEach(function (k, p) {
                    var B;
                    null !== (B = c.spSS) && void 0 !== B
                        ? B
                        : (c.spSS = new Map());
                    c.spSS.set(p, wb(k + ""));
                });
                this.ga.forEach(function (k, p) {
                    var B;
                    null !== (B = c.spDb) && void 0 !== B
                        ? B
                        : (c.spDb = new Map());
                    c.spDb.set(p, k + "");
                });
            }
        };
    vj.B = 0;
    var Dh,
        uj = [],
        nk,
        um;
    (function (a) {
        a[(a.BEGIN = 11359836e5)] = "BEGIN";
        a[(a.END = 41338908e5)] = "END";
    })(um || (um = {}));
    var cm;
    (function (a) {
        a.METHOD = "method";
        a.PARAMETER = "parameter";
    })(cm || (cm = {}));
    var dm = [0, 1, 2, 3],
        wl = class {
            setAutomaticActionDetection(a) {
                Hb(a, "boolean")
                    ? (1 < arguments.length && uc(), Ac("saad"), cd(a))
                    : Ob();
            }
            setLoadEndManually() {
                0 < arguments.length && uc();
                Ac("slem");
                eh = !0;
            }
            signalLoadEnd() {
                0 < arguments.length && uc();
                Ac("sle");
                Jk();
            }
            markAsErrorPage(a, c) {
                if (!Hb(a, "number") || !Hb(c, "string")) return Ob(), !1;
                2 < arguments.length && uc();
                Ac("maep");
                return Nk(a, c);
            }
            markXHRFailed(a, c, g) {
                if (!Hb(a, "number") || !Hb(c, "string") || !Zc(g, "number"))
                    return Ob(), !1;
                3 < arguments.length && uc();
                Ac("mxf");
                return Yd(a, c, +g || -1);
            }
            sendSignal() {
                Oc(
                    "method",
                    "sendSignal",
                    'This method is deprecated and has no functionality. Use "sendBeacon" instead.'
                );
            }
            sendBeacon(a, c, g) {
                Hb(a, "boolean") && Hb(c, "boolean") && Hb(g, "boolean")
                    ? ("undefined" !== typeof a &&
                          Oc(
                              "parameter",
                              "forceSync",
                              "This parameter has been deprecated and has no effect anymore. Beacons are always sent asynchronously."
                          ),
                      3 < arguments.length && uc(),
                      Ac("ss"),
                      Dc(c, g))
                    : Ob();
            }
            enterAction(a, c, g, k) {
                if (!Hb(a, "string") || !Zc(k, "string")) return Ob(), 0;
                c &&
                    Oc(
                        "parameter",
                        "actionType",
                        "This parameter is deprecated and has no effect anymore."
                    );
                5 < arguments.length && uc();
                Ac("ea");
                let p = g;
                if (p) {
                    if (!+p) return Ob(), 0;
                    p = Ab(p);
                }
                return vg(a, "", +p, !1, void 0, void 0, !0, k);
            }
            addEnterActionListener(a) {
                hb(a)
                    ? (1 < arguments.length && uc(), Ac("aeal"), Fg(a))
                    : Ob();
            }
            removeEnterActionListener(a) {
                if (hb(a)) {
                    1 < arguments.length && uc();
                    Ac("real");
                    const c = a.dtWF;
                    c && V("ACTION_ENTERED", c);
                } else Ob();
            }
            leaveAction(a, c, g) {
                if (Hb(a, "number") && Zc(c, "number") && Zc(g, "number")) {
                    3 < arguments.length && uc();
                    Ac("la");
                    var k = Wa(a);
                    if (k)
                        if (k.isCustomAction) {
                            (k = g) && (k = Ab(k));
                            var p = c;
                            p && (p = Ab(p));
                            yg(a, p, k);
                        } else
                            ze(
                                `"dtrum.leaveAction" can only be called for actions created by dtrum, and action with id of "${a}" is not a custom action!`
                            );
                    else Eh();
                } else Ob();
            }
            addLeaveActionListener(a) {
                hb(a)
                    ? (1 < arguments.length && uc(), Ac("alal"), kg(a))
                    : Ob();
            }
            removeLeaveActionListener(a) {
                if (hb(a)) {
                    1 < arguments.length && uc();
                    Ac("rlal");
                    const c = a.dtWF;
                    c && V("ACTION_LEFT", c);
                } else Ob();
            }
            addActionProperties(a, c, g, k, p) {
                if (
                    Hb(a, "number") &&
                    Zc(c, "object") &&
                    Zc(g, "object") &&
                    Zc(k, "object") &&
                    Zc(p, "object")
                ) {
                    5 < arguments.length && uc();
                    if (Wa(a)) return Ac("aap"), zc(a, c, g, k, p);
                    Eh();
                } else Ob();
            }
            reportError(a, c) {
                (("object" !== typeof a && "string" !== typeof a) || null === a
                    ? 0
                    : ("object" === typeof a && "message" in a) ||
                      "string" === typeof a) && Zc(c, "number")
                    ? (2 < arguments.length && uc(),
                      Ac("re"),
                      zh(a, c, !1, "0"))
                    : Ob();
            }
            identifyUser(a) {
                Hb(a, "string")
                    ? (1 < arguments.length && uc(),
                      Ac("iu"),
                      Kb()
                          ? ze("navigator.doNotTrack is enabled on the browser")
                          : (fh("rx_visittag", a, -1),
                            lb.dynatrace &&
                                "identifyUser" in lb.dynatrace &&
                                hb(lb.dynatrace.identifyUser) &&
                                lb.dynatrace.identifyUser(a)))
                    : Ob();
            }
            startThirdParty() {
                Oc(
                    "method",
                    "startThirdParty",
                    "This method is deprecated and has no functionality."
                );
            }
            stopThirdParty() {
                Oc(
                    "method",
                    "stopThirdParty",
                    "This method is deprecated and has no functionality."
                );
            }
            addPageLeavingListener(a) {
                hb(a)
                    ? (1 < arguments.length && uc(),
                      Ac("apll"),
                      ca("PAGE_LEAVING", function (c) {
                          a(c.detail);
                      }))
                    : Ob();
            }
            beginUserInput(a, c, g, k) {
                if (
                    (!xa(a) && !Hb(a, "string")) ||
                    !Hb(c, "string") ||
                    !Zc(g, "string") ||
                    !Zc(k, "number")
                )
                    return Ob(), {};
                4 < arguments.length && uc();
                Ac("bui");
                return Fc(a, c, g, k);
            }
            endUserInput(a) {
                (
                    "object" !== typeof a || null === a
                        ? 0
                        : "object" === typeof a &&
                          "name" in a &&
                          "info" in a &&
                          "title" in a
                )
                    ? (1 < arguments.length && uc(), Ac("eui"), ke(a))
                    : Ob();
            }
            enterXhrAction(a, c, g) {
                var k;
                if (!(k = !Hb(a, "string"))) {
                    a: {
                        for (const p in dm)
                            if (dm[p] === c) {
                                k = !0;
                                break a;
                            }
                        k = !1;
                    }
                    k = !k && !Zc(g, "string");
                }
                if (k) return Ob(), -1;
                k = c;
                2 === c &&
                    (Oc(
                        "parameter",
                        "xmode 2",
                        "xmode 2 is deprecated and will fallback to value of 1."
                    ),
                    (k = 1));
                3 < arguments.length && uc();
                g ||
                    ze(
                        "No XHR URL was provided, which will result in the request being marked as `/undefined` in the waterfall! In the future, this argument will be required!"
                    );
                Ac("exa");
                return le(a, k, g + "", !0);
            }
            leaveXhrAction(a, c) {
                if (Hb(a, "number") && Zc(c, "number")) {
                    2 < arguments.length && uc();
                    Ac("lxa");
                    var g = Cc(a);
                    g
                        ? g.isCustomAction
                            ? ((g = c) && (g = Ab(c)), Rf(a, g))
                            : ze(
                                  `"dtrum.leaveXhrAction" can only be called for actions created by dtrum, and action with id of "${a}" is not a custom action!`
                              )
                        : Eh();
                } else Ob();
            }
            enterXhrCallback(a) {
                Hb(a, "number")
                    ? (1 < arguments.length && uc(),
                      Cc(a) ? (Ac("exc"), oe(a)) : Eh())
                    : Ob();
            }
            leaveXhrCallback(a) {
                Hb(a, "number")
                    ? (1 < arguments.length && uc(),
                      Cc(a) ? (Ac("lxc"), pe(a)) : Eh())
                    : Ob();
            }
            signalOnLoadStart() {
                0 < arguments.length && uc();
                Ac("sols");
                qj();
            }
            incrementOnLoadEndMarkers() {
                0 < arguments.length && uc();
                Ac("iolem");
                pj();
            }
            signalOnLoadEnd() {
                0 < arguments.length && uc();
                Ac("sole");
                gi();
            }
            actionName(a, c) {
                if (!Hb(a, "string")) return Ob(), 2;
                if (!Zc(c, "number")) return Ob(), 3;
                2 < arguments.length && uc();
                Ac("an");
                return zd("an", ia(a), +c) ? 0 : 1;
            }
            endSession() {
                0 < arguments.length && uc();
                Ac("es");
                Qk();
            }
            now() {
                0 < arguments.length && uc();
                Ac("n");
                return cc();
            }
            enable() {
                0 < arguments.length && uc();
                Ac("e");
                Zi()
                    ? K({ kind: "OPT_IN_STATE_CHANGED", detail: !0 })
                    : ze(
                          "Call to dtrum.enable() had no effect since RUM JavaScript agent was already enabled or opt-in mode was not active!"
                      );
            }
            disable() {
                0 < arguments.length && uc();
                Ac("d");
                Mh()
                    ? K({ kind: "OPT_IN_STATE_CHANGED", detail: !1 })
                    : ze(
                          "Call to dtrum.disable() had no effect since RUM JavaScript agent was already disabled or opt-in mode was not active!"
                      );
            }
            addVisitTimeoutListener(a) {
                hb(a)
                    ? (1 < arguments.length && uc(), Ac("avtl"), th(a))
                    : Ob();
            }
            enableSessionReplay(a) {
                if (Hb(a, "boolean")) {
                    1 < arguments.length && uc();
                    Ac("esr");
                    var c = lb.dT_;
                    c && c.srel && c.srel(a);
                } else Ob();
            }
            disableSessionReplay() {
                0 < arguments.length && uc();
                Ac("dsr");
                const a = lb.dT_;
                a && a.srel && a.srdl();
            }
            getAndEvaluateMetaData() {
                0 < arguments.length && uc();
                Ac("gaemd");
                const a = lb.dT_;
                return a && a.gEMD && a.iRHCA ? a.gEMD() : [];
            }
            enablePersistentValues() {
                0 < arguments.length && uc();
                Ac("epv");
                Lj();
            }
            disablePersistentValues(a) {
                Hb(a, "boolean")
                    ? (1 < arguments.length && uc(), Ac("dpv"), kh(a))
                    : Ob();
            }
            registerPreDiffMethod(a) {
                if (hb(a)) {
                    1 < arguments.length && uc();
                    Ac("rpdm");
                    var c = lb.dT_;
                    c && c.srel && Array.isArray(c.srpdm) && c.srpdm.push(a);
                } else Ob();
            }
            sendSessionProperties(a, c, g, k) {
                if (
                    Zc(a, "object") &&
                    Zc(c, "object") &&
                    Zc(g, "object") &&
                    Zc(k, "object")
                )
                    return (
                        4 < arguments.length && uc(), Ac("ssp"), Xk(a, c, g, k)
                    );
                Ob();
            }
            reportCustomError(a, c, g, k) {
                if (
                    Hb(a, "string") &&
                    Hb(c, "string") &&
                    Zc(g, "string") &&
                    (Zc(k, "number") || Zc(k, "boolean"))
                )
                    if ((4 < arguments.length && uc(), Ac("rce"), a && c)) {
                        var p = [
                            ["type", a],
                            ["name", c],
                        ];
                        g && p.push(["hint", g + ""]);
                        Ld("_customerror_", p, k);
                    } else
                        ze(
                            "Key or value is missing but mandatory for 'reportCustomError' method!"
                        );
                else Ob();
            }
            enableManualPageDetection() {
                0 < arguments.length && uc();
                Ac("emvd");
                pd(3);
            }
            setPage(a) {
                if (
                    !(
                        "object" === typeof a &&
                        null !== a &&
                        "group" in a &&
                        "name" in a &&
                        Hb(a.name, "string")
                    ) ||
                    (a.group && !Hb(a.group, "string"))
                )
                    return Ob(), -1;
                1 < arguments.length && uc();
                Ac("sp");
                return Ne(a, 3);
            }
        },
        ok = [],
        pk,
        Pi,
        ag = !1,
        yj = !!lb.MutationObserver,
        Fh = lb.MutationObserver ? lb.MutationObserver : void 0,
        bg = {},
        mi = {},
        Gh = {},
        Qi = [],
        Ri = {},
        qk,
        Ti = {},
        aj;
    (function (a) {
        a.CONFIG = "config";
        a.GLOBAL_PROPERTIES = "globalProperties";
        a.ROUTER = "$router";
    })(aj || (aj = {}));
    var ll = [],
        Dj = [],
        rg = {},
        Ae,
        Xi,
        Jh,
        Td = {},
        Ej = null,
        ri = [],
        cg,
        Rj;
    (function (a) {
        a[(a.BEFORE_LOAD_ACTION_CLOSED = 0)] = "BEFORE_LOAD_ACTION_CLOSED";
        a[(a.BEFORE_LOAD_ACTION_SENT = 1)] = "BEFORE_LOAD_ACTION_SENT";
        a[(a.AFTER_LOAD_ACTION_SENT = 2)] = "AFTER_LOAD_ACTION_SENT";
    })(Rj || (Rj = {}));
    var hh = 0,
        gh = 0,
        ti,
        si,
        Fj = [],
        Hj,
        xk,
        Gj,
        Ij,
        jm,
        ih = [],
        ui = 0,
        Sl = ["click", "mousedown", "keydown", "touchstart"],
        b = 0,
        e = 0,
        l = void 0;
    (function () {
        var a, c;
        if ("documentMode" in document && !isNaN(document.documentMode))
            null === (a = window.console) ||
                void 0 === a ||
                a.log("Internet Explorer detected, agent will not initialize.");
        else if (
            ((a = !(null === (c = navigator.userAgent) || void 0 === c
                ? 0
                : c.includes("RuxitSynthetic"))),
            !lb.dT_ || !lb.dT_.ica)
        )
            lb.console.log("No initCode available, turning off asyncCore."),
                lb.dT_ && (lb.dT_.di = 2);
        else if ("initialized" in lb.dT_ && lb.dT_.initialized)
            lb.dT_.gCP ||
                lb.console.log(
                    "Duplicate agent injection detected, turning off redundant asyncCore."
                ),
                (lb.dT_.di = 1);
        else if (a) {
            if ((c = (a = lb.dT_) && a.gCP))
                (c = a.gCP()),
                    (a = +(nb.dT_.ncv("buildNumber") || X().version)),
                    (c = !(c && !isNaN(a) && +va() === a));
            c ||
                dg() ||
                (delete lb.dT_,
                lb.console.log("JsAgent asyncCore initialization failed!"));
        }
    })();
})();
(function () {
    function Na() {
        return Sa(this, void 0, void 0, function* () {});
    }
    function Sa(aa, Z, xa, P) {
        function sa(Ia) {
            return Ia instanceof xa
                ? Ia
                : new xa(function (L) {
                      L(Ia);
                  });
        }
        return new (xa || (xa = na))(function (Ia, L) {
            function S(ha) {
                try {
                    ja(P.next(ha));
                } catch (Aa) {
                    L(Aa);
                }
            }
            function ma(ha) {
                try {
                    ja(P["throw"](ha));
                } catch (Aa) {
                    L(Aa);
                }
            }
            function ja(ha) {
                ha.done ? Ia(ha.value) : sa(ha.value).then(S, ma);
            }
            ja((P = P.apply(aa, Z || [])).next());
        });
    }
    function eb(aa, Z = []) {
        var xa = Ka.dT_;
        xa = (null === xa || void 0 === xa ? 0 : xa.iIO) ? xa.iIO : null;
        return !(null === xa || void 0 === xa || !xa(aa, Z));
    }
    function Ta() {}
    function Fa(aa, Z, xa) {
        const P = {
            D: aa,
            gf: Z,
            ag: (sa) =>
                "fetch" === sa.initiatorType &&
                da.dT_.gto() + Math.round(sa.startTime) >= Z &&
                sa.name === da.dT_.tau(xa),
            ee: [],
            xd: void 0,
        };
        V.set(aa, P);
        return P;
    }
    function Ra(aa) {
        const Z = aa.D;
        var xa = aa.gf;
        const P = aa.mg,
            sa = aa.ee,
            Ia = aa.bestMatchingResource,
            L = aa.wf;
        xa &&
            P &&
            sa.length &&
            (Ia && sa.push(Ia),
            (xa = da.dT_.cbf(sa, xa, P, aa.xd)),
            (sa.length = 0),
            xa &&
                ((aa.bestMatchingResource = xa),
                da.dT_.uabmr(Z, xa),
                null === L || void 0 === L || L()));
    }
    function va(aa) {
        V.forEach(function (Z) {
            const xa = Z.ee,
                P = da.dT_.aFr(aa, Z.ag);
            xa.push(...P);
            Ra(Z);
        });
    }
    function Ja(aa) {
        return Sa(this, void 0, void 0, function* () {
            da.dT_.nw();
            try {
                yield new na(function (Z, xa) {
                    const P = da.dT_.st(xa, 1e3);
                    aa.wf = function () {
                        da.dT_.ct(P);
                        Z();
                        V.delete(aa.D);
                    };
                    Ra(aa);
                });
            } catch (Z) {}
        });
    }
    function Ha(aa, Z, xa) {
        if (!ca) return Na;
        const P = Fa(aa, Z, xa);
        return function (sa, Ia) {
            P.xd = Ia;
            P.mg = sa;
            return Ja(P);
        };
    }
    function bb() {
        (ca = !!Ka.PerformanceObserver) &&
            new PerformanceObserver(function (aa) {
                va(aa.getEntries());
            }).observe({ entryTypes: ["resource"] });
    }
    function $a(aa) {
        const Z = {};
        aa.forEach(function (xa, P) {
            Z[P] = xa;
        });
        return Z;
    }
    function ua(aa, Z) {
        function xa(ma) {
            const ja = ma.then;
            ma.then = da.dT_.wwi(function (ha, Aa) {
                var Ba = [];
                "function" === typeof ha &&
                    (Ba[0] = function (Wa) {
                        da.dT_.ec(Z.D);
                        var Va = Wa;
                        if (da.dT_.iIO(Va, 18)) {
                            var Mb = Z.D;
                            Z.status = Va.status;
                            Z.statusText = Va.statusText;
                            "headers" in Va &&
                                K.gEMD &&
                                K.iRHCA &&
                                K.iRHCA() &&
                                da.dT_.disE({
                                    kind: "HTTP_RESPONSE",
                                    detail: { a: Mb, h: $a(Va.headers) },
                                });
                            da.dT_.mx() &&
                                !Va.ok &&
                                ((Z.ja = !0),
                                (Z.ia = "abort"),
                                -1 === Va.status
                                    ? da.dT_.mxc(Mb)
                                    : da.dT_.mxf(Va.status, Va.statusText, Mb));
                        }
                        let ic;
                        try {
                            ic = X.onFulfilled(ha, this, arguments);
                        } finally {
                            da.dT_.lc(Z.D), P();
                        }
                        return ic;
                    });
                "function" === typeof Aa &&
                    (Ba[1] = function (Wa) {
                        da.dT_.ec(Z.D);
                        var Va = Wa;
                        da.dT_.mx() &&
                            da.dT_.iIO(Va, 7) &&
                            ((Z.ja = !0), da.dT_.mxg(Va.message, Z.D));
                        let Mb;
                        try {
                            Mb = X.onRejected(Aa, this, arguments);
                        } finally {
                            da.dT_.lc(Z.D), P();
                        }
                        return Mb;
                    });
                Ba = X.then(ja, this, Ba);
                xa(Ba);
                return Ba;
            }, ja);
        }
        function P() {
            L = da.dT_.nw();
            if (!Ia) {
                Ia = !0;
                var ma = da.dT_.nw();
                S(ma, Z.status).then(sa).catch(sa);
            }
        }
        function sa() {
            var ma,
                ja = da.dT_.gAA(Z.D);
            ja =
                null !==
                    (ma =
                        null === ja || void 0 === ja
                            ? void 0
                            : ja.bestMatchingResource) && void 0 !== ma
                    ? ma
                    : da.dT_.gRT(
                          Z.url,
                          "fetch",
                          Z.startTime,
                          da.dT_.nw(),
                          Z.status
                      );
            da.dT_.dlx(Z.D, L);
            da.dT_.disE({
                kind: "REQUEST_COMPLETED",
                detail: {
                    i: "fetch",
                    x: Z.url,
                    m: Z.config.method || "GET",
                    c: Z.status,
                    s: Z.statusText,
                    a: void 0,
                    e: void 0,
                    r:
                        (T && eb(ja, 13) && "navigation" !== ja.entryType) ||
                        eb(ja, ["_dtCl"])
                            ? ja
                            : void 0,
                    q: Z.startTime,
                    t: Z.ja,
                    o: Z.ia,
                    n: Z.Ta,
                },
            });
        }
        let Ia = !1,
            L;
        const S = Ha(Z.D, Z.startTime, Z.url);
        xa(aa);
    }
    function ka(...aa) {
        if (!aa.length) return X.fetch(pa, this, aa);
        aa = Array.prototype.slice.call(aa);
        var Z = "function" === typeof Ka.Request && da.dT_.iIO(aa[0], 17),
            xa = Z ? aa[0].url : aa[0];
        "object" === typeof xa && (xa = xa.toString());
        if (Z) Z = aa[0];
        else {
            Z = aa[1];
            var P = Ka.Headers ? new Ka.Headers() : {};
            Z ? Z.headers || (Z.headers = P) : (Z = { headers: P });
            aa[1] = Z;
        }
        P = da.dT_.nw();
        const sa = da.dT_.ex("fetch", 3, xa);
        da.dT_.disE({ kind: "REQUEST_STARTED", detail: { i: "fetch", x: xa } });
        aa = {
            url: xa,
            config: Z,
            xa: aa,
            D: sa,
            startTime: P,
            status: 0,
            statusText: "",
            ia: void 0,
            ja: !1,
            Ta: da.dT_.gtc(),
        };
        (aa.config.keepalive && da.dT_.bcv("dKAH")) ||
            da.dT_.sch(aa.config, aa.url, aa.D, void 0, aa.Ta);
        xa = X.fetch(pa, this, aa.xa);
        ua(xa, aa);
        xa.then(Ta, Ta);
        return xa;
    }
    var na = (this.dT_ && dT_.prm && dT_.prm()) || window.Promise,
        da = "undefined" !== typeof window ? window : self,
        Ka =
            "undefined" !== typeof globalThis
                ? globalThis
                : "undefined" !== typeof window
                ? window
                : void 0,
        T =
            "function" === typeof PerformanceResourceTiming ||
            "object" === typeof PerformanceResourceTiming,
        ca,
        V = new Map(),
        K,
        pa,
        X = {
            fetch: function (aa, Z, xa) {
                return K.aWF(aa, Z, xa);
            },
            then: function (aa, Z, xa) {
                return K.aWF(aa, Z, xa);
            },
            onFulfilled: function (aa, Z, xa) {
                return K.aWF(aa, Z, xa);
            },
            onRejected: function (aa, Z, xa) {
                return K.aWF(aa, Z, xa);
            },
        };
    (function () {
        var aa, Z;
        (K = Ka.dT_) &&
            (null === (Z = (aa = da.dT_).smbi) || void 0 === Z
                ? 0
                : Z.call(aa, "7")) &&
            Ka.fetch &&
            (bb(), (pa = Ka.fetch), (Ka.fetch = da.dT_.wwi(ka, pa)));
    })();
})();
(function () {
    function Na(ua) {
        var ka;
        null === (ka = $a.console) ||
            void 0 === ka ||
            ka.log(`${"[dynatrace]"} ${ua}`);
    }
    function Sa(ua) {
        return null === ua || "object" !== typeof ua
            ? !1
            : "[object Object]" === Object.prototype.toString.call(ua);
    }
    function eb(ua) {
        let ka = !1;
        for (const na in ua)
            Object.prototype.hasOwnProperty.call(ua, na) &&
                Ta(ua[na]) &&
                (Na(
                    `key "${na}" contains non-finite numbers: [${ua[na]}] which have been changed to null!`
                ),
                (ka = !0));
        return ka;
    }
    function Ta(ua) {
        if ("function" === typeof ua) ua = !0;
        else if (Array.isArray(ua)) {
            let ka = !1;
            for (const na of ua) Ta(na) && (ka = !0);
            ua = ka;
        } else ua = Sa(ua) ? eb(ua) : !("number" !== typeof ua || isFinite(ua));
        return ua;
    }
    function Fa(ua, ka) {
        const na = {};
        for (const Ka in ka)
            bb.dT_.oHOP(ka, Ka) &&
                ("dt" === Ka
                    ? Na('"dt" is a reserved property and will be discarded!')
                    : Ka.startsWith("dt.")
                    ? Na(
                          `"dt.*" is a reserved keyword as a property name. Key "${Ka}" will be discarded!`
                      )
                    : (na[Ka] = ka[Ka]));
        var da;
        ka = (null === (da = $a.performance) || void 0 === da ? 0 : da.now)
            ? Math.round(
                  1e6 *
                      ((performance.timeOrigin ||
                          performance.timing.navigationStart) +
                          $a.performance.now())
              )
            : 1e6 * Date.now();
        ua = Object.assign(
            Object.assign(
                Object.assign(
                    {
                        timestamp: ka,
                        ["event.kind"]: "RUM_EVENT",
                        ["event.provider"]: $a.location.hostname,
                    },
                    na
                ),
                ua
            ),
            {
                ["dt.rum.application.id"]: bb.dT_.scv("app"),
                ["dt.rum.sid"]: bb.dT_.gVI(),
                ["dt.rum.instance.id"]: bb.dT_.gVID(),
                ["dt.rum.schema_version"]: "1.2",
            }
        );
        eb(ua) && (ua["dt.rum.has_nfn_values"] = !0);
        return ua;
    }
    function Ra(ua) {
        const ka = bb.dT_.cB();
        bb.dT_.gBP().ar(ka, JSON.stringify(ua));
        bb.dT_.sB(ka, !1, !1, { contentType: "event", st: bb.dT_.nw() });
    }
    function va(ua) {
        return Sa(ua)
            ? !0
            : (Na("Provided attributes must be a JSON like object!"), !1);
    }
    function Ja(ua, ka) {
        if (!ua || "string" !== typeof ua)
            Na("Provided event type must be a non-empty string!");
        else if (va(ka)) {
            {
                const da = JSON.stringify(
                    Object.assign({ ["event.type"]: ua }, ka)
                );
                try {
                    var na = new $a.TextEncoder().encode(da).length;
                } catch (Ka) {
                    na = da.length;
                }
            }
            ua = Fa(
                {
                    ["event.type"]: ua,
                    ["event.kind"]: "BIZ_EVENT",
                    ["dt.rum.custom_attributes_size"]: na,
                },
                ka
            );
            Ra(ua);
        }
    }
    function Ha(ua, ka) {
        ua && "string" === typeof ua
            ? va(ka) && ((ua = Fa({ ["event.type"]: ua }, ka)), Ra(ua))
            : Na("Provided event name must be a non-empty string!");
    }
    this.dT_ && dT_.prm && dT_.prm();
    var bb = "undefined" !== typeof window ? window : self,
        $a =
            "undefined" !== typeof globalThis
                ? globalThis
                : "undefined" !== typeof window
                ? window
                : void 0;
    (function () {
        var ua, ka;
        if (
            $a.JSON &&
            $a.JSON.stringify &&
            $a.dT_ &&
            (null === (ka = (ua = bb.dT_).smbi) || void 0 === ka
                ? 0
                : ka.call(ua, "N"))
        ) {
            var na;
            (
                null === (na = $a.dynatrace) || void 0 === na
                    ? 0
                    : na.sendBizEvent
            )
                ? Object.assign($a.dynatrace, { sendBizEvent: Ja })
                : ($a.dynatrace = { sendEvent: Ha, sendBizEvent: Ja });
        }
    })();
})();
(function () {
    function Na(m, y, w, I) {
        function M(la) {
            return la instanceof w
                ? la
                : new w(function (ya) {
                      ya(la);
                  });
        }
        return new (w || (w = fa))(function (la, ya) {
            function La(sb) {
                try {
                    qb(I.next(sb));
                } catch (zb) {
                    ya(zb);
                }
            }
            function Pa(sb) {
                try {
                    qb(I["throw"](sb));
                } catch (zb) {
                    ya(zb);
                }
            }
            function qb(sb) {
                sb.done ? la(sb.value) : M(sb.value).then(La, Pa);
            }
            qb((I = I.apply(m, y || [])).next());
        });
    }
    function Sa(m, y = []) {
        var w = oa.dT_;
        w = (null === w || void 0 === w ? 0 : w.iIO) ? w.iIO : null;
        return !(null === w || void 0 === w || !w(m, y));
    }
    function eb(m) {
        return m && "IFRAME" === m.nodeName;
    }
    function Ta(m) {
        return m && "IMG" === m.nodeName;
    }
    function Fa() {
        return Hd;
    }
    function Ra(m, y, w) {
        if (!Bd[w]) {
            const I = new Image();
            y = { url: w, time: F.dT_.nw(), element: I, gi: y };
            bb(I, y, m);
            I.src = w;
            Bd[w] = I;
        }
        return Bd[w];
    }
    function va(m, y, w) {
        const I = Fc[y][w] || [];
        if (m.element) {
            const M = F.dT_.aFI(I, function (la) {
                return la.element === m.element;
            });
            0 <= M && I.splice(M, 1);
        }
        Ja(m, y, w);
    }
    function Ja(m, y, w) {
        Fc[y][w] || (Fc[y][w] = []);
        Fc[y][w].push(m);
    }
    function Ha(m, y, w) {
        y = Fc[y][w] || [];
        m = y.indexOf(m);
        0 <= m && y.splice(m, 1);
    }
    function bb(m, y, w) {
        Ja(y, 2, w);
        const I = () => {
                Ha(y, 2, w);
                m.removeEventListener("load", I);
                m.removeEventListener("error", M);
            },
            M = () => {
                Ha(y, 2, w);
                va(y, 1, w);
                m.removeEventListener("load", I);
                m.removeEventListener("error", M);
            };
        m.addEventListener("load", I);
        m.addEventListener("error", M);
    }
    function $a(m) {
        return (
            (Cd && Sa(m, 13) && "navigation" !== m.entryType) ||
            Sa(m, ["_dtCl"])
        );
    }
    function ua() {}
    function ka(m) {
        return m && 0 < m.width && 0 < m.height;
    }
    function na(m) {
        return (
            0 < m.left + m.width &&
            m.left < Ka() &&
            0 < m.top + m.height &&
            m.top < da()
        );
    }
    function da() {
        hd || (hd = oa.innerHeight || id.clientHeight);
        return Wc.bwsH || hd;
    }
    function Ka() {
        Qd || (Qd = oa.innerWidth || id.clientWidth);
        return Wc.bwsW || Qd;
    }
    function T(m) {
        const y = Ka(),
            w = da();
        return {
            top: 0,
            left: 0,
            width:
                Math.max(0, Math.min(m.left + m.width, y)) -
                Math.max(0, Math.min(m.left, y)),
            height:
                Math.max(0, Math.min(m.top + m.height, w)) -
                Math.max(0, Math.min(m.top, w)),
        };
    }
    function ca(m, y, w) {
        if (!w && V(m)) return !0;
        m = w || ja(y);
        (y =
            "hidden" === m.visibility ||
            "none" === m.display ||
            "0" === m.opacity ||
            "polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)" === m.clipPath) ||
            ((y = m.transform || ""),
            (m = !1),
            (w = y.indexOf("(")),
            0 < w &&
                ((y = y.substring(w + 1, y.length - 1).split(", ")),
                (m = "0" === y[0]),
                6 === y.length
                    ? (m = m || "0" === y[3])
                    : 16 === y.length &&
                      (m = m || "0" === y[5] || "0" === y[10])),
            (y = m));
        return y;
    }
    function V(m) {
        if (0 < Od && m.Wc >= Od) return m.Xc++, !0;
        m.Wc++;
        return !1;
    }
    function K(m) {
        return Math.ceil(m.width * m.height);
    }
    function pa(m, y, w, I, M, la = "") {
        try {
            if (!I && ((M = I = X(y, m.Ga, M)), !ka(M) || !na(M))) return null;
            M = I;
            const La = {
                url: la,
                time: 0,
                node: y,
                v: !ca(m, y, w),
                area: K(T(M)),
                offset: {
                    top: M.top,
                    left: M.left,
                    width: M.width,
                    height: M.height,
                },
                is: 0,
                ts: 1,
            };
            var ya = F.dT_.tau(la);
            (m = Ea) && m.test(ya) && (La.is = 2);
            return La;
        } catch (La) {}
        return null;
    }
    function X(m, y = new WeakMap(), w) {
        var I = F.dT_.gFId();
        var M = y.get(m);
        M || ((M = {}), y.set(m, M));
        if (M[I]) I = M[I];
        else {
            y = oa.pageYOffset;
            var la = m.clientTop,
                ya = oa.pageXOffset,
                La = m.clientLeft,
                Pa = 0,
                qb = 0;
            ha(m) && ((Pa = m.offsetWidth), (qb = m.offsetHeight));
            Pa = {
                top: 0,
                left: 0,
                offsetWidth: Pa,
                offsetHeight: qb,
                clientWidth: m.clientWidth,
                clientHeight: m.clientHeight,
            };
            if ("function" === typeof m.getBoundingClientRect)
                try {
                    var sb = m.getBoundingClientRect();
                    const zb = sb.left;
                    Pa.top = sb.top + y - la;
                    Pa.left = zb + ya - La;
                } catch (zb) {}
            I = M[I] = Pa;
        }
        M = I.top;
        sb = I.left;
        w && ((M += w.top), (sb += w.left));
        w = { top: M, left: sb, width: I.clientWidth, height: I.clientHeight };
        ha(m) && ((w.width = I.offsetWidth), (w.height = I.offsetHeight));
        return w;
    }
    function aa(m) {
        return m.area > Qa && m.v && 0 === m.is && 0 < m.time;
    }
    function Z(m, y) {
        for (const I of y) {
            var w = 0;
            y = I === m ? 2 : 0;
            aa(I) && (y = Math.max(y, 1));
            0 === y &&
                ((w = 0),
                I.v || (w += 1),
                I.area > Qa || (w += 2),
                0 !== I.is && (w += 4));
            I.relevance = y;
            I.ireason = w;
        }
    }
    function xa(m) {
        if (m.length)
            return F.dT_.red(
                m,
                function (y, w) {
                    return aa(w) && (!y || y.time <= w.time) ? w : y;
                },
                void 0
            );
    }
    function P() {
        const m = F.dT_.bcv,
            y = F.dT_.scv,
            w = F.dT_.ncv;
        var I = F.dT_.de(y("iub"));
        try {
            I && (Ea = new RegExp(I, "i"));
        } catch (M) {}
        mb = m("vcfi");
        tb = w("vcx");
        pb = w("tvc");
        Gb = y("uana");
        Xb = F.dT_.de(y("mb"));
        rb = w("vcit");
        Pc = 1e3 * w("oat");
        xc = m("fvdi");
        Od = w("vscl");
        Qa = w("vct");
        qd = m("ccNcss");
        de = m("vrt");
        pd = m("vcsb");
    }
    function sa(m) {
        for (let y = 0; y < Ic.length; y++)
            if (Ic[y] === m) {
                Ic.splice(y, 1);
                break;
            }
    }
    function Ia(m, y = !1) {
        const w = Ic.slice();
        Ic.length = 0;
        for (const I of w) I(m, y);
    }
    function L(m) {
        return (
            !!m &&
            "about:blank" !== m &&
            m !== location.href &&
            m !==
                location.href.substring(
                    0,
                    location.href.lastIndexOf("/") + 1
                ) &&
            m !== document.baseURI
        );
    }
    function S(m) {
        try {
            return (
                !!m.contentWindow &&
                !F.dT_.gNNTV(m.contentWindow.performance, "loadEventEnd")
            );
        } catch (y) {
            return !1;
        }
    }
    function ma(m) {
        return !!m.area;
    }
    function ja(m, y = oa) {
        return y.getComputedStyle(m);
    }
    function ha(m) {
        let y = ke.get(m);
        if (y) return y;
        y =
            (Sa(m, 9) || (m && m.nodeType && 1 === m.nodeType)) &&
            ("string" === typeof m.textContent ||
                "string" === typeof m.innerText);
        ke.set(m, y);
        return y;
    }
    function Aa() {
        const m = F.dT_.gto();
        return function (y, w) {
            const I = w.duration;
            let M = m + w.startTime + I;
            !I && $a(w) && (M = m + w.responseEnd);
            return Math.max(y, M);
        };
    }
    function Ba(m, y, w) {
        m &&
            ((m = {
                time: m.time,
                offset: m.offset,
                area: m.area,
                url: m.url,
                v: m.v,
                node: m.node,
                is: 0,
                ts: m.ts,
            }),
            m.v && (m.v = y),
            w.push(m));
    }
    function Wa(m) {
        let y;
        try {
            if (m && m.dT_) {
                const la = m.dT_;
                var w;
                if ((w = !!(la && "ea" in la))) {
                    var I;
                    if ((I = "10307250124095659" === la.version && !!la.gLVD)) {
                        var M = oa.dT_;
                        const ya =
                                !M.bcv("ac") || M.scv("app") === la.scv("app"),
                            La = M.scv("postfix"),
                            Pa = la.scv("postfix");
                        I = ya && La === Pa;
                    }
                    w = I;
                }
                w && (y = la);
            }
        } catch (la) {}
        return y;
    }
    function Va(m, y, w, I, M, la, ya) {
        return Na(this, void 0, void 0, function* () {
            var La = pa(m, y, w, I);
            La &&
                y.contentWindow &&
                ((La = yield Wb(m, y.contentWindow, La.offset, void 0, M)),
                F.dT_.fE(La, function (Pa) {
                    Pa.v = Pa.v && la;
                    ya.push(Pa);
                }));
        });
    }
    function Mb(m, y, w) {
        const I = m.gLVD();
        return I
            ? (Ba(I.k, y, w), fa.resolve())
            : new fa(function (M) {
                  m.addE("VISUALLY_COMPLETE", function (la) {
                      Ba(la.detail.k, y, w);
                      M();
                  });
              });
    }
    function ic(m, y, w, I, M, la, ya = !1) {
        return new fa(function (La, Pa) {
            var qb = !1;
            let sb;
            V(m) || (sb = ja(y, w));
            var zb = sb && sb.backgroundImage;
            if (zb && "none" !== zb) {
                zb = F.dT_.aM(zb.split(","), ec);
                zb = F.dT_.aFr(zb, wb);
                for (var jc of zb)
                    (zb = pa(m, y, sb, la, I, F.dT_.tau(jc))) && M.push(zb);
            }
            if (eb(y)) {
                const Qc = y.contentWindow;
                qb = () => {
                    var jd = sb;
                    const kd = Wa(Qc),
                        Dd = !ca(m, y) && na(la);
                    (kd ? Mb(kd, Dd, M) : Va(m, y, jd, la, ya, Dd, M))
                        .then(La)
                        .catch(Pa);
                };
                !ya && S(y)
                    ? (y.addEventListener("load", qb),
                      y.addEventListener("error", qb))
                    : qb();
                qb = !0;
            }
            Ta(y) &&
                (jc = fb(y)) &&
                (jc = pa(m, y, sb, la, I, jc)) &&
                M.push(jc);
            qb || La();
        });
    }
    function Yb(m, y, w, I, M) {
        return Na(
            this,
            arguments,
            void 0,
            function* (la, ya, La, Pa, qb, sb = !1) {
                try {
                    const zb = X(ya, la.Ga),
                        jc = La.getComputedStyle(ya);
                    if (
                        ha(ya)
                            ? ya.offsetWidth * ya.offsetHeight > Qa
                            : ya.clientWidth * ya.clientHeight > Qa
                    )
                        ka(zb) &&
                            na(zb) &&
                            (yield ic(la, ya, La, Pa, qb, zb, sb));
                    else if (
                        F.dT_.iIO(ya, 10) ||
                        (jc.backgroundImage && "none" !== jc.backgroundImage)
                    )
                        yield ic(la, ya, La, Pa, qb, zb, sb);
                } catch (zb) {}
            }
        );
    }
    function U(m) {
        return Pd ? gc(1, m).concat(gc(2, m)) : [];
    }
    function db(m) {
        return function (y) {
            var w = F.dT_.gto();
            const I = y.time - w;
            w = (y.endTime || y.time) - w;
            return {
                name: y.url,
                failedResource: m,
                startTime: I,
                responseEnd: w,
                duration: w - I,
                _dtCl: !0,
            };
        };
    }
    function gc(m, y) {
        const w = F.dT_.aM(Fc[m][y] || [], db(m));
        y ? delete Fc[m][y] : (Fc[m] = {});
        return w;
    }
    function rc(m) {
        return !m.time;
    }
    function tc(m, y, w) {
        m = m.getEntriesByName(w.url, "resource")[0];
        $a(m)
            ? ((w.time = Math.round(y + m.responseEnd)), (w.ts = 0))
            : (w.time = 0);
    }
    function nc(m, y) {
        let w = null,
            I = 0;
        try {
            (w = y.performance), (I = F.dT_.gNTO(w));
        } catch (M) {}
        w && ((m = F.dT_.aFr(m, rc)), F.dT_.fE(m, tc.bind(null, w, I)));
    }
    function wb(m) {
        return !(!m || !m.startsWith("http"));
    }
    function Rb(m, y) {
        return (
            "loading" in HTMLImageElement.prototype &&
            "lazy" === m.getAttribute("loading") &&
            !na(X(m, y))
        );
    }
    function fb(m) {
        try {
            if (m.srcset) return m.currentSrc;
            const y = m.parentElement;
            if (y && "PICTURE" === y.nodeName)
                for (let w = 0; w < y.children.length; w++)
                    if ("SOURCE" === y.children[w].tagName) return m.currentSrc;
            return m.currentSrc || m.src;
        } catch (y) {
            try {
                const w = m.getAttribute("src");
                return w ? F.dT_.tau(w) : "";
            } catch (w) {
                return "";
            }
        }
    }
    function Wb(m, y, w, I) {
        return Na(this, arguments, void 0, function* (M, la, ya, La, Pa = !1) {
            const qb = [];
            let sb;
            try {
                sb = (La || la.document).getElementsByTagName("*");
            } catch (zb) {
                return qb;
            }
            yield F.dT_.fEP(
                sb,
                function (zb, jc, Qc, jd) {
                    Yb(M, zb, la, ya, qb, Pa).then(jd).catch(ua);
                },
                void 0,
                !(Nc.syn || Pa)
            );
            nc(qb, la);
            return qb;
        });
    }
    function Pb(m, y, w, I) {
        const M = { Dd: [], style: void 0 };
        if ((!w && !qd) || V(I)) return M;
        w = ja(m);
        if (!w) return M;
        M.style = w;
        (w = w.backgroundImage) &&
            "none" !== w &&
            ((w = F.dT_.aM(w.split(","), ec)),
            (w = F.dT_.aFr(F.dT_.aFr(w, wb), L)),
            (M.Dd = F.dT_.aM(w, Ra.bind(null, y, m))));
        return M;
    }
    function ec(m = "") {
        wd.lastIndex = 0;
        return (m = wd.exec(m)) && 1 < m.length ? m[1] || m[2] || m[3] : "";
    }
    function bc(m, y, w, I) {
        if (mb && !m.dT_vcInstr && !Rb(m, I.Ga))
            if (Ta(m)) {
                if (((w = fb(m)), L(w) && wb(w))) {
                    w = { url: w, time: F.dT_.nw(), element: m };
                    m.dT_vcInstr = !0;
                    a: if (m.complete && !m.naturalWidth) {
                        if (F.dT_.gBI().ff) {
                            let M = (I = fb(m));
                            const la = I.indexOf("?");
                            0 <= la && (M = I.substring(0, la));
                            if (M.endsWith(".svg")) {
                                I = "UNKNOWN";
                                break a;
                            }
                        }
                        I = "FAILED";
                    } else I = m.complete ? "SUCCESSFUL" : "PENDING";
                    switch (I) {
                        case "FAILED":
                            va(w, 1, y);
                            break;
                        case "PENDING":
                            bb(m, w, y);
                    }
                }
            } else ha(m) && Pb(m, y, w, I);
    }
    function Bb(m, y, w, I) {
        const M = y.contentWindow;
        if (!M) return fa.resolve();
        const la = Wa(M),
            ya = !ca(m, y) && na(I);
        return la
            ? Mb(la, ya, m.oa)
            : Wb(m, M, w).then(function (La) {
                  m.oa.push(
                      ...F.dT_.aM(La, function (Pa) {
                          return Object.assign(Object.assign({}, Pa), {
                              v: Pa.v && ya,
                          });
                      })
                  );
              });
    }
    function D() {
        Ia("f", !0);
        return Jd;
    }
    function R() {
        const m = Nc;
        m.gUI = U;
        m.vWW = Ka;
        m.vWH = da;
        m.gVCP = D;
        m.gLVD = Fa;
    }
    function Ma(m) {
        let y = 0,
            w = 0,
            I = 0;
        const M = F.dT_.red(
            m,
            function (la, ya) {
                return la + ya.rc;
            },
            0
        );
        for (const la of m)
            (m = la.time - w),
                0 < m && 1 > I && (y += (1 - I) * m),
                (I += la.rc / M),
                (w = la.time);
        return Math.round(y);
    }
    function ea(m, y, w) {
        const I = [];
        for (const M in m)
            if (F.dT_.oHOP(m, M)) {
                const la = m[M].eb;
                I.push({ time: +M - w, rc: la / y, eb: la });
            }
        I.sort(function (M, la) {
            return M.time - la.time;
        });
        return I;
    }
    function gb(m) {
        return m.v;
    }
    function kb(m, y) {
        var w;
        const { time: I, area: M } = y;
        null !== (w = m[I]) && void 0 !== w
            ? w
            : (m[I] = { eb: 0, rc: 0, time: 0 });
        m[I].eb += M;
        return m;
    }
    function ab(m) {
        m.Xa--;
        r(m);
    }
    function ob(m, y) {
        var w = -1;
        if (y) {
            w = Math;
            var I = y.time;
            w = w.round.call(w, 0 > I ? -1 : I - m.bb);
            w >= Pc ? ((m.trigger = "t"), (w = -2)) : 0 > w && (w = -1);
            if ((I = y.node)) {
                var M = y.area,
                    la = { left: NaN, top: NaN };
                try {
                    la = I.getBoundingClientRect();
                } catch (qb) {}
                var ya = Gb.split(",");
                M = {
                    location: { x: Math.ceil(la.left), y: Math.ceil(la.top) },
                    size: Math.ceil(M),
                    uh: I.getAttribute("class"),
                    id: I.getAttribute("id"),
                    name: I.getAttribute("name"),
                    tagName: I.tagName,
                    Bf: F.dT_.gecsss(I),
                };
                for (var La of ya)
                    if ((ya = I.getAttribute(La))) {
                        M.Eg = { key: La, value: ya };
                        break;
                    }
                var Pa = M;
                Pa
                    ? ((La = Pa.Eg),
                      (M = Pa.location),
                      (la = Pa.size),
                      (I = Pa.tagName),
                      (ya = Pa.Bf),
                      (Pa = F.dT_.aesc(Pa.name || "")),
                      (M = [M.x, M.y, la]),
                      Pa && M.push(`n;${Pa}`),
                      La &&
                          M.push(
                              `u;${F.dT_.aesc(La.key)},${F.dT_.aesc(La.value)}`
                          ),
                      ya
                          ? M.push(`s;${F.dT_.aesc(ya)}`)
                          : M.push(`t;${F.dT_.aesc(I)}`),
                      (La = M.join("|")))
                    : (La = "");
                y.kd = La;
            }
            m.Vf && (Pd = !0);
        }
        return w;
    }
    function v(m, y, w) {
        const I = F.dT_.nw() - y.Ed;
        var M = F.dT_.nw(),
            la = F.dT_.aFr(y.oa, ma);
        var ya = y.bb;
        F.dT_.nw();
        for (let jc = la.length - 1; 0 < jc; jc--) {
            const Qc = la[jc];
            for (let jd = jc - 1; 0 <= jd; jd--) {
                const kd = la[jd],
                    Dd = kd.area,
                    Fe = Qc.area;
                if (Fe && Dd && 2500 < Dd) {
                    var La = Qc.offset,
                        Pa = kd.offset,
                        qb = wc(La.top, Pa.top),
                        sb = wc(La.left, Pa.left),
                        zb = cd(La.left + La.width, Pa.left + Pa.width);
                    La = cd(La.top + La.height, Pa.top + Pa.height);
                    sb = wc(0, zb - sb);
                    qb = wc(0, La - qb);
                    kd.area = wc(0, Dd - cd(Math.round(sb * qb), Fe));
                }
            }
        }
        la = F.dT_.aFr(la, gb);
        la = F.dT_.red(la, kb, {});
        ya = ea(la, Ka() * da(), ya);
        Kd = Ma(ya);
        Kd > m && (Kd = m);
        F.dT_.nw();
        ya = Kd;
        M = F.dT_.nw() - M;
        m = [
            ["V", m + "|" + y.trigger],
            ["VCD", I + ""],
            ["VCDS", M + ""],
            ["VCS", y.Ed - y.bb + ""],
            ["VCO", y.me - y.bb + ""],
            ["VCI", y.Xc + ""],
        ];
        w && m.push(["TS", w.ts + ""]);
        (w = (null === w || void 0 === w ? void 0 : w.kd) || "") &&
            m.push(["VE", w]);
        m.push(["S", (0 <= ya ? ya : -1) + ""]);
        F.dT_.cAE("_vc_", m, y.D, y.bb);
    }
    function z(m) {
        "n" === m.trigger && (m.trigger = m.Pa ? "f" : "c");
        m.oa.sort(function (M, la) {
            return M.time - la.time;
        });
        const y = xa(m.oa),
            w = ob(m, y);
        v(w, m, y);
        Z(y, m.oa);
        Jd = w;
        const I = { t: m.trigger, k: y, v: w };
        Hd = I;
        F.dT_.disE({
            kind: "VISUALLY_COMPLETE",
            detail: Object.assign(Object.assign({}, I), { a: m.D, e: m.oa }),
        });
        y && (y.node = null);
        m.oa = [];
        sa(m.Pd);
        m.Sd = !0;
        m.ng(-1 < w ? m.bb + w : -1);
    }
    function r(m) {
        const y = m.Ld === m.Nd,
            w = !m.Xa;
        y && w && m.sa && (F.dT_.ct(m.sa), (m.sa = 0));
        !m.Sd && w && ((!m.Ab.length && y) || m.Pa) && z(m);
    }
    function G() {
        let m = !1;
        mb &&
            F.dT_.addE("INSTRUMENTATION_TRIGGERED", function () {
                if (!m) {
                    m = !0;
                    const y = document.getElementsByTagName("*"),
                        w = { Wc: 0, Xc: 0, Ga: new WeakMap() };
                    for (let I = 0; I < y.length; I++)
                        bc(y[I], F.dT_.lAID(), !0, w);
                }
            });
    }
    function J() {
        var m;
        ke = new WeakMap();
        G();
        Rd = !(
            null === (m = document.body) ||
            void 0 === m ||
            !m.childElementCount
        );
        F.dT_.las() || F.dT_.aMO(F.dT_.lAID());
        F.dT_.addE("ACTION_ENTERED", function (y) {
            F.dT_.aMO(y.detail.i);
            y.detail.i === y.detail.r && Ia("u");
        });
        F.dT_.addE("ACTION_CLOSED", function (y) {
            const { i: w, r: I, f: M, a: la, dne: ya } = y.detail;
            if (ya || I !== w) F.dT_.rMO(w);
            else {
                var La = (sb, zb) => {
                    Lc(sb, w, zb) || (F.dT_.ct(Pa), ia(w, !0, la, La, qb, sb));
                };
                y = !("visible" === document.visibilityState || !pd);
                Ic.push(La);
                var { sa: Pa, Pe: qb } = ia(
                    w,
                    M || y,
                    la,
                    La,
                    void 0,
                    y ? "b" : void 0
                );
            }
        });
        F.dT_.addE("ACTION_BEACON_FORCED", function () {
            Ia(F.dT_.las() ? "l" : "f");
        });
        F.dT_.addE("VISIBILITY_CHANGED", function (y) {
            "1" === y.detail && Ia("b");
        });
    }
    function ia(m, y, w, I, M, la) {
        const ya = M || F.dT_.aAWC(m);
        if (!ya) return gd;
        if (!y)
            return {
                sa: F.dT_.st(function () {
                    Qb(m, ya, !1, w, I, la);
                }, tb),
                Pe: ya,
            };
        Qb(m, ya, !0, w, I, la);
        return gd;
    }
    function ta(m, y) {
        return function (w) {
            w = y + w.time;
            return !m || m <= w;
        };
    }
    function Da(m, y, w, I, M) {
        var la = I.push;
        a: {
            if ((w || !m.kc.has(M)) && M.nodeType !== Node.TEXT_NODE && ha(M)) {
                var ya = Pb(M, m.D, w, m),
                    La = ya.Dd;
                Ta(M) ? (bc(M, m.D, w, m), La.push(M)) : eb(M) && La.push(M);
                if ((w = M && M.nodeType && 1 === M.nodeType))
                    try {
                        const qb = Xb;
                        w = !!qb && M.matches(qb);
                    } catch (qb) {
                        w = !1;
                    }
                if (La.length && !w)
                    for (const qb of La) Cc(qb, m, y, M, ya.style);
                else
                    (La = X(M, m.Ga)),
                        (La = K(T(La))),
                        ib(m, {
                            time: Math.round(y),
                            node: M,
                            area: La,
                            v: !ca(m, M, ya.style),
                            url: "",
                            offset: { top: 0, left: 0, width: 0, height: 0 },
                            is: w ? 1 : 0,
                            ts: 1,
                        });
                try {
                    if (M.hasChildNodes()) {
                        var Pa = M.childNodes;
                        break a;
                    }
                } catch (qb) {}
            }
            Pa = [];
        }
        la.call(I, Pa);
    }
    function yb(m, y) {
        return Na(this, void 0, void 0, function* () {
            const w = !y.Pa,
                [I] = F.dT_.gXACT(y.D);
            let M = m;
            I && (M = yield F.dT_.fP(m, ta(I, F.dT_.gto()), w));
            yield F.dT_.fEP(
                M,
                function (la, ya, La, Pa) {
                    const qb = [],
                        sb = la.time;
                    F.dT_
                        .fEP(la.nodes, Da.bind(null, y, sb, !0, qb), sb, w)
                        .then(function () {
                            return F.dT_.fEP(
                                qb,
                                function (zb, jc, Qc, jd) {
                                    F.dT_
                                        .fEP(
                                            zb,
                                            Da.bind(null, y, sb, !1, qb),
                                            null,
                                            w,
                                            !0
                                        )
                                        .then(jd)
                                        .catch(ua);
                                },
                                null,
                                w,
                                !0
                            );
                        })
                        .then(Pa)
                        .catch(ua);
                },
                null,
                w,
                !0
            );
            return y;
        });
    }
    function Fb(m, y, w) {
        F.dT_.ct(m.hb);
        F.dT_.ct(m.zb);
        F.dT_.rMO(`vc-timeout-${y}`);
        m.hb = -1;
        m.zb = -1;
        Jb(y, w, !0);
    }
    function Kb(m, y) {
        const w = { zb: -1, hb: -1 };
        w.zb = F.dT_.st(function () {
            Fb(w, m, y);
        }, pb);
        Cb(m, y, w);
        F.dT_.aMO(`vc-timeout-${m}`, function () {
            Cb(m, y, w);
        });
        return w;
    }
    function Cb(m, y, w) {
        F.dT_.ct(w.hb);
        w.hb = F.dT_.st(function () {
            Fb(w, m, y);
        }, rb);
    }
    function Jb(m, y, w) {
        return Na(this, void 0, void 0, function* () {
            const I = F.dT_.gMN(m);
            F.dT_.rMO(m);
            y.me = F.dT_.nw();
            y.Xa++;
            if (w && (Rd || xc)) {
                y.Xa++;
                const M = yield Wb(y, oa, void 0, void 0, y.Pa);
                F.dT_.fE(M, ib.bind(null, y));
                ab(y);
            } else I.length || r(y);
            yield yb(I, y);
            ab(y);
        });
    }
    function ib(m, y) {
        var w = y.node;
        if (w) {
            if (m.kc.has(w)) {
                (w = m.kc.get(w)) && y.time > m.oa[w].time && (m.oa[w] = y);
                return;
            }
            m.kc.set(w, m.oa.length);
        }
        m.oa.push(y);
    }
    function Qb(m, y, w, I, M, la = "n") {
        sa(M);
        M = F.dT_.lAID() === m;
        const ya = {
            bb: I,
            Ld: 0,
            Nd: 0,
            Xa: 0,
            Sd: !1,
            Ed: F.dT_.nw(),
            me: 0,
            sa: F.dT_.st(function () {
                ya.Pa = !0;
                ya.Xa = 0;
                r(ya);
            }, Pc),
            Ab: [],
            Af: [],
            oa: [],
            kc: new WeakMap(),
            Vf: M,
            ng: y,
            D: m,
            trigger: la,
            Pa: w,
            Wc: 0,
            Xc: 0,
            Ga: new WeakMap(),
            Pd(Pa, qb) {
                Lc(Pa, m, qb) ||
                    ((ya.Pa = !0),
                    (ya.Xa = 0),
                    (ya.trigger = Pa),
                    0 <= La.hb && 0 <= La.zb && Fb(La, m, ya),
                    r(ya));
            },
        };
        if ("b" === la) r(ya);
        else {
            var La = { hb: -1, zb: -1 };
            Ic.push(ya.Pd);
            M && !w ? (La = Kb(m, ya)) : Jb(m, ya, M);
        }
    }
    function Lc(m, y, w) {
        return y !== F.dT_.lAID() && (w || "u" === m);
    }
    function pc(m, y, w, I, M, la, ya) {
        const La = F.dT_.tau(m);
        var Pa = Ea;
        Pa = La && Pa && Pa.test(La);
        const qb = K(T(I)),
            sb = {
                url: La,
                time: Math.round(y),
                node: w,
                v: !ca(M, w, ya),
                area: qb,
                offset: I,
                is: Pa ? 2 : 0,
                ts: 1,
            };
        ib(M, sb);
        I = Ta(w);
        ya = eb(w);
        m = (I && !w.complete && !m.startsWith("data:")) || (ya && S(w));
        M.Ld++;
        M.Ab.push({ name: sb.url, startTime: y });
        if (!m || M.Pa || Pa) (I || ya) && zd(w, M, sb, la, !0);
        else {
            const zb = () => {
                M.Ga.delete(w);
                zd(w, M, sb, la, !1);
                w.removeEventListener("load", zb);
                w.removeEventListener("error", zb);
            };
            w.addEventListener("load", zb);
            w.addEventListener("error", zb);
        }
    }
    function md(m) {
        return (
            m.currentSrc ||
            m.getAttribute("src") ||
            m.getAttribute("href") ||
            ""
        );
    }
    function Ec(m, y, w, I, M) {
        var la = Ea;
        la = (m = F.dT_.tau(m)) && la && la.test(m);
        const ya = M === y;
        return {
            url: m,
            time: Math.round(w),
            node: y,
            v: !1,
            area: 0,
            offset: I,
            is: la ? 2 : 0,
            w: ya ? y.width : M.clientWidth,
            h: ya ? y.height : M.clientHeight,
            nw: ya ? y.naturalWidth : y.width,
            nh: ya ? y.naturalHeight : y.height,
            ts: 1,
        };
    }
    function Cc(m, y, w, I, M) {
        const la = md(m);
        if (
            L(la) &&
            !Rb(m, y.Ga) &&
            !y.Ab.some(function (La) {
                return La.name === la;
            })
        ) {
            var ya = X(I, y.Ga);
            (Ta(m) && !m.width) || (ka(ya) && na(ya))
                ? (na(ya) || Ta(m)) && pc(la, w, m, ya, y, I, M)
                : Ta(m) && y.oa.push(Ec(la, m, w, ya, I));
        }
    }
    function Gd(m, y, w, I) {
        var M = [{ ld: m.ts, time: m.time }];
        !I && de
            ? M.push({ ld: 2, time: y })
            : ((y = Math.round(F.dT_.red(w, Aa(), 0))),
              0 < y && M.push({ ld: 0, time: y }));
        [M] = M.sort(Sc);
        m.time = M.time;
        m.ts = M.ld;
    }
    function zd(m, y, w, I, M) {
        var la = oa.performance;
        const ya = w.url,
            La = F.dT_.nw();
        Gd(w, La, la.getEntriesByName(ya, "resource"), M);
        M || (w.o = La);
        la = T(X(I || m, y.Ga));
        w.area = K(la);
        w.node = I;
        if (Ta(m)) {
            const Pa = I === m;
            w.w = Pa ? m.width : I.clientWidth;
            w.h = Pa ? m.height : I.clientHeight;
            w.nw = Pa ? m.naturalWidth : m.width;
            w.nh = Pa ? m.naturalHeight : m.height;
        }
        y.Nd++;
        I = F.dT_.aFI(y.Ab, function (Pa) {
            return Pa.name === ya;
        });
        -1 !== I &&
            ((I = y.Ab.splice(I, 1)[0]),
            y.Af.push(I.name),
            M &&
                y.Pa &&
                va(
                    {
                        time: I.startTime,
                        url: I.name,
                        isVisible: aa(w),
                        element: w.node,
                        endTime: La,
                    },
                    2,
                    y.D
                ),
            eb(m) &&
                (y.Xa++,
                Bb(y, m, w.offset, la).then(ab.bind(null, y)).catch(ua)),
            r(y));
    }
    function Sc(m, y) {
        return y.time - m.time;
    }
    function H(m) {
        const { i: y, a: w, r: I } = m.detail;
        I === y &&
            F.dT_.cAE(
                "_vc_",
                [
                    ["V", "-3"],
                    ["S", "-3"],
                ],
                y,
                w
            );
    }
    var fa = (this.dT_ && dT_.prm && dT_.prm()) || window.Promise,
        F = "undefined" !== typeof window ? window : self,
        oa =
            "undefined" !== typeof globalThis
                ? globalThis
                : "undefined" !== typeof window
                ? window
                : void 0,
        za;
    (function (m) {
        m.ANCHOR = "A";
        m.BUTTON = "BUTTON";
        m.FORM = "FORM";
        m.I_FRAME = "IFRAME";
        m.IMAGE = "IMG";
        m.INPUT = "INPUT";
        m.LABEL = "LABEL";
        m.LINK = "LINK";
        m.OPTION = "OPTION";
        m.SCRIPT = "SCRIPT";
        m.SELECT = "SELECT";
        m.STYLE = "STYLE";
        m.TEXT_AREA = "TEXTAREA";
    })(za || (za = {}));
    var Qa = -1,
        Ea = null,
        mb = !1,
        tb = -1,
        pb = -1,
        Gb = "",
        Xb = "",
        rb = -1,
        Pc = -1,
        xc = !1,
        qd = !1,
        Od = 0,
        de = !1,
        pd = !1,
        Pd = !1,
        Nc,
        Wc,
        Jd,
        Hd,
        Bd = {},
        Fc = { [1]: {}, [2]: {} },
        Cd =
            "function" === typeof PerformanceResourceTiming ||
            "object" === typeof PerformanceResourceTiming,
        Ic = [],
        id = oa.document.documentElement,
        hd,
        Qd,
        ke,
        wd =
            /url\s*\(\s*(?:'(\S*?)'|"(\S*?)"|((?:\\\s|\\\)|\\"|\\'|\S)*?))\s*\)/gi,
        xd;
    (function (m) {
        m.FAILED = "FAILED";
        m.PENDING = "PENDING";
        m.SUCCESSFUL = "SUCCESSFUL";
        m.UNKNOWN = "UNKNOWN";
    })(xd || (xd = {}));
    var cd = Math.min,
        wc = Math.max,
        Kd = -1,
        Rd,
        gd = { sa: 0, Pe: void 0 };
    (function () {
        var m,
            y,
            w = oa.dT_;
        if (w && w.smbi && w.iMod) {
            Nc = w;
            (w = F.dT_.tdto()) && "ea" in w && (Wc = w);
            w = F.dT_.iMod().includes("V");
            const M = F.dT_.smbi("V");
            var I = oa.performance;
            const la = Wc.syn;
            I =
                (!!oa.MutationObserver &&
                    !(null === I || void 0 === I || !I.getEntriesByType)) ||
                la;
            if (
                null === (y = (m = F.dT_).ssmbi) || void 0 === y
                    ? 0
                    : y.call(m, "V", !1, I, M)
            )
                return (
                    w || F.dT_.iMod("V"),
                    P(),
                    F.dT_.addE && F.dT_.addE("CONFIG_UPDATE", P),
                    J(),
                    !0
                );
            !M || w || I || F.dT_.addE("ACTION_BEFORE_SEND", H);
        }
        return !1;
    })() && R();
})();
(function () {
    function Na(T, ca) {
        function V(pa) {
            return !(!pa || !pa[T]);
        }
        let K = 0;
        if (ca) {
            const pa = document.getElementById(ca);
            if (V(pa)) return pa;
            Ja.dT_.addE("DEBUG_INFO_REQUESTED", function () {
                return [
                    {
                        type: "mvi",
                        severity: "Info",
                        text: `Could not find vue element with configured id "${ca}"`,
                    },
                ];
            });
        }
        return V(document.body)
            ? document.body
            : V(document.body.firstElementChild)
            ? document.body.firstElementChild
            : document
                  .createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
                      acceptNode: function (pa) {
                          K++;
                          return V(pa) || 50 === K
                              ? NodeFilter.FILTER_ACCEPT
                              : NodeFilter.FILTER_SKIP;
                      },
                  })
                  .nextNode();
    }
    function Sa(T) {
        let ca;
        if (Ha.Vue && Ha.Vue.version) {
            var V = Ha.Vue.version;
            "2" === V.split(".")[0] && "__vue__" === T && (ca = V);
            "3" === V.split(".")[0] && "__vue_app__" === T && (ca = V);
        }
        (V = Na(T, Ja.dT_.scv("vrei"))) &&
            V[T] &&
            (Ja.dT_.iVRA(V, T), ca || (ca = ""));
        return ca;
    }
    function eb(T) {
        let ca = Ha;
        for (const V of T)
            if ("function" === typeof V) ca = V.apply(this);
            else {
                T = V.split(".");
                ca = Ha;
                for (
                    let K = 0;
                    K < T.length && "undefined" !== typeof ca && null != ca;
                    K++
                )
                    ca =
                        -1 === T[K].indexOf("()")
                            ? ca[T[K]]
                            : ca[T[K].replace("()", "")]();
                if ("undefined" !== typeof ca) break;
            }
        return ca;
    }
    function Ta() {
        var T = Array.prototype,
            ca = T.concat;
        const V = [];
        for (var K in Ka)
            if (Ja.dT_.oHOP(Ka, K))
                try {
                    var pa = Ka[K];
                    "object" !== typeof pa && ((pa = []), (pa[0] = Ka[K]));
                    var X = eb(pa);
                    if ("string" === typeof X || Ja.dT_.iIO(X, 3))
                        V.push(K + ("b" === K ? X : X.split(/-|_| /)[0]));
                    else if ("object" === typeof X && X.length) {
                        var aa = X.length;
                        for (let Z = 0; Z < aa; Z++) V.push(K + X[Z]);
                    } else void 0 !== X && V.push(K + "x");
                } catch (Z) {}
        K = [];
        for (const Z in na)
            if (Ja.dT_.oHOP(na, Z))
                if (na[Z].startsWith("url"))
                    for (
                        pa = na[Z].replace("url:", ""),
                            X = document.getElementsByTagName("script"),
                            aa = 0;
                        aa < X.length;
                        aa++
                    )
                        try {
                            if (X[aa].src && X[aa].src.includes(pa)) {
                                K.push(Z);
                                break;
                            }
                        } catch (xa) {}
                else "undefined" !== typeof Ha[na[Z]] && K.push(Z);
        T = ca.call(T, V, K);
        ca = [];
        for (const Z of T) ua[Z] || (ca.push(Z), (ua[Z] = !0));
        return ca;
    }
    function Fa(T, ca, V, K) {
        ca ||
            20 < $a ||
            (ka.length || ((ka = Ta()), $a++),
            ka.length &&
                (T.av(K, "fd", Ja.dT_.aesc(ka.join(";")), !1), (ka = [])));
    }
    function Ra(T) {
        T.detail.i === Ja.dT_.lAID() &&
            ((ka = Ta()), Ja.dT_.remE("ACTION_CLOSED", Ra));
    }
    function va(T, ca, V) {
        let K = 0;
        try {
            if (3 >= V && !Ja.dT_.iIO(T, 8))
                if ("object" === typeof T && !ca.includes(T)) {
                    ca.push(T);
                    for (const pa in T)
                        Ja.dT_.oHOP(T, pa) &&
                            (K++, (K += va(T[pa], ca, V + 1)));
                } else if (Array.isArray(T) && !ca.includes(T)) {
                    ca.push(T);
                    for (const pa of T) K += va(pa, ca, V + 1);
                }
        } catch (pa) {}
        return K;
    }
    this.dT_ && dT_.prm && dT_.prm();
    var Ja = "undefined" !== typeof window ? window : self,
        Ha =
            "undefined" !== typeof globalThis
                ? globalThis
                : "undefined" !== typeof window
                ? window
                : void 0,
        bb,
        $a = 0,
        ua = [],
        ka = [],
        na = {
            fueldeck: "FDUPA",
            soasta: "url:c.go-mpulse.net",
            monitis: "JSBenchmark",
            pingdom: "PRUM_EPISODES",
            newrelic: "NREUM",
            appdynamics: "ADRUM",
            appneta: "_tly",
            pendo: "pendo",
            heap: "heap",
            mixpanel: "mixpanel",
            amplitude: "amplitude",
            tealeaf: "TLT",
            datadog: "DD_RUM",
            elastic: "elasticApm",
            requestmetrics: "RM",
            instana: "ineum",
            plumbr: "PLUMBR",
            glassbox: "_detector",
            decibelinsight: "decibelInsight",
            contentsquare: "CS_CONF",
            hotjar: "hjBootstrap",
            quantummetric: "QuantumMetricAPI",
            fullstory: "FS",
        },
        da;
    (function (T) {
        T.ANGULAR = "g";
        T.DATA_LAYER = "b";
        T.NEXT = "p";
        T.NUXT = "n";
        T.REACT = "r";
        T.VUE = "v";
        T.VUE3 = "k";
    })(da || (da = {}));
    var Ka = {
        g: function () {
            if (document.querySelectorAll) {
                var T = Array.prototype.slice.call(
                        document.querySelectorAll("[ng-version]")
                    ),
                    ca = [];
                for (let V = 0, K = T.length; V < K; V++)
                    ca.push(T[V].getAttribute("ng-version"));
                return ca.length ? ca : void 0;
            }
        },
        b: function () {
            var T = Ha.dataLayer;
            const ca = [];
            if (T && T.length) {
                var V = 0;
                for (const K of T)
                    if ("object" === typeof K && !ca.includes(K)) {
                        ca.push(K);
                        for (const pa in K)
                            Ja.dT_.oHOP(K, pa) &&
                                (V++, (V += va(K[pa], ca, 0)));
                    }
                V
                    ? ((T = "1-5"),
                      500 < V
                          ? (T = "501+")
                          : 100 < V
                          ? (T = "101-500")
                          : 50 < V
                          ? (T = "51-100")
                          : 10 < V
                          ? (T = "11-50")
                          : 5 < V && (T = "6-10"),
                      (V = T))
                    : (V = void 0);
                return V;
            }
        },
        v: function () {
            return Sa("__vue__");
        },
        k: function () {
            return Sa("__vue_app__");
        },
        r: function () {
            if (Ha.React && Ha.React.Component)
                return (Ha.React.version || "") + "";
            const T = Na("_reactRootContainer");
            if (T && T._reactRootContainer) return "";
        },
        n: function () {
            var T;
            if (
                (null === (T = Ha.__NUXT__) || void 0 === T ? 0 : T.data) ||
                Ha.$nuxt
            )
                return "";
        },
        p: function () {
            var T;
            if (Ha.__NEXT_DATA__ && Ha.__NEXT_DATA__.buildId)
                return (
                    ((null === (T = Ha.next) || void 0 === T
                        ? void 0
                        : T.version) || "") + ""
                );
        },
    };
    (function () {
        var T, ca;
        (bb = Ha.dT_) &&
            (null === (ca = (T = Ja.dT_).smbi) || void 0 === ca
                ? 0
                : ca.call(T, "f")) &&
            (Ja.dT_.aBPSL(Fa), Ja.dT_.addE("ACTION_CLOSED", Ra));
    })();
})();
(function () {
    function Na(P, sa, Ia, L, S) {
        let ma = !1;
        if (K || V) return ma;
        V = !0;
        try {
            "function" === typeof ca && ca !== Na && (ma = ca(P, sa, Ia, L, S));
        } catch (ja) {
            ka.dT_.rex(ja, void 0, !0, "1");
        }
        ma ||
            ka.dT_.re({
                msg: "string" === typeof P ? P : "",
                file: sa || "",
                line: Ia || -1,
                column: L || -1,
                error: S || "",
                stackContainsWrapper: !1,
                source: "1",
            });
        V = !1;
        return ma;
    }
    function Sa(P) {
        try {
            if ("[object Function]" !== Object.prototype.toString.call(P))
                return P;
            const sa = P.dtwid;
            "number" === typeof sa && X[sa]
                ? X[sa].ed++
                : ((X[aa] = { ya: P, ed: 1 }), (P.dtwid = aa++));
            P.rxewrapper =
                P.rxewrapper ||
                function (Ia) {
                    try {
                        return Z.errorCallback(P, this, arguments);
                    } catch (L) {
                        if (-2146823277 !== L.number)
                            throw (
                                (pa && (ka.dT_.rex(L, void 0, !0, "1"), eb()),
                                L)
                            );
                    }
                };
            return (P.rxewrapper.rxewrapper = P.rxewrapper);
        } catch (sa) {
            return P;
        }
    }
    function eb() {
        K += 1;
        ka.dT_.st(function () {
            --K;
        }, 0);
    }
    function Ta() {
        const P = document.getElementsByTagName("html");
        (0 !== P.length &&
            P[0].hasAttribute &&
            P[0].hasAttribute("webdriver")) ||
            "EventTarget Window ModalWindow".replace(/\w+/g, function (sa) {
                (sa = na[sa] && na[sa].prototype) &&
                    ka.dT_.oHOP(sa, "addEventListener") &&
                    ((sa.addEventListener = Fa(sa.addEventListener)),
                    (sa.removeEventListener = Ra(sa.removeEventListener)));
                return "";
            });
    }
    function Fa(P) {
        return function (sa, Ia, L, S) {
            Ia && Ia.handleEvent && (Ia.handleEvent = Sa(Ia.handleEvent));
            return P.call(this, sa, Sa(Ia), L, S);
        };
    }
    function Ra(P) {
        return function (sa, Ia, L, S) {
            try {
                return P.call(
                    this,
                    sa,
                    Ia && Ia.rxewrapper ? Ia.rxewrapper : Ia,
                    L,
                    S
                );
            } finally {
                Ia &&
                    ((sa = Ia.dtwid),
                    "number" === typeof sa &&
                        X[sa] &&
                        X[sa].ya === Ia &&
                        (X[sa].ed--,
                        X[sa].ed ||
                            (delete Ia.rxewrapper,
                            delete Ia.dtwid,
                            delete X[sa])));
            }
        };
    }
    function va() {
        try {
            ka.dT_.apl(
                na,
                "onerror",
                function () {
                    return Na;
                },
                function (P) {
                    ca = P;
                }
            );
        } catch (P) {}
    }
    function Ja(...P) {
        let sa, Ia;
        for (const L of P)
            !sa && ka.dT_.iIO(L, 7) && (sa = L),
                !Ia && L && "string" === typeof L && (Ia = L);
        (sa || Ia) && ka.dT_.rex(sa || Ia, void 0, !1, "2");
        return xa.apply(this, P);
    }
    function Ha(P) {
        var sa;
        if (
            (sa =
                "string" === typeof P.blockedURL &&
                "string" === typeof P.documentURL &&
                !!P.blockedURL &&
                !!P.documentURL)
        )
            (sa = P.blockedURL),
                (sa = !(
                    null !== sa &&
                    void 0 !== sa &&
                    sa.includes(ka.dT_.scv("reportUrl"))
                ));
        if (sa) {
            sa = [];
            for (var Ia in P)
                P[Ia] &&
                    "function" !== typeof P[Ia] &&
                    sa.push([Ia, P[Ia] + ""]);
            sa.length && ka.dT_.cAE("_csprv_", sa, !0, void 0, 1);
        }
    }
    function bb(P) {
        "securitypolicyviolation" === P.type &&
            Ha({
                sourceFile: P.sourceFile,
                blockedURL: P.blockedURI,
                documentURL: P.documentURI,
                referrer: P.referrer,
                disposition: P.disposition,
                effectiveDirective: P.effectiveDirective || P.violatedDirective,
                originalPolicy: P.originalPolicy,
                statusCode: P.statusCode,
                lineNumber: P.lineNumber,
                columnNumber: P.columnNumber,
                sample: P.sample,
            });
    }
    function $a(P) {
        for (const sa of P)
            "csp-violation" === sa.type && (P = sa.body) && Ha(P);
    }
    function ua(P) {
        P.reason && ka.dT_.iIO(P.reason, 7)
            ? ka.dT_.rex(P.reason, void 0, !0, "4")
            : P.detail &&
              ka.dT_.iIO(P.detail.reason, 7) &&
              ka.dT_.rex(P.detail.reason, void 0, !0, "4");
    }
    this.dT_ && dT_.prm && dT_.prm();
    var ka = "undefined" !== typeof window ? window : self,
        na =
            "undefined" !== typeof globalThis
                ? globalThis
                : "undefined" !== typeof window
                ? window
                : void 0,
        da;
    (da || (da = {})).ERROR_CALLBACK = "errorCallback";
    var Ka;
    (function (P) {
        P.ANGULAR = "5";
        P.CONSOLE = "2";
        P.CUSTOM = "0";
        P.PROMISE_REJECTION = "4";
        P.WINDOW_ONERROR = "1";
        P.XHR = "3";
    })(Ka || (Ka = {}));
    var T,
        ca,
        V = !1,
        K = 0,
        pa = !0,
        X = {},
        aa = 0,
        Z = {
            errorCallback: function (P, sa, Ia, L, S, ma) {
                return T.aWF(P, sa, Ia, L, S, ma);
            },
        },
        xa;
    (function () {
        var P, sa;
        if (
            na.dT_ &&
            (null === (sa = (P = ka.dT_).smbi) || void 0 === sa
                ? 0
                : sa.call(P, "q"))
        ) {
            T = na.dT_;
            if (!ka.dT_.bcv("doel")) {
                na.onerror !== Na &&
                    ((T.rxehandler = Na),
                    na.onerror && (ca = na.onerror),
                    (na.onerror = T.rxehandler));
                va();
                if (!na.atob) pa = !1;
                else if (na.ErrorEvent)
                    try {
                        0 === new na.ErrorEvent("test").colno && (pa = !1);
                    } catch (L) {}
                pa && Ta();
            }
            ka.dT_.bcv("lupr") && ka.dT_.ael(na, "unhandledrejection", ua);
            ka.dT_.bcv("csprv") &&
                (na.ReportingObserver
                    ? new na.ReportingObserver($a, {
                          buffered: !0,
                          types: ["csp-violation"],
                      }).observe()
                    : ka.dT_.gBI().ff &&
                      ka.dT_.ael(document, "securitypolicyviolation", bb));
            if (ka.dT_.bcv("cce")) {
                var Ia;
                null !== (Ia = na.console) &&
                    void 0 !== Ia &&
                    Ia.error &&
                    ((xa = na.console.error),
                    (na.console.error = ka.dT_.wwi(Ja, xa)));
            }
        }
    })();
})();
(function () {
    function Na(H, fa, F, oa) {
        function za(Qa) {
            return Qa instanceof F
                ? Qa
                : new F(function (Ea) {
                      Ea(Qa);
                  });
        }
        return new (F || (F = Yb))(function (Qa, Ea) {
            function mb(Gb) {
                try {
                    pb(oa.next(Gb));
                } catch (Xb) {
                    Ea(Xb);
                }
            }
            function tb(Gb) {
                try {
                    pb(oa["throw"](Gb));
                } catch (Xb) {
                    Ea(Xb);
                }
            }
            function pb(Gb) {
                Gb.done ? Qa(Gb.value) : za(Gb.value).then(mb, tb);
            }
            pb((oa = oa.apply(H, fa || [])).next());
        });
    }
    function Sa(H, fa = []) {
        var F = db.dT_;
        F = (null === F || void 0 === F ? 0 : F.iIO) ? F.iIO : null;
        return !(null === F || void 0 === F || !F(H, fa));
    }
    function eb(H, fa = 0) {
        return H.name + "_" + (H.startTime + fa) + "_" + H.duration;
    }
    function Ta() {
        try {
            (performance.getEntries()[0].dt_test = !0),
                (tc = performance.getEntries()[0].dt_test),
                (nc = () => !!tc);
        } catch (H) {}
    }
    function Fa() {
        rc = db.dT_;
        nc = U.dT_.gBI().sf
            ? () => !1
            : () => {
                  Ta();
                  return !!tc;
              };
    }
    function Ra() {
        if (!fb) return !1;
        Pb = fb.getEntriesByType;
        ec = fb.getEntriesByName;
        Wb = fb.setResourceTimingBufferSize;
        bc = fb.clearResourceTimings;
        const H = () => {};
        fb.clearResourceTimings && (fb.clearResourceTimings = H);
        fb.webkitClearResourceTimings && (fb.webkitClearResourceTimings = H);
        return !!Pb && !!ec && !!Wb && !!bc;
    }
    function va(H) {
        "function" === typeof fb.addEventListener
            ? fb.addEventListener("resourcetimingbufferfull", H)
            : "undefined" !== typeof fb.onresourcetimingbufferfull &&
              ((Bb = fb.onresourcetimingbufferfull),
              (fb.onresourcetimingbufferfull = H));
    }
    function Ja() {
        try {
            "function" === typeof Bb &&
                Bb.call(
                    fb,
                    new Event("resourcetimingbufferfull", {
                        bubbles: !0,
                        cancelable: !0,
                    })
                ),
                U.dT_.st(function () {
                    bc.call(fb);
                }, 0);
        } catch (H) {}
    }
    function Ha() {
        fb = db.performance;
        const H = Ra();
        H && Wb.call(fb, 1e3);
        return H;
    }
    function bb(H) {
        const { a: fa, e: F } = H.detail;
        if (F)
            for (const oa of F) {
                H = oa.url;
                if (!H) continue;
                const za = oa.relevance || 0,
                    Qa = {
                        eb: oa.area,
                        imageWidth: oa.w,
                        imageHeight: oa.h,
                        Jc: oa.nw,
                        Ic: oa.nh,
                        qe: oa.o,
                        fd: za,
                        Qf: oa.ireason || 0,
                        D: fa || 0,
                    };
                if (!D[H] || za > D[H].fd) D[H] = Qa;
            }
    }
    function $a(H) {
        return !!H && isFinite(H) && 0 < H;
    }
    function ua(H) {
        const fa = D[H.name];
        "undefined" !== typeof fa
            ? ((H.relevantArea = fa.eb),
              (H.relevance = fa.fd),
              (H.vcIrrelevanceReason = fa.Qf),
              fa.qe &&
                  (H.onloadTime =
                      fa.qe - Math.round(H.startTime) - U.dT_.gto()),
              $a(fa.imageWidth) &&
                  $a(fa.imageHeight) &&
                  ((H.imageWidth = fa.imageWidth),
                  (H.imageHeight = fa.imageHeight)),
              $a(fa.Jc) &&
                  fa.Jc !== fa.imageWidth &&
                  (H.imageNaturalWidth = fa.Jc),
              $a(fa.Ic) &&
                  fa.Ic !== fa.imageHeight &&
                  (H.imageNaturalHeight = fa.Ic),
              delete D[H.name])
            : (H.relevance = 0);
    }
    function ka() {
        return Ma;
    }
    function na(H, fa, F) {
        return {
            get() {
                const oa = +H[F];
                return isNaN(oa) ? fa : oa + fa;
            },
        };
    }
    function da(H, fa) {
        if (0 >= fa) return H;
        var F = kb[eb(H, fa)];
        if (F) return F;
        F = {};
        for (const oa of v) F[oa] = na(H, fa, oa);
        for (const oa of z)
            oa in H &&
                (F[oa] = {
                    get() {
                        return H[oa];
                    },
                });
        fa = Object.create(H, F);
        fa._dtCl = !0;
        return (kb[eb(fa)] = fa);
    }
    function Ka() {
        let H = [];
        const fa = document.getElementsByTagName("iframe");
        if (!fa.length) return H;
        for (let tb = 0; tb < fa.length; tb++) {
            var F = fa[tb];
            try {
                var oa = H,
                    za = oa.concat;
                a: {
                    let pb = void 0;
                    const Gb = F.contentWindow;
                    if (R.has(F)) var Qa = R.get(F);
                    else {
                        var Ea = ea;
                        R.set(F, Ea);
                        "undefined" !== typeof F.src && (Ma[F.src] = Ea);
                        ea++;
                        Qa = Ea;
                    }
                    F = Qa;
                    if (Gb.dT_) {
                        var mb = [];
                        break a;
                    }
                    Ea = [];
                    const Xb = Gb.performance.getEntriesByType("resource"),
                        rb = fb.timeOrigin;
                    pb = rb
                        ? Gb.performance.timeOrigin - rb
                        : Gb.performance.timing.navigationStart -
                          fb.timing.navigationStart;
                    pb = Math.round(pb);
                    for (const Pc of Xb) {
                        const xc = da(Pc, pb);
                        gb[eb(xc)] || ((xc.frameId = F), Ea.push(xc));
                    }
                    mb = Ea;
                }
                H = za.call(oa, mb);
            } catch (pb) {}
        }
        return H;
    }
    function T() {
        const H = [];
        var fa = Pb.call(fb, "resource");
        const F = nc();
        var oa;
        if (db.frames && db.frames.length) {
            var za = [];
            for (let Qa = 0; Qa < db.frames.length; Qa++)
                try {
                    const Ea = db.frames[Qa];
                    Ea.dT_ &&
                        (null ===
                            (oa =
                                null === Ea || void 0 === Ea
                                    ? void 0
                                    : Ea.location) || void 0 === oa
                            ? 0
                            : oa.href) &&
                        za.push(Ea.location.href);
                } catch (Ea) {}
            oa = za;
        } else oa = [];
        for (const Qa of fa) {
            za = Qa;
            F ||
                ((fa = za),
                (za = ob[eb(fa)]),
                za || ((za = fa), (ob[eb(za)] = za), (za = fa)));
            if (!(fa = gb[eb(za)]))
                a: {
                    if (
                        ("iframe" === za.initiatorType ||
                            "subdocument" === za.initiatorType) &&
                        oa.length
                    )
                        for (const Ea of oa)
                            if (Ea === za.name) {
                                fa = !0;
                                break a;
                            }
                    fa = !1;
                }
            fa || H.push(za);
        }
        return H;
    }
    function ca(H, fa) {
        let F;
        if ("text/css" === fa.type) {
            F = fa.href || "";
            var oa = fa.ownerNode;
            fa = oa && oa.nodeType && 1 === oa.nodeType ? fa.ownerNode : null;
        } else F = fa.src;
        F && fa && (H[F] = fa);
        return H;
    }
    function V(H, fa) {
        return fa.D !== H && !fa.Ke;
    }
    function K(H, fa, F, oa, za, Qa) {
        return function (Ea) {
            if (!gb[eb(Ea)])
                try {
                    const xc = Ea.name;
                    var mb =
                            (Ea.workerNavigationStart || U.dT_.gto()) +
                            Ea.startTime,
                        tb = Ea.name,
                        pb;
                    if (
                        !(pb =
                            tb.includes(U.dT_.gAN()) ||
                            tb.includes("dtagent_") ||
                            (tb.includes("ampbf") && tb.includes("flavor=amp")))
                    ) {
                        var Gb = tb.includes;
                        const qd = U.dT_.scv("reportUrl");
                        (wb && qd === Rb) || ((Rb = qd), (wb = U.dT_.tau(Rb)));
                        pb = Gb.call(tb, wb);
                    }
                    if (
                        !(
                            pb ||
                            Ea.startTime > Ea.responseEnd ||
                            0 > Ea.startTime ||
                            xc.includes("chrome-extension://") ||
                            xc.includes("chrome://") ||
                            xc.includes("data:") ||
                            xc.includes("javascript:") ||
                            xc.includes("about:") ||
                            xc.includes("res://")
                        )
                    ) {
                        pb = mb - H;
                        var Xb = D[Ea.name],
                            rb = Ea.ef || Infinity;
                        rb = za ? Infinity : rb;
                        Gb = rc;
                        if (
                            (H <= mb &&
                                mb <= fa + (Gb.syn ? 1e3 : U.dT_.ncv("rtt")) &&
                                rb >= pb) ||
                            (Xb && Xb.D === +F && 0 < Xb.fd)
                        ) {
                            var Pc = oa && Ea.name.includes(oa);
                            Xb = 3;
                            za ? (Xb = 1) : Pc && (Xb = 2);
                            (Ea.$d && 3 !== Ea.$d) ||
                                ((Ea.ef = pb),
                                (Ea.$d = Xb),
                                (Ea.Be = Qa),
                                (Ea.actionId = F));
                        }
                    }
                } catch (xc) {}
        };
    }
    function pa(H, fa, F) {
        return Na(this, void 0, void 0, function* () {
            J = U.dT_.aFr(J, V.bind(null, H));
            for (const oa of J) yield X(oa, oa.start, fa, !1, F), (oa.Ke = !0);
        });
    }
    function X(H, fa, F, oa, za) {
        return Na(
            this,
            arguments,
            void 0,
            function* (
                { D: Qa, Ce: Ea, xhrUrl: mb, start: tb },
                pb,
                Gb,
                Xb,
                rb
            ) {
                const Pc = U.dT_.lAID();
                Qa = K(tb, pb, Qa, mb, Qa === Pc, Ea);
                yield U.dT_.fEP(rb, Qa, void 0, !Gb);
                Xb &&
                    ((Gb = r[Ea]),
                    Gb.count--,
                    !Gb.count && Gb.Lb.includes(Ea) && U.dT_.sMPS(1));
            }
        );
    }
    function aa() {
        var H = U.dT_.oK(G);
        for (const fa of H) (H = G[+fa]), U.dT_.ct(H.sa), H.Na(!0);
        G = {};
    }
    function Z(H, fa, F, oa) {
        let za = r[F];
        za || (za = { count: 0, Lb: [] });
        za.count++;
        za.Lb.push(H);
        r[F] = za;
        J.push({ D: H, start: fa, Ce: F, xhrUrl: oa, Ke: !1 });
    }
    function xa() {
        r = {};
        G = {};
        J = [];
        const H = U.dT_.lAID();
        Z(H, U.dT_.lst(), H);
        U.dT_.addE("ACTION_ENTERED", P);
        U.dT_.addE("ACTION_SENT", sa);
    }
    function P(H) {
        const { x: fa, t: F, i: oa, a: za, r: Qa } = H.detail;
        ia.includes(F) ||
            ((H = U.dT_.lAID()), (Qa === H && Qa !== oa) || Z(oa, za, Qa, fa));
    }
    function sa(H) {
        return Na(this, void 0, void 0, function* () {
            function fa(Xb) {
                return Na(this, void 0, void 0, function* () {
                    const rb = Array.prototype.concat(Ka(), T(), ab);
                    yield pa(za, !0, rb);
                    yield X(
                        { D: za, Ce: tb, xhrUrl: F, start: Qa },
                        Ea,
                        Xb,
                        !0,
                        rb
                    );
                });
            }
            const {
                x: F,
                t: oa,
                i: za,
                a: Qa,
                s: Ea,
                f: mb,
                r: tb,
                rt: pb,
            } = H.detail;
            pb && (ob[eb(pb)] = pb);
            if (!ia.includes(oa)) {
                var Gb = U.dT_.lAID();
                if (tb !== Gb || tb === za)
                    mb
                        ? yield fa(mb)
                        : ((Gb = U.dT_.st(function () {
                              delete G[za];
                              fa(mb);
                          }, 2e3)),
                          (G[za] = { sa: Gb, Na: fa }));
            }
        });
    }
    function Ia(H) {
        var fa;
        if ((fa = "number" === typeof H.Be)) {
            var F;
            fa =
                0 ===
                (null === (F = r[H.Be]) || void 0 === F ? void 0 : F.count);
        }
        return fa;
    }
    function L(H) {
        const fa = [];
        var F = [];
        for (var oa in r) {
            var za;
            if ((za = U.dT_.oHOP(r, oa))) {
                za = +oa;
                const Qa = r[za];
                za = !G[za] && (!Qa || (!Qa.count && Qa.Lb.includes(za)));
            }
            za && F.push(...r[oa].Lb);
        }
        for (const Qa of F) {
            F = +Qa;
            oa = H[F] || [];
            za = rc;
            if (!za.syn && za.gLVD) {
                za = za.gUI(F);
                for (const Ea of za) {
                    za = !1;
                    for (const mb of oa)
                        if (!mb.failedResource && mb.name === Ea.name) {
                            200 === (mb.responseStatus || mb.statuscode) ||
                                (mb.failedResource = Ea.failedResource);
                            za = !0;
                            break;
                        }
                    za || (ua(Ea), oa.push(Ea));
                }
            }
            fa.push({ resources: oa, actionId: F });
            delete r[F];
        }
        return fa;
    }
    function S(H) {
        H && aa();
        H = U.dT_.aFr(Array.prototype.concat(Ka(), T(), ab), Ia);
        const fa = U.dT_.red(
            Array.prototype.concat(
                Array.prototype.slice.call(document.scripts),
                Array.prototype.slice.call(document.styleSheets)
            ),
            ca,
            {}
        );
        H = U.dT_.red(
            H,
            (F, oa) => {
                const za = oa.actionId;
                let Qa = F[za];
                Qa || (Qa = []);
                var Ea = fa[oa.name];
                if (Ea) {
                    if (Ea && "LINK" === Ea.nodeName) {
                        const mb = Ea.media || "all";
                        Ea =
                            "stylesheet" === Ea.rel &&
                            window.matchMedia(mb).matches &&
                            !Ea.disabled;
                    } else
                        Ea =
                            !Ea.hasAttribute("async") &&
                            !Ea.hasAttribute("defer") &&
                            "module" !== Ea.getAttribute("type");
                    oa.isCritical = +Ea;
                }
                ua(oa);
                Qa.push(oa);
                F[za] = Qa;
                gb[eb(oa)] = !0;
                return F;
            },
            {}
        );
        H = L(H);
        900 < Pb.call(fb, "resource").length &&
            (Ja(), (gb = {}), (kb = {}), (ob = {}), (ab = []), (D = {}));
        return H;
    }
    function ma(H) {
        return (
            (zd && Sa(H, 13) && "navigation" !== H.entryType) ||
            Sa(H, ["_dtCl"])
        );
    }
    function ja(H) {
        H.includes("ScriptResource.axd")
            ? (H = "js")
            : ((H = H.substring(1 + H.lastIndexOf("/"))),
              0 < H.indexOf("?") && (H = H.split("?")[0]),
              0 < H.indexOf("#") && (H = H.split("#")[0]),
              (H =
                  0 < H.indexOf(".")
                      ? H.substring(H.lastIndexOf(".") + 1)
                      : "-"));
        switch (H) {
            case "js":
                return "s";
            case "gif":
            case "png":
            case "jpg":
            case "jpeg":
            case "ico":
            case "tiff":
            case "bmp":
            case "xbm":
            case "svg":
                return "i";
            case "css":
                return "c";
            default:
                return "o";
        }
    }
    function ha(H) {
        H = Ec() + H.startTime;
        H -= Fb();
        return Math.round(H);
    }
    function Aa(H, fa, F, oa) {
        var za = H.resources;
        H = H.actionId;
        if (Qb().op) {
            var Qa = [],
                Ea = {};
            for (var mb of za) Ea[mb.name] || (Qa.push(mb), (Ea[mb.name] = !0));
            za = Qa;
        }
        mb = [];
        for (const rb of za) {
            Qa = mb;
            Ea = Qa.push;
            var tb = ja(rb.name.toLowerCase()),
                pb = rb.duration;
            !pb && ma(rb) && (pb = rb.responseEnd - rb.startTime);
            pb = pb ? Math.round(pb) : 0;
            var Gb = ha(rb);
            if (ma(rb) && 0 < rb.responseEnd) {
                var Xb = Ec() + rb.responseEnd;
                Xb -= Fb();
                Xb = Math.round(Xb);
            } else Xb = Math.round(Cb() - Fb());
            Ea.call(Qa, {
                type: tb,
                ii: { duration: pb, start: Gb, stop: Xb },
                url: rb.name,
                domain: Jb(rb.name),
                ah: ha(rb) <= Kb() ? "_load_" : "-",
                Ph: 0 === rb.responseEnd,
                Bi: rb.failedResource ? !1 : 0 < rb.responseEnd,
                kh: Qb().ch
                    ? 0 !== rb.domainLookupStart && 0 === rb.requestStart
                    : Jb(rb.name) !== Gd &&
                      0 === rb.requestStart &&
                      2 > rb.duration
                    ? !0
                    : 0 >= rb.responseEnd
                    ? !1
                    : rb.requestStart === rb.fetchStart &&
                      rb.requestStart === rb.responseStart &&
                      rb.responseStart !== rb.responseEnd,
                Lh: !1,
            });
        }
        Wa(fa, H, mb, za, F, oa);
    }
    function Ba(H, fa, F, oa, za) {
        const Qa = za || Ec();
        if (!H.length || 0 >= Qa) F("");
        else {
            var Ea = [];
            yb(
                H,
                (mb) => {
                    if (Cc && Ea.length / 2 >= Cc) mb = !1;
                    else {
                        var tb = mb.startTime,
                            pb;
                        if (
                            (pb = !(
                                tb < ("iframe" === mb.initiatorType ? 1 : 0)
                            ))
                        )
                            (pb = mb.actionId), (pb = !pb || pb === fa);
                        pb &&
                            ((tb = tb ? ["b", Math.round(tb)] : []),
                            ta(mb, tb, Ec()),
                            Ea.push(pc(mb.name), tb.join("")));
                        mb = !0;
                    }
                    return mb;
                },
                void 0,
                function () {
                    F(Da(`${fa || Lc()}-${Math.round(Qa)};${Ea.join("|")}`));
                },
                !oa
            );
        }
    }
    function Wa(H, fa, F, oa, za, Qa) {
        Ba(
            oa,
            fa,
            (Ea) => {
                Ea && H.Ae.push(Ea);
                za();
            },
            Qa
        );
    }
    function Va(H, fa, F, oa) {
        if (U.dT_.las()) {
            var za = Kb();
            !F && (0 >= za || 3e3 > Cb() - za)
                ? (U.dT_.sMPS(2e3), (za = !1))
                : (za = !0);
        } else za = !1;
        if (za && !fa) {
            Mb(S(F), F);
            !Sc.length || (U.dT_.last() + 3e4 <= Cb() && U.dT_.last())
                ? ((Sc = []), (fa = void 0))
                : (fa = Sc.splice(0, 1)[0]);
            if (fa)
                for (fa = fa.Ae, F = 0; F < fa.length; F++)
                    H.av(oa, "rt", fa[F], !0, F);
            Sc.length && U.dT_.sMPS(100);
        }
    }
    function Mb(H, fa) {
        const F = { Ae: [], resourceSummaries: [] },
            oa = H.length;
        let za = 0;
        for (const Qa of H)
            Aa(
                Qa,
                F,
                function () {
                    za++;
                    za === oa && (Sc.push(F), U.dT_.sMPS(0));
                },
                fa
            );
    }
    function ic(H) {
        ta = H.snt;
        Da = H.esc;
        yb = H.fE;
        Fb = H.lst;
        Cb = H.nw;
        Kb = H.gLAet;
        Jb = H.gh;
        ib = H.loc;
        Qb = H.gBI;
        Lc = H.lAID;
        pc = H.aur;
        md = H.stcv;
        Ec = H.gto;
        H = rc;
        Cc = U.dT_.ncv("rtl");
        H.syn && ((Cc = 0), md("rtp", 1), md("rtu", 800));
        Gd = Jb(ib());
        H = db.performance;
        0 <
            ((null === H || void 0 === H ? void 0 : H.timeOrigin) ||
                (null === H || void 0 === H
                    ? void 0
                    : H.timing.navigationStart)) && U.dT_.aBPSL(Va);
    }
    var Yb = (this.dT_ && dT_.prm && dT_.prm()) || window.Promise,
        U = "undefined" !== typeof window ? window : self,
        db =
            "undefined" !== typeof globalThis
                ? globalThis
                : "undefined" !== typeof window
                ? window
                : void 0,
        gc;
    (function (H) {
        H.ANCHOR = "A";
        H.BUTTON = "BUTTON";
        H.FORM = "FORM";
        H.I_FRAME = "IFRAME";
        H.IMAGE = "IMG";
        H.INPUT = "INPUT";
        H.LABEL = "LABEL";
        H.LINK = "LINK";
        H.OPTION = "OPTION";
        H.SCRIPT = "SCRIPT";
        H.SELECT = "SELECT";
        H.STYLE = "STYLE";
        H.TEXT_AREA = "TEXTAREA";
    })(gc || (gc = {}));
    var rc,
        tc,
        nc,
        wb,
        Rb,
        fb,
        Wb,
        Pb,
        ec,
        bc,
        Bb,
        D = {},
        R,
        Ma = {},
        ea = 0,
        gb = {},
        kb = {},
        ab = [],
        ob = {},
        v =
            "connectEnd connectStart domainLookupEnd domainLookupStart fetchStart redirectEnd redirectStart requestStart responseEnd responseStart secureConnectionStart startTime workerStart".split(
                " "
            ),
        z =
            "name duration transferSize decodedBodySize encodedBodySize entryType initiatorType nextHopProtocol serverTiming transferSize responseStatus".split(
                " "
            ),
        r = {},
        G = {},
        J = [],
        ia =
            "_error_ _ts_ _code_ _debug_ _emu_ _location_ _stack_ _useraction_ _source_ _istack_ _type_ _log_ _rs_ _endVisit_ - _t_".split(
                " "
            ),
        ta,
        Da,
        yb,
        Fb,
        Kb,
        Cb,
        Jb,
        ib,
        Qb,
        Lc,
        pc,
        md,
        Ec,
        Cc,
        Gd,
        zd =
            "function" === typeof PerformanceResourceTiming ||
            "object" === typeof PerformanceResourceTiming,
        Sc = [];
    (function () {
        var H, fa;
        const F = db.dT_;
        if (
            !F ||
            null === (fa = (H = U.dT_).ssmbi) ||
            void 0 === fa ||
            !fa.call(H, "r", !1, !0) ||
            db.B
        )
            return !1;
        Fa();
        if (!Ha()) return !1;
        ic(F);
        xa();
        Ma = {};
        R = new WeakMap();
        ea = 0;
        D = {};
        gb = {};
        kb = {};
        ob = {};
        ab = [];
        va(function () {
            ab = T();
        });
        U.dT_.addE("VISUALLY_COMPLETE", bb);
        return !0;
    })() && (rc.gFU = ka);
})();
(function () {
    function Na(Ba, Wa = []) {
        var Va = K.dT_;
        Va = (null === Va || void 0 === Va ? 0 : Va.iIO) ? Va.iIO : null;
        return !(null === Va || void 0 === Va || !Va(Ba, Wa));
    }
    function Sa(Ba) {
        V.dT_.addE && V.dT_.addE("CONFIG_UPDATE", Ba);
    }
    function eb() {
        (X = V.dT_.bcv("uxdce")) && (aa = V.dT_.ncv("uxdcw"));
    }
    function Ta() {
        (xa = V.dT_.aO("deadClickObserver", va)) &&
            xa.observe(document.documentElement, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0,
            });
        xa && (V.dT_.aBPSL(Ra), V.dT_.ael(document, "click", Fa), (sa = !0));
    }
    function Fa() {
        const Ba = V.dT_.nw();
        V.dT_.st(function () {
            Z < Ba && (P.push({ time: Math.round(Ba) }), V.dT_.sMPS(2e3));
        }, aa);
    }
    function Ra(Ba, Wa, Va, Mb) {
        if (0 !== P.length) {
            Wa = Ba.av;
            Va = P;
            const ic = [];
            for (const Yb of Va) ic.push(Yb.time.toFixed());
            Wa.call(Ba, Mb, "dC", ic.join(","), !0);
            P = [];
        }
    }
    function va(Ba) {
        let Wa = Ba.length;
        for (; Wa--; ) {
            const Mb = Ba[Wa].target;
            var Va;
            if (
                (Va =
                    (Na(Mb, 9) || (Mb && Mb.nodeType && 1 === Mb.nodeType)) &&
                    ("string" === typeof Mb.textContent ||
                        "string" === typeof Mb.innerText))
            )
                (Va = Mb.getBoundingClientRect()),
                    (Va = !(
                        0 > Va.right ||
                        Va.left >
                            (window.innerWidth ||
                                document.documentElement.clientWidth) ||
                        0 > Va.bottom ||
                        Va.top >
                            (window.innerHeight ||
                                document.documentElement.clientHeight)
                    ));
            if (Va) {
                Z = V.dT_.nw();
                break;
            }
        }
    }
    function Ja() {
        eb();
        X && !sa
            ? Ta()
            : !X &&
              sa &&
              (V.dT_.rBPSL(Ra),
              V.dT_.rO("deadClickObserver"),
              V.dT_.rel(document, "click", Fa, void 0),
              (P = []),
              (sa = !1),
              (Z = -1));
    }
    function Ha() {
        if ((Ia = V.dT_.bcv("uxrgce"))) {
            const Ba = V.dT_.scv("uxrgcm"),
                [Wa, Va] = Ba.split(";");
            L = bb(Wa);
            bb(Va);
        }
    }
    function bb(Ba) {
        const [Wa, Va, Mb, ic] = Ba.split(",");
        return { oh: +Wa || 100, wh: +Va || 25, Xg: +Mb || 300, Tg: +ic || 3 };
    }
    function $a(Ba) {
        return {
            x: Ba.x || Ba.clientX,
            y: Ba.y || Ba.clientY,
            timeStamp: V.dT_.nw(),
        };
    }
    function ua() {
        V.dT_.iMD() ||
            (V.dT_.aBPSL(da),
            V.dT_.ael(document, "click", na),
            V.dT_.ael(document, "mousedown", ka),
            (S = !0));
    }
    function ka(Ba) {
        ja = $a(Ba);
    }
    function na(Ba) {
        Ba = $a(Ba);
        if (0 === ha.length) ha.push(Ba);
        else {
            var Wa = ha[0],
                Va = ha[ha.length - 1];
            if ((Va = Ba && Va ? Ba.timeStamp - Va.timeStamp <= L.Xg : !1))
                (Va = L.wh),
                    (Va =
                        Math.abs(Wa.x - Ba.x) <= Va &&
                        Math.abs(Wa.y - Ba.y) <= Va);
            Va && Ba && ja && Ba.timeStamp - ja.timeStamp <= L.oh
                ? (ha.push(Ba), Ka())
                : (ha.length >= L.Tg && T(), (ha = [Ba]));
        }
    }
    function da(Ba, Wa, Va, Mb) {
        if (0 !== Aa.length) {
            Wa = Ba.av;
            Va = Aa;
            const ic = [];
            for (const Yb of Va)
                ic.push(
                    Yb.ph + "|" + Yb.Vg.toFixed() + "|" + Yb.duration.toFixed()
                );
            Wa.call(Ba, Mb, "rC", ic.join(","), !0);
            Aa = [];
        }
    }
    function Ka() {
        V.dT_.ct(ma);
        ma = V.dT_.st(function () {
            ha.length >= L.Tg && T();
        }, L.Xg);
    }
    function T() {
        var Ba = ha[0];
        Ba = {
            ph: ha.length,
            Vg: Math.round(Ba.timeStamp),
            duration: Math.round(ha[ha.length - 1].timeStamp - Ba.timeStamp),
        };
        0 < Ba.Vg && 0 < Ba.duration && (Aa.push(Ba), V.dT_.sMPS(2e3));
        ha = [];
    }
    function ca() {
        Ha();
        Ia && !S
            ? ua()
            : !Ia &&
              S &&
              (V.dT_.rBPSL(da),
              V.dT_.rel(document, "click", na, void 0),
              V.dT_.rel(document, "mousedown", ka, void 0),
              (ha = []),
              (Aa = []),
              (S = !1));
    }
    this.dT_ && dT_.prm && dT_.prm();
    var V = "undefined" !== typeof window ? window : self,
        K =
            "undefined" !== typeof globalThis
                ? globalThis
                : "undefined" !== typeof window
                ? window
                : void 0,
        pa;
    (function (Ba) {
        Ba.ANCHOR = "A";
        Ba.BUTTON = "BUTTON";
        Ba.FORM = "FORM";
        Ba.I_FRAME = "IFRAME";
        Ba.IMAGE = "IMG";
        Ba.INPUT = "INPUT";
        Ba.LABEL = "LABEL";
        Ba.LINK = "LINK";
        Ba.OPTION = "OPTION";
        Ba.SCRIPT = "SCRIPT";
        Ba.SELECT = "SELECT";
        Ba.STYLE = "STYLE";
        Ba.TEXT_AREA = "TEXTAREA";
    })(pa || (pa = {}));
    var X,
        aa,
        Z = -1,
        xa,
        P = [],
        sa = !1,
        Ia,
        L,
        S = !1,
        ma,
        ja,
        ha = [],
        Aa = [];
    (function () {
        var Ba, Wa;
        return (
            K.dT_ &&
            (null === (Wa = (Ba = V.dT_).smbi) || void 0 === Wa
                ? void 0
                : Wa.call(Ba, "u"))
        );
    })() && (Ha(), Ia && ua(), Sa(ca), eb(), X && Ta(), Sa(Ja));
})();
(function () {
    function Na(v) {
        let z = this;
        if (z.constructor) {
            let G = Na;
            Object.defineProperty(z, "constructor", {
                get: function () {
                    return G;
                },
                set: function (J) {
                    G = J;
                },
            });
        }
        z.dtProps = {
            requestStart: 0,
            Cb: !0,
            ba: 0,
            wa: [],
            url: "",
            method: "",
            aborted: !1,
            Sa: 0,
            async: void 0,
            G: arguments.length ? new Bb(v) : new Bb(),
            pf: !1,
            ye: -1,
            ad: -1,
            dd: [],
            Xd: !1,
            Ub: function () {
                z.readyState = r.G.readyState;
                if (z.readyState !== r.ye || 100 < U.dT_.nw() - r.ad) {
                    for (const G of r.dd) bc(G);
                    r.dd = [];
                    r.ig();
                    r.ad = U.dT_.nw();
                } else r.dd.push(U.dT_.st(r.Ub, 100));
                r.ye = z.readyState;
            },
            zf: function (G, J) {
                r.G.onreadystatechange !== r.Ub &&
                    (r.G.onreadystatechange = r.Ub);
                r.ba = 0;
                r.requestStart = U.dT_.nw();
                z.__dtFrameworks__ ||
                    (r.ba = U.dT_.ex("x", void 0, r.url, void 0, z, !1, Pb));
                U.dT_.disE({
                    kind: "REQUEST_STARTED",
                    detail: { i: "xmlhttprequest", x: r.url },
                });
                try {
                    r.async && (r.G.timeout = z.timeout);
                } catch (Da) {}
                try {
                    r.async && (r.G.responseType = z.responseType);
                } catch (Da) {}
                r.jg();
                var ia = {};
                ia = U.dT_.sch(ia, r.url, r.ba, void 0, r.Ta);
                for (const Da in ia.headers)
                    U.dT_.oHOP(ia.headers, Da) &&
                        r.G.setRequestHeader(Da, ia.headers[Da]);
                r.G.withCredentials !== z.withCredentials &&
                    (r.G.withCredentials = z.withCredentials);
                let ta;
                ia = !0;
                try {
                    if (J && r.G.sendAsBinary)
                        ta = r.G.sendAsBinary.apply(r.G, G);
                    else {
                        const Da = Ka(z, "send");
                        ta = Da ? R.send(Da, z, G) : r.G.send.apply(r.G, G);
                    }
                    ia = !1;
                } finally {
                    ia && U.dT_.lx(r.ba, void 0, "x");
                }
                !r.async && z.readyState && r.ba && U.dT_.lx(r.ba, void 0, "x");
                return ta;
            },
            jg: function () {
                r.Xd || (Ja(z, r.G), (r.Xd = !0));
            },
            Ad: function (G, J, ia = !1) {
                for (const ta of r.wa)
                    if (ta[0] === G && ta[1] === J && ta[2] === ia) return;
                r.wa.push([G, J, ia]);
            },
            ze: function (G, J, ia = !1) {
                let ta;
                for (let Da = 0; Da < r.wa.length; Da++)
                    if (
                        ((ta = r.wa[Da]),
                        ta[0] === G && ta[1] === J && ta[2] === ia)
                    ) {
                        r.wa.splice(Da, 1);
                        break;
                    }
            },
            Ac: function (G) {
                let J = !1,
                    ia = !1;
                if (G.cancelable && G.preventDefault) {
                    const Da = G.preventDefault;
                    G.preventDefault = function () {
                        J = !0;
                        return R.preventDefault(Da, this, arguments);
                    };
                }
                if (G.stopImmediatePropagation) {
                    const Da = G.stopImmediatePropagation;
                    G.stopImmediatePropagation = function () {
                        ia = !0;
                        return R.stopImmediatePropagation(Da, this, arguments);
                    };
                }
                G = bb(G, z);
                "readystatechange" === G.type &&
                    "undefined" !== typeof r.onreadystatechange &&
                    r.onreadystatechange &&
                    ((r.pf = !0),
                    R.onreadystatechangeCallback(r.onreadystatechange, z, [G]));
                const ta = r.wa;
                for (const Da of ta)
                    ia ||
                        Da[0] !== G.type ||
                        Da[2] ||
                        ("object" === typeof Da[1] && Da[1].handleEvent
                            ? R.dispatchXHRCallback(Da[1].handleEvent, Da[1], [
                                  G,
                              ])
                            : R.dispatchXHRCallback(Da[1], z, [G]));
                return !J;
            },
            ig: function () {
                const G = r.ba;
                try {
                    U.dT_.ec(G, z.readyState),
                        r.Sa++,
                        r.Ac({
                            type: "readystatechange",
                            bubbles: !1,
                            cancelable: !1,
                            timeStamp: U.dT_.nw(),
                        });
                } finally {
                    r.Sa--, U.dT_.lc(G), 4 === z.readyState && G && da(z, r);
                }
            },
            ia: void 0,
            ja: !1,
            Ta: U.dT_.gtc(),
            toString() {
                return "[Custom DTProperty Object]";
            },
            toJSON() {
                return "[Custom DTProperty Object]";
            },
        };
        const r = z.dtProps;
        z.readyState = 0;
        ca(z);
        try {
            Object.defineProperty(r, "responseType", {
                get: function () {
                    return r.G.responseType;
                },
                set: function (G) {
                    r.G.responseType = G;
                },
            });
        } catch (G) {}
        eb(Bb.prototype);
        for (const G in r.G) {
            if (
                -1 === nc.indexOf(G) &&
                (!U.dT_.oHOP(r.G, G) || U.dT_.oHOP(z, G))
            ) {
                Pb && -1 !== Rb.indexOf(G) && K(G, !1);
                continue;
            }
            const J = G;
            if ("upload" === J)
                Object.defineProperty(z, "upload", {
                    enumerable: !0,
                    get: function () {
                        r.upload || (r.upload = new ka(z));
                        return r.upload;
                    },
                });
            else {
                try {
                    r[J] = r.G[J];
                } catch (ia) {}
                Object.defineProperty(z, J, {
                    enumerable: !0,
                    get: function () {
                        const ia = J;
                        return 0 <= nc.indexOf(J)
                            ? r.G[J]
                            : "undefined" === typeof r[ia]
                            ? Ma[ia]
                            : r[ia];
                    },
                    set: function (ia) {
                        r[J] = ia;
                    },
                });
            }
        }
        r.ad = U.dT_.nw();
        z.onreadystatechange = null;
        "withCredentials" in r.G && (z.withCredentials = r.G.withCredentials);
        z.timeout = 0;
        r.G.overrideMimeType &&
            (z.overrideMimeType = function (G) {
                const J = Ka(z, "overrideMimeType");
                return J
                    ? R.overrideMimeType(J, z, arguments)
                    : r.G.overrideMimeType(G);
            });
        U.dT_.bcv("peti") &&
            r.G.addEventListener &&
            ((z.addEventListener = function (G, J, ia) {
                const ta = Ka(z, "addEventListener");
                r.Ad(G, J, ia);
                ta
                    ? U.dT_.iNF(ta) || R.AELWrapper(ta, r.G, arguments)
                    : U.dT_.iNF(r.G.addEventListener) ||
                      r.G.addEventListener(G, J, ia);
            }),
            (z.removeEventListener = function (G, J, ia) {
                const ta = Ka(z, "removeEventListener");
                r.ze(G, J, ia);
                ta
                    ? U.dT_.iNF(ta) || R.RELWrapper(ta, r.G, arguments)
                    : U.dT_.iNF(r.G.removeEventListener) ||
                      r.G.removeEventListener(G, J, ia);
            }),
            (z.dispatchEvent = function (G) {
                const J = Ka(z, "dispatchEvent");
                if (J) {
                    if (!U.dT_.iNF(J))
                        return R.dispatchWrapper(J, r.G, arguments);
                } else if (!U.dT_.iNF(r.G.dispatchEvent))
                    return r.G.dispatchEvent(G);
                return r.Ac(G);
            }));
        z.open = function (G, J, ia, ta, Da) {
            r.aborted = !1;
            r.method = G;
            3 > arguments.length && (ia = !0);
            r.async = ia;
            r.G.onreadystatechange = r.Ub;
            r.url = "" + J;
            const yb = Ka(z, "open");
            yb
                ? R.callOpen(yb, z, arguments)
                : R.callOpen(r.G.open, r.G, arguments);
            z.readyState = r.G.readyState;
        };
        z.send = function () {
            return r.zf(arguments, !1);
        };
        z.abort = function (...G) {
            0 < z.readyState && (r.aborted = !0);
            const J = Ka(z, "abort");
            J ? J.apply(z, G) : r.G.abort();
            if (r.ba) {
                for (; 0 < r.Sa; ) r.Sa--, U.dT_.lc(r.ba);
                U.dT_.lx(r.ba, void 0, "x");
                r.ba = 0;
            }
        };
        z.getAllResponseHeaders = function () {
            const G = Ka(z, "getAllResponseHeaders");
            return G
                ? R.getAllResponseHeaders(G, z, arguments)
                : r.G.getAllResponseHeaders();
        };
        z.getResponseHeader = function (G) {
            const J = Ka(z, "getResponseHeader");
            return J
                ? R.getResponseHeader(J, z, arguments)
                : r.G.getResponseHeader(G);
        };
        z.setRequestHeader = function (G, J) {
            var ia = G && G.toLowerCase ? G.toLowerCase() : G;
            if (
                "x-dtpc" !== ia &&
                "x-dtreferer" !== ia &&
                "x-host" !== ia &&
                "x-dtc" !== ia
            )
                return (ia = Ka(z, "setRequestHeader"))
                    ? R.setRequestHeader(ia, z, arguments)
                    : r.G.setRequestHeader(G, J);
        };
        z.toString = function () {
            return "[XMLHttpRequest]";
        };
        z.toJSON = function () {
            return r.G;
        };
        if (db.Proxy && U.dT_.bcv("exp"))
            return (z = new Proxy(z, {
                set: function (G, J, ia) {
                    G[J] = ia;
                    try {
                        -1 === Wb.indexOf(J) && (G.dtProps.G[J] = ia);
                    } catch (ta) {}
                    return !0;
                },
            }));
    }
    function Sa() {}
    function eb(v) {
        if (Pb)
            for (const z of ec)
                Rb.includes(z) || U.dT_.iNF(v[z]) || Rb.splice(0, 0, z);
    }
    function Ta(v, z) {
        let r = !1;
        try {
            r = !U.dT_.iNF(v);
        } catch (G) {}
        if (!r)
            for (const G of z)
                if ((r = (z = v.prototype[G]) && !U.dT_.iNF(z))) break;
        return r
            ? (U.dT_.addE("DEBUG_INFO_REQUESTED", function () {
                  return [
                      {
                          type: "lxw",
                          text: "Found a non-native XMLHttpRequest or EventTarget object before initializing! Basic XHR is operating in late mode.",
                          severity: "Warning",
                      },
                  ];
              }),
              !0)
            : !1;
    }
    function Fa(v) {
        if (!v) return {};
        v = v.replace(/^\s+|\s+$/g, "").split(/[\r\n]+/);
        const z = {};
        U.dT_.fE(v, function (r) {
            r = r.split(": ");
            const G = r.shift();
            G && (z[G] = r.join(": "));
        });
        return z;
    }
    function Ra(v) {
        return (v = v.toString().match(/\[object (XMLHttpRequest)?(\w+)]/)) &&
            v[2] &&
            "Object" !== v[2] &&
            "function" === typeof db[v[2]]
            ? v[2]
            : "Event";
    }
    function va(v, z) {
        v = v.dtProps.wa;
        const r = [];
        z = z.substring(2);
        for (const G of v) G[0] === z && r.push(G[1]);
        return r;
    }
    function Ja(v, z, r) {
        function G(ta) {
            function Da(yb, Fb) {
                try {
                    r
                        ? (U.dT_.ec(r.dtProps.ba), r.dtProps.Sa++)
                        : (U.dT_.ec(v.dtProps.ba), v.dtProps.Sa++),
                        "object" === typeof Fb && Fb.handleEvent
                            ? R.handleEventCallback(Fb.handleEvent, Fb, yb)
                            : R.handleEventCallback(Fb, v, yb);
                } finally {
                    r
                        ? (r.dtProps.Sa--, U.dT_.lc(r.dtProps.ba))
                        : (v.dtProps.Sa--, U.dT_.lc(v.dtProps.ba));
                }
            }
            z[ta] = function (yb) {
                const Fb = Array.prototype.slice.call(arguments);
                if (0 < Fb.length) {
                    const Cb = bb(yb, v);
                    U.dT_.fE(rc, function (Jb) {
                        "undefined" !== typeof yb[Jb] && (Cb[Jb] = yb[Jb]);
                    });
                    Fb[0] = Cb;
                }
                if (U.dT_.mx() && ta in ia) ia[ta](J.ba);
                var Kb = v.dtProps[ta] || (Pb && v[ta]);
                Kb && Da(Fb, Kb);
                Kb = va(v, ta);
                for (const Cb of Kb) Da(Fb, Cb);
                "onloadend" === ta && v instanceof Na && na(J, v);
            };
        }
        let J;
        J = r ? r.dtProps : v.dtProps;
        const ia = {
            onerror: function () {
                J.ja = !0;
                r
                    ? U.dT_.mxg("Upload failure", J.ba)
                    : U.dT_.mxf(J.G.status, J.G.statusText, J.ba);
            },
            onabort: function (ta) {
                ta = U.dT_.mxc(ta);
                J.ja = !0;
                J.ia = "abort";
                return ta;
            },
            ontimeout: function (ta) {
                ta = U.dT_.mxt(ta);
                J.ja = !0;
                J.ia = "abort";
                return ta;
            },
        };
        for (const ta of tc)
            try {
                if (ta in z || (Pb && ta in v))
                    U.dT_.bcv("raxeh")
                        ? G(ta)
                        : (va(v, ta).length || v[ta]) && G(ta);
            } catch (Da) {}
    }
    function Ha(v, z, r) {
        Object.defineProperty(v, z, { enumerable: !0, get: r });
    }
    function bb(v, z) {
        const r = v.timeStamp || U.dT_.nw(),
            G = "undefined" === typeof v.eventPhase ? 2 : v.eventPhase,
            J = v.stopPropagation || Sa,
            ia = v.stopImmediatePropagation || Sa,
            ta = v.preventDefault || Sa,
            Da = v.initEvent || Sa,
            yb = Ra(v);
        try {
            const Fb = $a(yb, v);
            Ha(Fb, "target", function () {
                return z;
            });
            Ha(Fb, "currentTarget", function () {
                return z;
            });
            Ha(Fb, "srcElement", function () {
                return z;
            });
            Ha(Fb, "eventPhase", function () {
                return G;
            });
            Ha(Fb, "timeStamp", function () {
                return r;
            });
            Ha(Fb, "stopPropagation", function () {
                return J;
            });
            Ha(Fb, "stopImmediatePropagation", function () {
                return ia;
            });
            Ha(Fb, "preventDefault", function () {
                return ta;
            });
            Ha(Fb, "initEvent", function () {
                return Da;
            });
            return Fb;
        } catch (Fb) {}
        return {
            type: v.type,
            target: z,
            currentTarget: z,
            srcElement: z,
            eventPhase: G,
            bubbles: v.bubbles || !1,
            cancelable: v.cancelable || !1,
            timeStamp: r,
            stopPropagation: J,
            stopImmediatePropagation: ia,
            preventDefault: ta,
            initEvent: Da,
        };
    }
    function $a(v, z) {
        const r = new db[v](z.type, z);
        "ProgressEvent" === v && ua(r, z);
        return r;
    }
    function ua(v, z) {
        Ha(v, "total", function () {
            return z.total;
        });
        Ha(v, "loaded", function () {
            return z.loaded;
        });
    }
    function ka(v) {
        const z = this;
        if (z.constructor) {
            let G = ka;
            Object.defineProperty(z, "constructor", {
                get: function () {
                    return G;
                },
                set: function (J) {
                    G = J;
                },
            });
        }
        z.dtProps = { wa: [], se: v.dtProps.G.upload, xe: v, Wb: !1 };
        const r = z.dtProps;
        for (const G of tc)
            Object.defineProperty(z, G, {
                enumerable: !0,
                get: function () {
                    return r[G];
                },
                set: function (J) {
                    r[G] = J;
                    r.Wb || ((r.Wb = !0), Ja(z, r.se, r.xe));
                },
            });
        z.addEventListener = function (G, J, ia) {
            if (J) {
                var ta = r.wa;
                for (const Da of ta)
                    if (Da[0] === G && Da[1] === J && Da[2] === ia) return;
                ta.push([G, J, !!ia]);
                r.Wb || ((r.Wb = !0), Ja(z, r.se, r.xe));
            }
        };
        z.removeEventListener = function (G, J, ia) {
            let ta;
            const Da = r.wa;
            for (let yb = 0; yb < Da.length; yb++)
                if (
                    ((ta = Da[yb]), ta[0] === G && ta[1] === J && ta[2] === ia)
                ) {
                    Da.splice(yb, 1);
                    break;
                }
        };
        z.dispatchEvent = function (G) {
            const J = r.wa;
            let ia = !1,
                ta = !1;
            if (G.cancelable && G.preventDefault) {
                const Da = G.preventDefault;
                G.preventDefault = function () {
                    ia = !0;
                    return R.preventDefault(Da, this, arguments);
                };
            }
            if (G.stopImmediatePropagation) {
                const Da = G.stopImmediatePropagation;
                G.stopImmediatePropagation = function () {
                    ta = !0;
                    return R.stopImmediatePropagation(Da, this, arguments);
                };
            }
            for (const Da of J)
                ta ||
                    Da[0] !== G.type ||
                    Da[2] ||
                    ("object" === typeof Da[1] && Da[1].handleEvent
                        ? R.dispatchXHRCallback(Da[1].handleEvent, Da[1], [G])
                        : R.dispatchXHRCallback(Da[1], z, [G]));
            return !ia;
        };
    }
    function na(v, z, r) {
        const G = "status" in z ? z.status : 0;
        U.dT_.disE({
            kind: "REQUEST_COMPLETED",
            detail: {
                i: "xmlhttprequest",
                x: v.url,
                m: v.method,
                c: G,
                s: "statusText" in z ? z.statusText : "",
                a: r,
                e: U.dT_.nw(),
                r:
                    U.dT_.gRT(
                        v.url,
                        "xmlhttprequest",
                        v.requestStart,
                        U.dT_.nw(),
                        G
                    ) || void 0,
                q: v.requestStart,
                o: v.ia,
                t: v.ja,
                n: v.Ta,
            },
        });
    }
    function da(v, z) {
        const r = z.ba,
            G = v.status;
        try {
            const J = ob;
            if (J.gEMD && J.iRHCA && J.iRHCA()) {
                const ia = Fa(v.getAllResponseHeaders());
                U.dT_.disE({ kind: "HTTP_RESPONSE", detail: { a: r, h: ia } });
            }
        } catch (J) {}
        200 !== G &&
            U.dT_.mx() &&
            ((z.ja = !0),
            0 === G
                ? (z.ia || (z.ia = "abort"),
                  U.dT_.st(function () {
                      U.dT_.mxc(r);
                  }, 0))
                : U.dT_.mxf(G, v.statusText, r));
        U.dT_.lx(r, void 0, "x");
        z.ba = 0;
    }
    function Ka(v, z) {
        try {
            const r = Object.getPrototypeOf(v);
            let G = Object.getPrototypeOf(v.dtProps.G);
            G || (G = Bb.prototype);
            return r && G && !D.has(r[z]) ? r[z] : null;
        } catch (r) {
            return null;
        }
    }
    function T(v) {
        return U.dT_.iIO(v, ["dtProps"]);
    }
    function ca(v) {
        v.UNSENT = 0;
        v.OPENED = 1;
        v.HEADERS_RECEIVED = 2;
        v.LOADING = 3;
        v.DONE = 4;
    }
    function V(v) {
        "upload" === v
            ? Object.defineProperty(db.XMLHttpRequest.prototype, "upload", {
                  enumerable: !0,
                  configurable: !0,
                  get: function () {
                      if (!this.dtProps.Cb) return Bb.prototype.upload;
                      this.dtProps.upload ||
                          (this.dtProps.upload = new ka(this));
                      return this.dtProps.upload;
                  },
              })
            : Object.defineProperty(db.XMLHttpRequest.prototype, v, {
                  enumerable: !0,
                  configurable: !0,
                  get: function () {
                      return this.dtProps.Cb
                          ? 0 <= nc.indexOf(v)
                              ? this.dtProps.G[v]
                              : this.dtProps[v]
                          : Bb.prototype[v];
                  },
                  set: function (z) {
                      this.dtProps.Cb
                          ? (this.dtProps[v] = z)
                          : (Bb.prototype[v] = z);
                  },
              });
    }
    function K(v, z) {
        const r = db.XMLHttpRequest.prototype[v];
        if (z || U.dT_.iNF(r))
            db.XMLHttpRequest.prototype[v] = (function (G, J) {
                function ia() {
                    let ta;
                    T(this)
                        ? ("open" !== G ||
                              this.dtProps.url ||
                              (this.dtProps.url = arguments[1] + ""),
                          this.dtProps.G.withCredentials !==
                              this.dtProps.withCredentials &&
                              (this.dtProps.G.withCredentials =
                                  this.dtProps.withCredentials),
                          (ta = this.dtProps.G))
                        : (ta = this);
                    return R.XMLHttpRequestCallback(J, ta, arguments);
                }
                D.set(ia, !0);
                return ia;
            })(v, Bb.prototype[v]);
    }
    function pa() {
        Bb = db.XMLHttpRequest;
        bc = ob.ct || clearTimeout;
        db.XMLHttpRequest = Na;
        db.XMLHttpRequest[gc] = Bb;
        Pb = Ta(Bb, Rb);
        Na.prototype = Object.create(
            Bb.prototype,
            Object.getOwnPropertyDescriptors(Bb.prototype)
        );
        Na.prototype.dtProps = { Cb: !1 };
        Na.prototype.dtProps.Cb = !1;
        ca(Na);
        ca(Na.prototype);
        eb(Bb.prototype);
        for (const v in Bb.prototype) {
            if (-1 !== fb.indexOf(v) && -1 === Rb.indexOf(v)) continue;
            const z = v;
            try {
                -1 !== Rb.indexOf(v)
                    ? K(z, !0)
                    : -1 !== wb.indexOf(v)
                    ? V(v)
                    : (db.XMLHttpRequest.prototype[z] = Bb.prototype[z]);
            } catch (r) {
                V(v);
            }
        }
        for (const v in Bb)
            if (!(v in Bb.prototype))
                try {
                    db.XMLHttpRequest[v] = Bb[v];
                } catch (z) {}
        try {
            X();
        } catch (v) {}
    }
    function X() {
        if (!U.dT_.bcv("peti")) {
            var v = EventTarget.prototype,
                z = v.addEventListener;
            v.addEventListener = U.dT_.wwi(function (J, ia, ta) {
                if (T(this)) this.dtProps.Ad(J, ia, ta);
                else return R.AELWrapper(z, this, arguments);
            }, z);
            var r = v.removeEventListener;
            v.removeEventListener = U.dT_.wwi(function (J, ia, ta) {
                if (T(this)) this.dtProps.ze(J, ia, ta);
                else return R.RELWrapper(r, this, arguments);
            }, r);
            var G = v.dispatchEvent;
            v.dispatchEvent = U.dT_.wwi(function (J) {
                return T(this)
                    ? this.dtProps.Ac(J)
                    : R.dispatchWrapper(G, this, arguments);
            }, G);
        }
    }
    function aa(v, z) {
        return new ea(v, z);
    }
    function Z(v) {
        return "string" === typeof v;
    }
    function xa(v) {
        v.Oc || (U.dT_.lx(v.D, void 0, "x"), (v.Oc = !0));
    }
    function P({ ya: v, context: z, xa: r, D: G = 0, url: J = "" }) {
        return ob.aWF(v, z, r, G, J, "x");
    }
    function sa(v, z, r) {
        return function (...G) {
            const J = v.D,
                ia = v.url;
            try {
                if (((v.wc = U.dT_.nw()), U.dT_.ec(J), "function" === typeof z))
                    return P({ ya: z, context: r, xa: G, D: J, url: ia });
            } finally {
                U.dT_.lc(J), xa(v);
            }
        };
    }
    function Ia(v, z, r, G) {
        return function (...J) {
            try {
                U.dT_.ec(v.D);
                const ia = J[0],
                    ta = Ra(ia),
                    Da = new db[ta](ia.type, ia);
                L(ia, G, Da);
                J[0] = Da;
                if ("function" === typeof z)
                    return P({
                        ya: z,
                        context: ia.target,
                        xa: J,
                        D: v.D,
                        url: v.url,
                    });
            } finally {
                U.dT_.lc(v.D);
            }
        };
    }
    function L(v, z, r) {
        z = S(v, "target", z);
        Object.defineProperties(r, {
            target: z,
            currentTarget: z,
            srcElement: z,
            stopPropagation: S(v, "stopPropagation", function (...G) {
                Event.prototype.stopPropagation.apply(v, G);
                return Event.prototype.stopPropagation.apply(r, G);
            }),
            stopImmediatePropagation: S(
                v,
                "stopImmediatePropagation",
                function (...G) {
                    Event.prototype.stopImmediatePropagation.apply(v, G);
                    return Event.prototype.stopImmediatePropagation.apply(r, G);
                }
            ),
            preventDefault: S(v, "preventDefault", function (...G) {
                Event.prototype.preventDefault.apply(v, G);
                return Event.prototype.preventDefault.apply(r, G);
            }),
            eventPhase: S(
                v,
                "eventPhase",
                "undefined" === typeof v.eventPhase ? 2 : void 0
            ),
            timeStamp: S(v, "timeStamp", v.timeStamp || U.dT_.nw()),
            initEvent: S(v, "initEvent"),
        });
    }
    function S(v, z, r) {
        return {
            get() {
                return r || v[z];
            },
            enumerable: !0,
        };
    }
    function ma(v, z, r) {
        return function (...G) {
            try {
                const J = ob;
                if (
                    J.gEMD &&
                    J.iRHCA &&
                    J.iRHCA() &&
                    r.readyState === r.HEADERS_RECEIVED
                ) {
                    const ia = Fa(r.getAllResponseHeaders());
                    U.dT_.disE({
                        kind: "HTTP_RESPONSE",
                        detail: { a: v.D, h: ia },
                    });
                }
            } catch (J) {}
            try {
                if (
                    ((v.wc = U.dT_.nw()),
                    U.dT_.ec(v.D),
                    r.readyState === r.DONE &&
                        U.dT_.mx() &&
                        (0 >= r.status || 400 <= r.status) &&
                        ((v.ja = !0),
                        0 === r.status
                            ? (v.ia || (v.ia = "abort"),
                              U.dT_.st(U.dT_.mxc.bind(null, v.D), 0))
                            : U.dT_.mxf(r.status, r.statusText, v.D)),
                    "function" === typeof z)
                )
                    return P({ ya: z, context: r, xa: G, D: v.D, url: v.url });
            } finally {
                U.dT_.lc(v.D), r.readyState === r.DONE && xa(v);
            }
        };
    }
    function ja(v, z, r) {
        "upload" === z &&
            U.dT_.mx() &&
            !r.Td &&
            (v.upload.addEventListener("error", function () {
                U.dT_.mxg("Upload failure", r.D);
            }),
            (r.Td = !0));
        return r.Fb.has(z) ? r.Fb.get(z) : Reflect.get(v, z);
    }
    function ha(v, z, r) {
        try {
            EventTarget.prototype.addEventListener.call(v, z, r);
        } catch (G) {
            v.addEventListener(z, r);
        }
    }
    function Aa(v) {
        const z = {
            method: "",
            wc: 0,
            requestStart: 0,
            nd: new WeakMap(),
            D: 0,
            async: !0,
            Oc: !1,
            url: "",
            target: v,
            Kh: !1,
            Td: !1,
            Fb: new Map(),
            ia: void 0,
            ja: !1,
            Ta: U.dT_.gtc(),
            toString: () => "[Custom DTProperty Object]",
            toJSON: () => "[Custom DTProperty Object]",
        };
        v.dtProps = z;
        ha(
            v,
            "readystatechange",
            ma(z, () => {}, v)
        );
        U.dT_.mx() &&
            (ha(v, "error", function () {
                z.ja = !0;
                z.ia = void 0;
                return U.dT_.mxf(v.status, v.statusText, z.D);
            }),
            ha(v, "abort", function () {
                z.ja = !0;
                z.ia = "abort";
                return U.dT_.mxc(z.D);
            }),
            ha(v, "timeout", function () {
                z.ja = !0;
                z.ia = "abort";
                return U.dT_.mxt(z.D);
            }));
        ha(v, "loadend", function () {
            U.dT_.disE({
                kind: "REQUEST_COMPLETED",
                detail: {
                    i: "xmlhttprequest",
                    x: z.url,
                    m: z.method,
                    c: z.target.status,
                    s: z.target.statusText,
                    a: z.wc,
                    e: U.dT_.nw(),
                    r:
                        U.dT_.gRT(
                            z.url,
                            "xmlhttprequest",
                            z.requestStart,
                            U.dT_.nw(),
                            z.target.status
                        ) || void 0,
                    q: z.requestStart,
                    o: z.ia,
                    t: z.ja,
                    n: z.Ta,
                },
            });
        });
        return aa(v, {
            get(r, G) {
                return ja(r, G, z);
            },
            set(r, G, J, ia) {
                try {
                    let Da = J;
                    switch (G) {
                        case "onabort":
                        case "onerror":
                        case "ontimeout":
                            Da = sa(z, J, r);
                            z.Fb.set(G, J);
                            break;
                        case "onloadstart":
                        case "onprogress":
                        case "onload":
                        case "onloadend":
                            Da = Ia(z, J, r, ia);
                            z.Fb.set(G, J);
                            break;
                        case "onreadystatechange":
                            (Da = ma(z, J, r)), z.Fb.set(G, J);
                    }
                    var ta = Reflect.set(r, G, Da);
                } catch (Da) {
                    ta = !1;
                }
                return ta;
            },
        });
    }
    function Ba(v, z) {
        try {
            if ("string" === typeof z && "function" === typeof v[z]) {
                const r = U.dT_.iNF(v[z]);
                v[z] = aa(v[z], {
                    apply: Mb.bind(null, z, r),
                    get(G, J, ia) {
                        return "dT_proxy" === J ? !0 : Reflect.get(G, J, ia);
                    },
                });
            }
        } catch (r) {}
    }
    function Wa(v, z) {
        eb(z);
        v = U.dT_.aFr(v, ic.bind(null, z));
        U.dT_.fE(v, Ba.bind(null, z));
    }
    function Va(v, z, r, G, J) {
        v.requestStart = U.dT_.nw();
        if (!v.D) {
            v.D = U.dT_.ex("x", void 0, v.url, !1, z);
            U.dT_.disE({
                kind: "REQUEST_STARTED",
                detail: { i: "xmlhttprequest", x: v.url },
            });
            const ia = U.dT_.sch({ headers: {} }, v.url, v.D, void 0, v.Ta),
                ta = U.dT_.aFr(Reflect.ownKeys(ia.headers), Z);
            U.dT_.fE(ta, function (Da) {
                r.setRequestHeader(Da, ia.headers[Da]);
            });
        }
        try {
            return P({ ya: z, context: G, xa: J, D: v.D, url: v.url });
        } finally {
            v.async || xa(v);
        }
    }
    function Mb(v, z, r, G, J) {
        if (!U.dT_.iIO(G, 22)) return P({ ya: r, context: G, xa: J });
        const ia = G.dtProps;
        let ta = G;
        ia && (z || Pb) && (ta = ia.target);
        if (!ia) return P({ ya: r, context: ta, xa: J });
        switch ((z ? r.name : v) || v) {
            case "addEventListener":
                "function" === typeof J[1] &&
                    ((v = J[1]),
                    (z = ia.nd.get(v))
                        ? (J[1] = z)
                        : ((G = Ia(ia, v, ta, G)),
                          ia.nd.set(v, G),
                          (J[1] = G)));
                break;
            case "removeEventListener":
                (G = ia.nd.get(J[1])) && (J[1] = G);
                break;
            case "open":
                return (
                    (ia.D = 0),
                    (ia.Oc = !1),
                    (ia.method = J[0]),
                    (ia.url = J[1] + ""),
                    (ia.async = !0 === J[2] || void 0 === J[2]),
                    P({ ya: r, context: ta, xa: J })
                );
            case "send":
                return Va(ia, r, G, ta, J);
            case "abort":
                (ia.ja = !0), (ia.ia = "abort"), xa(ia);
        }
        return P({ ya: r, context: ta, xa: J, D: ia.D, url: ia.url });
    }
    function ic(v, z) {
        try {
            const r = v[z];
            if ("function" !== typeof r || r.dT_proxy) return !1;
        } catch (r) {
            return !1;
        }
        return !0;
    }
    function Yb() {
        Pb = Ta(db.XMLHttpRequest, Rb) || Ta(db.EventTarget, fb);
        ea = db.Proxy;
        const v = db.XMLHttpRequest.prototype,
            z = EventTarget.prototype,
            r = db.XMLHttpRequest;
        db.XMLHttpRequest = aa(db.XMLHttpRequest, {
            construct(G, J) {
                Wa(Rb, v);
                Wa(fb, z);
                return Aa(Reflect.construct(G, J));
            },
        });
        db.XMLHttpRequest[gc] = r;
        Wa(Rb, v);
        v.constructor = db.XMLHttpRequest;
        Wa(fb, z);
    }
    this.dT_ && dT_.prm && dT_.prm();
    var U = "undefined" !== typeof window ? window : self,
        db =
            "undefined" !== typeof globalThis
                ? globalThis
                : "undefined" !== typeof window
                ? window
                : void 0,
        gc = Symbol.for("dt_2");
    Symbol.for("dt_3");
    var rc =
            "cancelBubble defaultPrevented eventPhase isTrusted lengthComputable loaded position returnValue timeStamp total totalSize type".split(
                " "
            ),
        tc =
            "onabort onerror onload onloadend onloadstart onprogress ontimeout".split(
                " "
            ),
        nc =
            "responseText response status statusText responseBody responseStream responseURL responseXML responseType".split(
                " "
            ),
        wb = [...nc, ...tc, "onreadystatechange", "upload", "readyState"],
        Rb =
            "open send getAllResponseHeaders getResponseHeader setRequestHeader overrideMimeType abort sendAsBinary setAttributionReporting setPrivateToken".split(
                " "
            ),
        fb = ["addEventListener", "removeEventListener", "dispatchEvent"],
        Wb = [...Rb, ...wb, ...fb],
        Pb = !1,
        ec = ["addEventListener", "removeEventListener"],
        bc,
        Bb,
        D = new WeakMap(),
        R = {
            handleEventCallback: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            callOpen: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            send: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            getAllResponseHeaders: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            getResponseHeader: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            setRequestHeader: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            overrideMimeType: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            RELWrapper: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            AELWrapper: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            dispatchWrapper: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            onreadystatechangeCallback: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            dispatchXHRCallback: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            XMLHttpRequestCallback: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            preventDefault: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
            stopImmediatePropagation: function (v, z, r) {
                return ob.aWF(v, z, r);
            },
        };
    ka.prototype.toString = function () {
        return "[XMLHttpRequestUpload]";
    };
    var Ma = {
            readyState: 0,
            response: "",
            responseText: "",
            responseType: "",
            responseURL: "",
            status: 0,
            statusText: "",
            timeout: 0,
            withCredentials: !1,
        },
        ea,
        gb,
        kb,
        ab = db.dT_;
    if (
        ab &&
        "ea" in ab &&
        (null === (kb = (gb = U.dT_).smbi) || void 0 === kb
            ? 0
            : kb.call(gb, "x"))
    ) {
        var ob = ab;
        "object" === typeof db.Reflect &&
        "function" === typeof db.Proxy &&
        U.dT_.bcv("expw") &&
        !U.dT_.gBI().edge
            ? Yb()
            : pa();
    }
})();
