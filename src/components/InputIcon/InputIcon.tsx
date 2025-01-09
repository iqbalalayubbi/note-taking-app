import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

type Properties = {
  className: string;
  icon: string;
  placeholder: string;
  type: string;
  name: string;
};

const InputIcon = ({ className, icon, ...rest }: Properties) => {
  return (
    <div
      className={`flex items-center justify-between border rounded-xl py-3 px-5 ${className}`}
    >
      <input className="focus:outline-none" {...rest} />
      <Icon icon={icon} className="text-gray-500" />
    </div>
  );
};

export { InputIcon };
