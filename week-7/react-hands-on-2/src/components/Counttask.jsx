import React from 'react'

function Counttask({tasks}) {
  return (
    <div>
        <p className='text-3xl mb-2'>Total Tasks: {tasks.length}</p>
        <p className='text-2xl text-green-700'>Completed: {tasks.filter(task => task.completed).length}</p>
    </div>

  )
}

export default Counttask