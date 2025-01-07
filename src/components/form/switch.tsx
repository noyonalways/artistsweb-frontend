"use client";

import { forwardRef } from "react";
import { useFormContext } from "react-hook-form";

interface SwitchProps {
  name: string;
  className?: string;
  disabled?: boolean;
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ name, className = "", disabled = false }, ref) => {
    const { watch, setValue } = useFormContext();
    const checked = watch(name) || false;

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full
          ${checked ? "bg-primary" : "bg-gray-200"}
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          ${className}
        `}
        onClick={() => {
          if (!disabled) {
            setValue(name, !checked, { shouldValidate: true });
          }
        }}
        disabled={disabled}
      >
        <span
          className={`
            ${checked ? "translate-x-6" : "translate-x-1"}
            inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out
          `}
        />
      </button>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
