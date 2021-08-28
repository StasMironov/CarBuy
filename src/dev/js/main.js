import ScrollTrigger from "gsap/ScrollTrigger";
import $ from "jquery";
import Slider from "./class/Slider";

$.fn.exists = function () {
  return $(this).length;
};

const projectFunc = {
  createSlider() {
    const slider = new Slider(".js-slider", 3, 0);
    slider.createSlider();
    slider.updateSlider("loop", true);
    slider.updateSlider("center", true);
  },
  initFile() {
    if ($(".js-file").exists()) {
      try {
        let fileEl = document.querySelectorAll(".js-file");

        fileEl.forEach((element, _) => {
          let label = $(element).find(".file__label");
          let inputEl = $(element).find(".file__input");

          $(inputEl).change(function () {
            if (typeof this.files != "undefined") {
              if ($(".remove-file").exists()) {
                $(".remove-file").remove();
              }
              if (this.files.length == 0) {
                label.removeClass("withFile").text(label.data("default"));
              } else {
                let file = this.files[0];
                let name = file.name;
                const elDelete = document.createElement("span");
                elDelete.classList.add("remove-file");
                $(".file").append(elDelete);
                $(".js-file").on("click", ".remove-file", function (event) {
                  event.preventDefault();
                  $(inputEl).val("");
                  label.removeClass("withFile");
                  label.text("Добавить фото");
                  $(elDelete).remove();
                });

                label.addClass("withFile").text(name);
              }
            } else {
              let name = this.value.split("\\");
              label.addClass("withFile").text(name[name.length - 1]);
            }
            return false;
          });
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  initShare() {
    if ($(".js-share").exists()) {
      try {
        $("a.js-share").each(function (idx, link) {
          var template = $(link).data("share");
          $(link).attr(
            "href",
            template.replace("{url}", encodeURIComponent(window.location.href))
          );
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  initForm() {
    if ($(".js-form").exists()) {
      try {
        let form = document.querySelectorAll(".js-form");

        for (let i = 0; i < form.length; i++) {
          let validateBtn = form[i].querySelector(".js-form button"),
            fields = form[i].querySelectorAll(".js-field"),
            price = form[i].querySelector(".js-field-price"),
            phone = form[i].querySelector(".js-field-phone");

          form[i].addEventListener("submit", function (event) {
            event.preventDefault();

            removeValidation(form[i]);

            checkFieldsPresence(fields);

            if (phone) {
              checkPhoneMatch(phone);
            }

            if (price) {
              checkPriceMatch(price);
            }

            if (checkForm(fields)) {
              this.submit();
            }
          });
        }

        let checkForm = (fields) => {
          let status = true;
          let ch = 0;

          for (let i = 0; i < fields.length; i++) {
            if (
              fields[i].value !== "" &&
              !$(fields[i]).siblings(".error").exists()
            ) {
              status = true;
            } else {
              status = false;
              ch++;
            }
          }

          if (ch === 0) {
            status = true;
          } else {
            status = false;
          }
          return status;
        };

        let generateError = (text) => {
          var error = document.createElement("div");
          error.className = "error";
          error.style.color = "red";
          error.innerHTML = text;

          setTimeout(() => {
            error.style.opacity = "1";
          }, 0.001);
          return error;
        };

        let removeValidation = (form) => {
          let errors = form.querySelectorAll(".error");
          for (let i = 0; i < errors.length; i++) {
            errors[i].remove();
          }
        };

        let checkFieldsPresence = (fields) => {
          for (let i = 0; i < fields.length; i++) {
            if (!fields[i].value && !$(fields[i]).is("textarea")) {
              let error = generateError("Поле обязательно для заполнения");

              fields[i].classList.add("warning");

              if ($(fields[i]).parent().find(".error").exists()) {
                $(fields[i]).parent().find(".error").replaceWith(error);
              } else {
                $(error).insertAfter(fields[i]);
              }
            } else {
              fields[i].classList.remove("warning");
            }
          }
        };

        let checkPriceMatch = (price) => {
          if (price.value <= 0) {
            let error = generateError("Некорректная цена");
            price.classList.add("warning");

            if ($(price).parent().find(".error").exists()) {
              $(price).parent().find(".error").replaceWith(error);
            } else {
              $(error).insertAfter(price);
            }
          } else {
            price.classList.remove("warning");
          }
        };

        let checkPhoneMatch = (phone) => {
          const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

          if (!re.test(phone.value)) {
            let error = generateError("Некорректный номер телефона");
            phone.classList.add("warning");

            if ($(phone).parent().find(".error").exists()) {
              $(phone).parent().find(".error").replaceWith(error);
            } else {
              $(error).insertAfter(phone);
            }
          } else {
            phone.classList.remove("warning");
          }
        };
      } catch (err) {
        console.log(err);
      }
    }
  },
  animateFunc: {
    about: {
      options: {
        showTimeline: new TimelineMax({
          reversed: true,
          paused: true,
          scrollTrigger: {
            trigger: ".company-about",
            start: "top-=60% center",
          },
        }),

        setShow: function () {
          return this.showTimeline
            .set([".company-about__quote", ".company-about__txt"], { y: 20 })
            .set(".benefit--simple .benefit__item", { x: -60 })
            .to(".company-about h2", 0.5, {
              autoAlpha: 1,
            })
            .to(".company-about__quote", 0.3, {
              autoAlpha: 1,
              y: 0,
            })
            .to(".company-about__txt", 0.3, {
              autoAlpha: 1,
              y: 0,
            })
            .to(".benefit--simple .benefit__item", 0.6, {
              autoAlpha: 1,
              x: 0,
              stagger: 0.2,
            });
        },
      },
    },
    benefit: {
      options: {
        showTimeline: new TimelineMax({
          reversed: true,
          paused: true,
          scrollTrigger: {
            trigger: ".company-benefit",
            start: "top-=60% center",
          },
        }),

        setShow: function () {
          return this.showTimeline
            .set([".company-benefit__txt"], { y: 20 })
            .set(".benefit--basic .benefit__item", { scale: 0 })
            .set(".list li", { y: -30 })
            .to(".company-benefit h2", 0.5, {
              autoAlpha: 1,
            })
            .to(".company-benefit__txt", 0.75, {
              autoAlpha: 1,
              y: 0,
              stagger: 0.15,
            })
            .to(".benefit--basic .benefit__item", 0.6, {
              scale: 1,
              autoAlpha: 1,
              stagger: 0.2,
            })
            .to(".list li", {
              y: 0,
              autoAlpha: 1,
              stagger: 0.2,
            });
        },
      },
    },
  },
};

function init() {
  projectFunc.createSlider();
  projectFunc.initFile();
  projectFunc.initShare();
  projectFunc.initForm();
  projectFunc.animateFunc.about.options.setShow();
  projectFunc.animateFunc.benefit.options.setShow();
}

$(() => {
  init();
});
