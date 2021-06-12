<template>
  <v-container>
    <v-row class="my-10">
      <v-col cols="12" sm="10" md="6" class="d-flex align-center py-0 mx-auto">
        <div class="col py-0 text-center my-auto">
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
      <v-col cols="12" sm="10" md="6" xl="5" class="py-0 mx-auto">
        <div class="col my-5 py-0 pr-xl-10">
          <p class="text-h6 text-xl-h4 Cgreen--text">{{ data.title }}</p>
          <h2 class="text-h3 text-xl-h2 font-weight-regular mb-10">
            {{ data.heading.hd1 }}
            <br />
            {{ data.heading.hd2 }}
          </h2>
          <div class="mb-12">
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    label="Name"
                    outlined
                    dense
                    required
                    height="50"
                    solo
                    flat
                  ></v-text-field>
                </v-col>

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
                    v-model="subject"
                    :rules="subjectRules"
                    label="Subject"
                    outlined
                    dense
                    required
                    height="50"
                    solo
                    flat
                  ></v-text-field>
                </v-col>

                <v-col cols="12" class="py-0">
                  <v-textarea
                    :rules="messageRules"
                    label="Write Message"
                    value=""
                    outlined
                    required
                    solo
                    flat
                    no-resize
                  ></v-textarea>
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
                    Send Message
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
import AboutUsImg from "@/assets/images/about-us.png";
import AboutUsCheck from "@/assets/images/about-us-check.png";

export default {
  name: "ContactUsSection",
  data() {
    return {
      data: {
        title: "Contact Now",
        heading: {
          hd1: "Have Question?",
          hd2: "Write a Message",
        },
      },
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 20 || "Name must be less than 20 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "Email address is required",
        (v) => /.+@.+/.test(v) || "Email address must be valid",
      ],
      subject: "",
      subjectRules: [
        (v) => !!v || "Subject is required",
        (v) => v.length <= 20 || "Subject must be less than 20 characters",
      ],
      message: "",
      messageRules: [
        (v) => !!v || "Message is required",
        (v) => v.length <= 100 || "Message must be less than 100 characters",
      ],
      aboutUsImg: AboutUsImg,
      aboutUsCheck: AboutUsCheck,
    };
  },
};
</script>
