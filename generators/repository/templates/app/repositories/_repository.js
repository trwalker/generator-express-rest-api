
function <%= repositoryName %>Repository() {
}

function get<%= repositoryName %>Data(id) {
  return { id: id };
}

<%= repositoryName %>Repository.prototype = {
    get<%= repositoryName %>Data: get<%= repositoryName %>Data
};

var <%= repositoryInstanceName %>Repository = new <%= repositoryName %>Repository();

module.exports = <%= repositoryInstanceName %>Repository;
