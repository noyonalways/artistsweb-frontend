"use client";

import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { IoMdClose } from "react-icons/io";

interface TagInputProps {
  name: string;
  suggestions?: string[];
  className?: string;
  placeholder?: string;
}

const TagInput = ({
  name,
  suggestions = [
    "Web Design",
    "UI/UX",
    "Branding",
    "Development",
    "Mobile App",
    "Logo Design",
  ],
  className = "",
  placeholder = "Type and press enter to add tags",
}: TagInputProps) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const value = watch(name) || [];
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const error = errors[name];

  // Handle clicks outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (!value.includes(input.trim())) {
        setValue(name, [...value, input.trim()], { shouldValidate: true });
        setInput("");
        // Keep suggestions open after adding a tag
        setShowSuggestions(true);
      }
    } else if (e.key === "Backspace" && !input && value.length > 0) {
      setValue(name, value.slice(0, -1), { shouldValidate: true });
    }
  };

  const removeTag = (tagToRemove: string) => {
    setValue(
      name,
      value.filter((tag: string) => tag !== tagToRemove),
      { shouldValidate: true }
    );
  };

  const addTag = (tag: string) => {
    if (!value.includes(tag)) {
      setValue(name, [...value, tag], { shouldValidate: true });
    }
    setInput("");
    // Keep focus and suggestions after adding a tag
    inputRef.current?.focus();
    setShowSuggestions(true);
  };

  const filteredSuggestions = suggestions.filter(
    (suggestion) =>
      suggestion.toLowerCase().includes(input.toLowerCase()) &&
      !value.includes(suggestion)
  );

  // Register the field with default value preservation
  register(name, { value: value });

  return (
    <div className="relative" ref={containerRef}>
      <div
        className={`min-h-[42px] w-full px-3 py-2 border ${
          error
            ? "border-red-500"
            : isFocused
            ? "border-primary"
            : "border-gray-300"
        } rounded-md flex flex-wrap gap-2 ${className}`}
        onClick={() => {
          inputRef.current?.focus();
          setIsFocused(true);
          setShowSuggestions(true);
        }}
      >
        {value.map((tag: string) => (
          <span
            key={tag}
            className="inline-flex items-center bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
          >
            {tag}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeTag(tag);
              }}
              className="ml-1 text-primary hover:text-primary/80"
            >
              <IoMdClose size={16} />
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowSuggestions(true);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setIsFocused(true);
            setShowSuggestions(true);
          }}
          className="flex-grow outline-none min-w-[120px] bg-transparent text-gray-700"
          placeholder={value.length === 0 ? placeholder : ""}
        />
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">{error.message as string}</p>
      )}

      {showSuggestions && isFocused && filteredSuggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            {filteredSuggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                onClick={(e) => {
                  e.stopPropagation();
                  addTag(suggestion);
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TagInput;
