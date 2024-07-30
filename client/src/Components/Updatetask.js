import './Updatetask.css'
import React,{useState} from 'react'
import axios from 'axios'
function Updatetask(props) {
  const [task,setTask] = useState(props.task.todo)

  const UpdateTask = ()=>{
    if(task.trim()===''|| props.task.todo === task){
        props.removepopup()
    }else{
        axios.put(`mern-todo-server-ruddy.vercel.app/${props.task._id}`,{
            _id : props.task._id,
            todo : task,
            isComplete : props.task.isComplete
        }).then(res=>{
            props.removepopup()
            props.updatetask(res.data)
        }).catch(err=>console.log(err))
    }
  }
  return (
    <div className='popup'>
        <div className='popup-content'>
            {/* <input type='text' placeholder='Update Task..' value={task} onChange={(event)=>{
                setTask(event.target.value)
            }}/> */}
            <input placeholder="Update Task.." class="input" name="text" type="text" value={task} onChange={(event)=>{
                setTask(event.target.value)
            }}></input>
            {/* <button onClick={()=>UpdateTask()}>Update</button> */}
            <button class="updatebutton" onClick={()=>UpdateTask()}>
                <p>Update</p>
            </button>           
        </div>
    </div>
  )
}

export default Updatetask