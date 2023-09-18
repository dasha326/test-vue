<template>
    <div class="container">
        <TheHeader/>
        <TheMain/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheMain from "@/components/layouts/TheMain.vue";

export default defineComponent({
  name: 'App',
  components: {
      TheHeader, TheMain
  }
});
</script>

<style>
</style>
