import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, Link } from "react-router-dom";
import SinglePlayer from "./components/SinglePlayer";
import PlayerList from "./components/PlayerList";

function App() {
  const dummyArray = [
    { name: "Salamander", breed: "Lizard" },
    { name: "Ezekiel", breed: "Husky" },
  ];
  const [puppies, setPuppies] = useState(dummyArray);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<PlayerList puppies={puppies} setPuppies={setPuppies} />}
        />
        <Route
          path="/puppy/:name"
          element={<SinglePlayer puppies={puppies} setPuppies={setPuppies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
