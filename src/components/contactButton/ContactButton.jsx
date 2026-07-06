import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function ContactButton() {
    const { ref, isVisible } = useScrollReveal({ delay: 800 });

    return(
        <a 
            ref={ref}
            href="#contacto"
            className={`flex items-center gap-2 px-4 py-2.5 sm:px-9 sm:py-4 rounded-badge bg-blue-deep/65 backdrop-blur-md text-white fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 ease-out hover:bg-blue-deep hover:animate-floating hover:shadow-lg shadow-md text-body2 sm:text-body ${isVisible ? "opacity-100" : "opacity-0"} font-nav`}
        >
            <FontAwesomeIcon icon={faEnvelope} />
            Contáctanos
        </a>
    )
}