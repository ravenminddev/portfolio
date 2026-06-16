import { useState, useEffect } from "react";
import logo from "../../assets/logo/white-crow-wb.png";
import useScrollReveal from "../../hooks/UseScrollReveal";

const tagline = "Somos Ravenmind. Creamos software a medida, interfaces limpias y soluciones inteligentes que impulsan el crecimiento de tu negocio.";

export default function Hero(){

    const [isLogoHovered, setIsLogoHovered] = useState(false);
    const [typedText, setTypedText] = useState("");
    const {ref, isVisible} = useScrollReveal({threshold: 0.2});

    useEffect(() => {
        if (!isVisible) {
            setTypedText("");
            return;
        }
        const timer = setInterval(() => {
            setTypedText(prev => {
                if (prev.length >= tagline.length) { clearInterval(timer); return prev; }
                return tagline.slice(0, prev.length + 1);
            });
        }, 35);
        return () => clearInterval(timer);
    }, [isVisible]);

    return(
        <section id="inicio" className="relative">

            <div ref={ref} className={`w-250 h-[90vh] flex flex-col items-start justify-center mb-17.5 gap-0 relative mx-17 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                
                <div onMouseEnter={()=>setIsLogoHovered(true)} onMouseLeave={()=>setIsLogoHovered(false)}>
                    <img src={logo} alt="Logo" className="w-32 h-32 relative left-40 top-8"/>
                </div>
                <h1 className="text-big-title-v tracking-wider text-white font-bold leading-none font-title">BIENVENIDO A:</h1>
                <h1 className="text-[10rem] font-black text-transparent bg-linear-to-r from-white from-30 to-blue-electric bg-clip-text animate-neon leading-none mb-5 font-title tracking-wide">RAVEN MIND</h1>
                
                <p className="text-subtitle font-medium text-white/80 leading-6">
                    {typedText}
                    <span className="animate-pulse">|</span>
                </p>
            </div>

            <div className="absolute top-0 right-0 w-auto h-auto">
                <img src={logo} alt="logo en grande" className={`w-4xl h-auto ${isLogoHovered?'opacity-10 translate-x-1/3':'opacity-0 translate-x-1/3'} transition-all duration-700`} />
            </div>
        </section>
    )
}