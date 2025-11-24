import React, { type JSX } from "react";
import lightTheme from "../../theme/default-theme.json";

export type TypoVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "subtitle"
  | "body"
  | "label"
  | "labelSmall"
  | "buttonText";

const { typography } = lightTheme.Default;
const { h1, h2, h3, h4, subtitle, body, label, labelSmall, buttonText } =
  typography;

const typoStyles: Record<TypoVariant, React.CSSProperties> = {
  h1,
  h2,
  h3,
  h4,
  subtitle,
  body,
  label,
  labelSmall,
  buttonText,
};

export interface TypoProps {
  var: TypoVariant;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  onClick?: () => void;
}

const defaultTagMap: Record<TypoVariant, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  subtitle: "p",
  body: "p",
  label: "p",
  labelSmall: "p",
  buttonText: "span",
};

const Typo: React.FC<TypoProps> = ({
  var: variant,
  children,
  style,
  className,
  as,
  onClick,
  ...rest
}) => {
  const Component = as || defaultTagMap[variant];
  const isButton = Component === "button";

  const extraStyles: React.CSSProperties | undefined = isButton
    ? {
        color: "rgba(255,255,255,1)",
        backgroundColor: "rgba(79,70,229,1)",
        borderWidth: "0px",
        borderRadius: "0.5rem",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: 600,
        paddingInline: "1.5rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        marginBottom: "8px",
        marginTop: "4px",
        display: "flex",
        alignItems: "center",
        transitionProperty:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
        transitionDuration: ".15s",
      }
    : undefined;

  return (
    <Component
      className={className}
      {...(isButton && onClick ? { onClick } : {})}
      onMouseEnter={(e) => {
        if (isButton)
          (e.currentTarget as HTMLElement).style.backgroundColor =
            "rgba(79,70,229,1)";
      }}
      onMouseLeave={(e) => {
        if (isButton)
          (e.currentTarget as HTMLElement).style.backgroundColor =
            "rgba(79,70,229,1)";
      }}
      style={{ ...extraStyles, ...typoStyles[variant], ...style }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Typo;
