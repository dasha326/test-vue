<template>
    <article class="card-doc">
        <div class="card-doc__content">
            <h2 class="card-doc__title h6 m-0">{{doc.name}}</h2>
            <div class="card-doc__buttons">
                <button class="card-doc__button card-doc__button--primary" @click="downloadFile">Скачать</button>
                <button class="card-doc__button card-doc__button--danger" :disabled="!doc.image" >Удалить</button>
            </div>
            <div class="card-doc__description">
                <h3 class="card-doc__subtitle h6">Описание: </h3>
                <p class="card-doc__text">{{doc.description}}</p>
            </div>
        </div>
        <div class="card-doc__picture">
            <img v-if="doc.image" class="card-doc__image" :src="doc.image" :alt="doc.name">
            <img v-else class="card-doc__no-image" src="@/assets/images/no-image.svg" alt="Изображение отсутствует" width="134">
        </div>
    </article>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: 'CardDoc',
    props: {
        doc: Object,
        downloadLink: String
    },
    setup(props) {
        function downloadFile() {
            const blob = new Blob([`${props.doc?.name}\n${props.doc?.description}`], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${props.doc?.name}.txt`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        return{
            downloadFile
        }
    }
});
</script>

<style scoped lang="scss">
    .card-doc{
        display: flex;
        flex-wrap: wrap;
        &__picture{
            display: flex;
            align-items: center;
            justify-content: center;
            border: $primary-border;
            min-width: 100%;
            max-width: 100%;
            aspect-ratio: 212/143;
            @media (min-width: $media-lg) {
                min-width: 45%;
                max-width: 45%;
            }
            @media (min-width: $media-xl) {
                min-width: 40%;
                max-width: 40%;
            }
        }
        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        &__content{
            margin-bottom: 30px;
            @media (min-width: $media-lg) {
                min-width: 55%;
                max-width: 55%;
                padding-left: 30px;
                order: 1;
            }
            @media (min-width: $media-xl) {
                min-width: 60%;
                max-width: 60%;
                padding-left: 61px;
            }
        }
        &__buttons{
            display: flex;
            column-gap: 10px;
            margin-top: 14px;
        }
        &__button{
            display: block;
            text-decoration: none;
            border-radius: $border-radius-sm;
            padding: 7px 10px;
            min-width: 114px;
            background-color: transparent;
            text-align: center;
            &--primary{
                border: 1px solid $primary-color;
                color: $primary-color;
                &:hover{
                    background-color: $primary-color;
                    color: #ffffff;
                }
            }
            &--danger{
                border: 1px solid $danger-color;
                color: $danger-color;
                &:hover{
                    background-color: $danger-color;
                    color: #ffffff;
                }
            }
        }
        &__description{
            margin-top: 47px;
        }
        &__text{
            color: $grey-color;
        }

    }
</style>