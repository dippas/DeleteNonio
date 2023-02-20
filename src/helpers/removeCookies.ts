export const removeCookies = () =>
  document.cookie
    ?.split(';')
    ?.forEach(
      cookie =>
        (document.cookie = cookie
          .replace(/^ +/, '')
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`))
    );
