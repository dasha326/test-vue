<template>
    <main class="main">
        <div class="main__sidebar">
            <SearchInput/>
            <div class="main__list">
                <h2 class="h6 m-0">Результаты</h2>
                <SearchList :list="store.list"/>
            </div>
        </div>
        <div class="main__content">
            <CardDoc v-if="store.activeDoc" :doc="store.activeDoc"/>
        </div>
    </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import SearchInput from "@/components/SearchInput.vue";
import SearchList from "@/components/SearchList.vue";
import CardDoc from "@/components/cards/CardDoc.vue";
import {useDocsStore} from "@/store";

export default defineComponent({
    name: 'TheMain',
    components: {SearchList, SearchInput, CardDoc},
    setup(){
        const store = useDocsStore();

        return {
            store
        };
    }
});
</script>

<style scoped lang="scss">
    .main{
        display: grid;
        grid-template-columns: 1fr;
        box-shadow: $primary-box-shadow;
        border-radius: $border-radius;
        background-color: $secondary-bg;
        overflow: hidden;
        min-height: 575px;
        @media (min-width: $media-md) {
            grid-template-columns: 282px 2fr;
        }
        @media (max-width: $media-md-max){
            padding: 25px 20px;
        }
        &__sidebar{
            @media (min-width: $media-md){
                padding: 27px 20px 27px 22px;
            }
        }
        &__content{
            background-color: #ffffff;
            @media (min-width: $media-md){
                padding: 30px;
                border-left: $primary-border;
            }
        }
        &__list{
            margin-top: 29px;
        }
    }
</style>