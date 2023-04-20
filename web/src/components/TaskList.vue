<template>
    <div>
      <h2>Tasks</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          {{ task.title }}
        </li>
      </ul>
    </div>
  </template>

  <script>// @ts-nocheck

  import axios from "axios";

  export default {
    data() {
      return {
        tasks: [],
      };
    },

    mounted() {
      axios.get("/api/tasks").then((response) => {
        this.tasks = response.data;
      });
    },
  };
  </script>
