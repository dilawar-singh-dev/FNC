<template>
  <v-container>
    <v-row class="my-md-10">
      <v-col cols="12" sm="8" md="6" class="py-0 mx-auto">
        <div class="col py-0 text-center">
          <v-img
            max-width="716"
            :src="aboutUsImg"
            :lazy-src="aboutUsImg"
            aspect-ratio="1"
            class="white mx-auto mb-3"
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
        </div>
      </v-col>
      <v-col cols="12" sm="10" md="6" class="py-0 mx-auto">
        <div class="col my-5 py-0 pr-xl-10">
          <p class="text-h6 text-xl-h4 Cgreen--text">{{ data.title }}</p>
          <h2 class="text-h3 text-xl-h2 font-weight-regular mb-10">
            {{ data.heading.hd1 }}
            <span class="Cgreen--text">{{ data.heading.hd2 }}</span>
          </h2>
          <p class="text-body-1 text-xl-h5 font-weight-regular mb-10">
            {{ data.description }}
          </p>
          <div class="mb-12">
            <div
              v-for="featureList in data.featureLists"
              :key="featureList.index"
              class="d-flex mb-4 align-center"
            >
              <v-img
                max-width="23"
                :src="aboutUsCheck"
                :lazy-src="aboutUsCheck"
                aspect-ratio="1"
                class="white mr-3 my-auto"
                contain
              >
              </v-img>
              <span class="text-body-1 text-xl-h5 my-0">{{
                featureList.title
              }}</span>
            </div>
          </div>

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
            Read More
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AboutUsImg from "@/assets/images/about-us.png";
import AboutUsCheck from "@/assets/images/about-us-check.png";

export default {
  name: "AboutUsSection",
  data() {
    return {
      aboutUsImg: AboutUsImg,
      aboutUsCheck: AboutUsCheck,
      data: {
        title: "About us",
        heading: {
          hd1: "Lorem ipsum, or lipsum as it is dummy text used,",
          hd2: "sometimes known",
        },
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
        featureLists: [
          {
            title: "Lorem ipsum, or lipsum as it is sometimes",
          },
          {
            title: "Lorem ipsum, or lipsum as it is",
          },
          {
            title: "Lorem ipsum, or lipsum as sometimes",
          },
          {
            title: "Lorem ipsum, or lipsum as it is",
          },
        ],
      },
    };
  },
};
</script>
