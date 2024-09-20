import NavLinks from "./ui/Navbar";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen font-bold">
      <h1 className="text-5xl">Welcome to my world of web development</h1>
      <div className="flex flex-row"><NavLinks /></div>
      <h2>It's a simple website with mongodb CRUD operations made wth Nextsjs (React framework)</h2>
      <h2>Made by -Sourabh Pargai</h2>
      <h2>Sourabhpargai1234@gmail.com</h2>
    </div>
  );
}
