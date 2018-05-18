import React from 'react';
import Button from '@material-ui/core/Button';
import { Search } from '@material-ui/icons'; //destructuring 

const SearchButton = (props) => (
        <Button onClick ={props.handleSubmitForChild}
        variant="raised" 
        color="primary"
        >
        <Search/>
        search
        </Button>

    );

export default SearchButton;