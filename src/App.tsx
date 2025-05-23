import { useEffect, useState } from "react";
import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import allowed_words from "./config/allowed_words";

/**
 * The main application component.
 * Initializes the game by selecting a random solution word from the allowed words list
 * when the component mounts. Renders the Header, Game, and Footer components.
 */
function App() {
  const [solution, setSolution] = useState<string>("");

  // Selects a random word from the allowed_words list
  const selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * allowed_words.length);
    setSolution(allowed_words[randomIndex]);
  };

  useEffect(() => {
    selectRandomWord();
  }, []);

  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <Game solution={solution.toUpperCase()} />
      <Footer />
    </div>
  );
}

export default App;
