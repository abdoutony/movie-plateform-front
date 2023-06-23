import React, { useState, useRef } from "react";
import HomeLayout from "../components/layouts/home";
import { login } from "../services/auth.service";
export default function LoginPage() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const email = useRef("");
  const password = useRef("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email.current);
    console.log(password.current);
    login({ email: email.current, password: password.current });
  };
  return (
    <HomeLayout>
      <div className="container ">
        <div className="col-md-6 offset-md-3 mt-5">
          <div className="card  col">
            <h3 className="card-header p-4">Login to your account</h3>
            <div className="card-body p-4">
              <div className="form-group mt-3">
                <label htmlFor="email" className="control-label mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="enter your email"
                  onChange={(e) => (email.current = e.target.value)}
                />
                <span className="text-muted">{email.current}</span>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password" className="control-label mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="enter your password"
                  onChange={(e) => (password.current = e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <button
                  onClick={handleLogin}
                  className="btn btn-primary col-md-12"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
