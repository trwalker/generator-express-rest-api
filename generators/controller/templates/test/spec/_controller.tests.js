
describe('<%= controllerName %>Controller Tests', function() {

  var <%= controllerName.toLowerCase() %>Controller;
  var req;
  var res;
  var next;

  beforeEach(function() {
    req = {};
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    var <%= controllerName %>Controller = require('../../../../lib/controllers/<%= controllerVersion %>/<%= controllerFolderPath %>/<%= controllerName.toLowerCase() %>controller');
    <%= controllerName.toLowerCase() %>Controller = new <%= controllerName %>Controller();
  });

  describe('<%= controllerMethod.toLowerCase() %>()', function() {

    it('is a function', function() {
      expect(<%= controllerName.toLowerCase() %>Controller.<%= controllerMethod.toLowerCase() %>).to.be.a('function');
    });

    it('should call res.status() one time', function() {
      <%= controllerName.toLowerCase() %>Controller.<%= controllerMethod.toLowerCase() %>(req, res, next);

      expect(res.status.callCount).to.equal(1);
    });

    it('should call res.status() with 200', function() {
        <%= controllerName.toLowerCase() %>Controller.<%= controllerMethod.toLowerCase() %>(req, res, next);

      expect(res.status.calledWith(200)).to.equal(true);
    });

  });
});
