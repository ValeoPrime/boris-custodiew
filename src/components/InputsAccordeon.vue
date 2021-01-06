<template>
  <div class="accordion__wrapper">
    <button v-on:click="accordionHandler($event)" class="accordion active">
      {{ data.title }}
    </button>
    <div class="panel">
      <input
        v-if="data.searchInput"
        v-on:input="$emit('quickSearch', $event.target.value)"
        class="search__input"
        type="text"
        placeholder="Быстрый поиск"
      />
      <div v-if="data.rangeInput" class="range__wrapper">
        <input type="text" v-on:input="$emit('rangeSearch', $event.target.value, $event.target.id)" class="range__input" id="start" placeholder="c" />
        <input type="text" v-on:input="$emit('rangeSearch', $event.target.value, $event.target.id)" class="range__input" id="end" placeholder="по" />
      </div>
      <div v-for="item in data.dataArr" :key="item.id" class="filter__item">
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
</template>

<script>
export default {
  props: ["data"],
  methods: {
    accordionHandler: function(e) {
      e.target.classList.toggle("active");
      const panel = e.target.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    },
  },
  mounted: function() {
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      panel.style.maxHeight = panel.scrollHeight + "px";
    });
  },
};
</script>

<style lang="sass" scoped>
.accordion__wrapper
    border-bottom: 1px solid #E5E5E5;
    padding-bottom: 20px
    margin-bottom: 20px
.accordion
    cursor: pointer;
    width: 100%;
    border: none;
    text-align: left;
    padding:  0 0 10px 0
    background-color: inherit
    outline: none;
    font-family: Helvetica,sans-serif
    font-weight: bold
    font-size: 12px;
    line-height: 14px;
    color: #202020;
    transition: 0.4s;
    text-transform: uppercase


.accordion:after
    content: '\002B';
    width: 10px
    height: 10px
    color: #202020;
    font-weight: bold;
    float: right;
    font-size: 20px

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
      background-image: url("~@/assets/img/checked.svg");

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
.range__wrapper
    display: flex
.range__input
    font-family: Helvetica, sans-serif
    width: 80px
    font-size: 12px;
    line-height: 26px;
    padding: 5px 5px 5px 10px
    color: #202020;
    border: 1px solid #E5E5E5;
    height: 29px
    margin: 20px 0 10px
    outline: none

.range__input + .range__input
    margin-left: 10px
</style>
