"use client"

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "@/app/state/reducers/authSlice";
import { ingredientActions } from "../state/reducers/ingredientSlice";
import { weekActions } from "../state/reducers/weekSlice";
import { useEffect } from "react";

export default function Dashboard() {

    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user)

    const activeWeek = useSelector((state) => state.week.activeWeek)

    const filteredData = useSelector((state) => state.ingredient.filteredData)

    const activeIngredients = useSelector((state) => state.ingredient.activeIngredients)

    const activeNutrients = useSelector((state) => state.week.activeNutrients)

    useEffect(() => {
        const nutrients = filteredData["week" + activeWeek]
        dispatch(weekActions.setActiveNutrients(nutrients))
        let ingredients = {}
        Object.values(nutrients).forEach((nutrient) => {
            let ingredientsObj = nutrient["ingredients"]
            Object.keys(ingredientsObj).forEach((ingredient) => {
                ingredients[ingredient] = ingredientsObj[ingredient]
            })
        })
        dispatch(ingredientActions.setActiveIngredients(ingredients))
    }, [activeWeek])

    return(
        <>
            <h1>Week: {activeWeek}</h1>
            <br></br>
            <h1>User's diet: {user.diet}</h1>
            <h1>User's allergies</h1>
            {user.allergies.map((value, index) => {
                <p key={index}>{value}</p>
            })}
            <br></br>
            <h1>Nutrients:</h1>
            {Object.keys(activeNutrients).map((nutrient, index) => {
                <p key={index}>{nutrient}</p>
            })}
            <br></br>
            <h1>Ingredients:</h1>
            {Object.keys(activeIngredients).map((ingredient, index) => {
                <p key={index}>{ingredient}</p>
            })}
            <br></br>
            <button onClick={dispatch(weekActions.setActiveWeek(activeWeek + 1))}>Next week</button>
        </>
    )

}