'use client'
import CircularProgress from '@mui/joy/CircularProgress';
import Box from '@mui/joy/Box';
import { useSelector, useDispatch } from "react-redux";


const LoadingScreen = () => {
    return (
    <div className='w-full z-999 bg-bg  absolute'>
    <p className='text-6xl z-9999 top-60 animate-pulse p-5 mt-20 text-maroon font-Jua absolute'>Creating the best meals for you and your little one...</p>
    </div>
    );
}

export default LoadingScreen