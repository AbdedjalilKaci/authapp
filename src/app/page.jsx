import WelcomeSide from "@/components/welcom/welcomside";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center py-50">
      <Link className="w-20 h-10 flex justify-center items-center rounded-[10px] font-semibold bg-emerald-400" href="/auth/Login">Login</Link>
      <Link className="w-20 h-10 flex justify-center items-center rounded-[10px] font-semibold bg-emerald-400" href="/auth/Register">Sign up</Link>
    </div>
  );
}
