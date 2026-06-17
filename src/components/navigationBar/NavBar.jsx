import { useEffect, useState } from "react";
import logo from "../../assets/logo/alternative-2-wb.png";

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("inicio");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { id: "inicio", text: "Inicio" },
        { id: "servicios", text: "Servicios" },
        { id: "experiencia", text: "Experiencia" },
        { id: "nosotros", text: "Nosotros" },
        { id: "contacto", text: "Contacto" },
    ];

    /* ── Detectar sección activa ── */
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.4 }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    /* ── Detectar scroll para el fondo ── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav
            className={`w-full sticky top-0 z-50 text-white transition-all duration-300 ${
                scrolled
                    ? "bg-black/80 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.4)]"
                    : "bg-transparent backdrop-blur-sm"
            }`}
        >
            <div className="max-w-full mx-auto px-10 flex items-center justify-between h-17.5">

                {/* ── Logo ── */}
                <a href="#inicio" onClick={handleLinkClick}>
                    <img src={logo} alt="RavenMind" className="h-20 w-auto" />
                </a>

                {/* ── Links desktop ── */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="relative pb-2 text-body font-medium transition-colors duration-300 group"
                            style={{
                                color: activeSection === link.id ? "#FFFFFF" : "#999999",
                            }}
                        >
                            {link.text}

                            {/* Indicador activo — línea debajo */}
                            <span
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    height: "2px",
                                    backgroundColor: "#00A3FF",
                                    borderRadius: "9999px",
                                    transition: "width 0.3s ease, opacity 0.3s ease",
                                    width: activeSection === link.id ? "100%" : "0%",
                                    opacity: activeSection === link.id ? 1 : 0,
                                }}
                            />
                        </a>
                    ))}
                </div>

                {/* ── Botón hamburguesa mobile ── */}
                <button
                    className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menú"
                >
                    <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>

            </div>

            {/* ── Menú mobile desplegable ── */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black-soft/95 backdrop-blur-xl border-t border-muted/20 ${
                    menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col px-6 py-4 gap-1">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={handleLinkClick}
                            className={`py-3 text-body font-medium border-b border-muted/20 last:border-0 transition-colors duration-200 ${
                                activeSection === link.id
                                    ? "text-blue-electric"
                                    : "text-text-muted hover:text-white"
                            }`}
                        >
                            {link.text}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        onClick={handleLinkClick}
                        className="mt-3 text-center px-5 py-3 rounded-full text-body font-semibold bg-blue-raven hover:bg-blue-electric transition-colors duration-300"
                    >
                        Contáctanos
                    </a>
                </div>
            </div>
        </nav>
    );
}