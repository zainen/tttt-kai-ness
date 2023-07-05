import { Dispatch, SetStateAction } from "react";

export const TextInput = ({
  name,
  label,
  className,
  handler,
  textArea = false,
  containerClassName,
  state,
  setState,
  required
}: {
  name: string;
  handler?: (value: string) => void;
  label?: string;
  className?: string;
  textArea?: boolean;
  containerClassName?: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  required?: boolean;
}) => {
  return (
    <>
      {textArea ? (
        <div className={`flex flex-col w-full ${containerClassName}`}>
          <label>{label}</label>
          <textarea
            required={required}
            name={name}
            value={state}
            className={`resize-none md:h-36 h-20 bg-primary-300 border-b focus:outline-none border-b-tttt-100 overflow-visible sscrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 ${className}`}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
      ) : (
        <div className={`flex flex-col w-full ${containerClassName}`}>
          <label>{label}</label>
          <input
            required={required}
            name={name}
            value={state}
            className={`bg-primary-300 border-b focus:outline-none border-b-tttt-100 ${className}`}
            type="text"
            onChange={handler ? (e) => handler(e.target.value) : (e) => setState(e.target.value)}
          />
        </div>
      )}
    </>
  );
};