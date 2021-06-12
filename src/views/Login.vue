<template>
  <div class="login">
    <LoginComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from "@/components/partials/LoginComponent.vue";

export default {
  name: "Login",
  components: {
    LoginComponent,
  },
};
</script>
