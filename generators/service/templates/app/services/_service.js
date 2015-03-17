
function <%= serviceClassName %>Service() {
}

function lookup<%= serviceClassName %>(id) {
  return { id: id };
}

<%= serviceClassName %>Service.prototype = {
  lookup<%= serviceClassName %>: lookup<%= serviceClassName %>
};

var <%= serviceInstanceName %>Service = new <%= serviceClassName %>Service();

module.exports = <%= serviceInstanceName %>Service;
