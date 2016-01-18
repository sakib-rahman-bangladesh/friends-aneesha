var expect = require('chai').expect;
var friends = require('./index');

describe('firends-anneesha', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(friends.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
           return typeof item === 'string';
        });
      }
    });
    it('should contain `bandhan`', function() {
      expect(friends.all).to.include('Bandhan');
    });
  });
  describe('random', function() {
    it('should return a random item from the starWars.all', function() {
      var randomItem = friends.random();
      expect(friends.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = friends.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.map(function(item) {
        expect(friends.all).to.include(item);
      });
    });
  });
});