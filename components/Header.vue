<template>
  <v-app-bar app class="px-12">
    <span class="font-weight-black">
      <v-icon>mdi-movie</v-icon>
      Movie App
    </span>
    <v-btn nuxt to="/" text>movies</v-btn>
    <v-btn nuxt to="/tvshows" text>tv shows</v-btn>
    <v-btn nuxt to="/actors" text>actors</v-btn>
    <v-spacer></v-spacer>
    <div style="width: 280px">
      <v-autocomplete
        v-model="values"
        label="Search"
        :items="items"
        solo
        rounded
        dense
        chips
        small-chips
        hide-details
        hide-no-data
        light
      ></v-autocomplete>
    </div>
  </v-app-bar>
</template>

<script>
export default {

}
</script>

<style scoped>
  a {
    color: #fff;
    text-decoration: none;
    padding: 0 12px;
  }
  .v-app-bar {
    background: #01040b!important;
    border-bottom: 0.5px solid grey;
  }
  .v-btn::before {
    background: none!important;
  }
</style>