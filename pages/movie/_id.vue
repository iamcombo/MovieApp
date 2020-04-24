<template>
  <v-container>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts: {{ $fetchState.error.message }}</p>
    <div v-else>
      <v-row>
        <v-col>
          <img :src= "'https://image.tmdb.org/t/p/w500/' + movie.poster_path" class="poster">
        </v-col>
        <v-col>
          <div>
            <h1>{{movie.original_title}}</h1>
            <span>
              <v-icon color="#fa9325">mdi-star</v-icon>{{movie.vote_average * 10 + '%'}}
              <span>| {{movie.release_date}} | </span>
              <span v-for="genre in movie.genres" :key="genre.id">
                {{genre.name}}
              </span>
            </span>
          </div>
          <div class="pt-8">
            <p>{{movie.overview}}</p>
          </div>
          <div class="pt-12">
            <h3>Featured Crew</h3>
            <v-row>
              <div v-for="(crew, index) in movie.credits.crew.slice(0,2)" :key="index">
                <div class="pl-6">
                  <p class="font-weight-bold">{{crew.name}}</p>
                  <span class="font-weight-light">{{crew.job}}</span>
                </div>
              </div>
            </v-row>
          </div>
          <div class="pt-12">
            <v-btn large color="#fa9325" @click="dialogPlayV" v-if="movie.videos.results.length > 0">
              <v-icon>mdi-play</v-icon>Play Trailer
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <h1>Cast</h1>
      <Cast :movie="movie"/>
      <v-divider class="py-2"></v-divider>
      <h1>Image</h1>
      <Backdrops :movie="movie"/>
    <!-- DialogPlay -->
      <v-dialog
        v-model="dialogPlay"
        persistent
        width="80%"
        v-if="dialog"
      >
        <div class="video-container" v-if="movie.videos.results.length > 0">
          <iframe :src=" 'https://www.youtube.com/embed/'+ movie.videos.results[0].key + '?autoplay=1'" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <v-btn large color="#fa9325" @click="handleClose"><v-icon>mdi-close</v-icon>Close</v-btn>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import { movieid } from '~/utils/movieid.js';
import Cast from '~/components/Movies/Cast.vue';
import Backdrops from '~/components/Movies/Backdrops.vue';
export default {
  components: {
    Cast,
    Backdrops
  },
  data() {
    return {
      movie: null,

      dialogPlay: false,
      dialog: true
    }
  },
  fetch: movieid,
  methods: {
    dialogPlayV() {
      this.dialog = true;
      this.dialogPlay = true;
    },
    handleClose() {
      this.dialog = false;
      this.dialogPlay = false;
    }
  }
}
</script>

<style scoped>
.poster {
  width: 350px!important;
  height: auto;
}
.video-container iframe {
  width: 100%;
  height: 650px;
}
</style>