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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            ABOUT ME
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-neutral-300">
            I am a PhD Student specializing in <span className="font-semibold">Combinatorial Optimization</span> 
            and <span className="font-semibold">Quantum Computing</span>, with a focus on developing
            <span className="font-semibold"> Quantum Algorithms </span> or <span className="font-semibold">Metaheuristics</span> for combinatorial optimization problems.
          </p>
        </header>

        <div
          className="
            mt-10 md:mt-14
            grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12
            items-start
          "
        >
          {/* Image card */}
          <div className="lg:col-span-5 mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-neutral-800 shadow-[0_12px_40px_rgba(0,0,0,.35)]">
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

          <div
            className="
              lg:col-span-7
              lg:min-h-[420px]               
              lg:flex lg:flex-col lg:justify-center  
              mx-auto w-full max-w-xl lg:max-w-2xl
            "
          >
            <div className="rounded-2xl bg-neutral-900/60 ring-1 ring-neutral-800 p-6 md:p-7">
              <h2 className="text-yellow-400 text-2xl md:text-3xl font-extrabold tracking-tight">
                Fabrizio Fagiolo
              </h2>
              <p className="mt-1 text-sm md:text-base font-semibold tracking-wide text-neutral-300">
                PhD Student
              </p>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-300">
              While studying, I worked as a Full-Stack Developer and Software Engineer (Python/Django, Next.js, Angular/Ionic) in industry. 
              Academically, I focus on performance and algorithms, employing C/C++ to speed up metaheuristics and Python for quantum programming.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <a
                  href="/cv/Fabrizio_Fagiolo_CV_Jul2025.pdf"
                  download="Fabrizio_Fagiolo_CV_Jul2025.pdf"
                  className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-black font-semibold hover:brightness-95 transition"
                >
                  Download CV
                </a>
                <Link
                  href="https://www.linkedin.com/in/fabrizio-fagiolo-49905a182/"
                  className="inline-flex items-center justify-center rounded-lg border border-yellow-400/80 px-5 py-2.5 text-yellow-400 font-semibold hover:bg-yellow-400/10 transition"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* My Stack */}
        <section className="mt-12 md:mt-16 lg:mt-20">
          <h3 className="text-center text-xl md:text-2xl font-extrabold tracking-tight text-yellow-400">
            My Stack
          </h3>

          <div className="mt-6 rounded-2xl bg-neutral-900/60 ring-1 ring-neutral-800 p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {STACK.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className="
                      grid h-12 w-12 md:h-14 md:w-14 place-items-center
                      rounded-xl bg-neutral-800/60 ring-1 ring-neutral-700
                      transition hover:translate-y-[-2px] hover:ring-yellow-400/60
                    "
                    aria-hidden
                  >
                    {item.src ? (
                      <Image
                        src={item.src}
                        alt={item.label}
                        width={56}
                        height={56}
                        className="h-12 w-12 md:h-14 md:w-14 object-contain"
                      />
                    ) : (
                      <div className="text-neutral-200">{item.svg}</div>
                    )}
                  </div>
                  <span className="text-[11px] md:text-xs text-neutral-400 tracking-wide text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
