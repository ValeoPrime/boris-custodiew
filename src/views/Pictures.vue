<template>
  <PicturesHeader />
  <Catalog />
  <Footer />
</template>

<script>
import PicturesHeader from "@/components/PicturesHeader.vue";
import Catalog from "@/components/Catalog.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    PicturesHeader,
    Catalog,
    Footer,
  },
};
</script>
