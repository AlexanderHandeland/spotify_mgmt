<template>
    <ul class="artist-results-list">
        <li v-bind:key="artist.id" v-for="artist in artistsResult">
            <ArtistItem v-bind:artist="artist" v-on:select-artist="$emit('select-artist', artist.id)" />
        </li>
    </ul>
</template>

<script>
import ArtistItem from '@/components/Chronologify/ArtistItem.vue';

export default {
    name: "SearchArtistResultsComponent",
    components: {
        ArtistItem
    },
    props: ['artistsResult']
}
</script>

<style scoped>
    .artist-results-list {
        max-height: 100px;
        /* width: 20%; */
        overflow: auto;
        padding: 10px;
        max-width: 400px;
    }
</style>
