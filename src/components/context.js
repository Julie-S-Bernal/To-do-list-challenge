import React from 'react'
import formattedDate from './utils'



const TodosContext = React.createContext({
    todos: [
     // use formattedDate util function to add the date creation
     {id: 1, name: 'Pet all the cats in the world', description: false},
     {id: 2, name: 'Learn AWS', description: false},
     {id: 3, name: 'create an app using the cloud', description: true},
     {id: 4, name: 'Finish advanced javascript methods on Udemy', description: true},
    ]
})



export default TodosContext
