<template>
  <div class="home">
    <div class="main-content-div">
      <p v-if="displayButton">Click for your Spotify playlists</p>
      <h2 v-if="!displayButton">Select a playlist</h2>
      <GreenBtn v-if="displayButton" v-on:button-click="getPlaylists">Get playlists</GreenBtn>
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
import GreenBtn from '@/components/Mics/GreenBtn'

import axios from 'axios'

export default {
  name: 'home',
  components: {
    AllPlaylists,
    GreenBtn
  },
  data() {
    return {
      playlists: [],
      displayButton: true
    }
  },
  methods: {
    getPlaylists: function() {
      // API call to get all playlists of user
      axios.get('https://api.spotify.com/v1/users/' + this.$parent.$data.userId + '/playlists', {
        headers: {
            Authorization: 'Bearer ' + this.$parent.$data.token
        }
      })
      .then(res => { 
        // Code for successful API request
        this.playlists = res.data.items;
        this.displayButton = false;
        })
      .catch(err => console.log(err));
    },

    getSinglePlaylist: function(id, name) {
      this.$parent.$data.playlistTitle = name;
      this.$router.push({ name: 'playlist', params: {id} });      
    }
  }
}
</script>


<style scoped>
  .main-content-div {
    padding: 60px 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  
  h2, p {
    padding: 10px;
  }
</style>