import React from 'react';
import FormContainer from './signin/FormContainer';

const Signin = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">Friends of Noise</h1>
      <nav className="navbar">

      </nav>
      <p className="subtitle">
        All ages <strong>always</strong>!
      </p>
      <p className="membertagline">
        Ask about how to be sponsored for a membership.
      </p>
    </div>
    <div className="col-md-6">
      <br />
      <FormContainer />
    </div>
  </section>
);

export default Signin;
