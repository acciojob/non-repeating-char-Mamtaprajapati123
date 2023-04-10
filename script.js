function findFirstNonRepeatedChar(str) {
  const charCounts = {};

  // count the frequency of each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
  }

  // find the first character with a frequency of 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCounts[char] === 1) {
      return char;
    }
  }

  // if no character has a frequency of 1, return null
  return null;
}

const input = prompt("Enter a string:");
const firstNonRepeatedChar = findFirstNonRepeatedChar(input);

if (firstNonRepeatedChar) {
  alert(`The first non-repeated character in "${input}" is "${firstNonRepeatedChar}".`);
} else {
  alert(`There is no non-repeated character in "${input}".`);
}