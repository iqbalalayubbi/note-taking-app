type Properties = {
  className?: string;
  label: string;
  type: "submit" | "button";
};

const Button = ({ className, label, type }: Properties) => {
  return (
    <button
      className={`rounded-full bg-purple-500 py-3 font-bold text-white ${className}`}
      type={type}
    >
      {label}
    </button>
  );
};

export { Button };
