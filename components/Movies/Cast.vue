<template>
  <v-row>
    <v-col
      v-for="(cast, index) in movie.credits.cast.slice(0, 4)"
      :key="index"
      cols="12"
      xl="3"
      lg="3"
      md="4"
      sm="6"
    >
      <img class="profile" :src="'https://image.tmdb.org/t/p/w500/' + cast.profile_path" alt="">
      <p class="font-weight-bold">{{cast.character}}</p>
      <span class="font-weight-light">{{cast.name}}</span>
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