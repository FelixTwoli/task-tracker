export const isLoggedIn = () => {
  const token = getToken();
  return !!token;
};

export const getUserSession = () => {
  return JSON.parse(localStorage.getItem("session") || "null");
};

export const getToken = () => {
  const session = getUserSession();
  return session ? session.access_token : "";
};

export const getUser = () => {
  const session = getUserSession();
  return session ? session.user : undefined;
};

export const AuthService = {
  isLoggedIn,
  getUserSession,
  getToken,
  getUser,
};
