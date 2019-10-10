<template>
  <div class="playlist">
    <div class="playlist-div" :style="mainContentDivVars">
      <PlaylistHeader 
        v-bind:playlistTitle="playlistTitle"
        v-on:sort-song-title-toggle="sortSongTitleToggle"
        v-on:sort-song-artist-toggle="sortSongArtistToggle"
        v-on:sort-song-duration-toggle="sortSongDurationToggle"
      />
      
      <Songs
        v-bind:songs="songs"
      />

      <PlaylistFooter
        v-bind:songs="songs"
        v-bind:totalTracksInPlaylist="totalTracksInPlaylist"
        v-on:save-to-file="saveToFile"
        v-on:back-to-playlists="backToPlaylists"
      />
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import PlaylistHeader from '@/components/SinglePlaylist/PlaylistHeader'
import Songs from '@/components/SinglePlaylist/Songs'
import PlaylistFooter from '@/components/SinglePlaylist/PlaylistFooter'

import axios from 'axios'

export default {
  name: 'Playlist',
  components: {
    PlaylistHeader,
    Songs,
    PlaylistFooter
  },
  computed: {
      mainContentDivVars() {
          return {
              '--width-css': this.$parent.$data.mainContentDivWidth + '%',
              '--left-position-css': ( ( 50 -  this.$parent.$data.mainContentDivWidth / 2) ) + '%'
          }
      }
  },
  data() {
    return {
      // Get playlist ID from passed url
      playlistId: this.$route.params.id,
      playlistTitle: this.$parent.$data.playlistTitle,

      // Playlist data
      songs: [],
      totalTracksInPlaylist: '',

      // Sorting
      sortBySongFlag: false,
      sortByArtistFlag: false,
      sortByDurationFlag: false,
    }
  },
  created() {
    // Called when user navigates to this page
    axios.get('https://api.spotify.com/v1/playlists/' + this.playlistId + '/tracks', {
        headers: {
          Authorization: 'Bearer ' + this.$parent.$data.token
        }
      })
        .then(res => {
          // Store variables
          this.songs = res.data.items;
          this.totalTracksInPlaylist = res.data.total;

          // Load remaining tracks recursively (100 each request)
          this.loadMoreTracksRecursive(res.data.next);
        })
        .catch(err => console.log(err));

  },
  methods: {
    loadMoreTracksRecursive: function(url) {
      if (url !== null) {
        axios.get(url, {
            headers: {
              Authorization: 'Bearer ' + this.$parent.$data.token
            }
          })
          .then(res => {
            // Append songs to variable
            this.songs.push(...res.data.items);

            // Find next URL (if there are more trakcs to load)
            this.loadMoreTracksRecursive(res.data.next);
          })
          .catch(err => console.log(err));
      }
    },

    backToPlaylists: function() {
      this.$router.replace({ name: "playlists" });
    },

    saveToFile: function() {
      var filename = this.playlistTitle;

      // fetch data for file
      var data = 'Export of playlist from Spotify \r\n\r\n' +
        'User name\t\t\t' + this.$parent.$data.userId + '\r\n' +
        'Playlist name\t\t\t' + filename + '\r\n' +
        'Songs available in playlist\t' + this.totalTracksInPlaylist + '\r\n' +
        'Songs exported to file\t\t' + this.loadedTracksCounter + '\r\n' + 
        'Format\t\t\t\tcsv (colon separated values)\r\n\r\n' + 
        '- - - - - - - - - - - - - -\r\nFormat:\r\n- - - - - - - - - - - - - -\r\n' +
        'index; song; artist; album\r\n- - - - - - - - - - - - - -\r\n\r\n';
      var indx = 1;

      this.songs.forEach(AppendFile);

      function AppendFile(song) {
        // data = [...data, song.track.name + "\r\t \r\t" + song.track.artists[0].name + "\r\n"];
        data += indx + "; " + song.track.name + "; " + song.track.artists[0].name + "; " + song.track.album.name + "\r\n";
        indx++;
      }

      var file = new Blob([data], {type: 'text/plain'});
      var a = document.createElement("a"),
        url = URL.createObjectURL(file);

      a.href = url;
      a.download = filename + '.txt';
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
      }, 0); 
    },

    sortSongTitleToggle: function() {
      function compareSong (a, b) {
        if (a.track.name < b.track.name ) {
          return -1;
        }
        if (a.track.name > b.track.name ) {
          return 1;
        }
        return 0;
      }

      // Check flag (sortBySongFlag) which flags if 
      // the playlist is already sorted by song

      // If it is sorted by song, sort by song in ascending order
      // If it is not sorted, sort by song in descending order
      this.sortBySongFlag ? 
        this.songs.reverse( compareSong ) : 
        this.songs.sort ( compareSong );

      // Toggle flag
      this.sortBySongFlag = !this.sortBySongFlag;
    },

    sortSongArtistToggle: function() {
      function compareArtist (a, b) {
        if (a.track.artists[0].name < b.track.artists[0].name ) {
          return -1;
        }
        if (a.track.artists[0].name > b.track.artists[0].name ) {
          return 1;
        }
        return 0;
      }

      // Check flag (sortByArtistFlag) which flags if 
      // the playlist is already sorted by artist

      // If it is sorted by artist, sort by artist in ascending order
      // If it is not sorted, sort by artist in descending order
      this.sortByArtistFlag ? 
        this.songs.reverse( compareArtist ) :
        this.songs.sort( compareArtist );
      
      // Toggle flag
      this.sortByArtistFlag = !this.sortByArtistFlag;
    },

    sortSongDurationToggle: function() {
      function compareDuration (a, b) {
        if (a.track.duration_ms < b.track.duration_ms ) {
          return -1;
        }
        if (a.track.duration_ms > b.track.duration_ms ) {
          return 1;
        }
        return 0;
      }

      // Check flag (sortByArtistFlag) which flags if 
      // the playlist is already sorted by artist

      // If it is sorted by artist, sort by artist in ascending order
      // If it is not sorted, sort by artist in descending order
      this.sortByDurationFlag ? 
        this.songs.reverse( compareDuration ) :
        this.songs.sort( compareDuration );
      
      // Toggle flag
      this.sortByDurationFlag = !this.sortByDurationFlag;
    }
  }
}
</script>


<style scoped>
  .playlist-div {
    padding: 50px 25px; /* padding top 50px slightly higher due to solid colored background*/ 
    position: fixed;
    
    width: var(--width-css);
    left: var(--left-position-css);
    /* min-width: 40%; */
  }
</style>