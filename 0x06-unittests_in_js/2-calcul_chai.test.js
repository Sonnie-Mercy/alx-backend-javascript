import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
      expect(calculateNumber('SUM', 1.2, 2.8)).to.equal(4);
      expect(calculateNumber('SUM', -1.2, 2.8)).to.equal(2);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 2.6)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', 2.8, 1.2)).to.equal(2);
      expect(calculateNumber('SUBTRACT', -1.2, 2.8)).to.equal(-4);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 4.6, 1.4)).to.equal(5);
      expect(calculateNumber('DIVIDE', 7.2, 2.8)).to.equal(2.5);
    });

    it('should return "Error" if dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should return null for an invalid type', () => {
      expect(calculateNumber('MULTIPLY', 1.4, 2.6)).to.be.null;
    });
  });
});
