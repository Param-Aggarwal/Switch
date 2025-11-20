const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"
const TOOGLE_THEME = "TOOGLE_THEME"
const STAR_TODO = "STAR_TODO"

const addTodo = (text) => ({
        type: ADD_TODO,
        payload: text
    });

const deleteTodo = (id) => {
    return ({
        type: DELETE_TODO,
        payload: id 
    }); 
}
const toggleTheme = () => {
    return ({
        type: TOOGLE_THEME,
    })
}

const starTodo = (id) => {
    return ({
        type: STAR_TODO,
        payload: id
    })
}

export {addTodo, deleteTodo, toggleTheme, starTodo, ADD_TODO, DELETE_TODO, TOOGLE_THEME, STAR_TODO}