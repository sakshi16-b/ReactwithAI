import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState("dark");

  useEffect(() => {
    console.log(darkMode);
    if (darkMode == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <div className={darkMode == "dark" ? "dark" : "light"}>
        <div className="grid grid-cols-5 h-screen text-center">
          <select
            onChange={(e) => setDarkMode(e.target.value)}
            className="fixed text-white bottom-0 p-5"
          >
            <option value="dark" className="bg-gray-50 text-black">
              Dark
            </option>
            <option value="light">Light</option>
          </select>
          <div className="col-span-1 bg-zinc-800 text-2xl">Heeloo</div>
          <div className="col-span-4 p-10">
            <div className="container h-160"></div>

            <div className="bg-zinc-800  p-1 w-1/2 text-white border-zinc-400 m-auto rounded-2xl flex">
              <input
                type="text"
                className="w-full h-full p-3 outline-none"
                placeholder="Ask me Anything"
              />
              <button>Ask</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
