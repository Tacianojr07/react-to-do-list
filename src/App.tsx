import { FormEvent, useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { db } from "./services/firebaseConfig";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";

interface taskProps {
  id: string;
  task: string;
}

function App() {
  const [descriptionTask, setDescriptionTask] = useState("");
  const [tasks, setTasks] = useState<taskProps[]>([]);

  useEffect(() => {
    const taskRef = collection(db, "taskUsers");
    const queryRef = query(taskRef, orderBy("created", "asc"));

    const getData = onSnapshot(queryRef, (snapshot) => {
      const tasksPush = [] as taskProps[];

      snapshot.forEach((doc) => {
        tasksPush.push({
          id: doc.id,
          task: doc.data().task,
        });
      });
      setTasks(tasksPush);
    });

    return () => {
      getData();
    };
  }, []);

  function handleCreateTask(e: FormEvent) {
    e.preventDefault();

    addDoc(collection(db, "taskUsers"), {
      task: descriptionTask,
      created: new Date(),
    })
      .then(() => {
        setDescriptionTask("");
        console.log("criado com sucesso");
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }

  async function handleDeleteTask(id: string) {
    const taskRef = doc(db, "taskUsers", id);
    await deleteDoc(taskRef);
  }

  return (
    <div className="flex flex-col w-full h-screen items-center ">
      <header className=" mt-4 mb-11 border-b-2 p-2">
        <h1 className="font-bold text-4xl text-white mt-5">TO-DO NOW</h1>
      </header>

      <form
        onSubmit={handleCreateTask}
        className="flex items-center w-full max-w-xl justify-center  mb-12 border-b-2 pb-6 "
      >
        <input
          className="w-full bg-slate-200 rounded py-1 px-2 outline-none"
          value={descriptionTask}
          onChange={(e) => setDescriptionTask(e.target.value)}
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

      {tasks.map((taskList) => (
        <main className="flex flex-col w-full items-center">
          <section className=" flex flex-col w-full items-center justify-center">
            <div
              key={taskList.id}
              className="flex justify-between w-full max-w-xl bg-slate-950 py-2 px-2 rounded text-white mb-5"
            >
              <p>{taskList.task}</p>

              <button onClick={() => handleDeleteTask(taskList.id)}>
                <BiTrash size={18} color="#fff" />
              </button>
            </div>
          </section>
        </main>
      ))}
    </div>
  );
}

export default App;
