import axios from "axios";
export const login = ({ email, password }) => {
  const baseUrl = "https://movie-plateform-api.onrender.com";
  // const baseUrl = "http://localhost:4500"
  axios
    .post(baseUrl + "/api/auth/login", { email, password })
    .then((res) => {
      if (res.status === 200) {
        const { token } = res.data;
        localStorage.setItem("token", JSON.stringify(token));
        window.location = "/movies";
      }
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
};

export const logout = () => {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
    window.location = "/login";
  }
};
