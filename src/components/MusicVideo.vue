<template>
    <div class="musicVideo">
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">{{ item.artist }}</p>
        <img :src="item.thumbnail">
    </div>
</template>

<script>
import MusicVideo from "@/models/MusicVideo";

export default {
    name: "MusicVideo",
    props: {
        item: MusicVideo,
    }
}
</script>

<style scoped>

</style>