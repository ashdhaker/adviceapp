import React from 'react';

import axios from 'axios';

class App extends React.Component{
    
    state={
        advice:''
    }
    
    componentDidMount(){
        // console.log("component did mount");
        this.fetchAdvice();
    }
    
    fetchAdvice = ()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            
            const { advice }=response.data.slip;
            
            this.setState({
                advice
            });
            
            console.log(response.data.slip.advice);
        }).catch((error)=>{
            console.log(error);
        });
    }
    
    render(){
        const {advice}= this.state;
        return (
            <div>
                <h1>{advice}</h1>
                <div>
                    <button onClick={this.fetchAdvice}>Give Me Advice!</button>
                </div>
            </div>
        );
    }
}

export default App;