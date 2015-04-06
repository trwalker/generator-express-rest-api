
describe('<%= repositoryClassName %>Repository Tests', function() {

  var <%= repositoryInstanceName %>Repository;

  beforeEach(function() {
    <%= repositoryInstanceName %>Repository = require('<%= repositoryRequirePathFromTest %>');
  });

  describe('get<%= repositoryClassName %>Data()', function() {

    it('should be a function', function(done) {
      expect(<%= repositoryInstanceName %>Repository.get<%= repositoryClassName %>Data).to.be.a('function');
      done();
    });

  });
});
