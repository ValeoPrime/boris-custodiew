<template>
  <section class="creation">
    <div class="container">
      <div class="creation__wrapper">
        <h2 class="creation__title">творчество</h2>
        <p class="creation__descr">
          Трудно найти другого живописца, настолько горячо влюбленного в
          провинциальную Россию: самобытную, яркую, удивляющую.
        </p>
      </div>
      <div class="creation__specification">
        <p class="creation__specification__descr">
          Как и большинство работ автора, пейзажные полотна Кустодиева
          отличаются особой выразительностью, яркостью и насыщенностью цветовых
          планов. <br />
          На картинах Кустодиева природа всегда представляет собой нечто гораздо
          большее, чем просто пейзажное изображение.
        </p>
        <div class="creation__specification__img">
          <img
            src="@/assets/img/image__specification.jpg"
            alt="specification"
          />
        </div>
      </div>
      <div class="creation__picture">
        <img src="@/assets/img/creation-big-img.jpg" alt="image" />
      </div>
      <div class="creation__inner">
        <div class="creation__features">
          <p class="creation__features__descr">
            Особенности творчества художника Бориса Кустодиева: любил жанр
            портрета-картины, когда характер героя раскрывается через окружающий
            его пейзаж, интерьер или даже служащую фоном жанровую сцену; не
            жалел для бытовых сцен декоративности и зрелищности; <br />
            с большой симпатией писал жизнь провинции.
          </p>
          <div class="social__buttons__wrapper">
            <SocialButtons />
          </div>
        </div>
        <div class="creation__hang">
          <p class="creation__hang__descr">
            Даже в самые беспросветные времена полотна Кустодиева лучились
            здоровьем, радостью и любовью к жизни. Сахарные сугробы и плавящиеся
            под солнцем купола. Полыхающие арбузы и красавицы, <br />
            не уступающие арбузам ни интенсивностью румянца, ни гладкой
            округлостью форм.
          </p>
          <div class="readmore__wrap"><ReadMore/></div>

        </div>
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

<style lang="sass" scoped>
.creation
    padding: 100px 0 0
    font-family: Helvetica, sans-serif
    font-size: 16px;
    line-height: 26px;
    color: #4B4B4B;
    .container
        display: flex
        flex-direction: column
        .creation__wrapper
            display: flex
            padding-bottom: 40px
            border-bottom: 1px solid #E5E5E5;
            .creation__title
                font-family: Yeseva One;
                font-style: normal;
                font-weight: normal;
                font-size: 40px;
                line-height: 40px;
                color: #202020;
                padding-right: 63px
            .creation__descr
                padding-right: 180px
                font-family: Helvetica;
                font-size: 20px;
                line-height: 30px;
                color: #BFBFBF;

        .creation__specification
            display: flex
            padding: 40px 80px
            .creation__specification__descr
                padding: 0 10px 0 0
            .creation__specification__img
                margin-left: 80px

        .creation__inner
            padding: 40px 0 100px
            border-bottom: 1px solid #E5E5E5;
            display: flex
            .creation__features, .creation__hang
                max-width: 440px
            .creation__hang
                margin-left: 40px
        .social__buttons__wrapper
            margin-top: 60px
        .readmore__wrap
            .read__more
                button
                    margin-left: 0
                    margin-right: auto

</style>
