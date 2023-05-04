import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


// ...

type InputType =
  | "text"
  | "number"
  | "email"
  | "password"
  | "date"
  | "textarea"
  | "select"
  | "phone"; 

interface InputProps {
  type?: InputType;
  autoComplete?: string;
  required?: boolean;
  label?: string;
  formik: any;
  name?: any;
  onBlur?: any;
  placeholder?: any;
  extra?: object;
  className?: string;
  onChange?:any;
  countries?:{};
  international?:boolean;
  options?: { label: string; value: string; disabled: boolean;selected: boolean; }[];
}

const FormInput = ({
  type,
  label,
  placeholder,
  name,
  formik,
  style,
  className,
  options,
  onChange,
  
}: InputProps & { className?: string; style?: React.CSSProperties }) => {
  // ...
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: 10,
        ...style,
      }}
    >
      <label htmlFor={name}>{label}</label>
      {type === "select" ? (
        <select
          id={name}
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "phone" ? (
        <PhoneInput
          label={label}
          placeholder={placeholder}
          name={name}
          value={formik.values[name]}
          onChange={phone => formik.setFieldValue(name, phone)}
          countries={['US', 'GB', 'CA', 'AU', 'NZ',"IN"]}
          international={true}
        />
      ) : (
        <input
        
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
        />
      )}
      {formik.touched[name] && formik.errors[name] ? (
          <span className="error" style={{color:"red"}}>{formik.errors[name]}</span>
        ) : null}
    </div>
  );
};


export default FormInput;
