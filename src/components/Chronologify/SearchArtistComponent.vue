<template>
    <div>
        <div>
            <h1>Find artist</h1>
            
            <input
                class="input-artist"
                type="text"
                v-model="artistSearchField"
                @keyup="$emit('update-artist-search', artistSearchField)"
                @keyup.enter="$emit('search-for-artist')"
                placeholder="Artist name"
            >

            <GreenBtn
                v-on:button-click="$emit('search-for-artist')"
            >Search</GreenBtn>
        </div>
    </div>
</template>

<script>
import GreenBtn from '@/components/Mics/GreenBtn.vue'
import ArtistItem from '@/components/Chronologify/ArtistItem.vue'

export default {
    name: 'SearchArtistComponent',
    components: {
        GreenBtn,
        ArtistItem
    },
    data() {
        return {
            artistSearchField: ''
        }
    }
}
</script>


<style scoped>
    h1 {
        padding-bottom: 10px;
    }

    .input-artist {
        background-color: black;
        border: none;
        border-bottom: 1px solid #fff;
        color: white;
        width: 220px;
        padding: 10px;
        margin: 10px;
        /* text-align: center; */
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        user-select: none;
        /* display: inline-block; */
        /* cursor: pointer; */
    }

    .input-artist::placeholder {
        color: #fff;
        font-style: italic;
    }

    input:focus {
        outline-color: white;
    }
</style>
