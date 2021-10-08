import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const AddTodoForm = ({addNewToDo}) =>  {
    const [addTodo , setAddTodo] = useState([])

    const handleTodo =(e) => {
        e.preventDefault() 
        addNewToDo(addTodo);

       setAddTodo('')
     
    }


    return (
       <div className ="card card-body">
           <div className="form-group">
       
            <form className ="mt-4" onSubmit={handleTodo}>
               <label>Ajouter un todo</label>
               <input className="form-control" type="text" value ={addTodo} onChange={(e) => setAddTodo(e.target.value)}></input>
               <input className="btn btn-success mt-4" type="submit" value="Ajouter"></input>
            </form>
           </div>

        </div>
    )
}

export default AddTodoForm
