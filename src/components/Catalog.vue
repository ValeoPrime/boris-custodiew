<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__tabs">
        <ul class="catalog__tabs__list">
          <li
            v-on:click="tabsHandler($event)"
            class="catalog__tab__item active__tab"
            id="rarity"
          >
            Раритет
          </li>
          <li
            v-on:click="tabsHandler($event)"
            class="catalog__tab__item"
            id="new"
          >
            Новые
          </li>
          <li
            v-on:click="tabsHandler($event)"
            class="catalog__tab__item"
            id="antiques"
          >
            Антиквариат
          </li>
          <li
            v-on:click="tabsHandler($event)"
            class="catalog__tab__item"
            id="philately"
          >
            Филателия
          </li>
        </ul>
      </div>
      <div class="catalog__inner">
        <div class="catalog__filters">
          <TextAccordion v-bind:works="works" />
          <InputsAccordeon
            v-on:quickSearch="quickSearch"
            v-on:inputChange="checkboxHandler"
            v-bind:data="plots"
          />
          <InputsAccordeon
            v-on:quickSearch="quickSearch"
            v-on:inputChange="checkboxHandler"
            v-bind:data="styles"
          />
          <InputsAccordeon
            v-on:quickSearch="quickSearch"
            v-on:inputChange="checkboxHandler"
            v-bind:data="technics"
          />
          <InputsAccordeon
            v-on:rangeSearch="rangeSearch"
            v-on:inputChange="checkboxHandler"
            v-bind:data="period"
          />
        </div>
        <div class="catalog__galery">
          <div class="tags__wrapper">
            <div class="filter__tags">
              <div
                class="filter__tag"
                v-on:click="removeTag(tag)"
                v-for="tag in filterTags"
                :key="tag.id"
              >
                {{ tag.plotStyle }} <span>&times;</span>
              </div>
            </div>
            <div class="views__variants">
              <button class="views__table"></button>
              <button class="views__grid"></button>
            </div>
          </div>
          <div class="pictures__wrapper">
            <div class="picture__item" v-for="picture in pictures" :key="picture.year">
              <div class="picture__img" >
                <img :src="picture.img" alt="picture" />
              </div>
              <h3 class="picture__title">{{picture.name}}</h3>
              <div class="picture__year">{{picture.year}}</div>
            </div>
            <!-- <div class="picture__item">
              <div class="picture__img">
                <img src="./img/pic10.png" alt="picture" />
              </div>
              <h3 class="picture__title">Купец с купчихой</h3>
              <div class="picture__year">1914</div>
            </div> -->
            <!-- <div class="picture__item">
              <div class="picture__img">
                <img src="@/assets/img/pic4.png" alt="picture" />
              </div>
              <h3 class="picture__title">Пасхальный обряд (Христосование)</h3>
              <div class="picture__year">1916</div>
            </div>
            <div class="picture__item">
              <div class="picture__img">
                <img src="@/assets/img/pic5.png" alt="picture" />
              </div>
              <h3 class="picture__title">
                Трактирщик. Из серии "Русские типы"
              </h3>
              <div class="picture__year">1920</div>
            </div>
            <div class="picture__item">
              <div class="picture__img">
                <img src="@/assets/img/pic6.png" alt="picture" />
              </div>
              <h3 class="picture__title">Портрет Степана Лукича Никольского</h3>
              <div class="picture__year">1901</div>
            </div>
            <div class="picture__item">
              <div class="picture__img">
                <img src="@/assets/img/pic7.png" alt="picture" />
              </div>
              <h3 class="picture__title">Монахиня</h3>
              <div class="picture__year">1901</div>
            </div>
            <div class="picture__item">
              <div class="picture__img">
                <img src="@/assets/img/pic2.png" alt="picture" />
              </div>
              <h3 class="picture__title">Булочник. Из серии "Русские типы"</h3>
              <div class="picture__year">1920</div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextAccordion from "@/components/TextAccordion.vue";
import InputsAccordeon from "@/components/InputsAccordeon.vue";
// import fetchData from "@/helper.js";
async function fetchData(path) {
  const result = await fetch(`./data/${path}.json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data",data);
      return data.pictures ;
    });
  return result;
}
export default {
  components: {
    TextAccordion,
    InputsAccordeon,
  },
  data() {
    return {
      pictures: null,
      works: {
        title: "Работы",
        searchInput: false,
        fold: false,
        rangeInput: false,
        worksArr: [
          {
            id: "painting ",
            workStyle: "Живопись",
            worksCount: 383,
          },
          {
            id: "drawings-illustrations",
            workStyle: "Рисунки и иллюстрации",
            worksCount: 110,
          },
          {
            id: "theatrical-decorative",
            workStyle: "Театрально-декорационное",
            worksCount: 22,
          },
          {
            id: "graphic",
            workStyle: "Графика",
            worksCount: 22,
          },
          {
            id: "engraving",
            workStyle: "Гравюра",
            worksCount: 10,
          },
          {
            id: "poster",
            workStyle: "Плакат",
            worksCount: 9,
          },
          {
            id: "sculpture",
            workStyle: "Скульптура",
            worksCount: 5,
          },
          {
            id: "decorative",
            workStyle: "Декоративно-прикладное",
            worksCount: 2,
          },
        ],
      },
      plots: {
        title: "Сюжет",
        searchInput: true,
        fold: false,
        rangeInput: false,
        dataArr: [
          {
            id: "portrait",
            plotStyle: "Портрет",
            checked: false,
          },
          {
            id: "genreScene",
            plotStyle: "Жанровая сцена",
            checked: false,
          },
          {
            id: "scenery",
            plotStyle: "Пейзаж",
            checked: false,
          },
          {
            id: "literaryScene",
            plotStyle: "Литературная сцена",
            checked: false,
          },
          {
            id: "urbanLandscape",
            plotStyle: "Городской пейзаж",
            checked: false,
          },
          {
            id: "nude",
            plotStyle: "Ню",
            checked: false,
          },
          {
            id: "Interior",
            plotStyle: "Интерьер",
            checked: false,
          },
          {
            id: "stillLife",
            plotStyle: "Натюрморт",
            checked: false,
          },
          {
            id: "allegoricalScene",
            plotStyle: "Аллегорическая сцена",
            checked: false,
          },
          {
            id: "historicalScene",
            plotStyle: "Историческая сцена",
            checked: false,
          },
          {
            id: "architecture",
            plotStyle: "Архитектура",
            checked: false,
          },
          {
            id: "animalism",
            plotStyle: "Анимализм",
            checked: false,
          },
          {
            id: "religiousScene",
            plotStyle: "Религиозная сцена",
            checked: false,
          },
        ],
      },
      styles: {
        title: "Стили",
        searchInput: false,
        fold: true,
        rangeInput: false,
        dataArr: [
          {
            id: "realism",
            plotStyle: "Реализм",
            checked: false,
          },
          {
            id: "modern",
            plotStyle: "Модерн",
            checked: false,
          },
          {
            id: "impressionism",
            plotStyle: "Импрессионизм",
            checked: false,
          },
          {
            id: "socialistRealism",
            plotStyle: "Соцреализм",
            checked: false,
          },
          {
            id: "primitivism",
            plotStyle: "Примитивизм",
            checked: false,
          },
          {
            id: "artNouveau",
            plotStyle: "Ар Нуво",
            checked: false,
          },
          {
            id: "surrealism",
            plotStyle: "Сюрреализм",
            checked: false,
          },
          {
            id: "surrealism",
            plotStyle: "Сюрреализм",
            checked: false,
          },
          {
            id: "surrealism",
            plotStyle: "Сюрреализм",
            checked: false,
          },
        ],
      },
      technics: {
        title: "ТЕХНИКА",
        searchInput: true,
        fold: false,
        rangeInput: false,
        dataArr: [
          {
            id: "oil",
            plotStyle: "Масло",
            checked: false,
          },
          {
            id: "watercolor",
            plotStyle: "Акварель ",
            checked: false,
          },
          {
            id: "graphitePencil",
            plotStyle: "Графитный карандаш",
            checked: false,
          },
          {
            id: "gouache",
            plotStyle: "Гуашь",
            checked: false,
          },
          {
            id: "pastel",
            plotStyle: "Пастель",
            checked: false,
          },
          {
            id: "mascara",
            plotStyle: "Тушь",
            checked: false,
          },
          {
            id: "graphite",
            plotStyle: "Графит",
            checked: false,
          },
          {
            id: "colorPencil",
            plotStyle: "Цветной карандаш",
            checked: false,
          },
          {
            id: "coal",
            plotStyle: "Уголь",
            checked: false,
          },
          {
            id: "chalk",
            plotStyle: "Мел",
            checked: false,
          },
          {
            id: "engraving",
            plotStyle: "Гравюра",
            checked: false,
          },
          {
            id: "pen",
            plotStyle: "Перо",
            checked: false,
          },
        ],
      },
      period: {
        title: "ПЕРИОД",
        searchInput: false,
        fold: false,
        rangeInput: true,
        dataArr: [
          {
            id: "period 1",
            plotStyle: "до 1900",
            checked: true,
          },
          {
            id: "period 2",
            plotStyle: "1901-1916 ",
            checked: false,
          },
          {
            id: "period 3",
            plotStyle: "1917 и позже",
            checked: false,
          },
        ],
      },

      filterTags: [],
    };
  },
  methods: {
    tabsHandler: async function(e) {
      console.log(e.target.id);
      const allTabs = document.querySelectorAll(".catalog__tab__item");
      allTabs.forEach((tab) => {
        tab.classList.remove("active__tab");
      });
      e.target.classList.add("active__tab");
      this.pictures = await fetchData(e.target.id)
      console.log(this.pictures);
    },

    checkboxHandler: function(item) {
      if (item.checked) {
        this.filterTags.push(item);
      } else {
        this.filterTags = this.filterTags.filter((tag) => tag.id !== item.id);
      }
    },
    removeTag: function(item) {
      this.filterTags = this.filterTags.filter((tag) => tag.id !== item.id);
      //фильтрация
    },
    quickSearch: function(value) {
      console.log(value);
    },
    rangeSearch: function(value, id) {
      console.log(value, id);
    },
  },
   mounted: async function() {
    this.pictures = await fetchData("rarity")
  },
};
</script>

<style lang="sass" scoped>
.catalog
    padding: 60px 0
    .container
        display: block
    .catalog__tabs
        font-family: Yeseva One,sans-serif
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #C4C4C4;
        min-width: 920px
        border-bottom: 1px solid #E5E5E5;
        .catalog__tabs__list
            display: flex
            .catalog__tab__item
                cursor: pointer
            .catalog__tab__item + .catalog__tab__item
                margin-left: 40px
            .active__tab
                color: #202020;
                padding-bottom: 10px
                border-bottom: 3px solid #202020;

    .catalog__inner
        display: flex
        padding-top: 40px
    .catalog__filters
        min-width: 318px
        max-width: 318px
        padding-right: 118px

    .catalog__galery
        width: 100%
        .tags__wrapper
            display: flex
            justify-content: flex-start

            padding-top: 2px
            position: relative
        .filter__tags
            display: flex
            flex-wrap: wrap
            align-items: center
        .filter__tag
            padding: 2px 30px 0px 20px
            font-family: Helvetica,sans-serif
            font-size: 12px;
            line-height: 26px;
            display: flex;
            align-items: center;
            color: #202020;
            background: #F5F5F5;
            border: 1px solid #F5F5F5;
            box-sizing: border-box;
            border-radius: 15px;
            position: relative
            cursor: pointer
            margin-bottom: 5px
            span
                width: 6px
                height: 6px
                position: absolute
                right: 12px
                bottom: calc( 50% - -7px )
        .filter__tag + .filter__tag
            margin-left: 10px
        .views__variants
            position: absolute
            top: 0
            right: 0
            button
                width: 15px
                height: 15px
                background-color: #202020;

    .pictures__wrapper
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        padding-top: 20px

    .picture__item
        width: 280px
        font-family: Helvetica,sans-serif
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #4B4B4B;
        margin-bottom: 20px
        .picture__title
            margin-top: 10px
            font-weight: normal
            font-size: inherit
            margin-block-start: 0
            margin-block-end: 0
</style>
