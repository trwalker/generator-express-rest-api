
describe('<%= repositoryName %>Repository Tests', function() {

  var <%= repositoryInstanceName %>Repository;

  beforeEach(function() {
    <%= repositoryInstanceName %>Repository = require('<%= repositoryRequirePathFromTest %>');
  });

  describe('get<%= repositoryName %>Data()', function() {

    it('is a function', function() {
      expect(<%= repositoryInstanceName %>Repository.get<%= repositoryName %>Data).to.be.a('function');
    });

  });
});
