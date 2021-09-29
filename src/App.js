import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😫": "Tired Face",
  "😳": "Disbelief",
  "🎗": "Reminder Ribbon",
  "😔": "Sad",
  "😥": "Sad but Relieved Face",
  "💖": "Sparkling Heart",
  "😑": "Annoyance",
  "😌": "Relieved Face",
  "🙂": "Slightly Smiling Face",
  "🤩": "Star-Struck"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "this emoji is not in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>welcome</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h2>emojis we know</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
