<template>
  <section class="slider">
    <div class="container">
      <div class="carousel">
        <div class="carousel__pagination">
          <div class="carousel__pagination__wrapper">
            <div
              class="pagination__item__wrapper"
              v-bind:class="{ active__pagination: index + 1 == sliderActive }"
              v-for="(slide, index) in sliderList"
              v-bind:key="index"
              v-on:click="openSlide(index + 1)"
              v-bind:style="{ left: sliderOffsetLeft / 6 + 'px' }"
            >
              <img :src="slide.img" alt="image" class="pagination__item" />
            </div>
          </div>
        </div>
        <div class="carousel__inner">
          <div class="carousel__slides">
            <transition name="fade">
              <img
                class="carousel__item"
                v-if="sliderList[sliderActive]"
                :src="sliderList[sliderActive - 1].img"
                :key="sliderActive"
                alt="image"
              />
            </transition>
          </div>
        </div>

        <div class="carousel__arrows__wrap">
          <div
            class="carousel__left"
            v-bind:class="{ disable: disableLeftSwitch }"
          >
            <svg
              class="carousel__left--icon"
              v-on:click="prevSlide"
              width="41"
              height="12"
              viewBox="0 0 41 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.5962 11.0104 6.5962 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.5962 1.46447 6.5962 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM41 5.25L1 5.25V6.75L41 6.75V5.25Z"
                fill="#BFBFBF"
              />
            </svg>
          </div>
          <div class="slider__title__wrapper">
            <h3 class="slider__title">
              {{ sliderList[sliderActive - 1].name }}
            </h3>
          </div>

          <div class="slider__count">
            {{ sliderActive }} <span>/ {{ sliderList.length }}</span>
          </div>
          <div
            class="carousel__right"
            v-bind:class="{ disable: disableRightSwitch }"
          >
            <svg
              class="carousel__right--icon"
              v-on:click="nextSlide"
              width="41"
              height="12"
              viewBox="0 0 41 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.5303 6.53033C40.8232 6.23743 40.8232 5.76256 40.5303 5.46967L35.7574 0.696696C35.4645 0.403803 34.9896 0.403803 34.6967 0.696696C34.4038 0.98959 34.4038 1.46446 34.6967 1.75736L38.9393 6L34.6967 10.2426C34.4038 10.5355 34.4038 11.0104 34.6967 11.3033C34.9896 11.5962 35.4645 11.5962 35.7574 11.3033L40.5303 6.53033ZM6.55671e-08 6.75L40 6.75L40 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                fill="#BFBFBF"
              />
            </svg>
          </div>
        </div>
        <router-link class="allPictures allPictures--ful" to="/pictures"
          ><span>все картины</span></router-link
        >
        <router-link class="allPictures allPictures--mob" to="/pictures"
          ><span>все картины</span></router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sliderAllCount: 0,

      sliderActive: 1,
      // Отступ тела со слайдами в контейнере
      sliderOffsetLeft: 0,
      // Шаг одного слайда = его длина
      sliderOffsetStep: 0,
      // Список слайдов
      sliderList: [
        { img: "./img/SliderImage.jpg" },
        { img: "./img/SliderImage2.jpg" },
      ],
      disableLeftSwitch: true,
      disableRightSwitch: false,
    };
  },

  methods: {
    initSlider: function() {
      let sliderBody = this.$el.querySelector(".carousel");

      this.sliderOffsetStep = sliderBody.clientWidth;
      this.sliderAllCount = this.sliderList.length;

      const carousel = document.querySelector(".carousel");

      let startTouchPos = 0;
      let endTouchPos = 0;

      //swipe

      carousel.addEventListener(
        "touchstart",
        (e) => (startTouchPos = e.touches[0].clientX)
      );
      carousel.addEventListener(
        "touchmove",
        (e) => (endTouchPos = e.touches[e.touches.length - 1].clientX)
      );

      carousel.addEventListener("touchend", (e) => {
        if (startTouchPos - endTouchPos > 10) {
          this.nextSlide();
        }
        if (startTouchPos - endTouchPos < -10) {
          this.prevSlide();
        }
      });
    },

    openSlide: function(id) {
      if (id > 0 && id <= this.sliderAllCount) {
        this.sliderActive = id;

        this.sliderOffsetLeft = -(
          this.sliderActive * this.sliderOffsetStep -
          this.sliderOffsetStep
        );
      }
    },

    nextSlide: function() {
      if (this.sliderActive < this.sliderAllCount) {
        this.sliderActive += 1;
        this.openSlide(this.sliderActive);
        this.disableLeftSwitch ? (this.disableLeftSwitch = false) : null;
        if (this.sliderActive == this.sliderAllCount) {
          this.disableRightSwitch = true;
        }
        if (this.sliderActive == 0) {
          this.disableRightSwitch = false;
        }
      }
    },

    prevSlide: function() {
      if (this.sliderActive > 1) {
        this.sliderActive -= 1;

        this.disableSwitch = false;
        this.disableRightSwitch ? (this.disableRightSwitch = false) : null;
        if (this.sliderActive == 1) {
          this.disableLeftSwitch = true;
        } else {
          this.disableLeftSwitch = false;
        }
      }
    },
  },

  mounted: async function() {
    this.sliderList = await fetch("./data/allPictures.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.pictures;
      });
    this.initSlider();
    window.addEventListener("resize", () => {
      this.openSlide(this.sliderActive);
    });
  },
};
</script>

<style lang="sass" scoped>
.slider
  background: #202020;
  transition: all 1s
.carousel
  width: 100%
  padding-top: 40px
  position: relative
.carousel__pagination
  padding-bottom: 40px
  max-width: 800px
  overflow: hidden
  position: relative
  .carousel__pagination__wrapper
    display: flex
    min-width: auto
    width: 100%

.pagination__item__wrapper
  min-width: 120px
  min-height: 90px
  max-height: 90px
  position: relative
  cursor: pointer
  img
    width: 100%
    height: 100%
  &::after
    content: ""
    position: absolute
    width: 120px
    height: 90px
    top: 0
    left: 0
    background-color: rgba(0, 0, 0, 0.45 )
    z-index: 10
.active__pagination
  &:after
    background-color: rgba(0, 0, 0, 0 )

.pagination__item__wrapper + .pagination__item__wrapper
  margin-left: 40px
.allPictures
  width: 120px
  height: 90px
  display: flex
  justify-content: flex-end
  align-items: center
  font-family: Helvetica,sans-serif
  font-size: 14px;
  line-height: 20px;
  color: #BFBFBF;
  cursor: pointer
  span
    padding-right: 19px
  span:after
    content: ""
    position: absolute
    width: 4.5px
    height: 4.5px
    border-top: 1.2px solid #BFBFBF;
    border-right: 1.2px solid #BFBFBF;
    transform: rotate(45deg)
    top: calc( 50% - 2px )
    right: 5px
.allPictures--ful
  position: absolute
  top: 40px
  right: 0px
.allPictures--mob
  display: none


.carousel__inner
  width: 100%;
  height: 520px;
  position: relative;
  overflow: hidden;
.carousel__slides
  min-width: auto
  height: 100%
  display: flex
  align-items: center
  position: relative
  transition: all .5s ease
.carousel__item
  width: 100%;
  height: 100%
  background-size: cover;
  background-position: center;
  flex: 1 100%;




.carousel__arrows__wrap
    position: relative
    color: #F5F5F5;
    padding: 20px 0 40px
    font-family: Helvetica-Light, sans-serif
    font-size: 14px;
    line-height: 20px;
    width: 100%
    .slider__title, .slider__count
        text-align: center
    .slider__count
        line-height: 91.49%;
        margin-top: 10px
    .slider__count span
        color: rgba(#F5F5F5, .6)
    .carousel__left,
    .carousel__right
        position: absolute;
        top: 40px;
        z-index: 5;
        cursor: pointer;
    .disable
      path
        fill: rgba(0,0,0, .5 )


    .carousel__right
        right: 0;

.fade-enter-active
  animation: bounce-on 1s ease-in;

.fade-leave-active
  animation: bounce-in .5s ease-in;

@keyframes bounce-in
  0%
    opacity: 1;
  25%
  opacity: 0.75;
  50%
    opacity: 0.5;
  75%
    opacity: 0.25;
  100%
    opacity: 0;

@keyframes bounce-on
  0%
    opacity: 0;
  25%
  opacity: 0.25;
  50%
    opacity: 0.5;
  75%
    opacity: 0.75;
  100%
    opacity: 1;




@media screen and (max-width: 950px)
  .container
    max-width: 756px
  .carousel__inner
    height: 400px
  .carousel
    padding: 100px 60px 130px
  .carousel__pagination, .carousel__left, .carousel__right
    display: none
  .carousel__arrows__wrap
    position: static
    padding: 0
    .slider__title__wrapper
      position: absolute
      top: 60px
      left: calc( 50% - 150px )
      width: 300px
    .slider__title
      text-align: center
    .slider__count
      margin-top: 20px
  .allPictures--ful
    display: none
  .allPictures--mob
    display: flex
    width: 120px
    height: 90px
    position: absolute
    bottom: -15px
    right: calc( 50% - 60px )
@media screen and (max-width: 768px)
  .container
    max-width: 620px
  .carousel__inner
    height: 300px
@media screen and (max-width: 550px)
  .carousel
    padding: 100px 20px
  .carousel__item
    width: 200px
    height: 156px
  .carousel__inner
    height: 200px
  .carousel__item + .carousel__item
    margin-left: 20px
</style>
