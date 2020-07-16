import React from 'react';
import { Navbar, Form, Button, FormControl, InputGroup, NavDropdown } from 'react-bootstrap';


const Searchbar = () => {
    return(
        <div>
            <Navbar className="bg-light justify-around">
                <Form grid>
                    <FormControl type="text" placeholder="Search" className=" mS-sm-2" />
                </Form>
                
                <Form grid>
                    <InputGroup>
                    <FormControl className='w-20'
                        placeholder="Categories"
                        aria-label="Categories"
                        aria-describedby="basic-addon1"
                    />
                    <InputGroup.Prepend>
                        <NavDropdown title="" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Food</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Fashion</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bakery</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Shoes</NavDropdown.Item>
                        </NavDropdown>
                    </InputGroup.Prepend>
                    </InputGroup>
                </Form>

                <Form grid>
                    <InputGroup>
                    <FormControl className='w-20'
                        placeholder="Location"
                        aria-label="Location"
                        aria-describedby="basic-addon1"
                    />
                    <InputGroup.Prepend>
                        <NavDropdown title="" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Abuja</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Lagos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Kano</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Enugu</NavDropdown.Item>
                        </NavDropdown>
                    </InputGroup.Prepend>
                    </InputGroup>
                </Form>
                <Form grid>
                <Button style={{background: 'linear-gradient(105.33deg, #F41313 -28.55%, #F90178 125.13%)'}} className='dim ph4 br2 bw0' type="submit">Submit</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Searchbar;