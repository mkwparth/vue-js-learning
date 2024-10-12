<script setup>
import { ref } from 'vue';

   const tasks = ref([]);     
   const newTask = ref('BC '); 
   const addTask = ()=>{
    if(newTask.value.trim() !== ''){
        tasks.value.push(newTask.value);
    }
    newTask.value = '';
   } 
</script>

<template>
    Form component
    <form @submit.prevent="addTask">
        <label for="newTask">Add task</label>
        <input type="text" id="newText" name="newTask" v-model="newTask"/>

        <button type="submit">Submit</button>
        <p v-for="task in tasks" :key="task">{{task.value}}</p>
        
    </form>

</template>