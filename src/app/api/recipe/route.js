import { connectMongoDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Recipe from "@/app/models/Recipe"
import User from "@/app/models/User"


export async function POST(req) {
  try {
    const { title, ingredients, directions, nutrients, calories, imagePath, userAffiliation, weekAffiliation } = await req.json();

    await connectMongoDB();

    const newRecipe = await Recipe.create({
      title: title,
      ingredients: ingredients,
      directions: directions,
      nutrients: nutrients,
      calories: calories,
      imagePath: imagePath,
      userAffiliation: userAffiliation,
      weekAffiliation: weekAffiliation
    });

    // await User.findByIdAndUpdate(newCourse._id, {
    //   $push: {
    //     folders:
    //       defaultFolder._id
    //   },
    // });

    return NextResponse.json(
      { data: newRecipe },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while adding new course/default file to user" },
      { status: 500 }
    );
  }
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
        { message: error.message },
        { status: 500 }
      );
    }
  }
