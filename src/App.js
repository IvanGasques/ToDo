import './App.css'
import './index.css'

import {useState, useEffect} from "react"
import { Bstrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs"

const API = "http://localhost:5000";


function App() {

  const [title, setTitle] = useState("")
  const [ time, setTime ] = useState("")
  const [todos, setTodos] = useState([])
  const [ loading, setLoading] = useState(false)


const handleSubmit = (e) => {
e.preventDefault()
console.log('Enviou')
console.log("title")
setTitle('')
}

  return (
    <div className='app' id='app'>
    <div className='todo-header'>
    <h1>ToDo</h1></div>


    <div className='form-todo'>
      <h2>Insira a sua proxima tarefa</h2>
      <form onSubmit={handleSubmit}>
      <div className='form-control'>
       <p> <label htmlFor='Title'>O que voce vai fazer</label></p>
        <input type='text' 
         name='title' 
         placeholder='Titulo da tarefa' 
         onChange={(e) => setTitle(e.target.value)} value={title || ""} required/>

      </div>
      <input type='submit' value="enviar"/>
      </form>
    
    
    </div>


    <div className='list-todo' id='teste'>
    <h2>Listas de tarefas:</h2>
    {todos.length ===0 && <p>Nao ha tarefas</p>}
    </div>
    </div>
  );
}

export default App;
