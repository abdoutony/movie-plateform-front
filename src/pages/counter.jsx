import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
export default function CounterPage() {
  const [counter, setCounter] = useState(0);
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   //fetch data from backend
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const handleIncrement = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    // console.log(counter);
  };
  return (
    <div className="container bg-white p-5">
      <h1 className="counter-value">{counter}</h1>
      <button className="btn btn-primary" onClick={handleIncrement}>
        Increment
      </button>
      <h1>User List</h1>
      {error && !loading && !data && <h1>Error</h1>}
      {!error && loading && <h1>Loading ...</h1>}
      {!loading && data && data.length > 0
        ? data.map((user) => {
            return (
              <div key={user.id} className="card">
                <div className="card-body">
                  <h3 className="card-title">{user.name}</h3>
                </div>
              </div>
            );
          })
        : "No users to show"}
    </div>
  );
}
