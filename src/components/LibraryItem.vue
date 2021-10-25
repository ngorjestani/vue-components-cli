<template>
    <div class="card" :class="item.isAvailable() ? 'border-success' : 'border-warning'">
        <div class="card-body">
            <component :is="typeOfItem" :item="item"></component>
        </div>
        <div class="card-footer">
            <button class="btn btn-secondary" v-if="!item.isAvailable()" @click="item.checkIn()">Check In</button>
            <button class="btn btn-secondary" v-else @click="item.checkOut()">Check Out</button>
            <button class="btn btn-secondary" @click="item.remove()">Remove</button>
            <button class="btn btn-secondary" @click="addToBag">Add To Bag</button>
        </div>
    </div>
</template>

<script>
import Book from "@/components/Book";
import Movie from "@/components/Movie";
import Album from "@/components/Album";

export default {
    name: "LibraryItem",

    components: {
        Book,
        Movie,
        Album,
    },

    props: {
        item: Object,
    },

    computed: {
        typeOfItem() {
            return this.item.constructor.name;
        },
    },

    methods: {
        addToBag() {
            this.$emit('addToBag', this.item);
        },
    },
}
</script>

<style scoped>

</style>