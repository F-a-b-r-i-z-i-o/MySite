import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type Item = { href: string; label: string; icon: LucideIcon };

export default function SocialLinks({ items }: { items: Item[] }) {
  return (
    <div className="flex items-center gap-3">
      {items.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          aria-label={label}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 hover:border-yellow-400 transition"
        >
          <Icon className="h-4 w-4 opacity-90" />
        </Link>
      ))}
    </div>
  );
}