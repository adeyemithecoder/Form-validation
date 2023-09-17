import { useState } from "react";
import "./FormInput.css";

const FormInput = ({ id, label, errMes, onChange, ...others }) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = (e) => {
    setFocus(true);
  };
  return (
    <div className='formInput'>
      <label>{label} </label>
      <input
        {...others}
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
