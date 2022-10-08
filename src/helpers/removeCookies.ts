export const removeCookies = () => {
  document.cookie
    .split(';')
    .forEach(
      value =>
        (document.cookie = value
          .replace(/^ +/, '')
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`))
    );
};
