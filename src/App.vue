<template>
    <div id="app" class="container-fluid mt-3">
        <Search @searchComplete="updateResults"></Search>
        <Library @addToBag="addToBag" :library="library"></Library>
        <BagList :bag="this.bag"></BagList>
    </div>
</template>

<script>
import Library from "@/components/Library";
import Bag from "@/models/Bag"
import BagList from "@/components/BagList"
import LibraryCollection from "@/models/LibraryCollection";
import Book from "@/models/Book";
import Movie from "@/models/Movie";
import Album from "@/models/Album";
import Search from "@/components/Search";

export default {
    name: 'App',
    components: {
        Search,
        Library,
        BagList,
    },

    data() {
        return {
            bag: new Bag(),
            library: new LibraryCollection()
                .addItem(new Book('Hop on Pop', 'Childrens', 72))
                .addItem(new Movie('Star Wars', 'Space Opera', 345))
                .addItem(new Album('Revolver', 'The Beatles', 14))
                .addItem(new Book('Wild Thing', 'Teen', 150))
                .addItem(new Movie('Scarface', 'Drama', 117))
                .addItem(new Album('Animals', 'Pink Floyd', 5)),
            searchResults: [],

        }
    },

    methods: {
        addToBag(item) {
            this.bag.addItem(item);
        },
        updateResults(results) {
            for (let item in results) {
                this.searchResults.push(item);
            }
            console.log(this.searchResults);
        },
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
