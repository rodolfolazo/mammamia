import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const resetInput = () => {
    setValue(initialValue);
  };

  return {
    value,
    onChange: handleChange,
    resetInput,
  };
};

export default useInput;
