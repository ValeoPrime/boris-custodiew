<template>
  <div class="views__variants">
    <button
      v-on:click="$emit('viewChange', $event.target.id)"
      class="view__table"
      v-bind:class="[showVariant == table ? 'active__view' : '']"
      id="table"
    >
      <svg
        id="table"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="#BFBFBF"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect id="table" width="6" height="6" fill="#BFBFBF" />
        <rect id="table" x="9" width="6" height="6" fill="#BFBFBF" />
        <rect id="table" y="9" width="6" height="6" fill="#BFBFBF" />
        <rect id="table" x="9" y="9" width="6" height="6" fill="#BFBFBF" />
      </svg>
    </button>
    <button
      v-on:click="$emit('viewChange', $event.target.id)"
      class="view__grid "
      v-bind:class="[showVariant == grid ? 'active__view' : '']"
      id="grid"
    >
      <svg
        id="grid"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="grid"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H2.64706V2.64706H0V0ZM0 6.17647H2.64706V8.82353H0V6.17647ZM0 12.3529H2.64706V15H0V12.3529ZM6.17647 0H8.82353V2.64706H6.17647V0ZM6.17647 6.17647H8.82353V8.82353H6.17647V6.17647ZM6.17647 12.3529H8.82353V15H6.17647V12.3529ZM12.3529 0H15V2.64706H12.3529V0ZM12.3529 6.17647H15V8.82353H12.3529V6.17647ZM12.3529 12.3529H15V15H12.3529V12.3529Z"
          fill="#BFBFBF"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: ["showVariant"],
  data() {
    return {
      table: "table",
      grid: "grid",
    };
  },
};
</script>

<style lang="sass" scoped>
.views__variants
    position: absolute
    top: 0
    right: 0
    display: flex
    align-items: center
    button
        width: 15px
        height: 15px
        border: none
        padding: 0
        cursor: pointer
        position: relative
        background-color: transparent
        outline: none
        img
            min-width: 100%
            min-height: 100%
    .view__table
        margin-right: 20px
    .active__view
        svg
            fill: #202020;
            path
                fill: #202020;
            rect
                fill: #202020;

@media screen and (max-width: 1024px)
  .views__variants
    display: none
</style>
