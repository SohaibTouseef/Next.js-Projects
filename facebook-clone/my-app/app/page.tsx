import Image from "next/image";
import Facebook from "./picture/facebook-logo.jpeg"

export default function Home() {
  return (
   <div className="bg-gray-100 text-black h-screen flex items-center justify-center">
    {/* left side/ */}
    <div className="text-3xl w-1/2 px-10">

      <Image src={Facebook} width={100} height={100} alt="Facebook logo"/>

      <p className="ml-8 -mt-3">Facebook helps you connect and share with the people in your life</p>
    </div>
    {/* right side */}
    <div className="bg-white flex flex-col p-5 rounded-xl w-1/3">
      <input  className="my-2 border-1 border-gray-100 p-3 rounded-md focus: outline-1 outline-blue-600 " type="text" placeholder="Email address or phone numbrer" />
      <input className="my-2 border-1 border-gray-100 p-3 rounded-md focus: outline-1 outline-blue-600 " type="password" placeholder="Password" />

      <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-800">Log in</button>

      <p className= "cursor-pointer text-green-600 my-2 text-center hover:underline">Forgotten password?</p>
      <span className="my-2" >
        <hr />
      </span>
      <button className="bg-green-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-green-800 w-fit mx-auto">
        Create new account-
      </button>
    </div>
   </div>
  );
}
