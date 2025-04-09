import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {count: 0};
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count  ){
            console.log('Count was updated!', this.state.count);
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1 });
    };

    render(){
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;