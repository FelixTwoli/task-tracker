<!-- <template>
  <div class="row">
    <div class="col-md-12">
      <h2>Task Dashboard</h2>
      <router-link to="/tasks/create" class="btn btn-primary mb-3">
        Add Task
      </router-link>

      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.name }}</td>
            <td>{{ task.description }}</td>
            <td>{{ task.status.name }}</td>
            <td>{{ task.due_date }}</td>
            <td>
              <router-link
                :to="{name: 'edit-task', params: {id: task.id}}"
                class="btn btn-primary btn-sm"
              >
                Edit
              </router-link>
              <button
                class="btn btn-danger btn-sm"
                @click="deleteTask(task.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TaskDashboard",
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      axios
        .get("/api/tasks")
        .then((response) => (this.tasks = response.data))
        .catch((error) => console.log(error));
    },
    deleteTask(id) {
      if (confirm("Are you sure you want to delete this task?")) {
        axios
          .delete(`/api/tasks/${id}`)
          .then(() => {
            this.tasks = this.tasks.filter((task) => task.id !== id);
          })
          .catch((error) => console.log(error));
      }
    },
  },
};
</script> 




