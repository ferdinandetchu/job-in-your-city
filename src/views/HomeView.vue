<template>
  <div>
    <v-img class="rounded-xl" height="80vh" src="../assets/hero-bg.jpg">
      <v-container class="fill-height">
        <v-row class="fill-height" align="center">
          <v-col md="6">
            <h1 class="white--text text-capitalize display-4 hidden-sm-and-down font-weight-bold">Find the career <br> you deserve</h1>
            <h1 class="white--text text-capitalize display-1 hidden-md-and-up font-weight-bold">Find the career <br> you deserve</h1>
            <h1 class="font-weight-light white--text">Your job search starts and ends with us</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-img>

    <!-- <v-container>
      <v-row style="margin-top: -50px;" justify="center">
        <v-col cols="4">
          <v-form>
            <div class="d-flex fill-height">
              <v-text-field label="Enter Job Title" placeholder="search job" solo></v-text-field>
              <v-btn class="mt-1 ml-1" small fab><v-icon color="primary">mdi-magnify</v-icon></v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container> -->

    <v-container>
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
    </v-container>
  </div>
</template>

<script>

  export default {
    name: 'Home',

    components: {
    },
    data(){
      return{
        categories: [
          {
            image: 'https://elements-cover-images-0.imgix.net/92614c47-7239-4a50-a207-8f20a2f93e52?auto=compress%2Cformat&fit=max&w=900&s=91a8ed2824dec16d9ae04a2f9c1b1cde',
            title: 'Front End Developer',
            description: 'Employers looking for front end web developers that will help them solve thire business problems',
            link: '/login'
          },
          {
            image: 'https://media.istockphoto.com/id/947663966/vector/programming-design-concept.jpg?s=612x612&w=0&k=20&c=7ACckqE60fQkt8yLlFEkcVuhoBZWwwfUhyA2XaOZrGQ=',
            title: 'Back End Developer',
            description: 'Employers looking for back end web developers that will help them solve thire business problems',
            link: '/login'
          },
          {
            image: 'https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-2170.jpg?w=2000',
            title: 'Full Stark Developer',
            description: 'Employers looking for full stark web developers that will help them solve thire business problems',
            link: '/login'
          },
        ],

        jobs: [
          // {
          //   cname: 'F Technologies',
          //   title: 'Front end Developer',
          //   description: 'We need a front end web developer that can help us build our plafrom with best practice CSS and HTML',
          //   requirements: 'A good knowlage of HTML, CSS and Javascript',
          //   email: 'ferdinanddeveloper@gmail.com'
          // },
          // {
          //   cname: 'F Technologies',
          //   title: 'Front end Developer',
          //   description: 'We need a front end web developer that can help us build our plafrom with best practice CSS and HTML',
          //   requirements: 'A good knowlage of HTML, CSS and Javascript',
          //   email: 'ferdinanddeveloper@gmail.com'
          // },
        ],
      }
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
