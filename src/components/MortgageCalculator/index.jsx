import React from 'react'
import NumericInput from '../NumericInput'
import Button from '../Button'
import ShowBoard from '../ShowBoard'
import EmptyBoard from '../EmptyBoard'
import { useState } from 'react'

function InputSide() {
    const [amount, setAmount] = useState('')
    const [term, setTerm] = useState('')
    const [rate, setRate] = useState('')
    const [checked, setChecked] = useState(0)
    const [result, setResult] = useState()
    const [total, setTotal] = useState()

    const Checks =[
        {
            id: 1,
            name: 'Repayment'
        },
        {
            id: 2,
            name: 'Interest Only'
        }  
    ]

    console.log({amount, term, rate, checked})

    const handleClick = () => {
        console.log({amount, term, rate, checked})
        if (amount!='' & term!='' & rate!='' & checked!=0) {
            let P = Number(amount)
            let r = Number(rate)/100/12
            let n = Number(term)*12
            let v = Math.pow(1+r, n)

            let pounds = Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP',
            });

            if (checked === 1) {
                setResult(
                    pounds.format(((P * r * v) / (v - 1)).toFixed(2))
                )
                setTotal(
                    pounds.format(((P * r * v) / (v - 1) * n).toFixed(2))
                )
            } else {
                setResult(
                    pounds.format((P * r).toFixed(2))
                )
                setTotal(
                    pounds.format(((P * r * n) + P).toFixed(2))
                )
            }
        }
    }

    const handleClear = () => {
        setAmount('')
        setTerm('')
        setRate('')
        setChecked(0)
        setResult()
    }

  return (
    <div className='flex bg-white max-lg:flex-col justify-center items-center'>
        <div className='w-[30rem] h-[35rem] p-8 rounded-l-3xl flex flex-col justify-between max-[500px]:w-screen max-[500px]:h-[50rem] max-[500px]:rounded-none'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>
                    Mortgage Calculator
                </h1>
                <p onClick={handleClear} className='text-Slate-300 underline hover:text-Slate-500 cursor-pointer'>
                    Clear All
                </p>
            </div>
            <NumericInput
                Label='Mortgage Amount'
                Width='w-full'
                Padding='pl-20 pr-3'
                Icon='£'
                IconPosition='bottom-8 left-1'
                IconBorderRadius='rounded-e-sm'
                Error={!amount ?  '' : 'opacity-0'}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <div className='flex justify-between max-[500px]:flex-col max-[500px]:h-60'>
                <NumericInput
                    Label='Mortgage Term'
                    Width='w-48 max-[500px]:w-full'
                    Padding='pr-20 pl-3'
                    Icon='year'
                    IconPosition='bottom-8 right-1'
                    IconBorderRadius='rounded-e-sm'
                    Error={!term ?  '' : 'opacity-0'}
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <NumericInput
                    Label='Interest Rate'
                    Width='w-48 max-[500px]:w-full'
                    Padding='pr-20 pl-3'
                    Icon='%'
                    IconPosition='bottom-8 right-1'
                    IconBorderRadius='rounded-e-sm'
                    Error={!rate ?  '' : 'opacity-0'}
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                />
            </div>
            <div className='h-44 flex flex-col justify-between max-[500px]:h-52'>
                <p className='text-Slate-700 font-medium' >Mortgage Type</p>
                {Checks.map(check => (
                    <div key={check.id} className='w-full h-14 border-2 border-Slate-500 rounded-md flex items-center gap-6 px-6'>
                        <input
                            className='w-6 h-6'
                            type="radio"
                            checked={checked === check.id}
                            onChange={() => setChecked(check.id)}
                        />
                        <span className='text-Slate-700 font-medium'>{check.name}</span>
                    </div>
                ))}
                <p className={`text-red-600 text-sm ${!checked ? '' : 'opacity-0'}`}>This Field is Required</p>
            </div>
            <Button onClick={handleClick}/>
        </div>
        <ShowBoard
            value1={result}
            value2={total}
            Hidden={!result ? 'hidden' : ''}
        />
        <EmptyBoard
            Hidden={result ? 'hidden' : ''}
        />
    </div>
  )
}

export default InputSide
