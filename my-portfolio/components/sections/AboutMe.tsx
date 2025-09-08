import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownToLine } from 'lucide-react';

type StackItem = {
  label: string;
  src?: string;      
  svg?: React.ReactNode; 
};

const STACK: StackItem[] = [
  { label: 'HTML5', svg: <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-10 md:w-10"><path fill="#E44D26" d="M19 3l9 100 36 10 36-10 9-100H19z"/><path fill="#F16529" d="M64 112V13h45l-8 89-37 10z"/><path fill="#EBEBEB" d="M64 52H43l-1-11h22V30H31l3 33h30V52zM64 88l-18-5-1-12H35l2 24 27 8V88z"/><path fill="#fff" d="M64 52V41h22l-1 11H64zm0 36v15l27-8 3-24H86l-1 12-21 5z"/></svg> },
  { label: 'CSS3',  svg: <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-10 md:w-10"><path fill="#1572B6" d="M19 3l9 100 36 10 36-10 9-100H19z"/><path fill="#33A9DC" d="M64 112V13h45l-8 89-37 10z"/><path fill="#fff" d="M64 52H86l1-11H64V30h34l-3 33H64V52zm0 36l21-5 1-12h11l-3 24-30 8V88z"/></svg> },
  { label: 'JS',    svg: <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-10 md:w-10"><path fill="#F7DF1E" d="M2 2h124v124H2z"/><path d="M86 99c0 8-5 13-12 13-6 0-10-3-12-7l10-6c1 2 2 4 5 4 2 0 3-1 3-3V69h11v30zm-26 13c-8 0-14-4-17-10l10-6c2 3 4 5 7 5 3 0 5-1 5-6V55h11v40c0 11-7 17-16 17z" /></svg> },
  { label: 'Tailwind' , svg: <svg viewBox="0 0 48 48" className="h-8 w-8 md:h-10 md:w-10"><path fill="#38bdf8" d="M24 10c-6 0-9 3-10.5 9 2-3 4.5-4 7.5-3 1.63.41 2.79 1.6 4.06 2.91C26.67 21.2 28.36 23 32 23c6 0 9-3 10.5-9-2 3-4.5 4-7.5 3-1.63-.41-2.79-1.6-4.06-2.91C29.33 12.8 27.64 11 24 11zM13 25c-6 0-9 3-10.5 9 2-3 4.5-4 7.5-3 1.63.41 2.79 1.6 4.06 2.91C15.67 36.2 17.36 38 21 38c6 0 9-3 10.5-9-2 3-4.5 4-7.5 3-1.63-.41-2.79-1.6-4.06-2.91C18.33 27.8 16.64 26 13 26z"/></svg> },
  { label: 'Vue' ,  svg: <svg viewBox="0 0 256 221" className="h-8 w-8 md:h-10 md:w-10"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.28L128 51.2 158.72 0z"/><path fill="#35495E" d="M0 0l128 220.8L256 0h-51.2L128 140.8 51.2 0z"/></svg> },
  { label: 'Redux', svg: <svg viewBox="0 0 256 244" className="h-8 w-8 md:h-10 md:w-10"><path fill="#764abc" d="M177 167c8-1 14-7 14-15 0-9-7-16-16-16-8 0-15 7-15 16v1c-27 5-52-11-63-35 4-3 7-8 7-14 0-9-7-16-16-16s-16 7-16 16c0 6 3 11 8 14-7 20-2 43 13 59 17 18 41 26 64 22 2 6 8 10 15 10 9 0 16-7 16-16 0-8-6-15-15-16zM94 198c-35-13-53-52-40-86 2-5 5-10 8-14 3 2 7 3 11 3 9 0 16-7 16-16 0-8-7-15-16-15-9 0-16 7-16 16v1c-23 17-33 48-25 76 9 32 37 55 70 59 4 0 7-3 8-6-6-3-11-8-14-12zM214 97c-19-22-49-32-78-26-2-7-8-11-15-11-9 0-16 7-16 16 0 8 7 15 16 15 6 0 11-3 14-8 21-4 43 3 58 18 23 25 23 63 0 88-3 3-7 6-11 8 1 3 2 6 2 9 0 9-7 16-16 16-8 0-15-6-16-14-31 6-63-6-81-31-2-4-6-7-9-9-3 3-6 7-8 11 23 31 61 46 98 39 36-6 65-33 73-68 7-28 0-57-21-78z"/></svg> },
  { label: 'React', svg: <svg viewBox="0 0 256 230" className="h-8 w-8 md:h-10 md:w-10"><g fill="none"><circle cx="128" cy="115" r="23" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="10"><ellipse rx="75" ry="28" cx="128" cy="115" transform="rotate(60 128 115)"/><ellipse rx="75" ry="28" cx="128" cy="115" transform="rotate(120 128 115)"/><ellipse rx="75" ry="28" cx="128" cy="115"/></g></g></svg> },
  { label: 'Node',  svg: <svg viewBox="0 0 256 272" className="h-8 w-8 md:h-10 md:w-10"><path fill="#83CD29" d="M128 .6l-110 63.4v126.7l110 63.4 110-63.4V64L128 .6z"/><path fill="#fff" d="M128 228l-51-29.4V75.4L128 46v182z"/></svg> },
  { label: 'Nuxt',  svg: <svg viewBox="0 0 256 200" className="h-8 w-8 md:h-10 md:w-10"><path fill="#00DC82" d="M128 0l128 200H0L128 0z"/><path fill="#2E3A59" d="M128 44L220 200H36L128 44z" opacity=".5"/></svg> },
];

export default function AboutPage() {
  return (
    <main className="bg-neutral-900 text-neutral-100">
      <section className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide font-[system-ui]">
            ABOUT ME
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-neutral-300">
           TEXT
          </p>
        </header>

        {/* Body: two columns */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image card */}
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/about/me.jpg"            
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
              Research Fellow
            </p>

            <div className="mt-5 space-y-4 text-sm md:text-base leading-relaxed text-neutral-300">
              <p>
               TEXT
              </p>
              <p>
                TEXT
              </p>
            </div>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/cv.pdf"
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-black font-semibold hover:opacity-90 transition"
                download
              >
                <ArrowDownToLine className="h-4 w-4" />
                Download CV
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-yellow-400 px-6 py-3 text-yellow-400 font-semibold hover:bg-yellow-400/10 transition"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>

        {/* My Stack */}
        <section className="mt-12 md:mt-16 lg:mt-20">
          <h3 className="text-xl md:text-2xl font-extrabold tracking-wide text-yellow-400">My Stack</h3>
          <div className="mt-6 flex flex-wrap items-center gap-6 md:gap-8">
            {STACK.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={40}
                    height={40}
                    className="h-8 w-8 md:h-10 md:w-10"
                  />
                ) : (
                  <div aria-hidden className="text-current">{item.svg}</div>
                )}
                <span className="text-[11px] md:text-xs text-neutral-400 tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
