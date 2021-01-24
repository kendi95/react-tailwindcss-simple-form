import React, { InputHTMLAttributes } from 'react';

interface IInputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputLabel: React.FC<IInputLabelProps> = ({label, ...rest}) => {
  return (
    <div className="flex flex-col">
      <label className="font-roboto font-semibold text-lg text-gray-600">{label}</label>
      <input className="rounded-lg mt-1 mb-2 h-8 px-3 bg-purple-300 outline-none text-white font-medium" {...rest} />
    </div>
  )
}

export default InputLabel;