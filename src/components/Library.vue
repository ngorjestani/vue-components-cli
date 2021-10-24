<template>
    <div class="card-columns">
        <LibraryItem v-for="item in library"
                     :item="item"
                     :remove-function="(item) => library.removeItem(item)"
                     :key="item.id"
        ></LibraryItem>
        <p>Checked out: {{ library.checkedOutItems().length }}</p>
    </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";
import LibraryCollection from "@/models/LibraryCollection";
import Book from "@/models/Book";
import Movie from "@/models/Movie";
import Album from "@/models/Album";

export default {
    name: "Library",

    components: {LibraryItem},

    data() {
        return {
            library: new LibraryCollection()
                .addItem(new Book('Hop on Pop', 'Childrens', 72))
                .addItem(new Movie('Star Wars', 'Space Opera', 345))
                .addItem(new Album('Revolver', 'The Beatles', 14))
                .addItem(new Book('Wild Thing', 'Teen', 150))
                .addItem(new Movie('Scarface', 'Drama', 117))
                .addItem(new Album('Animals', 'Pink Floyd', 5))
        }
    },
}
</script>

<style scoped>

</style>