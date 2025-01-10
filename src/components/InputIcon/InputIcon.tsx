import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

type Properties = {
  className?: string;
  icon: string;
  placeholder: string;
  type: string;
  name: string;
  onChange: (name: string, value: string) => void;
};

const InputIcon = ({
  className,
  icon,
  name,
  onChange,
  ...rest
}: Properties) => {
  return (
    <div
      className={`flex items-center justify-between border rounded-xl py-3 px-5 bg-white ${className}`}
    >
      <input
        className="focus:outline-none w-[90%] bg-transparent"
        {...rest}
        onChange={(e) => onChange(name, e.target.value)}
      />
      <Icon icon={icon} className="text-gray-500 w-[10%]" />
    </div>
  );
};

export { InputIcon };
