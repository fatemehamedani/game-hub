import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b60382a288e74d7e8c4d1418dcf2ac00",
  },
});
