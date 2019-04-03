import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class NewsItem extends Component {
    state = {
        bodyOpened: false
    }
    openBody() {
        this.setState({
            bodyOpened: true
        })
    }

    closeBody() {
        this.setState({
            bodyOpened: false
        })
    }

    render() {
        return (<li className='flex-trending' key={this.props.title}>
            <img className='image' src={this.props.urlToImage} ></img>
            <p className='title'> {this.props.title}</p>
            {!this.state.bodyOpened ?
                <Button variant="outlined" onClick={() => this.openBody()}>
                    See more</Button> : <Button variant="outlined" onClick={() => this.closeBody()}>
                    See less</Button>}
            {!this.state.bodyOpened ? <div></div> : <div>{this.props.description}</div>}
        </li>)
    }
}

export default NewsItem;
