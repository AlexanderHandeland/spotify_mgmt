<template>
    <div class="song-item">
        <ul>
            <li>
                {{ song.track.name }}
            </li>
            <li>
                {{ song.track.artists[0].name }}
            </li>
            <li>
                {{ durationSec }}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'SongItem',
    props: ["song"],
    computed: {
        durationSec: function() {
            var duration_sec = Math.floor(this.song.track.duration_ms * 0.001);
            var sec = String("0" + duration_sec % 60).slice(-2);
            var min = String(Math.floor(duration_sec/60));

            return min + ":" + sec;
        }
    }
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
        width: 47%;
        text-align: left;
        font-size: 14px;
        color: white;
    }

    .song-item li:nth-child(3) {
        width: 6%;
        color: #999999;
        text-align: right;
        padding-right: 4px;
    }

</style>