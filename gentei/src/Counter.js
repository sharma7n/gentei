import React, { Component } from 'react';
import rock from '../public/media/rock.png';
import paper from '../public/media/paper.png';
import scissors from '../public/media/scissors.png';
import './Counter.css';

const CardCount = (props) => {
    return (
        <div>
            <span><img src={props.image} alt={props.alt} /></span>
            <div className="count">{props.count}</div>
        </div>
    );
};

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rock: '--',
            paper: '--',
            scissors: '--'
        };
        this.pollCounts();
    }
    
    componentDidMount = () => {
        var intervalId = setInterval(this.pollCounts, 5000);
        this.setState({intervalId: intervalId});
    }
    
    componentWillUnmount = () => {
        clearInterval(this.state.intervalId);
    }
    
    pollCounts = () => {
        fetch("http://rps-cards-sharma7n.c9users.io:8080/")
            .then(response => { return response.json(); })
            .then(json => {
                this.setState(state => ({
                    rock: json.rock,
                    paper: json.paper,
                    scissors: json.scissors
                }));
            });
    }
    
    render() {
        return (
            <div className="counter">
                <CardCount image={rock} alt='rock' count={this.state.rock} />&nbsp;
                <CardCount image={paper} alt='paper' count={this.state.paper} />&nbsp;
                <CardCount image={scissors} alt='scissors' count={this.state.scissors} />
            </div>
        );
    }
}


export default Counter;