<template>
    <div class="album-results">
        <h1> Albums for artist: {{ artistId }} </h1>
        
        <ul> 
            <li v-bind:key="album.id" v-for="album in albums">
        
            <AlbumItem 
                v-bind:album="album"
                v-bind:songsInAlbum="songsInAlbum"
                v-if="album.available_markets.includes('NO')"

                
                v-on:show-songs-of-album="showSongsMethod"
            />
            <!-- v-on:show-songs-of-album="$emit('show-songs-of-album', album.href)" -->
                <!-- v-on:show-songs-of-album-test="showSongsMethodTest" -->
            </li>
        </ul>

    </div>
</template>


<script>
import AlbumItem from '@/components/Chronologify/AlbumItem.vue'

import axios from 'axios'

export default {
    name: 'AlbumResults',
    props: ['artistId', 'albums', 'accessToken'],
    components: {
        AlbumItem
    },
    data() {
        return {
            songsInAlbum: []
        }
    },
    created() {
        this.songsInAlbum = [];
    },
    methods: {
        showSongsMethod: function(href) {
            console.log('clicked');
            axios.get(href, {
                    headers: {
                        Authorization: 'Bearer ' + this.accessToken
                    },
                        params: {
                    }
                })
                    .then(res => {
                    // Code for successful API request
                    
                    this.songsInAlbum.push(...res.data.tracks.items);
                    
                    // this.songsInAlbum = res.data.tracks.items;

                    console.log(this.songsInAlbum);
                    })
                    .catch(err => console.log(err));
        }
    }
}
</script>

<style scoped>

    h1 {
        padding-bottom: 10px;
    }

    .artist-id-div {
        /* padding: top right bottom left */
        padding: 10px 0px 10px 10px;
    }

    /* buttons */
    .input-artist-id {
        background-color: var(--spotify-dark-green);
        border: none;
        color: white;
        width: 220px;
        padding: 10px;
        margin: 10px;
        text-align: center;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        user-select: none;
        /* display: inline-block; */
        /* cursor: pointer; */
    }

    .input-artist-id::placeholder {
        color: #fff;
        font-style: italic;
    }

    input:focus {
        outline-color: white;
    }

    .image-artist-id {
        height: 400px;
        display: block;
        position: absolute;
    }

    .hover-for-picture {
        font-weight: bold;
        margin: 10px;
    }
</style>