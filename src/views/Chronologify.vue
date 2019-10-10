<template>
    <div class="chrono">
        <div class="main-content-div" :style="mainContentDivVars">
            <div class="search-div" v-if="searchDivFlag">
                <!-- <h2>Chin qui</h2>
                <p>Work in progress</p> <br/> <br/>
                
                <h2>Concept</h2>
                <p>Search artist > Filter album type > Create playlist with that artist's albums in chronological order</p> <br/> <br/> -->

                <div class="secondary-content-div">
                    <SearchArtistComponent
                        v-on:update-artist-search="updateArtistSearch"
                        v-on:search-for-artist="searchForArtist"
                        v-on:select-artist="selectArtist"
                        v-bind:artistsResult="artistsResult"
                        v-bind:selectedArtistId="artistId"
                    />

                </div>

                <AlbumTypesComponent
                    v-on:update-include-groups="updateIncludeGroups"
                />

                <h1>Search</h1>
                <GreenBtn v-on:button-click="searchArtist">Search</GreenBtn>

                <!-- <button class="search-artist-button" @click="searchArtist">Search</button> -->
            
            </div>

        
            <div class="results-div" v-if="resultsDivFlag">
                <ChronologifyHeader v-bind:artistName="artistName"/>

                <AlbumResults 
                    v-bind:artistId="artistId"
                    :artistName="artistName"
                    v-bind:albums="albums"
                />

                <ChronologifyFooter />
            </div>
        </div> 
    </div>
</template>

<script>
import AlbumTypesComponent from '@/components/Chronologify/AlbumTypes'
import AlbumResults from '@/components/Chronologify/AlbumResults'
import SearchArtistComponent from '@/components/Chronologify/SearchArtistComponent'
import ChronologifyHeader from '@/components/Chronologify/ChronologifyHeader'
import ChronologifyFooter from '@/components/Chronologify/ChronologifyFooter'
import GreenBtn from '@/components/Mics/GreenBtn'

import axios from 'axios'


export default {
    name: 'chronologify',
    components: {
        SearchArtistComponent,
        AlbumTypesComponent,
        AlbumResults,
        ChronologifyHeader,
        ChronologifyFooter,
        GreenBtn
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
            // Search info
            artistName: '',
            artistId: null,

            // Artist search result
            artistsResult: [],
            
            // Artist and album info
            albums: [],
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
            this.artistName = name;
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
        }
    },
    created() {
        // Create include_groups parameter
        this.includeGroups = this.includeGroupsArr.join();
    }
}
</script>

<style scoped>
    .main-content-div {
        /* padding: 60px 25px; */
        padding: 40px 25px;
        position: fixed;
        width: var(--width-css);
        left: var(--left-position-css);
        text-align: left;       
    }

    .search-artist-button:focus {
        outline-color: white;
    }
    
</style>
