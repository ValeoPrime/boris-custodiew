<template>
  <div
    class="ya-share2"
    id="ya-share2"
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
          direction: "horizontal"
        },
      });
    },
  },
  created: function() {
    this.yandex_shared("ya-share2");
  },
  updated: function() {
    this.yandex_shared("ya-share2");
  },
};
</script>

<style lang="sass">

#ya-share2
  .ya-share2__icon
    height: 34px
    width: 94px

    box-sizing: border-box;
    background-color: transparent
    background-repeat: no-repeat
    background-position: center
  .ya-share2__item_service_vkontakte .ya-share2__icon
    background-image: url('~@/assets/img/icons/VK.svg')
  .ya-share2__item_service_facebook .ya-share2__icon
    background-image: url('~@/assets/img/icons/Twit.svg')
  .ya-share2__item_service_twitter .ya-share2__icon
    background-image: url('~@/assets/img/icons/Fb.svg')
  .ya-share2__list.ya-share2__list_direction_horizontal > .ya-share2__item
    border: 0.65px solid #BFBFBF;

  .ya-share2__badge
      background-color: transparent
  .ya-share2__icon + .ya-share2__icon
      margin-left: 10px
  .ya-share2__list
      display: flex
@media screen and (max-width: 400px)
  #ya-share2
    .ya-share2__icon
        height: 34px
        width: 84px
</style>
