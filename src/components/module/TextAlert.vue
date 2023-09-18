<template>
    <div class="alert" :class="`alert--${type}`">
        <div class="alert__picture" v-if="$slots.icon">
            <slot name="icon"></slot>
        </div>
        <p class="alert__text">{{text}}</p>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: 'TextAlert',
    props: {
        type: String,
        text: String
    }
});
</script>

<style scoped lang="scss">
    .alert{
        display: flex;
        align-items: center;
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
        &__picture{
            margin-right: 10px;
            width: 40px;
        }
        &__text{
            margin: 0;
            &:not(:first-child){
                width: calc(100% - 40px);
            }
        }
    }
</style>