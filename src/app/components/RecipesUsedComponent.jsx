'use client'
import RecipesComponent from "./RecipesComponent"

const RecipesUsedComponent = () => {
    return (
        <div>
            <h2 className='font-Jua text-4xl text-maroon mb-4 p-4 ml-2 mt-4 -mb-2'>Recipes Used</h2>
            <div className="flex flex-row w-[55rem] overflow-scroll">
            <RecipesComponent />
            <RecipesComponent />
            <RecipesComponent />
            <RecipesComponent />
            </div>
        </div>
    )
}

export default RecipesUsedComponent