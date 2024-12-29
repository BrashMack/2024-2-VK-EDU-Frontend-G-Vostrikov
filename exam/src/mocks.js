const translations = [
  {
    "originLang": "Russian",
    "finalLang": "English",
    "originText": "Привет мир!",
    "finalText": "Hello world!",
  },
  {
    "originLang": "English",
    "finalLang": "Russian",
    "originText": "What is your name?",
    "finalText": "Как тебя зовут?",
  },
  {
    "originLang": "Russian",
    "finalLang": "Deutsch",
    "originText": "Ты говоришь по немецки?",
    "finalText": "Sprichst du Deutsch?",
  },
  {
    "originLang": "Russian",
    "finalLang": "English",
    "originText": "Привет мир!",
    "finalText": "Hello world!",
  },
  {
    "originLang": "English",
    "finalLang": "Russian",
    "originText": "What is your name?",
    "finalText": "Как тебя зовут?",
  },
  {
    "originLang": "Russian",
    "finalLang": "Deutsch",
    "originText": "Ты говоришь по немецки?",
    "finalText": "Sprichst du Deutsch?",
  },
  {
    "originLang": "Russian",
    "finalLang": "English",
    "originText": "Привет мир!",
    "finalText": "Hello world!",
  },
  {
    "originLang": "English",
    "finalLang": "Russian",
    "originText": "What is your name?",
    "finalText": "Как тебя зовут?",
  },
  {
    "originLang": "Russian",
    "finalLang": "Deutsch",
    "originText": "Ты говоришь по немецки?",
    "finalText": "Sprichst du Deutsch?",
  }
];

export const loadMockHistory = () => {
  let recordNumber = 0;
  translations.forEach((currentRecord) => {
      ++recordNumber;
      localStorage.setItem(`translation${recordNumber}`, JSON.stringify(currentRecord));
  });
};