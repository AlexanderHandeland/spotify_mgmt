<template>
    <div class="result-list-div"> 
        <ul class="artist-results-list">
            <li v-bind:key="artist.id" v-for="artist in artistsResult">
                <ArtistItem
                    v-bind:artist="artist" v-on:select-artist="$emit('select-artist', artist.id)" />
            </li>
        </ul>
    </div>
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
    .result-list-div {
        /* padding: top right bottom left; */
        padding: 0 0 20px 20px;
    }
    
    .artist-results-list {
        max-height: 100px;
        overflow: auto;
        max-width: 400px;
    }
    
    .selected {
        background: var(--spotify-dark-green);
    }

</style>
