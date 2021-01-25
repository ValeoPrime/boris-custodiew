<template>
  <footer class="footer">
    <div class="container">
      <ul class="footer__nav">
        <li class="nav__list__item" v-for="(item, i) of navTitles" :key="i">
          <a href="#">{{ navTitles[i] }}</a>
        </li>
      </ul>
    </div>
    <div class="social__buttons__wrapper">
      <SocialButtonLight />
    </div>
  </footer>
</template>

<script>
import SocialButtonLight from "@/components/reusableComponents/SocialButtonLight.vue";

export default {
  data: function() {
    return {
      navTitles: ["биография", "творчество", "картины", "музеи"],
    };
  },
  components: {
    SocialButtonLight,
  },
};
</script>

<style lang="sass" scoped>
.footer
    font-family: Helvetica, sans-serif
    font-size: 14px;
    line-height: 16px;
    color: #F5F5F5;
    padding: 60px 0 45px
    background: #202020;
    .footer__nav
        display: flex
        align-items: center;
        margin: 0 auto
        .nav__list__item + .nav__list__item
            margin-left: 20px
    .social__buttons__wrapper
        display: inline-block
        display: flex
        justify-content: center
        margin-top: 45px

@media screen and (max-width: 370px)
  .footer
    .footer__nav
      flex-direction: column
      justify-content: center;
      .nav__list__item + .nav__list__item
        margin: 0
        margin-top: 20px
</style>
