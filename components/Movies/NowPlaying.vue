<template>
  <v-row>
    <v-col
      v-for="(movie, index) in nowplaying"
      :key="index"
      cols="12"
      xl="3"
      lg="3"
      md="4"
      sm="6"
    >
      <v-card
        class="mx-auto"
        max-width="300"
        light
        nuxt
        :to="'/movie/' + movie.id"
      >
        <v-img
          class="white--text align-end bg-tran"
          height="300px"
          :src= "'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
        >
          <v-card-title class="bg-tran">{{movie.original_title}}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">{{movie.original_title}}</v-card-subtitle>
        <v-card-text >
          <div>
            <v-icon color="#fa9325">mdi-star</v-icon>{{movie.vote_average * 10 + '%'}}
            <span>| {{movie.release_date}}</span>
          </div>
          <div>Genre</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="orange"
            text
          >
            Share
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    nowplaying: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.bg-tran {
  background: rgba(8, 8, 8, 0.7)!important;
}
</style>