import { BiTrash } from "react-icons/bi";

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center ">
      <header className=" mt-4 mb-11 border-b-2 p-2">
        <h1 className="font-bold text-4xl text-white mt-5">TO-DO NOW</h1>
      </header>

      <form className="flex items-center w-full max-w-xl justify-center  mb-12 border-b-2 pb-6 ">
        <input
          className="w-full bg-slate-200 rounded py-1 px-2 outline-none"
          type="text"
          required
        />
        <button
          className=" bg-slate-700 rounded w-36 h-8  font-bold text-white py-1 px-2 "
          type="submit"
        >
          Add task
        </button>
      </form>

      <main className="flex flex-col w-full items-center">
        <section className=" flex flex-col w-full items-center justify-center">
          <div className="flex justify-between w-full max-w-xl bg-slate-950 py-2 px-2 rounded text-white mb-5">
            <p>this a task</p>

            <button>
              <BiTrash size={18} color="#fff" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
