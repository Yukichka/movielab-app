import React from "react";
import url from "./api/ApiConfig";

export class ListOfMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listOfMovies: [] };
  }
  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(movie => {
        this.setState({ listOfMovies: movie.results });
      });
  }
  render() {
    // console.log(this.state.listOfMovies);
    return <div className="list-of-movies">
     <ul>
          {this.state.listOfMovies.map((eachMovie, index) => (
            <div className="card" key={index}>
              <li>{eachMovie.original_title}</li>
              <div className="card-img">
                <img
                  src={`https://image.tmdb.org/t/p/w500${eachMovie.backdrop_path}`}
                  alt={eachMovie.original_title}
                />
                <div>{eachMovie.overview}</div>
              </div>
            </div>
          ))}
        </ul>
    </div>;
  }
}
