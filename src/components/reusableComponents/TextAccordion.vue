<template>
  <div class="accordion__wrapper">
    <button
      v-on:click="accordionHandler($event)"
      class="accordion"
      :class="{ active: panelShow }"
    >
      {{ works.title }}
    </button>
    <div class="panel" :class="{ panel__show: panelShow }">
      <div v-for="work in works.worksArr" :key="work.id" class="filter__item">
        <div v-on:click="filterHandler(work, $event)" class="filter__title">
          {{ work.plotStyle }}
        </div>
        <span v-on:click="filterHandler(work, $event)" class="filter__data"
          >+</span
        >
        <div class="picture__count">{{ work.worksCount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["works"],
  data() {
    return {
      data: null,
      panelShow: true,
    };
  },
  methods: {
    accordionHandler: function(e) {
      this.panelShow = !this.panelShow;
      const panel = e.target.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    },
    filterHandler: function(work, e) {
      e.target.classList.contains("filter__title")
        ? e.target.nextElementSibling.classList.toggle("filter__data--show")
        : e.target.classList.toggle("filter__data--show");

      this.$emit("addFilter", work);
    },
  },
  mounted: function() {
    const panels = this.$el.querySelectorAll(".panel");

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
    font-family: Helvetica-Bold
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
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
.panel__show
    overflow: visible
.filter__item
    display: flex
    align-items: center
    justify-content: space-between
    position: relative
    font-family: Helvetica,sans-serif
    font-size: 12px;
    line-height: 26px;
    margin-top: 10px
    cursor: pointer
    &::after
      content: ''
      position: absolute
      display: none
      width: 7px
      height: 7px
      top: 9px
      left: -13px
      background-image: url('~@/assets/img/icons/filter__plus.svg')
    .filter__title
        color: #4B4B4B;
    .picture__count
        color: #BFBFBF;

.filter__item:hover:after
  display: block

.filter__data
  position: absolute
  display: none
  width: 7px
  height: 7px
  line-height: 7px
  top: 9px
  left: -13px
  cursor: pointer
  z-index: 12
  background-color: #fff
  transform: rotate(45deg)
.filter__data--show
  display: block
</style>
