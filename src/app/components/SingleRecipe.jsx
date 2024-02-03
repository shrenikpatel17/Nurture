'use client'

import { authActions } from "../state/reducers/authSlice"
import { useSelector, useDispatch } from "react-redux"

const SingleRecipe = (recipe) => {
    const dispatch = useDispatch()

    const activeWeek = useSelector((state) => state.week.activeWeek)

    const handleClick = async (e) => {
        console.log({recipeID: recipe._id, userID: recipe.userAffiliation, week: recipe.weekAffiliation})
        const response = await fetch(`/api/eatenRecipe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({"recipeID": recipe._id, "userID": recipe.userAffiliation, "week": activeWeek}),
          })
        const user = await response.json()
        console.log(user.data)
        dispatch(authActions.setUser(user.data))

        e.target.parentElement.classList.add("from-orange-gradient", "to-red-gradient")
        e.target.parentElement.classList.remove("from-red-gradient", "to-orange-gradient")
    }
    return (
        <div className="bg-gradient-to-b from-red-gradient to-orange-gradient rounded-2xl mt-8 p-2 w-[25rem]">
        <h2 className='items-center justify-center flex font-Jua text-5xl text-white mb-2'>{recipe.title}</h2>
        <svg onClick={handleClick} class="w-10 h-10 block mx-auto rounded-full stroke-[green] stroke-[2] my-[10%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
            <path class="checkmark__check fill-none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>

        <img className="scale-75 rounded-2xl" src={recipe.imagePath}></img>
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