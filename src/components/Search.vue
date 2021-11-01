<template>
    <div>
        <b-navbar type="light" variant="light">
            <b-nav-form>
                <b-form-input class="mr-sm-2" placeholder="Search" v-model="searchInput"></b-form-input>
                <b-button variant="outline-success" class="my-2 my-sm-0" type="button" @click="searchMedia">{{placeholder}}</b-button>
            </b-nav-form>
        </b-navbar>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Search",
    data() {
        return {
            placeholder: 'Search',
            searchInput: '',
            results: this.searchResults,
        }
    },
    props: {

    },
    methods: {
        searchMedia() {
            this.results = [];
            this.searching = true;

            let url = 'https://itunes.apple.com/search?parameterkeyvalue';
            let config = {
                params: {
                    term: this.searchInput,
                    limit: 10,
                }
            }

            axios.get(url, config)
                .then((response) => {
                    this.results = response.data.results;

                    console.log(this.results);

                    this.$emit('searchComplete', this.results);
                })
                .catch((error) => {
                    console.error('AJAX ERROR', error.message);
                })
        },
    },
}
</script>

<style scoped>

</style>