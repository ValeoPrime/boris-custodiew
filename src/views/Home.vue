<template>
  <Header />
  <Biography />
  <Slider />
  <Creation />
  <Museums />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Biography from "@/components/Biography.vue";
import Slider from "@/components/Slider.vue";
import Creation from "@/components/Creation.vue";
import Museums from "@/components/Museums.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Biography,
    Slider,
    Creation,
    Museums,
    Footer,
  },
};
</script>

<style lang="sass"></style>
