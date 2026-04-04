"use client";

import Image from "next/image";
import { ArrowUpRight, BookOpen, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="academic-books"
      className="relative overflow-hidden bg-[#f8f4ec] py-20 md:py-28 lg:py-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,78,99,0.07),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(180,120,40,0.08),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:78px_78px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.38),transparent_28%,transparent_72%,rgba(255,255,255,0.2))]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[#d8ccb8] bg-white/80 px-4 py-2 backdrop-blur-sm shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8b6a2b]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#24463d] sm:text-xs">
                Academic Books
              </p>
            </div>

            {/* Main message */}
            <h1 className="mt-6 font-serif text-[2.85rem] leading-[0.94] tracking-[-0.045em] text-[#16202b] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Trusted academic books
              <span className="mt-2 block text-[#24463d]">
                for students, faculty,
              </span>
              <span className="block text-[#16202b]">and institutions.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#4f5a67] md:text-lg">
              Build stronger learning foundations with carefully published
              academic titles designed for classroom teaching, independent
              study, university libraries, and institutional programmes across
              disciplines.
            </p>

            {/* Mobile/tablet support hint */}
            <div className="mt-6 rounded-[1.3rem] border border-[#e6dac7] bg-white/80 p-4 shadow-sm backdrop-blur-sm lg:hidden">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9a6b1f]">
                Explore the collection
              </p>
              <p className="mt-2 text-sm leading-6 text-[#56616d]">
                Browse titles, request the catalogue, and explore curriculum-ready
                academic collections below.
              </p>
            </div>

            {/* Audience clarity */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.45rem] border border-[#e4d8c6] bg-white/88 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f7f1e7]">
                    <BookOpen className="h-5 w-5 text-[#9a6b1f]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6b1f]">
                      For Students
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#56616d]">
                      Clear, structured, and curriculum-aligned books that support
                      exam preparation, concept clarity, and academic growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.45rem] border border-[#e4d8c6] bg-white/88 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eef6f3]">
                    <Building2 className="h-5 w-5 text-[#24463d]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6b1f]">
                      For Institutions
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#56616d]">
                      Reliable collections for universities, colleges, faculty
                      teams, libraries, and academic partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#24463d] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(36,70,61,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d3932]">
                Explore Academic Titles
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <button className="inline-flex items-center justify-center rounded-full border border-[#d7c8ab] bg-white/92 px-7 py-3.5 text-sm font-semibold text-[#334155] backdrop-blur transition duration-300 hover:border-[#b99456] hover:bg-white">
                Request Institutional Catalogue
              </button>
            </div>

            {/* Proof */}
            <div className="mt-12 rounded-[1.8rem] border border-[#e7dccb] bg-white/76 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.05)] backdrop-blur-sm md:p-6">
              <div className="mb-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9a6b1f]">
                  Academic collection at a glance
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div className="rounded-[1.1rem] bg-[#fcfaf6] p-4">
                  <p className="font-serif text-3xl text-[#1b2430]">800+</p>
                  <p className="mt-1 text-sm leading-6 text-[#5f6874]">
                    Academic titles
                  </p>
                </div>

                <div className="rounded-[1.1rem] bg-[#fcfaf6] p-4">
                  <p className="font-serif text-3xl text-[#1b2430]">60+</p>
                  <p className="mt-1 text-sm leading-6 text-[#5f6874]">
                    Subject disciplines
                  </p>
                </div>

                <div className="rounded-[1.1rem] bg-[#fcfaf6] p-4">
                  <p className="font-serif text-3xl text-[#1b2430]">150+</p>
                  <p className="mt-1 text-sm leading-6 text-[#5f6874]">
                    Institutional partners
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px]">
              {/* top label */}
              <div className="mb-5 flex justify-start sm:justify-end">
                <div className="rounded-2xl border border-[#e8dcc8] bg-white/92 px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-md">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9a6b1f]">
                    Higher Education Focus
                  </p>
                  <p className="mt-1 text-sm text-[#2f3b47]">
                    Built for universities, colleges, and learners
                  </p>
                </div>
              </div>

              <div className="relative h-[560px] sm:h-[620px]">
                {/* Main image */}
                <div className="absolute right-0 top-0 h-[74%] w-[74%] rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/Image1.png"
                      alt="Students and institutions using academic books"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.26),rgba(15,23,42,0.08),transparent_48%)]" />
                  </div>
                </div>

                {/* Secondary image */}
                <div className="absolute bottom-24 left-0 h-[38%] w-[42%] rounded-[1.6rem] border border-white/80 bg-white p-2.5 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.2rem]">
                    <Image
                      src="/Image2.png"
                      alt="Academic learning materials and university study resources"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.16),transparent_55%)]" />
                  </div>
                </div>

                {/* Main support card */}
                <div className="absolute bottom-0 right-0 w-[74%] rounded-[1.6rem] border border-[#e8dcc8] bg-[#fffdf9]/96 p-5 shadow-[0_18px_50px_rgba(40,40,40,0.08)] backdrop-blur-md sm:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
                    Institutional Collection
                  </p>
                  <h3 className="mt-2 font-serif text-xl leading-snug text-[#1b2430] sm:text-2xl">
                    Curriculum-ready books across major academic disciplines
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5f6874]">
                    From foundational textbooks to advanced reference works for
                    higher education, faculty support, and library acquisition.
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#24463d]">
                    <span className="h-2 w-2 rounded-full bg-[#2f7d6b]" />
                    Tap or explore collection
                  </div>
                </div>

                {/* Decorative pattern */}
                <div className="absolute right-4 top-[18%] hidden md:grid grid-cols-5 gap-2 opacity-80">
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
      </div>
    </section>
  );
}