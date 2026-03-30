"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] py-20 md:py-28 lg:py-32">
      {/* Background textures */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,83,45,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(180,120,40,0.08),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#1f5c4d]/70" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f5c4d] sm:text-xs">
                Academic Books
              </p>
            </div>

            <h1 className="font-serif text-[2.9rem] leading-[0.95] tracking-[-0.03em] text-[#1f2937] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Scholarly books
              <span className="block text-[#24463d]">for deeper</span>
              <span className="block">learning and research.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#5f6874] md:text-lg">
              Explore a refined catalogue of academic books designed for
              students, educators, and institutions — from core textbooks and
              reference volumes to subject-specific publications that support
              serious study and long-term academic growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-full bg-[#24463d] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(36,70,61,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d3932]">
                Browse Academic Books
              </button>

              <button className="inline-flex items-center justify-center rounded-full border border-[#d7c8ab] bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#334155] backdrop-blur transition duration-300 hover:border-[#b99456] hover:bg-white">
                View Catalogues
              </button>
            </div>

            {/* Premium metrics */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-[#66707b]">
              <div>
                <p className="font-serif text-2xl text-[#1f2937]">500+</p>
                <p className="mt-1">Academic titles</p>
              </div>

              <div className="h-10 w-px bg-[#d9d0c2]" />

              <div>
                <p className="font-serif text-2xl text-[#1f2937]">45+</p>
                <p className="mt-1">Subject categories</p>
              </div>

              <div className="h-10 w-px bg-[#d9d0c2]" />

              <div>
                <p className="font-serif text-2xl text-[#1f2937]">120+</p>
                <p className="mt-1">Institutional adoptions</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mt-8 flex justify-center lg:mt-0 lg:justify-end">
            <div className="relative h-[500px] w-full max-w-[570px] sm:h-[580px]">
              {/* Main large visual */}
              <div className="absolute right-0 top-0 h-[78%] w-[72%] rounded-[2rem] border border-white/60 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/hero-main.jpg"
                    alt="Academic books and higher education learning"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Secondary stacked image */}
              <div className="absolute bottom-12 left-0 h-[42%] w-[40%] rounded-[1.5rem] border border-white/70 bg-white p-2.5 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.1rem]">
                  <Image
                    src="/hero-secondary.jpg"
                    alt="Open academic textbook and notes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating book detail card */}
              <div className="absolute bottom-0 left-[28%] w-[56%] rounded-[1.5rem] border border-[#e8dcc8] bg-[#fcfaf6]/95 p-5 shadow-[0_18px_50px_rgba(40,40,40,0.08)] backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
                  Featured Collection
                </p>
                <h3 className="mt-2 font-serif text-xl leading-snug text-[#1f2937]">
                  University-ready titles across core disciplines
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#66707b]">
                  Carefully published books for science, humanities, commerce,
                  education, and professional studies.
                </p>
              </div>

              {/* Decorative dots */}
              <div className="absolute bottom-24 right-6 grid grid-cols-5 gap-2 opacity-90">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-3 w-3 rounded-full bg-[#d7a13f]"
                  />
                ))}
              </div>

              {/* Soft glows */}
              <div className="absolute -z-10 right-10 top-10 h-64 w-64 rounded-full bg-[#24463d]/10 blur-3xl" />
              <div className="absolute -z-10 bottom-10 left-10 h-40 w-40 rounded-full bg-[#d7a13f]/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}