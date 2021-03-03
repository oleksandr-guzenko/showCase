const admin = require("firebase-admin");
const firebase = require("firebase");
const firebaseConfig = require("./config/firebaseConfig");
const firebaseAdminConfig = require("./config/firebaseAdminConfig");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Firebase,firebase admin sdk, and express init
const app = express();
firebase.initializeApp(firebaseConfig);
admin.initializeApp(firebaseAdminConfig);

// Route
const api = require("./routes/api");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Use route
app.use("/api", api);

// Setting port and listening to the server
const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server started on port ${port}`));
