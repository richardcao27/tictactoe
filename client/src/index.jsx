import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import movies from './dummyData.js';

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

var movieStrings = ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina'];

ReactDOM.render(<App message={'Hello World'} data={movies} testData={movieStrings}/>, document.getElementById('app'));
