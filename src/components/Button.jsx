export function Button({ type, value, onClick, isDisabled, ...rest }) {
  const types = {
    primary: "bg-sky-700",
    success: "bg-green-700",
    rounded: "!rounded-full !w-24 !h-24 !text-black",
    outline: "bg-transparent border-2 !text-black",
  };

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`
        ${isDisabled && "!bg-gray-500/60 !text-gray-700"} 
        ${types[type]} 
        py-1 text-white font-semibold w-full rounded-sm shadow
      `}
      {...rest}
    >
      {value}
    </button>
  );
}
