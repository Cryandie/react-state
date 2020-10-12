import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Person from "./Component/Person";
import { Button } from "react-bootstrap";

class App extends React.Component {
  state = {
    show: true,
  };
  toggleOn = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="App">
        <Button variant="primary" onClick={this.toggleOn}>
          Show/Hide content
        </Button>
        {this.state.show ? <Person /> : null}
      </div>
    );
  }
}
export default App;
