"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { status, data: session } = useSession();
  const imageUrl='/noimage.png'
  console.log(imageUrl)
  console.log("Session=",session)
  console.log("id: ",session?.user?.id)

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div className="w-full">
          <div className="float-left">
            <h1 className="text-3xl">Welcome {session?.user?.username}</h1>
          </div>
          <img
                src={imageUrl}
                alt='Profile pic'
                height={100}
                width={100}
                className="float-right rounded-full"
              />
        </div>
      );
    } else if (status === "loading") {
      return (
        <div className="h-full flex justify-center items-center">
            <h1 className="text-5xl">Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="flex h-full justify-center items-center">
          <Link
            href="/ui/login"
            className="font-bold text-5xl text-[#888] inline-block  md:ml-0 transition duration-150 ease hover:text-white flex absolute hover:bg-green-400 transition-transform duration-300 ease-in-out transform hover:scale-200 hover:rounded-xl"
          >
            Login here
          </Link>
        </div>
      );
    }
  };

  return (
    <main className="flex flex-col h-full sm:h-full w-full relative">
      {showSession()}
    </main>
  );
}