<template>
  <div class="card" :class="item.isAvailable() ? 'border-success' : 'border-warning'">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button class="btn btn-secondary" v-if="!item.isAvailable()" @click="item.checkIn()">Check In</button>
      <button class="btn btn-secondary" v-else @click="item.checkOut()">Check Out</button>
      <button class="btn btn-secondary" @click="item.remove()">Remove</button>
    </div>
  </div>
</template>

<script>
import Book from "@/components/Book";
import Movie from "@/components/Movie";

export default {
  name: "LibraryItem",

  components: {
    Book,
    Movie,
  },

  props: {
    item: Object,
  },

  computed: {
    typeOfItem() {
      return this.item.constructor.name;
    },
  },
}
</script>

<style scoped>

</style>