"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  BookOpenCheck,
  LibraryBig,
  Handshake,
} from "lucide-react";

const partnershipPoints = [
  {
    title: "Curriculum-Aligned Publishing",
    description:
      "Support academic programmes with carefully developed publications aligned to teaching goals, learning outcomes, and institutional standards.",
    icon: BookOpenCheck,
  },
  {
    title: "Custom Editions for Institutions",
    description:
      "Create institution-specific editions, tailored learning materials, and specialised academic collections for unique curriculum needs.",
    icon: Building2,
  },
  {
    title: "Bulk Access & Distribution",
    description:
      "Enable wider access through scalable print distribution, digital reach, and organised academic delivery for student communities.",
    icon: LibraryBig,
  },
  {
    title: "Long-Term Academic Collaboration",
    description:
      "Build lasting partnerships that support faculty, strengthen learning ecosystems, and expand educational impact over time.",
    icon: Handshake,
  },
];

const stats = [
  { number: "85+", label: "institutional partners" },
  { number: "140+", label: "custom publishing projects" },
  { number: "320K+", label: "academic copies distributed" },
  { number: "22", label: "subject verticals covered" },
];

export default function InstitutionalPartnerships() {
  return (
    <section
      id="institutional-partnerships"
      className="relative overflow-hidden bg-[#f7f3eb] py-20 md:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-emerald-900/5 blur-3xl" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,70,61,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(201,153,71,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        {/* SECTION 1: INTRO */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#ddd2bf] bg-white/85 px-4 py-2 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#c99947]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f7d6b] sm:text-xs">
              Institutional Partnerships
            </p>
          </div>

          <h2 className="mt-6 font-serif text-[2.4rem] leading-[1.02] tracking-[-0.04em] text-[#1f2937] sm:text-5xl md:text-6xl">
            Academic partnerships
            <span className="mt-2 block text-[#24463d]">
              built for scale and impact
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-[#55616d] md:text-[17px]">
            We work with schools, colleges, universities, libraries, and
            academic organisations to deliver premium publishing solutions that
            strengthen curriculum delivery, improve access, and support better
            learning outcomes for students and institutions.
          </p>
        </div>

        {/* SECTION 2: WHO THIS IS FOR */}
        <div className="mt-16 md:mt-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
                Built for academic ecosystems
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#e7dece] bg-white/90 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef6f3]">
                    <GraduationCap className="h-5 w-5 text-[#2f7d6b]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6b1f]">
                      For Students
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#55616d]">
                      Expand access to high-quality academic content that
                      supports study continuity and stronger learning outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[#e7dece] bg-white/90 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef6f3]">
                    <Building2 className="h-5 w-5 text-[#2f7d6b]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6b1f]">
                      For Institutions
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#55616d]">
                      Flexible publishing models for curriculum needs, faculty
                      support, library systems, and broader academic delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: PARTNERSHIP MODELS */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 text-center md:mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
              Partnership models
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-[#24313d] md:text-4xl">
              Flexible publishing support for modern academic needs
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#66707b]">
              Explore the core ways we help institutions strengthen academic
              delivery, improve access, and build long-term learning value.
            </p>
          </div>

          <div className="mx-auto mb-5 flex max-w-5xl items-center justify-between rounded-2xl border border-[#e3d8c5] bg-white/80 px-4 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.04)] backdrop-blur-sm sm:px-5 lg:hidden">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9a6b1f]">
                Explore Partnerships
              </p>
              <p className="mt-1 text-sm leading-6 text-[#55616d]">
                Tap any card below to discover partnership opportunities.
              </p>
            </div>
            <span className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef6f3] text-[#2f7d6b]">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {partnershipPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={index}
                  className="group rounded-[1.8rem] border border-[#e9dfcf] bg-white/95 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8f3e8]">
                      <Icon
                        className="h-7 w-7 text-[#c98d2c]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9ecdf] bg-[#eef6f3] text-[#2f7d6b] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>

                  <h4 className="mt-6 font-serif text-2xl leading-snug text-[#24313d]">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-[15px] leading-7 text-[#66707b]">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <button className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.16em] text-[#c78c28] transition group-hover:text-[#a87115]">
                      View Details
                    </button>

                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7b8794] sm:hidden">
                      Tap
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: VISUAL TRUST + CTA */}
        <div className="mt-16 md:mt-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
            <div className="order-2 lg:order-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
                Strategic collaboration
              </p>

              <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1f2937] md:text-4xl">
                Built to support both student learning and institutional growth
              </h3>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#66707b]">
                From tailored academic titles to large-scale institutional
                delivery, our partnerships are designed to support faculty,
                strengthen access, and create long-term value across academic
                ecosystems.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#eef6f3] px-3 py-1 text-xs font-medium text-[#2f7d6b]">
                  Custom Editions
                </span>
                <span className="rounded-full bg-[#fff7ea] px-3 py-1 text-xs font-medium text-[#b07b24]">
                  Bulk Access
                </span>
                <span className="rounded-full bg-[#f3f4f6] px-3 py-1 text-xs font-medium text-[#475569]">
                  Faculty Support
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-full bg-[#2f7d6b] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(47,125,107,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#256757]">
                  Partner With Us
                </button>

                <button className="rounded-full border border-[#d8c9ab] bg-white/90 px-7 py-3.5 text-sm font-semibold text-[#334155] transition duration-300 hover:border-[#c1943e] hover:bg-white">
                  View Partnership Models
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[620px]">
                <div className="relative overflow-hidden rounded-[2rem] border border-[#eadfcb] bg-white p-3 shadow-[0_26px_70px_rgba(15,23,42,0.10)]">
                  <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] sm:h-[400px] md:h-[470px]">
                    <Image
                      src="/partner.png"
                      alt="Institutional partnership meeting"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.35),transparent_45%)]" />

                    <div className="absolute left-5 top-5">
                      <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                        Strategic Collaboration
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-2 -top-5 hidden sm:block">
                  <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-3 w-3 rounded-full bg-[#d7a13f]/90"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: STATS / PROOF */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
              Partnership at a glance
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#e7dcc8] bg-[#f0e2b9] px-6 py-12 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:px-10">
            <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_left,#d8b869_0,transparent_30%),radial-gradient(circle_at_right,#d8b869_0,transparent_28%)]" />

            <div className="relative grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[1.4rem] border border-white/30 bg-white/20 px-5 py-6 text-center backdrop-blur-sm"
                >
                  <p className="font-serif text-5xl text-[#34414d] md:text-6xl">
                    {item.number}
                  </p>
                  <p className="mt-3 text-base text-[#4b5563]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}