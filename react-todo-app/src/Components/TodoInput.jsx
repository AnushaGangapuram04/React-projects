import React, {  useState } from 'react'

const TodoInput = ({task, setTask, addTodo}) => {

  return (
    <div>
         <input type="text" 
          placeholder="Enter your task"  
          value={task}
         onChange={(e) => setTask(e.target.value)} >
         </input>
         <br/>
         <br/>
         <button type="button" className="btn btn-primary"onClick={addTodo}>ADD</button>
      
    </div>
  )
}

export default TodoInput
