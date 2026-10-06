"use client";

import { useEffect, type FormEvent } from "react";
import Image from "next/image";
import { copy, locales, type Locale } from "@/lib/i18n";

const phoneDisplay = "+7 700 804 09 95";
const phoneLink = "+77008040995";
const whatsappLink = "https://wa.me/77008040995";
const mapLink = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Астана, улица Кабанбай батыра 57/2");
const fleetImages = [
  "/fleet/dump-truck.jpg",
  "/fleet/concrete-mixer.jpg",
  "/fleet/logistics-trucks.jpg",
];
const partners = [
  "Азия Мебель",
  "Hi Engineering",
  "Be Green",
  "BI Group",
  "Mobitex Group",
  "Integra",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 3.5 4.6 4.7c-.8.4-1.2 1.3-1 2.2 1.5 6.8 6.8 12.1 13.6 13.6.9.2 1.8-.2 2.2-1l1.2-2.6c.4-.8.1-1.7-.6-2.2l-2.8-1.9c-.7-.4-1.5-.4-2.1.2l-1.2 1.2a14 14 0 0 1-4.2-4.2l1.2-1.2c.6-.6.6-1.4.2-2.1L9.4 4.1c-.5-.7-1.4-1-2.2-.6Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-6.1 7-12A7 7 0 1 0 5 9c0 5.9 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.3" />
    </svg>
  );
}

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="TOO TAS — на главную">
      <span className="brand-mark" aria-hidden="true">
        <span />
      </span>
      <span className="brand-name">TAS</span>
      <span className="brand-company">ТОО</span>
    </a>
  );
}

function RouteVisual({ label, route }: { label: string; route: string }) {
  return (
    <div className="route-visual" aria-label={label}>
      <div className="route-grid" />
      <div className="route-sun" />
      <div className="route-road">
        <span className="road-line road-line-one" />
        <span className="road-line road-line-two" />
        <span className="road-line road-line-three" />
      </div>
      <div className="route-truck">
        <span className="truck-box" />
        <span className="truck-cab" />
        <span className="truck-wheel truck-wheel-one" />
        <span className="truck-wheel truck-wheel-two" />
      </div>
      <div className="route-caption">
        <span>{label}</span>
        <strong>{route}</strong>
      </div>
      <div className="route-number">24/7</div>
    </div>
  );
}

export function LandingPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "kk" ? "kk" : locale === "zh" ? "zh-CN" : "ru";
  }, [locale]);

  function submitToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      t.form.whatsappIntro,
      `${t.form.company}: ${data.get("company") || "—"}`,
      `${t.form.name}: ${data.get("name") || "—"}`,
      `${t.form.phone}: ${data.get("phone") || "—"}`,
      `${t.form.service}: ${data.get("service") || "—"}`,
      `${t.form.comment}: ${data.get("comment") || "—"}`,
    ];

    window.open(`${whatsappLink}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main id="top" className={`site locale-${locale}`}>
      <header className="header">
        <div className="container header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Основная навигация">
            <a href="#services">{t.nav.services}</a>
            <a href="#fleet">{t.nav.fleet}</a>
            <a href="#partners">{t.nav.partners}</a>
            <a href="#contacts">{t.nav.contacts}</a>
          </nav>
          <div className="header-actions">
            <div className="language-switcher" aria-label="Выбор языка">
              {locales.map((item) => (
                <a key={item} className={item === locale ? "active" : ""} href={`/${item}/`}>
                  {item.toUpperCase()}
                </a>
              ))}
            </div>
            <a className="header-phone" href={`tel:${phoneLink}`}>
              {phoneDisplay}
            </a>
            <a className="button button-yellow header-cta" href="#request">
              {t.actions.calculate}
              <ArrowIcon />
            </a>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Открыть меню"><span /><span /><span /></summary>
            <div className="mobile-menu-panel">
              <a href="#services">{t.nav.services}</a>
              <a href="#fleet">{t.nav.fleet}</a>
              <a href="#partners">{t.nav.partners}</a>
              <a href="#contacts">{t.nav.contacts}</a>
              <a href={`tel:${phoneLink}`}>{phoneDisplay}</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero">
        <div className="hero-stripes" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow light">{t.hero.eyebrow}</div>
            <h1>
              {t.hero.title}
              <span>{t.hero.accent}</span>
            </h1>
            <p>{t.hero.text}</p>
            <div className="hero-buttons">
              <a className="button button-yellow" href="#request">
                {t.actions.calculate}
                <ArrowIcon />
              </a>
              <a className="button button-outline" href={`tel:${phoneLink}`}>
                <PhoneIcon />
                {t.actions.call}
              </a>
            </div>
            <div className="hero-badges">
              {t.hero.badges.map((badge) => (
                <span key={badge}><i />{badge}</span>
              ))}
            </div>
          </div>
          <RouteVisual label={t.hero.visualLabel} route={t.hero.route} />
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-grid">
          <span className="trust-lead">TOO TAS</span>
          <span>{t.hero.badges[0]}</span>
          <span>{t.hero.badges[1]}</span>
          <span>{t.hero.badges[2]}</span>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-heading heading-grid">
            <div>
              <div className="eyebrow">{t.services.eyebrow}</div>
              <h2>{t.services.title}</h2>
            </div>
            <p>{t.services.text}</p>
          </div>
          <div className="service-grid">
            {t.services.items.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-topline">
                  <span>{service.number}</span>
                  <ArrowIcon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section benefits">
        <div className="container benefits-layout">
          <div className="benefits-title">
            <div className="eyebrow light">{t.benefits.eyebrow}</div>
            <h2>{t.benefits.title}</h2>
            <div className="benefits-line" />
          </div>
          <div className="benefit-list">
            {t.benefits.items.map((item, index) => (
              <article className="benefit-item" key={item.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section fleet" id="fleet">
        <div className="container">
          <div className="section-heading heading-grid">
            <div>
              <div className="eyebrow">{t.fleet.eyebrow}</div>
              <h2>{t.fleet.title}</h2>
            </div>
            <p>{t.fleet.text}</p>
          </div>
          <div className="fleet-grid">
            {t.fleet.items.map((item, index) => (
              <article className="fleet-card" key={item.title}>
                <Image
                  src={fleetImages[index]}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
                <div className="fleet-card-shade" />
                <span className="fleet-number">0{index + 1}</span>
                <div className="fleet-card-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="section-heading compact">
            <div className="eyebrow">{t.process.eyebrow}</div>
            <h2>{t.process.title}</h2>
          </div>
          <div className="process-grid">
            {t.process.steps.map((step, index) => (
              <article className="process-step" key={step.title}>
                <div className="step-number">{index + 1}</div>
                <div className="step-line" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section partners" id="partners">
        <div className="container">
          <div className="section-heading heading-grid">
            <div>
              <div className="eyebrow">{t.partners.eyebrow}</div>
              <h2>{t.partners.title}</h2>
            </div>
            <p>{t.partners.text}</p>
          </div>
          <div className="partner-grid">
            {partners.map((partner) => <div key={partner}>{partner}</div>)}
          </div>
        </div>
      </section>

      <section className="request" id="request">
        <div className="container request-grid">
          <div className="request-copy">
            <div className="eyebrow light">{t.cta.eyebrow}</div>
            <h2>{t.cta.title}</h2>
            <p>{t.cta.text}</p>
            <a href={`tel:${phoneLink}`} className="request-phone">{phoneDisplay}</a>
          </div>
          <form className="request-form" onSubmit={submitToWhatsApp}>
            <div className="form-row">
              <label>
                <span>{t.form.company}</span>
                <input name="company" autoComplete="organization" />
              </label>
              <label>
                <span>{t.form.name}</span>
                <input name="name" autoComplete="name" required />
              </label>
            </div>
            <div className="form-row">
              <label>
                <span>{t.form.phone}</span>
                <input name="phone" type="tel" autoComplete="tel" required placeholder="+7" />
              </label>
              <label>
                <span>{t.form.service}</span>
                <select name="service" defaultValue="" required>
                  <option value="" disabled>{t.form.servicePlaceholder}</option>
                  {t.form.services.map((service) => <option key={service}>{service}</option>)}
                </select>
              </label>
            </div>
            <label>
              <span>{t.form.comment}</span>
              <textarea name="comment" rows={3} />
            </label>
            <button className="button button-yellow form-submit" type="submit">
              {t.actions.send}
              <ArrowIcon />
            </button>
            <small>{t.form.consent}</small>
          </form>
        </div>
      </section>

      <section className="section contacts" id="contacts">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow">{t.contact.eyebrow}</div>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </div>
          <div className="contact-card">
            <a className="contact-phone" href={`tel:${phoneLink}`}>
              <PhoneIcon />
              <span><small>{t.actions.call}</small>{phoneDisplay}</span>
            </a>
            <div className="contact-location">
              <PinIcon />
              <span>{t.contact.coverage}</span>
            </div>
            <a className="contact-location contact-address" href={mapLink} target="_blank" rel="noreferrer">
              <PinIcon />
              <span>{t.contact.address}</span>
            </a>
            <a className="button button-dark" href={whatsappLink} target="_blank" rel="noreferrer">
              {t.actions.whatsapp}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-top">
          <BrandMark />
          <p>{t.footer}</p>
          <div className="footer-languages">
            {locales.map((item) => (
              <a key={item} className={item === locale ? "active" : ""} href={`/${item}/`}>
                {copy[item].languageLabel}
              </a>
            ))}
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} TOO TAS</span>
          <span>{t.contact.address}</span>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label={t.actions.whatsapp}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiOc5xvfIZYdFo8tNSqqyu1SR9TEqvk1wyEjnHVMwfEw&s=10"
          alt=""
          width={56}
          height={56}
          unoptimized
        />
      </a>
    </main>
  );
}
