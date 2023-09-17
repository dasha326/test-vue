<template>
    <div class="alert" :class="`alert--${alertType}`">
        {{text}}
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'AlertDialog',
    props: {
        alertType: String,
        text: String
    }
});
</script>

<style scoped lang="scss">
    .alert{
        padding: 15px 10px;
        border-radius: $border-radius;
        background-color: #fff;
        border: $primary-border;
        box-shadow: $primary-box-shadow;
        &--info{
            color: $info-color;
            border-color: $info-color;
        }
        &--danger{
            color: $danger-color;
            border-color: $danger-color;
        }
    }
</style>