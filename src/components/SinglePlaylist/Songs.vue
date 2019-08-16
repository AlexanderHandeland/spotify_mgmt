<template>
    <div>
        <ul class="song-list">
            <li v-bind:key="song.id" v-for="song in songs">
                <SongItem v-bind:song="song" />
            </li>
        </ul>
    </div>
</template>


<script>
import SongItem from '@/components/SinglePlaylist/SongItem.vue';

export default {
    name: 'Songs',
    components: {
        SongItem
    },
    props: ["songs"]
}
</script>


<style scoped>
    .song-list {
        max-height: 60vh;
        overflow: auto;
    }
</style>