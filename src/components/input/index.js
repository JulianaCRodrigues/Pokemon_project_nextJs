


export function InputSearch({ type, value, fnOnChange, fnOnKeyUp }) {
  return (

    <input placeholder="Search name or code"
      type={type}
      value={value}
      onChange={fnOnChange}
      onKeyUp={fnOnKeyUp}

    />

  )
}