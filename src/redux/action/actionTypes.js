import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actions"


export const add_todo = (data) => {
  
    return{
        type: ADD_TODO,
        payload: data
    }
}

export const update_todo = (id) => {

    return{
        type: UPDATE_TODO,
        payload: id
    }
}

export const delete_todo = (id) => {

    return{
        type: DELETE_TODO,
        payload: id
    }
}

