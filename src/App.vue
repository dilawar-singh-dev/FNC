<template>
  <v-app>
    <div id="app">
      <Navbar />
      <router-view />
      <Footer />
    </div>
  </v-app>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/partials/Navbar.vue";
import Footer from "@/components/partials/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>