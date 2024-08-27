<script>
  export default{
    data(){
      return{
        name:'Parth Makwana',
        status:false,
        items:['parth','Mohan','varun'],
        link:"https://google.com"
      }
    },
    methods: {
      toggleStatus(){
        this.status = !this.status
      }
    },
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
