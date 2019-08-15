<template>
  <div class="playlists-screen">
    Show this when 'Get playlists' button is pressed
    Shows all playlists of user
    <!-- <ul> 
        <li v-bind:key="playlist.id" v-for="playlist in playlists">
                <DummyPlaylistHeader v-bind:playlist="playlist" />
        </li>
    </ul> -->
  </div>
</template>


<script>
// @ is an alias to /src
import DummyPlaylistHeader from '@/components/DummyPlaylistHeader.vue';

export default {
  name: 'Playlists',
  components: {
    DummyPlaylistHeader,
  }
}
</script>


<style scoped>

</style>