<template>
    <div class="playlists">
        <div class="main-content-div">
            <h2>Select a playlist</h2>

            <AllPlaylists
                v-bind:playlists="playlists"
                v-on:get-single-playlist="getSinglePlaylist"
            />

            <GreenBtn v-if="remainingPlaylists != 0" v-on:button-click="loadPlaylistsRecursive"> Load remaining {{ remainingPlaylists }} playlists</GreenBtn>

        </div>    
    </div>
</template>


<script>
// @ is an alias to /src
import AllPlaylists from '@/components/AllPlaylists/AllPlaylists'
import GreenBtn from '@/components/Mics/GreenBtn'

import axios from 'axios'

export default {
  name: 'playlists',
  components: {
    AllPlaylists,
    GreenBtn
  },
  data() {
    return {
        playlists: [],
        nextUrl: '',
        remainingPlaylists: 0
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
            this.nextUrl = res.data.next; 
            this.remainingPlaylists = res.data.total - res.data.items.length;

            })
        .catch(err => console.log(err));
    },
    methods: {
      getSinglePlaylist: function(id, name) {
        this.$parent.$data.playlistTitle = name;
        this.$router.push({ name: 'playlist', params: {id} });      
      },
      loadPlaylistsRecursive: function() {
        if (this.nextUrl !== null) {
          axios.get(this.nextUrl, {
            headers: {
              Authorization: 'Bearer ' + this.$parent.$data.token
            }
          })
          .then(res => {
            this.playlists.push(...res.data.items);
            this.nextUrl = res.data.next;
            this.loadPlaylistsRecursive();
            this.remainingPlaylists = 0;
          })
          .catch(err => console.log(err))
        }
      }
    }
}
</script>


<style scoped>
  .main-content-div {
    padding: 40px 25px;
    position: fixed;
    width: 40%;
    left: 30%; /* 50% - width/2 */
    
    /* transform: translate(-50%,-50%); */ 
  }
  
  h2, p {
    padding: 10px;
  }

</style>