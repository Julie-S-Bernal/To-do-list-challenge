import React from 'react'
import formattedDate from './utils'

const TodosContext = React.createContext({
    todos: [
     // use formattedDate util function to add the date creation
     {id: 1, name: 'Cat', description: 'give medicine to cat'},
     {id: 2, name: 'Self development', description: 'Finish AWS'},
     {id: 3, name: 'Website', description: 'Redo a website from scratch'},
     {id: 4, name: 'Groceries', description: 'Buy milk, eggs and olive oil'},
    ]
})



export default TodosContext
