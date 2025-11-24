// AudioRecorder.tsx
import { ReactMediaRecorder } from "react-media-recorder";

interface Props {
  onSave: (url: string) => void;
}

export default function AudioRecorder({ onSave }: Props) {
  return (
    <ReactMediaRecorder
      audio
      onStop={onSave}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>Status: {status}</p>
          <audio src={mediaBlobUrl || ""} controls />

          <button onClick={startRecording}>Start</button>
          <button onClick={stopRecording}>Stop</button>
        </div>
      )}
    />
  );
}
