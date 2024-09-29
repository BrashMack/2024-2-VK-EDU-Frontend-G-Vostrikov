/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

export default function correctSentence(text) {
  if (typeof (text) !== 'string') return "It's not a string!"
  if (text === '' || !/[a-zA-Z]/.test(text[0])) return "Bad string!"
  const firstLetter = text[0].toUpperCase();
  const restOfText = text.slice(1);
  const hasPeriod = text[text.length - 1] === '.';
  return `${firstLetter}${restOfText}${hasPeriod ? '' : '.'}`;
}
