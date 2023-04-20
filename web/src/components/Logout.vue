<template>
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button @click="logout">Logout</button>
    </div>
  </template>

  <script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem("token");
        // @ts-ignore
        this.$router.push("/login");
      }
    }
  };
  </script>
