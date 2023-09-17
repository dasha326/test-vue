<template>
    <button class="card-search" :class="{'card-search--active': isActive}" @click="$emit('onClick')">
        <span class="card-search__picture">
            <img class="card-search__img" src="@/assets/images/no-image.svg" alt="" width="31" >
        </span>
        <span class="card-search__content">
            <span class="h6 card-search__title m-0">{{doc.name}}</span>
            <span class="card-search__text">12 МБ</span> <!--Взято из макета, во входящих данныйх нет информации о весе файла-->
        </span>
    </button>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue';
import {DocType} from "@/tools/types";

export default defineComponent({
    name: 'CardSearch',
    props: {
        doc: {
            type: Object as PropType<DocType>,
            required: true
        },
        isActive: Boolean
    },
    emits: ['onClick'],
});
</script>

<style scoped lang="scss">
    .card-search{
        display: grid;
        grid-template-columns: 70px 1fr;
        align-items: stretch;
        border-radius: $border-radius;//В макете на одной вкладке есть радиус, на другой вообще нет. Сделала по первой
        background-color: #fff;
        box-shadow: $primary-box-shadow;
        text-align: left;
        border: 0;
        padding: 0;
        width: 100%;
        overflow: hidden;
        cursor: pointer;
        &:not(:first-child){
            margin-top: 15px;
            @media (min-width: $media-md){
                margin-top: 18px;
            }
        }
        &__picture{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            border-radius: $border-radius 0 0 $border-radius;
        }
        &__img{
            max-width: 100%;
        }
        &__content{
            border-left: $primary-border;
            padding: 10px;
            .card-search--active & {
                background-color: $primary-color;
                color: #F8F9FA;
            }
            @media (min-width: $media-md){
                padding: 15px;
            }
        }
        &__title,
        &__text{
            display: block;
        }

        &__text{
            color: $grey-color;
            margin: 6px 0 0;
            .card-search--active & {
                color: #DEE2E6;
            }
        }
    }
</style>