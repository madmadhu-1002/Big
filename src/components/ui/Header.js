'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import styles from '@/styles/Header.module.css'
import { FaSearch } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { IoHome } from "react-icons/io5";


const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <Navbar expand="lg" className={`bg-white ${styles.stickyHeader}`} variant="light" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <Container fluid>
          <Navbar.Brand as={Link} href="/">
            <Image
              src="/bigh-logo-1.png"
              alt="AITF Logo"
              width={200}
              height={50}
              priority
              className='ps-3'
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 gap-3"
              style={{ maxHeight: '150px' }}
              navbarScroll
            >
            <Nav.Link as={Link} href="/" className={`${styles.navLink} pt-1 nav-link ${pathname === '/' ? styles.activeLink : ''}`}><IoHome size={'24px'}/></Nav.Link>
              <Nav.Link as={Link} href="/about-us" className={`${styles.navLink} nav-link ${pathname === '/about-us' ? styles.activeLink : ''}`}>About Us</Nav.Link>
              <Nav.Link as={Link} href="/our-business" className={`${styles.navLink} nav-link ${pathname === '/our-business' ? styles.activeLink : ''}`}>Our Business</Nav.Link>
              <Nav.Link as={Link} href="/media-events" className={`${styles.navLink} nav-link ${pathname === '/media-events' ? styles.activeLink : ''}`}>Media & Events</Nav.Link>
              <Nav.Link as={Link} href="/career" className={`${styles.navLink} nav-link ${pathname === '/career' ? styles.activeLink : ''}`}>Career</Nav.Link>
              <Nav.Link as={Link} href="/contact-us" className={`${styles.navLink} nav-link ${pathname === '/contact-us' ? styles.activeLink : ''}`}>Contact Us</Nav.Link>
              <Button className={styles.talkBtn}>Talk to Us</Button>
            </Nav>

          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default Header;
