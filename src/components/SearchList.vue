<template>
    <section class="search-list">
        <CardSearch v-for="(item) in list" :key="item.id"
                    :doc="item"
                    :is-active="currentDoc === item.id"
                    @click="checkDoc(item)"/>

        <div class="search-list__alerts">
            <text-alert v-if="isLoading" :text="store.loadingText" type="info"/>
            <text-alert v-if="isError" :text="store.errorText" type="danger"/>
            <p v-if="isNotFound" class="search-list__text">{{store.emptyText}}</p>
        </div>
    </section>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from "vue";
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
        const isNotFound = computed(()=> !store.hasList && !store.isError && !store.isDocsLoading);
        const isLoading = computed(()=> !store.hasList && store.isDocsLoading);
        const isError = computed(()=> !store.hasList && store.isError);
        const currentDoc = ref<number|null>(null);

        watch(()=> props.list, () => {
            currentDoc.value = null;
        })
        
        function checkDoc(item:DocType) {
            if (item !== null){
                const isCurrent = item.id === currentDoc.value;
                currentDoc.value = isCurrent ? null : item.id;
                store.currentDoc = isCurrent ? null : item;
            }
        }

        return {
            store,
            currentDoc,
            isNotFound,
            isLoading,
            isError,
            checkDoc
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