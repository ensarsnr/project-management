import api from "../api";

const login = async (username, password) => {
  try {
    const response = await api.post("/auth/login", {
      username: username,
      password: password,
    });
    return response;
  } catch (error) {
    console.error("Login error: ", error);
  }
};

export default login;
