import React from 'react'

function AddTaskForm({handleSubmit, handleInputChange, newTask}) {
  return (
    <form onSubmit={handleSubmit} className="form">
        <label htmlFor = "new-item">Add to the todo list</label>  
        <input onChange={handleInputChange} type="text" id="new-item" value={newTask} autoComplete="off"/>
        <button type="submit">Add Item</button>
    </form>
  )
}

export default AddTaskForm