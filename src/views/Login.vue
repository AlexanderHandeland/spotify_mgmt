<template>
    <div class="main-div">
        <div id="login">
            <h1>Hello my fine man</h1>
            <p>Log in with your Spotify account</p>
            <a class="a-button" href="https://spotify-mgmt-backend.herokuapp.com/login">Login v2</a>
            <!-- <GreenBtn id="login-button" v-on:button-click="login">Login</GreenBtn> -->
        </div>
    </div>
</template>

<script>
import GreenBtn from '@/components/Mics/GreenBtn.vue'

import axios from 'axios'

export default {
    name: 'Login',
    components: {
        GreenBtn
    },
    data() {
        return {
            someVariable: ''
        }
    },
    methods: {
        login() {
            console.log('clicked login');
            this.$emit("authenticated", true);

            this.$router.replace( { name: "home" });
            
            
            // window.open("https://spotify-mgmt-backend.herokuapp.com/login", "_blank"); 

            axios.get('https://spotify-mgmt-backend.herokuapp.com/login')
            .then(res => {
                console.log(res.data);
                // store to someVariable
                // this.$emit(token);
                // this.$router.replace( { name: "home" });
            })
            .catch(err => console.log(err));
        }
    }
}
</script>

<style scoped>
    .a-button {
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;

        text-decoration: none;
        color: black;
    }

    .main-div {
        /* text-align: center; */
        color: white;
        margin: 0;
        padding: 0;
        background-size: cover;
        font-family: sans-serif;
    }

    #login {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 350px;
        height: 420px;
        padding: 80px 40px;
        box-sizing: border-box;
        background: rgba(0,0,0,.5);
        /* text-align: center;
        display: inline-block;
        color: white;
        height: 200px;
        margin: 50%;
        margin: 10%;
        padding: 10px;
        width: 20%;
        border-radius: 10px;
        background: var(--playlist-backdrop-gray); */
    }

    #login-button {
        margin: 40px 0px;
    }
</style>
