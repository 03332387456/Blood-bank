import React from 'react';



export default function Select(props) {
  const { options, label, getValue } = props;

  const selectChange = (val)=> {
    getValue(val);
  };

  return (
    <>
      <p className='m-1'>{label}</p>
      <select className='p-1 text-white bg-dark m-2 text-center w-100 rounded shadow'
       onChange={(e) => selectChange(e.target.value)}>
        {options &&
          Array.isArray(options) &&
          options.map((x, i) => (
            <option key={i} value={x.value}>
              {x.displayName}
            </option>
          ))}
      </select>
    </>
  );
}