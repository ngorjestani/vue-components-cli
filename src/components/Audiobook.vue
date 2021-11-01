<template>
    <div class="audiobook">
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">{{ item.author }}</p>
        <img :src="item.thumbnail">
    </div>
</template>

<script>
import Audiobook from "@/models/Audiobook";

export default {
    name: "Audiobook",
    props: {
        item: Audiobook,
    }
}
</script>

<style scoped>

</style>