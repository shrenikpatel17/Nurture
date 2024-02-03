'use client'
import { useSelector, useDispatch } from "react-redux";
import { weekActions } from "../state/reducers/weekSlice";

const descriptions = require('../descriptions.json')


const WeekDescriptionComponent = (props) => {
    const dispatch = useDispatch();

    const prev = () => {
        dispatch(weekActions.setActiveWeek(activeWeek - 1))
    }
    const next = () => {
        dispatch(weekActions.setActiveWeek(activeWeek + 1))
    }

    const activeWeek = props.activeWeek
    return (
        <>
            <div className="bg-gradient-to-b from-red-gradient to-orange-gradient rounded-2xl mt-8 p-4 w-[25rem] h-[33rem] absolute right-20 top-80 ml-4">
                {/* <h2 className='font-CBYG text-5xl text-white mb-4 ml-4'>Week 1</h2> */}
                <div className="join flex items-center justify-center mb-4">
        <button onClick={prev} className="join-item btn bg-transparent border-0 hover:bg-med-red text-maroon">«</button>
        <button className="join-item btn font-Jua text-5xl text-white bg-transparent border-0 hover:bg-med-red">Week {activeWeek}</button>
        <button onClick={next} className="join-item btn bg-transparent border-0 hover:bg-med-red text-maroon">»</button>
        </div>                
        <div className="bg-white rounded-2xl p-4 mr-4 ml-4 mb-6 h-[26rem]">
                    <p className="font-Jua text-2xl text-maroon"></p>
                    <p className="font-Jua text-md text-maroon"> {descriptions["week" + activeWeek]} </p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                </div>
            </div>
        </>
    )
}

export default WeekDescriptionComponent