import React from 'react';
import { ADD_TODO, DELETE_TODO, STAR_TODO, TOOGLE_THEME } from './Action';


const initialState = {
    todos: [],
    theme: "light"
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return ({
                ...state,
                todos: [...state.todos, {
                    id: Date.now(),
                    text: action.payload, 
                    star: "NO"
                }]
            });
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id!==action.payload)
            };
        case TOOGLE_THEME:
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light"
            };
        case STAR_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return (
                        todo.id === action.payload ? {
                            ...todo,
                            star: todo.star === "YES" ? "NO" : "YES"
                        } : todo
                    )
                })
            };
        default:
            return state;

    }
}

export default todoReducer;