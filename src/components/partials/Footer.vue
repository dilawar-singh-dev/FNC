<template>
  <v-container class="grey-light-100" fluid>
    <v-container>
      <v-row class="my-10">
        <v-col cols="12" sm="12" md="3" lg="3" class="d-flex py-0">
          <div class="col py-0 text-left">
            <router-link to="/" tag="span" style="cursor: pointer">
              <v-img
                width="110"
                height="90"
                :src="siteLogo"
                contain
                class="mb-4"
              >
              </v-img>
            </router-link>
            <p class="text-body-1 text-xl-h5 font-weight-regular mb-10">
              {{ data.description }}
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
          lg="3"
          class="d-flex py-0 mb-8 mt-0 mt-md-5"
        >
          <div class="col py-0 text-left">
            <h2
              class="text-h5 text-xl-h5 font-weight-regular mb-0 Cgreen--text"
            >
              Quick Links
            </h2>
            <v-list flat dense class="grey-light-100">
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(footerLink, index) in data.quickLinks"
                  :key="index"
                  class="px-2 py-0"
                >
                  <v-list-item-content class="py-0">
                    <v-list-item-title>
                      <router-link
                        :to="footerLink.link"
                        tag="span"
                        style="cursor: pointer"
                      >
                        <span class="text-caption text-xl-h6">{{
                          footerLink.title
                        }}</span>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
          lg="3"
          class="d-flex py-0 mb-8 mt-0 mt-md-5"
        >
          <div class="col py-0 text-left">
            <h2
              class="text-h5 text-xl-h5 font-weight-regular mb-0 Cgreen--text"
            >
              Useful Links
            </h2>
            <v-list flat dense class="grey-light-100">
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(footerLink, index) in data.usefulLinks"
                  :key="index"
                  class="px-2 py-0"
                >
                  <v-list-item-content class="py-0">
                    <v-list-item-title>
                      <router-link
                        :to="footerLink.link"
                        tag="span"
                        style="cursor: pointer"
                      >
                        <span class="text-caption text-xl-h6">{{
                          footerLink.title
                        }}</span>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
          lg="3"
          class="d-flex py-0 mb-8 mt-0 mt-md-5"
        >
          <div class="col py-0 text-left">
            <h2
              class="text-h5 text-xl-h5 font-weight-regular mb-0 Cgreen--text"
            >
              Contact Info
            </h2>
            <v-list flat dense class="grey-light-100">
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(footerLink, index) in data.contactDetails"
                  :key="index"
                  class="px-2 py-0"
                >
                  <v-list-item-content class="py-0">
                    <v-list-item-title>
                      <router-link
                        :to="footerLink.link"
                        tag="span"
                        style="cursor: pointer"
                      >
                        <span class="text-caption text-xl-h6">{{
                          footerLink.title
                        }}</span>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Logo from "@/assets/images/logo.png";
export default {
  name: "FooterSection",
  data() {
    return {
      siteLogo: Logo,
      data: {
        title: "Contact Now",
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
        quickLinks: [
          {
            title: "Home",
            link: "/",
          },
          {
            title: "About Us",
            link: "about-us",
          },
          {
            title: "Products",
            link: "products",
          },
          {
            title: "Contact Us",
            link: "contact-us",
          },
        ],
        usefulLinks: [
          {
            title: "Suppliers",
            link: "suppliers",
          },
          {
            title: "Workforce",
            link: "workforce",
          },
          {
            title: "Terms & Conditions",
            link: "terms-conditions",
          },
          {
            title: "Privacy Policy",
            link: "privacy-policy",
          },
        ],
        contactDetails: [
          {
            title: "123,Lorem Ipsum, Melbourne Australia",
            link: "",
          },
          {
            title: "admin@gmail.com",
            link: "",
          },
          {
            title: "+123(456)890",
            link: "",
          },
        ],
      },
    };
  },
};
</script>
