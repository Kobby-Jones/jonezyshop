import React, {useState} from 'react';
import { BsCart4, BsSearch } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md'
import {SiFireship} from 'react-icons/si'
import { Button, Dropdown, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
function NavbarComponet() {
  const [searchQuery, setSearchQuery] = useState("")
  

    return (
      <Navbar className="px-4 bg-light" expand="lg">
        <Navbar.Brand
          className="text-decoration-none navbar-brand fs-2"
          href="#"
        >
          <SiFireship size={30} className="mb-2 me-1" color="orangered" />
          JonezyShop
        </Navbar.Brand>
        <Navbar.Toggle arial-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Form>
              <div className="form-controls d-flex">
                <FormControl
                  type="text"
                  value={searchQuery}
                  onChange = {(e)=> setSearchQuery(e.target.value)}
                  
                  className="search-input"
                  placeholder="Search products, brands and categories"
                />
                <NavLink to={`search/${searchQuery}`}>
                  <Button  className="ms-2 search-button">
                    <BsSearch size={15} /> Search
                  </Button>
                </NavLink>
              </div>
            </Form>
            <Dropdown className="ms-2 ">
              <Dropdown.Toggle className="dropdown-toggle">
                <MdAccountCircle size={20} /> Acount
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item>
                  <Button className="dropdown-sign-in-button">Sign In</Button>
                  <Dropdown.Item>
                    <hr />
                  </Dropdown.Item>
                </Dropdown.Item>
                <Dropdown.Item>My Accounts</Dropdown.Item>
                <Dropdown.Item>Sign In</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h6>
              <BsCart4 className="shopping-cart ms-5" size={30} />
              <span className="mt-5 ms-2">Cart</span>
            </h6>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavbarComponet;