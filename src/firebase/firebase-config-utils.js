import Firebase from 'firebase';

const config = {
apiKey: "AIzaSyCKIflh0kuFsk-qbjBc0Jll8PDQAdaAvUk",
authDomain: "todo-react-app-ad0d3.firebaseapp.com",
databaseURL: "https://todo-react-app-ad0d3.firebaseio.com",
projectId: "todo-react-app-ad0d3",
storageBucket: "todo-react-app-ad0d3.appspot.com",
messagingSenderId: "449169459112",
appId: "1:449169459112:web:8e9704b7d36f345a54bf9d"
};
// Initialize Firebase
Firebase.initializeApp(config);

export const firestore = Firebase.firestore();
