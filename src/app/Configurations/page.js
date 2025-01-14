import Sidebar from "../Sidebar/page";
import Navbar from "../Navbar/page";


export default function Configurations() {
  return (
    <section>
      <Navbar/>
       <section className="flex items-center min-h-screen">
      
      <Sidebar />
      <div>
        <h1 className="text-4xl font-bold text-center"></h1>
      </div>
    </section>
    </section>
   
  );
}
