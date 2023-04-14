<template>
  <div>
    <v-img class="rounded-xl" height="80vh" src="../assets/hero-bg.jpg">
      <v-container class="fill-height">
        <v-row class="fill-height" align="center">
          <v-col cols="12" md="6">
            <h1 class="white--text text-capitalize display-4 hidden-sm-and-down font-weight-bold"> Welcome</h1>
						<h1 class="white--text text-capitalize display-1 hidden-md-and-up font-weight-bold"> Welcome</h1>
						<p class="green--text lighten-4" v-if="$store.state.user">{{ $store.state.user.email }}</p>
						<h1 class="white--text text-capitalize hidden-sm-and-down display-2">Find the tallents you need</h1>
						<h1 class="white--text text-capitalize hidden-md-and-up display-1">Find the tallents you need</h1>
            <h1 class="font-weight-light white--text">Post jobs to get tallent</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-img>

    <v-container>
      <v-row style="margin-top: -50px;" justify="center">
        <v-col cols="12" md="4">
          <v-btn block v-if="$store.state.user && !$store.state.user.cname" to="/post-job" class="text-capitalize" color="green" dark>
						Post Jobs
					</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="jobs">
      <v-row justify="center">
        <v-col cols="12" md="9">
					<h2 class="mb-12">My Job Post</h2>
					<v-data-table
						:headers="headers"
						:items="jobs"
						class="elevation-1"
					>
						<template v-slot:header.name="{ header }">
							{{ header.text.toUpperCase() }}
						</template>
					</v-data-table>
        </v-col>
      </v-row>
    </v-container>

		<v-container v-else>
      <v-row justify="center">
        <v-col cols="9">
					<h1 class="text-center gry--text">When you post jobs they will appear here</h1>
				</v-col>
			</v-row>
		</v-container>

    <!-- <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1 style="text-decoration: underline blue;" class="display-1 text-center">Categories</h1>
        </v-col>
        <v-col v-for="(category, i) in categories" :key="i + category.image" md="3">
          <v-card class="rounded-xl" :to="category.link">
            <v-img :src="category.image" height="300"></v-img>
            <v-card-title class="px-12">
              {{ category.title }}
            </v-card-title>
            <v-card-text class="px-12 pb-12">
              {{ category.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    name: 'Home',

    components: {
    },
    data(){
      return{
        headers: [
					{
						text: 'Company',
						sortable: false,
						value: 'cname',
					},
					{ text: 'Job Title', value: 'title' },
					{ text: 'Job Description', value: 'description' },
					{ text: 'Job Requirements', value: 'requirements' },
					{ text: 'Contact Email', value: 'email' },
				],
      }
    },
		computed: {
			...mapGetters({
				// map getters from store
				jobs: 'employerJobs',
			})
		},
		mounted(){
			
			if(!this.$store.state.user){
				this.$router.push('/login')
			}

			this.$store.dispatch('getEmployerJobs', this.$store.state.user.uid)

		}
  }
</script>

<style scoped>
td{
  padding: 10px 5px !important;
  text-decoration: none;
}
tbody>tr{
  box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 15px;
  border-radius: 10px;
}
</style>
