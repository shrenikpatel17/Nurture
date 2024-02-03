"use client"

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "@/app/state/reducers/authSlice";
import { ingredientActions } from "../state/reducers/ingredientSlice";
import { weekActions } from "../state/reducers/weekSlice";
import { useState, useEffect } from "react";


export default function Ingredient() {
    const dispatch = useDispatch()


    const user = useSelector((state) => state.auth.user)
    const activeWeek = useSelector((state) => state.week.activeWeek)
    const filteredData = useSelector((state) => state.ingredient.filteredData)
    const activeIngredients = useSelector((state) => state.ingredient.activeIngredients)
    const activeNutrients = useSelector((state) => state.week.activeNutrients)
    var selectedIngredients = [];

    const handleSubmit = async (e) => {
        e.preventDefault();

        // useDispatch(ingredientActions.setActiveIngredients);
        let newIngredient = e.target.newIngredient.value;
        document.getElementById('new_ingredient_modal').close();
    }

    const generate = async (e) => {
        e.preventDefault();
    }

    const select = async (e) => {
        e.preventDefault();
        let selectedIngredient = e.target.innerHTML;

        if (!(selectedIngredients.includes(selectedIngredient))){
            selectedIngredients.push(selectedIngredient);
            e.target.classList.remove("bg-pink")
            e.target.classList.add("bg-green")
        }
        else if (selectedIngredients.includes(selectedIngredient)) {
            selectedIngredients = selectedIngredients.filter((element) => element != selectedIngredient);
            e.target.classList.remove("bg-green")
            e.target.classList.add("bg-pink")
        }
    }

    // useEffect(() => {
    //     const nutrients = filteredData["week" + activeWeek]
    //     dispatch(weekActions.setActiveNutrients(nutrients))
    //     let ingredients = {}
    //     Object.values(nutrients).forEach((nutrient) => {
    //         let ingredientsObj = nutrient["ingredients"]
    //         Object.keys(ingredientsObj).forEach((ingredient) => {
    //             ingredients[ingredient] = ingredientsObj[ingredient]
    //         })
    //     })
    //     dispatch(ingredientActions.setActiveIngredients(ingredients))
    //     setIsLoading(false)
    // }, [activeWeek])

    return(
        <>
            <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Personalized Ingredients</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-4">
                {Object.keys(activeIngredients).map((ingredient, index) => {
                return(
                    <div onClick={select} key={index} className="bg-pink rounded-full px-8 py-3 text-center hover:cursor-pointer">{ingredient}</div>
                )})}
            </div>
            <div className="flex justify-center">
            <button onClick={()=>document.getElementById('new_ingredient_modal').showModal()} className="justify-center inline-block rounded-full bg-pink mt-10 px-8 pb-4 pt-2.5 text-s font-medium uppercase">Add Ingredient</button>
            <button onClick={generate} className="justify-center inline-block rounded-full bg-pink mt-10 px-8 pb-4 pt-2.5 text-s font-medium uppercase">Generate</button>
              {/* <button onClick={()=>{dispatch(weekActions.setActiveWeek(activeWeek + 1))}}>Next week</button> */}
            </div>
            </div>

        {/* MODAL CODE */}
        <dialog id="new_ingredient_modal" className="modal font-biscuitReg rounded-3xl h-[10.35rem] bg-off-white">
        <div className="modal-box">
            <div className="form_card">

            <div className="form_container ml-5 mr-5">
                <div className="header ">
                <h4 className="headerText text-dark-gray text-xl font-biscuitMed mt-3">Add Ingredient</h4>
                <hr className="text-light-gray mb-4"></hr>
                {/* <span className="closeCircle" onClick={routeChange}></span> */}
                </div>
                <form className="newIngredientForm" onSubmit={handleSubmit}>
                <input
                    id="newIngredient"
                    name="newIngredient"
                    required
                    className="block w-full rounded-2xl text-black sm:text-sm sm:leading-6 hover:bg-blue"
                  />
                <input required className="form-submit rounded-3xl pl-4 pr-4 pt-2 pb-2 bg-pink right-5 mt-4 mb-4 flex absolute hover:cursor-pointer hover:scale-105" type="submit" value="Add"></input>
            </form>
            </div>

        </div>
        </div>
        </dialog>  
        </>
    )

}