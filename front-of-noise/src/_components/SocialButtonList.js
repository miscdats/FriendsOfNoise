import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './SocialButtonList.css';

const propTypes = {
  buttonList: PropTypes.shape({
    github: PropTypes.shape({
      visible: PropTypes.bool.isRequired,
      provider: PropTypes.func.isRequired
    }),
    twitter: PropTypes.shape({
      visible: PropTypes.bool.isRequired,
      provider: PropTypes.func.isRequired
    }),
    facebook: PropTypes.shape({
      visible: PropTypes.bool.isRequired,
      provider: PropTypes.func.isRequired
    })
  }).isRequired,
  auth: PropTypes.func.isRequired,
  currentProviders: PropTypes.func
};

const defaultProps = {
  currentProviders: null
};

const SocialButtonList = ({ history, buttonList, auth, currentProviders }) => {
  const authHandler = authData => {
    if (authData) {
      if (currentProviders === null) {
        history.push('/profile');
      } else {
        currentProviders(authData.user.providerData);
      }
    } else {
      console.log('Error authenticating');
    }
  };

  const authenticate = (e, provider) => {
    const providerOAuth = buttonList[provider].provider();

    if (!auth().currentUser) {
      auth()
        .signInWithPopup(providerOAuth)
        .then(authHandler)
        .catch(err => console.error(err));
    } else {
      auth()
        .currentUser.linkWithPopup(providerOAuth)
        .then(authHandler)
        .catch(err => console.error(err));
    }
  };

  const renderButtonList = provder => {
    const visible = buttonList[provder].visible;

    return (
      <button
        key={provder}
        className={`btn__social btn--${provder} ${!visible && 'hidden'}`}
        onClick={e => authenticate(e, provder)}
      >
        {provder}
      </button>
    );
  };

  return (
    <div className="btn__social--list">
      {Object.keys(buttonList).map(renderButtonList)}
    </div>
  );
};

SocialButtonList.propTypes = propTypes;
SocialButtonList.defaultProps = defaultProps;

export default withRouter(SocialButtonList);