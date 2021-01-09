<template>
  <div
    class="ya-share"
    id="ya-shareLight"
    data-curtain
    data-services="vkontakte,facebook,twitter"
  ></div>
</template>

<script>
export default {
  methods: {
    yandex_shared: function(id) {
      new Ya.share2(id, {
        content: {},
        theme: {
          services: "vkontakte,facebook,twitter",
          lang: "ru",
          limit: 3,
          size: "m",
          bare: false,
          direction: "horizontal",
          useLinks: true
        },
      });
    },
  },
  mounted: function() {
    this.yandex_shared("ya-shareLight");
  },
  updated: function() {
    this.yandex_shared("ya-shareLight");
  },
};
</script>

<style lang="sass">
#ya-shareLight
  .ya-share2__icon
    height: 25px
    width: 54px
    border: none
    box-sizing: border-box;
    background-color: transparent
    background-repeat: no-repeat
    background-position: center
  .ya-share2__item_service_vkontakte .ya-share2__icon
    background-image: url('~@/assets/img/icons/VK-light.svg')
  .ya-share2__item_service_facebook .ya-share2__icon
    background-image: url('~@/assets/img/icons/Tvit-light.svg')
  .ya-share2__item_service_twitter .ya-share2__icon
    background-image: url('~@/assets/img/icons/FB-light.svg')

  .ya-share2__badge
      background-color: transparent
  .ya-share2__icon + .ya-share2__icon
      margin-left: 10px
  .ya-share2__list
      display: flex
@media screen and (max-width: 400px)
  #ya-shareLight
    .ya-share2__icon
        height: 34px
        width: 50px



</style>
