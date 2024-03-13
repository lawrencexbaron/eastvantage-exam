type TextInputProps = {
  placeholder: string;
  value: string;
  className?: string;
  name: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  placeholder,
  value,
  className,
  name,
  label,
  onChange,
}: TextInputProps) => {
  return (
    <div className="mb-3 w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className={`px-3 w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      />
    </div>
  );
};

export default TextInput;
