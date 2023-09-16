<template>
    <main class="main">
        <div class="main__sidebar">
            <TheSearch/>
            <SearchList/>
        </div>
        <div class="main__content">
            <CardDoc title="Документ 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        </div>
    </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TheSearch from "@/components/TheSearch.vue";
import SearchList from "@/components/SearchList.vue";
import CardDoc from "@/components/cards/CardDoc.vue";

export default defineComponent({
    name: 'TheMain',
    components: {SearchList, TheSearch, CardDoc},

});
</script>

<style scoped lang="scss">
    .main{
        display: grid;
        grid-template-columns: 282px 2fr;
        box-shadow: $primary-box-shadow;
        border-radius: $border-radius;
        background-color: $secondary-bg;
        overflow: hidden;
        min-height: 575px;
        &__sidebar{
            padding: 27px 20px 27px 22px;
        }
        &__content{
            padding: 30px;
            background-color: #ffffff;
            border-left: $primary-border;
        }
    }
</style>