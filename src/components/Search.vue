<template>
    <div>
        <b-navbar type="light" variant="light">
            <b-nav-form>
                <b-form-input class="mr-sm-2" placeholder="Search" v-model="searchInput"></b-form-input>
                <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">{{placeholder}}</b-button>
            </b-nav-form>
        </b-navbar>
    </div>
</template>

<script>
//import axios from 'axios';

export default {
    name: "Search",
    data() {
        return {
            placeholder: 'Search',
            searchInput: '',
        }
    },
    props: {
        searchResults: Array,
    },
    methods: {
        searchMedia() {
            //let url = 'https://itunes.apple.com/search?parameterkeyvalue';
        },
    },
}
</script>

<style scoped>

</style>