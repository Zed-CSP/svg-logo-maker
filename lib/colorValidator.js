function isColorWord(word) {
  const colorWords = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray']
  return colorWords.includes(textColor.toLowerCase());
}

function isColorCode(code) {
    const codesRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/; // copilot pulled this Regex out of the void as I was typing... deconstructed and checked its function, the logic is sound. Was terminator 2 a documentary?
    return codesRegex.test(code);
}

function colorValidator(input) {
    return isColorWord(word) || isColorCode(code) // return true if either function returns true otherwise return false
}

module.exports = colorValidator;