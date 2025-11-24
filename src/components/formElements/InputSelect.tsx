import React from "react";

interface FormSelectProps {
  label?: string;
  value: string;
  name: string;
  options: { value: string; label: string }[];

  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  inputRef?: React.Ref<any>;
  error?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  value,
  name,
  options,
  onChange,
  onBlur,
  inputRef,
  error,
}) => {
  return (
    <div style={{ marginBottom: "16px" }}>
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

      <select
        ref={inputRef}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          width: "100%",
          height: "42px",
          padding: "0.5rem 1rem",
          border: `1px solid ${error ? "#ef4444" : "rgb(209 213 219)"}`,
          borderRadius: "0.5rem",
          fontSize: "1rem",
        }}
      >
        <option value="">Select...</option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && (
        <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "4px" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default FormSelect;
