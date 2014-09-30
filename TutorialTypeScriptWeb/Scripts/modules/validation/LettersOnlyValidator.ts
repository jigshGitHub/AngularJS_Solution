/// <reference path="..\validation\IStringValidator.ts" />
module validation {
    var lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements IStringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
}