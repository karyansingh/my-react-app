import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userId = localStorage.getItem("selectedUserId");

  useEffect(() => {
    if (!userId) {
      navigate("/");
      return;
    }
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [userId, navigate]);

  return (
    <div className="container">
      <h2>User Details</h2>
      {loading ? <p className="spinner">Loading...</p> : (
        <>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Address:</strong> {userDetails.address.suite}, {userDetails.address.street}, {userDetails.address.city}, {userDetails.address.zipcode}</p>
          <p><strong>Company:</strong> {userDetails.company.name}</p>
          <button onClick={() => navigate("/")}>Back</button>
          <button onClick={() => navigate("/note")}>Next</button>
        </>
      )}
    </div>
  );
};

export default SecondPage;
