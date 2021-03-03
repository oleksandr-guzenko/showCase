const serviceAccount = require("./serviceAccountKey.json");
const admin = require("firebase-admin");

const firebaseAdminConfig = {
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "apl-product-showcase-968a2.appspot.com",
};

module.exports = firebaseAdminConfig;
