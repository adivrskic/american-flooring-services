'use client'; // Ensure it's a client component
import { urlFor } from '../../lib/sanity';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Use usePathname for App Router
import Link from 'next/link';
import Image from "next/image";
import { FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import './Header.scss';

const Tooltip = ({ text }) => {
  return <div className="tooltip">{text}</div>;
};

const Header = ({ headerData }) => {
  const imageUrl = headerData?.image ? urlFor(headerData.image).url() : '/images/americanflooringlogo.png'; // Fallback to default image

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState({ phone: false, location: false });

  const pathname = usePathname();

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
            <Image 
              className={`${isScrolled ? 'scrolled' : ''}`}
              src={imageUrl}
              alt="American Flooring Services Logo"
              layout="fixed"
              width={230}
              height={60}
              quality={100}
              priority
            />
          </Link>
        </div>
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className={`nav-links ${isScrolled ? 'scrolled' : ''}`}>
            {headerData?.navLinks?.map((link, index) => (
              <li key={index} className={pathname === link.url ? 'active' : ''}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <div className="icon-wrapper">
            <a
              href={headerData?.phoneLink || 'tel:+17704455955'} // Use phoneLink from headerData
              target="_blank"
              className={`contact-link ${isScrolled ? 'scrolled' : ''}`}
              onMouseEnter={() => setHovered({ ...hovered, phone: true })}
              onMouseLeave={() => setHovered({ ...hovered, phone: false })}
            >
              <FaPhone size={20} />
            </a>
            <Tooltip text={`Call: ${headerData?.phone || '+1 (770) 445-5955'}`} />
          </div>
          <div className="icon-wrapper">
            <a
              href={headerData?.mapLink || 'https://maps.google.com/?q=783+Metromont+Rd.+Hiram,+GA+30141'} // Use mapLink from headerData
              target="_blank"
              className={`address-link ${isScrolled ? 'scrolled' : ''}`}
              onMouseEnter={() => setHovered({ ...hovered, location: true })}
              onMouseLeave={() => setHovered({ ...hovered, location: false })}
            >
              <FaMapMarkerAlt size={20} />
            </a>
            <Tooltip text={headerData?.address || '783 Metromont Rd. Hiram, GA 30141'} />
          </div>
          <Link className="button" href={headerData?.contactButtonLink || '/contact'}>
            {headerData?.contactButtonText || 'Contact Us'}
          </Link>
        </nav>
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes className="mobile" size={20} /> : <FaBars size={20} />}
        </button>
        {isMenuOpen && (
          <div className="menu-overlay" onClick={toggleMenu}>
            <ul className="overlay-nav">
              {headerData?.mobileMenu?.navLinks?.map((link, index) => (
                <li key={index}><Link href={link.url}>{link.title}</Link></li>
              ))}
            </ul>
            <div className="mobile-buttons">
              <div className="icon-wrapper">
                <a
                  href={headerData?.mobileMenu?.phoneLink || 'tel:+17704455955'}
                  className={`contact-link ${isScrolled ? 'scrolled' : ''}`}
                  onMouseEnter={() => setHovered({ ...hovered, phone: true })}
                  onMouseLeave={() => setHovered({ ...hovered, phone: false })}
                >
                  <FaPhone className="mobile" size={20} />
                </a>
                {hovered.phone && <Tooltip text={`Call: ${headerData?.mobileMenu?.phone || '+1 (770) 445-5955'}`} />}
              </div>
              <div className="icon-wrapper">
                <a
                  href={headerData?.mobileMenu?.mapLink || 'https://maps.google.com/?q=783+Metromont+Rd.+Hiram,+GA+30141'}
                  target="_blank"
                  className={`address-link ${isScrolled ? 'scrolled' : ''}`}
                  onMouseEnter={() => setHovered({ ...hovered, location: true })}
                  onMouseLeave={() => setHovered({ ...hovered, location: false })}
                >
                  <FaMapMarkerAlt className="mobile" size={20} />
                </a>
                {hovered.location && <Tooltip text={headerData?.mobileMenu?.address || '783 Metromont Rd. Hiram, GA 30141'} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
