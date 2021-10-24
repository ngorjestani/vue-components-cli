<template>
    <div class="book">
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">{{ item.artist }}</p>
        <p class="card-text">{{ item.trackCount }}</p>
    </div>
</template>

<script>
import Album from "@/models/Album";

export default {
    name: "Album",

    props: {
        item: Album,
    },
}
</script>

<style scoped>

</style>