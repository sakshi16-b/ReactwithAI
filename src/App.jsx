import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { URL } from "./constants ";

function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(undefined);
  const payload = {
    contents: [
      {
        parts: [{ text: question }],
      },
    ],
  };

  const askQuestion = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    response = await response.json();
    console.log(response.candidates[0].content.parts[0].text);
    setResult(response.candidates[0].content.parts[0].text);
  };

  // useEffect(() => {
  //   console.log(darkMode);
  //   if (darkMode == "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);
  return (
    <>
      <div className="grid grid-cols-5 h-screen text-center">
        <select
          // onChange={(e) => setDarkMode(e.target.value)}
          className="fixed text-white bottom-0 p-5"
        >
          <option value="dark" className="bg-gray-50 text-black">
            Dark
          </option>
          <option value="light">Light</option>
        </select>
        <div className="col-span-1 bg-zinc-800 text-2xl">Heeloo</div>
        <div className="col-span-4 p-10">
          <div className="container h-160">
            <div className="text-white">{result}</div>
          </div>
          <div className="bg-zinc-800  p-1 pr-5 w-1/2 text-white border-zinc-700 m-auto rounded-4xl flex h-16">
            <input
              type="text"
              className="w-full h-full p-3 outline-none"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask me Anything"
            />
            <button onClick={askQuestion}> Ask</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
