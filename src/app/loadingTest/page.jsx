"use client"

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { authActions } from "@/app/state/reducers/authSlice";
import { ingredientActions } from "../state/reducers/ingredientSlice";
import { weekActions } from "../state/reducers/weekSlice";
import LoadingScreen from "../components/LoadingScreen"

export default function LoadingTest() {
    
    return (
       <>
       <LoadingScreen/>
       </>
    )
  }
  