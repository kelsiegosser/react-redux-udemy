import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get("https://api.unsplash.com/search/photos", {
            params: { query: term },
            headers: {
                Authorization:
                    "Client-ID d107cf86e62fd8b70d2b14e21b01591497e34e748572dd4b74549ed0f6f2fa72"
            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
