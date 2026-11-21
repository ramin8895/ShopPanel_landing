"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { FEATURE_LINKS, NAV_LINKS } from "@/lib/nav";
import { PANEL_LOGIN_URL, PANEL_REGISTER_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const MOBILE_BP = 1080;

export function Header() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hoverOpened = useRef(false);

  // sticky shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close everything on navigation
  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen && window.innerWidth <= MOBILE_BP ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // outside click + Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (megaOpen) {
        setMegaOpen(false);
        triggerRef.current?.focus();
      } else if (menuOpen) {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [megaOpen, menuOpen]);

  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, []);

  const onTriggerClick = () => {
    // A click right after a hover-open keeps the menu open (avoids open→close flicker);
    // any later click toggles. A ref is used so a fast hover+click can't read stale state.
    if (hoverOpened.current) {
      hoverOpened.current = false;
      setMegaOpen(true);
      return;
    }
    setMegaOpen((o) => !o);
  };
  const onEnter = () => {
    if (window.innerWidth <= MOBILE_BP) return;
    clearTimeout(hoverTimer.current);
    setMegaOpen(true);
    hoverOpened.current = true;
  };
  const onLeave = () => {
    if (window.innerWidth <= MOBILE_BP) return;
    hoverTimer.current = setTimeout(() => {
      setMegaOpen(false);
      hoverOpened.current = false;
    }, 160);
  };

  const isCurrent = (href: string, match: "exact" | "prefix") =>
    match === "exact" ? pathname === href : pathname.startsWith(href);
  const featuresCurrent = pathname.startsWith("/features");

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`} id="nav">
      <div className="container nav__inner">
        <Link href="/" className="brand" aria-label="نکس‌کارت — صفحه اصلی">
          <img className="brand__logo" src="/logo-mark.svg" width={51} height={28} alt="" />
          <span>NexCart</span>
        </Link>
        <nav className={`nav__menu${menuOpen ? " is-open" : ""}`} id="navMenu" aria-label="منوی اصلی">
          <div className="nav__item" ref={itemRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <button
              ref={triggerRef}
              className="nav__trigger"
              type="button"
              data-mega
              aria-expanded={megaOpen}
              aria-controls="megaFeatures"
              aria-current={featuresCurrent ? "page" : undefined}
              onClick={onTriggerClick}
            >
              امکانات <Icon name="chevron-down" />
            </button>
            <div className={`mega${megaOpen ? " is-open" : ""}`} id="megaFeatures">
              {FEATURE_LINKS.map((l) => (
                <Link className="mega__link" href={l.href} key={l.href} onClick={closeAll}>
                  <span className={`mega__ic ${l.tone}`}>
                    <Icon name={l.icon} />
                  </span>
                  <span>
                    <strong>{l.title}</strong>
                    <small>{l.sub}</small>
                  </span>
                </Link>
              ))}
              <div className="mega__foot">
                <span>امکانات هر پلن را در جدول قیمت‌ها ببین.</span>
                <Link href="/features/" onClick={closeAll}>
                  مشاهده همه امکانات <Icon name="arrow-left" />
                </Link>
              </div>
            </div>
          </div>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              className="nav__link"
              href={l.href}
              aria-current={isCurrent(l.href, l.match) ? "page" : undefined}
              onClick={closeAll}
            >
              {l.label}
            </Link>
          ))}
          <div className="nav__mobile-cta">
            <a className="btn btn--outline" href={PANEL_LOGIN_URL}>
              ورود به پنل
            </a>
            <a className="btn btn--primary" href={PANEL_REGISTER_URL}>
              شروع رایگان
            </a>
          </div>
        </nav>
        <div className="nav__actions">
          <a className="nav__phone" href={`tel:${PHONE_TEL}`} aria-label="تماس با نکس‌کارت: ۰۹۱۴۵۲۷۵۶۵۸">
            <Icon name="phone" />
            <span className="ltr">{PHONE_DISPLAY}</span>
          </a>
          <a className="btn btn--ghost btn--sm nav__cta-desktop" href={PANEL_LOGIN_URL}>
            ورود
          </a>
          <a className="btn btn--primary btn--sm nav__cta-desktop" href={PANEL_REGISTER_URL}>
            شروع رایگان
          </a>
          <button
            ref={burgerRef}
            className="nav__burger"
            id="burger"
            type="button"
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
            aria-controls="navMenu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="nav__burger-open">
              <Icon name="menu-2" />
            </span>
            <span className="nav__burger-close">
              <Icon name="x" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
