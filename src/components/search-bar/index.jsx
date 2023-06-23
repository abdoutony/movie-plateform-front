import React from "react";

export default function SearchBar() {
  return (
    <input
      type="text"
      className="form-control search-input"
      style={{
        padding: "10px",
      }}
      placeholder="type anything !!"
    />
  );
}
