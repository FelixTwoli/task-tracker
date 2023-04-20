<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label>Email address:</label>
          <input type="email" v-model="email" required>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>

  <script>
  import axios from "axios";

  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },

    methods: {
      login() {
        axios
          .post("/api/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            // @ts-ignore
            this.$router.push("/");
          });
      },
    },
  };
  </script>
