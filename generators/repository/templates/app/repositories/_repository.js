
function <%= repositoryClassName %>Repository() {
}

function get<%= repositoryClassName %>Data(id) {
  return { id: id };
}

<%= repositoryClassName %>Repository.prototype = {
    get<%= repositoryClassName %>Data: get<%= repositoryClassName %>Data
};

var <%= repositoryInstanceName %>Repository = new <%= repositoryClassName %>Repository();

module.exports = <%= repositoryInstanceName %>Repository;
