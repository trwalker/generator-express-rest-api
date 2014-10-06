
describe('<%= serviceName %>Service Tests', function() {

  var <%= serviceInstanceName %>Service;

  beforeEach(function() {
    <%= serviceInstanceName %>Service = require('<%= serviceRequirePathFromTest %>');
  });

  describe('get<%= serviceName %>()', function() {

    it('is a function', function() {
      expect(<%= serviceInstanceName %>Service.get<%= serviceName %>).to.be.a('function');
    });

  });
});
