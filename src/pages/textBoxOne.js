import React, { useState } from 'react';

const TextFieldOne = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
    
  }

  
  return (
    <div>
      <input type="text" valueOne={value} onChange={handleChange} />
    </div>
  );
}


export default TextFieldOne;