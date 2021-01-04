<template>
  <section class="biography">
    <div class="container">
      <div class="biographyTitle__wrap">
        <h2 class="biography__title">биография</h2>
        <div class="social__buttons__wrapper">
          <SocialButtons/>
        </div>
      </div>
      <div class="biography__wrap">
        <div class="inner__wrap">
          <p>
            Борис Кустодиев родился 7 марта 1878 года в Астрахани. Отца,
            преподавателя духовной семинарии, не стало, когда мальчику было чуть
            больше года. Мать осталась вдовой в 25 лет и содержала четверых
            детей.<span class="year"></span>
          </p>
        </div>
        <div class="inner__wrap">
          <p>
            Борис сначала учился в церковно-приходской школе, потом в гимназии.
            Когда ему было девять лет, в город привезли выставку
            художников-передвижников. Мальчика настолько впечатлила живопись,
            что он твердо решил научиться рисовать так же искусно. Мать нашла
            деньги, чтобы Борис смог брать уроки у известного в Астрахани
            художника Павла Власова. <span class="year">1887</span>
          </p>
        </div>
        <div class="inner__wrap">
          <p>
            Окончив семинарию, в 1896 году Кустодиев отправился учиться в
            Москву, но в художественную школу его не приняли: Борису уже
            исполнилось 18 и он был слишком взрослым. Тогда Кустодиев поехал в
            Петербург, где подал документы в Высшее художественное училище при
            Академии художеств.<span class="year">1896</span>
          </p>
        </div>
        <ReadMore/>
      </div>
    </div>
  </section>
</template>

<script>

import SocialButtons from "@/components/SocialButtons.vue";
import ReadMore from "@/components/ReadMore.vue";
export default {
  components: {
    SocialButtons,
    ReadMore
  },
};
</script>

<style lang="sass">
.biography
    padding: 100px 0
.container
    display: flex
.biographyTitle__wrap
    display: flex
    justify-content: space-between
    flex-direction: column
    padding-right: 17px
.biography__title
    font-family: Yeseva One, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 40px;
.biography__wrap
    font-family: Helvetica, sans-serif
    font-size: 16px;
    line-height: 26px;
    color: #4C4C4C;
    .inner__wrap
        padding-left: 80px
        position: relative
    .inner__wrap + .inner__wrap
        margin-top: 20px
    .year
        position: absolute
        left: 0
        top: 0
        font-family: Helvetica, sans-serif
        font-size: 20px;
        line-height: 40px;
        letter-spacing: 0.05em;
        color: #BFBFBF;

</style>
