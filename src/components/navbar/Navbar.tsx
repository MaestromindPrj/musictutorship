"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

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
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo} id="header-logo" aria-label="Music Tutorship Logo">
          Music Tutorship
        </Link>

        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => {
              const isActive = link.label === "HOME";
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    id={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.desktopCta}>
          <Link href="/contact" id="cta-enquire-desktop" className={styles.ctaButton}>
            ENQUIRE NOW
          </Link>
        </div>

        <button
          ref={hamburgerRef}
          id="mobile-menu-toggle"
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-drawer"
          aria-label="Toggle Navigation Drawer"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        <div 
          className={`${styles.overlay} ${isMenuOpen ? styles.overlayVisible : ""}`} 
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          id="mobile-drawer"
          ref={menuRef}
          className={`${styles.mobileDrawer} ${isMenuOpen ? styles.drawerOpen : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <div className={styles.drawerHeader}>
            <span className={styles.drawerTitle}>Music Tutorship</span>
          </div>

          <nav className={styles.mobileNav} aria-label="Mobile Menu">
            <ul className={styles.mobileNavList}>
              {NAV_LINKS.map((link, idx) => {
                const isActive = link.label === "HOME";
                return (
                  <li
                    key={link.label}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                    className={isMenuOpen ? styles.animateSlideIn : ""}
                  >
                    <Link
                      href={link.href}
                      id={`mobile-nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                      className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ""}`}
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
            className={`${styles.drawerFooter} ${isMenuOpen ? styles.animateSlideIn : ""}`}
            style={{ animationDelay: `${NAV_LINKS.length * 0.05}s` }}
          >
            <Link
              href="/contact"
              id="cta-enquire-mobile"
              className={styles.ctaButtonDrawer}
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
