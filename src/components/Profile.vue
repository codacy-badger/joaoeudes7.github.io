<template>
  <div>
    <div v-if="profileGit.name">
      <v-subheader>Profile</v-subheader>

      <v-card color="primary" class="white--text">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs1>
              <v-card-media :src="profileGit.avatar_url" height="125px" contain></v-card-media>
            </v-flex>
            <v-flex xs7>
              <div>
                <div class="headline">{{profileGit.name}}</div>
                <div>@{{profileGit.login}}</div>
                <div>Hi! I'am 20 years, I'm a programmer and developer. Crazy about javascripts framework and passionate about a world without limitations</div>
              </div>

              <v-card-actions>
                <v-btn color="secundary">Bio & Projects</v-btn>
                <v-btn color="secundary">Linkedin</v-btn>
              </v-card-actions>

            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>

    <div v-else class="center">
      <v-progress-circular indeterminate :size="100" color="red"></v-progress-circular>
    </div>

    <v-container fluid grid-list-xl>
      <v-layout row>

        <v-flex xs12 sm12 md6 lg6>
          <v-subheader>Skills</v-subheader>
          <v-card>
            <v-card-text>
              <v-slider value="85" thumb-label label="Javascript/ES6"></v-slider>
              <v-slider value="65" thumb-label label="Css/Sass"></v-slider>
              <v-slider value="75" thumb-label label="Angular"></v-slider>
              <v-slider value="65" thumb-label label="Vue"></v-slider>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg6>
          <v-subheader>Others Skills</v-subheader>
          <v-card>
            <v-card-text>
              <v-slider value="70" thumb-label label="Github"></v-slider>
              <v-slider value="85" thumb-label label="Photoshop"></v-slider>
              <v-slider value="50" thumb-label label="Python"></v-slider>
              <v-slider value="60" thumb-label label="C#"></v-slider>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "profile",
    data() {
      return {
        profileGit: []
      };
    },
    created() {
      this.getProjects();
    },

    methods: {
      getProjects() {
        axios
          .get(`https://api.github.com/users/joaoeudes7`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.profileGit = response.data;
          })
          .catch(e => {
            this.errors.push(e);
          });
      }
    }
  };
</script>

<style scoped>
  .center {
    text-align: center;
  }

  .progress-circular {
    margin: 1rem;
  }


  /* .input-group.input-group--slider {
        padding-left: 16px;
      } */
</style>
