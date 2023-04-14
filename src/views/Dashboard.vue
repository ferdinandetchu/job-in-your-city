<template>
  <div>
    <v-img class="rounded-xl" height="80vh" src="../assets/hero-bg.jpg">
      <v-container class="fill-height">
        <v-row class="fill-height" align="center">
          <v-col cols="12" md="6">
            <h1 class="white--text text-capitalize display-4 hidden-sm-and-down font-weight-bold"> Welcome</h1>
						<h1 class="white--text text-capitalize display-1 hidden-md-and-up font-weight-bold"> Welcome</h1>
						<p class="green--text lighten-4" v-if="$store.state.user">{{ $store.state.user.email }}</p>
						<h1 class="white--text text-capitalize display-2">Find the career you deserve</h1>
            <h1 class="font-weight-light white--text">Your job search starts and ends with us</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-img>

    <v-container>
      <v-row style="margin-top: -50px;" justify="center">
        <v-col cols="12" md="4">
          <v-form>
            <div class="d-flex fill-height">
              <v-text-field label="Enter Job Title" placeholder="search job"  v-model="search" solo></v-text-field>
              <v-btn class="mt-1 ml-1" small fab><v-icon color="primary">mdi-magnify</v-icon></v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="jobs.length > 0">
      <v-row justify="center">
        <v-col cols="12" md="9">
					<h2 class="mb-12">Availabel Job Post</h2>
					<v-data-table
						:headers="headers"
						:items="jobs"
						:search="search"
						class="elevation-1"
					>
						<template v-slot:header.name="{ header }">
							{{ header.text.toUpperCase() }}
						</template>

						<template v-slot:item.actions="{ item }">
							<v-btn :href="`mailto:${item.email}`" color="#05114d" target="_blank"  small fab dark>
								<v-icon>
									mdi-email
								</v-icon>
							</v-btn>
						</template>
					</v-data-table>
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
				search: '',
				headers: [
					{
						text: 'Company',
						sortable: true,
						value: 'cname',
					},
					{ text: 'Job Title', value: 'title' },
					{ text: 'Job Description', value: 'description' },
					{ text: 'Job Requirements', value: 'requirements' },
					{ text: 'Contact Email', value: 'email' },
					{ text: 'Actions', value: 'actions', sortable: false },
				],
      }
    },
		computed: {
			...mapGetters({
				// map getters from store
				jobs: 'jobs',
			})
		},
		mounted(){
			if(!this.$store.state.user){
				this.$router.push('/login')
			}

			this.$store.dispatch('getJobs')
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
