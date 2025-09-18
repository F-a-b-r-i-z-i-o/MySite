import Link from "next/link";

type Pub = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  summary: string;
  pdf?: string;
  doi?: string;
  code?: string;
  badge?: string;
};

const PUBS: Pub[] = [
  {
    title: "Freeze and Conquer: Reusable Ansatz for Solving the Traveling Salesman Problem",
    authors: "Fabrizio Fagiolo, Nicolò Vescera",
    venue: "arXiv",
    year: 2025,
    summary:
      "The paper proposes a variational algorithm for the Traveling Salesman Problem (TSP) that uses a compact permutation encoding to reduce qubit requirements and an optimize-freeze-reuse strategy: an Ansatz is optimized once on a training instance (via Simulated Annealing), then frozen and reused on new instances with only parameter re-optimization. This avoids repeated structural searches, making the method practical for NISQ devices.",
    doi: "https://arxiv.org/abs/2508.21730",
    badge: "Preprint"
  },
  {
    title: "A Variational Quantum Algorithm for the Permutation Flow Shop Scheduling Problem",
    authors: "Marco Baioletti, Fabrizio Fagiolo, Angelo Oddi, Riccardo Rasconi",
    venue: "GECCO '25",
    year: 2025,
    summary:
      "A Variational Quantum Algorithm (VQA) for the Permutation Flow Shop Scheduling Problem (PFSSP), addressing the challenge of encoding its complex objective function and high qubit requirements. By adopting a variational approach, the method represents solutions with a reduced number of qubits and computes the objective function without explicitly constructing a Hamiltonian. Implemented and tested on a simulator, the algorithm shows promising potential for application on real quantum hardware.",
    doi: "https://dl.acm.org/doi/abs/10.1145/3712255.3734312",
    badge: "Workshop"
  },
  {
    title: "Quantum Artificial Intelligence: Some Strategies and Perspectives",
    authors: "Marco Baioletti, Fabrizio Fagiolo, Corrado Loglisci, Vito Nicola Losavio, Angelo Oddi, Riccardo Rasconi, Pier Luigi Gentili",
    venue: "Artificial Intelligence",
    year: 2025,
    summary:
      "This work explores the potential of Quantum Artificial Intelligence (QAI), arising from the synergy between Artificial Intelligence (AI) and Quantum Computing (QC). It highlights how QC can provide novel materials and algorithms to enhance AI particularly in optimization and machine learning while AI can help address experimental challenges in QC. The paper discusses these reciprocal benefits and outlines future perspectives for the development of QAI in tackling complex global challenges.",
    doi: "https://www.mdpi.com/2673-2688/6/8/175",
    badge: "Journal"
  },
  {
    title: "Ansatz Optimization using Simulated Annealing in Variational Quantum Algorithms for the Traveling Salesman Problem",
    authors: "Fabrizio Fagiolo, Nicolò Vescera",
    venue: "International Conference on Quantum Artificial Intelligence",
    year: 2025,
    summary:
      "This work introduces a Variational Quantum Algorithm (VQA) for the Traveling Salesman Problem (TSP) that requires only O(log n) qubits. The Ansatz topology is not fixed but evolves through Simulated Annealing, which dynamically adds, removes, or rearranges rotation and entanglement gates to balance exploration and exploitation.",
    doi: "https://www.mdpi.com/2673-2688/6/8/175",
    badge: "Conference"
  }
];

function PubCard({ p }: { p: Pub }) {
  return (
    <article className="group rounded-xl bg-neutral-900/80 ring-1 ring-neutral-800 shadow-[0_0_0_1px_rgba(0,0,0,.2)] p-5 md:p-6 hover:ring-yellow-500/40 transition">
      {/* Title */}
      <h4 className="text-base md:text-lg font-bold text-neutral-100 group-hover:text-yellow-100/90 transition-colors">
        {p.title}
      </h4>

      {/* Meta */}
      <div className="mt-2 text-xs md:text-sm text-neutral-400">
        <span className="font-semibold text-neutral-300">{p.authors}</span>
        <span className="mx-2">•</span>
        <span>{p.venue}</span>
        <span className="mx-2">•</span>
        <span className="text-neutral-300">{p.year}</span>
        {p.badge && (
          <span className="ml-2 rounded-full border border-yellow-400/60 px-2 py-0.5 text-[10px] md:text-xs text-yellow-400 bg-yellow-400/5">
            {p.badge}
          </span>
        )}
      </div>

      {/* Summary */}
      <p className="mt-3 text-sm md:text-base leading-relaxed text-neutral-300">
        {p.summary}
      </p>

      {/* Actions */}
      <div className="mt-4 flex flex-wrap gap-3">
        {p.pdf && (
          <a
            href={p.pdf}
            download
            className="inline-flex items-center gap-2 rounded-md bg-yellow-400 px-3 py-2 text-black text-sm font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:ring-offset-0 transition"
          >
            {/* Simple file icon */}
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            PDF
          </a>
        )}
        {p.doi && (
          <Link
            href={p.doi}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-md border border-yellow-500/60 px-3 py-2 text-yellow-400 text-xs md:text-sm font-semibold hover:border-yellow-400 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:ring-offset-0 transition"
          >
            {/* External link icon */}
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/><path d="M5 5h7v2H7v10h10v-5h2v7H5z"/></svg>
            DOI
          </Link>
        )}
        {p.code && (
          <Link
            href={p.code}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-3 py-2 text-neutral-200 text-xs md:text-sm hover:border-neutral-500 hover:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-600/50 focus:ring-offset-0 transition"
          >
            {/* Code icon */}
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M8.59 16.59 4 12l4.59-4.59L10 8.83 6.83 12 10 15.17zM15.41 7.41 20 12l-4.59 4.59L14 15.17 17.17 12 14 8.83z"/></svg>
            Code
          </Link>
        )}
      </div>
    </article>
  );
}

export default function PublicationsPage() {
  return (
    <section className="bg-neutral-950 text-neutral-100 min-h-svh">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
            PUBLICATIONS
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-neutral-300">
            A selection of published articles. Each card includes a link to the PDF file to download the article.
          </p>
        </header>

        {/* Grid of cards */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PUBS.map((p) => (
            <PubCard p={p} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
