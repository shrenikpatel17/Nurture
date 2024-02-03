'use client'

const RecipesComponent = (recipe) => {
    console.log(recipe)
    return (
        <div className="bg-gradient-to-b from-red-gradient to-orange-gradient rounded-2xl w-[12rem] ml-6 flex flex-col items-center">
                <div className="bg-med-pink rounded-lg p-20 mb-4 mt-2"></div>
                <h2 className='font-Jua text-2xl text-white'>{recipe.title}</h2>
                <img src={recipe.imagePath}></img>
        </div>
    )
}

export default RecipesComponent