<!-- <template>
  <div id="homepage">
    <v-container>
      <v-container>
        <v-container />
        <v-container />
        <v-layout column>
          <h1 style="font-size: 10vh;">Welcome to Strathmore University</h1>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template> -->
<template>
  <div id="homepage">
    <v-container />
    <v-container />
    <v-container />
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src=" https://images.unsplash.com/20/cambridge.JPG?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            cover></v-carousel-item>

          <v-carousel-item
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            cover></v-carousel-item>

          <v-carousel-item
            src="https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                title="Student Life"
                subtitle="The lovely life of a Strathmore Student"
                text="Nestled in the heart of Nairobi, Kenya, Strathmore University stands as a beacon of academic excellence and innovation, shaping the lives of its students in profound ways. Life at Strathmore University is characterized by a dynamic blend of academic rigor, vibrant campus culture, and a strong sense of community.

Academically, Strathmore University offers a diverse range of programs spanning business, law, humanities, and information technology, among others. Students are immersed in a stimulating learning environment, guided by experienced faculty members who are experts in their fields. The university emphasizes a holistic approach to education, fostering critical thinking, creativity, and ethical leadership among its students.

Beyond the classroom, life at Strathmore University is enriched by a myriad of extracurricular activities and opportunities for personal development. The campus buzzes with energy as students participate in clubs, sports teams, and cultural events, nurturing their talents and passions outside of academics. Whether it's debating global issues, competing in sports tournaments, or organizing community outreach programs, students at Strathmore University are actively engaged in shaping their campus experience.

Moreover, the spirit of community permeates every aspect of life at Strathmore University. Students come from diverse backgrounds and cultures, creating a vibrant tapestry of perspectives and experiences. This diversity is celebrated and embraced, fostering a culture of inclusivity and mutual respect. Students support one another academically, socially, and emotionally, forming lifelong friendships and professional networks that extend far beyond graduation.

However, life at Strathmore University also presents its share of challenges. Balancing academic commitments, extracurricular activities, and personal responsibilities requires discipline, time management, and resilience. Yet, it is through overcoming these challenges that students at Strathmore University grow and thrive, emerging as confident, capable individuals ready to make a positive impact on society.

In conclusion, life at Strathmore University is a transformative journey characterized by academic excellence, vibrant campus culture, and a strong sense of community. It is a place where students are empowered to pursue their passions, realize their potential, and become leaders in their respective fields."></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="100%">
                <template v-slot:title> Accomodation </template>

                <template v-slot:subtitle>
                  The accomodation of our students
                </template>

                <template v-slot:text>
                  At Strathmore University, accommodation is not just about
                  providing a place to stay; it's about fostering a supportive
                  environment where students can thrive academically, socially,
                  and personally. The university recognizes the importance of
                  comfortable and conducive living spaces in enhancing the
                  overall student experience. Strathmore University offers a
                  range of accommodation options to suit the diverse needs and
                  preferences of its student body. From on-campus dormitories to
                  off-campus apartments and hostels, students have access to a
                  variety of housing choices. The university strives to ensure
                  that all accommodation facilities are well-maintained, safe,
                  and equipped with essential amenities to promote a conducive
                  living and learning environment. The on-campus dormitories at
                  Strathmore University provide students with the convenience of
                  living within close proximity to academic buildings,
                  libraries, and other campus facilities. These dormitories are
                  designed to foster a sense of community and camaraderie among
                  residents, with common areas for socializing, studying, and
                  recreation. Additionally, resident assistants and support
                  staff are available to address any concerns or issues that may
                  arise, ensuring the well-being and safety of students. For
                  students who prefer more independent living arrangements,
                  off-campus accommodation options are also available.
                  Strathmore University assists students in finding suitable
                  off-campus housing options, taking into consideration factors
                  such as location, affordability, and safety. While living
                  off-campus offers students greater autonomy and flexibility,
                  the university remains committed to providing support and
                  resources to ensure a smooth transition and a positive living
                  experience. In addition to accommodation facilities,
                  Strathmore University offers a range of support services to
                  help students adjust to university life and thrive in their
                  new environment. From orientation programs and counseling
                  services to academic advising and extracurricular activities,
                  the university is dedicated to supporting the holistic
                  development and well-being of its students. In conclusion,
                  accommodation at Strathmore University is more than just a
                  place to live—it's a key component of the university's
                  commitment to providing students with a supportive and
                  enriching educational experience. Whether living on-campus or
                  off-campus, students can expect to find comfortable, safe, and
                  inclusive living environments that foster personal growth,
                  academic success, and a sense of belonging within the
                  Strathmore community.
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="100%">
                <v-card-item>
                  <v-card-title>Sports and clubs</v-card-title>

                  <v-card-subtitle
                    >The Clubs ans Sports experience in
                    Strathmore</v-card-subtitle
                  >
                </v-card-item>

                <v-card-text>
                  At Strathmore University, the vibrant clubs and sports scene
                  play a pivotal role in enhancing the overall student
                  experience, fostering personal growth, leadership skills, and
                  a sense of community. The university offers a diverse array of
                  clubs and sports teams, catering to a wide range of interests
                  and passions. Clubs at Strathmore University provide students
                  with opportunities to pursue their interests outside of the
                  classroom, connect with like-minded peers, and make meaningful
                  contributions to their communities. Whether it's joining a
                  debate club, participating in a cultural society, or engaging
                  in community service initiatives, students have ample
                  opportunities to explore their interests, develop new skills,
                  and broaden their horizons. Moreover, clubs serve as platforms
                  for students to cultivate leadership skills and take on roles
                  of responsibility. Through organizing events, leading
                  discussions, and collaborating with fellow members, students
                  learn valuable leadership qualities such as communication,
                  teamwork, and problem-solving—all of which are essential for
                  success in both academic and professional endeavors.
                  Similarly, sports play an integral role in the student
                  experience at Strathmore University, promoting physical
                  fitness, teamwork, and sportsmanship. The university boasts a
                  range of sports teams competing in various disciplines,
                  including basketball, soccer, rugby, volleyball, and
                  athletics. Whether students aspire to compete at the highest
                  level or simply enjoy recreational sports, there are
                  opportunities for all levels of skill and commitment.
                  Participation in sports not only contributes to physical
                  well-being but also fosters camaraderie and a sense of
                  belonging among students. Sports teams at Strathmore
                  University exemplify the values of discipline, dedication, and
                  resilience, instilling important life lessons that extend far
                  beyond the playing field. In conclusion, clubs and sports are
                  integral components of the student experience at Strathmore
                  University, enriching campus life and promoting holistic
                  development. Through participation in clubs and sports teams,
                  students have the opportunity to pursue their passions,
                  develop valuable skills, and forge lifelong friendships,
                  contributing to a vibrant and dynamic campus community.
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
