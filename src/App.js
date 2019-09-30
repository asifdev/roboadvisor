import React, { Component } from "react";
import Cards from "./Cards";
import SearchTerm from "./SearchTerm";
import { robots } from "./robots";

class App extends Component {
  state = {
    robots: robots,
    term: ""
  };

  searchHandler = e => {
    this.setState({
      term: e.target.value
    });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.term.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>RoboAdvisors</h1>
        <SearchTerm term={this.state.term} searchRobots={this.searchHandler} />
        <Cards robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
