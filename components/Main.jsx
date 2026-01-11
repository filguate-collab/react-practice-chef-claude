export default function Main(){

function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newIngredient = formData.get("ingredient")
    document.getElementById("form").reset()
    console.log(newIngredient)
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

        </main>
    )
}