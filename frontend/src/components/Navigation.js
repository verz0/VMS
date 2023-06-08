import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';
import Logout from './logout';

const Navigation = () => {
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    // Fetch the logged-in user's email
    fetch('http://127.0.0.1:8000/api/login/', {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the email state
        setLoggedInUserEmail(data.email);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
     <Navbar bg="dark" variant="dark" id="my-nav" style={{ color: 'black' }} className="justify-content-between">
        <Navbar.Brand className={`app-logo ${activePage === 'home' ? 'active' : ''}`} href="/">
          Volunteer Management System
        </Navbar.Brand>
        <Nav>
          <Logout />
        </Nav>
      </Navbar>

      <div className="sidebar">
        <CDBSidebar
          textColor="#000000"
          style={{ backgroundColor: 'transparent' }}
        >
          <CDBSidebarHeader
            prefix={<i className="fa fa-bars" style={{ color: 'black' }} />}
            style={{ color: 'black' }}
          >
            Navigation
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <NavLink
                exact
                to="/"
                activeClassName="activeClicked"
                onClick={() => setActivePage('home')}
              >
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/students"
                activeClassName="activeClicked"
                onClick={() => setActivePage('students')}
              >
                <CDBSidebarMenuItem icon="list">
                  Volunteer List
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/manage"
                activeClassName="activeClicked"
                onClick={() => setActivePage('manage')}
              >
                <CDBSidebarMenuItem icon="user">
                  Manage Volunteers
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/events"
                activeClassName="activeClicked"
                onClick={() => setActivePage('events')}
              >
                <CDBSidebarMenuItem icon="calendar-alt">
                  Event List
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/register"
                activeClassName="activeClicked"
                onClick={() => setActivePage('register')}
              >
                <CDBSidebarMenuItem icon="user-plus">
                  Register
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/login"
                activeClassName="activeClicked"
                onClick={() => setActivePage('login')}
              >
                <CDBSidebarMenuItem icon="sign-in-alt">
                  Login
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </div>
  );
};

export default Navigation;
