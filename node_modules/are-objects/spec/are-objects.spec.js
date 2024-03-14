const areObjects = require('../');

describe('Main test', function () {
    it('Multiple arrays', function () {
        expect(areObjects([1, null], [true, ''], [1, 3])).toBeTruthy();
    });

    it('Primitive strings', function () {
        expect(areObjects('foo', 'bar')).toBeFalsy();
    });

    it('Primitive numbers', function () {
        expect(areObjects(12.33, 2e-4, 123)).toBeFalsy();
    });

    it('Objects', function () {
        expect(areObjects(Object(), {}, [], { foo: function(){} })).toBeTruthy();
    });

    it('Functions', function () {
        expect(areObjects(function(){}, function(){})).toBeFalsy();
    });

    it('Primitives values', function () {
        expect(areObjects(null, Number.NaN, false, Boolean('0'))).toBeFalsy();
    });
});
