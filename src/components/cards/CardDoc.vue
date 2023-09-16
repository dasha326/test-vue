<template>
    <article class="card-doc">
        <div class="card-doc__picture">

        </div>
        <div class="card-doc__content">
            <h2 class="card-doc__title h6">{{title}}</h2>
            <div class="card-doc__buttons">

            </div>
            <div class="card-doc__description">
                <h3 class="card-doc__subtitle h6">Описание: </h3>
                <p class="card-doc__text">{{text}}</p>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'CardDoc',
    props: {
        title: String,
        text: String
    }
});
</script>

<style scoped lang="scss">

</style>