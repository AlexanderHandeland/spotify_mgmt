<template>
    <div class="result-list-div"> 
        <ul class="artist-results-list">
            <li v-bind:key="artist.id" v-for="artist in artistsResult">
                <ArtistItem
                    v-bind:artist="artist"  v-on:select-artist="selectArtist" v-bind:class="classObject" />
            </li>
        </ul>
    </div>
</template>

<script>
import ArtistItem from '@/components/Chronologify/ArtistItem.vue';

export default {
    name: "SearchArtistResultsComponent",
    components: {
        ArtistItem
    },
    props: ['artistsResult'],
    data() {
        return {
            selectFlag: false
        }
    },
    methods: {
        selectArtist(id) {
            this.selectFlag = !this.selectFlag;            
        }
    },
    computed: {
        classObject: function() {
            return {
                selected: this.selectFlag
            }
        }
    }
}
</script>

<style scoped>
    .result-list-div {
        /* padding: top right bottom left; */
        padding: 0 0 20px 20px;
    }
    
    .artist-results-list {
        max-height: 100px;
        overflow: auto;
        max-width: 400px;
    }

    .selected {
        background: var(--spotify-dark-green);
    }

</style>
