// InterviewerVideo.tsx
interface InterviewerVideoProps {
  videoUrl: string;
}

export default function InterviewerVideo({ videoUrl }: InterviewerVideoProps) {
  return (
    <video
      src={videoUrl}
      autoPlay
      loop
      muted
      style={{ width: "100%", borderRadius: 8 }}
    />
  );
}
