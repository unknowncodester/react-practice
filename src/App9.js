import React from 'react';

class App9 extends React.Component {
    render(){
        return (
            <Title message="sd"/>
        )
    }
}

const Title = (props) => <h1>Title = {props.message}</h1>

Title.propTypes = {
    message(props, propName, component){

        let errors = [];

        // check that message is set
        if(!(propName in props)){
            errors.push(propName + ' is not defined')
        }

        // check length of message
        if((propName in props) && props[propName].length < 1){
            errors.push(propName + ' must be atleast 1 letter long')
        }

        // returns all errors
        if(errors.length > 0){
            return new Error(errors);
        }
    }
}

export default App9