<template>
    <div 
        class="single-playlist-button"
        @click="$emit('get-single-playlist', playlist.id, playlist.name)"
        :title="playlistDescription"
    > 
        {{ playlist.name }}
    </div>
</template>


<script>
export default {
    name: 'PlaylistButton',
    components: {
    },
    props: ['playlist'],
    data() {
        return {
            playlistDescription: ''
        }
    },
    mounted() {
        this.playlistDescription = 'Tracks in playlist: ' + this.playlist.tracks.total; 
    }
}
</script>


<style scoped>
   .single-playlist-button {
        background-color: var(--spotify-dark-green);
        border: none;
        color: white;
        padding: 6px 8px;
        margin: 2px;
        text-align: center;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        display: inline-block;
        width: 300px;
        cursor: pointer;
        user-select: none;
    }

    .single-playlist-button:hover {
        background-color: var(--spotify-green);
    }
</style>
