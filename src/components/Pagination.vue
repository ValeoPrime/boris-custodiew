<template>
  <div class="pagination__wrapper">
    <ul class="pagination__list">
      <li
        class="pagination__item"
        v-for="(num, index) in paginationCount"
        v-bind:class="[curentPaginationItem == num ? 'active' : '']"
        v-on:click="$emit('paginationChange', $event.target.id)"
        :key="num + index"
        :id="num"
      >
        {{ num }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["data", "offset", "curentPaginationItem"],
  data() {
    return {
      //   paginationCount: Math.ceil(this.data.length / this.offset),
    };
  },
  computed: {
    paginationCount: function() {
      return Math.ceil(this.data.length / this.offset);
    },
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
.pagination__wraper
    position: absolute
    bottom: 0
    left: 50%
    display: flex
    justify-content: center
.pagination__list
    margin: 0 auto
    display: flex
    justify-content: center
    .pagination__item
        font-family: Helvetica, sans-serif
        font-size: 18px
        line-height: 21px
        text-align: center
        color: #BFBFBF
        cursor: pointer
    .pagination__item + .pagination__item
        margin-left: 16px
    .active
        color: #202020
</style>
