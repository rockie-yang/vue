<script setup>
import {ref} from "vue";
import {msg} from "../composables/store.js";

const props = defineProps({
    prefix: {type: String, default: "received"},
});
</script>

<template>
    <h1>{{ prefix }} {{ msg }}</h1>
</template>

