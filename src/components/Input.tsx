type Props = {
  label: string;
  placeholder: string;
  value: string;
  name: string;
  type?: string;
};

function Input({ label, placeholder, value, name, type }: Props) {
  return (
    <div className="flex flex-col justify-between">
      <label
        className="font-[500] mb-[11px] text-[16px] leading-6 text-medium_gray"
        htmlFor=""
      >
        {label}
      </label>
      <input
        className="h-10  lg:h-14 px-4 py-1 rounded-[12px] bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-green_600 border border-gray-400"
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
      />
    </div>
  );
}

export default Input;
