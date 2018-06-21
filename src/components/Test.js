import React, { Component } from 'react';
import Question_row from './Question_row';
import Select from './Select';
// import {Prompt} from 'react-router-dom';


class Test extends Component {
    
    state = {
        data: [],
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
            });
            
        }

        return result
    }
    
    handleSelectChange = async (major, unit, ques_type) => {

        var data = [];
        var i, url_first;

        if(major.substring(0, 2) === "kl"){
            if(ques_type === "ltc"){

                var param_3;
                // var value = unit;
                
                if(unit.substring(0, 3) === "TWR"){
                    param_3 = "TWR"
                }else if(unit.substring(0, 2) === "KT"){
                    if(unit.substring(2, 3) === "A"){
                        param_3 = "KT_ACC"
                    }else {
                        param_3 = "KT_APP"
                    }
                }else if(unit.substr(-9) === "ACC-RADAR"){
                    param_3 = "ACC_RADAR"
                }else if(unit.substr(-13) === "ACC-NON-RADAR"){
                    param_3 = "ACC_non_radar"
                }else if(unit.substr(-9) === "APP-RADAR"){
                    param_3 = "APP_RADAR"
                }else if(unit.substr(-13) === "APP-NON-RADAR"){
                    param_3 = "APP_NON_RADAR"
                }else if(unit.substring(0, 3) === "GCU"){
                    param_3 = "GCU"
                }

                url_first = `http://5b1f74b017cc7000142ed489.mockapi.io/kl_ltc_${param_3}`

            }else {
                if(major === "klmn"){
                    url_first = `http://5b2665f7c39cbf00140ef654.mockapi.io/${unit}`
                }else if(major === "klmt"){
                    url_first = `http://5b271239c39cbf00140ef6ea.mockapi.io/${unit}`
                }else {
                    url_first = `http://5b271241c39cbf00140ef6ec.mockapi.io/${unit}`
                }
            }
        }else if(major === "aa"){
            url_first = `http://5b25c4c87557bd0014990152.mockapi.io/${ques_type}`
        }else if(major === "dl"){
            url_first = `http://5b274e9962e42b00149155df.mockapi.io/${ques_type}`
        }else if(major === "kt"){
            // url_first = `http://5b274e9962e42b00149155df.mockapi.io/${ques_type}`
        }
        
        
        

        for(i = 1; i <= 7; i = i + 1){
            var url = `${url_first}_${i}`;

            var call_api = await fetch(url)
            .then(response => {
                if(!response.ok){
                    return [];
                }
                return response.json();
            }).catch(reason => {
                console.log('abc', reason)
            })

            if(call_api.length !== 0){
                call_api.forEach(function(item, index){
                    data.push(item)
                });
            }else {
                break
            }
        }

        data.sort(function(a, b){return 0.5 - Math.random()});
        data.splice(50, data.length)

        
        this.setState({
            data: data
        })

    }


    render() {

        return (
            <div className="Test">
                <Select handleSelectChange={this.handleSelectChange} />
                <br/><br/>
                {this.showQuestion_row(this.state.data)}
            </div>
        );
    }
}

export default Test;
