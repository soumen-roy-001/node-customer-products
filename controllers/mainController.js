const Product = require("../models/mainProduct");
const Customer = require("../models/mainCustomer");
const Order = require("../models/mainOrder");

exports.getCustomers = (req, res, next) => {
  const id = req.params.id;
  if (id) {
    const customer = Customer.findById(id);
    res.status(200).json(customer);
  } else {
    const customers = Customer.fetchAll();
    res.status(200).json(customers);
  }
};
exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.status(200).json(products);
};
exports.getOrders = (req, res, next) => {
  const customerId = req.params.customerId;
  if (customerId) {
    const orders = Order.findByCustomerId(customerId);
    res.status(200).json(orders);
  } else {
    const orders = Order.fetchAll();
    res.status(200).json(orders);
  }
};
exports.getCustomerProducts = (req, res, next) => {
  const customerId = req.params.customerId;
  if (customerId) {
    const products = Order.customerProducts(customerId);
    res.status(200).json(products);
  }
};
exports.getOrderProducts = (req, res, next) => {
  const orderId = req.params.orderId;
  if (orderId) {
    const products = Order.orderProducts(orderId);
    res.status(200).json(products);
  }
};

exports.postUpdateOrder = (req, res, next) => {
  const formData = {
    id: parseInt(req.body.id),
    name: req.body.name,
    customerId: parseInt(req.body.customerId),
    orderDate: req.body.orderDate,
    status: req.body.status,
  };
  //   console.log(formData);
  if (formData) {
    const updatedOrder = Order.updateOrder(formData);
    res.status(200).json(updatedOrder);
  }
};

exports.postUpdateProduct = (req, res, next) => {
  const formData = {
    id: parseInt(req.body.id),
    name: req.body.name,
    quantity: parseInt(req.body.quantity),
    product_id: parseInt(req.body.product_id),
    orderId: parseInt(req.body.orderId),
    orderDate: req.body.orderDate,
    status: req.body.status,
  };
  //   console.log(formData);
  if (formData) {
    const updatedOrder = Product.updateProduct(formData);
    res.status(200).json(updatedOrder);
  }
};
