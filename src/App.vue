<template>
    <div id="app" class="container-fluid mt-3">
        <Library></Library>
    </div>
</template>

<script>
import Library from "@/components/Library";

export default {
    name: 'App',
    components: {
        Library,
    }
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
