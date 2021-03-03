const firebase = require("firebase");

module.exports = {
  userLogin: async (req, res, next) => {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };

    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        return data.user.getIdToken();
      })
      .then((token) => {
        return res.json({ token });
      })
      .catch((err) => {
        console.error(err);
        if (err.code === "auth/wrong-password") {
          return res
            .status(403)
            .json({ message: "Wrong credentials, please try again !" });
        } else {
          return res.status(500).json({ error: err.code });
        }
      });
  },
};
