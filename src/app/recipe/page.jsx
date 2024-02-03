"use client"

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "@/app/state/reducers/authSlice";
import { recipeActions } from "@/app/state/reducers/recipeSlice";
import { ingredientActions } from "../state/reducers/ingredientSlice";
import { weekActions } from "../state/reducers/weekSlice";
import { useState, useEffect } from "react";
import NavBarComponent from "../components/NavBarComponent";
import RecipesComponent from "../components/RecipesComponent";
import SingleRecipe from "../components/SingleRecipe";
import logo from '../../../public/logo.png'
import Image from "next/image"
import Wave from '../../../public/Wave.svg'


export default function Recipes() {

  

  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const activeWeek = useSelector((state) => state.week.activeWeek)
  const activeIngredients = useSelector((state) => state.ingredient.activeIngredients)
  const activeNutrients = useSelector((state) => state.week.activeNutrients)
  const activeRecipes = useSelector((state) => state.recipe.activeRecipes)


    // const select = async (e) => {
    //     e.preventDefault();
    //     let selectedIngredient = e.target.innerHTML;

    //     if (!(selectedIngredients.includes(selectedIngredient))){
    //         selectedIngredients.push(selectedIngredient);
    //         e.target.classList.remove("bg-med-red")
    //         e.target.classList.add("bg-darker-pink")
    //     }
    //     else if (selectedIngredients.includes(selectedIngredient)) {
    //         selectedIngredients = selectedIngredients.filter((element) => element != selectedIngredient);
    //         e.target.classList.remove("bg-darker-pink")
    //         e.target.classList.add("bg-med-red")
    //     }

    //     console.log(selectedIngredients)
    // }

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const getRecipes = async() => {
        const response = await fetch(`/api/recipe?query=${user._id}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
            },
        })
          const recipes = await response.json()
          console.log(recipes)
          dispatch(recipeActions.setActiveRecipes(recipes.data));
      }
      getRecipes();

      setIsLoading(false);
    }, [activeWeek])

    return(
        <>
        {!isLoading && <>
            {/* <div className="container px-4"> */}
            <Image src={logo} width={200} height={200} className='absolute ml-6 mt-2'></Image>
            <h1 className='text-white text-8xl p-5 mt-16 font-Jua absolute'>Curated Recipes</h1>
            <Image src={Wave} width={2000} height={1} className=''></Image>

            {/* <svg className="z-0" viewBox="0 0 500 100">
            <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#F497AA" opacity="0.8"></path>
            <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#EAA9B3" opacity="0.5"></path>
            <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#DB425D" opacity="0.8"></path>
            </svg> */}

            <NavBarComponent /> 
            <div className="flex flex-row space-x-10 scale-[65%] -ml-40 -mt-[40rem] absolute">
            {activeRecipes.map((recipe, index) => {
                return(
                    <SingleRecipe {...recipe} />
                )
                })}
            </div>
            {/* <button className="font-Jua text-white justify-center inline-block rounded-full bg-gradient-to-b from-red-gradient to-orange-gradient mt-10 px-8 pb-4 pt-2.5 text-s font-medium uppercase">Generate</button> */}
              {/* <button onClick={()=>{dispatch(weekActions.setActiveWeek(activeWeek + 1))}}>Next week</button> */}
            {/* </div> */}
        </>}
        </>
    )

}