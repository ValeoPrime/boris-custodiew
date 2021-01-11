<template>
  <section class="catalog" >
    <div class="container">
      <div class="tabs__container">
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
      </div>

      <div class="catalog__inner">
        <div v-on:click="showFilters" class="filters__mobile">Фильтры</div>
        <div class="catalog__filters">
          <TextAccordion
            v-bind:works="works"
            v-on:addFilter="filterHandler"
            :key="currentTab"
          />
          <InputsAccordeon
            v-on:quickSearch="quickSearch"
            v-on:inputChange="filterHandler"
            v-bind:data="plots"
          />
          <InputsAccordeon
            v-on:quickSearch="quickSearch"
            v-on:inputChange="filterHandler"
            v-bind:data="styles"
          />
          <InputsAccordeon
            v-on:quickSearch="quickSearch"
            v-on:inputChange="filterHandler"
            v-bind:data="technics"
          />
          <InputsAccordeon
            v-on:rangeSearch="rangeSearch"
            v-on:inputChange="filterHandler"
            v-bind:data="period"
          />
        </div>
        <div class="catalog__galery" v-cloak>
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
            <div v-if="showPictures.length == 0" class="empty__message">
              По таким критериям картин не нашлось ¯\_(ツ)_/¯
            </div>
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
import ViewsVariants from "@/components/reusableComponents/ViewsVariants.vue";
import TextAccordion from "@/components/reusableComponents/TextAccordion.vue";
import InputsAccordeon from "@/components/reusableComponents/InputsAccordeon.vue";
import Pagination from "@/components/reusableComponents/Pagination.vue";
import { fetchData, grid, table, filterPictures } from "@/helpers.js";

export default {
  components: {
    ViewsVariants,
    TextAccordion,
    InputsAccordeon,
    Pagination,
  },
  created: async function() {
    this.pictures[this.currentTab] = await fetchData(this.currentTab);

    if (this.filterTags.length == 0) {
      this.filteredPictures = this.pictures[this.currentTab];
      this.paginationHandler(1);

    } else {
      this.filteredPictures = filterPictures(
        this.filterTags,
        this.pictures[this.currentTab]
      );

      this.paginationHandler(1);
    }

    // Подсчет картин по видам исполнения
    this.works.worksArr.forEach((work) => {
      work.worksCount = this.pictures[this.currentTab].filter(
        (picture) => picture.work == work.work
      ).length;
    });
  },
  data() {
    return {
      currentTab: "rarity",
      pictures: {
        rarity: [],
        new: [],
        antiques: [],
        philately: [],
      },
      offset: 10,
      filteredPictures: [],
      filterTags: [],
      showPictures: [],
      curentPaginationItem: 0,
      showVariant: "table",

      works: {
        id: "works",
        title: "Работы",

        worksArr: [
          {
            id: "painting ",
            work: "painting",
            plotStyle: "Живопись",
            worksCount: 0,
          },
          {
            id: "drawings-illustrations",
            work: "drawings-illustrations",
            plotStyle: "Рисунки и иллюстрации",
            worksCount: 0,
          },
          {
            id: "theatrical-decorative",
            work: "theatrical-decorative",
            plotStyle: "Театрально-декорационное",
            worksCount: 0,
          },
          {
            id: "graphic",
            work: "graphic",
            plotStyle: "Графика",
            worksCount: 0,
          },
          {
            id: "engraving",
            work: "engraving",
            plotStyle: "Гравюра",
            worksCount: 0,
          },
          {
            id: "poster",
            work: "poster",
            plotStyle: "Плакат",
            worksCount: 0,
          },
          {
            id: "sculpture",
            work: "sculpture",
            plotStyle: "Скульптура",
            worksCount: 0,
          },
          {
            id: "decorative",
            work: "decorative",
            plotStyle: "Декоративно-прикладное",
            worksCount: 0,
          },
        ],
      },
      plots: {
        id: "plots",
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
        id: "styles",
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
        id: "technics",
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
        id: "period",
        title: "ПЕРИОД",
        searchInput: false,
        fold: false,
        rangeInput: true,
        dataArr: [
          {
            id: "period 1",
            year: "period 1",
            plotStyle: "до 1900",
            checked: false,
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
      if (this.pictures[e.target.id].length) {

        this.currentTab = e.target.id;
        this.filteredPictures = filterPictures(
          this.filterTags,
          this.pictures[this.currentTab]
        );

        // Подсчет картин по видам исполнения
        this.works.worksArr.forEach((work) => {
          work.worksCount = this.pictures[this.currentTab].filter(
            (picture) => picture.work == work.work
          ).length;
        });

        this.paginationHandler(1);

      } else {
        this.currentTab = e.target.id;
        this.pictures[this.currentTab] = await fetchData(e.target.id);
        this.filteredPictures = filterPictures(
          this.filterTags,
          this.pictures[this.currentTab]
        );

        // Подсчет картин по видам исполнения
        this.works.worksArr.forEach((work) => {
          work.worksCount = this.pictures[this.currentTab].filter(
            (picture) => picture.work == work.work
          ).length;
        });

        this.paginationHandler(1);
      }

    },

    viewsHandler: function(id) {
      this.showVariant == id ? null : this.changeViews(id);
    },

    changeViews: function(id) {
      const catalogFilters = document.querySelector(".catalog__filters");
      const pictures = document.querySelectorAll(".picture__item");

      id == "grid"
        ? grid(catalogFilters, pictures)
        : table(catalogFilters, pictures);
      this.showVariant = id;
    },

    showFilters: function() {
      const filter = document.querySelector(".catalog__filters");
      filter.classList.toggle("filters__show");
    },

    filterHandler: function(item) {
      if (this.filterTags.filter((tag) => tag.id == item.id).length > 0) {
        this.filterTags = this.filterTags.filter((tag) => tag.id !== item.id);
        this.filteredPictures = filterPictures(
          this.filterTags,
          this.pictures[this.currentTab]
        );

        this.paginationHandler(1);
      } else {
        this.filterTags.push(item);
        this.filteredPictures = filterPictures(
          this.filterTags,
          this.pictures[this.currentTab]
        );

        this.paginationHandler(1);
      }
    },

    removeTag: function(item) {
      this.filterTags = this.filterTags.filter((tag) => tag.id !== item.id);
      this.filteredPictures = filterPictures(
        this.filterTags,
        this.pictures[this.currentTab]
      );
      this.paginationHandler(1);
    },

    paginationHandler: function(id) {

      this.showPictures = this.filteredPictures.slice(
        id * this.offset - this.offset,
        id * this.offset
      );

      this.curentPaginationItem = id;
    },
    quickSearch: function(value, id) {
      this[id].dataArr
        .filter(
          (item) =>
            item.plotStyle.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
        .forEach((filterTag) => {
          this[id].dataArr.find(
            (elem) => elem.id === filterTag.id
          ).checked = true; // Отмечает отфильтрованные чекбоксы в тру
          this.filterHandler(filterTag);
        });
    },
    rangeSearch: function(start, end) {
      if (start == null && end == null) {
        return null;
      }

      let title = "";
      if ((end == 0 || end == null) && start > 0) {
        title = `от ${start}`;
      }

      if ((start == 0 || start == null) && end > 0) {
        title = `до ${end}`;
      }

      if (start > 0 && end > 0) {
        title = `от ${start} до ${end}`;
      }

      const rangeObj = {
        range: true,
        rangeStart: start,
        rangeEnd: end,
        plotStyle: title,
      };

      this.filterHandler(rangeObj);
    },
  },
};
</script>

<style lang="sass" scoped>

[v-cloak]
  display: none
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
        border-bottom: 1px solid #E5E5E5;
        .catalog__tabs__list
            display: flex
            .catalog__tab__item
              display: inline-block
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

        .filters__mobile
          display: none
          width: 280px
          margin: 40px auto
          padding: 5px 30px 5px 15px
          border: 1px solid #E5E5E5;
          font-family: Helvetica, sans-serif
          font-size: 12px;
          line-height: 26px;
          color: #4B4B4B;
          position: relative
          &::before
            content: ''
            position: absolute
            top: 10px
            right: 10px
            width: 17px
            height: 17px
            background-image: url('~@/assets/img/icons/filtersMobile.svg')
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
            padding-right: 40px
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
            margin-right: 10px
            span
                width: 6px
                height: 6px
                position: absolute
                right: 12px
                bottom: calc( 50% - -7px )

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
        transition: all 1s
        .picture__img
            height: 317px
        img
            width: 100%
            max-width: 100%
            height: 100%

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

@media screen and (max-width: 1024px)
  .catalog
    .catalog__inner
      padding: 40px 20px 60px
      position: relative
    .catalog__filters
        min-width: 220px
        max-width: 220px
        padding: 0 20px 0 0
    .pictures__wrapper
      padding-top: 0
      justify-content: space-around
    .tabs__container
      overflow-x: scrol
      padding-left: 20px


@media screen and (max-width: 830px)
  .catalog
    .pictures__wrapper
     margin-top: 0
    .catalog__inner
      padding: 0px 20px 60px
      display: block
      .filters__mobile
        display: block
      .catalog__filters
        display: none
        position: absolute
        min-width: 300px
        max-width: 300px
        top: 60px
        left: 30px
        background: #fff;
        z-index: 10
      .filters__show
          display: block
    .picture__item
        width: 200px
        .picture__img
          height: 230px


@media screen and (max-width: 768px)
  .catalog
    padding: 30px 0 0px
    .catalog__inner
      padding: 0px 20px 60px
    .tabs__container
      overflow-x: scroll
      padding-left: 20px
    .picture__item
        margin: 5px
        width: 120px
        .picture__img
          height: 135px

</style>
