<template>
    <section class="search-list">
        <h2 class="h6 m-0">Результаты</h2>
        <CardSearch title="Документ 1" text="12 MB"/>
        <CardSearch title="Документ 2" text="22 MB"/>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CardSearch from "@/components/cards/CardSearch.vue";
export default defineComponent({
    name: 'SearchList',
    components: {CardSearch}
});
</script>

<style scoped lang="scss">
    .search-list{
        margin-top: 29px;
    }
</style>