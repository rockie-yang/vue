<template>
    <span class="counter" @click="count += 1">{{ count }}</span>
</template>

<script setup>
import {ref} from "vue";

const count = ref(0);
</script>

<style>
.counter {
    background-color: #ccc;
    display: inline-block;
    border-radius: 10px;
    padding: 20px 50px;
    font-size: 30px;
    margin: 10px
}
</style>