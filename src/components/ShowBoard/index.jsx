import React from 'react'

function OnputSide(props) {
  return (
    <div className={`w-[30rem] h-[35rem] bg-Slate-900 p-8 rounded-r-3xl rounded-bl-4xl flex flex-col justify-start text-white gap-4 ${props.Hidden} max-[500px]:w-screen max-[500px]:rounded-none`}>
        <h1 className='text-2xl font-bold'>Your Results</h1>
        <p className='text-Slate-700 font-medium mb-4'>
          Your results are shown below based on the information you provided.
          To adjust the results, edit the form and click "calculate repament" again.
        </p>
        <div className='w-full h-[17rem] bg-Lime rounded-t-lg rounded-b-xl flex items-end'>
          <div className='w-full h-[16.7rem] rounded-lg p-6 bg-Custom'>
            <p className='text-Slate-700 font-medium mb-2'>Your monthly repayments</p>
            <h2 className='text-5xl font-bold text-Lime'>{props.value1}</h2>
            <hr className='border-Slate-700 my-7' />
            <p className='text-Slate-700 font-medium mb-2'>Total you'll repay over the term</p>
            <h3 className='text-3xl font-bold'>{props.value2}</h3>
            </div>
        </div>
    </div>
  )
}

export default OnputSide
