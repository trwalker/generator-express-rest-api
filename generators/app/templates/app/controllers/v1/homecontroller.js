
function HomeController() {
}

function get(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

HomeController.prototype = {
  get: get
};

var homeController = new HomeController();

module.exports = homeController;
