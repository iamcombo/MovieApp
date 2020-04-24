<template>
  <v-container>
    <div class="pt-4" v-if="!overlay">
      <h3 class="pt-4 title">Popular Actors</h3>
      <v-row>
        <v-col
          v-for="(actor, index) in actor"
          :key="index"
          cols="12"
          xl="2"
          lg="2"
          md="6"
          sm="6"
        >
          <v-card
            light
            :to="'/actor/' + actor.id"
            class="mx-auto"
          >
            <v-img max-height="300px" v-if="actor.profile_path" class="white--text align-end" :src= "'https://image.tmdb.org/t/p/w500/' + actor.profile_path" alt="profile"></v-img>
            <span class="font-weight-medium">{{actor.name}}</span>
            <p class="font-weight-thin">Kung fu</p>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <client-only>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </client-only>
  </v-container>
</template>

<script>
// import { popular_actor } from '~/utils/popular_actor.js'

export default {
  data() {
    return {
      actor: [],
      overlay: true,

      page: 1
    }
  },
  // fetch: popular_actor,
  methods: {
    infiniteHandler($state) {
      const config = {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTJiOGZjZTg5ODliMzlmY2U2NGEwZmQ4NTlmNTNkOCIsInN1YiI6IjVlOTk2MjJkZDE0NDQzMDAxOTUyNzFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xzho6lktWFTUo9di-EzmjkvwgVvMTco_QeqvLqbHupI" 
        }
      };
      this.$axios.get(process.env.baseApi + `/person/popular?page=${this.page}`, config)
      .then((res) => {
        if (res.data) {
          this.page ++;
          this.actor.push(...res.data.results);
          $state.loaded();
        } else {
          $state.complete();
        }
        this.overlay = false;
      });
    },
  }
}
</script>

<style scoped>
.title {
  color: #fa9326;
}
.profile {
  width: 180px;
}
</style>