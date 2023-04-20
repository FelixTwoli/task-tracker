<template>
    <div class="container">
      <h1>Task Management System</h1>
      <div class="row">
        <div class="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task in tasks" :key="task.id">
                <td>{{ task.id }}</td>
                <td>{{ task.name }}</td>
                <td>{{ task.description }}</td>
                <td>{{ formatDate(task.due_date) }}</td>
                <td>{{ task.status.name }}</td>
                <td>
                  <button class="btn btn-sm btn-primary" @click="editTask(task)">Edit</button>
                  <button class="btn btn-sm btn-danger" @click="deleteTask(task)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

  <script>// @ts-nocheck

  import axios from 'axios';

  export default {
    data() {
      return {
        tasks: [],
      };
    },
    mounted() {
      this.fetchTasks();
    },
    methods: {
      fetchTasks() {
        axios.get('/api/tasks')
          .then(response => {
            this.tasks = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },
      formatDate(date = new Date() ) {
        return new Date(date).toLocaleDateString();
      },
      editTask(task) {
        // Navigate to the edit task page
        this.$router.push({ name: 'edit-task', params: { id: task.id } });
      },
      deleteTask(task) {
        if (confirm(`Are you sure you want to delete the task "${task.name}"?`)) {
          axios.delete(`/api/tasks/${task.id}`)
            .then(response => {
              this.fetchTasks();
            })
            .catch(error => {
              console.log(error);
            });
        }
      },
    },
  };
  </script>
