<template>
    <div class="podcast">
        <h3 class="card-title">{{ item.episode }}</h3>
        <p class="card-text">{{ item.podcastName }}</p>
        <img :src="item.thumbnail">
    </div>
</template>

<script>
import Podcast from "@/models/Podcast";

export default {
    name: "Podcast",
    props: {
        item: Podcast,
    }
}
</script>

<style scoped>

</style>