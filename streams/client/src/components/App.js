import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; // Link is a react component; use in place of any anchor tags ever needed in react app

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo"> Navigate to Page Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me</button>
      <Link to="/">Navigate to Page One</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
