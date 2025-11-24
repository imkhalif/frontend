import { Box } from "@mui/material";
import Typo from "../typography/typo";

const StatusChip = ({ label }: { label: string }) => {
  const styles =
    label === "Completed"
      ? { bg: "#E7F7EC", color: "#2F8A4A" }
      : label === "Pending"
      ? { bg: "#FFF7D8", color: "#A9791C" }
      : { bg: "#eee", color: "#444" };

  return (
    <Box
      sx={{
        px: 2,
        py: "4px",
        borderRadius: "20px",
        fontWeight: 600,
        fontSize: "14px",
        display: "inline-block",
        backgroundColor: styles.bg,
        color: styles.color,
      }}
    >
      <Typo var="labelSmall">{label}</Typo>
    </Box>
  );
};

export default StatusChip;
