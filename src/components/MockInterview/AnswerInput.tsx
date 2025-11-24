import React, { useState } from "react";

interface AnswerProps {
  onSubmit: (answer: string) => void;
}

const AnswerInput: React.FC<AnswerProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") return;
    onSubmit(text);
    setText("");
  };

  return (
    <div style={{ marginTop: 20 }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your answer..."
        rows={4}
        style={{ width: "100%", padding: 10 }}
      />

      <button
        onClick={handleSubmit}
        style={{
          marginTop: 10,
          padding: "10px 20px",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AnswerInput;
