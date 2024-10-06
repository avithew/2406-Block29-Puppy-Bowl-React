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

export async function addPuppy(puppy) {
  try {
    const response = await fetch(`${API_URL}/players`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(puppy),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error adding puppy: ", error);
  }
}

export async function deletePuppy(id) {
  try {
    const response = fetch(`${API_URL}/players/${id}`, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    console.log("Error deleting puppy: ", error);
  }
}
