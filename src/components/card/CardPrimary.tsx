import React from "react";
import { Paper } from "@mui/material";

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
}

const CardPrimary: React.FC<CardProps> = ({
  children,
  onClick,
  bgColor = "rgba(255, 255, 255, 1)",
  textColor = "rgba(31, 41, 55,1)",
}) => {
  return (
    <div
      style={{
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        marginBottom: "10px",
        cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          minHeight: 150,
          borderRadius: 3,
          border: "1px solid #E5E7EB",
          background: bgColor,
          color: textColor,
        }}
      >
        {children}
      </Paper>
    </div>
  );
};

export default CardPrimary;
