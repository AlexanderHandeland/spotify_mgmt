<template>
    <div>
        <div>
            <h1>Find artist</h1>
            <div class="find-artist-body">
                <a>Search and select an artist from Spotify.</a> <br/>
                <div class="dropdown-div">
                    <input class="input-artist" type="text" placeholder="Artist name" v-model="artistSearchField" @keyup="$emit('update-artist-search', artistSearchField)" @keyup.enter="$emit('search-for-artist')" >

                    <GreenBtn v-on:button-click="$emit('search-for-artist')">Search</GreenBtn>

                    <ul class="artist-results-list">
                        <li v-bind:key="artist.id" v-for="artist in artistsResult">
                            <ArtistItem
                                v-bind:artist="artist" v-on:select-artist="$emit('select-artist', artist.id)" 
                                :style='{"background-color" : ( selectedArtistId === artist.id ? "var(--spotify-green)" : null )}' />
                        </li>
                    </ul>                     
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GreenBtn from '@/components/Mics/GreenBtn.vue'
import ArtistItem from '@/components/Chronologify/ArtistItem.vue'

export default {
    name: 'SearchArtistComponent',
    components: {
        GreenBtn,
        ArtistItem
    },
    props: [ 'artistsResult', 'selectedArtistId' ],
    data() {
        return {
            // selectedArtistId: null,
            artistSearchField: null
        }
    }
}
</script>


<style scoped>
    .dropdown-div {
        padding-bottom: 10px;
    }

    .input-artist {
        background-color: black;
        width: 50%;
        /* border-bottom: 1px solid #fff; */
        border: 1px solid var(--spotify-dark-green);
        color: white;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        padding: 10px;
    }

    .input-artist::placeholder {
        color: #fff;
        font-style: italic;
    }

    .input-artist:focus {
        outline-color: var(--spotify-green);
    }

    .artist-results-list {
        max-height: 20vh;
        width: 50%;
        overflow-x: hidden;
    }
</style>
