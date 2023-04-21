<template>
  <div class="container">
    <h2>Sign Up</h2>
    <form @submit.prevent="submitForm">
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
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import axiosInstance from "../api/axios-instance";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axiosInstance.post("/register", {
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
        });
        localStorage.setItem("token", response.data.token);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
