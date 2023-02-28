import React from 'react';
import RecipeTitle from './RecipeTitle'
import './style.css'

function App() {
    const title = "Receita"
    return (
        <article>
            <h1>Recipe Manager</h1>
            <RecipeTitle />
        </article>
    )
}

export default App;