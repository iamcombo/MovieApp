<template>
  <v-container>
     <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts: {{ $fetchState.error.message }}</p>
    <div class="pt-4" v-else>
      <h3 class="title">Popular TV Show</h3>
      <v-row>
        <v-col
          v-for="(tv, index) in tvshows.results"
          :key="index"
          cols="12"
          xl="3"
          lg="3"
          md="6"
          sm="6"
        >
          <v-card
            class="mx-auto"
            light
            nuxt
          >
            <v-img
              max-height="350px"
              class="white--text align-end bg-tran"
              :src= "'https://image.tmdb.org/t/p/w500/' + tv.poster_path"
            >
              <v-card-title class="bg-tran">{{tv.original_name}}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{tv.original_name}}</v-card-subtitle>
            <v-card-text>
              <div>
                <v-icon color="#fa9325">mdi-star</v-icon>{{tv.vote_average * 10 + '%'}}
                <span>| {{tv.first_air_date}}</span>
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
    </div>
  </v-container>
</template>

<script>
import { tvshows } from '~/utils/tvshows.js'

export default {
  data() {
    return {
      tvshows: null
    }
  },
  fetch: tvshows,
  fetchOnServer: false
}
</script>

<style scoped>
.title {
  color: #fa9326;
}
.bg-tran {
  background: rgba(8, 8, 8, 0.7)!important;
}
.v-card {
  transition: 0.2s ease-in-out;
}
.v-card:hover {
  transform: translateY(-10px)
}
</style>