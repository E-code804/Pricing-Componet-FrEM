import { useState } from "react";
import PriceCard from "./components/PriceCard";
import TimeToggle from "./components/TimeToggle";

import priceData from "../data.json/";

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <main id="price-plans" className="flex flex-col items-center space-y-10">
      <h1 className="text-3xl text-grayish-blue">Our Pricing</h1>

      <TimeToggle toggle={toggle} handleToggle={handleToggle} />

      <div className="flex flex-col items-center space-y-5 lg:flex-row lg:space-y-0">
        {priceData.map((data, idx) => (
          <PriceCard key={idx} data={data} toggle={toggle} />
        ))}
      </div>
    </main>
  );
}

export default App;
