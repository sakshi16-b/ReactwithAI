import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-5 h-screen text-center">
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
    </>
  );
}

export default App;
