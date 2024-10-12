<script setup>
  import { ref } from 'vue';
   
  //data
  const name = ref('Parth Makwana');
  const status = ref(true);
  const task = ref(['Task #1','Task #2','Task #3','Task #4'])
  const newTask = ref('')

  //methods
  const toggleStatus = ()=>{
    status.value = !status.value;
  }

  const addTask = ()=>{
    if(newTask.value.trim() !== ''){
      task.value.push(newTask.value)
      newTask.value = '';
    }
  }

  const deleteTask = (index)=>{
    task.value.splice(index,1)
  }

</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status">User is 
    <span id="activeUser">
      active
    </span>
  </p>
  <p v-else>User is <span id="inactiveUser">
      inactive
    </span></p>
  <ul>
    <li v-if="task.length === 0">No tasks yet, start adding them</li>
    <li v-else v-for="(item, index) in task" :key="index">
      {{ item }}
      <button @click="deleteTask(index)" id="deleteTask">x</button>
    </li>
  </ul>
  <!-- <p v-for="item in items">{{ item }}</p> -->
   <a :href="link">Click for google</a> <!-- we can use v-bind as : this way too.--> 
    <br><button @click="toggleStatus">Toggle Status</button>

    <!-- form -->
    <form @submit.prevent="addTask">
      <label for="newTask">Add Task</label>
      <input type="text" id="newTask" name="newTask" v-model="newTask" />

      <button type="submit">Add Task</button>
    </form>
</template>

<style scoped>
#activeUser{
  background-color: #4ff74f;
  color: rgb(25, 16, 126);
  font-size: 23px;
}
#inactiveUser{
  background-color: #e21710;
  color: aliceblue;
  font-size: 23px;
}
#deleteTask{
  margin-left: 10px;
}
</style>