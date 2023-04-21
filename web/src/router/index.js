// @ts-nocheck
import { createRouter, createWebHistory } from "vue-router";
import UserList from "@/components/UserList.vue";
import TaskList from "@/components/TaskList.vue";
import StatusList from "@/components/StatusList.vue";
import UserTaskList from "@/components/UserTaskList.vue";
import LoginForm from "@/components/LoginForm.vue";
import SignupForm from "@/components/SignupForm.vue";
import Welcome from "@/components/Welcome.vue";
import path from "path";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },

  {
    path: "/signup",
    name: "SignupForm",
    component: SignupForm,
  },

  {
    path: "/login",
    name: "LoginForm",
    component: LoginForm,
  },

  {
    path: "/users",
    name: "UserList",
    component: UserList,
  },

  {
    path: "/tasks",
    name: "TaskList",
    component: TaskList,
  },

  {
    path: "/status",
    name: "StatusList",
    component: StatusList,
  },
  {
    path: "/user-tasks",
    name: "UserTaskList",
    component: UserTaskList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
