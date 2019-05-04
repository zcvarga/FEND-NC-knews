import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Link } from "@reach/router";


class Subheader extends Component {

    render() {
        return (<div>
            <h2 id='second-header'>
                <FormControl id='selector'>
                    <InputLabel htmlFor="age-simple" >Sort by</InputLabel>
                    <Select onChange={e => this.props.setSortBy(e.target.value)} value={this.props.value}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value='votes'>Votes</MenuItem>
                        <MenuItem value='created_at'>Date created</MenuItem>
                        <MenuItem value='comment_count'>Comment count</MenuItem>
                    </Select>
                </FormControl>
                <Link to='/articles/new-article'><Button variant="outlined" >
                    NEW ARTICLE
                </Button> </Link>
            </h2>
        </div>)
    }

}

// export const setSortBy = (value) => {
//     return value;
// }

export default Subheader;
