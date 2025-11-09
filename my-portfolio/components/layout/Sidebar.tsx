"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Github, Linkedin, GraduationCap, Menu, X } from "lucide-react";
import SocialLinks from "../ui/SocialLinks";

const NAV = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT ME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/publication", label: "PUBLICATIONS" },
];

function normalize(path: string) {
  if (!path) return "/";
  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
}

// More visible ResearchGate icon
const ResearchGateIcon = ({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
    className={`h-5 w-5 ${className}`} // slightly bigger than default lucide 16px
  >
    {/* Circle background uses currentColor so it matches your link color */}
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    {/* "RG" in black for strong contrast */}
    <text
      x="12"
      y="13.5"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="8"
      fontWeight="700"
      fill="#000000"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    >
      RG
    </text>
  </svg>
);

export default function Sidebar() {
  const pathname = normalize(usePathname() || "/");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    const target = normalize(href);
    if (target === "/") return pathname === "/";
    return pathname === target || pathname.startsWith(`${target}/`);
  };

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <nav className="flex flex-col items-center gap-5 md:gap-6 text-[11px] md:text-xs tracking-[0.2em] leading-6 text-center">
      {NAV.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            onClick={onClick}
            className={`transition-colors ${
              active
                ? "text-yellow-400 font-semibold"
                : "text-gray-200/80 hover:text-yellow-400"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="md:hidden fixed inset-x-0 top-0 z-50 bg-black/90 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/70">
        <div className="mx-auto max-w-6xl px-4 py-1 flex items-center justify-between">
          <span className="text-[11px] tracking-[0.25em] text-gray-200/90">
            FABRIZIO FAGIOLO
          </span>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((s) => !s)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 hover:border-yellow-400/80 transition"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          } grid transition-[grid-template-rows] duration-300 ease-out`}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-4">
              <NavLinks onClick={() => setOpen(false)} />
              <div className="mt-4 flex justify-center">
                <SocialLinks
                  items={[
                    {
                      href: "https://scholar.google.com/citations?user=5etji7kAAAAJ&hl=en",
                      label: "Google Scholar",
                      icon: GraduationCap,
                    },
                    {
                      href: "https://www.researchgate.net/profile/Fabrizio-Fagiolo-3?ev=hdr_xprf",
                      label: "ResearchGate",
                      icon: ResearchGateIcon,
                    },
                    {
                      href: "https://github.com/F-a-b-r-i-z-i-o",
                      label: "Github",
                      icon: Github,
                    },
                    {
                      href:
                        "https://www.linkedin.com/in/fabrizio-fagiolo-49905a182/",
                      label: "LinkedIn",
                      icon: Linkedin,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:block bg-black/90 min-h-dvh md:sticky md:top-0 px-6 py-10">
        <div className="mx-auto w-full max-w-[260px] min-h-full grid grid-rows-[1fr_auto] justify-items-center">
          <div className="self-center">
            <NavLinks />
          </div>
          <div className="self-end w-full">
            <div className="mt-6 flex justify-center">
              <SocialLinks
                items={[
                  {
                    href:
                      "https://scholar.google.com/citations?user=5etji7kAAAAJ&hl=en",
                    label: "Google Scholar",
                    icon: GraduationCap,
                  },
                  {
                    href:
                      "https://www.researchgate.net/profile/Fabrizio-Fagiolo-3?ev=hdr_xprf",
                    label: "ResearchGate",
                    icon: ResearchGateIcon,
                  },
                  {
                    href: "https://github.com/F-a-b-r-i-z-i-o",
                    label: "Github",
                    icon: Github,
                  },
                  {
                    href:
                      "https://www.linkedin.com/in/fabrizio-fagiolo-49905a182/",
                    label: "LinkedIn",
                    icon: Linkedin,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
