<template>
  <section class="biography" id="biography">
    <div class="container">
      <div class="biographyTitle__wrap">
        <h2 class="biography__title">биография</h2>
        <div class="social__buttons__wrapper">
          <SocialButtons />
        </div>
      </div>
      <div class="biography__wrap">
        <div
          class="inner__wrap"
          v-for="fact in moreBiographyFacts"
          v-bind:key="fact.year"
        >
          <p>
            {{ fact.text }}<span class="year">{{ fact.year }}</span>
          </p>
        </div>

        <div class="readmore__wrap" v-on:click.prevent="moreFacts($event)">
          <ReadMore :hide="hide" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialButtons from "@/components/reusableComponents/SocialButtons.vue";
import ReadMore from "@/components/reusableComponents/ReadMore.vue";
export default {
  data: function() {
    return {
      moreBiographyFacts: [
        {
          text: `Борис Кустодиев родился 7 марта 1878 года в Астрахани. Отца, преподавателя духовной семинарии, не стало, когда мальчику было чуть
            больше года. Мать осталась вдовой в 25 лет и содержала четверых
            детей.`,
          year: null,
        },
        {
          text: `Борис сначала учился в церковно-приходской школе, потом в гимназии.
              Когда ему было девять лет, в город привезли выставку
              художников-передвижников. Мальчика настолько впечатлила живопись,
              что он твердо решил научиться рисовать так же искусно. Мать нашла
              деньги, чтобы Борис смог брать уроки у известного в Астрахани
              художника Павла Власова.`,
          year: 1887,
        },
        {
          text: `Окончив семинарию, в 1896 году Кустодиев отправился учиться в
              Москву, но в художественную школу его не приняли: Борису уже
              исполнилось 18 и он был слишком взрослым. Тогда Кустодиев поехал в
              Петербург, где подал документы в Высшее художественное училище при
              Академии художеств.`,
          year: 1896,
        },
      ],
      hide: false,
    };
  },
  components: {
    SocialButtons,
    ReadMore,
  },
  methods: {
    moreFacts: function() {
      if (this.moreBiographyFacts.length < 4) {
        fetch("./data/facts.json")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.moreBiographyFacts = this.moreBiographyFacts.concat(
              data.facts
            );
            this.hide = true;
          });
      }
      if (this.moreBiographyFacts.length > 3) {
        this.moreBiographyFacts = this.moreBiographyFacts.splice(0, 3);
        this.hide = false;
      }
    },
  },
};
</script>
<style lang="sass">
.biography
    padding: 100px 0
.container
    display: flex
    position: relative
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
    transition: all 1s
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
    .readmore__wrap
      .read__more
        button
          margin-left: auto
          margin-right: 0
@media screen and (max-width: 1024px)
  .biography
    padding: 60px 0 134px
  .biography__title
    text-align: center
  .biography__wrap
    .inner__wrap
      padding: 40px 20px 0
      .year
        left: 20px
        top: 0
    .readmore__wrap
      .read__more
        button
          margin-top: 20px
          margin-left: 20px
          margin-right: auto
  .container
    flex-direction: column
    .social__buttons__wrapper
      position: absolute
      bottom: -74px
      left: calc( 50% - 130px )
</style>
