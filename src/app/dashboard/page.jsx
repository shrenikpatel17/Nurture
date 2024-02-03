"use client"

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "@/app/state/reducers/authSlice";
import { ingredientActions } from "../state/reducers/ingredientSlice";
import { weekActions } from "../state/reducers/weekSlice";
import { useState, useEffect } from "react";
import NavBarComponent from "../components/NavBarComponent";
import EssentialsComponent from "../components/EssentialsComponent";
// import NutrientCircleComponent from '../components/NutrientCircleComponent';
import RecipesUsedComponent from '../components/RecipesUsedComponent';
// import RecipesComponent from '../components/RecipesComponent';
import WeekDescriptionComponent from '../components/WeekDescriptionComponent';
// import RecipesViews from '../components/SingleRecipe';
// import SingleRecipe from '../components/SingleRecipe';
// import RecipeDash from '../components/RecipeDash';
import logo from '../../../public/logo.png'
import Image from "next/image"
import Wave from '../../../public/Wave.svg'


export default function Dashboard() {

    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user)

    const activeWeek = useSelector((state) => state.week.activeWeek)
    // console.log(activeWeek)

    const filteredData = useSelector((state) => state.ingredient.filteredData)
    // console.log(filteredData)

    const activeIngredients = useSelector((state) => state.ingredient.activeIngredients)
    // console.log(activeIngredients)

    const activeNutrients = useSelector((state) => state.week.activeNutrients)
    // console.log(activeNutrients)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const nutrients = filteredData["week" + activeWeek]
        // console.log(nutrients)
        dispatch(weekActions.setActiveNutrients(nutrients))
        let ingredients = {}
        // console.log(activeWeek)
        Object.values(nutrients).forEach((nutrient) => {
            let ingredientsObj = nutrient["ingredients"]
            Object.keys(ingredientsObj).forEach((ingredient) => {
                ingredients[ingredient] = ingredientsObj[ingredient]
            })
        })
        // console.log(user.allWeeksNutrientInfo[0]["week" + activeWeek])
        user.allWeeksNutrientInfo["week" + activeWeek].addedIngredients.map((key) => {
            ingredients[key] = {}
        })
        dispatch(ingredientActions.setActiveIngredients(ingredients))
        setIsLoading(false)
    }, [activeWeek])

    return(
        <>
        {!isLoading && <>
            {/* <h1>Week: {activeWeek}</h1>
            <br></br>
            <h1>User's diet: {user.diet}</h1>
            <h1>User's allergies</h1>
            {user.allergies.map((value, index) => {
                return(<p key={index}>{value}</p>)
            })}
            <br></br>
            <h1>Nutrients:</h1>
            {Object.keys(activeNutrients).map((nutrient, index) => {
                return(<p key={index}>{nutrient}</p>)
            })}
            <br></br>
            <h1>Ingredients:</h1>
            {Object.keys(activeIngredients).map((ingredient, index) => {
                return(<p key={index}>{ingredient}</p>)
            })}
            <br></br>
            <button onClick={()=>{dispatch(weekActions.setActiveWeek(activeWeek + 1))}}>Next week</button> */}

            <div className='relative'>
  <div className=''>
  <Image src={logo} width={200} height={200} className='absolute ml-6 mt-2'></Image>
  <h1 className='text-white text-8xl p-5 mt-16 font-Jua absolute'>{user.firstName}'s Nutrition</h1>
  {/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="z-0 transition duration-300 ease-in-out delay-150">
    <path d="M 0,400 L 0,60 C 84.04784688995213,45.655502392344495 168.09569377990425,31.31100478468899 254,40 C 339.90430622009575,48.68899521531101 427.665071770335,80.41148325358851 525,89 C 622.334928229665,97.58851674641149 729.244019138756,83.04306220095695 828,74 C 926.755980861244,64.95693779904305 1017.3588516746411,61.41626794258373 1118,60 C 1218.641148325359,58.58373205741627 1329.3205741626793,59.291866028708135 1440,60 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#eb144c" fill-opacity="0.265" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
  <path d="M 0,400 L 0,140 C 82.23923444976077,145.08133971291866 164.47846889952154,150.16267942583733 273,156 C 381.52153110047846,161.83732057416267 516.3253588516745,168.43062200956936 604,162 C 691.6746411483255,155.56937799043064 732.2200956937801,136.11483253588517 832,124 C 931.7799043062199,111.88516746411483 1090.7942583732058,107.11004784688996 1202,111 C 1313.2057416267942,114.88995215311004 1376.6028708133972,127.44497607655502 1440,140 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#eb144c" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path>
  <path d="M 0,400 L 0,220 C 92.57416267942583,221.86602870813397 185.14832535885165,223.73205741626796 283,222 C 380.85167464114835,220.26794258373204 483.98086124401914,214.93779904306217 566,211 C 648.0191387559809,207.06220095693783 708.9282296650717,204.51674641148324 820,208 C 931.0717703349283,211.48325358851676 1092.3062200956938,220.99521531100478 1204,224 C 1315.6937799043062,227.00478468899522 1377.846889952153,223.5023923444976 1440,220 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#eb144c" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path>
  <path d="M 0,400 L 0,300 C 115.80861244019138,292.43062200956933 231.61722488038276,284.8612440191387 308,277 C 384.38277511961724,269.1387559808613 421.3397129186603,260.9856459330144 526,272 C 630.6602870813397,283.0143540669856 803.0239234449759,313.19617224880386 916,326 C 1028.976076555024,338.80382775119614 1082.5645933014355,334.22966507177034 1160,327 C 1237.4354066985645,319.77033492822966 1338.7177033492821,309.88516746411483 1440,300 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#eb144c" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3" transform="rotate(-180 720 200)"></path>
  </svg> */}
  {/* <svg className="z-0" viewBox="0 0 500 100">
  <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#F497AA" opacity="0.8"></path>
 <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#EAA9B3" opacity="0.5"></path>
 <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#DB425D" opacity="0.8"></path>
</svg> */}
  <Image src={Wave} width={2000} height={1} className=''></Image>
  </div> 
  </div>
  {/* <TrimesterTimeline /> */}
  <div className='w-screen left-0 overflow-hidden'>
  <div className='absolute -mt-[26rem]'>
  <EssentialsComponent activeNutrients={activeNutrients} activeWeek={activeWeek}/>
  <RecipesUsedComponent />
  </div>
  </div>
  <WeekDescriptionComponent activeWeek={activeWeek} />
  {/* <ArticleComponent />
  <TextComponent /> */}
  <NavBarComponent />  

  {/* <Example /> */}
  {/* <Carousel> */}
  {/* <ScrollContainer>
    <ScrollPage>
      <Animator animation={(Fade(), Sticky())}>
        <ArticleComponent />
        <TextComponent />
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={(Fade(), Sticky())}>
        <VideosComponent />
        <VideosComponent />
      </Animator>
    </ScrollPage>
  </ScrollContainer> */}
  {/* </Carousel> */}
{/* <WeekEssentialsComponent />
<BabysDevComponent /> */}

<div className=''>
<footer className='flex justify-end mr-2 w-full fixed bottom-0'>
{/* <footer className='flex justify-end mr-2 w-full relative bottom-0'> */}
  <div className=''><span className="text-maroon text-md font-Abril">made with </span><span className="text-rose-500 text-md font-normal font-['Inter']">❤ </span><span className="text-maroon text-md font-Abril">from NJ</span><span className="text-rose-500 text-md font-normal font-['Inter']"> ️</span></div>
</footer>
{/* IF COLLAPSIBLE COMPONENT IS TOGGLED POSITION NEEDS TO CHANGE TO RELATIVE  */}
</div>
            </>
        }
</>
    )

}