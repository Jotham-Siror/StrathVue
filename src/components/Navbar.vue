<script>
// import HomePage from "./components/HomePage.vue"
// import Events from "./components/Events.vue"
// import AboutUs from "./components/AboutUs.vue"
// import Courses from "./components/Courses.vue"
// import Library from "./components/Library.vue"
// import Patnership from "./components/Patnerships.vue"
// import Alumni from "./components/Alumni.vue"
// import ContactUs from "./components/ContactUs.vue"

</script>

<template>
    
    <v-app-bar :color="'#e9d985' ">
        <div>
            <v-btn to="/" color="white" dark>Home</v-btn>
        </div>
        <div>
            <v-btn to="/events" color="white" dark>Events</v-btn>
        </div>
        <div>
            <v-btn to="/aboutus" color="white" dark>About Us</v-btn>
        </div>
        <div>
            <v-btn to="/courses" color="white" dark>Courses</v-btn>
        </div>
        <div>
            <v-btn to="/library" color="white" dark>Library</v-btn>
        </div>
        <div>
            <v-btn to="/patnerships" color="white" dark>Patnerships</v-btn>
        </div>
        <div>
            <v-btn to="/alumni" color="white" dark>Alumni</v-btn>
        </div>
        <div>
            <v-btn to="/contactus" color="white" dark>Contact Us</v-btn>
        </div>
    </v-app-bar>

</template>