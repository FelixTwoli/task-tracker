<template>
  <div class="container">
    <h2>Sign Up</h2>
    <form @submit.prevent="submitForm">
      <!-- Full Name input field -->
      <div class="form-group">
        <label for="name">Full Name</label>
        <input
          type="text"
          id="name"
          class="form-control"
          v-model="name"
          required
        />
      </div>

      <!-- Email input field -->
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="email"
          required
        />
      </div>

      <!-- Password input field -->
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          v-model="password"
          required
        />
      </div>

      <!-- Confirm Password input field -->
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          class="form-control"
          v-model="confirmPassword"
          required
        />
      </div>

      <!-- Sign Up button -->
      <div class="d-flex justify-content-center p-2">
        <button type="submit" class="btn btn-primary d-flex">Sign Up</button>
      </div>
    </form>

    <!-- Login button -->
    <p>
      Already have an account?
      <router-link to="/login" class="btn btn-link float-right d-flex">
        Login
      </router-link>
    </p>
  </div>
</template>

<script>
import axiosInstance from "../api/axios-instance";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axiosInstance.post("/auth/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
        });

        console.log(response.data);

        this.$router.push("/tasks");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
