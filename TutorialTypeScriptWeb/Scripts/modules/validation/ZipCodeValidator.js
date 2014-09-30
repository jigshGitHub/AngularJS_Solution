/// <reference path="..\validation\IStringValidator.ts" />
var validation;
(function (validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator(name) {
            this.name = name;
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    })();
    validation.ZipCodeValidator = ZipCodeValidator;
})(validation || (validation = {}));
