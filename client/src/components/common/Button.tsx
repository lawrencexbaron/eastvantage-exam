type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ children, className, onClick, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={type === "submit" ? false : true}
      className={`w-full py-2 mt-4 bg-blue-500 text-white rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
