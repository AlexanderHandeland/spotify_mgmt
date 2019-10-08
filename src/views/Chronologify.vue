<template>
    <div class="chrono">
        <div class="main-content-div">
            <div class="search-div" v-if="searchDivFlag">
                <h2>Chin qui</h2>
                <p>Not done, work in progress ai</p> <br/> <br/>
                <div class="find-artist-div">
                    <SearchArtistComponent
                        v-on:update-artist-search="updateArtistSearch"
                        v-on:search-for-artist="searchForArtist"
                    />

                    <SearchArtistResultsComponent
                        v-bind:artistsResult="artistsResult"
                        v-on:select-artist="selectArtist"
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
import SearchArtistResultsComponent from '@/components/Chronologify/SearchArtistResultsComponent'
import ChronologifyHeader from '@/components/Chronologify/ChronologifyHeader'
import ChronologifyFooter from '@/components/Chronologify/ChronologifyFooter'
import GreenBtn from '@/components/Mics/GreenBtn'

import axios from 'axios'


export default {
    name: 'chronologify',
    components: {
        SearchArtistComponent,
        SearchArtistResultsComponent,
        AlbumTypesComponent,
        AlbumResults,
        ChronologifyHeader,
        ChronologifyFooter,
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

        selectArtist: function(id, name) {
            this.artistId = id;
            this.artistName = name;
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

    .search-div {
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

    .main-content-div {
        /* padding: 60px 25px; */
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%,-50%);
        

    }
</style>
