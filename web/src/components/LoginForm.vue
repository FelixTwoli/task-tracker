<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
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
          name="password"
          class="form-control"
          v-model="password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p>
      Don't have an account?
      <router-link to="/signup" class="btn btn-link float-left">
        Sign Up
      </router-link>
    </p>
  </div>
</template>

<script>
import axiosInstance from "../api/axios-instance";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      console.log({ email: this.email, password: this.password });

      try {
        const response = await axiosInstance.post("/auth/login", {
          email: this.email,
          password: this.password,
        });

        console.log(response.data);

        localStorage.setItem("session", JSON.stringify(response.data));
        this.$router.push("/tasks");
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};
</script>
