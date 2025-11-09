import Link from "next/link";
import Image from "next/image";

const GITHUB_USER = "F-a-b-r-i-z-i-o";
const AVATAR_URL = "/photo/avatar.png";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  owner: { avatar_url: string; login: string };
};

type ProjectConfig = {
  id: number;
  owner: string;
  repo: string;
  description: string | null;
  fallbackStars?: number;
  fallbackLanguage?: string | null;
};

const PROJECTS_CONFIG: ProjectConfig[] = [
  {
    id: 1,
    owner: GITHUB_USER,
    repo: "Ant_Colony_Optimization_for_Evrptw",
    description: "EVRPTW resolution with Ant Colony Optimization",
    fallbackStars: 16,
    fallbackLanguage: "Python",
  },
  {
    id: 2,
    owner: GITHUB_USER,
    repo: "maze-game",
    description:
      "Q-learning project where an agent learns by himself to find the exit inside a maze. The project is implemented as a level-based game.",
    fallbackStars: 6,
    fallbackLanguage: "Python",
  },
  {
    id: 3,
    owner: GITHUB_USER,
    repo: "Parallel-SA-For-Sudoku-Solving",
    description: "Sudoku Solver Using Parallel Simulated Annealing",
    fallbackStars: 6,
    fallbackLanguage: "Python",
  },
  {
    id: 4,
    owner: "Typing-Monkeys",
    repo: "complex-network-link-prediction",
    description: "A python library for link prediction in social networks",
    fallbackStars: 36,
    fallbackLanguage: "Python",
  },
  {
    id: 5,
    owner: GITHUB_USER,
    repo: "MyUber",
    description: "Uber-App",
    fallbackStars: 4,
    fallbackLanguage: "Javascript",
  },
  {
    id: 6,
    owner: GITHUB_USER,
    repo: "VQE-PFSP",
    description: "Variational Quantum Algorithm for Permutation Flow Shop Scheduling",
    fallbackStars: 1,
    fallbackLanguage: "Python",
  },
];

async function fetchRepo(project: ProjectConfig): Promise<Repo> {
  const url = `https://api.github.com/repos/${project.owner}/${project.repo}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
    });

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status}`);
    }

    const data = await res.json();

    return {
      id: data.id ?? project.id,
      name: data.name ?? project.repo,
      html_url: data.html_url ?? `https://github.com/${project.owner}/${project.repo}`,
      description: project.description ?? data.description ?? null,
      stargazers_count:
        typeof data.stargazers_count === "number"
          ? data.stargazers_count
          : project.fallbackStars ?? 0,
      language: data.language ?? project.fallbackLanguage ?? null,
      owner: {
        avatar_url: AVATAR_URL,
        login: GITHUB_USER,
      },
    };
  } catch {
    // Fallback if API fails 
    return {
      id: project.id,
      name: project.repo,
      html_url: `https://github.com/${project.owner}/${project.repo}`,
      description: project.description,
      stargazers_count: project.fallbackStars ?? 0,
      language: project.fallbackLanguage ?? null,
      owner: {
        avatar_url: AVATAR_URL,
        login: GITHUB_USER,
      },
    };
  }
}

async function getProjects(): Promise<Repo[]> {
  return Promise.all(PROJECTS_CONFIG.map(fetchRepo));
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-neutral-700/60 bg-neutral-800/60 px-2.5 py-1 text-[10px] md:text-xs text-neutral-300">
      {children}
    </span>
  );
}

function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <article className="group relative flex flex-col rounded-2xl bg-neutral-900/80 ring-1 ring-neutral-800/80 shadow-[0_10px_30px_rgba(0,0,0,.35)] p-5 md:p-6 lg:p-7 transition-transform duration-200 hover:-translate-y-0.5 hover:ring-yellow-500/40 hover:shadow-[0_16px_40px_rgba(0,0,0,.45)]">
      <div className="flex items-start gap-3">
        <div className="shrink-0">
          <Image
            alt={`${GITHUB_USER} avatar`}
            src={AVATAR_URL}
            width={48}
            height={48}
            sizes="(min-width: 768px) 48px, 40px"
            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover ring-2 ring-black/30"
            loading="lazy"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-base md:text-lg font-semibold tracking-tight text-neutral-100 truncate">
            {repo.name}
          </h3>
          <p className="text-[11px] md:text-xs text-neutral-400">{repo.owner.login}</p>
        </div>
      </div>

      <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-neutral-200/95 line-clamp-4">
        {repo.description || "No description provided."}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {repo.language && <Badge>{repo.language}</Badge>}
        <Badge>
          <span aria-hidden>★</span> {repo.stargazers_count}
        </Badge>
      </div>

      <div className="mt-5 flex items-center justify-between pt-4 border-t border-neutral-800/70">
        <Link
          href={repo.html_url}
          target="_blank"
          aria-label={`Open ${repo.name} on GitHub`}
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-700/70 bg-neutral-900 px-3.5 py-2 text-xs md:text-sm text-neutral-200 hover:border-yellow-400 hover:text-yellow-400 transition-colors"
        >
          View on GitHub
        </Link>

        <div className="text-[10px] md:text-[11px] text-neutral-400">
          {repo.language || "Markdown"}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-px rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(180deg, rgba(234,179,8,0.08), rgba(234,179,8,0))",
        }}
      />
    </article>
  );
}

export default async function ProjectsSection() {
  const repos = await getProjects();

  return (
    <section id="projects" className="bg-neutral-950 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12">
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
            PROJECTS
          </h2>
        </header>

        <div
          className="mt-10 md:mt-14 grid gap-6 md:gap-8"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          }}
        >
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
}
