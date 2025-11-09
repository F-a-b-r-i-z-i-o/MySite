// __tests__/Sidebar.test.tsx
import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, beforeEach, expect, vi } from 'vitest';
import Sidebar from '../components/layout/Sidebar'; // <- aggiorna se necessario

vi.mock('next/link', () => {
  const Link = (props: any) => {
    const { href, children, ...rest } = props;
    return (
      <a href={typeof href === 'string' ? href : '#'} {...rest}>
        {children}
      </a>
    );
  };
  return { __esModule: true, default: Link };
});

vi.mock('lucide-react', () => {
  const Icon = (p: React.SVGProps<SVGSVGElement>) => <svg data-testid="icon" {...p} />;
  return {
    __esModule: true,
    Github: Icon,
    Linkedin: Icon,
    Twitter: Icon,
    GraduationCap: Icon,
    Menu: Icon,
    X: Icon,
  };
});

vi.mock('../ui/SocialLinks', () => {
  const Social = ({ items }: { items: Array<{ href: string; label: string }> }) => (
    <div data-testid="social-links">
      {items.map((i) => (
        <a key={i.label} href={i.href} aria-label={i.label}>
          {i.label}
        </a>
      ))}
    </div>
  );
  return { __esModule: true, default: Social };
});

const usePathnameMock = vi.fn<() => string>();
vi.mock('next/navigation', () => ({
  usePathname: () => usePathnameMock(),
}));


