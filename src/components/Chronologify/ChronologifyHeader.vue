<template>
    <div> 
        <ul>
            <li class="results-title" style="font-size: 10px">Showing results for</li>
            <li class="results-title"> 
                {{ artistName }}
            </li>
            <ul class="playlist-column-headers">
                <li class="clickable" v-on:click="$emit('sort-song-title-toggle')">Album</li>
                <li class="clickable" v-on:click="$emit('sort-song-artist-toggle')">Release year</li>
                <li> a</li>
            </ul>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'ChronologifyHeader',
    components: {
    },
    props: ['artistName']
}
</script>


<style scoped>
    .results-title {
        color: #fff;
        padding: 6px 0;
        margin: 0;
        font-size: 20px;
        letter-spacing: 3px;
        text-transform: uppercase;
    }

    .playlist-column-headers {
        background-color: var(--spotify-black);
        color: #ddd;
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 13px;
        font-weight: bold;
        border-bottom: 1px #ddd solid;
    }

    .playlist-column-headers li {
        display: inline-block;
        width: 5%;
        padding: 10px;
    }

    .playlist-column-headers li:nth-child(1) {
        width: 50%;
    }
    
    .playlist-column-headers li:nth-child(2) {
        width: 40%;
    }

    .clickable:hover {
        color: #fff;
        cursor: pointer;
        user-select: none;
    }
</style>
