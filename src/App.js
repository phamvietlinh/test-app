import React, { Component } from 'react';
import './App.css';
import Question_row from './components/Question_row';


class App extends Component {
    
    state = {
        data: "",
        question_type: ""
        // question: "",
        // choice_a: "",
        // choice_b: "",
        // choice_c: "",
        // choice_d: "",
        // answer: "",
    }

    componentDidMount = async () => {
        
        
        const api_call = await fetch(`http://5b096991a991440014aaff89.mockapi.io/aviation-law`);
        const data = await api_call.json();
        this.setState({
            data: data
        })
        
    }

    showQuestion_row = (data) => {
        var result = null;
        // var i;
        if(data.length > 0){
            result = data.map((question, index) => {
                if(index% 2 === 0){
                    return (
                        
                        <Question_row key={index} question_n={index} data_left={data[index]} data_right={data[index + 1]} />

                    )
                }
            })
            
        }

        return result
    }


    showOptions = () => {
        var result = null;
        // var i;
        var option = [
            ["VN Aviation Law", "aviation-law"],
            ["Facilities", "facilities"],
            ["General Knowledge", "general-knowledge"],
            ["Human Factor", "human-factor"],
            ["Meteology", "meteology"],
            ["Navigation- Principle", "navigation-principle"],
            ["Operational procedure", "operational-procedure"],
            ["Surveillance system", "surveillance-system"],
            ["Characteristics of air traffic movement", "characteristics-of-air-traffic-movement"],
            ["Shifts management", "shifts-management"],
            ["AIS", "ais"]
        ]

        result = option.map((item, index) => {
            return (
                <option key={index} value={item[1]} name={item[1]}>{item[0]}</option>
            )
        })
            

        return result
    }

    getdata = async (endpoint) => {
        var api_call = await fetch(`http://5b096991a991440014aaff89.mockapi.io/${endpoint}`);
        var data = await api_call.json();
        this.setState({
            data: data
        })
  
    }
    
    handleSelectChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            question_type: event.target.value
        })
        if(event.target.value !== null){
            this.getdata(event.target.value)
        }
            
         
    }


    render() {

        return (
            <div className="App">
                <h1 className="text-center">Test App</h1>
                <br/>
                <div className="container">    
                    <div className="col-md-3 col-lg-3">
                        <select name="question_type" value={this.state.question_type} className="form-control" onChange={this.handleSelectChange}>
                            <option value="" name="">Choose your question type</option>
                            {this.showOptions()}
                        </select>
                    </div>
                </div>
                <br/><br/>
                    {this.showQuestion_row(this.state.data)}
                    
                
            </div>
        );
    }
}

export default App;
