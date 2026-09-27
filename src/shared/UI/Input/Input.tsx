import type { InputInterface } from "./type/interface";

function Input({labelText, inputType = 'text', inputValue, inputId, inputOnChange, inputPlaceholder, InputDisabled, ...inputProps}: InputInterface) {
  return (
    <>
      <label htmlFor={inputId}>{labelText}</label>
      <input type={inputType}
        value={inputValue}
        id={inputId}
        disabled={InputDisabled}
        placeholder={inputPlaceholder}
        onChange={inputOnChange}
        {...inputProps}
        className={`block w-full text-sm  border rounded-lg py-2 px-4 ${InputDisabled ? "opacity-85 text-gray-500 border-gray-100" : "text-gray-900 border-gray-300"}`}
      />
    </>
  );
}

export default Input;