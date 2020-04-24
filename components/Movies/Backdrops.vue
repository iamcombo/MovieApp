<template>
  <v-row>
    <v-col
      v-for="(image, index) in movie.images.backdrops.slice(0, 6)"
      :key="index"
      cols="12"
      xl="3"
      lg="4"
      md="4"
      sm="6"
    >
      <img class="image" :src="'https://image.tmdb.org/t/p/w500/' + image.file_path" alt="image">
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
.image {
  width: 380px;
  height: auto;
}
</style>