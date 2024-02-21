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
                title="Strengthening Academic Pursuits:"
                subtitle="Partnerships at Strathmore University"
                text="Partnerships play a pivotal role in the success and advancement of educational institutions, and Strathmore University stands as a testament to this reality. Located in Nairobi, Kenya, Strathmore University has cultivated a rich network of partnerships that enhance its academic, research, and community engagement endeavors.

At the heart of Strathmore's partnerships lies its commitment to providing students with a holistic educational experience that extends beyond the classroom. Collaborations with industry leaders, such as multinational corporations and local businesses, afford students opportunities for internships, mentorship programs, and real-world projects. These partnerships bridge the gap between academia and industry, equipping students with practical skills and insights essential for their future careers."></v-card>

              <div class="mt-4 text-subtitle-2"></div>

              <v-card width="100%">
                <template v-slot:title> </template>

                <template v-slot:subtitle> </template>

                <template v-slot:text>
                  Furthermore, Strathmore University has established strategic
                  alliances with renowned international universities and
                  research institutions. These partnerships facilitate student
                  and faculty exchanges, joint research initiatives, and
                  collaborative academic programs. By leveraging the expertise
                  and resources of global partners, Strathmore ensures that its
                  academic offerings remain relevant, diverse, and competitive
                  in the ever-evolving landscape of higher education. In
                  addition to fostering academic excellence, partnerships at
                  Strathmore University extend to community development and
                  social impact initiatives. Collaborations with
                  non-governmental organizations (NGOs), government agencies,
                  and community-based organizations enable the university to
                  address societal challenges and contribute to sustainable
                  development efforts. Through joint projects and outreach
                  programs, Strathmore actively promotes social responsibility
                  and civic engagement among its students and faculty.
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2"></div>

              <v-card width="100%">
                <v-card-item>
                  <v-card-title></v-card-title>

                  <v-card-subtitle></v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  Moreover, partnerships within the academic ecosystem enhance
                  Strathmore's research capabilities and facilitate knowledge
                  exchange. Collaborative research projects, funded by grants
                  and sponsorships, tackle pressing issues across various
                  disciplines, ranging from technology and innovation to
                  healthcare and environmental sustainability. By fostering
                  interdisciplinary collaborations, Strathmore University
                  fosters a culture of innovation and fosters solutions to
                  complex global challenges. In conclusion, partnerships serve
                  as the cornerstone of Strathmore University's academic,
                  research, and community engagement endeavors. By cultivating
                  diverse and meaningful collaborations, the university enriches
                  the educational experience, advances knowledge and innovation,
                  and contributes to positive societal change. As Strathmore
                  continues to nurture its partnerships, it reinforces its
                  position as a leading institution of higher learning in the
                  region and beyond.
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
