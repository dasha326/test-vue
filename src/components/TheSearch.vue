<template>
    <section>
        <form-input label="Поиск документа" placeholder="Введите ID документа"/>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import FormInput from "@/components/module/form/FormInput.vue";

export default defineComponent({
    name: 'TheSearch',
    components: {FormInput},

});
</script>

<style scoped lang="scss">
input{
    background-color: $info-color;
}
</style>