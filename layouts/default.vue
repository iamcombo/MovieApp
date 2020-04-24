<template>
  <v-app>
    <Header />
    <v-content>
      <nuxt keep-alive/>
    </v-content>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>
.v-application {
  background: #020915!important;
}
</style>