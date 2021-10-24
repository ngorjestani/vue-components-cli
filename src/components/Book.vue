<template>
  <div class="book">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">{{item.genre}}</p>
    <p class="card-text">{{item.pages}}</p>
  </div>
</template>

<script>
import Book from "@/models/Book";

export default {
  name: "Book",

  props: {
    item: Book,
  },
}
</script>

<style scoped>

</style>