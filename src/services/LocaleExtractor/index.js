export const getAvailableLocales = () => {
  if (navigator.languages) {
    return navigator.languages;
  } else if (navigator.language) {
    return [navigator.language];
  }
};

export const getUserLocaleIfHandled = (handledLocales) => {
  const localeList = getAvailableLocales();
  let res = null;

  localeList.forEach((l) => {
    if (handledLocales.includes(l)) {
      res = l;
      return;
    }
  });

  if (res) return res;

  localeList.forEach((l) => {
    if (checkIfHandled(l, handledLocales)) {
      res = l;
      return;
    }
  });
  return res;
};

export const checkIfHandled = (locale, handledLocales) => {
  let res = false;

  handledLocales.forEach((l) => {
    const lang = l.split("-")[0];
    if (locale === "l" || locale === lang) {
      res = true;
      return;
    }
  });
  return res;
};
