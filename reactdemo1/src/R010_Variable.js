import React, {Component} from 'react';

class R010_Variable extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        var varName = 'react';
        console.log('varName1 :' + varName);
        var varName = '200';
        console.log('varName2 :' + varName);

        //재선언 불가, 수정 가능
        let letName = 'react';
        console.log('letName1 :' + letName);
        letName = 'react200';
        console.log('letName2 :' + letName);

        //재선언, 수정
        const constName = 'react';
        console.log('constName1 :' + letName);
    
    }

    render(){
        return(
            <h1>[this is variable]</h1>
        )
    }
}

export default R010_Variable;