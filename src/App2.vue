<script setup>
  import { ref } from 'vue';
   
  //data
  const name = ref('Parth Makwana');
  const status = ref(true);
  const items = ref(['parth','mohan','varun'])

  //methods
  const toggleStatus = ()=>{
    status.value = !status.value;
  }

</script>

<template>
  <p>{{ name }}</p>
  <p v-if="status">User is active</p>
  <p v-else>User is not active</p>
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
  <!-- <p v-for="item in items">{{ item }}</p> -->
   <a :href="link">Click for google</a> <!-- we can use v-bind as : this way too.--> 
    <br><button @click="toggleStatus">Toggle Status</button>
</template>
