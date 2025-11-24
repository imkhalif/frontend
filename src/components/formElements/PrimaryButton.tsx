import React from "react";
import Typo from "../typography/typo";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  disabled = false,
  fullWidth,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        background: "#4f46e5",
        color: "#ffffff",
        border: "none",
        borderRadius: "10px",
        fontSize: "18px",
        fontWeight: 600,
        cursor: "pointer",
        opacity: disabled ? 0.6 : 1,
        width: fullWidth ? "100%" : "auto",
      }}
    >
      <Typo var={"buttonText"}>{text}</Typo>
    </button>
  );
};

export default PrimaryButton;
