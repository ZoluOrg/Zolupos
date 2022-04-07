import React, { useEffect, useState } from "react";
import { useSearchContext } from "../../../context/pos/SearchContext";

export const NoProduct = () => {
  const searchContext = useSearchContext();
  const [sadEmoji, setSadEmoji] = useState("");
  useEffect(() => {
    randomSadEmoji();
  }, [searchContext.searchedInput]);
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
      <span className="font-bold">{searchContext.searchedInput}</span> does not exist in
      the database {sadEmoji}
    </div>
  );
};
