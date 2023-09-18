<template>
    <section class="search-input">
        <form-input label="Поиск документа" placeholder="Введите ID документа" v-model="searchValue"/>
    </section>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from "vue";
import FormInput from "@/components/module/form/FormInput.vue";
import {useDocsStore} from "@/store";

export default defineComponent({
    name: 'SearchInput',
    components: {FormInput},
    setup(){
        const store = useDocsStore();
        const searchValue = ref('');
        let timeout:ReturnType<typeof setTimeout>;

        watch(searchValue, (newValue:string) => {
            store.list = null;
            store.isError = false;
            store.isDocsLoading = true;
            store.currentDoc = null;
            clearTimeout(timeout);
            timeout = setTimeout(() => store.search(newValue), 1000);
        })

        return{
            searchValue
        }
    }
});
</script>

<style scoped lang="scss">
input{
    background-color: $info-color;
}
</style>