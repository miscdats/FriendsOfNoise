import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';
// import { Field, Control } from 'react-bulma-components/lib/components/form';
// import Button from 'react-bulma-components/lib/components/button';
import Navbar from 'react-bulma-components/lib/components/navbar';
import { connect } from 'react-redux';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  navState = { active: false }

  toggleNav = () => {
    const { active } = this.navState;
    this.setnavState({ active: !active });
  }

  render() {

    const { alert } = this.props;
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar collapseOnSelect color="primary" fixed="top" active={this.navState.active}>

        <Navbar.Brand>
          <Navbar.Item>
            <NavLink
              to="/"
              activeClassName="navbar-menu is-active"
              >
              <img
                src="../images/logo.png"
                alt="Friends of Noise : Home of Noise!"
                width="112"
                height="28"
                onClick= { this.goTo.bind(this, 'home') }
              />
            </NavLink>
          </Navbar.Item>

          <Navbar.Burger
            active={this.navState.active}
            onClick={this.toggleNav}
          />
        </Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Container>
            <div className="navbar-start">

              <Navbar.Item>
                <NavLink
                  to="/"
                  activeClassName="is-active"
                  onClick = { this.goTo.bind(this, 'home') }
                  >
                  <span className="icon has-text-warning"
                    style={{ marginRight: 5 }}>
                    <i class="fas fa-laugh-squint"></i>
                  </span>
                  Home
                </NavLink>
              </Navbar.Item>

              {
                !isAuthenticated() && (
                  <NavLink
                    className="navbar-item"
                    to="/signup"
                    activeClassName="is-active"
                    >
                    <span className="icon has-text-warning"
                      style={{ marginRight: 5 }}>
                      <i class="fas fa-user-plus"></i>
                    </span>
                    Sign up
                  </NavLink>
                )
              }

              {
                !isAuthenticated() && (
                  <NavLink
                    className="navbar-item"
                    to="/signin"
                    activeClassName="is-active"
                    onClick= { this.login.bind(this) }
                    >
                    <span className="icon has-text-warning"
                      style={{ marginRight: 5 }}>
                      <i class="fas fa-trophy"></i>
                    </span>
                    Log in
                  </NavLink>
                )
              }

              <NavLink
                className="navbar-item"
                to="/calendar"
                activeClassName="is-active"
                >
                <span className="icon has-text-warning"
                  style={{ marginRight: 5 }}>
                  <i class="fas fa-calendar"></i>
                </span>
                Calendar
              </NavLink>

              {
                isAuthenticated() && (
                  <NavLink
                    className="navbar-item"
                    to="/profile"
                    activeClassName="is-active"
                    >
                    <span className="icon has-text-warning"
                      style={{ marginRight: 5 }}>
                      <i class="fas fa-user-circle-o"></i>
                    </span>
                    Profile
                  </NavLink>
                )
              }

              {
                isAuthenticated() && (
                  <NavLink
                    className="navbar-item"
                    onClick= { this.logout.bind(this) }
                    activeClassName="is-active"
                    >
                    <span className="icon has-text-warning"
                      style={{ marginRight: 5 }}>
                      <i class="fas fa-crow"></i>
                    </span>
                    Log out
                  </NavLink>
                )
              }

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link"  href="#overview">
                  Overview
                </a>
                <div className="navbar-dropdown">

                  <NavLink
                    className="navbar-item"
                    to="/about"
                    activeClassName="is-active"
                    >
                    <span className="icon has-text-warning"
                      style={{ marginRight: 5 }}>
                      <i class="fas fa-hand-peace"></i>
                    </span>
                    About Us
                  </NavLink>

                  <hr className="navbar-divider" />

                  <NavLink
                    className="navbar-item"
                    to="/membership"
                    activeClassName="is-active"
                    >
                    <span className="icon has-text-warning"
                      style={{ marginRight: 5 }}>
                      <i class="fas fa-gem"></i>
                    </span>
                    Membership
                  </NavLink>

                </div>
              </div>

            </div>
          </Navbar.Container>

          <Navbar.Container position="end">
            <Navbar.Item href="https://twitter.com/friendsofnoise">
              <span className="icon" style={{ color: '#0084FF' }}>
                <i class="fab fa-lg fa-twitter"></i>
              </span>
              <span /> @FriendsOfNoise
            </Navbar.Item>
          </Navbar.Container>

        </Navbar.Menu>
        </Navbar>

        <div className="container">
            <div className="col-sm-8 col-sm-offset-2">
                {alert.message &&
                  <div className={`alert ${alert.type}`}>
                    {alert.message}
                  </div>
                }

                {this.props.children}
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(Header);
export { connectedApp as Header };
