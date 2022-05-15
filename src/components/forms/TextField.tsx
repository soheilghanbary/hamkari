import { FC, forwardRef, InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  errorText?: string;
  ref?: any;
}

const TextField: FC<TextFieldProps> = forwardRef(
  ({ label, name, errorText, ...rest }, ref: any) => {
    return (
      <>
        <div className="form-group">
          <label htmlFor={name}>{label}</label>
          <input ref={ref} autoComplete="off" name={name} {...rest} />
          {errorText && <span className="error-validate">{errorText}</span>}
        </div>
      </>
    );
  }
);

export default TextField;
