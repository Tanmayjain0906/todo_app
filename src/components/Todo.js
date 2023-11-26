import React, { useState } from "react";
import { add_todo, update_todo, delete_todo } from "../redux/action/actionTypes";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {

    const todo_data = useSelector(state => state);
    const dispatch = useDispatch();

    const [input, setInput] = useState("");
    const [update, setUpdate] = useState(null);
    const [valueText, setValueText] = useState("");

    const [idHandler, setIdHandler] = useState(1);

    function handleForm(e) {
        e.preventDefault();
        dispatch(add_todo({ id: idHandler, title: input }));
        setInput("");
        setIdHandler(idHandler+1);
    }

    function handleEdit(e) {
        setUpdate(e.target.id);
        for(let i=0;i<todo_data.length;i++)
        {
           if(Number(e.target.id) == Number(todo_data[i].id))
           {
              setValueText(todo_data[i].title);
           }
        }
    }

    function handleEditInput(e)
    {
        setValueText(e.target.value)
    }

    function handleSave(e)
    {
        dispatch(update_todo({id: update, title: valueText}));
        setUpdate(null);
        setValueText("");
    }

    return (

        <div>
            <form onSubmit={handleForm}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">ADD</button>
            </form>

            <ul>
                {
                    todo_data.map((todo) => (
                        <li>
                            {Number(todo.id) == Number(update) ? <span className="title"> <input type="checkbox" checked /> <input type="text" value={valueText} onChange={handleEditInput} /></span> : <span className="title"><input type="checkbox" disabled={true} /> {todo.title}</span>}

                            {
                                Number(todo.id) == Number(update) ? <button id={todo.id} onClick={handleSave}>Save</button> : <button id={todo.id} onClick={handleEdit}>Edit</button>
                            }
                            
                            <button onClick={() => dispatch(delete_todo(todo.id))}>Delete</button>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Todo;