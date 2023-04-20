<template>
    <div>
      <h2>Users</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.email_address }}
        </li>
      </ul>
    </div>
  </template>

  <script>// @ts-nocheck

  import axios from "axios";

  export default {
    data() {
      return {
        users: [],
      };
    },

    mounted() {
      axios.get("/api/users").then((response) => {
        this.users = response.data;
      });
    },
  };
  </script>
