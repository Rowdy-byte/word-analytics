import Textarea from "./Textarea";
import Stats from "./Stats";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const numberOfCharacters = text.length;
  const instagramCharactersLeft = 280 - text.length;
  const facebookCharactersLeft = 2200 - text.length;

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats
        numberOfCharacters={numberOfCharacters}
        instagramCharactersLeft={instagramCharactersLeft}
        facebookCharactersLeft={facebookCharactersLeft}
        numberOfWords={numberOfWords}
      />
    </main>
  );
}
