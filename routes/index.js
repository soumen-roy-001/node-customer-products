var express = require("express");
var router = express.Router();
const mainController = require("../controllers/mainController");
/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.status(401).send("You are not allowed!");
});

router.get("/customers", mainController.getCustomers);
router.get("/customers/:id", mainController.getCustomers);
router.get("/products", mainController.getProducts);
router.get("/orders", mainController.getOrders);
router.get("/orders/:customerId", mainController.getOrders);
router.get(
  "/customers-products/:customerId",
  mainController.getCustomerProducts
);
router.get("/ordered-products/:orderId", mainController.getOrderProducts);
router.post("/order-update", mainController.postUpdateOrder);
router.post("/product-update", mainController.postUpdateProduct);

module.exports = router;
