import Sidebar from "../Sidebar/page";
export default function Admin() {
    return (
      <section className="flex items-center min-h-screen">
        <Sidebar/>
        <div>
          <h1 className="text-4xl font-bold text-center">Add Admin/Subuser</h1>
        </div>
      </section>
    );
  }
  