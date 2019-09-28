import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  // talk about render
  render() {
    return (
      <div>
        {this.props.message}
      </div>
    )
  }
}


export default App;