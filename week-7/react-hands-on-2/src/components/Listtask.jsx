import Taskitem from "./Taskitem"

function Listtask({ tasks, toggleComplete,deletetask }) {
  return (
    <div>
      <h3 className='text-4xl mb-5 text-amber-700 font-bold'>List Task</h3>
      {tasks.length === 0 ? (
        <p className='text-red-600 text-3xl'>No Tasks Found</p>
      ) : (
        tasks.map((taskobj) => (
          <Taskitem
            key={taskobj.id} taskobj={taskobj} toggleComplete={toggleComplete} deletetask={deletetask}
          />
        ))
      )}
    </div>
  )
}
export default Listtask