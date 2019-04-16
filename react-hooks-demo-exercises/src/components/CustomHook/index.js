import React, {useState} from 'react'

export default function useCustomHook(initialValue) {
    const [value, setValue] = useState(initialValue);
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    return {
      value,
      onChange: handleChange
    }
  }