import React, { Component } from 'react';

class ClassComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: "To jest komponent klasowy!",
        };
    }

    updateMessage = () => {
        this.setState({message: "Stan został zaktualizowany!"});
    };

    render(){
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.updateMessage}>Zaktualizuj wiadomość</button>
            </div>
        )
    }
}
export default ClassComponent;