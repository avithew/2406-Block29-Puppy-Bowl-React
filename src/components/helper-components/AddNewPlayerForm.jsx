import { useState } from "react";
import { addPuppy } from "../../apiRequest";
import "./AddNewPlayerForm.css";

function AddNewPlayerForm({ setPuppies }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const puppy = { name: name, breed: breed, imageUrl: imageUrl };
    addPuppy(puppy);
    setPuppies((prevState) => {
      return [...prevState, puppy];
    });
    setName("");
    setBreed("");
    setImageUrl("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Add Puppy</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Name"
            required
          />
        </div>
        <div>
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            value={breed}
            placeholder="Enter Breed"
            onChange={(event) => setBreed(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl">ImageUrl:</label>
          <input
            type="text"
            value={imageUrl}
            placeholder="Enter ImageUrl"
            onChange={(event) => setImageUrl(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Puppy
        </button>
      </form>
    </div>
  );
}

export default AddNewPlayerForm;
