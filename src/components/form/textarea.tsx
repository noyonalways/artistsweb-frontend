"use client";

import { useFormContext } from "react-hook-form";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
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
      <textarea
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

export default Textarea;
