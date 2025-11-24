import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface FormInputProps {
  label?: string;
  value: string;
  name: string;
  type?: string;
  icon?: boolean;
  placeholder?: string;

  // RHF props
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  inputRef?: React.Ref<any>;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  name,
  type = "text",
  icon,
  placeholder,
  onChange,
  onBlur,
  inputRef,
  error,
}) => {
  return (
    <div style={icon ? { position: "relative" } : { marginBottom: "16px" }}>
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

      {icon && (
        <div
          style={{
            position: "absolute",
            top: "13px",
            left: "13px",
          }}
        >
          <SearchIcon sx={{ fontSize: "18px", color: "#9ca3af" }} />
        </div>
      )}

      <input
        ref={inputRef}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          width: "100%",
          height: "42px",
          paddingLeft: icon ? "2.5rem" : "1rem",
          paddingRight: "1rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          border: `1px solid ${error ? "#ef4444" : "rgb(209 213 219)"}`,
          borderRadius: "0.5rem",
          fontSize: "1rem",
        }}
      />

      {error && (
        <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "4px" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
