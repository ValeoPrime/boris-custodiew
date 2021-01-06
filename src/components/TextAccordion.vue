<template>
  <div class="accordion__wrapper">
    <button v-on:click="accordionHandler($event)" class="accordion active">
      {{works.title}}
    </button>
    <div class="panel">
      <div v-for="work in works.worksArr" :key='work.id' class="filter__item">
          <div class="filter__title">{{work.workStyle}}</div>
          <div class="picture__count">{{work.worksCount}}</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
props:['works'],
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
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
.filter__item
    display: flex
    align-items: center
    justify-content: space-between
    font-family: Helvetica,sans-serif
    font-size: 12px;
    line-height: 26px;
    .filter__title
        color: #4B4B4B;
        margin-top: 10px
    .picture__count
        color: #BFBFBF;
</style>
