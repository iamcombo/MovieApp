export const popular = async function fetch() {
  const config = {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTJiOGZjZTg5ODliMzlmY2U2NGEwZmQ4NTlmNTNkOCIsInN1YiI6IjVlOTk2MjJkZDE0NDQzMDAxOTUyNzFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xzho6lktWFTUo9di-EzmjkvwgVvMTco_QeqvLqbHupI" 
    }
  };
  await this.$axios.get(process.env.baseApi + '/movie/popular', config)
  .then(async(res) => {
    this.movies = await res.data.results;
  })
  await this.$axios.get(process.env.baseApi + '/movie/now_playing', config)
  .then(async(res) => {
    this.nowplaying = await res.data.results;
  })
}