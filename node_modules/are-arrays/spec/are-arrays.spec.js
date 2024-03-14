const areArrays = require('../');

describe('Main test', function () {
    it('Primitive numbers', function () {
        expect(areArrays(12, 1e-5, -2)).toBeFalsy();
    });

    it('Primiive strings', function () {
        expect(areArrays('foo', 'bar')).toBeFalsy();
    });

    it('Arrays', function () {
        expect(areArrays([], [{}, null])).toBeTruthy();
    });

    it('Objects', function () {
        expect(areArrays({bar: []}, {foo: null})).toBeFalsy();
    });
});
