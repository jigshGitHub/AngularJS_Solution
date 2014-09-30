/// <reference path="..\validation\IStringValidator.ts" />
/// <reference path="..\validation\LettersOnlyValidator.ts" />
/// <reference path="..\validation\ZipCodeValidator.ts" />
var validationCtl = (function () {
    function validationCtl($scope) {
        this.strings = ['Hello', '98052', '101'];
        // Validators to use
        this.validators = [];
        this.scope = $scope;
        this.validators[0] = new validation.ZipCodeValidator('Zip code');
        this.validators[1] = new validation.LettersOnlyValidator('Letters Only');
        this.scope.message = { title: "Click Validate" };
    }
    validationCtl.prototype.validate = function () {
        var _this = this;
        this.strings.forEach(function (s) {
            for (var index in _this.validators) {
                console.log('"' + s + '" ' + (_this.validators[index].isAcceptable(s) ? ' matches ' : ' does not match ') + _this.validators[index].name);
            }
            console.log('');
        });
    };
    return validationCtl;
})();
