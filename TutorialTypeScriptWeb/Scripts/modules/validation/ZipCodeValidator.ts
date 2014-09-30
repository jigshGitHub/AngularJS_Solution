/// <reference path="..\validation\IStringValidator.ts" />
module validation {
    var numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidator implements IStringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
}