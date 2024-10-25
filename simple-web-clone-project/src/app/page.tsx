
import Footers from "@/components/Footers";
import Headers from "@/components/Headers";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col h-screen">
    <Headers/>
    <main className="flex-grow">
      <div className="flex flex-col items-center justify-center bg-gray-100 h-screen">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to our Website!</h1>
        <p className="text-lg mt-4">This is the home page of the website.</p>
      </div>
    </main>
    <Footers/>
   </div>
  );
}
