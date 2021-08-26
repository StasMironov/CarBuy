import $ from "jquery";
import Slider from "./class/Slider";

$.fn.exists = function () {
  return $(this).length;
};

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
                label.text("Прикрепить файлы: фото товаров с браком и т.п.:");
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
}

$(() => {
  init();
});
