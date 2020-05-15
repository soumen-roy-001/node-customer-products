const fs = require("fs");
const path = require("path");
const Product = require("./mainProduct");

const p = path.join(path.dirname(require.main.filename), "data", "orders.json");

const groupBy = (objectArray, property) => {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

exports.fetchAll = () => {
  return JSON.parse(fs.readFileSync(p, "utf8"));
};

exports.findByCustomerId = (customerId, cb) => {
  const orders = this.fetchAll().data;
  const recs = orders.filter(
    (each) => parseInt(each.customerId) === parseInt(customerId)
  );
  return recs;
};

exports.updateOrder = (formData) => {
  if (formData) {
    const orders = this.fetchAll().data;
    const orderId = formData.id;
    const existingOrderIndex = orders.findIndex(
      (order) => order.id === orderId
    );
    if (existingOrderIndex !== -1) {
      const updatedOrders = [...orders];
      updatedOrders[existingOrderIndex] = formData;
      const writeData = {
        data: updatedOrders,
        status: true,
      };
      fs.writeFile(p, JSON.stringify(writeData), (err) => {
        console.log(err);
      });
      const resData = {
        data: formData,
        status: true,
      };
      return resData;
    } else {
      return { data: {}, status: false };
    }
  }
};

exports.orderProducts = (orderId) => {
  const products = Product.fetchAll().data;
  const result = products.filter(
    (each) => parseInt(each.orderId) === parseInt(orderId)
  );
  if (result.length > 0) {
    const resData = {
      data: result,
      status: true,
    };
    return resData;
  } else {
    return { data: [], status: false };
  }
};

exports.customerProducts = (customerId) => {
  const orders = this.fetchAll().data;
  const recs = orders.filter(
    (each) => parseInt(each.customerId) === parseInt(customerId)
  );
  const products = Product.fetchAll().data;
  const result = products.filter((p) =>
    recs.some((o) => {
      if (p.orderId === o.id) {
        let product = p;
        product.orderDetails = o;
        return product;
      }
    })
  );

  const groupedProducts = groupBy(result, "product_id");

  if (isEmpty(groupedProducts)) {
    return { data: {}, status: false };
  } else {
    const resData = {
      data: groupedProducts,
      status: true,
    };
    return resData;
  }
};

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
