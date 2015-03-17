
describe('<%= controllerClassName %>Controller Tests', function() {

  var <%= controllerInstanceName %>Controller;
  var req;
  var res;
  var next;

  beforeEach(function() {
    req = {};
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    <%= controllerInstanceName %>Controller = require('<%= controllerRequirePathFromTest %>');
  });

  describe('<%= controllerMethod.toLowerCase() %>()', function() {

    it('is a function', function(done) {
      expect(<%= controllerInstanceName %>Controller.<%= controllerMethod.toLowerCase() %>).to.be.a('function');
      done();
    });

    it('should call res.status() one time', function(done) {
      <%= controllerInstanceName %>Controller.<%= controllerMethod.toLowerCase() %>(req, res, next);

      expect(res.status.callCount).to.equal(1);
      done();
    });

    it('should call res.status() with 200', function(done) {
        <%= controllerInstanceName %>Controller.<%= controllerMethod.toLowerCase() %>(req, res, next);

      expect(res.status.calledWith(200)).to.equal(true);
      done();
    });

  });
});
