import React from "react";
import { usePosContext } from "../../../context/PosContext";

export const NoProduct = () => {
  const ctx = usePosContext();
  const randomSadEmoji = () => {
    const sadEmojis = [
      "😔",
      "😟",
      "☹️",
      "😥",
      "😢",
      "😭",
      "💔",
      "😾",
      "😿",
      "😓",
      "😞",
      "😖",
    ];
		const randomIndex = Math.floor(Math.random() * sadEmojis.length);
		return sadEmojis[randomIndex];
  };
  return (
    <div>
      <span className="font-bold">{ctx.searchedInput}</span> does not exist in
      the database {randomSadEmoji()}
    </div>
  );
};
