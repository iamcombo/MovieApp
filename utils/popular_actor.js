export const popular_actor = async function popular_actor() {
  const config = {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTJiOGZjZTg5ODliMzlmY2U2NGEwZmQ4NTlmNTNkOCIsInN1YiI6IjVlOTk2MjJkZDE0NDQzMDAxOTUyNzFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xzho6lktWFTUo9di-EzmjkvwgVvMTco_QeqvLqbHupI" 
    }
  };
  await this.$axios.get(process.env.baseApi + `/person/popular?page=${this.$route.params.id}`, config)
  .then(async(res) => {
    this.actor = await res.data
  })
}