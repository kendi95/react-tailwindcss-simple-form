import React, { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const SubmitButton: React.FC<IButtonProps> = ({label}) => {
  return (
    <button 
      style={{borderRadius: 8}}
      className="
        bg-purple-700 
        w-72 
        h-8 
        text-white 
        font-black 
        mt-2 
        hover:bg-purple-800 
        transition 
        duration-500
        outline-none
        border-none
        border-0"
    >{label}</button>
  )
}

export default SubmitButton;