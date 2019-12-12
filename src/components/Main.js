import React from "react";
import { ListOfMovies } from "./ListOfMovies";



export class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <h2>Movielab</h2>
        <div>Which movie tonight?</div>
        <ListOfMovies />
      </div>
    );
  }
}
