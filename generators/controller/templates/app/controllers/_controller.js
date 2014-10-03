
function <%= controllerName %>Controller() {
}

function <%= controllerMethod.toLowerCase() %>(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

<%= controllerName %>Controller.prototype = {
  <%= controllerMethod.toLowerCase() %>: <%= controllerMethod.toLowerCase() %>
};

var <%= controllerInstanceName %>Controller = new <%= controllerName %>Controller();

module.exports = <%= controllerInstanceName %>Controller;
