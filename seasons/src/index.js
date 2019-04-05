import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    // Javascript constructor method
    constructor(props) {
        super(props); // Always need super function first

        // THIS IS THE ONLY TIME we do direct assignment to this.state!!!
        this.state = { lat: null, errorMessage: "" };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // remember to always use setState
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                // setState is additive; it will not replace the above statement but add to it
                this.setState({ errorMessage: err.message });
            }
        );
    }

    // React says we have to define render method!!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
