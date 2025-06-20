import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (!existingUser) {
      return new Response(JSON.stringify({ message: "user not found" }), {
        status: 404,
      });
    }
    const user = await prisma.user.findUnique({
      where: { email },
    });
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return new Response(JSON.stringify({ message: "user founded",token }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "server error" }), {
      status: 500,
    });
  }
}
