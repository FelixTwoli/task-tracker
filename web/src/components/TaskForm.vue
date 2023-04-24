<template>
  <div class="container">
  <h1>{{ formTitle }}</h1>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="title">Title:</label>
      <input class="form-control" type="text" id="title" v-model="task.title" required />
    </div>
    <div class="form-group">
      <label for="description">Description:</label>
      <textarea class="form-control" id="description" v-model="task.description"></textarea>
    </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="completed" v-model="task.completed" />
        <label class="form-check-label" for="completed">Completed</label>
      </div>
    </div>
    <button class="btn btn-primary" type="submit">{{ submitButtonText }}</button>
  </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    id: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      task: {
        title: '',
        description: '',
        completed: false,
      },
    };
  },
  computed: {
    formTitle() {
      return this.id ? 'Edit Task' : 'Add Task';
    },
    submitButtonText() {
      return this.id ? 'Update' : 'Add';
    },
  },
  created() {
    if (this.id) {
      axios.get(`/api/tasks/${this.id}`).then((response) => {
        this.task = response.data;
      });
    }
  },
  methods: {
    submitForm() {
      if (this.id) {
        axios.put(`/api/tasks/${this.id}`, this.task).then(() => {
          this.$router.push('/');
        });
      } else {
        axios.post('/api/tasks', this.task).then(() => {
          this.$router.push('/');
        });
      }
    },
  },
};
</script>
