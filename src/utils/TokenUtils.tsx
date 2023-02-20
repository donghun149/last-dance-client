const TOKEN_KEY_NAME = 'token'

const setTokenToLocalStorage = (token: string) => {
  localStorage.setItem(TOKEN_KEY_NAME, token)
}

const getTokenFromLocalStorage = () => {
  return localStorage.getItem(TOKEN_KEY_NAME)
}

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem(TOKEN_KEY_NAME)
}

const getTokenExpirationDate = (token: string) => {
  const base64Url = token.split('.')[1];
  if (!base64Url) {
    return null;
  }

  const payload = JSON.parse(atob(base64Url.replace(/-/g, '+').replace(/_/g, '/')));
  return new Date(payload.exp * 1000);
}

const isTokenExpired = (token: string): boolean => {
  const expirationDate = getTokenExpirationDate(token);
  if (!expirationDate) {
    return true;
  }
  return expirationDate <= new Date();
};

export {
  setTokenToLocalStorage,
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  isTokenExpired
}