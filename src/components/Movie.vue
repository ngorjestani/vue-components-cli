<template>
  <div class="movie">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">{{item.genre}}</p>
    <p class="card-text">{{item.runningTime}}</p>
  </div>
</template>

<script>
import Movie from "@/models/Movie";

export default {
  name: "Movie",

  props: {
    item: Movie,
  },
}
</script>

<style scoped>

</style>