<template>
  <a class="read__more" href="#"
    ><button>{{ hide ? "скрыть" : "читать больше" }}</button></a
  >
</template>

<script>
export default {
  props: ["hide"],
};
</script>

<style lang="sass" scoped>
.read__more
    button
        cursor: pointer
        position: relative
        display: block
        border: none
        padding: 0 0
        outline: none
        background-color: transparent
        font-family: Helvetica-Bold, sans-serif
        font-size: 14px
        line-height: 40px
        color: #202020
        font-weight: 600
        &::before
            content: ''
            position: absolute
            bottom: 0
            right: -10px
            height: 16px
            width: calc( 100% + 10px )
            background-image: url('~@/assets/img/icons/Arrowright-big.svg')
            background-repeat: no-repeat
            background-position: center right
</style>
