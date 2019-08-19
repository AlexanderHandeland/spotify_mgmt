<template>

  <div class="home">
    <div class="main-content-div">
      
      <!-- <InitScreen
        v-on:get-all-playlists="getAllPlaylists"
        v-if="initScreenFlag"
      /> -->

      <AllPlaylists
        v-bind:playlists="playlists"
        v-on:get-single-playlist="getSinglePlaylist"
        v-if="allPlaylistsFlag"
      />

      <SinglePlaylist 
        v-bind:songs="songs" 
        v-bind:playlistTitle="playlistTitle" 
        v-bind:loadedTracksCounter="loadedTracksCounter"
        v-bind:totalTracksInPlaylist="totalTracksInPlaylist"
        v-bind:enableLoadMoreTracksFlag="enableLoadMoreTracksFlag"
        v-on:load-more-tracks="loadMoreTracks"
        v-on:back-to-playlists="backToPlaylists"
        v-on:save-to-file="saveToFile"
        v-on:sort-song-title-toggle="sortSongTitleToggle"
        v-on:sort-song-artist-toggle="sortSongArtistToggle"
        v-if="singlePlaylistFlag"
      />

      <!-- <div class="info-text-field" v-if="initScreenFlag || allPlaylistsFlag">
            <p>You are logged in as </p> <p style="font-weight:bold"> AlexHandeland </p>
      </div> -->
    </div> 
  </div>

</template>


<script>
// @ is an alias to /src
import InitScreen from '@/components/InitScreen.vue'
import AllPlaylists from '@/components/AllPlaylists/AllPlaylists.vue'
import SinglePlaylist from '@/components/SinglePlaylist/SinglePlaylist.vue'

import axios from 'axios'

export default {
  name: 'home',
  components: {
    InitScreen,
    AllPlaylists,
    SinglePlaylist
  },
  data() {
    return {
      playlists: [],
      songs: [],
      playlistTitle: '',
      loadedTracksCounter: 0,
      nextUrl: '',

      // Flags
      // Display flags
      initScreenFlag: true,
      allPlaylistsFlag: false,
      singlePlaylistFlag: false,

      // Sort playlist flags
      sortBySongFlag: false,
      sortByArtistFlag: false,

      // All tracks loaded flags
      enableLoadMoreTracksFlag: true
    }
  },
  methods: {
    // getAllPlaylists: function() {      
    //   // API call to get all playlists of user
    //   axios.get('https://api.spotify.com/v1/users/' + this.$parent.$data.userId + '/playlists', {
    //       headers: {
    //           // Authorization: 'Bearer ' + this.accessToken
    //           Authorization: 'Bearer ' + this.$parent.$data.token
    //       }
    //   })
    //   .then(res => { 
    //     // Code for successful API request
    //     this.playlists = res.data.items;

    //     // Set front-end view flags
    //     this.initScreenFlag = false;
    //     this.allPlaylistsFlag = true;
    //     this.singlePlaylistFlag = false;
    //     })
    //   .catch(err => console.log(err));
    // },

    getSinglePlaylist: function(id, name) {
      // API request with headers (and parameters)
      axios.get('https://api.spotify.com/v1/playlists/' + id + '/tracks', {
        headers: {
          Authorization: 'Bearer ' + this.$parent.$data.token
        },
        params: {

        }
      })
        .then(res => {
          // Code for successful API request
          this.playlistTitle = name;
          
          // Store response data
          this.songs = res.data.items;
          this.totalTracksInPlaylist = res.data.total;
          this.nextUrl = res.data.next;

          // Calculate tracks displayed to user 
          this.loadedTracksCounter = Math.min( (res.data.offset + res.data.limit), this.totalTracksInPlaylist );          

          // Disable 'Load more tracks' button if no more tracks remain unloaded
          if (this.loadedTracksCounter == this.totalTracksInPlaylist) 
             this.enableLoadMoreTracksFlag = false;

          // Switch user display
          this.initScreenFlag = false;
          this.allPlaylistsFlag = false;
          this.singlePlaylistFlag = true;
          })
        .catch(err => console.log(err));
    },

    loadMoreTracks: function() {
      // Disable button
      this.enableLoadMoreTracksFlag = false;

      axios.get(this.nextUrl, {
        headers: {
          Authorization: 'Bearer ' + this.$parent.$data.token
        }
      })
        .then(res => {
          // Code for succesful API request

          // Append response data to current data
          this.songs.push(...res.data.items);

          // Update next url
          this.nextUrl = res.data.next;

          // Calculate tracks displayed to user,
          // smallest of offset+limit, totaltracksinplaylist
          this.loadedTracksCounter = Math.min( (res.data.offset + res.data.limit), this.totalTracksInPlaylist );          

          // // Enable 'Load more tracks' button if more tracks remain unloaded
          if (this.loadedTracksCounter < this.totalTracksInPlaylist) 
             this.enableLoadMoreTracksFlag = true;
          })
        .catch(err => console.log(err));     
    },

    backToPlaylists: function() {
      // Switch user display
      this.initScreenFlag = false;
      this.allPlaylistsFlag = true;
      this.singlePlaylistFlag = false;

      // Reset playlist counter
      this.loadedTracksCounter = 0;

      // Reset flag that disables fetching more data
      this.enableLoadMoreTracksFlag = true;
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
    }
  },

  mounted() {   
    // API call to get all playlists of user
    axios.get('https://api.spotify.com/v1/users/' + this.$parent.$data.userId + '/playlists', {
        headers: {
            // Authorization: 'Bearer ' + this.accessToken
            Authorization: 'Bearer ' + this.$parent.$data.token
        }
    })
    .then(res => { 
      // Code for successful API request
      this.playlists = res.data.items;

      // Set front-end view flags
      this.initScreenFlag = false;
      this.allPlaylistsFlag = true;
      this.singlePlaylistFlag = false;
      })
    .catch(err => console.log(err));
  }
}
</script>


<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .main-content-div {
    /* background: var(--spotify-black); */
    color: white;
    padding: 60px 25px;
    width: 100%;
    /* min-height: 80vh; */
    text-align: center;
    /* border-bottom: 1px #ccc solid; */
  }

  .main-content-div > * {
    max-width: 1200px;
    min-width: 90%;
    display: inline-block;
  }
  
  li {
    display: block;
  }
    
  .info-text-field {
    color: white;
    margin-top: 30px;
  }
</style>