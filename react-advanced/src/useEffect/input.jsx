import { useEffect, useRef, useState } from "react";

export const Formm = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Taylor");
  const [upper, setUpper] = useState(false);

  const handleShowForm = () => {
    setShow((s) => !s);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleChangeCheckbox = (e) => {
    setUpper(e.target.checked);
  };

  return (
    <>
      <button onClick={handleShowForm}>{show ? "Hide" : "Show"} form</button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your name:
            <MyInput value={name} onChange={handleChange} />
          </label>
          <label>
            <input
              type="checkbox"
              checked={upper}
              onChange={handleChangeCheckbox}
            />
            Make it uppercase
          </label>
          <p>
            Hello, <b>{upper ? name.toUpperCase() : name}</b>
          </p>
        </>
      )}
    </>
  );
};

const MyInput = ({ value, onChange }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return <input ref={ref} value={value} onChange={onChange} />;
};
