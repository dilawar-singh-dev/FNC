<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <div class="navbar">
          <v-navigation-drawer
            v-model="sidebar"
            app
            class="hidden-md-and-up Cgreen"
          >
            <v-list>
              <v-list-item
                v-for="item in mobileMenuItems"
                :key="item.title"
                :to="item.path"
              >
                <v-list-item-content class="text-capitalize white--text"
                  >{{ item.title }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>

          <v-toolbar class="elevation-0 my-2" dense prominent min-height="90">
            <v-toolbar-title>
              <router-link to="/" tag="span" style="cursor: pointer">
                <v-img width="110" height="90" :src="siteLogo" contain> </v-img>
              </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items
              class="d-none d-md-flex align-center rounded mr-5 mr-xl-15"
            >
              <router-link
                v-for="item in menuItems"
                :key="item.title"
                :to="item.path"
                tag="span"
                style="cursor: pointer"
              >
                <v-btn
                  plain
                  small
                  rounded
                  max-height="38"
                  my-auto
                  :ripple="{ class: 'green--text' }"
                  dense
                  class="
                    text-body-2 text-xl-h6
                    font-weight-regular
                    mx-1 mx-xl-2
                    px-4
                    rounded
                  "
                >
                  {{ item.title }}
                </v-btn>
              </router-link>
            </v-toolbar-items>

            <v-toolbar-items class="d-none d-md-flex align-center rounded">
              <router-link
                :to="nonAuthMenu[0].path"
                tag="span"
                style="cursor: pointer"
              >
                <v-btn
                  plain
                  rounded-lg
                  small
                  rounded
                  max-height="38"
                  my-auto
                  :ripple="{ class: 'green--text' }"
                  dense
                  class="
                    text-body-2 text-xl-h6
                    font-weight-regular
                    mx-1 mx-xl-2
                    px-4
                    rounded
                  "
                >
                  {{ nonAuthMenu[0].title }}
                </v-btn>
              </router-link>

              <router-link
                :to="nonAuthMenu[1].path"
                tag="span"
                style="cursor: pointer"
              >
                <v-btn
                  color="Cgreen white--text"
                  small
                  rounded
                  max-height="38"
                  my-auto
                  :ripple="{ class: 'green--text' }"
                  dense
                  class="
                    text-body-2 text-xl-h6
                    font-weight-regular
                    mx-1 mx-xl-2
                    px-4
                    py-xl-6
                    rounded
                  "
                >
                  {{ nonAuthMenu[1].title }}
                </v-btn>
              </router-link>
            </v-toolbar-items>

            <div class="d-md-none d-flex align-center ml-5 fill-height">
              <v-icon
                large
                ripple
                rounded
                color="Cgreen text-body-1"
                @click="sidebar = !sidebar"
              >
                mdi-hamburger</v-icon
              >
            </div>
          </v-toolbar>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from "@/assets/images/logo.png";
export default {
  name: "Navbar",
  data() {
    return {
      sidebar: false,
      siteLogo: Logo,
      mobileMenuItems:[
        {
          title: "home",
          path: "/",
        },
        {
          title: "about us",
          path: "about-us",
        },
        {
          title: "products",
          path: "products",
        },
        {
          title: "contact us",
          path: "contact-us",
        },
         {
          title: "login",
          path: "login",
        },
        {
          title: "register",
          path: "register",
        },
      ],
      menuItems: [
        {
          title: "home",
          path: "/",
        },
        {
          title: "about us",
          path: "about-us",
        },
        {
          title: "products",
          path: "products",
        },
        {
          title: "contact us",
          path: "contact-us",
        }
      ],
      nonAuthMenu: [
        {
          title: "login",
          path: "login",
        },
        {
          title: "register",
          path: "register",
        },
      ],
    };
  },
};
</script>
<style>
.navbar div.v-toolbar__content,
.navbar div.v-toolbar__extension {
  padding: 0px;
}
</style>
