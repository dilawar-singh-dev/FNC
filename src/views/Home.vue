<template>
  <div class="home">
    <HeroSection />
    <FeaturesSection />
    <AboutUsSection />
    <ProductsSection />
    <TestimonialsSection />
    <ContactUsSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/partials/home-page/HeroSection.vue";
import FeaturesSection from "@/components/partials/home-page/FeaturesSection.vue";
import AboutUsSection from "@/components/partials/home-page/AboutUsSection.vue";
import ProductsSection from "@/components/partials/home-page/ProductsSection.vue";
import TestimonialsSection from "@/components/partials/home-page/TestimonialsSection.vue";
import ContactUsSection from "@/components/partials/home-page/ContactUsSection.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    FeaturesSection,
    AboutUsSection,
    ProductsSection,
    TestimonialsSection,
    ContactUsSection,
  },
};
</script>
