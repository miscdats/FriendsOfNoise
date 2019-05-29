import React, { Component } from 'react';
// import {Helmet} from 'react-helmet';
import './styles/css/App.css';
import Layout from './app/Layout';
import Firebase from "./Firebase/firebase";

class App extends Component {
    state = {authenticated: false, user: null};
    render(){
      const {authenticated} = this.state;
      
    return (
      <Layout />
    );
  }

  componentWillMount() {
  Firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.setState({
        authenticated: true,
        currentUser: user
      });
    } else {
      this.setState({
        authenticated: false,
        currentUser: null
      });
    }
  });
}
}



export default App;
