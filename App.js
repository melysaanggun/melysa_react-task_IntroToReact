import './App.css';
import React from "react";
import Home from './pages/home';
import Contact_Us from './pages/contact_us';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Jualan Baju',
    };
  }
  render(){
    return (
    <div className="App">
        <Home />
        <Contact_Us />
    </div>)
  }
}
export default App;
