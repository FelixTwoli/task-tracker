<template>
  <div class="container flex">
    <div class="row justify-content-center mt-5">
      <h3 class="text-center">Task Management</h3>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">{{ currentUser?.email }}</div>

          <div class="card-body">
            <router-view></router-view>
          </div>
        </div>

        <div v-if="isLoggedIn" class="mt-3">
          <router-link to="/taskform" class="btn btn-primary btn-block">
            Create Task
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import TaskList from "@/components/TaskList.vue";
import { AuthService } from "@/services/auth";
import CreateTask from "@/components/CreateTask.vue";

export default {
  components: {
    SignUpForm,
    TaskList,
    LoginForm,
    CreateTask,

  },

  data() {
    return {
      isLoggedIn: AuthService.isLoggedIn(),
      currentUser: AuthService.getUser(),
    };
  },
  methods: {
    
  },
};
</script>
