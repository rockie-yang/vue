<template>
    <h1>Vue Template</h1>
    <HelloWorld :prefix="prefix"/>
    <Counter></Counter>
</template>

<script setup>
import {ref} from "vue";
import Counter from "./components/Counter.vapor.vue";
import HelloWorld from "./components/HelloWorld.vue";

const prefix = ref("received");
</script>