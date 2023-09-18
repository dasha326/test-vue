<template>
    <section class="search-input">
        <form-input label="Поиск документа" placeholder="Введите ID документа" @input="search($event.target.value)"/>
    </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import FormInput from "@/components/module/form/FormInput.vue";
import {useDocsStore} from "@/store";

export default defineComponent({
    name: 'SearchInput',
    components: {FormInput},
    setup(){
        const store = useDocsStore();

        let timeout:ReturnType<typeof setTimeout>;
        function search(value:string) {
            store.list = null;
            store.isError = false;
            store.isDocsLoading = true;
            store.currentDoc = null;
            clearTimeout(timeout);
            timeout = setTimeout(() => store.search(value), 1000);
        }
        return{
            search
        }
    }
});
</script>

<style scoped lang="scss">
input{
    background-color: $info-color;
}
</style>