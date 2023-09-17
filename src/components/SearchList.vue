<template>
    <section class="search-list">
        <CardSearch v-for="(item,i) in list" :key="item.id"
                    :doc="item"
                    :is-active="activeDoc === i"
                    @onClick="checkDock(i, item)"/>

        <div class="search-list__alerts">
            <text-alert v-if="isLoading" :text="store.loadingText" alertType="info"/>
            <text-alert v-if="isError" :text="store.errorText" alertType="danger"/>
            <p v-if="isNotFound" class="search-list__text">{{store.emptyText}}</p>
        </div>
    </section>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from 'vue';
import CardSearch from "@/components/cards/CardSearch.vue";
import TextAlert from "@/components/module/TextAlert.vue";
import {useDocsStore} from "@/store";
import {DocType} from "@/tools/types";

export default defineComponent({
    name: 'SearchList',
    components: {TextAlert, CardSearch},
    props: {
        list: Array
    },
    setup(props){
        const store = useDocsStore();
        const isNotFound = computed(()=> !store.list && !store.isError && !store.isDocsLoading);
        const isLoading = computed(()=> !store.list && store.isDocsLoading);
        const isError = computed(()=> !store.list && store.isError);
        const activeDoc = ref<number|null>(null);

        watch(()=> props.list, () => {
            activeDoc.value = null;
        })
        function checkDock(i:number, item:DocType) {
            const isCurrent = i === activeDoc.value
            activeDoc.value = isCurrent ? null : i;
            store.activeDoc = isCurrent ? null : item;
        }
        return {
            store, activeDoc,isNotFound,isLoading, isError, checkDock
        };
    }
});
</script>

<style scoped lang="scss">
.search-list{
    padding-top: 18px;
    @media (max-width: $media-md-max){
        max-height: 188px;
        overflow-y: auto;
        padding: 15px 10px 15px;
        margin: 10px -10px 30px;
    }
}
</style>