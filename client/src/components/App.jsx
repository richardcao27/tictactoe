import React from 'react';
import MovieList from './MovieList.jsx';
import Axios from 'axios';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies() {
    Axios.get('/movies')
      .then((movies) => {
        this.setState({
          movies : movies.data
        })
      })

    // $.ajax({
    //   method: 'GET',
    //   url: '/movies',
    //   context: this,
    //   success: (movies) => {
    //     console.log(movies);
    //     this.setState({
    //       movies : movies
    //     })
    //   }
    // })
  }

  componentDidMount() {
    this.getMovies()
  }
  
  render() {
    return (
      <div>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}


export default App;