
describe('HomeController Tests', function() {

  var homeController;
  var req;
  var res;
  var next;

  beforeEach(function() {
    req = {};
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    homeController = require('../../../../app/controllers/v1/homecontroller');
  });

  describe('get()', function() {

    it('is a function', function() {
      expect(homeController.get).to.be.a('function');
    });

    it('should call res.status() one time', function() {
      homeController.get(req, res, next);

      expect(res.status.callCount).to.equal(1);
    });

    it('should call res.status() with 200', function() {
      homeController.get(req, res, next);

      expect(res.status.calledWith(200)).to.equal(true);
    });

  });
});
