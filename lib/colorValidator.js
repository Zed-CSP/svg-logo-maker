function isColorWord(word) {
  const colorWords = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray']
  return colorWords.includes(keyword.toLowerCase());
}

function colorValidator(input)
{
    if (isColorWord(input)) {
        return true;
    } else {
        return false;
    }
}