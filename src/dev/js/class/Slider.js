import Swiper from "swiper/swiper-bundle.min";

class Slider {
  constructor(name, view, space) {
    this.init = true;
    this.name = name;
    this.view = view;
    this.space = space;
    this.settings = {
      slidesPerView: this.view,
      spaceBetween: this.space,
      autoplay: {
        delay: 3000,
      },
      touchRatio: 0,
      effect: "coverflow",
      observer: true,
      observeParents: true,
      coverflowEffect: {
        rotate: 8,
        depth: 10,
        modifier: 1,
        slideShadows: false,
        stretch: 2,
      },
    };
  }

  createSlider() {
    this.slider = new Swiper(this.name, {
      slidesPerView: this.view,
      spaceBetween: this.space,
    });

    setTimeout(() => {
      $(this.name).css("opacity", 1);
    }, 600);

    return this.slider;
  }

  updateSlider(props, res = "") {
    switch (props) {
      case "auto":
        if (res) {
          this.slider.params.autoplay.start();
          this.slider.update();
        } else {
          this.slider.params.autoplay.stop();
          this.slider.update();
        }
        break;
      case "loop":
        this.settings.loop = res;
        this.slider.destroy();
        this.slider = new Swiper(this.name, this.settings);
        break;
      case "space":
        this.slider.params.spaceBetween = res;
        this.slider.update();
        break;
      case "view":
        this.slider.params.slidesPerView = res;
        this.slider.update();
        break;
      case "center":
        this.slider.params.centeredSlides = res;
        this.slider.update();
        break;
      case "initialSlide":
        this.slider.params.initialSlide = res;
        this.slider.update();
        console.log(this.slider.params.initialSlide);
        break;
      case "slideActiveClass":
        this.slider.params.slideActiveClass = res;
        this.slider.update();
        break;
      case "slideToClickedSlide":
        this.slider.params.slideToClickedSlide = res;
        this.slider.update();
        break;
      case "controller":
        this.slider.params.controller = res;
        this.slider.update();
        console.log(this.slider.params.controller);
        break;
      case "loop":
        this.slider.params.loop = false;
        this.slider.update();
        break;
      case "group":
        this.slider.params.slidesPerGroup = res;
        this.slider.params.speed = 1000;
        this.slider.update();
        break;
      case "skip":
        this.slider.params.slidesPerGroupSkip = res;
        this.slider.update();
        break;
      case "autoHeight":
        this.slider.params.autoHeight = res;
        this.slider.update();
        break;
      case "effect":
        this.settings.effect = res;
        this.settings.fadeEffect = {
          crossFade: true,
        };
        this.slider.destroy();
        this.slider = new Swiper(this.name, this.settings);
        break;
      case "pagination":
        let pagEl = $(this.name).find(".swiper-pagination")[0];

        if (res === "custom") {
          this.settings.pagination = {
            el: pagEl,
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          };
        } else {
          this.settings.pagination = {
            el: pagEl,
            clickable: true,
          };
        }
        this.slider.destroy();
        this.slider = new Swiper(this.name, this.settings);
        break;
      case "arrow":
        let arrowNext = $(this.name).find(".arrow__link--next")[0];
        let arrowPrev = $(this.name).find(".arrow__link--prev")[0];
        this.settings.navigation = {
          nextEl: arrowNext,
          prevEl: arrowPrev,
        };
        this.slider.destroy();
        this.slider = new Swiper(this.name, this.settings);
        break;
    }
  }
}

export default Slider;
