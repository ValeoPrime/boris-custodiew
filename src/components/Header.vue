<template>
  <section class="header">
    <div class="header__picture">
      <img
        src="@/assets/img/header-picture.jpg"
        alt="picture"
        class="header__picture__img header__picture__img--hei"
      />
      <img
        src="~@/assets/img/header__min__img.jpg"
        alt="picture"
        class="header__picture__img header__picture__img--min"
      />

    </div>
    <div class="header__content">
      <HeaderNavigation />
      <div class="title__wrapper">
        <div class="years__life">
          1878-1927
        </div>
        <h1 class="header__title">борис кустодиев</h1>
        <p class="header__description">
          Художник, запечатлевший на своих ярких и жизнерадостных полотнах сцены
          русских будней и праздников. Обладал редким безграничным талантом,
          которому, в первую очередь, было присуще особое чувство и восприятие
          родной природы.
        </p>
      </div>
      <a class="logo__icon" href="#" target="_blank"
        ><img src="@/assets/img/icons/logo.svg" alt="logo"
      /></a>
    </div>
  </section>
</template>

<script>
import HeaderNavigation from "@/components/HeaderNavigation.vue";

export default {
  components: {
    HeaderNavigation,
  },
};
</script>

<style lang="sass">
.header
  display: flex
  max-width: 1440px
  min-height: 100vh
  margin: 0 auto
  color: #F5F5F5
  .header__picture
    width: 32%
    min-height: 100%
    .header__picture__img
      height: 100%
    .header__picture__img--min
      display: none
  .header__content
    background: #202020
    position: relative
    min-height: 100%
    display: flex
    align-items: center
    width: 100%
  .title__wrapper
    padding-left: 200px
    max-width: 730px
    position: relative
    .years__life
      position: absolute
      transform: rotate(-90deg)
      bottom: 40%
      left: -20px
      font-family: Yeseva One, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 64px
      line-height: 91.49%
      text-align: center
    .header__title
      font-family: Yeseva One, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 80px
      line-height: 100%
    .header__description
      margin-top: 30px
      font-family: Helvetica-Light, sans-serif
      font-size: 16px
      line-height: 29px
  .logo__icon
    position: absolute
    width: 60px
    height: 60px
    bottom: 40px
    right: 100px

@media screen and (max-width: 1024px)
  .header
    flex-direction: column
    .header__content
      height: 620px
    .header__picture
      width: 100%
      order: 1
      img
        min-width: 100%
      .header__picture__img
        height: 400px
      .header__picture__img--hei
        display: none
      .header__picture__img--min
        display: block

@media screen and (max-width: 768px)
  .header
    .header__content
      height: 550px
    .title__wrapper
      padding-left: 40px
      padding-right: 20px
      .header__title
        font-size: calc( (100vw - 320px)/(1280 - 320) * (80 - 40) + 40px);
      .years__life
        position: static
        transform: none
        font-size: calc( (100vw - 320px)/(1280 - 320) * (80 - 20) + 20px)
        margin-top: 40px
        display: flex
        justify-content: flex-start
    .header__picture
      .header__picture__img
        height: 250px

@media screen and (max-width: 550px)
  .header
    .header__title
      margin-top: 10px
    .logo__icon
      display: none
    .title__wrapper
      padding-left: 20px
      .header__description
        margin-top: 20px
    .header__picture
      .header__picture__img
        height: 125px
</style>
