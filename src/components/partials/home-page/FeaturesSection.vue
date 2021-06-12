<template>
  <v-container>
    <v-row class="my-10">
      <v-col
        cols="12"
        sm="6"
        md="4"
        class="py-0 mb-10"
        v-for="feature in features"
        :key="feature.index"
      >
        <div class="col py-0 px-5 px-xl-15 text-center">
          <v-img
            max-width="140"
            :src="feature.image1"
            :lazy-src="feature.image1"
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
          <h3 class="text-h5 text-xl-h4 font-weight-bold mb-5">
            {{ feature.title }}
          </h3>
          <p class="text-body-1 text-xl-h6 font-weight-regular">
            {{ feature.description }}
          </p>
          <v-btn
            color="Cgreen white--text"
            outlined
            my-auto
            :ripple="{ class: 'green--text' }"
            :to="feature.linkTo"
            class="text-body-2 text-xl-h6 mx-1 px-6 py-5 px-xl-8 py-xl-7 my-3"
          >
            Read More
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FeatureImg1 from "@/assets/images/feature-1.png";
import FeatureImg2 from "@/assets/images/feature-2.png";
import FeatureImg3 from "@/assets/images/feature-3.png";

export default {
  name: "FeaturesSection",
  data() {
    return {
      features: [
        {
          image1: FeatureImg1,
          title: "Producers",
          description:
            "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
          linkTo: "/about-us",
        },
        {
          image1: FeatureImg2,
          title: "Customers",
          description:
            "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
          linkTo: "/about-us",
        },
        {
          image1: FeatureImg3,
          title: "Retailers",
          description:
            "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
          linkTo: "/about-us",
        },
      ],
    };
  },
};
</script>
