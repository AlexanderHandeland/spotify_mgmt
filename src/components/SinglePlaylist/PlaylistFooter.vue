<template>
    <div>
        <div class="footer-text"> 
            {{ loadedTracksCounter }} of {{ totalTracksInPlaylist }} tracks loaded
        </div>

        <GreenBtn v-if="enableLoadMoreTracksFlag" v-on:button-click="$emit('load-more-tracks')">Load more tracks</GreenBtn>
        <GreenBtn v-if="!enableLoadMoreTracksFlag" :disabled="true">Load more tracks</GreenBtn>

        <GreenBtn v-on:button-click="$emit('save-to-file')">Save to file</GreenBtn>

        <GreenBtn v-on:button-click="$emit('back-to-playlists')">Back</GreenBtn>

    </div>

</template>


<script>
import GreenBtn from '@/components/Mics/GreenBtn'

export default {
    name: 'PlaylistFooter',
    components: {
        GreenBtn
    },
    props: ['loadedTracksCounter', 'totalTracksInPlaylist', 'enableLoadMoreTracksFlag'],
}
</script>


<style scoped>
    .footer-text {
        padding: 8px;
        text-align: right;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
</style>