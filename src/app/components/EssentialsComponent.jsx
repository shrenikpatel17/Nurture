'use client'
import NutrientCircleComponent from "./NutrientCircleComponent"
import { useSelector, useDispatch } from "react-redux";

const EssentialsComponent = (props) => {


    return (
        <>
        <h2 className='font-Jua text-4xl text-maroon mb-2 p-4 ml-2'>Your Essential Nutrients</h2>
        <div className="flex flex-row w-[55rem] overflow-scroll ml-6 space-x-6">
            {Object.keys(props.activeNutrients).map((nutrient, index) => {
                return(<NutrientCircleComponent nutrient={nutrient} activeNutrients={props.activeNutrients} activeWeek={props.activeWeek} key={index}/>)
            })}
            {/* <NutrientCircleComponent />
            <NutrientCircleComponent />
            <NutrientCircleComponent />
            <NutrientCircleComponent />
            <NutrientCircleComponent />
            <NutrientCircleComponent />
            <NutrientCircleComponent />
            <NutrientCircleComponent /> */}
        </div>

        </>
    )
}

export default EssentialsComponent