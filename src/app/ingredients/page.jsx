"use client"

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "@/app/state/reducers/authSlice";
import { ingredientActions } from "../state/reducers/ingredientSlice";
import { weekActions } from "../state/reducers/weekSlice";
import { useState, useEffect } from "react";
import NavBarComponent from "../components/NavBarComponent";
import logo from '../../../public/logo.png'
import Image from "next/image"
import Wave from '../../../public/Wave.svg'


export default function Ingredient() {
    const dispatch = useDispatch()
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    const user = useSelector((state) => state.auth.user)
    const activeWeek = useSelector((state) => state.week.activeWeek)
    const filteredData = useSelector((state) => state.ingredient.filteredData)
    const activeIngredients = useSelector((state) => state.ingredient.activeIngredients)
    const activeNutrients = useSelector((state) => state.week.activeNutrients)
    var selectedIngredients = [];
    var recipe = "";

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newIngredient = e.target.newIngredient.value;
        dispatch(ingredientActions.addIngredient(newIngredient));
        document.getElementById('new_ingredient_modal').close();
    }

    const generate = async () => {

        let recipe1 = {};
        let recipe2 = {};
        let recipe3 = {};

        async function query(data) {
            const response = await fetch(
                "/api/generateRecipe",
                {
                  headers: { "Content-Type": "application/json" },
                  method: "POST",
                  body: JSON.stringify(data),
                }
              );
              const result = await response.json();
              return result;
          }

          async function imgQuery(data) {
            const response = await fetch(
                "/api/generate",
                {
                  headers: { "Content-Type": "application/json" },
                  method: "POST",
                  body: JSON.stringify(data),
                }
              );
              const result = await response.json();
              return result;
          }

          let ingredientListString = selectedIngredients.toString();
          let ingredientListString2 = selectedIngredients.slice(0, -1).toString();
          let ingredientListString3 = selectedIngredients.slice(1).toString();

            await query({"inputs": ingredientListString}).then((response) => {
                // console.log(response);
                if (response && response.result) {
                    const title = response.result.split("ingredients")[0].slice(7)

                    recipe1["title"] = title;
                    recipe1["ingredients"] = selectedIngredients;
                    recipe1["directions"] = response.result.split("directions: ")[1]
                    recipe1["calories"] = ""
                    recipe1["userAffiliation"] = user._id
                    recipe1["weekAffiliation"] = activeWeek
                
                imgQuery({"inputs": title + ". Ingredients: " + ingredientListString}).then((response) => {
                        // console.log(response.filename)
                        // setPath(response.filename)
                        recipe1["imagePath"] = response.filename

                        try {
                            const res = fetch("api/recipe", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                title: recipe1["title"],
                                ingredients: recipe1["ingredients"],
                                directions: recipe1["directions"],
                                nutrients: activeNutrients,
                                calories: recipe1["calories"],
                                imagePath: recipe1["imagePath"],
                                userAffiliation: user._id,
                                weekAffiliation: activeWeek
                              }),
                            });
                          } catch (error) {
                            console.log("Error during recipe post", error);
                          }
                    });
            }
            });

       await sleep(500);

       

        query({"inputs": ingredientListString2}).then((response) => {
            // console.log(response);
            if (response && response.result) {
                const title2 = response.result.split("ingredients")[0].slice(7)
                recipe2["title"] = title2;
                recipe2["ingredients"] = selectedIngredients.slice(0, -1);
                recipe2["directions"] = response.result.split("directions: ")[1]
                recipe2["calories"] = ""
                recipe2["userAffiliation"] = user._id
                recipe2["weekAffiliation"] = activeWeek
            
            imgQuery({"inputs": title2 + ". Ingredients: " + ingredientListString2}).then((response) => {
                // console.log(response.filename)
                recipe2["imagePath"] = response.filename
                // setPath(response.filename)
                try {
                    const res = fetch("api/recipe", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        title: recipe2["title"],
                        ingredients: recipe2["ingredients"],
                        directions: recipe2["directions"],
                        nutrients: activeNutrients,
                        calories: recipe2["calories"],
                        imagePath: recipe2["imagePath"],
                        userAffiliation: user._id,
                        weekAffiliation: activeWeek
                      }),
                    });
                  } catch (error) {
                    console.log("Error during recipe post", error);
                  }
            });
        }
        });
        
        // await sleep(500);

        // query({"inputs": ingredientListString3}).then((response) => {
        //     // console.log(response);
        //     if (response && response.result) {
        //         const title3 = response.result.split("ingredients")[0]
        //         // console.log(title)
        //         recipe3["title"] = title3;
        //         recipe3["ingredients"] = selectedIngredients.slice(1);
        //         recipe3["directions"] = response.result.split("directions: ")[1]
        //         recipe3["calories"] = ""
        //         recipe3["userAffiliation"] = user._id
        //         recipe3["weekAffiliation"] = activeWeek
            
            
        //     imgQuery({"inputs": title3 + ". Ingredients: " + ingredientListString3}).then((response) => {
        //         // console.log(response.filename)
        //         recipe3["imagePath"] = response.filename
        //         // setPath(response.filename)
        //     });
        // }
        // });

        // console.log(recipe1)
        // console.log(recipe2)
        // console.log(recipe3)
    }

    const select = async (e) => {
        e.preventDefault();
        let selectedIngredient = e.target.innerHTML;

        if (!(selectedIngredients.includes(selectedIngredient))){
            selectedIngredients.push(selectedIngredient);
            e.target.classList.remove("bg-med-red")
            e.target.classList.add("bg-darker-pink")
        }
        else if (selectedIngredients.includes(selectedIngredient)) {
            selectedIngredients = selectedIngredients.filter((element) => element != selectedIngredient);
            e.target.classList.remove("bg-darker-pink")
            e.target.classList.add("bg-med-red")
        }

        console.log(selectedIngredients)
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
            {/* <div className="container px-4"> */}
            <Image src={logo} width={200} height={200} className='absolute ml-6 mt-2'></Image>
            <h1 className='text-white text-8xl p-5 mt-16 font-Jua absolute'>Personalized Ingredients</h1>
            <Image src={Wave} width={2000} height={1} className=''></Image>

            {/* <svg className="z-0" viewBox="0 0 500 100">
            <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#F497AA" opacity="0.8"></path>
            <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#EAA9B3" opacity="0.5"></path>
            <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#DB425D" opacity="0.8"></path>
            </svg> */}
            <NavBarComponent />  
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 px-4 gap-x-12 gap-y-5 mb-4 absolute -mt-[28rem] ml-[17rem]">
                {Object.keys(activeIngredients).map((ingredient, index) => {
                return(
                  <div 
                    onClick={select} 
                    key={index} 
                    className="flex items-center bg-med-red rounded-full px-8 py-3 text-center hover:cursor-pointer"
                  >
                    {/* SVG icon goes here */}
                    <Image priority src={`${ingredient}.svg`} height={32} width={32}></Image>
                    
                    {/* Ingredient text */}
                    <span className="flex-1 text-md font-Jua">
                      {ingredient}
                    </span>
                  </div>

                )})}
            </div>
            <div className="flex justify-center absolute -mt-[8rem] ml-[32rem]">
            <button onClick={()=>document.getElementById('new_ingredient_modal').showModal()} className="mr-5 font-Jua text-white flex items-center justify-center inline-block rounded-full bg-gradient-to-b from-red-gradient to-orange-gradient mt-10 px-8 pb-4 pt-2.5 text-s font-medium uppercase">Add Ingredient</button>
            <button onClick={generate} className="ml-5 font-Jua text-white justify-center inline-block rounded-full bg-gradient-to-b from-red-gradient to-orange-gradient flex items-center  mt-10 px-8 pb-4 pt-2.5 text-s font-medium uppercase">Generate</button>
              {/* <button onClick={()=>{dispatch(weekActions.setActiveWeek(activeWeek + 1))}}>Next week</button> */}
            </div>
            {/* </div> */}
        {/* MODAL CODE */}
        <dialog id="new_ingredient_modal" className="modal font-biscuitReg rounded-3xl h-[10.35rem] bg-off-white">
        <div className="modal-box">
            <div className="form_card">

            <div className="form_container ml-5 mr-5">
                <div className="header ">
                <h4 className="headerText text-dark-gray text-xl font-biscuitMed">Add Ingredient</h4>
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