import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, showIncomplete, setTaskStatus, removeTask, setShowIncomplete}) {
  return (
   <>
    <ul className="task-list">
        {tasks.filter(task => showIncomplete ? task.status !==1 : true)
        .map(task => (
        <TaskItem 
        key={task.id}
        task={task} 
        setTaskStatus={setTaskStatus} 
        removeTask={removeTask}/>
        
      ))}
    </ul>
    <div className="filter-wrapper">
        <label htmlFor = "filter" className="filter-label">Show incompleted task only</label>
        <input onChange={(e) => setShowIncomplete(e.target.checked)} type="checkbox" id="filter" checked = {showIncomplete} />
    </div>
</> 
  )
}

export default TaskList