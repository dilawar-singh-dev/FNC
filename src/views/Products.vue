<template>
  <div class="products">
    <ProductsSection />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductsSection from "@/components/partials/home-page/ProductsSection.vue";

export default {
  name: "Products",
  components: {
    ProductsSection,
  },
};
</script>
