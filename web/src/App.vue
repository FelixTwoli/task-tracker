<template>
    <div id="app">
      <nav>
        <ul>
          <li><router-link to="/users">Users</router-link></li>
          <li><router-link to="/tasks">Tasks</router-link></li>
          <li><router-link to="/status">Status</router-link></li>
          <li><router-link to="/user-tasks">User Tasks</router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </template>

  <script>
  export default {
    name: "App",
  };
  </script>

  <style>
  nav {
    background-color: #333;
    color: white;
  }

  nav ul {
    display: flex;
    list-style-type: none;
  }

  nav li {
    margin-right: 1em;
  }
  

  nav a {
    color: white;
    text-decoration: none;
  }
  </style>
