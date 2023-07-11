function isColorWord(word) {
  const colorWords = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray']
  return colorWords.includes(textColor.toLowerCase());
}

function isColorCode(code) {
    const codesRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/; // copilot pulled this Regex out of the void as I was typing... checked its function and it is sound. Was terminator 2 a documentary?
    return codesRegex.test(code);
}

function colorValidator(input)
{
    if (isColorWord(word) || isColorCode(code)) { // if either is truthy
        return true;
    } else {
        return false;
    }
}

module.exports = colorValidator;