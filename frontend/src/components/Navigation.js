import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import '../App.css';

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" id="my-nav" style={{ color: 'black' }}>
        <Navbar.Brand className="app-logo" href="/">
          Volunteer Management System
        </Navbar.Brand>
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
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/students" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list">
                  Volunteer List
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/manage" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">
                  Manage Volunteers
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/events" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="calendar-alt">
                  Event List
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/register" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user-plus">
                  Register
                </CDBSidebarMenuItem>
                <NavLink exact to="/login" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="sign-in-alt">
                  Login
                </CDBSidebarMenuItem>
              </NavLink>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </div>
  );
};

export default Navigation;
