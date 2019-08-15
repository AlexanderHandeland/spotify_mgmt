<template>
    <div>
        <h1>Artist ID</h1>
        <div class="artist-id-div">
            <a> Enter Spotify ID of the artist to search for.</a>
            <br />
            <input class="input-artist-id" type="text" v-model="artistIdInput" @keyup="$emit('update-input-artist-id', artistIdInput)" placeholder="Artist ID">
            <br />
            <a> To find the artist ID, open Spotify and follow these steps: </a>
            <br />
            <p class="hover-for-picture" @mouseover="$emit('toggle-show-image', imageArtistId)" @mouseout="$emit('toggle-show-image', imageNone)">
            Right click artist > Share > Copy Spotify URI </p>
            <!-- displayImage = imageArtistId" @mouseout="displayImage = imageNone"> -->
            <img class="image-artist-id" :src="displayImage" />
        </div>
    </div>
</template>


<script>
export default {
    name: 'ArtistIdComponent',
    props: [ 'displayImage', 'imageNone', 'imageArtistId'],
    data() {
        return {
            artistIdInput: ''
        }
    }
}
</script>


<style scoped>
    h1 {
        padding-bottom: 10px;
    }

    .artist-id-div {
        /* padding: top right bottom left */
        padding: 10px 0px 10px 10px;
    }

    /* buttons */
    .input-artist-id {
        background-color: var(--spotify-dark-green);
        border: none;
        color: white;
        width: 220px;
        padding: 10px;
        margin: 10px;
        text-align: center;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        user-select: none;
        /* display: inline-block; */
        /* cursor: pointer; */
    }

    .input-artist-id::placeholder {
        color: #fff;
        font-style: italic;
    }

    input:focus {
        outline-color: white;
    }

    .image-artist-id {
        height: 400px;
        display: block;
        position: absolute;
    }

    .hover-for-picture {
        font-weight: bold;
        margin: 10px;
    }
</style>
