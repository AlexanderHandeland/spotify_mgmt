<template>
    <div class="album-results">
        <ul> 
            <li v-bind:key="album.id" v-for="album in albums">
        
            <AlbumItem 
                v-bind:album="album"
                v-if="album.available_markets.includes('NO')"  
            />
            </li>
        </ul>

    </div>
</template>


<script>
import AlbumItem from '@/components/Chronologify/AlbumItem'

export default {
    name: 'AlbumResults',
    props: [ 'albums'],
    components: {
        AlbumItem
    }
}
</script>

<style scoped>

</style>