import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import { AuthContext } from './../../../contexts/AuthProvider/AuthProvider';
// For toggle button theme
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/">
                    <img src='https://static.vecteezy.com/system/resources/previews/004/908/013/original/coding-logo-design-template-free-vector.jpg' style={{height: '60px'}} className='me-2' alt="" />
                </Link>

                <Navbar.Brand><Link to='/'>Programming Language Lovers</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/course' className='me-2'>Courses</Link>
                        <Link to='/faq' className='me-2'>FAQ</Link>
                        <Link to='/blog' className='me-2'>Blog</Link>

                        <ToggleButtonGroup type="radio" name="options" defaultValue={2}>
                            <ToggleButton variant='dark' id="tbg-radio-1" value={1} >
                                Dark
                            </ToggleButton>
                            <ToggleButton variant='light'  id="tbg-radio-2" value={2}>
                                Light
                            </ToggleButton>
                        </ToggleButtonGroup>


                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span style={{Height: '70px'}}>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut} style={{marginRight: '10px'}}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }


                        </>
                        <Link to="/profile">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;