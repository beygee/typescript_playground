namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean
  }

  const numberRegexp = /^[0-9]+$/
  const lettersRegexp = /^[A-Za-z]+$/

  export class LettersOnlyValidatior implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s)
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s)
    }
  }
}

let strings = ["Hello", "98052", "101"]

let validators: { [s: string]: Validation.StringValidator } = {}
validators["ZIP Code"] = new Validation.ZipCodeValidator()
validators["Letters only"] = new Validation.LettersOnlyValidatior()

for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    )
  }
}
