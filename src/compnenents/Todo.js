import React ,{useState} from 'react' ;
import { v4 as uuidv4 } from 'uuid';
import AddTodoForm from './AddTodoForm';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Todo() {
    const [todos, setTodos] = useState([]) ;
    const [warning, setWarning] =useState (false) ;
    const mytodos = todos.map ( (e) => {
        return (
            <li className="list-group-item" key={e.id}> {e.todo} </li>
        )
    })   
    const addNewToDo = (newToDo) => {

        if( newToDo !==''){
            warning && setWarning(false)

            setTodos ([...todos,{
                id: uuidv4(),
                todo : (newToDo) } ])

        } else {
            setWarning (true)
        }
    }
    const warningMsg = warning && <div className="alert alert-danger" role="alert">veuillez indiquer un todo</div>

   
     return (
        <div>
            {warningMsg}

            <h1 className="text-center">{todos.length} To-do</h1>
            <ol className="list-group">
                {mytodos}
            </ol>
            <AddTodoForm addNewToDo={addNewToDo}/>
        </div>
    )
}
