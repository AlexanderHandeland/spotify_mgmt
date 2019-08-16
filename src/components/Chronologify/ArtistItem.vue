<template>
<!-- implement better select artist functionality
    kravspesifiser først -->
    <div 
        class='artist-item' @click="$emit('select-artist', artist.id);">
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
    props: ['artist'],
}
</script>

<style scoped>
    .artist-item {
        background: var(--playlist-backdrop-gray);
        padding: 10px;
        border-bottom: var(--spotify-black) 1px solid;
        user-select: none;
    }

    .artist-item:hover {
        background: var(--playlist-hover-gray);
        cursor: pointer;
    }

    .artist-item li {
        margin: 0;
        list-style-type: none;
        display: inline-block;
        width: 50%;
        text-align: left;
        font-size: 14px;
    }
    
    .selected {
        background: var(--spotify-dark-green);
    }
</style>