
// import React from 'react';
// import PlayWithButton from './components/PlayWithButton'; 

// const App = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Welcome to PlayWithButton App</h1>

//    
//       <PlayWithButton />
//     </div>
//   );
// };

// export default App;

import { useEffect, useState } from "react";
import ExpertCard from "./components/ExpertCard";
import Cart from "./components/Cart";

import React from 'react';

const App = () => {
  const [experts, setExperts] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    fetch("/experts.json")
    .then((res) => res.json())
    .then((data) => setExperts(data));
  }, []);
  const handleAdd = (expert) => {
    if (!selected.find((e) => e.id === expert.id)) {
      setSelected([...selected, expert]);
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Make a Cyber Security Team
      </h1>
      <h3 className="text-2xl font-bold text-center mb-4">
        Our Server is under attact so we need to hire a special cyber security team
      </h3>
      <h1 className="text-2xl font-bold text-center mb-4">
        Total Budget:10 million
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 grid grid-cols-3 gap-4">
        {experts.map((exp) => (
          <ExpertCard key={exp.id} expert={exp} onAdd={handleAdd} />
        ))}
        </div>
        <Cart selected={selected} />
      </div>
    </div>
  );
};

export default App;






