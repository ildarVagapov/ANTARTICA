(() => {
  "use strict";
  let e = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
      );
    },
  };
  let t = !0,
    o = (e = 500) => {
      let o = document.querySelector("body");
      if (t) {
        let r = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < r.length; e++) {
            r[e].style.paddingRight = "0px";
          }
          (o.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    },
    r = (e = 500) => {
      let o = document.querySelector("body");
      if (t) {
        let r = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < r.length; e++) {
          r[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (o.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    };
  function n(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  let a = (e, t = !1, r = 500, a = 0) => {
    const l = document.querySelector(e);
    if (l) {
      let c = "",
        s = 0;
      t &&
        ((c = "header.header"), (s = document.querySelector(c).offsetHeight));
      let i = {
        speedAsDuration: !0,
        speed: r,
        header: c,
        offset: a,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (o(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(l, "", i);
      else {
        let e = l.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: s ? e - s : e, behavior: "smooth" });
      }
      n(`[gotoBlock]: Юхуу...едем к ${e}`);
    } else n(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
  };
  const l = { inputMaskModule: null, selectModule: null };
  let c = {
    getErrors(e) {
      let t = 0,
        o = e.querySelectorAll("*[data-required]");
      return (
        o.length &&
          o.forEach((e) => {
            (null === e.offsetParent && "SELECT" !== e.tagName) ||
              e.disabled ||
              (t += this.validateInput(e));
          }),
        t
      );
    },
    validateInput(e) {
      let t = 0;
      return (
        "email" === e.dataset.required
          ? ((e.value = e.value.replace(" ", "")),
            this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
          : ("checkbox" !== e.type || e.checked) && e.value
          ? this.removeError(e)
          : (this.addError(e), t++),
        t
      );
    },
    addError(e) {
      e.classList.add("_form-error"),
        e.parentElement.classList.add("_form-error");
      let t = e.parentElement.querySelector(".form__error");
      t && e.parentElement.removeChild(t),
        e.dataset.error &&
          e.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form__error">${e.dataset.error}</div>`
          );
    },
    removeError(e) {
      e.classList.remove("_form-error"),
        e.parentElement.classList.remove("_form-error"),
        e.parentElement.querySelector(".form__error") &&
          e.parentElement.removeChild(
            e.parentElement.querySelector(".form__error")
          );
    },
    formClean(e) {
      e.reset(),
        setTimeout(() => {
          let t = e.querySelectorAll("input,textarea");
          for (let e = 0; e < t.length; e++) {
            const o = t[e];
            o.parentElement.classList.remove("_form-focus"),
              o.classList.remove("_form-focus"),
              c.removeError(o),
              (o.value = o.dataset.placeholder);
          }
          let o = e.querySelectorAll(".checkbox__input");
          if (o.length > 0)
            for (let e = 0; e < o.length; e++) {
              o[e].checked = !1;
            }
          if (l.selectModule) {
            let t = e.querySelectorAll(".select");
            if (t.length)
              for (let e = 0; e < t.length; e++) {
                const o = t[e].querySelector("select");
                l.selectModule.selectBuild(o);
              }
          }
        }, 0);
    },
    emailTest: (e) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
  };
  let s = !1;
  setTimeout(() => {
    if (s) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    document.addEventListener("click", function (t) {
      if (e.any()) {
        console.log("есть");
        const e = t.target;
        e.closest(".items-cruise") &&
          (console.log("да"),
          e.closest(".items-cruise").classList.toggle("_open-cruise")),
          e.closest(".item-price") &&
            (console.log("да"),
            e.closest(".item-price").classList.toggle("_open-price"));
      }
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          t &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? o(e) : r(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      const e = document.querySelectorAll(
        "input[placeholder],textarea[placeholder]"
      );
      e.length &&
        e.forEach((e) => {
          e.dataset.placeholder = e.placeholder;
        }),
        document.body.addEventListener("focusin", function (e) {
          const t = e.target;
          ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
            (t.dataset.placeholder && (t.placeholder = ""),
            t.classList.add("_form-focus"),
            t.parentElement.classList.add("_form-focus"),
            c.removeError(t));
        }),
        document.body.addEventListener("focusout", function (e) {
          const t = e.target;
          ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
            (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
            t.classList.remove("_form-focus"),
            t.parentElement.classList.remove("_form-focus"),
            t.hasAttribute("data-validate") && c.validateInput(t));
        });
    })(),
    (function (e) {
      const t = document.forms;
      if (t.length)
        for (const e of t)
          e.addEventListener("submit", function (e) {
            o(e.target, e);
          }),
            e.addEventListener("reset", function (e) {
              const t = e.target;
              c.formClean(t);
            });
      async function o(t, o) {
        if (0 === (e ? c.getErrors(t) : 0)) {
          if (t.hasAttribute("data-ajax")) {
            o.preventDefault();
            const e = t.getAttribute("action")
                ? t.getAttribute("action").trim()
                : "#",
              n = t.getAttribute("method")
                ? t.getAttribute("method").trim()
                : "GET",
              a = new FormData(t);
            t.classList.add("_sending");
            const l = await fetch(e, { method: n, body: a });
            if (l.ok) {
              await l.json();
              t.classList.remove("_sending"), r(t);
            } else alert("Ошибка"), t.classList.remove("_sending");
          } else t.hasAttribute("data-dev") && (o.preventDefault(), r(t));
        } else {
          o.preventDefault();
          const e = t.querySelector("._form-error");
          e && t.hasAttribute("data-goto-error") && a(e, !0, 1e3);
        }
      }
      function r(e) {
        document.dispatchEvent(
          new CustomEvent("formSent", { detail: { form: e } })
        ),
          c.formClean(e),
          n(`[Формы]: ${"Форма отправлена!"}`);
      }
    })(!0),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const o = t.closest("[data-goto]"),
              r = o.dataset.goto ? o.dataset.goto : "",
              n = !!o.hasAttribute("data-goto-header"),
              l = o.dataset.gotoSpeed ? o.dataset.gotoSpeed : "500";
            a(r, n, l), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            o = t.target;
          if ("navigator" === o.dataset.watch) {
            const e = o.id,
              r =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? r && r.classList.add("_navigator-active")
              : r && r.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })();
})();
