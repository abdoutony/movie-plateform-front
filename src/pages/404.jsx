import React from "react";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div className="p-5 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="text-danger">404</h1>
        <h3 className="text-muted">Not found page</h3>
        <Link to="/" className="text-white">
          Go back to Home Page
        </Link>
      </div>
    </div>
  );
}
