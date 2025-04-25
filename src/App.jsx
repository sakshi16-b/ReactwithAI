import { useId, useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { URL } from "./constants ";
import Answers from "./Answers";

function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState([]);
  const [recenthistory, setRecentHistory] = useState([]);
  const payload = {
    contents: [
      {
        parts: [{ text: question }],
      },
    ],
  };

  const askQuestion = async () => {
    if (localStorage.getItem("history")) {
      let history = JSON.parse(localStorage.getItem("history"));
      history = [question, ...history];
      localStorage.setItem("history", JSON.stringify(history));
      setRecentHistory(history);
    } else {
      localStorage.setItem("history", JSON.stringify([question]));
      setRecentHistory(question);
    }
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    response = await response.json();
    let dataString = response.candidates[0].content.parts[0].text;
    dataString = dataString.split("* ");
    dataString = dataString.map((item) => item.trim());
    setResult([
      ...result,
      { type: "q", text: question },
      { type: "a", text: dataString },
    ]);
  };
  console.log(recenthistory);

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
        <div className="col-span-1 bg-zinc-800 text-2xl">
          <h1 className="text-xl text-white">Recent Searches</h1>
          <ul className="text-left overflow-auto text-sm">
            {recenthistory &&
              recenthistory.map((item, index) => (
                <li
                  className="p-1 pl-5 text-zinc-400 cursor-pointer hover:bg-zinc-600 hover:text-zinc-400"
                  key={index}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-span-4 p-10">
          <div className="container h-160 overflow-scroll">
            <div className="text-zinc-300">
              <ul>
                {result.map((item, index) => (
                  <div
                    key={index + Math.random()}
                    className={item.type == "q" ? "flex justify-end" : ""}
                  >
                    {item.type == "q" ? (
                      <li
                        key={index + Math.random()}
                        className="text-right p-1  border-8 bg-zinc-700 border-zinc-700 rounded-tl-3xl rounded-br-3xl w-fit"
                      >
                        <Answers
                          answer={item.text}
                          totalResult={1}
                          index={index}
                        />
                      </li>
                    ) : (
                      item?.text.map((ansItem, ansIndex) => (
                        <li
                          key={index + Math.random()}
                          className="text-left p-1"
                        >
                          <Answers
                            answer={ansItem}
                            totalResult={ansItem.length}
                            index={ansIndex}
                          />
                        </li>
                      ))
                    )}
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-zinc-800 p-1 pr-5 w-1/2 text-white border-zinc-700 m-auto rounded-4xl flex h-16">
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
