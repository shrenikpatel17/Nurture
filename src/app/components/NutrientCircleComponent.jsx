'use client'
import CircularProgress from '@mui/joy/CircularProgress';
import Box from '@mui/joy/Box';
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       background: 'linear-gradient(#e66465, #9198e5)',
//     },
//     secondary: {
//       main: '#E0C2FF',
//       light: '#F5EBFF',
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: '#47008F',
//     },
//   },
// });
import { useSelector, useDispatch } from "react-redux";


const NutrientCircleComponent = (props) => {
    // const activeNutrients = useSelector((state) => state.week.activeNutrients)
    // console.log(activeNutrients)
    const user = useSelector((state) => state.auth.user)
    // const activeWeek = useSelector((state) => state.week.activeWeek)
    const activeNutrients = props.activeNutrients
    const activeWeek = props.activeWeek

    // console.log(user.allWeeksNutrientInfo[0])
    // console.log(user.allWeeksNutrientInfo[0]["week"+activeWeek])
    // console.log(activeNutrients)
    return (
        <>
        {/* <h2 className='font-Jua text-4xl text-maroon mb-24 p-4'>Your Essential Nutrients</h2> */}
    <div className=''>
            {/* <CircularProgress determinate value={75} color='danger' thickness={9} sx={{ '--CircularProgress-size': '125px' }}>
                <div className='flex flex-col items-center'>
                    <p className='font-Jua text-4xl text-maroon'>75%</p>
                    <p className='text-sm font-Jua text-maroon'>Folic Acid</p>
                </div>
            </CircularProgress> */}
            {console.log(user.allWeeksNutrientInfo)}
            {console.log(activeWeek)}
            <CircularProgress determinate value={user.allWeeksNutrientInfo["week" + activeWeek]["nutrientContent"][props.nutrient]*100} color='danger' thickness={9} sx={{ '--CircularProgress-size': '125px' }}>
        <div className='flex flex-col items-center'>
            <p className='font-Jua text-4xl text-maroon mt-4'>{user.allWeeksNutrientInfo["week" + activeWeek]["nutrientContent"][props.nutrient]*100}%</p>
            <div className='flex'>
                <div className='h-full w-72'>
                    <a className='flex justify-center -mt-6'>
                        <button onClick={()=>document.getElementById(props.nutrient).showModal()}
                            className="relative pt-4 pb-4 bg-transparent active:scale-95 duration-100 will-change-transform overflow-hidden relative rounded-xl transition-all flex">
                            <div className="relative flex items-center transition-all opacity-1 w-24 h-8">
                                <span className="relative bg-maroon inline-block text-transparent bg-clip-text text-sm font-Jua text-xl whitespace-nowrap truncate mx-auto ">
                                {props.nutrient}
                                </span>
                            </div>
                        </button>
                        <dialog id={props.nutrient} className="modal">
                            <div className="modal-box bg-dark-pink">
                                <h3 className="font-bold text-3xl text-maroon font-Jua">{props.nutrient}</h3>
                                <hr className="h-px bg-darker-pink border-0 w-full"></hr>

                                <p className="py-4 text-xl text-maroon font-Jua">{activeNutrients[props.nutrient]["definition"]}</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                  </a>
                </div>
            </div>
            </div>
            </CircularProgress>
    </div>
        </>
    )
}

export default NutrientCircleComponent