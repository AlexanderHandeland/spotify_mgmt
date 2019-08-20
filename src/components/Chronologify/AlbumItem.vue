<template>
    <div>
       <ul class="album-row">
            <!-- <li @click="$emit('show-songs-of-album', album.href, showSongs), showSongs = !showSongs">  -->
                <li @click="showSongsMethod(album.href, searched), showSongs = !showSongs">
                {{ album.name }}
            </li>
            <li>{{ album.release_date.substring(0,4) }}</li>
            <li> a </li>
            <li> b </li>

            <ul class="songs-in-album-list" v-if="showSongs">
                <li v-bind:key="songInAlbum.id" v-for="songInAlbum in songsInAlbum">
                <SongInAlbum
                    v-bind:songInAlbum="songInAlbum" />
                </li>
            </ul>

        </ul>

    </div>
</template>


<script>
import SongInAlbum from '@/components/Chronologify/SongInAlbum'

import axios from 'axios'

export default {
    name: 'AlbumItem',
    components: {
        SongInAlbum
    },
    props: ['album'],
    data() {
        return {
            showSongs: false,
            searched: false,
            songsInAlbum: []
        }
    },
    methods: {
        showSongsMethod: function(href, flag) {
            // 'flag' tells if this href has already been called
            if (!flag) {
                axios.get(href, {
                    headers: {
                        Authorization: 'Bearer ' + this.$parent.$parent.$parent.$data.token
                    }
                })
                    .then(res => {
                        // Store results
                        this.songsInAlbum = res.data.tracks.items;
                        // Mark album as searched
                        this.searched = true;
                    })
                    .catch(err => console.log(err));
            }
        }
    }
}
</script>

<style scoped>
    .album-row {
        background-color: var(--spotify-dark-green);
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin: 10px 0;
        font-size: 10px;;
        user-select: none;
    }

    .album-row > li {
        display: inline-block;
        width: 5%;
        padding: 10px;
    }

    .album-row > li:nth-child(1) {    
        width: 50%;
        font-size: 13px;
        cursor: pointer;
    }
    
    .album-row > li:nth-child(2) {
        width: 40%;
    }


    .songs-in-album-list {
        background-color: var(--spotify-black);
    }

    .songs-in-album-list {
        user-select: none;
        display: inline-block;
        width: 100%;
        padding: 8px;
    }

    .songs-in-album-list li {
        margin: 0;
        text-align: left;
        font-size: 10px;
    }
</style>