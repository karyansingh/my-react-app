import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = () => {
    if (selectedUser) {
      localStorage.setItem("selectedUserId", selectedUser);
      navigate("/details");
    }
  };

  return (
    <div className="container">
      <h2>Select a User</h2>
      {loading ? <p className="spinner">Loading...</p> : (
        <>
          <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
            <option value="">Select a User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          <button onClick={handleSubmit} disabled={!selectedUser}>Next</button>
        </>
      )}
    </div>
  );
};

export default FirstPage;
