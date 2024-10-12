<script setup>
import { reactive } from 'vue';


const state = reactive({count:0})

</script>

<template>
  <p>Hello This Parth Makwana</p>
  <button @click="state.count++">
    Increase No
  </button>
  
  <p>
    {{ state.count }}
  </p>

</template>

