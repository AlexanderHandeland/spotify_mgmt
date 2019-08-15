<template>
    <div class="chrono">
        <a>API here: </a><a href="https://developer.spotify.com/documentation/web-api/reference/artists/get-artists-albums/">link</a>

        <div class="search-div" v-if="searchDivFlag">

            <!-- remove htis when done -->
            <p style="user-select:text">E.g: Beyond the Wizards Sleeve: spotify:artist:0DGGWrQLqX2Bli5KOPchgY</p>

            <ArtistIdComponent
                v-on:update-input-artist-id="updateInputArtistId"
                v-on:toggle-show-image="toggleShowImage"
                v-bind:displayImage="displayImage"
                v-bind:imageNone="imageNone"
                v-bind:imageArtistId="imageArtistId"
            />

            <AlbumTypesComponent
                v-on:update-include-groups="updateIncludeGroups"
            />

            <h1>Search</h1>
            
            <button class="search-artist-button" @click="searchArtist">Search</button>
        
        </div>

    
        <div class="results-div" v-if="resultsDivFlag">
            <AlbumResults 
                v-bind:artistId="artistId"
                v-bind:albums="albums"
                v-bind:songsInAlbum="songsInAlbum"
                v-on:show-songs-of-album="testFunc"
            />
        </div>
                   
    </div>
</template>

<script>
import ArtistIdComponent from '@/components/Chronologify/ArtistId.vue'
import AlbumTypesComponent from '@/components/Chronologify/AlbumTypes.vue'
import AlbumResults from '@/components/Chronologify/AlbumResults.vue'

import imageArtistId from "@/assets/artistidhelp.png";

import axios from 'axios';


export default {
    name: 'chronologify',
    components: {
        ArtistIdComponent,
        AlbumTypesComponent,
        AlbumResults
    },
    data() {
        return {
            // Search info
            artistId: '',

            // move token to app.vue or global data file
            accessToken: 'BQD5_PjHNkSHbgsCEhP-tWIa7l3nLwU1L1O59b7Xb-2K1aSX8G2iVPwDu30nileIPhrg__vI4sDlDmSExFRp2DfGyfB5f10Se8C1zLiBLwsmJkGlXT0POKyPseKzVc2wByGltf9fsaTaHdDqXwbGz4B0ChM20d631PB6_Q',

            // Artist and album info
            artistName: '',
            albums: [],
            songsInAlbum: [],
            albumsLoadedCounter: 0,
            nextUrl: '',

            // Include groups paramater
            // Assumes all album types are checked on default
            includeGroupsArr: ['album', 'single', 'appears_on', 'compilation'],
            includeGroups: '',

            // Artist id image data
            displayImage: '',
            imageNone: '',
            imageArtistId: imageArtistId,

            // View flags
            searchDivFlag: true,
            resultsDivFlag: false
        }
    },
    methods: {
        switchViewFlags: function() {
            this.searchDivFlag = !this.searchDivFlag;
            this.resultsDivFlag = !this.searchDivFlag;
        },

        updateInputArtistId: function(id) {
            this.artistId = id;
        },

        updateIncludeGroups: function(albumType, flag) {
            // albumType = 'album' || 'single' || 'appears_on' || 'compilation'

            if (flag) {
                // If albumType should be appended
                this.includeGroupsArr.push(albumType);

            } else {
                // If albumType should be removed

                // Find position of 'albumType' in array
                var index = this.includeGroupsArr.indexOf(albumType);

                // Remove element
                if (index > -1)
                    this.includeGroupsArr.splice(index, 1);

            }
            
            // Update includeGroups string from array
            this.includeGroups = this.includeGroupsArr.join();
        },

        toggleShowImage: function(image) {
            this.displayImage = image;
        },
        
        searchArtist: function() {
            // if (this.artistId.length != 22) {
            //     // Invalid artist ID format (can make this more prof by checking length and that it is base62 encoded )
            //     console.log('Invalid artist ID format');
            //     // Add visual thing to user (e.g. highlight ArtistID button and display message)

            // } else {
                // API request with headers (and parameters)
                axios.get('https://api.spotify.com/v1/artists/' + this.artistId + '/albums', {
                    headers: {
                    Authorization: 'Bearer ' + this.accessToken
                    },
                    params: {
                        // IMPLEMENT THIS IN A BETTER WAY!!
                        // parameter: include_groups=album,single,appears_on,compilation
                        'include_groups': this.includeGroups
                    }
                })
                    .then(res => {
                    // Code for successful API request
                    console.log(res.data);
                    
                    this.nextUrl = res.data.next;
                    this.albums = res.data.items;
                    
                    this.switchViewFlags();

                    })
                    .catch(err => console.log(err));
            // }
        // }
        // showSongsOfAlbum: function(href) {
        // // API request with headers (and parameters)
        // console.log('clicked');
        //     axios.get(href, {
        //         headers: {
        //         Authorization: 'Bearer ' + this.accessToken
        //         },
        //         params: {
        //         }
        //     })
        //         .then(res => {
        //         // Code for successful API request
                
                
        //         this.songsInAlbum = res.data;

        //         console.log(this.songsInAlbum);
        //         })
        //         .catch(err => console.log(err));
        },
        testFunc: function(href) {
            axios.get(href, {
                headers: {
                    Authorization: 'Bearer ' + this.accessToken
                },
                    params: {
                }
            })
                .then(res => {
                // Code for successful API request
                
                this.songsInAlbum = res.data.tracks.items;

                console.log(this.songsInAlbum);
                })
                .catch(err => console.log(err));
        }
    },
    created() {
        // Create include_groups parameter
        this.includeGroups = this.includeGroupsArr.join();
    }
}
</script>

<style>
    .chrono {
        /* background: var(--spotify-black); */
        color: white;
        padding: 40px 25px;
        width: 100%;
        min-height: 80vh;
        text-align: center;
        user-select: none;
        /* border-bottom: 1px #ccc solid; */
    }

    h1 {
        padding-bottom: 10px;
    }

    .search-div {
        padding: 60px;
        width: 80%;
        text-align: left;
    }
    
    .search-artist-button {
        background-color: var(--spotify-dark-green);
        border: none;
        color: white;
        padding: 10px;
        margin: 10px 20px;
        text-align: center;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        user-select: none;
        /* display: inline-block; */
        cursor: pointer;
    }

    .search-artist-button:focus {
        outline-color: white;
    }


</style>
