<template>
    <div class="song-item">
        <ul>
            <li>
                {{ song.track.name }}
            </li>
            <li>
                {{ song.track.artists[0].name }}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'SongItem',
    props: ["song"]
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

    .playlist-column-headers {
        margin: 0;
        background-color: var(--spotify-black);
        color: #ddd;
        text-align: left;
        font-size: 13px;
        font-weight: bold;
    }

    .playlist-column-headers li {
        display: inline-block;
        width: 50%;
        padding: 10px;
    }
</style>