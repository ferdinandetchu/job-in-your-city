<template>
  <div class="about">
    <v-img style="overflow: unset;" class="rounded-xl" height="80vh" src="../assets/hero-bg.jpg">
      <v-container class="fill-height">
        <v-row class="fill-height" align="center">
          <v-col cols="6">
            <h1 class="white--text text-capitalize display-4 font-weight-bold">Post Job</h1>
            <h1 class="font-weight-light white--text">Add a new job to get skillful employees</h1>
          </v-col>
          <v-col md="6">
            <v-card class="mt-12 pa-md-12 rounded-xl elevation-4">
              <v-form ref="form" v-model="valid" class="pa-md-12">
                <div class="d-flex justify-center mb-12">
                  <v-avatar color="primary">
                    <v-icon color="white" large>mdi-magnify</v-icon>
                  </v-avatar>
                </div>
                
                <v-text-field type="text" label="Job Title"  v-model="title" :rules="titleRules" required outlined></v-text-field>
                <v-textarea type="text" label="Description"  v-model="description" :rules="descriptRules" required outlined></v-textarea>
                <v-text-field type="text" label="Requirments"  v-model="requirments" :rules="requirmentsRules" required outlined></v-text-field>
								<v-text-field type="text" label="Company Name" v-model="cname" :rules="cnameRules" required outlined></v-text-field>
                <v-text-field type="email" label="Email" v-model="email" :rules="emailRules" required outlined></v-text-field>
              
                <div class="d-flex justify-center mb-12">
                  <v-btn @click="postJob()" class="text-capitalize" color="#05114d" dark rounded>Post Job</v-btn>
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
import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import { firebaseApp } from '../plugins/firebase';

export default {
	data() {
		return{
			valid: true,
			title: '',
			description: '',
			requirments: '',
			cname: '',
			email: '',
			titleRules: [
        v => !!v || 'Job title is required',
      ],
			descriptRules: [
        v => !!v || 'Description is required',
      ],
			requirmentsRules: [
        v => !!v || 'Requirments is required',
      ],
			cnameRules: [
        v => !!v || 'Company name is required',
      ],
			emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
		}
	},
	methods: {
		async postJob(){
			this.$refs.form.validate()
			if(this.$refs.form.validate()){
				// set notification
				let notification = { isLoading: true, msg: 'Job post in process', color: 'info', isSnackbar: true }
				this.$store.commit('CHANGE_NOTIFICATION', notification)

				const db = getFirestore(firebaseApp);

				// Add a new document with a generated id.
				const docRef = await addDoc(collection(db, "jobs"), {
					title: this.title,
					description: this.description,
					requirements: this.requirments,
					cname: this.cname,
					email: this.email,
					uid: this.$store.state.user.uid
				});

				// set notification
				notification = { isLoading: false, msg: 'Job post was successful', color: 'success', isSnackbar: true }
				this.$store.commit('CHANGE_NOTIFICATION', notification)

				setTimeout(() => { this.$store.commit('CLOSE_SNACKBAR', false) }, 3000)
			}
		}
	},
  mounted(){
		if(!this.$store.state.user){
			this.$router.push('/login')
		}
	}
}
</script>
