import React from 'react'
import iconCalculator from '../../assets/images/icon-calculator.svg'

function Button(props) {
  return (
    <div onClick={props.onClick} className='w-72 h-12 bg-Lime flex justify-center items-center gap-4 rounded-full cursor-pointer hover:bg-Slate-300'>
        <img src={iconCalculator} alt="iconCalculator" />
        <span className='text-md text-Slate-900 font-bold'>Calculate Repayment</span>
    </div>
  )
}

export default Button