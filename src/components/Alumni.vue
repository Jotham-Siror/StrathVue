<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover></v-carousel-item>

          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
            cover></v-carousel-item>

          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover></v-carousel-item>
        </v-carousel>
      </v-layout>
      <v-layout>
        <v-container>
          <v-row align="center" justify="center">
            <div class="d-flex align-center flex-column">
              <div class="text-subtitle-2">With props</div>

              <v-card
                width="100%"
                font-size="large"
                title="The Alumni"
                subtitle="Strathmore's great Alumni"
                text="
The alumni of Strathmore University represent a proud legacy of excellence, leadership, and impact in various fields worldwide. Armed with the knowledge, skills, and values instilled during their time at Strathmore, these accomplished individuals continue to make significant contributions to their professions, communities, and society at large."></v-card>

              <div class="mt-4 text-subtitle-2"></div>

              <v-card width="100%">
                <template v-slot:title> </template>

                <template v-slot:subtitle> </template>

                <template v-slot:text>
                  Whether in business, law, academia, or the arts, Strathmore
                  alumni are known for their commitment to ethical leadership,
                  innovation, and social responsibility. They serve as
                  ambassadors of the university's mission and values, inspiring
                  current students and future generations to strive for
                  excellence and positive change.
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2"></div>

              <v-card width="100%">
                <v-card-item>
                  <v-card-title></v-card-title>

                  <v-card-subtitle></v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  Through their achievements and ongoing engagement with their
                  alma mater, Strathmore alumni exemplify the transformative
                  power of education and the enduring bonds of the Strathmore
                  community.
                </v-card-text>
              </v-card>
            </div>
          </v-row>
        </v-container>
      </v-layout>
    </v-container>
  </div>
</template>
<script setup>
const variants = ["elevated", "flat", "tonal", "outlined"];
</script>
