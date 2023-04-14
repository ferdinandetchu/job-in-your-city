<template>
  <v-app>
    <app-toolbar />

    <v-main>
      <router-view/>
    </v-main>
    
    <v-snackbar
    :timeout="-1"
    :value="notification.isSnackbar"
    :color="notification.color"
    :light="notification.color == 'success' || notification.color == 'warning'"
    bottom
    center
    rounded="pill"
  >
    {{ notification.msg }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="red"
        small
        fab
        dark
        rounded
        v-bind="attrs"
        @click="$store.commit('CLOSE_SNACKBAR', false)"
        :loading="notification.isLoading"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>

  <v-footer padless app>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — &copy; <strong>Job<span class="green--text">In</span>Your<span class="green--text">City</span></strong>
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>
import AppToolbar from './components/default/AppToolbar.vue';
import { mapGetters } from 'vuex'

export default {
  components: { AppToolbar },
  name: 'App',

  data: () => ({
    //
  }),

  computed: {
		...mapGetters({
			// map `this.doneCount` to `this.$store.getters.doneTodosCount`
			notification: 'notification',
		})
	}
};
</script>
