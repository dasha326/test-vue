<template>
    <section class="search-input">
        <form-input label="Поиск документа" placeholder="Введите ID документа" @input="onSearch($event.target.value)"/>
    </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import FormInput from "@/components/module/form/FormInput.vue";
import {useDocsStore} from "@/store";
import {debounce} from "@/tools/utils";

export default defineComponent({
    name: 'SearchInput',
    components: {FormInput},
    setup(){
        const store = useDocsStore();

        function search(value:string) {
            store.list = null;
            store.isError = false;
            store.isDocsLoading = true;
            store.currentDoc = null;
            store.search(value)
        }
        const onSearch = debounce(search, 500);

        return {
            onSearch
        }
    }
});
</script>

<style scoped lang="scss">
input{
    background-color: $info-color;
}
</style>