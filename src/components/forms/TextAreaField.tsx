import { FC, forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name?: string;
  errorText?: string;
}

const TextareaField: FC<TextareaFieldProps> = forwardRef(
  ({ label, name, errorText, ...rest }, ref: any) => {
    return (
      <>
        <div className="form-group">
          <label htmlFor={name}>{label}</label>
          <textarea rows={8} ref={ref} autoComplete="off" name={name} {...rest} />
          {errorText && <span className="error-validate">{errorText}</span>}
        </div>
      </>
    );
  }
);

export default TextareaField;
