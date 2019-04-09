import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID d107cf86e62fd8b70d2b14e21b01591497e34e748572dd4b74549ed0f6f2fa72"
    }
});
