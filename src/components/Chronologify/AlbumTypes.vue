<template>
    <div>
        <h1>Album types</h1>

        <div class="album-types-div">
            <p>
                <a>Select album types to include in the search.</a>
            </p>

            <button
                v-bind:class="{ 'button-enabled': enableAlbumFlag, 'radio-button': true }"
                @click="enableAlbumFlag = !enableAlbumFlag; $emit('update-include-groups', 'album', enableAlbumFlag);">
                Album
            </button>
            
            <button
                v-bind:class="{ 'button-enabled': enableSingleFlag, 'radio-button': true }"
                @click="enableSingleFlag = !enableSingleFlag; $emit('update-include-groups', 'single', enableSingleFlag);">
                Single
            </button>

            <button
                v-bind:class="{ 'button-enabled': enableAppearsOnFlag, 'radio-button': true }"
                @click="enableAppearsOnFlag = !enableAppearsOnFlag; $emit('update-include-groups', 'appears_on', enableAppearsOnFlag);">
                Appears on
            </button>

            <button
                v-bind:class="{ 'button-enabled': enableCompilationFlag, 'radio-button': true }"
                @click="enableCompilationFlag = !enableCompilationFlag; $emit('update-include-groups', 'compilation', enableCompilationFlag);">
                Compilation
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AlbumTypesComponent',
    data() {
        return {
            enableAlbumFlag: true,
            enableSingleFlag: true,
            enableAppearsOnFlag: true,
            enableCompilationFlag: true
        }
    }
}
</script>

<style scoped>
    h1 {
        padding-bottom: 10px;
    }

    .album-types-div {
        /* padding: top right bottom left */
        padding: 10px 0px 10px 10px;
    }

    /* enable buttons */
    .radio-button {
        /* background-color: var(--spotify-dark-green); */
        background-color: var(--playlist-backdrop-gray);
        border: none;
        color: white;
        padding: 10px;
        margin: 10px;
        text-align: center;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        user-select: none;
        /* display: inline-block; */
        cursor: pointer;
    }

    /* disabled-buttons */
    .button-enabled {
        background-color: var(--spotify-dark-green);
        /* background-color: var(--playlist-backdrop-gray); */
        /* cursor: default;
        pointer-events: none; */
    }

    .radio-button:focus {
        outline: none;
    }
</style>
