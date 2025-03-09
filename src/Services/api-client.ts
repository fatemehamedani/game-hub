import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "10b6db8a04704094ba1c99e8ff776053",
  },
});
