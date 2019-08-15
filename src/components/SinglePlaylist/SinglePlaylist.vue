<template>
    <div class="single-playlist-view">

        <PlaylistHeader 
          v-bind:playlistTitle="playlistTitle"
          v-on:sort-song-title-toggle="$emit('sort-song-title-toggle')"
          v-on:sort-song-artist-toggle="$emit('sort-song-artist-toggle')"
        />
        
        <Songs
          v-bind:songs="songs"
        />

        <PlaylistFooter
          v-bind:loadedTracksCounter="loadedTracksCounter"
          v-bind:totalTracksInPlaylist="totalTracksInPlaylist"
          v-bind:enableLoadMoreTracksFlag="enableLoadMoreTracksFlag"
          v-on:load-more-tracks="$emit('load-more-tracks')"
          v-on:save-to-file="$emit('save-to-file')"
          v-on:back-to-playlists="$emit('back-to-playlists')"
        />

    </div>
</template>


<script>
// @ is an alias to /src
import PlaylistHeader from '@/components/SinglePlaylist/PlaylistHeader.vue';
import Songs from '@/components/SinglePlaylist/Songs.vue';
import PlaylistFooter from '@/components/SinglePlaylist/PlaylistFooter.vue';
import axios from 'axios';

export default {
  name: 'SinglePlaylist',
  components: {
    PlaylistHeader,
    PlaylistFooter,
    Songs
  },
  props: [
      'songs', 'playlistTitle', 'loadedTracksCounter', 'totalTracksInPlaylist', 'enableLoadMoreTracksFlag'
    ]
}
</script>