<template>
  <div>
    <div v-if="projects.length > 0">
    <v-subheader>Repositories</v-subheader>
      <v-card>
        <v-list two-line>
          <div v-for="(project, index) in projects" v-bind:key="project.id">

            <v-list-tile avatar :href="project.html_url">
              <v-list-tile-avatar>
                <img src="https://avatars1.githubusercontent.com/u/16367752?v=4">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{project.name}}</v-list-tile-title>
                <v-list-tile-sub-title v-html="project.description"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text v-html="formatDate(project.created_at)"></v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index+1 < projects.length" :key="`divider-${index}`"></v-divider>

          </div>
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
          .then(response => {
            this.projects = response.data;
          })
          .catch(e => {
            this.errors.push(e);
          });
      },

      formatDate(date) {
        return new Date(date).toLocaleDateString();
      },

      copyRepository(url) {
        return `git clone ${url}`;
      }

    }
  };
</script>

<style scoped>
  .md-list {
    width: 620px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }

  a:link,
  a:visited {
    text-decoration: none
  }

  a:hover {
    text-decoration: none;
    color: #0059b1
  }

  a:active {
    text-decoration: none
  }
</style>
