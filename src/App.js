import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import JobDetails from './JobDetails';
import Footer from './Footer';
import InputForm from './InputForm';
import Preview from './Preview';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textStuff: "" 
    }
    this.typeText = this.typeText.bind(this)
  }
  typeText(event) {
    event.preventDefault()
    this.setState({textStuff: event.target.value})
  }
  isSubmitted(event) {
    event.preventDefault()
    document.querySelector("#message").innerText = "Your application was submitted!"
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <JobDetails/>
          <InputForm textStuff={this.state.textStuff} textCallBack={this.typeText} submitCallBack={this.isSubmitted}/>
          <p id="message">&nbsp;</p>
          <Preview textStuff={this.state.textStuff}/>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
