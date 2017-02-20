<template>
    <div v-if="open" class="modal is-fullscreen">
        <div class="background"></div>
        <slot></slot>
    </div>
</template>

<script>
    // Component definition
    export default {
        name: 'Modal',

        props: {
            open: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>