<template>
    <label class="form-group">
        <span class="form-label" :class="{'visually-hidden': labelHidden }" >{{label}}</span>
        <input
            ref="currentInput"
            class="form-input"
            :class="inputModClass"
            :type="type"
            :placeholder="placeholder"
            v-bind="$attrs"
            :value="modelValue"
            :required="isRequiredInvalid"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </label>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";

export default defineComponent({
    name: "FormInput",
    props: {
        label: {
            type: String,
            require: true
        },
        modelValue: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            require: true,
            default: 'text'
        },
        placeholder: String,
        labelHidden: Boolean,
        isRequired: Boolean,
    },
    expose: ['validateInput'],
    emits: ['update:modelValue'],
    setup(props, {slots}){
        const inputValue = computed(() => props.modelValue);
        const errorText = ref('');
        const currentInput = ref<HTMLInputElement | null>(null);
        const isRequiredInvalid = ref<boolean>(false);

        return{
            inputModClass: {
                '--prefix': slots.prefix,
                '--postfix': slots.postfix
            },
            errorText, currentInput, isRequiredInvalid,
        }
    }
})
</script>

<style scoped lang="scss">
    .form{
        &-group{
            display: block;
            &:not(:first-child){
                margin-top: 20px;
            }
        }
        &-label{
            font-weight: $weight-semibold;
        }
        &-input{
            background-color: #fff;
            border: 1.5px solid $primary-border-color; //в макете 1.5px, но не совсем разумно ставить такое значение, могу возникнуть непредвиденые проблемы.
            border-radius: $border-radius-sm;
            min-height: 49px;
            width: 100%;
            margin-top: 14px;
            padding: 16px 24px;
            font-size: 14px;
            &::placeholder{
                color: $grey-color;
            }

        }
    }
</style>