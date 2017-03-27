import React from 'react';

class App6 extends React.Component {

    constructor(){
        super();
        this.state = {
            msg: "this is a state message, type in the input box to change me"
        }
    }

    update(e){
        this.setState({msg: e.target.value})
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)}/>{this.state.msg}
            </div>
        )
    }
}

export default App6