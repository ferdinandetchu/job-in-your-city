<template>
  <div class="about mt-12">
    <v-img style="overflow: unset;" class="rounded-xl" height="100vh" src="../assets/hero-bg.jpg">
      <v-container class="fill-height">
        <v-row class="fill-height" align="center">
          <v-col md="6" cols="12">
            <h1 class="white--text text-capitalize display-4 hidden-sm-and-down font-weight-bold">Register Now</h1>
            <h1 class="white--text text-capitalize hidden-md-and-up font-weight-bold">Register Now</h1>
            <h1 class="font-weight-light white--text">Your search for talent starts and ends with us</h1>
          </v-col>
          <v-col md="6" cols="12">
            <v-card class="mt-12 pa-md-12 pa-6 rounded-xl elevation-4">
              <v-form ref="form" v-model="valid" class="pa-md-12">
                <div class="d-flex justify-center mb-12">
                  <v-avatar color="primary">
                    <v-icon color="white" large>mdi-magnify</v-icon>
                  </v-avatar>
                </div>
                
                <v-text-field type="text" label="Company Name" v-model="cname" :rules="cnameRules" required outlined></v-text-field>
                <v-text-field type="text" label="Tax Payers Number" v-model="taxNumber" :rules="taxRules" required outlined></v-text-field>
                <v-text-field type="text" label="Location" v-model="location" :rules="locationRules" required outlined></v-text-field>
                <v-text-field type="tel" label="Phone Number" v-model="phone" :rules="phoneRules" required outlined></v-text-field>
                <v-text-field type="email" label="Email" v-model="email" :rules="emailRules" required outlined></v-text-field>
                <v-text-field type="password" label="Password" v-model="password" :rules="passwordRules" required outlined></v-text-field>
                
                <p class="text-center"><router-link to="./login">Have an account?</router-link></p>
              
                <div class="d-flex justify-center mb-12">
                  <v-btn @click="register()" class="text-capitalize" color="#05114d" dark rounded>Register</v-btn>
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
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile} from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore"; 
import { firebaseApp } from '../plugins/firebase';

export default {
  data() {
    return{
      valid: true,
      cname: '',
      taxNumber: '',
      location: '',
      phone: '',
      email: '',
      password: '',
      cnameRules: [
        v => !!v || 'Company name is required',
      ],
      taxRules: [
        v => !!v || 'Tax payer number is required',
      ],
      locationRules: [
        v => !!v || 'Location is required',
      ],
      phoneRules: [
        v => !!v || 'Phone Number is required',
      ],
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
  methods:{
    register(){
			this.$refs.form.validate()
			if(this.$refs.form.validate()){
				// set notification
				let notification = { isLoading: true, msg: 'Registration in process', color: 'info', isSnackbar: true }
				this.$store.commit('CHANGE_NOTIFICATION', notification)

				const auth = getAuth(firebaseApp);
        const db = getFirestore(firebaseApp);

				createUserWithEmailAndPassword(auth, this.email, this.password)
					.then(async (userCredential) => {
            sendEmailVerification(auth.currentUser)
            // Add a new document in collection "user"
            await setDoc(doc(db, "users", `${userCredential.user.email}`), {
              companyName: this.cname,
              taxNumber: this.taxNumber,
              location: this.location,
              phonenumber: this.phone,
            });

            updateProfile(auth.currentUser, {
              displayName: "admin"
            }).then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });

						// Signed in 
						this.$store.commit('SET_USER', userCredential.user);
						// set notification
						let notification = { isLoading: false, msg: 'Registration Successful', color: 'success', isSnackbar: true }
						this.$store.commit('CHANGE_NOTIFICATION', notification)
						this.$router.push('/employer-dashboard')
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
  }
}
</script>
