import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SinglePlayer from "./components/SinglePlayer";
import PlayerList from "./components/PlayerList";
import { getAllPuppies } from "./apiRequest";

function App() {
  const dummyArray = [
    {
      id: "123",
      name: "Salamander",
      breed: "Lizard",
      status: "field",
      imageUrl: "dummy",
    },
    {
      id: "432",
      name: "Ezekiel",
      breed: "Husky",
      status: "field",
      imageUrl: "dummy",
    },
  ];
  const [puppies, setPuppies] = useState(dummyArray);

  useEffect(() => {
    async function getPuppies() {
      const data = await getAllPuppies();
      setPuppies(data);
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
