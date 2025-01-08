"use client";

import { useFormContext } from "react-hook-form";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  className = "",
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col space-y-1">
      <select
        {...register(name)}
        className={`outline-none border ${
          errorMessage
            ? "border-red-500"
            : "border-gray-300 focus:border-primary"
        } ${className}`}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && <small className="text-red-500">{errorMessage}</small>}
    </div>
  );
};

export default Select;
