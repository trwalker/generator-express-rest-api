
function <%= controllerClassName %>Controller() {
}

function <%= controllerMethod.toLowerCase() %>(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

<%= controllerClassName %>Controller.prototype = {
  <%= controllerMethod.toLowerCase() %>: <%= controllerMethod.toLowerCase() %>
};

var <%= controllerInstanceName %>Controller = new <%= controllerClassName %>Controller();

module.exports = <%= controllerInstanceName %>Controller;
