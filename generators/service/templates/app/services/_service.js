
function <%= serviceName %>Service() {
}

function get<%= serviceName %>(id) {
  return { id: id };
}

<%= serviceName %>Service.prototype = {
    get<%= serviceName %>: get<%= serviceName %>
};

var <%= serviceInstanceName %>Service = new <%= serviceName %>Service();

module.exports = <%= serviceInstanceName %>Service;
