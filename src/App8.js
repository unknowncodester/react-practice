import React from 'react';

class App8 extends React.Component {
    render(){
        return (
            <div>
                <Button>React Button<CopyrightSymbol /></Button>
            </div>
        )
    }
}

const Button = (props) => <button>{props.children}</button>

class CopyrightSymbol extends React.Component {
    render(){
        return <span> &copy;</span>
    }
}

export default App8