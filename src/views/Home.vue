<template>
  <Header />
  <Biography />
</template>

<script>
import Header from "@/components/Header.vue";
import Biography from "@/components/Biography.vue";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    Header,
    Biography,
  },
};
</script>

<style lang="sass"></style>
