(function(t){function e(e){for(var a,s,i=e[0],r=e[1],c=e[2],u=0,d=[];u<i.length;u++)s=i[u],l[s]&&d.push(l[s][0]),l[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);g&&g(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var i=n[s];0!==l[i]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},l={app:0},o=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c9793488"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={about:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"ceedbeb7"}[t]+".css",l=r.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===l))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===a||u===l)return e()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=e,g.onerror=function(e){var a=e&&e.target&&e.target.src||l,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[t],g.parentNode.removeChild(g),n(o)},g.href=l;var p=document.getElementsByTagName("head")[0];p.appendChild(g)}).then(function(){s[t]=0}));var a=l[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,n){a=l[t]=[e,n]});e.push(a[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=i(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=l[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");o.type=a,o.request=s,n[1](o)}l[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var g=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0198":function(t,e,n){},"034f":function(t,e,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"238f":function(t,e,n){},"25b6":function(t,e,n){"use strict";var a=n("c68b"),s=n.n(a);s.a},"2b90":function(t,e,n){},"2d04":function(t,e,n){},"2d7f":function(t,e,n){},"3ff8":function(t,e,n){"use strict";var a=n("4f23"),s=n.n(a);s.a},"43bd":function(t,e,n){"use strict";var a=n("0198"),s=n.n(a);s.a},4885:function(t,e,n){"use strict";var a=n("238f"),s=n.n(a);s.a},"4ab8":function(t,e,n){},"4ba1":function(t,e,n){"use strict";var a=n("2d7f"),s=n.n(a);s.a},"4f23":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},l=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("h1",[t._v("Spot MGMT")]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n        "),n("router-link",{attrs:{to:"/chronologify"}},[t._v("Chronologify")]),t._v("|\n        "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},i=[],r={name:"Header"},c=r,u=(n("f047"),n("2877")),d=Object(u["a"])(c,o,i,!1,null,"28110782",null),g=d.exports,p={name:"app",components:{Header:g}},m=p,f=(n("034f"),Object(u["a"])(m,s,l,!1,null,null,null)),b=f.exports,h=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"main-content-div"},[t.initScreenFlag?n("InitScreen",{on:{"get-all-playlists":t.getAllPlaylists}}):t._e(),t.allPlaylistsFlag?n("AllPlaylists",{attrs:{playlists:t.playlists},on:{"get-single-playlist":t.getSinglePlaylist}}):t._e(),t.singlePlaylistFlag?n("SinglePlaylist",{attrs:{songs:t.songs,playlistTitle:t.playlistTitle,loadedTracksCounter:t.loadedTracksCounter,totalTracksInPlaylist:t.totalTracksInPlaylist,enableLoadMoreTracksFlag:t.enableLoadMoreTracksFlag},on:{"load-more-tracks":t.loadMoreTracks,"back-to-playlists":t.backToPlaylists,"save-to-file":t.saveToFile,"sort-song-title-toggle":t.sortSongTitleToggle,"sort-song-artist-toggle":t.sortSongArtistToggle}}):t._e(),t.initScreenFlag||t.allPlaylistsFlag?n("div",{staticClass:"info-text-field"},[n("p",[t._v("You are logged in as ")]),n("p",{staticStyle:{"font-weight":"bold"}},[t._v(" AlexHandeland ")])]):t._e()],1)])},y=[],_=(n("55dd"),n("7f7f"),n("ac6a"),n("75fc")),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"init-screen"},[n("button",{staticClass:"fetch-playlists-button",on:{click:function(e){return t.$emit("get-all-playlists")}}},[t._v("Get playlists")])])},I=[],A=n("bc3a"),T=n.n(A),F={name:"InitScreen",components:{}},C=F,S=(n("f132"),Object(u["a"])(C,k,I,!1,null,"37af4c28",null)),P=S.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all-playlists-screen"},[n("ul",t._l(t.playlists,function(e){return n("li",{key:e.id},[n("PlaylistButton",{attrs:{playlist:e},on:{"get-single-playlist":function(n){return t.$emit("get-single-playlist",e.id,e.name)}}})],1)}),0)])},w=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"single-playlist-button",attrs:{title:t.playlistDescription},on:{click:function(e){return t.$emit("get-single-playlist",t.playlist.id,t.playlist.name)}}},[t._v(" \n    "+t._s(t.playlist.name)+"\n")])},$=[],j={name:"PlaylistButton",components:{},props:["playlist"],data:function(){return{playlistDescription:""}},mounted:function(){this.playlistDescription="Tracks in playlist: "+this.playlist.tracks.total}},E=j,B=(n("25b6"),Object(u["a"])(E,O,$,!1,null,"3f39b828",null)),L=B.exports,M={name:"AllPlaylists",components:{PlaylistButton:L},props:["playlists"]},D=M,G=Object(u["a"])(D,x,w,!1,null,"a11e1834",null),H=G.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"single-playlist-view"},[n("PlaylistHeader",{attrs:{playlistTitle:t.playlistTitle},on:{"sort-song-title-toggle":function(e){return t.$emit("sort-song-title-toggle")},"sort-song-artist-toggle":function(e){return t.$emit("sort-song-artist-toggle")}}}),n("Songs",{attrs:{songs:t.songs}}),n("PlaylistFooter",{attrs:{loadedTracksCounter:t.loadedTracksCounter,totalTracksInPlaylist:t.totalTracksInPlaylist,enableLoadMoreTracksFlag:t.enableLoadMoreTracksFlag},on:{"load-more-tracks":function(e){return t.$emit("load-more-tracks")},"save-to-file":function(e){return t.$emit("save-to-file")},"back-to-playlists":function(e){return t.$emit("back-to-playlists")}}})],1)},U=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",[n("li",{staticClass:"playlist-title"},[t._v(" \n            "+t._s(t.playlistTitle)+"\n        ")]),n("ul",{staticClass:"playlist-column-headers"},[n("li",{staticClass:"clickable",on:{click:function(e){return t.$emit("sort-song-title-toggle")}}},[t._v("Song")]),n("li",{staticClass:"clickable",on:{click:function(e){return t.$emit("sort-song-artist-toggle")}}},[t._v("Artist")])])])])},z=[],K={name:"PlaylistHeader",components:{},props:["playlistTitle"]},V=K,X=(n("7d24"),Object(u["a"])(V,R,z,!1,null,"288a93d6",null)),Q=X.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{scroll:t.checkScrolledToBottom}},[n("ul",{staticClass:"song-list"},t._l(t.songs,function(t){return n("li",{key:t.id},[n("SongItem",{attrs:{song:t}})],1)}),0)])},W=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song-item"},[n("ul",[n("li",[t._v("\n            "+t._s(t.song.track.name)+"\n        ")]),n("li",[t._v("\n            "+t._s(t.song.track.artists[0].name)+"\n        ")])])])},Y=[],Z={name:"SongItem",props:["song"]},tt=Z,et=(n("43bd"),Object(u["a"])(tt,q,Y,!1,null,"e01d6eb2",null)),nt=et.exports,at={name:"Songs",components:{SongItem:nt},props:["songs"],methods:{checkScrolledToBottom:function(t){var e=t.target,n=e.scrollTop,a=e.clientHeight,s=e.scrollHeight;n+a>=s&&console.log("triggered")}}},st=at,lt=(n("4885"),Object(u["a"])(st,J,W,!1,null,"5a40a30c",null)),ot=lt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"footer-text"},[t._v(" \n            "+t._s(t.loadedTracksCounter)+" of "+t._s(t.totalTracksInPlaylist)+" tracks loaded\n        ")]),t.enableLoadMoreTracksFlag?n("button",{staticClass:"button-load-more-tracks",on:{click:function(e){return t.$emit("load-more-tracks")}}},[t._v("\n        Load more tracks\n        ")]):t._e(),t.enableLoadMoreTracksFlag?t._e():n("button",{staticClass:"button-load-more-tracks-disabled"},[t._v("\n        Load more tracks\n        ")]),n("button",{staticClass:"button-save-to-file",on:{click:function(e){return t.$emit("save-to-file")}}},[t._v("Save to file")]),n("button",{staticClass:"button-back",on:{click:function(e){return t.$emit("back-to-playlists")}}},[t._v("Back")])])},rt=[],ct={name:"PlaylistFooter",components:{},props:["loadedTracksCounter","totalTracksInPlaylist","enableLoadMoreTracksFlag"]},ut=ct,dt=(n("3ff8"),Object(u["a"])(ut,it,rt,!1,null,"9f0e211c",null)),gt=dt.exports,pt={name:"SinglePlaylist",components:{PlaylistHeader:Q,PlaylistFooter:gt,Songs:ot},props:["songs","playlistTitle","loadedTracksCounter","totalTracksInPlaylist","enableLoadMoreTracksFlag"]},mt=pt,ft=Object(u["a"])(mt,N,U,!1,null,null,null),bt=ft.exports,ht={name:"home",components:{InitScreen:P,AllPlaylists:H,SinglePlaylist:bt},data:function(){return{playlists:[],songs:[],playlistTitle:"",loadedTracksCounter:0,nextUrl:"",userId:"AlexHandeland",accessToken:"BQDEAKNniI_LAFP83WiNrdjtAl5JCIN5VTHM__7x9oDvF7CVF-QbxGrKUoAweE6FvPV2yc1ih2ImEXQdvRa-LPOV7XRLj2dLvWoXd-mdPo9faPy7cYPKHyse4mhA_FJp0gGlfxKo_Kgu-k_bbOpB5Sjf8AgheAbwx3Z7eg",initScreenFlag:!0,allPlaylistsFlag:!1,singlePlaylistFlag:!1,sortBySongFlag:!1,sortByArtistFlag:!1,enableLoadMoreTracksFlag:!0}},methods:{getAllPlaylists:function(){var t=this;T.a.get("https://api.spotify.com/v1/users/"+this.userId+"/playlists",{headers:{Authorization:"Bearer "+this.accessToken}}).then(function(e){t.playlists=e.data.items,t.initScreenFlag=!1,t.allPlaylistsFlag=!0,t.singlePlaylistFlag=!1}).catch(function(t){return console.log(t)})},getSinglePlaylist:function(t,e){var n=this;T.a.get("https://api.spotify.com/v1/playlists/"+t+"/tracks",{headers:{Authorization:"Bearer "+this.accessToken},params:{}}).then(function(t){n.playlistTitle=e,n.songs=t.data.items,n.totalTracksInPlaylist=t.data.total,n.nextUrl=t.data.next,n.loadedTracksCounter=Math.min(t.data.offset+t.data.limit,n.totalTracksInPlaylist),n.loadedTracksCounter==n.totalTracksInPlaylist&&(n.enableLoadMoreTracksFlag=!1),n.initScreenFlag=!1,n.allPlaylistsFlag=!1,n.singlePlaylistFlag=!0}).catch(function(t){return console.log(t)})},loadMoreTracks:function(){var t=this;this.enableLoadMoreTracksFlag=!1,T.a.get(this.nextUrl,{headers:{Authorization:"Bearer "+this.accessToken}}).then(function(e){var n;(n=t.songs).push.apply(n,Object(_["a"])(e.data.items)),t.nextUrl=e.data.next,t.loadedTracksCounter=Math.min(e.data.offset+e.data.limit,t.totalTracksInPlaylist),t.loadedTracksCounter<t.totalTracksInPlaylist&&(t.enableLoadMoreTracksFlag=!0)}).catch(function(t){return console.log(t)})},backToPlaylists:function(){this.initScreenFlag=!1,this.allPlaylistsFlag=!0,this.singlePlaylistFlag=!1,this.loadedTracksCounter=0,this.enableLoadMoreTracksFlag=!0},saveToFile:function(){console.log("clicked and emitted tohome");var t=this.playlistTitle,e="Export of playlist from Spotify \r\n\r\nUser name\t\t\t"+this.userId+"\r\nPlaylist name\t\t\t"+t+"\r\nSongs available in playlist\t"+this.totalTracksInPlaylist+"\r\nSongs exported to file\t\t"+this.loadedTracksCounter+"\r\nFormat\t\t\t\tcsv (colon separated values)\r\n\r\n- - - - - - - - - - - - - -\r\nFormat:\r\n- - - - - - - - - - - - - -\r\nindex; song; artist; album\r\n- - - - - - - - - - - - - -\r\n\r\n",n=1;function a(t){e+=n+"; "+t.track.name+"; "+t.track.artists[0].name+"; "+t.track.album.name+"\r\n",n++}this.songs.forEach(a);var s=new Blob([e],{type:"text/plain"}),l=document.createElement("a"),o=URL.createObjectURL(s);l.href=o,l.download=t+".txt",document.body.appendChild(l),l.click(),setTimeout(function(){document.body.removeChild(l),window.URL.revokeObjectURL(o)},0)},sortSongTitleToggle:function(){function t(t,e){return t.track.name<e.track.name?-1:t.track.name>e.track.name?1:0}this.sortBySongFlag?this.songs.reverse(t):this.songs.sort(t),this.sortBySongFlag=!this.sortBySongFlag},sortSongArtistToggle:function(){function t(t,e){return t.track.artists[0].name<e.track.artists[0].name?-1:t.track.artists[0].name>e.track.artists[0].name?1:0}this.sortByArtistFlag?this.songs.reverse(t):this.songs.sort(t),this.sortByArtistFlag=!this.sortByArtistFlag}}},vt=ht,yt=(n("cccb"),Object(u["a"])(vt,v,y,!1,null,null,null)),_t=yt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chrono"},[n("a",[t._v("API here: ")]),n("a",{attrs:{href:"https://developer.spotify.com/documentation/web-api/reference/artists/get-artists-albums/"}},[t._v("link")]),t.searchDivFlag?n("div",{staticClass:"search-div"},[n("p",{staticStyle:{"user-select":"text"}},[t._v("E.g: Beyond the Wizards Sleeve: spotify:artist:0DGGWrQLqX2Bli5KOPchgY")]),n("ArtistIdComponent",{attrs:{displayImage:t.displayImage,imageNone:t.imageNone,imageArtistId:t.imageArtistId},on:{"update-input-artist-id":t.updateInputArtistId,"toggle-show-image":t.toggleShowImage}}),n("AlbumTypesComponent",{on:{"update-include-groups":t.updateIncludeGroups}}),n("h1",[t._v("Search")]),n("button",{staticClass:"search-artist-button",on:{click:t.searchArtist}},[t._v("Search")])],1):t._e(),t.resultsDivFlag?n("div",{staticClass:"results-div"},[n("AlbumResults",{attrs:{artistId:t.artistId,albums:t.albums,songsInAlbum:t.songsInAlbum},on:{"show-songs-of-album":t.testFunc}})],1):t._e()])},It=[],At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Artist ID")]),n("div",{staticClass:"artist-id-div"},[n("a",[t._v(" Enter Spotify ID of the artist to search for.")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.artistIdInput,expression:"artistIdInput"}],staticClass:"input-artist-id",attrs:{type:"text",placeholder:"Artist ID"},domProps:{value:t.artistIdInput},on:{keyup:function(e){return t.$emit("update-input-artist-id",t.artistIdInput)},input:function(e){e.target.composing||(t.artistIdInput=e.target.value)}}}),n("br"),n("a",[t._v(" To find the artist ID, open Spotify and follow these steps: ")]),n("br"),n("p",{staticClass:"hover-for-picture",on:{mouseover:function(e){return t.$emit("toggle-show-image",t.imageArtistId)},mouseout:function(e){return t.$emit("toggle-show-image",t.imageNone)}}},[t._v("\n        Right click artist > Share > Copy Spotify URI ")]),n("img",{staticClass:"image-artist-id",attrs:{src:t.displayImage}})])])},Tt=[],Ft={name:"ArtistIdComponent",props:["displayImage","imageNone","imageArtistId"],data:function(){return{artistIdInput:""}}},Ct=Ft,St=(n("82e5"),Object(u["a"])(Ct,At,Tt,!1,null,"0e74245e",null)),Pt=St.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Album types")]),n("div",{staticClass:"album-types-div"},[t._m(0),n("button",{class:{"button-enabled":t.enableAlbumFlag,"radio-button":!0},on:{click:function(e){t.enableAlbumFlag=!t.enableAlbumFlag,t.$emit("update-include-groups","album",t.enableAlbumFlag)}}},[t._v("\n            Album\n        ")]),n("button",{class:{"button-enabled":t.enableSingleFlag,"radio-button":!0},on:{click:function(e){t.enableSingleFlag=!t.enableSingleFlag,t.$emit("update-include-groups","single",t.enableSingleFlag)}}},[t._v("\n            Single\n        ")]),n("button",{class:{"button-enabled":t.enableAppearsOnFlag,"radio-button":!0},on:{click:function(e){t.enableAppearsOnFlag=!t.enableAppearsOnFlag,t.$emit("update-include-groups","appears_on",t.enableAppearsOnFlag)}}},[t._v("\n            Appears on\n        ")]),n("button",{class:{"button-enabled":t.enableCompilationFlag,"radio-button":!0},on:{click:function(e){t.enableCompilationFlag=!t.enableCompilationFlag,t.$emit("update-include-groups","compilation",t.enableCompilationFlag)}}},[t._v("\n            Compilation\n        ")])])])},wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",[t._v("Select album types to include in the search.")])])}],Ot={name:"AlbumTypesComponent",data:function(){return{enableAlbumFlag:!0,enableSingleFlag:!0,enableAppearsOnFlag:!0,enableCompilationFlag:!0}}},$t=Ot,jt=(n("9fa2"),Object(u["a"])($t,xt,wt,!1,null,"18718c49",null)),Et=jt.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album-results"},[n("h1",[t._v(" Albums for artist: "+t._s(t.artistId)+" ")]),n("ul",t._l(t.albums,function(e){return n("li",{key:e.id},[e.available_markets.includes("NO")?n("AlbumItem",{attrs:{album:e,songsInAlbum:t.songsInAlbum},on:{"show-songs-of-album":t.showSongsMethod}}):t._e()],1)}),0)])},Lt=[],Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album-item"},[n("ul",[n("li",{staticClass:"album-title",on:{click:function(e){return t.$emit("show-songs-of-album",t.album.href)}}},[t._v(" \n            "+t._s(t.album.name)+"\n        ")]),t.showSongs?n("div",{staticClass:"songs-in-album"},[n("ul",t._l(t.songsInAlbum,function(t){return n("li",{key:t.id},[n("SongInAlbum",{attrs:{songInAlbum:t}})],1)}),0)]):t._e(),t.showInfo?n("ul",{staticClass:"album-info-columns"},[n("li",[t._v("\n                Artist:\n            ")]),n("li",[t._v("\n                "+t._s(t.album.artists[0].name)+"\n            ")]),n("li",[t._v("\n                Album type:\n            ")]),n("li",[t._v("\n                "+t._s(t.album.album_type)+"\n            ")]),n("li",[t._v("\n                Tracks:\n            ")]),n("li",[t._v("\n                "+t._s(t.album.total_tracks)+"\n            ")]),n("li",[t._v("\n                Release date:\n            ")]),n("li",[t._v("\n                "+t._s(t.album.release_date)+"\n            ")])]):t._e()])])},Dt=[],Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song-item"},[n("p",[t._v(t._s(t.songInAlbum.name))])])},Ht=[],Nt={name:"SongInAlbum",props:["songInAlbum"]},Ut=Nt,Rt=(n("e4b8"),Object(u["a"])(Ut,Gt,Ht,!1,null,"49385960",null)),zt=Rt.exports,Kt={name:"AlbumItem",components:{SongInAlbum:zt},props:["album","songsInAlbum","songsInAlbum"],data:function(){return{showSongs:!0,showInfo:!1}}},Vt=Kt,Xt=(n("e092"),Object(u["a"])(Vt,Mt,Dt,!1,null,"c47820c0",null)),Qt=Xt.exports,Jt={name:"AlbumResults",props:["artistId","albums","accessToken"],components:{AlbumItem:Qt},data:function(){return{songsInAlbum:[]}},created:function(){this.songsInAlbum=[]},methods:{showSongsMethod:function(t){var e=this;console.log("clicked"),T.a.get(t,{headers:{Authorization:"Bearer "+this.accessToken},params:{}}).then(function(t){var n;(n=e.songsInAlbum).push.apply(n,Object(_["a"])(t.data.tracks.items)),console.log(e.songsInAlbum)}).catch(function(t){return console.log(t)})}}},Wt=Jt,qt=(n("6931"),Object(u["a"])(Wt,Bt,Lt,!1,null,"0180ec78",null)),Yt=qt.exports,Zt=n("f9b0"),te=n.n(Zt),ee={name:"chronologify",components:{ArtistIdComponent:Pt,AlbumTypesComponent:Et,AlbumResults:Yt},data:function(){return{artistId:"",accessToken:"BQD5_PjHNkSHbgsCEhP-tWIa7l3nLwU1L1O59b7Xb-2K1aSX8G2iVPwDu30nileIPhrg__vI4sDlDmSExFRp2DfGyfB5f10Se8C1zLiBLwsmJkGlXT0POKyPseKzVc2wByGltf9fsaTaHdDqXwbGz4B0ChM20d631PB6_Q",artistName:"",albums:[],songsInAlbum:[],albumsLoadedCounter:0,nextUrl:"",includeGroupsArr:["album","single","appears_on","compilation"],includeGroups:"",displayImage:"",imageNone:"",imageArtistId:te.a,searchDivFlag:!0,resultsDivFlag:!1}},methods:{switchViewFlags:function(){this.searchDivFlag=!this.searchDivFlag,this.resultsDivFlag=!this.searchDivFlag},updateInputArtistId:function(t){this.artistId=t},updateIncludeGroups:function(t,e){if(e)this.includeGroupsArr.push(t);else{var n=this.includeGroupsArr.indexOf(t);n>-1&&this.includeGroupsArr.splice(n,1)}this.includeGroups=this.includeGroupsArr.join()},toggleShowImage:function(t){this.displayImage=t},searchArtist:function(){var t=this;T.a.get("https://api.spotify.com/v1/artists/"+this.artistId+"/albums",{headers:{Authorization:"Bearer "+this.accessToken},params:{include_groups:this.includeGroups}}).then(function(e){console.log(e.data),t.nextUrl=e.data.next,t.albums=e.data.items,t.switchViewFlags()}).catch(function(t){return console.log(t)})},testFunc:function(t){var e=this;T.a.get(t,{headers:{Authorization:"Bearer "+this.accessToken},params:{}}).then(function(t){e.songsInAlbum=t.data.tracks.items,console.log(e.songsInAlbum)}).catch(function(t){return console.log(t)})}},created:function(){this.includeGroups=this.includeGroupsArr.join()}},ne=ee,ae=(n("4ba1"),Object(u["a"])(ne,kt,It,!1,null,null,null)),se=ae.exports;a["a"].use(h["a"]);var le=new h["a"]({routes:[{path:"/",name:"home",component:_t},{path:"/chronologify",name:"chronologify",component:se},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});a["a"].config.productionTip=!1,new a["a"]({router:le,render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,n){},6931:function(t,e,n){"use strict";var a=n("2b90"),s=n.n(a);s.a},7150:function(t,e,n){},"7d24":function(t,e,n){"use strict";var a=n("7150"),s=n.n(a);s.a},"82e5":function(t,e,n){"use strict";var a=n("8965"),s=n.n(a);s.a},8965:function(t,e,n){},"96c7":function(t,e,n){},"9e86":function(t,e,n){},"9fa2":function(t,e,n){"use strict";var a=n("2d04"),s=n.n(a);s.a},c68b:function(t,e,n){},cccb:function(t,e,n){"use strict";var a=n("d563"),s=n.n(a);s.a},d563:function(t,e,n){},e092:function(t,e,n){"use strict";var a=n("4ab8"),s=n.n(a);s.a},e11b:function(t,e,n){},e4b8:function(t,e,n){"use strict";var a=n("e11b"),s=n.n(a);s.a},f047:function(t,e,n){"use strict";var a=n("96c7"),s=n.n(a);s.a},f132:function(t,e,n){"use strict";var a=n("9e86"),s=n.n(a);s.a},f9b0:function(t,e,n){t.exports=n.p+"img/artistidhelp.ddd7a9e5.png"}});
//# sourceMappingURL=app.f11eb952.js.map