<template>
    <div class="song-item">
       <p>{{songInAlbum.name}}</p>
    </div>
</template>


<script>
export default {
    name: 'SongInAlbum',
    props: ['songInAlbum']
}
</script>

<style scoped>
   .song-item {
        background: var(--playlist-backdrop-gray);
        padding: 10px;
        border-bottom: var(--spotify-black) 1px solid;
        user-select: none;
    }

    .song-item:hover {
        background: var(--playlist-hover-gray);
        cursor: pointer;
    }

    .song-item li {
        margin: 0;
        list-style-type: none;
        display: inline-block;
        width: 50%;
        text-align: left;
        font-size: 14px;
        color: white;
    }
</style>