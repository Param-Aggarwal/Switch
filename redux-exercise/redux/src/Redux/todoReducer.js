
// const initialState = [
//     {
//         id: 1,
//         text: "this is todo 1"
//     },
//     {
//         id: 2,
//         text: "this is todo 2"
//     },
//     {
//         id: 3,
//         text: "this is todo 3"
//     },
//     {
//         id: 4,
//         text: "this is todo 4"
//     }
// ];

import { ADD_TODO, DELETE_TODO } from "./action"

const initialState = {
    todos: []
}
const todoReducer = ( state = initialState, action ) => {
    // console.log(store);
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    id: Date.now(),
                    text: action.payload
                }]
            };
        
        case DELETE_TODO:
            // delete todo from the todos array from the store. 
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== action.payload)
            };
        case "TOGGLE_TODO":

            return;
        default:
            return state;
    }

 }

export default todoReducer;