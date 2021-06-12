<template>
  <div class="about-us">
    <AboutUsSection />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutUsSection from "@/components/partials/home-page/AboutUsSection.vue";

export default {
  name: "AboutUs",
  components: {
    AboutUsSection,
  },
};
</script>
