const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

exports.fetchAll = () => {
  return JSON.parse(fs.readFileSync(p, "utf8"));
};

exports.updateProduct = (formData) => {
  if (formData) {
    const products = this.fetchAll().data;
    const productId = formData.id;
    const existingProductIndex = products.findIndex(
      (product) => product.id === productId
    );
    if (existingProductIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex] = formData;
      const writeData = {
        data: updatedProducts,
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
