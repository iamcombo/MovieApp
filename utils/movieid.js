export const movieid = async function fetch() {
  const config = {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTJiOGZjZTg5ODliMzlmY2U2NGEwZmQ4NTlmNTNkOCIsInN1YiI6IjVlOTk2MjJkZDE0NDQzMDAxOTUyNzFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xzho6lktWFTUo9di-EzmjkvwgVvMTco_QeqvLqbHupI" 
    }
  };
  await this.$axios.get(process.env.baseApi + `/movie/${this.$route.params.id}?append_to_response=credits,videos,images` , config)
  .then(async(res) => {
    this.movie = await res.data
  })
}