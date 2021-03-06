import axios from "axios";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    maxResults: "10",
    part: "snippet",
    type: "video",
    key: process.env.REACT_APP_YOUTUBE_API_KEY
  }
});
