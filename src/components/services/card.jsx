import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Card({ title, description, bigDescription, icon, index = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isVisible } = useScrollReveal({ delay: index * 150 });

  return (
    <div
      ref={ref}
      className={`
        w-full rounded-card bg-black-soft/75 backdrop-blur-md
        border-2 border-transparent
        transition-[opacity,transform,border-color,box-shadow] duration-500 ease-out
        cursor-pointer
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${isOpen ? "border-blue-electric shadow-[0_0_30px_rgba(0,163,255,0.12)]" : "hover:border-blue-raven hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(0,52,158,0.2)]"}
      `}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between gap-6 px-8 py-7">

        <div className={`shrink-0 flex items-center justify-center size-14 rounded-2xl transition-colors duration-300 ${isOpen ? "bg-blue-electric/15" : "bg-blue-raven/20"}`}>
          <FontAwesomeIcon
            icon={icon}
            className={`transition-colors duration-300 ${isOpen ? "text-blue-electric" : "text-white"}`}
            style={{ fontSize: "1.6rem" }}
          />
        </div>

        {/* Texto */}
        <div className="flex-1 border-l-4 border-blue-raven pl-6">
          <h2 className="text-white text-page-title font-bold mb-1">{title}</h2>
          <p className="text-text-muted text-body leading-snug">{description}</p>
        </div>

        {/* Chevron */}
        <div className={`shrink-0 transition-transform duration-300 text-text-muted ${isOpen ? "rotate-180 text-blue-electric" : ""}`}>
          <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: "1rem" }} />
        </div>

      </div>

      {/* Descripción expandible */}
      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-60" : "max-h-0"}`}>
        <div className="px-8 pb-7 pl-[calc(2rem+3.5rem+1.5rem+1px)]">
          {/* alineado con el texto de arriba (padding-left = px-8 + size-14 + gap-6 + border) */}
          <div className="h-px bg-muted/40 mb-5" />
          <p className="text-white-soft text-body leading-relaxed">
            {bigDescription}
          </p>
        </div>
      </div>

    </div>
  );
}