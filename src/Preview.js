import React, { Component } from 'react';


class Preview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amIHidden: true
        }
        this.showHide = this.showHide.bind(this)
    }
    showHide(event) {
        this.setState({amIHidden: !this.state.amIHidden})
        }
    render() {
        return (
        <div className="preview">
            <button id="preview-toggle" onClick={this.showHide}>Show Preview</button>
            <section id="application-preview" className={this.state.amIHidden? "hidden":""}>{this.props.textStuff}</section>
        </div>
        )
    }
}

export default Preview;