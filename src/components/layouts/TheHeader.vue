<template>
    <header class="header">
        <img class="header__img" src="@/assets/images/logo.svg" alt="" width="118" height="39">
        <a class="header__login" href="/public">Username</a>
    </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'TheHeader',
});
</script>

<style scoped lang="scss">
.header{
    padding-top: 20px;
    padding-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: $media-md){
        padding-top: 41px;
        padding-bottom: 35px;
    }
    &__login{
        display: block;
        color: currentColor;
        font-size: 16px;
    }
}
</style>