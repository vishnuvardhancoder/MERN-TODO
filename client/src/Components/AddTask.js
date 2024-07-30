import "./AddTask.css"
import React, {useState} from 'react'
import axios from "axios"
import todoimg from './to-do-list.png'
function AddTask(props) {
  const [task,setTask] = useState("")
  const addtask = () =>{
    if(task.trim() === ''){
        return
    }else{
        axios.post("mern-todo-server-ruddy.vercel.app",{
            todo : task,
            isComplete : false
        }).then(res =>{
            setTask("")
            props.addTask(res.data)
        }).catch(err=>{console.log(err)})
    }
  }

  return (
    <div>
        <div className="first">
        <h1>Todo Application</h1>
        <img src={todoimg}></img>
        </div>
        
        <div className="addtask">   
            <div className="input-container">
                <input type="text" placeholder="Add Tasks.." required value={task} onChange={(event)=>{
                    setTask(event.target.value)
                }} />
                <button onClick={()=>addtask()} className="button">Add Task</button>
            </div>
        </div>
    </div>
    
  )
}

export default AddTask