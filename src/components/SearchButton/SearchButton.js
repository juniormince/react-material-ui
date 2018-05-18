import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Search } from '@material-ui/icons'; //destructuring 

class SearchButton extends Component {
  render() {
    return (
        <Button 
        variant="raised" 
        color="primary"
        >
        <Search/>
        search
        </Button>

    );
  }
}

export default SearchButton;