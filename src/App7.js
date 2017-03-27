import React from 'react';

class App7 extends React.Component {

    constructor(){
        super();
        this.state = {
            msg: "tthis is to do with children"
        }
    }

    update(e){
        this.setState({msg: e.target.value})
    }

    render(){
        return (
            <div>
                {this.state.msg}
                <InputBox update={this.update.bind(this)} />
                <InputBox update={this.update.bind(this)} />
            </div>
        )
    }
}

const InputBox = (props) => <input type="text" onChange={props.update} />

export default App7