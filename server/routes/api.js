const router = require("express-promise-router")();
const multer = require("multer");
const admin = require("firebase-admin");
const storage = require("../config/multerConfig");
const FBAuth = require("../helpers/FBAuth");

// Controllers
const productController = require("../controllers/product");
const productImageController = require("../controllers/productImage");
const loginController = require("../controllers/login");

// Multer init
const upload = multer({ storage });

// Routers
router.route("/").post(loginController.userLogin);

router
  .route("/products")
  .get(productController.getAllProducts)
  .post(FBAuth, productController.addProduct);

router
  .route("/products/:product_id")
  .get(productController.getProduct)
  .delete(FBAuth, productController.deleteProduct)
  .put(FBAuth, productController.updateProduct);

router
  .route("/products/:product_id/image")
  .get(productImageController.getProductImage)
  .post(
    FBAuth,
    upload.single("product_image"),
    productImageController.addProductImage
  )
  .put(
    FBAuth,
    upload.single("product_image"),
    productImageController.updateProductImage
  )
  .delete(FBAuth, productImageController.deleteProductImage);

module.exports = router;
