import React from 'react';
// const Component = React.Component; --destructuring means i don't need this line
import TextField from '@material-ui/core/TextField';



const SearchTextArea = (props) => (
            <TextField onChange={props.handleChangeForChild('newSearch')} placeholder="search stuff"/>
        );

export default SearchTextArea;