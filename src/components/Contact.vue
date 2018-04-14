<template>
  <div v-if="contacts.length > 0" class="responsive">
    <v-subheader>Contacts</v-subheader>
    <v-card>
      <v-list two-line dense class="responsive">
        <template v-for="(contact, index) in contacts">
          <v-divider v-if="index != 0" :key="contact.label"></v-divider>
          <v-list-tile :href="contact.linkExternal" :key="index">
            <v-list-tile-avatar>
              <v-icon :class="[contact.iconClass]">{{ contact.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{contact.label}}</v-list-tile-title>
              <v-list-tile-sub-title v-html="contact.description"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      contacts: [
        {
          label: 'Gmail',
          iconClass: 'blue white--text',
          icon: 'email',
          linkExternal: 'mail://joaoeudes7@gmail.com',
          description: 'joaoeudes7@gmail.com',
        },
        {
          label: 'Telegram',
          iconClass: 'blue white--text',
          icon: 'message',
          linkExternal: 'https://t.me/OSystem',
          description: '@OSystem',
        },
      ],
    };
  },
};
</script>

<style scoped>
.responsive {
  min-width: 100%;
}
</style>
