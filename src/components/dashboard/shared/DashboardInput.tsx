import { Input } from "antd";
import { FC } from "react";

const { TextArea } = Input;

interface Props {
  name?: string;
  title?: string;
  value?: string;
  subTitle?: string;
  disabled?: boolean;
  className?: string;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  input?: "text" | "textarea";
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // Added onBlur
  error?: string; // Optional error message
}

const DashboardInput: FC<Props> = ({
  name,
  title,
  value,
  subTitle,
  className,
  input = "text",
  maxLength,
  minLength,
  placeholder,
  onChange,
  disabled = false,
  onBlur, // onBlur added
  error, // Handling error state
}) => (
  <div className={`${className} w-full`}>
    {title && (
      <h3 className="text-dark-blue text-base font-semibold">{title}</h3>
    )}
    {subTitle && <h5 className="text-gray text-sm mt-1">{subTitle}</h5>}
    <div
      className={`border border-fade-white rounded-lg py-3 px-4 ${
        title?.length ? "mt-2" : ""
      } w-full`}
    >
      {input === "text" && (
        <Input
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur} // onBlur added
          className={`mt-1 p-0 w-full ${error ? "border-red-500" : ""}`}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      )}
      {input === "textarea" && (
        <TextArea
          rows={6}
          name={name}
          value={value}
          maxLength={maxLength}
          className={`p-0 ${error ? "border-red-500" : ""}`}
          onChange={onChange}
          onBlur={onBlur} // onBlur added
          minLength={minLength}
          disabled={disabled}
          placeholder={placeholder}
        />
      )}
    </div>
    {maxLength && (
      <h5 className="text-sm text-dark-gray mt-2">{`${
        minLength ? `Minimum ${minLength} characters | ` : ""
      }Maximum ${maxLength} characters`}</h5>
    )}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default DashboardInput;
