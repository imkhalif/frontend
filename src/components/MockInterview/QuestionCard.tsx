interface QuestionCardProps {
  question: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  return (
    <div style={{ padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>{question}</h2>
    </div>
  );
};

export default QuestionCard;
