// TextAnswer.tsx
import React, { useState } from "react";

interface Props {
  onSave: (text: string) => void;
}

export default function TextAnswer({ onSave }: Props) {
  const [value, setValue] = useState("");

  return (
    <div>
      <textarea
        rows={4}
        value={value}
        style={{ width: "100%", padding: 10 }}
        placeholder="Type your answer..."
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={() => onSave(value)}
        style={{ marginTop: 10, padding: "8px 16px" }}
      >
        Save Answer
      </button>
    </div>
  );
}
