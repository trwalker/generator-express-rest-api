'use strict';

var <%= controllerName %>Controller = function() {
};

var <%= controllerMethod.toLowerCase() %> = function(req, res, next) {
  res.status(200).json({ hello: 'world' });
};

<%= controllerName %>Controller.prototype = {
  <%= controllerMethod.toLowerCase() %>: <%= controllerMethod.toLowerCase() %>
};

module.exports = <%= controllerName %>Controller;
