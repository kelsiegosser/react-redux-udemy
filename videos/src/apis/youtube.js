import axios from "axios";

const KEY = "AIzaSyDWQu2PbEcwV3mPfzf9HgEqIXTfU9aV_Lo";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});
