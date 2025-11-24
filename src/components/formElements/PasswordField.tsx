import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface PasswordInputProps {
  label?: string;
  value: string;
  name: string;
  placeholder?: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  inputRef?: React.Ref<any>;
  error?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  name,
  placeholder,
  onChange,
  onBlur,
  inputRef,
  error,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ marginBottom: "16px", position: "relative" }}>
      {label && (
        <label
          htmlFor={name}
          style={{
            display: "block",
            fontSize: "16px",
            fontWeight: 500,
            marginBottom: "5px",
          }}
        >
          {label}
        </label>
      )}

      <div style={{ position: "relative" }}>
        <input
          ref={inputRef}
          type={show ? "text" : "password"}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          style={{
            width: "100%",
            height: "42px",
            paddingLeft: "1rem",
            paddingRight: "2.5rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            border: `1px solid ${error ? "#ef4444" : "rgb(209 213 219)"}`,
            borderRadius: "0.5rem",
            fontSize: "1rem",
          }}
        />

        {/* Eye toggle button */}
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {show ? (
            <VisibilityOffIcon sx={{ fontSize: 22, color: "#6b7280" }} />
          ) : (
            <VisibilityIcon sx={{ fontSize: 22, color: "#6b7280" }} />
          )}
        </button>
      </div>

      {error && (
        <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "4px" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
