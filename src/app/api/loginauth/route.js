import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;
    //     const body = await req.json();
    // const { firstName, lastName, email, password } = body;
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (!existingUser) {
      return new Response(JSON.stringify({ message: "user not found" }), {
        status: 404,
      });
    }
    // user = await prisma.user.findUnique({
    //   where: { email },
    // });
    return new Response(
      JSON.stringify({ message: "user founded"}),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "server error" }), {
      status: 500,
    });
  }
}
