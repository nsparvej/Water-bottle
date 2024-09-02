import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import './assets/bottle.css'
const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("./json/data.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  return (
    <div>
      <h1>Bottles: {bottles.length} </h1>

      <div className="bottle">
        {bottles.map((bottle) => (
          <Bottle bottle={bottle} key={bottle.name}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
