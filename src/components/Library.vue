<template>
    <div class="card-columns">
        <LibraryItem v-for="item in library"
                     :item="item"
                     :remove-function="(item) => library.removeItem(item)"
                     :key="item.id"
                     @addToBag="$emit('addToBag', item)"
        ></LibraryItem>
        <p>Checked out: {{ library.checkedOutItems().length }}</p>
    </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";
import LibraryCollection from "@/models/LibraryCollection";

export default {
    name: "Library",

    components: {LibraryItem},

    props: {
        library: LibraryCollection,
    },
}
</script>

<style scoped>

</style>