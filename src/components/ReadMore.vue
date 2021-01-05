<template>
  <a class="read__more" href="#"><button>читать больше</button></a>
</template>

<script>
export default {};
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
        margin-top: 64px
        font-family: Helvetica, sans-serif
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
            width: 120px
            background-image: url('~@/assets/img/Arrowright-big.svg')
            background-repeat: no-repeat
            background-position: center
</style>
