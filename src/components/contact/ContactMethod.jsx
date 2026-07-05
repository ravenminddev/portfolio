import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactMethod({ title, icon, href, setState }) {
    const isExternal = href?.startsWith("http");

    return (
        <a
            href={href}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noreferrer" : undefined}
            className="flex flex-row text-white items-center gap-2 sm:gap-1 cursor-pointer transition-all hover:scale-110 hover:text-blue-raven w-full sm:w-auto"
            onMouseEnter={() => setState?.(true)}
            onMouseLeave={() => setState?.(false)}
        >
            <div className="flex items-center justify-center leading-none text-[32px] sm:text-[42px] lg:text-[48px]">
                <FontAwesomeIcon icon={icon} />
            </div>

            <span className="text-body2 sm:text-small">
                {title}
            </span>
        </a>
    );
}
