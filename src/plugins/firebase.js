import { initializeApp } from 'firebase/app'
// ... other firebase imports

const firebaseConfig = {
    apiKey: "AIzaSyB0JwNyrFFgKwBI17cFrBqKfNM0RAaBDtI",
    authDomain: "job-in-your-city.firebaseapp.com",
    projectId: "job-in-your-city",
    storageBucket: "job-in-your-city.appspot.com",
    messagingSenderId: "1085728191031",
    appId: "1:1085728191031:web:23590a47d1deceade045b2",
    measurementId: "G-7QH0945L90"
}

export const firebaseApp = initializeApp(firebaseConfig)
