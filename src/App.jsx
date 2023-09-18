import { useState } from "react";
import FormInput from "./component/FormInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Radio from "./component/Radio";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });
  const genderItems = [
    { id: "male", value: "Male" },
    { id: "female", value: "Female" },
    { id: "other", value: "Others" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("validate", JSON.stringify(values));
    toast.success("Congrats Your Details Are Saved");
  };
  const handleChangeValue = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className='App'>
      <ToastContainer position='bottom-center' limit={1} />
      <form onSubmit={handleSubmit}>
        {" "}
        <h1>Register</h1>
        <FormInput
          errMes='Username should be 3-16 characters and must not include any special character!'
          label='Username'
          type='text'
          placeholder='Username'
          name='username'
          pattern='^[A-Za-z0-9]{3,16}$'
          value={values.username}
          onChange={handleChangeValue}
        />
        <FormInput
          errMes='This email is not valid'
          label='Email'
          type='email'
          placeholder='Email'
          name='email'
          value={values.email}
          onChange={handleChangeValue}
        />
        <FormInput
          label='Birthday'
          type='date'
          placeholder='Birthday'
          name='birthday'
          value={values.birthday}
          onChange={handleChangeValue}
        />
        <FormInput
          errMes='Password should be 8-20 characters and include atleast 1 number, 1 letter and 1 special character'
          label='Password'
          type='password'
          placeholder='Password'
          name='password'
          pattern='^(?=.*[0-9])(?=.[A-Za-z])(?=.*[!@#$%^&.,?*])[A-Za-z0-9!@#$%.,?^&*]{8,20}$'
          value={values.password}
          onChange={handleChangeValue}
        />
        <FormInput
          errMes='Please let Passwords match'
          label='Password'
          type='password'
          placeholder='Confirm Passwoed'
          name='confirmPassword'
          pattern={values.password}
          value={values.confirmPassword}
          onChange={handleChangeValue}
        />
        <div className='radioContainer'>
          {genderItems.map((item) => (
            <Radio
              key={item.id}
              label={item.value}
              id={item.id}
              name='gender'
              value={values.gender}
              onChange={handleChangeValue}
            />
          ))}
        </div>
        {/* {allInput.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChangeValue}
          />
        ))} */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
