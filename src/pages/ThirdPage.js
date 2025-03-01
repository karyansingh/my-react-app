import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ThirdPage = () => {
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFinish = () => {
    if (!note.trim()) {
      setError("Note cannot be empty");
      return;
    }
    localStorage.setItem("userNote", note);
    navigate("/summary");
  };

  return (
    <div>
      <h2>Enter a Note</h2>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={() => navigate("/details")}>Back</button>
      <button onClick={handleFinish}>Finish</button>
    </div>
  );
};

export default ThirdPage;
