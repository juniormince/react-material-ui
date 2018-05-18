import React, { Component } from 'react';
// const Component = React.Component; --destructuring means i don't need this line
import TextField from '@material-ui/core/TextField';



class SearchTextArea extends Component {


    render() {
        return (
            <TextField placeholder="search stuff"/>
        );
    }
}

export default SearchTextArea;