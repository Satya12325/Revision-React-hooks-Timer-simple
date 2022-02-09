import { useEffect, useState } from "react";

export default function Timer({ initial, end }) {
  const [time, setTime] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        if (prev === end - 1) {
          clearInterval(id);
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [end]);

  return (
    <>
      <div>Initial Time: {initial} Second</div>
      <div>Final Time: {end} Second</div>
      <div className="container">
        <h1>Timer: {time} Sec</h1>
      </div>
    </>
  );
}
