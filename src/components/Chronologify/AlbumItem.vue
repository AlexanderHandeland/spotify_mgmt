<template>
    <div class="album-item">
       <ul>
            <li class="album-title" @click="$emit('show-songs-of-album', album.href)"> 
                {{ album.name }}
            </li>

            <div class="songs-in-album" v-if="showSongs">
                <ul> 
                    <li v-bind:key="songInAlbum.id" v-for="songInAlbum in songsInAlbum">
                        <SongInAlbum v-bind:songInAlbum="songInAlbum" />
                    </li>
                    <!-- <li v-bind:key="songInAlbumTest.id" v-for="songInAlbumTest in songsInAlbumTest">
                        <SongInAlbum v-bind:songInAlbumTest="songInAlbumTest" />
                    </li> -->
                </ul> 
            </div>  

            <ul class="album-info-columns" v-if="showInfo">
                <li>
                    Artist:
                </li>
                <li>
                    {{ album.artists[0].name }}
                </li>
                <li>
                    Album type:
                </li>
                <li>
                    {{ album.album_type }}
                </li>
                <li>
                    Tracks:
                </li>
                <li>
                    {{ album.total_tracks }}
                </li>
                <li>
                    Release date:
                </li>
                <li>
                    {{ album.release_date }}
                </li>
            </ul>
        </ul>

    </div>
</template>


<script>
import SongInAlbum from '@/components/Chronologify/SongInAlbum.vue'

export default {
    name: 'AlbumItem',
    components: {
        SongInAlbum
    },
    props: ['album', 'songsInAlbum', 'songsInAlbum'],
    data() {
        return {
            showSongs: true,
            showInfo: false
        }
    }
}
</script>

<style scoped>
   .album-item {
        background-color: var(--spotify-dark-green);
        /* padding: 6px 8px; */
        margin: 6px;
        text-align: center;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        display: inline-block;
        width: 40%;
        max-width: 500px;
        /* max-width: 500px; */
        user-select: none;
    }

    .album-title {
        background: var(--spotify-dark-green);
        color: #fff;
        padding: 6px 0;
        margin: 0;
        font-size: 16px;
        letter-spacing: 3px;
        text-transform: uppercase;
        cursor: pointer;
    }
    
    .album-title:hover {
        background-color: var(--spotify-green);
    }

    .album-info-columns {
        background-color: var(--spotify-black);
        color: #ddd;
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 13px;
        font-weight: bold;
        border-bottom: 1px #ddd solid;
    }

    .album-info-columns li {
        display: inline-block;
        width: 50%;
        padding: 10px;
    }


    .album-info-columns > li {
        /* background-color: var(--spotify-black); */
        padding: 4px 8px;
        /* margin-top: 20px; */
        /* margin-bottom: 20px; */
        text-align: left;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        width: 70%;
        /* border: none; */
    }

    .album-info-columns > li:nth-child(odd) {
        /* text-align: right; */
        width: 30%;
    }

</style>