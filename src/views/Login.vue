<template>
    <div class="main-div">
        <div id="login">
            <h1>Login</h1>
            <GreenBtn id="login-button" v-on:button-click="login">Login</GreenBtn>
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

    #login {
        text-align: center;
        vertical-align: middle;
        color: white;
        height: 200px;
        /* margin: 50%; */
        margin: 10%;
    }

    #login-button {
        margin: 50px;
    }
</style>
