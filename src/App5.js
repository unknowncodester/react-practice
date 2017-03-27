import React from 'react';

class App5 extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.msg}</h1>
                <p>{this.props.submsg}</p>
            </div>
        )
    }
}

App5.defaultProps = {
    msg : "This message came from using a default prop",
    submsg : "This message should be a number see console displaying error",
}

App5.propTypes = {
    msg : React.PropTypes.string,
    submsg : React.PropTypes.number
}

export default App5