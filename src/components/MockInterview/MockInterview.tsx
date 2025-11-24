// MockInterview.tsx
import React, { useState } from "react";
import { questions } from "./questions";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";
import AnswerModeSelector, { type AnswerMode } from "./AnswerModeSelector";
import VideoRecorder from "./VideoRecorder";
import AudioRecorder from "./AudioRecorder";
import TextAnswer from "./TextAnswer";

export default function MockInterview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState<AnswerMode>("text");

  const answers = React.useRef<{ [id: number]: any }>({});

  const saveAnswer = (data: any) => {
    answers.current[questions[currentIndex].id] = {
      mode,
      answer: data,
    };
    console.log("Saved:", answers.current);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((p) => p + 1);
      setMode("text");
    } else {
      alert("Interview Finished!");
      console.log("Final Answers:", answers.current);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <QuestionCard question={questions[currentIndex].question} />

      <AnswerModeSelector mode={mode} onChange={setMode} />

      {mode === "video" && <VideoRecorder onSave={saveAnswer} />}
      {mode === "voice" && <AudioRecorder onSave={saveAnswer} />}
      {mode === "text" && <TextAnswer onSave={saveAnswer} />}

      <button onClick={nextQuestion} style={{ marginTop: 20 }}>
        Next Question
      </button>
    </div>
  );
}
