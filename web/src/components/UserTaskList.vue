<template>
    <div>
      <h2>User Tasks</h2>
      <ul>
        <li v-for="userTask in userTasks" :key="userTask.id">
          {{ userTask.title }}
        </li>
      </ul>
    </div>
  </template>

  <script>// @ts-nocheck

  import axios from "axios";

  export default {
    data() {
      return {
        userTasks: [],
      };
    },

    mounted() {
      axios.get("/api/user_tasks").then((response) => {
        this.userTasks = response.data;
      });
    },
  };
  </script>
