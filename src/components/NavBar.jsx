import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, NavbarBrand } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Logo from "../img/logo.svg"

export default function NavBar({showTrue, showSearchWindow}) {
    return(
        <>
            <Navbar expand="sm" className='px-10 fixed z-[3] w-[100%] bg-[#FAFAFF] pl-0'>
                <NavbarBrand className='border h-[86px] flex items-center justify-center pl-8 pr-12 navbar-brand'>
                    <div className='flex overflow-hidden'><img src={Logo} alt="Logo" /></div>
                    <p className='text-[#160C28] logo-p'>clothes for beginners and <br /> professional runners </p>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse className='grid-cols-1 grid-rows-2'>
                    <Nav>
                        <NavLink className='menu-nav-bar-women text-[#160C28] hover:bg-[#FDCEA6] hover:font-bold'>Women</NavLink>
                        <NavLink className='menu-nav-bar-inside text-[#160C28] hover:bg-[#FDCEA6] hover:font-bold'>Inside Blade Runner</NavLink>
                        <NavLink className={`menu-nav-bar-search text-[#160C28] hover:bg-[#FDCEA6] ${showSearchWindow ? 'bg-[#8CAE99]' : ''} hover:font-bold`} onClick={showTrue}>Search</NavLink>
                        <NavLink className='menu-nav-bar-log-in text-[#160C28] hover:bg-[#FDCEA6] hover:font-bold'>Log In</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className='menu-nav-bar-man text-[#160C28] hover:bg-[#FDCEA6] hover:font-bold'>Man</NavLink>
                        <NavLink className='menu-nav-bar-accessories text-[#160C28] hover:bg-[#FDCEA6] hover:font-bold'>Accessories</NavLink>
                        <NavLink className='menu-nav-bar-wishlist text-[#160C28] hover:bg-[#FDCEA6] hover:font-bold'>Wishlist</NavLink>
                        <NavLink className='menu-nav-bar-cart text-[#160C28] hover:bg-[#FDCEA6] hover:font-bold'>Cart</NavLink>
                    </Nav>
                    <Nav></Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    )
}