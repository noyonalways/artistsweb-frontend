"use client";

import { useFormContext } from "react-hook-form";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<IProps> = ({ name, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col space-y-1">
      <input {...register(name)} {...props} />
      {errorMessage && <small className="text-red-500">{errorMessage}</small>}
    </div>
  );
};

export default Input;
