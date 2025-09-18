import Image from 'next/image';
import Link from 'next/link';
import cvPhoto from '../../public/photo/cv_foto.jpg';

import { 
  SiC, 
  SiCplusplus, 
  SiTypescript, 
  SiPython, 
  SiDocker, 
  SiDjango, 
  SiJavascript, 
  SiReact, 
  SiGit, 
  SiGithub 
} from "react-icons/si";

const iconCls = "h-8 w-8 md:h-10 md:w-10"; 


type StackItem = {
  label: string;
  src?: string;      
  svg?: React.ReactNode; 
};

const QiskitSVG = (
  <svg
    viewBox="0 0 256 256"
    className="h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Neon quantum sphere"
  >
    <defs>
      <radialGradient id="bg" cx="50%" cy="50%" r="65%">
        <stop offset="0%" stopColor="#11131a" />
        <stop offset="100%" stopColor="#0a0c10" />
      </radialGradient>

      <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="65%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>

      <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="2.6" result="b1" />
        <feMerge>
          <feMergeNode in="b1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="outerGlow" x="-70%" y="-70%" width="240%" height="240%">
        <feGaussianBlur stdDeviation="4.2" result="b2" />
        <feMerge>
          <feMergeNode in="b2" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g
      stroke="url(#strokeGrad)"
      strokeWidth="10"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="128" cy="128" r="88" filter="url(#outerGlow)" />

      <g filter="url(#glow)">
        <ellipse cx="128" cy="92" rx="78" ry="20" />
        <ellipse cx="128" cy="128" rx="84" ry="10" />
        <ellipse cx="128" cy="164" rx="78" ry="20" />
      </g>

      <g filter="url(#glow)">
        <ellipse cx="128" cy="56" rx="18" ry="8" />
        <ellipse cx="128" cy="200" rx="18" ry="8" />
      </g>
    
      <g filter="url(#glow)">
        <path d="M108 52c8-3 32-3 40 0" />
        <path d="M92 128c12-2 60-2 72 0" />
      </g>
    </g>
  </svg>
);


const STACK: StackItem[] = [
  { label: "Python",     svg: <SiPython className={iconCls} /> },
  { label: "C",          svg: <SiC className={iconCls} /> },
  { label: "C++",        svg: <SiCplusplus className={iconCls} /> },
  { label: "Docker",     svg: <SiDocker className={iconCls} /> },
  { label: "Django",     svg: <SiDjango className={iconCls} /> },
  { label: "TypeScript", svg: <SiTypescript className={iconCls} /> },
  { label: "JavaScript", svg: <SiJavascript className={iconCls} /> },
  { label: "React",      svg: <SiReact className={iconCls} /> },
  { label: "Git",        svg: <SiGit className={iconCls} /> },
  { label: "GitHub",     svg: <SiGithub className={iconCls} /> },
  { label: "Qiskit",     svg: QiskitSVG }, 
];

export default function AboutPage() {
  return (
    <section id="about" className="bg-neutral-900 text-neutral-100">
      <section className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide font-[system-ui]">
            ABOUT ME
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-neutral-300">
            I am a PhD student specializing in <span className="font-semibold">Combinatorial Optimization </span> 
            and <span className="font-semibold">Quantum Computing</span>, with a focus on developing 
            <span className="font-semibold"> Variational Quantum Algorithms (VQAs)</span> or <span className="font-semibold">  Metaheuristics </span>for combinatorial optimization problem. 
          </p>
        </header>

        {/* Body: two columns */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image card */}
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={cvPhoto}            
                alt="Portrait"
                width={640}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl lg:max-w-2xl">
            <h2 className="text-yellow-400 text-2xl md:text-3xl font-extrabold tracking-wide">
                Fabrizio Fagiolo
            </h2>
            <p className="mt-2 text-sm md:text-base font-semibold tracking-widest">
              PhD Student
            </p>

            <div className="mt-5 space-y-4 text-sm md:text-base leading-relaxed text-neutral-300">
              <p>
                Alongside my research, I have hands-on experience as a <span className="font-semibold">Full-Stack Developer</span> 
                and <span className="font-semibold">Software Engineer</span>, working with technologies such as Python/Django, FastAPI, Next.js, and React  
                combining rigorous academic work with practical software development skills.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/cv/Fabrizio_Fagiolo_CV_Jul2025.pdf"
                download="Fabrizio_Fagiolo_CV_Jul2025.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-black font-semibold hover:opacity-90 transition"
              >
                Download CV
              </a>
              <Link
                href="https://www.linkedin.com/in/fabrizio-fagiolo-49905a182/"
                className="inline-flex items-center justify-center rounded-lg border border-yellow-400 px-6 py-3 text-yellow-400 font-semibold hover:bg-yellow-400/10 transition"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>

       
     
      {/* My Stack */}
      <section className="mt-12 md:mt-16 lg:mt-20">
        <h3 className="text-center text-xl md:text-2xl font-extrabold tracking-wide text-yellow-400">
          My Stack
        </h3>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {STACK.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="grid h-10 w-10 md:h-12 md:w-12 place-items-center">
                {item.src ? (
                  <Image src={item.src} alt={item.label} width={48} height={48} className="h-10 w-10 md:h-12 md:w-12" />
                ) : (
                  <div aria-hidden className="text-current h-10 w-10 md:h-12 md:w-12">{item.svg}</div>
                )}
              </div>
              <span className="text-[11px] md:text-xs text-neutral-400 tracking-wide text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
      </section>
    </section>
  );
}
