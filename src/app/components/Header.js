'use client'; // Ensure it's a client component

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Use usePathname for App Router
import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import './Header.scss';

const Tooltip = ({ text }) => {
  return <div className="tooltip">{text}</div>;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState({ phone: false, location: false });

  const pathname = usePathname(); // Get the current path for App Router

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 || pathname !== '/') {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    // Check scroll and route on mount
    if (window.scrollY > 0 || pathname !== '/') {
      setIsScrolled(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]); // Dependency on pathname

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <img
              className={`${isScrolled ? 'scrolled' : ''}`}
              src="/images/americanflooringlogo.png"
              alt="American Flooring Services Logo"
            />
          </Link>
        </div>
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className={`nav-links ${isScrolled ? 'scrolled' : ''}`}>
            <li className={pathname === '/products'? 'active' : ''}><Link href="/products">Products</Link></li>
            <li className={pathname === '/portfolio' ? 'active' : ''}><Link href="/portfolio">Portfolio</Link></li>
            <li className={pathname === '/markets' ? 'active' : ''}><Link href="/markets">Markets</Link></li>
            <li className={pathname === '/about' ? 'active' : ''}><Link href="/about">About Us</Link></li>
          </ul>
          <div className="icon-wrapper">
            <a
              href="tel:+17704455955"
              className={`contact-link ${isScrolled ? 'scrolled' : ''}`}
              onMouseEnter={() => setHovered({ ...hovered, phone: true })}
              onMouseLeave={() => setHovered({ ...hovered, phone: false })}
            >
              <FaPhone size={20} />
            </a>
            {hovered.phone && <Tooltip text="Call: +1 (770) 445-5955" />}
          </div>
          <div className="icon-wrapper">
            <a
              href="https://maps.google.com/?q=783+Metromont+Rd.+Hiram,+GA+30141"
              className={`address-link ${isScrolled ? 'scrolled' : ''}`}
              onMouseEnter={() => setHovered({ ...hovered, location: true })}
              onMouseLeave={() => setHovered({ ...hovered, location: false })}
            >
              <FaMapMarkerAlt size={20} />
            </a>
            {hovered.location && <Tooltip text="783 Metromont Rd. Hiram, GA 30141" />}
          </div>
          <a href="/contact" className="contact-button">Contact Us</a>
        </nav>
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
        {isMenuOpen && (
          <div className="menu-overlay" onClick={toggleMenu}>
            <ul className="overlay-nav">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/markets">Markets</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
            <div className="icon-wrapper">
              <a
                href="tel:+17704455955"
                className={`contact-link ${isScrolled ? 'scrolled' : ''}`}
                onMouseEnter={() => setHovered({ ...hovered, phone: true })}
                onMouseLeave={() => setHovered({ ...hovered, phone: false })}
              >
                <FaPhone size={20} />
              </a>
              {hovered.phone && <Tooltip text="Call: +1 (770) 445-5955" />}
            </div>
            <div className="icon-wrapper">
              <a
                href="https://maps.google.com/?q=783+Metromont+Rd.+Hiram,+GA+30141"
                className={`address-link ${isScrolled ? 'scrolled' : ''}`}
                onMouseEnter={() => setHovered({ ...hovered, location: true })}
                onMouseLeave={() => setHovered({ ...hovered, location: false })}
              >
                <FaMapMarkerAlt size={20} />
              </a>
              {hovered.location && <Tooltip text="783 Metromont Rd. Hiram, GA 30141" />}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
