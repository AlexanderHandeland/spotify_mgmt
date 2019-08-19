<template>
    <div>
        <div class="footer-text"> 
            4 of 20 tracks loaded
        </div>
        <GreenBtn v-on:button-click="$emit('some-function1')">Load more albums</GreenBtn>

        <GreenBtn v-on:button-click="$emit('some-function2')">Sort</GreenBtn>

        <GreenBtn v-on:button-click="$emit('some-function3')">Back</GreenBtn>

        <!-- <button
            class="button-load-more-tracks"
            v-if="enableLoadMoreTracksFlag"
            @click="$emit('load-more-tracks')"
        >
        Load more tracks
        </button>
        <button
            class="button-load-more-tracks-disabled"
            v-if="!enableLoadMoreTracksFlag"
        >
        Load more tracks
        </button>
        <button class="button-save-to-file" @click="$emit('save-to-file')">Save to file</button>
        <button class="button-back" @click="$emit('back-to-playlists')">Back</button> -->
    </div>
    <!-- class="button-load-more-tracks" -->
</template>


<script>
import GreenBtn from '@/components/Mics/GreenBtn'

export default {
    name: 'ChronologifyFooter',
    components: {
        GreenBtn
    },
    props: ['']
}
</script>


<style scoped>

    /* .button-save-to-file, .button-back, .button-load-more-tracks, .button-load-more-tracks-disabled {
        background-color: var(--spotify-dark-green);
        border: none;
        color: white;
        padding: 10px;
        margin: 0px 10px;
        text-align: center;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        user-select: none;
        /* display: inline-block; 
    } */

    .button-save-to-file:hover, .button-back:hover, .button-load-more-tracks:hover {
        background-color: var(--spotify-green);
    }

    /* .tracks-loaded, .current-user { */
    .footer-text {
        /* background-color: var(--spotify-black); */
        padding: 8px;
        /* margin-top: 20px; */
        /* margin-bottom: 20px; */
        text-align: right;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        /* border: none; */
    }

    .button-load-more-tracks-disabled {
        background-color: var(--playlist-backdrop-gray);
        cursor: default;
        pointer-events: none;
    }

</style>