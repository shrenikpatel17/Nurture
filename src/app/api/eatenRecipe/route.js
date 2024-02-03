import { connectMongoDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Recipe from "@/app/models/Recipe"
import User from "@/app/models/User"


export async function POST(req) {
//   try {
    const { recipeID, userID, week } = await req.json();

    await connectMongoDB();

    // const newRecipe = await Recipe.create({
    //   title: title,
    //   ingredients: ingredients,
    //   directions: directions,
    //   nutrients: nutrients,
    //   calories: calories,
    //   imagePath: imagePath,
    //   userAffiliation: userAffiliation,
    //   weekAffiliation: weekAffiliation
    // });

    let user = await User.findById(userID);
    console.log(user)

    let weekObject = user["allWeeksNutrientInfo"]["week" + week];
    console.log(weekObject)

    let recipe = await Recipe.findById(recipeID);

    let nutrients = Object.keys(recipe.nutrients[0])

    weekObject["eatenRecipes"].push(recipe);

    Object.keys(weekObject["nutrientContent"]).map((nutrient) => {
        if(nutrients.includes(nutrient)){
            weekObject["nutrientContent"][nutrient] += 1 / recipe.nutrients[0][nutrient]["meals"]
        }
    })

    user["allWeeksNutrientInfo"]["week" + week] = weekObject;

    await User.findByIdAndUpdate(userID, user)


        // {
        //     $push: {
        //       folders:
        //         defaultFolder._id
        //     },
        //   });

    return NextResponse.json(
      { data: user },
      { status: 201 }
    );
//   } catch (error) {
//     return NextResponse.json(
//       { message: error },
//       { status: 500 }
//     );
//   }
}

export async function GET(req) {
    try {

      const searchParams = req.nextUrl.searchParams;
      const userID = searchParams.get('query');
    
      await connectMongoDB();
  
      let recipes = await Recipe.find({userAffiliation: userID}).exec()
  
      return NextResponse.json(
        { data: recipes },
        { status: 200 },
      )
    }
    catch (error) {
      return NextResponse.json(
        { message: error },
        { status: 500 }
      );
    }
  }
