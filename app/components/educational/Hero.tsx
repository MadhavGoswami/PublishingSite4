"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="academic-books" className="relative overflow-hidden bg-[#f8f4ec] py-20 md:py-28 lg:py-32">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,78,99,0.07),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(180,120,40,0.08),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:78px_78px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35),transparent_28%,transparent_72%,rgba(255,255,255,0.18))]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d8ccb8] bg-white/70 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#8b6a2b]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#24463d] sm:text-xs">
                Academic Books
              </p>
            </div>

            <h1 className="font-serif text-[2.8rem] leading-[0.95] tracking-[-0.035em] text-[#1e293b] sm:text-5xl md:text-6xl lg:text-[4.6rem]">
              Trusted academic books
              <span className="block text-[#24463d]">for students, faculty,</span>
              <span className="block">and institutions.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#5f6874] md:text-lg">
              Build stronger learning foundations with carefully published
              academic titles designed for classroom teaching, independent
              study, university libraries, and institutional programmes across
              disciplines.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#e4d8c6] bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6b1f]">
                  For Students
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f6874]">
                  Clear, structured, and curriculum-aligned books that support
                  exam preparation, concept clarity, and academic growth.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e4d8c6] bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6b1f]">
                  For Institutions
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f6874]">
                  Reliable collections for universities, colleges, faculty
                  teams, libraries, and academic partnerships.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-full bg-[#24463d] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(36,70,61,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d3932]">
                Explore Academic Titles
              </button>

              <button className="inline-flex items-center justify-center rounded-full border border-[#d7c8ab] bg-white/85 px-7 py-3.5 text-sm font-semibold text-[#334155] backdrop-blur transition duration-300 hover:border-[#b99456] hover:bg-white">
                Request Institutional Catalogue
              </button>
            </div>

            {/* Metrics */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-[#66707b]">
              <div>
                <p className="font-serif text-2xl text-[#1f2937]">800+</p>
                <p className="mt-1">Academic titles</p>
              </div>

              <div className="h-10 w-px bg-[#d9d0c2]" />

              <div>
                <p className="font-serif text-2xl text-[#1f2937]">60+</p>
                <p className="mt-1">Subject disciplines</p>
              </div>

              <div className="h-10 w-px bg-[#d9d0c2]" />

              <div>
                <p className="font-serif text-2xl text-[#1f2937]">150+</p>
                <p className="mt-1">Institutional partners</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mt-8 flex justify-center lg:mt-0 lg:justify-end">
            <div className="relative h-[520px] w-full max-w-[580px] sm:h-[610px]">
              {/* Main image */}
              <div className="absolute right-0 top-0 h-[76%] w-[72%] rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/Image1.png"
                    alt="Students and institutions using academic books"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.18),transparent_45%)]" />
                </div>
              </div>

              {/* Secondary image */}
              <div className="absolute bottom-14 left-0 h-[40%] w-[41%] rounded-[1.6rem] border border-white/80 bg-white p-2.5 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.2rem]">
                  <Image
                    src="/Image2.png"
                    alt="Academic learning materials and university study resources"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating institution card */}
              <div className="absolute bottom-0 left-[26%] w-[60%] rounded-[1.6rem] border border-[#e8dcc8] bg-[#fffdf9]/95 p-5 shadow-[0_18px_50px_rgba(40,40,40,0.08)] backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
                  Institutional Collection
                </p>
                <h3 className="mt-2 font-serif text-xl leading-snug text-[#1f2937]">
                  Curriculum-ready books across major academic disciplines
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#66707b]">
                  From foundational textbooks to advanced reference works for
                  higher education, faculty support, and library acquisition.
                </p>
              </div>

              {/* Floating mini badge */}
              <div className="absolute left-[10%] top-[8%] rounded-2xl border border-[#e8dcc8] bg-white/90 px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-md">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9a6b1f]">
                  Higher Education Focus
                </p>
                <p className="mt-1 text-sm text-[#334155]">
                  Built for universities, colleges, and learners
                </p>
              </div>

              {/* Decorative pattern */}
              <div className="absolute bottom-24 right-4 grid grid-cols-5 gap-2 opacity-80">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-2.5 w-2.5 rounded-full bg-[#c89b47]"
                  />
                ))}
              </div>

              {/* Soft glows */}
              <div className="absolute -z-10 right-8 top-8 h-64 w-64 rounded-full bg-[#24463d]/10 blur-3xl" />
              <div className="absolute -z-10 bottom-10 left-10 h-44 w-44 rounded-full bg-[#d7a13f]/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}