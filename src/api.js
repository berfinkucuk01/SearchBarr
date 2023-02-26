import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID kAH70A4ImaKapEBq6zjYGfQsqlxDKMKgrlKrMzp7Jc8"
    },
    params: {
      query: term
    }
  });

  return response.data.results;
};

export default searchImages;
