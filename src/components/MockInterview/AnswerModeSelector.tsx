// AnswerModeSelector.tsx
import React from "react";

export type AnswerMode = "video" | "voice" | "text";

interface Props {
  mode: AnswerMode;
  onChange: (m: AnswerMode) => void;
}

export default function AnswerModeSelector({ mode, onChange }: Props) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
      <button
        onClick={() => onChange("video")}
        style={{
          padding: "8px 16px",
          background: mode === "video" ? "#4338ca" : "#e5e7eb",
          color: mode === "video" ? "white" : "black",
        }}
      >
        Video
      </button>

      <button
        onClick={() => onChange("voice")}
        style={{
          padding: "8px 16px",
          background: mode === "voice" ? "#4338ca" : "#e5e7eb",
          color: mode === "voice" ? "white" : "black",
        }}
      >
        Voice
      </button>

      <button
        onClick={() => onChange("text")}
        style={{
          padding: "8px 16px",
          background: mode === "text" ? "#4338ca" : "#e5e7eb",
          color: mode === "text" ? "white" : "black",
        }}
      >
        Text
      </button>
    </div>
  );
}
