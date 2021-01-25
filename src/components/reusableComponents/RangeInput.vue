<template>
  <div class="range__wrapper">
    <input
      type="number"
      v-model="rangeSearchStart"
      v-on:keypress.enter="
        $emit('rangeSearch', rangeSearchStart, rangeSearchEnd),
          (rangeSearchStart = null),
          (rangeSearchEnd = null)
      "
      class="range__input"
      id="start"
      placeholder="c"
    />
    <input
      type="number"
      v-model="rangeSearchEnd"
      v-on:keypress.enter="
        $emit('rangeSearch', rangeSearchStart, rangeSearchEnd),
          (rangeSearchStart = null),
          (rangeSearchEnd = null)
      "
      class="range__input"
      id="end"
      placeholder="по"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      rangeSearchStart: null,
      rangeSearchEnd: null,
    };
  },
};
</script>

<style lang="sass" scoped>
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
