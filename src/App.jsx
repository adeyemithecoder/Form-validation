import { useState } from "react";
import FormInput from "./component/FormInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const allInput = [
    {
      id: 1,
      errMes:
        "Username should be 3-16 characters and must not include any special character!",
      label: "Username",
      type: "text",
      placeholder: "Username",
      name: "username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 3,
      errMes: "This email is not valid",
      label: "Email",
      required: true,
      type: "email",
      placeholder: "Email",
      name: "email",
    },
    {
      id: 5,
      label: "Birthday",
      type: "date",
      placeholder: "Birthday",
      name: "birthday",
    },
    {
      id: 2,
      errMes:
        "Password should be 8-20 characters and include atleast 1 number, 1 letter and 1 special character",
      label: "Password",
      required: true,
      type: "text",
      pattern:
        "^(?=.*[0-9])(?=.[A-Za-z])(?=.*[!@#$%^&.,?*])[A-Za-z0-9!@#$%.,?^&*]{8,20}$",
      placeholder: "Password",
      name: "password",
    },
    {
      id: 4,
      errMes: "Please let Passwords don't match",
      label: "Confirm Password",
      type: "text",
      required: true,
      placeholder: "Confirm Passwoed",
      name: "confirmPassword",
      pattern: values.password,
    },
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
        {allInput.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChangeValue}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
