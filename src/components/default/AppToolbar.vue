<template>
  <div>
		<v-app-bar
			color="white"
			class="px-md-12"
			flat
			fixed
		>
			<!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

			<v-toolbar-title class="primary--text">Job<span class="green--text">In</span>Your<span class="green--text">City</span></v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn v-if="!$store.state.user" to="/" class="text-capitalize" text color="primary">
				Home
			</v-btn>

			<v-btn v-if="$store.state.user && $store.state.user.displayName == 'admin'" to="/employer-dashboard" class="text-capitalize" text color="primary">
				Dashboard
			</v-btn>

			<v-btn v-if="$store.state.user && $store.state.user.displayName != 'admin'" to="/dashboard" class="text-capitalize" text color="primary">
				Dashboard
			</v-btn>

			<v-btn to="/about-us" class="text-capitalize hidden-sm-and-down" text color="primary">
				About Us
			</v-btn>

			<v-btn v-if="!$store.state.user" to="/register" class="text-capitalize" text color="primary">
				Post Jobs
			</v-btn>

			<v-btn v-if="$store.state.user && $store.state.user.cname" to="/post-job" class="text-capitalize" text color="primary">
				Post Jobs
			</v-btn>

			<v-btn v-if="!$store.state.user" to="/login" class="text-capitalize hidden-sm-and-down" text color="primary">
				Find Jobs
			</v-btn>

			<v-btn v-if="$store.state.user && $store.state.user.displayName != 'admin'" to="/dashboard" class="text-capitalize hidden-sm-and-down" text color="primary">
				Find Jobs
			</v-btn>

			<v-btn small v-if="!$store.state.user" to="/login" class="mx-4 text-capitalize" color="secondary" outlined>
				Login
			</v-btn>

			<v-btn v-if="!$store.state.user" to="/register-freelancer" class="text-capitalize" small color="primary">
				Register
			</v-btn>

			<v-btn @click="logout()" v-if="$store.state.user" to="/register-freelancer" class="ml-6 text-capitalize" color="primary">
				Logout
			</v-btn>
		</v-app-bar>
	</div>
</template>

<script>
import { firebaseApp } from '../../plugins/firebase';
import { getAuth, signOut } from "firebase/auth";

export default {
	methods: {
		logout(){
			const auth = getAuth(firebaseApp);
			signOut(auth).then(() => {
			// Sign-out successful.
			// set notification
			this.$store.commit('SET_USER_NULL');
			let notification = { isLoading: false, msg: 'Sign-out Successful', color: 'success', isSnackbar: true }
			this.$store.commit('CHANGE_NOTIFICATION', notification)
			this.$router.push('/')
			setTimeout(() => { this.$store.commit('CLOSE_SNACKBAR', false) }, 3000)
			}).catch((error) => {
				// An error happened.
				let notification = { isLoading: false, msg: error, color: 'error', isSnackbar: true }
				this.$store.commit('CHANGE_NOTIFICATION', notification)

				setTimeout(() => { this.$store.commit('CLOSE_SNACKBAR', false) }, 3000)
			});
		}
	}
}
</script>

<style>

</style>