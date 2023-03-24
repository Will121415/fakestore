import { Button, Link, Navbar, Text, useTheme } from '@nextui-org/react'
import React from 'react'
import AcmeLogo from './AcmeLogo';
import { Box } from './Box';

const NavBar = () => {

    const { isDark } = useTheme();
    return (

            <Navbar isBordered={isDark} variant='floating' color='primaty'>

                <Navbar.Brand>
                    <Link color={'inherit'}>
                        <AcmeLogo />
                        <Text b hideIn="xs">Lyra Shop</Text>
                    </Link>
                </Navbar.Brand>

                <Navbar.Content activeColor='primary' hideIn="xs" variant='underline-rounded'>
                    <Navbar.Link href="#">Features</Navbar.Link>
                    <Navbar.Link isActive href="#">Customers</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link>
                </Navbar.Content>

                <Navbar.Content>
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat as={Link} color='primary' href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>

            </Navbar>
    )
}

export default NavBar;
