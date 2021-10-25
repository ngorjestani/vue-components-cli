<template>
    <div id="app" class="container-fluid mt-3">
        <Library @addToBag="addToBag" :library="library"></Library>
        <BagList :bag="this.bag" @checkOutItems="checkOutBagItems"></BagList>
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

export default {
    name: 'App',
    components: {
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
                .addItem(new Album('Animals', 'Pink Floyd', 5))

        }
    },

    methods: {
        addToBag(item) {
            this.bag.addItem(item);
        },

        checkOutBagItems(bag) {
            for (let libraryItem in this.library) {
                if (bag.some(b => b.id === libraryItem.id)) {
                    libraryItem.item.checkOut();
                    console.log("items match");
                }
            }
            this.bag.removeItems();
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
    margin-top: 60px;
}
</style>
