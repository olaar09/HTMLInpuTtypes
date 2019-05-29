"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe('HTML input types test', function () {
    it('should be defined ', function () {
        expect(index_1.default).toBeDefined();
    });
    it('lenght should be the hardcoded length ', function () {
        expect(Object.keys(index_1.default).length).toBe(index_1.HTMLInputTypesLength);
    });
});
