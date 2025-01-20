export default function FormInput({
    id,
    fieldName,
    fieldType,
    placeholder,
    required,
    className = "",
    maxLength
  }) {
    return (
      <div className={className}>
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {fieldName}
        </label>
        <input
          id={id}
          type={fieldType}
          placeholder={placeholder}
          className="block bg-gray-200 border border-gray-300 rounded-md text-gray-900 text-sm w-full p-2.5 placeholder-slate-500 focus:outline-none focus:ring-gray-400 focus:border-gray-400"
          required={required}
          autoComplete="off"
          maxLength={maxLength}
        />
      </div>
    );
  }
  