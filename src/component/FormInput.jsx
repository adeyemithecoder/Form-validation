import { useState } from "react";
import "./FormInput.css";

const FormInput = ({ id, label, errMes, htmlFor, onChange, ...others }) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = (e) => {
    setFocus(true);
  };
  return (
    <div className='formInput'>
      <label>{label} </label>
      <input
        className='Forminput'
        {...others}
        required
        onChange={onChange}
        onBlur={handleFocus}
        focus={focus.toString()}
        onFocus={() => name == "confirmPassword" && setFocus(true)}
      />
      <span>{errMes}</span>
    </div>
  );
};

export default FormInput;
