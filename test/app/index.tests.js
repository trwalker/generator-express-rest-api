
describe('App Generator Tests', function() {

  var appGenerator;

  beforeEach(function() {
    appGenerator = require('../../generators/app/index');
  });

  describe('generator', function() {

    it('should be defined', function(done) {
      expect(appGenerator).to.exist;

      done();
    });

  });
});
