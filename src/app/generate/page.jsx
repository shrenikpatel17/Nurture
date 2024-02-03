"use client"

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "@/app/state/reducers/authSlice";
import { ingredientActions } from "../state/reducers/ingredientSlice";
import { weekActions } from "../state/reducers/weekSlice";
import { useState, useEffect } from "react";


export default function Generate() {
    const [ingredients, setIng] = useState(["Egg", "Tofu"])
    const [path, setPath] = useState("")
    useEffect(() => {
        async function query(data) {
            const response = await fetch(
                "/api/generate",
                {
                  headers: { "Content-Type": "application/json" },
                  method: "POST",
                  body: JSON.stringify(data),
                }
              );
              const result = await response.json();
              return result;
          }
        query({"inputs": "tofu fried rice"}).then((response) => {
            setPath(response.filename)
        });
    }, [])

    return (
        <>
        {path != "" ? <img src={path}></img>
        : <h1>Loading...</h1>
      }
      </>
      );
}