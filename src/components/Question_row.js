import React, { Component } from 'react';
import Question from './Question';

class Question_row extends Component {
  	

  	render() {
	    return (
	      	<div className="container">
	        	<Question  	question_id={this.props.data_left.id}
	        				question_n={this.props.question_n}
                            question={this.props.data_left.question}
                            choice_a={this.props.data_left.choice_a}
                            choice_b={this.props.data_left.choice_b}
                            choice_c={this.props.data_left.choice_c}
                            choice_d={this.props.data_left.choice_d}
                            answer={this.props.data_left.answer} />

                {this.props.data_right !== undefined? 
                <Question  	question_id={this.props.data_right.id}
                			question_n={this.props.question_n + 1}
                            question={this.props.data_right.question}
                            choice_a={this.props.data_right.choice_a}
                            choice_b={this.props.data_right.choice_b}
                            choice_c={this.props.data_right.choice_c}
                            choice_d={this.props.data_right.choice_d}
                            answer={this.props.data_right.answer} />
                : ""}              
            </div>

	    );
  	}
}

export default Question_row;
