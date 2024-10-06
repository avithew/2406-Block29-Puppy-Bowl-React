const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-MT-WEB-PT";

export async function getAllPuppies() {
  try {
    const response = await fetch(`${API_URL}/players`);
    const data = await response.json();
    return data.data.players;
  } catch (error) {
    console.log("Error fetching puppies: ", error);
  }
}

export async function getSinglePuppy(id) {
  try {
    const response = await fetch(`${API_URL}/players/${id}`);
    const data = await response.json();
    return data.data.player;
  } catch (error) {
    console.log("Error fetching puppy: ", error);
  }
}

export async function deletePuppy(id) {
  try {
    response = fetch(`${API_URL}/players/${id}`, {
      method: "DELETE",
    });
    console.log("deleted id ", id);
  } catch (error) {
    console.log("Error deleting puppy: ", error);
  }
}
