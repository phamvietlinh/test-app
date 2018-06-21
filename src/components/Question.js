import React, { Component } from 'react';

class Question extends Component {
  	
  	state = {
  		// exampleRadios: "",
  		choosen_answer: "",
  		cka: "",
  		ckb: "",
  		ckc: "",
  		ckd: ""
  	}

  	onChange = (event) => {
        
        this.setState({
        	choosen_answer: event.target.value,
        	cka: event.target.value === "a"? "a": "",
    			ckb: event.target.value === "b"? "b": "",
    			ckc: event.target.value === "c"? "c": "",
    			ckd: event.target.value === "d"? "d": ""
        })

    }

    componentWillReceiveProps = (nextProp) => {
    	this.setState({
    		choosen_answer: "",
    		cka: "",
  			ckb: "",
  			ckc: "",
  			ckd: ""
    	})
    }

    

  	render() {
	    return (
        	<div className="col-md-6 col-lg-6 mb-2">
                <form onChange={this.onChange}>
                    
                    <div className="form-group">
                        <h4>
                        	<span><b>Question {this.props.question_n + 1}: </b></span>
                        	{this.props.question}
                        </h4>
                    </div>
                    
                    <div className="form-check">
					  	<label className="form-check-label" htmlFor="exampleRadios1">
					    	
					    	{this.state.choosen_answer === this.props.answer && this.props.answer === "a"? <span className="glyphicon glyphicon-ok"></span>: ""}
					    	<input className="form-check-input" type="radio" name={`exampleRadios${this.props.question_id}`} value="a" checked={this.state.cka}/>&nbsp;&nbsp;
					    	{this.props.choice_a}
					  	</label>
					</div>
					<div className="form-check">
						
					  	<label className="form-check-label" htmlFor="exampleRadios1">
					    	{this.state.choosen_answer === this.props.answer && this.props.answer === "b"? <span className="glyphicon glyphicon-ok"></span>: ""}
					    	<input className="form-check-input" type="radio" name={`exampleRadios${this.props.question_id}`} value="b" checked={this.state.ckb} />&nbsp;&nbsp;
					    	{this.props.choice_b}
					  	</label>
					</div>
					{this.props.choice_c !== undefined? 
						<div className="form-check">
							
						  	<label className="form-check-label" htmlFor="exampleRadios1">
						    	{this.state.choosen_answer === this.props.answer && this.props.answer === "c"? <span className="glyphicon glyphicon-ok"></span>: ""}
						    	<input className="form-check-input" type="radio" name={`exampleRadios${this.props.question_id}`} value="c" checked={this.state.ckc} />&nbsp;&nbsp;
						    	{this.props.choice_c}
						  	</label>
						</div>
					: ""}
					{this.props.choice_d !== undefined? 
						<div className="form-check">
							
						  	<label className="form-check-label" htmlFor="exampleRadios1">
						    	{this.state.choosen_answer === this.props.answer && this.props.answer === "d"? <span className="glyphicon glyphicon-ok"></span>: ""}
						    	<input className="form-check-input" type="radio" name={`exampleRadios${this.props.question_id}`} value="d" checked={this.state.ckd} />&nbsp;&nbsp;
						    	{this.props.choice_d}
						  	</label>
						</div>
					: ""}

                </form>
            </div>

	    );
  	}
}

export default Question;
