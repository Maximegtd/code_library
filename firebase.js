const { getFirestore } = require("firebase-admin/firestore");

// configuration connection firestore
var admin = require("firebase-admin");
var serviceAccount = require("./code-library-ca17a-firebase-adminsdk-y3x87-9d67b37634.json");

const defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Database
const db = getFirestore(defaultApp);

module.exports = { db };
