import {useState} from 'react'


export default function App() {
  const [tasks, setTasks] = useState([])
  const [input,setInput] = useState('');

  const takeInput =(event)=>{
    setInput(event.target.value);
  }

  const addMyTask = ()=>{
    setTasks([...tasks,{title:input,isDone:false}]);
  }

  const changeState = (index)=>{
      const manipulatedArr = tasks.map(
        (item,i)=>{
            if(i===index){
              return {...item,isDone:true};
            }
            return item;
          })

        setTasks(manipulatedArr)
  }


  const deleteTask = (index)=>{

    const newArray = tasks.filter((_,i)=>{
      return i!==index;
    })

    setTasks(newArray);
  }

  return (
    <>
    <h1>Todo List</h1>
    <input onChange={takeInput} type="text" placeholder='Enter your task' />
    <button onClick={addMyTask}>Add Task</button>

    <ul>
    {tasks.map((item,index)=>{
      return <li style={{textDecoration:item.isDone?'line-through':''}} 
              key={index}>
              {item.title} 
              <button onClick={()=>changeState(index)}>done</button>
              <button onClick={()=>deleteTask(index)}>delete</button>
              </li>
    })}
    </ul>
    </>
  )
}






