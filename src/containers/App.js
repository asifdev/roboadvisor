import React, { Component } from "react";
import Cards from "../components/Cards";
import Scroll from "../components/Scroll";
import SearchTerm from "../components/SearchTerm";
import ErrorBoundary from "../components/ErrorBoundary";
// import { robots } from "./robots";

class App extends Component {
  state = {
    robots: [],
    term: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({
          robots: users
        })
      );
  }

  searchHandler = e => {
    this.setState({
      term: e.target.value
    });
  };

  render() {
    const { term, robots } = this.state;
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(term.toLowerCase());
    });

    if (!robots.length) {
      return <h1 className="tc">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1" style={{ color: "#0ccac4" }}>
            RoboAdvisors
          </h1>
          <SearchTerm term={term} searchRobots={this.searchHandler} />
          <Scroll>
            <ErrorBoundary>
              <Cards robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
