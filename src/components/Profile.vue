<template>
  <div>
    <div v-if="profileGit.name" class="center">
      <v-subheader>Profile</v-subheader>

      <v-card color="primary" class="white--text">
        <v-container>
          <v-layout row>
            <v-flex>
              <div>
                <div class="headline">{{profileGit.name}}</div>
                <div>@{{profileGit.login}}</div>
                <div>Hi! I'am 20 years, I'm a programmer and developer. Crazy about javascripts framework and passionate about a world without limitations! ;)</div>
              </div>

              <v-card-actions>
                <v-btn color="secundary" to="/projects">Bio & Projects</v-btn>
                <v-btn color="secundary" @click="goToProfileLinkedin()">Linkedin</v-btn>
              </v-card-actions>

            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>

    <div v-else class="center">
      <v-progress-circular indeterminate :size="100" color="red"></v-progress-circular>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'profile',
  data() {
    return {
      profileGit: [],
    };
  },
  created() {
    this.getProjects();
  },

  methods: {
    getProjects() {
      axios
        .get('https://api.github.com/users/joaoeudes7')
        .then((response) => {
          // JSON responses are automatically parsed.
          this.profileGit = response.data;
        });
    },

    goToProfileLinkedin() {
      window.location.href = 'https://www.linkedin.com/in/joaoeudes7s';
    },
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}

.progress-circular {
  margin: 1rem;
}
</style>
