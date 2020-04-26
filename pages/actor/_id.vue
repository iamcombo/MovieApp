<template>
  <v-container>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts: {{ $fetchState.error.message }}</p>
    <div v-else>
      <v-row>
        <v-col cols="12" xl="6" lg="3" md="" sm="">
          <v-img v-if="actor.profile_path" max-width="250px" :src= "'https://image.tmdb.org/t/p/w500/' + actor.profile_path"></v-img>
        </v-col>
        <v-col>
          <div>
            <h1>{{actor.name}}</h1>
            <div>
              <v-icon color="grey">mdi-cake-variant</v-icon> 
                <span>{{birthday(actor.birthday)}}</span>
                <span>{{actor.place_of_birth}}</span>
            </div>
            <div class="pt-10">
              {{actor.biography}}
            </div>
            <div class="pt-6" v-if="actor.credits.cast.length">
              <h3>Known For</h3>
              <v-row>
                <v-col
                  v-for="(cast, index) in actor.credits.cast.slice(0,4)"
                  :key="index"
                  cols="12"
                  xl="3"
                  lg="3"
                  md="6"
                  sm="6"
                >
                <v-img max-width="140px" :src="'https://image.tmdb.org/t/p/w500/' + cast.poster_path" ></v-img>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <h1>Credits</h1>
      <v-row>
        <div>
          <ul
            v-for="(cast, index) in actor.credits.cast"
            :key="index"
          >
            <li>{{getYear(cast.release_date)}} | <span class="font-weight-bold">{{cast.title}}</span> As {{cast.character}}</li>
          </ul>
        </div>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { actor } from '~/utils/actor.js'

export default {
  data() {
    return {
      actor: null
    }
  },
  fetch: actor,
  fetchOnServer: false,
  methods: {
    birthday(date) {
      const d = new Date(date);
      const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
      const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(d) 
      
      const d1 = new Date(); // current date
      const now = d1.getFullYear(); // get Year
      return (`${mo} ${da}, ${ye} (${now - ye} years old)`)
    },
    getYear(date) {
      const d1 = new Date(date); // current date
      const now = d1.getFullYear(); // get Year
      return (`${now}`);
    }
  }
}
</script>

<style scoped>

</style>