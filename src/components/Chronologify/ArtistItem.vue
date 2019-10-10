<template>
    <div class='artist-item' @click="$emit('select-artist', artist.id) " >
        <ul>
            <li>
                {{ artist.name }}
            </li>
        </ul>

    </div>
</template>


<script>
export default {
    name: 'ArtistItem',
    props: ['artist']
}
</script>


<style scoped>
    .artist-item {
        font-size: 14px;
        padding: 8px;
        background-color: var(--playlist-backdrop-gray);
    }

    .artist-item:hover {
        /* color: var(--spotify-green); */
        background-color: var(--playlist-hover-gray);
        cursor: pointer;
    }
    
</style>