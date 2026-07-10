'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { navItems } from '@/utils/data';
import { useScrollspy, useScrolled } from '@/utils/hooks';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace('#', '')),
    [],
  );
  const activeId = useScrollspy(sectionIds);

  useEffect(() => {
    if (!menuOpen) return;

    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMenuOpen(false);

      setTimeout(() => {
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    },
    [],
  );

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled || menuOpen ? styles.scrolled : ''}`}>
      <nav className={styles.container} aria-label="Main navigation">
        <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, '#home')}>
          Yan
        </a>

        {/* Desktop nav links */}
        <ul className={styles.desktopNav}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`${styles.navLink} ${
                  activeId === item.href.replace('#', '') ? styles.active : ''
                }`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      >
        <ul
          className={styles.mobileNav}
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`${styles.mobileNavLink} ${
                  activeId === item.href.replace('#', '') ? styles.active : ''
                }`}
                onClick={(e) => handleNavClick(e, item.href)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
