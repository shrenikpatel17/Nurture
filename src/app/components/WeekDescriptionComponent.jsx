'use client'
import { useSelector, useDispatch } from "react-redux";

const descriptions = require('../descriptions.json')

const WeekDescriptionComponent = (props) => {
    const activeWeek = props.activeWeek

    return (
        <>
            <div className="bg-gradient-to-b from-red-gradient to-orange-gradient rounded-2xl mt-8 p-4 w-[25rem] absolute right-20 top-80 ml-4">
                <h2 className='font-CBYG text-5xl text-white mb-4 ml-4'>Week {activeWeek}</h2>
                <div className="bg-white rounded-2xl p-4 mr-4 ml-4 mb-6">
                    {/* <p className="font-Jua text-2xl text-maroon">Your baby is the size of a watermelon!</p> */}
                    <p className="font-Jua text-md text-maroon -mt-2"><br></br>{descriptions["week" + activeWeek]}</p>
                </div>
            </div>
        </>
    )
}

export default WeekDescriptionComponent