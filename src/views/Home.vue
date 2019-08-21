<template>
  <div class="home">
    <div class="main-content-div">
      <AllPlaylists
        v-bind:playlists="playlists"
        v-on:get-single-playlist="getSinglePlaylist"
      />
    </div> 
  </div>

</template>


<script>
// @ is an alias to /src
import AllPlaylists from '@/components/AllPlaylists/AllPlaylists'

import axios from 'axios'

export default {
  name: 'home',
  components: {
    AllPlaylists
  },
  data() {
    return {
      playlists: []
    }
  },
  methods: {
    getSinglePlaylist: function(id, name) {
      this.$parent.$data.playlistTitle = name;
      this.$router.push({ name: 'playlist', params: {id} });      
    }
  },

  created() {   
    // API call to get all playlists of user
    axios.get('https://api.spotify.com/v1/users/' + this.$parent.$data.userId + '/playlists', {
        headers: {
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
  .main-content-div {
    padding: 60px 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>