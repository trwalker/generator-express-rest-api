
describe('<%= serviceClassName %>Service Tests', function() {

  var <%= serviceInstanceName %>Service;

  beforeEach(function() {
    <%= serviceInstanceName %>Service = require('<%= serviceRequirePathFromTest %>');
  });

  describe('lookup<%= serviceClassName %>', function() {

    it('should be a function', function(done) {
      expect(<%= serviceInstanceName %>Service.lookup<%= serviceClassName %>).to.be.a('function');
      done();
    });

  });
});
