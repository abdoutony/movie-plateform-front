import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
export default function PrivateRoute({ children }) {
  const [child, setChild] = useState();

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  } else {
    // verify the token

    const token = JSON.parse(localStorage.getItem("token"));
    const options = {
      // url: "http://localhost:4500/api/auth/verify-login",
      url: "https://movie-plateform-api.onrender.com/api/auth/verify-login",
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: token,
      },
    };
    axios(options)
      .then((res) => {
        if (res.status === 200) {
          return setChild(children);
        } else {
          return <Navigate to="/login" />;
        }
      })
      .catch((error) => {
        console.log(error.message);
        window.location = "/login";
      });
  }

  return child;
}
