import type { SelectProps } from "./type/interface";

function Select<T>({selectOptions, labelText, selectName, selectId}: SelectProps<T>) {
  return (
    <>
      <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1">{labelText}</label>
      <div className="relative w-full">
        <select id={selectId} name={selectName} className="block w-full
          text-sm text-gray-900
          border border-gray-300
          rounded-lg
          py-2 px-4
          bg-white
          outline-none
          appearance-none
          focus:ring-2 focus:ring-blue-500/20
          focus:border-blue-500">
          {selectOptions.map(item => (
            <option key={String(item.value)} value={String(item.value)}>{item.label}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="h-4 w-4 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </>
  );
}

export default Select;