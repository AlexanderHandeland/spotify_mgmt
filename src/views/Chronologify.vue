<template>
    <div class="chrono">
        <div class="search-div" v-if="searchDivFlag">

        <div class="find-artist-div">
            <SearchArtistComponent
                v-on:update-artist-search="updateArtistSearch"
                v-on:search-for-artist="searchForArtist"
            />

            <SearchArtistResultsComponent
                v-bind:artistsResult="artistsResult"
                v-on:select-artist="selectArtist"
            />

            <!-- <ArtistItem
                v-bind=
                v-if="artistIsSelected"
            /> -->
        </div>

            <AlbumTypesComponent
                v-on:update-include-groups="updateIncludeGroups"
            />

            <h1>Search</h1>
            <GreenBtn v-on:button-click="searchArtist">Search</GreenBtn>

            <!-- <button class="search-artist-button" @click="searchArtist">Search</button> -->
        
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
import AlbumTypesComponent from '@/components/Chronologify/AlbumTypes.vue'
import AlbumResults from '@/components/Chronologify/AlbumResults.vue'
import SearchArtistComponent from '@/components/Chronologify/SearchArtistComponent.vue'
import SearchArtistResultsComponent from '@/components/Chronologify/SearchArtistResultsComponent.vue'
import GreenBtn from '@/components/Mics/GreenBtn.vue'

import axios from 'axios'
import { timingSafeEqual } from 'crypto';


export default {
    name: 'chronologify',
    components: {
        SearchArtistComponent,
        SearchArtistResultsComponent,
        AlbumTypesComponent,
        AlbumResults,
        GreenBtn
    },
    data() {
        return {
            // Search info
            artistName: '',
            artistId: '',

            // Artist search result
            artistsResult: [],
            
            // Artist and album info
            albums: [],
            songsInAlbum: [],
            albumsLoadedCounter: 0,
            nextUrl: '',

            // Include groups paramater
            // Assumes all album types are checked on default
            includeGroupsArr: ['album', 'single', 'appears_on', 'compilation'],
            includeGroups: '',

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

        updateArtistSearch: function(param) {
            this.artistName = param;
            // code for URL-encoding
        },

        searchForArtist: function() {
            // Reset variables (make this a function?)
            this.artistsResult = [];
            this.artistId = '';

            if (this.artistName != '') {
                axios.get('https://api.spotify.com/v1/search', {
                    headers: {
                    Authorization: 'Bearer ' + this.$parent.$data.token
                    },
                    params: {
                        'q': this.artistName,
                        'type': 'artist'
                    }
                })
                .then(res => this.artistsResult = res.data.artists.items)
                .catch(err => console.log(err))
            }
            else {
                console.log('Error: artist name can\'t be null')
            }
            
        },

        selectArtist: function(id) {
            this.artistId = id;
            console.log('Selected ID: ' + id);
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
                    Authorization: 'Bearer ' + this.$parent.$data.token
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
                    Authorization: 'Bearer ' + this.$parent.$data.token
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
