'use strict'

/**
 * Checks if a string starts with the compare string.
 *
 * @usage if (examples.startsWith('hello world', 'hel')) {...}
 * @param s The string which is being checked
 * @param compareString The compare string
 * @return true, if the string <code>s</code> starts with the string <code>compareString</code>.
 */
exports.startsWith = function (s, compareString) {
  return s.lastIndexOf(compareString) === 0
}

/**
 * Checks if a string ends with the compare string.
 *
 * @usage if (examples.endsWith('hello world', 'hel')) {...}
 * @param s The string which is being checked
 * @param compareString The compare string
 * @return true, if the string <code>s</code> ends with the string <code>compareString</code>.
 */
exports.endsWith = function (s, compareString) {
  return s.lastIndexOf(compareString) === s.length - compareString.length
}

/**
 * Checks, if s starts with at least one of the compare strings
 *
 * @usage if (examples.mStartsWith('hello world','hal','hel','hello')) {...}
 * @param s The string wich is being checked
 * @param compareString A variable list of compare strings
 * @return true, if the string starts with at least one of the compare strings
 */
exports.mStartsWith = function (s, ...compare) {
  return compare.some(exports.startsWith.bind(null, s))
}

/**
 * Returns a string where every occurrence of toReplace is being replaced by replaceBy.
 *
 * @usage console.log(examples.replace('hello world', 'o', 'xx')) // outputs 'hellxx wxxrld'
 * @param s The string
 * @param toReplace Substring to be replaced. If <code>toReplace</code> is the empty string, <code>replaceBy</code> is inserted after every character.
 * @param replaceBy The replacement string
 * @return the string with the replacements done
 */
exports.replace = function (s, toReplace, replaceBy) {
  return s.replace(RegExp(toReplace, 'gm'), replaceBy)
}

/**
 * Returns a string where all occurruences of the compare strings in the variable parameter list
 * are replaced by the last string in the parameter list.
 *
 * @usage console.log(examples.mReplace('hello world','o','l','xx')) // outputs 'hexxxxxx wxxrxxd'
 * @param x the string
 * @param variable parameter list of n strings
 * @param strings 1 to (n-1): all strings to be replaced
 * @param string n: replacement string
 * @return
 */
exports.mReplace = function (x, ...toReplace) {
  var replaceBy = toReplace.pop()
  return toReplace.reduce((result, arg) => exports.replace(result, arg, replaceBy), x)
}

/**
 * Returns the number of occurences of compareString in this.
 *
 * @usage console.log(examples.numberOf('hello world','l')) // outputs 3
 * @param s The string
 * @param compareString The string whose occurrence has to be counted
 * @return the number of occurences of compareString in this.
 */
exports.numberOf = function (s, compareString, offset, count) {
  var count = 0
  var match = s.search(compareString)
  while(~match) {
    count++
    s = s.split('').splice(match + compareString.length, s.length).join('')
    match = s.search(compareString)
  }
  return count
}

/**
 * Make a string's first character uppercase
 *
 * @usage examples.toUpperCaseFirst(myString)
 * @param x the string
 * @return the converted string
 */
exports.toUpperCaseFirst = function (s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 * Creates a full name, thus appends lastname to firstname
 *
 * @usage createName('Andreas')('Hofer') // outputs Andreas Hofer
 * @param name string
 * @return string The fullname separated with ' '
 */
exports.createName = function createName(firstname) {
  return function(lastname) {
    return firstname + ' ' + lastname
  }
}

/**
 * Removes empty values from an array (null and undefined values). Doesn't create a new array.
 *
 * @usage cleanArray(['1', '2', '2', null, undefined, 4, 5. undefined]) //cleans the array ['1', '2', '2', 4, 5]
 * @param array
 */
exports.cleanArray = function(array) {
  return array.filter(e => e != null)
}
