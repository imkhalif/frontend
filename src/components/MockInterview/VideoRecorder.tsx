// VideoRecorder.tsx
import { ReactMediaRecorder } from "react-media-recorder";

interface Props {
  onSave: (url: string) => void;
}

export default function VideoRecorder({ onSave }: Props) {
  return (
    <ReactMediaRecorder
      video
      audio
      onStop={onSave}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>Status: {status}</p>
          <video src={mediaBlobUrl || ""} controls style={{ width: "100%" }} />

          <button onClick={startRecording}>Start</button>
          <button onClick={stopRecording}>Stop</button>
        </div>
      )}
    />
  );
}
