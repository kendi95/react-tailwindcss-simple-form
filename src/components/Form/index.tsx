import React, { FormHTMLAttributes } from 'react';

interface IFormProps extends FormHTMLAttributes<HTMLFormElement>{

}

const Form: React.FC<IFormProps> = ({children}) => {
  return (
    <form className="container bg-gray-300 min-w-full min-h-full flex flex-col items-center justify-center" style={{borderRadius: 32}}>
      {children}
    </form>
  )
}

export default Form;