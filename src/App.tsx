import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import allowed_words from "./config/allowed_words";
import { Footer } from "./components/Footer";

function App() {
  const [solution, setSolution] = useState<string>('');

  const selectWord = () => setSolution(allowed_words[Math.floor(Math.random() * allowed_words.length)])

  useEffect(() => {
      selectWord();
  }, [])

    return (
      <div className="flex flex-col h-[100vh]">
        <Header />
        <Game solution={solution.toUpperCase()} />
        <Footer />
      </div>
    );
  }

export default App;
