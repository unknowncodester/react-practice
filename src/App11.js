import React from 'react';

class App11 extends React.Component {

    constructor(){
        super();
        this.state = {a: ''}
    }

    update(e){
        this.setState({
            a: this.refs.a.value,
            b: this.refs.b.value
        })
    }

    render(){
        return (
            <div>
                <input
                    ref="a"
                    type="text"
                    onChange={this.update.bind(this)}
                />
                <h1>{this.state.a}</h1>
                <input
                    ref="b"
                    type="text"
                    onChange={this.update.bind(this)}
                />
                <h1>{this.state.b}</h1>
            </div>
        )
    }
}

export default App11