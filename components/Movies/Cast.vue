<template>
  <v-row>
    <v-col
      v-for="(cast, index) in movie.credits.cast.slice(0, 4)"
      :key="index"
      cols="12"
      xl="3"
      lg="3"
      md="3"
      sm="4"
    >
      <v-card light nuxt :to="'/actor/' + cast.id">
      <v-img max-height="350px" :src="'https://image.tmdb.org/t/p/w500/' + cast.profile_path" alt=""></v-img>
      <p class="font-weight-bold">{{cast.character}}</p>
      <span class="font-weight-light">{{cast.name}}</span>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.profile {
  width: 200px;
  height: auto;
}
</style>