<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://avatars1.githubusercontent.com/u/16367752?v=4">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>João Eudes Lima</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" :exact-active-class="item.link" :to="item.link">

          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <!-- <router-link :to=item.link> -->
            <v-list-tile-title>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile-title>
            <!-- </router-link> -->
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped" color="primary">
      <!-- <v-toolbar tabs flat app :clipped-left="clipped" color="primary"> -->
      <v-toolbar-side-icon class="white--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn class="white--text" icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn class="white--text" icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-tabs align-with-title slot="extension" color="whiter">
              <v-tab href="#one">My Profile</v-tab>
              <v-tab href="#two">Skills</v-tab>
              <v-tab href="#three">Repositories</v-tab>
              <v-tabs-slider color="pink"></v-tabs-slider>
            </v-tabs> -->
    </v-toolbar>
    <v-content>
      <router-view class="padding" />
    </v-content>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
            icon: 'home',
            title: 'Home',
            link: '/'
          },
          {
            icon: 'account_circle',
            title: 'Profile',
            link: '/profile'
          },
          {
            icon: 'polymer',
            title: 'Projects',
            link: '/projects'
          },
          {
            icon: 'contacts',
            title: 'Contact',
            link: '/contact'
          },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Github - @joaoeudes7',
      };
    },
    name: 'App',
  };
</script>

<style scoped>
  .padding {
    padding: 16px;
  }
</style>

