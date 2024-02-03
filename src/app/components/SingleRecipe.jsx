'use client'

const SingleRecipe = (recipe) => {
    return (
        <div className="bg-gradient-to-b from-red-gradient to-orange-gradient rounded-2xl mt-8 p-2 w-[25rem]">
        <h2 className='items-center justify-center flex font-Jua text-5xl text-white mb-2'>{recipe.title}</h2>
        <img className="scale-75" src={recipe.imagePath}></img>
        <div className="bg-white rounded-2xl p-4 mr-4 ml-4 mb-6">
            <p className="font-Jua text-3xl text-maroon">Ingredients</p>
            <p className="font-Jua text-lg text-maroon ">{recipe.ingredients}</p>
            <p className="font-Jua text-3xl text-maroon"><br></br>Directions</p>
            <p className="font-Jua text-lg text-maroon">{recipe.directions}</p>
        </div>
    </div>
    )
}

export default SingleRecipe