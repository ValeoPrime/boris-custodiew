<template>
  <section class="pictureHeader">
    <div class="pictureHeader__content">
      <HeaderNavigation />
      <div class="title__wrapper">
        <h1 class="pictureHeader__title">картины</h1>
        <div class="author">бориса кустодиева</div>
      </div>
      <div class="pictures__container">
        <div class="pictures__wrapper">
          <div class="picture__container">
            <img src="@/assets/img/picture1.png" alt="picture" />
          </div>
          <div class="picture__container">
            <img src="@/assets/img/picture2.png" alt="picture" />
          </div>
          <div class="picture__container">
            <img src="@/assets/img/picture3.png" alt="picture" />
          </div>
          <div class="picture__container">
            <img src="@/assets/img/picture4.png" alt="picture" />
          </div>
        </div>
      </div>

      <a class="logo__icon" href="#" target="_blank"
        ><img src="@/assets/img/logo.svg" alt="logo"
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
.pictureHeader
  display: flex
  max-width: 1440px
  min-height: 100vh
  margin: 0 auto
  color: #F5F5F5
  overflow: hidden

  &__title
    font-family: Yeseva One, sans-serif
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 91.49%;
  .pictureHeader__content
    background: #202020
    position: relative
    min-height: 100%
    display: flex
    flex-wrap: wrap
    align-items: center
    width: 100%
    padding-bottom: 180px
  .title__wrapper
    display: flex
    justify-content: center
    width: 100%
    margin-top: 180px
    .author
      width: 240px
      font-family: Helvetica,sans-serif
      font-size: 40px;
      line-height: 50px;
      padding-left: 32px
  .pictures__wrapper
    display: flex
    margin-top: 60px
    min-width: 1560px
    justify-content: space-between

    .picture__container
      width: 360px
      height: 258px
      transition: all 1s
      img
        max-width: 100%
        min-width: 100%
        max-height: 100%
        min-height: 100%
  .logo__icon
    position: absolute
    width: 60px
    height: 60px
    bottom: 40px
    right: 100px

@media screen and (max-width: 1024px)
  .pictureHeader
    flex-direction: column
    .pictureHeader__content
      height: 620px
    .pictures__wrapper
      justify-content: flex-start
      .picture__container
        width: 280px
        height: 200px
        margin-right: 20px
  .logo__icon
    display: none


@media screen and (max-width: 768px)
  .pictureHeader
    .pictureHeader__content
      height: 550px
    .title__wrapper
      padding-left: 40px
      padding-right: 20px
      .pictureHeader__title
        font-size: calc( (100vw - 320px)/(1280 - 320) * (80 - 40) + 40px);
    .pictures__container
      overflow-x: auto
    .pictures__wrapper
      min-width: 768px
      margin-right: 1px
      .picture__container
          width: 190px
          height: 160px
@media screen and (max-width: 550px)
  .pictureHeader
    .pictureHeader__content
      height: 550px
    .title__wrapper
      padding-left: 20px
      flex-direction: column
      margin-top: 120px
      .author
        padding-left: 0
        margin-top: 20px
</style>
