const serviceAccount = require("./serviceAccountKey.json");
const admin = require("firebase-admin");

const firebaseAdminConfig = {
  credential: admin.credential.cert(serviceAccount),
};

module.exports = firebaseAdminConfig;
