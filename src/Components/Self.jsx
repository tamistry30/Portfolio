/**
 * @copyright 2025 Tejas Mistry
 * @license Apache-2.0
 */

import { ButtonPrimary, ButtonOutline } from "./Button";

const Self = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 lg:pt-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute right-[8%] top-[20%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container items-center lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* LEFT SIDE */}
        <div className="relative z-10">
          {/* Role tag */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-zinc-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-violet-500" />
            Data Engineer
          </div>

          {/* Headline */}
          <h2 className="headline-1 mb-6 max-w-[720px] leading-[1.08]">
            <span className="whitespace-nowrap">
              Turning complexity
            </span>

            <br />

            <span className="whitespace-nowrap bg-gradient-to-r from-sky-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              into clarity through
            </span>

            <br />

            <span className="whitespace-nowrap">
              Data, Cloud, and AI.
            </span>
          </h2>

          {/* Supporting copy */}
          <p className="mb-8 max-w-[650px] text-base leading-7 text-zinc-400 sm:text-lg">
            I build scalable data pipelines, analytics platforms, and
            AI-powered systems that turn raw data into reliable,
            real-world insights.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <ButtonPrimary
              label="Download Resume"
              icon="download"
              href="/RESUME.pdf"
            />

            <ButtonOutline
              href="#experience"
              label="View My Work"
              icon="arrow_forward"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative hidden lg:block">
          {/* Glow behind image */}
          <div className="absolute -inset-5 rounded-[70px] bg-gradient-to-br from-violet-600/25 via-blue-500/10 to-transparent blur-2xl" />

          {/* Decorative back card */}
          <div className="absolute left-6 top-[-16px] h-full w-full rounded-[60px] border border-violet-500/25 bg-violet-500/5" />

          {/* Image */}
          <figure className="relative ml-auto w-full max-w-[440px] overflow-hidden rounded-[60px] border border-zinc-700/40 shadow-2xl shadow-violet-950/30">
            <img
              src="/TEJAS_NYC.jpeg"
              width={656}
              height={800}
              alt="Tejas Mistry"
              className="h-full w-full object-cover"
            />

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-blue-500/5" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Self;
