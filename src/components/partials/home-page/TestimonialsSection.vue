<template>
  <v-container>
    <v-row class="my-10">
      <v-col cols="12" class="py-0 text-center">
        <p class="text-h6 text-xl-h4 Cgreen--text mb-0 pb-0">Testimonials</p>
        <h2 class="text-h3 text-xl-h2 font-weight-regular mb-5">
          Our Testimonials
        </h2>
        <p class="text-body-1 text-xl-h5 font-weight-regular mb-10">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used.
        </p>
      </v-col>

      <v-col
        v-for="n in 1"
        v-bind:key="n.key"
        cols="11"
        md="10"
        lg="11"
        xl="9"
        class="py-0 mb-10 mx-auto"
      >
        <v-row class="green-light-200 rounded-xl pa-5 pa-md-10">
          <v-col
            cols="12"
            md="5"
            xl="4"
            class="d-none d-lg-flex py-0 text-center"
          >
            <div class="col px-0 d-flex align-center">
              <v-img
                :src="TestimonialCover"
                :lazy-src="TestimonialCover"
                aspect-ratio="1"
                class="white--text align-end rounded-xl"
                cover
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="white"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
          </v-col>
          <v-col cols="12" lg="7" xl="8" class="py-0">
            <div class="d-flex mt-8 mb-3">
              <v-img
                :src="TestimonialClient"
                :lazy-src="TestimonialClient"
                aspect-ratio="1"
                class="white--text align-start d-flex rounded-lg"
                max-width="50px"
                height="50px"
                cover
                position="center left"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="white"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>

            <p class="text-h6 text-xl-h5 font-weight-bold">Michael Harper</p>

            <div>
              <p class="text-h6 text-xl-h5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged”
              </p>
            </div>

            <div>
              <v-rating
                v-model="rating"
                background-color="orange lighten-3"
                color="orange"
                size="30"
                readonly
              ></v-rating>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TestimonialCover from "@/assets/images/testimonial-cover.png";
import TestimonialClient from "@/assets/images/testimonial-client.png";
export default {
  name: "AboutUsSection",
  data() {
    return {
      TestimonialCover: TestimonialCover,
      TestimonialClient: TestimonialClient,
      rating: 4,
    };
  },
};
</script>
