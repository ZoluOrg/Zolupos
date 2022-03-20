import React, { useEffect, useState } from "react";
import { usePosContext } from "../../../context/PosContext";

export const NoProduct = () => {
  const ctx = usePosContext();
  const [sadEmoji, setSadEmoji] = useState("");
  useEffect(() => {
    randomSadEmoji();
  }, [ctx.searchedInput]);
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
    setSadEmoji(sadEmojis[randomIndex]);
  };
  return (
    <div>
      <span className="font-bold">{ctx.searchedInput}</span> does not exist in
      the database {sadEmoji}
    </div>
  );
};
