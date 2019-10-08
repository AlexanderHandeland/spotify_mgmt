<template>
    <div> 
        <ul>
            <li class="playlist-title"> 
                {{ playlistTitle }}
            </li>
            <ul class="playlist-column-headers">
                <li class="clickable" v-on:click="$emit('sort-song-title-toggle')">Song</li>
                <li class="clickable" v-on:click="$emit('sort-song-artist-toggle')">Artist</li>
                <li class="clickable" v-on:click="$emit('sort-song-duration-toggle')">Dur</li>
            </ul>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'PlaylistHeader',
    components: {
    },
    props: ['playlistTitle']
}
</script>


<style scoped>
    .playlist-title {
        background: var(--spotify-dark-green);
        color: #fff;
        padding: 6px 0;
        margin: 0;
        font-size: 20px;
        letter-spacing: 3px;
        text-transform: uppercase;
    }

    .playlist-column-headers {
        background-color: var(--spotify-black);
        color: #ddd;
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 13px;
        font-weight: bold;
        border-bottom: 1px #ddd solid;
    }

    .playlist-column-headers li {
        display: inline-block;
        width: 47%;
        padding: 10px;
    }

    
    .playlist-column-headers li:nth-child(3) {
        width: 6%;
    }

    .clickable:hover {
        color: #fff;
        cursor: pointer;
        user-select: none;
    }
</style>
