<template>
  <div class="accordion__wrapper">
    <button
      v-on:click="accordionHandler($event)"
      class="accordion"
      :class="{ active: panelShow }"
    >
      {{ data.title }}
    </button>
    <div class="panel">
      <input
        v-if="data.searchInput"
        v-on:keypress.enter="
          $emit('quickSearch', quickSearchValue, data.id),
            (quickSearchValue = null)
        "
        v-model="quickSearchValue"
        class="search__input"
        type="text"
        placeholder="Быстрый поиск"
        pattern="^[А-Яа-яЁё\s]+$"
      />
      <RangeInput v-if="data.rangeInput" v-on:rangeSearch="rangeSearch" />

      <div v-for="item in viewInputs" :key="item.id" class="filter__item">
        <label class="custom-checkbox">
          <input
            type="checkbox"
            id="item.id"
            v-on:change="$emit('inputChange', item)"
            v-model="item.checked"
            name="alias"
          />
          <span>{{ item.plotStyle }}</span>
        </label>
      </div>
      <div v-if="data.fold" class="accordion__wrapper--inner">
        <button v-on:click="accordionHandler($event)" class="accordion--inner">
          {{ moreCheckboxShow ? "Скрыть" : "Все элементы" }}
        </button>
        <div class="panel panel--inner">
          <div v-for="item in foldInputs" :key="item.id" class="filter__item">
            <label class="custom-checkbox">
              <input
                type="checkbox"
                id="item.id"
                v-on:change="$emit('inputChange', item)"
                v-model="item.checked"
                name="alias"
              />
              <span>{{ item.plotStyle }}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RangeInput from "@/components/reusableComponents/RangeInput.vue";

export default {
  components: {
    RangeInput,
  },
  props: ["data"],
  data() {
    return {
      quickSearchValue: null,
      panelShow: true,
      moreCheckboxShow: false,
    };
  },
  computed: {
    viewInputs: function() {
      return this.data.fold ? this.data.dataArr.slice(0, 7) : this.data.dataArr;
    },
    foldInputs: function() {
      return this.data.fold
        ? this.data.dataArr.slice(7, this.data.dataArr.length)
        : false;
    },
  },
  methods: {
    accordionHandler: function(e) {
      const panel = e.target.nextElementSibling;
      this.panelShow = !this.panelShow;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.moreCheckboxShow = false;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.moreCheckboxShow = true;
      }
    },

    rangeSearch: function(start, end) {
      this.$emit("rangeSearch", start, end);
    },
  },
  mounted: function() {
    const panels = this.$el.querySelectorAll(".panel");

    panels.forEach((panel) => {
      if (panel.classList.contains("panel--inner")) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 550 + "px";
      }
    });
  },
};
</script>

<style lang="sass" scoped>
.accordion__wrapper
    border-bottom: 1px solid #E5E5E5;
    padding-bottom: 20px
    margin-bottom: 20px
.accordion__wrapper--inner
    margin-top: 0px
    border-bottom: 0
    padding-bottom: 20px
    position: relative

.accordion, .accordion--inner
    cursor: pointer;
    width: 100%;
    border: none;
    text-align: left;
    padding:  0 0 10px 0
    background-color: inherit
    outline: none;
    font-family: Helvetica-Bold,sans-serif
    font-size: 12px;
    line-height: 14px;
    color: #202020;
    transition: 0.4s;
    text-transform: uppercase
.accordion--inner
    padding-left: 20px
    position: relative
    text-transform: none
    position: absolute
    bottom: -10px
    left: 2px

.accordion:after, .accordion--inner:after
    content: '\002B';
    width: 10px
    height: 10px
    color: #202020;
    font-weight: bold;
    float: right;
    font-size: 20px
.accordion--inner:after
    position: absolute
    left: 0
    top: calc(50% - 15px)

.active:after
    content: "\2212";
    font-size: 20px


.panel
    background-color: rgba(255,255 ,255 ,1 )
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    max-height: 0

    /* для элемента input c type="checkbox" */
    .custom-checkbox>input
      position: absolute;
      z-index: -1;
      opacity: 0;

    /* для элемента label, связанного с .custom-checkbox */
    .custom-checkbox>span
        display: inline-flex;
        align-items: center;
        user-select: none;
        font-family: Helvetica, sans-serif
        font-size: 12px;
        line-height: 26px;
        color: #4B4B4B;

    /* создание в label псевдоэлемента before со следующими стилями */
    .custom-checkbox>span::before
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #E5E5E5;
        border-radius: 4px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 80% 80%;
        margin-right: 10px

    /* стили для чекбокса, находящегося в состоянии checked */
    .custom-checkbox>input:checked+span::before
      background-image: url("~@/assets/img/icons/checked.svg");


.filter__item
    display: flex
    align-items: center
    justify-content: space-between
    font-family: Helvetica,sans-serif
    font-size: 12px;
    line-height: 26px;
    margin-top: 5px

.search__input
    font-family: Helvetica, sans-serif
    width: 200px
    font-size: 12px;
    line-height: 26px;
    padding: 5px 5px 5px 10px
    color: #202020;
    border: 1px solid #E5E5E5;
    height: 29px
    margin-top: 20px
    margin-bottom: 10px
    outline: none
</style>
