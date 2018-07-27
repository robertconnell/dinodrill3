import React, { Component } from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <form id="application-input" onSubmit={this.props.submitCallBack}>
                <label>Apply Here: </label>
                <textarea id="application-text" rows="8" cols="100" onChange={this.props.textCallBack}></textarea>
                <input id="submit" type="submit" value="Submit"/>
            </form>
        )
    }
}

export default InputForm;