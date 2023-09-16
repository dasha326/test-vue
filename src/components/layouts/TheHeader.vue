<template>
    <header class="header">
        <img class="header__img" src="@/assets/logo.svg" alt="" width="118" height="39">
        <div class="header__login">
            <a href="/public">Username</a>
        </div>
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
    padding-top: 41px;
    padding-bottom: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>