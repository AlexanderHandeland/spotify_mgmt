<template>
    <div class="playlists">
        <div class="main-content-div">
            <h2>Select a playlist</h2>

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
  name: 'playlists',
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
    mounted() {
      // API call to get all playlists of user
        axios.get('https://api.spotify.com/v1/users/' + this.$parent.$data.userId + '/playlists', {
            headers: {
                Authorization: 'Bearer ' + this.$parent.$data.token
            }
        })
        .then(res => {
            this.playlists = res.data.items;
            })
        .catch(err => console.log(err));
    }
}
</script>


<style scoped>
  .main-content-div {
    padding: 40px 25px;
    position: fixed;
    width: 20%;
    left: 40%; /* 50% - width/2 */
    
    /* transform: translate(-50%,-50%); */ 
  }
  
  h2, p {
    padding: 10px;
  }

</style>