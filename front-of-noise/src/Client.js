import React, { Component } from 'react';

// import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';

import './styles/css/Client.css';
import Layout from './app/Layout'

class Client extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }


  // state = {
  //   response: '',
  //   post: '',
  //   responseToPost: '',
  // };
  //
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }
  //
  // callApi = async () => {
  //   const response = await fetch('/testAPI/myStuff');
  //   const body = await response.json();
  //
  //   if (response.status !== 200) throw Error(body.message);
  //
  //   return body;
  // };
  //
  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/testAPI/yourStuff', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });
  //   const body = await response.text();
  //
  //   this.setState({ responseToPost: body });
  // };

//   render() {
//     const { alert } = this.props;
//     return (
//       // <div>
//         // <p>{this.state.response}</p>
//         // <form onSubmit={this.handleSubmit}>
//         //   <p>
//         //     <strong>Post to Server:</strong>
//         //   </p>
//         //   <input
//         //     type="text"
//         //     value={this.state.post}
//         //     onChange={e => this.setState({ post: e.target.value })}
//         //   />
//         //   <button type="submit">Submit</button>
//         // </form>
//         // <p>{this.state.responseToPost}</p>
//       // </div>
//       <Layout />
//     );
//   }
// }
//
// export default Client;

  render() {
    return (
        <div>
          <Layout />
        </div>
    );
  }
}



export default Client;
