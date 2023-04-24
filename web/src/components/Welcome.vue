<template>
  <div class="welcome-page">
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Task Management</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signup">Sign Up</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container mt-5">
      <h1>Welcome to Task Tracker</h1>
      <p>
        This is a task management application that helps you manage your daily
        tasks easily.
      </p>
    </div>

    <!-- Footer -->
    <footer class="bg-light p-3 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: contact@taskmanagement.com</p>
            <p>Phone: (254)0733636625</p>
          </div>
          <div class="col-md-4">
            <h5>Follow Us</h5>
            <ul class="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Address</h5>
            <p>Nairobi</p>
            <p>Kenya</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axiosInstance from "@/api/axios-instance";

export default {
  name: "Task list",
  methods: {
    async fetchTasks() {
      try {
        const response = await axiosInstance.get("/tasks");
        this.tasks = response.data;
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  beforeMount() {
    this.fetchTasks();
  },
};
</script>

<style scoped>
.welcome-page {
  min-height: 100vh;
  width: 100%;
}
</style>
