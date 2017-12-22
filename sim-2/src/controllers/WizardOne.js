import React, {Component} from 'react';
import Link from 'react-router-dom';

import {connect} from 'react-redux';
import {updateUserName, updatePassword} from '../ducks/reducer';

class WizardOne extends Component {
    

    render(){
        return(
            <div>
                <input onChange={(e)=> this.props.updateUserName(e.target.value)}/>
                <input onChange={(e)=> this.props.updatePassword(e.target.value)}/> 

            </div>

        )
    }
}

function mapStateToProps(state){ //SIM-2 43H
    const {userName, password} = state;//SIM-2 43G
    return {
        userName,
        password
    }
}

export default connect(mapStateToProps, {updateUserName, updatePassword})(WizardOne);//SIM-2 43C
