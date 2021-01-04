<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>

</template>

<style lang="sass">
#app
  // font-family: YesevaOne-Regular, sans-serif;
  width: 100%
.container
  width: 920px
  margin: 0 auto
html
    box-sizing: border-box

*, *::before, *::after
    box-sizing: inherit

a
    color: inherit
    text-decoration: none

p
    margin: 0

ul, li
    list-style: none
    margin: 0
    padding: 0

h1, h2, h3, h4, h5, h6
    margin: 0

</style>
