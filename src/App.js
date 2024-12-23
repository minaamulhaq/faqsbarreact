import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {


  let[todolist,settodolist] = useState([])
  let list = todolist.map((value,index)=>{

    return(
      <Todoitems value={value} index={index} key={index} todolist={todolist}
       settodolist = {settodolist} />
    )

  })

  let savetoDolist = (event)=>{
    let tovname = event.target.toname.value;
    if(!todolist.includes(tovname)){
      let finalTodolist = [...todolist,tovname]
      settodolist(finalTodolist)
    }else{
      alert('Already')
    }
    event.preventDefault();
  }
  return (
    <div className="App">
      <h1>To DO list</h1>
      <form onSubmit={savetoDolist}>
        <input type='text' name='toname'/>
        <button>SAVE</button>
      </form>
      <div className ='outerDiv'>
        <ul>
         {list}
        </ul>
      </div>

    </div>
  );
}

export default App;


function Todoitems({index,value,todolist, settodolist}){
  let[state,setStatus] = useState(false)
  let deleteRow= ()=>{
    let finalArray = todolist.filter((v,i)=>i!= index)
    settodolist(finalArray)
  }
  let checkstatus=()=>{
    setStatus(!state)

  }
  return(

    <li className={(state)? 'completetoDo' : '' } onClick={checkstatus}>
    {index} . {value}<span onClick={deleteRow}> &times;</span></li>
  )

}