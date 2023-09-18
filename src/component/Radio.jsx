// import "./Radio.css";

const Radio = ({ value, id, onChange, label, name }) => {
  // const convertToDefaultEventPara = (name, value) => ({
  //   target: { name, value },
  // });
  return (
    <div>
      <label className='radio-label' value={value} htmlFor={id}>
        <input
          className='radio-input'
          type='radio'
          id={id}
          value={value}
          name={name}
          onChange={onChange}
        />
        <div className='radio-div'> </div>
        {label}
      </label>
      {/* <div className='radio inline'>
          <label className='radio-label' htmlFor='radio1'>
            <input type='radio' id='radio1' name={name} value='male' />
            <div className='radioDiv'></div>
            Male
          </label>
        </div>
        <div className='radio inline'>
          <label className='radio-label' htmlFor='radio2'>
            <input type='radio' id='radio2' name={name} value='female' />
            <div className='radioDiv'></div>
            Female
          </label>
        </div> */}
    </div>
  );
};

export default Radio;
