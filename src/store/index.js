import Vue from 'vue'
import Vuex from 'vuex'

import { collection, query, where, getDocs, getFirestore } from "firebase/firestore"; 
import { firebaseApp } from '../plugins/firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    employerJobs: null,
    jobs: null,
    notification: {
      isLoading: false,
      msg: '',
      color: '',
      isSnackbar: false
    }
  },
  getters: {
    notification: state => state.notification,
    employerJobs: state => state.employerJobs,
    jobs: state => state.jobs
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    SET_EMPLOYER_JOBS(state, jobs) {
      state.employerJobs = jobs;
    },

    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },

    SET_USER_NULL(state) {
      state.user = null;
    },
    CHANGE_NOTIFICATION: (state, notification) => {
      state.notification = notification
    },
  
    CLOSE_SNACKBAR: (state, isSnackbar) => {
      state.notification.isSnackbar = isSnackbar
    }
  },
  actions: {
    async getEmployerJobs({commit}, uid){
      const db = getFirestore(firebaseApp);
      const q = query(collection(db, "jobs"), where("uid", "==", uid));

      const querySnapshot = await getDocs(q);
      let jobs = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const {title, description, requirements, cname, email, uid} = doc.data()
        jobs.push({id: doc.id, title, description, requirements, cname, email, uid})
      });

      commit('SET_EMPLOYER_JOBS', jobs)
    },

    async getJobs({commit}){
      const db = getFirestore(firebaseApp);
      const querySnapshot = await getDocs(collection(db, "jobs"));

      let jobs = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const {title, description, requirements, cname, email, uid} = doc.data()
        jobs.push({id: doc.id, title, description, requirements, cname, email, uid})
      });

      commit('SET_JOBS', jobs)
    }
  },
  modules: {
  }
})
