<template>
	<v-img class="rounded-xl" height="100vh" src="../assets/hero-bg.jpg">
		<v-container class="fill-height px-md-12 mx-md-12">
			<v-row class="fill-height px-md-12" align="center">
				<v-col cols="6">
					<h1 class="white--text text-capitalize display-4 font-weight-bold">About Us</h1>
					<h1 class="font-weight-light white--text">Get to know who we are!</h1>
					<h2 class="white--text text-capitalize display-1 mt-6 font-weight-bold">Mission</h2>
					<h2 class="font-weight-light white--text">Connecting employer to the right talents</h2>
					<h2 class="white--text text-capitalize display-1 mt-6 font-weight-bold">Vission</h2>
					<h2 class="font-weight-light white--text">Create a global work space</h2>
				</v-col>
				<v-col class="team-card" md="6">
					<v-card class="pa-md-12 rounded-xl elevation-4">
						<h1 class="display-2 font-weight-bold primary--text">Meet Our Team</h1>
						<h4 class="mb-8">
							We have a small but cummited team that make sure everything works perfectly well
						</h4>
						<v-row>
							<v-col v-for="(team, i) in teams" :key="i + team.img" md="6">
								<v-card class="rounded-xl elevation-12">
									<v-card-actions class="py-12">
										<v-spacer></v-spacer>
										<v-avatar size="100">
											<v-img :src="team.img" alt="" />
										</v-avatar>
										<v-spacer></v-spacer>
									</v-card-actions>
									<h2 class="text-center">{{ team.title }}</h2>
									<p class="text-center pa-2">{{ team.description }}</p>
									<v-card-actions class="pb-12">
										<v-spacer></v-spacer>
										<v-btn small fab>
											<v-icon color="blue">mdi-facebook</v-icon>
										</v-btn>
										<v-btn small fab>
											<v-icon color="purple">mdi-instagram</v-icon>
										</v-btn>
										<v-btn small fab>
											<v-icon color="light-blue">mdi-twitter</v-icon>
										</v-btn>
										<v-btn small fab>
											<v-icon color="light-blue">mdi-linkedin</v-icon>
										</v-btn>
										<v-spacer></v-spacer>
									</v-card-actions>
								</v-card>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-img>
</template>

<script>
export default {
	data(){
		return{
			teams: [
				{
					img: 'https://us.123rf.com/450wm/michaeljung/michaeljung1509/michaeljung150900072/45019635-close-up-portrait-de-travailleur-de-l-entreprise-m%C3%A2le-afro-am%C3%A9ricaine.jpg',
					title: 'Andra John',
					description: 'CEO Of Job In Your City'
				},
				{
					img: 'https://www.baylor.edu/content/imglib//4/0/3/1/403100.jpg',
					title: 'Denice Amed',
					description: 'CTO Of Job In Your City'
				},
			]
		}
	}
}
</script>

<style scoped>
.team-card{
}
</style>