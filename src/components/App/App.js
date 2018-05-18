import React, { Component } from 'react';
// const Component = React.Component; --destructuring means i don't need this line
import SearchButton from '../SearchButton/SearchButton';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import cyan from '@material-ui/core/colors/cyan';
import red from '@material-ui/core/colors/red';
import SearchTextArea from '../SearchTextArea/SearchTextArea';

const myTheme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: cyan,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
}); //semi-colon for good luck

class App extends Component {
  constructor(props) {
    super(props);
    // Keep track of the student list
    this.state = {
      // search: [],
      newSearch: '',
    };

  }

  handleChangeFor = (propertyName) => (event) => {
    console.log(this.state.newSearch);
    this.setState({
        [propertyName]: event.target.value,
      
    });
  }



  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.newSearch);
    // this.setState({
    //   newSearch: ''
    // });
  }


  render() {
    return (
      <MuiThemeProvider theme={myTheme}>
        <div>
          {/* hey world */}
          <SearchTextArea 
          newSearch={this.state.newSearch}
          handleChangeForChild={this.handleChangeFor}
          />
          <SearchButton 
          handleSubmitForChild={this.handleSubmit}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
