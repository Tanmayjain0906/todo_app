import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../action/actions";

const initialValue = [];

const todoReducer = (state=initialValue, action) => {

    if(action.type == ADD_TODO)
    {
        return[...state, action.payload]
    }
    else if(action.type == UPDATE_TODO)
    {
        const id = action.payload.id;
        let index;

        for(let i=0;i<state.length;i++)
        {
            if(id == state[i].id)
            {
                index = i;
            }
        }

        let newArray = structuredClone(state);

        newArray[index].title = action.payload.title;

        return newArray;
    }
    else if(action.type == DELETE_TODO)
    {
        return state.filter((todo) => todo.id != action.payload);
    }
    else
    {
        return state;
    }
}

export default todoReducer;