import React from "react";
import { useNavigate } from "react-router-dom";

const SummaryPage = () => {
  const userId = localStorage.getItem("selectedUserId");
  const note = localStorage.getItem("userNote");
  const navigate = useNavigate();

  return (
    <div>
      <h2>Summary</h2>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>Note:</strong> {note}</p>
      <button onClick={() => navigate("/")}>Start Over</button>
    </div>
  );
};

export default SummaryPage;
