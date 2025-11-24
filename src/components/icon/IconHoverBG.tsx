import React from "react";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import { Box } from "@mui/material";

interface IconProps {
  bgColor?: string;
  iconColor?: string;
  icon: React.ReactElement<SvgIconProps>;
  active?: boolean;
}

const IconHoverBG: React.FC<IconProps> = ({
  bgColor = "rgba(243, 244, 246, 1)",
  iconColor = "rgba(75, 85, 99, 1)",
  icon,
  active,
}) => {
  if (!React.isValidElement(icon)) return null;

  const styledIcon = React.cloneElement(icon, {
    sx: {
      ...(icon.props.sx || {}),
      color: iconColor,
      width: "1.5rem",
      height: "1.5rem",
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: ".5rem",
        padding: ".5rem",
        position: "relative",
        "&:hover": {
          backgroundColor: bgColor,
          cursor: "pointer",
        },
      }}
    >
      {active && (
        <div
          style={{
            background: "red",
            width: "8px",
            height: "8px",
            borderRadius: "8px",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        />
      )}
      {styledIcon}
    </Box>
  );
};

export default IconHoverBG;
