import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

export const CurrentTime = () => {
  const [currentTime, setTime] = useState(dayjs().format("YYYY/MM/DD | HH:mm:ss"));

  useEffect(() => {
    const getCurrentTime = setInterval(() => {
      setTime(dayjs().format("YYYY/MM/DD | HH:mm:ss"));
    }, 1000);
    return () => clearInterval(getCurrentTime);
  }, []);
  return <div>{currentTime}</div>;
};