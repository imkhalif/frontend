import React from "react";
import type { SvgIconProps } from "@mui/material/SvgIcon";

interface IconProps {
  bgColor?: string;
  iconColor?: string;
  icon: React.ReactElement<SvgIconProps>;
  bgSize?: string;
  iconSize?: string;
}

const IconWithBG: React.FC<IconProps> = ({
  bgColor,
  iconColor,
  icon,
  bgSize = "3rem",
  iconSize = "1.5rem",
}) => {
  if (!React.isValidElement(icon)) return null;

  const styledIcon = React.cloneElement(icon, {
    sx: {
      ...(icon.props.sx || {}),
      color: iconColor,
      width: iconSize,
      height: iconSize,
    },
  });

  return (
    <div
      style={{
        width: bgSize,
        height: bgSize,
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: ".5rem",
      }}
    >
      {styledIcon}
    </div>
  );
};

export default IconWithBG;
