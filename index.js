var config = {
    apiKey: "AIzaSyB-89cCcFsOCmA7Coamof0qACuCoKQSVqE",
    authDomain: "accesotam.firebaseapp.com",
    databaseURL: "https://accesotam.firebaseio.com",
    projectId: "accesotam",
    storageBucket: "accesotam.appspot.com",
    messagingSenderId: "573498022754",
    appId: "1:573498022754:web:23c1621eb7888f6568ea3b",
    measurementId: "G-QQDMZQ2SBH"
};
firebase.initializeApp(config);
firebase.analytics();

var auth = firebase.auth();
document.getElementById('btnloging').addEventListener('click', function () {
    var provider = new firebase.auth.OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      tenant: 'b2db33ab-7866-4eb9-baf6-4624c5fe0036'
    });
    auth.signInWithPopup(provider)
    .then(function (result) {
      console.log(result);
    }).catch(function (error) {
      console.log(error);
    });
});
