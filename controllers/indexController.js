const localData = require("../localData/localData");
const db = require("../database/models");

const controller = {
  index: function (req, res) {
    res.render("index", { title: "Express", products: localData.productos });
  },
};

module.exports = controller;
