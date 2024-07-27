import React from 'react'

function NumericInput(props) {
  return (
    <div className='relative'>
      <p className='text-Slate-700 font-medium'>{props.Label}</p>
      <div className={`w-14 h-12 flex justify-center items-center ${props.IconBorderRadius} bg-Slate-100 absolute z-10 ${props.IconPosition}`}>
        <p className='font-bold text-lg text-Slate-700'>{props.Icon}</p>
      </div>
      <input type="numeric" value={props.value} onChange={props.onChange} className={`${props.Width} h-14 my-2 border-2 border-Slate-500 rounded-md ${props.Padding}`}/>
      <p className={`text-red-600 text-sm ${props.Error}`}>This Field is Required</p>
    </div>
  )
}

export default NumericInput
