import React from 'react'
import illustrationEmpty from '../../assets/images/illustration-empty.svg'

function OnputSide(props) {
  return (
    <div className={`w-[30rem] h-[35rem] bg-Slate-900 p-8 rounded-r-3xl rounded-bl-4xl flex flex-col justify-center items-center text-white gap-4 ${props.Hidden} text-center max-[500px]:w-screen max-[500px]:rounded-none`}>
        <img src={illustrationEmpty} alt="illustrationEmpty" />
        <h1 className='text-2xl font-bold'>Results shown here</h1>
        <p className='text-Slate-700 font-medium mb-4'>
          Complete the form and click "calculate repament" to see what your monthly repayment would be.
        </p>
    </div>
  )
}

export default OnputSide