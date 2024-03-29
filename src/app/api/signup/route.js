import { connectMongoDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@/app/models/User";

export async function POST(req) {
  try {
    const { firstName, lastName, email, password, weeksIntoPregnancy, allergies, diet } = await req.json();

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await connectMongoDB();
    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      weeksIntoPregnancy,
      allergies,
      diet,
      favoriteRecipes: [],
      allWeeksNutrientInfo: {
        week1: {
            addedIngredients: [],
            eatenRecipes: [],
            nutrientContent: {
                "Folic Acid": 0,
                "Omega-3 Fatty Acids": 0,
                "Vitamin D": 0,
                "Iron": 0,
            },
        },
        week2: {
          addedIngredients: [],
          eatenRecipes: [],
          nutrientContent: {
              "Folic Acid": 0,
              "Omega-3 Fatty Acids": 0,
              "Vitamin D": 0,
              "Iron": 0,
          },
      },
      week3: {
        addedIngredients: [],
        eatenRecipes: [],
        nutrientContent: {
            "Folic Acid": 0,
            "Omega-3 Fatty Acids": 0,
            "Vitamin D": 0,
            "Iron": 0,
        },
    },
    week4: {
        addedIngredients: [],
        eatenRecipes: [],
        nutrientContent: {
            "Folic Acid": 0,
            "Omega-3 Fatty Acids": 0,
            "Vitamin D": 0,
            "Iron": 0,
        },
    },
    week5: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Calcium": 0,
          "Magnesium": 0,
          "Vitamin C": 0,
          "Zinc": 0,
          "Vitamin E": 0,
          "Vitamin B6": 0,
      },
    },
    week6: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Calcium": 0,
          "Magnesium": 0,
          "Vitamin C": 0,
          "Zinc": 0,
          "Vitamin E": 0,
          "Vitamin B6": 0,
      },
    },
    week7: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Calcium": 0,
          "Magnesium": 0,
          "Vitamin C": 0,
          "Zinc": 0,
          "Vitamin E": 0,
          "Vitamin B6": 0,
      },
    },
    week8: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Calcium": 0,
          "Magnesium": 0,
          "Vitamin C": 0,
          "Zinc": 0,
          "Vitamin E": 0,
          "Vitamin B6": 0,
      },
    },
    week9: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin A": 0,
          "Vitamin B12": 0,
          "Choline": 0,
          "Iodine": 0,
          "Vitamin B9": 0,
          "Coenzyme Q10": 0,
      },
    },
    week10: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin A": 0,
          "Vitamin B12": 0,
          "Choline": 0,
          "Iodine": 0,
          "Vitamin B9": 0,
          "Coenzyme Q10": 0,
      },
    },
    week11: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin A": 0,
          "Vitamin B12": 0,
          "Choline": 0,
          "Iodine": 0,
          "Vitamin B9": 0,
          "Coenzyme Q10": 0,
      },
    },
    week12: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin A": 0,
          "Vitamin B12": 0,
          "Choline": 0,
          "Iodine": 0,
          "Vitamin B9": 0,
          "Coenzyme Q10": 0,
      },
    },
    week13: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Omega-3 Fatty Acids": 0,
          "Vitamin C": 0,
          "Vitamin D": 0,
          "Vitamin E": 0,
          "Iron": 0,
          "Vitamin K": 0,
          "Vitamin B3": 0,
          "Vitamin B5": 0,
      },
    },
    week14: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Omega-3 Fatty Acids": 0,
          "Vitamin C": 0,
          "Vitamin D": 0,
          "Vitamin E": 0,
          "Iron": 0,
          "Vitamin K": 0,
          "Vitamin B3": 0,
          "Vitamin B5": 0,
      },
    },
    week15: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Omega-3 Fatty Acids": 0,
          "Vitamin C": 0,
          "Vitamin D": 0,
          "Vitamin E": 0,
          "Iron": 0,
          "Vitamin K": 0,
          "Vitamin B3": 0,
          "Vitamin B5": 0,
      },
    },
    week16: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Omega-3 Fatty Acids": 0,
          "Vitamin C": 0,
          "Vitamin D": 0,
          "Vitamin E": 0,
          "Iron": 0,
          "Vitamin K": 0,
          "Vitamin B3": 0,
          "Vitamin B5": 0,
      },
    },
    week17: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Zinc": 0,
          "Selenium": 0,
          "Vitamin B1": 0,
          "Vitamin B2": 0,
          "Vitamin B7": 0,
          "Vitamin B9": 0,
      },
    },
    week18: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Zinc": 0,
          "Selenium": 0,
          "Vitamin B1": 0,
          "Vitamin B2": 0,
          "Vitamin B7": 0,
          "Vitamin B9": 0,
      },
    },
    week19: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Zinc": 0,
          "Selenium": 0,
          "Vitamin B1": 0,
          "Vitamin B2": 0,
          "Vitamin B7": 0,
          "Vitamin B9": 0,
      },
    },
    week20: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Zinc": 0,
          "Selenium": 0,
          "Vitamin B1": 0,
          "Vitamin B2": 0,
          "Vitamin B7": 0,
          "Vitamin B9": 0,
      },
    },
    week21: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin B3": 0,
          "Vitamin B5": 0,
          "Vitamin B7": 0,
          "Vitamin B9": 0,
          "Vitamin B12": 0,
          "Iron": 0,
          "Calcium": 0,
          "Magnesium": 0,
      },
    },
    week22: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin B3": 0,
          "Vitamin B5": 0,
          "Vitamin B7": 0,
          "Vitamin B9": 0,
          "Vitamin B12": 0,
          "Iron": 0,
          "Calcium": 0,
          "Magnesium": 0,
      },
    },
    week23: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin B3": 0,
          "Vitamin B5": 0,
          "Vitamin B7": 0,
          "Vitamin B9": 0,
          "Vitamin B12": 0,
          "Iron": 0,
          "Calcium": 0,
          "Magnesium": 0,
      },
    },
    week24: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin B3": 0,
          "Vitamin B5": 0,
          "Vitamin B7": 0,
          "Vitamin B9": 0,
          "Vitamin B12": 0,
          "Iron": 0,
          "Calcium": 0,
          "Magnesium": 0,
      },
    },
    week25: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin D": 0,
          "Vitamin E": 0,
          "Vitamin K": 0,
          "Vitamin B9": 0,
          "Omega-3 Fatty Acids": 0,
          "Iron": 0,
          "Choline": 0,
          "Iodine": 0,
          "Coenzyme Q10": 0,
      },
    },
    week26: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin D": 0,
          "Vitamin E": 0,
          "Vitamin K": 0,
          "Vitamin B9": 0,
          "Omega-3 Fatty Acids": 0,
          "Iron": 0,
          "Choline": 0,
          "Iodine": 0,
          "Coenzyme Q10": 0,
      },
    },
    week27: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin D": 0,
          "Vitamin E": 0,
          "Vitamin K": 0,
          "Vitamin B9": 0,
          "Omega-3 Fatty Acids": 0,
          "Iron": 0,
          "Choline": 0,
          "Iodine": 0,
          "Coenzyme Q10": 0,
      },
    },
    week28: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin D": 0,
          "Vitamin E": 0,
          "Vitamin K": 0,
          "Vitamin B9": 0,
          "Omega-3 Fatty Acids": 0,
          "Iron": 0,
          "Choline": 0,
          "Iodine": 0,
          "Coenzyme Q10": 0,
      },
    },
    week29: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Zinc": 0,
          "Selenium": 0,
          "Vitamin B1": 0,
          "Vitamin B2": 0,
          "Vitamin B6": 0,
          "Calcium": 0,
          "Magnesium": 0,
          "Potassium": 0,
      },
    },
    week30: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Zinc": 0,
          "Selenium": 0,
          "Vitamin B1": 0,
          "Vitamin B2": 0,
          "Vitamin B6": 0,
          "Calcium": 0,
          "Magnesium": 0,
          "Potassium": 0,
      },
    },
    week31: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Zinc": 0,
          "Selenium": 0,
          "Vitamin B1": 0,
          "Vitamin B2": 0,
          "Vitamin B6": 0,
          "Calcium": 0,
          "Magnesium": 0,
          "Potassium": 0,
      },
    },
    week32: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Zinc": 0,
          "Selenium": 0,
          "Vitamin B1": 0,
          "Vitamin B2": 0,
          "Vitamin B6": 0,
          "Calcium": 0,
          "Magnesium": 0,
          "Potassium": 0,
      },
    },
    week33: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin B7": 0,
          "Vitamin B9": 0,
          "Vitamin B12": 0,
          "Vitamin C": 0,
          "Vitamin D": 0,
          "Vitamin E": 0,
          "Iron": 0,
          "Vitamin K": 0,

      },
    },
    week34: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin B7": 0,
          "Vitamin B9": 0,
          "Vitamin B12": 0,
          "Vitamin C": 0,
          "Vitamin D": 0,
          "Vitamin E": 0,
          "Iron": 0,
          "Vitamin K": 0,

      },
    },
    week35: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin B7": 0,
          "Vitamin B9": 0,
          "Vitamin B12": 0,
          "Vitamin C": 0,
          "Vitamin D": 0,
          "Vitamin E": 0,
          "Iron": 0,
          "Vitamin K": 0,

      },
    },
    week36: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Vitamin B7": 0,
          "Vitamin B9": 0,
          "Vitamin B12": 0,
          "Vitamin C": 0,
          "Vitamin D": 0,
          "Vitamin E": 0,
          "Iron": 0,
          "Vitamin K": 0,

      },
    },
    week37: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Calcium": 0,
          "Magnesium": 0,
          "Zinc": 0,
          "Vitamin E": 0,
          "Vitamin D": 0,
          "Iron": 0,
          "Vitamin K": 0,
          "Omega-3 Fatty Acids": 0,
      },
    },
    week38: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Calcium": 0,
          "Magnesium": 0,
          "Zinc": 0,
          "Vitamin E": 0,
          "Vitamin D": 0,
          "Iron": 0,
          "Vitamin K": 0,
          "Omega-3 Fatty Acids": 0,
      },
    },
    week39: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Calcium": 0,
          "Magnesium": 0,
          "Zinc": 0,
          "Vitamin E": 0,
          "Vitamin D": 0,
          "Iron": 0,
          "Vitamin K": 0,
          "Omega-3 Fatty Acids": 0,
      },
    },
    week40: {
      addedIngredients: [],
      eatenRecipes: [],
      nutrientContent: {
          "Calcium": 0,
          "Magnesium": 0,
          "Zinc": 0,
          "Vitamin E": 0,
          "Vitamin D": 0,
          "Iron": 0,
          "Vitamin K": 0,
          "Omega-3 Fatty Acids": 0,
      },
    },    
  }
    });

    return NextResponse.json({ message: "User signed up." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred during user sign up." },
      { status: 500 }
    );
  }
}