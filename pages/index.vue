<template>
  <v-container>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts: {{ $fetchState.error.message }}</p>
    <div class="pt-4" v-else>
      <h3 class="title">Popular Movie</h3>
      <Popular :movies="movies" />
      <br>
      <h3 class="title">Now Playing</h3>
      <NowPlaying :nowplaying="nowplaying" />
    </div>
  </v-container>
</template>

<script>
import Popular from '~/components/Movies/Popular.vue';
import NowPlaying from '~/components/Movies/NowPlaying.vue';
import { popular } from '~/utils/popular.js';
export default {
  components: {
    Popular,
    NowPlaying
  },
  data() {
    return {
      movies: null,
      nowplaying: null
    }
  },
  fetch: popular,
}
</script>

<style scoped>
.title {
  color: #fa9326;
}
</style>