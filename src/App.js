import axios from "axios";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Technologies from "./pages/Technologies";


function App() {
  
  
  return (
    <div>
      <h1>APP</h1>
      <Button>OK</Button>
      <Router>
        <Route path="/" component={Technologies} />
      </Router>
    </div>
  );
}

export default App;
