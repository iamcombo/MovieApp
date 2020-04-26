<template>
  <v-app>
    <Header class="desktop"/>
    <Navbar class="mobile"/>
    <v-content>
      <nuxt keep-alive/>
    </v-content>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue';
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Header,
    Navbar
  }
}
</script>

<style>
.v-application {
  background: #020915!important;
}
/* SmartPhone */
@media only screen and (max-width: 500px) {
  .desktop {
    display: none;
  }
  .v-content {
    padding: 0!important;
  }
}
/* Tablet */
@media only screen and (min-width: 501px) and (max-width: 768px) {
  .desktop {
    display: none;
  }
  .v-content {
    padding: 0!important;
  }
}
/* Normal */
@media only screen and (min-width: 769px) and (max-width: 1199px){
    
}
/* Large monitor */
@media only screen and (min-width: 1200px) and (max-width: 1919px) {
       
}
/* Landscape */
@media only screen and (max-height: 500px) {
    
}
/* Widescreen */
@media only screen and (min-width: 1920px) {
    
}
</style>