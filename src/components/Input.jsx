export function Input({
  name,
  label,
  type,
  placeholder,
  onChange,
  value,
  ...rest
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        className="outline-none"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </div>
  );
}
