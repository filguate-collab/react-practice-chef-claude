import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromHuggingFace } from "../api/huggingface"



export default function Main(){
    const HF_API_KEY = import.meta.env.VITE_HF_API_KEY

    const [ingredients, setIngredients] = React.useState([])
    
    const [recipeShown, setRecipeShown] = React.useState(false)
    const [recipe, setRecipe] = React.useState("")


function handleSubmit(formData) {
 
    const newIngredient = formData.get("ingredient")
    if (newIngredient) {
        document.getElementById("form").reset()
    setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
    }
}

async function toggleRecipeShown() {
    setRecipeShown(true)
    const recipeFromAI = await getRecipeFromHuggingFace(ingredients)
    setRecipe(recipeFromAI)
}


    return (
        <main>
            <form id="form" className="add-ingredient-form" action={handleSubmit}>
                <input 
                id="ingredient"
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"/>
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList toggleRecipeShown={toggleRecipeShown} ingredients={ingredients}  />}
            {recipeShown && <ClaudeRecipe recipe={recipe} />}

        </main>
    )
}

