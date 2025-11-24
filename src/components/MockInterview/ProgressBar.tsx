interface ProgressProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressProps> = ({ current, total }) => {
  const percent = (current / total) * 100;

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontWeight: "bold" }}>
        Question {current} of {total}
      </div>

      <div
        style={{
          height: 8,
          background: "#eee",
          borderRadius: 4,
          marginTop: 8,
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            background: "#4f46e5",
            height: "100%",
            borderRadius: 4,
            transition: "0.3s",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
