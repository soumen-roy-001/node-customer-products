const fs = require("fs");
const path = require("path");

const c = path.join(
  path.dirname(require.main.filename),
  "data",
  "customers.json"
);

exports.fetchAll = () => {
  return JSON.parse(fs.readFileSync(c, "utf8"));
};

exports.findById = (id, cb) => {
  const users = this.fetchAll().data;
  const rec = users.filter((each) => parseInt(each.id) === parseInt(id));
  return rec;
};
