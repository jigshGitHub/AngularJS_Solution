/// <reference path="..\validation\IStringValidator.ts" />
/// <reference path="..\validation\LettersOnlyValidator.ts" />
/// <reference path="..\validation\ZipCodeValidator.ts" />


class validationCtl {
    scope: ITutorialScope;
    strings = ['Hello', '98052', '101'];
    // Validators to use
    validators: validation.IStringValidator[] = [];
    message: ITutorialMessage;
    constructor($scope: ITutorialScope) {
        this.scope = $scope;
        this.validators[0] = new validation.ZipCodeValidator('Zip code');
        this.validators[1] = new validation.LettersOnlyValidator('Letters Only');
        this.scope.message = { title: "Click Validate" };
    
    }
    
    validate () {
        this.strings.forEach(s => {
            for (var index in this.validators) {
                console.log('"' + s + '" ' + (this.validators[index].isAcceptable(s) ? ' matches ' : ' does not match ') + this.validators[index].name);
            }
            console.log('');
        });
    }
}



