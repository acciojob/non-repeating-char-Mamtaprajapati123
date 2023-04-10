//your JS code here. If required.
function findFirstNonRepeatingCharacter(str) {
  // Create an empty object to store character frequency
  const frequency = {};

  // Loop through each character in the string and increment its frequency count
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
  }

  // Loop through the string again and return the first character with a frequency count of 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (frequency[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Prompt the user for input
const input = prompt("Enter a string:");

// Call the function and display the result
const result = findFirstNonRepeatingCharacter(input);
alert(result);