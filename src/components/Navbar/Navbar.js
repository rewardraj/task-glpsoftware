import React from 'react'
import styled from'styled-components'
import { NavLink as Link } from 'react-router-dom'

const Nav = styled.nav`
    background-color: #4dbd74;
    height: 60px;
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 12;
    
`

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        
        color: #171818;
    }
`

const NavMenu = styled.div`
    display: flex;
    margin: 0 auto;
`

const Navbar = () => {
  return (
    <Nav>
      <NavMenu>
        <NavLink to="/">
            HOME
        </NavLink>
        <NavLink to="/html">
            HTML
        </NavLink>
        <NavLink to="/button">
            BUTTON
        </NavLink>
        <NavLink to="/header">
            HEADER
        </NavLink>
        <NavLink to="/mockup">
            MOCKUP
        </NavLink>
      </NavMenu>
    </Nav>
  )
}

export default Navbar
