import messagesEN from "./translations/en-US.json";
import messagesES from "./translations/es-ES.json";

export const locales = {
  ENGLISH: "en-US",
  SPANISH: "es-ES",
  CATALAN: "ca-ES"
};

export const languages = {
  [locales.ENGLISH]: {
    nativeName: "English",
    messages: messagesEN
  },
  [locales.SPANISH]: {
    nativeName: "Spanish",
    messages: messagesES
  }
};

export const messages = {
  [locales.ENGLISH]: messagesEN,
  [locales.SPANISH]: messagesES
};
