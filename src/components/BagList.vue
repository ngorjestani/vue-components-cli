<template>
    <div class="card-columns">
        <h2>Bag</h2>
        <LibraryItem
            v-for="item in bag"
            :item="item"
            :remove-function="(item) => bag.removeItem(item)"
            :key="item.id"
        ></LibraryItem>
        <button class="btn btn-primary" @click="checkOutItems">Check Out All</button>
    </div>
</template>

<script>
import Bag from "@/models/Bag";
import LibraryItem from "@/components/LibraryItem";

export default {
    name: "BagList",
    components: {LibraryItem},
    props: {
        bag: Bag,
    },

    methods: {
        checkOutItems() {
            this.$emit('checkOutItems', this.bag);
        }
    }
}
</script>

<style scoped>

</style>