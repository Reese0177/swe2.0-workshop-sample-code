import React from 'react'
import Card from './Card'

//TOP OF THE COMPONENT TREE
const App = () => {
    return(
        <>
            <h1>Teach me about Class Components</h1>
            <div className="card">
               <Card /> 
            </div>
        </>
    )
} 

export default App