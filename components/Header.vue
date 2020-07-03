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
      <v-text-field
        solo
        rounded
        light
        dense
        label="search"
        v-model="keyword"
        class="pt-6"
      ></v-text-field>
      <div v-if="keyword" class="result">
        <ul>
          <li v-for="(item, i) in movies.results" :key="i">
            <v-row class="pa-2 d-flex align-center" @click="clickSearch(i)">
              <v-img v-if="item.poster_path" :src= "'https://image.tmdb.org/t/p/w500/' + item.poster_path" max-width="46px"></v-img>
              <span class="pl-2" v-if="item.original_title.length <= 25">{{ item.original_title }}</span>
              <span class="pl-2" v-if="item.original_title.length > 25">{{ (item.original_title).slice(0, 20) }}...</span>
            </v-row>
            <hr>
          </li>
        </ul>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
      movies: []
    }
  },
  watch: {
    keyword(val) {
      this.search(val);
    }
  },
  methods: {
    search(val) {
      if(this.keyword) {
        const config = {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTJiOGZjZTg5ODliMzlmY2U2NGEwZmQ4NTlmNTNkOCIsInN1YiI6IjVlOTk2MjJkZDE0NDQzMDAxOTUyNzFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xzho6lktWFTUo9di-EzmjkvwgVvMTco_QeqvLqbHupI" 
          }
        };
        this.$axios.get(process.env.baseApi + `/search/movie?query=${val}`, config)
        .then(res => {
          this.movies = res.data
        })
      }
    },
    clickSearch(i) {
      this.$router.push(`/movie/${this.movies.results[i].id}`);
      this.keyword = '';
    }
  }
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
  .result {
    position: absolute;
    background: #364f6b;
    width: 280px;
    padding: 1rem;
    border-radius: 12px;
    max-height: 520px;
    overflow-y: auto;
  }
  .result li:hover {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    padding: 0 10px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
  .result ul {
    padding: 0;
    list-style: none!important;
  }
</style>