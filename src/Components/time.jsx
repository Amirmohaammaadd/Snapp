import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TimeComp = ({ personalArr }) => {
  const [index, setIndex] = useState(0);

  // const TEXTS = ["Market", "Game", "Style", "Color"];
  const TEXTS = personalArr;

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  // console.log("hey");

  return (
    <>
      <TextTransition
        springConfig={presets.default}
        className="text-[#ff2882] font-bold"
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </>
  );
};

export default TimeComp;
