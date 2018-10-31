import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDEbYzx_UO2wcQmCidao7XveH4A0DChfmc",
    authDomain: "nba-full-stack-676b6.firebaseapp.com",
    databaseURL: "https://nba-full-stack-676b6.firebaseio.com",
    projectId: "nba-full-stack-676b6",
    storageBucket: "nba-full-stack-676b6.appspot.com",
    messagingSenderId: "287584968859"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseVideos,
  firebaseTeams
}
