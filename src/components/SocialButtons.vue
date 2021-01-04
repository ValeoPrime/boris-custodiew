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
        border: 0.7px solid #BFBFBF;
        box-sizing: border-box;
        background-color: transparent
        background-repeat: no-repeat
        background-position: center
        &:nth-child(1)
            background-image: url('~@/assets/img/VK.svg')
        &:nth-child(2)
            background-image: url('~@/assets/img/Twit.svg')
        &:nth-child(3)
            background-image: url('~@/assets/img/Fb.svg')

    .ya-share2__badge
        background-color: transparent
    .ya-share2__icon + .ya-share2__icon
        margin-left: 10px
    .ya-share2__list
        display: flex


</style>
