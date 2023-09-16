<template>
    <article class="card-search">
        <div class="card-search__picture">

        </div>
        <div class="card-search__content">
            <h3 class="card-search__title m-0">{{title}}</h3>
            <p class="card-search__text">{{text}}</p>
        </div>
    </article>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'CardSearch',
    props: {
        title: String,
        text: String
    }
});
</script>

<style scoped lang="scss">
    .card-search{
        display: grid;
        grid-template-columns: 70px 1fr;
        margin-top: 18px;
        border-radius: $border-radius;//В макете на одной вкладке есть радиус, на другой вообще нет. Сделала попервой
        background-color: #fff;
        box-shadow: $primary-box-shadow;
        cursor: pointer;
        &__content{
            border-left: $primary-border;
            padding: 15px;
        }
        &__title,
        &__text{
            font-size: 14px;
            line-height: 17.07px;
        }

        &__text{
            color: $grey-color;
            margin: 6px 0 0;
        }
    }
</style>