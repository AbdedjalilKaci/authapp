import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, password } = body;
    const existinguser = await prisma.user.findUnique({
      where: { email },
    });
    if (existinguser) {
      return new Response(JSON.stringify({ message: "user aleardy exist" }), {
        status: 409,
      });
    };

    const newuser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    });
    return new Response(
      JSON.stringify({
        message: "user registered",
        userid: newuser.id,
        userfirstname: newuser.firstName,
        userlastname: newuser.lastName,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup Error:", error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}
