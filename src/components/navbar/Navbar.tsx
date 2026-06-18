"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT ME", href: "/about" },
  { label: "COURSES", href: "/courses" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    const currentMenu = menuRef.current;
    currentMenu.addEventListener("keydown", handleTabTrap);
    return () => {
      currentMenu.removeEventListener("keydown", handleTabTrap);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container container">
        <Link href="/" className="nav-logo" id="header-logo" aria-label="Music Tutorship Logo">
          Music Tutorship
        </Link>

        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    id={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                    className={`nav-link ${isActive ? "nav-active" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="desktop-cta">
          <Link href="/contact" id="cta-enquire-desktop" className="cta-button">
            ENQUIRE NOW
          </Link>
        </div>

        <button
          ref={hamburgerRef}
          id="mobile-menu-toggle"
          className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-drawer"
          aria-label="Toggle Navigation Drawer"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div 
          className={`nav-overlay ${isMenuOpen ? "nav-overlay-visible" : ""}`} 
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          id="mobile-drawer"
          ref={menuRef}
          className={`mobile-drawer ${isMenuOpen ? "drawer-open" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="drawer-header">
            <span className="drawer-title">Music Tutorship</span>
          </div>

          <nav className="mobile-nav" aria-label="Mobile Menu">
            <ul className="mobile-nav-list">
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                return (
                  <li
                    key={link.label}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                    className={isMenuOpen ? "animate-slide-in" : ""}
                  >
                    <Link
                      href={link.href}
                      id={`mobile-nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                      className={`mobile-nav-link ${isActive ? "mobile-active" : ""}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className={`drawer-footer ${isMenuOpen ? "animate-slide-in" : ""}`}
            style={{ animationDelay: `${NAV_LINKS.length * 0.05}s` }}
          >
            <Link
              href="/contact"
              id="cta-enquire-mobile"
              className="cta-button-drawer"
              onClick={() => setIsMenuOpen(false)}
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
