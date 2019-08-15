<template>
  <div class="all-playlists-screen">
    <ul> 
      <li v-bind:key="playlist.id" v-for="playlist in playlists">
        
        <PlaylistButton 
          v-bind:playlist="playlist"
          v-on:get-single-playlist="$emit('get-single-playlist', playlist.id, playlist.name)"
        />

      </li>
    </ul>
  </div>
</template>


<script>
// @ is an alias to /src
import PlaylistButton from '@/components/AllPlaylists/PlaylistButton.vue';

export default {
  name: 'AllPlaylists',
  components: {
    PlaylistButton,
  },
  props: ['playlists']
}
</script>


<style scoped>

</style>