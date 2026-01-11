import React from "react"
export default function Main(){

    const [ingredients, setIngredients] = React.useState([])
    const ingredientsList = ingredients.map((ingredient,index)=><li key={index}>{ingredient}</li>)

function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newIngredient = formData.get("ingredient")
    if (newIngredient) {
        document.getElementById("form").reset()
    setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
    }
}
    return (
        <main>
            <form id="form" className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                id="ingredient"
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"/>
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>

        </main>
    )
}