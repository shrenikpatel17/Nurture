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
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
            {
              headers: { Authorization: "Bearer " + env.hfKey },
              method: "POST",
              body: JSON.stringify(data),
            }
        );
        const result = await response.blob();

        const buffer = Buffer.from(await result.arrayBuffer());
        const filename = `${Date.now()}.png`

        await writeFile(
            path.join(process.cwd(), "public/" + filename),
            buffer
          );

        return NextResponse.json({ filename, status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err.message });
    }
}