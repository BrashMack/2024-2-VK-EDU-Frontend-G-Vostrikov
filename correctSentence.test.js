import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("greetings, friends.")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
  expect(correctSentence("g")).toBe("G.")
  expect(correctSentence("G.")).toBe("G.")
  expect(correctSentence("a!%@")).toBe("A!%@.")
})

test('returns error message for non-string data', () => {
  expect(correctSentence(52)).toBe("It's not a string!")
  expect(correctSentence(true)).toBe("It's not a string!")
  expect(correctSentence({})).toBe("It's not a string!")
})

test('returns error message for bad string', () => {
  expect(correctSentence("")).toBe("Bad string!")
  expect(correctSentence("#hello.")).toBe("Bad string!")
})