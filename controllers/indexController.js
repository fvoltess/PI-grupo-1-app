const controller = {
  index: (req, res) => {
    res.render("index", { title: "Express" });
  },
  login: (req, res) => {
    res.render("login", { title: "Login" });
  },
  register: (req, res) => {
    res.render("register", { title: "Register" });
  },
  profile: (req, res) => {
    res.render("profile", { title: "Profile" });
  },
};

module.exports = controller;
