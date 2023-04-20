<template>
    <div>
      <h2>Statuses</h2>
      <ul>
        <li v-for="status in statuses" :key="status.id">
          {{ status.name }}
        </li>
      </ul>
    </div>
  </template>

  <script>// @ts-nocheck

  import axios from "axios";

  export default {
    data() {
      return {
        statuses: [],
      };
    },

    mounted() {
      axios.get("/api/status").then((response) => {
        this.statuses = response.data;
      });
    },
  };
  </script>
