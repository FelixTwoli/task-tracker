<template>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2>{{ formTitle }}</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              v-model="task.name"
              required
            >
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <textarea
              class="form-control"
              id="description"
              name="description"
              v-model="task.description"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <label for="status">Status:</label>
            <select
              class="form-control"
              id="status"
              name="status"
              v-model="task.status_id"
              required
            >
              <option v-for="status in statuses" :value="status.id">{{ status.name }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="due_date">Due Date:</label>
            <input
              type="date"
              class="form-control"
              id="due_date"
              name="due_date"
              v-model="task.due_date"
              required
            >
          </div>
          <button type="submit" class="btn btn-primary">{{ formSubmitButton }}</button>
          <router-link to="/" class="btn btn-secondary">Cancel</router-link>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "CreateTask",
    data() {
      return {
        task: {
          name: "",
          description: "",
          status_id: "",
          due_date: "",
        },
        statuses: [],
      };
    },
    created() {
      this.fetchStatuses();
      if (this.$route.params.id) {
        this.fetchTask(this.$route.params.id);
      }
    },
    computed: {
      formTitle() {
        return this.$route.params.id ? "Edit Task" : "Create Task";
      },
      formSubmitButton() {
        return this.$route.params.id ? "Update Task" : "Create Task";
      },
    },
    methods: {
      fetchStatuses() {
        axios
          .get("/api/statuses")
          .then((response) => (this.statuses = response.data))
          .catch((error) => console.log(error));
      },
      fetchTask(id) {
        axios
          .get(`/api/tasks/${id}`)
          .then((response) => (this.task = response.data))
          .catch((error) => console.log(error));
      },
      handleSubmit() {
        if (this.$route.params.id) {
          this.updateTask();
        } else {
          this.createTask();
        }
      },
      createTask() {
        axios
          .post("/api/tasks", this.task)
          .then(() => {
            this.$router.push("/");
          })
          .catch((error) => console.log(error));
      },
      updateTask() {
        axios
          .put(`/api/tasks/${this.$route.params.id}`, this.task)
          .then(() => {
            this.$router.push("/");
          })
          .catch((error) => console.log(error));
      },
    },
  };
  </script>