import {useState} from 'react';

const Home = ()=>{

      const [input, setInput] = useState('');
      const [tasks, setTasks] = useState([]);

  const TakeInput = (event)=>{
    setInput(event.target.value);
  }

  const SaveTask = ()=>{
      setTasks([...tasks,{title:input,isDone:false}])
  }

  const TaskDone = (index)=>{

    let shallowCopy = [...tasks];
    shallowCopy[index].isDone = true;
    setTasks(shallowCopy);
  }

  const DeleteTask = (index)=>{
    let shallowCopy = [...tasks];
    shallowCopy.splice(index,1);
    setTasks(shallowCopy);
  }



    return<>
    <h1>Todo list App</h1>
    <input onChange={TakeInput} placeholder='Enter your task' />
    <p>{input}</p>
    <ul>{tasks.map((item,index)=>{return <li>{item.title} {item.isDone?'Done':'Not Done'}
      <button onClick={()=>TaskDone(index)}>Done</button>
      <button onClick={()=>DeleteTask(index)}>Delete</button>
    </li>})}</ul>
    <button onClick={SaveTask}>Add Task</button>
    </>
}


export default Home;