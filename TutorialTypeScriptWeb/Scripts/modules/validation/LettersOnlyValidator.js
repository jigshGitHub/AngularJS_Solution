/// <reference path="..\validation\IStringValidator.ts" />
var validation;
(function (validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator(name) {
            this.name = name;
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    })();
    validation.LettersOnlyValidator = LettersOnlyValidator;
})(validation || (validation = {}));
