import React from 'react'
import {useForm} from 'react-hook-form'
import Counttask from './Counttask'

function Addtask({addnewtask}) {
    const {register,handleSubmit,reset} =useForm()
    const onFormSubmit=(taskobj)=>{
        addnewtask(taskobj)
        reset()
    }
  return (
    <div>
        <h3 className='text-4xl mb-5 text-amber-700 font-bold'>Add Task</h3>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className='mb-3 '>
                <input type="text" {...register("taskname")} className='border-2 p-1' placeholder='enter taskname' />
            </div>
            <div>
                <select {...register("priority")} className='mb-3 border-2'>
                    <option value="High" className='bg-red-600'>High</option>
                    <option value="Medium" className='bg-yellow-500'>Medium</option>
                    <option value="Low" className='bg-green-600'>Low</option>
                </select>
            </div>
            <button type='submit' className='bg-blue-600 text-lime-100 px-4 py-2 mb-5'>Add</button>
        </form>
    </div>
  )
}

export default Addtask