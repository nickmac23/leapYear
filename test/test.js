var code = require('../main');
var expect = require('chai').expect;

describe('leapYear',function(){
  it('should check for leap years', function () {
  expect(code.leapYear(2016)).to.equal(true);
  });
});
