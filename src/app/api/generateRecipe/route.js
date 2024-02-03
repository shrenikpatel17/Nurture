import { connectMongoDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@/app/models/User";
import { env } from "node:process";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(req) {
    try {
        const data = await req.json()
        console.log(data)
        const response = await fetch(
            "https://api-inference.huggingface.co/models/flax-community/t5-recipe-generation",
            {
                headers: { Authorization: "Bearer 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"},
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        console.log(result[0]);
        console.log(result[0].generated_text);

        return NextResponse.json({ result: result[0].generated_text, status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err.message });
    }
}