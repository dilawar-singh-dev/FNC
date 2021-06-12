<template>
  <v-container>
    <v-row class="my-10">
      <v-col cols="12" class="py-0 text-center">
        <p class="text-h6 text-xl-h4 Cgreen--text mb-0 pb-0">Producers</p>
        <h2 class="text-h3 text-xl-h2 font-weight-regular mb-5">Products</h2>
        <p class="text-body-1 text-xl-h5 font-weight-regular mb-10">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used.
        </p>
      </v-col>

      <v-col
        v-for="n in 9"
        v-bind:key="n.key"
        cols="12"
        sm="6"
        md="4"
        lg="4"
        xl="3"
        class="py-0 mb-10"
      >
        <div class="col py-0 text-center">
          <v-card class="mx-auto" max-width="350">
            <v-img
              :src="aboutUsImg"
              :lazy-src="aboutUsImg"
              aspect-ratio="1"
              class="white--text align-end"
              height="200px"
              contain
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="white"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>

            <v-card-subtitle class="pb-0">
              <p class="text-h6 font-weight-bold">Natural Food</p>
            </v-card-subtitle>

            <v-card-text class="text--primary pb-0">
              <div>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used.
              </div>
            </v-card-text>

            <v-card-actions class="text-center mx-auto justify-center">
              <v-btn
                color="Cgreen white--text"
                my-auto
                :ripple="{ class: 'green--text' }"
                to="/product"
                class="
                  text-body-2 text-xl-h6
                  mx-1
                  px-6
                  py-5
                  px-xl-8
                  py-xl-7
                  my-2
                "
              >
                View More
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AboutUsImg from "@/assets/images/about-us.png";

export default {
  name: "ProductsSection",
  data() {
    return {
      aboutUsImg: AboutUsImg,
    };
  },
};
</script>
