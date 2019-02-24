const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});


exports.sendWelcomeEmail = functions.auth.user().onCreate((user, context) => {
    const email = user.email; // The email of the user.
    const displayName = user.displayName; // The display name of the user.
    console.log("created -> " + email + " " + displayName);
    console.log(context);
    console.log("about to get allowed users");
    const updateRef = admin.firestore().collection('access').doc(email);
    updateRef.get().then((email) => {
        console.log("received user");
        if (!email.exists) {
            console.log("user doesnt ecis user");
            admin.auth().deleteUser(user.uid)
                .then(() => console.log("deleted"))
                .catch(() => console.log("delete failed"))
        }
        console.log(email);
    });

    // read users -> ! contains email -> delete
});

exports.sendByeEmail = functions.auth.user().onDelete((user) => {


    // const updateRef = admin.firestore().collection('access').doc(email);
    updateRef.get().then((email) => {
        console.log(email);
    });


// [END onDeleteTrigger]
    const email = user.email;
    const displayName = user.displayName;
    console.log("deleted -> " + email + " " + displayName)
});
