"use client";

import { get } from "lodash";
import { useFormContext } from "react-hook-form";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<IProps> = ({ name, className = "", ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = get(errors, `${name}.message`) as string | undefined;

  return (
    <div className="flex flex-col space-y-1">
      <input
        {...register(name)}
        className={`outline-none border ${
          errorMessage
            ? "border-red-500"
            : "border-gray-300 focus:border-primary"
        } ${className}`}
        {...props}
      />
      {errorMessage && <small className="text-red-500">{errorMessage}</small>}
    </div>
  );
};

export default Input;
