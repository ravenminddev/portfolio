import useScrollReveal from "../../hooks/useScrollReveal";

const durations = [500, 700, 900, 1100];

export default function TeamComponent({ name, role, photo, onClick, index = 0 }) {
  const { ref, isVisible } = useScrollReveal({ delay: index * 150 });
  const duration = durations[index] || 700;

  return (
    <div
      ref={ref}
      className={`group flex flex-col items-center gap-3 cursor-pointer transition-[opacity,transform] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDuration: `${duration}ms` }}
      onClick={onClick}
    >
      
      <div className="relative">
        <img
          src={photo}
          alt={name}
          className="size-48 rounded-full border-4 border-blue-raven object-cover transition-all duration-500 group-hover:scale-105 group-hover:border-blue-electric shadow-[0_0_40px_6px_rgba(0,52,158,0.8)] group-hover:shadow-[0_0_55px_10px_rgba(0,163,255,0.5)]"
        />
        <div className="absolute inset-0 rounded-full flex items-center justify-center bg-blue-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-small font-semibold text-white tracking-wide">Ver más</span>
        </div>
      </div>

      <h4 className="text-white-soft text-page-title font-bold group-hover:text-blue-electric transition-colors duration-300">
        {name}
      </h4>
      <span className="text-body text-text-muted leading-none">
        {role}
      </span>
    </div>
  );
}