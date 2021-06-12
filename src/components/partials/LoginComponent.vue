<template>
  <v-container>
    <v-row class="my-10">
      <v-col cols="12" sm="10" md="6" xl="5" class="py-0 mx-auto">
        <div class="col my-5 py-0 pr-xl-10">
          <p class="text-h3 text-xl-h2 Cgreen--text mb-10">{{ data.title }}</p>
          <div class="mb-12">
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email Address"
                    outlined
                    dense
                    required
                    height="50"
                    solo
                    flat
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="12" class="py-0">
                  <v-text-field
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    outlined
                    dense
                    required
                    height="50"
                    solo
                    flat
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-btn
                    color="Cgreen white--text"
                    small
                    rounded
                    my-auto
                    :ripple="{ class: 'green--text' }"
                    dense
                    to="/"
                    class="
                      text-body-2 text-xl-h6
                      mx-1
                      px-6
                      py-5
                      px-xl-8
                      py-xl-7
                      rounded
                    "
                  >
                    Login
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      data: {
        title: "Login",
      },
      valid: false,
      email: "",
      emailRules: [
        (v) => !!v || "Email address is required",
        (v) => /.+@.+/.test(v) || "Email address must be valid",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length <= 20 || "Password must be less than 20 characters",
      ],
    };
  },
};
</script>
