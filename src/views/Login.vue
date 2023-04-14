<template>
    <div class="about mt-12">
      <v-img style="overflow: unset;" class="rounded-xl" height="100vh" src="../assets/hero-bg.jpg">
        <v-container class="fill-height">
          <v-row class="fill-height" align="center">
            <v-col md="6" cols="12">
              <h1 class="white--text text-capitalize display-4 hidden-sm-and-down font-weight-bold">Login</h1>
							<h1 class="white--text text-capitalize display-1 hidden-md-and-up font-weight-bold">Login</h1>
              <h1 class="font-weight-light white--text">Your job search starts and ends with us</h1>
            </v-col>
            <v-col md="6" cols="12">
              <v-card class="mt-12 pa-6 pa-md-12 rounded-xl elevation-4">
                <v-form ref="form" v-model="valid" class="pa-md-12">
                  <div class="d-flex justify-center mb-12">
                    <v-avatar color="primary">
                      <v-icon color="white" large>mdi-magnify</v-icon>
                    </v-avatar>
                  </div>
                  
                  <v-text-field v-model="email" type="email" label="Email" outlined :rules="emailRules" required></v-text-field>
									<v-text-field v-model="password" type="password" label="Password" :rules="passwordRules" outlined required></v-text-field>

									<p class="text-center"><router-link to="./register-freelancer">Register?</router-link></p>
									<p class="text-center"><router-link to="./register">Register as employer?</router-link></p>
                
                  <div class="d-flex justify-center mb-12">
                    <v-btn @click="login()" class="text-capitalize" color="#05114d" dark rounded>Login</v-btn>
                  </div>
                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </div>
  </template>

	<script>
import { firebaseApp } from '../plugins/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { mapGetters } from 'vuex'

export default {
	data(){
		return{
			valid: true,
			email: '',
			password: '',
			emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
			passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length > 8) || 'Password must be greater than 8 characters',
      ],
		}
	},
	methods: {
		login(){
			this.$refs.form.validate()
			if(this.$refs.form.validate()){
				// set notification
				let notification = { isLoading: true, msg: 'Login in process', color: 'info', isSnackbar: true }
				this.$store.commit('CHANGE_NOTIFICATION', notification)

				const auth = getAuth(firebaseApp);
				signInWithEmailAndPassword(auth, this.email, this.password)
					.then((userCredential) => {
						// Signed in 
						this.$store.commit('SET_USER', userCredential.user);
						// set notification
						let notification = { isLoading: false, msg: 'Login Successful', color: 'success', isSnackbar: true }
						this.$store.commit('CHANGE_NOTIFICATION', notification)
						if(userCredential.user.displayName == 'admin'){
							this.$router.push('/employer-dashboard')
						}else{
							this.$router.push('/dashboard')
						}
						
						setTimeout(() => { this.$store.commit('CLOSE_SNACKBAR', false) }, 3000)
						// ...
					})
					.catch((error) => {
						let notification = { isLoading: false, msg: error, color: 'error', isSnackbar: true }
						this.$store.commit('CHANGE_NOTIFICATION', notification)

						setTimeout(() => { this.$store.commit('CLOSE_SNACKBAR', false) }, 3000)
						// ..
					});
			}
		}
	},
	computed: {
		...mapGetters({
			// map `this.doneCount` to `this.$store.getters.doneTodosCount`
			// pendingOrders: 'transactions/pendingOrders',
		})
	}
}
</script>
  