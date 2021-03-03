const admin = require("firebase-admin");

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = {
  addProductImage: async (req, res, next) => {
    const { product_id } = req.params;

    const image = await bucket.upload(req.file.path);
    await bucket.file(req.file.filename).makePublic();

    const imageName = bucket.file(req.file.filename).name;
    const imageURL = bucket.file(req.file.filename).publicUrl();

    const productsRef = await db
      .collection("products")
      .doc(product_id)
      .update({ imageName: imageName, imageURL: imageURL });

    res.json({ msg: "successfully upload an image" });
  },

  getProductImage: async (req, res, next) => {
    const { product_id } = req.params;
    const productsRef = await db.collection("products").doc(product_id).get();
    res.json(productsRef.data().imageURL);
  },

  updateProductImage: async (req, res, next) => {
    const { product_id } = req.params;

    const imageRef = await (
      await db.collection("products").doc(product_id).get()
    ).data().imageName;

    await bucket.file(imageRef).delete();

    const image = await bucket.upload(req.file.path);
    await bucket.file(req.file.filename).makePublic();

    const imageName = bucket.file(req.file.filename).name;
    const imageURL = bucket.file(req.file.filename).publicUrl();

    const productsRef = await db
      .collection("products")
      .doc(product_id)
      .update({ imageName: imageName, imageURL: imageURL });

    res.json({ msg: "successfully updated product image" });
  },

  deleteProductImage: async (req, res, next) => {
    const { product_id } = req.params;

    const imageRef = await (
      await db.collection("products").doc(product_id).get()
    ).data().imageName;

    await bucket.file(imageRef).delete();

    const productsRef = await db
      .collection("products")
      .doc(product_id)
      .update({ imageName: "", imageURL: "" });

    res.json({ msg: "successfully delete product image" });
  },
};
