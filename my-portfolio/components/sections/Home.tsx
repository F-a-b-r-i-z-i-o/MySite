export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh)] items-center justify-center px-6"
    >
      <div className="text-center">
        <p className="text-sm tracking-widest text-gray-300/80">Hello I’m</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">
          Fabrizio Fagiolo
        </h1>
        <p className="mt-3 text-sm md:text-base text-gray-300/80">
          I’m a research fellow at University of Perugia
        </p>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_60%_40%,rgba(255,255,255,0.04),transparent)]"
      />
    </section>
  );
}
