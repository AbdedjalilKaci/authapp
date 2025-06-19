import WelcomeSide from "@/components/welcom/welcomside";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href="/auth/Login">Login</Link>
    </div>
  );
}
