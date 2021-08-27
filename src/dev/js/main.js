import $ from "jquery";
import Slider from "./class/Slider";

$.fn.exists = function () {
  return $(this).length;
};

// $(document).ready(function () {
//   if ($(".js-phone").exists()) {
//     try {
//       $(".js-phone").mask("(999) 999-9999");
//     } catch (err) {
//       console.log(err);
//     }
//   }
// });

const projectFunc = {
  createSlider() {
    const slider = new Slider(".js-slider", 3, 0);
    slider.createSlider();
    // slider.updateSlider("initialSlide", 2);
    slider.updateSlider("loop", true);
    slider.updateSlider("center", true);
  },
};

function init() {
  projectFunc.createSlider();

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
}

$(() => {
  init();
});
