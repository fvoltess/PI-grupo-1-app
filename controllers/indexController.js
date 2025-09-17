const controller = {
  index: function (req, res) {
    res.render("index", { title: "Express" });
  },
  login: function (req, res) {
    res.render("login", { title: "Login" });
  },
  register: function (req, res) {
    res.render("register", { title: "Register" });
  },
  profile: function (req, res) {
    res.render("profile", { title: "Profile" });
  },
};

module.exports = controller;
