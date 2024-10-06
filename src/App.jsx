import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, Link } from "react-router-dom";
import SinglePlayer from "./components/SinglePlayer";
import PlayerList from "./components/PlayerList";
import { getAllPuppies } from "./apiRequest";
import { deletePuppy } from "./apiRequest";

function App() {
  const dummyArray = [
    { id: "123", name: "Salamander", breed: "Lizard" },
    { id: "432", name: "Ezekiel", breed: "Husky" },
  ];
  const [puppies, setPuppies] = useState(dummyArray);

  useEffect(() => {
    async function getPuppies() {
      const data = await getAllPuppies();
      setPuppies(data);
      deletePuppy(14989);
    }
    getPuppies();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<PlayerList puppies={puppies} setPuppies={setPuppies} />}
        />
        <Route
          path="/puppy/:id"
          element={<SinglePlayer puppies={puppies} setPuppies={setPuppies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
