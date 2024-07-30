import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'
import AddTask from './Components/AddTask'
import Todolist from './Components/Todolist'
import Updatetask from './Components/Updatetask'
import FavoriteIcon from '@mui/icons-material/Favorite';
function App() {
  const [todolist,setTodolist] = useState([])
  const [tasktoupdate,setTasktoupdate] = useState({})
  const [showpopup,setshowpopup] = useState(false)
  useEffect(()=>{
    axios.get('mern-todo-server-ruddy.vercel.app/').then(res => {
      setTodolist(res.data)
    }).catch(err => {console.log(err)})
  },[])

  const addTask = newTask =>{
    setTodolist([...todolist,newTask])
  }
  const taskComplete = (task)=>{
    const newList = [...todolist]
    newList.forEach(item=>{
      if(item._id === task._id){
        item.isComplete = task.isComplete
      }
    })
    setTodolist(newList)
  }
  const removeTask = (task)=>{
    const newList = todolist.filter(item=> !(item._id === task._id))
    setTodolist(newList)

  }
  const updatetask = task=>{
    const newList =[...todolist]
    newList.forEach(item=>{
      if(item._id===task._id){
        item.todo = task.todo
      }
    })
    setTodolist(newList)
  }
  return (
    <div>
      <AddTask addTask = {addTask}/>
      <Todolist todolist = {todolist} taskComplete={taskComplete} removeTask = {removeTask} tasktoupdate = {(task)=>setTasktoupdate(task)} showpopup = {()=>setshowpopup(!showpopup)}/>
      {showpopup && <Updatetask task = {tasktoupdate} updatetask={updatetask} removepopup={()=> setshowpopup(!showpopup)}/>}
      <footer className='footer'>
        <p>~Made with  <FavoriteIcon className='love'/>  by Vishnu.</p>
      </footer>
    </div>
  )
}

export default App