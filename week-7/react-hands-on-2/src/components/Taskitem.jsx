import React from "react";

function Taskitem({ taskobj,toggleComplete,deletetask}) {

  let bgColor;
  if (taskobj.priority === "High") {
    bgColor = "bg-red-600";
  } 
  else if (taskobj.priority === "Medium") {
    bgColor = "bg-yellow-500";
  } 
  else {
    bgColor = "bg-green-600";
  }

  return (
    <div className="flex justify-between items-center border p-3 mb-2">
      <p
        className={`${bgColor} p-3 m-2 text-white rounded ${taskobj.completed ? "line-through opacity-50" : ""}`}>{taskobj.taskname}</p>
      <button onClick={() => toggleComplete(taskobj.id)} className="bg-blue-600 text-white px-3 py-1 rounded">{taskobj.completed ? "Undo" : "Complete"}</button>
      <button onClick={()=>deletetask(taskobj.id) } className=" bg-red-600 px-3 py-1 rounded mx-2">Delete</button>
    </div>
  );
}

export default Taskitem;