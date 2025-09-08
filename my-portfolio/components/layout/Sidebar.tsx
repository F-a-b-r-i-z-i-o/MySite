import Link from "next/link";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import SocialLinks from "../ui/SocialLinks";

const NAV = [
  { href: "#about", label: "ABOUT ME" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#publications", label: "PUBLICATIONS" }
];

export default function Sidebar() {
  return (
    <aside className="bg-black/90 min-h-svh md:min-h-dvh md:sticky md:top-0 px-6 py-8 md:py-10">
      <div className="mx-auto w-full max-w-[260px] min-h-full grid grid-rows-[1fr_auto] justify-items-center">
        
        {/* NAV center */ }
        <nav className="self-center flex flex-col items-center gap-5 md:gap-6 text-[11px] md:text-xs tracking-[0.2em] leading-6 text-center">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-200/80 hover:text-yellow-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 text-yellow-400 hover:opacity-90"
          >
            &lt; CONTACT /&gt;
          </Link>
        </nav>

        {/* Social */}
        <div className="self-end w-full pb-[env(safe-area-inset-bottom)]">
          <div className="mt-6 flex justify-center">
            <SocialLinks
              items={[
                { href: "#", label: "Facebook", icon: Facebook },
                { href: "#", label: "Twitter", icon: Twitter },
                { href: "#", label: "Github", icon: Github },
                { href: "#", label: "LinkedIn", icon: Linkedin },
              ]}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
