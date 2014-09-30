 module validation {
     export interface IStringValidator {
         isAcceptable(s: string): boolean;
         name: string;
     }
         
}