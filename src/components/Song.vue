<template>
    <div class="song">
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">{{ item.artist }}</p>
        <img :src="item.thumbnail">
    </div>
</template>

<script>
import Song from "@/models/Song";

export default {
    name: "Song",
    props: {
        item: Song,
    }
}
</script>

<style scoped>

</style>