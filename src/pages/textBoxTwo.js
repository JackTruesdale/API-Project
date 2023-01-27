import React, { useState } from 'react';

const TextFieldTwo = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  }

  return (
    <div>
      <input type="text" valueTwo={value} onChange={handleChange} />
    </div>
  );
}


export default TextFieldTwo;