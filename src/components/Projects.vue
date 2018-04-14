<template>
  <div>

    <div v-if="projects.length > 0" class="responsive">
      <v-subheader>Repositories</v-subheader>
      <v-card>
        <v-list two-line dense>
          <template v-for="(project, index) in projects">
            <v-divider v-if="index != 0" :key="project.name"></v-divider>
            <v-list-tile :href="project.html_url" :key="index">
              <v-list-tile-content>
                <v-list-tile-title>{{project.name}}</v-list-tile-title>
                <v-list-tile-sub-title v-html="project.description"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text v-html="formatDate(project.created_at)"></v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </div>

    <div v-else>
      <v-progress-circular indeterminate :size="100" color="primary"></v-progress-circular>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'projects',
  data() {
    return {
      projects: [],
    };
  },

  created() {
    this.getProjects();
  },

  methods: {

    getProjects() {
      axios
        .get('https://api.github.com/users/joaoeudes7/repos')
        .then((response) => {
          this.projects = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },

    copyRepository(url) {
      return `git clone ${url}`;
    },

  },
};
</script>

<style scoped>
.responsive {
  max-width: 100%;
  display: grid;
}
</style>
