<template>
  <div>
    <div v-if="!loggedIn">
      <sign-up-form />
      <login-form />
    </div>
    <div v-else>
      <task-list />
    </div>
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  components: {
    SignUpForm,
    LoginForm,
    TaskList,
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    // TODO: implement authentication logic and set loggedIn accordingly
  },
};
</script>
