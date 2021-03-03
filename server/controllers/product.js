const admin = require("firebase-admin");
const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = {
  addProduct: async (req, res, next) => {
    const newProduct = {
      ...req.body,
      createdAt: new Date().toString(),
    };

    const productsRef = await db
      .collection("products")
      .add(newProduct)
      .then((doc) => {
        doc.get().then((item) => {
          db.collection("products").doc(item.id).update({ productId: item.id });
          res.json(item.data());
        });
      })
      .catch(() => res.json({ msg: "failed to add" }));
  },

  getAllProducts: async (req, res, next) => {
    const products = [];
    const productsRef = await db
      .collection("products")
      .orderBy("createdAt", "desc")
      .get()
      .then((doc) => {
        doc.forEach((item) => products.push(item.data()));
      });
    res.json(products);
  },

  getProduct: async (req, res, next) => {
    const { product_id } = req.params;
    const productsRef = await db.collection("products").doc(product_id).get();
    res.json(productsRef.data());
  },

  updateProduct: async (req, res, next) => {
    const { product_id } = req.params;

    const productsRef = await db
      .collection("products")
      .doc(product_id)
      .update(req.body)
      .then((doc) => res.status(200).json({ msg: "successfully updated" }))
      .catch(() => res.status(500).json({ msg: "failed to update" }));
  },

  deleteProduct: async (req, res, next) => {
    const { product_id } = req.params;
    const imageRef = await (
      await db.collection("products").doc(product_id).get()
    ).data().imageName;

    await bucket.file(imageRef).delete();

    const productsRef = await db
      .collection("products")
      .doc(product_id)
      .delete({ exists: true })
      .then(() => {
        res.status(200).json({ msg: "successfully deleted" });
      })
      .catch(() => res.status(500).json({ msg: "failed to delete" }));
  },
};
