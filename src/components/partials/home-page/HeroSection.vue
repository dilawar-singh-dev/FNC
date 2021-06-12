<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="10"
        md="6"
        class="d-flex align-center py-0 order-2 order-md-1 mx-auto"
      >
        <div class="col my-5 py-0">
          <p class="text-h6 text-xl-h4">{{ banner.title }}</p>
          <h2 class="text-h2 text-xl-h1 font-weight-regular mb-5">
            {{ banner.heading.black }}
            <span class="Cgreen--text">{{ banner.heading.green }}</span>
          </h2>
          <p class="text-caption text-xl-h6 font-weight-regular mb-5">
            {{ banner.description }}
          </p>
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
      <v-col cols="12" sm="10" md="6" class="py-0 order-1 order-md-2 mx-auto">
        <div class="col py-0 overflow-hidden">
          <div class="rotate-animation">
            <v-img
              :src="banner.bannerImageInner"
              :lazy-src="banner.imageLazy"
              aspect-ratio="1"
              class="white mx-auto"
              max-width="700"
              cover
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
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BannerImageInner from "@/assets/images/banner-image.png";
import BannerImageOuter from "@/assets/images/banner-image.png";
import BannerImageLazy from "@/assets/images/banner-image.png";

export default {
  name: "HeroSection",
  data() {
    return {
      banner: {
        title: "Welcome To F&C",
        heading: {
          black: "Experience The ",
          green: "Real Agriculture",
        },
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
        bannerImageInner: BannerImageInner,
        bannerImageOuter: BannerImageOuter,
        imageLazy: BannerImageLazy,
      },
    };
  },
};
</script>
<style>
.overflow-hidden {
  overflow: hidden;
}
.rotate-animation {
  -webkit-animation: rotation 60s infinite linear;
}
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
</style>
