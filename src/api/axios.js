import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "25d452ebfd63808eb387432fc8987de1",
    language: "ko-KR"
  }
})

export default instance