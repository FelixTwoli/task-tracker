import { createRouter, createWebHistory } from "vue-router";
import UserList from "@/components/UserList.vue";
import TaskList from "@/components/TaskList.vue";
import StatusList from "@/components/StatusList.vue";
import UserTaskList from "@/components/UserTaskList.vue";
import LoginForm from "@/components/LoginForm.vue";
import SignupForm from "@/components/SignupForm.vue";
import Welcome from "@/components/Welcome.vue";


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
  // {
  //   path: "/dashboard",
  //   name: "TaskDashboard",
  //   component: Dashboard,
  //   meta: { requiresAuth: true },
  // },

  {
    path: '/create-task',
    name: 'CreateTask',
    component: () => import('@/components/CreateTask.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: "/users",
    name: "UserList",
    component: UserList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tasks",
    name: "TaskList",
    component: TaskList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/status",
    name: "StatusList",
    component: StatusList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/user-tasks",
    name: "UserTaskList",
    component: UserTaskList,
    meta: {
      requiresAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = localStorage.getItem("user");
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next("/");
  } else {
    next();
  }
});

export default router;
