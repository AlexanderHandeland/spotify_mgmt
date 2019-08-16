<template>
    <header class="footer"> 

        <div id="nav">
            <a>Logged in as <span style="font-weight: bold">{{ this.$parent.$data.userId}} </span></a>
        </div>

    </header>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    .footer {
        color: white;
        overflow: hidden;
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
        border-bottom: 2px solid var(--playlist-hover-gray);
    }

    .footer a {
        float: right;
        display: block;
        color: white;
        text-align: right;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 10px;
        
        /* font-size: 10px; */
        /* letter-spacing: 2px; */
        text-transform: uppercase;
    }
    
    .header a:hover {
        background: var(--playlist-hover-gray);
    }
</style>