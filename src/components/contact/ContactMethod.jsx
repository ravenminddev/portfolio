import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactMethod({ title, icon, href, setState }) {
    const isExternal = href?.startsWith("http");

    return (
        <a
            href={href}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noreferrer" : undefined}
            className="flex flex-col text-white items-center gap-1 cursor-pointer transition-all hover:scale-110 hover:text-blue-raven "
            onMouseEnter={()=>(setState(true))}
            onMouseLeave={()=>(setState(false))}
        >
            <div className="flex items-center justify-center">
                <FontAwesomeIcon icon={icon} style={{ fontSize: "3rem" }} />
            </div>

            <span className="text-small">
                {title}
            </span>
        </a>
    );
}
