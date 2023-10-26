import { BiTrash } from "react-icons/bi";

function App() {
  return (
    <div>
      <header>
        <h1>TO-DO NOW</h1>
      </header>

      <form>
        <input type="text" required />
        <button type="submit">Add task</button>
      </form>

      <main>
        <section>
          <div>
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
