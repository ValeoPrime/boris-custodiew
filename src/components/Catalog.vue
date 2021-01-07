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
            <ViewsVariants
              v-on:viewChange="viewsHandler"
              v-bind:showVariant="showVariant"
            />
          </div>
          <div class="pictures__wrapper">
            <div
              class="picture__item"
              v-for="(picture, index) in showPictures"
              :key="picture.year + index"
            >
              <div class="picture__img">
                <img :src="picture.img" alt="picture" />
              </div>
              <h3 class="picture__title">{{ picture.name }}</h3>
              <div class="picture__year">{{ picture.year }}</div>
            </div>
            <div v-if="showPictures.length == 0" class="empty__message">По таким критериям картин не нашлось ¯\_(ツ)_/¯</div>
          </div>
          <Pagination
            v-if="filteredPictures"
            v-bind:data="filteredPictures"
            v-bind:offset="offset"
            v-bind:curentPaginationItem="curentPaginationItem"
            v-on:paginationChange="paginationHandler"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ViewsVariants from "@/components/ViewsVariants.vue";
import TextAccordion from "@/components/TextAccordion.vue";
import InputsAccordeon from "@/components/InputsAccordeon.vue";
import Pagination from "@/components/Pagination.vue";
async function fetchData(path) {
  const result = await fetch(`./data/${path}.json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.pictures;
    });
  return result;
}
export default {
  components: {
    ViewsVariants,
    TextAccordion,
    InputsAccordeon,
    Pagination,
  },
  created: async function() {
    this.pictures = await fetchData("rarity");
    if (this.filterTags.length == 0) {
      this.filteredPictures = this.pictures;
      this.paginationHandler(1);
    } else {
      this.filteredPictures = this.filterPictures(this.filterTags)
      this.paginationHandler(1);
    }
  },
  data() {
    return {
      pictures: null,
      offset: 10,
      filteredPictures: [],
      filterTags: [],
      showPictures: [],
      curentPaginationItem: 0,
      showVariant: "table",

      works: {
        title: "Работы",
        worksArr: [
          {
            id: "painting ",
            work:"painting",
            workStyle: "Живопись",
            worksCount: 383,
          },
          {
            id: "drawings-illustrations",
            work:"drawings-illustrations",
            workStyle: "Рисунки и иллюстрации",
            worksCount: 110,
          },
          {
            id: "theatrical-decorative",
            work:"theatrical-decorative",
            workStyle: "Театрально-декорационное",
            worksCount: 22,
          },
          {
            id: "graphic",
            work:"graphic",
            workStyle: "Графика",
            worksCount: 22,
          },
          {
            id: "engraving",
            work:"engraving",
            workStyle: "Гравюра",
            worksCount: 10,
          },
          {
            id: "poster",
            work:"poster",
            workStyle: "Плакат",
            worksCount: 9,
          },
          {
            id: "sculpture",
            work:"sculpture",
            workStyle: "Скульптура",
            worksCount: 5,
          },
          {
            id: "decorative",
            work:"decorative",
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
            plot: "portrait",
            plotStyle: "Портрет",
            checked: false,
          },
          {
            id: "genreScene",
            plot: "genreScene",
            plotStyle: "Жанровая сцена",
            checked: false,
          },
          {
            id: "scenery",
            plot: "scenery",
            plotStyle: "Пейзаж",
            checked: false,
          },
          {
            id: "literaryScene",
            plot: "literaryScene",
            plotStyle: "Литературная сцена",
            checked: false,
          },
          {
            id: "urbanLandscape",
            plot: "urbanLandscape",
            plotStyle: "Городской пейзаж",
            checked: false,
          },
          {
            id: "nude",
            plot: "nude",
            plotStyle: "Ню",
            checked: false,
          },
          {
            id: "Interior",
            plot: "Interior",
            plotStyle: "Интерьер",
            checked: false,
          },
          {
            id: "stillLife",
            plot: "stillLife",
            plotStyle: "Натюрморт",
            checked: false,
          },
          {
            id: "allegoricalScene",
            plot: "allegoricalScene",
            plotStyle: "Аллегорическая сцена",
            checked: false,
          },
          {
            id: "historicalScene",
            plot: "historicalScene",
            plotStyle: "Историческая сцена",
            checked: false,
          },
          {
            id: "architecture",
            plot: "architecture",
            plotStyle: "Архитектура",
            checked: false,
          },
          {
            id: "animalism",
            plot: "animalism",
            plotStyle: "Анимализм",
            checked: false,
          },
          {
            id: "religiousScene",
            plot: "religiousScene",
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
            style: "realism",
            plotStyle: "Реализм",
            checked: false,
          },
          {
            id: "modern",
            style: "modern",
            plotStyle: "Модерн",
            checked: false,
          },
          {
            id: "impressionism",
            style: "impressionism",
            plotStyle: "Импрессионизм",
            checked: false,
          },
          {
            id: "socialistRealism",
            style: "socialistRealism",
            plotStyle: "Соцреализм",
            checked: false,
          },
          {
            id: "primitivism",
            style: "primitivism",
            plotStyle: "Примитивизм",
            checked: false,
          },
          {
            id: "artNouveau",
            style: "artNouveau",
            plotStyle: "Ар Нуво",
            checked: false,
          },
          {
            id: "surrealism",
            style: "surrealism",
            plotStyle: "Сюрреализм",
            checked: false,
          },
          {
            id: "surrealism",
            style: "surrealism",
            plotStyle: "Сюрреализм",
            checked: false,
          },
          {
            id: "surrealism",
            style: "surrealism",
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
            technics: "oil",
            plotStyle: "Масло",
            checked: false,
          },
          {
            id: "watercolor",
            technics: "watercolor",
            plotStyle: "Акварель ",
            checked: false,
          },
          {
            id: "graphitePencil",
            technics: "graphitePencil",
            plotStyle: "Графитный карандаш",
            checked: false,
          },
          {
            id: "gouache",
            technics: "gouache",
            plotStyle: "Гуашь",
            checked: false,
          },
          {
            id: "pastel",
            technics: "pastel",
            plotStyle: "Пастель",
            checked: false,
          },
          {
            id: "mascara",
            technics: "mascara",
            plotStyle: "Тушь",
            checked: false,
          },
          {
            id: "graphite",
            technics: "graphite",
            plotStyle: "Графит",
            checked: false,
          },
          {
            id: "colorPencil",
            technics: "colorPencil",
            plotStyle: "Цветной карандаш",
            checked: false,
          },
          {
            id: "coal",
            technics: "coal",
            plotStyle: "Уголь",
            checked: false,
          },
          {
            id: "chalk",
            technics: "chalk",
            plotStyle: "Мел",
            checked: false,
          },
          {
            id: "engraving",
            technics: "engraving",
            plotStyle: "Гравюра",
            checked: false,
          },
          {
            id: "pen",
            technics: "pen",
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
            year: "period 1",
            plotStyle: "до 1900",
            checked: true,
          },
          {
            id: "period 2",
            year: "period 2",
            plotStyle: "1901-1916 ",
            checked: false,
          },
          {
            id: "period 3",
            year: "period 3",
            plotStyle: "1917 и позже",
            checked: false,
          },
        ],
      },
    };
  },
  methods: {
    tabsHandler: async function(e) {
      const allTabs = document.querySelectorAll(".catalog__tab__item");
      allTabs.forEach((tab) => {
        tab.classList.remove("active__tab");
      });
      e.target.classList.add("active__tab");
      this.pictures = await fetchData(e.target.id);
    },

    viewsHandler: function(id) {
      console.log("viewHandler", id);
      if (this.showVariant == id) {
        return;
      } else {
        this.changeViews(id);
      }
    },
    changeViews: function(id) {
      const catalogFilters = document.querySelector(".catalog__filters");
      const pictures = document.querySelectorAll(".picture__item");

      if (id == "grid") {
        catalogFilters.style.paddingRight = 40 + "px";
        catalogFilters.style.minWidth = 225 + "px";
        catalogFilters.style.maxWidth = 200 + "px";
        pictures.forEach((picture) => {
          picture.style.width = 200 + "px";
        });
      } else {
        catalogFilters.style.paddingRight = 118 + "px";
        catalogFilters.style.minWidth = 318 + "px";
        catalogFilters.style.maxWidth = 318 + "px";
        pictures.forEach((picture) => {
          picture.style.width = 280 + "px";
        });
      }
      this.showVariant = id;
    },

    checkboxHandler: function(item) {
      if (item.checked) {
        this.filterTags.push(item);
        this.filteredPictures = this.filterPictures(this.filterTags)
        this.paginationHandler(1)
      } else {
        this.filterTags = this.filterTags.filter((tag) => tag.id !== item.id);
        this.filteredPictures = this.filterPictures(this.filterTags)
        this.paginationHandler(1)
      }
    },

    removeTag: function(item) {
      this.filterTags = this.filterTags.filter((tag) => tag.id !== item.id);
      this.filteredPictures = this.filterPictures(this.filterTags)
      this.paginationHandler(1)
    },

    filterPictures: function(filterTags) {
      let result = this.pictures;
      filterTags.forEach((filter) => {
        if (filter.plot) {
          result = result.filter((pic) => pic.plot == filter.plot);
        }
        if (filter.style) {
          result = result.filter((pic) => pic.style == filter.style);
        }
        if (filter.technics) {
          result = result.filter((pic) => pic.technics == filter.technics);
        }
        if (filter.year) {
          switch (filter.year) {
            case "period 1":
              result = result.filter((pic) => pic.year <= 1900);
            case "period 2":
              result = result.filter(
                (pic) => pic.year > 1901 && pic.year < 1916
              );
            case "period 3":
              result = result.filter((pic) => pic.year >= 1917);
          }
        }
      });
      return result
    },
    paginationHandler: function(id) {
      this.showPictures = this.filteredPictures.slice(
        id * this.offset - this.offset,
        id * this.offset
      );
      this.curentPaginationItem = id;
      console.log("this.showPictures", this.showPictures);
    },
    quickSearch: function(value) {
      console.log(value);
    },
    rangeSearch: function(value, id) {
      console.log(value, id);
    },
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
        transition: all 1s

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

    .pictures__wrapper
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        margin-top: 20px
        padding-top: 50px
        position: relative

    .picture__item
        width: 280px
        font-family: Helvetica,sans-serif
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #4B4B4B;
        margin-bottom: 20px
        img
            max-width: 100%
        .picture__title
            margin-top: 10px
            font-weight: normal
            font-size: inherit
            margin-block-start: 0
            margin-block-end: 0
    .empty__message
      font-family: Yeseva One,sans-serif
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;
      text-align: center
</style>
