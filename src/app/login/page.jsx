"use client"

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { authActions } from "@/app/state/reducers/authSlice";
import { ingredientActions } from "../state/reducers/ingredientSlice";
import { weekActions } from "../state/reducers/weekSlice";
// import { signIn } from "next-auth/react"
const data = require("../data.json"); 
  
export default function Login() {
  // const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!e.target.email.value || !e.target.password.value) {
  //     return "All fields are required";
  //   }

  //   try {
  //     console.log("About to signin")
  //     const res = await signIn("credentials", {
  //       email: e.target.email.value,
  //       password: e.target.password.value,
  //       redirect: false,
  //     });



  //     if (res?.error) {
  //       console.log("Error")
  //       return "Error has occured"
  //     }

  //     router.replace("/")
  //     console.log("Should be replaced")


  //   } catch (error) {
  //     console.log("Error during registration: ", error);
  //   }

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!e.target.email.value || !e.target.password.value) {
      return "All fields are required";
    }
    const loggedInResponse = await fetch("api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    const loggedIn = await loggedInResponse.json();
    if (loggedIn.token) {
      dispatch(
        authActions.setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );

      //filter function
      let filteredIngredients = {}

      for (const [week, nutrients] of Object.entries(data)) {
        for(const [nutrient, nutrientData] of Object.entries(nutrients)){
          const ingredients = nutrientData["ingredients"]
          Object.keys(ingredients).forEach((ingredient) => {
            let allergic = false;
            for(allergy in ingredient["allergies"]){
              if(loggedIn.user.allergies.includes(allergy)){
                allergic = true;
              }
            }
            if (!(ingredient["diet_restrictions"].includes(loggedIn.user.diet) || allergic)){
              filteredIngredients[week][nutrient]["ingredients"][ingredient] = ingredients[ingredient]
            } 
          })
          filteredIngredients[week][nutrient]["description"] = nutrientData["description"]
          filteredIngredients[week][nutrient]["meals"] = nutrientData["meals"]
        }
      };

      
      
      dispatch(
        ingredientActions.setFilteredData(filteredIngredients)
      )

      dispatch(weekActions.setActiveWeek(loggedIn.user.weeksIntoPregnancy))
      // dispatch(
      //   courseActions.loadCourses(
      //     loggedIn.user.courses
      //   )
      // );
      e.target.reset();
      router.push("/dashboard");
    }
    else{
      console.log(loggedIn.msg);
    }
  };

    return (
        <div className="mt-20">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
        <div className="w-10/12 bg-white shadow-lg border border-transparent rounded-3xl max-w-sm p-10 sm:p-10 lg:p-12 dark:bg-white dark:border-transparent">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-xl text-center font-biscuitThin">nurture</h1>
            {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            <h2 className="mt-5 text-center text-2xl font-biscuitMed leading-9 text-black">
              Log in to your account
            </h2>
          </div>
  
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-biscuitReg leading-6 text-dark-gray">
                  Email 
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="font-biscuitReg block w-full rounded-2xl border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-light-gray focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 hover:bg-blue"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="font-biscuitReg block text-sm font-biscuitReg leading-6 text-dark-gray">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-biscuitThin text-dark-gray hover:text-black ">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 hover:bg-blue"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-2xl bg-black px-3 py-1.5 text-sm font-biscuitMed leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-dark-gray font-biscuitReg">
              Don&apos;t have an account?{' '}
              <a href="/" className="font-biscuitMed leading-6 text-dark-gray hover:text-black">
                Sign up
              </a>
            </p>
          </div>
          </div>
        </div>
        </div>
    )
  }
  